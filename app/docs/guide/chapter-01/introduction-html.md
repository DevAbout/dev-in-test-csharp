# Introduction to HTML

In this section we will create our first web site. We will be developing a site called __"Farm Recipes"__. This will be the first draft. We will implement just enough to help us understand the basics of HTML. This insight will be useful when writing UI based tests.

## Display File In Browser

We will begin by getting a basic file to show in the browser. Start by creating a folder under __dev__ called __farm-recipes__.

```shell
C:\dev\farm-recipes
```

Now open a simple text editor such as Notepad and type the following:

```
Farm Recipes
```

Now we need to save this file __with the correct extension__ within __c\dev\farm-recipes__. In Notepad click `file > save as`. Browse to __C:\dev\farm-recipes__. In the file name enter __index.html__. Before saving, change __Save as type__ to __All Files (\*.\*)__. The last step is to click save.

::: tip
To verify that the file has the correct extension, open __c\dev\farm-recipes__ within Windows Explorer and double check the __index.html__ file extension. The file should end with __.html__ and not __.html.txt__.
:::

::: tip
If the file extension is not visible [follow this How-To Geek article](https://www.howtogeek.com/205086/beginner-how-to-make-windows-show-file-extensions/).
:::

Windows Explorer should show __index.html__ with an icon of a browser. The extension enables Windows to _assume_ that we typically want to open this file with a browser. Either double click this file, or right click and choose to open it in a browser of your choice.

TODO: Image of Farm Recipes 1

## HTML Tags

Now we will add some content to __C:\dev\farm-recipes\index.html__. Using Notepad edit __index.html__ so that it contains the following:

```html
Farm Recipes

This site contains recipes for traditional farm food. They are classic meals that will fill your stomach without emptying your wallet.
```

Save the file the refresh the browser. This should result in the following display:

TODO: Image of Farm Recipes 2

The browser has ignored all the spacing and has collapsed all the content. This is because browsers are not designed to understand plain text documents - which is what we currently have in __index.html__. It has an __.html__ extension however the content does not contain HTML tags.

Browsers are designed to read and interpret HTML tags. These tags give a document structure and provide a meaningful description of different areas of a document. Modify  __index.html__ to have the following content:

```
<h1>Farm Recipes</h1>
<p>This site contains recipes for traditional farm food. They are classic meals that will fill your stomach without emptying your wallet.<p/>
```

Saving and refreshing __index.html__ will result in a better looking page:

TODO: Image of Farm Recipes 3

The browser did a better job because we used HTML tags to give meaning to the sections. We used __h1__ to indicate that the first line was a header and then we marked the following sentence as a paragraph using the __p__ tag.

--->>>> DO we need more on the basics of tags?

### Markup

HTML is referred as a markup language. This is essentially because we include additional information (marks) to the page. It is typical for developers refer to these tags as _HTML mark-up_.

When used correctly HTML tags provide relevant meaning to areas of a document. Therefore these tags are often referred to as _semantic markup_. Using meaningful tags is important for accessability. Users who are visually impaired may use a screen reader to read and navigate the site. Using proper semantic markup helps the screen reader to provide a coherent experience for these users. For more information please read the [Semantic Markup article by html.com](https://html.com/semantic-markup/).

