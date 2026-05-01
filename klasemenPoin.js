// Data poin klasemen untuk 9 tim
const klasemenPoin = [
  { name: 'Geo Kusala', poin: 64 },
  { name: 'Aero Netra', poin: 55 },
  { name: 'Jalacise', poin: 66 },
  { name: 'Vajra Vium', poin: 92 },
  { name: 'Dhatu Stream', poin: 47 },
  { name: 'Infra Luhita', poin: 68 },
  { name: 'Loka Map', poin: 82 },
  { name: 'Nira Nautika', poin: 58 },
  { name: 'Giridera', poin: 52
    
   }
];

// Data detail penugasan untuk 9 tim - hanya definisikan jika belum ada
if(typeof klasemenDetail === 'undefined'){
    var klasemenDetail = [
      { name: 'Geo Kusala', tugas: [64, 89.1, 83.95, 1, "Coming Soon"] },
      { name: 'Aero Netra', tugas: [55, 86.8, 79.71, 1, "Coming Soon"] },
      { name: 'Jalacise', tugas: [66, 90.9, 88.17, 1, "Coming Soon"] },
      { name: 'Vajra Vium', tugas: [92, 87.9, 82.04, 1, "Coming Soon"] },
      { name: 'Dhatu Stream', tugas: [47, 86.3, 78.56, 1, "Coming Soon"] },
      { name: 'Infra Luhita', tugas: [68, 81.4, 76.12, 2, "Coming Soon"] },
      { name: 'Loka Map', tugas: [82, 85.6, 79.76, 1, "Coming Soon"] },
      { name: 'Nira Nautika', tugas: [58, 91.15, 86.76, 1, "Coming Soon"] },
      { name: 'Giridera', tugas: [52, 89.35, 80.71, 1, "Coming Soon"] }
    ];
}

// Formula total = Instagram + Poster + Video + Orientering
// Note: Hanya menjumlahkan 4 elemen pertama, mengabaikan "Coming Soon"
