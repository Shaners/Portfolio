/* global $ Handlebars*/

var aboutContext = { author: "Shane Lister", 
  aboutShortBlurb: "Short blurb",
  aboutAuthorImage: "about-shane-photo.jpg"
};

// DOM ready
$(function() {
  
  // Compile and place about page content only on the about page
  if ($("#about-content").length !== 0) {
    
    // Main Content
    var aboutTemplate = $('#about-content').html();
    var aboutTemplateScript = Handlebars.compile(aboutTemplate);
    $("main").html(aboutTemplateScript(aboutContext));
  }
  
});