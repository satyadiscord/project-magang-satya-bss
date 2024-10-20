import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ReqKelas() {
  const [nama_siswa, setNamaSiswa] = useState("");
  const [guru_pengajar, setGuruPengajar] = useState("");
  const [matapelajaran, setMatapelajaran] = useState("");
  const [semester, setSemester] = useState("");
  const [pendidikan, setPendidikan] = useState("");
  const [lokasi_kelas, setLokasiKelas] = useState("");

  const handlerSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      nama_siswa,
      guru_pengajar,
      matapelajaran,
      semester,
      pendidikan,
      lokasi_kelas,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/kelas",
        formData
      );

      if (response.status === 201) {
        alert("Siswa Berhasil Ditambahkan");
        setNamaSiswa("");
        setGuruPengajar("");
        setMatapelajaran("");
        setSemester("");
        setPendidikan("");
        setLokasiKelas("");
        console.log("Siswa Berhasil Ditambahkan");
      } else {
        alert("Siswa Gagal Ditambahkan");
      }
    } catch (err) {
      console.log("result: ", err);
      alert("Terjadi kesalahan, tidak dapat mengirim data.");
    }
  };

  return (
    <>
      <h1 className="text-center font-bold text-2xl font-[arial]">
        Request Kelas
      </h1>
      <form
        onSubmit={handlerSubmit}
        className="w-[88%] md:w-[60%] lg:w-[40%] m-auto mt-16 md:mt-28"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            value={nama_siswa}
            onChange={(e) => setNamaSiswa(e.target.value)}
            id="nama_siswa"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="nama_siswa"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nama Siswa
          </label>
        </div>
        {/* option guru pengaajr */}
        <div className="mb-6">
          <label htmlFor="opsi_guru" className="sr-only">
            Pilih Guru
          </label>
          <select
            value={guru_pengajar}
            onChange={(e) => setGuruPengajar(e.target.value)}
            id="opsi_guru"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option selected>Pilih Guru</option>
            <option value="Ayu">Ayu</option>
          </select>
        </div>
        {/* option pemilihan mapel */}
        <div className="mb-6">
          <label htmlFor="matapelajaran" className="sr-only">
            Pilih Matapelajaran
          </label>
          <select
            value={matapelajaran}
            onChange={(e) => setMatapelajaran(e.target.value)}
            id="matapelajaran"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option selected>Pilih Matapelajaran</option>
            <option value="Matematika">Matematika</option>
            <option value="Ipa">Ipa</option>
            <option value="Bahasa Inggris">Bahasa Inggris</option>
            <option value="Bahasa Indonesia">Bahasa Indonesia</option>
            <option value="Ips">Ips</option>
            <option value="Sejarah">Sejarah</option>
          </select>
        </div>
        {/* option semester */}
        <div className="mb-6">
          <label htmlFor="semester" className="sr-only">
            Pilih Semester
          </label>
          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            id="semester"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option selected>Pilih Semester</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        {/* option pendiikan */}
        <div className="mb-6">
          <label htmlFor="pendiidkan" className="sr-only">
            Pilih Tingkat Pendidikan
          </label>
          <select
            value={pendidikan}
            onChange={(e) => setPendidikan(e.target.value)}
            id="pendiidkan"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option selected>Pilih Tingkat Pendidikan</option>
            <option value="SD">SD</option>
            <option value="SMP">SMP</option>
            <option value="SMK">SMK</option>
            <option value="SMA">SMA</option>
          </select>
        </div>
        {/* option ruang kelas */}
        <div>
          <label htmlFor="ruangan_kelas" className="sr-only">
            Pilih Ruangan
          </label>
          <select
            value={lokasi_kelas}
            onChange={(e) => setLokasiKelas(e.target.value)}
            id="ruangan_kelas"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option selected>Pilih Ruangan</option>
            <option value="Lab">Lab</option>
            <option value="Aula">Aula</option>
            <option value="Komputer">Komputer</option>
            <option value="Perpustakaan">Perpustakaan</option>
          </select>
        </div>

        {/* button */}
        <div className="flex items-center mt-16">
          <button
            onClick={handlerSubmit}
            type="button"
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Request
          </button>
        </div>
      </form>
    </>
  );
}
