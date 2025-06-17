import { getDatabase } from "../utils/database";

export interface Playlist {
    playlist_id: number;
    title: string;
    img?: string;
    filepath?: string;
    created_at?: string;
}

export interface Song {
    song_id: number;
    title: string;
    description: string;
    length: number;
    img: string;
    filepath: string;
    created_at: string;
}

export async function  getAllPlaylists() {
    const db = await getDatabase();
    const allRows = await db.getAllAsync("SELECT * FROM playlists") as Playlist[];
    const playlist = []
    for (const row of allRows)
    {
        let rowItem = {playlist_id: row.playlist_id, title: row.title, numSongs: 0}
        playlist.push(rowItem);
    }
    return playlist;
}

export async function getPlaylist(id: number) {
    const db = await getDatabase();
    const firstRow = await db.getFirstAsync("SELECT * FROM playlists WHERE playlist_id = ?", [id]) as Playlist;
    let playlist = {playlist_id: firstRow.playlist_id, title: firstRow.title, numSongs:0}
    return playlist;
}

export async function getPlaylistSongs(id: number) {
    const db = await getDatabase();
    const allRows = await db.getAllAsync(`
        SELECT songs.*
        FROM songs
        JOIN playlist_songs ON songs.song_id = playlist_songs.song_id
        WHERE playlist_songs.playlist_id = ?;
        `, [id]) as Song[];
    const songs = []
    for (const row of allRows)
    {
        let rowItem = {song_id: row.song_id, title: row.title, description: row.description, length: row.length, img: row.img, filepath: row.filepath, created_at: row.created_at}
        songs.push(rowItem);
    }
    return songs;
}