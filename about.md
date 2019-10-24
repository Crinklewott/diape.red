---
layout: page
title: About
permalink: /about/
---

{% if site.twitter_username %}
### [The Twitters](https://twitter.com/{{site.twitter_username}})
  {% include icon-twitter.html username=site.twitter_username %} -- My
  Twitter! Kinda like this site, except it updates more often, and
  with less words at a time~
{% endif %}

{% if site.github_username %}
### [The GitHubs](https://github.com/{{site.github_username}})
  {% include icon-github.html username=site.github_username %} -- Code
  I've written that you'll less likely see in casual settings.
{% endif %}
