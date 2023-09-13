//import//
import { WeaponType, WeaponsEquipmentInventoryType } from "../../types/types"
import { GoPlusCircle, GoDash } from "react-icons/go"

interface UpdateWeiRowProps {
    toggleWeiModal: (weapon: keyof WeaponType) => void
    number: keyof WeaponType
    wei: WeaponsEquipmentInventoryType
    hidden?: WeaponsEquipmentInventoryType
}

export const UpdateWeiRow: React.FC<UpdateWeiRowProps> = ({ toggleWeiModal, number, wei, hidden}) => {
  return (
    <div className="w-full h-full grid grid-cols-22 grid-rows-1">
        <GoPlusCircle size={12} onClick={() => {toggleWeiModal(number)}} className={hidden?.qty === 0 ? "hidden" : "col-start-1 col-end-2 row-start-13 row-end-14 bg-yellow-300 rounded-full hover:cursor-pointer flex mt-[2px] ml-[2px]"}/>
      <div className={wei.qty === 0 ? ("hidden") : ("grid grid-cols-22 grid-rows-1 col-start-1 col-end-23 row-start-13 row-end-14")}>
        <p className="col-start-2 col-end-3 row-start-1 row-end-2 text-2xs">{wei.qty === 0 ? ("") : (wei.qty)}</p>
        <p className="col-start-3 col-end-10 row-start-1 row-end-2 text-2xs">{wei.type === "" ? ("") : (wei.type)}</p>
        <p className="col-start-9 col-end-11 row-start-1 row-end-2 text-2xs text-center">{wei.loc === "" ? ("") : (wei.loc)}</p>
        <p className="col-start-11 col-end-12 row-start-1 row-end-2 text-2xs text-center">{wei.ht === 0 ? (<GoDash size={13} />) : (wei.ht)}</p>
        <p className="col-start-12 col-end-17 row-start-1 row-end-2 text-2xs pl-1">{wei.dmg === "" ? ("") : (wei.dmg)}</p>
        <p className="col-start-16 col-end-18 row-start-1 row-end-2 text-2xs flex justify-center">{wei.min === 0 ? (<GoDash size={13} />) : (wei.min)}</p>
        <p className="col-start-18 col-end-19 row-start-1 row-end-2 text-2xs flex justify-center">{wei.sht === 0 ? (<GoDash size={13} />) : (wei.sht)}</p>
        <p className="col-start-19 col-end-21 row-start-1 row-end-2 text-2xs flex justify-center">{wei.med === 0 ? (<GoDash size={13} />) : (wei.med)}</p>
        <p className="col-start-21 col-end-22 row-start-1 row-end-2 text-2xs flex justify-center">{wei.lng === 0 ? (<GoDash size={13} />) : (wei.lng)}</p>
      </div>
    </div>
  )
}
