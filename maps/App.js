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
  { uri: "http://www.tri-kap.com/sites/all/themes/nexus/images/slide-image-3.jpg" },
  { uri: "https://i.imgur.com/N7rlQYt.jpg" },
  { uri: "https://i.imgur.com/UDrH0wm.jpg" },
  { uri: "https://i.imgur.com/Ka8kNST.jpg" }
]

// defining constatns for height/width based on the window
const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 2.5;
const CARD_WIDTH = CARD_HEIGHT +60;

export default class screens extends Component {

// define our marker state
  state = {
  	  pressStatus: false,
      markers: [
        {
          coordinate: {
            latitude: 43.706229,
            longitude: -72.289982,
          },
          title: "Trikap",
          description: "There is no denying that this Alpha Chi is just fucking ugly. None of the angles make any sense. Why is the roof bent like that?? It looks like a hobbit barn. And Jesus Christ why is it green??? This is probably the ugliest house on campus. But honestly? At least they tried. At least whichever blind carpenter built this house had the courage to fucking dream.",
          image: Images[0],
        },
        {
          coordinate: {
            latitude: 43.709218,
            longitude: -72.284273,
          },
          title: "LSC",
          description: "The farthest place in Hanover (rip two classes here)",
          image: Images[1],
        },
        {
          coordinate: {
            latitude: 43.706881,
            longitude: -72.286893,
          },
          title: "Sudikoff",
          description: "The saddest building in all of Hanover",
          image: Images[2],
        },
        {
          coordinate: {
            latitude: 43.703068,
            longitude: -72.290745,
          },
          title: "Foco",
          description: "The hungriest place in all of Hanover",
          image: Images[3],
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
                style={styles.cardImage}
                resizeMode="cover"
              />
              </TouchableHighlight>
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                <Text numberOfLines={
                	this.state.pressStatus ? 10 : 2
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
    height: CARD_HEIGHT*2,
    width: CARD_WIDTH,
    // overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
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
