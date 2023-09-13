//import//
import { useNavigate } from "react-router-dom";
import { CreateRecordSheet } from "../components/CreateMech/CreateRecordSheet";

export const CreateMech: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div>
        <button onClick={() => navigate('/all-mechs')} className="bg-green-400 px-4 py-3 rounded-lg">Save Mech</button>
      </div>
      <div className="flex justify-end">
        <CreateRecordSheet />
      </div>
    </div>
  );
};
