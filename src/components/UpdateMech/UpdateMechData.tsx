//import//
import { useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { MechDataType, WeaponType, WeaponsEquipmentInventoryType, IMechData } from "../../types/types";
import MechDataImage from "../../assets/MechDataImage.jpg";
import { UpdateMechDataModal } from "./UpdateMechModals/UpdateMechDataModal";
import { GoPlusCircle } from "react-icons/go";
import { UpdateWeiModal } from "./UpdateMechModals/UpdateWeiModal";
import { UpdateWeiRow } from "./UpdateWeiRow";

interface UpdateMechDataProps {
  id: string
  mechInfo: IMechData[]
}

export const UpdateMechData: React.FC<UpdateMechDataProps> = ({ id, mechInfo }) => {
  const [mechModal, setMechModal] = useState<boolean>(false);
  const [weiModal, setWeiModal] = useState<WeaponType>({ one: false, two: false, three: false, four: false, five: false, six: false, seven: false, eight: false });
  const [mechData, setMechData] = useState<MechDataType>({ type: mechInfo[0].type, walking: mechInfo[0].walking, running: mechInfo[0].running, jumping: mechInfo[0].jumping, tonnage: mechInfo[0].tonnage, techBase: mechInfo[0].techBase, rulesLevel: mechInfo[0].rulesLevel, role: mechInfo[0].role, ammo: mechInfo[0].ammo, bv: mechInfo[0].bv });
  const [weiOne, setWeiOne] = useState<WeaponsEquipmentInventoryType>({ qty: mechInfo[0].weiOne?.qty || 0, type: mechInfo[0].weiOne?.type || "", loc: mechInfo[0].weiOne?.loc || "", ht: mechInfo[0].weiOne?.ht || 0, dmg: mechInfo[0].weiOne?.dmg || "", min: mechInfo[0].weiOne?.min || 0, sht: mechInfo[0].weiOne?.sht || 0, med: mechInfo[0].weiOne?.med || 0, lng: mechInfo[0].weiOne?.lng || 0 });
  const [weiTwo, setWeiTwo] = useState<WeaponsEquipmentInventoryType>({ qty: mechInfo[0].weiTwo?.qty || 0, type: mechInfo[0].weiTwo?.type || "", loc: mechInfo[0].weiTwo?.loc || "", ht: mechInfo[0].weiTwo?.ht || 0, dmg: mechInfo[0].weiTwo?.dmg || "", min: mechInfo[0].weiTwo?.min || 0, sht: mechInfo[0].weiTwo?.sht || 0, med: mechInfo[0].weiTwo?.med || 0, lng: mechInfo[0].weiTwo?.lng || 0 });
  const [weiThree, setWeiThree] = useState<WeaponsEquipmentInventoryType>({ qty: mechInfo[0].weiThree?.qty || 0, type: mechInfo[0].weiThree?.type || "", loc: mechInfo[0].weiThree?.loc || "", ht: mechInfo[0].weiThree?.ht || 0, dmg: mechInfo[0].weiThree?.dmg || "", min: mechInfo[0].weiThree?.min || 0, sht: mechInfo[0].weiThree?.sht || 0, med: mechInfo[0].weiThree?.med || 0, lng: mechInfo[0].weiThree?.lng || 0 });
  const [weiFour, setWeiFour] = useState<WeaponsEquipmentInventoryType>({ qty: mechInfo[0].weiFour?.qty || 0, type: mechInfo[0].weiFour?.type || "", loc: mechInfo[0].weiFour?.loc || "", ht: mechInfo[0].weiFour?.ht || 0, dmg: mechInfo[0].weiFour?.dmg || "", min: mechInfo[0].weiFour?.min || 0, sht: mechInfo[0].weiFour?.sht || 0, med: mechInfo[0].weiFour?.med || 0, lng: mechInfo[0].weiFour?.lng || 0 });
  const [weiFive, setWeiFive] = useState<WeaponsEquipmentInventoryType>({ qty: mechInfo[0].weiFive?.qty || 0, type: mechInfo[0].weiFive?.type || "", loc: mechInfo[0].weiFive?.loc || "", ht: mechInfo[0].weiFive?.ht || 0, dmg: mechInfo[0].weiFive?.dmg || "", min: mechInfo[0].weiFive?.min || 0, sht: mechInfo[0].weiFive?.sht || 0, med: mechInfo[0].weiFive?.med || 0, lng: mechInfo[0].weiFive?.lng || 0 });
  const [weiSix, setWeiSix] = useState<WeaponsEquipmentInventoryType>({ qty: mechInfo[0].weiSix?.qty || 0, type: mechInfo[0].weiSix?.type || "", loc: mechInfo[0].weiSix?.loc || "", ht: mechInfo[0].weiSix?.ht || 0, dmg: mechInfo[0].weiSix?.dmg ||  "", min: mechInfo[0].weiSix?.min || 0, sht: mechInfo[0].weiSix?.sht || 0, med: mechInfo[0].weiSix?.med || 0, lng: mechInfo[0].weiSix?.lng || 0 });
  const [weiSeven, setWeiSeven] = useState<WeaponsEquipmentInventoryType>({ qty: mechInfo[0].weiSeven?.qty || 0, type: mechInfo[0].weiSeven?.type || "", loc: mechInfo[0].weiSeven?.loc || "", ht: mechInfo[0].weiSeven?.ht || 0, dmg: mechInfo[0].weiSeven?.dmg || "", min: mechInfo[0].weiSeven?.min || 0, sht: mechInfo[0].weiSeven?.sht || 0, med: mechInfo[0].weiSeven?.med || 0, lng: mechInfo[0].weiSeven?.lng || 0 });
  const [weiEight, setWeiEight] = useState<WeaponsEquipmentInventoryType>({ qty: mechInfo[0].weiEight?.qty || 0, type: mechInfo[0].weiEight?.type || "", loc: mechInfo[0].weiEight?.loc || "", ht: mechInfo[0].weiEight?.ht || 0, dmg: mechInfo[0].weiEight?.dmg || "", min: mechInfo[0].weiEight?.min || 0, sht: mechInfo[0].weiEight?.sht || 0, med: mechInfo[0].weiEight?.med || 0, lng: mechInfo[0].weiEight?.lng || 0 });

  const toggleModal: React.MouseEventHandler<SVGSVGElement> = (): void => {
    setMechModal(!mechModal);
  };

  const toggleWeiModal = (weapon: keyof WeaponType): void => {
    setWeiModal((prev) => ({
      ...prev,
      [weapon]: !prev[weapon],
    }))
  };

  const closeModal: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    setMechModal(false);
  };

  const closeWeiModal = (weapon: string): void => {
    setWeiModal((prev) => ({
      ...prev,
      [weapon]: false
    }))
  }

  const saveModal: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    saveMechData()
    setMechModal(false);
  };

  const saveWeiModal = (weapon: string): void => {
    const weiData: WeaponsEquipmentInventoryType = getValue(weapon)
    saveWei(weapon, weiData)
    console.log(weiData)
    setWeiModal((prev) => ({
      ...prev,
      [weapon]: false,
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMechData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleWeiChange = (weapon: string, propertyName: string, e: any) => {
    e.preventDefault()
    const setter = getSetter(weapon)
    if (setter) {
      setter?.setter((prev) => ({
        ...prev,
        [propertyName]: 
        propertyName === 'qty' || 
        propertyName === 'ht' || 
        propertyName === 'min' || 
        propertyName === 'sht' || 
        propertyName === 'med' || 
        propertyName === 'lng' 
          ? parseInt(e.target.value, 10) 
          : e.target.value
      }))
    }
  }

  const saveMechData = async () => {
    try {
      await updateDoc(doc(db, 'mechs', id), {
        type: mechData.type,
        walking: mechData.walking,
        running: mechData.running,
        jumping: mechData.jumping,
        tonnage: mechData.tonnage,
        techBase: mechData.techBase,
        rulesLevel: mechData.rulesLevel,
        role: mechData.role,
        ammo: mechData.ammo,
        bv: mechData.bv,
      })
    } catch (error) {
      console.error('error saving data')
    }
  }

  const saveWei = async (number: string, weiData: WeaponsEquipmentInventoryType) => {
    try {
      const capitalNumber = number.charAt(0).toUpperCase() + number.slice(1)
      await updateDoc(doc(db, 'mechs', id), {
        [`wei${capitalNumber}`]: weiData
      })
    } catch (error) {
      console.error('error saving wei')
    }
  }

  const handleWeiValue = (weapon: string) => {
    const value = getValue(weapon)
    if (value) {
      return value;
    }
  }

  const getValue = (weapon: string): WeaponsEquipmentInventoryType => {
    switch (weapon) {
      case "one":
        return weiOne;
      case "two":
        return weiTwo;
      case "three":
        return weiThree;
      case "four":
        return weiFour;
      case "five":
        return weiFive;
      case "six":
        return weiSix;
      case "seven":
        return weiSeven;
      case "eight":
        return weiEight;
      default:
        return {
          qty: 0,
          type: "",
          loc: "",
          ht: 0,
          dmg: "",
          min: 0,
          sht: 0,
          med: 0,
          lng: 0,
        }
    }
  }

  const getSetter = (weapon: string) => {
    switch (weapon) {
      case "one":
        return { setter: setWeiOne, name: "setWeiOne"};
      case "two":
        return { setter: setWeiTwo, name: "setWeiTwo"};
      case "three":
        return { setter: setWeiThree, name: "setWeiThree"};
      case "four":
        return { setter: setWeiFour, name: "setWeiFour"};
      case "five":
        return { setter: setWeiFive, name: "setWeiFive"};
      case "six":
        return { setter: setWeiSix, name: "setWeiSix"};
      case "seven":
        return { setter: setWeiSeven, name: "setWeiSeven"};
      case "eight":
        return { setter: setWeiEight, name: "setWeiEight"};
    }
  }

  return (
    <div className="grid grid-cols-22 grid-rows-30 w-full h-full">
      <p className="col-start-1 col-end-11 row-start-1 row-end-3 bg-black text-white text-sm text-center z-10 rounded-full flex justify-center items-center">
        'MECH DATA{" "}
        <GoPlusCircle
          onClick={toggleModal}
          className="bg bg-yellow-300 text-black rounded-full ml-3 mt-[2px] hover:cursor-pointer"
        />
      </p>
      <div className="col-start-1 col-end-23 row-start-1 row-end-31"></div>
      <span className="col-start-1 col-end-23 row-start-2 row-end-31 border-2 border-black rounded-record"></span>
      <UpdateMechDataModal mechModal={mechModal} mechData={mechData} handleChange={handleChange} closeModal={closeModal} saveModal={saveModal}/>
      <div className="col-start-1 col-end-23 row-start-3 row-end-5 pl-1">
        <p className="font-bold text-xs flex items-center">
          Type: {mechData.type === "" ? "" : `${mechData.type}`}
        </p>
      </div>
      <span className="col-start-4 col-end-22 row-start-3 row-end-4 border-b-2 border-black -m-1"/>
      <p className="col-start-2 col-end-12 row-start-5 row-end-6 text-2xs font-bold flex items-center">Movement Points</p>
      <p className="col-start-2 col-end-7 row-start-6 row-end-7 text-2xs font-bold">Walking:</p>
      <p className="col-start-7 col-end-12 row-start-6 row-end-7 text-2xs flex">{mechData.walking === 0 ? "" : `${mechData.walking}`}</p>
      <p className="col-start-2 col-end-7 row-start-7 row-end-8 text-2xs font-bold">Running:</p>
      <p className="col-start-7 col-end-12 row-start-7 row-end-8 text-2xs flex">{mechData.running === 0 ? "" : `${mechData.running}`}</p>
      <p className="col-start-2 col-end-7 row-start-8 row-end-9 text-2xs font-bold">Jumping:</p>
      <p className="col-start-7 col-end-12 row-start-8 row-end-9 text-2xs flex">{mechData.jumping === 0 ? "" : `${mechData.jumping}`}</p>
      <p className="col-start-12 col-end-16 row-start-5 row-end-6 text-2xs font-bold">Tonnage:</p>
      <p className="col-start-16 col-end-23 row-start-5 row-end-6 text-2xs flex pl-1 justify-start">{mechData.tonnage === 0 ? "" : `${mechData.tonnage}`}</p>
      <p className="col-start-12 col-end-16 row-start-6 row-end-7 text-2xs font-bold">Tech Base:</p>
      <p className="col-start-16 col-end-23 row-start-6 row-end-7 text-2xs flex pl-1">{mechData.techBase === "" ? "" : `${mechData.techBase}`}</p>
      <p className="col-start-12 col-end-17 row-start-7 row-end-8 text-2xs font-bold">Rules Level:</p>
      <p className="col-start-16 col-end-23 row-start-7 row-end-8 text-2xs flex pl-1">{mechData.rulesLevel === "" ? "" : `${mechData.rulesLevel}`}</p>
      <p className="col-start-12 col-end-16 row-start-8 row-end-9 text-2xs font-bold">Role:</p>
      <p className="col-start-16 col-end-23 row-start-8 row-end-9 text-2xs flex pl-1">{mechData.role === "" ? "" : `${mechData.role}`}</p>
      <span className="col-start-1 col-end-23 row-start-9 border-t-2 border-black mx-1 mt-1" />
      <div className="col-start-1 col-end-23 row-start-9 row-end-11 pl-1 pt-2">
        <p className="text-xs font-bold">Weapons & Equipment Inventory</p>
      </div>
      <UpdateWeiModal weiModal={weiModal} handleWeiValue={handleWeiValue} handleWeiChange={handleWeiChange} closeWeiModal={closeWeiModal} saveWeiModal={saveWeiModal}/>
      <p className="col-start-1 col-end-3 row-start-11 row-end-12 text-2xs font-bold text-right">Qty</p>
      <p className="col-start-3 col-end-5 row-start-11 row-end-12 text-2xs font-bold text-right">Type</p>
      <p className="col-start-9 col-end-11 row-start-11 row-end-12 text-2xs font-bold text-center">Loc</p>
      <p className="col-start-11 col-end-12 row-start-11 row-end-12 text-2xs font-bold text-right">Ht</p>
      <p className="col-start-12 col-end-17 row-start-11 row-end-12 text-2xs font-bold pl-2">Dmg</p>
      <p className="col-start-16 col-end-18 row-start-11 row-end-12 text-2xs font-bold text-right">Min</p>
      <p className="col-start-18 col-end-19 row-start-11 row-end-12 text-2xs font-bold pl-[2px]">Sht</p>
      <p className="col-start-19 col-end-21 row-start-11 row-end-12 text-2xs font-bold text-right">Med</p>
      <p className="col-start-21 col-end-23 row-start-11 row-end-12 text-2xs font-bold pl-1">Lng</p>
      <div className="col-start-1 col-end-23 row-start-13 row-end-14">
        <UpdateWeiRow toggleWeiModal={toggleWeiModal} number="one" wei={weiOne}/>
      </div>
      <div className="col-start-1 col-end-23 row-start-14 row-end-15">
        <UpdateWeiRow toggleWeiModal={toggleWeiModal} number="two" wei={weiTwo} hidden={weiOne}/>
      </div>
      <div className="col-start-1 col-end-23 row-start-14 row-end-15">
        <UpdateWeiRow toggleWeiModal={toggleWeiModal} number="three" wei={weiThree} hidden={weiTwo}/>
      </div>
      <div className="col-start-1 col-end-23 row-start-14 row-end-15">
        <UpdateWeiRow toggleWeiModal={toggleWeiModal} number="four" wei={weiFour} hidden={weiThree}/>
      </div>
      <div className="col-start-1 col-end-23 row-start-14 row-end-15">
        <UpdateWeiRow toggleWeiModal={toggleWeiModal} number="five" wei={weiFive} hidden={weiFour}/>
      </div>
      <div className="col-start-1 col-end-23 row-start-14 row-end-15">
        <UpdateWeiRow toggleWeiModal={toggleWeiModal} number="six" wei={weiSix} hidden={weiFive}/>
      </div>
      <div className="col-start-1 col-end-23 row-start-14 row-end-15">
        <UpdateWeiRow toggleWeiModal={toggleWeiModal} number="seven" wei={weiSeven} hidden={weiSix}/>
      </div>
      <div className="col-start-1 col-end-23 row-start-14 row-end-15">
        <UpdateWeiRow toggleWeiModal={toggleWeiModal} number="eight" wei={weiEight} hidden={weiSeven}/>
      </div>
      <p className="col-start-2 col-end-23 row-start-25 row-end-26 text-2xs"><span className="font-bold">Ammo: </span>{mechData.ammo}</p>
      <span className="col-start-1 col-end-23 row-start-27 border-b-2 border-black mx-1"/>
      <p className="col-start-3 col-end-16 row-start-28 row-end-29 text-xs"><span className="font-bold">BV: </span>{mechData.bv}</p>
      <img src={MechDataImage} alt="sailboat lookin' thing" className="col-start-18 col-end-20 row-start-28 row-end-30 mt-1"/>
    </div>
  );
};