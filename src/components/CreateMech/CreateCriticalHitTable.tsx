//import//
import { useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { ModalType, CriticalHitTableType, ICriticalHitTable } from "../../types/types";
import DamageTransferDiagram from "../../assets/DamageTransferDiagram.jpg";
import { BiCircle } from "react-icons/bi";
import { GoPlusCircle } from "react-icons/go";

interface CreateCriticalHitTableProps {
  id: string
  mechInfo: ICriticalHitTable[]
}

export const CreateCriticalHitTable: React.FC<CreateCriticalHitTableProps> = ({ id, mechInfo }) => {
  const [modal, setModal] = useState<ModalType>({ leftArm: false, leftTorso: false, leftLeg: false, head: false, centerTorso: false, rightArm: false, rightTorso: false, rightLeg: false });
  const [input, setInput] = useState<CriticalHitTableType>({ one: "input", two: "input", three: "input", four: "input", five: "input", six: "input", seven: "input", eight: "input", nine: "input", ten: "input", eleven: "input", twelve: "input" });
  const [leftArm, setLeftArm] = useState<CriticalHitTableType>({ one: mechInfo[0]?.leftArmOne || "", two: mechInfo[0]?.leftArmTwo || "", three: mechInfo[0]?.leftArmThree || "", four: mechInfo[0]?.leftArmFour || "", five: mechInfo[0]?.leftArmFive || "", six: mechInfo[0]?.leftArmSix || "", seven: mechInfo[0]?.leftArmSeven || "", eight: mechInfo[0]?.leftArmEight || "", nine: mechInfo[0]?.leftArmNine || "", ten: mechInfo[0]?.leftArmTen || "", eleven: mechInfo[0]?.leftArmEleven || "", twelve: mechInfo[0]?.leftArmTwelve || "" });
  const [leftTorso, setLeftTorso] = useState<CriticalHitTableType>({ one: mechInfo[0]?.leftTorsoOne || "", two: mechInfo[0]?.leftTorsoTwo || "", three: mechInfo[0]?.leftTorsoThree || "", four: mechInfo[0]?.leftTorsoFour || "", five: mechInfo[0]?.leftTorsoFive || "", six: mechInfo[0]?.leftTorsoSix || "", seven: mechInfo[0]?.leftTorsoSeven || "", eight: mechInfo[0]?.leftTorsoEight || "", nine: mechInfo[0]?.leftTorsoNine || "", ten: mechInfo[0]?.leftTorsoTen || "", eleven: mechInfo[0]?.leftTorsoEleven || "", twelve: mechInfo[0]?.leftTorsoTwelve || "" });
  const [leftLeg, setLeftLeg] = useState<CriticalHitTableType>({ one: mechInfo[0]?.leftLegOne || "", two: mechInfo[0]?.leftLegTwo || "", three: mechInfo[0]?.leftLegThree || "", four: mechInfo[0]?.leftLegFour || "", five: mechInfo[0]?.leftLegFive || "", six: mechInfo[0]?.leftLegSix || "" });
  const [head, setHead] = useState<CriticalHitTableType>({ one: mechInfo[0]?.headOne || "", two: mechInfo[0]?.headTwo || "", three: mechInfo[0]?.headThree || "", four: mechInfo[0]?.headFour || "", five: mechInfo[0]?.headFive || "", six: mechInfo[0]?.headSix || "" });
  const [centerTorso, setCenterTorso] = useState<CriticalHitTableType>({ one: mechInfo[0]?.centerTorsoOne || "", two: mechInfo[0]?.centerTorsoTwo || "", three: mechInfo[0]?.centerTorsoThree || "", four: mechInfo[0]?.centerTorsoFour || "", five: mechInfo[0]?.centerTorsoFive || "", six: mechInfo[0]?.centerTorsoSix || "", seven: mechInfo[0]?.centerTorsoSeven || "", eight: mechInfo[0]?.centerTorsoEight || "", nine: mechInfo[0]?.centerTorsoNine || "", ten: mechInfo[0]?.centerTorsoTen || "", eleven: mechInfo[0]?.centerTorsoEleven || "", twelve: mechInfo[0]?.centerTorsoTwelve || "" });
  const [rightArm, setRightArm] = useState<CriticalHitTableType>({ one: mechInfo[0]?.rightArmOne || "", two: mechInfo[0]?.rightArmTwo || "", three: mechInfo[0]?.rightArmThree || "", four: mechInfo[0]?.rightArmFour || "", five: mechInfo[0]?.rightArmFive || "", six: mechInfo[0]?.rightArmSix || "", seven: mechInfo[0]?.rightArmSeven || "", eight: mechInfo[0]?.rightArmEight || "", nine: mechInfo[0]?.rightArmNine || "", ten: mechInfo[0]?.rightArmTen || "", eleven: mechInfo[0]?.rightArmEleven || "", twelve: mechInfo[0]?.rightArmTwelve || "" });
  const [rightTorso, setRightTorso] = useState<CriticalHitTableType>({ one: mechInfo[0]?.rightTorsoOne || "", two: mechInfo[0]?.rightTorsoTwo || "", three: mechInfo[0]?.rightTorsoThree || "", four: mechInfo[0]?.rightTorsoFour || "", five: mechInfo[0]?.rightTorsoFive || "", six: mechInfo[0]?.rightTorsoSix || "", seven: mechInfo[0]?.rightTorsoSeven || "", eight: mechInfo[0]?.rightTorsoEight || "", nine: mechInfo[0]?.rightTorsoNine || "", ten: mechInfo[0]?.rightTorsoTen || "", eleven: mechInfo[0]?.rightTorsoEleven || "", twelve: mechInfo[0]?.rightTorsoTwelve || "" });
  const [rightLeg, setRightLeg] = useState<CriticalHitTableType>({ one: mechInfo[0]?.rightLegOne || "", two: mechInfo[0]?.rightLegTwo || "", three: mechInfo[0]?.rightLegThree || "", four: mechInfo[0]?.rightLegFour || "", five: mechInfo[0]?.rightLegFive || "", six: mechInfo[0]?.rightLegSix || "" });

  const handleInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleModal = (name: keyof ModalType): void => {
    setInput({ one: "input", two: "input", three: "input", four: "input", five: "input", six: "input", seven: "input", eight: "input", nine: "input", ten: "input", eleven: "input", twelve: "input" });
    setModal((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const closeModal = (name: string): void => {
    setModal((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const saveModal = (name: string): void => {
    const valueArray = getValue(name)
    if (valueArray) {
      saveCriticalHitData(name, valueArray)
      setModal((prev) => ({
        ...prev,
        [name]: false,
      }));
    }  
  };

  const handleChange = (bodyPart: string, propertyName: string, e: any) => {
    e.preventDefault();
    const setter = getSetter(bodyPart);
    if (setter) {
      setter?.setter((prev) => ({
        ...prev,
        [propertyName]: e.target.value,
      }));
    }
  };
  
  const handleValue = (bodyPart: string) => {
    const value = getValue(bodyPart);
    if (value) {
      return value;
    }
  };

  const saveCriticalHitData = async (bodyPart: string, value: CriticalHitTableType) => {
    try {
      const updatedData = {
        [`${bodyPart}One`]: value.one,
        [`${bodyPart}Two`]: value.two,
        [`${bodyPart}Three`]: value.three,
        [`${bodyPart}Four`]: value.four,
        [`${bodyPart}Five`]: value.five,
        [`${bodyPart}Six`]: value.six,
      }
      if (value.seven !== undefined) {
        updatedData[`${bodyPart}Seven`] = value.seven
        updatedData[`${bodyPart}Eight`] = value.eight
        updatedData[`${bodyPart}Nine`] = value.nine
        updatedData[`${bodyPart}Ten`] = value.ten
        updatedData[`${bodyPart}Eleven`] = value.eleven
        updatedData[`${bodyPart}Twelve`] = value.twelve
      }
      await updateDoc(doc(db, 'mechs', id), updatedData)
    } catch (error) {
      console.error('error saving data', error);
    }
  };
  
  
  

  const getSetter = (bodyPart: string) => {
    switch (bodyPart) {
      case "leftArm":
        return { setter: setLeftArm, name: "setLeftArm" };
      case "leftTorso":
        return { setter: setLeftTorso, name: "setLeftTorso" };
      case "leftLeg":
        return { setter: setLeftLeg, name: "setLeftLeg" };
      case "head":
        return { setter: setHead, name: "setHead" };
      case "centerTorso":
        return { setter: setCenterTorso, name: "setCenterTorso" };
      case "rightArm":
        return { setter: setRightArm, name: "setRightArm" };
      case "rightTorso":
        return { setter: setRightTorso, name: "setRightTorso" };
      case "rightLeg":
        return { setter: setRightLeg, name: "setRightLeg" };
    }
  };

  const getValue = (bodyPart: string) => {
    switch (bodyPart) {
      case "leftArm":
        return leftArm;
      case "leftTorso":
        return leftTorso;
      case "leftLeg":
        return leftLeg;
      case "head":
        return head;
      case "centerTorso":
        return centerTorso;
      case "rightArm":
        return rightArm;
      case "rightTorso":
        return rightTorso;
      case "rightLeg":
        return rightLeg;
    }
  };

  return (
    <div className="grid grid-cols-38 grid-rows-47 w-full h-full">
      <p className="col-start-1 col-end-14 row-start-1 row-end-3 bg-black text-white text-sm text-center z-10 rounded-full pt-[2px]">
        CRITICAL HIT TABLE
      </p>
      <div className="col-start-1 col-end-39 row-start-1 row-end-48" />
      <span className="col-start-1 col-end-39 row-start-2 row-end-48 border-2 border-black rounded-lg" />

      {Object.entries(modal).map(([bodyPart, isOpen]) => {
        if (isOpen) {
          return (
            <div
              key={bodyPart}
              className="fixed inset-0 flex items-center justify-center z-50"
            >
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <div className="bg-white p-4 rounded-lg z-50 flex flex-col">
                <p className="text-2xl font-bold text-center w-full bg-blue-300 rounded-md py-2 px-4">
                  Critical Hit Table: {bodyPart.toUpperCase()}
                </p>
                {/* Modal content goes here */}
                <div className="w-full flex pt-4">
                  <label htmlFor="" className="font-bold w-8">
                    1.
                  </label>
                  <select
                    name="one"
                    id="one"
                    value={input.one}
                    onChange={(e) => {
                      handleInput(e);
                      if (
                        e.target.value === "Endo Steel" ||
                        e.target.value === "Ferro Fibrous" ||
                        e.target.value === "Roll Again"
                      ) {
                        handleChange(bodyPart, "one", e);
                      }
                    }}
                  >
                    <option value="input">Critical Hit</option>
                    <option value="Endo Steel">Endo Steel</option>
                    <option value="Ferro Fibrous">Ferro Fibrous</option>
                    <option value="Roll Again">Roll Again</option>
                  </select>
                  {input.one === "input" ? (
                    <input
                      id="one"
                      type="text"
                      value={handleValue(bodyPart)?.one}
                      name={`${bodyPart}.one`}
                      placeholder={handleValue(bodyPart)?.one}
                      onChange={(e) => {
                        handleChange(bodyPart, "one", e);
                      }}
                      className="border-2 border-black ml-2 pl-2 w-[80%]"
                    />
                  ) : (
                    <p className="pl-4">{input.one}</p>
                  )}
                </div>
                <div className="w-full flex pt-4">
                  <label htmlFor="" className="font-bold w-8">
                    2.
                  </label>
                  <select
                    name="two"
                    id="two"
                    value={input.two}
                    onChange={(e) => {
                      handleInput(e);
                      if (
                        e.target.value === "Endo Steel" ||
                        e.target.value === "Ferro Fibrous" ||
                        e.target.value === "Roll Again"
                      ) {
                        handleChange(bodyPart, "two", e);
                      }
                    }}
                  >
                    <option value="input">Critical Hit</option>
                    <option value="Endo Steel">Endo Steel</option>
                    <option value="Ferro Fibrous">Ferro Fibrous</option>
                    <option value="Roll Again">Roll Again</option>
                  </select>
                  {input.two === "input" ? (
                    <input
                      id="two"
                      type="text"
                      value={handleValue(bodyPart)?.two}
                      name={`${bodyPart}.two`}
                      placeholder={handleValue(bodyPart)?.two}
                      onChange={(e) => {
                        handleChange(bodyPart, "two", e);
                      }}
                      className="border-2 border-black ml-2 pl-2 w-[80%]"
                    />
                  ) : (
                    <p className="pl-4">{input.two}</p>
                  )}
                </div>
                <div className="w-full flex pt-4">
                  <label htmlFor="" className="font-bold w-8">
                    3.
                  </label>
                  <select
                    name="three"
                    id="three"
                    value={input.three}
                    onChange={(e) => {
                      handleInput(e);
                      if (
                        e.target.value === "Endo Steel" ||
                        e.target.value === "Ferro Fibrous" ||
                        e.target.value === "Roll Again"
                      ) {
                        handleChange(bodyPart, "three", e);
                      }
                    }}
                  >
                    <option value="input">Critical Hit</option>
                    <option value="Endo Steel">Endo Steel</option>
                    <option value="Ferro Fibrous">Ferro Fibrous</option>
                    <option value="Roll Again">Roll Again</option>
                  </select>
                  {input.three === "input" ? (
                    <input
                      id="three"
                      type="text"
                      value={handleValue(bodyPart)?.three}
                      name={`${bodyPart}.three`}
                      placeholder={handleValue(bodyPart)?.three}
                      onChange={(e) => {
                        handleChange(bodyPart, "three", e);
                      }}
                      className="border-2 border-black ml-2 pl-2 w-[80%]"
                    />
                  ) : (
                    <p className="pl-4">{input.three}</p>
                  )}
                </div>
                <div className="w-full flex pt-4">
                  <label htmlFor="" className="font-bold w-8">
                    4.
                  </label>
                  <select
                    name="four"
                    id="four"
                    value={input.four}
                    onChange={(e) => {
                      handleInput(e);
                      if (
                        e.target.value === "Endo Steel" ||
                        e.target.value === "Ferro Fibrous" ||
                        e.target.value === "Roll Again"
                      ) {
                        handleChange(bodyPart, "four", e);
                      }
                    }}
                  >
                    <option value="input">Critical Hit</option>
                    <option value="Endo Steel">Endo Steel</option>
                    <option value="Ferro Fibrous">Ferro Fibrous</option>
                    <option value="Roll Again">Roll Again</option>
                  </select>
                  {input.four === "input" ? (
                    <input
                      id="four"
                      type="text"
                      value={handleValue(bodyPart)?.four}
                      name={`${bodyPart}.four`}
                      placeholder={handleValue(bodyPart)?.four}
                      onChange={(e) => {
                        handleChange(bodyPart, "four", e);
                      }}
                      className="border-2 border-black ml-2 pl-2 w-[80%]"
                    />
                  ) : (
                    <p className="pl-4">{input.four}</p>
                  )}
                </div>
                <div className="w-full flex pt-4">
                  <label htmlFor="" className="font-bold w-8">
                    5.
                  </label>
                  <select
                    name="five"
                    id="five"
                    value={input.five}
                    onChange={(e) => {
                      handleInput(e);
                      if (
                        e.target.value === "Endo Steel" ||
                        e.target.value === "Ferro Fibrous" ||
                        e.target.value === "Roll Again"
                      ) {
                        handleChange(bodyPart, "five", e);
                      }
                    }}
                  >
                    <option value="input">Critical Hit</option>
                    <option value="Endo Steel">Endo Steel</option>
                    <option value="Ferro Fibrous">Ferro Fibrous</option>
                    <option value="Roll Again">Roll Again</option>
                  </select>
                  {input.five === "input" ? (
                    <input
                      id="five"
                      type="text"
                      value={handleValue(bodyPart)?.five}
                      name={`${bodyPart}.five`}
                      placeholder={handleValue(bodyPart)?.five}
                      onChange={(e) => {
                        handleChange(bodyPart, "five", e);
                      }}
                      className="border-2 border-black ml-2 pl-2 w-[80%]"
                    />
                  ) : (
                    <p className="pl-4">{input.five}</p>
                  )}
                </div>
                <div className="w-full flex pt-4">
                  <label htmlFor="" className="font-bold w-8">
                    6.
                  </label>
                  <select
                    name="six"
                    id="six"
                    value={input.six}
                    onChange={(e) => {
                      handleInput(e);
                      if (
                        e.target.value === "Endo Steel" ||
                        e.target.value === "Ferro Fibrous" ||
                        e.target.value === "Roll Again"
                      ) {
                        handleChange(bodyPart, "six", e);
                      }
                    }}
                  >
                    <option value="input">Critical Hit</option>
                    <option value="Endo Steel">Endo Steel</option>
                    <option value="Ferro Fibrous">Ferro Fibrous</option>
                    <option value="Roll Again">Roll Again</option>
                  </select>
                  {input.six === "input" ? (
                    <input
                      id="six"
                      type="text"
                      value={handleValue(bodyPart)?.six}
                      name={`${bodyPart}.six`}
                      placeholder={handleValue(bodyPart)?.six}
                      onChange={(e) => {
                        handleChange(bodyPart, "six", e);
                      }}
                      className="border-2 border-black ml-2 pl-2 w-[80%]"
                    />
                  ) : (
                    <p className="pl-4">{input.six}</p>
                  )}
                </div>
                <div
                  className={
                    handleValue(bodyPart)?.seven === undefined
                      ? "hidden"
                      : "w-full flex pt-4"
                  }
                >
                  <label htmlFor="" className="font-bold w-8">
                    7.
                  </label>
                  <select
                    name="seven"
                    id="seven"
                    value={input.seven}
                    onChange={(e) => {
                      handleInput(e);
                      if (
                        e.target.value === "Endo Steel" ||
                        e.target.value === "Ferro Fibrous" ||
                        e.target.value === "Roll Again"
                      ) {
                        handleChange(bodyPart, "seven", e);
                      }
                    }}
                  >
                    <option value="input">Critical Hit</option>
                    <option value="Endo Steel">Endo Steel</option>
                    <option value="Ferro Fibrous">Ferro Fibrous</option>
                    <option value="Roll Again">Roll Again</option>
                  </select>
                  {input.seven === "input" ? (
                    <input
                      id="seven"
                      type="text"
                      value={handleValue(bodyPart)?.seven}
                      name={`${bodyPart}.seven`}
                      placeholder={handleValue(bodyPart)?.seven}
                      onChange={(e) => {
                        handleChange(bodyPart, "seven", e);
                      }}
                      className="border-2 border-black ml-2 pl-2 w-[80%]"
                    />
                  ) : (
                    <p className="pl-4">{input.seven}</p>
                  )}
                </div>
                <div
                  className={
                    handleValue(bodyPart)?.eight === undefined
                      ? "hidden"
                      : "w-full flex pt-4"
                  }
                >
                  <label htmlFor="" className="font-bold w-8">
                    8.
                  </label>
                  <select
                    name="eight"
                    id="eight"
                    value={input.eight}
                    onChange={(e) => {
                      handleInput(e);
                      if (
                        e.target.value === "Endo Steel" ||
                        e.target.value === "Ferro Fibrous" ||
                        e.target.value === "Roll Again"
                      ) {
                        handleChange(bodyPart, "eight", e);
                      }
                    }}
                  >
                    <option value="input">Critical Hit</option>
                    <option value="Endo Steel">Endo Steel</option>
                    <option value="Ferro Fibrous">Ferro Fibrous</option>
                    <option value="Roll Again">Roll Again</option>
                  </select>
                  {input.eight === "input" ? (
                    <input
                      id="eight"
                      type="text"
                      value={handleValue(bodyPart)?.eight}
                      name={`${bodyPart}.eight`}
                      placeholder={handleValue(bodyPart)?.eight}
                      onChange={(e) => {
                        handleChange(bodyPart, "eight", e);
                      }}
                      className="border-2 border-black ml-2 pl-2 w-[80%]"
                    />
                  ) : (
                    <p className="pl-4">{input.eight}</p>
                  )}
                </div>
                <div
                  className={
                    handleValue(bodyPart)?.nine === undefined
                      ? "hidden"
                      : "w-full flex pt-4"
                  }
                >
                  <label htmlFor="" className="font-bold w-8">
                    9.
                  </label>
                  <select
                    name="nine"
                    id="nine"
                    value={input.nine}
                    onChange={(e) => {
                      handleInput(e);
                      if (
                        e.target.value === "Endo Steel" ||
                        e.target.value === "Ferro Fibrous" ||
                        e.target.value === "Roll Again"
                      ) {
                        handleChange(bodyPart, "nine", e);
                      }
                    }}
                  >
                    <option value="input">Critical Hit</option>
                    <option value="Endo Steel">Endo Steel</option>
                    <option value="Ferro Fibrous">Ferro Fibrous</option>
                    <option value="Roll Again">Roll Again</option>
                  </select>
                  {input.nine === "input" ? (
                    <input
                      id="nine"
                      type="text"
                      value={handleValue(bodyPart)?.nine}
                      name={`${bodyPart}.nine`}
                      placeholder={handleValue(bodyPart)?.nine}
                      onChange={(e) => {
                        handleChange(bodyPart, "nine", e);
                      }}
                      className="border-2 border-black ml-2 pl-2 w-[80%]"
                    />
                  ) : (
                    <p className="pl-4">{input.nine}</p>
                  )}
                </div>
                <div
                  className={
                    handleValue(bodyPart)?.ten === undefined
                      ? "hidden"
                      : "w-full flex pt-4"
                  }
                >
                  <label htmlFor="" className="font-bold w-8">
                    10.
                  </label>
                  <select
                    name="ten"
                    id="ten"
                    value={input.ten}
                    onChange={(e) => {
                      handleInput(e);
                      if (
                        e.target.value === "Endo Steel" ||
                        e.target.value === "Ferro Fibrous" ||
                        e.target.value === "Roll Again"
                      ) {
                        handleChange(bodyPart, "ten", e);
                      }
                    }}
                  >
                    <option value="input">Critical Hit</option>
                    <option value="Endo Steel">Endo Steel</option>
                    <option value="Ferro Fibrous">Ferro Fibrous</option>
                    <option value="Roll Again">Roll Again</option>
                  </select>
                  {input.ten === "input" ? (
                    <input
                      id="ten"
                      type="text"
                      value={handleValue(bodyPart)?.ten}
                      name={`${bodyPart}.ten`}
                      placeholder={handleValue(bodyPart)?.ten}
                      onChange={(e) => {
                        handleChange(bodyPart, "ten", e);
                      }}
                      className="border-2 border-black ml-2 pl-2 w-[80%]"
                    />
                  ) : (
                    <p className="pl-4">{input.ten}</p>
                  )}
                </div>
                <div
                  className={
                    handleValue(bodyPart)?.eleven === undefined
                      ? "hidden"
                      : "w-full flex pt-4"
                  }
                >
                  <label htmlFor="" className="font-bold w-8">
                    11.
                  </label>
                  <select
                    name="eleven"
                    id="eleven"
                    value={input.eleven}
                    onChange={(e) => {
                      handleInput(e);
                      if (
                        e.target.value === "Endo Steel" ||
                        e.target.value === "Ferro Fibrous" ||
                        e.target.value === "Roll Again"
                      ) {
                        handleChange(bodyPart, "eleven", e);
                      }
                    }}
                  >
                    <option value="input">Critical Hit</option>
                    <option value="Endo Steel">Endo Steel</option>
                    <option value="Ferro Fibrous">Ferro Fibrous</option>
                    <option value="Roll Again">Roll Again</option>
                  </select>
                  {input.eleven === "input" ? (
                    <input
                      id="eleven"
                      type="text"
                      value={handleValue(bodyPart)?.eleven}
                      name={`${bodyPart}.eleven`}
                      placeholder={handleValue(bodyPart)?.eleven}
                      onChange={(e) => {
                        handleChange(bodyPart, "eleven", e);
                      }}
                      className="border-2 border-black ml-2 pl-2 w-[80%]"
                    />
                  ) : (
                    <p className="pl-4">{input.eleven}</p>
                  )}
                </div>
                <div
                  className={
                    handleValue(bodyPart)?.twelve === undefined
                      ? "hidden"
                      : "w-full flex pt-4"
                  }
                >
                  <label htmlFor="" className="font-bold w-8">
                    12.
                  </label>
                  <select
                    name="twelve"
                    id="twelve"
                    value={input.twelve}
                    onChange={(e) => {
                      handleInput(e);
                      if (
                        e.target.value === "Endo Steel" ||
                        e.target.value === "Ferro Fibrous" ||
                        e.target.value === "Roll Again"
                      ) {
                        handleChange(bodyPart, "twelve", e);
                      }
                    }}
                  >
                    <option value="input">Critical Hit</option>
                    <option value="Endo Steel">Endo Steel</option>
                    <option value="Ferro Fibrous">Ferro Fibrous</option>
                    <option value="Roll Again">Roll Again</option>
                  </select>
                  {input.twelve === "input" ? (
                    <input
                      id="twelve"
                      type="text"
                      value={handleValue(bodyPart)?.twelve}
                      name={`${bodyPart}.twelve`}
                      placeholder={handleValue(bodyPart)?.twelve}
                      onChange={(e) => {
                        handleChange(bodyPart, "twelve", e);
                      }}
                      className="border-2 border-black ml-2 pl-2 w-[80%]"
                    />
                  ) : (
                    <p className="pl-4">{input.twelve}</p>
                  )}
                </div>
                <div className="flex justify-around">
                  <button 
                    name={bodyPart} 
                    onClick={() => closeModal(bodyPart)} 
                    className="bg-red-400 px-4 rounded-lg mt-4"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => saveModal(bodyPart)} 
                    className="bg-green-400 px-6 rounded-lg mt-4"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
      <GoPlusCircle onClick={() => {toggleModal("leftArm")}} className="col-start-3 col-end-4 row-start-4 row-end-5 bg bg-yellow-300 text-black rounded-full ml-3 mt-[2px] hover:cursor-pointer"/>
      <p className="col-start-5 col-end-15 row-start-4 row-end-5 text-sm"><span className="font-bold">Left Arm</span> [CASE]</p>
      <p className="col-start-2 col-end-4 row-start-8 row-end-10 text-sm font-bold">1-3</p>
      <p className="col-start-4 col-end-15 row-start-6 row-end-7 text-2xs font-bold">1. {leftArm.one === "" ? ("") : (leftArm.one)}</p>
      <p className="col-start-4 col-end-15 row-start-7 row-end-8 text-2xs font-bold">2. {leftArm.two === "" ? ("") : (leftArm.two)}</p>
      <p className="col-start-4 col-end-15 row-start-8 row-end-9 text-2xs font-bold">3. {leftArm.three === "" ? ("") : (leftArm.three)}</p>
      <p className="col-start-4 col-end-15 row-start-9 row-end-10 text-2xs font-bold">4. {leftArm.four === "" ? ("") : (leftArm.four)}</p>
      <p className="col-start-4 col-end-15 row-start-10 row-end-11 text-2xs font-bold">5. {leftArm.five === "" ? ("") : (leftArm.five)}</p>
      <p className="col-start-4 col-end-15 row-start-11 row-end-12 text-2xs font-bold">6. {leftArm.six === "" ? ("") : (leftArm.six)}</p>
      <p className="col-start-2 col-end-4 row-start-15 row-end-17 text-sm font-bold">4-6</p>
      <p className="col-start-4 col-end-15 row-start-13 row-end-14 text-2xs"><span className="font-bold">1.</span> {leftArm.seven === "" ? ("") : (leftArm.seven)}</p>
      <p className="col-start-4 col-end-15 row-start-14 row-end-15 text-2xs"><span className="font-bold">2.</span> {leftArm.eight === "" ? ("") : (leftArm.eight)}</p>
      <p className="col-start-4 col-end-15 row-start-15 row-end-16 text-2xs"><span className="font-bold">3.</span> {leftArm.nine === "" ? ("") : (leftArm.nine)}</p>
      <p className="col-start-4 col-end-15 row-start-16 row-end-17 text-2xs"><span className="font-bold">4.</span> {leftArm.ten === "" ? ("") : (leftArm.ten)}</p>
      <p className="col-start-4 col-end-15 row-start-17 row-end-18 text-2xs"><span className="font-bold">5.</span> {leftArm.eleven === "" ? ("") : (leftArm.eleven)}</p>
      <p className="col-start-4 col-end-15 row-start-18 row-end-19 text-2xs"><span className="font-bold">6.</span> {leftArm.twelve === "" ? ("") : (leftArm.twelve)}</p>
      <GoPlusCircle onClick={() => {toggleModal("leftTorso")}} className="col-start-3 col-end-4 row-start-21 row-end-22 bg bg-yellow-300 text-black rounded-full ml-3 mt-[2px] hover:cursor-pointer"/>
      <p className="col-start-5 col-end-15 row-start-21 row-end-22 text-sm font-bold">Left Torso</p>
      <p className="col-start-2 col-end-4 row-start-25 row-end-27 text-sm font-bold">1-3</p>
      <p className="col-start-4 col-end-15 row-start-23 row-end-24 text-2xs font-bold">1. {leftTorso.one === "" ? ("") : (leftTorso.one)}</p>
      <p className="col-start-4 col-end-15 row-start-24 row-end-25 text-2xs font-bold">2. {leftTorso.two === "" ? ("") : (leftTorso.two)}</p>
      <p className="col-start-4 col-end-15 row-start-25 row-end-26 text-2xs font-bold">3. {leftTorso.three === "" ? ("") : (leftTorso.three)}</p>
      <p className="col-start-4 col-end-15 row-start-26 row-end-27 text-2xs font-bold">4. {leftTorso.four === "" ? ("") : (leftTorso.four)}</p>
      <p className="col-start-4 col-end-15 row-start-27 row-end-28 text-2xs font-bold">5. {leftTorso.five === "" ? ("") : (leftTorso.five)}</p>
      <p className="col-start-4 col-end-15 row-start-28 row-end-29 text-2xs font-bold">6. {leftTorso.six === "" ? ("") : (leftTorso.six)}</p>
      <p className="col-start-2 col-end-4 row-start-32 row-end-34 text-sm font-bold">4-6</p>
      <p className="col-start-4 col-end-15 row-start-30 row-end-31 text-2xs"><span className="font-bold">1. </span>{leftTorso.seven === "" ? ("") : (leftTorso.seven)}</p>
      <p className="col-start-4 col-end-15 row-start-31 row-end-32 text-2xs"><span className="font-bold">2. </span>{leftTorso.eight === "" ? ("") : (leftTorso.eight)}</p>
      <p className="col-start-4 col-end-15 row-start-32 row-end-33 text-2xs"><span className="font-bold">3. </span>{leftTorso.nine === "" ? ("") : (leftTorso.nine)}</p>
      <p className="col-start-4 col-end-15 row-start-33 row-end-34 text-2xs"><span className="font-bold">4. </span>{leftTorso.ten === "" ? ("") : (leftTorso.ten)}</p>
      <p className="col-start-4 col-end-15 row-start-34 row-end-35 text-2xs"><span className="font-bold">5. </span>{leftTorso.eleven === "" ? ("") : (leftTorso.eleven)}</p>
      <p className="col-start-4 col-end-15 row-start-35 row-end-36 text-2xs"><span className="font-bold">6. </span>{leftTorso.twelve === "" ? ("") : (leftTorso.twelve)}</p>
      <GoPlusCircle onClick={() => {toggleModal("leftLeg")}} className="col-start-3 col-end-4 row-start-38 row-end-39 bg bg-yellow-300 text-black rounded-full ml-3 mt-[2px] hover:cursor-pointer"/>
      <p className="col-start-5 col-end-15 row-start-38 row-end-39 text-sm font-bold">Left Leg</p>
      <p className="col-start-4 col-end-15 row-start-40 row-end-41 text-2xs"><span className="font-bold">1. {leftLeg.one === "" ? ("") : (leftLeg.one)}</span></p>
      <p className="col-start-4 col-end-15 row-start-41 row-end-42 text-2xs"><span className="font-bold">2. {leftLeg.two === "" ? ("") : (leftLeg.two)}</span></p>
      <p className="col-start-4 col-end-15 row-start-42 row-end-43 text-2xs"><span className="font-bold">3. {leftLeg.three === "" ? ("") : (leftLeg.three)}</span></p>
      <p className="col-start-4 col-end-15 row-start-43 row-end-44 text-2xs"><span className="font-bold">4. {leftLeg.four === "" ? ("") : (leftLeg.four)}</span></p>
      <p className="col-start-4 col-end-15 row-start-44 row-end-45 text-2xs"><span className="font-bold">5. </span>{leftLeg.five === "" ? ("") : (leftLeg.five)}</p>
      <p className="col-start-4 col-end-15 row-start-45 row-end-46 text-2xs"><span className="font-bold">6. </span>{leftLeg.six === "" ? ("") : (leftLeg.six)}</p>
      <GoPlusCircle onClick={() => {toggleModal("head")}} className="col-start-15 col-end-16 row-start-4 row-end-5 bg bg-yellow-300 text-black rounded-full ml-3 mt-[2px] hover:cursor-pointer"/>
      <p className="col-start-17 col-end-25 row-start-4 row-end-5 text-sm font-bold">Head</p>
      <p className="col-start-16 col-end-25 row-start-6 row-end-7 text-2xs font-bold">1. {head.one === "" ? ("") : (head.one)}</p>
      <p className="col-start-16 col-end-25 row-start-7 row-end-8 text-2xs font-bold">2. {head.two === "" ? ("") : (head.two)}</p>
      <p className="col-start-16 col-end-25 row-start-8 row-end-9 text-2xs font-bold">3. {head.three === "" ? ("") : (head.three)}</p>
      <p className="col-start-16 col-end-25 row-start-9 row-end-10 text-2xs font-bold">4. {head.four === "" ? ("") : (head.four)}</p>
      <p className="col-start-16 col-end-25 row-start-10 row-end-11 text-2xs font-bold">5. {head.five === "" ? ("") : (head.five)}</p>
      <p className="col-start-16 col-end-25 row-start-11 row-end-12 text-2xs font-bold">6. {head.six === "" ? ("") : (head.six)}</p>
      <GoPlusCircle onClick={() => {toggleModal("centerTorso")}} className="col-start-15 col-end-16 row-start-14 row-end-15 bg bg-yellow-300 text-black rounded-full ml-3 mt-[2px] hover:cursor-pointer"/>
      <p className="col-start-17 col-end-25 row-start-14 row-end-15 text-sm font-bold">Center Torso</p>
      <p className="col-start-14 col-end-16 row-start-18 row-end-20 text-sm font-bold">1-3</p>
      <p className="col-start-16 col-end-25 row-start-16 row-end-17 text-2xs font-bold">1. {centerTorso.one === "" ? ("") : (centerTorso.one)}</p>
      <p className="col-start-16 col-end-25 row-start-17 row-end-18 text-2xs font-bold">2. {centerTorso.two === "" ? ("") : (centerTorso.two)}</p>
      <p className="col-start-16 col-end-25 row-start-18 row-end-19 text-2xs font-bold">3. {centerTorso.three === "" ? ("") : (centerTorso.three)}</p>
      <p className="col-start-16 col-end-25 row-start-19 row-end-20 text-2xs font-bold">4. {centerTorso.four === "" ? ("") : (centerTorso.four)}</p>
      <p className="col-start-16 col-end-25 row-start-20 row-end-21 text-2xs font-bold">5. {centerTorso.five === "" ? ("") : (centerTorso.five)}</p>
      <p className="col-start-16 col-end-25 row-start-21 row-end-22 text-2xs font-bold">6. {centerTorso.six === "" ? ("") : (centerTorso.six)}</p>
      <p className="col-start-14 col-end-16 row-start-25 row-end-27 text-sm font-bold">4-6</p>
      <p className="col-start-16 col-end-25 row-start-23 row-end-24 text-2xs"><span className="font-bold">1. </span>{centerTorso.seven === "" ? ("") : (centerTorso.seven)}</p>
      <p className="col-start-16 col-end-25 row-start-24 row-end-25 text-2xs"><span className="font-bold">2. </span>{centerTorso.eight === "" ? ("") : (centerTorso.eight)}</p>
      <p className="col-start-16 col-end-25 row-start-25 row-end-26 text-2xs"><span className="font-bold">3. </span>{centerTorso.nine === "" ? ("") : (centerTorso.nine)}</p>
      <p className="col-start-16 col-end-25 row-start-26 row-end-27 text-2xs"><span className="font-bold">4. </span>{centerTorso.ten === "" ? ("") : (centerTorso.ten)}</p>
      <p className="col-start-16 col-end-25 row-start-27 row-end-28 text-2xs"><span className="font-bold">5. </span>{centerTorso.eleven === "" ? ("") : (centerTorso.eleven)}</p>
      <p className="col-start-16 col-end-25 row-start-28 row-end-29 text-2xs"><span className="font-bold">6. </span>{centerTorso.twelve === "" ? ("") : (centerTorso.twelve)}</p>
      <span className="col-start-15 col-end-26 row-start-30 row-end-36 border-2 border-black rounded-lg" />
      <p className="col-start-15 col-end-21 row-start-31 row-end-32 text-xs font-bold text-right">Engine Hits</p>
      <p className="col-start-15 col-end-21 row-start-32 row-end-33 text-xs font-bold text-right">Gyro Hits</p>
      <p className="col-start-15 col-end-21 row-start-33 row-end-34 text-xs font-bold text-right">Sensor Hits</p>
      <p className="col-start-15 col-end-21 row-start-34 row-end-35 text-xs font-bold text-right">Life Support</p>
      <p className="col-start-22 col-end-26 row-start-31 row-end-32 text-right flex pt-[2px]"><BiCircle size={13} /><BiCircle size={13} /><BiCircle size={13} /></p>
      <p className="col-start-22 col-end-26 row-start-32 row-end-33 text-right flex pt-[2px]"><BiCircle size={13} /><BiCircle size={13} /></p>
      <p className="col-start-22 col-end-26 row-start-33 row-end-34 text-right flex pt-[2px]"><BiCircle size={13} /><BiCircle size={13} /></p>
      <p className="col-start-22 col-end-26 row-start-34 row-end-35 text-right flex pt-[2px]"><BiCircle size={13} /></p>
      <img src={DamageTransferDiagram} alt="damage transfer diagram" className="col-start-15 col-end-26 row-start-37 row-end-48"/>
      <GoPlusCircle onClick={() => {toggleModal("rightArm")}} className="col-start-27 col-end-28 row-start-4 row-end-5 bg bg-yellow-300 text-black rounded-full ml-3 mt-[2px] hover:cursor-pointer"/>
      <p className="col-start-29 col-end-49 row-start-4 row-end-5 text-sm"><span className="font-bold">Right Arm</span> [CASE]</p>
      <p className="col-start-26 col-end-28 row-start-8 row-end-10 text-sm font-bold">1-3</p>
      <p className="col-start-28 col-end-39 row-start-6 row-end-7 text-2xs font-bold">1. {rightArm.one === "" ? ("") : (rightArm.one)}</p>
      <p className="col-start-28 col-end-39 row-start-7 row-end-8 text-2xs font-bold">2. {rightArm.two === "" ? ("") : (rightArm.two)}</p>
      <p className="col-start-28 col-end-39 row-start-8 row-end-9 text-2xs font-bold">3. {rightArm.three === "" ? ("") : (rightArm.three)}</p>
      <p className="col-start-28 col-end-39 row-start-9 row-end-10 text-2xs font-bold">4. {rightArm.four === "" ? ("") : (rightArm.four)}</p>
      <p className="col-start-28 col-end-39 row-start-10 row-end-11 text-2xs font-bold">5. {rightArm.five === "" ? ("") : (rightArm.five)}</p>
      <p className="col-start-28 col-end-39 row-start-11 row-end-12 text-2xs font-bold">6. {rightArm.six === "" ? ("") : (rightArm.six)}</p>
      <p className="col-start-26 col-end-28 row-start-15 row-end-17 text-sm font-bold">4-6</p>
      <p className="col-start-28 col-end-39 row-start-13 row-end-14 text-2xs"><span className="font-bold">1. </span>{rightArm.seven === "" ? ("") : (rightArm.seven)}</p>
      <p className="col-start-28 col-end-39 row-start-14 row-end-15 text-2xs"><span className="font-bold">2. </span>{rightArm.eight === "" ? ("") : (rightArm.eight)}</p>
      <p className="col-start-28 col-end-39 row-start-15 row-end-16 text-2xs"><span className="font-bold">3. </span>{rightArm.nine === "" ? ("") : (rightArm.nine)}</p>
      <p className="col-start-28 col-end-39 row-start-16 row-end-17 text-2xs"><span className="font-bold">4. </span>{rightArm.ten === "" ? ("") : (rightArm.ten)}</p>
      <p className="col-start-28 col-end-39 row-start-17 row-end-18 text-2xs"><span className="font-bold">5. </span>{rightArm.eleven === "" ? ("") : (rightArm.eleven)}</p>
      <p className="col-start-28 col-end-39 row-start-18 row-end-19 text-2xs"><span className="font-bold">6. </span>{rightArm.twelve === "" ? ("") : (rightArm.twelve)}</p>
      <GoPlusCircle onClick={() => {toggleModal("rightTorso")}} className="col-start-27 col-end-28 row-start-21 row-end-22 bg bg-yellow-300 text-black rounded-full ml-3 mt-[2px] hover:cursor-pointer"/>
      <p className="col-start-29 col-end-49 row-start-21 row-end-22 text-sm font-bold">Right Torso</p>
      <p className="col-start-26 col-end-28 row-start-25 row-end-27 text-sm font-bold">1-3</p>
      <p className="col-start-28 col-end-39 row-start-23 row-end-24 text-2xs font-bold">1. {rightTorso.one === "" ? ("") : (rightTorso.one)}</p>
      <p className="col-start-28 col-end-39 row-start-24 row-end-25 text-2xs font-bold">2. {rightTorso.two === "" ? ("") : (rightTorso.two)}</p>
      <p className="col-start-28 col-end-39 row-start-25 row-end-26 text-2xs font-bold">3. {rightTorso.three === "" ? ("") : (rightTorso.three)}</p>
      <p className="col-start-28 col-end-39 row-start-26 row-end-27 text-2xs font-bold">4. {rightTorso.four === "" ? ("") : (rightTorso.four)}</p>
      <p className="col-start-28 col-end-39 row-start-27 row-end-28 text-2xs font-bold">5. {rightTorso.five === "" ? ("") : (rightTorso.five)}</p>
      <p className="col-start-28 col-end-39 row-start-28 row-end-29 text-2xs font-bold">6. {rightTorso.six === "" ? ("") : (rightTorso.six)}</p>
      <p className="col-start-26 col-end-28 row-start-32 row-end-34 text-sm font-bold">4-6</p>
      <p className="col-start-28 col-end-39 row-start-30 row-end-31 text-2xs"><span className="font-bold">1. </span>{rightTorso.seven === "" ? ("") : (rightTorso.seven)}</p>
      <p className="col-start-28 col-end-39 row-start-31 row-end-32 text-2xs"><span className="font-bold">2. </span>{rightTorso.eight === "" ? ("") : (rightTorso.eight)}</p>
      <p className="col-start-28 col-end-39 row-start-32 row-end-33 text-2xs"><span className="font-bold">3. </span>{rightTorso.nine === "" ? ("") : (rightTorso.nine)}</p>
      <p className="col-start-28 col-end-39 row-start-33 row-end-34 text-2xs"><span className="font-bold">4. </span>{rightTorso.ten === "" ? ("") : (rightTorso.ten)}</p>
      <p className="col-start-28 col-end-39 row-start-34 row-end-35 text-2xs"><span className="font-bold">5. </span>{rightTorso.eleven === "" ? ("") : (rightTorso.eleven)}</p>
      <p className="col-start-28 col-end-39 row-start-35 row-end-36 text-2xs"><span className="font-bold">6. </span>{rightTorso.twelve === "" ? ("") : (rightTorso.twelve)}</p>
      <GoPlusCircle onClick={() => {toggleModal("rightLeg")}} className="col-start-27 col-end-28 row-start-38 row-end-39 bg bg-yellow-300 text-black rounded-full ml-3 mt-[2px] hover:cursor-pointer"/>
      <p className="col-start-29 col-end-49 row-start-38 row-end-39 text-sm font-bold">Right Leg</p>
      <p className="col-start-28 col-end-39 row-start-40 row-end-41 text-2xs"><span className="font-bold">1. {rightLeg.one === "" ? ("") : (rightLeg.one)}</span></p>
      <p className="col-start-28 col-end-39 row-start-41 row-end-42 text-2xs"><span className="font-bold">2. {rightLeg.two === "" ? ("") : (rightLeg.two)}</span></p>
      <p className="col-start-28 col-end-39 row-start-42 row-end-43 text-2xs"><span className="font-bold">3. {rightLeg.three === "" ? ("") : (rightLeg.three)}</span></p>
      <p className="col-start-28 col-end-39 row-start-43 row-end-44 text-2xs"><span className="font-bold">4. {rightLeg.four === "" ? ("") : (rightLeg.four)}</span></p>
      <p className="col-start-28 col-end-39 row-start-44 row-end-45 text-2xs"><span className="font-bold">5. </span>{rightLeg.five === "" ? ("") : (rightLeg.five)}</p>
      <p className="col-start-28 col-end-39 row-start-45 row-end-46 text-2xs"><span className="font-bold">6. </span>{rightLeg.six === "" ? ("") : (rightLeg.six)}</p>
    </div>
  );
};
