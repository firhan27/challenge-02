const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  // Validasi parameter
  if (!Array.isArray(dataPenjualan)) {
    throw new Error("Data penjualan harus berupa array");
  }

  // Inisialisasi variabel
  let totalModal = 0;
  let totalKeuntungan = 0;
  let produkBukuTerlaris = {};
  let penulisTerlaris = {};
  let maxTerjual = 0;

  // Loop untuk menghitung total modal, total keuntungan, dan mencari produk buku terlaris serta penulis terlaris
  dataPenjualan.forEach((produk) => {
    // Validasi setiap produk harus memiliki harga beli dan harga jual
    if (!produk.hargaBeli || !produk.hargaJual) {
      throw new Error(`Produk ${produk.idProduct} harus memiliki harga beli dan harga jual`);
    }

    // Menghitung total modal dan total keuntungan
    totalModal += produk.hargaBeli * produk.totalTerjual;
    totalKeuntungan += (produk.hargaJual - produk.hargaBeli) * produk.totalTerjual;

    // Mencari produk buku terlaris
    if (produk.totalTerjual > maxTerjual) {
      produkBukuTerlaris = produk;
      maxTerjual = produk.totalTerjual;
    }

    // Mencari penulis terlaris
    if (!penulisTerlaris[produk.penulis]) {
      penulisTerlaris[produk.penulis] = produk.totalTerjual;
    } else {
      penulisTerlaris[produk.penulis] += produk.totalTerjual;
    }
  });

  // Menghitung persentase keuntungan
  const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

  // Mengubah format mata uang rupiah
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  // Mengembalikan object dengan properti yang diinginkan
  return {
    totalKeuntungan: formatter.format(totalKeuntungan),
    totalModal: formatter.format(totalModal),
    persentaseKeuntungan: persentaseKeuntungan.toFixed() + "%",
    produkBukuTerlaris: produkBukuTerlaris.namaProduk,
    penulisTerlaris: Object.entries(penulisTerlaris)
      .sort((a, b) => b[1] - a[1])
      .map((penulis) => penulis[0])[0],
  };
}

console.log(getInfoPenjualan(dataPenjualanNovel));
