---
layout: post
title: "Live Data Pitfall You Should Be Aware Of"
date: 2018-10-22T08:12:18+03:00
---


When working with `MutableLiveData` you can update the observable value in 2 ways:

1. `setValue`
2. `postValue`

Both will update the live data value as expected as long as your code is running from the main thread.

If you need to update a value from other thread you can use the `postValue` which is thread safe, and will make sure to notify observers on main thread.

This is all nice, but be aware!

{% highlight kotlin %}

val foo = MutableLiveData<Boolean>()

// this
foo.value = true
foo.value = false

// and that
foo.postValue(true)
foo.postValue(false)


{% endhighlight %} 

Both this and that sets the live data value to true and then to false, so you probably expect, if observing foo, you'll get your code to run twice,
once with true and once with false.

Well for the first section with `setValue` it works as expected.

For the second section with `postValue` you'll get a surprise, only second call triggers the observer, or is it?

The issue with post value is as follows:

Value is being set immediately in a synchronized code block for thread safety, 
but the observers notification is scheduled to execute on main thread via the event loop (with handler)
So whats happening is value changes to true and false but scheduling code occurs only once.

this is the implementation of `postValue`

{% highlight kotlin %}
protected void postValue(T value) {
   boolean postTask;
   synchronized (mDataLock) {
       postTask = mPendingData == NOT_SET;
       mPendingData = value;
   }
   if (!postTask) {
       return;
   }
   ArchTaskExecutor.getInstance().postToMainThread(mPostValueRunnable);
}
{% endhighlight %}

As you can `postTask` is a flag that say "do I need to schedule a runnable to notify my observers, or did I already do that?"
for the first call `postTask` is true, and for the second its false

postValue is good for ui progress reporting for example, cause ui updates only when main thread is available to perform screen updates.
It's not good when you count on getting notified for each change of the LiveDataValue.

as comment says:
>If you called this method multiple times before a main thread executed a posted task, only the last value would be dispatched.

So I recommend, by default, prefer using `setValue`, use postValue, only when:
1. you gonna post lots of changes (progress) and you don't need all of them only last value is relevant.
2. you not running on the main thread.
