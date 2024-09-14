<link href="https://fonts.googleapis.com/css2?family=League+Script&display=swap" rel="stylesheet">

{% assign mesas = site.data.mesas %}
{% assign header = mesas[0] %}
{% assign counter = 0 %} 


<div class="mesas">
  {% for name in header %}
  {% assign mesa_nome = name[0] %}
    <div class="mesa">
      <div class="header">
        {{mesa_nome}}
      </div>
      <div class="persons">
      {% for row in mesas %}
      <div class="person">
      {%if row[mesa_nome] == "António" %}
      <div class="person"><em>Pais da Noiva:</em></div>
      {%endif%}
      {%if row[mesa_nome] == "José Cruz" %}
      <div class="person"><em>Pais do Noivo:</em></div>
      {%endif%}
      {{ row[mesa_nome] }}
      </div>
      {% endfor %}
      </div>
      <div class="footer">
        <!-- <img width="60px" src=""/> -->
        <object type="image/svg+xml" data="img/orn5.svg" class="svg-object"></object>
      </div>
    </div>
    <br/>
    {% assign counter = counter | plus: 1 %} <!-- Incrementa o contador a cada iteração -->
     {% if counter == 3 %}
        <div class="page-break"></div> <!-- Adiciona quebra de página após cada 3 itens -->
</div>
<div class="mesas">
      {% assign counter = 0 %} 
    {% endif %}
  {% endfor %}
</div>

