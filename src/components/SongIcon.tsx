import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function SongIcon() {
  const [pressed, setPressed] = useState(false);
  const router = useRouter();

  function handlePress() {
    setPressed(true);
    //router.navigate("");
  }

  return (
    <Pressable
      style={[styles.body, pressed ? styles.pressed : styles.unpressed]}
      onPressIn={() => handlePress()}
      onPressOut={() => setPressed(false)}
    >
      <Image
        source={require("../../assets/images/pholder.png")}
        style={styles.image}
      />
      <View style={styles.heading}>
        <View>
          <Text style={styles.title}>Song Title</Text>
          <Text style={styles.headingtext}>Song Album</Text>
        </View>
        <Text style={styles.side}>xx:xx</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "row",
    height: 60,
    width: "100%",
  },
  image: {
    width: 60,
    height: 60,
  },
  heading: {
    width: "70%",
    marginLeft: 20,
    marginTop: "auto",
    marginBottom: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  side: {
    fontFamily: "AileronLight",
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: 10,
    marginLeft: "auto",
    color: "white",
    fontSize: 13,
  },
  title: {
    fontFamily: "AileronLight",
    color: "white",
    fontSize: 18,
  },
  headingtext: {
    fontFamily: "AileronLight",
    color: "white",
    fontSize: 10,
  },
  pressed: {
    backgroundColor: "#383838",
  },
  unpressed: {},
});
