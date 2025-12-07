---
layout: home
title: Home
---

I'm **David González-Martínez**, a ML researcher and M.Sc. student at the University of Tübingen and a student research assistant at the Max Planck Institute for Intelligent Systems, working at the WEI Lab under the supervision of Dr. Shiwei Liu.

I am interested in finding and/or answering questions that have the potential of helping make ML better. I am particularly interested in two angles: models that perform better, and more efficient models.



## Featured publications
{% assign featured = site.data.papers | where: "featured", true | sort: "year" | reverse %}
<div class="grid-cols-1 gap-6 mt-4">
{% for pub in featured limit:3 %}
  {% include publication-card.html pub=pub %}
{% endfor %}
</div>

For a complete list of publications, please see my [publications page](/publications/).