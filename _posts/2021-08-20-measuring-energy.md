---
layout: post
author: Luís Cruz
title: Scientific guide to collect and analyse Software Energy Consumption Data 
image: "img/blog/2021-07-20/og_image.png"
mermaid: False
equation: True
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

### Zen mode 🧘🏾‍♀️

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

After having all the data collected, there is still quite some work to do before we can jump into conclusions. The most obvious approach would be that we compute and compare the means of each 30-size sample. That's not too far from reality but there are still a few steps we need to make before we can reliable use mean differences. In particular, we need to account the existence of errors and that these errors may not affect the measurements of two different versions in the same way. Hence, we perform an exploratory analysis on the samples to **discard unexpected biases** and then **perform hypothesis testing** to finally compare results.

### Investigating unexpected biases

We need to investigate whether there were unexpected errors during measurements. 
Despite the meticulous preparation to set up a reliable measurement setup, there are still unexpected events that can randomly appear and ruin our measurements.
Hence, now that we have all data, we need to search for measurements that are not representative of a common execution of the software. For example, it is quite common that, somewhere amongst the 30 executions, there is one or two were interrupted by some unexpected error – consequently, the execution is shorter and spends less energy – falsely appearing as more energy efficient. In other cases, it could happen that the system executed an unexpected task that seldom happens and we did not anticipate. We need to get rid of all these samples since they create unwanted bias in our results.

There are a few strategies to detect and mitigate this errors. The first setup is to create a plot of the distribution of the each sample – i.e., the distribution of the energy consumption of each software version. My favourite plot for this purpose is the violin plot.

- Figure Violin Plot...

The plot above shows that the distributions have a bell shape. They are most likely to follow a Normal distribution. This is exactly how we want our energy data to look like.
Now imagine that we had a few data points that were deviating from our distribution. The shape of the distribution would start looking somehow like this:

The problem when your distribution is not Normal is that we cannot confidently say that the errors that affected the energy consumption of the measurements version A were affecting the version B with the same probability.

Hence, the question we need to make is: why are these measurements deviating from the Normal distribution? There are a myriad of potential explanations, but there are a few that happen 99% of the time:

1. **Your tests are not fully replicable** or are not deterministic. This is particularly common in user interface tests. It could happen for example that your user interface takes longer to refresh and the rest of the test will behave differently because the expected interface elements were not available at the right time. This is also frequent with network requests. 

2. **There was an error in some of the executions**. This means that a few particular measurements deviated from the others because there was some exception being raised. This is similar to the previous one but somehow easier to detect: often, these measurements appear at the bottom of the distribution with the lowest energy consumptions.
3. **There was an unusual task being ran by the system** or another application at the same time of the execution. It could happen, for example, that the system received a notification and reacted to it. It is important that all notifications are muted and that there no other applications running at the same time. However, there will always be an unexceptional case that we did not consider and, next time you know, your system is opening the Microsoft AutoUpdate. Another example, it could happen that another user logged in to your system or that someone inserted a new hardware at some point, and so on and so forth.
4. **Your computer entered a different power mode**. Modern systems have all kinds of mechanisms to optimise the battery life and performance of your computer. Worst case scenario, in the middle of the execution your computer decided to enter a sleep mode. If your measurement did not break it probably took more time than it should to finish. Many other exceptional behaviours can happen, and they all need to be discarded if we want to have reliable measurements that can be used for comparison.
5. **External physical conditions have changed**. Despite all the hassle you had to control the temperature and other external factors, there are still unexpected variables that may disruptively affect the energy consumption. For example, someone opened a window in the middle of your experiments. From that point on all the measurements will have a slight change. If that change is too big the distribution of measurements will no longer be Normal.
6. **Any paranormal phenomena 👻**. Even if you cannot explain it, if it's not normal, don't trust it.

Drawing the plots is the easiest way to get some intuition on whether the distribution is Normal. Still, that can be disputable and you don't want the reviewers of your paper raising second thoughts about it. Hence, use the well-reputed statistic test for normality – [Shapiro-Wilk test](https://en.wikipedia.org/wiki/Shapiro–Wilk_test). In short, all your samples should have a p-value above 0.05.

