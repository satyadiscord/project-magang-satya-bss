import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

const api = axios.create({ baseURL: "http://127.0.0.1:8000/api" });

export default function CreateEditKelas() {
  const [nama, setNama] = useState("");
  const [jumlah_siswa, setJumlahSiswa] = useState("");
  const [guru_pengajar, setGuruPengajar] = useState("");
  const [mapel_kelas, setMapelKelas] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchKelas();
    }
  }, [id]);

  const fetchKelas = async () => {
    try {
      const response = await api.get(`/kelas/${id}`);
      const data = response.data;
      setNama(data.nama);
      setJumlahSiswa(data.jumlah_siswa);
      setGuruPengajar(data.guru_pengajar);
      setMapelKelas(data.mapel_kelas);
    } catch (error) {
      console.error("Error fetching kelas:", error);
      setError("Error fetching data");
    }
  };

  const saveKelas = async () => {
    try {
      if (id) {
        await api.put(`/kelas/${id}`, {
          nama,
          jumlah_siswa,
          guru_pengajar,
          mapel_kelas,
        });
      } else {
        await api.post("/kelas", {
          nama,
          jumlah_siswa,
          guru_pengajar,
          mapel_kelas,
        });
      }
      navigate("/kelas");
    } catch (error) {
      console.error(
        "Error saving kelas:",
        error.response ? error.response.data : error.message
      );
      setError(error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <div className="lg:ml-[120px] lg:mt-[100px] md:ml-[235px]">
        <h1 className="text-center mb-16 font-semibold text-lg">
          {id ? "Edit Kelas" : "Tambah Kelas"}
        </h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form
          className="max-w-md mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            saveKelas();
          }}
        >
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="namakelas"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="namakelas"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nama Kelas
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              id="jumlahsiswa"
              value={jumlah_siswa}
              onChange={(e) => setJumlahSiswa(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="jumlahsiswa"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Jumlah Siswa
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
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Guru Pengajar
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="mapelkelas"
              value={mapel_kelas}
              onChange={(e) => setMapelKelas(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="mapelkelas"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Mata Pelajaran
            </label>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {id ? "Update" : "Submit"}
            </button>
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              <Link to="/kelas">Batal</Link>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
