---
layout: publication
key: kannan2022mlsmellhound
author: Jai Kannan, Scott Barnett, Luís Cruz, Anj Simmons, Akash Agarwal
journal: "ICSE'22 - NIER"
title: "MLSmellHound: A Context-Aware Code Analysis Tool"
year: 2022
arxiv: "https://arxiv.org/abs/2205.03790"
doi: "10.1145/3510455.3512773"
abstract: |-
  Meeting the rise of industry demand to incorporate machine learning (ML) components into software systems requires interdisciplinary teams contributing to a shared code base. To maintain consistency, reduce defects and ensure maintainability, developers use code analysis tools to aid them in identifying defects and maintaining standards. With the inclusion of machine learning, tools must account for the cultural differences within the teams which manifests as multiple programming languages, and conflicting definitions and objectives. Existing tools fail to identify these cultural differences and are geared towards software engineering which reduces their adoption in ML projects. In our approach we attempt to resolve this problem by exploring the use of context which includes i) purpose of the source code, ii) technical domain, iii) problem domain, iv) team norms, v) operational environment, and vi) development lifecycle stage to provide contextualised error reporting for code analysis. To demonstrate our approach, we adapt Pylint as an example and apply a set of contextual transformations to the linting results based on the domain of individual project files under analysis. This allows for contextualised and meaningful error reporting for the end-user.
bibtex: |- 
  @INPROCEEDINGS{kannan2022mlsmellhound,
  author={Jai Kannan and Scott Barnett and Lu\'{i}s Cruz and Anj Simmons and Akash Agarwal},
  booktitle={2022 IEEE/ACM 44th International Conference on Software Engineering: New Ideas and Emerging Results (ICSE-NIER)}, 
  title={MLSmellHound: A Context-Aware Code Analysis Tool}, 
  year={2022}}
---
