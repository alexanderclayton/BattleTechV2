//import//
import { IMechData } from "../types/types"
import { GoDash } from "react-icons/go"
import MechDataImage from '../assets/MechDataImage.jpg'

interface ReadMechDataProps {
    mechData: IMechData[]
}

export const ReadMechData: React.FC<ReadMechDataProps> = ({ mechData }) => {
  let wei: (string | number)[] = []

  if (mechData[0].weaponsEquipmentInventory) {
    wei = mechData[0].weaponsEquipmentInventory
  }

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
        <p className="col-start-2 col-end-3 row-start-13 row-end-14 text-2xs">{wei[0] ? wei[0] : ""}</p>
        <p className="col-start-2 col-end-3 row-start-14 row-end-15 text-2xs">{wei[9] ? wei[9] : ""}</p>
        <p className="col-start-2 col-end-3 row-start-15 row-end-16 text-2xs">{wei[18] ? wei[18] : ""}</p>
        <p className="col-start-2 col-end-3 row-start-16 row-end-17 text-2xs">{wei[27] ? wei[27] : ""}</p>
        <p className="col-start-2 col-end-3 row-start-17 row-end-18 text-2xs">{wei[36] ? wei[36] : ""}</p>
        <p className="col-start-2 col-end-3 row-start-18 row-end-19 text-2xs">{wei[45] ? wei[45] : ""}</p>
        <p className="col-start-2 col-end-3 row-start-19 row-end-20 text-2xs">{wei[54] ? wei[54] : ""}</p>
        <p className="col-start-3 col-end-5 row-start-11 row-end-12 text-2xs font-bold text-right">Type</p>
        <p className="col-start-3 col-end-10 row-start-13 row-end-14 text-2xs">{wei[1] ? wei[1] : ""}</p>
        <p className="col-start-3 col-end-10 row-start-14 row-end-15 text-2xs">{wei[10] ? wei[10] : ""}</p>
        <p className="col-start-3 col-end-10 row-start-15 row-end-16 text-2xs">{wei[19] ? wei[19] : ""}</p>
        <p className="col-start-3 col-end-10 row-start-16 row-end-17 text-2xs">{wei[28] ? wei[28] : ""}</p>
        <p className="col-start-3 col-end-10 row-start-17 row-end-18 text-2xs">{wei[37] ? wei[37] : ""}</p>
        <p className="col-start-3 col-end-10 row-start-18 row-end-19 text-2xs">{wei[46] ? wei[46] : ""}</p>
        <p className="col-start-3 col-end-10 row-start-19 row-end-20 text-2xs">{wei[55] ? wei[55] : ""}</p>
        <p className="col-start-9 col-end-11 row-start-11 row-end-12 text-2xs font-bold text-center">Loc</p>
        <p className="col-start-9 col-end-11 row-start-13 row-end-14 text-2xs text-center">{wei[2] ? wei[2] : ""}</p>
        <p className="col-start-9 col-end-11 row-start-14 row-end-15 text-2xs text-center">{wei[11] ? wei[11] : ""}</p>
        <p className="col-start-9 col-end-11 row-start-15 row-end-16 text-2xs text-center">{wei[20] ? wei[20] : ""}</p>
        <p className="col-start-9 col-end-11 row-start-16 row-end-17 text-2xs text-center">{wei[29] ? wei[29] : ""}</p>
        <p className="col-start-9 col-end-11 row-start-17 row-end-18 text-2xs text-center">{wei[38] ? wei[38] : ""}</p>
        <p className="col-start-9 col-end-11 row-start-18 row-end-19 text-2xs text-center">{wei[47] ? wei[47] : ""}</p>
        <p className="col-start-9 col-end-11 row-start-19 row-end-20 text-2xs text-center">{wei[56] ? wei[56] : ""}</p>
        <p className="col-start-11 col-end-12 row-start-11 row-end-12 text-2xs font-bold text-right">Ht</p>
        <p className="col-start-11 col-end-12 row-start-13 row-end-14 text-2xs text-center">{wei[3] !== null && wei[3] !== undefined ? (wei[3] === 0 ? <GoDash size={13} /> : wei[3]) : ""}</p>
        <p className="col-start-11 col-end-12 row-start-14 row-end-15 text-2xs text-center">{wei[12] !== null && wei[12] !== undefined ? (wei[12] === 0 ? <GoDash size={13} /> : wei[12]) : ""}</p>
        <p className="col-start-11 col-end-12 row-start-15 row-end-16 text-2xs text-center">{wei[21] !== null && wei[21] !== undefined ? (wei[21] === 0 ? <GoDash size={13} /> : wei[21]) : ""}</p>
        <p className="col-start-11 col-end-12 row-start-16 row-end-17 text-2xs text-center">{wei[30] !== null && wei[30] !== undefined ? (wei[30] === 0 ? <GoDash size={13} /> : wei[30]) : ""}</p>
        <p className="col-start-11 col-end-12 row-start-17 row-end-18 text-2xs text-center">{wei[39] !== null && wei[39] !== undefined ? (wei[39] === 0 ? <GoDash size={13} /> : wei[39]) : ""}</p>
        <p className="col-start-11 col-end-12 row-start-18 row-end-19 text-2xs text-center">{wei[48] !== null && wei[48] !== undefined ? (wei[48] === 0 ? <GoDash size={13} /> : wei[48]) : ""}</p>
        <p className="col-start-11 col-end-12 row-start-19 row-end-20 text-2xs text-center">{wei[57] !== null && wei[57] !== undefined ? (wei[57] === 0 ? <GoDash size={13} /> : wei[57]) : ""}</p>
        <p className="col-start-12 col-end-17 row-start-11 row-end-12 text-2xs font-bold pl-2">Dmg</p>
        <p className="col-start-12 col-end-17 row-start-13 row-end-14 text-2xs pl-1">{wei[4] ? wei[4] : ""}</p>
        <p className="col-start-12 col-end-17 row-start-14 row-end-15 text-2xs pl-1">{wei[13] ? wei[13] : ""}</p>
        <p className="col-start-12 col-end-17 row-start-15 row-end-16 text-2xs pl-1">{wei[22] ? wei[22] : ""}</p>
        <p className="col-start-12 col-end-17 row-start-16 row-end-17 text-2xs pl-1">{wei[31] ? wei[31] : ""}</p>
        <p className="col-start-12 col-end-17 row-start-17 row-end-18 text-2xs pl-1">{wei[40] ? wei[40] : ""}</p>
        <p className="col-start-12 col-end-17 row-start-18 row-end-19 text-2xs pl-1">{wei[49] ? wei[49] : ""}</p>
        <p className="col-start-12 col-end-17 row-start-19 row-end-20 text-2xs pl-1">{wei[58] ? wei[58] : ""}</p>
        <p className="col-start-16 col-end-18 row-start-11 row-end-12 text-2xs font-bold text-right">Min</p>
        <p className="col-start-16 col-end-18 row-start-13 row-end-14 text-2xs flex justify-center">{wei[5] !== null && wei[5] !== undefined ? (wei[5] === 0 ? <GoDash size={13} /> : wei[5]) : ""}</p>
        <p className="col-start-16 col-end-18 row-start-14 row-end-15 text-2xs flex justify-center">{wei[14] !== null && wei[14] !== undefined ? (wei[14] === 0 ? <GoDash size={13} /> : wei[14]) : ""}</p>
        <p className="col-start-16 col-end-18 row-start-15 row-end-16 text-2xs flex justify-center">{wei[23] !== null && wei[23] !== undefined ? (wei[23] === 0 ? <GoDash size={13} /> : wei[23]) : ""}</p>
        <p className="col-start-16 col-end-18 row-start-16 row-end-17 text-2xs flex justify-center">{wei[32] !== null && wei[32] !== undefined ? (wei[32] === 0 ? <GoDash size={13} /> : wei[32]) : ""}</p>
        <p className="col-start-16 col-end-18 row-start-17 row-end-18 text-2xs flex justify-center">{wei[41] !== null && wei[41] !== undefined ? (wei[41] === 0 ? <GoDash size={13} /> : wei[41]) : ""}</p>
        <p className="col-start-16 col-end-18 row-start-18 row-end-19 text-2xs flex justify-center">{wei[50] !== null && wei[50] !== undefined ? (wei[50] === 0 ? <GoDash size={13} /> : wei[50]) : ""}</p>
        <p className="col-start-16 col-end-18 row-start-19 row-end-20 text-2xs flex justify-center">{wei[59] !== null && wei[59] !== undefined ? (wei[59] === 0 ? <GoDash size={13} /> : wei[59]) : ""}</p>
        <p className="col-start-18 col-end-19 row-start-11 row-end-12 text-2xs font-bold pl-[2px]">Sht</p>
        <p className="col-start-18 col-end-19 row-start-13 row-end-14 text-2xs flex justify-center">{wei[6] !== null && wei[6] !== undefined ? (wei[6] === 0 ? <GoDash size={13} /> : wei[6]) : ""}</p>
        <p className="col-start-18 col-end-19 row-start-14 row-end-15 text-2xs flex justify-center">{wei[15] !== null && wei[15] !== undefined ? (wei[15] === 0 ? <GoDash size={13} /> : wei[15]) : ""}</p>
        <p className="col-start-18 col-end-19 row-start-15 row-end-16 text-2xs flex justify-center">{wei[24] !== null && wei[24] !== undefined ? (wei[24] === 0 ? <GoDash size={13} /> : wei[24]) : ""}</p>
        <p className="col-start-18 col-end-19 row-start-16 row-end-17 text-2xs flex justify-center">{wei[33] !== null && wei[33] !== undefined ? (wei[33] === 0 ? <GoDash size={13} /> : wei[33]) : ""}</p>
        <p className="col-start-18 col-end-19 row-start-17 row-end-18 text-2xs flex justify-center">{wei[42] !== null && wei[42] !== undefined ? (wei[42] === 0 ? <GoDash size={13} /> : wei[42]) : ""}</p>
        <p className="col-start-18 col-end-19 row-start-18 row-end-19 text-2xs flex justify-center">{wei[51] !== null && wei[51] !== undefined ? (wei[51] === 0 ? <GoDash size={13} /> : wei[51]) : ""}</p>
        <p className="col-start-18 col-end-19 row-start-19 row-end-20 text-2xs flex justify-center">{wei[60] !== null && wei[60] !== undefined ? (wei[60] === 0 ? <GoDash size={13} /> : wei[60]) : ""}</p>
        <p className="col-start-19 col-end-21 row-start-11 row-end-12 text-2xs font-bold text-right">Med</p>
        <p className="col-start-19 col-end-21 row-start-13 row-end-14 text-2xs flex justify-center">{wei[7] !== null && wei[7] !== undefined ? (wei[7] === 0 ? <GoDash size={13} /> : wei[7]) : ""}</p>
        <p className="col-start-19 col-end-21 row-start-14 row-end-15 text-2xs flex justify-center">{wei[16] !== null && wei[16] !== undefined ? (wei[16] === 0 ? <GoDash size={13} /> : wei[16]) : ""}</p>
        <p className="col-start-19 col-end-21 row-start-15 row-end-16 text-2xs flex justify-center">{wei[25] !== null && wei[25] !== undefined ? (wei[25] === 0 ? <GoDash size={13} /> : wei[25]) : ""}</p>
        <p className="col-start-19 col-end-21 row-start-16 row-end-17 text-2xs flex justify-center">{wei[34] !== null && wei[34] !== undefined ? (wei[34] === 0 ? <GoDash size={13} /> : wei[34]) : ""}</p>
        <p className="col-start-19 col-end-21 row-start-17 row-end-18 text-2xs flex justify-center">{wei[43] !== null && wei[43] !== undefined ? (wei[43] === 0 ? <GoDash size={13} /> : wei[43]) : ""}</p>
        <p className="col-start-19 col-end-21 row-start-18 row-end-19 text-2xs flex justify-center">{wei[52] !== null && wei[52] !== undefined ? (wei[52] === 0 ? <GoDash size={13} /> : wei[52]) : ""}</p>
        <p className="col-start-19 col-end-21 row-start-19 row-end-20 text-2xs flex justify-center">{wei[61] !== null && wei[61] !== undefined ? (wei[61] === 0 ? <GoDash size={13} /> : wei[61]) : ""}</p>
        <p className="col-start-21 col-end-23 row-start-11 row-end-12 text-2xs font-bold pl-1">Lng</p>
        <p className="col-start-21 col-end-22 row-start-13 row-end-14 text-2xs flex justify-center">{wei[8] !== null && wei[8] !== undefined ? (wei[8] === 0 ? <GoDash size={13} /> : wei[8]) : ""}</p>
        <p className="col-start-21 col-end-22 row-start-14 row-end-15 text-2xs flex justify-center">{wei[17] !== null && wei[17] !== undefined ? (wei[17] === 0 ? <GoDash size={13} /> : wei[17]) : ""}</p>
        <p className="col-start-21 col-end-22 row-start-15 row-end-16 text-2xs flex justify-center">{wei[26] !== null && wei[26] !== undefined ? (wei[26] === 0 ? <GoDash size={13} /> : wei[26]) : ""}</p>
        <p className="col-start-21 col-end-22 row-start-16 row-end-17 text-2xs flex justify-center">{wei[35] !== null && wei[35] !== undefined ? (wei[35] === 0 ? <GoDash size={13} /> : wei[35]) : ""}</p>
        <p className="col-start-21 col-end-22 row-start-17 row-end-18 text-2xs flex justify-center">{wei[44] !== null && wei[44] !== undefined ? (wei[44] === 0 ? <GoDash size={13} /> : wei[44]) : ""}</p>
        <p className="col-start-21 col-end-22 row-start-18 row-end-19 text-2xs flex justify-center">{wei[53] !== null && wei[53] !== undefined ? (wei[53] === 0 ? <GoDash size={13} /> : wei[53]) : ""}</p>
        <p className="col-start-21 col-end-22 row-start-19 row-end-20 text-2xs flex justify-center">{wei[62] !== null && wei[62] !== undefined ? (wei[62] === 0 ? <GoDash size={13} /> : wei[62]) : ""}</p>
        <p className="col-start-2 col-end-23 row-start-25 row-end-26 text-2xs">Ammo: {mechData[0].ammo}</p>
        <span className="col-start-1 col-end-23 row-start-27 border-b-2 border-black mx-1"/>
        <p className="col-start-3 col-end-16 row-start-28 row-end-29 text-xs"><span className="font-bold">BV:</span> {mechData[0].bv}</p>
        <img src={MechDataImage} alt="sailboat lookin' thing" className="col-start-18 col-end-20 row-start-28 row-end-30 mt-1"/>
    </div>
  )
}