import { MdDeleteOutline } from "react-icons/md"; // IC delete
import { MdOutlineEdit } from "react-icons/md"; // IC Update
import { BsEye } from "react-icons/bs"; // IC detail
import { IoMdAdd } from "react-icons/io"; //IC add
import { useNavigate } from "react-router-dom";

export default function Kelas() {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
        <div className="flex justify-between items-center p-3">
          <h1 className="text-2xl font-bold font-[arial] tracking-wide">
            Daftar Kelas
          </h1>
          <div className="relative group inline-block">
            <button onClick={() => navigate("/tambah-kelas")} className="mr-3">
              <IoMdAdd size={25} />
            </button>
            {/* tooltip */}
            <div className="absolute right-4 top-6 mb-2 hidden group-hover:block bg-gray-500 text-white text-xs rounded px-4 py-1 z-10">
              Add
            </div>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                Nama Kelas
              </th>
              <th scope="col" className="px-4 py-3">
                Jumlah Siswa
              </th>
              <th scope="col" className="px-4 py-3">
                Guru Pengajar
              </th>
              <th scope="col" className="px-4 py-3">
                Semester
              </th>
              <th scope="col" className="px-4 py-3">
                <span className="sr-only">Detail</span>
              </th>
              <th scope="col" className="px-4 py-3">
                <span className="sr-only">Edit</span>
              </th>
              <th scope="col" className="px-4 py-3">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Kelas Ultramen
              </th>
              <td className="px-4 py-4">30</td>
              <td className="px-4 py-4">Ibu Miya</td>
              <td className="px-4 py-4">1-2</td>
              <td className="px-4 py-4 text-right">
                <div className="relative group inline-block">
                  <button
                    onClick={() => navigate("/detail-kelas")}
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <BsEye size={24} />
                  </button>
                  {/* Tooltip */}
                  <div className="absolute right-6 top-1 mb-2 hidden group-hover:block bg-gray-500 text-white text-xs rounded px-4 py-1 z-10">
                    Detail
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-right">
                <div className="relative group inline-block">
                  <button
                    onClick={() => navigate("/edit-kelas")}
                    href="#"
                    className="font-medium text-green-600 dark:text-green-500 hover:underline"
                  >
                    <MdOutlineEdit size={24} />
                  </button>
                  {/* Tooltip */}
                  <div className="absolute right-6 top-1 mb-2 hidden group-hover:block bg-gray-500 text-white text-xs rounded px-4 py-1 z-10">
                    Edit
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-right">
                <div className="relative group inline-block">
                  <button
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    <MdDeleteOutline size={24} />
                  </button>
                  <div className="absolute right-6 top-1 mb-2 hidden group-hover:block bg-gray-500 text-white text-xs rounded px-4 py-1 z-10">
                    Delete
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
