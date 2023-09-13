//import//
import { GoDash } from "react-icons/go"

import { WeaponsEquipmentInventoryType } from "../../types/types"

interface ReadWeiRowProps {
wei: WeaponsEquipmentInventoryType | undefined
}

export const ReadWeiRow: React.FC<ReadWeiRowProps> = ({ wei }) => {
  return (
    <>
        <p className="col-start-2 col-end-3 row-start-1 row-end-2 text-2xs">{wei ? wei.qty : ""}</p>
        <p className="col-start-3 col-end-10 row-start-1 row-end-2 text-2xs">{wei ? wei.type : ""}</p>
        <p className="col-start-9 col-end-11 row-start-1 row-end-2 text-2xs text-center">{wei ? wei.loc : ""}</p>
        <p className="col-start-11 col-end-12 row-start-1 row-end-2 text-2xs text-center">{wei !== null && wei !== undefined ? (wei.ht === 0 ? <GoDash size={13} /> : wei.ht) : ""}</p>
        <p className="col-start-12 col-end-17 row-start-1 row-end-2 text-2xs pl-1">{wei ? wei.dmg : ""}</p>
        <p className="col-start-16 col-end-18 row-start-1 row-end-2 text-2xs flex justify-center">{wei !== null && wei !== undefined ? (wei.min === 0 ? <GoDash size={13} /> : wei.min) : ""}</p>
        <p className="col-start-18 col-end-19 row-start-1 row-end-2 text-2xs flex justify-center">{wei !== null && wei !== undefined ? (wei.sht === 0 ? <GoDash size={13} /> : wei.sht) : ""}</p>
        <p className="col-start-19 col-end-21 row-start-1 row-end-2 text-2xs flex justify-center">{wei !== null && wei !== undefined ? (wei.med === 0 ? <GoDash size={13} /> : wei.med) : ""}</p>
        <p className="col-start-21 col-end-22 row-start-1 row-end-2 text-2xs flex justify-center">{wei !== null && wei !== undefined ? (wei.lng === 0 ? <GoDash size={13} /> : wei.lng) : ""}</p>
    </>
  )
}
