//import
import { useState } from "react";
import { UpdateMechData } from "./UpdateMechData";
import Logo from "../assets/BattletechBlackLogo.jpg";
import MechDataImage from "../assets/MechDataImage.jpg";
import Atlas from "../assets/AtlasCardImage.png";
import ArmorDiagram from "../assets/ArmorDiagram.jpg";
import DamageTransferDiagram from "../assets/DamageTransferDiagram.jpg";
import InternalStructureDiagram from "../assets/InternalStructureDiagram.jpg";
import HeatScale from "../assets/HeatScale.jpg";
import { BiCircle, BiCopyright } from "react-icons/bi";
import { GoDash } from "react-icons/go";
import { RecordSheet } from "./RecordSheet";
import { UpdateWarriorData } from "./UpdateWarriorData";
import { UpdateCriticalHitTable } from "./UpdateCriticalHitTable";

export const UpdateRecordSheet: React.FC = () => {
  return (
    <div className="flex justify-between w-full">
      <div>
        <RecordSheet />
      </div>
      <div className="w-[955px] max-h-[1237px] p-2 grid grid-cols-68 grid-rows-94 border">
        <div className="col-start-5 col-end-45 row-start-3 row-end-11">
          <img src={Logo} alt="" className="h-full" />
        </div>
        <div className="col-start-6 col-end-28 row-start-11 row-end-41">
          <UpdateMechData />
        </div>
        <div className="col-start-29 col-end-45 row-start-11 row-end-20">
            <UpdateWarriorData />
        </div>
        <img
          src={Atlas}
          alt=""
          className="col-start-29 col-end-45 row-start-21 row-end-42"
        />
        <p className="col-start-49 col-end-60 row-start-3 row-end-5 bg-black text-white text-sm text-center z-10 rounded-full pt-[2px]">
          ARMOR DIAGRAM
        </p>
        <img
          src={ArmorDiagram}
          alt=""
          className="col-start-45 col-end-65 row-start-5 row-end-42 w-[95%]"
        />
        {/* End */}
        <div className="col-start-6 col-end-44 row-start-42 row-end-89">
            <UpdateCriticalHitTable />
        </div>
        
        {/* End Critical Hit Table Content */}
        <p className="col-start-45 col-end-61 row-start-42 row-end-44 bg-black text-white text-sm text-center z-10 rounded-full pt-[2px]">
          INTERNAL STRUCTURE DIAGRAM
        </p>
        <img
          src={InternalStructureDiagram}
          alt=""
          className="col-start-45 col-end-61 row-start-46 row-end-67"
        />
        <p className="col-start-45 col-end-52 row-start-67 row-end-69 bg-black text-white text-sm text-center z-10 rounded-full pt-[2px]">
          HEAT DATA
        </p>
        <div className="col-start-45 col-end-61 row-start-67 row-end-89"></div>
        <span className="col-start-45 col-end-61 row-start-68 row-end-89 border-2 border-black rounded-record"></span>
        {/* Start Heat Data Content */}
        <p className="col-start-46 col-end-47 row-start-69 row-end-71 text-2xs">
          {" "}
          Heat Level*
        </p>
        <p className="col-start-47 col-end-48 row-start-71 row-end-72 text-2xs text-center">
          30
        </p>
        <p className="col-start-47 col-end-48 row-start-72 row-end-73 text-2xs text-center">
          28
        </p>
        <p className="col-start-47 col-end-48 row-start-73 row-end-74 text-2xs text-center">
          26
        </p>
        <p className="col-start-47 col-end-48 row-start-74 row-end-75 text-2xs text-center">
          25
        </p>
        <p className="col-start-47 col-end-48 row-start-75 row-end-76 text-2xs text-center">
          24
        </p>
        <p className="col-start-47 col-end-48 row-start-76 row-end-77 text-2xs text-center">
          23
        </p>
        <p className="col-start-47 col-end-48 row-start-77 row-end-78 text-2xs text-center">
          22
        </p>
        <p className="col-start-47 col-end-48 row-start-78 row-end-79 text-2xs text-center">
          20
        </p>
        <p className="col-start-47 col-end-48 row-start-79 row-end-80 text-2xs text-center">
          19
        </p>
        <p className="col-start-47 col-end-48 row-start-80 row-end-81 text-2xs text-center">
          18
        </p>
        <p className="col-start-47 col-end-48 row-start-81 row-end-82 text-2xs text-center">
          17
        </p>
        <p className="col-start-47 col-end-48 row-start-82 row-end-83 text-2xs text-center">
          15
        </p>
        <p className="col-start-47 col-end-48 row-start-83 row-end-84 text-2xs text-center">
          14
        </p>
        <p className="col-start-47 col-end-48 row-start-84 row-end-85 text-2xs text-center">
          13
        </p>
        <p className="col-start-47 col-end-48 row-start-85 row-end-86 text-2xs text-center">
          10
        </p>
        <p className="col-start-47 col-end-48 row-start-86 row-end-87 text-2xs text-center">
          8
        </p>
        <p className="col-start-47 col-end-48 row-start-87 row-end-88 text-2xs text-center">
          5
        </p>
        <p className="col-start-48 col-end-56 row-start-70 row-end-71 text-2xs text-center">
          Effects
        </p>
        <p className="col-start-49 col-end-57 row-start-71 row-end-72 text-2xs">
          Shutdown
        </p>
        <p className="col-start-49 col-end-57 row-start-72 row-end-73 text-2xs">
          Ammo Exp. avoid on 8+
        </p>
        <p className="col-start-49 col-end-57 row-start-73 row-end-74 text-2xs">
          Sutdown, avoid on 10+
        </p>
        <p className="col-start-49 col-end-57 row-start-74 row-end-75 text-2xs">
          -5 Movement Points
        </p>
        <p className="col-start-49 col-end-57 row-start-75 row-end-76 text-2xs">
          +4 Modifier to Fire
        </p>
        <p className="col-start-49 col-end-57 row-start-76 row-end-77 text-2xs">
          Ammo Exp. avoid on 6+
        </p>
        <p className="col-start-49 col-end-57 row-start-77 row-end-78 text-2xs">
          Sutdown, avoid on 8+
        </p>
        <p className="col-start-49 col-end-57 row-start-78 row-end-79 text-2xs">
          -4 Movement Points
        </p>
        <p className="col-start-49 col-end-57 row-start-79 row-end-80 text-2xs">
          Ammo Exp. avoid on 4+
        </p>
        <p className="col-start-49 col-end-57 row-start-80 row-end-81 text-2xs">
          Shutdown, avoid on 6+
        </p>
        <p className="col-start-49 col-end-57 row-start-81 row-end-82 text-2xs">
          +3 Modifier to Fire
        </p>
        <p className="col-start-49 col-end-57 row-start-82 row-end-83 text-2xs">
          -3 Movement Points
        </p>
        <p className="col-start-49 col-end-57 row-start-83 row-end-84 text-2xs">
          Shutdown, avoid on 4+
        </p>
        <p className="col-start-49 col-end-57 row-start-84 row-end-85 text-2xs">
          +2 Modifier to Fire
        </p>
        <p className="col-start-49 col-end-57 row-start-85 row-end-86 text-2xs">
          -2 Movement Points
        </p>
        <p className="col-start-49 col-end-57 row-start-86 row-end-87 text-2xs">
          +1 Modifier to fire
        </p>
        <p className="col-start-49 col-end-57 row-start-87 row-end-88 text-2xs">
          -1 Movement Points
        </p>
        <p className="col-start-53 col-end-61 row-start-69 row-end-70 text-xs">
          Double Heat Sinks:
        </p>
        <p className="col-start-57 col-end-61 row-start-70 row-end-71 text-xs">
          10 [20]
        </p>
        <div className="col-start-58 col-end-61 row-start-72 row-end-88">
          <BiCircle />
          <BiCircle />
          <BiCircle />
          <BiCircle />
          <BiCircle />
          <BiCircle />
          <BiCircle />
          <BiCircle />
          <BiCircle />
          <BiCircle />
        </div>

        {/* End Heat Data Content */}
        <img
          src={HeatScale}
          alt=""
          className="col-start-62 col-end-65 row-start-42 row-end-89 border"
        />
        <p className="col-start-7 col-end-64 row-start-89 row-end-90 text-2xs font-bold pt-1 flex items-center flex-wrap justify-center">
          <BiCopyright /> 2019 The Topps Company, Inc. Classic BattleTech,
          BattleTech, 'Mech and BattleMech are trademarks of The Topps Company,
          Inc. All right reserved.
        </p>
        <p className="col-start-7 col-end-64 row-start-90 row-end-91 text-2xs font-bold pt-1 flex items-center flex-wrap justify-center">
          Catalyst Game Labs and the Catalyst Game Labs logo are trademarks of
          InMediaRes Production, LLC. Permission to photocopy for personal use.
        </p>
      </div>
    </div>
  );
};
