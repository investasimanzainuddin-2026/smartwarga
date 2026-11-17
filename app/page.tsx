"use client";

import React, { useState } from "react";

// --- TIPE DATA OPERASIONAL 1 RT ---
interface KartuKeluarga {
  id: number;
  noKK: string;
  blok: string;
  kepalaKeluarga: string;
  jumlahAnggota: number;
  statusHunian: "Pemilik" | "Kontrak/Sewa";
  noWa: string;
  statusIuranRutin: "Lunas" | "Belum Bayar";
}

interface TransaksiKas {
  id: number;
  tanggal: string;
  posKas: "Kas Rutin Bulanan" | "Kas Hari Besar" | "Kas Proyek & Dadakan";
  keterangan: string;
  jenis: "masuk" | "keluar";
  nominal: number;
}

interface PatunganFleksibel {
  id: number;
  judul: string;
  kategori: "Hari Besar" | "Infrastruktur / Dadakan";
  targetDana: number;
  terkumpul: number;
  status: "Aktif" | "Selesai";
}

interface InfoAgenda {
  id: number;
  tanggalKegiatan: string;
  kategori: "Gotong Royong" | "Rapat Warga" | "Hari Besar" | "Info Penting";
  judul: string;
  deskripsi: string;
  jumlahHadir: number;
}

type TabRT = "beranda" | "warga_kk" | "keuangan_pos" | "info_agenda";

