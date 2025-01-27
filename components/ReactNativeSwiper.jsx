import React, { Component } from "react";
import { Text, View } from "react-native";
import Swiper from "react-native-swiper";

//import { getItems } from './services/data';
const styles = {
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },

  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },

  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },

  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
};
const items = [
  { title: "Hello Swiper", css: styles.slide1 },
  { title: "Beautiful", css: styles.slide2 },
  { title: "And simple", css: styles.slide3 },
];
export function getItems() {
  return items;
}

export default class ReactNativeSwiper extends Component {
  constructor(props) {
    super(props);
    /*this.state = {
      items: [],
    };*/
    this.state = {
      items: getItems(),
    };
  }
  componentDidMount() {
    /*this.setState({
      items: [
        { title: 'Hello Swiper', css: styles.slide1 },
        { title: 'Beautiful', css: styles.slide2 },
        { title: 'And simple', css: styles.slide3 }
      ]
    })*/
    /*this.state = {
      items: getItems(),
    };*/
  }
  render() {
    return (
      <Swiper showsButtons>
        {this.state.items.map((item, key) => {
          return (
            <View key={key} style={item.css}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          );
        })}
      </Swiper>
    );
  }
}
