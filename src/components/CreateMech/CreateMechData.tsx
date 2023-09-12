//import//
import { useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { MechDataType, WeaponType, WeaponsEquipmentInventoryType } from "../../types/types";
import MechDataImage from "../../assets/MechDataImage.jpg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GoDash, GoPlusCircle } from "react-icons/go";

interface CreateMechDataProps {
  id: string
}

export const CreateMechData: React.FC<CreateMechDataProps> = ({ id }) => {
  const [mechModal, setMechModal] = useState<boolean>(false);
  const [weiModal, setWeiModal] = useState<WeaponType>({ one: false, two: false, three: false, four: false, five: false, six: false, seven: false, eight: false });
  const [mechData, setMechData] = useState<MechDataType>({ type: "", walking: 0, running: 0, jumping: 0, tonnage: 0, techBase: "", rulesLevel: "", role: "", ammo: "", bv: 0 });
  const [weiOne, setWeiOne] = useState<WeaponsEquipmentInventoryType>({ qty: 0, type: "", loc: "", ht: 0, dmg: "", min: 0, sht: 0, med: 0, lng: 0 });
  const [weiTwo, setWeiTwo] = useState<WeaponsEquipmentInventoryType>({ qty: 0, type: "", loc: "", ht: 0, dmg: "", min: 0, sht: 0, med: 0, lng: 0 });
  const [weiThree, setWeiThree] = useState<WeaponsEquipmentInventoryType>({ qty: 0, type: "", loc: "", ht: 0, dmg: "", min: 0, sht: 0, med: 0, lng: 0 });
  const [weiFour, setWeiFour] = useState<WeaponsEquipmentInventoryType>({ qty: 0, type: "", loc: "", ht: 0, dmg: "", min: 0, sht: 0, med: 0, lng: 0 });
  const [weiFive, setWeiFive] = useState<WeaponsEquipmentInventoryType>({ qty: 0, type: "", loc: "", ht: 0, dmg: "", min: 0, sht: 0, med: 0, lng: 0 });
  const [weiSix, setWeiSix] = useState<WeaponsEquipmentInventoryType>({ qty: 0, type: "", loc: "", ht: 0, dmg: "", min: 0, sht: 0, med: 0, lng: 0 });
  const [weiSeven, setWeiSeven] = useState<WeaponsEquipmentInventoryType>({ qty: 0, type: "", loc: "", ht: 0, dmg: "", min: 0, sht: 0, med: 0, lng: 0 });
  const [weiEight, setWeiEight] = useState<WeaponsEquipmentInventoryType>({ qty: 0, type: "", loc: "", ht: 0, dmg: "", min: 0, sht: 0, med: 0, lng: 0 });

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

  const handleDelete = (name: string, type: "string" | "number") => {
    setMechData((prev) => ({
      ...prev,
      [name]: type === "string" ? "" : 0,
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

  const handleWeiValue = (weapon: string) => {
    const value = getValue(weapon)
    if (value) {
      return value;
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

      {mechModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="bg-white p-4 rounded-lg z-50 flex flex-col">
            <p className="text-2xl font-bold text-center w-full bg-blue-300 rounded-md py-2">
              Mech Data:
            </p>
            {/* Modal content goes here */}
            <div className="w-full flex pt-4">
              <label htmlFor="" className="font-bold">
                Mech Type
              </label>
              <input
                type="text"
                value={mechData.type}
                name="type"
                placeholder={mechData.type}
                onChange={handleChange}
                className="border-2 border-black ml-2 pl-2 w-[80%]"
              />
            </div>
            <div className="flex pt-2">
              <div className="flex w-[50%]">
                <label htmlFor="" className="font-bold">
                  Walking
                </label>
                <input
                  type="number"
                  value={mechData.walking}
                  name="walking"
                  placeholder={mechData.walking.toString()}
                  onChange={handleChange}
                  className="border-2 border-black ml-3 pl-2 w-[25%]"
                />
              </div>
              <div className="flex w-[50%]">
                <label htmlFor="" className="font-bold">
                  Tonnage
                </label>
                <input
                  type="number"
                  value={mechData.tonnage}
                  name="tonnage"
                  placeholder={mechData.tonnage.toString()}
                  onChange={handleChange}
                  className="border-2 border-black ml-2 pl-2 w-[25%]"
                />
              </div>
            </div>
            <div className="flex pt-2">
              <div className="flex w-[50%]">
                <label htmlFor="" className="font-bold">
                  Running
                </label>
                <input
                  type="number"
                  value={mechData.running}
                  name="running"
                  placeholder={mechData.running.toString()}
                  onChange={handleChange}
                  className="border-2 border-black ml-3 pl-2 w-[25%]"
                />
              </div>
              <div className="flex w-[50%]">
                <label htmlFor="" className="font-bold">
                  Tech Base
                </label>
                <input
                  type="text"
                  value={mechData.techBase}
                  name="techBase"
                  placeholder={mechData.techBase}
                  onChange={handleChange}
                  className="border-2 border-black ml-2 pl-2 w-[70%]"
                />
              </div>
            </div>
            <div className="flex pt-2">
              <div className="flex w-[50%]">
                <label htmlFor="" className="font-bold">
                  Jumping
                </label>
                <input
                  type="number"
                  value={mechData.jumping}
                  name="jumping"
                  placeholder={mechData.jumping === 0 ? "0" : mechData.jumping.toString()}
                  onChange={handleChange}
                  className="border-2 border-black ml-2 pl-2 w-[26%]"
                />
              </div>
              <div className="flex w-[50%]">
                <label htmlFor="" className="font-bold">
                  Rules Level
                </label>
                <input
                  type="text"
                  value={mechData.rulesLevel}
                  name="rulesLevel"
                  placeholder={mechData.rulesLevel}
                  onChange={handleChange}
                  className="border-2 border-black ml-2 pl-2 w-[66%]"
                />
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <div className="flex w-[50%]">
                <label htmlFor="" className="font-bold">
                  Role
                </label>
                <input
                  type="text"
                  value={mechData.role}
                  name="role"
                  placeholder={mechData.role}
                  onChange={handleChange}
                  className="border-2 border-black ml-2 pl-2 w-[84%]"
                />
              </div>
            </div>
            <div className="flex flex-col items-start pt-2 w-[75%]">
              <div className="w-full">
                <label htmlFor="" className="font-bold">
                  Ammo
                </label>
                <input
                  type="text"
                  value={mechData.ammo}
                  name="ammo"
                  placeholder={mechData.ammo}
                  onChange={handleChange}
                  className="border-2 border-black ml-2 pl-2 w-[84%]"
                />
              </div>
              <div className="w-full pt-2">
                <label htmlFor="" className="font-bold pl-5">
                  BV#
                </label>
                <input
                  type="number"
                  value={mechData.bv}
                  name="bv"
                  placeholder={mechData.bv.toString()}
                  onChange={handleChange}
                  className="border-2 border-black ml-2 pl-2 w-[20%]"
                />
              </div>
                
            </div>
            <div className="flex justify-around">
              <button
                onClick={closeModal}
                className="bg-red-400 px-4 rounded-lg mt-4"
              >
                Cancel
              </button>
              <button
                onClick={saveModal}
                className="bg-green-400 px-6 rounded-lg mt-4"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      
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
      {Object.entries(weiModal).map(([weapon, isOpen]) => {
        if (isOpen) {
          return (
            <div key={weapon} className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="bg-white p-4 rounded-lg z-50 flex flex-col">
            <p className="text-2xl font-bold text-center w-full bg-blue-300 rounded-md py-2 px-4">
              Weapons & Equipment Inventory ({weapon.toUpperCase()})
            </p>
            <div className="flex items-center py-4">
              <div className="flex flex-col">
                <label htmlFor="" className="pl-4 font-bold">
                  Qty
                </label>
                <input
                  type="number"
                  name={`${weapon}.qty`}
                  value={handleWeiValue(weapon)?.qty}
                  placeholder={handleWeiValue(weapon)?.qty.toString()}
                  onChange={(e) => handleWeiChange(weapon, 'qty', e)}
                  className="border-2 border-black ml-2 pl-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="pl-4 font-bold">
                  Type
                </label>
                <input
                  type="text"
                  name={`${weapon}.type`}
                  value={handleWeiValue(weapon)?.type}
                  placeholder={handleWeiValue(weapon)?.type}
                  onChange={(e) => handleWeiChange(weapon, 'type', e)}
                  className="border-2 border-black ml-2 pl-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="pl-4 font-bold">
                  Loc
                </label>
                <input
                  type="text"
                  name={`${weapon}.loc`}
                  value={handleWeiValue(weapon)?.loc}
                  placeholder={handleWeiValue(weapon)?.loc}
                  onChange={(e) => handleWeiChange(weapon, 'loc', e)}
                  className="border-2 border-black ml-2 pl-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="pl-4 font-bold">
                  Ht
                </label>
                <input
                  type="number"
                  name={`${weapon}.ht`}
                  value={handleWeiValue(weapon)?.ht}
                  placeholder={handleWeiValue(weapon)?.ht.toString()}
                  onChange={(e) => handleWeiChange(weapon, 'ht', e)}
                  className="border-2 border-black ml-2 pl-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="pl-4 font-bold">
                  Dmg
                </label>
                <input
                  type="text"
                  name={`${weapon}.dmg`}
                  value={handleWeiValue(weapon)?.dmg}
                  placeholder={handleWeiValue(weapon)?.dmg}
                  onChange={(e) => handleWeiChange(weapon, 'dmg', e)}
                  className="border-2 border-black ml-2 pl-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="pl-4 font-bold">
                  Min
                </label>
                <input
                  type="number"
                  name={`${weapon}.min`}
                  value={handleWeiValue(weapon)?.min}
                  placeholder={handleWeiValue(weapon)?.min.toString()}
                  onChange={(e) => handleWeiChange(weapon, 'min', e)}
                  className="border-2 border-black ml-2 pl-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="pl-4 font-bold">
                  Sht
                </label>
                <input
                  type="number"
                  name={`${weapon}.sht`}
                  value={handleWeiValue(weapon)?.sht}
                  placeholder={handleWeiValue(weapon)?.sht.toString()}
                  onChange={(e) => handleWeiChange(weapon, 'sht', e)}
                  className="border-2 border-black ml-2 pl-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="pl-4 font-bold">
                  Med
                </label>
                <input
                  type="number"
                  name={`${weapon}.med`}
                  value={handleWeiValue(weapon)?.med}
                  placeholder={handleWeiValue(weapon)?.med.toString()}
                  onChange={(e) => handleWeiChange(weapon, 'med', e)}
                  className="border-2 border-black ml-2 pl-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="pl-4 font-bold">
                  Lng
                </label>
                <input
                  type="number"
                  name={`${weapon}.lng`}
                  value={handleWeiValue(weapon)?.lng}
                  placeholder={handleWeiValue(weapon)?.lng.toString()}
                  onChange={(e) => handleWeiChange(weapon, 'lng', e)}
                  className="border-2 border-black ml-2 pl-2"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button name={weapon} onClick={() => closeWeiModal(weapon)} className="bg-red-400 px-4 rounded-lg mt-4 mx-4">Cancel</button>
              <button name={weapon} onClick={() => saveWeiModal(weapon)} className="bg-green-400 px-6 rounded-lg mt-4 mx-4">Save</button>
            </div>
          </div>
        </div>
          )
        }
      })}
        
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
