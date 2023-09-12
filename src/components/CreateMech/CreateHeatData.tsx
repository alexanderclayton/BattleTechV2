//import//
import { useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { BiCircle } from "react-icons/bi";
import { GoPlusCircle } from "react-icons/go";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { IHeatData } from "../../types/types";

interface CreateHeatDataProps {
  id: string;
  mechInfo: IHeatData[]
}

export const CreateHeatData: React.FC<CreateHeatDataProps> = ({ id, mechInfo }) => {
  const [heatSinksA, setHeatSinksA] = useState<number>(mechInfo[0].heatSinks || 0);

  const addHeatSink = () => {
    setHeatSinksA((prevHeatSinksA) => {
      const newHeatSinksA = prevHeatSinksA + 1;
      saveHeatData(newHeatSinksA)
      return newHeatSinksA
    });
  };

  const subtractHeatSink = () => {
    if (heatSinksA > 0) {
      setHeatSinksA((prevHeatSinksA) => {
        const newHeatSinksA = prevHeatSinksA - 1;
        saveHeatData(newHeatSinksA)
        return newHeatSinksA;
      });
    }
  };

  const heatSinksCircle = [];

  for (let i = 0; i < heatSinksA; i++) {
    heatSinksCircle.push(<BiCircle key={`heatSinkA-${i}`} />);
  }

  const saveHeatData = async (heatSinkNumber: number) => {
    try {
      await updateDoc(doc(db, "mechs", id), {
        heatSinks: heatSinkNumber,
      });
    } catch (error) {
      console.error("error saving data");
    }
  };

  return (
    <div className="grid grid-cols-16 grid-rows-22 w-full h-full">
      <p className="col-start-1 col-end-8 row-start-1 row-end-3 bg-black text-white text-sm text-center z-10 rounded-full pt-[2px]">
        HEAT DATA
      </p>
      <div className="col-start-1 col-end-17 row-start-1 row-end-23" />
      <span className="col-start-1 col-end-17 row-start-2 row-end-23 border-2 border-black rounded-lg" />
      <p className="col-start-2 col-end-4 row-start-3 row-end-5 text-2xs">
        Heat Level*
      </p>
      <p className="col-start-3 col-end-5 row-start-5 row-end-6 text-2xs">30</p>
      <p className="col-start-3 col-end-5 row-start-6 row-end-7 text-2xs">28</p>
      <p className="col-start-3 col-end-5 row-start-7 row-end-8 text-2xs">26</p>
      <p className="col-start-3 col-end-5 row-start-8 row-end-9 text-2xs">25</p>
      <p className="col-start-3 col-end-5 row-start-9 row-end-10 text-2xs">
        24
      </p>
      <p className="col-start-3 col-end-5 row-start-10 row-end-11 text-2xs">
        23
      </p>
      <p className="col-start-3 col-end-5 row-start-11 row-end-12 text-2xs">
        22
      </p>
      <p className="col-start-3 col-end-5 row-start-12 row-end-13 text-2xs">
        20
      </p>
      <p className="col-start-3 col-end-5 row-start-13 row-end-14 text-2xs">
        19
      </p>
      <p className="col-start-3 col-end-5 row-start-14 row-end-15 text-2xs">
        18
      </p>
      <p className="col-start-3 col-end-5 row-start-15 row-end-16 text-2xs">
        17
      </p>
      <p className="col-start-3 col-end-5 row-start-16 row-end-17 text-2xs">
        15
      </p>
      <p className="col-start-3 col-end-5 row-start-17 row-end-18 text-2xs">
        14
      </p>
      <p className="col-start-3 col-end-5 row-start-18 row-end-19 text-2xs">
        13
      </p>
      <p className="col-start-3 col-end-5 row-start-19 row-end-20 text-2xs">
        10
      </p>
      <p className="col-start-3 col-end-5 row-start-20 row-end-21 text-2xs">
        8
      </p>
      <p className="col-start-3 col-end-5 row-start-21 row-end-22 text-2xs">
        5
      </p>
      <p className="col-start-4 col-end-12 row-start-4 row-end-5 text-2xs text-center">
        Effects
      </p>
      <p className="col-start-5 col-end-13 row-start-5 row-end-6 text-2xs">
        Shutdown
      </p>
      <p className="col-start-5 col-end-13 row-start-6 row-end-7 text-2xs">
        Ammo Exp. avoid on 8+
      </p>
      <p className="col-start-5 col-end-13 row-start-7 row-end-8 text-2xs">
        Sutdown, avoid on 10+
      </p>
      <p className="col-start-5 col-end-13 row-start-8 row-end-9 text-2xs">
        -5 Movement Points
      </p>
      <p className="col-start-5 col-end-13 row-start-9 row-end-10 text-2xs">
        +4 Modifier to Fire
      </p>
      <p className="col-start-5 col-end-13 row-start-10 row-end-11 text-2xs">
        Ammo Exp. avoid on 6+
      </p>
      <p className="col-start-5 col-end-13 row-start-11 row-end-12 text-2xs">
        Sutdown, avoid on 8+
      </p>
      <p className="col-start-5 col-end-13 row-start-12 row-end-13 text-2xs">
        -4 Movement Points
      </p>
      <p className="col-start-5 col-end-13 row-start-13 row-end-14 text-2xs">
        Ammo Exp. avoid on 4+
      </p>
      <p className="col-start-5 col-end-13 row-start-14 row-end-15 text-2xs">
        Shutdown, avoid on 6+
      </p>
      <p className="col-start-5 col-end-13 row-start-15 row-end-16 text-2xs">
        +3 Modifier to Fire
      </p>
      <p className="col-start-5 col-end-13 row-start-16 row-end-17 text-2xs">
        -3 Movement Points
      </p>
      <p className="col-start-5 col-end-13 row-start-17 row-end-18 text-2xs">
        Shutdown, avoid on 4+
      </p>
      <p className="col-start-5 col-end-13 row-start-18 row-end-19 text-2xs">
        +2 Modifier to Fire
      </p>
      <p className="col-start-5 col-end-13 row-start-19 row-end-20 text-2xs">
        -2 Movement Points
      </p>
      <p className="col-start-5 col-end-13 row-start-20 row-end-21 text-2xs">
        +1 Modifier to fire
      </p>
      <p className="col-start-5 col-end-13 row-start-21 row-end-22 text-2xs">
        -1 Movement Points
      </p>
      <GoPlusCircle
        onClick={addHeatSink}
        className="col-start-13 col-end-14 row-start-2 row-end-3 bg-green-400 rounded-full hover:cursor-pointer"
      />
      <AiOutlineMinusCircle
        onClick={subtractHeatSink}
        className="col-start-14 col-end-15 row-start-2 row-end-3 ml-2 bg-red-400 rounded-full hover:cursor-pointer"
      />
      <p className="col-start-9 col-end-17 row-start-3 row-end-4 text-xs text-end pr-2">
        Heat Sinks:
      </p>
      <p className="col-start-13 col-end-17 row-start-4 row-end-5 text-xs">
        {heatSinksA} [{heatSinksA * 2}]
      </p>
      <div
        id="heat-sinks"
        className="col-start-14 col-end-17 row-start-6 row-end-22 flex flex-col flex-wrap pr-2"
      >
        {heatSinksCircle}
      </div>
    </div>
  );
};
