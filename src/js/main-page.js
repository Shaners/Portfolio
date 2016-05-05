/* global $ Handlebars*/

var headerData = {
  headerLogo: "img/header-logo.png",
  authorName: "Shane Lister",
  nav:[{page: "Work"},{page: "Skills"},{page: "About"},{page: "Contact"}]
};

var headerTemplate = 
  '<img src="{{ headerLogo }}">' +
  '<h1>{{ authorName }}</h1>' +
  '<nav>' +
  '  <ul>' +
  '    {{#each nav}}' +
  '      <li><a href="#">{{ page }}</a></li>' +
  '    {{/each}}' +
  '  </ul>' +
  '</nav>';
  
var footerData = {
  links:[{page: "Contact"},
         {page: "Social"},
         {page: "Github"},
         {page: "LinkedIn"},
         {page: "Twitter"},
         {page: "Email"},
         {page: "Copyright © Shane Lister 2016"}]
};

var footerTemplate =
  '{{#each links}}' +
  ' <p>{{ page }}</p>' +
  '{{/each}}';

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
  var headerFunction = Handlebars.compile(headerTemplate);
  $("header").html(headerFunction(headerData));

  // Footer
  var footerFunction = Handlebars.compile(footerTemplate);
  $("footer").html(footerFunction(footerData));
  
  // Main Content
  var template = $('#main-content').html();
  var templateScript = Handlebars.compile(template);
  $("main").html(templateScript(context));

});