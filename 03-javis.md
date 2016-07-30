---
layout: page
title: Javis
permalink: /javis/
wow: "웨페이지"
---

<h1 class="page-heading">angularJS, nodejs, express, bootstrap, etc..</h1>

<ul class="post-list">
  {% for post in site.categories.javis %}
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

<a href="http://54.199.240.31/"> 페이지 보러가기 </a>
