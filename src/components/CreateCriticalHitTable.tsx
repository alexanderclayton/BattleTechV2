//import//
import { useState } from "react";
import DamageTransferDiagram from "../assets/DamageTransferDiagram.jpg";
import { BiCircle } from "react-icons/bi";
import { GoPlusCircle } from "react-icons/go";

type ModalType = {
  leftArm: boolean;
  leftTorso: boolean;
  leftLeg: boolean;
  head: boolean;
  centerTorso: boolean;
  rightArm: boolean;
  rightTorso: boolean;
  rightLeg: boolean;
};

type CriticalHitTableType = {
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
  six: string;
  seven?: string;
  eight?: string;
  nine?: string;
  ten?: string;
  eleven?: string;
  twelve?: string;
};

export const CreateCriticalHitTable: React.FC = () => {
  const [modal, setModal] = useState<ModalType>({
    leftArm: false,
    leftTorso: false,
    leftLeg: false,
    head: false,
    centerTorso: false,
    rightArm: false,
    rightTorso: false,
    rightLeg: false,
  });

  const toggleModal = (name: keyof ModalType): void => {
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
    setModal((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const [leftArm, setLeftArm] = useState<CriticalHitTableType>({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
  });

  const [leftTorso, setLeftTorso] = useState<CriticalHitTableType>({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
  });

  const [leftLeg, setLeftLeg] = useState<CriticalHitTableType>({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
  });

  const [head, setHead] = useState<CriticalHitTableType>({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
  });

  const [centerTorso, setCenterTorso] = useState<CriticalHitTableType>({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
  });

  const [rightArm, setRightArm] = useState<CriticalHitTableType>({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
  });

  const [rightTorso, setRightTorso] = useState<CriticalHitTableType>({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
  });

  const [rightLeg, setRightLeg] = useState<CriticalHitTableType>({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
  });
  
  const handleValue = (bodyPart: string) => {
    const value = getValue(bodyPart);
    if (value) {
        return value;
    }
  };

  const handleChange = (bodyPart: string, propertyName: string, e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const setter = getSetter(bodyPart);
    console.log(handleValue(bodyPart))
    if (setter) {
      setter?.setter((prev) => ({
        ...prev,
        [propertyName]: e.target.value,
      }));
    }
  };

  const getSetter = (bodyPart: string) => {
    switch (bodyPart) {
      case "leftArm":
        return { setter: setLeftArm, name: "setLeftArm"};
      case "leftTorso":
        return { setter: setLeftTorso, name: "setLeftTorso"};;
      case "leftLeg":
        return { setter: setLeftLeg, name: "setLeftLeg"};;
      case "head":
        return { setter: setHead, name: "setHead"};;
      case "centerTorso":
        return { setter: setCenterTorso, name: "setCenterTorso"};;
      case "rightArm":
        return { setter: setRightArm, name: "setRightArm"};;
      case "rightTorso":
        return { setter: setRightTorso, name: "setRightTorso"};;
      case "rightLeg":
        return { setter: setRightLeg, name: "setRightLeg"};;
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
                  <input
                    type="text"
                    value={handleValue(bodyPart)?.one}
                    name={`${bodyPart}.one`}
                    placeholder={handleValue(bodyPart)?.one}
                    onChange={(e) => {
                        handleChange(bodyPart, 'one', e)}
                    }
                    className="border-2 border-black ml-2 pl-2 w-[80%]"
                  />
                </div>
                <div className="w-full flex pt-4">
                  <label htmlFor="" className="font-bold w-8">
                    2.
                  </label>
                  <input
                    type="text"
                    value={handleValue(bodyPart)?.two}
                    name={`${bodyPart}.two`}
                    placeholder={handleValue(bodyPart)?.two}
                    onChange={(e) => {
                        handleChange(bodyPart, 'two', e)}
                    }
                    className="border-2 border-black ml-2 pl-2 w-[80%]"
                  />
                </div>
                <div className="w-full flex pt-4">
                  <label htmlFor="" className="font-bold w-8">
                    3.
                  </label>
                  <input
                    type="text"
                    value={handleValue(bodyPart)?.three}
                    name={`${bodyPart}.three`}
                    placeholder={handleValue(bodyPart)?.three}
                    onChange={(e) => {
                        handleChange(bodyPart, 'three', e)}
                    }
                    className="border-2 border-black ml-2 pl-2 w-[80%]"
                  />
                </div>
                <div className="w-full flex pt-4">
                  <label htmlFor="" className="font-bold w-8">
                    4.
                  </label>
                  <input
                    type="text"
                    value={handleValue(bodyPart)?.four}
                    name={`${bodyPart}.four`}
                    placeholder={handleValue(bodyPart)?.four}
                    onChange={(e) => {
                        handleChange(bodyPart, 'four', e)}
                    }
                    className="border-2 border-black ml-2 pl-2 w-[80%]"
                  />
                </div>
                <div className="w-full flex pt-4">
                  <label htmlFor="" className="font-bold w-8">
                    5.
                  </label>
                  <input
                    type="text"
                    value={handleValue(bodyPart)?.five}
                    name={`${bodyPart}.five`}
                    placeholder={handleValue(bodyPart)?.five}
                    onChange={(e) => {
                        handleChange(bodyPart, 'five', e)}
                    }
                    className="border-2 border-black ml-2 pl-2 w-[80%]"
                  />
                </div>
                <div className="w-full flex pt-4">
                  <label htmlFor="" className="font-bold w-8">
                    6.
                  </label>
                  <input
                    type="text"
                    value={handleValue(bodyPart)?.six}
                    name={`${bodyPart}.six`}
                    placeholder={handleValue(bodyPart)?.six}
                    onChange={(e) => {
                        handleChange(bodyPart, 'six', e)}
                    }
                    className="border-2 border-black ml-2 pl-2 w-[80%]"
                  />
                </div>
                <div className={handleValue(bodyPart)?.seven === undefined ? ("hidden") : "w-full flex pt-4"}>
                    <label htmlFor="" className="font-bold w-8">
                        7.
                    </label>
                    <input
                        type="text"
                        value={handleValue(bodyPart)?.seven}
                        name={`${bodyPart}.seven`}
                        placeholder={handleValue(bodyPart)?.seven}
                        onChange={(e) => {
                            handleChange(bodyPart, 'seven', e)}
                        }
                        className="border-2 border-black ml-2 pl-2 w-[80%]"
                    />
                </div>
                <div className={handleValue(bodyPart)?.eight === undefined ? ("hidden") : "w-full flex pt-4"}>
                    <label htmlFor="" className="font-bold w-8">
                        8.
                    </label>
                    <input
                        type="text"
                        value={handleValue(bodyPart)?.eight}
                        name={`${bodyPart}.eight`}
                        placeholder={handleValue(bodyPart)?.eight}
                        onChange={(e) => {
                            handleChange(bodyPart, 'eight', e)}
                        }
                        className="border-2 border-black ml-2 pl-2 w-[80%]"
                    />
                </div>
                <div className={handleValue(bodyPart)?.nine === undefined ? ("hidden") : "w-full flex pt-4"}>
                    <label htmlFor="" className="font-bold w-8">
                        9.
                    </label>
                    <input
                        type="text"
                        value={handleValue(bodyPart)?.nine}
                        name={`${bodyPart}.nine`}
                        placeholder={handleValue(bodyPart)?.nine}
                        onChange={(e) => {
                            handleChange(bodyPart, 'nine', e)}
                        }
                        className="border-2 border-black ml-2 pl-2 w-[80%]"
                    />
                </div>
                <div className={handleValue(bodyPart)?.ten === undefined ? ("hidden") : "w-full flex pt-4"}>
                    <label htmlFor="" className="font-bold w-8">
                        10.
                    </label>
                    <input
                        type="text"
                        value={handleValue(bodyPart)?.ten}
                        name={`${bodyPart}.ten`}
                        placeholder={handleValue(bodyPart)?.ten}
                        onChange={(e) => {
                            handleChange(bodyPart, 'ten', e)}
                        }
                        className="border-2 border-black ml-2 pl-2 w-[80%]"
                    />
                </div>
                <div className={handleValue(bodyPart)?.eleven === undefined ? ("hidden") : "w-full flex pt-4"}>
                    <label htmlFor="" className="font-bold w-8">
                        11.
                    </label>
                    <input
                        type="text"
                        value={handleValue(bodyPart)?.eleven}
                        name={`${bodyPart}.eleven`}
                        placeholder={handleValue(bodyPart)?.eleven}
                        onChange={(e) => {
                            handleChange(bodyPart, 'eleven', e)}
                        }
                        className="border-2 border-black ml-2 pl-2 w-[80%]"
                    />
                </div>
                <div className={handleValue(bodyPart)?.twelve === undefined ? ("hidden") : "w-full flex pt-4"}>
                    <label htmlFor="" className="font-bold w-8">
                        12.
                    </label>
                    <input
                        type="text"
                        value={handleValue(bodyPart)?.twelve}
                        name={`${bodyPart}.twelve`}
                        placeholder={handleValue(bodyPart)?.twelve}
                        onChange={(e) => {
                            handleChange(bodyPart, 'twelve', e)}
                        }
                        className="border-2 border-black ml-2 pl-2 w-[80%]"
                    />
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
      <GoPlusCircle
        onClick={() => {
          toggleModal("leftArm");
        }}
        className="col-start-3 col-end-4 row-start-4 row-end-5 bg bg-yellow-300 text-black rounded-full ml-3 mt-[2px] hover:cursor-pointer"
      />
      <p className="col-start-5 col-end-15 row-start-4 row-end-5 text-sm">
        <span className="font-bold">Left Arm</span> [CASE]
      </p>
      <p className="col-start-2 col-end-4 row-start-8 row-end-10 text-sm font-bold">
        1-3
      </p>
      <p className="col-start-4 col-end-15 row-start-6 row-end-7 text-2xs font-bold">
        1. Shoulder
      </p>
      <p className="col-start-4 col-end-15 row-start-7 row-end-8 text-2xs font-bold">
        2. Upper Arm Actuator
      </p>
      <p className="col-start-4 col-end-15 row-start-8 row-end-9 text-2xs font-bold">
        3. Lower Arm Actuator
      </p>
      <p className="col-start-4 col-end-15 row-start-9 row-end-10 text-2xs font-bold">
        4. Hand Actuator
      </p>
      <p className="col-start-4 col-end-15 row-start-10 row-end-11 text-2xs font-bold">
        5. LRM 10
      </p>
      <p className="col-start-4 col-end-15 row-start-11 row-end-12 text-2xs font-bold">
        6. Ammo [LRM 10] 12
      </p>
      <p className="col-start-2 col-end-4 row-start-15 row-end-17 text-sm font-bold">
        4-6
      </p>
      <p className="col-start-4 col-end-15 row-start-13 row-end-14 text-2xs">
        <span className="font-bold">1.</span> Endo Steel
      </p>
      <p className="col-start-4 col-end-15 row-start-14 row-end-15 text-2xs">
        <span className="font-bold">2.</span> Ferro-Fibrous
      </p>
      <p className="col-start-4 col-end-15 row-start-15 row-end-16 text-2xs">
        <span className="font-bold">3.</span> Roll Again
      </p>
      <p className="col-start-4 col-end-15 row-start-16 row-end-17 text-2xs">
        <span className="font-bold">4.</span> Roll Again
      </p>
      <p className="col-start-4 col-end-15 row-start-17 row-end-18 text-2xs">
        <span className="font-bold">5.</span> Roll Again
      </p>
      <p className="col-start-4 col-end-15 row-start-18 row-end-19 text-2xs">
        <span className="font-bold">6.</span> Roll Again
      </p>
      <GoPlusCircle
        onClick={() => {
          toggleModal("leftTorso");
        }}
        className="col-start-3 col-end-4 row-start-21 row-end-22 bg bg-yellow-300 text-black rounded-full ml-3 mt-[2px] hover:cursor-pointer"
      />
      <p className="col-start-5 col-end-15 row-start-21 row-end-22 text-sm font-bold">
        Left Torso
      </p>
      <p className="col-start-2 col-end-4 row-start-25 row-end-27 text-sm font-bold">
        1-3
      </p>
      <p className="col-start-4 col-end-15 row-start-23 row-end-24 text-2xs font-bold">
        1. XL Fusion Engine
      </p>
      <p className="col-start-4 col-end-15 row-start-24 row-end-25 text-2xs font-bold">
        2. XL Fusion Engine
      </p>
      <p className="col-start-4 col-end-15 row-start-25 row-end-26 text-2xs font-bold">
        3. Double Heat Sink
      </p>
      <p className="col-start-4 col-end-15 row-start-26 row-end-27 text-2xs font-bold">
        4. Double Heat Sink
      </p>
      <p className="col-start-4 col-end-15 row-start-27 row-end-28 text-2xs font-bold">
        5. Double Heat Sink
      </p>
      <p className="col-start-4 col-end-15 row-start-28 row-end-29 text-2xs font-bold">
        6. Double Heat Sink
      </p>
      <p className="col-start-2 col-end-4 row-start-32 row-end-34 text-sm font-bold">
        4-6
      </p>
      <p className="col-start-4 col-end-15 row-start-30 row-end-31 text-2xs">
        <span className="font-bold">1. Jump Jet</span>
      </p>
      <p className="col-start-4 col-end-15 row-start-31 row-end-32 text-2xs">
        <span className="font-bold">2. Jump Jet</span>
      </p>
      <p className="col-start-4 col-end-15 row-start-32 row-end-33 text-2xs">
        <span className="font-bold">3. Jump Jet</span>
      </p>
      <p className="col-start-4 col-end-15 row-start-33 row-end-34 text-2xs">
        <span className="font-bold">4.</span> Endo Steel
      </p>
      <p className="col-start-4 col-end-15 row-start-34 row-end-35 text-2xs">
        <span className="font-bold">5.</span> Ferro-Fibrous
      </p>
      <p className="col-start-4 col-end-15 row-start-35 row-end-36 text-2xs">
        <span className="font-bold">6.</span> Ferro-Fibrous
      </p>
      <GoPlusCircle
        onClick={() => {
          toggleModal("leftLeg");
        }}
        className="col-start-3 col-end-4 row-start-38 row-end-39 bg bg-yellow-300 text-black rounded-full ml-3 mt-[2px] hover:cursor-pointer"
      />
      <p className="col-start-5 col-end-15 row-start-38 row-end-39 text-sm font-bold">
        Left Leg
      </p>
      <p className="col-start-4 col-end-15 row-start-40 row-end-41 text-2xs">
        <span className="font-bold">1. Hip</span>
      </p>
      <p className="col-start-4 col-end-15 row-start-41 row-end-42 text-2xs">
        <span className="font-bold">2. Upper Leg Actuator</span>
      </p>
      <p className="col-start-4 col-end-15 row-start-42 row-end-43 text-2xs">
        <span className="font-bold">3. Lower Leg Actuator</span>
      </p>
      <p className="col-start-4 col-end-15 row-start-43 row-end-44 text-2xs">
        <span className="font-bold">4. Foot Actuator</span>
      </p>
      <p className="col-start-4 col-end-15 row-start-44 row-end-45 text-2xs">
        <span className="font-bold">5.</span> Endo Steel
      </p>
      <p className="col-start-4 col-end-15 row-start-45 row-end-46 text-2xs">
        <span className="font-bold">6.</span> Roll Again
      </p>

      <GoPlusCircle
        onClick={() => {
          toggleModal("head");
        }}
        className="col-start-15 col-end-16 row-start-4 row-end-5 bg bg-yellow-300 text-black rounded-full ml-3 mt-[2px] hover:cursor-pointer"
      />
      <p className="col-start-17 col-end-25 row-start-4 row-end-5 text-sm font-bold">
        Head
      </p>
      <p className="col-start-16 col-end-25 row-start-6 row-end-7 text-2xs font-bold">
        1. Life Support
      </p>
      <p className="col-start-16 col-end-25 row-start-7 row-end-8 text-2xs font-bold">
        2. Sensors
      </p>
      <p className="col-start-16 col-end-25 row-start-8 row-end-9 text-2xs font-bold">
        3. Cockpit
      </p>
      <p className="col-start-16 col-end-25 row-start-9 row-end-10 text-2xs font-bold">
        4. Active Probe
      </p>
      <p className="col-start-16 col-end-25 row-start-10 row-end-11 text-2xs font-bold">
        5. Sensors
      </p>
      <p className="col-start-16 col-end-25 row-start-11 row-end-12 text-2xs font-bold">
        6. Life Support
      </p>
      <GoPlusCircle
        onClick={() => {
          toggleModal("centerTorso");
        }}
        className="col-start-15 col-end-16 row-start-14 row-end-15 bg bg-yellow-300 text-black rounded-full ml-3 mt-[2px] hover:cursor-pointer"
      />
      <p className="col-start-17 col-end-25 row-start-14 row-end-15 text-sm font-bold">
        Center Torso
      </p>
      <p className="col-start-14 col-end-16 row-start-18 row-end-20 text-sm font-bold">
        1-3
      </p>
      <p className="col-start-16 col-end-25 row-start-16 row-end-17 text-2xs font-bold">
        1. XL Fusion Engine
      </p>
      <p className="col-start-16 col-end-25 row-start-17 row-end-18 text-2xs font-bold">
        2. XL Fusion Engine
      </p>
      <p className="col-start-16 col-end-25 row-start-18 row-end-19 text-2xs font-bold">
        3. XL Fusion Engine
      </p>
      <p className="col-start-16 col-end-25 row-start-19 row-end-20 text-2xs font-bold">
        4. Gyro
      </p>
      <p className="col-start-16 col-end-25 row-start-20 row-end-21 text-2xs font-bold">
        5. Gyro
      </p>
      <p className="col-start-16 col-end-25 row-start-21 row-end-22 text-2xs font-bold">
        6. Gyro
      </p>
      <p className="col-start-14 col-end-16 row-start-25 row-end-27 text-sm font-bold">
        4-6
      </p>
      <p className="col-start-16 col-end-25 row-start-23 row-end-24 text-2xs">
        <span className="font-bold">1. Gyro</span>
      </p>
      <p className="col-start-16 col-end-25 row-start-24 row-end-25 text-2xs">
        <span className="font-bold">2. XL Fusion Engine</span>
      </p>
      <p className="col-start-16 col-end-25 row-start-25 row-end-26 text-2xs">
        <span className="font-bold">3. XL Fusion Engine</span>
      </p>
      <p className="col-start-16 col-end-25 row-start-26 row-end-27 text-2xs">
        <span className="font-bold">4. XL Fusion Engine</span>
      </p>
      <p className="col-start-16 col-end-25 row-start-27 row-end-28 text-2xs">
        <span className="font-bold">5.</span> Endo Steel
      </p>
      <p className="col-start-16 col-end-25 row-start-28 row-end-29 text-2xs">
        <span className="font-bold">6.</span> Ferro-Fibrous
      </p>
      <span className="col-start-15 col-end-26 row-start-30 row-end-36 border-2 border-black rounded-lg" />
      <p className="col-start-15 col-end-21 row-start-31 row-end-32 text-xs font-bold text-right">
        Engine Hits
      </p>
      <p className="col-start-15 col-end-21 row-start-32 row-end-33 text-xs font-bold text-right">
        Gyro Hits
      </p>
      <p className="col-start-15 col-end-21 row-start-33 row-end-34 text-xs font-bold text-right">
        Sensor Hits
      </p>
      <p className="col-start-15 col-end-21 row-start-34 row-end-35 text-xs font-bold text-right">
        Life Support
      </p>
      <p className="col-start-22 col-end-26 row-start-31 row-end-32 text-right flex pt-[2px]">
        <BiCircle size={13} />
        <BiCircle size={13} />
        <BiCircle size={13} />
      </p>
      <p className="col-start-22 col-end-26 row-start-32 row-end-33 text-right flex pt-[2px]">
        <BiCircle size={13} />
        <BiCircle size={13} />
      </p>
      <p className="col-start-22 col-end-26 row-start-33 row-end-34 text-right flex pt-[2px]">
        <BiCircle size={13} />
        <BiCircle size={13} />
      </p>
      <p className="col-start-22 col-end-26 row-start-34 row-end-35 text-right flex pt-[2px]">
        <BiCircle size={13} />
      </p>
      <img
        src={DamageTransferDiagram}
        alt="damage transfer diagram"
        className="col-start-15 col-end-26 row-start-37 row-end-48"
      />

      <GoPlusCircle
        onClick={() => {
          toggleModal("rightArm");
        }}
        className="col-start-27 col-end-28 row-start-4 row-end-5 bg bg-yellow-300 text-black rounded-full ml-3 mt-[2px] hover:cursor-pointer"
      />
      <p className="col-start-29 col-end-49 row-start-4 row-end-5 text-sm">
        <span className="font-bold">Right Arm</span> [CASE]
      </p>
      <p className="col-start-26 col-end-28 row-start-8 row-end-10 text-sm font-bold">
        1-3
      </p>
      <p className="col-start-28 col-end-39 row-start-6 row-end-7 text-2xs font-bold">
        1. Shoulder
      </p>
      <p className="col-start-28 col-end-39 row-start-7 row-end-8 text-2xs font-bold">
        2. Upper Arm Actuator
      </p>
      <p className="col-start-28 col-end-39 row-start-8 row-end-9 text-2xs font-bold">
        3. Lower Arm Actuator
      </p>
      <p className="col-start-28 col-end-39 row-start-9 row-end-10 text-2xs font-bold">
        4. Hand Actuator
      </p>
      <p className="col-start-28 col-end-39 row-start-10 row-end-11 text-2xs font-bold">
        5. Stream SRM 4
      </p>
      <p className="col-start-28 col-end-39 row-start-11 row-end-12 text-2xs font-bold">
        6. Machine Gun
      </p>
      <p className="col-start-26 col-end-28 row-start-15 row-end-17 text-sm font-bold">
        4-6
      </p>
      <p className="col-start-28 col-end-39 row-start-13 row-end-14 text-2xs">
        <span className="font-bold">1. Machine Gun</span>
      </p>
      <p className="col-start-28 col-end-39 row-start-14 row-end-15 text-2xs">
        <span className="font-bold">2. Ammo [Streak SRM 4] 25</span>
      </p>
      <p className="col-start-28 col-end-39 row-start-15 row-end-16 text-2xs">
        <span className="font-bold">3. Ammo [Machine Gun] 100</span>
      </p>
      <p className="col-start-28 col-end-39 row-start-16 row-end-17 text-2xs">
        <span className="font-bold">4.</span> Endo Steel
      </p>
      <p className="col-start-28 col-end-39 row-start-17 row-end-18 text-2xs">
        <span className="font-bold">5.</span> Ferro-Fibrous
      </p>
      <p className="col-start-28 col-end-39 row-start-18 row-end-19 text-2xs">
        <span className="font-bold">6.</span> Roll Again
      </p>
      <GoPlusCircle
        onClick={() => {
          toggleModal("rightTorso");
        }}
        className="col-start-27 col-end-28 row-start-21 row-end-22 bg bg-yellow-300 text-black rounded-full ml-3 mt-[2px] hover:cursor-pointer"
      />
      <p className="col-start-29 col-end-49 row-start-21 row-end-22 text-sm font-bold">
        Right Torso
      </p>
      <p className="col-start-26 col-end-28 row-start-25 row-end-27 text-sm font-bold">
        1-3
      </p>
      <p className="col-start-28 col-end-39 row-start-23 row-end-24 text-2xs font-bold">
        1. XL Fusion Engine
      </p>
      <p className="col-start-28 col-end-39 row-start-24 row-end-25 text-2xs font-bold">
        2. XL Fusion Engine
      </p>
      <p className="col-start-28 col-end-39 row-start-25 row-end-26 text-2xs font-bold">
        3. Double Heat Sink
      </p>
      <p className="col-start-28 col-end-39 row-start-26 row-end-27 text-2xs font-bold">
        4. Double Heat Sink
      </p>
      <p className="col-start-28 col-end-39 row-start-27 row-end-28 text-2xs font-bold">
        5. Jump Jet
      </p>
      <p className="col-start-28 col-end-39 row-start-28 row-end-29 text-2xs font-bold">
        6. Jump Jet
      </p>
      <p className="col-start-26 col-end-28 row-start-32 row-end-34 text-sm font-bold">
        4-6
      </p>
      <p className="col-start-28 col-end-39 row-start-30 row-end-31 text-2xs">
        <span className="font-bold">1. Jump Jet</span>
      </p>
      <p className="col-start-28 col-end-39 row-start-31 row-end-32 text-2xs">
        <span className="font-bold">2.</span> Endo Steel
      </p>
      <p className="col-start-28 col-end-39 row-start-32 row-end-33 text-2xs">
        <span className="font-bold">3.</span> Ferro-Fibrous
      </p>
      <p className="col-start-28 col-end-39 row-start-33 row-end-34 text-2xs">
        <span className="font-bold">4.</span> Ferro-Fibrous
      </p>
      <p className="col-start-28 col-end-39 row-start-34 row-end-35 text-2xs">
        <span className="font-bold">5.</span> Roll Again
      </p>
      <p className="col-start-28 col-end-39 row-start-35 row-end-36 text-2xs">
        <span className="font-bold">6.</span> Roll Again
      </p>
      <GoPlusCircle
        onClick={() => {
          toggleModal("rightLeg");
        }}
        className="col-start-27 col-end-28 row-start-38 row-end-39 bg bg-yellow-300 text-black rounded-full ml-3 mt-[2px] hover:cursor-pointer"
      />
      <p className="col-start-29 col-end-49 row-start-38 row-end-39 text-sm font-bold">
        Right Leg
      </p>
      <p className="col-start-28 col-end-39 row-start-40 row-end-41 text-2xs">
        <span className="font-bold">1. Hip</span>
      </p>
      <p className="col-start-28 col-end-39 row-start-41 row-end-42 text-2xs">
        <span className="font-bold">2. Upper Leg Actuator</span>
      </p>
      <p className="col-start-28 col-end-39 row-start-42 row-end-43 text-2xs">
        <span className="font-bold">3. Lower Leg Actuator</span>
      </p>
      <p className="col-start-28 col-end-39 row-start-43 row-end-44 text-2xs">
        <span className="font-bold">4. Foot Actuator</span>
      </p>
      <p className="col-start-28 col-end-39 row-start-44 row-end-45 text-2xs">
        <span className="font-bold">5.</span> Endo Steel
      </p>
      <p className="col-start-28 col-end-39 row-start-45 row-end-46 text-2xs">
        <span className="font-bold">6.</span> Roll Again
      </p>
    </div>
  );
};
