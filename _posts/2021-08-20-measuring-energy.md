---
layout: post
author: Luís Cruz
title: Scientific guide to collect and analyse Software Energy Consumption Data 
image: "img/blog/2021-07-20/og_image.png"
mermaid: False
equation: False
invisible: True
summary: ""
---

In my [previous post](/2021/07/20/measuring-energy.html), we have seen how to measure the energy consumption of a computer in a particular period of time. Although the data gives a reliable indication of the energy consumption, using it as part of an experimental methodology is far from trivial.

Even when replicated in the exact same computer, energy measurements may be affected by a number of different factors: hardware temperature (CPU, GPU, memory, etc.), room temperature, background tasks running in the system, thread schedule, and so on.

This type of uncertainty in measuring energy consumption creates major difficulties when assessing the energy consumption of a particular version of a software project. For example, energy tests that rely on a single measure will have a **high tendency of being flaky** – i.e., multiple execution of the same test will fail to produce the same result.

This problem takes another level if we are counting on these measurements to make **valid scientific contributions**. Some research projects in the past have underestimated this issue and failed to produce replicable findings. Hence, this article presents a roadmap on how to properly set up a scientific methodology to run energy efficiency experiments. It is divided in two main parts: 1) how to set up energy measurements with minimum bias, and 2) how to analyse and take scientific conclusions from your energy measurements.

Read on so that we can get your paper accepted in the best scientific conference.

--- 
#### 👉 Note:
If you are a **software developer** enthusiastic about energy efficiency but you are not particularly interested in scientific experiments, this article is still useful for you. It is not necessary to do "everything by the book" but you may use one or two of these techniques to reduce the likelihood of making wrong decisions regarding the energy efficiency of your software.

--- 

## Unbiased Energy Data ⚖️

### Warm up 📶

Energy consumption is highly affected by the temperature of your hardware. The higher the temperature, the higher the resistance of electrical conductors, leading to higher dissipation and consequently more energy consumption. If we start measurements right after the workstation comes back from sleep, it will probably be relatively cool. As soon as we start executing our energy tests, the temperature of the computer will rise until it reaches a plateau. This means that the first measurements will have less energy consumption for the sole reason of having been the first ones.

Typically, it is recommended to **run a dummy task before start measuring energy consumption**. This could take as long as **five minutes** and could be done by executing a CPU-intensive task, such as the Fibonacci sequence. Alternatively, my favourite approach is to run the same energy tests and **discard results in the end**.

<p class="lead"><i>Run energy tests a few times before keeping track of the measurements.</i></p>

### Repeat 🔁

The best way to make sure your measurements are reliable is by performing statistical hypothesis testing (more about this below). Mostly, it implies that we need to repeat measurements for a significant number of times. **The magic number for the repetition of measurements is 30.** This is currently the accepted sample size to make sure we have enough data to conduct a valid analysis. Less than 30 would also be acceptable, but it would be a pity if our results were not statistically significant for the mere reason that there were not enough data points. 

### Rest ⏸

Imagine that we repeat the same experiment 30 times without a single sleep between them. Our CPU will probably be warmer in the last experiment than in the first one. It is important to make sure that all measurements are executed under the same conditions. Hence, it is common practice to do a pause/sleep between executions. **There is no golden rule but one minute should be enough**. It can be more or less depending on your hardware or the duration of your energy test.

<p class="lead">Give it a one minute sleep between measurements.</p>

### Shuffle 🔀

It is not a mystery that energy consumption depends on so many factors that it is impossible to control all of them. If you are comparing two software versions, `A` and `B`, and execute the version `A` 30 times followed by `B` another 30 times, there are chances that between the first and the second half of measurements, the factors affecting the energy consumption have changed. Hence, the energy consumption of the two versions will be different also because the context has changed. To mitigate this issue it is important to **mix the executions of the different versions**.

But we don't stop there. In some mysterious cases, it might happen that after finishing the execution of version `A` the system is more likely to execute a particular background task than after version `B` (e.g., freeing up memory in the swap). If most measurements of version `A` happen after `B`, they will also be affected by the side effects of running `B`. In sum, there will be a bias in the measurements of `A` that has nothing to do with the execution of `A`. To mitigate this bias, we randomly pick the version to be executed so that after executing a `A`, the next executions can equally be `A` or `B`.

(PS: hope I did not confuse you with so many `AB`'s 🤓)

### Keep it cool 🌡

We have already settled that temperature affects energy consumption. Hence, we should not let the differences in the room temperature affect our measurements.
In scientific research, it is very common that experiments have to run over a few days. This means that some measurements will happen both during the night, with lower temperatures, and during the day, with higher temperatures. This bias has to be avoided at all costs.

**Always make sure there is a stable room temperature**. This is straightforward if the room where you are running the experiments is properly climatized. In the unfortunate case this is not possible, there is still an acceptable solution: collect the temperature at the same time you collect energy consumption data. Most computers already provide this information, so you can automatically log this data along with the rest of the energy results. Later on, discard measurements that were not executed under the same temperature. This is not ideal, as probably you will have to rerun your experiments multiple times before you get enough valid measurements. Still, it works and the results of your research paper are equally valid.


## Energy Data Analysis 📊

## Wrap-up

I hope you enjoyed the article. If you have any suggestions of other tools or if you have any questions about energy profilers just ping me over [Twitter](https://twitter.com/{{site.twitter_username}}) or by [email](mailto:{{site.email}}).

### Useful resources 📚

If want to learn more about this topic, here are some follow-up pointers you should not miss:

[^flaky-test]: A flaky test is a test that fails to produce the same result in multiple executions of the test.
