---
layout: default_md
title: Publications
permalink: /publications
---

<div id="bibtex_display">
  {%- for publication in site.publications reversed%}
  <p markdown="span">
      {{publication.author}} ({{publication.year}}).
      {%- unless publication.disable-page %}
      [**{{publication.title}}**]({{publication.url}}).
      {%- else %}
      **{{publication.title}}**
      {%- endunless %}
      {%- if publication.booktitle %}
        In *{{publication.booktitle}}*{% if publication.pages %} (pp. {{publication.pages}}){% endif %}.
      {% endif -%}
      {%- if publication.journal %}
        *{{publication.journal}}*{% if publication.pages %} (pp. {{publication.pages}}){% endif %}.
      {% endif -%}
      {%- if publication.publisher %}{{publication.publisher}}.{% endif %}
      {%- if publication.award %}🏆 ***{{publication.award}}***.{% endif %}
      {%- if publication.preprint %} [Preprint]({{publication.preprint}}).{% endif %}
      {%- if publication.arxiv %} [Arxiv]({{publication.arxiv}}).{% endif %}
      {%- if publication.full-text %} [Full-text]({{publication.full-text}}).{% endif %}
      <!-- {%- if publication.bibtex %} <a class="clipboard" data-clipboard-text="{{publication.bibtex}}">Copy bibtex</a>.{% endif %} -->
      {%- if publication.slides %}
      [Slides]({{publication.slides}}).
    {% endif -%}
  {%- if publication.video %}
    [<ion-icon name="logo-youtube"></ion-icon>]({{publication.video}})
  {% endif -%}
</p>
{% endfor -%}
</div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>
<script>
  var clipboard = new ClipboardJS('.clipboard');
</script>
  
