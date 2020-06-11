### __I couldn't tell the difference between Container, Grid and Box and this is what I found.__
__It's an excellent question:__

The __Container__ component is intended to be used as the main layout component. It sets minimum padding on the right and the left side, so your content doesn't touch the edges. At the same time, it horizontal centers your content when the screen is too wide. For instance, a small container width improves readability. https://material-ui.com/components/container/.  

The __Grid__ component handles the layout positioning within a Container. It's a slim abstraction on top of the CSS flexbox model. It has two interesting features: the items spacing and the responsive columns handling. https://material-ui.com/components/grid/  

The __Box__ component is a style toolbox, it's an abstraction for people who like the tailwinds approach. Instead of writing custom CSS, you can use the Box style props. https://material-ui.com/components/box/  

You might be confused by `<Container />` vs `<Grid container />`. But make no mistakes, you can't use the two interchangeably. a __Grid__ container, abstracts a flex container. A __Container__ abstracts a page top level element.  

What's the difference between __Grid__ and __Box__? You should be able to replace the __Grid__ usage with the __Box__. However, the __Box__ is a direct mapping to CSS properties, while the __Grid__ tries to be smarter, with a more abstracted API. The __Grid__ should be the default go to solution. Only consider the __Box__ or custom CSS if it's not the case.