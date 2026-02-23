---
layout: publication
key: yarally2023batching
author: Tim Yarally, Luís Cruz, Daniel Feitosa, June Sallou, Arie van Deursen
journal: 2023 49th Euromicro Conference on Software Engineering and Advanced Applications (SEAA)
title: "Batching for Green AI—An Exploratory Study on Inference"
year: 2023
doi: 10.1109/SEAA60479.2023.00026
arxiv: "https://arxiv.org/abs/2307.11434"
preprint: "https://arxiv.org/pdf/2307.11434"
full-text: "https://ieeexplore.ieee.org/document/10371549"
abstract: |-
  The batch size is an essential parameter to tune during the development of new neural networks. Amongst other quality indicators, it has a large degree of influence on the model's accuracy, generalisability, training times and parallelisability. This fact is generally known and commonly studied. However, during the application phase of a deep learning model, when the model is utilised by an end-user for inference, we find that there is a disregard for the potential benefits of introducing a batch size. In this study, we examine the effect of input batching on the energy consumption and response times of five fully-trained neural networks for computer vision that were considered state-of-the-art at the time of their publication. The results suggest that batching has a significant effect on both of these metrics. Furthermore, we present a timeline of the energy efficiency and accuracy of neural networks over the past decade. We find that in general, energy consumption rises at a much steeper pace than accuracy and question the necessity of this evolution. Additionally, we highlight one particular network, ShuffleNetV2 (2018), that achieved a competitive performance for its time while maintaining a much lower energy consumption. Nevertheless, we highlight that the results are model dependent.
bibtex: |-
  @INPROCEEDINGS{yarally2023batching,
  author={Tim Yarally and Luís Cruz and Daniel Feitosa and June Sallou and Arie van Deursen},
  booktitle={2023 49th Euromicro Conference on Software Engineering and Advanced Applications (SEAA)},
  title={Batching for Green AI—An Exploratory Study on Inference},
  year={2023},
  pages={112-119},
  doi={10.1109/SEAA60479.2023.00026}}
---
