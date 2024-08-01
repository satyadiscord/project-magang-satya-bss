import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

const api = axios.create({ baseURL: "http://127.0.0.1:8000/api" });

export default function CreateEditSiswaSekolah() {
  const [nama, setNama] = useState("");
  const [nis, setNis] = useState("");
  const [email, setEmail] = useState("");
  const [tanggal_lahir, setTanggalLahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchSiswaSekolah();
    }
  }, [id]);

  const fetchSiswaSekolah = async () => {
    try {
      const response = await api.get(`/siswasekolah/${id}`);
      const data = response.data;
      setNama(data.nama);
      setNis(data.nis);
      setEmail(data.email);
      setTanggalLahir(data.tanggal_lahir);
      setAlamat(data.alamat);
    } catch (error) {
      console.error("Error fetching siswaSekolah:", error);
      setError("Error fetching data");
    }
  };

  const saveSiswaSekolah = async () => {
    try {
      if (id) {
        await api.put(`/siswasekolah/${id}`, {
          nama,
          nis,
          email,
          tanggal_lahir,
          alamat,
        });
      } else {
        await api.post("/siswasekolah", {
          nama,
          nis,
          email,
          tanggal_lahir,
          alamat,
        });
      }
      navigate("/student");
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
          {id ? "Edit Student" : "Tambah Student"}
        </h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form
          className="max-w-md mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            saveSiswaSekolah();
          }}
        >
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="namasiswa"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="namasiswa"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nama Siswa
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="nissiswa"
              value={nis}
              onChange={(e) => setNis(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="nissiswa"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nis
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="date"
              id="tanggallahir"
              value={tanggal_lahir}
              onChange={(e) => setTanggalLahir(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="tanggallahir"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Tanggal Lahir
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="alamat"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="alamat"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Alamat
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
              <Link to="/student">Batal</Link>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
