//import//
import { IMechData } from "../../types/types"
import MechDataImage from '../../assets/MechDataImage.jpg'
import { ReadWeiRow } from "./ReadWeiRow"

interface ReadMechDataProps {
    mechData: IMechData[]
}

export const ReadMechData: React.FC<ReadMechDataProps> = ({ mechData }) => {

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
        <p className="col-start-3 col-end-5 row-start-11 row-end-12 text-2xs font-bold text-right">Type</p>
        <p className="col-start-9 col-end-11 row-start-11 row-end-12 text-2xs font-bold text-center">Loc</p>
        <p className="col-start-11 col-end-12 row-start-11 row-end-12 text-2xs font-bold text-right">Ht</p>    
        <p className="col-start-12 col-end-17 row-start-11 row-end-12 text-2xs font-bold pl-2">Dmg</p>
        <p className="col-start-16 col-end-18 row-start-11 row-end-12 text-2xs font-bold text-right">Min</p>
        <p className="col-start-18 col-end-19 row-start-11 row-end-12 text-2xs font-bold pl-[2px]">Sht</p>
        <p className="col-start-19 col-end-21 row-start-11 row-end-12 text-2xs font-bold text-right">Med</p>
        <p className="col-start-21 col-end-23 row-start-11 row-end-12 text-2xs font-bold pl-1">Lng</p>
        <div className="grid grid-cols-22 grid-rows-1 col-start-1 col-end-23 row-start-13 row-end-14">
          <ReadWeiRow wei={mechData[0].weiOne}/>
        </div>
        <div className="grid grid-cols-22 grid-rows-1 col-start-1 col-end-23 row-start-14 row-end-15">
          <ReadWeiRow wei={mechData[0].weiTwo}/>
        </div>
        <div className="grid grid-cols-22 grid-rows-1 col-start-1 col-end-23 row-start-15 row-end-16">
          <ReadWeiRow wei={mechData[0].weiThree}/>
        </div>
        <div className="grid grid-cols-22 grid-rows-1 col-start-1 col-end-23 row-start-16 row-end-17">
          <ReadWeiRow wei={mechData[0].weiFour}/>
        </div>
        <div className="grid grid-cols-22 grid-rows-1 col-start-1 col-end-23 row-start-17 row-end-18">
          <ReadWeiRow wei={mechData[0].weiFive}/>
        </div>
        <div className="grid grid-cols-22 grid-rows-1 col-start-1 col-end-23 row-start-18 row-end-19">
          <ReadWeiRow wei={mechData[0].weiSix}/>
        </div>
        <div className="grid grid-cols-22 grid-rows-1 col-start-1 col-end-23 row-start-19 row-end-20">
          <ReadWeiRow wei={mechData[0].weiSeven}/>
        </div>
        <div className="grid grid-cols-22 grid-rows-1 col-start-1 col-end-23 row-start-20 row-end-21">
          <ReadWeiRow wei={mechData[0].weiEight}/>
        </div>
        <p className="col-start-2 col-end-23 row-start-25 row-end-26 text-2xs">Ammo: {mechData[0].ammo}</p>
        <span className="col-start-1 col-end-23 row-start-27 border-b-2 border-black mx-1"/>
        <p className="col-start-3 col-end-16 row-start-28 row-end-29 text-xs"><span className="font-bold">BV:</span> {mechData[0].bv}</p>
        <img src={MechDataImage} alt="sailboat lookin' thing" className="col-start-18 col-end-20 row-start-28 row-end-30 mt-1"/>
    </div>
  )
}