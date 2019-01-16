import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableHighlight
} from "react-native";

import MapView from "react-native-maps";

// images to use
const Images = [
  { uri: "https://sites.dartmouth.edu/jacko/files/2019/01/12-1w8cl0e.png" },
  { uri: "https://sites.dartmouth.edu/jacko/files/2019/01/11-2f7c818.png" },
  { uri: "https://sites.dartmouth.edu/jacko/files/2019/01/10-2gp0x15.png" },
  { uri: "https://sites.dartmouth.edu/jacko/files/2019/01/9-1dmp52y.png" },
  { uri: "https://sites.dartmouth.edu/jacko/files/2019/01/8-1jhpc9m.png" },
  { uri: "https://sites.dartmouth.edu/jacko/files/2019/01/7-2iefiiz.png" },
  { uri: "https://sites.dartmouth.edu/jacko/files/2019/01/6-2cof3ul.png" },
  { uri: "https://sites.dartmouth.edu/jacko/files/2019/01/5-1ugwt0v.png" },
  { uri: "https://sites.dartmouth.edu/jacko/files/2019/01/4-21xd4di.png" },
  { uri: "https://sites.dartmouth.edu/jacko/files/2019/01/3-xdqgrc.png" },
  { uri: "https://sites.dartmouth.edu/jacko/files/2019/01/2-yvf56b.png" },
  { uri: "https://sites.dartmouth.edu/jacko/files/2019/01/1-1i4ecyo.png" },
  { uri: "https://sites.dartmouth.edu/jacko/files/2019/01/0-1f19qxj.png" },
]

// defining constatns for height/width based on the window
const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 3;
const CARD_WIDTH = width - 60;

export default class screens extends Component {

// define our marker state
  state = {
  	  pressStatus: false,
      markers: [
        {
          coordinate: {
            latitude: 43.706241,
            longitude: -72.291915,
          },
          title: "12. Bones Gate",
          description: "I’m just going to say what we are all thinking. BG is fucking ugly. I hate their dumpster fire of a yard. I hate the general state of disrepair. I hate the boring brick, and most of all I hate their little bitchass one story attempt at a columned facade. A pox upon you all.",
          image: Images[0],
        },
        {
          coordinate: {
            latitude: 43.706540,
            longitude:  -72.289898,
          },
          title: "11. Gamma Delta Chi",
          description: "GDX pisses me off. Which side is the front of your house? Which door is your front door? Why is your columned grand patio facing away from the fucking road? And don’t get me started on your fat fucking chimney and lame hand-painted sign. Disgraceful.",
          image: Images[1],
        },
        {
          coordinate: {
            latitude: 43.702706,
            longitude: -72.290642,
          },
          title: "10. Psi Upsilon",
          description: "Psi U differentiates itself from the classical fraternity look with a distinctive architectural silhouette and modern touches. I don’t like it. Much like GDX, it is weirdly asymmetrical and lame as fuck.",
          image: Images[2],
        },
        {
          coordinate: {
            latitude: 43.706952,
            longitude:  -72.292821,
          },
          title: "9. Alpha Chi Alpha",
          description: "There is no denying that this Alpha Chi is just fucking ugly. None of the angles make any sense. Why is the roof bent like that?? It looks like a hobbit barn. And Jesus Christ why is it green??? This is probably the ugliest house on campus. But honestly? At least they tried. At least whichever blind carpenter built this house had the courage to fucking dream.",
          image: Images[3],
        },
        {
          coordinate: {
            latitude:  43.706153,
            longitude:  -72.291505,
          },
          title: "8. Zeta Psi",
          description: "I’m a known whore for columns, but this just doesn’t do it for me. You can’t just slap some columns on a brick box and call it architecture. Miss me with that shit.",
          image: Images[4],
        },
        {
          coordinate: {
            latitude: 43.702661,
            longitude:   -72.291488,
          },
          title: "7. Theta Delta Chi",
          description: "TDX  is another house that just seems unable figure out which side is it’s front. I hate you and your asymmetric side porch. Do better, you godless degenerates.",
          image: Images[5],
        },
        {
          coordinate: {
            latitude: 43.706229,
            longitude:  -72.289982,
          },
          title: "6. Kappa Kappa Kappa",
          description: "Tri-Kap has a distinct McMansiony aura that screams “recently renovated by someone without taste.",
          image: Images[6],
        },
        {
          coordinate: {
            latitude: 43.706612,
            longitude:  -72.291515,
          },
          title: "5. Chi Gamma Epsilon",
          description: "God this house is boring but I am not offended so there’s that.",
          image: Images[7],
        },
        {
          coordinate: {
            latitude: 43.706024,
            longitude:  -72.290993,
          },
          title: "4. Beta Alpha Omega",
          description: "Beta is the best example of the classical plantation frat house on campus. Zete walked so Beta could fucking run, lemme tell you. Look at that symmetry and proportionality. These columns can, like, get it",
          image: Images[8],
        },
        {
          coordinate: {
            latitude: 43.703718,
            longitude:  -72.284259,
          },
          title: "3. Chi Heorot",
          description: "The structure: symmetrical. The brickwork: flawless. The roof trimming, dark shutters, and balance between Greco-Roman triangular gables and round archways: artful and well-conceived. This house could hit me in the face and I would thank it.",
          image: Images[9],
        },
        {
          coordinate: {
            latitude: 43.706337,
            longitude:  -72.292297,
          },
          title: "2. Sigma Nu",
          description: "God this house is elegant. The most tasteful house on campus. This looks like the house where my aging sugar daddy lives with his wife and kids that he won’t talk about with me. What are they like? Do you think she knows deep down that her husband doesn’t love her anymore? Does it even matter to her?",
          image: Images[10],
        },
        {
          coordinate: {
            latitude:  43.706494,
            longitude:  -72.291123,
          },
          title: "1. Phi Delta Alpha",
          description: "Whichever coked-up, self-obsessed asshole designed this absurd building is my personal hero. Every time I walk past it I become fully erect. They really did make a grand entrance way with a set of small columns supporting a Juliette Balcony sandwiched within another set of even bigger columns supporting a pantheonic gable. This house looks like it read The Great Gatsby once and high school and still quotes it regularly. This house looks like it has a special wood paneled room designated for smoking cigars and listening to NPR. Phi Delt House, in all your overly ornate pretentious glory, please dick me down. Ruin my life. Do it.          ",
          image: Images[11],
        },
        {
          coordinate: {
            latitude: 43.705801,
            longitude:  -72.287810,
          },
          title: "Honorable Mention: Sigma Alpha Epsilon",
          description: "Oh SAE, I was trying to limit this list to frats recognized by the college, but I just couldn’t do it. You are too beautiful. If Phi Delt is my wild, pretentious college boyfriend whom I will always love, you are my inevitable boring white old-money husband. You and your tasteful brick and shuttered windows. You and your strip of tall columns that bear an oversized flag that I would resent in others, but on you reminds me of your family compound in Nantucket. I will wed you in a cathedral and hold our reception in your family country club. I will stay home at our house in Greenwich and raise our children, Moorhead and Monroe. I will offer demure smiles behind you on the podium for your bid for the Republican Nomination. I will never truly love you, but I will love what you can give me, and perhaps those two are not so different after all.",
          image: Images[12],
        },
      ],
      region: {
        latitude: 43.705131,
        longitude: -72.288719,
        latitudeDelta: 0.0150000,
        longitudeDelta: 0.0170000,
      },
    };

