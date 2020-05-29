## Sean O'Dell 05/28/2020 - 
## HTML Forms

## Form Basics
all enclosed in <form> tag, requires additional attributes (name, ?id?)

**input - tag that denotes input from user. ex:
    -text
    -tel
    -date

make forms accessible with larger fonts, being aware of colorblindness, label tags etc.

## Form input types
form types modify display, valid inputs, and auto-fills

input range can be used to limit possible numeric inputs using min and max attributes

radio button allows only 1 choice (watch value for 'name' attribute), checkboxes allow multiple ('checked' causes checked by default)

id - designates specific element
name - designates input field (backend processing)
value - variable property

## form styling

can pull color from background piture to pul together color scheme

buttons styled to make them noticable and easily differentiated

**attribute selector - selector used by defining attribute of elements
<element>, [<attribute>='<value>']

**exclusion selector - used to exclude certain elements from selector
<element>:not([<attribute>='<value>'])