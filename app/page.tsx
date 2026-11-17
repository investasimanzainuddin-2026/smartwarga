"use client";

import React, { useState } from "react";

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

  const infoRT = {
    namaRT: "RT 05 / RW 02 • Perumahan Valencia Tahap III",
    iuranBulanan: 150000,
    rekeningRT: "BCA 1234567890 a.n. Kas RT 05",
  };

  const [daftarKK, setDaftarKK] = useState<KartuKeluarga[]>([
    { id: 1, noKK: "2171041205880001", blok: "A-01", kepalaKeluarga: "Bpk. Hendra Wijaya", jumlahAnggota: 4, statusHunian: "Pemilik", noWa: "6281234567890", statusIuranRutin: "Lunas" },
    { id: 2, noKK: "2171042308900004", blok: "A-02", kepalaKeluarga: "Bpk. Budi Santoso", jumlahAnggota: 3, statusHunian: "Pemilik", noWa: "6281234567891", statusIuranRutin: "Lunas" },
    { id: 3, noKK: "2171041511920002", blok: "A-03", kepalaKeluarga: "Ibu Ratna Sari", jumlahAnggota: 2, statusHunian: "Kontrak/Sewa", noWa: "6281234567892", statusIuranRutin: "Belum Bayar" },
    { id: 4, noKK: "2171040903850007", blok: "B-01", kepalaKeluarga: "Bpk. Dimas Pratama", jumlahAnggota: 5, statusHunian: "Pemilik", noWa: "6281234567893", statusIuranRutin: "Lunas" },
    { id: 5, noKK: "2171043001910009", blok: "B-02", kepalaKeluarga: "Bpk. Agus Salim", jumlahAnggota: 4, statusHunian: "Pemilik", noWa: "6281234567894", statusIuranRutin: "Belum Bayar" },
  ]);

  const [transaksi, setTransaksi] = useState<TransaksiKas[]>([
    { id: 1, tanggal: "01 Nov 2026", posKas: "Kas Rutin Bulanan", keterangan: "Saldo Awal Kas Rutin RT 05", jenis: "masuk", nominal: 4200000 },
    { id: 2, tanggal: "05 Nov 2026", posKas: "Kas Rutin Bulanan", keterangan: "Iuran Bulanan (3 KK Lunas)", jenis: "masuk", nominal: 450000 },
    { id: 3, tanggal: "08 Nov 2026", posKas: "Kas Rutin Bulanan", keterangan: "Honor & Kopi Satpam", jenis: "keluar", nominal: 850000 },
    { id: 4, tanggal: "10 Nov 2026", posKas: "Kas Proyek & Dadakan", keterangan: "Patungan Warga - Plang Nama Jalan Blok A & B", jenis: "masuk", nominal: 950000 },
    { id: 5, tanggal: "12 Nov 2026", posKas: "Kas Hari Besar", keterangan: "Sisa Saldo Panitia 17 Agustusan", jenis: "masuk", nominal: 1350000 },
  ]);

  const [daftarPatungan, setDaftarPatungan] = useState<PatunganFleksibel[]>([
    { id: 1, judul: "Pembuatan Plang Nama Jalan Blok A & B", kategori: "Infrastruktur / Dadakan", targetDana: 1500000, terkumpul: 950000, status: "Aktif" },
    { id: 2, judul: "Perbaikan 3 Titik Lampu Jalan Mati", kategori: "Infrastruktur / Dadakan", targetDana: 750000, terkumpul: 750000, status: "Selesai" },
    { id: 3, judul: "Tabungan Kas Peringatan 17 Agustusan", kategori: "Hari Besar", targetDana: 5000000, terkumpul: 1350000, status: "Aktif" },
  ]);

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

  const [formKK, setFormKK] = useState({ noKK: "", blok: "", kepalaKeluarga: "", jumlahAnggota: 3, statusHunian: "Pemilik" as "Pemilik" | "Kontrak/Sewa", noWa: "" });
  const [formKas, setFormKas] = useState({ posKas: "Kas Rutin Bulanan" as TransaksiKas["posKas"], keterangan: "", jenis: "masuk" as "masuk" | "keluar", nominal: "" });
  const [formPatungan, setFormPatungan] = useState({ judul: "", kategori: "Infrastruktur / Dadakan" as PatunganFleksibel["kategori"], targetDana: "" });
  const [formInfo, setFormInfo] = useState({ tanggalKegiatan: "", kategori: "Gotong Royong" as InfoAgenda["kategori"], judul: "", deskripsi: "" });

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
          {tabAktif === "beranda" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">Pos 1 • Rutin</span>
                  <p className="text-sm text-slate-500 mt-2">Saldo Kas Iuran Bulanan</p>
                  <p className="text-2xl font-bold text-slate-800 mt-0.5">{formatRupiah(saldoRutin)}</p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-amber-50 text-amber-700">Pos 2 • Hari Besar</span>
                  <p className="text-sm text-slate-500 mt-2">Kas Agustusan & Hari Raya</p>
                  <p className="text-2xl font-bold text-slate-800 mt-0.5">{formatRupiah(saldoHariBesar)}</p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700">Pos 3 • Fleksibel</span>
                  <p className="text-sm text-slate-500 mt-2">Kas Proyek & Patungan Dadakan</p>
                  <p className="text-2xl font-bold text-slate-800 mt-0.5">{formatRupiah(saldoProyek)}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-slate-800">Agenda & Gotong Royong Terdekat</h3>
                    <button onClick={() => setTabAktif("info_agenda")} className="text-xs font-semibold text-emerald-600 hover:underline">
                      Semua Info →
                    </button>
                  </div>
                  {daftarInfo.map((info) => (
                    <div key={info.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">{info.kategori}</span>
                        <span className="text-xs text-slate-500">{info.tanggalKegiatan}</span>
                      </div>
                      <h4 className="font-bold text-slate-800 text-sm mt-2">{info.judul}</h4>
                      <p className="text-xs text-slate-600 mt-1">{info.deskripsi}</p>
                      <div className="mt-3 pt-3 border-t border-slate-200 flex justify-between items-center">
                        <span className="text-xs font-medium text-slate-600">✅ {info.jumlahHadir} warga konfirmasi hadir</span>
                        <button
                          onClick={() => konfirmasiHadir(info.id)}
                          className="text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded-lg"
                        >
                          Saya Hadir
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-slate-800">Progres Patungan & Event RT</h3>
                    <button onClick={() => setTabAktif("keuangan_pos")} className="text-xs font-semibold text-emerald-600 hover:underline">
                      Kelola →
                    </button>
                  </div>
                  {daftarPatungan.map((p) => {
                    const persen = Math.min(100, Math.round((p.terkumpul / p.targetDana) * 100));
                    return (
                      <div key={p.id} className="p-4 rounded-xl border border-slate-200">
                        <div className="flex justify-between items-center">
                          <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">{p.kategori}</span>
                          <span className={`text-xs font-bold ${persen >= 100 ? "text-emerald-600" : "text-amber-600"}`}>{persen}% Terkumpul</span>
                        </div>
                        <p className="font-bold text-sm text-slate-800 mt-2">{p.judul}</p>
                        <div className="w-full bg-slate-100 h-2 rounded-full mt-2 overflow-hidden">
                          <div className="bg-emerald-600 h-2 rounded-full" style={{ width: `${persen}%` }} />
                        </div>
                        <p className="text-xs text-slate-500 mt-1.5">
                          Terkumpul <strong>{formatRupiah(p.terkumpul)}</strong> dari target {formatRupiah(p.targetDana)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {tabAktif === "keuangan_pos" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-800 text-base mb-1">Buat Pos Patungan Dadakan / Hari Besar Baru</h3>
                <p className="text-xs text-slate-500 mb-3">
                  Gunakan jika RT membutuhkan penggalangan dana fleksibel (contoh: Plang Jalan, Lampu Jalan, atau Panitia 17 Agustusan).
                </p>
                <form onSubmit={tambahKampanyePatungan} className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Nama Kegiatan / Kebutuhan"
                    value={formPatungan.judul}
                    onChange={(e) => setFormPatungan({ ...formPatungan, judul: e.target.value })}
                    className="md:col-span-2 border border-slate-300 rounded-lg px-3 py-2 text-sm"
                  />
                  <select
                    value={formPatungan.kategori}
                    onChange={(e) => setFormPatungan({ ...formPatungan, kategori: e.target.value as PatunganFleksibel["kategori"] })}
                    className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white"
                  >
                    <option value="Infrastruktur / Dadakan">Infrastruktur / Dadakan</option>
                    <option value="Hari Besar">Hari Besar (Agustusan/Raya)</option>
                  </select>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      required
                      placeholder="Target Dana (Rp)"
                      value={formPatungan.targetDana}
                      onChange={(e) => setFormPatungan({ ...formPatungan, targetDana: e.target.value })}
                      className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
                    />
                    <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-4 py-2 rounded-lg shrink-0">
                      Buat Pos
                    </button>
                  </div>
                </form>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-800 text-base mb-3">Catat Pemasukan / Pengeluaran Kas</h3>
                <form onSubmit={tambahTransaksi} className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  <select
                    value={formKas.posKas}
                    onChange={(e) => setFormKas({ ...formKas, posKas: e.target.value as TransaksiKas["posKas"] })}
                    className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white"
                  >
                    <option value="Kas Rutin Bulanan">Kas Rutin Bulanan</option>
                    <option value="Kas Hari Besar">Kas Hari Besar</option>
                    <option value="Kas Proyek & Dadakan">Kas Proyek & Dadakan</option>
                  </select>
                  <input
                    type="text"
                    required
                    placeholder="Keterangan transaksi..."
                    value={formKas.keterangan}
                    onChange={(e) => setFormKas({ ...formKas, keterangan: e.target.value })}
                    className="md:col-span-2 border border-slate-300 rounded-lg px-3 py-2 text-sm"
                  />
                  <input
                    type="number"
                    required
                    placeholder="Nominal (Rp)"
                    value={formKas.nominal}
                    onChange={(e) => setFormKas({ ...formKas, nominal: e.target.value })}
                    className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
                  />
                  <div className="flex gap-2">
                    <select
                      value={formKas.jenis}
                      onChange={(e) => setFormKas({ ...formKas, jenis: e.target.value as "masuk" | "keluar" })}
                      className="border border-slate-300 rounded-lg px-2 py-2 text-sm bg-white"
                    >
                      <option value="masuk">Masuk (+)</option>
                      <option value="keluar">Keluar (-)</option>
                    </select>
                    <button type="submit" className="flex-1 bg-emerald-600 text-white font-semibold text-sm px-3 py-2 rounded-lg">
                      Simpan
                    </button>
                  </div>
                </form>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-800 mb-4">Mutasi Semua Pos Kas</h3>
                  <div className="divide-y divide-slate-100">
                    {transaksi.map((t) => (
                      <div key={t.id} className="py-3 flex justify-between items-center gap-2">
                        <div>
                          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600">{t.posKas}</span>
                          <p className="text-sm font-medium text-slate-800 mt-1">{t.keterangan}</p>
                          <p className="text-xs text-slate-400">{t.tanggal}</p>
                        </div>
                        <span className={`text-sm font-bold shrink-0 ${t.jenis === "masuk" ? "text-emerald-600" : "text-rose-600"}`}>
                          {t.jenis === "masuk" ? "+" : "-"} {formatRupiah(t.nominal)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-800 mb-4">Status Iuran Bulanan (November 2026)</h3>
                  <div className="divide-y divide-slate-100">
                    {daftarKK.map((kk) => (
                      <div key={kk.id} className="py-3 flex justify-between items-center">
                        <div>
                          <span className="text-xs font-bold bg-slate-100 px-2 py-0.5 rounded mr-2">{kk.blok}</span>
                          <span className="text-sm font-medium text-slate-800">{kk.kepalaKeluarga}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {kk.statusIuranRutin === "Belum Bayar" && (
                            <button onClick={() => tagihWA(kk)} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-600 text-white">
                              Tagih WA
                            </button>
                          )}
                          <button
                            onClick={() => toggleIuranRutin(kk)}
                            className={`text-xs font-semibold px-3 py-1 rounded-full ${
                              kk.statusIuranRutin === "Lunas" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {kk.statusIuranRutin}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {tabAktif === "info_agenda" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-800 text-base mb-3">Terbitkan Pengumuman / Jadwal Gotong Royong</h3>
                <form onSubmit={tambahInfoAgenda} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <select
                    value={formInfo.kategori}
                    onChange={(e) => setFormInfo({ ...formInfo, kategori: e.target.value as InfoAgenda["kategori"] })}
                    className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white"
                  >
                    <option value="Gotong Royong">Gotong Royong / Kerja Bakti</option>
                    <option value="Hari Besar">Peringatan Hari Besar</option>
                    <option value="Rapat Warga">Rapat / Musyawarah Warga</option>
                    <option value="Info Penting">Info Keamanan / Penting</option>
                  </select>
                  <input
                    type="text"
                    required
                    placeholder="Waktu Pelaksanaan (misal: Minggu, 29 Nov • 07.30)"
                    value={formInfo.tanggalKegiatan}
                    onChange={(e) => setFormInfo({ ...formInfo, tanggalKegiatan: e.target.value })}
                    className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Judul Pengumuman..."
                    value={formInfo.judul}
                    onChange={(e) => setFormInfo({ ...formInfo, judul: e.target.value })}
                    className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Detail keterangan / perlengkapan..."
                    value={formInfo.deskripsi}
                    onChange={(e) => setFormInfo({ ...formInfo, deskripsi: e.target.value })}
                    className="md:col-span-2 border border-slate-300 rounded-lg px-3 py-2 text-sm"
                  />
                  <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg px-4 py-2">
                    Terbitkan Pengumuman
                  </button>
                </form>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {daftarInfo.map((info) => (
                  <div key={info.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">{info.kategori}</span>
                        <span className="text-xs text-slate-400">{info.tanggalKegiatan}</span>
                      </div>
                      <h4 className="font-bold text-slate-800 text-base mt-3">{info.judul}</h4>
                      <p className="text-sm text-slate-600 mt-1.5">{info.deskripsi}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                      <span className="text-xs font-semibold text-slate-600">✅ {info.jumlahHadir} Kepala Keluarga akan hadir</span>
                      <button
                        onClick={() => konfirmasiHadir(info.id)}
                        className="text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg"
                      >
                        Konfirmasi Hadir
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tabAktif === "warga_kk" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-800 text-base mb-3">Tambah Data Kartu Keluarga (KK) Baru</h3>
                <form onSubmit={tambahKK} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Nomor Kartu Keluarga (16 digit)"
                    value={formKK.noKK}
                    onChange={(e) => setFormKK({ ...formKK, noKK: e.target.value })}
                    className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Nama Kepala Keluarga"
                    value={formKK.kepalaKeluarga}
                    onChange={(e) => setFormKK({ ...formKK, kepalaKeluarga: e.target.value })}
                    className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Blok & No. Rumah (misal: C-01)"
                    value={formKK.blok}
                    onChange={(e) => setFormKK({ ...formKK, blok: e.target.value })}
                    className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="No. WhatsApp (0812...)"
                    value={formKK.noWa}
                    onChange={(e) => setFormKK({ ...formKK, noWa: e.target.value })}
                    className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
                  />
                  <div className="flex gap-2">
                    <input
                      type="number"
                      min={1}
                      placeholder="Jml Jiwa"
                      value={formKK.jumlahAnggota}
                      onChange={(e) => setFormKK({ ...formKK, jumlahAnggota: Number(e.target.value) })}
                      className="w-1/2 border border-slate-300 rounded-lg px-3 py-2 text-sm"
                    />
                    <select
                      value={formKK.statusHunian}
                      onChange={(e) => setFormKK({ ...formKK, statusHunian: e.target.value as "Pemilik" | "Kontrak/Sewa" })}
                      className="w-1/2 border border-slate-300 rounded-lg px-2 py-2 text-sm bg-white"
                    >
                      <option value="Pemilik">Pemilik</option>
                      <option value="Kontrak/Sewa">Kontrak/Sewa</option>
                    </select>
                  </div>
                  <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg px-4 py-2">
                    + Simpan Data KK
                  </button>
                </form>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
                <h3 className="font-bold text-slate-800 text-base mb-4">Buku Induk Warga RT ({daftarKK.length} KK)</h3>
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase">
                      <th className="py-3 px-2">Blok</th>
                      <th className="py-3 px-2">No. KK</th>
                      <th className="py-3 px-2">Kepala Keluarga</th>
                      <th className="py-3 px-2">Anggota</th>
                      <th className="py-3 px-2">Status Hunian</th>
                      <th className="py-3 px-2">No. WhatsApp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {daftarKK.map((kk) => (
                      <tr key={kk.id} className="hover:bg-slate-50">
                        <td className="py-3 px-2 font-bold">{kk.blok}</td>
                        <td className="py-3 px-2 font-mono text-xs text-slate-600">{maskNoKK(kk.noKK)}</td>
                        <td className="py-3 px-2 font-medium">{kk.kepalaKeluarga}</td>
                        <td className="py-3 px-2">{kk.jumlahAnggota} Jiwa</td>
                        <td className="py-3 px-2">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${kk.statusHunian === "Pemilik" ? "bg-blue-50 text-blue-700" : "bg-purple-50 text-purple-700"}`}>
                            {kk.statusHunian}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-xs text-slate-600">{kk.noWa}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}