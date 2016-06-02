#MetalSmith Template
Created by [CodeLab]www.codelab.io

This is a template for building a static site using handlebars.
To get started, use 

	$ bower install
	$ npm install

These will install dependencies.

###1. Set up directories
To create your empty directories, run 
	
	$ mkdir -p src/{content,images,styles,scripts} && mkdir -p templates/partials

###2. Install Globals
If you would like to run a server, instal:

	$ npm install -g metalsmith
	$ npm install -g metalsmith-watch

Then run `metalsmith-watch` and your server will be up!

###Packages Used:
- Handlebars
- SCSS
- Markdown
