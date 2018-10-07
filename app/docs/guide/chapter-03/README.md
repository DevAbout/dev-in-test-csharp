# Introduction to CSS

At the risk of being repetitive, we will restate the purpose of HTML, CSS, and JavaScript:

* **HTML** is for the structure and semantics of a document
* **CSS** provides the visual styles
* **JavaScript** enables behaviors

As a Developer in Test it is unlikely that you would be expected to style the page. Teams typically have designers who specialize in this area. Therefore the intention here is not to teach each CSS in depth, but rather to give a good idea of how CSS is applied and what are some of its capabilities.

## Applying CSS

CSS can be applied to a page using three different approaches:
* Inline Styles
* Embedded Styles
* External Styles

In this section we will use Inline Styles. As the guide progresses we will see the limitations of this approach and the advantages of Embedded and External Style Sheets.

::: tip
Later on in the guide we will move onto Embedded and External Styles. At that stage we will cover an aspect of CSS known as **CSS selectors**. CSS Selectors are used in both CSS as well as in automated tests. Therefore there is an overlap between CSS and test automation. This is why we are taking time to build up a foundational understanding of CSS.
:::

## Inline Styles

To apply inline styles we include style definitions directly within the element we want to style. First we will make a simple, single change. We will change the color of the header or `h1` tag.

```html{7}
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home | Farm Recipes</title>
  </head>
  <body>
    <h1 style="color: orange;">Farm Recipes</h1>
    <p>Taditional farm meals that will fill your stomach without emptying your wallet<p/>
    <p>These recipes can be used to create great tasting, healthy meals. There is a selection to choose from. If you enjoy beef, chicken, or vegetable dishes, there is something here for you...</p>
    <img src="https://images.unsplash.com/photo-1528505086635-4c69d5f10908" alt="seven assorted varieties of baby carrots">
    <button onclick="window.scroll(0,0)">Back to top</button>
  </body>
</html>
```

