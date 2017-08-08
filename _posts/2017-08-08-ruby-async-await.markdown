---
layout: post
title: "Ruby async await"
date: 2017-08-08T18:12:46+03:00
author: Chen Kinnrot
tags: ruby async await
---

There is a lot of buzz about asyc await from the javascript world, the concept is very simple and make your code much more
readable. You want to execute something without blocking the main thread but you want the next line of code to run once the non blocking code finish, meaning continue
code execution in its written order.

Ruby has a great [concurrency gem](https://github.com/ruby-concurrency/concurrent-ruby) which basically encapsulate low level threading and synchronization code
to common patterns like Future, Promise, Actor and much more.

I'd like to talk about concurrent-ruby async await feature.








