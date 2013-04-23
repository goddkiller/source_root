<ul class="table table-bordered">
{{#itemList}}
<li>
{{#.}}
<span>{{&.}}</span>
{{/.}}
</li>
{{/itemList}}
</ul>
{{#pages.length}}
<div class="pagination pull-right">
  <ul>
    <li><a data="{{prevNum}}" href="#">«</a></li>
    {{#pages}}
    <li class="{{class}}"><a data="{{index}}" href="#">{{index}}</a></li>
    {{/pages}}
    <li><a data="{{nextNum}}" href="#">»</a></li>
  </ul>
</div>
{{/pages.length}}