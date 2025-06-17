import { getDatabase } from "../utils/database";

export async function  getAllPlaylists() {
    const db = await getDatabase();
    return await db.getAllAsync("SELECT * FROM playlists");
}