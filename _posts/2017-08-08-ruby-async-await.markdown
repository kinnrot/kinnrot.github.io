---
layout: post
title: "Ruby async await"
date: 2017-08-08T18:12:46+03:00
author: Chen Kinnrot
tags: ruby async await
---

There is a lot of buzz about asyc await from the javascript world, the concept is very simple and make your code much more
readable.

You want to execute something without blocking the main thread but you want the next line of code to run once the non blocking code finish, meaning continue
code execution in its written order.

Ruby has a great [concurrency gem](https://github.com/ruby-concurrency/concurrent-ruby) which basically encapsulate low level threading and synchronization code
to common patterns like Future, Promise, Actor and much more.

I'd like to talk about concurrent-ruby async await feature, lets look at the following code.

{% highlight ruby %}
require 'concurrent'

class Reporter
  include Concurrent::Async

  def report(message, sleep_dur=1)
    sleep(sleep_dur)
    p "#{Thread.current.object_id}"
    p message
  end
end

{% endhighlight %}

The class Reporter knows to do 1 thing, report, it'll sleep and print it's thread id and a message
So if we'll open an irb and call
{% highlight ruby %}
?> r = Reporter.new
=> #<Reporter:0x007f86b19e1940 @__async_initialized__=true, @__async_delegator__=#<Concurrent::Async::AsyncDelegator:0x007f86b19e18a0 @__lock__=#<Thread::Mutex:0x007f86b19e1850>, @__condition__=#<Thread::ConditionVariable:0x007f86b19e1828>, @delegate=#<Reporter:0x007f86b19e1940 ...>, @queue=[], @executor=#<Concurrent::ThreadPoolExecutor:0x007f86b19e0e78 @__lock__=#<Thread::Mutex:0x007f86b19e0d88>, @__condition__=#<Thread::ConditionVariable:0x007f86b19e0d60>, @min_length=8, @max_length=2147483647, @idletime=60, @max_queue=0, @fallback_policy=:abort, @auto_terminate=true, @pool=[], @ready=[], @queue=[], @scheduled_task_count=0, @completed_task_count=0, @largest_length=0, @ruby_pid=59753, @gc_interval=30, @next_gc_time=694963.258667, @StopEvent=#<Concurrent::Event:0x007f86b19e0bd0 @__lock__=#<Thread::Mutex:0x007f86b19e0b80>, @__condition__=#<Thread::ConditionVariable:0x007f86b19e0b58>, @set=false, @iteration=0>, @StoppedEvent=#<Concurrent::Event:0x007f86b19e0ae0 @__lock__=#<Thread::Mutex:0x007f86b19e0a90>, @__condition__=#<Thread::ConditionVariable:0x007f86b19e0a68>, @set=false, @iteration=0>>>, @__await_delegator__=#<Concurrent::Async::AwaitDelegator:0x007f86b19e0a18 @delegate=#<Concurrent::Async::AsyncDelegator:0x007f86b19e18a0 @__lock__=#<Thread::Mutex:0x007f86b19e1850>, @__condition__=#<Thread::ConditionVariable:0x007f86b19e1828>, @delegate=#<Reporter:0x007f86b19e1940 ...>, @queue=[], @executor=#<Concurrent::ThreadPoolExecutor:0x007f86b19e0e78 @__lock__=#<Thread::Mutex:0x007f86b19e0d88>, @__condition__=#<Thread::ConditionVariable:0x007f86b19e0d60>, @min_length=8, @max_length=2147483647, @idletime=60, @max_queue=0, @fallback_policy=:abort, @auto_terminate=true, @pool=[], @ready=[], @queue=[], @scheduled_task_count=0, @completed_task_count=0, @largest_length=0, @ruby_pid=59753, @gc_interval=30, @next_gc_time=694963.258667, @StopEvent=#<Concurrent::Event:0x007f86b19e0bd0 @__lock__=#<Thread::Mutex:0x007f86b19e0b80>, @__condition__=#<Thread::ConditionVariable:0x007f86b19e0b58>, @set=false, @iteration=0>, @StoppedEvent=#<Concurrent::Event:0x007f86b19e0ae0 @__lock__=#<Thread::Mutex:0x007f86b19e0a90>, @__condition__=#<Thread::ConditionVariable:0x007f86b19e0a68>, @set=false, @iteration=0>>>>>
>> r.report('x')
"70108240336860"
"x"
{% endhighlight %}

And it'll take a sec till you see output because of the sleep.

Now lets try the same with async

{% highlight ruby %}
>> r.async.report('x')
=> #<Concurrent::IVar:0x007f86b087dfc8 @__lock__=#<Thread::Mutex:0x007f86b087df00>, @__condition__=#<Thread::ConditionVariable:0x007f86b087deb0>, @event=#<Concurrent::Event:0x007f86b087dde8 @__lock__=#<Thread::Mutex:0x007f86b087dca8>, @__condition__=#<Thread::ConditionVariable:0x007f86b087dc80>, @set=false, @iteration=0>, @reason=nil, @value=nil, @observers=#<Concurrent::Collection::CopyOnWriteObserverSet:0x007f86b087db90 @__lock__=#<Thread::Mutex:0x007f86b087db18>, @__condition__=#<Thread::ConditionVariable:0x007f86b087daf0>, @observers={}>, @dup_on_deref=nil, @freeze_on_deref=nil, @copy_on_deref=nil, @do_nothing_on_deref=true, @state=:pending>
"70108232018840"
"x"
{% endhighlight %}

As you can see the method returns immediately without printing any value, it just returns a promise like object that will hold the result of report method once done.
To prove you that report in non blocking try this

{% highlight ruby %}
>> r.async.report('x'); 1+1
=> 2
"70108231957940"
"x"
{% endhighlight %}

As you can see the 1+1 returns before the reporters output

Now lets try the await method

{% highlight ruby %}
>> r.await.report('x'); 1+1
"70339825139340"
"x"
=> 2

>> Thread.current.object_id
=> 70339824711620
{% endhighlight %}

This time code look like it run synchronously, but lets check the main thread id, as you can see the code run on
2 different threads but in sync. this is the actual power of await, sometimes we want to run something in a background thread,
and do something on another thread when done.

The purpose of the Concurrent::Async is to allow a class methods to be called in a synchronized
way, meaning the class will always be thread safe  as long as you call it via async or await.
What actually happens in the backstage is whenever you use async/await the method invocation is inserted into a queue that got one worker thread that keep
this queue empty. because its just one thread that invoke the methods, it is safe for many threads to use the same object.

Hope its clear enough,