export default function SmartWargaRT() {
  const [tabAktif, setTabAktif] = useState<TabRT>("beranda");

  // Identitas RT
  const infoRT = {
    namaRT: "RT 05 / RW 02 • Perumahan Griya Harmoni",
    iuranBulanan: 150000,
    rekeningRT: "BCA 1234567890 a.n. Kas RT 05",
  };

  // 1. Master Data Warga Berbasis KK
  const [daftarKK, setDaftarKK] = useState<KartuKeluarga[]>([
    { id: 1, noKK: "2171041205880001", blok: "A-01", kepalaKeluarga: "Bpk. Hendra Wijaya", jumlahAnggota: 4, statusHunian: "Pemilik", noWa: "6281234567890", statusIuranRutin: "Lunas" },
    { id: 2, noKK: "2171042308900004", blok: "A-02", kepalaKeluarga: "Bpk. Budi Santoso", jumlahAnggota: 3, statusHunian: "Pemilik", noWa: "6281234567891", statusIuranRutin: "Lunas" },
    { id: 3, noKK: "2171041511920002", blok: "A-03", kepalaKeluarga: "Ibu Ratna Sari", jumlahAnggota: 2, statusHunian: "Kontrak/Sewa", noWa: "6281234567892", statusIuranRutin: "Belum Bayar" },
    { id: 4, noKK: "2171040903850007", blok: "B-01", kepalaKeluarga: "Bpk. Dimas Pratama", jumlahAnggota: 5, statusHunian: "Pemilik", noWa: "6281234567893", statusIuranRutin: "Lunas" },
    { id: 5, noKK: "2171043001910009", blok: "B-02", kepalaKeluarga: "Bpk. Agus Salim", jumlahAnggota: 4, statusHunian: "Pemilik", noWa: "6281234567894", statusIuranRutin: "Belum Bayar" },
  ]);

  // 2. Data Transaksi Multi-Pos Kas
  const [transaksi, setTransaksi] = useState<TransaksiKas[]>([
    { id: 1, tanggal: "01 Nov 2026", posKas: "Kas Rutin Bulanan", keterangan: "Saldo Awal Kas Rutin RT 05", jenis: "masuk", nominal: 4200000 },
    { id: 2, tanggal: "05 Nov 2026", posKas: "Kas Rutin Bulanan", keterangan: "Iuran Bulanan (3 KK Lunas)", jenis: "masuk", nominal: 450000 },
    { id: 3, tanggal: "08 Nov 2026", posKas: "Kas Rutin Bulanan", keterangan: "Honor & Kopi Satpam", jenis: "keluar", nominal: 850000 },
    { id: 4, tanggal: "10 Nov 2026", posKas: "Kas Proyek & Dadakan", keterangan: "Patungan Warga - Plang Nama Jalan Blok A & B", jenis: "masuk", nominal: 950000 },
    { id: 5, tanggal: "12 Nov 2026", posKas: "Kas Hari Besar", keterangan: "Sisa Saldo Panitia 17 Agustusan", jenis: "masuk", nominal: 1350000 },
  ]);

  // 3. Kampanye Patungan Fleksibel (Hari Besar / Plang Jalan / Lampu Jalan)
  const [daftarPatungan, setDaftarPatungan] = useState<PatunganFleksibel[]>([
    { id: 1, judul: "Pembuatan Plang Nama Jalan Blok A & B", kategori: "Infrastruktur / Dadakan", targetDana: 1500000, terkumpul: 950000, status: "Aktif" },
    { id: 2, judul: "Perbaikan 3 Titik Lampu Jalan Mati", kategori: "Infrastruktur / Dadakan", targetDana: 750000, terkumpul: 750000, status: "Selesai" },
    { id: 3, judul: "Tabungan Kas Peringatan 17 Agustusan", kategori: "Hari Besar", targetDana: 5000000, terkumpul: 1350000, status: "Aktif" },
  ]);

  // 4. Papan Informasi & Gotong Royong
  const [daftarInfo, setDaftarInfo] = useState<InfoAgenda[]>([
    {
      id: 1,
      tanggalKegiatan: "Minggu, 22 Nov 2026 • Pukul 07.00 WIB",
      kategori: "Gotong Royong",
      judul: "Kerja Bakti Pembersihan Saluran Air & Pemasangan Plang Jalan",
      deskripsi: "Diharapkan kehadiran minimal 1 perwakilan per KK. Disediakan sarapan bubur ayam dan kopi di Pos Kamling.",
      jumlahHadir: 14,
    },
    {
      id: 2,
      tanggalKegiatan: "Sabtu, 28 Nov 2026 • Pukul 19.30 WIB",
      kategori: "Rapat Warga",
      judul: "Musyawarah Evaluasi Keamanan Portal & Rencana Tahun Baru",
      deskripsi: "Bertempat di Balai Warga RT 05. Membahas jadwal ronda akhir tahun dan iuran kebersihan.",
      jumlahHadir: 9,
    },
  ]);

  // --- STATE FORM INPUT ---
  const [formKK, setFormKK] = useState({ noKK: "", blok: "", kepalaKeluarga: "", jumlahAnggota: 3, statusHunian: "Pemilik" as "Pemilik" | "Kontrak/Sewa", noWa: "" });
  const [formKas, setFormKas] = useState({ posKas: "Kas Rutin Bulanan" as TransaksiKas["posKas"], keterangan: "", jenis: "masuk" as "masuk" | "keluar", nominal: "" });
  const [formPatungan, setFormPatungan] = useState({ judul: "", kategori: "Infrastruktur / Dadakan" as PatunganFleksibel["kategori"], targetDana: "" });
  const [formInfo, setFormInfo] = useState({ tanggalKegiatan: "", kategori: "Gotong Royong" as InfoAgenda["kategori"], judul: "", deskripsi: "" });

  // --- PERHITUNGAN SALDO PER POS ---
  const hitungSaldoPos = (namaPos: TransaksiKas["posKas"]) => {
    const masuk = transaksi.filter((t) => t.posKas === namaPos && t.jenis === "masuk").reduce((a, b) => a + b.nominal, 0);
    const keluar = transaksi.filter((t) => t.posKas === namaPos && t.jenis === "keluar").reduce((a, b) => a + b.nominal, 0);
    return masuk - keluar;
  };

  const saldoRutin = hitungSaldoPos("Kas Rutin Bulanan");
  const saldoHariBesar = hitungSaldoPos("Kas Hari Besar");
  const saldoProyek = hitungSaldoPos("Kas Proyek & Dadakan");
  const totalSeluruhKas = saldoRutin + saldoHariBesar + saldoProyek;

  const formatRupiah = (angka: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(angka);

  const maskNoKK = (noKK: string) => (noKK.length >= 8 ? `${noKK.slice(0, 6)}••••••${noKK.slice(-4)}` : noKK);

  // --- HANDLER AKSI ---
  const tambahKK = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formKK.noKK || !formKK.blok || !formKK.kepalaKeluarga) return;
    setDaftarKK([
      {
        id: Date.now(),
        noKK: formKK.noKK,
        blok: formKK.blok.toUpperCase(),
        kepalaKeluarga: formKK.kepalaKeluarga,
        jumlahAnggota: Number(formKK.jumlahAnggota),
        statusHunian: formKK.statusHunian,
        noWa: formKK.noWa.startsWith("0") ? "62" + formKK.noWa.slice(1) : formKK.noWa || "6281200000000",
        statusIuranRutin: "Belum Bayar",
      },
      ...daftarKK,
    ]);
    setFormKK({ noKK: "", blok: "", kepalaKeluarga: "", jumlahAnggota: 3, statusHunian: "Pemilik", noWa: "" });
  };

  const tambahTransaksi = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formKas.keterangan || !formKas.nominal) return;
    setTransaksi([
      { id: Date.now(), tanggal: "17 Nov 2026", posKas: formKas.posKas, keterangan: formKas.keterangan, jenis: formKas.jenis, nominal: Number(formKas.nominal) },
      ...transaksi,
    ]);
    setFormKas({ ...formKas, keterangan: "", nominal: "" });
  };

  const tambahKampanyePatungan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formPatungan.judul || !formPatungan.targetDana) return;
    setDaftarPatungan([
      { id: Date.now(), judul: formPatungan.judul, kategori: formPatungan.kategori, targetDana: Number(formPatungan.targetDana), terkumpul: 0, status: "Aktif" },
      ...daftarPatungan,
    ]);
    setFormPatungan({ judul: "", kategori: "Infrastruktur / Dadakan", targetDana: "" });
  };

  const tambahInfoAgenda = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formInfo.judul || !formInfo.tanggalKegiatan) return;
    setDaftarInfo([
      { id: Date.now(), tanggalKegiatan: formInfo.tanggalKegiatan, kategori: formInfo.kategori, judul: formInfo.judul, deskripsi: formInfo.deskripsi, jumlahHadir: 1 },
      ...daftarInfo,
    ]);
    setFormInfo({ tanggalKegiatan: "", kategori: "Gotong Royong", judul: "", deskripsi: "" });
  };

  const konfirmasiHadir = (id: number) => {
    setDaftarInfo(daftarInfo.map((info) => (info.id === id ? { ...info, jumlahHadir: info.jumlahHadir + 1 } : info)));
  };

  const toggleIuranRutin = (kk: KartuKeluarga) => {
    const statusBaru = kk.statusIuranRutin === "Lunas" ? "Belum Bayar" : "Lunas";
    setDaftarKK(daftarKK.map((item) => (item.id === kk.id ? { ...item, statusIuranRutin: statusBaru } : item)));
    if (statusBaru === "Lunas") {
      setTransaksi([
        { id: Date.now(), tanggal: "17 Nov 2026", posKas: "Kas Rutin Bulanan", keterangan: `Iuran Nov 2026 - ${kk.kepalaKeluarga} (${kk.blok})`, jenis: "masuk", nominal: infoRT.iuranBulanan },
        ...transaksi,
      ]);
    }
  };

  const tagihWA = (kk: KartuKeluarga) => {
    const teks = `Halo *${kk.kepalaKeluarga}* (Blok *${kk.blok}*),%0A%0APengingat iuran rutin *${infoRT.namaRT}* bulan *November 2026* sebesar *${formatRupiah(infoRT.iuranBulanan)}*.%0A%0ATransfer ke: ${infoRT.rekeningRT}.%0ATerima kasih! 🙏`;
    window.open(`https://wa.me/${kk.noWa}?text=${teks}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col md:flex-row font-sans">
      {/* SIDEBAR NAVIGASI 1 RT */}
      <aside className="w-full md:w-64 bg-emerald-950 text-emerald-50 flex flex-col justify-between shrink-0">
        <div>
          <div className="p-6 border-b border-emerald-900">
            <h1 className="text-xl font-extrabold tracking-tight text-white">SmartWarga</h1>
            <p className="text-xs text-emerald-300 mt-0.5">Sistem Pengelolaan 1 RT</p>
          </div>

          <nav className="p-4 space-y-1.5">
            <button
              onClick={() => setTabAktif("beranda")}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                tabAktif === "beranda" ? "bg-emerald-600 text-white" : "text-emerald-200 hover:bg-emerald-900"
              }`}
            >
              Beranda RT
            </button>
            <button
              onClick={() => setTabAktif("keuangan_pos")}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                tabAktif === "keuangan_pos" ? "bg-emerald-600 text-white" : "text-emerald-200 hover:bg-emerald-900"
              }`}
            >
              Kas & Iuran Fleksibel
            </button>
            <button
              onClick={() => setTabAktif("info_agenda")}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition flex justify-between items-center ${
                tabAktif === "info_agenda" ? "bg-emerald-600 text-white" : "text-emerald-200 hover:bg-emerald-900"
              }`}
            >
              <span>Info & Gotong Royong</span>
              <span className="text-xs bg-emerald-800 px-2 py-0.5 rounded-full">{daftarInfo.length}</span>
            </button>
            <button
              onClick={() => setTabAktif("warga_kk")}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition flex justify-between items-center ${
                tabAktif === "warga_kk" ? "bg-emerald-600 text-white" : "text-emerald-200 hover:bg-emerald-900"
              }`}
            >
              <span>Data Warga (KK)</span>
              <span className="text-xs bg-emerald-800 px-2 py-0.5 rounded-full">{daftarKK.length}</span>
            </button>
          </nav>
        </div>

        <div className="p-4 m-4 bg-emerald-900/60 rounded-xl border border-emerald-800 text-xs">
          <p className="font-semibold text-white">Total Dana Dikelola RT</p>
          <p className="text-lg font-bold text-emerald-300 mt-1">{formatRupiah(totalSeluruhKas)}</p>
          <p className="text-[11px] text-emerald-400 mt-1">Terbagi dalam 3 Pos Kas Transparan</p>
        </div>
      </aside>

      {/* KONTEN UTAMA */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Portal Resmi Lingkungan</p>
            <h2 className="text-lg font-bold text-slate-800">{infoRT.namaRT}</h2>
          </div>
          <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full font-medium">
            MVP v0.4 • Operasional 1 RT
          </span>
        </header>

        <main className="p-6 max-w-6xl w-full mx-auto space-y-6">
          {/* === TAB 1: BERANDA RT === */}
          {tabAktif === "beranda" && (
            <>
              {/* 3 Kartu Pos Kas RT */}