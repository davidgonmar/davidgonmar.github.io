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
