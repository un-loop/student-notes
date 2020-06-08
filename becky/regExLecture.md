### Guest Lecture Series 5/29/20
#### [Henry Marshall](henry@stripe.com)
#### Stripe
[regex-talk](https://henrymarshall.github.io/regex-talk/#/)  
he moves data in and out of stripe.  
**He developed this talk and a chrome extention for regex (regular expressions)**

### WHY LEARN REGEX
-Powerful and Concise

-Truly cross-platform

-Will be around forever

-Easy to learn

### WHAT'S A REGEX?  
 -Way of describing patterns

 -Tool for extracting data

#### Can see all the examples at link above as well as cheat sheets. I pasted a few below.

### Important things to remember:  
* __Use comments because regex is easier to write then to read later__ 

* __REGEX fails silently so test for wrongs as well as rights!!__ 
 
* __For some unknown reason, JS globals does not work as expected. Google it since there is a lot__  
       __of documentation about it.__ 
 
* __And pay special attention to email validation due to hackers and account for them!__  


#### SPLITTING ON LINES
const unix_str = "foo\nbar"  
unix_str.split("\n")  
// [ 'foo', 'bar' ]  

const windows_str = "foo\r\nbar"  
windows_str.split("\n")  
// [ 'foo\r', 'bar' ]  

#### REPEATING CHARACTERS
__Pattern Description Matches__

a?	Zero or One 'a'	'' 'a'  
a*	Zero or More 'a'	'' 'a' 'aa' 'aaa' 'aaaa'...  
a+	One or More 'a'	'a' 'aa' 'aaa' 'aaaa'...  
a{3}	Exactly three 'a'	'aaa'  
a{2,4}	Two to four 'a'	'aa' 'aaa' 'aaaa'  

#### THE DOT CHARACTER

const reg = /ba./  

reg.test("foo") // false  
reg.test("bar") // true  
reg.test("baz") // true  

#### MATCHING EITHER OR

const reg = /???/  

const str = "My grandma has a cat. My grandpa has a dog."  
str.replace(reg, "family")  

#### "SOLUTION" WITH .

const reg = /grand.a/g  

const str = "My grandma has a cat. My grandpa has a dog."  
str.replace(reg, "family")  
// "My family has a cat. My family has a dog."  

reg.test(str)  
// true  

reg.test("My grandxa has a hamster")  
// true  

const reg = /grand[mp]a/g  

const str = "My grandma has a cat. My grandpa has a dog."  
str.replace(reg, "family")  
// "My family has a cat. My family has a dog."  

reg.test(str)  
// true  

reg.test("My grandxa has a hamster")  
// false  

#### SHORTHAND CHARACTER CLASS
__Shorthand Equivalent__

[0-9]	[0123456789]  
\d	[0-9]  
\w	[A-Za-z\d_]  
\s	[ \t\n\r]  