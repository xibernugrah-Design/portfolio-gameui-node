const express = require('express');
const path = require('path');
const app = express();

// Konfigurasi Port Server
const PORT = process.env.PORT || 3000;

// Middleware untuk membaca file statis (HTML, CSS, Aset Gambar) dari folder root
app.use(express.static(path.join(__dirname)));

// Route utama untuk menyajikan UI Portofolio Game
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Menyalakan server Node.js
app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(` MATRIX CORE UPLINK SUCCESSFUL`);
    console.log(` Server portofolio berjalan di: http://localhost:${PORT}`);
    console.log(`==================================================`);
});