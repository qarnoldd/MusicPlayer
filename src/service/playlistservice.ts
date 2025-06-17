import { getDatabase } from "../utils/database";

export interface Playlist {
    playlist_id: number;
    title: string;
    img?: string;
    filepath?: string;
    created_at?: string;
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