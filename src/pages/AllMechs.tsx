//import//
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { AllMechsCardData } from "../types/types";

export const AllMechs: React.FC = () => {
  const [mechs, setMechs] = useState<AllMechsCardData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "mechs"));
        const allMechsData: AllMechsCardData[] = [];
        querySnapshot.forEach((doc) => {
          const { id, type } = doc.data();
          allMechsData.push({ id, type });
          console.log(mechs);
        });
        setMechs(allMechsData);
      } catch (error) {
        console.error("error fetching data");
      }
    };
    getData();
  }, []);

  const goToMech = (id: string) => {
    navigate(`/mech/${id}`);
  };

  return (
    <div>
      <h2 className="font-bold">All Mechs</h2>
      <div className="flex">
        {mechs.map((mech) => (
          <div key={mech.id} onClick={() => goToMech(mech.id)} className="border hover:cursor-pointer p-3 m-3">
            <h3>{mech.type}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
