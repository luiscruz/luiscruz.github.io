---
layout: post
author: Luís Cruz
title: How to Measure Energy Consumption in your Desktop or Server 
image: "img/blog/og_image.jpg"
mermaid: True
equation: True
invisible: True
---

Developing green software is the new tech skill that is becoming more and more important. Soon, every tech company will be embracing a green digital transition.
Most software engineers do not have training on this. Hence, I wrote this article so that any practitioner interested in measuring can find here a roadmap to get them started.

The first step towards developing energy-efficient code is being able to measure it. After all, how can you say your code is green if you cannot measure it? Hence, in this article, we are going to cover 4 different ways of measuring the energy consumption of your code. There is not a single approach since different platforms require different strategies. For example, some tools only work with Intel CPUs, other only work with a particular OS, and so on.
Every time I want to measure energy consumption, I have to study a ton of different tools before I find the right power tool that works with my software system. This article will help you skip that part of the deal.


## Power Monitors vs Energy Profilers

The most accurate strategy to measure energy consumption is using power monitors – hardware tools that connect to the power source of your device or component and measure the actual power leveraged at any instant of time.
Despite being extremely precise, **power monitors are also extremely difficult to set up**. Often, they require you to make custom changes to your computer device.

![Monsoon Setup](/img/blog/2021-07-20/monsoon_setup.png){: class="center-block" width="400px" }
<p class="text-center text-muted"><small>My setup to measure the energy consumption of Android apps using a power monitor device.</small></p>

What's more, you will need to find a way of time syncing the power data with the execution of your software. Some power monitors already come with an API that allows controlling the power monitor – starting, stopping, collecting measurements. The problem takes another level if you are working with a team of developers that should also run some energy tests in their local workstations. I have previously written about [how to use a Power Monitor to measure energy consumption](https://tqrg.github.io/physalia/monsoon_tutorial) – it is not easy at all.

