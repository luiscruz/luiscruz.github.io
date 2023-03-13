---
layout: post
author: Luís Cruz
title: All you need to know about Energy Metrics in Software Engineering 
image: "img/blog/2021-09-01/wordcloud.png"
mermaid: True
equation: True
invisible: False
draft: True
summary: "Joules, watts, tonnes of CO2, kilowatt-hour, you name it. If you have read any article about energy consumption, you have probably come across these units. This medley of units can sometimes make it difficult to grasp key concepts in your read.
These units are not necessarily representing the same concept. For example, power (measured in watts) is different from energy consumption (measured in joules). Before diving into green software, we ought to be comfortable with the jargon. This article serves as a go-to source of truth for energy-related metrics."
---

There is no doubt that energy efficiency is a concern that is growing by the day amongst software engineers. Traditionally energy efficiency has been a requirement for software running in devices with limited energy capacity, for example mobile applications, or to cut down the electricity bill in in the massive datacentres across the globe.
Thankfully, concerns about environmental sustainability are becoming a top priority in our society, and the tech sector is not an exception.

Also, driven by personal interests, tech workers are becoming more interested in being part of organisations that do care about the environmental sustainability of their operations. Yet, literature around software energy efficiency can be difficult to grasp. Personally, I always find it difficult to compare all the different energy metrics across different articles. No wonder, to make things easier, many reports have been using measures that resemble day-to-day concepts. For example, [one bitcoin transaction is equivalent to more than one million VISA transactions](https://www.statista.com/statistics/881541/bitcoin-energy-consumption-transaction-comparison-visa/) (as of 2021). This is easier to grasp than saying that one bitcoin transaction requires more than six giga-joules (6,000,000,000J). Well, six giga-joules sound massive anyway, but you get the point 🏭.

In this article, we will go on a tour around energy consumption metrics.

`TODO paper reminder`



## Energy

Energy is often referred to as work: for example, in electricity, energy is the work required to move charged particles.
The International System of Units (SI) defines *joule* (J) as the standard unit of energy. It is also the most common unit of energy used in scientific literature. 

Another common unit is kilowatt-hour (kWh). For example, it is used to report household electricity consumption. Kilowatt-hour represents the exact same parameter as *joule* but in a much higher order of magnitude. Kilowatt-hours can be easily converted to/from joules as follows:

$$ 1\text{kWh} = 3,600,000\text{J}$$

For example, saying that 1 bitcoin transaction requires more than 6 giga-joules (6x10) is the equivalent of saying that it requires more than 1667kWh.

## Power

When measuring energy consumption, it is also common to talk about power consumption. Briefly, power represents the amount of work being done by unit of time. For example, using standard SI units, 1 unit of power is equivalent to 1 joule per second. Instead of joules per second, we call it watts (W) in memory of the Scottish inventor James Watt.

Not surprisingly, some energy profiler tools report power consumption instead of energy consumption.
In a previous post, I have covered state-of-the-art [tools to measure energy consumption from your computer](/2021/07/20/measuring-energy.html) — and this was the case of `Powerstat` and `PowerTOP`.
These tools report the average energy consumption.

Using power units instead of energy units is useful in particular scenarios. Imagine that we want to measure the energy consumption of reading a book in a device. Saying that reading a book spends 10J does not say much about its energy efficiency — the user could be reading for 1 minute or for 10 minutes. In those cases, it makes sense to talk about power consumption. On the other hand, if we talk about a bitcoin transaction, we really don't want to talk about power — we should rather be talking about the total energy consumption.

#### Power consumption is often not what matters <!-- highlight -->

In a software project, energy consumption is usually the go-to parameter. We want to analyse the project by use case: for example, the energy consumption of applying a filter to a photo, uploading a file to the server, etc. Hence, as rule-of-thumb, energy consumption is the parameter we should be reporting when testing energy in software projects.
To compute energy consumption using power consumption, we need to factor in the duration of the execution. Given the average power consumption ($P_{avg}$), and the duration of the execution ($\Delta{t}$), the energy consumption ($W$) is computed as follows:

$$ W = P_{avg} \dot{} \Delta{t}$$

Nevertheless, the above function only works when the power consumption is constant. It works fine when we deal with the average power consumption, but it does not work when we have a stream of power consumption measurements.
Power monitors, depending on their precision, might collect several power sample per second. Hence, before computing the total energy consumption, one needs to combine and process power data and respective timestamps.

The process is straightforward but it is important that we understand the underlying concepts. Energy consumption ($W$) is the integral of power consumption ($P$) over the interval of time needed ($[t_0, t_n$]) to execute a given software operation:

$$W=\int_{t_0}^{t_n}P(t) dt$$

As always, it is easier to grasp ideas from visualisations. The figure below depicts a line plot with power in the y axis and time in the x axis. The integral – i.e., energy consumption – is basically the grey area under the line and between the beginning ($t_0$) and the end ($t_n$) of the execution.

![Power plot](/img/blog/2021-09-01/plot_power_function.svg){: class="center-block" width="500px" }
<p class="text-center text-muted"><small markdown="span">**Figure 1:** Plot of power consumption over time. The area in gray is equivalent to the energy consumption between $t=1\text{s}$ and $t=9\text{s}$. [View source][Plots source].</small></p>

Yet, no power monitor will give us the precise mathematical function to compute the exact energy consumption. In the best case scenario, it retrieves a sequence of the values of power consumption with respective timestamps.
Hence, instead of a line, we actually have a sequence of points, similar to the dots in the plot below:

![Power sample plot](/img/blog/2021-09-01/plot_power_sample.svg){: class="center-block" width="500px" }
<p class="text-center text-muted"><small markdown="span">**Figure 2:** Scatter plot of the power samples that were collected by a power monitor. The black dots represent the power measurements, which were collected at the rate of 1 sample per second. The dashed line represents the real power consumption.  [View source][Plots source].</small></p>

It is up to us to connect the dots and compute the energy consumption – i.e., the area under the curve:

![Power sample plot](/img/blog/2021-09-01/plot_power_trapezoid.svg){: class="center-block" width="500px" }
<p class="text-center text-muted"><small markdown="span">**Figure 3:** Plot showing how the energy consumption, in the grey area, can be extracted from a sequence of power measurements.  [View source][Plots source].</small></p>

In this figure, the area under the curve is not exactly equal to the one in the first figure. There will always be an error stemming from this approximation which can be reduced by increasing the sampling rate — i.e., the number of power measurements we collect per second, measured in hertz ($\text{Hz}$). In the example of the figure, the sample rate is $1\text{Hz}$. Power monitors such as the [Monsoon Power Monitor] can operate in $5000\text{Hz}$. Yet, approximation errors will always be part of measuring energy consumption, and that is fine.

If we take a closer look to the plot, we observe that the area under the curve is approximately equivalent to the sum of multiple trapezoids. Hence, to estimate the energy consumption we simply have to sum the areas of the trapezoids. First, let's remember the area (A) of a trapezoid:

![Trapezoid](/img/blog/2021-09-01/trapezoid.svg){: class="center-block" width="300px" }

$$ A=\frac{a+b}{2}h $$

In our case, $a$ and $b$ would be two subsequent power measurements — $P_{t_n}$, $P_{t_{n+1}}$ — and $h$ would be the elapsed time between the two measurements — $\Delta{}t = t_{n+1} - t_{n}$:

$$A= \frac{P_{t_n}+P_{t_{n+1}}}{2}\cdot{}\Delta t$$

If we go back to the data from Figure 3, the area of the first trapezoid, within the time interval $t=1\text{s}$ and $t=2\text{s}$ is calculated as follows:

$$A= \frac{3.5\text{W}+2.0\text{W}}{2}\cdot{}1\text{s} = 2.75\text{J}$$

To calculate the total energy consumption between $t=1\text{s}$ and $t=9\text{s}$, we simply have to sum all the areas of the 8 trapezoids in figure 3.

This is basically the mathematical approach to approximate an integral – the *Trapezoid rule*. It is formulated as follows ():

$$\int_{t_0}^{t_n}P(t) dt \approx \frac{\Delta t}{2} [ P(t_0) + 2P(t_1) + 2P(t_2) + ... + 2P(t_{n-1}) + P(t_n) ]$$

The formula looks odd but scientific software libraries make it super simple to calculate. Here is an example in Python, using the `numpy` package:

```python
# power_sample is a list with all the values of power consumption
# timestamps is the list with the timestamps of each power measurement
import numpy as np
energy_consumption = np.trapz(power_sample, timestamps)
```
## mAh

If you have ever worried about the battery life of your mobile devices, you have probably come across this unit: *milliampere hour*, abbreviated as $\text{mAh}$. **This is not a unit of energy.** It is rather a unit to measure capacity, a different parameter. To convert capacity to energy consumption we have to multiply the capacity by the voltage. For example if you have used $1000\text{mAh}$ from your battery to run a smartphone device operating at the voltage of $3.8$ volts, the total energy consumption would be as follows:

$$W = 1000\text{mAh} \times 3.8\text{V} = 3800\text{mWh} = 3.8\text{Wh} = 3.8 \times 3600 \text{J} = 13680 \text{J}$$

(Note that the calculation above would have been much simpler if $\text{mAh}$ was an SI unit.)

It would be much simpler if batteries could also report the amount of work (i.e., energy) one can do with a single battery cycle in joules. The problem is that, contrary to the example above with $3.8\text{V}$, the voltage is continuously decreasing throughout a battery cycle. I.e., when the battery is fully charged its voltage is higher than when it is, for example, at 60% of full capacity. The continuous change of voltage throughout a charge cycle makes the comparison of batteries based on energy units, extremely difficult and imprecise. In conclusion, we have to live with $\text{mAh}$.

Another fun fact, as mentioned above, $\text{mAh}$ is not the SI unit for capacity. The SI unit for capacity is coulomb, abbreviated as $\text{C}$. A single $\text{mAh}$ is equivalent to $3.6\text{C}$, which is roughly within the same order of magnitude. Using SI units makes it much simpler when we need to perform calculations.
I honestly cannot find a clever explanation for the usage of $\text{mAh}$ as the common unit to report the capacity of batteries. (If you know the reason, please enlighten me 😅)

http://web.mit.edu/evt/summary_battery_specifications.pdf

## Percentage

## Carbon

Greenhouse gas emissions due to human activities are at the heart of the recent heating of Earth's climate system – the so called phenomenon of *Global Warming*.

The greenhouse gases that most affect global warming are the Carbon Dioxide (CO<sub>2</sub>) and Methane (CH<sub>4</sub>). Yet, many other gases are also part of the issue — a total of 7 — as mentioned by the [Kyoto Protocol]: Nitrous Oxide (N<sub>2</sub>O), Hydrofluorocarbons (HFCs), Perfluorocarbons (PFCs), Sulphur Hexafluoride (SF<sub>6</sub>), and Nitrogen Trifluoride (NF<sub>3</sub>).

By reducing the energy consumption of software we are reducing the emission of greenhouse gases stemmed from the production of electricity used to power the system.
However, the environmental impact of 1 Joule is not the same in every system. Depending on the power source, the environmental impact of a software will vary. For example, systems powered by solar panels will have much less gas emissions than systems powered by fossil-fuel plants.

Hence, instead of talking about energy consumption, many articles report its impact in terms of gas emissions.
This is particularly useful when we move from a software-level perspective to the level of the infrastructure. At the software-level, improving energy efficiency is the *de facto* approach to reduce gas emissions. On the contrary, at the infrastructure level there are many more issues besides energy consumption (electricity provider, e-waste, cooling equipment, etc.).

Hence, we resort to the **carbon footprint** to measure and communicate greenhouse gas emissions. It is formally named as **carbon dioxide equivalent**, commonly abbreviated as CO<sub>2</sub>-eq, CO<sub>2</sub>eq, CO<sub>2</sub>-e, and CO<sub>2</sub>e. It is measured in mass units, with different order of magnitude depending on the context:

- billion metric tones of carbon dioxide equivalent ($GtCO_2eq$) in country-wide or planet-wide studies 
- million metric tonnes of carbon dioxide equivalent ($MMTCDE$ or $MMT CO_2eq$)
- kilograms of carbon dioxide equivalent ($\text{kg}CO_2eq$). By default, use this one, as it is the SI unit for mass.

And because when we talk about gas emissions we are not only talking about carbon dioxide, we have to sum the emissions of all greenhouse gases. However, not all gases have the same impact on the environment. For example, $1\text{kg}$ of CH<sub>4</sub> is estimated to be 21 times more harmful to the environment than $1\text{kg}$ of CO<sub>2</sub>.

Hence, we used a weight function that combines all gas emissions into their carbon dioxide equivalent. It relies on the estimation of the impact of greenhouse gases on global warming over a period of 100 years when compared to carbon dioxide. This is a metric called *100-year global warming potential* and abbreviated as **100-GWP**. The table below shows the 100-GWP of the most common greenhouse gases.


| Greenhouse Gas                      | 100-GWP   |
| ------------------------------------|------:|
| Carbon dioxide $CO_2$          	    | $1$    |
| Methane $CH_4$	                    | $21$    |
| Nitrous oxide $N_2O$	              | $310$   |
| Sulphur hexafluoride $SF_6$        	| $23900$ |
{:class="center-block table table-striped table-hover" align="center"}

In sum, the weight function to calculate the $CO_2eq$ looks as follows:

$$CO_2eq = \sum_{g\in GHG}({GWP_{g}\cdot{} m_{g}}),$$

where $GHG$ is the set of all greenhouse gases, $GWP_g$ is the 100-GWP of a given gas $g$, and $m_g$ is the total mass of gas $g$ that was emitted.

As an example, imagine that to run our software system our electricity provider emits $1000\text{kg}$ of $CO_2$, $20\text{kg}$ of $CH_4$, $5\text{kg}$ of $N_2O$, and $0\text{kg}$ of the remaining greenhouse gases. Our $CO_2eq$ would be computed as follows:

$$CO_2eq = GWP_{CO_2}\cdot{} m_{CO_2} + GWP_{CH_4}\cdot{} m_{CH_4} + GWP_{N_2O}\cdot{} m_{N_2O}\\
  = 1 \times 1000 + 21 \times 20 + 310 \times 5 \\
  = 2670\text{kg}$$



Please, note that the 100-GWP is an estimation. One can only speculate about the impact of a gas in the global warming. Hence, some of these values are sometimes presented as a range, or may vary slightly amongst different sources. I am using the data from the The Intergovernmental Panel on Climate Change from the United Nations, which I consider reliable. Find the reference at the bottom of the article [(Forster et al., 2007)](#references). It includes an extensive list of GWPs, including HFC and PFC gases, which are missing in the table presented above.

  






 is not the same 
datacentres

carbon no nox cox


Carbon intensity

how to get carbon data from different countries

https://arxiv.org/pdf/2106.11750.pdf

Carbon aware computing


-- EDP energy delay product -- E*t or P*t^2 "This measure is used to give more importance to application runtime, with the goal of making both low energy and fast runtime applications"

Power W (cv, hp).
Power to Energy contumption
Energy J and KWh, mAh

Carbon. Carbon efficiency ≠ energy efficiency

Carbon credits

Green AI they recommend using the number of floating point operations (FPO).
Elapsed time.

### Useful resources 📚
{:id="references"}

If want to learn more about this topic, here are some follow-up pointers you should not miss:

- [The Principles of Sustainable Software Engineering](https://docs.microsoft.com/en-us/learn/modules/sustainable-software-engineering-overview/). A nice course designed Asim Hussein at Microsoft covering concepts such as carbon, carbon intensity, embodied carbon, and so on.
- Forster et al. (2007). [Changes in Atmospheric Constituents and in Radiative Forcing.][IPCC report]. *Climate Change 2007: The Physical Science Basis*. Cambridge University Press.
- [Why are milliampere hours commonly used instead of watt hours to measure battery capacity?](https://www.reddit.com/r/askscience/comments/7sfddg/why_are_milliampere_hours_commonly_used_instead/). Interesting discussion about the usage of \text{mAh} instead of joules to report battery specs.

https://docs.microsoft.com/en-us/learn/modules/sustainable-software-engineering-overview/3-carbon

[Plots source]: https://colab.research.google.com/drive/1h-AMu1DZyKprKHzjgmtJWhhCdAJhIwVm?usp=sharing
[Kyoto Protocol]: https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Glossary:Kyoto_Protocol
[IPCC report]: https://archive.ipcc.ch/pdf/assessment-report/ar4/wg1/ar4-wg1-chapter2.pdf
[Monsoon Power Monitor]: 