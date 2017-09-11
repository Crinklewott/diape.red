---
layout: page
title: About
permalink: /about/
---

Oh, hi! Who am I? Well...

A like to think that I am a programmer, this much is pretty safe. I
also have a conspicuously large list of things I am trying to get good
at. Art and music are definitely pretty high on that list. (Though
I've made a lot more progress on the former)

Who knows? Maybe I'll eventually have a large list of examples of
things I'm happy with here! Enough I can call myself a musician and
artist too!

I guess that's it..? Maybe I will put something useful here someday,
but for now, enjoy links to parts of websites that are not mine.

{% if site.twitter_username %}
### [The Twitters](https://twitter.com/{{site.twitter_username}})
  {% include icon-twitter.html username=site.twitter_username %} -- If
  you ever wondered what goes through my mind on a day-to-day basis,
  you might be somewhere near something that resembles luck.
{% endif %}

{% if site.github_username %}
### [The GitHubs](https://github.com/{{site.github_username}})
  {% include icon-github.html username=site.github_username %} -- Code
  incarnate, and very occasionally reincarnate.
{% endif %}
