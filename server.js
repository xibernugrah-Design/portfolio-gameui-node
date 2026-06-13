const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Mengatur folder publik agar file CSS dan gambar bisa diakses browser
app.use(express.static(path.join(__dirname)));

// Route Utama: Ketika http://localhost:3000 dibuka, kirim file index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Jalankan server lokal
app.listen(PORT, () => {
    console.log(`===================================================`);
    console.log(`🎮 Server Game UI Portofolio NugZiffer Aktif!`);
    console.log(`🚀 Akses localhost kamu di: http://localhost:${PORT}`);
    console.log(`===================================================`);
});