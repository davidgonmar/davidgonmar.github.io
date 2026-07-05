---
layout: home
title: Home
---

I'm **David González-Martínez**, an ML researcher and M.Sc. student at the University of Tübingen. I'm currently a student research assistant at the Max Planck Institute for Intelligent Systems and ELLIS Institute Tübingen, working at the [WEI Lab](https://shiweiliuiiiiiii.github.io/wei-lab/) under the supervision of Dr. Shiwei Liu. I previously completed my B.Sc. at the University of Seville, with a thesis on model compression.

I am broadly interested in questions that could help make machine learning better. In particular, I think about two axes: making models do more, and making them use fewer resources.

Some recent and current directions I have been thinking about and exploring, among others, are better deep learning architectures and learning paradigms, reinforcement learning/on-policy learning and LLM reasoning, model efficiency and compression, and the science of deep learning.

In the past, I spent some time thinking about ML systems and engineering. A project I spent quite some time on is [pequegrad](https://github.com/davidgonmar/pequegrad), a toy deep learning framework built from scratch. It features a graph tracing mechanism, which is then used for automatic differentiation, higher-order differentiation, JIT compilation (graph optimizations, pattern matching, and fused CUDA code generation), among other experimental features.

I am always happy to chat about research, especially if it touches any of the questions above.

## Featured publications

{% assign featured = site.data.papers | where: "featured", true | sort: "year" | reverse %}
<div class="grid-cols-1 gap-6 mt-4">
{% for pub in featured limit:3 %}
  {% include publication-card.html pub=pub %}
{% endfor %}
</div>

For a complete list of publications, please see my [publications page](/publications/).
