---
layout: post
author: Luís Cruz
title: All you need to know about Energy Metrics in Software Engineering 
image: "img/blog/2021-09-01/wordcloud.png"
mermaid: True
equation: True
invisible: True
summary: "Joules, watts, tonnes of CO2, kilowatt-hour, you name it. If you have read any article about energy consumption, you have probably come across these units. This medley of units can sometimes make it difficult to grasp key concepts in your read.
These units are not necessarily representing the same concept. For example, power (measured in watts) is different from energy consumption (measured in joules). Before diving into green software, we ought to be comfortable with the jargon. This article serves as a go-to source of truth for energy-related metrics."
---

There is no doubt that energy efficiency is a concern that is growing by the day amongst software engineers. Traditionally energy efficiency has been a requirement for software running in devices with limited energy capacity, for example mobile applications, or to cut down the electricity bill in in the massive datacentres across the globe.
Thankfully, concerns about environmental sustainability are becoming a top priority in our society, and the tech sector is not an exception.

Also, driven by personal interests, tech workers are becoming more interested in being part of organisations that do care about the environmental sustainability of their operations. Yet, literature around software energy efficiency can be difficult to grasp. Personally, I always find it difficult to compare all the different energy metrics across different articles. No wonder, to make things easier, many reports have been using measures that resemble day-to-day concepts. For example, [one bitcoin transaction is equivalent to more than one million VISA transactions](https://www.statista.com/statistics/881541/bitcoin-energy-consumption-transaction-comparison-visa/) (as of 2021). This is easier to grasp than saying that one bitcoin transaction requires more than six giga-joules. (well, six giga-joules sound massive anyway 🏭)

In this article, we will go on a tour around energy consumption metrics.

`TODO paper reminder`



## Energy

Energy is often referred to as work: for example, in electricity, energy is the work required to move charged particles.
The International System of Units (SI) defines *joule* (J) as the standard unit of energy. It is the most common unit of energy used in scientific literature. 

Another common unit is kilowatt-hour (kWh). It is commonly used, for example, to report household electricity consumption. Kilowatt-hour represents the exact same parameter as *joule* but in a much higher order of magnitude. Kilowatt-hours can be easily converted to/from joules:

$$ 1\text{kWh} = 3,600,000\text{J}$$


## Power

When measuring energy consumption, it is also common to talk about power consumption. Briefly, power represents the amount of work being done by unit of time. For example, using standard SI units, 1 unit of power is equivalent to 1 joule per second. Instead of joules per second, we call it watt (W), in memory of the Scottish inventor James Watt.

Not surprisingly, some energy profiler tools report power consumption instead of energy consumption.
In a previous post, I have covered state-of-the-art [tools to measure energy consumption from your computer](/2021/07/20/measuring-energy.html) — and this was the case of `Powerstat` and `PowerTOP`.
These tools report the average energy consumption.

Using power units instead of energy units is useful in particular scenarios. Imagine that we want to measure the energy consumption of reading a book in a device. Saying that reading a book spends 10J does not say much about its energy efficiency — the user could be reading for 1 minute or for 10 minutes. In those cases, it makes sense to talk about power consumption. On the other hand, if we talk about a bitcoin transaction, we really don't want to talk about power — we should rather be talking about the total energy consumption.

#### Power consumption is often not what matters <!-- highlight -->

In a software project, energy consumption is usually the go-to parameter. We want to analyse the project by use case: for example, the energy consumption of applying a filter to a photo, uploading a file to the server, etc. Hence, as rule-of-thumb, energy consumption is the parameter we should be reporting when testing energy in software projects.
To compute energy consumption using power consumption, we need to factor in the duration of the execution. Given the average power consumption ($\bar{P}$), and the duration of the execution ($\Delta{t}$) the energy consumption ($W$) is compute as follows:

$$ W = \bar{P} \dot{} \Delta{t}$$

Nevertheless, the above function only works when the power consumption is constant. It works fine when we deal with the average power consumption, but it does not work when we have a stream of power consumption measurements.
Power monitors, depending on their precision, might collect several power sample per second. Hence, before computing the total energy consumption, one needs to combine and process power data and respective timestamps.

The process is straightforward but it is important that we understand the underlying concepts. Energy consumption ($W$) is the integral of power consumption ($P$) over the time needed ($t_n - t_0$) to execute a given software operation:

$$W=\int_{t_0}^{t_n}P(t) dt$$

As always, it is easier to grasp ideas from visualisations. The figure below depicts a line plot with power in the y axis and time in the x axis. The integral – i.e., energy consumption – is basically the grey area under the line and between the beginning ($t_0$) and the end ($t_n$) of the execution.

![Power plot](/img/blog/2021-09-01/plot_power_function.svg){: class="center-block" width="500px" }
<p class="text-center text-muted"><small markdown="span">Plot of power consumption over time. The area in gray is equivalent to the energy consumption between $t=1\text{s}$ and $t=9\text{s}$. [View source][Plots source].</small></p>

Yet, no power monitor will give us the precise mathematical function to compute the exact energy consumption. In the best case scenario, it retrieves a sequence of the values of power consumption and respective timestamps.
Hence, instead of a line, we actually have a sequence of points, similar to the plot below:

![Power sample plot](/img/blog/2021-09-01/plot_power_sample.svg){: class="center-block" width="500px" }
<p class="text-center text-muted"><small markdown="span">Scatter plot of the power samples that were collected by a power monitor. The black dots represent the power measurements, which were collected at the rate of 1 sample per second. The dashed line represents the real power consumption.  [View source][Plots source].</small></p>

It is up to us to connect the dots and compute the energy consumption – i.e., the area under the curve:

![Power sample plot](/img/blog/2021-09-01/plot_power_trapezoid.svg){: class="center-block" width="500px" }
<p class="text-center text-muted"><small markdown="span">Plot showing how the energy consumption, in the grey area, can be extracted from a sequence of power measurements.  [View source][Plots source].</small></p>

If we take a closer look to the plot, we observe that the area under the curve is approximately equivalent to the sum of multiple trapezoids. Hence, to estimate the energy consumption we simply have to sum the areas of the trapezoids.

This is basically the mathematical approach to approximate an integral – the *Trapezoid rule*. It is formulated as follows (it might be useful if you are considering running energy tests):

$$\int_{t_0}^{t_n}P(t) dt \approx \frac{\Delta t}{2} [ P(t_0) + 2P(t_1) + 2P(t_2) + ... + 2P(t_{n-1}) + P(t_n) ]$$

Note that, as revealed by the figure above, the final result is only an approximation of the real energy consumption. The smaller the interval between measurements the more realistic is the approximation.

## mAh

## Carbon

Greenhouse gas emissions due to human activities are at the heart of the recent heating of Earth's climate system – a phenomena coined as *Global Warming*.

The greenhouse gases that most affect global warming are Carbon Dioxide (CO<sub>2</sub>) and Methane (CH<sub>4</sub>). Yet, many other gases are also part of the issue: 

The impact of 1 Joule in the environment is not the same for every work/operation. Depending on the power source the environmental impact of a software will vary. For example, systems powered by solar panels will have much less carbon emissions than systems powered by fossil-fuel plants.

Hence, when we move from software level to the level of the infrastructure we may want to look into carbon was well.

 is not the same 
datacentres

carbon no nox cox








Power W (cv, hp).
Power to Energy contumption
Energy J and KWh, mAh

Carbon. Carbon efficiency ≠ energy efficiency

Carbon credits

### Useful resources 📚

If want to learn more about this topic, here are some follow-up pointers you should not miss:

- [The Principles of Sustainable Software Engineering](https://docs.microsoft.com/en-us/learn/modules/sustainable-software-engineering-overview/). A nice course designed Asim Hussein at Microsoft covering concepts such as carbon, carbon intensity, embodied carbon, and so on.


https://docs.microsoft.com/en-us/learn/modules/sustainable-software-engineering-overview/3-carbon

[Plots source]: https://colab.research.google.com/drive/1h-AMu1DZyKprKHzjgmtJWhhCdAJhIwVm?usp=sharing