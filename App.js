import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  Image,
  Button,
} from "react-native";
import Constants from "expo-constants";

import imdb from "./assets/imdb.jpg";
import interStellar from "./assets/interstellar.jpg";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#212121" />
      <ScrollView
        style={{
          marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
        }}
      >
        <View style={[styles.logoContainer]}>
          <Image source={imdb} style={styles.imgLogo} resizeMode="contain" />
        </View>

        <View>
          <Text style={styles.title}>Interstellar</Text>

          <Text style={styles.subTitle}>
            2014 PG--13 2h 49 min Adventure, Drama, Sci-Fi
          </Text>

          <View style={[styles.presentationContainer]}>
            <Image source={interStellar} style={styles.imgPresentation} />
            <View style={styles.textContainer}>
              <Text style={styles.textPresentation}>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival.
              </Text>
              <Button
                title="+ ADD TO WHATCHLIST"
                style={styles.buttonPresentation}
              ></Button>
            </View>

            <View style={styles.separation}>
              <Text>XXX</Text>
            </View>

            <View>
              <Text>Top Billed Cast</Text>
              <Text>SEE ALL</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Text>Ca va ou bien ? ou pas ?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#393939",
    alignItems: "flex-start",
    justifyContent: "center",
  },

  logoContainer: {
    backgroundColor: "grey",
    // width: 600,
  },

  // Pas d'héritage de style

  imgLogo: {
    height: 50,
    width: 100,
    resize: "contain",
    backgroundColor: "grey",
    marginLeft: 10,
    marginTop: 10,
  },

  title: {
    fontSize: 30,
    // fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },

  subTitle: {
    fontSize: 10,
    color: "white",
    marginLeft: 10,
  },

  presentationContainer: {
    marginTop: 20,
    marginLeft: 10,
    display: "flex",
    flexDirection: "row",
  },

  textContainer: {
    display: "flex",
    width: 300,
    padding: 10,
  },

  textPresentation: {
    color: "white",
    fontSize: 12,
    textDecorationStyle: "justifyContent",
    marginBottom: 20,
  },

  imgPresentation: {
    height: 150,
    width: 100,
    resizeMode: "contain",
  },

  buttonPresentation: {
    backgroundColor: "blue",
    color: "white",
    textAlign: "center",
    // height: 20,
    width: 300,
  },

  separation: {
    backgroundColor: "#212121",
    height: 30,
    width: 400,
  },
});
