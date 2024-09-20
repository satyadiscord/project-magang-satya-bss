import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const api = axios.create({ baseURL: "http://127.0.0.1:8000/api" });

export default function TambahMapel() {
  const [nama, setNama] = useState("");
  const [jadwal_kelas, setJadwalKelas] = useState("");
  const [guru_pengajar, setGuruPengajar] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchMataKuliah();
    }
  }, [id]);

  const fetchMataKuliah = async () => {
    try {
      const response = await api.get(`/mata-kuliahs/${id}`);
      const data = response.data;
      setNama(data.nama);
      setJadwalKelas(data.jadwal_kelas);
      setGuruPengajar(data.guru_pengajar);
      setDeskripsi(data.deskripsi);
    } catch (error) {
      console.error("Error fetching mata pelajaran:", error);
      setError("Error fetching data");
    }
  };

  const saveMataKuliah = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Update existing mata kuliah
        await api.put(`/mata-kuliahs/${id}`, {
          nama,
          jadwal_kelas,
          guru_pengajar,
          deskripsi,
        });
      } else {
        // Create new mata kuliah
        await api.post("/mata-kuliahs", {
          nama,
          jadwal_kelas,
          guru_pengajar,
          deskripsi,
        });
      }
      navigate("/mataPelajaran");
    } catch (error) {
      console.error(
        "Error saving mata pelajaran:",
        error.response ? error.response.data : error.message
      );
      setError(error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <div className="lg:ml-[120px] lg:mt-[100px] md:ml-[235px]">
        <h1 className="text-center mb-16 font-semibold text-lg">
          {id ? "Edit Mata Pelajaran" : "Tambah Mata Pelajaran"}
        </h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form className="max-w-md mx-auto" onSubmit={saveMataKuliah}>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="nama"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nama Mata Pelajaran
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="jadwalkelas"
              value={jadwal_kelas}
              onChange={(e) => setJadwalKelas(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="jadwalkelas"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Jadwal Kelas
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="gurupengajar"
              value={guru_pengajar}
              onChange={(e) => setGuruPengajar(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="gurupengajar"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Guru Pengajar
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              placeholder="Deskripsi"
              className="w-full rounded-md"
              required
            />
          </div>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {id ? "Update" : "Tambah"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/mataPelajaran")}
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
