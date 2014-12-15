This small app replaces the old CS 103 ["Theorem and Definition
Reference"](http://web.stanford.edu/class/cs103/reference/old/) page. There
were two main goals: TAs should enter definitions as data instead of manually
constructing the HTML, and that definitions should also be sortable
chronologically instead of alphabetically.

I wanted to make sure that TAs could use this app without using any build
system, so some of the structure of this app is a bit odd due to this
constraint. I also wanted to make this app fully static, as we don't have a lot
of control where it's hosted.

# Installation

Install [node.js](http://nodejs.org/download/).

Now install this app's dependencies with `npm install`

# Build

To build, just run `gulp build`.

# Usage

After running the build step, there should be a directory called `build/`. Go
to `build/definitions.js` to read instructions and edit definitions. Then, simply
upload this directory to the class page and you should be good to go. Note that
you only need to build the app if things other than the definitions were
changed, otherwise just copying around the static files should be fine.
