import { useNavigate } from "react-router-dom";

export default function TambahMapel() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-center font-bold text-2xl font-[arial]">
        Tambah Matapelajaran
      </h1>
      <form className="w-[88%] md:w-[60%] lg:w-[40%] m-auto mt-16 md:mt-28">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="nama_matapelajaran"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="nama_matapelajaran"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nama Matapelajaran
          </label>
        </div>
        {/* option hari */}
        <div>
          <label htmlFor="hari" className="sr-only">
            Pilih Hari
          </label>
          <select
            id="hari"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option selected>Pilih Hari Dilaksanakan</option>
            <option value="Senin">Senin</option>
            <option value="Selasa">Selasa</option>
            <option value="Rabu">Rabu</option>
            <option value="Kamis">Kamis</option>
            <option value="Jumat">Jumat</option>
            <option value="Sabtu">Sabtu</option>
          </select>

          {/* Pemilihan Waktu Mulai */}
          <div className="relative z-0 w-full mb-9 mt-10 group">
            <input
              type="time"
              id="waktu_mulai"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="waktu_mulai"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Waktu Mulai
            </label>
          </div>
        </div>
        {/* Waktu Selesai */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="Time"
            id="waktu_selesai"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="waktu_selesai"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Waktu Selesai
          </label>
        </div>
        {/* membuat opsi nama guru yang sudah terdaftar */}
        <div className="mb-6">
          <label htmlFor="nama_guru" className="sr-only">
            Pilih Nama Guru
          </label>
          <select
            id="nama_guru"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option selected>Pilih Nama Guru</option>
            <option value="Ayu">Ayu</option>
            <option value="Mita">Mita</option>
            <option value="Suartini">Suartini</option>
          </select>
        </div>
        {/* option untuk ruangan kelas */}
        <div className="mb-6">
          <label htmlFor="ruangan" className="sr-only">
            Pilih Tempat
          </label>
          <select
            id="ruangan"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option selected>Pilih Tempat</option>
            <option value="Lab">Lab</option>
            <option value="Aula">Aula</option>
            <option value="Komputer">Komputer</option>
            <option value="Perpustakaan">Perpustakaan</option>
          </select>
        </div>
        {/* Metode Pengajaran */}
        <div className="mb-6">
          <label htmlFor="metode_pengajaran" className="sr-only">
            Pilih Metode Pengajaran
          </label>
          <select
            id="metode_pengajaran"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option selected>Pilih Metode Pengajaran</option>
            <option value="Praktek">Praktek</option>
            <option value="Teori">Teori</option>
            <option value="Proyek">Proyek</option>
          </select>
        </div>
        {/* Deskripsi */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="deskripsi"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="deskripsi"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Deskripsi
          </label>
        </div>
        {/* button */}
        <div className="flex items-center mt-16">
          <button
            type="button"
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Tambah
          </button>
          <button
            onClick={() => navigate("/matapelajaran")}
            type="button"
            className="focus:outline-none text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-red-900"
          >
            Batal
          </button>
        </div>
      </form>
    </>
  );
}
