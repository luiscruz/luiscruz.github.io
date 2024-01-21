---
layout: default
---

<div id='jumbotron' class="jumbotron">
		<div class='container'>
	      <div class="media">
	      <img class="media-object pull-left" width="120px" src="img/profile.png"/>
	      <div class="media-body"><h1 class="">Hello, I'm Luís :)</h1>
			  <a class="btn btn-default btn-xs" target='_blank' role="button" href="https://www.linkedin.com/in/luismirandacruz">
				  <ion-icon name="logo-linkedin"></ion-icon> LinkedIn
			  </a>
		      <a class="btn btn-default btn-xs" target='_blank' role="button" href="http://github.com/luiscruz">
				  <ion-icon name="logo-github"></ion-icon> Github
			  </a>
		      <a class="btn btn-default btn-xs" target='_blank' role="button" href="https://scholar.google.com/citations?user=O13oaH0AAAAJ&hl=en">
				  <ion-icon name="logo-google"></ion-icon> Google Scholar
			  </a>
		      <a class="btn btn-default btn-xs" target='_blank' role="button" href="https://twitter.com/luismcruz">
                  <ion-icon name="logo-twitter"></ion-icon> Twitter
              </a>
		      <a class="btn btn-default btn-xs" target='_blank' rel="noopener noreferrer" role="button" href="https://orcid.org/0000-0002-1615-355X">
                  <img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" style="width:1em;margin-right:.5em;margin-bottom:.2em;" alt="ORCID iD icon"><big></big>ORCID
              </a>
              <!-- <a class="btn btn-default btn-xs" target='_blank' role="button" href="http://calendly.com/luiscruz">
                  <big><i class='ion-clock'></i></big>&nbsp; Schedule a meeting
              </a> -->


	        </div>
	      </div>

  	      <p><a role="button" href="mailto:L.Cruz@tudelft.nl"> E-mail: L.Cruz@tudelft.nl</a>
            <br/>
          <small><small>Research Interests: <strong>Green AI</strong>; <strong>Green Software</strong>; <strong>AI Engineering</strong></small></small>
        </p>
  		  <p>
          
	      <a class="btn btn-primary btn-xs" target='_blank' role="button" href="https://se.ewi.tudelft.nl">
			  Assistant Professor at <strong>TU Delft</strong> | Building 28, Office 1.W.720
		  </a>
	      <a class="btn btn-primary btn-xs" target='_blank' role="button" href="https://se.ewi.tudelft.nl/ai4fintech/index.html">
			  Scientific Manager of the <strong>AI for Fintech Research</strong>
		  </a>
			</p>

		</div>
    </div>

{% include menu.md %}

<div class="container" >
      <div class="list-group">
        <a href="https://www.tudelft.nl/onderwijs/opleidingen/masters/cs/msc-computer-science/the-data-science-technology-track" target="_blank" class="list-group-item ">
          <span class="badge">Web</span>
                <h4 class="list-group-item-heading"><ion-icon name="school-outline"></ion-icon>&nbsp;Master coordinator of Computer Science, track Data Science & Technology.</h4>
                <small class="list-group-item-text">Delft University of Technology.</small>
        </a>
        <a href="https://luiscruz.github.io/papers/cruz2019tools.pdf" target="_blank" class="list-group-item ">
          <span class="badge">Ph.D. Thesis</span>
                <h4 class="list-group-item-heading"><ion-icon name="leaf-outline"></ion-icon>Tools and Techniques for Energy-Efficient Mobile Application Development</h4>
                <small class="list-group-item-text">Ph.D. thesis defended on July 2, 2019.</small>
        </a>
        <a href="https://tqrg.github.io/energy-patterns/" target="_blank" class="list-group-item ">
          <span class="badge">Web</span>
                <h4 class="list-group-item-heading"><ion-icon name="leaf-outline"></ion-icon> Energy Patterns for Mobile Apps</h4>
                <small class="list-group-item-text">Online Catalog with 22 patterns to improve the energy efficiency of iOS and Android apps.</small>
        </a>
        <a href="cv/cvLuisCruz.pdf" target="_blank" class="list-group-item list-group-item-info">
          <span class="badge">PDF</span>
                <h4 class="list-group-item-heading">Download Curriculum Vitae</h4>
                <small class="list-group-item-text">Updated on October, 2020.</small>
        </a>
      </div>


</div>
<div class="container" markdown="block">
# News

{% for update in site.data.updates %}
- **{{update.date}}**: {{update.msg}}
{%- if update.link %} [🔗 Link]({{update.link}}){%endif%}
{%endfor%}
</div>

<br/>

<!-- jQuery (necessary for Bootstrap) -->
<script   src="https://code.jquery.com/jquery-3.6.0.slim.min.js"   integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI="   crossorigin="anonymous"></script>

<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

