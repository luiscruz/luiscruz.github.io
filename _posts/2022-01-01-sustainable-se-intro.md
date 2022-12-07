---
layout: post
author: Luís Cruz
title: "The Five Dimensions of Sustainable Software Engineering and How Education Can Help!"
image: "img/blog/2022-sustainable-se/og_image.png"
show_image: True
mermaid: False
equation: False
draft: False
invisible: False
summary: Many software organisations are racing to beat their competitors in terms of sustainability. It is a flag that no one wants to stand behind. However, the whole discipline is till very new and doing it right is far from easy. Despite being a honourable cause, the pressure to beat the market and meet the expectations of their users might lead to imprecisions. Intentionally or not, we want to avoid such imprecisions to give the podium to the wrong players. In this article, we talk about the five dimensions of sustainability, green washing, what it takes to certify software sustainability, and why education is quintessential to make the difference.
---

A lot has been recently written about Sustainable Software Engineering.
As nicely captured by the comic below, sustainability is a buzz word. It has been recently waken up by the growing number of citizens worried about climate change and the passiveness of humanity. Greta Thunberg's speech in 2018 sparked the interest of millions of young people around the world demanding action for climate change.

![Humorous plot showing the usage of sustainability in english text by year.)](https://imgs.xkcd.com/comics/sustainable.png){: class="center-block" width="550px" }
<p class="caption" markdown="span">Sustainability is definitely a buzz word. Source: [xkcd](https://xkcd.com/1007/)</p>


Currently, all economical sectors are reinventing their businesses to become environmentally responsible. The fashion industry is featuring new lines of products that use eco-friendly textiles; the food industry is exploring new products such as plant-based alternatives to animal-derived foods; the transportation sector is shifting towards electric vehicles, which can be powered by clean energy sources.

The same concern is growing in the software industry sector. Tech organisations are starting initiatives to be carbon free in a near future. For example, Google[^GoogleSustainability], Microsoft[^MicrosoftSustainability], Meta/Facebook[^MetaSustainability] have publicly expressed their intent to be carbon free by 2030.


In this article, we define **what** is software sustainability and **how** education is quintessential to
enable it. We do not go over **why** we must care about software sustainability – there is already enough
content about it. Hence, we talk about the five dimensions of sustainability, green washing, what it
takes to certify software sustainability and how education will make the difference. Finally, we
introduce the very first course on Sustainable Software Engineering at TU Delft.

## What is software sustainability?

Before delving into how tech companies are leading the transition to climate neutrality, we need to define Sustainable Software Engineering. Despite being used for eco-friendly matters, sustainable software engineering goes way beyond the environment realm. My favourite definition of sustainable software is proposed in the Karlskrona Manifesto[^KarlskronaManifesto] and encompasses five domains:

![The five domains of Sustainable Software Engineering: Individual, Social, Technical, Economic, Environmental](/img/blog/2022-sustainable-se/domains.svg){: class="center-block" width="350px" }
<p class="caption" markdown="span">The five domains of Sustainable Software Engineering</p>

- **<green>Environmental:</green>** concerned with the long term effects of human activities on natural systems. This dimension includes ecosystems, raw resources, climate change, food production, water, pollution, waste, etc.
- **<green>Social:</green>** concerned with societal communities (groups of people, organisations) and the factors that erode trust in society. This dimension includes social equity, justice, employment, democracy, etc.
- **<green>Individual:</green>** refers to the well-being of humans as individuals. This includes mental and physical well-being, education, self-respect, skills, mobility, etc.
- **<red>Economic:</red>** focused on assets, capital and added value. This includes wealth creation, prosperity, profitability, capital investment, income, etc.
- **<red>Technical:</red>** refers to longevity of information, systems, and infrastructure and their adequate evolution with changing surrounding conditions. It includes maintenance, innovation, data integrity, etc.


All these dimensions are important and interact with each other. For example, environmental sustainability is important for social sustainability and cannot ruin the economical sustainability of a project.

It is no surprise that some of these five dimensions have been given more importance throughout the history of software engineering.
For example, tech organisations undertake severe scrutiny when it comes to have a business model that is **economically sustainable**. Startups go over different rounds of funding where economical sustainability is the main concern. 
**Technical sustainability** comes right after economical sustainability. In the early versions of a software product, prototypes and proof-of-concepts are the main artefact being used to assess whether the product might be (economically) sustainable. Right after this stage, stakeholders start thinking about technical sustainability — e.g., how to build the product in a way that is scalable and maintainable in the long run.

Social, Individual and Environmental Sustainability have been historically overlooked in Software Engineering.
Starting with **social sustainability**, the way the social media industry has been dealing with fake news is a good example of how the software industry is failing in this dimension. We have also seen how social media can be used as a powerful weapon against democracies. The [Facebook–Cambridge Analytica data scandal] is a good example of that: political campaigns have used personal data from social media without their users' consent to create highly targeted digital ads and manipulate the electorate.
Most of the measures of social sustainability are coming from external pressure: the European [General Data Protection Regulation][GDPR] stemmed from citizens and politicians' concerned about personal data misuse 

**Individual sustainability** has also been on the spotlight recently. The well-being of employees is a quintessential aspect for the success of an organisation. However, it is not unusual seeing mainstream tech companies promoting the culture of working extra hours as a secret to excellence and success. Several factors such as work–home balance, social environment, job autonomy, physical health affect the well‐being of tech professionals. Companies that want to excel in the long run ought to take into account individual sustainability. Unfortunately, some leaders fail to have this vision – as we have seen with Elon Musk and some of the opinionated remarks. Nonetheless, little research has been done in this topic. More research would make such discussions much more effective and less based on intuition. However, most of the scientific work published in top-tier software engineering conferences focuses on software testing, debugging, architecture, and so on[^SETopics] – it actually makes sense, but that's another story.

Finally, **environmental sustainability**. Recently, when we refer to sustainability we are actually talking about environmental sustainability. Another term for environmentally sustainable software is **Green Software** which is the branch of Software Engineering that studies the ***development of software that has minimal impact in our planet throughout its whole lifecycle***. Building a green software system requires looking at the software in many different levels: the impact of developing, using, serving the software, and so on. This needs to account for the energy consumption from all the software-related activities, from building and cooling down datacenters, replacing hardware (a.k.a. e-waste), etc.

### Economical Sustainability requires Environmental Sustainability 🎉

Historically, environmental sustainability is mostly seen as a value but it is immediately discarded when it stands in the way of economical sustainability. It is consensual that the environment is important, but it should not be in the way of "progress".

Regardless of whether this is right or wrong – i.e., if there can be a trade-off between technical/economical progress and the environment – the mainstream mindset is finally shifting. 
Software consumers have started to worry about the climate impact of their behaviour as users. They are actively inquiring about the sustainability of their software providers and opting for eco-friendly alternatives even if there is an extra cost associated with it (within reason).

On top of that, tech companies that are sustainable are more able to attract talent. Software engineers prefer working to organisations that align with their personal values. Hence, by actively making processes more sustainable, software organisations become more attractive to the best workers of the tech industry.

Hence, being environmentally sustainable has become an important competitive factor. It is now a key enabler to achieve economical sustainability!

### Green washing

Marketing teams have realised how our society is eager to become greener and are making sure that any eco-friendly aspect of a product is highlighted when advertising it. This is of course a very important task. We want to make sure green software services and products are economically viable and can compete against any ordinary software. There is no shame in advertising the good things a company is doing in terms of sustainability.

However, sometimes, we see examples of organisations that are not necessarily eco-friendly but want to be perceived as such by the main public. This is called green washing.

Some forms of green washing are quite explicit and easy to spot. For example, the main branding colours of McDonalds used to be orange/red and yellow. Apparently, our brain subconsciously relates these colours to tasty food and McDonalds used this knowledge wisely. Recently, they changed the colours to green and yellow. Green is the colour of nature and products use this colour when they want to be perceived as eco-friendly.

We see many other examples like this in our daily life. For instance, some airlines started to package their in-flight meals using brown-coloured plastic. Some of them even use a mate texture that resembles recycled paper – for a plastic package… There are so many contradictions in such a simple sandwich.

While green washing can be quite obvious with tangible products, it can be quite difficult to spot it in software organisations. However, it is very tempting to adopt a similar strategy. For example, it is very easy to add a couple sentences about sustainability in a company's website or even a sustainability statement. It looks nice, and as customers, users, or collaborators we like to see that, at least, the organisation cares about sustainability. However, it is very difficult to make sure those sentences really match the reality.

## Certificating Green Software

Without a systematic and unbiased approach to assess environmental sustainability, one can never be sure about it. 
There have been several attempts of creating sustainability assessment frameworks for software. For example, many research papers [^ecosoft] have proposed labels akin to the [EU Energy Labels], so popular for appliances and electronics. 

![An Energy efficiency label highlighting the class A](/img/blog/2022-sustainable-se/energy_label.svg){: class="center-block" width="300px" }
<p class="caption" markdown="span">An Energy efficiency label highlighting the class A</p>

These labels make it so easy for us to spot green washing and to make decisions as consumers. However, assessing the sustainability of software is such a complicated process that it is difficult to make assessment frameworks a reality. Here's a small list of reasons (incomplete but enough to make a point):

- Software comes in multiple forms and architectures: we have mobile apps, web apps, desktop apps, edge software, cloud-based software, server software, micro-services, AI models, and so on. It is not possible to compare software between these groups. 
- Software systems are complex systems. A simple system can have a mobile app and a cloud server that stores data and computes less trivial tasks. A different system can have only a mobile app that operates and does all the tasks offline. How can we compare these two systems: should we factor in the energy consumption of the cloud server? It depends on the scenario…
- Energy efficiency is not only required when using the software. Developing the software also has a footprint that needs to be considered. For example in AI, training a model can take 50% of the overall energy consumption throughout its whole lifetime – depending on the case this figure changes abruptly.
- Software projects have short release lifecycles. Software releases are becoming shorter and shorter, some services continuously release new version every day. It is difficult to certificate releases the same way we certificate electronics, where a new model takes months or years before being able to end consumers.
- Measuring energy consumption is very difficult. Different experiments may have contradictory results. I explain how to do it for a specific software usage scenarios in [a previous post](/2021/07/20/measuring-energy.html). However, energy consumption alone is not enough to draw conclusions about energy efficiency.
- Organisations will be tempted to make changes that comply with certification frameworks without necessarily improving their overall environmental sustainability – i.e., the problem of overfitting.

Nevertheless, any idea or attempt to certificate the sustainability of software is very welcome – even if it deems unfeasible in practice. Eventually we will get there.
The first certification strategies that actually make it into practice will probably start with a very small niche of software types and small set of easy-to-verify sustainability guidelines. For example, by checking basic guidelines such as having a team of people devoted to improve the energy efficiency of codebases within the organisation.



## Sustainability Literacy is essential to any Software Engineer

So now that we all care about environmental sustainability, it is time to invest on sustainability literacy. This is important because the adoption of measures that actually lead to environmental sustainability is not happening as fast as the race to advertise it.

For example, when an organisation claims they run on renewable electricity, there are still carbon emissions from the *marginal power plant*[^marginal]. A marginal power plant is the power plant that is in place to accommodate for peaks in usage demand. Datacenters have huge power demands and cannot afford any power outage. Hence, backup plans are always in place to mitigate corner-case situations. Power suppliers resort to marginal power plants, which can dynamically produce more or less energy according to demand.
Unfortunately, renewable energy is mostly independent of usage demand and marginal power plants have to resort to other sources to generate electricity (nuclear, coal, gas, etc.). On top of that, marginal power plants cannot be easily powered on and off: they have to operate continuously at least at their minimum functioning threshold. Hence, one cannot simply assume zero carbon emissions in datacenters powered by renewable energy.

There is a lot of jargon when we discuss sustainability. For example, being "climate neutral" is totally different from being "climate free". We need our tech leaders and engineers to be able to lead discussions around this topic where these sort of differences cannot be left unclear.

In other words, to design sustainable software we need people that are aware of sustainability design practices at all levels of the software stack. Executives, managers, programmers, designers, product owners, quality analysts, auditors, etc. Whatever role you have, you can help make your tech organisation more environmentally sustainable. Each role has several opportunities to improve the sustainability of software from different perspectives.

If professionals have prior knowledge on green software, making sustainable design decisions is a more cost-effective and feasible process.
For example, when designing and developing software, engineers do not have enough bandwidth to test and try different implementations to improve energy efficiency. However, if they already have some background on green software, they will immediately start thinking about green alternatives and might be able to quickly adopt them based on their prior knowledge without having to create a separate task force to improve energy efficiency.

Moreover, when selecting a service provider (dev-ops platform, cloud provider, etc.) a professional that is aware of green software practices is less likely to opt for cloud providers without a bold commitment on sustainability.

That is why we need more green software content in computer science education. The most powerful way of making our world a better place is through education. It might take decades to prove its benefits, but it is the most effective way of making sure that sustainability is a first-class concern in the software industry.

This is why, at the TU Delft, I have started the **[Sustainable Software Engineering]** course. The first edition was held in 2022 and it consisted of a mix between theoretical classes, discussion, and small projects.

Since this is a very new course, a lot of work was spent in creating materials. It was very difficult to find online resources that could help preparing this course. Because of that, now that the first session is over, all the content and materials are available online with an open license. Everyone is free to use and reuse them. Hopefully, it will help reduce the barrier to new educators or tech lovers willing to teach and learn more about this topic.



<!-- Moreover, the recent commitments of tech giants like Microsoft, Meta, Apple, Google to achieve carbon free operations by 2030 shows that enthusiasts about Green Software already have something highly valued by these companies. And this goes both ways: companies with green values are more likely to get the best experts in the field. -->

<!-- ### How can we achieve Environmental Sustainability in SE?

The simplest action one can take is simply to talk about it. [The #11at11 initiative][11at11] is a nice example: Sandra Pallier, interaction designer at Microsoft, meets every Friday at 11am with her colleagues for 11 minutes to talk about climate action.

But there is much more.

Learning how to measure the energy consumption of software. Testing energy consumption is far from being an easy task. However, if you learn the basics and have critical thinking you can easily find strategies that can approximate the energy consumption of your software. For example, depending on the software, time can be an excellent proxy of energy consumption. In other scenarios, size of the software artefacts or number of floating point operations might be more appropriate.

Learning about coding practices. Simple things like using compression in data transfers from your software, not only reduces the size of data being transmitted, but also the energy used through all the nodes in the communication network. %patterns

Carbon-aware design. There are many guidelines to design eco-friendly software interfaces. Adding clues to the user on the energy usage of the different use cases, choosing the right colors, image formats, and so on are only a few examples.

Having more efficient continuous integration pipelines. A recent study showed that, quite often, when a build fails, developers simply rerun the pipeline to make sure they still get a failing result. Currently

Monitoring
scaling software down to zero!

% do research on green software
More research. If you are considering doing side project or you are a student looking for a nice topic for your thesis, you are more than welcome to work on green software (let me know if you need ideas 😉).


Another nice example is the

% guidelines -->

### Final word

Having said all of this, it is important to keep in mind one last thought. To paraphrase Steven Pinker in his book *Enlightenment Now*[^pinker]:

> *Preventing climate change is a moral issue because it has the potential to harm billions, particularly the world's poor. But morality is different from moralising, and is often poorly served by it.*

Environmental sustainability is key to the future of the software industry but it should not be used as a tool to quickly shame organisations that have not got there yet. We all benefit from constructive discussions that bring everyone together and make everyone feel part of this mission. We will never get there if we divide our community between the red and the green folks.

The nice side effect of publishing all the content of the [Sustainable Software Engineering] course is that not only more people can benefit from it but also more people can provide feedback. If there is any content that should be covered in the future editions or if there is something that is not crystal clear, feel free to drop me a message on social media or via email. 

* footnotes will be placed here. This line is necessary
{:footnotes}

[^GoogleSustainability]: Google's mission on sustainability: <https://sustainability.google>
[^MicrosoftSustainability]: Microsoft's Corporate Social Responsibility: <https://www.microsoft.com/en-us/corporate-responsibility/sustainability>
[^MetaSustainability]: Sustainability at Meta: <https://sustainability.fb.com>
[^KarlskronaManifesto]: C. Becker et al. (2015). Sustainability Design and Software: The Karlskrona Manifesto. <https://doi.org/10.1109/ICSE.2015.179>

[^SETopics]: L. Sousa et al. (2019). Software Engineering Evolution: The History Told by ICSE. <https://doi.org/10.1145/3350768.3350794>

[^ecosoft]: Rébecca Deneckère & Gregoria Rubio  (2020). EcoSoft: Proposition of an Eco-Label for Software Sustainability. <https://doi.org/10.1007/978-3-030-49165-9_11>

[^marginal]: Asim Hussain (2020). Principles.Green – Marginal Carbon Intensity. <https://principles.green/principles/carbon-intensity/#heading-marginal-carbon-intensity>

[^pinker]: Steven Pinler (2018). [Enlightenment Now: The Case for Reason, Science, Humanism, and Progress](https://en.wikipedia.org/wiki/Enlightenment_Now).

{:start="5" class='footnotes}
1. Kamlesh Singh, Mohita Junnarkar (2016). The Well‐Being of Information Technology Professionals. <https://doi.org/10.1002/9781118977620.ch25>

[Karlskrona Manifesto]: https://doi.org/10.1109/ICSE.2015.179
[GDPR]: https://gdpr.eu
[Facebook–Cambridge Analytica data scandal]: https://en.wikipedia.org/wiki/Facebook–Cambridge_Analytica_data_scandal
[EU Energy Labels]: https://www.ecolabelindex.com/ecolabel/eu-energy-label
[Sustainable Software Engineering]: https://luiscruz.github.io/course_sustainableSE/2022/

