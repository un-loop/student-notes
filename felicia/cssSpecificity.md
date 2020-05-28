### CSS Specificity

* Weight can be why CSS rules aren't applying
* How specific you are will determine what CSS rules apply  and which ones won't
* There is a specifity hierarchy, the higher the specificity is the ones that is applied
* Four categories - inline, ID's, classes, attributes and elements
* equal specificity - latest is applied; unequal - more specific applies
* More specific selectors = greater specificity
* last rule - overrides previous and conflicting rules
* Embedded - more specific than attribute
* ID - higher specificity than attributes, try to use ID to increase specificity
* Classes - beat any element selectors
* Universal selector, inherited selector - have a specificity of 0, 0, 0, 0
* Memorize how to measure specificity. “Start at 0, add 1000 for style attribute, add 100 for each ID, add 10 for each attribute, class or pseudo-class, add 1 for each element name or pseudo-element. So in
    EX:
    body #content .data img:hover

    the specificity value would be 122 (0,1,2,2 or 0122): 100 for #content, 10 for .data, 10 for :hover, 1 for body and 1 for img.” [CSS Specificity]

* Alternative way: “Count the number of ID attributes in the selector (= a). Count the number of other attributes and pseudo-classes in the selector (= b). Count the number of element names and pseudo-elements in the selector (= c). Concatenating the three numbers a-b-c gives the specificity.

### What Is What?
* A selector is the element that is linked to a particular style. E.g. p in

p { padding: 10px; }

* A class selector is a selector that uses a defined class (multiple per page). E.g. p.section in

p.section { padding: 10px; }

* An ID selector is a selector that uses an individually assigned identifier (one per page). E.g. p#section in

CSS: #section { padding: 10px; }
(X)HTML: <p id="section">Text</>

* A contextual selector is a selector that defines a precise cascading order for the rule. E.g. p span in

p span { font-style: italic; }

defines that all span-elements within a p-element should be styled in italics.

* An attribute selector matches elements which have a specific attribute or its value. E.g. p title in

p[title] { font-weight: bold; }

matches all p-elements which have a title attribute.

* Pseudo-classes are special classes that are used to define the behavior of HTML elements. They are used to add special effects to some selectors, which are applied automatically in certain states. E.g. :visited in

a:visited { text-decoration: underline; }

* Pseudo-elements provide designers a way to assign style to content that does not exist in the source document. Pseudo-element is a specific, unique part of an element that can be used to generate content “on the fly”, automatic numbering and lists. E.g. :first-line or :after in

p:first-line { font-variant: small-caps; }
a:link:after { content: " (" attr(href) ")"; }