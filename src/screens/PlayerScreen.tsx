import Back from "@/assets/images/svgreact/back";
import Play from "@/assets/images/svgreact/play";
import SkipBack from "@/assets/images/svgreact/skipback";
import SkipForward from "@/assets/images/svgreact/skipforward";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PlayerScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.body}>
      <Pressable style={styles.back} onPress={() => router.back()}>
        <Back color="white" style={{ filter: "invert(100)" }} />
      </Pressable>
      <Image
        source={require("../../assets/images/pholder.png")}
        style={styles.image}
      />
      <View style={styles.playerbody}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.playlist}>Playlist</Text>
        <View style={styles.seekbar} />
        <View style={styles.timer}>
          <Text style={styles.time}>XX:XX</Text>
          <Text style={styles.time}>XX:XX</Text>
        </View>
        <View style={styles.playback}>
          <SkipBack />
          <Play style={styles.play} />
          <SkipForward />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#191919",
    height: "100%",
  },
  back: {
    position: "absolute",
    zIndex: 999,
    color: "black",
    top: 40,
    left: 10,
  },
  image: {
    width: "100%",
    height: "70%",
  },
  playerbody: {
    boxShadow: "0px -10px 80px 100px rgba(25,25,25,1)",
    alignItems: "center",
  },
  title: {
    fontFamily: "AileronLight",
    color: "white",
    fontSize: 30,
  },
  playlist: {
    fontFamily: "AileronLight",
    color: "white",
    fontSize: 20,
  },
  seekbar: {
    color: "white",
    backgroundColor: "white",
    height: 4,
    borderRadius: 5,
    width: "90%",
    marginTop: 10,
    marginBottom: 10,
  },
  timer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "white",
    width: "85%",
  },
  time: {
    fontFamily: "AileronLight",
    color: "white",
  },
  playback: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
  },
  play: {
    marginLeft: 50,
    marginRight: 50,
  },
});
