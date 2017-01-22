---
layout: page
title: religion
permalink: /religion/
wow: "종교"
---

<h1 class="page-heading">종교</h1>

<ul class="post-list">
  {% for post in site.categories.religion %}
    <li>
      <div class ='post_border'>
      <h1>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h1>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
      </div>
    </li>
  {% endfor %}
</ul>
