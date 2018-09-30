---
layout: post
title: "Android Lifecycle Aware Modal"
date: 2018-09-30T21:52:05+03:00
---

Sometimes we want to show the user an alert when somethings wrong or we just need to give some extra info,
For example; Ask the user if he is sure he wanna leave the app.

This can be achieved with the following code (runs inside activity):

{% highlight kotlin %}

AlertDialog.Builder(this)
  .setMessage("Are you sure you want to exit?")
  .setCancelable(false)
  .setPositiveButton("Yes", object:DialogInterface.OnClickListener() {
    fun onClick(dialog:DialogInterface, id:Int) {
      this@YourActivity.finish()
    }
  })
  .setNegativeButton("No", null)
  .show()
  
{% endhighlight %} 

This works fine, buy there is one annoying issue, If user clicks home button while dialog displayed, and go back to the app, the dialog will still be there.
Now your user experience is seeing a question about getting out of the app while he just went in.

To avoid this case, I found an easy solution by making my modal lifecycle aware, If your'e not sure whats lifecycle, consider read about it [here](https://developer.android.com/topic/libraries/architecture/lifecycle).

Every activity/fragment implements the LifecycleOwner interface so lets add the following method:
{% highlight kotlin %}
     private fun subscribeToLifecycleEvents(dialog: Dialog, lifecycleOwner: LifecycleOwner?, dismissHandler: (() -> Unit)? = null) {
         val lifecycleObserver = GenericLifecycleObserver { _, event ->
             if (event == Lifecycle.Event.ON_PAUSE && dialog.isShowing) {
                 dialog.dismiss()
                 dismissHandler?.invoke()
             }
         }
 
         lifecycleOwner?.apply { this.lifecycle.addObserver(lifecycleObserver) }
         dialog.setOnDismissListener { lifecycleOwner?.apply { this.lifecycle.removeObserver(lifecycleObserver) } }
     }
{% endhighlight %}

This method make every dialog lifecycle aware, meaning, if we add subscription to the dialog display:

{% highlight kotlin %}

  val dialog = AlertDialog.Builder(this)
  .setMessage("Are you sure you want to exit?")
  .setCancelable(false)
  .setPositiveButton("Yes", object:DialogInterface.OnClickListener() {
    fun onClick(dialog:DialogInterface, id:Int) {
      this@YourActivity.finish()
    }
  })
  .setNegativeButton("No", null)
  .show()
  
  subscribeToLifecycleEvents(dialog, this) // add subscription
  
{% endhighlight %}

Every time the

