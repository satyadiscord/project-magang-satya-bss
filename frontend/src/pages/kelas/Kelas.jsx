import KelasCrudApi from "../../crud_api_component/kelas_crud_api/KelasCrudLaravel";

export default function Kelas() {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14">
          <KelasCrudApi />
        </div>
      </div>
    </>
  );
}
