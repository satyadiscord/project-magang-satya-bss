import { IoChevronBack } from "react-icons/io5"; // IC back
import { useNavigate } from "react-router-dom";

export default function KelasDetail() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-end items-center ">
        <div className="relative group inline-block">
          <button
            onClick={() => navigate("/kelas")}
            type="button"
            className="border rounded-full py-1 px-2 hover:bg-red-600 hover:text-white transition duration-300"
          >
            <IoChevronBack size={25} />
          </button>
          {/* Tooltip */}
          <div className="absolute right-6 top-9 mb-2 hidden group-hover:block bg-gray-500 text-white text-xs rounded px-4 py-1 z-10">
            Kembali
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
        <div className="flex justify-between items-center p-3">
          <h1 className="text-2xl font-bold font-[arial] tracking-wide">
            Detail Kelas King Paquito
          </h1>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-10 py-3">
                Nama Siswa
              </th>
              <th scope="col" className="px-10 py-3">
                Guru Pengajar
              </th>
              <th scope="col" className="px-10 py-3">
                Matapelajaran
              </th>
              <th scope="col" className="px-10 py-3">
                Semester
              </th>
              <th scope="col" className="px-10 py-3">
                Pendidikan
              </th>
              <th scope="col" className="px-10 py-3">
                Lokasi Kelas
              </th>
              <th scope="col" className="px-10 py-3">
                Status Kelas
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-10 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                paquito
              </th>
              <td className="px-10 py-4">bapak paquito</td>
              <td className="px-10 py-4">informatika</td>
              <td className="px-10 py-4">1</td>
              <td className="px-10 py-4">smp</td>
              <td className="px-10 py-4">lab</td>
              <td className="px-10 py-4">penuh</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
