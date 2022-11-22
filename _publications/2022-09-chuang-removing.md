---
layout: publication
key: chuang2022removing
author: Ching-Chi Chuang, Luis Cruz, Robbert van Dalen, Vladimir Mikovsk and Arie van Deursen
journal: SCAM – 22nd IEEE International Working Conference on Source Code Analysis and Manipulation
title: "Removing dependencies from large software projects: are you really sure?"
year: 2022
preprint: "../papers/chuang2022removing.pdf"
abstract: |-
  When developing and maintaining large software systems, a great deal of effort goes into dependency management. During the whole lifecycle of a software project, the set of dependencies keeps changing to accommodate the addition of new features or changes in the running environment. Package management tools are quite popular to automate this process, making it fairly easy to automate the addition of new dependencies and respective versions. However, over the years, a software project might evolve in a way that no longer needs a particular technology or dependency. But the choice of removing that dependency is far from trivial: one cannot be entirely sure that the dependency is not used in any part of the project. Hence, developers have a hard time confidently removing dependencies and trusting that it will not break the system in production. In this paper, we propose a decision framework to improve the detection of unused dependencies. Our approach builds on top of the existing dependency analysis tool DepClean. We start by improving the support of Java dynamic features in DepClean. We do so by augmenting the analysis with the state-of-the-art call graph generation tool OPAL. Then, we analyze the potentially unused dependencies detected by classifying their logical relationship with the other components to decide on follow-up steps, which we provide in the form of a decision diagram. Results show that developers can focus their efforts on maintaining bloated dependencies by following the recommendations of our decision framework. When applying our approach to a large industrial software project, we can reduce one-third of false positives when compared to the state-of-the-art. We also validate our approach by analyzing dependencies that were removed in the history of open-source projects. Results show consistency between our approach and the decisions taken by open-source developers.
replication-package: "https://bitbucket.org/scam2022chingchichuang/static_dependency_analysis"
bibtex: |- 
  @INPROCEEDINGS{chuang2022removing,
  author={Ching-Chi Chuang and Luis Cruz and Robbert van Dalen and Vladimir Mikovsk and Arie van Deursen},
  booktitle={22nd IEEE International Working Conference on Source Code Analysis and Manipulation (SCAM)}, 
  title={Removing dependencies from large software projects: are you really sure?}, 
  year={2022}}
image: "publications/chuang2022removing.svg"
---
