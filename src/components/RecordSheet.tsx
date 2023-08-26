//import//
import Logo from "../assets/BattletechBlackLogo.jpg";
import MechDataImage from "../assets/MechDataImage.jpg";
import Atlas from "../assets/AtlasCardImage.png";
import ArmorDiagram from "../assets/ArmorDiagram.jpg";
import DamageTransferDiagram from "../assets/DamageTransferDiagram.jpg";
import InternalStructureDiagram from "../assets/InternalStructureDiagram.jpg";
import HeatScale from "../assets/HeatScale.jpg";
import { BiCircle, BiCopyright } from "react-icons/bi";
import { GoDash } from "react-icons/go";

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
      <p className="col-start-7 col-end-8 row-start-23 row-end-24 text-2xs">
        1
      </p>
      <p className="col-start-7 col-end-8 row-start-24 row-end-25 text-2xs">
        2
      </p>
      <p className="col-start-7 col-end-8 row-start-25 row-end-26 text-2xs">
        1
      </p>
      <p className="col-start-7 col-end-8 row-start-26 row-end-27 text-2xs">
        2
      </p>
      <p className="col-start-7 col-end-8 row-start-27 row-end-28 text-2xs">
        1
      </p>
      <p className="col-start-7 col-end-8 row-start-28 row-end-29 text-2xs">
        1
      </p>
      <p className="col-start-7 col-end-8 row-start-29 row-end-30 text-2xs">
        1
      </p>
      <p className="col-start-8 col-end-10 row-start-21 row-end-22 text-2xs font-bold pl-2">
        Type
      </p>
      <p className="col-start-8 col-end-13 row-start-23 row-end-24 text-2xs">
        Active Probe
      </p>
      <p className="col-start-8 col-end-13 row-start-24 row-end-25 text-2xs">
        Machine Gun
      </p>
      <p className="col-start-8 col-end-13 row-start-25 row-end-26 text-2xs">
        Flamer
      </p>
      <p className="col-start-8 col-end-15 row-start-26 row-end-27 text-2xs">
        Anti-Missile System
      </p>
      <p className="col-start-8 col-end-13 row-start-27 row-end-28 text-2xs">
        TAG
      </p>
      <p className="col-start-8 col-end-13 row-start-28 row-end-29 text-2xs">
        A-Pod
      </p>
      <p className="col-start-8 col-end-13 row-start-29 row-end-30 text-2xs">
        A-Pod
      </p>
      <p className="col-start-14 col-end-16 row-start-21 row-end-22 text-2xs font-bold text-center">
        Loc
      </p>
      <p className="col-start-14 col-end-16 row-start-23 row-end-24 text-2xs text-center">
        HD
      </p>
      <p className="col-start-14 col-end-16 row-start-24 row-end-25 text-2xs text-center">
        RA
      </p>
      <p className="col-start-14 col-end-16 row-start-25 row-end-26 text-2xs text-center">
        RA
      </p>
      <p className="col-start-14 col-end-16 row-start-26 row-end-27 text-2xs text-center">
        LA
      </p>
      <p className="col-start-14 col-end-16 row-start-27 row-end-28 text-2xs text-center">
        LA
      </p>
      <p className="col-start-14 col-end-16 row-start-28 row-end-29 text-2xs text-center">
        RL
      </p>
      <p className="col-start-14 col-end-16 row-start-29 row-end-30 text-2xs text-center">
        LL
      </p>
      <p className="col-start-16 col-end-17 row-start-21 row-end-22 text-2xs font-bold text-right">
        Ht
      </p>
      <p className="col-start-16 col-end-17 row-start-23 row-end-24 text-2xs text-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-16 col-end-17 row-start-24 row-end-25 text-2xs text-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-16 col-end-17 row-start-25 row-end-26 text-2xs text-center">
        3
      </p>
      <p className="col-start-16 col-end-17 row-start-26 row-end-27 text-2xs text-center">
        1
      </p>
      <p className="col-start-16 col-end-17 row-start-27 row-end-28 text-2xs text-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-16 col-end-17 row-start-28 row-end-29 text-2xs text-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-16 col-end-17 row-start-29 row-end-30 text-2xs text-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-17 col-end-18 row-start-21 row-end-22 text-2xs font-bold pl-2">
        Dmg
      </p>
      <p className="col-start-17 col-end-22 row-start-23 row-end-24 text-2xs pl-1">
        [E]
      </p>
      <p className="col-start-17 col-end-22 row-start-24 row-end-25 text-2xs pl-1">
        2 [DB, AI]
      </p>
      <p className="col-start-17 col-end-22 row-start-25 row-end-26 text-2xs pl-1">
        2 [DE, H, AI]
      </p>
      <p className="col-start-17 col-end-22 row-start-26 row-end-27 text-2xs pl-1">
        [PD]
      </p>
      <p className="col-start-17 col-end-22 row-start-27 row-end-28 text-2xs pl-1">
        [E]
      </p>
      <p className="col-start-17 col-end-22 row-start-28 row-end-29 text-2xs pl-1">
        [PD, OS, AI]
      </p>
      <p className="col-start-17 col-end-22 row-start-29 row-end-30 text-2xs pl-1">
        [PD, OS, AI]
      </p>
      <p className="col-start-21 col-end-23 row-start-21 row-end-22 text-2xs font-bold text-right">
        Min
      </p>
      <p className="col-start-21 col-end-23 row-start-23 row-end-24 text-2xs flex justify-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-21 col-end-23 row-start-24 row-end-25 text-2xs flex justify-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-21 col-end-23 row-start-25 row-end-26 text-2xs flex justify-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-21 col-end-23 row-start-26 row-end-27 text-2xs flex justify-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-21 col-end-23 row-start-27 row-end-28 text-2xs flex justify-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-21 col-end-23 row-start-28 row-end-29 text-2xs flex justify-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-21 col-end-23 row-start-29 row-end-30 text-2xs flex justify-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-23 col-end-24 row-start-21 row-end-22 text-2xs font-bold pl-[2px]">
        Sht
      </p>
      <p className="col-start-23 col-end-24 row-start-23 row-end-24 text-2xs flex justify-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-23 col-end-24 row-start-24 row-end-25 text-2xs flex justify-center">
        1
      </p>
      <p className="col-start-23 col-end-24 row-start-25 row-end-26 text-2xs flex justify-center">
        1
      </p>
      <p className="col-start-23 col-end-24 row-start-26 row-end-27 text-2xs flex justify-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-23 col-end-24 row-start-27 row-end-28 text-2xs flex justify-center">
        5
      </p>
      <p className="col-start-23 col-end-24 row-start-28 row-end-29 text-2xs flex justify-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-23 col-end-24 row-start-29 row-end-30 text-2xs flex justify-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-24 col-end-26 row-start-21 row-end-22 text-2xs font-bold text-right">
        Med
      </p>
      <p className="col-start-24 col-end-26 row-start-23 row-end-24 text-2xs flex justify-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-24 col-end-26 row-start-24 row-end-25 text-2xs flex justify-center">
        2
      </p>
      <p className="col-start-24 col-end-26 row-start-25 row-end-26 text-2xs flex justify-center">
        2
      </p>
      <p className="col-start-24 col-end-26 row-start-26 row-end-27 text-2xs flex justify-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-24 col-end-26 row-start-27 row-end-28 text-2xs flex justify-center">
        9
      </p>
      <p className="col-start-24 col-end-26 row-start-28 row-end-29 text-2xs flex justify-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-24 col-end-26 row-start-29 row-end-30 text-2xs flex justify-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-26 col-end-28 row-start-21 row-end-22 text-2xs font-bold pl-1">
        Lng
      </p>
      <p className="col-start-26 col-end-27 row-start-23 row-end-24 text-2xs flex justify-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-26 col-end-27 row-start-24 row-end-25 text-2xs flex justify-center">
        3
      </p>
      <p className="col-start-26 col-end-27 row-start-25 row-end-26 text-2xs flex justify-center">
        3
      </p>
      <p className="col-start-26 col-end-27 row-start-26 row-end-27 text-2xs flex justify-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-26 col-end-27 row-start-27 row-end-28 text-2xs flex justify-center">
        15
      </p>
      <p className="col-start-26 col-end-27 row-start-28 row-end-29 text-2xs flex justify-center">
        <GoDash size={13} />
      </p>
      <p className="col-start-26 col-end-27 row-start-29 row-end-30 text-2xs flex justify-center">
        <GoDash size={13} />
      </p>

      <p className="col-start-7 col-end-28 row-start-35 row-end-36 text-2xs">
        Ammo: [AMS] 72, [Machine Gun] 100
      </p>

      <span className="col-start-6 col-end-28 row-start-37 border-black border-b-2 mx-1"></span>
      <p className="col-start-8 col-end-21 row-start-38 row-end-39 text-xs">
        <span className="font-bold">BV:</span> 608
      </p>
      <img
        src={MechDataImage}
        alt=""
        className="col-start-23 col-end-25 row-start-38 row-end-40 mt-1"
      />

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
      <p className="col-start-33 col-end-44 row-start-13 row-end-14 border-b border-black text-2xs"></p>
      <p className="col-start-30 col-end-35 row-start-14 row-end-15 text-2xs font-bold">
        Gunnery Skill:
      </p>
      <p className="col-start-35 col-end-37 row-start-14 row-end-15 text-2xs border-b border-black"></p>
      <p className="col-start-37 col-end-42 row-start-14 row-end-15 text-2xs font-bold text-right">
        Piloting Skill:
      </p>
      <p className="col-start-42 col-end-44 row-start-14 row-end-15 text-2xs border-b border-black"></p>
      <p className="col-start-30 col-end-35 row-start-16 row-end-17 text-2xs font-bold text-right">
        Hits Taken
      </p>
      <p className="col-start-36 col-end-37 row-start-16 row-end-17 border border-black text-2xs font-bold text-center pb-3">
        1
      </p>
      <p className="col-start-37 col-end-38 row-start-16 row-end-17 border border-black text-2xs font-bold text-center pb-3">
        2
      </p>
      <p className="col-start-38 col-end-39 row-start-16 row-end-17 border border-black text-2xs font-bold text-center pb-3">
        3
      </p>
      <p className="col-start-39 col-end-40 row-start-16 row-end-17 border border-black text-2xs font-bold text-center pb-3">
        4
      </p>
      <p className="col-start-40 col-end-41 row-start-16 row-end-17 border border-black text-2xs font-bold text-center pb-3">
        5
      </p>
      <p className="col-start-41 col-end-43 row-start-16 row-end-17 border border-black text-2xs font-bold text-center pb-3">
        6
      </p>
      <p className="col-start-29 col-end-35 row-start-17 row-end-18 text-2xs font-bold text-right">
        Consciousness #
      </p>
      <p className="col-start-36 col-end-37 row-start-17 row-end-18 border border-black text-2xs font-bold text-center pb-3">
        3
      </p>
      <p className="col-start-37 col-end-38 row-start-17 row-end-18 border border-black text-2xs font-bold text-center pb-3">
        5
      </p>
      <p className="col-start-38 col-end-39 row-start-17 row-end-18 border border-black text-2xs font-bold text-center pb-3">
        7
      </p>
      <p className="col-start-39 col-end-40 row-start-17 row-end-18 border border-black text-2xs font-bold text-center pb-3">
        10
      </p>
      <p className="col-start-40 col-end-41 row-start-17 row-end-18 border border-black text-2xs font-bold text-center pb-3">
        11
      </p>
      <p className="col-start-41 col-end-43 row-start-17 row-end-18 border border-black text-2xs font-bold text-center pb-3">
        Dead
      </p>
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
      <p className="col-start-10 col-end-20 row-start-45 row-end-46 text-sm">
        <span className="font-bold">Left Arm</span> [CASE]
      </p>
      <p className="col-start-7 col-end-8 row-start-49 row-end-51 text-sm text-right font-bold">
        1-3
      </p>
      <p className="col-start-9 col-end-20 row-start-47 row-end-48 text-2xs font-bold">
        1. Shoulder
      </p>
      <p className="col-start-9 col-end-20 row-start-48 row-end-49 text-2xs font-bold">
        2. Upper Arm Actuator
      </p>
      <p className="col-start-9 col-end-20 row-start-49 row-end-50 text-2xs font-bold">
        3. Lower Arm Actuator
      </p>
      <p className="col-start-9 col-end-20 row-start-50 row-end-51 text-2xs font-bold">
        4. Hand Actuator
      </p>
      <p className="col-start-9 col-end-20 row-start-51 row-end-52 text-2xs font-bold">
        5. LRM 10
      </p>
      <p className="col-start-9 col-end-20 row-start-52 row-end-53 text-2xs font-bold">
        6. Ammo [LRM 10] 12
      </p>
      <p className="col-start-7 col-end-8 row-start-56 row-end-58 text-sm text-right font-bold">
        4-6
      </p>
      <p className="col-start-9 col-end-20 row-start-54 row-end-55 text-2xs">
        <span className="font-bold">1.</span> Endo Steel
      </p>
      <p className="col-start-9 col-end-20 row-start-55 row-end-56 text-2xs">
        <span className="font-bold">2.</span> Ferro-Fibrous
      </p>
      <p className="col-start-9 col-end-20 row-start-56 row-end-57 text-2xs">
        <span className="font-bold">3.</span> Roll Again
      </p>
      <p className="col-start-9 col-end-20 row-start-57 row-end-58 text-2xs">
        <span className="font-bold">4.</span> Roll Again
      </p>
      <p className="col-start-9 col-end-20 row-start-58 row-end-58 text-2xs">
        <span className="font-bold">5.</span> Roll Again
      </p>
      <p className="col-start-9 col-end-20 row-start-59 row-end-60 text-2xs">
        <span className="font-bold">6.</span> Roll Again
      </p>
      <p className="col-start-10 col-end-20 row-start-62 row-end-63 text-sm font-bold">
        Left Torso
      </p>
      <p className="col-start-7 col-end-8 row-start-66 row-end-68 text-sm font-bold">
        1-3
      </p>
      <p className="col-start-9 col-end-20 row-start-64 row-end-65 text-2xs font-bold">
        1. XL Fusion Engine
      </p>
      <p className="col-start-9 col-end-20 row-start-65 row-end-66 text-2xs font-bold">
        2. XL Fusion Engine
      </p>
      <p className="col-start-9 col-end-20 row-start-66 row-end-67 text-2xs font-bold">
        3. Double Heat Sink
      </p>
      <p className="col-start-9 col-end-20 row-start-67 row-end-67 text-2xs font-bold">
        4. Double Heat Sink
      </p>
      <p className="col-start-9 col-end-20 row-start-68 row-end-68 text-2xs font-bold">
        5. Double Heat Sink
      </p>
      <p className="col-start-9 col-end-20 row-start-69 row-end-70 text-2xs font-bold">
        6. Double Heat Sink
      </p>
      <p className="col-start-7 col-end-8 row-start-73 row-end-75 text-sm font-bold">
        4-6
      </p>
      <p className="col-start-9 col-end-20 row-start-71 row-end-72 text-2xs">
        <span className="font-bold">1. Jump Jet</span>
      </p>
      <p className="col-start-9 col-end-20 row-start-72 row-end-73 text-2xs">
        <span className="font-bold">2. Jump Jet</span>
      </p>
      <p className="col-start-9 col-end-20 row-start-73 row-end-74 text-2xs">
        <span className="font-bold">3. Jump Jet</span>
      </p>
      <p className="col-start-9 col-end-20 row-start-74 row-end-75 text-2xs">
        <span className="font-bold">4.</span> Endo Steel
      </p>
      <p className="col-start-9 col-end-20 row-start-75 row-end-76 text-2xs">
        <span className="font-bold">5.</span> Ferro-Fibrous
      </p>
      <p className="col-start-9 col-end-20 row-start-76 row-end-77 text-2xs">
        <span className="font-bold">6.</span> Ferro-Fibrous
      </p>
      <p className="col-start-10 col-end-20 row-start-79 row-end-80 text-sm font-bold">
        Left Leg
      </p>
      <p className="col-start-9 col-end-20 row-start-81 row-end-82 text-2xs">
        <span className="font-bold">1. Hip</span>
      </p>
      <p className="col-start-9 col-end-20 row-start-82 row-end-83 text-2xs">
        <span className="font-bold">2. Upper Leg Actuator</span>
      </p>
      <p className="col-start-9 col-end-20 row-start-83 row-end-84 text-2xs">
        <span className="font-bold">3. Lower Leg Actuator</span>
      </p>
      <p className="col-start-9 col-end-20 row-start-84 row-end-85 text-2xs">
        <span className="font-bold">4. Foot Actuator</span>
      </p>
      <p className="col-start-9 col-end-20 row-start-85 row-end-86 text-2xs">
        <span className="font-bold">5.</span> Endo Steel
      </p>
      <p className="col-start-9 col-end-20 row-start-86 row-end-87 text-2xs">
        <span className="font-bold">6.</span> Roll Again
      </p>

      <p className="col-start-22 col-end-30 row-start-45 row-end-46 text-sm font-bold">
        Head
      </p>
      <p className="col-start-21 col-end-30 row-start-47 row-end-48 text-2xs font-bold">
        1. Life Support
      </p>
      <p className="col-start-21 col-end-30 row-start-48 row-end-49 text-2xs font-bold">
        2. Sensors
      </p>
      <p className="col-start-21 col-end-30 row-start-49 row-end-50 text-2xs font-bold">
        3. Cockpit
      </p>
      <p className="col-start-21 col-end-30 row-start-50 row-end-51 text-2xs font-bold">
        4. Active Probe
      </p>
      <p className="col-start-21 col-end-30 row-start-51 row-end-52 text-2xs font-bold">
        5. Sensors
      </p>
      <p className="col-start-21 col-end-30 row-start-52 row-end-53 text-2xs font-bold">
        6. Life Support
      </p>
      <p className="col-start-22 col-end-30 row-start-55 row-end-56 text-sm font-bold">
        Center Torso
      </p>
      <p className="col-start-19 col-end-21 row-start-59 row-end-61 text-sm font-bold">
        1-3
      </p>
      <p className="col-start-21 col-end-30 row-start-57 row-end-58 text-2xs font-bold">
        1. XL Fusion Engine
      </p>
      <p className="col-start-21 col-end-30 row-start-58 row-end-59 text-2xs font-bold">
        2. XL Fusion Engine
      </p>
      <p className="col-start-21 col-end-30 row-start-59 row-end-60 text-2xs font-bold">
        3. XL Fusion Engine
      </p>
      <p className="col-start-21 col-end-30 row-start-60 row-end-61 text-2xs font-bold">
        4. Gyro
      </p>
      <p className="col-start-21 col-end-30 row-start-61 row-end-62 text-2xs font-bold">
        5. Gyro
      </p>
      <p className="col-start-21 col-end-30 row-start-62 row-end-63 text-2xs font-bold">
        6. Gyro
      </p>
      <p className="col-start-19 col-end-21 row-start-66 row-end-68 text-sm font-bold">
        4-6
      </p>
      <p className="col-start-21 col-end-30 row-start-64 row-end-65 text-2xs">
        <span className="font-bold">1. Gyro</span>
      </p>
      <p className="col-start-21 col-end-30 row-start-65 row-end-66 text-2xs">
        <span className="font-bold">2. XL Fusion Engine</span>
      </p>
      <p className="col-start-21 col-end-30 row-start-66 row-end-67 text-2xs">
        <span className="font-bold">3. XL Fusion Engine</span>
      </p>
      <p className="col-start-21 col-end-30 row-start-67 row-end-68 text-2xs">
        <span className="font-bold">4. XL Fusion Engine</span>
      </p>
      <p className="col-start-21 col-end-30 row-start-68 row-end-69 text-2xs">
        <span className="font-bold">5.</span> Endo Steel
      </p>
      <p className="col-start-21 col-end-30 row-start-69 row-end-70 text-2xs">
        <span className="font-bold">6.</span> Ferro-Fibrous
      </p>
      <div className="col-start-20 col-end-31 row-start-71 row-end-77 border-2 border-black rounded-lg"></div>
      <p className="col-start-20 col-end-26 row-start-72 row-end-73 text-xs font-bold text-right">
        Engine Hits
      </p>
      <p className="col-start-20 col-end-26 row-start-73 row-end-74 text-xs font-bold text-right">
        Gyro Hits
      </p>
      <p className="col-start-20 col-end-26 row-start-74 row-end-75 text-xs font-bold text-right">
        Sensor Hits
      </p>
      <p className="col-start-20 col-end-26 row-start-75 row-end-76 text-xs font-bold text-right">
        Life Support
      </p>
      <p className="col-start-27 col-end-31 row-start-72 row-end-73 text-xs font-bold text-right flex pt-[3px]">
        <BiCircle size={13} />
        <BiCircle size={13} />
        <BiCircle size={13} />
      </p>
      <p className="col-start-27 col-end-31 row-start-73 row-end-74 text-xs font-bold text-right flex pt-[3px]">
        <BiCircle size={13} />
        <BiCircle size={13} />
      </p>
      <p className="col-start-27 col-end-31 row-start-74 row-end-75 text-xs font-bold text-right flex pt-[3px]">
        <BiCircle size={13} />
        <BiCircle size={13} />
      </p>
      <p className="col-start-27 col-end-31 row-start-75 row-end-76 text-xs font-bold text-right flex pt-[3px]">
        <BiCircle size={13} />
      </p>
      <img
        src={DamageTransferDiagram}
        alt=""
        className="col-start-20 col-end-31 row-start-78 row-end-89"
      />
      <p className="col-start-34 col-end-44 row-start-45 row-end-46 text-sm">
        <span className="font-bold">Right Arm</span> [CASE]
      </p>
      <p className="col-start-31 col-end-33 row-start-49 row-end-51 text-sm font-bold">
        1-3
      </p>
      <p className="col-start-33 col-end-44 row-start-47 row-end-48 text-2xs font-bold">
        1. Shoulder
      </p>
      <p className="col-start-33 col-end-44 row-start-48 row-end-49 text-2xs font-bold">
        2. Upper Arm Actuator
      </p>
      <p className="col-start-33 col-end-44 row-start-49 row-end-50 text-2xs font-bold">
        3. Lower Arm Actuator
      </p>
      <p className="col-start-33 col-end-44 row-start-50 row-end-51 text-2xs font-bold">
        4. Hand Actuator
      </p>
      <p className="col-start-33 col-end-44 row-start-51 row-end-52 text-2xs font-bold">
        5. Stream SRM 4
      </p>
      <p className="col-start-33 col-end-44 row-start-52 row-end-53 text-2xs font-bold">
        6. Machine Gun
      </p>
      <p className="col-start-31 col-end-33 row-start-56 row-end-58 text-sm font-bold">
        4-6
      </p>
      <p className="col-start-33 col-end-44 row-start-54 row-end-55 text-2xs">
        <span className="font-bold">1. Machine Gun</span>
      </p>
      <p className="col-start-33 col-end-44 row-start-55 row-end-56 text-2xs">
        <span className="font-bold">2. Ammo [Streak SRM 4] 25</span>
      </p>
      <p className="col-start-33 col-end-44 row-start-56 row-end-57 text-2xs">
        <span className="font-bold">3. Ammo [Machine Gun] 100</span>
      </p>
      <p className="col-start-33 col-end-44 row-start-57 row-end-58 text-2xs">
        <span className="font-bold">4.</span> Endo Steel
      </p>
      <p className="col-start-33 col-end-44 row-start-58 row-end-58 text-2xs">
        <span className="font-bold">5.</span> Ferro-Fibrous
      </p>
      <p className="col-start-33 col-end-44 row-start-59 row-end-59 text-2xs">
        <span className="font-bold">6.</span> Roll Again
      </p>
      <p className="col-start-34 col-end-44 row-start-62 row-end-63 text-sm font-bold">
        Right Torso
      </p>
      <p className="col-start-31 col-end-33 row-start-66 row-end-68 text-sm font-bold">
        1-3
      </p>
      <p className="col-start-33 col-end-44 row-start-64 row-end-65 text-2xs font-bold">
        1. XL Fusion Engine
      </p>
      <p className="col-start-33 col-end-44 row-start-65 row-end-66 text-2xs font-bold">
        2. XL Fusion Engine
      </p>
      <p className="col-start-33 col-end-44 row-start-66 row-end-67 text-2xs font-bold">
        3. Double Heat Sink
      </p>
      <p className="col-start-33 col-end-44 row-start-67 row-end-68 text-2xs font-bold">
        4. Double Heat Sink
      </p>
      <p className="col-start-33 col-end-44 row-start-68 row-end-69 text-2xs font-bold">
        5. Jump Jet
      </p>
      <p className="col-start-33 col-end-44 row-start-69 row-end-70 text-2xs font-bold">
        6. Jump Jet
      </p>
      <p className="col-start-33 col-end-44 row-start-71 row-end-72 text-2xs">
        <span className="font-bold">1. Jump Jet</span>
      </p>
      <p className="col-start-33 col-end-44 row-start-72 row-end-73 text-2xs">
        <span className="font-bold">2.</span> Endo Steel
      </p>
      <p className="col-start-33 col-end-44 row-start-73 row-end-74 text-2xs">
        <span className="font-bold">3.</span> Ferro-Fibrous
      </p>
      <p className="col-start-33 col-end-44 row-start-74 row-end-75 text-2xs">
        <span className="font-bold">4.</span> Ferro-Fibrous
      </p>
      <p className="col-start-33 col-end-44 row-start-75 row-end-76 text-2xs">
        <span className="font-bold">5.</span> Roll Again
      </p>
      <p className="col-start-33 col-end-44 row-start-76 row-end-77 text-2xs">
        <span className="font-bold">6.</span> Roll Again
      </p>
      <p className="col-start-34 col-end-44 row-start-79 row-end-80 text-sm font-bold">
        Right Leg
      </p>
      <p className="col-start-33 col-end-44 row-start-81 row-end-82 text-2xs">
        <span className="font-bold">1. Hip</span>
      </p>
      <p className="col-start-33 col-end-44 row-start-82 row-end-83 text-2xs">
        <span className="font-bold">2. Upper Leg Actuator</span>
      </p>
      <p className="col-start-33 col-end-44 row-start-83 row-end-84 text-2xs">
        <span className="font-bold">3. Lower Leg Actuator</span>
      </p>
      <p className="col-start-33 col-end-44 row-start-84 row-end-85 text-2xs">
        <span className="font-bold">4. Foot Actuator</span>
      </p>
      <p className="col-start-33 col-end-44 row-start-85 row-end-86 text-2xs">
        <span className="font-bold">5.</span> Endo Steel
      </p>
      <p className="col-start-33 col-end-44 row-start-86 row-end-87 text-2xs">
        <span className="font-bold">6.</span> Roll Again
      </p>
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
      <p className="col-start-7 col-end-64 row-start-89 row-end-90 text-2xs font-bold pt-1 flex items-center flex-wrap justify-center"><BiCopyright /> 2019 The Topps Company, Inc. Classic BattleTech, BattleTech, 'Mech and BattleMech are trademarks of The Topps Company, Inc. All right reserved.</p>
      <p className="col-start-7 col-end-64 row-start-90 row-end-91 text-2xs font-bold pt-1 flex items-center flex-wrap justify-center">Catalyst Game Labs and the Catalyst Game Labs logo are trademarks of InMediaRes Production, LLC. Permission to photocopy for personal use.</p>
    </div>
  );
};
