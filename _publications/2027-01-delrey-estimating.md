---
layout: publication
key: delrey2027estimating
author: Santiago del Rey, Luís Cruz, Xavier Franch, Silverio Martínez-Fernández
journal: Computer Standards & Interfaces
title: "Estimating Deep Learning energy consumption based on model architecture and training environment"
year: 2027
volume: 99
pages: 104170
doi: 10.1016/j.csi.2026.104170
full-text: https://www.sciencedirect.com/science/article/pii/S0920548926000449
abstract: |-
  To raise awareness of the environmental impact of deep learning (DL), numerous studies have estimated the energy consumption of DL systems. However, energy estimates during DL training often rely on unverified assumptions. This work addresses that gap by investigating how model architecture and training environment affect energy consumption. We train a variety of computer vision models and collect energy consumption and accuracy metrics to analyze their trade-offs across configurations. Our results show that selecting the right model–training environment combination can reduce training energy consumption by up to 80.68% with less than 2% loss in F1 score. We find a significant interaction effect between model and training environment: energy efficiency improves when GPU computational power scales with model complexity. Moreover, we demonstrate that common estimation practices, such as using FLOPs or GPU TDP, fail to capture these dynamics and can lead to substantial errors. To address these shortcomings, we propose the Stable Training Epoch Projection (STEP) and the Pre-training Regression-based Estimation (PRE) methods. Our evaluation demonstrates that STEP and PRE achieve reductions in Root Mean Squared Error (RMSE) up to 97% and 84%, respectively, when compared to existing estimation tools.

bibtex: |-
  @article{delrey2027estimating,
  author={Santiago {del Rey} and Lu\'{i}s Cruz and Xavier Franch and Silverio Mart\'{i}nez-Fern\'{a}ndez},
  title={{Estimating Deep Learning energy consumption based on model architecture and training environment}},
  journal={Computer Standards \& Interfaces},
  year={2027},
  volume={99},
  pages={104170},
  doi={10.1016/j.csi.2026.104170},
  issn={0920-5489}}
---
