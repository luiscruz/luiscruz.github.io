---
layout: publication
key: cunha2026notall
author: Simão Cunha, Francisco Ribeiro, Luís Cruz, João Saraiva
booktitle: Proceedings of the IEEE/ACM 10th International Workshop on Green and Sustainable Software (GREENS)
title: "Not All Local LLMs Are Equal: A Benchmark of Energy and Performance"
year: 2026
doi: 10.1145/3786148.3788630
abstract: |-
  The rapid adoption of Large Language Models (LLMs) is transforming research, education, software development and everyday life. As their use grows, so does the diversity of available models, from general-purpose to code-oriented LLMs that can run both in data centers and on edge devices. Several benchmarks have emerged to evaluate their performance in code generation and completion tasks, yet their energy and time efficiency remain underexplored. This paper evaluates five local LLMs on HumanEval-X and MBPP+ to analyze their accuracy, runtime and energy consumption under CPU-only inference, reflecting realistic on-device deployment scenarios where GPUs are unavailable. The results reveal clear trade-offs between effectiveness and efficiency: while some models achieve higher accuracy, others deliver comparable results with substantially lower energy use. In particular, 3-shot prompting consistently improves runtime and energy efficiency compared to 0-shot, without sacrificing code quality. These findings emphasize that prompt design and model selection must be considered together when deploying LLMs for coding tasks and call for the creation of practical prompt-efficiency guidelines to support more sustainable and efficient use of local LLMs.
bibtex: |-
  @inproceedings{cunha2026notall,
  author={Sim\~{a}o Cunha and Francisco Ribeiro and Lu\'{i}s Cruz and Jo\~{a}o Saraiva},
  booktitle={Proceedings of the IEEE/ACM 10th International Workshop on Green and Sustainable Software (GREENS)},
  title={Not All Local LLMs Are Equal: A Benchmark of Energy and Performance},
  year={2026},
  pages={99--106},
  doi={10.1145/3786148.3788630}}
---
