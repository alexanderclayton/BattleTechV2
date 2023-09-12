//import//
import { useParams } from "react-router-dom";
import { UpdateRecordSheet } from "../components/UpdateMech/UpdateRecordSheet";

export const UpdateMech: React.FC = () => {
  const { id } = useParams();
  if (!id) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-end">
      <UpdateRecordSheet id={id} />
    </div>
  );
};
