---
layout: publication
key: barba2026beyondflops
author: Enrique Barba Roque, Luís Cruz, Annibale Panichella
booktitle: 20th International Symposium on Empirical Software Engineering and Measurement (ESEM 2026)
title: "Beyond FLOPs: Energy-Aware Knowledge Distillation for Sustainable LLMs on Code-Related Task"
year: 2026
pages: "22:1--22:21"
doi: 10.4230/LIPIcs.ESEM.2026.22
full-text: "https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ESEM.2026.22"
arxiv: "https://arxiv.org/abs/2608.17515"
abstract: |-
  Background: Large Language Models (LLMs) are increasingly being applied to Software Engineering (SE) tasks, achieving high accuracy across problems such as clone detection, vulnerability prediction, and code summarization. However, their high computational demands and energy consumption raise sustainability concerns and hinder their use on consumer hardware and resource-constrained platforms. A common way to report the computational cost of an LLM in the literature and industry is to use the number of Floating Point Operations (FLOPs) required to perform a pass over the network. Aims: This paper investigates the implications of energy-aware knowledge distillation for SE, aiming to improve model efficiency while maintaining performance and to determine whether FLOPs is a reliable energy-aware metric. Method: We conduct a controlled experiment using Morph, a Many-Objective Optimization-based distillation methodology, to empirically examine whether FLOPs accurately reflect energy consumption in Clone Detection and Vulnerability Prediction tasks. We extend this methodology to include energy-surrogate models that directly estimate CPU and GPU energy consumption during optimization, and we apply Morph to generative tasks using CodeT5+ for code summarization. Results: Our results show that FLOPs is not always a reliable indicator of energy consumption, and better results can be achieved by using energy-surrogate models. Distilled student models can reduce inference energy consumption by up to 90% and memory usage by 86%, with only modest accuracy trade-offs. Conclusions: Energy-aware knowledge distillation when guided by direct energy surrogates rather than FLOPs can improve the energy consumption, sustainability, and deployability of LLMs for SE applications, enabling efficient models on consumer hardware.
bibtex: |-
  @inproceedings{barba2026beyondflops,
  author={Enrique {Barba Roque} and Lu\'{i}s Cruz and Annibale Panichella},
  title={{Beyond FLOPs: Energy-Aware Knowledge Distillation for Sustainable LLMs on Code-Related Task}},
  booktitle={20th International Symposium on Empirical Software Engineering and Measurement (ESEM 2026)},
  series={Leibniz International Proceedings in Informatics (LIPIcs)},
  volume={394},
  pages={22:1--22:21},
  publisher={Schloss Dagstuhl -- Leibniz-Zentrum f{\"u}r Informatik},
  year={2026},
  doi={10.4230/LIPIcs.ESEM.2026.22}}
---
