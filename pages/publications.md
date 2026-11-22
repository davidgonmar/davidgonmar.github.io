---
layout: page
title: Papers
permalink: /publications/
---

{% assign pubs = site.data.papers | sort: "date" | reverse %}
{% for pub in pubs %}{% include publication-card.html pub=pub %}{% endfor %}
<p class="equal-note">* Equal contribution</p>
