# Hack-a-Thing 2 - React Native Map

Hack-a-thing 2 for CS98 

Tony DiPadova and Alex Chan

### Motivation

We didn't like working with Swift and XCode so we wanted to try using React Native. We found this particularly interesting because it can create both Android and iOS apps.

### Tutorial

We started by following a [tutorial](https://codeburst.io/build-a-map-with-custom-animated-markers-and-region-focus-when-content-is-scrolled-in-react-native-efb3522d9445) for creating an animated map with markers that focus with scrolling cards on the map. These cards each featured an image, a title, and a description. From there, we made it so the cards expand when tapped in order to view longer descriptions. We modified the data to showcase images and descriptions from the Dartmouth Jack-O-Lantern article [The Fraternities: Ranked, but by Architecture](https://sites.dartmouth.edu/jacko/2019/01/10/the-fraternities-ranked-but-by-architecture/).


### How It Works

When the app opens it displays a map of Hanover with several cards on the bottom of the screen featuring pictures of fraternities and their names. The map features transparent markers over each fraternity. When tapped, the cards expand to show the full descriptions from the Jack-O article. When a user scrolls to a new card, the map centers on that fraternity and the marker on that fraternity turns from transparent to opaque.


### Distribution of Work

We pair programmed for this project, though we did each make separate changes in order to both make commits. This allowed us to solve problems together and to discuss the intricacies of React Native.


### What We Learned

We learned how to create apps using React Native. Specifically, we learned how to use map views, scroll views, and how to change styling with an "onPress" handler.


### What Didn't Work

We had trouble getting the markers to line up with the cards after changing the width from the tutorial. We weren't able to get the cards to fully line up with the markers.
