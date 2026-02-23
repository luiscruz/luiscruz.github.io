---
layout: publication
key: nijkamp2024greenai
author: Nienke Nijkamp, June Sallou, Niels van der Heijden, Luís Cruz
journal: Proceedings of the 1st ACM International Conference on AI-Powered Software (AIware)
title: "Green AI in Action: Strategic Model Selection for Ensembles in Production"
year: 2024
doi: 10.1145/3664646.3664763
arxiv: "https://arxiv.org/abs/2405.17451"
preprint: "https://arxiv.org/pdf/2405.17451"
full-text: "https://dl.acm.org/doi/10.1145/3664646.3664763"
abstract: |-
  Integrating Artificial Intelligence (AI) into software systems has significantly enhanced their capabilities while escalating energy demands. Ensemble learning, combining predictions from multiple models to form a single prediction, intensifies this problem due to cumulative energy consumption. This paper presents a novel approach to model selection that addresses the challenge of balancing the accuracy of AI models with their energy consumption in a live AI ensemble system. We explore how reducing the number of models or improving the efficiency of model usage within an ensemble during inference can reduce energy demands without substantially sacrificing accuracy. This study introduces and evaluates two model selection strategies, Static and Dynamic, for optimizing ensemble learning systems performance while minimizing energy usage. Our results demonstrate that the Static strategy improves the F1 score beyond the baseline, reducing average energy usage from 100% from the full ensemble to 62%. The Dynamic strategy further enhances F1 scores, using on average 76% compared to 100% of the full ensemble. Moreover, we propose an approach that balances accuracy with resource consumption, significantly reducing energy usage without substantially impacting accuracy. This method decreased the average energy usage of the Static strategy from approximately 62% to 14%, and for the Dynamic strategy, from around 76% to 57%. Our field study of Green AI using an operational AI system developed by a large professional services provider shows the practical applicability of adopting energy-conscious model selection strategies in live production environments.
bibtex: |-
  @INPROCEEDINGS{nijkamp2024greenai,
  author={Nienke Nijkamp and June Sallou and Niels van der Heijden and Luís Cruz},
  booktitle={Proceedings of the 1st ACM International Conference on AI-Powered Software (AIware)},
  title={Green AI in Action: Strategic Model Selection for Ensembles in Production},
  year={2024},
  pages={50-58},
  doi={10.1145/3664646.3664763}}
---
