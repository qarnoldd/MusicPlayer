import * as SQLite from "expo-sqlite";

let db: SQLite.SQLiteDatabase;

export async function getDatabase(): Promise<SQLite.SQLiteDatabase> {
    if(!db) {
      try {
        db   = await SQLite.openDatabaseAsync("database.db");
        await db.execAsync("PRAGMA journal_mode = WAL;")
      } catch (error) {
        console.error("ERROR OPENING DATABASE: ", error);
      }
    }
    return db;
}

export async function initTest(db:SQLite.SQLiteDatabase) {
  await db.runAsync(`
    INSERT INTO songs (title, description, length, img, filepath)
    VALUES 
      ('Lofi Dreams', 'Relaxing lofi beats to chill/study to', 180, 'lofi.png', '/music/lofi-dreams.mp3'),
      ('Sunset Vibes', 'Instrumental track with summer vibes', 200, 'sunset.png', '/music/sunset-vibes.mp3'),
      ('Morning Jazz', 'Smooth jazz tune for mornings', 240, 'jazz.png', '/music/morning-jazz.mp3');
  `);

  // Insert sample playlists
  await db.runAsync(`
    INSERT INTO playlists (title, description)
    VALUES
      ('Chill Vibes', 'A playlist to relax and unwind'),
      ('Morning Motivation', 'Get energized to start your day'),
      ('Evening Jazz', 'Smooth tracks for the evening');
  `);

  // Insert song-playlist relationships
  await db.runAsync(`
    INSERT INTO playlist_songs (playlist_id, song_id)
    VALUES 
      (1, 1),  -- Lofi Dreams in Chill Vibes
      (1, 2),  -- Sunset Vibes in Chill Vibes
      (2, 2),  -- Sunset Vibes in Morning Motivation
      (2, 3),  -- Morning Jazz in Morning Motivation
      (3, 3);  -- Morning Jazz in Evening Jazz
  `);

  console.log("TEST INIT")
}

export async function initDatabase(db:SQLite.SQLiteDatabase) {
  await db?.execAsync(`
  CREATE TABLE IF NOT EXISTS songs (song_id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, description TEXT, length INTEGER, img TEXT, filepath TEXT NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP);
  CREATE TABLE IF NOT EXISTS playlists (playlist_id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, description TEXT);
  CREATE TABLE IF NOT EXISTS playlist_songs (playlist_id INTEGER, song_id INTEGER, PRIMARY KEY(playlist_id, song_id), FOREIGN KEY (playlist_id) REFERENCES playlists(id) ON DELETE CASCADE, FOREIGN KEY (song_id) REFERENCES songs(id) ON DELETE CASCADE);
  `);
  console.log("DATABASE INITIALISED")
  /*
  const rows = await db.getAllAsync("SELECT * FROM playlists");
  for (const row of rows)
    console.log(row)
  const allRows = await db.getAllAsync(`
          SELECT songs.*
          FROM songs
          JOIN playlist_songs ON songs.song_id = playlist_songs.song_id
          WHERE playlist_songs.playlist_id = 1;
          `);
      const songs = []
      for (const row of allRows)
      {
        console.log(row)
      }*/
}

export async function deleteDatabase() {
  await db?.execAsync(`
    DROP TABLE IF EXISTS playlist_songs;
    DROP TABLE IF EXISTS playlists;
    DROP TABLE IF EXISTS songs;
`)
console.log("DATABASE DELETED")
}     