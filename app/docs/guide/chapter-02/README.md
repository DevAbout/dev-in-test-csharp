# Introduction to JavaScript

The core focus of this guide is on C# and not JavaScript. Therefore this will only be a cursory glance at JavaScript in order to understand the role it plays. Fortunately there is a lot of overlap between C# and Javascript. Much of what you will learn about C# later on will apply to JavaScript.

JavaScript (JS) is a programming language. All modern browsers are designed to interpret and execute JavaScript. The most common purpose of including JS in a web page is to make the page more dynamic. JS can interact with the rendered page, adding and removing HTML elements as the user interacts with the page. A common example of this is getting immediate validation errors when filling out a form.

::: tip
[HubSpot](https://blog.hubspot.com/marketing/web-design-html-css-javascript) gives the following summary of the roles of HTML, CSS and JS
- __HTML__ provides the basic structure of sites, which is enhanced and modified by other technologies like CSS and JavaScript
- __CSS__ is used to control presentation, formatting, and layout
- __JavaScript__ is used to control the behavior of different elements
:::

## Adding A Behavior

In this section we will add a button to the bottom of `index.html` which will scroll the user back to the top of the page. First we need to add a button.


``` html{11}
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home | Farm Recipes</title>
  </head>
  <body>
    <h1>Farm Recipes</h1>
    <p>Taditional farm meals that will fill your stomach without emptying your wallet<p/>
    <p>These recipes can be used to create great tasting, healthy meals. There is a selection to choose from. If you enjoy beef, chicken, or vegetable dishes, there is something here for you...</p>
    <img src="https://images.unsplash.com/photo-1528505086635-4c69d5f10908" alt="seven assorted varieties of baby carrots">
    <button>Back to top</button>
  </body>
</html>
```

This will show a standard button after the image, however clicking the button won't achieve anything. In order for the button to _do something_ we need to add JavaScript.

``` html{11}
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home | Farm Recipes</title>
  </head>
  <body>
    <h1>Farm Recipes</h1>
    <p>Taditional farm meals that will fill your stomach without emptying your wallet<p/>
    <p>These recipes can be used to create great tasting, healthy meals. There is a selection to choose from. If you enjoy beef, chicken, or vegetable dishes, there is something here for you...</p>
    <img src="https://images.unsplash.com/photo-1528505086635-4c69d5f10908" alt="seven assorted varieties of baby carrots">
    <button onclick="window.scroll(0,0)">Back to top</button>
  </body>
</html>
```
::: warning
This was only tested in Chrome and FireFox
:::

Including this small piece of JavaScript code adds the behavior we wanted. Clicking the button will scroll the user to the top of the page.

## Supplementary Information

### Recommended

For more information on JavaScript
- [An Introduction to JavaScript by javascript.info](https://javascript.info/intro) (blog)

### Notable Mentions

- [Web Design 101: How HTML, CSS, and JavaScript Work by hubspot](https://blog.hubspot.com/marketing/web-design-html-css-javascript) (blog)
- [JavaScript engines - how do they even? by Franziska Hinkelmann](https://youtu.be/p-iiEDtpy6I) (video)