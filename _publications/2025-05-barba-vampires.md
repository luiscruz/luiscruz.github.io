---
layout: publication
key: barba2025vampires
author: Enrique Barba Roque, Luís Cruz, Thomas Durieux
journal: IEEE/ACM 47th International Conference on Software Engineering (ICSE)
title: "Unveiling the Energy Vampires: A Methodology for Debugging Software Energy Consumption"
year: 2025
doi: 10.1109/ICSE55347.2025.00118
award: "Best Paper Award"
arxiv: "https://arxiv.org/abs/2412.10063"
abstract: |-
  Energy consumption in software systems is becoming increasingly important, especially in large-scale deployments. However, debugging energy-related issues remains challenging due to the lack of specialized tools. This paper presents an energy debugging methodology for identifying and isolating energy consumption hotspots in software systems. We demonstrate the methodology's effectiveness through a case study of Redis, a popular in-memory database. Our analysis reveals significant energy consumption differences between Alpine and Ubuntu distributions, with Alpine consuming up to 20.2% more power in certain operations. We trace this difference to the implementation of the memcpy function in different C standard libraries (musl vs. glibc). By isolating and benchmarking memcpy, we confirm it as the primary cause of the energy discrepancy. Our findings highlight the importance of considering energy efficiency in software dependencies and demonstrate the capability to assist developers in identifying and addressing energy-related issues. This work contributes to the growing field of sustainable software engineering by providing a systematic approach to energy debugging and using it to unveil unexpected energy behaviors in Alpine.
bibtex: |-
  @INPROCEEDINGS{barba2025vampires,
  author={Enrique Barba Roque and Lu\'{i}s Cruz and Thomas Durieux},
  booktitle={2025 IEEE/ACM 47th International Conference on Software Engineering (ICSE)},
  title={Unveiling the Energy Vampires: A Methodology for Debugging Software Energy Consumption},
  year={2025},
  pages={2406--2418},
  doi={10.1109/ICSE55347.2025.00118}}
---
