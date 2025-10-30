---
layout: home
title: Home
---

I’m **David González-Martínez**, a ML researcher and M.Sc. student at the University of Tübingen.  
My interests: foundations of deep learning and efficient deep learning.

## Featured publications
{% assign featured = site.data.papers | where: "featured", true | sort: "year" | reverse %}
<div class="grid gap-6 mt-4">
{% for pub in featured limit:3 %}
  {% include publication-card.html pub=pub %}
{% endfor %}
</div>

<script
  type="text/javascript"
  id="clustrmaps"
  src="//clustrmaps.com/map_v2.js?d=FJ5Mzl5rCFLl32ybr4o36_5cc0XF9a7I8VLZloTsUOE&cl=ffffff&w=a">
</script>
