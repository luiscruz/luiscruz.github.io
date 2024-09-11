<link href="https://fonts.googleapis.com/css2?family=League+Script&display=swap" rel="stylesheet">

{% assign mesas = site.data.mesas %}
{% assign header = mesas[0] %}


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
      {{ row[mesa_nome] }}
      </div>
      {% endfor %}
      </div>
      <div class="footer">
        <img width="40px" src="img/orn.png"/>
      </div>
    </div>
    <br/>
  {% endfor %}
</div>

