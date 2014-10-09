---
layout: post
title: "Your Website is in a Constant State of Death"
categories: bamboo
author: "Garrett Boatman"
excerpt: "Why a website isn’t done when it’s done."
image: /images/posts/death.jpg
---

![Your website's on fire](/images/posts/death.jpg){: .feat-img}

You needed a new website.

You contact a cool little website company you know about in San Francisco.

They said it’d cost $15,000

You thought “holy hell, that’s expensive”, and then you said “sure”.

You pay $15,000 and get an awesome website. It’s fast, it’s [beautiful](/blog/beautiful/), and your engagement rises because people can actually read your content on their phones.

You’re done, right?

You wish.

> The moment you launch your website is the moment it starts dying a horrible death.

###Technology dies quicker than humans
On average, a laptop survives about 4–5 years. Batteries die, hardware becomes obsolete, and you just ended up throwing it away because you didn’t want to deal with that stupid virus it got in 2007.

Your website also lives on a computer. It just doesn’t feel like a real computer. Computers die, hard drives die, and that’ll kill your website. Luckily, self-hosted website are virtually obsolete. You’ve probably got your website hosted with a [fancy company](http://mediatemple.net/) that’ll manage your server so it won’t crash and burn from outdated version of Apache . However, if your website/application is complicated enough, it’s likely your developer set you up manually on a self-managed platform like AWS. If you’re on a self-managed server and MySQL fails, you’re SOL without a developer handy. Paying someone to manage your server can make sure that crap doesn’t happen the morning your blog post hits the front page of [Reddit](http://reddit.com).

###Dependencies
I’ve built a ton of websites over the years, and they all depend on multiple pieces of code not written by me. It could be a CMS like [Wordpress](http://wordpress.org/), a [CSS framework](http://en.wikipedia.org/wiki/CSS_frameworks), or anything inbetween. It doesn’t mean I’m bad at my job(I hope), it just means that [I don’t want to repeat](http://en.wikipedia.org/wiki/Not_invented_here) work that thousands of developers before me have already done.

These dependencies are built by humans, and humans change. We make mistakes, we iterate, and we improve. If you’re running Wordpress, it’s likely that your website has 5 to 10 plugins installed(40 if you hired terrible developers); most plugins have version updates by their developers multiple times per month. This means your untouched website is running multiple pieces of old code only a month after launch date.

That old code worked together on launch date, shouldn’t it still work a year later? *It’s possible, but a 12 year old already figured out how to break into it and redirect all of your links to 4chan.org*

###Security
Every piece of technology has potential vulnerabilities. [Heartbleed](http://heartbleed.com/) was a scary one. Wordpress constantly pushes out security releases to fix vulnerabilities that malicious developers & bots would love to take advantage of.

If your website is running an old version of Wordpress(or any outdated CMS/framework), chances are that somebody has figured out a way to break into it. Your old code may work for now, but your website might be awfully vulnerable.

Here at Bamboo, we had to learn this the hard way a few years ago. There was a security breach in an old version of our CMS that made us prone for malware infection. 30+ hours and a lot of Red Bull later, we were able to recover & secure the website. From experience, let me tell you, you do not want to spend your friday night trying to apologize to [Google’s malware bot](https://support.google.com/webmasters/answer/168328).

**[tl;dr](http://en.wikipedia.org/wiki/Wikipedia:Too_long;_didn%27t_read) — If you pay for a website, pay to maintain it. If you choose not to, it may cost you an exponential amount of time & money in the future.**
