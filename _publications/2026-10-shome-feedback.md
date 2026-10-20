---
layout: publication
key: shome2026feedback
author: Arumoy Shome, Luís Cruz, Diomidis Spinellis, Arie van Deursen
booktitle: 20th International Symposium on Empirical Software Engineering and Measurement (ESEM 2026)
title: "Characterizing Feedback Statements in Machine Learning Jupyter Notebooks"
year: 2026
pages: "13:1--13:21"
doi: 10.4230/LIPIcs.ESEM.2026.13
full-text: "https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ESEM.2026.13"
arxiv: "https://arxiv.org/abs/2609.22912"
abstract: |-
  Machine learning development in Jupyter notebooks is iterative and feedback-driven. Practitioners author statements that reveal information about program execution and use it to decide what to do next. We call these feedback statements and identify two forms: exploratory statements that display values for visual inspection, and validation statements that enforce conditions programmatically through assertions. Many ML failures do not surface as exceptions and thus escape the crash-based analyses that dominate prior work on ML notebooks. This study examines what practitioners check to catch failures that would otherwise pass silently, by characterizing feedback statements that encode the practitioner's mental model of what the code should do and what could go wrong. We mine 297,851 public Python Jupyter notebooks from GitHub and Kaggle and extract 1,092,780 feedback statements. We sample 816 statements through proportional stratified sampling from semantic clusters obtained from CodeBERT embeddings, and apply grounded theory and open coding to label and analyze each one. We contribute a taxonomy of feedback statements in ML notebooks, organized along the functional intent of the statement and the ML pipeline stage in which it appears. The taxonomy reveals that feedback is overwhelmingly exploratory, and that the two platforms host qualitatively different modes of ML work. Mapping our taxonomy to an existing crash taxonomy shows that it captures defensive practices against silent failures that crash analysis cannot observe. Our findings indicate that notebook source should be treated as a confounder in studies of ML developer practice, surface opportunities for notebook tooling, and motivate empirical study of silent ML failures. We release the corpus of 1,092,780 feedback statements and the codebook to support replication and tooling research.
bibtex: |-
  @inproceedings{shome2026feedback,
  author={Arumoy Shome and Lu\'{i}s Cruz and Diomidis Spinellis and Arie {van Deursen}},
  title={{Characterizing Feedback Statements in Machine Learning Jupyter Notebooks}},
  booktitle={20th International Symposium on Empirical Software Engineering and Measurement (ESEM 2026)},
  series={Leibniz International Proceedings in Informatics (LIPIcs)},
  volume={394},
  pages={13:1--13:21},
  publisher={Schloss Dagstuhl -- Leibniz-Zentrum f{\"u}r Informatik},
  year={2026},
  doi={10.4230/LIPIcs.ESEM.2026.13}}
---
