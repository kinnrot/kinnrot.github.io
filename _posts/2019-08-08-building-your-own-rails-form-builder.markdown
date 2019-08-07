---
layout: post
title: "Building your own rails form builder"
date: 2019-08-07T00:00:00+03:00
author: Chen Kinnrot
tags: ruby rails form component
---

If you're building forms with rails, whether you're using a gem for it or working with pure rails forms, you should know this.

Rails uses form builder to allow you to call all the standard label/input/select methods, the exact class name is 
>ActionView::Helpers::FormBuilder

When calling 'form_for' you get a fresh instance of this FormBuilder which allows you to define your form elements.

Lets say you wanna add another reusable form element, for example a form section with title that uses your own custom style/classes.

To achieve that, you should extend the default form builder, just add a new class to your helpers folder lets call it 'MyFormBuilder' it looks like this

{% highlight ruby %}
`
class MyFormBuilder < ActionView::Helpers::FormBuilder
  
  def section(title, id = "section-#{SecureRandom.uuid}")
    @template.content_tag(:label, title, { class: 'form-label', id: id }) +
      @template.content_tag(:div) do
        yield if block_given?
      end +
      @template.content_tag('hr', '', { class: 'row-divider' })
  end
  
end
`

{% endhighlight %}

So we defined a form builder with a section method now we just need to tell rails, that when we write in our view
>form_for()...

to use our freshly coded MyFormBuilder

It's actually super simple ( but not so documented ), if you'll look at https://apidock.com/rails/ActionView/Helpers/FormHelper/form_for there's a section called 'Customized form builders' which explains what I just wrote

To make your new form builder the default builder so you won't have to specify it each time you write form_for you can do one of two options, add a new form_for method with a different name, or override existing form_for.

I prefer adding a new method, so on helpers/application_helper.rb I added the following code:

{% highlight ruby %}
`
module ApplicationHelper
  def my_form_for(name, *args, &block)
    options = args.extract_options!

    content_tag("div",
                form_for(name, *(args << options.merge(:builder => MyFormBuilder)), &block),
                :class => "core-form section"
    )
  end

  def my_fields_for(name, classes, *args, &block)
    options = args.extract_options!

    content_tag("div",
                fields_for(name, nil, *(args << options.merge(:builder => MyFormBuilder)), &block),
                :class => "core-form section #{classes}"
    )
  end
end
`
{% endhighlight %}
 

Which allows me to use the classic form_for, or my extended my_form_for, and also my_fields_for instead of fields_for when nesting inside existing form.

It's super useful when you got forms and wanna keep things DRY and managed, I use it to define a standard label with input with error rendering for example.  

Hope you like it, please share your thoughts.