### What to do if the samples are not Normal?

In case some of your samples do not follow a normal distribution. We have two options:

1. **Repeat the experiments**. Preferably, start by finding out what happened (the time of execution may help) and fix the issue. We don't want to deal the same issues all over again in a second (or third!) round.
2. **Remove outliers**. If you suspect that there were only a few data points deviating from the rest of the sample, you can perform the z-score method to detect and remove outliers.

To perform outlier removal, you basically remove all data points that deviate from the mean more than 3 standard deviations – i.e, $\left\| \bar{x}-x\right\|   > 3s$, where $\bar{x}$ is the sample mean, $x$ is the value of the measurement and $s$ is standard deviation of the sample.

If you perform outlier detection, I recommend you do it for every sample, for consistency. Otherwise, you might be accused of cherrypicking – i.e., only performing outlier removal in the cases that support the results you are striving to obtain.

One side effect of removing outliers is that you will no longer have 30-size samples. That is still okay for the kind of analysis that we want to do with our energy data. Anything above 25 measurements should be fine. If you end up with less than that – i.e., you have more than 5 outliers — you should check what went wrong and seriously consider rerunning the experiments.

### Statistical Significance

Now that we have finally been able to collect reliable measurements, it is time to compare the energy consumption of our samples.
The most obvious way is to compare the means of the samples. If energy consumption of `A` is bigger than `B` then `A` on average **was** less energy efficient. That's true. Yet, as researchers, we want to make sure our results generalise: we want to say that `A` **is** less energy efficient. In other words, we want to make sure that if we repeat our measurements, we will most likely repeat the same conclusion that `A` is less energy efficient — despite the potential errors implicit in the measurement of energy.

The common scientific approach to assess whether results are replicable is by performing statistical significance testing. Since our data follows a Normal distribution, I typically use the two-tailed parametric test [Welch's t-test](https://en.wikipedia.org/wiki/Welch%27s_t-test) with a significance level of $\alpha = 0.05$.

We can formulate our hypothesis test as follows:

$H_0$: The means of energy consumption of version `A` and `B` are equal.
$H_1$: The means of energy consumption of version `A` and `B` are different.

Where $H_0$ is the null hypothesis and $H_1$ is the alternative hypothesis.
Hence, in order to come down to the conclusion that `A` is more or less efficient than `B` we need to reject the null hypothesis. In other words, the p-value needs to be less than 0.05.

--- 
#### 👉 Note 1: 
**Avoid using the popular [Student's t-test] test** for significance testing with energy consumption measurements. It has the underlying assumption that the population variances are equal. This is not necessarily assured in our experimental setup. The good news is that the Welch's t-test does not rely in such assumptions and it has almost the same statistical power.
---

### Effect size

So now that we scientifically proved that the energy consumption is indeed different we can now compare the means of the energy consumption. It is always nice to report the mean difference that can be computed as follows:

$\Delta \bar{x} = \bar{x}_A \bar{x}_B$

I suggest you look into other effect-size measures, for example Cohen's-*d*, which provides a better idea of whether the mean difference is small, medium, or large, by considering the standard deviation as well.

Most importantly, you should also discuss the practical effect size. More important than demonstrating that you have a new version that is more energy efficient, you need to demonstrate that the benefits will actually be reflected in the overall energy efficiency of a normal usage of the software. For example, if you prove that your new version will save 1 joule of energy throughout a whole day of intensive usage of your cloud software, it will probably be best if you keep the previous version. 

Unfortunately, there is not a specific fancy metric for the practical effect size. But of course, your paper should never miss this kind of critical analysis in your research paper.



## Wrap-up

I hope you enjoyed the article. If you have any suggestions of other tools or if you have any questions about energy profilers just ping me over [Twitter](https://twitter.com/{{site.twitter_username}}) or by [email](mailto:{{site.email}}).

### Useful resources 📚

If want to learn more about this topic, here are some follow-up pointers you should not miss:

[^flaky-test]: A flaky test is a test that fails to produce the same result in multiple executions of the test.
