---
layout: page
title: People
permalink: /people/
---

<div class="grid gap-6 md:grid-cols-2">
{% for p in site.data.people %}
<div class="rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
  <h3 class="font-semibold">{{ p.name }}</h3>
  <p class="text-sm text-gray-700 dark:text-gray-300">{{ p.role }}</p>
  {% if p.link %}<p class="text-sm"><a class="underline" href="{{ p.link }}">Website</a></p>{% endif %}
  {% if p.note %}<p class="text-sm mt-2">{{ p.note }}</p>{% endif %}
</div>
{% endfor %}
</div>
