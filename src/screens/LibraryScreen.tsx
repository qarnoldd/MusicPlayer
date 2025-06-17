import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PlaylistIcon from "../components/PlaylistIcon";

export default function LibraryScreen() {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.headertitle}>Library</Text>
      </View>
      <View>
        <PlaylistIcon id={0} title="All Songs" numSongs={0} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
