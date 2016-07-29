---
layout: page
title: single_chat
permalink: /single_chat/
wow: "single_chat 프로젝트 일지"
---

<h1 class="page-heading">프로젝트 일지</h1>

<ul class="post-list">
  {% for post in site.categories.single_chat %}
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
