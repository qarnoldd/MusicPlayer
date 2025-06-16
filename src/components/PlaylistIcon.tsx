import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function PlaylistIcon() {
  const [pressed, setPressed] = useState(false);
  const router = useRouter();

  function handlePress() {
    setPressed(true);
    router.navigate("/playlist");
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
        <Text style={styles.title}>Collection Title</Text>
        <Text style={styles.headingtext}>Number of Songs: XXX</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "row",
    height: 90,
  },
  image: {
    width: 90,
    height: 90,
  },
  heading: {
    marginLeft: 20,
    justifyContent: "center",
  },
  title: {
    fontFamily: "AileronLight",
    color: "white",
    fontSize: 25,
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
