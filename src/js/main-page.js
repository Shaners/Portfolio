/* global $ Handlebars*/

$( document ).ready(function() {

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
  
  var headerFunction = Handlebars.compile(headerTemplate);
  
  $("header").html(headerFunction(headerData));

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
    
  var footerFunction = Handlebars.compile(footerTemplate);
  
  $("footer").html(footerFunction(footerData));

});