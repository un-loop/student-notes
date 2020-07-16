# Sean O'Dell
## log of Trello activity, 7/9/2020
## QA on howtovote.guide

Sean O'Dell(seanodell22)
Sean O'Dell moved Register yourself to vote - state that has online registration from To Do to Doing
26 minutes ago
Sean O'Dell moved Logged in - view my contacts from To Do to Doing
26 minutes ago
Sean O'Dell moved General Testing of All the Views from To Do to Doing
26 minutes ago
Sean O'Dell moved Create account from To Do to Doing
26 minutes ago
Sean O'Dell on Create account 26 minutes ago

this works as expected
Sean O'Dell joined Create account
27 minutes ago
Sean O'Dell completed android on Create account
27 minutes ago
Sean O'Dell completed edge on Create account
27 minutes ago
Sean O'Dell on Logged in - view my contacts 40 minutes ago

Using Chrome on Android, when selecting 'Contact' for contacts lower than the first on the list, the modal pops up at the top of the screen. This requires the user to scroll up in order to see/use it.
Sean O'Dell completed android on Logged in - view my contacts
42 minutes ago
Sean O'Dell joined Logged in - view my contacts
42 minutes ago
Sean O'Dell on General Testing of All the Views an hour ago

contact page can be accessed directly while not logged in. This may cause confusion with bookmarked pages and unremembered users.

When /multiple-matches is accessed directly, input boxes it expects to populate are missing placeholder prompts. see attachment. multipleMatches.png
Sean O'Dell attached multipleMatches.png to General Testing of All the Views an hour ago
Sean O'Dell completed firefox on General Testing of All the Views
an hour ago
Sean O'Dell on General Testing of All the Views an hour ago

While not logged in, rapidly clicking between the three options in the top left corner causes some buggy behavior, as seen in the attached video. As this is not expected user behavior, I imagine this fix will be lower priority.
This was tested solely in Firefox, since that is the only browser which I am accessing with a mouse. rapidClicking-2020-07-09_15.57.56.mp4
Sean O'Dell joined General Testing of All the Views
an hour ago
Sean O'Dell attached rapidClicking-2020-07-09_15.57.56.mp4 to General Testing of All the Views an hour ago 
Sean O'Dell moved Register yourself to vote - state that has online registration from To Do to Doing
an hour ago
Sean O'Dell completed android on Register yourself to vote - state that has online registration
an hour ago
Sean O'Dell completed edge on Register yourself to vote - state that has online registration
an hour ago
Sean O'Dell on Register yourself to vote - state that has online registration an hour ago

This applies to this ticket and states that allow mail-in registration:
if you fill out the registration form, return to the home page, then open the registration form again, all of the placeholder prompts will be missing. This error was recreated using Firefox, Chrome, Chrome on Android, and Edge. The example video uses Firefox. missingPrompts-2020-07-09_15.48.49.mp4
Sean O'Dell attached missingPrompts-2020-07-09_15.48.49.mp4 to Register yourself to vote - state that has online registration an hour ago 
Sean O'Dell joined Register yourself to vote - state that has online registration
an hour ago
Sean O'Dell on Register yourself to vote - state that has online registration an hour ago

testing Edge and Android
Sean O'Dell moved Incomplete CRUD for contacts from Doing to To Do
an hour ago
Sean O'Dell moved 'Why vote?' page probably typo from Doing to To Do
an hour ago
Sean O'Dell completed android on Look up friend's registration - Friend that is not registered to vote
an hour ago
Sean O'Dell completed firefox on Look up friend's registration - Friend that is not registered to vote
an hour ago
Sean O'Dell on Look up friend's registration - Friend that is not registered to vote an hour ago

everything looks okay, but I expected the 'Check again' button populate the 'Friends & Family' form after redirect. That function would greatly increase ease of use
Sean O'Dell added Incomplete CRUD for contacts to Doing
2 hours ago
Sean O'Dell on Look up friend's registration - Friend that is registered to vote 2 hours ago

I am no longer able to reproduce the error. Judging from that, it's possible it was a connection error
Sean O'Dell on Look up friend's registration - Friend that is not registered to vote 2 hours ago