[^monsoon-tutorial]: My "quick" tutorial on how to measure energy consumption with Monsoon: [https://tqrg.github.io/physalia/monsoon_tutorial](https://tqrg.github.io/physalia/monsoon_tutorial).

But don't give up just yet. Energy profilers have come to our rescue – they do not require any special hardware or fancy power sensors. They typically have an estimation model of the power cost of the different hardware components. Based on which components are active during execution, the profiler estimates a particular energy cost.

Energy profilers are usually shipped as easy-to-use tools that you can simply run from any device to get a final number: the total energy consumption. It is easy to time sync with your software execution: you start the profiler when you start the execution and you stop it when the execution ends.

## Choosing the right energy profiler

Since energy profilers rely on estimations, they can only operate under very specific environments. Hence, there is no one-size-fits-all profiler and finding one that works for a given case is far from trivial.

Below I select a few energy profilers I have used in the past and I explain how to get started with them.

---
#### ⚠️ Before we start

When measuring energy consumption, one cannot isolate the software from the system where it is running. Thus, it is extremely important that we reduce the extra work in your device to the bare minimum. Make sure that there are no unnecessary applications or processes running in your device. Also, if you are running in a battery-powered device, it is usually recommended to remove the power-plug as it might affect measurements in some setups.

---

### Intel Power Gadget

<small>📝 Works with Mac or Windows on Intel PCs.
Download and Installation instructions: [https://software.intel.com/content/www/us/en/develop/articles/intel-power-gadget.html](https://software.intel.com/content/www/us/en/develop/articles/intel-power-gadget.html)</small>

In my opinion, this is the easiest energy profiler one can use. It provides a graphical user interface with a few plots showing CPU utilisation (%), frequency (GHz), temperature (ºC), and power (W).

![Intel Power Gadget](/img/blog/2021-07-20/intel-power-gadget.png){: class="center-block" width="400px" }

To collect the energy consumption you simply have to click on the menu `Logging > Log to File` to start measuring and another time to stop it.

![Intel Power Gadget Menu](/img/blog/2021-07-20/intel-power-gadget-menu.png){: class="center-block" width="400px" }

The power data will be collected and stored in a CSV file under your Documents folder (default behaviour). I have run a small test and, in my case, it stored the data in the file `~/Documents/PwrData_2021-2-19_17-16-10.csv`.

If you open the CSV file (you can use Excel, for example) you will find several columns. Some are straightforward – e.g., `System Time`, `Elapsed Time (sec)`, `Processor Power_0(Watt)` – while others tend to be more complex – e.g., `RDTSC` `GT Requsted Frequency(MHz)`.

Let's not worry too much about it. If you scroll all the way down to the bottom of the file, there is a summary table with a few important attributes:

- **Total Elapsed Time (sec)**. The total time in seconds in which power data was being collected.
- **Cumulative Package Energy_0 (Joules)**. The total energy consumption of the processor.
- **Cumulative DRAM Energy_0 (Joules)**. The total energy consumption of the volatile memory.

![Intel Power Gadget Data](/img/blog/2021-07-20/intel-power-gadget-data.png){: class="center-block" width="400px" }

Et voilà. You can do this whenever you are executing a particular use case of your software that you want to optimise. In my opinion, this is the easiest easy to get someone started in energy measurements. Its graphical user interface has a flat learning curve. However, if you want to create an automated script to measure the energy consumption of your software, clicking through menus is not ideal. As it turns out, the main strength of the Power Gadget is also its main weakness: the graphical interface is not suitable for automation.


### Intel PowerLog

<small>📝 Works with Mac or Windows on Intel PCs.</small>

If you install the [Intel Power Gadget], it ships internally with a command-line interface tool: **PowerLog**. To run it, we have to locate the tool inside the Power Gadget bundle. For example, on a Mac, you will probably find it under the `/Applications` directory: `/Applications/Intel\ Power\ Gadget/PowerLog`.

Hence, you can simply run it like this:

```bash
/Applications/Intel\ Power\ Gadget/PowerLog -file <RESULTS_FILE> -cmd <CMD>
```

where `<RESULTS_FILE>` is the name of the CSV file where the power data is stored and `<CMD>` is the actual command you want to execute. It could be, for example, your test script. For simplicity, try running a sleep command for a few seconds:
  
```bash
/Applications/Intel\ Power\ Gadget/PowerLog -file results.csv -cmd sleep 2
```

It will generate the CSV file `results.csv` that looks the exact same way as the Intel Power Gadget data above.

### Powerstat

<small>📝 Works with Linux on a compatible Intel PC. [Manual pages](http://manpages.ubuntu.com/manpages/bionic/man8/powerstat.8.html).</small>

If you are developing your software in a Linux environment, Intel Power Gadget or PowerLog are not the right energy profilers for you. Powerstat was developed by Colin King and it is the most simplest tool I have come across to measure energy consumption on Linux. Here is how to use it.

First, install it using a suitable package manager. E.g., `apt-get`:

```bash
sudo apt-get install -y powerstat
```

Similarly to the previous tools, `powerstat` is just another nice wrapper around an Intel library named RAPL, which stands for Running Average Power Limit. However, it provides a simple interface to execute it using the command line. You can run a power measurement with the following:

```bash
sudo powerstat -R 60 1
```

By default, it runs the measurement for 100 seconds (10 samples at 10-second intervals), but you can easily change that when calling the tool. In this case, we are measuring **60 samples at 1-second intervals**.

The output consists of a table with several stats per sample. The table includes a column named `Watts`, which refers to the average power leveraged in each sample.

At the bottom of the output, `powerstat` yields a summary which, amongst other things, presents the average power of CPU in Watts. Example:

```
Summary:
CPU:   8.38 Watts on average with standard deviation 2.53  
Note: power read from RAPL domains: package-0, uncore, package-0, dram, core, dram, psys.
These readings do not cover all the hardware in this device.
```

---
#### ⚠️ Always remember:
Power – measured in Watts – is different from energy consumption – measured in Joules. To compute the energy consumption ($$E$$), in Joules, you need to multiply the average power ($$P$$), in Watts, by the elapsed time in a given sample (\Delta t) in seconds:

$$E = P.\Delta t$$

---

In this case, we ran the measurement for a total of 60 seconds. Hence, our total energy consumption is $$ 8.38\text{W} \times 60\text{s} = 502.8\text{J}$$.


### PowerTOP

<small>📝 [Official webpage](https://01.org/powertop). Available on [Github](https://github.com/fenrus75/powertop). Works on Linux with AMD or Intel devices; also tested on virtual machines.
</small>

PowerTOP is another powerful tool to measure and monitor energy consumption. Its main advantage is the ability to estimate energy consumption in devices with an AMD processor. However, PowerTOP use cases go beyond simple energy consumption measurements. For example, it provides an interactive mode that allows users to fine-tune power management settings in their Linux system. Hence, it can sometimes be a bit overwhelming, but overall a great alternative.

Here is how I use PowerTOP:

```bash
sudo powertop --csv=output.csv -t 20
```

The `--csv` option prevents PowerTOP from entering the interactive mode, and sets the output to be stored in the file `output.csv`. The option `-t 20` sets that the measurement will run for 20 seconds.

Although the option `--csv` is set, the output is not exactly a CSV file. It rather includes a dull dump of text mixed with tables formatted in a "CSV-like" format. There are however tons of useful information in the output. For example, it includes a fine-grained estimation of the power consumption of each process in the system.

```nix
____________________________________________________________________
 *  *  *   Overview of Software Power Consumers   *  *  *

Usage;Wakeups/s;GPU ops/s;Disk IO/s;GFX Wakeups/s;Category;Description;PW Estimate
172.9 us/s; 24.9;;;;Timer;tick_sched_timer; 98.5 mW
296.0 us/s; 22.9;;;;Process;[PID 313728] /usr/bin/containerd ; 90.8 mW
 96.5 us/s; 16.2;;;;Process;[PID 11] [rcu_sched]; 64.2 mW
225.5 us/s; 14.1;;;;Process;[PID 313736] /usr/bin/containerd ; 56.0 mW
409.9 us/s; 12.3;;;;Process;[PID 361909] /usr/bin/vmtoolsd ; 49.4 mW
232.0 us/s; 12.1;;;;Process;[PID 313737] /usr/bin/containerd ; 48.3 mW
 24.5 us/s;  4.9;;;;kWork;fb_flashcursor; 19.4 mW
 21.4 us/s;  4.8;;;;kWork;vmw_fence_work_func; 19.0 mW
156.0 us/s;  3.9;;;;kWork;psi_avgs_work; 15.8 mW
309.8 us/s;  3.4;;;;kWork;vmw_fb_dirty_flush; 13.9 mW
 29.4 us/s;  3.3;;;;kWork;gc_worker; 13.1 mW
311.6 us/s;  1.7;;;;Timer;hrtimer_wakeup; 7.19 mW
 23.8 us/s;  1.2;;;;Interrupt;[17] ioc0; 4.97 mW
 39.7 us/s;  1.0;;;;Process;[PID 811] /usr/sbin/ntpd -p /var/run/ntpd.pid -g -u 113:117 ; 4.20 mW
 15.5 us/s;  1.0;;;;Timer;watchdog_timer_fn; 3.97 mW
  4.4 us/s;  1.0;;;;kWork;vmballoon_work; 3.95 mW
  6.0 us/s;  0.9;;;;kWork;mpt_fault_reset_work; 3.76 mW
 15.8 us/s;  0.8;;;;kWork;vmstat_shepherd; 3.38 mW
  1.1 ms/s; 0.15;;;;Process;[PID 377852] powertop --csv=output.csv -t 20 ; 2.33 mW
[...]
```

For the sake of simplicity, let's focus on the main thing we want to collect – i.e., energy consumption. In the file, under the table entitled `Overview of Software Power Consumers`, there is a line with the following:

```nix
The system baseline power is estimated at:  5.43  W;
```

This means that, on average, our processor and main memory leveraged 5.43W of power during the 20 seconds of execution. As [mentioned before](#%EF%B8%8F-always-remember), this is not the energy consumption (yet!). The total energy consumption in this measurement is computed by multiplying the average power by the duration of the measurement:

$$E = P.\Delta t = 5.43\text{W} \times 20\text{s} = 108.6\text{J}$$

PowerTOP is a powerful tool and its potential goes beyond a simple measurement of energy consumption. This is especially true when it is run on battery-powered devices. Nevertheless, this is the simplest use case to get you started. If you want to delve into it, check out the user manual available in [PowerTOP's webpage](https://01.org/powertop).



## I know how to "get the Joules" – now what?

Interpreting the values of energy consumption is not a trivial thing to do.
The simplest and most effective approach is by comparing the energy consumption of two different versions of your software **during the same use case scenario**:

1. Create a reproducible scenario of the execution of your software. Preferably this should be an automated script – e.g., using a unit test framework.
2. Execute the scenario in a version of your software. Use the energy profiler to measure the energy consumption.
3. Improve your software in parts of the code that you suspect have low performance.
4. Execute the same scenario with the new version. Compare the energy data in this version with the previous one.

With this analysis, you can already have an idea of how the energy efficiency of your software is evolving. You could even consider adding this analysis to your continuous integration pipeline.

Yet, even with this analysis, one could still argue that, given a scenario that costs 1, 10, 100, or 1000 Joules, it is not easy to say whether it is efficient or not. It is indeed difficult to define the exact threshold of energy-efficiency. Yet it is still relevant understanding the regression of the energy consumption of a given use case. It allows us to understand whether the software is evolving in the right direction.

Another relevant analysis is comparing the energy consumption of the different use cases in a given version of the software:

1. Create reproducible scenarios for different use cases of the software.
2. Execute and measure all the scenarios.
3. Compare the energy consumption of each of them.

This analysis allows you to identify particular parts of the code that require some optimisation. 

--- 
**👉 Note:** I find the analysis by use case more interesting than by other software units (e.g, methods). It is easier to have a notion of which use cases are more frequent in a real usage scenario. For example, if we are analysing the energy consumption of a video player, it is more important to make sure it is energy efficient in the use case of playing a video than in the use case of exporting it to a different format. They are both important, of course, but thinking by use case allows you to easily communicate your findings with other stakeholders (even non-technical) and helps you prioritise optimisation efforts in a "world" where energy efficiency is not the top priority.

--- 

## Alternative tools not covered here

There are many other energy profilers out there. In this article, we are only covering the minimum set of profilers that you have to learn to be able to measure energy consumption in most software systems. If you are curious and want to give a try here is a list of alternative profilers:

- [Intel RAPL](https://01.org/blogs/2014/running-average-power-limit-–-rapl). This is internally used by almost every energy profiler for Intel devices out there.
- [Android Runner](https://github.com/S2-group/android-runner). Supports multiple energy profilers and power monitors for Android devices.
- [Trepn Profiler](https://play.google.com/store/apps/details?id=com.quicinc.trepn&hl=en). Energy profiler for Android applications developed by Qualcomm. It has been used by many researchers but it is no longer being maintained.
- [MLCO2](https://mlco2.github.io/impact/)
- [Website Carbon Calculator](https://www.websitecarbon.com). Measure how green is your website when compared to other websites out there. It provides a rough estimation of the carbon footprint of a webpage based on the data transferred while loading it.
- Windows Energy Estimation Engine (E3). Built-in tool available on Microsoft Windows. Check out the [tutorial by Scott Chamberlin](https://devblogs.microsoft.com/sustainable-software/measuring-your-application-power-and-carbon-impact-part-1/).



## Wrap-up

In this post, we have covered 4 energy profilers that will help you measure the energy consumption of virtually any desktop/server software. Regardless whether you are working on an academic project or a production-ready software, it is always worthwhile keeping an eye on energy efficiency. There is still a long way to go on developing energy efficient code, but knowing how to measure energy consumption is the first step.

Keep in mind though that these tools only provide an approximation of the energy consumption. For instance, after a few experiments you will notice that re-running the same measurement multiple times will give you slightly different results. That is something I might cover in more detail in a future post.

I hope you enjoyed the article. If you have any suggestion of other tools or if you have any question about energy profilers just ping me over [Twitter](https://twitter.com/{{site.twitter_username}}) or by [email](mailto:{{site.email}}).
 
<div class="mermaid">
graph TD
A[Which Energy Profiler should I use?] --> C{OS?}
C -->|Mac| D{Comfortable with<br/> the command-line?}
D -->|Yes| DY[Intel PowerLog]
D -->|No| DN[Power Gadget]
C -->|Linux| E{Processor?}
E -->|Intel| F[Powerstat or PowerTOP]
E -->|AMD| PowerTOP
C -->|Windows| D
</div>


#### Useful resources


- [Ubuntu docs on Power Management: Identifying Issues.](https://wiki.ubuntu.com/Kernel/PowerManagement/IdentifyingIssues). It provides a list of different tools that will help you debug power management issues on Linux systems.

- [Energy Patterns for Android Applications](https://tqrg.github.io/energy-patterns/). A catalog of 22 energy patterns. Although these patterns were tuned for Android apps, they might inspire you on energy-efficient solutions for your server/desktop software projects.



#### Footnotes