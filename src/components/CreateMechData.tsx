//import//
import { useState } from "react";
import MechDataImage from "../assets/MechDataImage.jpg";
import { AiOutlineCloseCircle } from "react-icons/ai";
//unused imports//
import { GoDash, GoPlusCircle } from "react-icons/go";
//unused imports//

type MechDataType = {
  type: string;
  walking: number;
  running: number;
  jumping: number;
  tonnage: number;
  techBase: string;
  rulesLevel: string;
  role: string;
};

type WeaponsEquipmentInventoryType = {
  qty: number;
  type: string;
  loc: string;
  ht: number;
  dmg: string;
  min: number;
  sht: number;
  med: number;
  lng: number;
};

type WeaponType = {
  one: boolean;
  two: boolean;
  three: boolean;
  four: boolean;
  five: boolean;
  six: boolean;
  seven: boolean;
  eight: boolean;
}

export const CreateMechData: React.FC = () => {
  const [mechModal, setMechModal] = useState<boolean>(false);
  const [weiModal, setWeiModal] = useState<WeaponType>({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
  });
  const [mechData, setMechData] = useState<MechDataType>({
    type: "",
    walking: 0,
    running: 0,
    jumping: 0,
    tonnage: 0,
    techBase: "",
    rulesLevel: "",
    role: "",
  });
  const [weiOne, setWeiOne] =
    useState<WeaponsEquipmentInventoryType>({
      qty: 0,
      type: "",
      loc: "",
      ht: 0,
      dmg: "",
      min: 0,
      sht: 0,
      med: 0,
      lng: 0,
    });
  const [weiTwo, setWeiTwo] =
    useState<WeaponsEquipmentInventoryType>({
      qty: 0,
      type: "",
      loc: "",
      ht: 0,
      dmg: "",
      min: 0,
      sht: 0,
      med: 0,
      lng: 0,
    });
  const [weiThree, setWeiThree] =
    useState<WeaponsEquipmentInventoryType>({
      qty: 0,
      type: "",
      loc: "",
      ht: 0,
      dmg: "",
      min: 0,
      sht: 0,
      med: 0,
      lng: 0,
    });
  const [weiFour, setWeiFour] =
    useState<WeaponsEquipmentInventoryType>({
      qty: 0,
      type: "",
      loc: "",
      ht: 0,
      dmg: "",
      min: 0,
      sht: 0,
      med: 0,
      lng: 0,
    });
  const [weiFive, setWeiFive] =
    useState<WeaponsEquipmentInventoryType>({
      qty: 0,
      type: "",
      loc: "",
      ht: 0,
      dmg: "",
      min: 0,
      sht: 0,
      med: 0,
      lng: 0,
    });
  const [weiSix, setWeiSix] =
    useState<WeaponsEquipmentInventoryType>({
      qty: 0,
      type: "",
      loc: "",
      ht: 0,
      dmg: "",
      min: 0,
      sht: 0,
      med: 0,
      lng: 0,
    });
  const [weiSeven, setWeiSeven] =
    useState<WeaponsEquipmentInventoryType>({
      qty: 0,
      type: "",
      loc: "",
      ht: 0,
      dmg: "",
      min: 0,
      sht: 0,
      med: 0,
      lng: 0,
    });
  const [weiEight, setWeiEight] =
    useState<WeaponsEquipmentInventoryType>({
      qty: 0,
      type: "",
      loc: "",
      ht: 0,
      dmg: "",
      min: 0,
      sht: 0,
      med: 0,
      lng: 0,
    });

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
    setMechModal(false);
  };

  const saveWeiModal = (weapon: string): void => {
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
        [propertyName]: e.target.value
      }))
    }
  }

  const handleWeiValue = (weapon: string) => {
    const value = getValue(weapon)
    if (value) {
      return value;
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

  const getValue = (weapon: string) => {
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
                  placeholder={mechData.jumping.toString()}
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
          {mechData.type === "" ? (
            ""
          ) : (
            <>
              <span className="bg-green-400">{mechData.type}</span>
              <AiOutlineCloseCircle
                onClick={() => handleDelete("type", "string")}
                className="bg-red-400 ml-1 hover:cursor-pointer"
              />
            </>
          )}
        </p>
      </div>
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
            <span className="bg-green-400 px-2">{mechData.walking}</span>{" "}
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
            <span className="bg-green-400 px-2">{mechData.running}</span>{" "}
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
            <span className="bg-green-400 px-2">{mechData.jumping}</span>{" "}
            <AiOutlineCloseCircle
              onClick={() => handleDelete("jumping", "number")}
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
            <span className="bg-green-400 px-2">{mechData.tonnage}</span>{" "}
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
            <span className="bg-green-400 px-2">{mechData.techBase}</span>{" "}
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
            <span className="bg-green-400 px-2">{mechData.rulesLevel}</span>{" "}
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
            <span className="bg-green-400 px-2">{mechData.role}</span>{" "}
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
      <p className="col-start-2 col-end-3 row-start-13 row-end-14 text-2xs">{weiOne.qty === 0 ? ("") : (weiOne.qty)}</p>
      <p className="col-start-3 col-end-10 row-start-13 row-end-14 text-2xs">{weiOne.type === "" ? ("") : (weiOne.type)}</p>
      <p className="col-start-9 col-end-11 row-start-13 row-end-14 text-2xs text-center">Loc 1</p>
      <p className="col-start-11 col-end-12 row-start-13 row-end-14 text-2xs text-center"><GoDash size={13} /></p>
      <p className="col-start-12 col-end-17 row-start-13 row-end-14 text-2xs pl-1">[E]</p>
      <p className="col-start-16 col-end-18 row-start-13 row-end-14 text-2xs flex justify-center"><GoDash size={13} /></p>
      <p className="col-start-18 col-end-19 row-start-13 row-end-14 text-2xs flex justify-center"><GoDash size={13} /></p>
      <p className="col-start-19 col-end-21 row-start-13 row-end-14 text-2xs flex justify-center"><GoDash size={13} /></p>
      <p className="col-start-21 col-end-22 row-start-13 row-end-14 text-2xs flex justify-center"><GoDash size={13} /></p>

      <GoPlusCircle size={12} onClick={() => {toggleWeiModal('two')}} className="col-start-1 col-end-2 row-start-14 row-end-15 bg-yellow-300 rounded-full hover:cursor-pointer flex mt-[2px] ml-[2px]"/>
      <p className="col-start-2 col-end-3 row-start-14 row-end-15 text-2xs">2</p>
      <p className="col-start-3 col-end-10 row-start-14 row-end-15 text-2xs">Machine Gun</p>
      <p className="col-start-9 col-end-11 row-start-14 row-end-15 text-2xs text-center">RA</p>
      <p className="col-start-11 col-end-12 row-start-14 row-end-15 text-2xs text-center"><GoDash size={13} /></p>
      <p className="col-start-12 col-end-17 row-start-14 row-end-15 text-2xs pl-1">2 [DB, AI]</p>
      <p className="col-start-16 col-end-18 row-start-14 row-end-15 text-2xs flex justify-center"><GoDash size={13} /></p>
      <p className="col-start-18 col-end-19 row-start-14 row-end-15 text-2xs flex justify-center">1</p>
      <p className="col-start-19 col-end-21 row-start-14 row-end-15 text-2xs flex justify-center">2</p>
      <p className="col-start-21 col-end-22 row-start-14 row-end-15 text-2xs flex justify-center">3</p>
      
      <p className="col-start-2 col-end-3 row-start-15 row-end-16 text-2xs">1</p>
      <p className="col-start-3 col-end-10 row-start-15 row-end-16 text-2xs">Flamer</p>
      <p className="col-start-9 col-end-11 row-start-15 row-end-16 text-2xs text-center">RA</p>
      <p className="col-start-11 col-end-12 row-start-15 row-end-16 text-2xs text-center">3</p>
      <p className="col-start-12 col-end-17 row-start-15 row-end-16 text-2xs pl-1">2 [DE, H, AI]</p>
      <p className="col-start-16 col-end-18 row-start-15 row-end-16 text-2xs flex justify-center"><GoDash size={13} /></p>
      <p className="col-start-18 col-end-19 row-start-15 row-end-16 text-2xs flex justify-center">1</p>
      <p className="col-start-19 col-end-21 row-start-15 row-end-16 text-2xs flex justify-center">2</p>
      <p className="col-start-21 col-end-22 row-start-15 row-end-16 text-2xs flex justify-center">3</p>

      <p className="col-start-2 col-end-3 row-start-16 row-end-17 text-2xs">2</p>
      <p className="col-start-3 col-end-10 row-start-16 row-end-17 text-2xs">Anti-Missile System</p>
      <p className="col-start-9 col-end-11 row-start-16 row-end-17 text-2xs text-center">LA</p>
      <p className="col-start-11 col-end-12 row-start-16 row-end-17 text-2xs text-center">1</p>
      <p className="col-start-12 col-end-17 row-start-16 row-end-17 text-2xs pl-1">[PD]</p>
      <p className="col-start-16 col-end-18 row-start-16 row-end-17 text-2xs flex justify-center"><GoDash size={13} /></p>
      <p className="col-start-18 col-end-19 row-start-16 row-end-17 text-2xs flex justify-center"><GoDash size={13} /></p>
      <p className="col-start-19 col-end-21 row-start-16 row-end-17 text-2xs flex justify-center"><GoDash size={13} /></p>
      <p className="col-start-21 col-end-22 row-start-16 row-end-17 text-2xs flex justify-center"><GoDash size={13} /></p>

      <p className="col-start-2 col-end-3 row-start-17 row-end-18 text-2xs">1</p>
      <p className="col-start-3 col-end-10 row-start-17 row-end-18 text-2xs">TAG</p>
      <p className="col-start-9 col-end-11 row-start-17 row-end-18 text-2xs text-center">LA</p>
      <p className="col-start-11 col-end-12 row-start-17 row-end-18 text-2xs text-center"><GoDash size={13} /></p>
      <p className="col-start-12 col-end-17 row-start-17 row-end-18 text-2xs pl-1">[E]</p>
      <p className="col-start-16 col-end-18 row-start-17 row-end-18 text-2xs flex justify-center"><GoDash size={13} /></p>
      <p className="col-start-18 col-end-19 row-start-17 row-end-18 text-2xs flex justify-center">5</p>
      <p className="col-start-19 col-end-21 row-start-17 row-end-18 text-2xs flex justify-center">9</p>
      <p className="col-start-21 col-end-22 row-start-17 row-end-18 text-2xs flex justify-center">15</p>

      <p className="col-start-2 col-end-3 row-start-18 row-end-19 text-2xs">1</p>
      <p className="col-start-3 col-end-10 row-start-18 row-end-19 text-2xs">A-Pod</p>
      <p className="col-start-9 col-end-11 row-start-18 row-end-19 text-2xs text-center">RL</p>
      <p className="col-start-11 col-end-12 row-start-18 row-end-19 text-2xs text-center"><GoDash size={13} /></p>
      <p className="col-start-12 col-end-17 row-start-18 row-end-19 text-2xs pl-1">[PD, OS, AI]</p>
      <p className="col-start-16 col-end-18 row-start-18 row-end-19 text-2xs flex justify-center"><GoDash size={13} /></p>
      <p className="col-start-18 col-end-19 row-start-18 row-end-19 text-2xs flex justify-center"><GoDash size={13} /></p>
      <p className="col-start-19 col-end-21 row-start-18 row-end-19 text-2xs flex justify-center"><GoDash size={13} /></p>
      <p className="col-start-21 col-end-22 row-start-18 row-end-19 text-2xs flex justify-center"><GoDash size={13} /></p>

      <p className="col-start-2 col-end-3 row-start-19 row-end-20 text-2xs">1</p>
      <p className="col-start-3 col-end-10 row-start-19 row-end-20 text-2xs">A-Pod</p>
      <p className="col-start-9 col-end-11 row-start-19 row-end-20 text-2xs text-center">LL</p>
      <p className="col-start-11 col-end-12 row-start-19 row-end-20 text-2xs text-center"><GoDash size={13} /></p>
      <p className="col-start-12 col-end-17 row-start-19 row-end-20 text-2xs pl-1">[PD, OS, AI]</p>
      <p className="col-start-16 col-end-18 row-start-19 row-end-20 text-2xs flex justify-center"><GoDash size={13} /></p>
      <p className="col-start-18 col-end-19 row-start-19 row-end-20 text-2xs flex justify-center"><GoDash size={13} /></p>
      <p className="col-start-19 col-end-21 row-start-19 row-end-20 text-2xs flex justify-center"><GoDash size={13} /></p>
      <p className="col-start-21 col-end-22 row-start-19 row-end-20 text-2xs flex justify-center"><GoDash size={13} /></p>

      <p className="col-start-2 col-end-23 row-start-25 row-end-26 text-2xs">Ammo: [AMS] 72, [Machine Gun] 100</p>
      <span className="col-start-1 col-end-23 row-start-27 border-b-2 border-black mx-1"/>
      <p className="col-start-3 col-end-16 row-start-28 row-end-29 text-xs"><span className="font-bold">BV:</span>{" "}<span className="text-red-700">608 :setBV!!</span></p>
      <img src={MechDataImage} alt="sailboat lookin' thing" className="col-start-18 col-end-20 row-start-28 row-end-30 mt-1"/>
    </div>
  );
};
