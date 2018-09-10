---
layout: post
title: "From jQuery to Stimulus"
date: 2018-05-22T12:10:10+03:00

author: Chen Kinnrot
tags: ruby stimulus rails jquery
---

I tried to build an [SPA](https://en.wikipedia.org/wiki/Single-page_application) without a shiny client side framework, I wanted to build something fast with good user experience and keeping it as simple as possible.

I decided to take [rails](https://rubyonrails.org/), use [turbolinks](https://github.com/turbolinks/turbolinks) and a avoid javascript till its a must.

It didn't take more than a few hours and I found myself writing javascript. What I needed to do is simple, I had an input with number, and 2 buttons next to it, one to increase values by 1 and on to decrease it looked like this:

<button>-</button><span> 0</span><button>+</button>

jQuery to the rescue, I had a list of those buttons, so I needed to identify each one, so I added a data-id attr and used it to identify which input I need to update it looked like this:

{% highlight html %}
`
<button data-id="1" name="minus">-</button>
<input id="1" value="0" readonly="readonly">
<button data-id="1" name="plus">+</button>
`

{% endhighlight %}

{% highlight javascript %}

// number_componenet.js

    export default class NumberComponent {
  
      constructor() {
        $('button[name="plus"]').click(function (e) {
          e.preventDefault();
          var id = $(this).data('id');
          var input = $(id);
    
          const lastValue = +input.val();
          var num = lastValue + 1;
          if (num <= 20) {
            input.val(num);
          }      
        });
    
        $('button[name="minus"]').click(function (e) {
          e.preventDefault();
          var id = $(this).data('id');
          var input = $(id);
          const lastValue = +input.val();
          var num = lastValue - 1;
          if (num >= 0) {
            input.val(num);
          }      
        });
      }
    }

{% endhighlight %}

As You can see I added a bit of client side validation to make sure counter does not go below 0 and above 20.
Now All left to do is to initialize the `NumberComponent` when the page loads, so I added it to my packs (I'm using [webpacker](https://github.com/rails/webpacker)) and wrote:

{% highlight javascript %}
$(() => {
     new GameOrderComponent()
   });
{% endhighlight %}


And it works!.

but it's already a bit of a mess, I need to search for the relevant buttons, I don't know how it'll behave when 
content of page changes (turbolinks, other dynamic behavior etc.) I though to myslef, "it would be much easier to annotate the relevant html items to describe their behavior".
But I did not want to make the client super complex, I just want something that'll help me to model my code without all the hassle.

I did some research (very intensive googling) and found [Stimulus](https://github.com/stimulusjs/stimulus).
Its a library that decouples your javascript from the html like css decouple styling from html, which is pretty nice.

The concepts are pretty simple and familiar, you got: 

- Controller - to group a bunch of html elements in one context (numberController) 
- Target - to allow access dom element inside the controller (instead of jQuery selector) (input)
- Action - to respond to dom element event and act (button click)

That's all, simple huh?

This is how it looks

{% highlight html %}
`
<div data-controller="number">
  <button data-action="click->number#minusOne">-</button>
  <input data-target="number.input" value="0" readonly="readonly">
  <button data-action="click->number#plusOne">+</button>
</div>
`

{% endhighlight %} 

{% highlight javascript %}

// number_controller.js
import {Controller} from "stimulus"

export default class extends Controller {
  
  minusOne(event) {
    event.preventDefault()
    const lastValue = +this.input.value
    if (lastValue > 0) {
      this.input.value = +this.input.value - 1
    }    
  }

  plusOne(event) {
    event.preventDefault()
    const lastValue = +this.input.value
    if (lastValue < 20) {
      this.input.value = +this.input.value + 1
    }
  }

  get input() {
    return this.targets.find('input')
  }  
}
{% endhighlight %}

I didn't write less code but, 

- The code is more readable
- No need to initialize the controller, Stimulus take care of that.
- You get access to the actual html element, which keeps everything straightforward.
- No need to worry about dom changes, Stimulus take care of that.

I know that everyone thinks react angular and vue is the s*** but I think its good for large organizations where you have a separate front-end team and back-end team. 
When you build something new by yourself or with some friends, there is no good reason to start with client side rendering (unless you got a few million users on day one which is less likely)

There are also small companies with a team of full stackers, who might also consider this approach.

If you got a bit stimulated, you can read a small guide [here](https://stimulusjs.org/handbook/introduction)   

