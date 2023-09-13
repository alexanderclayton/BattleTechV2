//import//
import { useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { IWarriorData, WarriorDataType } from "../../types/types";
import { GoPlusCircle } from "react-icons/go";
import { UpdateWarriorDataModal } from "./UpdateMechModals/UpdateWarriorDataModal";

interface UpdateWarriorDataProps {
  id: string
  mechInfo: IWarriorData[]
}

export const UpdateWarriorData: React.FC<UpdateWarriorDataProps> = ({ id, mechInfo }) => {
  const [modal, setModal] = useState<boolean>(false);
  const [warriorData, setWarriorData] = useState<WarriorDataType>({
    name: mechInfo[0].name,
    gunnerySkill: mechInfo[0].gunnerySkill,
    pilotingSkill: mechInfo[0].pilotingSkill,
  });

  const toggleModal: React.MouseEventHandler<SVGSVGElement> = (): void => {
    setModal(!modal);
  };

  const closeModal: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    setModal(false);
  };

  const saveModal: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    saveWarriorData()
    setModal(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setWarriorData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const saveWarriorData = async () => {
    try {
      await updateDoc(doc(db, 'mechs', id), {
        name: warriorData.name,
        gunnerySkill: warriorData.gunnerySkill,
        pilotingSkill: warriorData.pilotingSkill,
      })
    } catch (error) {
      console.error('error saving data')
    }
  }

  return (
    <div className="grid grid-cols-16 grid-rows-9 w-full h-full">
      <p className="col-start-1 col-end-13 row-start-1 row-end-3 bg-black text-white text-sm text-center z-10 rounded-full flex justify-center items-center">
        WARRIOR DATA{" "}
        <GoPlusCircle
          onClick={toggleModal}
          className="bg-yellow-300 text-black rounded-full hover:cursor-pointer ml-3 mt-[2px]"
        />
      </p>
      <div className="col-start-1 col-end-17 row-start-1 row-end-10" />
      <span className="col-start-1 col-end-17 row-start-2 row-end-10 border-2 border-black rounded-lg" />

      <UpdateWarriorDataModal modal={modal} warriorData={warriorData} handleChange={handleChange} closeModal={closeModal} saveModal={saveModal}/>
      
      <p className="col-start-2 col-end-4 row-start-3 row-end-4 text-2xs font-bold">Name:</p>
      <p className="col-start-5 col-end-16 row-start-3 row-end-4 border-b border-black text-2xs pl-2 flex">{warriorData.name === "" ? "" : `${warriorData.name}`}</p>
      <p className="col-start-2 col-end-7 row-start-4 row-end-5 text-2xs font-bold">Gunnery Skill:</p>
      <p className="col-start-7 col-end-9 row-start-4 row-end-5 border-b border-black text-2xs text-center flex">{warriorData.gunnerySkill === 0 ? "" : `${warriorData.gunnerySkill}`}</p>
      <p className="col-start-9 col-end-14 row-start-4 row-end-5 text-2xs font-bold text-right">Piloting Skill:</p>
      <p className="col-start-14 col-end-16 row-start-4 row-end-5 border-b border-black text-2xs text-center flex">{warriorData.pilotingSkill === 0 ? "" : `${warriorData.pilotingSkill}`}</p>
      <p className="col-start-1 col-end-7 row-start-6 row-end-7 text-2xs font-bold text-right">Hits Taken</p>
      <p className="col-start-8 col-end-9 row-start-6 row-end-7 border border-black text-2xs font-bold flex justify-center items-center">1</p>
      <p className="col-start-9 col-end-10 row-start-6 row-end-7 border border-black text-2xs font-bold flex justify-center items-center">2</p>
      <p className="col-start-10 col-end-11 row-start-6 row-end-7 border border-black text-2xs font-bold flex justify-center items-center">3</p>
      <p className="col-start-11 col-end-12 row-start-6 row-end-7 border border-black text-2xs font-bold flex justify-center items-center">4</p>
      <p className="col-start-12 col-end-13 row-start-6 row-end-7 border border-black text-2xs font-bold flex justify-center items-center">5</p>
      <p className="col-start-13 col-end-15 row-start-6 row-end-7 border border-black text-2xs font-bold flex justify-center items-center">6</p>
      <p className="col-start-1 col-end-7 row-start-7 row-end-8 text-2xs font-bold text-right">Consciousness #</p>
      <p className="col-start-8 col-end-9 row-start-7 row-end-8 border border-black text-2xs font-bold text-center -mt-[1px]">3</p>
      <p className="col-start-9 col-end-10 row-start-7 row-end-8 border border-black text-2xs font-bold text-center -mt-[1px]">5</p>
      <p className="col-start-10 col-end-11 row-start-7 row-end-8 border border-black text-2xs font-bold text-center -mt-[1px]">7</p>
      <p className="col-start-11 col-end-12 row-start-7 row-end-8 border border-black text-2xs font-bold text-center -mt-[1px]">10</p>
      <p className="col-start-12 col-end-13 row-start-7 row-end-8 border border-black text-2xs font-bold text-center -mt-[1px]">11</p>
      <p className="col-start-13 col-end-15 row-start-7 row-end-8 border border-black text-2xs font-bold text-center -mt-[1px]">Dead</p>
    </div>
  );
};