//import//
import { IMechData } from "../types/types"
import { GoDash } from "react-icons/go"
import MechDataImage from '../assets/MechDataImage.jpg'

interface ReadMechDataProps {
    mechData: IMechData[]
}

export const ReadMechData: React.FC<ReadMechDataProps> = ({ mechData }) => {
  const wei: any[] = []

  return (
    <div className="grid grid-cols-22 grid-rows-30 w-full h-full">
        <p className="col-start-1 col-end-10 row-start-1 row-end-3 bg-black text-white text-sm text-center z-10 rounded-full pt-[2px]">
          'MECH DATA
        </p>
        <div className="col-start-1 col-end-23 row-start-1 row-end-31"></div>
        <span className="col-start-1 col-end-23 row-start-2 row-end-31 border-2 border-black rounded-record"></span>
        <div className="col-start-1 col-end-23 row-start-3 row-end-5 pl-1">
            <p className="font-bold text-xs">Type: {mechData[0].type}</p>
        </div>
        <p className="col-start-2 col-end-12 row-start-5 row-end-6 text-2xs font-bold">Movement Points:</p>
        <p className="col-start-2 col-end-7 row-start-6 row-end-7 text-2xs font-bold">Walking:</p>
        <p className="col-start-7 col-end-12 row-start-6 row-end-7 text-2xs">{mechData[0].walking}</p>
        <p className="col-start-2 col-end-7 row-start-7 row-end-8 text-2xs font-bold">Running:</p>
        <p className="col-start-7 col-end-12 row-start-7 row-end-8 text-2xs">{mechData[0].running}</p>
        <p className="col-start-2 col-end-7 row-start-8 row-end-9 text-2xs font-bold">Jumping:</p>
        <p className="col-start-7 col-end-12 row-start-8 row-end-9 text-2xs">{mechData[0].jumping}</p>
        <p className="col-start-12 col-end-18 row-start-5 row-end-6 text-2xs font-bold">Tonnage:</p>
        <p className="col-start-18 col-end-23 row-start-5 row-end-6 text-2xs">{mechData[0].tonnage}</p>
        <p className="col-start-12 col-end-18 row-start-6 row-end-7 text-2xs font-bold">Tech Base:</p>
        <p className="col-start-18 col-end-23 row-start-6 row-end-7 text-2xs">{mechData[0].techBase}</p>
        <p className="col-start-12 col-end-18 row-start-7 row-end-8 text-2xs font-bold">Rules Level:</p>
        <p className="col-start-18 col-end-23 row-start-7 row-end-8 text-2xs">{mechData[0].rulesLevel}</p>
        <p className="col-start-12 col-end-18 row-start-8 row-end-9 text-2xs font-bold">Role:</p>
        <p className="col-start-18 col-end-23 row-start-8 row-end-9 text-2xs">{mechData[0].role}</p>
        <span className="col-start-1 col-end-23 row-start-9 border-t-2 border-black mx-1 mt-1"/>
        <div className="col-start-1 col-end-23 row-start-9 row-end-11 pl-1 pt-2">
            <p className="text-xs font-bold">Weapons & Equipment Inventory</p>
        </div>
        <p className="col-start-1 col-end-3 row-start-11 row-end-12 text-2xs font-bold text-right">Qty</p>
        <p className="col-start-2 col-end-3 row-start-13 row-end-14 text-2xs">{mechData[0].weiOne ? mechData[0].weiOne.qty : ""}</p>
        <p className="col-start-2 col-end-3 row-start-14 row-end-15 text-2xs">{mechData[0].weiTwo ? mechData[0].weiTwo.qty : ""}</p>
        <p className="col-start-2 col-end-3 row-start-15 row-end-16 text-2xs">{mechData[0].weiThree ? mechData[0].weiThree.qty : ""}</p>
        <p className="col-start-2 col-end-3 row-start-16 row-end-17 text-2xs">{mechData[0].weiFour ? mechData[0].weiFour.qty : ""}</p>
        <p className="col-start-2 col-end-3 row-start-17 row-end-18 text-2xs">{mechData[0].weiFive ? mechData[0].weiFive.qty : ""}</p>
        <p className="col-start-2 col-end-3 row-start-18 row-end-19 text-2xs">{mechData[0].weiSix ? mechData[0].weiSix.qty : ""}</p>
        <p className="col-start-2 col-end-3 row-start-19 row-end-20 text-2xs">{mechData[0].weiSeven ? mechData[0].weiSeven.qty : ""}</p>
        <p className="col-start-3 col-end-5 row-start-11 row-end-12 text-2xs font-bold text-right">Type</p>
        <p className="col-start-3 col-end-10 row-start-13 row-end-14 text-2xs">{mechData[0].weiOne ? mechData[0].weiOne.type : ""}</p>
        <p className="col-start-3 col-end-10 row-start-14 row-end-15 text-2xs">{mechData[0].weiTwo ? mechData[0].weiTwo.type : ""}</p>
        <p className="col-start-3 col-end-10 row-start-15 row-end-16 text-2xs">{mechData[0].weiThree ? mechData[0].weiThree.type : ""}</p>
        <p className="col-start-3 col-end-10 row-start-16 row-end-17 text-2xs">{mechData[0].weiFour ? mechData[0].weiFour.type : ""}</p>
        <p className="col-start-3 col-end-10 row-start-17 row-end-18 text-2xs">{mechData[0].weiFive ? mechData[0].weiFive.type : ""}</p>
        <p className="col-start-3 col-end-10 row-start-18 row-end-19 text-2xs">{mechData[0].weiSix ? mechData[0].weiSix.type : ""}</p>
        <p className="col-start-3 col-end-10 row-start-19 row-end-20 text-2xs">{mechData[0].weiSeven ? mechData[0].weiSeven.type : ""}</p>
        <p className="col-start-9 col-end-11 row-start-11 row-end-12 text-2xs font-bold text-center">Loc</p>
        <p className="col-start-9 col-end-11 row-start-13 row-end-14 text-2xs text-center">{mechData[0].weiOne ? mechData[0].weiOne.loc : ""}</p>
        <p className="col-start-9 col-end-11 row-start-14 row-end-15 text-2xs text-center">{mechData[0].weiTwo ? mechData[0].weiTwo.loc : ""}</p>
        <p className="col-start-9 col-end-11 row-start-15 row-end-16 text-2xs text-center">{mechData[0].weiThree ? mechData[0].weiThree.loc : ""}</p>
        <p className="col-start-9 col-end-11 row-start-16 row-end-17 text-2xs text-center">{mechData[0].weiFour ? mechData[0].weiFour.loc : ""}</p>
        <p className="col-start-9 col-end-11 row-start-17 row-end-18 text-2xs text-center">{mechData[0].weiFive ? mechData[0].weiFive.loc : ""}</p>
        <p className="col-start-9 col-end-11 row-start-18 row-end-19 text-2xs text-center">{mechData[0].weiSix ? mechData[0].weiSix.loc : ""}</p>
        <p className="col-start-9 col-end-11 row-start-19 row-end-20 text-2xs text-center">{mechData[0].weiSeven ? mechData[0].weiSeven.loc : ""}</p>
        <p className="col-start-11 col-end-12 row-start-11 row-end-12 text-2xs font-bold text-right">Ht</p>
        <p className="col-start-11 col-end-12 row-start-13 row-end-14 text-2xs text-center">{mechData[0].weiOne !== null && mechData[0].weiOne !== undefined ? (mechData[0].weiOne.ht === 0 ? <GoDash size={13} /> : mechData[0].weiOne.ht) : ""}</p>
        <p className="col-start-11 col-end-12 row-start-14 row-end-15 text-2xs text-center">{mechData[0].weiTwo !== null && mechData[0].weiTwo !== undefined ? (mechData[0].weiTwo.ht === 0 ? <GoDash size={13} /> : mechData[0].weiTwo.ht) : ""}</p>
        <p className="col-start-11 col-end-12 row-start-15 row-end-16 text-2xs text-center">{mechData[0].weiThree !== null && mechData[0].weiThree !== undefined ? (mechData[0].weiThree.ht === 0 ? <GoDash size={13} /> : mechData[0].weiThree.ht) : ""}</p>
        <p className="col-start-11 col-end-12 row-start-16 row-end-17 text-2xs text-center">{mechData[0].weiFour !== null && mechData[0].weiFour !== undefined ? (mechData[0].weiFour.ht === 0 ? <GoDash size={13} /> : mechData[0].weiFour.ht) : ""}</p>
        <p className="col-start-11 col-end-12 row-start-17 row-end-18 text-2xs text-center">{mechData[0].weiFive !== null && mechData[0].weiFive !== undefined ? (mechData[0].weiFive.ht === 0 ? <GoDash size={13} /> : mechData[0].weiFive.ht) : ""}</p>
        <p className="col-start-11 col-end-12 row-start-18 row-end-19 text-2xs text-center">{mechData[0].weiSix !== null && mechData[0].weiSix !== undefined ? (mechData[0].weiSix.ht === 0 ? <GoDash size={13} /> : mechData[0].weiSix.ht) : ""}</p>
        <p className="col-start-11 col-end-12 row-start-19 row-end-20 text-2xs text-center">{mechData[0].weiSeven !== null && mechData[0].weiSeven !== undefined ? (mechData[0].weiSeven.ht === 0 ? <GoDash size={13} /> : mechData[0].weiSeven.ht) : ""}</p>
        <p className="col-start-12 col-end-17 row-start-11 row-end-12 text-2xs font-bold pl-2">Dmg</p>
        <p className="col-start-12 col-end-17 row-start-13 row-end-14 text-2xs pl-1">{mechData[0].weiOne ? mechData[0].weiOne.dmg : ""}</p>
        <p className="col-start-12 col-end-17 row-start-14 row-end-15 text-2xs pl-1">{mechData[0].weiTwo ? mechData[0].weiTwo.dmg : ""}</p>
        <p className="col-start-12 col-end-17 row-start-15 row-end-16 text-2xs pl-1">{mechData[0].weiThree ? mechData[0].weiThree.dmg : ""}</p>
        <p className="col-start-12 col-end-17 row-start-16 row-end-17 text-2xs pl-1">{mechData[0].weiFour ? mechData[0].weiFour.dmg : ""}</p>
        <p className="col-start-12 col-end-17 row-start-17 row-end-18 text-2xs pl-1">{mechData[0].weiFive ? mechData[0].weiFive.dmg : ""}</p>
        <p className="col-start-12 col-end-17 row-start-18 row-end-19 text-2xs pl-1">{mechData[0].weiSix ? mechData[0].weiSix.dmg : ""}</p>
        <p className="col-start-12 col-end-17 row-start-19 row-end-20 text-2xs pl-1">{mechData[0].weiSeven ? mechData[0].weiSeven.dmg : ""}</p>
        <p className="col-start-16 col-end-18 row-start-11 row-end-12 text-2xs font-bold text-right">Min</p>
        <p className="col-start-16 col-end-18 row-start-13 row-end-14 text-2xs flex justify-center">{mechData[0].weiOne !== null && mechData[0].weiOne !== undefined ? (mechData[0].weiOne.min === 0 ? <GoDash size={13} /> : mechData[0].weiOne.min) : ""}</p>
        <p className="col-start-16 col-end-18 row-start-14 row-end-15 text-2xs flex justify-center">{mechData[0].weiTwo !== null && mechData[0].weiTwo !== undefined ? (mechData[0].weiTwo.min === 0 ? <GoDash size={13} /> : mechData[0].weiTwo.min) : ""}</p>
        <p className="col-start-16 col-end-18 row-start-15 row-end-16 text-2xs flex justify-center">{mechData[0].weiThree !== null && mechData[0].weiThree !== undefined ? (mechData[0].weiThree.min === 0 ? <GoDash size={13} /> : mechData[0].weiThree.min) : ""}</p>
        <p className="col-start-16 col-end-18 row-start-16 row-end-17 text-2xs flex justify-center">{mechData[0].weiFour !== null && mechData[0].weiFour !== undefined ? (mechData[0].weiFour.min === 0 ? <GoDash size={13} /> : mechData[0].weiFour.min) : ""}</p>
        <p className="col-start-16 col-end-18 row-start-17 row-end-18 text-2xs flex justify-center">{mechData[0].weiFive !== null && mechData[0].weiFive !== undefined ? (mechData[0].weiFive.min === 0 ? <GoDash size={13} /> : mechData[0].weiFive.min) : ""}</p>
        <p className="col-start-16 col-end-18 row-start-18 row-end-19 text-2xs flex justify-center">{mechData[0].weiSix !== null && mechData[0].weiSix !== undefined ? (mechData[0].weiSix.min === 0 ? <GoDash size={13} /> : mechData[0].weiSix.min) : ""}</p>
        <p className="col-start-16 col-end-18 row-start-19 row-end-20 text-2xs flex justify-center">{mechData[0].weiSeven !== null && mechData[0].weiSeven !== undefined ? (mechData[0].weiSeven.min === 0 ? <GoDash size={13} /> : mechData[0].weiSeven.min) : ""}</p>
        <p className="col-start-18 col-end-19 row-start-11 row-end-12 text-2xs font-bold pl-[2px]">Sht</p>
        <p className="col-start-18 col-end-19 row-start-13 row-end-14 text-2xs flex justify-center">{mechData[0].weiOne !== null && mechData[0].weiOne !== undefined ? (mechData[0].weiOne.sht === 0 ? <GoDash size={13} /> : mechData[0].weiOne.sht) : ""}</p>
        <p className="col-start-18 col-end-19 row-start-14 row-end-15 text-2xs flex justify-center">{mechData[0].weiTwo !== null && mechData[0].weiTwo !== undefined ? (mechData[0].weiTwo.sht === 0 ? <GoDash size={13} /> : mechData[0].weiTwo.sht) : ""}</p>
        <p className="col-start-18 col-end-19 row-start-15 row-end-16 text-2xs flex justify-center">{mechData[0].weiThree !== null && mechData[0].weiThree !== undefined ? (mechData[0].weiThree.sht === 0 ? <GoDash size={13} /> : mechData[0].weiThree.sht) : ""}</p>
        <p className="col-start-18 col-end-19 row-start-16 row-end-17 text-2xs flex justify-center">{mechData[0].weiFour !== null && mechData[0].weiFour !== undefined ? (mechData[0].weiFour.sht === 0 ? <GoDash size={13} /> : mechData[0].weiFour.sht) : ""}</p>
        <p className="col-start-18 col-end-19 row-start-17 row-end-18 text-2xs flex justify-center">{mechData[0].weiFive !== null && mechData[0].weiFive !== undefined ? (mechData[0].weiFive.sht === 0 ? <GoDash size={13} /> : mechData[0].weiFive.sht) : ""}</p>
        <p className="col-start-18 col-end-19 row-start-18 row-end-19 text-2xs flex justify-center">{mechData[0].weiSix !== null && mechData[0].weiSix !== undefined ? (mechData[0].weiSix.sht === 0 ? <GoDash size={13} /> : mechData[0].weiSix.sht) : ""}</p>
        <p className="col-start-18 col-end-19 row-start-19 row-end-20 text-2xs flex justify-center">{mechData[0].weiSeven !== null && mechData[0].weiSeven !== undefined ? (mechData[0].weiSeven.sht === 0 ? <GoDash size={13} /> : mechData[0].weiSeven.sht) : ""}</p>
        <p className="col-start-19 col-end-21 row-start-11 row-end-12 text-2xs font-bold text-right">Med</p>
        <p className="col-start-19 col-end-21 row-start-13 row-end-14 text-2xs flex justify-center">{mechData[0].weiOne !== null && mechData[0].weiOne !== undefined ? (mechData[0].weiOne.med === 0 ? <GoDash size={13} /> : mechData[0].weiOne.med) : ""}</p>
        <p className="col-start-19 col-end-21 row-start-14 row-end-15 text-2xs flex justify-center">{mechData[0].weiTwo !== null && mechData[0].weiTwo !== undefined ? (mechData[0].weiTwo.med === 0 ? <GoDash size={13} /> : mechData[0].weiTwo.med) : ""}</p>
        <p className="col-start-19 col-end-21 row-start-15 row-end-16 text-2xs flex justify-center">{mechData[0].weiThree !== null && mechData[0].weiThree !== undefined ? (mechData[0].weiThree.med === 0 ? <GoDash size={13} /> : mechData[0].weiThree.med) : ""}</p>
        <p className="col-start-19 col-end-21 row-start-16 row-end-17 text-2xs flex justify-center">{mechData[0].weiFour !== null && mechData[0].weiFour !== undefined ? (mechData[0].weiFour.med === 0 ? <GoDash size={13} /> : mechData[0].weiFour.med) : ""}</p>
        <p className="col-start-19 col-end-21 row-start-17 row-end-18 text-2xs flex justify-center">{mechData[0].weiFive !== null && mechData[0].weiFive !== undefined ? (mechData[0].weiFive.med === 0 ? <GoDash size={13} /> : mechData[0].weiFive.med) : ""}</p>
        <p className="col-start-19 col-end-21 row-start-18 row-end-19 text-2xs flex justify-center">{mechData[0].weiSix !== null && mechData[0].weiSix !== undefined ? (mechData[0].weiSix.med === 0 ? <GoDash size={13} /> : mechData[0].weiSix.med) : ""}</p>
        <p className="col-start-19 col-end-21 row-start-19 row-end-20 text-2xs flex justify-center">{mechData[0].weiSeven !== null && mechData[0].weiSeven !== undefined ? (mechData[0].weiSeven.med === 0 ? <GoDash size={13} /> : mechData[0].weiSeven.med) : ""}</p>
        <p className="col-start-21 col-end-23 row-start-11 row-end-12 text-2xs font-bold pl-1">Lng</p>
        <p className="col-start-21 col-end-22 row-start-13 row-end-14 text-2xs flex justify-center">{mechData[0].weiOne !== null && mechData[0].weiOne !== undefined ? (mechData[0].weiOne.lng === 0 ? <GoDash size={13} /> : mechData[0].weiOne.lng) : ""}</p>
        <p className="col-start-21 col-end-22 row-start-14 row-end-15 text-2xs flex justify-center">{mechData[0].weiTwo !== null && mechData[0].weiTwo !== undefined ? (mechData[0].weiTwo.lng === 0 ? <GoDash size={13} /> : mechData[0].weiTwo.lng) : ""}</p>
        <p className="col-start-21 col-end-22 row-start-15 row-end-16 text-2xs flex justify-center">{mechData[0].weiThree !== null && mechData[0].weiThree !== undefined ? (mechData[0].weiThree.lng === 0 ? <GoDash size={13} /> : mechData[0].weiThree.lng) : ""}</p>
        <p className="col-start-21 col-end-22 row-start-16 row-end-17 text-2xs flex justify-center">{mechData[0].weiFour !== null && mechData[0].weiFour !== undefined ? (mechData[0].weiFour.lng === 0 ? <GoDash size={13} /> : mechData[0].weiFour.lng) : ""}</p>
        <p className="col-start-21 col-end-22 row-start-17 row-end-18 text-2xs flex justify-center">{mechData[0].weiFive !== null && mechData[0].weiFive !== undefined ? (mechData[0].weiFive.lng === 0 ? <GoDash size={13} /> : mechData[0].weiFive.lng) : ""}</p>
        <p className="col-start-21 col-end-22 row-start-18 row-end-19 text-2xs flex justify-center">{mechData[0].weiSix !== null && mechData[0].weiSix !== undefined ? (mechData[0].weiSix.lng === 0 ? <GoDash size={13} /> : mechData[0].weiSix.lng) : ""}</p>
        <p className="col-start-21 col-end-22 row-start-19 row-end-20 text-2xs flex justify-center">{mechData[0].weiSeven !== null && mechData[0].weiSeven !== undefined ? (mechData[0].weiSeven.lng === 0 ? <GoDash size={13} /> : mechData[0].weiSeven.lng) : ""}</p>
        <p className="col-start-2 col-end-23 row-start-25 row-end-26 text-2xs">Ammo: {mechData[0].ammo}</p>
        <span className="col-start-1 col-end-23 row-start-27 border-b-2 border-black mx-1"/>
        <p className="col-start-3 col-end-16 row-start-28 row-end-29 text-xs"><span className="font-bold">BV:</span> {mechData[0].bv}</p>
        <img src={MechDataImage} alt="sailboat lookin' thing" className="col-start-18 col-end-20 row-start-28 row-end-30 mt-1"/>
    </div>
  )
}