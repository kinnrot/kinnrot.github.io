---
layout: post
title: "Keep Track on Coverage"
date: 2020-01-21T17:40:16+02:00
author: Chen Kinnrot 
tags: danger simple-cov code-coverage 
---

Recently I discovered [Danger](https://github.com/danger/danger), an amazing tool you should check out no matter what.

I can write a ton of use cases that serves me on my day to day work, but let's start with one which I like a lot.

Do you know how much of your code is covered by tests? 

Do you keep track on how your code coverage changes over time ?

I didn't till I installed a simple danger plugin called ['danger-simplecov_json'](https://github.com/marcelofabri/danger-simplecov_json), It's a ruby gem it's configuration is super easy (check this link to the gem),
Once you configure Danger on your CI or locally, you can see after each build (spec run or whatever you use) the percentage of code coverage.

When I started using this plugin my coverage was somewhere in the 40%, currently I'm on 85%. This plugin motivates you to increase your coverage push new code with tests.

I configured it to run on my CI (I use circle) and add a nicely formatted comment on each opened PR.

It looks like this:

>Code coverage is now at 83.13% (37790/45395 lines)

It's a small thing with big impact, try it! 
 