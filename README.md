# Closure-Script Boilerplate

Google Closure development with the [Closure-Script](https://github.com/dturnbull/closure-script) gem, [Jasmine](https://github.com/pivotal/jasmine) for BDD style unit testing, and [Cucumber](http://cukes.info/) with [Capybara](https://github.com/jnicklas/capybara) for functional/integration/acceptance testing. Also included are Sass/Compass with the HTML5 Boilerplate CSS all sassed up, and Guard for Coffeescript compilation so that Jasmine tests can be written with Coffeescript.

I use this on OSX Lion. Prerequisites: Ruby 1.9.2 (haven't tested 1.8 or JRuby) via `rvm` and `homebrew`.

## Installation

Clone me:

	git clone https://github.com/robert-stuttaford/Closure-Script-Boilerplate.git
	cd Closure-Script-Boilerplate

Get the Closure Library:

    svn checkout http://closure-library.googlecode.com/svn/trunk closure-library
    
Get Jasmine:

    git clone https://github.com/pivotal/jasmine.git

I actually have both of these in a separate frameworks folder and I've simply symlinked these into each project.

Install the QT library from Nokia, capybara-webkit requires this (see <https://github.com/thoughtbot/capybara-webkit/wiki/Installing-QT>):

	brew install qt

Install gems:

    bundle install --binstubs

Start the Rack server:

	./serve

Visit <http://localhost:3000> to see the development dashboard.

If you're writing Jasmine tests, be sure to start guard:

	guard

And if you're writing any CSS, be sure to start compass:

	compass watch

## Development dashboard

This is a two column page with useful links down the left and an iframe for your app and Jasmine tests on the right.

The left column has a couple sections:

* A big refresh button, mapped to keyboard shortcut 'r'. This refreshes the iframe.
* Links to Jasmine specs:
	* A link to run all the _spec.js files found inside `app/` (regardless of depth) at the same time. Shortcut key 'a'.
	* A dynamic list of all those _spec.js files, nicely formatted for readability. My own project uses short filenames, so I chose to allow more than one spec per line for compactness.
* Links to functionals. Development largely consists of building model code (tested with Jasmine unit tests) and UI code, which we test with Cucumber/Capybara. As one's app grows, we often like to construct only parts of the interface as so to reduce development grunt work, for example, to exclude having to sign in, or navigate several times to reach the component/view that we are building. This is a list of the functional mini-apps that focus on just part of the apps UI, suitable for capybara tests to run against directly.
* Links to view the app itself:
	* Development version (uncompiled).
	* Compiled debug version, and the compile-on-demand debug version, which produces the app.debug.js used by the compiled version.
	* Compiled production version, and the compile-on-demand production version, which produces the app.js used by the compiled version.
* Tools and reference:
	* Externs generator: load up a 3rd-party javascript file, enter which objects you want externs for, and it'll produce the externs for you. Drop the contents into a file named (file).externs.js into the externs folder, and the compiler will use it. Credit goes to Guido Tapa on the Closure-Library Google Group list for this.
	* Links to the local Closure demos, and the Closure Library and Templates API documentation on the web. These open in a new tab.

## Cucumber/Capybara testing

Start the `spork` daemon:

	spork

Then run: 
	
	cucumber --drb

To run your cucumber integration tests. See `features/app.feature` for a sample test. See <http://cheat.errtheblog.com/s/capybara> for a quick reference and <https://github.com/jnicklas/capybara> for the full story.

## Deployment

To take advantage of the image compression in the deploy script, install `optipng` and `jpegtrans`:

	brew install optipng jpeg

Alter the deploy script to suit your own requirements. I target this script in my Jenkins CI build configuration.

## Thanks

A great big thank you to all the fine folks who put everything that I am using together!

## Changelog

* 15 Jan 2012. 
	* Refactored the public/*.erb and app/compiler.js.erb files so that a single public erb file handles all the build cases, and to allow for a target namespace to be passed to the compiler via the querystring.
	* Added 'functionals' test shortcuts section to development dashboard.
	* Updated cucumber tests to use functional test code.
	* Include a simple cucumber test to verify that all Jasmine specs pass, in preparation for automated post-receive hook continuous integration with Jenkins. Use `cucumber --drb -n spec` to run this.
* 11 Jan 2012. Initial release.

## License

Do as you please.