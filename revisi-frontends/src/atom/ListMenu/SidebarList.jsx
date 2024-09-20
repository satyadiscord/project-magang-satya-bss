import { PiStudent } from "react-icons/pi"; // ic student
import { SiGoogleclassroom } from "react-icons/si"; // ic kelas
import { IoBookOutline } from "react-icons/io5"; // ic mata pelajaran
import { IoHomeOutline } from "react-icons/io5"; // ic home

export const sidebarList = [
  {
    name: "Home",
    list_icons: <IoHomeOutline size={30} />,
    link_navigate: "/",
  },
  {
    name: "Kelas",
    list_icons: <SiGoogleclassroom size={30} />,
    link_navigate: "/kelas",
  },
  {
    name: "Mata Pelajaran",
    list_icons: <IoBookOutline size={30} />,
    link_navigate: "/mataPelajaran",
  },
  {
    name: "Student",
    list_icons: <PiStudent size={30} />,
    link_navigate: "/student",
  },
];
