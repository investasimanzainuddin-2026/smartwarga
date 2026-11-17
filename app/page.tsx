"use client";

import React, { useState } from "react";

interface Transaksi {
  id: number;
  tanggal: string;
  keterangan: string;
  jenis: "masuk" | "keluar";
  nominal: number;
}

interface Warga {
  id: number;
  blok: string;
  nama: string;
  noWa: string; // Format internasional tanpa +, misal 62812...
  nominalIuran: number;
  status: "Lunas" | "Belum Bayar";
}

export default function SmartWargaMVP() {
  // Data Awal Transaksi Kas
  const [transaksi, setTransaksi] = useState<Transaksi[]>([
    { id: 1, tanggal: "01 Nov 2026", keterangan: "Saldo Awal Kas RT 05", jenis: "masuk", nominal: 4500000 },
    { id: 2, tanggal: "05 Nov 2026", keterangan: "Iuran Bulanan Warga (15 KK)", jenis: "masuk", nominal: 2250000 },
    { id: 3, tanggal: "10 Nov 2026", keterangan: "Honor & Kopi Petugas Keamanan", jenis: "keluar", nominal: 850000 },
    { id: 4, tanggal: "14 Nov 2026", keterangan: "Perbaikan Lampu Jalan Blok B", jenis: "keluar", nominal: 350000 },
  ]);

  // Data Awal Status Iuran Warga (Dilengkapi Nomor WA & Nominal)
  const [daftarWarga, setDaftarWarga] = useState<Warga[]>([
    { id: 1, blok: "A-01", nama: "Bpk. Hendra Wijaya", noWa: "6281234567890", nominalIuran: 150000, status: "Lunas" },
    { id: 2, blok: "A-02", nama: "Bpk. Budi Santoso", noWa: "6281234567891", nominalIuran: 150000, status: "Lunas" },
    { id: 3, blok: "A-03", nama: "Ibu Ratna Sari", noWa: "6281234567892", nominalIuran: 150000, status: "Belum Bayar" },
    { id: 4, blok: "B-01", nama: "Bpk. Dimas Pratama", noWa: "6281234567893", nominalIuran: 150000, status: "Lunas" },
    { id: 5, blok: "B-02", nama: "Bpk. Agus Salim", noWa: "6281234567894", nominalIuran: 150000, status: "Belum Bayar" },
  ]);

  // State untuk Form Input Pengurus
  const [keterangan, setKeterangan] = useState("");
  const [nominal, setNominal] = useState("");
  const [jenis, setJenis] = useState<"masuk" | "keluar">("masuk");

  // Hitung Total Otomatis
  const totalMasuk = transaksi.filter((t) => t.jenis === "masuk").reduce((acc, curr) => acc + curr.nominal, 0);
  const totalKeluar = transaksi.filter((t) => t.jenis === "keluar").reduce((acc, curr) => acc + curr.nominal, 0);
  const saldoAkhir = totalMasuk - totalKeluar;

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(angka);
  };

  // Fungsi Tambah Transaksi Baru
  const handleTambahTransaksi = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keterangan || !nominal) return;

    const baru: Transaksi = {
      id: Date.now(),
      tanggal: "17 Nov 2026",
      keterangan,
      jenis,
      nominal: Number(nominal),
    };

    setTransaksi([baru, ...transaksi]);
    setKeterangan("");
    setNominal("");
  };

  // Fungsi Ubah Status Bayar Warga + Otomatis Catat ke Kas jika Lunas
  const toggleStatusWarga = (warga: Warga) => {
    const statusBaru = warga.status === "Lunas" ? "Belum Bayar" : "Lunas";

    setDaftarWarga(
      daftarWarga.map((w) => (w.id === warga.id ? { ...w, status: statusBaru } : w))
    );

    // Jika diubah menjadi Lunas, otomatis tambahkan ke mutasi kas masuk
    if (statusBaru === "Lunas") {
      const transaksiOtomatis: Transaksi = {
        id: Date.now(),
        tanggal: "17 Nov 2026",
        keterangan: `Iuran Nov 2026 - ${warga.nama} (${warga.blok})`,
        jenis: "masuk",
        nominal: warga.nominalIuran,
      };
      setTransaksi([transaksiOtomatis, ...transaksi]);
    }
  };

  // Fungsi Generate Link WhatsApp Tagihan Otomatis
  const kirimTagihanWA = (warga: Warga) => {
    const pesan = `Halo *${warga.nama}* (Blok *${warga.blok}*),%0A%0AIni adalah pengingat otomatis dari *SmartWarga - Klaster Harmoni RT 05*.%0A%0AIuran lingkungan bulan *November 2026* sebesar *${formatRupiah(warga.nominalIuran)}* tercatat masih *Belum Terbayar*.%0A%0AMohon dapat melakukan pembayaran melalui rekening kas RT atau konfirmasi jika sudah transfer.%0A%0ATerima kasih atas partisipasinya menjaga kenyamanan lingkungan kita! 🙏`;

    const urlWA = `https://wa.me/${warga.noWa}?text=${pesan}`;
    window.open(urlWA, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Header Aplikasi */}
      <header className="bg-emerald-700 text-white shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">SmartWarga</h1>
            <p className="text-emerald-100 text-sm">Portal Transparansi Kas & Iuran • Klaster Harmoni RT 05</p>
          </div>
          <span className="bg-emerald-800 text-emerald-100 text-xs px-3 py-1.5 rounded-full font-medium">
            MVP v0.2 • WA Reminder Ready
          </span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Ringkasan Keuangan (3 Kartu Utama) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500 font-medium">Saldo Kas Saat Ini</p>
            <p className="text-2xl font-bold text-emerald-700 mt-1">{formatRupiah(saldoAkhir)}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500 font-medium">Total Pemasukan</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{formatRupiah(totalMasuk)}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500 font-medium">Total Pengeluaran</p>
            <p className="text-2xl font-bold text-rose-600 mt-1">{formatRupiah(totalKeluar)}</p>
          </div>
        </section>

        {/* Form Input Khusus Bendahara / Pengurus */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-lg font-bold text-slate-800 mb-1">Catat Transaksi Kas Manual (Mode Pengurus)</h2>
          <p className="text-xs text-slate-500 mb-4">Untuk mencatat pemasukan lain-lain atau pengeluaran operasional RT.</p>
          <form onSubmit={handleTambahTransaksi} className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <input
              type="text"
              placeholder="Keterangan (misal: Beli Token Listrik Pos)"
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
              className="md:col-span-2 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
            <input
              type="number"
              placeholder="Nominal (Rp)"
              value={nominal}
              onChange={(e) => setNominal(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
            <div className="flex gap-2">
              <select
                value={jenis}
                onChange={(e) => setJenis(e.target.value as "masuk" | "keluar")}
                className="border border-slate-300 rounded-lg px-2 py-2 text-sm bg-white"
              >
                <option value="masuk">Masuk (+)</option>
                <option value="keluar">Keluar (-)</option>
              </select>
              <button
                type="submit"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm px-4 py-2 rounded-lg transition"
              >
                Simpan
              </button>
            </div>
          </form>
        </section>

        {/* Dua Kolom Bawah: Riwayat Mutasi Kas & Status Iuran Warga */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kolom Kiri: Buku Kas Transparan */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Mutasi Kas Terkini</h2>
            <div className="divide-y divide-slate-100">
              {transaksi.map((item) => (
                <div key={item.id} className="py-3 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-slate-800">{item.keterangan}</p>
                    <p className="text-xs text-slate-400">{item.tanggal}</p>
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      item.jenis === "masuk" ? "text-emerald-600" : "text-rose-600"
                    }`}
                  >
                    {item.jenis === "masuk" ? "+" : "-"} {formatRupiah(item.nominal)}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Kolom Kanan: Status Pembayaran Warga + Tombol Tagih WA */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-800">Status Iuran November 2026</h2>
              <span className="text-xs text-slate-400">Klik status untuk lunas</span>
            </div>
            <div className="divide-y divide-slate-100">
              {daftarWarga.map((warga) => (
                <div key={warga.id} className="py-3 flex justify-between items-center gap-2">
                  <div>
                    <div className="flex items-center">
                      <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded mr-2">
                        {warga.blok}
                      </span>
                      <span className="text-sm font-medium text-slate-800">{warga.nama}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">{formatRupiah(warga.nominalIuran)} / bulan</p>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Tombol Tagih WA hanya muncul jika Belum Bayar */}
                    {warga.status === "Belum Bayar" && (
                      <button
                        onClick={() => kirimTagihanWA(warga)}
                        title="Kirim Pengingat via WhatsApp"
                        className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-600 hover:bg-green-700 text-white transition flex items-center gap-1"
                      >
                        <span>Tagih WA</span>
                      </button>
                    )}

                    <button
                      onClick={() => toggleStatusWarga(warga)}
                      className={`text-xs font-semibold px-3 py-1 rounded-full transition ${
                        warga.status === "Lunas"
                          ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                          : "bg-amber-100 text-amber-700 hover:bg-amber-200"
                      }`}
                    >
                      {warga.status}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}