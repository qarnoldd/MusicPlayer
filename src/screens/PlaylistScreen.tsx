import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SongIcon from "../components/SongIcon";

export default function PlaylistScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.body}>
      <Pressable style={styles.back} onPress={() => router.back()}>
        <Text style={{ color: "white" }}>BACK</Text>
      </Pressable>
      <View style={styles.header}>
        <Text style={styles.headertitle}>Playlist</Text>
      </View>
      <ScrollView>
        <SongIcon />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  back: {
    position: "absolute",
    zIndex: 1000,
    color: "white",
    top: 100,
    left: 100,
  },
  body: {
    backgroundColor: "#191919",
    height: "100%",
  },
  header: {
    paddingTop: 50,
    height: "18%",
    justifyContent: "center",
    boxShadow: "-2px -20px 30px 17px rgba(0,0,0,0.75)",
    zIndex: 999,
  },
  headertitle: {
    fontFamily: "AileronLight",
    color: "white",
    fontSize: 45,
  },
});
