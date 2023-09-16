//import//
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseAuth";
import { DeleteMech } from "../components/DeleteMech";
import { ReadRecordSheet } from "../components/ReadMech/ReadRecordSheet";
import { UpdateMech } from "../components/UpdateMech";

export const ReadMech: React.FC = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);

  if (!id) {
    return <div>Loading...</div>;
  }

  if (loading) {
    return (
      <div>
        <p>Checking for User...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error</p>
      </div>
    );
  }

  return (
    <div className="flex justify-end">
      {user && (
        <div>
          <DeleteMech id={id} />
          <UpdateMech id={id} />
        </div>
      )}
      <ReadRecordSheet id={id} />
    </div>
  );
};
