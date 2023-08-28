//import//
import { GoDash } from "react-icons/go"
import MechDataImage from '../assets/MechDataImage.jpg'

export const MechData: React.FC = () => {
  return (
    <div className="grid grid-cols-22 grid-rows-30 w-full h-full">
        <p className="col-start-1 col-end-10 row-start-1 row-end-3 bg-black text-white text-sm text-center z-10 rounded-full pt-[2px]">
          'MECH DATA
        </p>
        <div className="col-start-1 col-end-23 row-start-1 row-end-31"></div>
        <span className="col-start-1 col-end-23 row-start-2 row-end-31 border-2 border-black rounded-record"></span>
        <div className="col-start-1 col-end-23 row-start-3 row-end-5 pl-1">
            <p className="font-bold text-xs">Type: Koshi (mist Lynx) A</p>
        </div>
        <p className="col-start-2 col-end-12 row-start-5 row-end-6 text-2xs font-bold">Movement Points:</p>
        <p className="col-start-2 col-end-7 row-start-6 row-end-7 text-2xs font-bold">Walking:</p>
        <p className="col-start-7 col-end-12 row-start-6 row-end-7 text-2xs">value</p>
        <p className="col-start-2 col-end-7 row-start-7 row-end-8 text-2xs font-bold">Running:</p>
        <p className="col-start-7 col-end-12 row-start-7 row-end-8 text-2xs">value</p>
        <p className="col-start-2 col-end-7 row-start-8 row-end-9 text-2xs font-bold">Jumping:</p>
        <p className="col-start-7 col-end-12 row-start-8 row-end-9 text-2xs">value</p>
        <p className="col-start-12 col-end-18 row-start-5 row-end-6 text-2xs font-bold">Tonnage:</p>
        <p className="col-start-18 col-end-23 row-start-5 row-end-6 text-2xs">value</p>
        <p className="col-start-12 col-end-18 row-start-6 row-end-7 text-2xs font-bold">Tech Base:</p>
        <p className="col-start-18 col-end-23 row-start-6 row-end-7 text-2xs">value</p>
        <p className="col-start-12 col-end-18 row-start-7 row-end-8 text-2xs font-bold">Rules Level:</p>
        <p className="col-start-18 col-end-23 row-start-7 row-end-8 text-2xs">value</p>
        <p className="col-start-12 col-end-18 row-start-8 row-end-9 text-2xs font-bold">Role:</p>
        <p className="col-start-18 col-end-23 row-start-8 row-end-9 text-2xs">value</p>
        <span className="col-start-1 col-end-23 row-start-9 border-t-2 border-black mx-1 mt-1"/>
        <div className="col-start-1 col-end-23 row-start-9 row-end-11 pl-1 pt-2">
            <p className="text-xs font-bold">Weapons & Equipment Inventory</p>
        </div>
        <p className="col-start-1 col-end-3 row-start-11 row-end-12 text-2xs font-bold text-right">Qty</p>
        <p className="col-start-2 col-end-3 row-start-13 row-end-14 text-2xs">1</p>
        <p className="col-start-2 col-end-3 row-start-14 row-end-15 text-2xs">2</p>
        <p className="col-start-2 col-end-3 row-start-15 row-end-16 text-2xs">1</p>
        <p className="col-start-2 col-end-3 row-start-16 row-end-17 text-2xs">2</p>
        <p className="col-start-2 col-end-3 row-start-17 row-end-18 text-2xs">1</p>
        <p className="col-start-2 col-end-3 row-start-18 row-end-19 text-2xs">1</p>
        <p className="col-start-2 col-end-3 row-start-19 row-end-20 text-2xs">1</p>
        <p className="col-start-3 col-end-5 row-start-11 row-end-12 text-2xs font-bold text-right">Type</p>
        <p className="col-start-3 col-end-10 row-start-13 row-end-14 text-2xs">Active Probe</p>
        <p className="col-start-3 col-end-10 row-start-14 row-end-15 text-2xs">Machine Gun</p>
        <p className="col-start-3 col-end-10 row-start-15 row-end-16 text-2xs">Flamer</p>
        <p className="col-start-3 col-end-10 row-start-16 row-end-17 text-2xs">Anti-Missile System</p>
        <p className="col-start-3 col-end-10 row-start-17 row-end-18 text-2xs">TAG</p>
        <p className="col-start-3 col-end-10 row-start-18 row-end-19 text-2xs">A-Pod</p>
        <p className="col-start-3 col-end-10 row-start-19 row-end-20 text-2xs">A-Pod</p>
        <p className="col-start-9 col-end-11 row-start-11 row-end-12 text-2xs font-bold text-center">Loc</p>
        <p className="col-start-9 col-end-11 row-start-13 row-end-14 text-2xs text-center">HD</p>
        <p className="col-start-9 col-end-11 row-start-14 row-end-15 text-2xs text-center">RA</p>
        <p className="col-start-9 col-end-11 row-start-15 row-end-16 text-2xs text-center">RA</p>
        <p className="col-start-9 col-end-11 row-start-16 row-end-17 text-2xs text-center">LA</p>
        <p className="col-start-9 col-end-11 row-start-17 row-end-18 text-2xs text-center">LA</p>
        <p className="col-start-9 col-end-11 row-start-18 row-end-19 text-2xs text-center">RL</p>
        <p className="col-start-9 col-end-11 row-start-19 row-end-20 text-2xs text-center">LL</p>
        <p className="col-start-11 col-end-12 row-start-11 row-end-12 text-2xs font-bold text-right">Ht</p>
        <p className="col-start-11 col-end-12 row-start-13 row-end-14 text-2xs text-center"><GoDash size={13} /></p>
        <p className="col-start-11 col-end-12 row-start-14 row-end-15 text-2xs text-center"><GoDash size={13} /></p>
        <p className="col-start-11 col-end-12 row-start-15 row-end-16 text-2xs text-center">3</p>
        <p className="col-start-11 col-end-12 row-start-16 row-end-17 text-2xs text-center">1</p>
        <p className="col-start-11 col-end-12 row-start-17 row-end-18 text-2xs text-center"><GoDash size={13} /></p>
        <p className="col-start-11 col-end-12 row-start-18 row-end-19 text-2xs text-center"><GoDash size={13} /></p>
        <p className="col-start-11 col-end-12 row-start-19 row-end-20 text-2xs text-center"><GoDash size={13} /></p>
        <p className="col-start-12 col-end-17 row-start-11 row-end-12 text-2xs font-bold pl-2">Dmg</p>
        <p className="col-start-12 col-end-17 row-start-13 row-end-14 text-2xs pl-1">[E]</p>
        <p className="col-start-12 col-end-17 row-start-14 row-end-15 text-2xs pl-1">2 [DB, AI]</p>
        <p className="col-start-12 col-end-17 row-start-15 row-end-16 text-2xs pl-1">2 [DE, H, AI]</p>
        <p className="col-start-12 col-end-17 row-start-16 row-end-17 text-2xs pl-1">[PD]</p>
        <p className="col-start-12 col-end-17 row-start-17 row-end-18 text-2xs pl-1">[E]</p>
        <p className="col-start-12 col-end-17 row-start-18 row-end-19 text-2xs pl-1">[PD, OS, AI]</p>
        <p className="col-start-12 col-end-17 row-start-19 row-end-20 text-2xs pl-1">[PD, OS, AI]</p>
        <p className="col-start-16 col-end-18 row-start-11 row-end-12 text-2xs font-bold text-right">Min</p>
        <p className="col-start-16 col-end-18 row-start-13 row-end-14 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-16 col-end-18 row-start-14 row-end-15 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-16 col-end-18 row-start-15 row-end-16 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-16 col-end-18 row-start-16 row-end-17 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-16 col-end-18 row-start-17 row-end-18 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-16 col-end-18 row-start-18 row-end-19 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-16 col-end-18 row-start-19 row-end-20 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-18 col-end-19 row-start-11 row-end-12 text-2xs font-bold pl-[2px]">Sht</p>
        <p className="col-start-18 col-end-19 row-start-13 row-end-14 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-18 col-end-19 row-start-14 row-end-15 text-2xs flex justify-center">1</p>
        <p className="col-start-18 col-end-19 row-start-15 row-end-16 text-2xs flex justify-center">1</p>
        <p className="col-start-18 col-end-19 row-start-16 row-end-17 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-18 col-end-19 row-start-17 row-end-18 text-2xs flex justify-center">5</p>
        <p className="col-start-18 col-end-19 row-start-18 row-end-19 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-18 col-end-19 row-start-19 row-end-20 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-19 col-end-21 row-start-11 row-end-12 text-2xs font-bold text-right">Med</p>
        <p className="col-start-19 col-end-21 row-start-13 row-end-14 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-19 col-end-21 row-start-14 row-end-15 text-2xs flex justify-center">2</p>
        <p className="col-start-19 col-end-21 row-start-15 row-end-16 text-2xs flex justify-center">2</p>
        <p className="col-start-19 col-end-21 row-start-16 row-end-17 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-19 col-end-21 row-start-17 row-end-18 text-2xs flex justify-center">9</p>
        <p className="col-start-19 col-end-21 row-start-18 row-end-19 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-19 col-end-21 row-start-19 row-end-20 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-21 col-end-23 row-start-11 row-end-12 text-2xs font-bold pl-1">Lng</p>
        <p className="col-start-21 col-end-22 row-start-13 row-end-14 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-21 col-end-22 row-start-14 row-end-15 text-2xs flex justify-center">3</p>
        <p className="col-start-21 col-end-22 row-start-15 row-end-16 text-2xs flex justify-center">3</p>
        <p className="col-start-21 col-end-22 row-start-16 row-end-17 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-21 col-end-22 row-start-17 row-end-18 text-2xs flex justify-center">15</p>
        <p className="col-start-21 col-end-22 row-start-18 row-end-19 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-21 col-end-22 row-start-19 row-end-20 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-2 col-end-23 row-start-25 row-end-26 text-2xs">Ammo: [AMS] 72, [Machine Gun] 100</p>
        <span className="col-start-1 col-end-23 row-start-27 border-b-2 border-black mx-1"/>
        <p className="col-start-3 col-end-16 row-start-28 row-end-29 text-xs"><span className="font-bold">BV:</span> 608</p>
        <img src={MechDataImage} alt="sailboat lookin' thing" className="col-start-18 col-end-20 row-start-28 row-end-30 mt-1"/>
    </div>
  )
}
