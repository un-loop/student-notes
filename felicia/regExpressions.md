### Henry Marshall - Regular Expressions

* Why Learn REGEX - powerful, concise, cross-platform, will be around forever, easy to learn
* What is it - way to describe patterns in text,
tool for extracting data
* repeating patterns - a pattern modifies the preceding character.
* splitting on lines - reg ex bound by backslash
* dot character - /ba./ : followed by anything as long as it starts with ba, returns true or false
* character class - [mp] only allows for those letters to replace the . /grand[mp]a/g - the g makes it global so it will replace all in the sentence
* you can combine character class and repeating characters
* shorthand character classes - [0-9] range of characters - \d, \w, \s
* negation - caret - /[^aeiou]/i - i means case sensitive
* literal characters - a = a, \? = ?, \. = ., \\ = \
* Groups - /(na)+/ - treated as an atomic unit the na has to repeat.
* Alternation in groups - /(brother|sister)/g let's each one be alternated | = OR
* more than 1 way to match a query
* backreferences - /(\W+)-\1/ - 1 refers to the group, start in first location
* capture groups - pull data out - /(100|\d{1,2}(\.d+)?)%/
* dot all the things - pull comments out or identify them - /\/\*(.+)\*\//s - s means over lines, s is used in new JS
* this works in editors using syntax highlighting
    - vim
    - emacs
    - Highlight.js
    - Sublime
* other times . is too much
* matching email addresses - see recording
* ^ - has 2 different meanings - ^ can mean the beginning of the string, or the ^ can negate in character class
* ? - has multiple meanings, as well
* regex - often fail silently
* flavors of regex - differnt languages can use different characters for backreferences - could be \,$,%
* JS methods for global regex are a mess
* where to use regex - word processor, vailidation, textEditor, corome via deepsearch, 
* see recording for resources, see: Regex Crossword








