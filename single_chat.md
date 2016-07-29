---
layout: page
title: single_chat
permalink: /single_chat/
---

<h1 class="page-heading">Posts</h1>

<ul class="post-list">
  {% for post in site.categories[single_chat] %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>
    </li>
  {% endfor %}
</ul>
