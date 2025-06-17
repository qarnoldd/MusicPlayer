import Back from "@/assets/images/svgreact/back";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SongIcon from "../components/SongIcon";
import {
  getPlaylist,
  getPlaylistSongs,
  Playlist,
  Song,
} from "../service/playlistservice";

interface playlistProps {
  id: number;
}

export default function PlaylistScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const [playlist, setPlaylist] = useState<Playlist>();
  const [songs, setSongs] = useState<Song[]>([]);
  useEffect(() => {
    async function fetchPlaylist() {
      setPlaylist(undefined);
      setSongs([]);

      const playlistDB = await getPlaylist(parseInt(id as string, 10));
      setPlaylist(playlistDB);
    }
    async function fetchSongs() {
      const songDB = await getPlaylistSongs(parseInt(id as string, 10));
      setSongs(songDB ?? []);
    }

    fetchPlaylist();
    fetchSongs();
  }, [id]);

  const listSongs = songs.map((item) => {
    return (
      <SongIcon
        key={item.song_id}
        id={item.song_id}
        title={item.title}
        album={item.description}
        length={item.length}
      />
    );
  });

  return (
    <SafeAreaView style={styles.body}>
      <Pressable style={styles.back} onPress={() => router.back()}>
        <Back stroke="white" />
      </Pressable>
      <View style={styles.header}>
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.headertitle}>
          {playlist?.title}
        </Text>
      </View>
      <ScrollView>{listSongs}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  back: {
    position: "absolute",
    zIndex: 1000,
    color: "white",
    top: 40,
    left: 10,
  },
  body: {
    backgroundColor: "#191919",
    height: "100%",
  },
  header: {
    paddingTop: 50,
    height: "18%",
    width: "100%",
    justifyContent: "center",
    boxShadow: "-2px -20px 30px 17px rgba(0,0,0,0.75)",
    zIndex: 999,
  },
  headertitle: {
    maxWidth: "100%",
    fontFamily: "AileronLight",
    color: "white",
    fontSize: 45,
  },
});
