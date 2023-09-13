//import//
import { useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { IMechData, MechDataType, WeaponType, WeaponsEquipmentInventoryType } from "../../types/types";
import MechDataImage from "../../assets/MechDataImage.jpg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GoDash, GoPlusCircle } from "react-icons/go";
import { WeiModal } from "../Modals/WeiModal";
import { MechDataModal } from "../Modals/MechDataModal";

interface CreateMechDataProps {
  id: string
  mechInfo: IMechData[]
}

export const CreateMechData: React.FC<CreateMechDataProps> = ({ id, mechInfo }) => {
  const [mechModal, setMechModal] = useState<boolean>(false);
  const [weiModal, setWeiModal] = useState<WeaponType>({ one: false, two: false, three: false, four: false, five: false, six: false, seven: false, eight: false });
  const [mechData, setMechData] = useState<MechDataType>({ type: mechInfo[0]?.type || "", walking: mechInfo[0]?.walking || 0, running: mechInfo[0]?.running || 0, jumping: mechInfo[0]?.jumping || 0, tonnage: mechInfo[0]?.tonnage || 0, techBase: mechInfo[0]?.techBase || "", rulesLevel: mechInfo[0]?.rulesLevel || "", role: mechInfo[0]?.role || "", ammo: mechInfo[0]?.ammo || "", bv: mechInfo[0]?.bv || 0 });
  const [weiOne, setWeiOne] = useState<WeaponsEquipmentInventoryType>({ qty: mechInfo[0]?.weiOne?.qty || 0, type: mechInfo[0]?.weiOne?.type || "", loc: mechInfo[0]?.weiOne?.loc || "", ht: mechInfo[0]?.weiOne?.ht || 0, dmg: mechInfo[0]?.weiOne?.dmg || "", min: mechInfo[0]?.weiOne?.min || 0, sht: mechInfo[0]?.weiOne?.sht || 0, med: mechInfo[0]?.weiOne?.med || 0, lng: mechInfo[0]?.weiOne?.lng || 0 });
  const [weiTwo, setWeiTwo] = useState<WeaponsEquipmentInventoryType>({ qty: mechInfo[0]?.weiTwo?.qty || 0, type: mechInfo[0]?.weiTwo?.type || "", loc: mechInfo[0]?.weiTwo?.loc || "", ht: mechInfo[0]?.weiTwo?.ht || 0, dmg: mechInfo[0]?.weiTwo?.dmg || "", min: mechInfo[0]?.weiTwo?.min || 0, sht: mechInfo[0]?.weiTwo?.sht || 0, med: mechInfo[0]?.weiTwo?.med || 0, lng: mechInfo[0]?.weiTwo?.lng || 0 });
  const [weiThree, setWeiThree] = useState<WeaponsEquipmentInventoryType>({ qty: mechInfo[0]?.weiThree?.qty || 0, type: mechInfo[0]?.weiThree?.type || "", loc: mechInfo[0]?.weiThree?.loc || "", ht: mechInfo[0]?.weiThree?.ht || 0, dmg: mechInfo[0]?.weiThree?.dmg || "", min: mechInfo[0]?.weiThree?.min || 0, sht: mechInfo[0]?.weiThree?.sht || 0, med: mechInfo[0]?.weiThree?.med || 0, lng: mechInfo[0]?.weiThree?.lng || 0 });
  const [weiFour, setWeiFour] = useState<WeaponsEquipmentInventoryType>({ qty: mechInfo[0]?.weiFour?.qty || 0, type: mechInfo[0]?.weiFour?.type || "", loc: mechInfo[0]?.weiFour?.loc || "", ht: mechInfo[0]?.weiFour?.ht || 0, dmg: mechInfo[0]?.weiFour?.dmg || "", min: mechInfo[0]?.weiFour?.min || 0, sht: mechInfo[0]?.weiFour?.sht || 0, med: mechInfo[0]?.weiFour?.med || 0, lng: mechInfo[0]?.weiFour?.lng || 0 });
  const [weiFive, setWeiFive] = useState<WeaponsEquipmentInventoryType>({ qty: mechInfo[0]?.weiFive?.qty || 0, type: mechInfo[0]?.weiFive?.type || "", loc: mechInfo[0]?.weiFive?.loc || "", ht: mechInfo[0]?.weiFive?.ht || 0, dmg: mechInfo[0]?.weiFive?.dmg || "", min: mechInfo[0]?.weiFive?.min || 0, sht: mechInfo[0]?.weiFive?.sht || 0, med: mechInfo[0]?.weiFive?.med || 0, lng: mechInfo[0]?.weiFive?.lng || 0 });
  const [weiSix, setWeiSix] = useState<WeaponsEquipmentInventoryType>({ qty: mechInfo[0]?.weiSix?.qty || 0, type: mechInfo[0]?.weiSix?.type || "", loc: mechInfo[0]?.weiSix?.loc || "", ht: mechInfo[0]?.weiSix?.ht || 0, dmg: mechInfo[0]?.weiSix?.dmg || "", min: mechInfo[0]?.weiSix?.min || 0, sht: mechInfo[0]?.weiSix?.sht || 0, med: mechInfo[0]?.weiSix?.med || 0, lng: mechInfo[0]?.weiSix?.lng || 0 });
  const [weiSeven, setWeiSeven] = useState<WeaponsEquipmentInventoryType>({ qty: mechInfo[0]?.weiSeven?.qty || 0, type: mechInfo[0]?.weiSeven?.type || "", loc: mechInfo[0]?.weiSeven?.loc || "", ht: mechInfo[0]?.weiSeven?.ht || 0, dmg: mechInfo[0]?.weiSeven?.dmg || "", min: mechInfo[0]?.weiSeven?.min || 0, sht: mechInfo[0]?.weiSeven?.sht || 0, med: mechInfo[0]?.weiSeven?.med || 0, lng: mechInfo[0]?.weiSeven?.lng || 0 });
  const [weiEight, setWeiEight] = useState<WeaponsEquipmentInventoryType>({ qty: mechInfo[0]?.weiEight?.qty || 0, type: mechInfo[0]?.weiEight?.type || "", loc: mechInfo[0]?.weiEight?.loc || "", ht: mechInfo[0]?.weiEight?.ht || 0, dmg: mechInfo[0]?.weiEight?.dmg || "", min: mechInfo[0]?.weiEight?.min || 0, sht: mechInfo[0]?.weiEight?.sht || 0, med: mechInfo[0]?.weiEight?.med || 0, lng: mechInfo[0]?.weiEight?.lng || 0 });

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

  const saveModal: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    saveMechData()
    setMechModal(false);
  };

  const closeWeiModal = (weapon: string): void => {
    setWeiModal((prev) => ({
      ...prev,
      [weapon]: false
    }))
  }

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

  const handleDelete = (name: string, type: "string" | "number") => {
    setMechData((prev) => ({
      ...prev,
      [name]: type === "string" ? "" : 0,
    }));
  };
  
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

      <MechDataModal mechModal={mechModal} mechData={mechData} handleChange={handleChange} closeModal={closeModal} saveModal={saveModal}/>
      
      <div className="col-start-1 col-end-23 row-start-3 row-end-5 pl-1">
        <p className="font-bold text-xs flex items-center">
          Type: {mechData.type === "" ? (
            ""
          ) : (
            <>
              <span className="bg-green-400 ml-2">{mechData.type}</span>
              <AiOutlineCloseCircle
                onClick={() => handleDelete("type", "string")}
                className="bg-red-400 ml-1 hover:cursor-pointer z-10"
              />
            </>
          )}
        </p>
      </div>
      <span className="col-start-4 col-end-22 row-start-3 row-end-4 border-b-2 border-black -m-1"/>
      <p className="col-start-2 col-end-12 row-start-5 row-end-6 text-2xs font-bold flex items-center">
        Movement Points
      </p>
      <p className="col-start-2 col-end-7 row-start-6 row-end-7 text-2xs font-bold">
        Walking:
      </p>
      <p className="col-start-7 col-end-12 row-start-6 row-end-7 text-2xs flex">
        {mechData.walking === 0 ? (
          ""
        ) : (
          <>
            <span className="bg-green-400 px-2">{mechData.walking}</span>
            <AiOutlineCloseCircle
              onClick={() => handleDelete("walking", "number")}
              className="bg-red-400 ml-2 hover:cursor-pointer mt-[2px]"
            />
          </>
        )}
      </p>
      <p className="col-start-2 col-end-7 row-start-7 row-end-8 text-2xs font-bold">
        Running:
      </p>
      <p className="col-start-7 col-end-12 row-start-7 row-end-8 text-2xs flex">
        {mechData.running === 0 ? (
          ""
        ) : (
          <>
            <span className="bg-green-400 px-2">{mechData.running}</span>
            <AiOutlineCloseCircle
              onClick={() => handleDelete("running", "number")}
              className="bg-red-400 ml-2 hover:cursor-pointer mt-[2px]"
            />
          </>
        )}
      </p>
      <p className="col-start-2 col-end-7 row-start-8 row-end-9 text-2xs font-bold">
        Jumping:
      </p>
      <p className="col-start-7 col-end-12 row-start-8 row-end-9 text-2xs flex">
        {mechData.jumping === 0 ? (
          ""
        ) : (
          <>
            <span className="bg-green-400 px-2">{mechData.jumping}</span>
            <AiOutlineCloseCircle
              onClick={() => handleDelete("jumping", "string")}
              className="bg-red-400 ml-2 hover:cursor-pointer mt-[2px]"
            />
          </>
        )}
      </p>
      <p className="col-start-12 col-end-16 row-start-5 row-end-6 text-2xs font-bold">
        Tonnage:
      </p>
      <p className="col-start-16 col-end-23 row-start-5 row-end-6 text-2xs flex pl-1 justify-start">
        {mechData.tonnage === 0 ? (
          ""
        ) : (
          <>
            <span className="bg-green-400 px-2">{mechData.tonnage}</span>
            <AiOutlineCloseCircle
              onClick={() => handleDelete("tonnage", "number")}
              className="bg-red-400 ml-2 hover:cursor-pointer mt-[2px]"
            />
          </>
        )}
      </p>
      <p className="col-start-12 col-end-16 row-start-6 row-end-7 text-2xs font-bold">
        Tech Base:
      </p>
      <p className="col-start-16 col-end-23 row-start-6 row-end-7 text-2xs flex pl-1">
        {mechData.techBase === "" ? (
          ""
        ) : (
          <>
            <span className="bg-green-400 px-2">{mechData.techBase}</span>
            <AiOutlineCloseCircle
              onClick={() => handleDelete("techBase", "string")}
              className="bg-red-400 ml-2 hover:cursor-pointer mt-[2px]"
            />
          </>
        )}
      </p>
      <p className="col-start-12 col-end-17 row-start-7 row-end-8 text-2xs font-bold">
        Rules Level:
      </p>
      <p className="col-start-16 col-end-23 row-start-7 row-end-8 text-2xs flex pl-1">
        {mechData.rulesLevel === "" ? (
          ""
        ) : (
          <>
            <span className="bg-green-400 px-2">{mechData.rulesLevel}</span>
            <AiOutlineCloseCircle
              onClick={() => handleDelete("rulesLevel", "string")}
              className="bg-red-400 ml-2 hover:cursor-pointer mt-[2px]"
            />
          </>
        )}
      </p>
      <p className="col-start-12 col-end-16 row-start-8 row-end-9 text-2xs font-bold">
        Role:
      </p>
      <p className="col-start-16 col-end-23 row-start-8 row-end-9 text-2xs flex pl-1">
        {mechData.role === "" ? (
          ""
        ) : (
          <>
            <span className="bg-green-400 px-2">{mechData.role}</span>
            <AiOutlineCloseCircle
              onClick={() => handleDelete("role", "string")}
              className="bg-red-400 ml-2 hover:cursor-pointer mt-[2px]"
            />
          </>
        )}
      </p>
      <span className="col-start-1 col-end-23 row-start-9 border-t-2 border-black mx-1 mt-1" />
      <div className="col-start-1 col-end-23 row-start-9 row-end-11 pl-1 pt-2">
        <p className="text-xs font-bold">Weapons & Equipment Inventory</p>
      </div>

      <WeiModal weiModal={weiModal} handleWeiValue={handleWeiValue} handleWeiChange={handleWeiChange} closeWeiModal={closeWeiModal} saveWeiModal={saveWeiModal}/>
        
      <p className="col-start-1 col-end-3 row-start-11 row-end-12 text-2xs font-bold text-right">Qty</p>
      <p className="col-start-3 col-end-5 row-start-11 row-end-12 text-2xs font-bold text-right">Type</p>
      <p className="col-start-9 col-end-11 row-start-11 row-end-12 text-2xs font-bold text-center">Loc</p>
      <p className="col-start-11 col-end-12 row-start-11 row-end-12 text-2xs font-bold text-right">Ht</p>
      <p className="col-start-12 col-end-17 row-start-11 row-end-12 text-2xs font-bold pl-2">Dmg</p>
      <p className="col-start-16 col-end-18 row-start-11 row-end-12 text-2xs font-bold text-right">Min</p>
      <p className="col-start-18 col-end-19 row-start-11 row-end-12 text-2xs font-bold pl-[2px]">Sht</p>
      <p className="col-start-19 col-end-21 row-start-11 row-end-12 text-2xs font-bold text-right">Med</p>
      <p className="col-start-21 col-end-23 row-start-11 row-end-12 text-2xs font-bold pl-1">Lng</p>

      <GoPlusCircle size={12} onClick={() => {toggleWeiModal('one')}} className="col-start-1 col-end-2 row-start-13 row-end-14 bg-yellow-300 rounded-full hover:cursor-pointer flex mt-[2px] ml-[2px]"/>
      <div className={weiOne.qty === 0 ? ("hidden") : ("grid grid-cols-22 grid-rows-1 col-start-1 col-end-23 row-start-13 row-end-14")}>
        <p className="col-start-2 col-end-3 row-start-1 row-end-2 text-2xs">{weiOne.qty === 0 ? ("") : (weiOne.qty)}</p>
        <p className="col-start-3 col-end-10 row-start-1 row-end-2 text-2xs">{weiOne.type === "" ? ("") : (weiOne.type)}</p>
        <p className="col-start-9 col-end-11 row-start-1 row-end-2 text-2xs text-center">{weiOne.loc === "" ? ("") : (weiOne.loc)}</p>
        <p className="col-start-11 col-end-12 row-start-1 row-end-2 text-2xs text-center">{weiOne.ht === 0 ? (<GoDash size={13} />) : (weiOne.ht)}</p>
        <p className="col-start-12 col-end-17 row-start-1 row-end-2 text-2xs pl-1">{weiOne.dmg === "" ? ("") : (weiOne.dmg)}</p>
        <p className="col-start-16 col-end-18 row-start-1 row-end-2 text-2xs flex justify-center">{weiOne.min === 0 ? (<GoDash size={13} />) : (weiOne.min)}</p>
        <p className="col-start-18 col-end-19 row-start-1 row-end-2 text-2xs flex justify-center">{weiOne.sht === 0 ? (<GoDash size={13} />) : (weiOne.sht)}</p>
        <p className="col-start-19 col-end-21 row-start-1 row-end-2 text-2xs flex justify-center">{weiOne.med === 0 ? (<GoDash size={13} />) : (weiOne.med)}</p>
        <p className="col-start-21 col-end-22 row-start-1 row-end-2 text-2xs flex justify-center">{weiOne.lng === 0 ? (<GoDash size={13} />) : (weiOne.lng)}</p>
      </div>
      <GoPlusCircle size={12} onClick={() => {toggleWeiModal('two')}} className={weiOne.qty === 0 ? ("hidden") : ("col-start-1 col-end-2 row-start-14 row-end-15 bg-yellow-300 rounded-full hover:cursor-pointer flex mt-[2px] ml-[2px]")}/>
      <div className={weiTwo.qty === 0 ? ("hidden") : ("grid grid-cols-22 grid-rows-1 col-start-1 col-end-23 row-start-14 row-end-15")}>
        <p className="col-start-2 col-end-3 row-start-1 row-end-2 text-2xs">{weiTwo.qty === 0 ? ("") : (weiTwo.qty)}</p>
        <p className="col-start-3 col-end-10 row-start-1 row-end-2 text-2xs">{weiTwo.type === "" ? ("") : (weiTwo.type)}</p>
        <p className="col-start-9 col-end-11 row-start-1 row-end-2 text-2xs text-center">{weiTwo.loc === "" ? ("") : (weiTwo.loc)}</p>
        <p className="col-start-11 col-end-12 row-start-1 row-end-2 text-2xs text-center">{weiTwo.ht === 0 ? (<GoDash size={13} />) : (weiTwo.ht)}</p>
        <p className="col-start-12 col-end-17 row-start-1 row-end-2 text-2xs pl-1">{weiTwo.dmg === "" ? ("") : (weiTwo.dmg)}</p>
        <p className="col-start-16 col-end-18 row-start-1 row-end-2 text-2xs flex justify-center">{weiTwo.min === 0 ? (<GoDash size={13} />) : (weiTwo.min)}</p>
        <p className="col-start-18 col-end-19 row-start-1 row-end-2 text-2xs flex justify-center">{weiTwo.sht === 0 ? (<GoDash size={13} />) : (weiTwo.sht)}</p>
        <p className="col-start-19 col-end-21 row-start-1 row-end-2 text-2xs flex justify-center">{weiTwo.med === 0 ? (<GoDash size={13} />) : (weiTwo.med)}</p>
        <p className="col-start-21 col-end-22 row-start-1 row-end-2 text-2xs flex justify-center">{weiTwo.lng === 0 ? (<GoDash size={13} />) : (weiTwo.lng)}</p>
      </div>
      <GoPlusCircle size={12} onClick={() => {toggleWeiModal('three')}} className={weiTwo.qty === 0 ? ("hidden") : ("col-start-1 col-end-2 row-start-15 row-end-16 bg-yellow-300 rounded-full hover:cursor-pointer flex mt-[2px] ml-[2px]")}/>
      <div className={weiThree.qty === 0 ? ("hidden") : ("grid grid-cols-22 grid-rows-1 col-start-1 col-end-23 row-start-15 row-end-16")}>
        <p className="col-start-2 col-end-3 row-start-1 row-end-2 text-2xs">{weiThree.qty === 0 ? ("") : (weiThree.qty)}</p>
        <p className="col-start-3 col-end-10 row-start-1 row-end-2 text-2xs">{weiThree.type === "" ? ("") : (weiThree.type)}</p>
        <p className="col-start-9 col-end-11 row-start-1 row-end-2 text-2xs text-center">{weiThree.loc === "" ? ("") : (weiThree.loc)}</p>
        <p className="col-start-11 col-end-12 row-start-1 row-end-2 text-2xs text-center">{weiThree.ht === 0 ? (<GoDash size={13} />) : (weiThree.ht)}</p>
        <p className="col-start-12 col-end-17 row-start-1 row-end-2 text-2xs pl-1">{weiThree.dmg === "" ? ("") : (weiThree.dmg)}</p>
        <p className="col-start-16 col-end-18 row-start-1 row-end-2 text-2xs flex justify-center">{weiThree.min === 0 ? (<GoDash size={13} />) : (weiThree.min)}</p>
        <p className="col-start-18 col-end-19 row-start-1 row-end-2 text-2xs flex justify-center">{weiThree.sht === 0 ? (<GoDash size={13} />) : (weiThree.sht)}</p>
        <p className="col-start-19 col-end-21 row-start-1 row-end-2 text-2xs flex justify-center">{weiThree.med === 0 ? (<GoDash size={13} />) : (weiThree.med)}</p>
        <p className="col-start-21 col-end-22 row-start-1 row-end-2 text-2xs flex justify-center">{weiThree.lng === 0 ? (<GoDash size={13} />) : (weiThree.lng)}</p>
      </div>
      <GoPlusCircle size={12} onClick={() => {toggleWeiModal('four')}} className={weiThree.qty === 0 ? ("hidden") : ("col-start-1 col-end-2 row-start-16 row-end-17 bg-yellow-300 rounded-full hover:cursor-pointer flex mt-[2px] ml-[2px]")}/>
      <div className={weiFour.qty === 0 ? ("hidden") : ("grid grid-cols-22 grid-rows-1 col-start-1 col-end-23 row-start-16 row-end-17")}>
        <p className="col-start-2 col-end-3 row-start-1 row-end-2 text-2xs">{weiFour.qty === 0 ? ("") : (weiFour.qty)}</p>
        <p className="col-start-3 col-end-10 row-start-1 row-end-2 text-2xs">{weiFour.type === "" ? ("") : (weiFour.type)}</p>
        <p className="col-start-9 col-end-11 row-start-1 row-end-2 text-2xs text-center">{weiFour.loc === "" ? ("") : (weiFour.loc)}</p>
        <p className="col-start-11 col-end-12 row-start-1 row-end-2 text-2xs text-center">{weiFour.ht === 0 ? (<GoDash size={13} />) : (weiFour.ht)}</p>
        <p className="col-start-12 col-end-17 row-start-1 row-end-2 text-2xs pl-1">{weiFour.dmg === "" ? ("") : (weiFour.dmg)}</p>
        <p className="col-start-16 col-end-18 row-start-1 row-end-2 text-2xs flex justify-center">{weiFour.min === 0 ? (<GoDash size={13} />) : (weiFour.min)}</p>
        <p className="col-start-18 col-end-19 row-start-1 row-end-2 text-2xs flex justify-center">{weiFour.sht === 0 ? (<GoDash size={13} />) : (weiFour.sht)}</p>
        <p className="col-start-19 col-end-21 row-start-1 row-end-2 text-2xs flex justify-center">{weiFour.med === 0 ? (<GoDash size={13} />) : (weiFour.med)}</p>
        <p className="col-start-21 col-end-22 row-start-1 row-end-2 text-2xs flex justify-center">{weiFour.lng === 0 ? (<GoDash size={13} />) : (weiFour.lng)}</p>
      </div>
      <GoPlusCircle size={12} onClick={() => {toggleWeiModal('five')}} className={weiFour.qty === 0 ? ("hidden") : ("col-start-1 col-end-2 row-start-17 row-end-18 bg-yellow-300 rounded-full hover:cursor-pointer flex mt-[2px] ml-[2px]")}/>
      <div className={weiFive.qty === 0 ? ("hidden") : ("grid grid-cols-22 grid-rows-1 col-start-1 col-end-23 row-start-17 row-end-18")}>
        <p className="col-start-2 col-end-3 row-start-1 row-end-2 text-2xs">{weiFive.qty === 0 ? ("") : (weiFive.qty)}</p>
        <p className="col-start-3 col-end-10 row-start-1 row-end-2 text-2xs">{weiFive.type === "" ? ("") : (weiFive.type)}</p>
        <p className="col-start-9 col-end-11 row-start-1 row-end-2 text-2xs text-center">{weiFive.loc === "" ? ("") : (weiFive.loc)}</p>
        <p className="col-start-11 col-end-12 row-start-1 row-end-2 text-2xs text-center">{weiFive.ht === 0 ? (<GoDash size={13} />) : (weiFive.ht)}</p>
        <p className="col-start-12 col-end-17 row-start-1 row-end-2 text-2xs pl-1">{weiFive.dmg === "" ? ("") : (weiFive.dmg)}</p>
        <p className="col-start-16 col-end-18 row-start-1 row-end-2 text-2xs flex justify-center">{weiFive.min === 0 ? (<GoDash size={13} />) : (weiFive.min)}</p>
        <p className="col-start-18 col-end-19 row-start-1 row-end-2 text-2xs flex justify-center">{weiFive.sht === 0 ? (<GoDash size={13} />) : (weiFive.sht)}</p>
        <p className="col-start-19 col-end-21 row-start-1 row-end-2 text-2xs flex justify-center">{weiFive.med === 0 ? (<GoDash size={13} />) : (weiFive.med)}</p>
        <p className="col-start-21 col-end-22 row-start-1 row-end-2 text-2xs flex justify-center">{weiFive.lng === 0 ? (<GoDash size={13} />) : (weiFive.lng)}</p>
      </div>
      <GoPlusCircle size={12} onClick={() => {toggleWeiModal('six')}} className={weiFive.qty === 0 ? ("hidden") : ("col-start-1 col-end-2 row-start-18 row-end-19 bg-yellow-300 rounded-full hover:cursor-pointer flex mt-[2px] ml-[2px]")}/>
      <div className={weiSix.qty === 0 ? ("hidden") : ("grid grid-cols-22 grid-rows-1 col-start-1 col-end-23 row-start-18 row-end-19")}>
        <p className="col-start-2 col-end-3 row-start-1 row-end-2 text-2xs">{weiSix.qty === 0 ? ("") : (weiSix.qty)}</p>
        <p className="col-start-3 col-end-10 row-start-1 row-end-2 text-2xs">{weiSix.type === "" ? ("") : (weiSix.type)}</p>
        <p className="col-start-9 col-end-11 row-start-1 row-end-2 text-2xs text-center">{weiSix.loc === "" ? ("") : (weiSix.loc)}</p>
        <p className="col-start-11 col-end-12 row-start-1 row-end-2 text-2xs text-center">{weiSix.ht === 0 ? (<GoDash size={13} />) : (weiSix.ht)}</p>
        <p className="col-start-12 col-end-17 row-start-1 row-end-2 text-2xs pl-1">{weiSix.dmg === "" ? ("") : (weiSix.dmg)}</p>
        <p className="col-start-16 col-end-18 row-start-1 row-end-2 text-2xs flex justify-center">{weiSix.min === 0 ? (<GoDash size={13} />) : (weiSix.min)}</p>
        <p className="col-start-18 col-end-19 row-start-1 row-end-2 text-2xs flex justify-center">{weiSix.sht === 0 ? (<GoDash size={13} />) : (weiSix.sht)}</p>
        <p className="col-start-19 col-end-21 row-start-1 row-end-2 text-2xs flex justify-center">{weiSix.med === 0 ? (<GoDash size={13} />) : (weiSix.med)}</p>
        <p className="col-start-21 col-end-22 row-start-1 row-end-2 text-2xs flex justify-center">{weiSix.lng === 0 ? (<GoDash size={13} />) : (weiSix.lng)}</p>
      </div>
      <GoPlusCircle size={12} onClick={() => {toggleWeiModal('seven')}} className={weiSix.qty === 0 ? ("hidden") : ("col-start-1 col-end-2 row-start-19 row-end-20 bg-yellow-300 rounded-full hover:cursor-pointer flex mt-[2px] ml-[2px]")}/>
      <div className={weiSeven.qty === 0 ? ("hidden") : ("grid grid-cols-22 grid-rows-1 col-start-1 col-end-23 row-start-19 row-end-20")}>
        <p className="col-start-2 col-end-3 row-start-1 row-end-2 text-2xs">{weiSeven.qty === 0 ? ("") : (weiSeven.qty)}</p>
        <p className="col-start-3 col-end-10 row-start-1 row-end-2 text-2xs">{weiSeven.type === "" ? ("") : (weiSeven.type)}</p>
        <p className="col-start-9 col-end-11 row-start-1 row-end-2 text-2xs text-center">{weiSeven.loc === "" ? ("") : (weiSeven.loc)}</p>
        <p className="col-start-11 col-end-12 row-start-1 row-end-2 text-2xs text-center">{weiSeven.ht === 0 ? (<GoDash size={13} />) : (weiSeven.ht)}</p>
        <p className="col-start-12 col-end-17 row-start-1 row-end-2 text-2xs pl-1">{weiSeven.dmg === "" ? ("") : (weiSeven.dmg)}</p>
        <p className="col-start-16 col-end-18 row-start-1 row-end-2 text-2xs flex justify-center">{weiSeven.min === 0 ? (<GoDash size={13} />) : (weiSeven.min)}</p>
        <p className="col-start-18 col-end-19 row-start-1 row-end-2 text-2xs flex justify-center">{weiSeven.sht === 0 ? (<GoDash size={13} />) : (weiSeven.sht)}</p>
        <p className="col-start-19 col-end-21 row-start-1 row-end-2 text-2xs flex justify-center">{weiSeven.med === 0 ? (<GoDash size={13} />) : (weiSeven.med)}</p>
        <p className="col-start-21 col-end-22 row-start-1 row-end-2 text-2xs flex justify-center">{weiSeven.lng === 0 ? (<GoDash size={13} />) : (weiSeven.lng)}</p>
      </div>
      <GoPlusCircle size={12} onClick={() => {toggleWeiModal('eight')}} className={weiSeven.qty === 0 ? ("hidden") : ("col-start-1 col-end-2 row-start-20 row-end-21 bg-yellow-300 rounded-full hover:cursor-pointer flex mt-[2px] ml-[2px]")}/>
      <div className={weiEight.qty === 0 ? ("hidden") : ("grid grid-cols-22 grid-rows-1 col-start-1 col-end-23 row-start-20 row-end-21")}>
        <p className="col-start-2 col-end-3 row-start-1 row-end-2 text-2xs">{weiEight.qty === 0 ? ("") : (weiEight.qty)}</p>
        <p className="col-start-3 col-end-10 row-start-1 row-end-2 text-2xs">{weiEight.type === "" ? ("") : (weiEight.type)}</p>
        <p className="col-start-9 col-end-11 row-start-1 row-end-2 text-2xs text-center">{weiEight.loc === "" ? ("") : (weiEight.loc)}</p>
        <p className="col-start-11 col-end-12 row-start-1 row-end-2 text-2xs text-center">{weiEight.ht === 0 ? (<GoDash size={13} />) : (weiEight.ht)}</p>
        <p className="col-start-12 col-end-17 row-start-1 row-end-2 text-2xs pl-1">{weiEight.dmg === "" ? ("") : (weiEight.dmg)}</p>
        <p className="col-start-16 col-end-18 row-start-1 row-end-2 text-2xs flex justify-center">{weiEight.min === 0 ? (<GoDash size={13} />) : (weiEight.min)}</p>
        <p className="col-start-18 col-end-19 row-start-1 row-end-2 text-2xs flex justify-center">{weiEight.sht === 0 ? (<GoDash size={13} />) : (weiEight.sht)}</p>
        <p className="col-start-19 col-end-21 row-start-1 row-end-2 text-2xs flex justify-center">{weiEight.med === 0 ? (<GoDash size={13} />) : (weiEight.med)}</p>
        <p className="col-start-21 col-end-22 row-start-1 row-end-2 text-2xs flex justify-center">{weiEight.lng === 0 ? (<GoDash size={13} />) : (weiEight.lng)}</p>
      </div>

      <p className="col-start-2 col-end-23 row-start-25 row-end-26 text-2xs"><span className="font-bold">Ammo: </span>{mechData.ammo}</p>
      <span className="col-start-1 col-end-23 row-start-27 border-b-2 border-black mx-1"/>
      <p className="col-start-3 col-end-16 row-start-28 row-end-29 text-xs"><span className="font-bold">BV: </span>{mechData.bv}</p>
      <img src={MechDataImage} alt="sailboat lookin' thing" className="col-start-18 col-end-20 row-start-28 row-end-30 mt-1"/>
    </div>
  );
};
