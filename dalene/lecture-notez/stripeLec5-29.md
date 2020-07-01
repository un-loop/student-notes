REGEX
-Powerfull & Concie
-Truly cross palatform
-Be around foreer
-Easy to learn
-Way of discribing patterns
-Tool for extracting data

Metacharacters
* = 0 or more   
? = 0 or 1 or lazy mode or lookaround
+ = 1 or more   
. = any character
\ = esc next character 
$ = end of string  
^ = start of string
| = alteration in groups
{} = define Range 
() = define Group 
[] = define Character class 

Repeating Characters            Pattern   Description     Matches
a? =	Zero or One 'a' =	'' 'a'
a* =	Zero or More 'a' =  '' 'a'    'aa' 'aaa' 'aaaa'...
a+ =	One or More 'a' =	'a' 'aa' 'aaa' 'aaaa'...
a{3} =	Exactly three 'a' =	'aaa'
a{2,4} =	Two to four 'a' =	'aa' 'aaa' 'aaaa'
a{2,} =	Two or more 'a' =	'aa' 'aaa' 'aaaa' 'aaaaa'...
a{,3} =	Three or fewer 'a' =	'' 'a' 'aa' 'aaa'

Literal Characters
Command	Matches
a =  	a
\? =	?
\. =	.
\\ =	\

Shorthand Negation
Shorthand	Equivalent
\D =   is not	[^\d] digit
\S =   is not	[^\s] space
\W =   is not 	[^\w] word
. =    is not 	[^\r\n]
[\w\W] = is not	Anything

to extract comments in your code =    /\/\*(.+)\*\//

Wher to use REGEX?
text editer, java script, word processer, chrome extentions, 

Henry Marshall
Engineer at Stripe
henry@stripe.com
henry@isagoddamn.ninja


