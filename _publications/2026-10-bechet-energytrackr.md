---
layout: publication
key: bechet2026energytrackr
author: François Bechet, Jérôme Maquoi, Luís Cruz, Benoît Vanderose, Xavier Devroey
booktitle: Proceedings of the IEEE/ACM International Conference on Automated Software Engineering (ASE), Tools and Datasets Track
title: "EnergyTrackr: A Modular Energy Regressions Detection Tool"
year: 2026
doi: 10.1145/3832783.3834640
preprint: "https://snail.info.unamur.be/publication/bechet-2026/"
website: "https://github.com/snail-unamur/energytrackr"
video: "https://doi.org/10.5281/zenodo.21507425"
abstract: |-
  Energy efficiency is increasingly recognized as an important dimension of software quality. As systems evolve rapidly, tracking how energy consumption changes across versions can provide valuable insights for developers and researchers. Although detecting energy regressions (i.e., unintended increases in energy consumption) remains challenging due to measurement variability and complex execution environments, recent advances now make systematic analysis practical. Still, dedicated support for monitoring energy behavior over a project's history is missing. This paper presents EnergyTrackr, a modular, open-source tool for automatically detecting, classifying, and visualizing energy regressions across a commit history. EnergyTrackr traverses a specified set of commits, builds each revision, and measures application-level energy consumption by executing the test suite using the RAPL-based Linux perf utility. It applies established best practices for measurements such as warm-up, randomized execution, repetition, and thermal control. The resulting data are analyzed through a statistical pipeline that filters outliers and classifies energy changes using multiple criteria (e.g., significance, practical impact, …). EnergyTrackr generates interactive reports that provide a comprehensive view of energy evolution and is designed for easy integration into existing Linux workflows. A preliminary evaluation on large Java projects shows that EnergyTrackr can produce stable measurements at scale and effectively identify energy regressions.
bibtex: |-
  @inproceedings{bechet2026energytrackr,
  author={Fran\c{c}ois Bechet and J\'{e}r\^{o}me Maquoi and Lu\'{i}s Cruz and Beno\^{i}t Vanderose and Xavier Devroey},
  title={{EnergyTrackr: A Modular Energy Regressions Detection Tool}},
  booktitle={Proceedings of the IEEE/ACM International Conference on Automated Software Engineering (ASE), Tools and Datasets Track},
  year={2026},
  doi={10.1145/3832783.3834640}}
---
