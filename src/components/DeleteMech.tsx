//import//
import { useNavigate } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

interface DeleteMechProps {
  id: string;
}

export const DeleteMech: React.FC<DeleteMechProps> = ({ id }) => {
  const navigate = useNavigate();
  const handleDeleteMech = async () => {
    try {
      await deleteDoc(doc(db, "mechs", id));
    } catch (error) {
      console.error("error deleting mech");
    }
    navigate("/all-mechs");
  };

  return (
    <button
      onClick={handleDeleteMech}
      className="w-24 h-12 bg-red-400 rounded-lg"
    >
      Delete Mech
    </button>
  );
};
