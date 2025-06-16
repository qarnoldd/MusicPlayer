CREATE TABLE songs (song_id INTEGER PRIMARY KEY, title TEXT NOT NULL, description TEXT, length INTEGER, img TEXT, filepath TEXT NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE playlists (playlist_id INTEGER PRIMARY KEY, title TEXT NOT NULL, description TEXT);
CREATE TABLE playlist_songs (playlist_id INTEGER, song_id INTEGER, PRIMARY KEY(playlist_id, song_id), FOREIGN KEY (playlist_id) REFERENCES playlists(id) ON DELETE CASCADE, FOREIGN KEY (song_id) REFERENCES songs(id) ON DELETE CASCADE);
