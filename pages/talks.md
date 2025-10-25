---
layout: page
title: Talks
permalink: /talks/
---

<ul class="space-y-4">
{% for t in site.data.talks %}
<li class="rounded-xl border border-gray-200 dark:border-gray-800 p-4">
  <div class="text-sm text-gray-500 dark:text-gray-400">{{ t.date | date: "%b %d, %Y" }} • {{ t.venue }}</div>
  <div class="font-medium">{{ t.title }}</div>
  {% if t.slides %}<a class="underline text-sm" href="{{ t.slides }}">Slides</a>{% endif %}
  {% if t.video %} • <a class="underline text-sm" href="{{ t.video }}">Video</a>{% endif %}
</li>
{% endfor %}
</ul>
