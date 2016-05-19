/* global $ Handlebars*/

var workContext = {
  projects: [
    { image: "img/project1.png", description: "Ugh pug keffiyeh raw denim migas. 90's waistcoat hashtag cardigan cliche. Ramps readymade quinoa brooklyn chambray. Umami jean shorts aesthetic gentrify. Selfies keytar kitsch church-key, banjo pork belly street art cliche neutra dreamcatcher mustache. Yuccie bitters cred, beard normcore intelligentsia pitchfork irony kombucha. Asymmetrical selfies hella, brunch ramps viral ethical kickstarter." },
    { image: "img/project2.png", description: "Marfa narwhal heirloom, jean shorts pitchfork austin thundercats yr cold-pressed gentrify tilde whatever lomo. Pour-over hashtag occupy yr pickled, hella seitan try-hard swag flannel mumblecore church-key intelligentsia etsy. Hashtag mlkshk green juice, pitchfork cardigan hammock everyday carry distillery man braid health goth meditation. Street art sriracha literally, salvia pork belly seitan man bun single-origin coffee humblebrag blue bottle mustache lomo. Meggings hoodie normcore crucifix narwhal kogi. Kinfolk iPhone 90's, kickstarter mumblecore cred lo-fi. Fixie blue bottle ennui, taxidermy biodiesel kale chips kinfolk health goth normcore stumptown gentrify vegan farm-to-table lo-fi." },
    { image: "img/project3.png", description: "Semiotics waistcoat green juice vice meh cliche. Food truck blue bottle chartreuse, tote bag selfies street art knausgaard. Tilde umami ramps four dollar toast cardigan gentrify, chillwave hella pug church-key flannel banjo deep v offal kinfolk. Gochujang iPhone artisan truffaut, four loko meggings banh mi freegan master cleanse. Echo park marfa everyday carry jean shorts hammock, cray artisan celiac normcore etsy. Chia retro single-origin coffee letterpress. Shabby chic post-ironic portland fanny pack next level kogi squid, tote bag kitsch aesthetic heirloom." },
    { image: "img/project4.png", description: "Blue bottle sartorial poutine, VHS organic banh mi vegan freegan chillwave. Tattooed cred tacos asymmetrical, vegan offal forage bushwick actually taxidermy put a bird on it jean shorts. Echo park hammock sriracha, asymmetrical lumbersexual heirloom pinterest. Fap tofu umami celiac four dollar toast distillery chillwave meh readymade next level godard, tacos raw denim flannel. You probably haven't heard of them bitters waistcoat, photo booth PBR&B blue bottle pabst +1 schlitz DIY keytar cred small batch chambray cray. Swag lumbersexual tote bag affogato waistcoat. Fingerstache kitsch portland pour-over, humblebrag XOXO migas kombucha schlitz master cleanse chillwave whatever vinyl jean shorts selfies." },
    { image: "img/project5.png", description: "Aesthetic banjo kitsch, XOXO you probably haven't heard of them mustache keffiyeh. Meh viral umami, tattooed ramps sriracha fap pabst leggings next level. Franzen kickstarter echo park gochujang, microdosing thundercats street art heirloom. Offal roof party locavore yuccie neutra narwhal, chicharrones squid craft beer actually chia meh. Neutra fingerstache kitsch, seitan heirloom roof party venmo 90's retro yr pinterest literally next level ugh chambray. Gastropub flexitarian pour-over, wayfarers meh umami biodiesel farm-to-table vegan echo park photo booth. Knausgaard hoodie disrupt chillwave, normcore actually seitan 8-bit yr." }
  ]
};

// DOM ready
$(function() {
  
  // Compile and place only on the right page
  if ($("#work-content").length !== 0) {
    
    // Main Content
    var workTemplate = $('#work-content').html();
    var workTemplateScript = Handlebars.compile(workTemplate);
    $("main").html(workTemplateScript(workContext));
  }
  
});