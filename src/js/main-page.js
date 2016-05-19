/* global $ Handlebars*/

var headerSource =
  '<a href="."><img src="{{ headerLogo }}"></a>' +
  '<h1>{{ authorName }}</h1>' +
  '<nav>' +
  '  <ul>' +
  '    {{#each nav}}' +
  '      <li><a href="{{ url }}">{{ page }}</a></li>' +
  '    {{/each}}' +
  '  </ul>' +
  '</nav>';
  
var footerSource =
  '{{#each links}}' +
  ' <p>{{ page }}</p>' +
  '{{/each}}';
  
function jsonCallBack(json, destination, source)
{
  var template = Handlebars.compile(source);
  $(destination).html(template(json));
}

var context = { bigPhoto: "img/big-photo.jpg", 
                 tagLine: "Shane Lister tagline",
             authorBlurb: "Shane Lister blurb",
        featuredProjects: [{image: "img/project-image.png", name: "Project Title 1", blurb: "Blurb 1"},
                           {image: "img/project-image.png", name: "Project Title 2", blurb: "Blurb 2"},
                           {image: "img/project-image.png", name: "Project Title 3", blurb: "Blurb 3"}]
};

// DOM ready
$(function() {
  
  // Header
  $.getJSON("data/header.min.json", function(json) {
    jsonCallBack(json, "header", headerSource);
  });

  // Footer
  $.getJSON("data/footer.min.json", function(json) {
    jsonCallBack(json, "footer", footerSource);
  });
  
  // Compile and place main page content only on the main page
  // This could probably be a function
  if ($("#main-content").length !== 0) {
    // Main Content
    var template = $('#main-content').html();
    var templateScript = Handlebars.compile(template);
    $("main").html(templateScript(context));
  }

});