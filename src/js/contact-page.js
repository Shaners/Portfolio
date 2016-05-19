/* global $ Handlebars*/

var contactContext = { author: "Shane Lister", 
  socialMedia: [
    {url: "www.linkedin.com", img: "img/linkedin.png", name: "LinkedIn"},
    {url: "twitter.com", img: "img/twitter.png", name: "Twitter"}
  ]
};

// DOM ready
$(function() {
  
  // Compile and place only on the right page
  if ($("#contact-content").length !== 0) {
    
    // Main Content
    var contactTemplate = $('#contact-content').html();
    var contactTemplateScript = Handlebars.compile(contactTemplate);
    $("main").html(contactTemplateScript(contactContext));
  }
  
});