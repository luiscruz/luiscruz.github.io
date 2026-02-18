---
layout: publication
key: shome2024fairness
author: Arumoy Shome, Luís Cruz, Arie van Deursen
journal: 5th IEEE/ACM International Workshop on Deep Learning for Testing and Testing for Deep Learning (DeepTest)
title: "Data vs. Model Machine Learning Fairness Testing: An Empirical Study"
year: 2024
doi: 10.1145/3643786.3648022
arxiv: "https://arxiv.org/abs/2401.07697"
abstract: |-
  Although several fairness definitions and bias mitigation techniques exist in the literature, all existing solutions evaluate fairness of Machine Learning (ML) systems after the training stage. In this paper, we take the first steps towards evaluating a more holistic approach by testing for fairness both before and after model training. We evaluate the effectiveness of the proposed approach and position it within the ML development lifecycle, using an empirical analysis of the relationship between model dependent and independent fairness metrics. The study uses 2 fairness metrics, 4 ML algorithms, 5 real-world datasets and 1600 fairness evaluation cycles. We find a linear relationship between data and model fairness metrics when the distribution and the size of the training data changes. Our results indicate that testing for fairness prior to training can be a "cheap" and effective means of catching a biased data collection process early; detecting data drifts in production systems and minimising execution of full training cycles thus reducing development time and costs.
bibtex: |-
  @INPROCEEDINGS{shome2024fairness,
  author={Arumoy Shome and Lu\'{i}s Cruz and Arie van Deursen},
  booktitle={Proceedings of the 5th IEEE/ACM International Workshop on Deep Learning for Testing and Testing for Deep Learning (DeepTest)},
  title={Data vs. Model Machine Learning Fairness Testing: An Empirical Study},
  year={2024},
  pages={1--8},
  doi={10.1145/3643786.3648022}}
---
