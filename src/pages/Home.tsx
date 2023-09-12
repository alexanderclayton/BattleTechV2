//import//
import { RecordSheet } from "../components/RecordSheet";

export const Home: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-start">
      </div>
      <div className="flex justify-end">
        <RecordSheet />
      </div>
    </div>
  );
};
