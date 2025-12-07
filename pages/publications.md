---
layout: page
title: Publications
permalink: /publications/
---

<div class="max-w-none w-full mx-auto px-0">
  {% assign pubs = site.data.papers | sort: 'year' | reverse %}
  {% for pub in pubs %}
    {% include publication-card.html pub=pub %}
  {% endfor %}
</div>