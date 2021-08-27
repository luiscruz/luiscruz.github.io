---
layout: default_md
title: Blog
---
## Latest Posts


{% for post in site.posts %}
  {% unless post.invisible %}
<img class="pull-left img-thumbnail" src="{{post.image}}" width="120px" style="margin-right:10px"/>
  <a href="{{ post.url }}">{{ post.title }}</a> 
: <small class="text-muted">Posted on {{post.date | date_to_string}}.</small> <br/> {{ post.summary }}
<div class="clearfix"></div>
<br/>
  {% endunless %}
{% endfor %}

---


2021 \| [Luís Cruz](/)
