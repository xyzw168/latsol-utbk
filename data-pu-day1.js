// data-pu-day1.js
var currentDataSoal = [
    {
        pertanyaan: "1. Apabila tidak pernah menang dalam kompetisi tingkat daerah, atlet tidak boleh ikut audisi untuk pertandingan nasional. Hal ini berlaku bagi atlet badminton.\n\nManakah simpulan berikut yang BENAR?",
        pilihan: [
            "A. Atlet badminton diharapkan menang dalam kompetisi daerah agar dapat mengikuti kegiatan audisi nasional.",
            "B. Semua atlet boleh ikut audisi untuk pertandingan nasional jika pernah menang dalam kompetisi daerah.",
            "C. Para atlet boleh ikut audisi untuk pertandingan nasional meski tidak pernah menang di kompetisi daerah.",
            "D. Semua atlet pernah menang dalam kegiatan kompetisi di tingkat daerah, kecuali para pemain badminton.",
            "E. Atlet badminton tidak boleh mengikuti audisi pertandingan nasional jika tidak pernah menang di kompetisi daerah."
        ],
        kunci: 4,
        bahas: "Simpulan yang BENAR adalah E.\n\nAnalisis Logika:\n- Premis: Jika tidak menang daerah (P) -> tidak boleh ikut nasional (Q).\n- Konteks: Berlaku bagi atlet badminton.\n- Kesimpulan: Opsi E adalah konsekuensi langsung (P -> Q). Jika syarat tidak menang dipenuhi, maka larangan ikut audisi berlaku.\n\nMengapa opsi lain salah?\n- A, C: Bertentangan dengan premis.\n- B: Kebalikan (konvers) yang tidak pasti benar (pernah menang tidak otomatis menjamin boleh ikut).\n- D: Tidak relevan."
    },
    {
        pertanyaan: "2. Siswa Sekolah JKH yang menjadi juara nasional paduan suara mampu membuat lagu. Sebagian dari mereka juga mampu bermain teater musikal lebih baik dari siswa sekolah lain.\n\nBerdasarkan informasi di atas, manakah simpulan yang PALING TEPAT?",
        pilihan: [
            "A. Semua siswa Sekolah JKH yang menjadi juara nasional lomba paduan suara mampu bermain teater musikal.",
            "B. Sebagian siswa yang kurang mahir dalam bermain teater bukan merupakan siswa dari Sekolah JKH.",
            "C. Siswa Sekolah JKH yang memenangkan juara nasional lomba paduan suara mampu membuat lagu dan bermain teater.",
            "D. Beberapa siswa Sekolah JKH mampu membuat lagu, namun tidak bisa membuat teater musikal.",
            "E. Beberapa siswa Sekolah JKH yang dapat membuat lagu juga dapat bermain teater musikal lebih baik dari sekolah lain."
        ],
        kunci: 4,
        bahas: "Karena semua juara mampu membuat lagu, dan sebagian dari mereka (juara) mampu bermain teater lebih baik, maka simpulan yang paling tepat adalah E (beberapa yang buat lagu juga bisa teater)."
    },
    {
        pertanyaan: "3. Pada akhir pekan, SR akan menemani ibu arisan atau mengantar kakak bertemu temannya. Adiknya mengajaknya mengunjungi pameran buku. Karena lokasi pameran terlalu jauh, keduanya tidak jadi pergi ke pameran buku. Apa yang PALING MUNGKIN dilakukan SR pada akhir pekan?",
        pilihan: [
            "A. Menemani ibu arisan dan mengantar kakak bertemu temannya.",
            "B. Menikmati akhir minggu dengan bersantai bersama keluarga di rumah.",
            "C. Menemani ibu arisan atau mengantar kakak bertemu temannya.",
            "D. Menemani ibu arisan, tetapi tidak mengantar kakak bertemu temannya.",
            "E. Mengantar kakak bertemu temannya, tetapi tidak menemani ibu arisan."
        ],
        kunci: 2,
        bahas: "Karena rencana pameran buku batal, maka SR kembali ke pilihan awal yaitu menemani ibu arisan ATAU mengantar kakak."
    },
    {
        pertanyaan: "4. Ketika festival seni tradisional diadakan di Pulau ABC, jumlah wisatawan meningkat. Hal serupa terjadi ketika pameran lukisan diadakan. Namun, ketika perayaan adat daerah diadakan, jumlah wisatawan tidak mengalami peningkatan.\n\nManakah yang PALING MUNGKIN BENAR?",
        pilihan: [
            "A. Meskipun pameran lukisan diadakan di pulau lain, jumlah wisatawan tetap meningkat.",
            "B. Jumlah wisatawan akan mengalami penurunan ketika tidak diadakan pameran lukisan.",
            "C. Mengadakan festival atau pameran di pulau lain akan menurunkan wisatawan Pulau ABC.",
            "D. Mengadakan perayaan adat meningkatkan jumlah wisatawan dibanding tidak mengadakannya.",
            "E. Mengadakan festival seni tradisional atau pameran lukisan di Pulau ABC meningkatkan jumlah kunjungan wisatawan."
        ],
        kunci: 4,
        bahas: "Pernyataan E merangkum dua fakta awal: festival seni dan pameran lukisan sama-sama menyebabkan kenaikan wisatawan."
    },
    {
        pertanyaan: "5. Banyaknya rumah kosong -> tanaman liar -> banyak nyamuk. Meskipun ada sosialisasi pola hidup sehat, malaria tidak menurun karena banyaknya nyamuk.\n\nManakah pernyataan yang BENAR?",
        pilihan: [
            "A. Meningkatnya kasus malaria disebabkan oleh banyaknya rumah kosong terbengkalai.",
            "B. Lebatnya tanaman liar disebabkan kurang tepatnya sosialisasi pengurus.",
            "C. Banyaknya nyamuk menyebabkan pengurus melakukan sosialisasi.",
            "D. Adanya sosialisasi menjadikan banyak rumah kosong terbengkalai.",
            "E. Banyaknya nyamuk di kampung tersebut disebabkan oleh banyaknya rumah terbengkalai."
        ],
        kunci: 4,
        bahas: "Hubungan sebab akibat yang jelas di teks adalah: Rumah terbengkalai -> tanaman liar -> banyak nyamuk. Maka E benar."
    },
    {
        pertanyaan: "6. Penggunaan listrik berlebihan dapat membebani anggaran dan meningkatkan polusi udara.\n\nManakah pernyataan yang PASTI SALAH?",
        pilihan: [
            "A. Polusi udara meningkat karena penggunaan listrik yang berlebihan.",
            "B. Anggaran rumah tangga meningkat karena penggunaan listrik.",
            "C. Listrik dapat menyebabkan orang dapat mengatur suhu ruangan.",
            "D. Pengguna peralatan elektronik mungkin tidak menggunakan listrik.",
            "E. Penggunaan listrik berlebihan tidak menyebabkan polusi udara dan air."
        ],
        kunci: 4,
        bahas: "Teks menyebutkan listrik berlebihan meningkatkan polusi udara. Maka pernyataan E yang bilang 'tidak menyebabkan polusi' adalah PASTI SALAH."
    },
    {
        pertanyaan: "8. Saat ini hanya ada beberapa penjual asongan karena stasiun sepi. Biasanya, jika jam kantor selesai, stasiun ramai.\n\nSimpulan yang BENAR?",
        pilihan: [
            "A. Saat ini waktunya jam kantor selesai.",
            "B. Saat ini stasiun kota ramai oleh penumpang.",
            "C. Saat ini bukan waktunya jam kantor selesai.",
            "D. Saat ini stasiun kota ramai dengan pedagang asongan.",
            "E. Saat ini banyak penumpang kereta di stasiun kota."
        ],
        kunci: 2,
        bahas: "Jika jam kantor selesai -> Ramai. Fakta: Sepi. Kesimpulan: Tidak (jam kantor selesai). Maka C benar."
    },
    {
        pertanyaan: "9. Siswa X menjuarai olimpiade matematika berkat dukungan keluarga dan dorongan dalam dirinya. Dukungan keluarga menyebabkan siswa lebih percaya diri yang ditunjukkan oleh sikapnya yang tenang dan optimis saat mengikuti kejuaraan.\n\nJika siswa X merasa optimis saat mengikuti kejuaraan, manakah kesimpulan yang PALING MUNGKIN BENAR?",
        pilihan: [
            "A. Keluarganya memberikan dukungan penuh kepada siswa tersebut.",
            "B. Siswa tersebut secara konsisten mengurangi waktu bermainnya.",
            "C. Siswa X memiliki dorongan yang sangat kuat untuk menjadi juara.",
            "D. Siswa tersebut mengikuti bimbingan belajar dengan konsentrasi yang tinggi.",
            "E. Siswa tersebut sering menjuarai perlombaan olimpiade matematika."
        ],
        kunci: 0,
        bahas: "Teks menyebutkan: Dukungan keluarga -> Percaya diri -> Tenang & Optimis. Jika diketahui Siswa X 'Optimis', maka kemungkinan besar penyebabnya adalah adanya dukungan keluarga (A)."
    },
    {
        pertanyaan: "10. Taman bermain yang selalu ramai dihibahkan kepada warga. Setelah dikelola satu tahun, jumlah pengunjung menurun dan banyak penjual makanan ringan yang tutup.\n\nManakah pernyataan yang PALING MUNGKIN menjelaskan perbedaan kedua kondisi tersebut?",
        pilihan: [
            "A. Warga setempat tidak melakukan penggantian fasilitas bermain yang sudah rusak.",
            "B. Setelah dikelola warga, tidak dilakukan perbaikan layanan pada taman bermain.",
            "C. Taman bermain sering digunakan untuk kegiatan lain yang dapat merusak fasilitas.",
            "D. Pada awal warga mengelola taman tersebut, taman bermain dirawat secara berkala.",
            "E. Taman tersebut tidak pernah mendapatkan pengarahan dari dinas pariwisata setempat."
        ],
        kunci: 1,
        bahas: "Pilihan B memberikan alasan umum yang paling masuk akal: kegagalan mempertahankan atau memperbaiki layanan menyebabkan pengunjung berkurang. Pilihan D justru menjelaskan kondisi awal yang baik, bukan penyebab penurunan."
    },
    {
        pertanyaan: "11. Remaja perkotaan mulai menyukai pakaian unik (kontras & berkilau). Pengamat melihat hal tersebut memengaruhi perkembangan bisnis dunia fesyen.\n\nManakah yang PALING MUNGKIN mendasari argumen pengamat?",
        pilihan: [
            "A. Remaja kota menyalurkan ekspresinya melalui pakaian yang dikenakan.",
            "B. Pakaian dapat menjadi media peningkatan pengakuan terhadap remaja.",
            "C. Kegiatan remaja ibu kota tidak hanya dilakukan di pusat perbelanjaan.",
            "D. Para pengusaha di bidang fesyen mengamati kreasi pakaian remaja kota.",
            "E. Banyak toko yang menjual pakaian-pakaian unik khusus untuk remaja."
        ],
        kunci: 3,
        bahas: "Argumen pengamat tentang 'perkembangan bisnis' didasari oleh adanya interaksi produsen/pengusaha terhadap tren tersebut. Pengusaha yang mengamati tren (D) adalah langkah awal tren tersebut menjadi peluang bisnis."
    },
    {
        pertanyaan: "12. Ahli 1: Sekolah O lebih baik kualitas alamnya dari Sekolah P. \nAhli 2: Sekolah P lebih banyak belajar teori di kelas. \nFakta: Sekolah P mendapat penghargaan Adiwiyata (integrasi lingkungan).\n\nManakah pernyataan yang PALING TEPAT berdasarkan fakta tersebut?",
        pilihan: [
            "A. Memperkuat pernyataan Ahli Pendidikan 1.",
            "B. Memperlemah pernyataan Ahli Pendidikan 1.",
            "C. Memperkuat pernyataan Ahli Pendidikan 2.",
            "D. Memperlemah pernyataan Ahli Pendidikan 2.",
            "E. Tidak relevan dengan pernyataan Ahli Pendidikan 1 dan Ahli Pendidikan 2."
        ],
        kunci: 1,
        bahas: "Fakta bahwa Sekolah P mendapat penghargaan Adiwiyata (sekolah berwawasan lingkungan) membuktikan kualitas lingkungan Sekolah P sangat baik. Hal ini memperlemah pernyataan Ahli 1 (B) yang menyebut Sekolah O lebih baik kualitas alamnya."
    },
    {
        pertanyaan: "13. Melukis melatih motorik dan kreativitas. Namun, terlalu lama melukis dapat memunculkan rasa bosan yang dapat menurunkan minat belajar.\n\nBerdasarkan informasi tersebut, manakah pernyataan berikut yang PASTI BENAR?",
        pilihan: [
            "A. Beberapa orang yang memiliki minat belajar tinggi akan menyukai kegiatan melukis.",
            "B. Kegiatan melukis cenderung menurunkan minat belajar seseorang.",
            "C. Beberapa masalah terkait kejenuhan disebabkan melukis yang terlalu lama.",
            "D. Kurangnya daya kreativitas dapat diatasi dengan melakukan kegiatan melukis.",
            "E. Orang yang mengalami rasa bosan biasanya menghabiskan waktunya dengan melukis."
        ],
        kunci: 2,
        bahas: "Teks menyatakan 'terlalu lama melukis -> rasa bosan (kejenuhan)'. Maka, secara logika, beberapa masalah kejenuhan memang disebabkan oleh durasi melukis yang terlalu lama (C)."
    },
    {
        pertanyaan: "14. Kota ZZ memberikan insentif kepada RT yang aktif dalam pelestarian lingkungan. Setiap tahun setidaknya ada lima RT yang mendapatkan penghargaan.\n\nManakah pernyataan yang PALING MUNGKIN BENAR mengenai Kota ZZ?",
        pilihan: [
            "A. Jumlah RT yang mendapatkan penghargaan akan meningkat setiap tahun.",
            "B. Kota ZZ hanya memberikan insentif kepada warga menanam pohon di ruang umum.",
            "C. Setiap tahun ada RT yang akan mendapatkan insentif dari Pemerintah Kota ZZ.",
            "D. Pemerintah Kota ZZ tidak memberikan insentif sebelum ada program ramah lingkungan.",
            "E. Sebelum ada penghargaan, tidak ada RT ikut dalam program ramah lingkungan."
        ],
        kunci: 2,
        bahas: "Data mencatat setidaknya setiap tahun ada lima RT yang menang. Jadi, pernyataan yang paling mungkin benar adalah setiap tahun pasti ada RT yang mendapatkan insentif (C)."
    },
    {
        pertanyaan: "15. Remaja membeli Sepatu X (mahal tapi nyaman) daripada Sepatu Y (murah tapi kurang cocok) untuk menghindari lecet kaki.\n\nManakah yang PALING MEMPERKUAT keputusan remaja tersebut?",
        pilihan: [
            "A. Remaja tersebut sering berolahraga dengan menggunakan sepatu tersebut.",
            "B. Remaja tersebut memiliki tabungan yang cukup untuk membeli sepatu.",
            "C. Kenyamanan sepatu bukan pertimbangan penting untuk berlari jarak jauh.",
            "D. Sepatu X banyak digunakan oleh para pelari jarak jauh profesional.",
            "E. Sepatu Y memiliki model yang menarik sehingga banyak dipakai remaja."
        ],
        kunci: 1,
        bahas: "Hambatan utama membeli Sepatu X adalah harganya yang mahal. Keputusan membeli sepatu mahal tersebut paling diperkuat jika fakta menunjukkan dia memiliki uang/tabungan yang cukup (B) untuk melakukannya."
    },
    {
        pertanyaan: "21. Jumlah penonton hari ke-3 sampai ke-7: 66, 73, 70, 77, 74. Jika pola konstan, berapa penonton hari ke-1?",
        pilihan: ["A. 62", "B. 63", "C. 70", "D. 72", "E. 76"],
        kunci: 0,
        bahas: "Pola: +7, -3, +7, -3. Mundur dari hari ke-3 (66): 66 - (-3) = 69 (hari 2). 69 - 7 = 62 (hari 1)."
    },
    {
        pertanyaan: "22. Rasio Oksigen : Air : Makanan = 5 : 4 : 3. Jika Oksigen = 50 liter, berapa Makanan?",
        pilihan: ["A. 20 liter", "B. 25 liter", "C. 30 liter", "D. 35 liter", "E. 40 liter"],
        kunci: 2,
        bahas: "Oksigen 5 bagian = 50, maka 1 bagian = 10. Makanan 3 bagian = 3 * 10 = 30 liter."
    },
    {
        pertanyaan: "28. Tahun ini 240 kg. Tahun lalu 20% lebih sedikit. Berapa tahun lalu?",
        pilihan: ["A. 180 kg", "B. 185 kg", "C. 190 kg", "D. 192 kg", "E. 200 kg"],
        kunci: 3,
        bahas: "Tahun lalu = Tahun ini - (20% * Tahun ini) = 240 - 48 = 192 kg."
    }
    // ... Kamu bisa melanjutkan input soal 7, 9-20, dan 23-30 dengan pola yang sama
];