  // runs when app loads
  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }

  _onPress = () => {
  	this.setState({pressStatus: !this.state.pressStatus});
  }

  render() {
    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });
    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.map = map}
          initialRegion={this.state.region}
          style={styles.container}
        >
        {this.state.markers.map((marker, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          const opacityStyle = {
            opacity: interpolations[index].opacity,
          };
          return (
            <MapView.Marker key={index} coordinate={marker.coordinate}>
              <Animated.View style={[styles.markerWrap, opacityStyle]}>
                <Animated.View style={[styles.ring, scaleStyle]} />
                <View style={styles.marker} />
              </Animated.View>
            </MapView.Marker>
          );
        })}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            <View style={this.state.pressStatus ? styles.cardExpanded : styles.card} key={index}>
            <TouchableHighlight onPress={this._onPress} style={styles.cardImage}>
              <Image
                source={marker.image}
                style={this.state.pressStatus ? styles.cardImageExpanded : styles.cardImage}
                resizeMode="cover"
              />
              </TouchableHighlight>
              <View style={this.state.pressStatus ? styles.textContentExpaned : styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                <Text numberOfLines={
                	this.state.pressStatus ? 18 : 2
                } style={styles.cardDescription}>
                  {marker.description}
                </Text>
              </View>
            </View>
          ))}
          
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    // overflow: "hidden",
  },
  cardExpanded: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT*2.5,
    width: CARD_WIDTH,
    // overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  cardImageExpanded: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
    flexWrap: "wrap",
  },
  textContentExpanded: {
    flex: 3,
    flexWrap: "wrap",
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
    flexWrap: "wrap"
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});

AppRegistry.registerComponent("mapfocus", () => screens);
