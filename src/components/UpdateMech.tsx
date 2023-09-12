//import//
import { useNavigate } from "react-router-dom";

interface UpdateMechProps {
  id: string;
}

export const UpdateMech: React.FC<UpdateMechProps> = ({ id }) => {
  const navigate = useNavigate();

  const handleUpdateMech = () => {
    navigate(`/update-mech/${id}`);
  };

  return (
    <button
      onClick={handleUpdateMech}
      className="w-24 h-12 bg-yellow-400 rounded-lg"
    >
      Update Mech
    </button>
  );
};
