---
layout: publication
key: oort2021prevalence,
author: Bart van Oort, Luís Cruz, Maurício Aniche, Arie van Deursen
journal: WAIN'21 - 1st Workshop on AI Engineering – Software Engineering for AI
title: The Prevalence of Code Smells in Machine Learning projects
preprint: "https://luiscruz.github.io/papers/cruz2021prevelance.pdf"
year: 2021
video: "https://youtu.be/TbgawiiYwJQ"
abstract: "Artificial Intelligence (AI) and Machine Learning (ML) are pervasive in the current computer science landscape. Yet, there still exists a lack of software engineering experience and best practices in this field. One such best practice, static code analysis, can be used to find code smells, i.e., (potential) defects in the source code, refactoring opportunities, and violations of common coding standards. Our research set out to discover the most prevalent code smells in ML projects. We gathered a dataset of 74 open-source ML projects, installed their dependencies and ran Pylint on them. This resulted in a top 20 of all detected code smells, per category. Manual analysis of these smells mainly showed that code duplication is widespread and that the PEP8 convention for identifier naming style may not always be applicable to ML code due to its resemblance with mathematical notation. More interestingly, however, we found several major obstructions to the maintainability and reproducibility of ML projects, primarily related to the dependency management of Python projects. We also found that Pylint cannot reliably check for correct usage of imported dependencies, including prominent ML libraries such as PyTorch."
doi: 10.1109/WAIN52551.2021.00011
bibtex: "@INPROCEEDINGS{oort2021prevalence,
  author={van Oort, Bart and Cruz, Luís and Aniche, Maurício and van Deursen, Arie},
  booktitle={2021 IEEE/ACM 1st Workshop on AI Engineering - Software Engineering for AI (WAIN)}, 
  title={The Prevalence of Code Smells in Machine Learning projects}, 
  year={2021},
  pages={1-8},
  doi={10.1109/WAIN52551.2021.00011}}"
---

