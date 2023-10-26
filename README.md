# TONIGHT #

## Elevator Pitch ##
Have you ever been bored? Not known what to do? Have you ever wished that there was an application that could tell you the best things going on near you? Concerts, parties, or any other events? The "TONIGHT" app will use the user's location, and tell them whatever events are going on in their area. People can post publicly, RSVP or buy tickets, or even create events of their own. Users can also get their event featured so that it gets promoted to a wider audience. A real timeline is always up to date so you can even prepare for events going on over the next few days too! A must for people traveling to other areas looking for something to do, or people interested in what's going on near them?

## DESIGN ##

+ Example login / signup prompt

![image](https://github.com/DapDerDapy/startup/assets/122426857/153d6b43-946a-4e84-8002-5890a93e79f4)

+ Sign up page

![image](https://github.com/DapDerDapy/startup/assets/122426857/13d4fef0-5fd9-4376-b064-dd408c37ca42)

+ Home page. Featured venues will go first. Anybody can upload.

![image](https://github.com/DapDerDapy/startup/assets/122426857/11d2a544-9b35-4466-833b-0d58faba38a6)

+ Deals and sales at certain restaurants can also pop up.

![image](https://github.com/DapDerDapy/startup/assets/122426857/7faa0528-e742-4508-b2b0-01ef78d974f5)


## Key Features ##
+ Secure login over HTTPS
+ Ability to filter choices (parties, sports, concerts, etc.)
+ Users can add links to purchase tickets.
+ Ability to add friends and see activity
+ Updated in real time
+ Users can create events of their own and invite friends to events they are interested in.
+ Secure user authentication and verification
+ Can input custom location

## Technologies ##
+ **HTML**: Login page, signup page, home page, creation page.
+ **CSS**: Create a sleek modern feel. Streamlined color scheme with design that fits a variet of screen sizes.
+ **Javascript**: Create user login, view of different events, shows number of interested users.
+ **Service**
  - Login
  - Create posts
  - "Interested" select on posts
+ **DB**: Stores events in database
+ **Login**: Can only post and show "interested" when logged in. Must be authenticated to RSVP or request address.
+ **Websocket**
  - Gets information for events from internet (maybe do this or have it purely be user created posts)
  - keeps track of total "interests" on posts.
 
# Delivarables #
To be updated as I learn more in class.

## HTML Deliverables ##
+ **HTML pages** - 4 unique pages for logging in, viewing the timelines, registering, and viewing friends list
+ **Links** - Take you directly to Main Timeline when regsitering (Currenlty no data is stored, so logging in on an existing account does not work yet from the main page, but going to register or browsing as guest will take you there.) Connected pages for friends list also available when on main timeline.
+ **Text** - Events are shown with a title as well as a textual description
+ **Images** - Events in the timeline have a fun little picture associated based on the kind of event.
+ **Log in** - Input box for logging in (the way to log in is through registering, the home page login won't work until all the websocket + Database stuff is up and running)
+ **DataBase** - The events that appear on the timeline and the friends list come from Database
+ **WebSocket** - Friends list can be updated in real time (individual events on timeline will also show if friends are interested in going to an event)


## CSS Deliverables ##
+ **Header, footer, and main content**
+ **Navigation Elements** - Change based on current page, maintain consistent format
+ **Responsive to Window Resizing** - Looks good on a phone, and any size screen, except for when it is compressed horizontally to the extreme.
+ **Application elements** - Specific color scheme, utlizes contrast and space
+ **Application text content** - consistency in font.
+ **Application images** - I have a few images, but I'm going to change them!!! I want to find transparent clipart but I've been strugging with that. The images also will change based on user interaction, so JavaScript is going to be key.


## JavaScript Deliverables ##
+ **login** - Using the REGISTER page will allow access to timeline. Login won't work until data can be stored to the server.
+ **database** - Displays how many likes post have. User can like posts! For now this is placeholder until social interactivity gets implemented
+ **WebSocket** - User functionality for friend requests implemented, including a new Friends list! With open to accept / reject friend requests, as well as remove friends from list.
+ **application logic** - Number of likes change based on user interaction, additional option to unlike, and the number of likes goes down.