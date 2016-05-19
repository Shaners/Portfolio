/* global $ Handlebars*/

// 10 to 15 skills listed
// 4 possible states: Beginner, Intermediate, Advanced, Expert
// Years of experience

var skillsContext = { 
  area: [
    { title: "Analysis", skills: [
      { name: "Systems Analysis", textLevel: "Expert", value: "95" },
      { name: "Project Management", textLevel: "Expert", value: "95" },
      { name: "Relational Database Modeling", textLevel: "Expert", value: "95" },
      { name: "Workflow Analysis", textLevel: "Expert", value: "95" },
      { name: "Requirements Documentation", textLevel: "Expert", value: "95" }
    ] },
    { title: "Design", skills: [
      { name: "Adobe Photoshop", textLevel: "Expert", value: "95" },
      { name: "Adobe Illustrator", textLevel: "Expert", value: "90" },
      { name: "Adobe InDesign", textLevel: "Advanced", value: "70" },
      { name: "UX, Rapid Prototyping, Wireframing, User Testing", textLevel: "Expert", value: "85" },
      { name: "Fluid / Responsive Design", textLevel: "Expert", value: "85" }
    ] },
    { title: "Development", skills: [
      { name: "HTML, CSS", textLevel: "Expert", value: "95" },
      { name: "Javascript, jQuery, JSON", textLevel: "Advanced", value: "85" },
      { name: "Git", textLevel: "Intermediate", value: "75" },
      { name: "Python", textLevel: "Beginner", value: "35" },
      { name: "Ruby", textLevel: "Beginner", value: "25" }
    ] }
  ]
};

// DOM ready
$(function() {
  
  // Compile and place only on the right page
  if ($("#skills-content").length !== 0) {
    
    // Main Content
    var skillsTemplate = $('#skills-content').html();
    var skillsTemplateScript = Handlebars.compile(skillsTemplate);
    $("main").html(skillsTemplateScript(skillsContext));
  }
  
});