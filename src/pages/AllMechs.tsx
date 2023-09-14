//import//
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { AllMechsCardData } from "../types/types";
import { CreateNewMech } from "../components/CreateMech/CreateNewMech";
import Placeholder from '../assets/placeholder.png'

export const AllMechs: React.FC = () => {
  const [mechs, setMechs] = useState<AllMechsCardData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "mechs"));
        const allMechsData: AllMechsCardData[] = [];
        querySnapshot.forEach((doc) => {
          const { id, type, imageUrl } = doc.data();
          allMechsData.push({ id, type, imageUrl });
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
          <div key={mech.id} onClick={() => goToMech(mech.id)} className="border hover:cursor-pointer p-3 m-3 flex flex-col justify-between items-center w-[200px]">
            <img src={mech.imageUrl ? mech.imageUrl : Placeholder} alt={mech.imageUrl ? `${mech.imageUrl}` : 'no image'} />
            <h3 className="font-bold">{mech.type}</h3>
          </div>
        ))}
      </div>
      <CreateNewMech />
    </div>
  );
};
