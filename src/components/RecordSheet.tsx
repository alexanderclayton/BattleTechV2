//import//
import Logo from "../assets/BattletechBlackLogo.jpg";
import Atlas from "../assets/AtlasCardImage.png";
import ArmorDiagram from "../assets/ArmorDiagram.jpg";
import InternalStructureDiagram from "../assets/InternalStructureDiagram.jpg";
import HeatScale from "../assets/HeatScale.jpg";

export const RecordSheet: React.FC = () => {
  return (
    <div className="w-[955px] max-h-[1237px] p-2 grid grid-cols-68 grid-rows-94 border">
      <div className="col-start-5 col-end-45 row-start-3 row-end-11">
        <img src={Logo} alt="" className="h-full" />
      </div>
      <p className="col-start-6 col-end-16 row-start-11 row-end-13 bg-black text-white text-sm text-center z-10 rounded-full pt-[2px]">
        'MECH DATA
      </p>
      <div className="col-start-6 col-end-28 row-start-11 row-end-41"></div>
      <span className="col-start-6 col-end-28 row-start-12 row-end-41 border-2 border-black rounded-record"></span>
      {/* Start Mech Data Content */}
      <div className="col-start-6 col-end-28 row-start-13 row-end-15 pl-1">
        <p className="font-bold text-xs">Type: Koshi (mist Lynx) A</p>
      </div>
      <p className="text-2xs col-start-7 col-end-17 row-start-15 row-end-16 font-bold">
        Movement Points:
      </p>
      <p className="text-2xs col-start-7 col-end-12 row-start-16 row-end-17 font-bold">
        Walking:
      </p>
      <p className="text-2xs col-start-12 col-end-17 row-start-16 row-end-17">
        value
      </p>
      <p className="text-2xs col-start-7 col-end-12 row-start-17 row-end-18 font-bold">
        Running:
      </p>
      <p className="text-2xs col-start-12 col-end-17 row-start-17 row-end-18">
        value
      </p>
      <p className="text-2xs col-start-7 col-end-12 row-start-18 row-end-19 font-bold">
        Jumping:
      </p>
      <p className="text-2xs col-start-12 col-end-17 row-start-18 row-end-19">
        value
      </p>
      <p className="text-2xs col-start-17 col-end-23 row-start-15 row-end-16 font-bold">
        Tonnage:
      </p>
      <p className="text-2xs col-start-23 col-end-28 row-start-15 row-end-16">
        value
      </p>
      <p className="text-2xs col-start-17 col-end-23 row-start-16 row-end-17 font-bold">
        Tech Base:
      </p>
      <p className="text-2xs col-start-23 col-end-28 row-start-16 row-end-17">
        value
      </p>
      <p className="text-2xs col-start-17 col-end-23 row-start-17 row-end-18 font-bold">
        Rules Level:
      </p>
      <p className="text-2xs col-start-23 col-end-28 row-start-17 row-end-18">
        value
      </p>
      <p className="text-2xs col-start-17 col-end-23 row-start-18 row-end-19 font-bold">
        Role:
      </p>
      <p className="text-2xs col-start-23 col-end-28 row-start-18 row-end-19">
        value
      </p>
      <span className="col-start-6 col-end-28 border-t-2 border-black row-start-19 row-end-19 mx-1 mt-1"></span>
      <div className="col-start-6 col-end-28 row-start-19 row-end-21 pl-1 pt-2">
        <p className="font-bold text-xs">Weapons & Equipment Inventory</p>
      </div>
      <p className="col-start-6 col-end-7 row-start-21 row-end-22 text-2xs font-bold pl-2">
        Qty
      </p>
      <p className="col-start-8 col-end-10 row-start-21 row-end-22 text-2xs font-bold pl-2">
        Type
      </p>
      <p className="col-start-13 col-end-15 row-start-21 row-end-22 text-2xs font-bold">
        Loc
      </p>
      <p className="col-start-15 col-end-16 row-start-21 row-end-22 text-2xs font-bold">
        Ht
      </p>
      <p className="col-start-16 col-end-18 row-start-21 row-end-22 text-2xs font-bold pl-2">
        Dmg
      </p>
      <p className="col-start-20 col-end-22 row-start-21 row-end-22 text-2xs font-bold">
        Min
      </p>
      <p className="col-start-22 col-end-24 row-start-21 row-end-22 text-2xs font-bold">
        Sht
      </p>
      <p className="col-start-24 col-end-26 row-start-21 row-end-22 text-2xs font-bold">
        Med
      </p>
      <p className="col-start-26 col-end-28 row-start-21 row-end-22 text-2xs font-bold">
        Lng
      </p>

      {/* End Mech Data Content */}
      <p className="col-start-29 col-end-40 row-start-11 row-end-13 bg-black text-white text-sm text-center z-10 rounded-full pt-[2px]">
        WARRIOR DATA
      </p>
      <div className="col-start-29 col-end-45 row-start-11 row-end-20"></div>
      <span className="col-start-29 col-end-45 row-start-12 row-end-20 border-2 border-black rounded-record"></span>
      {/* Start Warrior Data Content */}
      <p className="col-start-30 col-end-32 row-start-13 row-end-14 text-2xs font-bold">
        Name:
      </p>
      <p className="col-start-33 col-end-44 row-start-13 row-end-14 border-b border-black text-2xs">
        value
      </p>
      <p className="col-start-30 col-end-35 row-start-14 row-end-15 text-2xs font-bold">
        Gunnery Skill:
      </p>
      <p className="col-start-35 col-end-37 row-start-14 row-end-15 text-2xs border-b border-black"></p>
      <p className="col-start-37 col-end-42 row-start-14 row-end-15 text-2xs font-bold text-right">
        Piloting Skill:
      </p>
      <p className="col-start-42 col-end-44 row-start-14 row-end-15 text-2xs border-b border-black"></p>
      <p className="col-start-30 col-end-35 row-start-16 row-end-17 text-2xs font-bold text-right">Hits Taken</p>
      <p className="col-start-36 col-end-37 row-start-16 row-end-17 border border-black text-2xs font-bold text-center pb-3">1</p>
      <p className="col-start-37 col-end-38 row-start-16 row-end-17 border border-black text-2xs font-bold text-center pb-3">2</p>
      <p className="col-start-38 col-end-39 row-start-16 row-end-17 border border-black text-2xs font-bold text-center pb-3">3</p>
      <p className="col-start-39 col-end-40 row-start-16 row-end-17 border border-black text-2xs font-bold text-center pb-3">4</p>
      <p className="col-start-40 col-end-41 row-start-16 row-end-17 border border-black text-2xs font-bold text-center pb-3">5</p>
      <p className="col-start-41 col-end-43 row-start-16 row-end-17 border border-black text-2xs font-bold text-center pb-3">6</p>
      <p className="col-start-29 col-end-35 row-start-17 row-end-18 text-2xs font-bold text-right">Consciousness #</p>
      <p className="col-start-36 col-end-37 row-start-17 row-end-18 border border-black text-2xs font-bold text-center pb-3">3</p>
      <p className="col-start-37 col-end-38 row-start-17 row-end-18 border border-black text-2xs font-bold text-center pb-3">5</p>
      <p className="col-start-38 col-end-39 row-start-17 row-end-18 border border-black text-2xs font-bold text-center pb-3">7</p>
      <p className="col-start-39 col-end-40 row-start-17 row-end-18 border border-black text-2xs font-bold text-center pb-3">10</p>
      <p className="col-start-40 col-end-41 row-start-17 row-end-18 border border-black text-2xs font-bold text-center pb-3">11</p>
      <p className="col-start-41 col-end-43 row-start-17 row-end-18 border border-black text-2xs font-bold text-center pb-3">Dead</p>
      {/* End Warrior Data Content */}
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
      <p className="col-start-6 col-end-19 row-start-42 row-end-44 bg-black text-white text-sm text-center z-10 rounded-full pt-[2px]">
        CRITICAL HIT TABLE
      </p>
      <div className="col-start-6 col-end-44 row-start-42 row-end-89"></div>
      <span className="col-start-6 col-end-44 row-start-43 row-end-89 border-2 border-black rounded-record"></span>
      {/* Start Critical Hit Table Content */}
      <p className="col-start-9 col-end-20 row-start-45 row-end-46 text-sm"><span className="font-bold">Left Arm</span> [CASE]</p>
      <p className="col-start-8 col-end-20 row-start-47 row-end-48 text-xs font-bold">1. Shoulder</p>
      <p className="col-start-8 col-end-20 row-start-48 row-end-49 text-xs font-bold">1. Shoulder</p>
      <p className="col-start-8 col-end-20 row-start-49 row-end-50 text-xs font-bold">1. Shoulder</p>
      <p className="col-start-8 col-end-20 row-start-50 row-end-51 text-xs font-bold">1. Shoulder</p>
      <p className="col-start-8 col-end-20 row-start-51 row-end-52 text-xs font-bold">1. Shoulder</p>
      <p className="col-start-8 col-end-20 row-start-52 row-end-53 text-xs font-bold">1. Shoulder</p>
      <p className="col-start-22 col-end-30 row-start-45 row-end-46 text-sm font-bold">Head</p>
      <p className="col-start-32 col-end-44 row-start-45 row-end-46 text-sm "><span className="font-bold">Right Arm</span> [CASE]</p>
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
      <img
        src={HeatScale}
        alt=""
        className="col-start-62 col-end-65 row-start-42 row-end-89 border"
      />
    </div>
  );
};
