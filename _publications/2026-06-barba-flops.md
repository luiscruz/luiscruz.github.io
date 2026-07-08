---
layout: publication
key: barba2026flops
author: Enrique Barba Roque, Luís Cruz
booktitle: Proceedings of the International Conference on Evaluation and Assessment in Software Engineering (EASE), Reproducibility and Negative Results Track
title: "FLOPs vs Real Work: The Importance of Replication in AI Efficiency Assessment"
year: 2026
full-text: "https://ebarba.com/files/EASE-flops-real-work.pdf"
abstract: |-
  AI efficiency has recently taken the spotlight in both academy and industry due to massive model scales, high energy demands, and environmental costs. While reporting Floating Point Operations (FLOPs) is a traditional approach for assessing computational costs, the relationship between FLOPs and execution time is not straightforward, as layers with the same number of FLOPs may not have the same execution time because some operations are more easily parallelized than others. This paper sets out to replicate the original experiments from a study that proposed the α−FLOPs estimation formula to verify whether the results remain applicable on newer, more powerful hardware. During the replication process, we identify limitations in the replication materials provided by the original study, including a lack of specific dependency details and transparency regarding regression data. Our results validate the thesis that raw FLOPs alone are not an appropriate metric for execution time, as spatial dimensions remain more easily parallelized than kernel dimensions. However, fine-grained measurements reveal that the relationship is much less straightforward than previously shown, with newer hardware exhibiting instabilities and discontinuities in execution time, including jumps and oscillations, that the α−FLOPs formula generally underestimates. Ultimately, this work validates the empirical findings from the original study but shows negative results when applying the α−FLOPs estimation. We also highlight the critical need for complete and accurate replication packages for research on hardware-dependent efficiency assessment and provide a complete replication package for our implementation to facilitate further study.
bibtex: |-
  @inproceedings{barba2026flops,
  author={Enrique Barba Roque and Lu\'{i}s Cruz},
  booktitle={Proceedings of the International Conference on Evaluation and Assessment in Software Engineering (EASE), Reproducibility and Negative Results Track},
  title={FLOPs vs Real Work: The Importance of Replication in AI Efficiency Assessment},
  year={2026}}
---
