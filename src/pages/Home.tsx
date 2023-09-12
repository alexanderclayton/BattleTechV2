//import//

import { CreateNewMech } from "../components/CreateNewMech";
import { RecordSheet } from "../components/RecordSheet";

export const Home: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-start">
        <CreateNewMech />
      </div>
      <div className="flex justify-end">
        <RecordSheet />
      </div>
    </div>
  );
};
