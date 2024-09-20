import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Configurasi API
const api = axios.create({ baseURL: "http://127.0.0.1:8000/api" });

// API calls
const getKelas = async () => {
  try {
    const response = await api.get("/kelas");
    return response.data;
  } catch (error) {
    console.log("Error fetching data kelas", error);
    throw error;
  }
};

const deleteKelas = async (id) => {
  try {
    await api.delete(`/kelas/${id}`);
  } catch (error) {
    console.log("Error deleting kelas", error);
    throw error;
  }
};

export default function Kelas() {
  const [kelas, setKelas] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  // api get data user
  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    fetchKelas();
  }, []);

  const fetchKelas = async () => {
    try {
      const data = await getKelas();
      setKelas(data);
    } catch (error) {
      console.log("Error fetching kelas", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteKelas(id);
      fetchKelas();
    } catch (error) {
      console.log("Error deleting kelas", error);
    }
  };

  return (
    <>
      <div className="w-full flex justify-end mb-2">
        <div className="font-semibold text-lg bg-green-600 drop-shadow-sm p-3 text-white rounded-md">
          <button onClick={() => navigate("/tambahKelas")}>
            Buat Data Kelas
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Daftar Kelas
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Jumlah Siswa
              </th>
              <th scope="col" className="px-6 py-3">
                Guru Pengajar
              </th>
              <th scope="col" className="px-6 py-3">
                Mata Pelajaran
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {kelas.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.nama}
                </th>
                <td className="px-6 py-4">{item.jumlah_siswa}</td>
                <td className="px-6 py-4">{item.guru_pengajar}</td>
                <td className="px-6 py-4">{item.mapel_kelas}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-between gap-4 lg:gap-0 md:gap-4">
                    {user.role === "teacher" && (
                      <>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() =>
                            navigate(`/createEditKelas/${item.id}`)
                          }
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Update
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
