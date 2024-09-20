import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const api = axios.create({ baseURL: "http://127.0.0.1:8000/api" });

export default function Student() {
  const [siswaSekolah, setSiswaSekolah] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSiswaSekolah();
  }, []);

  const fetchSiswaSekolah = async () => {
    try {
      const response = await api.get("/siswasekolah");
      setSiswaSekolah(response.data);
    } catch (error) {
      console.log("Error fetching data siswaSekolah", error);
    }
  };

  const deleteSiswaSekolah = async (id) => {
    try {
      await api.delete(`/siswasekolah/${id}`);
      fetchSiswaSekolah();
    } catch (error) {
      console.log("Error deleting siswaSekolah", error);
    }
  };

  return (
    <>
      <div className="w-full flex justify-end mb-2">
        <div className="font-semibold text-lg bg-green-600 drop-shadow-sm p-3 text-white rounded-md">
          <button onClick={() => navigate("/tambahStudent")}>
            Buat Data Student
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Daftar Student
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Nis
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal Lahir
              </th>
              <th scope="col" className="px-6 py-3">
                Alamat
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {siswaSekolah.map((itemSiswa, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {itemSiswa.nama}
                </th>
                <td className="px-6 py-4">{itemSiswa.nis}</td>
                <td className="px-6 py-4">{itemSiswa.email}</td>
                <td className="px-6 py-4">{itemSiswa.tanggal_lahir}</td>
                <td className="px-6 py-4">{itemSiswa.alamat}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-between gap-4 lg:gap-0 md:gap-4">
                    <button
                      onClick={() => deleteSiswaSekolah(itemSiswa.id)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() =>
                        navigate(`/createEditStudent/${itemSiswa.id}`)
                      }
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Update
                    </button>
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
