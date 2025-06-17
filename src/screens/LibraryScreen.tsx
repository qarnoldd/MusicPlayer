import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PlaylistIcon from "../components/PlaylistIcon";
import { getAllPlaylists, Playlist } from "../service/playlistservice";

export default function LibraryScreen() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    async function fetchPlaylists() {
      const playlistDB = await getAllPlaylists();
      setPlaylists(playlistDB);
    }
    fetchPlaylists();
  }, []);

  const listPlaylists = playlists.map((item) => {
    return (
      <PlaylistIcon
        key={item.playlist_id}
        id={item.playlist_id}
        title={item.title}
        numSongs={0}
      />
    );
  });

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.headertitle}>Library</Text>
      </View>
      <View>
        <PlaylistIcon id={0} title="All Songs" numSongs={0} />
        {listPlaylists}
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
