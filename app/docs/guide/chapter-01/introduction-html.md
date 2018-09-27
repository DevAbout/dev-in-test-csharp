# Introduction to HTML

In this section we begin working on an ongoing project called __Farm Recipes__. This website will eventually allow users to read traditional recipes.

Here we will create a single web page for that site. This will be a basic first draft and it will not include any styling. We will implement just enough to help us understand the basics of HTML. This insight will be useful when writing UI based tests.

## Plain Text

We will begin by getting a basic file to show in the browser. Start by creating a folder under __dev__ called __farm-recipes__.

```shell
C:\dev\farm-recipes
```

Now open a simple text editor such as Notepad and type the following:

```
Farm Recipes
```

Now we need to save this file __with the correct extension__ within `C:\dev\farm-recipes`. In Notepad click `file > save as`. Browse to `C:\dev\farm-recipes`. In the file name enter `index.html`. Before saving, change __Save as type__ to __All Files (\*.\*)__. The last step is to click save.

::: tip
To verify that the file has the correct extension, open `C:\dev\farm-recipes` within Windows Explorer and double check the `index.html` file extension. The file should end with `.html` and not __.html.txt__.
:::

::: tip
If the file extension is not visible [follow this How-To Geek article](https://www.howtogeek.com/205086/beginner-how-to-make-windows-show-file-extensions/).
:::

Windows Explorer should show `index.html` with an icon of a browser. The extension enables Windows to _assume_ that we typically want to open this file with a browser. Either double click this file, or right click and choose to open it in a browser of your choice.

TODO: Image of Farm Recipes 1

::: tip
You can leave the file open in both the browser and Notepad. Just remember to save the file after making changes. After this, refresh the browser to see the affect.
:::

## HTML Markup

Now we will add some content to `C:\dev\farm-recipes\index.html`. Using Notepad edit `index.html` so that it contains the following:

```html
Farm Recipes

This site contains recipes for traditional farm food. They are classic meals that will fill your stomach without emptying your wallet.

These recipes can be used to create great tasting, healthy meals. There is a selection to choose from. If you enjoy beef, chicken, or vegetable dashes, there is something here for you.
```

Save the file the refresh the browser. This should result in the following display:

TODO: Image of Farm Recipes 2

The browser seems to have ignored the [whitespace](https://en.wikipedia.org/wiki/Whitespace_character) and has collapsed all the content. This is because browsers are not designed to understand plain text documents - which is what we currently have in `index.html`. It has an `.html` extension however the content does not contain HTML tags.

Browsers are designed to read and interpret HTML tags. These tags give a document structure and provide a description of different areas of a document. Modify `index.html` to have the following content:

```html
<h1>Farm Recipes</h1>
<p>This site contains recipes for traditional farm food. They are classic meals that will fill your stomach without emptying your wallet.<p/>
<p>These recipes can be used to create great tasting, healthy meals. There is a selection to choose from. If you enjoy beef, chicken, or vegetable dashes, there is something here for you...</p>
```

Saving and refreshing `index.html` will result in a better looking page:

TODO: Image of Farm Recipes 3

Now the browser does a better job because we used some HTML to give structure and meaning to the sections. We used the `h1` element to indicate that the first line was a header element. We used the `p` tag to indicate two paragraph elements.

While there are exceptions, HTML elements generally consist of an opening tag, content and then the closing tag. We will cover HTML tags in more detail as we progress through this guide.

TODO: Image of HTML Element 1

HTML provides the structure and context while Cascading Style Sheets (CSS) provides the style. CSS is used to specify colors, margins, layout etc. As we are not providing any CSS at this stage the browser is using its default style to render `index.html`.

If you open `index.html` in different browsers and you may see minor differences. The browsers may use different fonts, and the whitespace might be slightly different. We are seeing the default style of each browser. We will overwrite this by using CSS to specify the style properties in later sections.

::: tip
In most cases, browsers will ignore consecutive spaces made by the space bar, even if you are using HTML tags. They will only display the first space. This is by design and prevents bad practices such as using spaces for layout. The exceptions to this rule are:
- [The Preformatted Text element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre)
- [The White-Space CSS Property](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
:::

## The Html Element

According to the HTML specification there should be a single root (top level) element of type `html`. This means we need to update `index.html` to be:

```html
<html lang="en">
  <h1>Farm Recipes</h1>
  <p>This site contains recipes for traditional farm food. They are classic meals that will fill your stomach without emptying your wallet.<p/>
  <p>These recipes can be used to create great tasting, healthy meals. There is a selection to choose from. If you enjoy beef, chicken, or vegetable dashes, there is something here for you...</p>
</html>
```

Here we see an HTML element __attribute__ being used for the first with `lang=en`. An attribute is a name value pair which is used to set a property or characteristic of an element. The affect of this depends on the element and attribute. An element may have multiple attributes.

TODO: Image of HTML Element 2 (with multiple attributes)

> Authors are encouraged to specify a lang attribute on the root html element, giving the document's language. This aids speech synthesis tools to determine what pronunciations to use, translation tools to determine what rules to use, and so forth - [W3C](https://www.w3.org/TR/html50/semantics.html#the-html-element)

## Head and Body Sections

Next we need to add a `head` and `body`. The `head` section contains child elements which provide [metadata](https://whatis.techtarget.com/definition/metadata) and can define or import JavaScript and Cascading Style Sheet code if required. The `head` section is not made visible to the user, these elements are not rendered like the elements we have seen before e.g. `h1` and `p`. The elements we want to be rendered should be placed in the `body` element.

Next we introduce these sections to `index.html`

```html
<html lang="en">
  <head>
    <title>Home | Farm Recipes</title>
  </head>
  <body>
    <h1>Farm Recipes</h1>
    <p>This site contains recipes for traditional farm food. They are classic meals that will fill your stomach without emptying your wallet.<p/>
    <p>These recipes can be used to create great tasting, healthy meals. There is a selection to choose from. If you enjoy beef, chicken, or vegetable dashes, there is something here for you...</p>
  </body>
</html>
```

Notice the `title` element. This sets the text in the title bar or tab of the browser. This content is also used by search engines.

## DOCTYPE

Over the years there have been many [different versions of HTML](https://www.yourhtmlsource.com/starthere/historyofhtml.html). Browsers are backwards compatible and support older versions of HTML. HTML 5 is the latest version of the HTML standard. To ensure browsers parse the HTML document correctly, we need to instruct the browser as to which version of HTML is contained in the document. This instruction is known as the __DOCTYPE__.

The DOCTYPE is not considered a tag, it is an instruction. As this instruction informs the browser on how to interpret the document it must appear at the start of the document.

Update `index.html` to include the HTML 5 DOCTYPE:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home | Farm Recipes</title>
  </head>
  <body>
    <h1>Farm Recipes</h1>
    <p>This site contains recipes for traditional farm food. They are classic meals that will fill your stomach without emptying your wallet.<p/>
    <p>These recipes can be used to create great tasting, healthy meals. There is a selection to choose from. If you enjoy beef, chicken, or vegetable dashes, there is something here for you...</p>
  </body>
</html>
```

HTML 5 has the simplest DOCTYPE. If you are interested other DOCTYPE declarations you can read about them on [this W3C page](https://www.w3.org/QA/2002/04/valid-dtd-list.html).

## Semantic Markup

As it's name suggests HTML is a markup language. This is because we add tags (_marks_) to the page, which provides additional context to browsers. It is typical for developers refer to these tags as _HTML markup_.

When used correctly HTML tags provide relevant meaning to areas of a document. Therefore these tags are often referred to as _semantic markup_. Using meaningful tags is important for [accessability](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#What_is_accessibility). Users who are visually impaired may use a screen reader to read and navigate the site. Using proper semantic markup helps the screen reader to provide a coherent experience for these users.

## Further Reading

For more information on HTML
- [HTML 5 Tutorial by W3Schools](https://www.w3schools.com/html/) (tutorial)
- [HTML and CSS: Design and Build Websites by Jon Duckett](https://www.wiley.com/en-us/HTML+and+CSS%3A+Design+and+Build+Websites-p-9781118008188) (book)

The `lang` attribute in the `html` tag
- [On Use of the Lang Attribute by Adrian Roselli](http://blog.adrianroselli.com/2015/01/on-use-of-lang-attribute.html) (article)
- [Why use the language attribute? by W3C](https://www.w3.org/International/questions/qa-lang-why)
- [What is the difference between lang="en" and lang="en-US"?](https://stackoverflow.com/a/11319263/259477) (article)

For more information on Semantic Markup
- [Semantic Markup by html.com](https://html.com/semantic-markup/) (article)
