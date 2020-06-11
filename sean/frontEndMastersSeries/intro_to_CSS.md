## Sean O'Dell 05/27/20

**block - elements that are as wide as their containers
 -ex. div, p

**inline - elements that are only as wide as their content
    -ex. span, a
    -can only add padding/margin to horizontal axis. for vertical axis, modify containing element


## units of measure
- **em - the size of the letter em based on the size of em in the root element.

- **rem(route relative em) - as big as em is in that element of the page. Changes based on font size

- **px - 1 pixel

should us px

## width x height
sets dimensions of elements, usually used only for block elements.

can use any form of measurement except '%'

should not use height as static measurement, use width to moderate size to prevent distortion

## Navbars & Anchors
some browsers use padding, others margin to modify <li>. take into account when spacing elements

change <a> from inline to block to fill clickable area to containing element
-   nav a {
        display:block
    }

**inline-block - combines properties of inline & block. used frequently for navbars
    -sets placing convention to inline status
    -uses block level factors for padding & margin

## Floats and Clears

**float - 'pulls the element from "normal flow" and floats it in the direction indicated.' pulls out of normal flow "if you float, you must clear"

**clear - prevents content from smushing against eachother

float/clear formula:
.group:after {
    content: "";
    display: table;
    clear: both:
}
?shouldn't you avoid using tables for layout?
a: uses table display format, doesn't use a table element

**TRBL (pnuemonic) - TRouBLe designates Top-Right-Left-Bottom; order that 4-value notation applies to elements (prop: T R B L); 2-value (prop: TB RL)

## Flexbox
requires two elements (parent/child relationship, NOT grandparent/grandchild)
-   parent: flex container
-   children: flex items

**flex - display property value, important for additional flex properties

**flex-flow (property) - combines flex-row and flex-column, first values are row or column, second is wrap setting

**justify-content(property) - sets distance between boxes

**flex-basis(property) - sets space of flex items