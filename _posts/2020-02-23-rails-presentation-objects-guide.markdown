---
layout: post
title: "Rails Presentation Objects"
date: 2020-02-23T09:19:37+02:00
author: Chen Kinnrot 
tags: rails view-models presenter view view-context mvc
---

If you ever used any [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) framework, I'm sure you asked yourself more than once, 'Where should I put this piece of code?' (If not that's also fine).
Well, there is no one answer for all problems but, I asked it a lot.
 
In this post, I'm gonna focus about the view part.
 
View objects, AKA view models, but any other name is fine (presenter view object, view controller mediator, whatever).

Why do I need it?
----
Well, that's easy, I got a controller action, need to fetch some data from a few places, Data-base, cache, external API, session, and who knows. 
Next, I need to put this data on a view, the view can be in different formats: HTML, JSON, XML, PDF, whatever, it's the same data, presented in different formats. 
this data need to go through some manipulations to be more human friendly.                                                                                      
What I just described is 80% of apps (web, mobile, desktop) scenarios.
Assuming your model is not a [read model](http://www.cqrs.nu/tutorial/cs/03-read-models) you can't just fetch one model/list of models and put it on a view.
You'll probably have to do some table joins, filters, sorting and a bunch of other things.
So first recommendation is to create a query class for each query you need. The controller can call this query directly.
Next comes the data manipulation this is where the view model comes to the picture. The view model gets data and make it presentable, Why not putting this logic directly in view. cause views should be stupid as possible, they are not classes, they're hard to debug, so keep them as simple as possible.
And if you have multiple views for the same data, like API and a web view, You'll find yourself duplicating logic for each view.

There is an issue with directly passing query results to a view model, you are risking with N+1 query performance issues, 
cause if you pass an active record model to a view model and view model access a referenced object that wasn't pre fetched a DB query will run, If you got a list of 50 models,
each with 4 relations not pre-fetched, you got 200 extra queries for a single view, that's not good.

It's also considered a bad practice to have data queries in the view layer, but that's for another post.   

To solve this kind of issue you have a few possible solutions, 

1. Do not pass active record models to the view models, use [data transfer objects](https://en.wikipedia.org/wiki/Data_transfer_object), plain poro.

2. Do not pass active record models to the view models, use :attributes method, relation won't work, but not unexpected queries 

3. Make sure you prefetch everything the view needs, and pass the model directly to view model, !danger! if other developers work with you, and they don't know the consequences.

4. Use a zero relations read model for each view, query it, and send it as is to the view model.
 
 If you don't wanna implement something on you own, here are some gems that'll give you some structure and syntactic sugar:
 
 - [draper](https://github.com/drapergem/draper) - uses the decorator pattern to wrap active record models, allowing to add view specific methods on top of existing models.
 - [cells](https://github.com/trailblazer/cells) - component based approach to encapsulate view parts, and logic to classes.
 - [rom](https://rom-rb.org/) - full blown object mapper
 - [dry-view](https://dry-rb.org/gems/dry-view/0.7/) - A component based view framework 
 
 Personally, I choose to write my own PORO, to keep things as simple as possible, I try to pass data, not models, this way my view models layer is not bound to any data store structure.
 The query result goes to a view model factory class, that responsible for extracting the relevant data for the view model, and view gets rendered with the view model.
 
 Here is an example:
 
 View model -
 
{% highlight ruby %} 

    module ViewModels
     class GeoMap
       attr_reader :map_data
 
       def map_options
         {
           id: 'fans-map',
           width: '100%',
           height: '85%',
           label: 'Fans',
           min_value: 0,
           colors: %w[#e7f7f0 #19B26C]
         }
       end
 
       def initialize(map_data, view_context)
         @map_data = map_data
         @view_context = view_context
       end
 
       def max_fans
         @map_data.max_by { |_country, fans| fans }[1] if @map_data.present?
       end
 
       def max_fans_humanize
         @view_context.number_to_human(max_fans)
       end
 
       def mid_fans_humanize
         @view_context.number_to_human(max_fans / 2) if max_fans
       end
     end   
    end
{% endhighlight %}
 
  
 View  (Written in slim, using chartkick for the geo map) - 
{% highlight ruby %} 
     
     = geo_chart @geo_map.map_data, @geo_map.map_options
     
{% endhighlight %}

Controller - 

 {% highlight ruby %}
 
    # Map data came from a service object
    @geo_map = GeoMap.new(map_data, view_context)
    
 {% endhighlight %}
 
 
**Would love to hear from you, What's your favorite view objects strategy?**