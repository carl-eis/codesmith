#CodeSmith
###A Metalsmith Site Generator
Created by [CodeLab](http://www.codelab.io)

This is a template for building a static site using handlebars.
To get started, clone the repository:

	$ git clone https://github.com/carl-eis/codesmith.git

OR if you use SSH,

	$ git clone git@github.com:carl-eis/codesmith.git

Now, install your globals:

	$ npm install -g metalsmith
	$ npm install -g metalsmith-start 

Then install the dependencies

	$ bower install
	$ npm install

-----
###Instructions
To compile your website for the first time, run 
	
	$ metalsmith

Then run `metalsmith-start` and your server will be up!

###Packages Used:
- Handlebars
- SCSS
- Markdown

--------

###Extras
If there are no directories, you'll have to make a structure of your own.
To create your empty directories, run 
	
	$ mkdir -p src/{content,images,styles,scripts} && mkdir -p templates/partials