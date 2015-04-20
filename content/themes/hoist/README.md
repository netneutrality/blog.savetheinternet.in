# Hoist Theme

Theme for [Hoist Blog](https://www.hoist.io/blog).

## Getting started

Either clone this repo, or download it as a zip. Drop the whole folder into your ghost installation, inside /content/themes. Then login to ghost, and change your theme to hoist-ghost.

All the css is generated in assets/Sass/screen.scss. If you want to compile the scss run the [gulpfile](http://gulpjs.com/).

###Things to Configure

You will probably want to configure the email signup form, or remove it. We personally use [Campaign Monitor](https://www.campaignmonitor.com/), but it can be configured to use whatever you want. The two places you'll want to configure are found in post.hbs and default.hbs.

You'll also need to bring your own [Typekit](https://typekit.com/) account. The fonts we use are [Expo Serif Pro](https://typekit.com/fonts/expo-serif-pro), and [Proxima Nova](https://typekit.com/fonts/proxima-nova). Add your embed code in deafult.hbs, in the head. Alternativly, you could edit the css to use free fonts.

We use google analytics to monitor our blog, add your tracking code to deafult.hbs, in the script tag just before the closing body tag.

If you want to edit the sidebar, for example adding tag links or a description, look inside deafult.hbs, in the sidebar element. 

###Using theme elements

Too add a "discuss this article on twitter" call to action in the footer, simply add 

    <div id="twitter" data-link="https://twitter.com/hoistapps/status/557665010806452225"></div>

Anywhere in the post, the element gets hidden automatically and the button is revealed thanks to assets/js/index.js

Too add a code block with highlight syntaxing, start a fenced code block like this

    ```language-javascript
    var SupportedLaguages = [
      "markup","css","css-extras",
      "javascript","java",
      "php","scss","c","c++",
      "python","ruby","csharp",
      "go","swift","git","less",
      "r","haml"
    ];
    ```
Change the language-javascript to any of those supported languages, for example use language-css, or language-markup (for html).

We hope you enjoy our theme, if you use it please show us! @hoistapps on twitter.

## Copyright & License

Copyright (C) 2014 Ghost Foundation - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