Here we have used one of the [140 _named colors_](https://htmlcolorcodes.com/color-names/) which are available to us. However there are far more color choices to pick from when using [Hex colors](https://hackernoon.com/hex-colors-how-do-they-work-d8cb935ac0f). In this next iteration we change the font color to a subtle brown as well as a few other properties of the header.

```html{7}
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home | Farm Recipes</title>
  </head>
  <body>
    <h1 style="color: #523f36; font-family: Palatino; font-size: 60px; text-align: center;">Farm Recipes</h1>
    <p>Taditional farm meals that will fill your stomach without emptying your wallet<p/>
    <p>These recipes can be used to create great tasting, healthy meals. There is a selection to choose from. If you enjoy beef, chicken, or vegetable dishes, there is something here for you...</p>
    <img src="https://images.unsplash.com/photo-1528505086635-4c69d5f10908" alt="seven assorted varieties of baby carrots">
    <button onclick="window.scroll(0,0)">Back to top</button>
  </body>
</html>
```

Next we turn our attention to the paragraph tags.

```html{8,9}
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home | Farm Recipes</title>
  </head>
  <body>
    <h1 style="color: #523f36; font-family: Palatino; font-size: 60px; text-align: center;">Farm Recipes</h1>
    <p style="color: #7b482e; font-family: Palatino; font-size: 28px; text-align: center; width: 60%; margin: auto;">Taditional farm meals that will fill your stomach without emptying your wallet<p/>
    <p style="color: #302f25; font-family: Arial; font-size: 20px;">These recipes can be used to create great tasting, healthy meals. There is a selection to choose from. If you enjoy beef, chicken, or vegetable dishes, there is something here for you...</p>
    <img src="https://images.unsplash.com/photo-1528505086635-4c69d5f10908" alt="seven assorted varieties of baby carrots">
    <button onclick="window.scroll(0,0)">Back to top</button>
  </body>
</html>
```

Now we will reduce the hight of the image without stretching or distorting the image, in other words we will maintain the [aspect ratio](https://en.wikipedia.org/wiki/Aspect_ratio_(image)).

```html{10}
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home | Farm Recipes</title>
  </head>
  <body>
    <h1 style="color: #523f36; font-family: Palatino; font-size: 60px; text-align: center;">Farm Recipes</h1>
    <p style="color: #7b482e; font-family: Palatino; font-size: 28px; text-align: center; width: 60%; margin: auto;">Taditional farm meals that will fill your stomach without emptying your wallet<p/>
    <p style="color: #302f25; font-family: Arial; font-size: 20px;">These recipes can be used to create great tasting, healthy meals. There is a selection to choose from. If you enjoy beef, chicken, or vegetable dishes, there is something here for you...</p>
    <img style="width: 100%; height: 300px; object-fit: cover; object-position: 0 20%;" src="https://images.unsplash.com/photo-1528505086635-4c69d5f10908" alt="seven assorted varieties of baby carrots">
    <button onclick="window.scroll(0,0)">Back to top</button>
  </body>
</html>
```

Next we will style the _back to top_ button. We will change the look of the button, and align it to the right. This shows some more of the layout features of CSS.

```html{10}
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home | Farm Recipes</title>
  </head>
  <body>
    <h1 style="color: #523f36; font-family: Palatino; font-size: 60px; text-align: center;">Farm Recipes</h1>
    <p style="color: #7b482e; font-family: Palatino; font-size: 28px; text-align: center; width: 60%; margin: auto;">Taditional farm meals that will fill your stomach without emptying your wallet<p/>
    <p style="color: #302f25; font-family: Arial; font-size: 20px;">These recipes can be used to create great tasting, healthy meals. There is a selection to choose from. If you enjoy beef, chicken, or vegetable dishes, there is something here for you...</p>
    <img style="width: 100%; height: 300px; object-fit: cover; object-position: 0 20%;" src="https://images.unsplash.com/photo-1528505086635-4c69d5f10908" alt="seven assorted varieties of baby carrots">
    <button style="color: #302f25; font-family: Arial; font-size: 20px; background: none; border: none; float: right; margin: 15px 0;" onclick="window.scroll(0,0)">Back to top</button>
  </body>
</html>
```

It is also possible to assign style properties to elements such as `html` and `body`. We can give the page some more space by giving a margin to `body`.

```html{6}
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home | Farm Recipes</title>
  </head>
  <body style="margin: 60px;">
    <h1 style="color: #523f36; font-family: Palatino; font-size: 60px; text-align: center;">Farm Recipes</h1>
    <p style="color: #7b482e; font-family: Palatino; font-size: 28px; text-align: center; width: 60%; margin: auto;">Taditional farm meals that will fill your stomach without emptying your wallet<p/>
    <p style="color: #302f25; font-family: Arial; font-size: 20px;">These recipes can be used to create great tasting, healthy meals. There is a selection to choose from. If you enjoy beef, chicken, or vegetable dishes, there is something here for you...</p>
    <img style="width: 100%; height: 300px; object-fit: cover; object-position: 0 20%;" src="https://images.unsplash.com/photo-1528505086635-4c69d5f10908" alt="seven assorted varieties of baby carrots">
    <button style="color: #302f25; font-family: Arial; font-size: 20px; background: none; border: none; float: right; margin: 15px 0;" onclick="window.scroll(0,0)">Back to top</button>
  </body>
</html>
```


## Cascading Styles

Cascading Style Sheets have the term _cascade_ in the name for a number of reasons. One of these reasons is because styles can flow from a parent to child elements. We can see an example of this from setting the background color of the `body` tag.

```html{6}
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home | Farm Recipes</title>
  </head>
  <body style="margin: 60px; background-color: #f9f3ea;">
    <h1 style="color: #523f36; font-family: Palatino; font-size: 60px; text-align: center;">Farm Recipes</h1>
    <p style="color: #7b482e; font-family: Palatino; font-size: 28px; text-align: center; width: 60%; margin: auto;">Taditional farm meals that will fill your stomach without emptying your wallet<p/>
    <p style="color: #302f25; font-family: Arial; font-size: 20px;">These recipes can be used to create great tasting, healthy meals. There is a selection to choose from. If you enjoy beef, chicken, or vegetable dishes, there is something here for you...</p>
    <img style="width: 100%; height: 300px; object-fit: cover; object-position: 0 20%;" src="https://images.unsplash.com/photo-1528505086635-4c69d5f10908" alt="seven assorted varieties of baby carrots">
    <button style="color: #302f25; font-family: Arial; font-size: 20px; background: none; border: none; float: right; margin: 15px 0;" onclick="window.scroll(0,0)">Back to top</button>
  </body>
</html>
```

Notice how the background color has changed for nested children. This would also work for other properties, such as the font-family.

### Recommended

- [HTML and CSS: Design and Build Websites by Jon Duckett](https://www.wiley.com/en-us/HTML+and+CSS%3A+Design+and+Build+Websites-p-9781118008188) (book)

### Notable Mentions

Hex Colors
- [Hex colors, how do they work?](https://hackernoon.com/hex-colors-how-do-they-work-d8cb935ac0f) (blog)
