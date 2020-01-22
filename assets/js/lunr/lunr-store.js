var store = [{
        "title": "Hello World",
        "excerpt":"public class Chen {   public void SayHello()   {     Console.WriteLine(\"Hello everyone! this is my first blog post, its about time\");   } } ","categories": [],
        "tags": [],
        "url": "https://kinnrot.github.io/hello-world/",
        "teaser":null},{
        "title": "Unit Test PropertyChanged",
        "excerpt":"One of the basic stuff you wanna test as a client side developer, is that all of your UI bounded classes aka Controller, Model, ViewModel, Presenter, PresentationModel, or the code behind of your view if your just having fun. Let's assume we have a person class with a name property:...","categories": [],
        "tags": ["PropertyChanged","TDD","UnitTest"],
        "url": "https://kinnrot.github.io/unit-test-propertychanged/",
        "teaser":null},{
        "title": "WCF client side proxy memory leaks",
        "excerpt":"Today I ran into a guy who worked with me on my previous project. On that project I was responsible to rewrite the WCF channels (proxies) generation management and lifetime management of them. I decided to do some research and found some good stuff here. So this guy (aka Kurki)...","categories": [],
        "tags": ["memory leak","wcf"],
        "url": "https://kinnrot.github.io/wcf-client-side-proxy-memory-leaks/",
        "teaser":null},{
        "title": "For AMT Rx for .net",
        "excerpt":"Here&nbsp;is a good place to &nbsp;start with Rx for .net  And here&nbsp;you have the wiki with examples  Enjoy!","categories": [],
        "tags": [".net","Rx"],
        "url": "https://kinnrot.github.io/for-amt-rx-for-net/",
        "teaser":null},{
        "title": "Simple Rx Sample - UI Performance tuning",
        "excerpt":"The case I'm talking about is Binding with the UpdateSourceTrigger = PropertyChanged, and a heavy logic behind each change that can cause bad UX, like ui freeze on each key press in a text box. Here is a nice sample that demonstrate this case: I have a window with a...","categories": [],
        "tags": [],
        "url": "https://kinnrot.github.io/simple-rx-sample-ui-performance-tuning/",
        "teaser":null},{
        "title": "Simple abstraction and decoupling example",
        "excerpt":"Just code. We have a logger and a log viewer, could be better but I wanted it to be simple. This is the window that is also the log viewer /// &lt;summary&gt; /// Interaction logic for MainWindow.xaml /// &lt;/summary&gt; public partial class MainWindow : Window, ILogViewer { public MainWindow() {...","categories": [],
        "tags": [],
        "url": "https://kinnrot.github.io/simple-abstraction-and-decoupling/",
        "teaser":null},{
        "title": "Event Base WPF Navigation",
        "excerpt":"Hello, My Recent problem was: How can I implement minimal decoupling navigation between views? I thought about using the EventAggregator already built in my system and create some kind of event that represents a navigation request, so I&nbsp;created a NavigationRequestEvent that contains the view model I want to activate and...","categories": [],
        "tags": [],
        "url": "https://kinnrot.github.io/event-base-wpf-navigation/",
        "teaser":null},{
        "title": "Unit testing with mock framework and IEquatable<>",
        "excerpt":"This post is relevant for the one's who write tests, all you other programmers, you should learn unit testing and read it. One of the most&nbsp;useful tools in unit testing is a good mocking framework. (I'm currently using Moq, and before that I used rhino)&nbsp;&nbsp;We all know that for mocking...","categories": [],
        "tags": ["UnitTest","mock"],
        "url": "https://kinnrot.github.io/unit-testing-with-mock-framework-and/",
        "teaser":null},{
        "title": "Nice PHP IDE",
        "excerpt":"Recently a friend recommend me to check the PHP Storm IDE. I must say that its a&nbsp;grate&nbsp;IDE, almost same capabilities as IntelliJ, I'v never seen a PHP IDE with this refactoring and navigation features. So check it out. Thank you Gal Batat for the recommendation. Features and download is here...","categories": [],
        "tags": ["ide","php"],
        "url": "https://kinnrot.github.io/nice-php-ide/",
        "teaser":null},{
        "title": "Simple way to avoid hard coded strings in xaml",
        "excerpt":"Hard coded strings are annoying, In XAML, we have a lot of cases of hard coded strings. Here is a simple way of implementing static naming class, and use it instead of hard coded strings. Suppose this is my xaml: &lt;Window x:Class=\"How.MainWindow\" xmlns=\"http://schemas.microsoft.com/winfx/2006/xaml/presentation\" xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\" xmlns:local=\"clr-namespace:How\" Title=\"MainWindow\" Height=\"350\" Width=\"525\"&gt; &lt;Window.Resources&gt; &lt;Style...","categories": [],
        "tags": ["Styles","Resources","WPF"],
        "url": "https://kinnrot.github.io/simple-way-to-avoid-hard-coded-strings/",
        "teaser":null},{
        "title": "What do you think?",
        "excerpt":"About a year ago I asked the following question  This week I got one more answer and I wanna ask you guys what do you think is the best practice?","categories": [],
        "tags": ["mvvm","WPF"],
        "url": "https://kinnrot.github.io/what-do-you-think/",
        "teaser":null},{
        "title": "WPF Binding and Why you should write defensive code.",
        "excerpt":"I'm overriding equals and implementing IEquatable on some of my objects and bind them as an ObservableCollection to the UI. Here is a sample: (ugly code do not use) &lt;Window x:Class=\"BindingToItemsWithIEquality.MainWindow\" xmlns=\"http://schemas.microsoft.com/winfx/2006/xaml/presentation\" xmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\" xmlns:local=\"clr-namespace:BindingToItemsWithIEquality\" Title=\"MainWindow\" Height=\"350\" Width=\"525\" &gt; &lt;Window.DataContext&gt; &lt;local:SomeContextWithCollection/&gt; &lt;/Window.DataContext&gt; &lt;StackPanel&gt; &lt;ListBox DisplayMemberPath=\"Name\" ItemsSource=\"{Binding Items}\"/&gt; &lt;Button Click=\"Button_Click\"&gt;clear&lt;/Button&gt; &lt;/StackPanel&gt; &lt;/Window&gt;...","categories": [],
        "tags": ["Binding","IEquatable","WPF"],
        "url": "https://kinnrot.github.io/wpf-binding-and-why-you-should-write/",
        "teaser":null},{
        "title": "Building a business tier with Nhibernate - Tools",
        "excerpt":"I got a new task: Build Nhibernate based infrastructure, so I decided to check the existing third party tools and my boss gave me a day at home to check them &nbsp;;-D . &nbsp;I only check tools that: based on existing DB&nbsp;support oracle&nbsp;works with NH 3First tool I got my...","categories": [],
        "tags": ["Nhibernate","Fluent Nhibernate","Utilities"],
        "url": "https://kinnrot.github.io/building-business-tier-with-nhibernate/",
        "teaser":null},{
        "title": "Per DB Conventions With FluentNhibernate",
        "excerpt":"I need to support 2 db types on my app, so I thought about a nice pattern that will help me achieve this. // I'm working with latest Fluent Nhibernate version. Define a folder for each db type you want to support like this: contain conventions for MSSQLCE and the...","categories": [],
        "tags": [],
        "url": "https://kinnrot.github.io/per-db-conventions-with/",
        "teaser":null},{
        "title": "Prevent setting a property value after already been set",
        "excerpt":"Let's say we write an infrastructure of entities and their interaction with Nhibernate and the rest of the server side logic. We want Nhibernate to do whatever it needs. But we also want to limit the application programmer from doing crazy things, for example: Setting the Unique Identifier of an...","categories": [],
        "tags": ["Design","Nhibernate","C#"],
        "url": "https://kinnrot.github.io/preventing-from-setting-property-value/",
        "teaser":null},{
        "title": "IOC Container warning",
        "excerpt":"Think about a registered component that implement copy constructor.  You'll get a Stack Overflow Exception!  So avoid it.   ","categories": [],
        "tags": [],
        "url": "https://kinnrot.github.io/ioc-container-warning/",
        "teaser":null},{
        "title": "Passing complex type through WCF header,The simple always work version.",
        "excerpt":"Recently I tried to find a nice code sample for how to pass complex type through WCF, inside the header, meaning I want to send the client execution context to the server side. All of the samples passes strings or uses custom header that needs to write and read the...","categories": [],
        "tags": [],
        "url": "https://kinnrot.github.io/passing-complex-type-through-wcf/",
        "teaser":null},{
        "title": "TPLing Background worker in 10 min",
        "excerpt":"Code Snippetusing System;using System.Collections.Generic;using System.Linq;using System.Text;using System.Threading;using System.Threading.Tasks;&nbsp;namespace WpfApplication1{    public class TBackgroundWorker&lt;TResult, TProgress&gt;    {&nbsp;        public static TBackgroundWorker&lt;TResult, TProgress&gt; New()        {            return new TBackgroundWorker&lt;TResult, TProgress&gt;();        }&nbsp;        public TBackgroundWorker&lt;TResult, TProgress&gt; StartWith(Func&lt;object, CancellationToken, TResult&gt; work)        {            Start = work;            return this;        }&nbsp;        public TBackgroundWorker&lt;TResult, TProgress&gt; FinishWith(Action&lt;TResult,object&gt; finish)        {            Finish = finish;            return this;        }&nbsp;        private readonly CancellationTokenSource _cancelationTokenSource;        private CancellationToken _cancellationToken;        private readonly TaskScheduler _uiScheduler;&nbsp;&nbsp;        public TBackgroundWorker()        {            _cancelationTokenSource = new CancellationTokenSource();            _uiScheduler = TaskScheduler.FromCurrentSynchronizationContext();        }&nbsp;        protected Func&lt;object,...","categories": [],
        "tags": ["TPL","C#"],
        "url": "https://kinnrot.github.io/tpling-background-worker-in-10-min/",
        "teaser":null},{
        "title": "Dont return and linq on the same line",
        "excerpt":"Just a little tip for writing a friendlier code.If you're method returns an expression, first assign it to a variable and then return him.It'll be much easier to debug inside this method and fetch all results when watching this variable. That's it !","categories": [],
        "tags": ["linq"],
        "url": "https://kinnrot.github.io/dont-return-and-linq-on-same-line/",
        "teaser":null},{
        "title": "If you're searching for a good place to grow",
        "excerpt":"http://crossrider.com/pages/jobs I know this guys and worked with them a little, very recommended for any developer.   ","categories": [],
        "tags": ["job"],
        "url": "https://kinnrot.github.io/if-you-searching-for-good-place-to-grow/",
        "teaser":null},{
        "title": "Boolean parameters",
        "excerpt":"It's not fun to look at a method call that sends more than 0 boolean parameters. Code SnippetSetBinding(false, false, comboBox); There is 100%&nbsp;guarantee&nbsp;that you will look for the documentation about this parameters and it'll slow your code reading speed. Here is a nice way to avoid the unreadable code and...","categories": [],
        "tags": ["documentation"],
        "url": "https://kinnrot.github.io/boolean-parameters/",
        "teaser":null},{
        "title": "MVC Frameworks and dynamic languages",
        "excerpt":"Warning! just figure out a mistake that can happen to every other programmer, and even brogrammers. I defined a method on my model that has the same name as one of the field of the model, because I used a dynamic language (ruby on rails) it was pretty hard to...","categories": [],
        "tags": ["Ruby","Dynamic-languages"],
        "url": "https://kinnrot.github.io/mvc-frameworks-and-dynamic-languages/",
        "teaser":null},{
        "title": "Rubymine recommended font for windows",
        "excerpt":"Didn't find a lot about it on internet so:  File-&gt;Settings-&gt;Editor-&gt;colors &amp; fonts-&gt;Font &nbsp;first save as current schema than click the &nbsp;... button choose&nbsp;Consolas&nbsp;and set size to 14  looks much better!","categories": [],
        "tags": ["Rubymine"],
        "url": "https://kinnrot.github.io/rubymine-recommended-font-for-windows/",
        "teaser":null},{
        "title": "Startups: reshare very nice research",
        "excerpt":"The Startup Gamble [infographic] | Daily Infographic ","categories": [],
        "tags": ["startup"],
        "url": "https://kinnrot.github.io/startups-reshare-very-nice-research/",
        "teaser":null},{
        "title": "End of job check list",
        "excerpt":"I'm about to end my first gig(already end! yay I'm free!) as a programmer, and want to leave a clean desk. So here is a list of things I'm doing and suggest you all do before you move to your next gig: 1. Write about your major infrastructure developments on...","categories": [],
        "tags": ["pragmatic"],
        "url": "https://kinnrot.github.io/end-of-job-check-list/",
        "teaser":null},{
        "title": "PHP sessions - stuff to check when things goes wrong.",
        "excerpt":"There is too much information about problems with sessions in PHP, every dude got it's own problem and it's own solution. The probability that the problem you experiencing is the same is very low.&nbsp; So here is what my little (and very annoying) google&nbsp;journey&nbsp;came up to: You must call session_start();...","categories": [],
        "tags": ["session","php"],
        "url": "https://kinnrot.github.io/php-sessions-stuff-to-check-when-things/",
        "teaser":null},{
        "title": "PHP Sessions",
        "excerpt":"One more thing,  If you do stuff like put instances of classes inside a session and expect to call methods of this classes later, you must put the session start after you include the classes definitions.  But I suggest not to do this kind of stuff.","categories": [],
        "tags": ["session","php"],
        "url": "https://kinnrot.github.io/php-sessions/",
        "teaser":null},{
        "title": "CoffeeScript - language review",
        "excerpt":"This weekend I learned a new programming language, called coffee script, It's not a real language it's actually compiled to&nbsp;JavaScript, so it's a way to write&nbsp;JavaScript&nbsp;differently. After a little hands-on and one book read I can say that this is a good language for&nbsp;experienced&nbsp;and non&nbsp;experienced&nbsp;JavaScript programmers.&nbsp; What's&nbsp;awesome about this&nbsp;language is...","categories": [],
        "tags": ["javascript"],
        "url": "https://kinnrot.github.io/coffeescript-language-review/",
        "teaser":null},{
        "title": "Rails + Mongo + Heroku how?",
        "excerpt":"After a few hours of fighting with google I decided to write it all here: *This post is more relevant for windows users but can help others. What do you need to have:First you need to have ruby 1.9.2+Devkitthen you need rails 3+then u need the bundler gemthen go to...","categories": [],
        "tags": ["heroku","mongodb","rails","mongoid","Ruby"],
        "url": "https://kinnrot.github.io/rails-mongo-heroku-how/",
        "teaser":null},{
        "title": "For All You Android Developers If You",
        "excerpt":"For all you android developers, If you ever installed a new rom and didn't see any logs from your cat, just do this:  http://stackoverflow.com/a/7272831/67505","categories": [],
        "tags": [],
        "url": "https://kinnrot.github.io/for-all-you-android-developers-if-you/",
        "teaser":null},{
        "title": "php post response script execution",
        "excerpt":"I guess it's nice to have so here you go /* &nbsp;* basically allow a php script to return a response and continue with &nbsp;* code execution, good for statistics. &nbsp;* before echo anything to user call begin and after call end, than you can continue doing stuff &nbsp;*/ class...","categories": [],
        "tags": ["php async"],
        "url": "https://kinnrot.github.io/php-post-response-script-execution/",
        "teaser":null},{
        "title": "coffee-script is another piece of shit",
        "excerpt":"Hi, A few months ago I discovered this new stuff called coffee script, and thought to myself, \"this is&nbsp;awesome I'll write less and do more\" Today, I tried to continue a development of a pretty fat client side and tried to find myself in the 1000 lines of code I...","categories": [],
        "tags": [],
        "url": "https://kinnrot.github.io/coffee-script-is-another-piece-of-shit/",
        "teaser":null},{
        "title": "Nice idea for what's new in my app",
        "excerpt":"People probably don't read/understand what's new in an app when they update it.&nbsp; Skype did a very nice screen that shows you that something did change ","categories": [],
        "tags": [],
        "url": "https://kinnrot.github.io/nice-idea-for-what-new-in-my-app/",
        "teaser":null},{
        "title": "Avoid usage of AsyncTask Class on android",
        "excerpt":"Just noticed this method available from API 11 only,&nbsp; so you should find another implementation to avoid unexpected behaviour. Or don't call the execute method,&#160; why?&#160; If you'll check documentation you'll see that in some versions of android all tasks will run synchronouslly on the same background thread and on...","categories": [],
        "tags": ["asynctask","android","thread"],
        "url": "https://kinnrot.github.io/avoid-usage-of-asynctask-class-on/",
        "teaser":null},{
        "title": "SpineJS Tip",
        "excerpt":"Never create multiple instances of a controller that generates the same view, cause you're event's registrations will be duplicated over and over again! ","categories": [],
        "tags": ["SpineJS js javascript mvc"],
        "url": "https://kinnrot.github.io/spinejs-tip/",
        "teaser":null},{
        "title": "Home Base SDK",
        "excerpt":"As a developer@widdit's incredible android team, I decided to write a how to embed Widdit's home base sdk in 5 minutes guide, so here it is: Step 1: go to widdit.com and create an account. Step 2: create your first home base in the home base section at widdit site....","categories": [],
        "tags": [],
        "url": "https://kinnrot.github.io/home-base-sdk/",
        "teaser":null},{
        "title": "Export Hebrew (or any non english language) with php to excel",
        "excerpt":"I found it very annoying that php data to excel is not so straight forward as one might think&nbsp;,lots of wrong stuff&nbsp;here. The thing is, as a developer you don't know a lot about encoding. So you don't really think about it until you have bugs, than you start searching...","categories": [],
        "tags": [],
        "url": "https://kinnrot.github.io/export-hebrew-or-any-non-english/",
        "teaser":null},{
        "title": "Karma Rails Angular Jasmine testing - set up in 5 minutes",
        "excerpt":"It took me about an hours and a half because google is not up to date, so here it is: First - as a rails developer, if you don't have node.js, this is the time to install it. If you don't use RubyMine as you IDE, I recommend it as...","categories": [],
        "tags": [],
        "url": "https://kinnrot.github.io/karma-rails-angular-jasmine-testing-set/",
        "teaser":null},{
        "title": "ClusteTV is hiring",
        "excerpt":"Cluster TV is looking for it's next programmer/Superstar! If you can: * Write code like an Effin' machine* Test your OWN code* Speak English like it's your mother's tongue* Handle challenges* Be self-driven &amp; independent We would also appreciate if you'll have: * Great communications skills* Independent thinking* Passion to...","categories": [],
        "tags": [],
        "url": "https://kinnrot.github.io/clustetv-is-hiring/",
        "teaser":null},{
        "title": "Nice post about cyber war",
        "excerpt":"Popular Science: The War Of Zeros And Ones. http://google.com/newsstand/s/CBIwvZm5zho","categories": [],
        "tags": ["cyber"],
        "url": "https://kinnrot.github.io/nice-post-about-cyber-war/",
        "teaser":null},{
        "title": "Overriding default id in mongoid",
        "excerpt":"This is an easy one, just want to make sure it's clear.  Add the following field to your model:   field :_id, type: Moped::BSON::ObjectId And to allow setting it:  1 def id=(id) 2   self[:_id] = id 3 end  Now you can just do obj.id=[Some ObjectId] and save the object.   ","categories": [],
        "tags": ["mongodb","mongoid","Ruby"],
        "url": "https://kinnrot.github.io/overriding-default-id-in-mongoid/",
        "teaser":null},{
        "title": "Dedicating a DJ(Delayed job) worker to a specific queue in heroku.",
        "excerpt":"Let's say you have a vey important procedure that takes a while, and you need to process it in background, but you still want to execute ASAP. I'm using Delayed Job on Heroku, and could not find a lot of tutorials to do this simple task. So here is the...","categories": [],
        "tags": ["asynctask","heroku","rails","queueing","delayed job","Ruby"],
        "url": "https://kinnrot.github.io/dedicating-djdelayed-job-worker-to/",
        "teaser":null},{
        "title": "Get the user locale from http headers",
        "excerpt":"If you want to provide default localization support for guest user in your website yo can locate their browser locale by the following code: def extract_locale_from_header unless request.env['HTTP_ACCEPT_LANGUAGE'].nil? return request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first end 'en' end This way you can determine on server side the locale of the user currently entered your site....","categories": [],
        "tags": ["rails","locale","localization","language","Ruby"],
        "url": "https://kinnrot.github.io/get-user-locale-from-http-headers/",
        "teaser":null},{
        "title": "Use FactoryGirl And Faker for easy data generation in unit testing (Part1)",
        "excerpt":"The &nbsp;most irritating thing in writing tests is the data generation preparation process, sometimes you want to create an object with 20 fields that 10 of them are mandatory but you only care about the value of 1, and you don't want to mock, cause you interact with other methods...","categories": [],
        "tags": [],
        "url": "https://kinnrot.github.io/use-factorygirl-and-faker-for-easy-data/",
        "teaser":null},{
        "title": "Rubymine on OSX memory issues",
        "excerpt":"I found this only today, you should run Rubymine as 32 bit process. It works much faster and consume half the memory.  To set this got to the Applicaitons folder right click on rubymine-&gt;get info and check the \"open in 32 bit mode\"  Thats all!  ","categories": [],
        "tags": ["OSX","memory leak","Ruby","Rubymine"],
        "url": "https://kinnrot.github.io/rubymine-on-osx/",
        "teaser":null},{
        "title": "Ruby Lazy chunked hash like behavior",
        "excerpt":"When we want to iterate a long list, we can simply write a query and get a cursor, ActiveRecord will do all the heavy lifting for us. What happens when we need to do some complicated computations on a set of data, which sometimes can be too big to be...","categories": [],
        "tags": ["Design","memory leak","Ruby","Dynamic-languages"],
        "url": "https://kinnrot.github.io/ruby-lazy-chunked-hash-like-behavior/",
        "teaser":null},{
        "title": "Watch out for reference duplication instead of instance duplication",
        "excerpt":" # This code will generate 96 instancesViewStatData = Struct.new(:total, :target, :ratio)96.times.map {|_|ViewStatData.new(0, 0, 0)}# And this will not, it'll generate 96 pointers[ViewStatData.new(0, 0, 0)] * 96# So Watch out!!!","categories": [],
        "tags": ["Ruby"],
        "url": "https://kinnrot.github.io/watch-out-for-reference-duplication/",
        "teaser":null},{
        "title": "Octopress 101",
        "excerpt":"I decided to develop my own blog like all the other cool developers. If you got here, this is what I got so far, it’s not too much, but it’s a start. When I develop something my rules are very simple Avoid writing any code. Keep it simple. Easy to...","categories": [],
        "tags": ["jekyll","octopress","ruby"],
        "url": "https://kinnrot.github.io/octopress101/",
        "teaser":null},{
        "title": "Ruby async await",
        "excerpt":"There is a lot of buzz about asyc await from the javascript world, the concept is very simple and make your code much more readable. You want to execute something without blocking the main thread but you want the next line of code to run once the non blocking code...","categories": [],
        "tags": ["ruby","async","await"],
        "url": "https://kinnrot.github.io/ruby-async-await/",
        "teaser":null},{
        "title": "From jQuery to Stimulus",
        "excerpt":"I tried to build an SPA without a shiny client side framework, I wanted to build something fast with good user experience and keeping it as simple as possible. I decided to take rails, use turbolinks and a avoid javascript till its a must. It didn’t take more than a...","categories": [],
        "tags": ["ruby","stimulus","rails","jquery"],
        "url": "https://kinnrot.github.io/from-jquery-to-stimulus/",
        "teaser":null},{
        "title": "Choosing the Right WordPress Hosting Service",
        "excerpt":"I needed to choose WordPress hosting service for some of clients and decided to do some research to figure out what’s best value for each client needs. There are many service providers in this area, After lots of googling I decided to focus on the following: WordPress BlueHost Kinsta WordPress...","categories": [],
        "tags": ["hosting","wp","wordpress","kinsta","bluehost","letsencrypt"],
        "url": "https://kinnrot.github.io/choosing-the-right-wordpress-hosting-service/",
        "teaser":null},{
        "title": "Live Data Pitfall You Should Be Aware Of",
        "excerpt":"When working with MutableLiveData you can update the observable value in 2 ways: setValue postValue Both will update the live data value as expected as long as your code is running from the main thread. If you need to update a value from other thread you can use the postValue...","categories": [],
        "tags": ["android","arch","lifecycle"],
        "url": "https://kinnrot.github.io/live-data-pitfall-you-should-be-aware-of/",
        "teaser":null},{
        "title": "Android Lifecycle Aware Modal",
        "excerpt":"Sometimes we want to show the user an alert when somethings wrong or we just need to give some extra info, For example; Ask the user if he is sure he wanna leave the app. This can be achieved with the following code (runs inside activity): AlertDialog.Builder(this) .setMessage(\"Are you sure...","categories": [],
        "tags": ["android","arch","lifecycle"],
        "url": "https://kinnrot.github.io/android-lifecycle-aware-modal/",
        "teaser":null},{
        "title": "Building your own rails form builder",
        "excerpt":"If you’re building forms with rails, whether you’re using a gem for it or working with pure rails forms, you should know this. Rails uses form builder to allow you to call all the standard label/input/select methods, the exact class name is ActionView::Helpers::FormBuilder When calling ‘form_for’ you get a fresh...","categories": [],
        "tags": ["ruby","rails","form","component"],
        "url": "https://kinnrot.github.io/building-your-own-rails-form-builder/",
        "teaser":null},{
        "title": "Keep Track on Coverage",
        "excerpt":"Recently I discovered Danger, an amazing tool you should check out no matter what. I can write a ton of use cases that serves me on my day to day work, but let’s start with one which I like a lot. Do you know how much of your code is...","categories": [],
        "tags": ["danger","simple-cov","code-coverage"],
        "url": "https://kinnrot.github.io/keep-track-on-coverage/",
        "teaser":null},{
        "title": "Simulate Click on Google Geo Chart",
        "excerpt":"So I found out it’s not so documented, hopefully google will index this. I have a page on my system that shows a google geo chart (same as this) When clicking on a country on the map lot’s of interesting things happens. And I wanted to implement a ui automation...","categories": [],
        "tags": ["browser-automation","testing","capybara","maps","google-charts"],
        "url": "https://kinnrot.github.io/simulate-click-on-google-geo-chart/",
        "teaser":null}]