testing firefox and android
Sean O'Dell joined Look up friend's registration - Friend that is not registered to vote
2 hours ago
Sean O'Dell completed android on Register yourself to vote - state that has mail in registration
2 hours ago
Sean O'Dell completed edge on Register yourself to vote - state that has mail in registration
2 hours ago
Sean O'Dell completed firefox on Register yourself to vote - state that has mail in registration
2 hours ago
Sean O'Dell completed chrome on Register yourself to vote - state that has mail in registration
2 hours ago
Sean O'Dell on Register yourself to vote - state that has mail in registration 2 hours ago

It's unclear what the "get started" button is for after the form has been submitted. It appears to be working properly and links in the correct way, but a user that isn't clicking on buttons just to see what they do won't know why they should be entering their address or what they can expect once they do so.
Sean O'Dell on Look up friend's registration - Friend that is registered to vote 2 hours ago

logged in under user@example.com password:PassPass
I attempted various inputs, including mock and legitimate personal info for people living in Albuquerque NM, Sedro Woolley, Greenbank, and Seattle WA
Sean O'Dell on Register yourself to vote - state that has mail in registration 4 hours ago

(firefox only) overlapping placeholder text in 'DOB' input field Screenshot from 2020-07-09 12-36-21.png
Sean O'Dell attached Screenshot from 2020-07-09 12-36-21.png to Register yourself to vote - state that has mail in registration 4 hours ago
Sean O'Dell on Register yourself to vote - state that has mail in registration 4 hours ago

Voter registration is difficult to find while logged in. Only possible to find by going to 'Why Vote?' page and clicking 'here' link in bottom right corner
Sean O'Dell added 'Why vote?' page probably typo to Doing
5 hours ago
Sean O'Dell moved Register yourself to vote - state that has mail in registration from To Do to Doing
6 hours ago
Sean O'Dell on Register yourself to vote - state that has mail in registration 6 hours ago

testing Chrome, Chrome on Android, Edge and Firefox
Sean O'Dell joined Register yourself to vote - state that has mail in registration
6 hours ago
Sean O'Dell completed android on Look up friend's registration - Friend that is registered to vote
6 hours ago
Sean O'Dell completed edge on Look up friend's registration - Friend that is registered to vote
6 hours ago
Sean O'Dell completed firefox on Look up friend's registration - Friend that is registered to vote
6 hours ago
Sean O'Dell completed chrome on Look up friend's registration - Friend that is registered to vote
6 hours ago
Sean O'Dell on Look up friend's registration - Friend that is registered to vote 6 hours ago (edited)

(on Firefox, Edge, Chrome, and Chrome on Android)
While not logged in: completing form and clicking submit leads to sign-in/sign-up page.
While logged in: completing form redirects to same form with fields emptied. No confirmation/error given, and contacts are not updated. There is no indication that user input was accepted.

(on Chrome, Edge)
Submitting the form, when it redirects to empty form, hides the 'log out' button until page is refreshed or visited again through 'howtovote.guide' link in top left corner

Once, on Edge, I was able to reach the page after the Friends & Family form where it requests additional address information. I was unable to replicate that lack of error.
Sean O'Dell on Look up friend's registration - Friend that is registered to vote 6 hours ago

register_pointer_bug-2020-07-09_10.31.21.mp4 in firefox, edge, and chrome, mouse pointer stays at default when hovering over placeholder text and shifts to i-beam pointer when hovering over other parts of input box.
Sean O'Dell attached register_pointer_bug-2020-07-09_10.31.21.mp4 to Look up friend's registration - Friend that is registered to vote 6 hours ago 
Sean O'Dell moved Look up friend's registration - Friend that is registered to vote from To Do to Doing
7 hours ago
Sean O'Dell on Look up friend's registration - Friend that is registered to vote 7 hours ago (edited)

testing on firefox, edge, chrome, android
Sean O'Dell joined Look up friend's registration - Friend that is registered to vote
7 hours ago
Sean O'Dell joined Voter Registration
7 hours ago