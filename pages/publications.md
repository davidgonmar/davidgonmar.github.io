---
layout: page
title: Publications
permalink: /publications/
---

<div class="grid gap-6">
{% assign pubs = site.data.papers | sort: 'year' | reverse %}
{% for pub in pubs %}
  {% include publication-card.html pub=pub %}
{% endfor %}
</div>
