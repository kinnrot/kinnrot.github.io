---
layout: post
title: "Simulate Click on Google Geo Chart"
date: 2020-01-22T21:27:38+02:00
author: Chen Kinnrot 
tags: browser-automation testing capybara maps google-charts 
---

So I found out it's not so documented, hopefully google will index this.
I have a page on my  system that shows a google geo chart (same as [this](https://developers.google.com/chart/interactive/docs/gallery/geochart))
When clicking on a country on the map lot's of interesting things happens. And I wanted to implement a ui automation test to cover this use case.

It's not so easy cause even if you find the right svg path object and try clicking on it you get some interception errors.
So I googled a bit without any luck, but the geo chart documents came to the rescue.

The easiest way is to run some javascript:

{% highlight javascript %}
var yourChart = Chartkick.charts['counutries-map'].chart // Replace with code that gets your chart
google.visualization.events.trigger(yourChart, 'regionClick', { region:'US' });
{% endhighlight %}

This code triggers an event on the chart object that the United States region was clicked. super simple and easy
I'm using [capybara](http://teamcapybara.github.io/capybara/) and it looks like this:

{% highlight ruby %}
    page.evaluate_script(<<~JS)
        function(){
            var yourChart = Chartkick.charts['counutries-map'].chart // Replace with code that gets your chart
            google.visualization.events.trigger(yourChart, 'regionClick', { region:'US' });
        }()
      JS
{% endhighlight %}

It's just injecting a self executing function to the page.


 

