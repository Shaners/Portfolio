# Ideas

A collection of thoughts that went into planning and implementing this project.

**v0.0.2**
Gulp tasks running. Other basic pages constructed. Add fonts.

We probably need to move to a Linux VM to work on this since windows git and npm is super annoying... Or we could remove node_modules and just install per environment. Linux cloud VM gives us one environment we don't have to mess around with though... Yea this is stupid, work in cloud VM and get rid of node_modules.

Can gulp auto check and install dependencies?

Include skills.html but link to it in a special way.

Include search later if there is a need for it.

gulp changelog is kind of weird. Revisit this later.

LiveReload is kind of broken.

Revisit later:
- [ ] Gulp changelog
- [ ] Gulp Browser Synx
- [ ] Gulp Changed
- [ ] Gulp Handlebars
- [ ] Sass
- [ ] Gulp Sass

**v0.0.1**
Most files in place. Structure decisions made. Basic html layout in place.

**Planning Questions**
Should we use jQuery mobile?

Do we really need a separate changelog?
  No separate changelog. Project isn't that complicated. Maybe we can automate this with Gulp.

Do we need everything inside the readme?
  Everything in there now is good.

Do we want to use normalize.css?
  Yes, there is no reason not to. Replaces reset. Make sure to minimize it.

Do we want to use a task runner? Gulp vs Grunt.
  Yes, let's minimize easier. Let's use Gulp. There's nothing wrong with Grunt but Gulp feels a bit better.

Should we add modernizer?
  Yes, no real reason not to, provides us with good feature detection. Make sure to minimize it.

Should we add jQuery to the project?
  Yes, no real reason not to, provides some good cross browser compatibility.

Do we want to use a templating system? Jade vs mustache vs handlebars.
  Yes we want to use a templating engine. Lets go with handlebars because I don't like the white space thing too much. Maybe it would grow on me.

Require vs browserify vs webpack?
  Lets try integrating webpack after the project is more mature. It may be overkill.

CSS Preprocessor?
  Yes, lets use Sass with gulp.

CDN then local fall back?
  Needs further review.

What can structured data markup do for us?
  Review near the end of the project.

Are there any special JS events to track with Google Analytics?
  No not really.

Do we want to use a full featured database?
  No, it's likely overkill for this project.

Do we want to use Coffeescript?
  No, not for this project.

Should we use React to the project?
  No, not for this project. It might be useful but is kind of overkill.

Should we use node?
  No, it would be overkill for this project.

Should we use Express?
  No it's a bit overkill for this project.