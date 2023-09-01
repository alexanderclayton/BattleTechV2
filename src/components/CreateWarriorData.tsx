//import//
import { useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const CreateWarriorData: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [gunnerySkill, setGunnerySkill] = useState<number>(0);
  const [pilotingSkill, setPilotingSkill] = useState<number>(0);
  const [oneHit, setOneHit] = useState<number>(0);
  const [twoHit, setTwoHit] = useState<number>(0);
  const [threeHit, setThreeHit] = useState<number>(0);
  const [fourHit, setFourHit] = useState<number>(0);
  const [fiveHit, setFiveHit] = useState<number>(0);

  const toggleModal: React.MouseEventHandler<SVGSVGElement> = (): void => {
    setModal(!modal);
  };

  const closeModal: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    setModal(false);
  };

  const saveModal: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    setModal(false);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const deleteName: React.MouseEventHandler<SVGSVGElement> = () => {
    setName("");
  };
  const handleGunnerySkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setGunnerySkill(parseInt(e.target.value));
  };
  const deleteGunnerySkill: React.MouseEventHandler<SVGSVGElement> = () => {
    setGunnerySkill(0);
  };
  const handlePilotingSkillChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setPilotingSkill(parseInt(e.target.value));
  };
  const deletePilotingSkill: React.MouseEventHandler<SVGSVGElement> = () => {
    setPilotingSkill(0);
  };
  const handleOneHitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setOneHit(parseInt(e.target.value));
  };
  const deleteOneHit: React.MouseEventHandler<SVGSVGElement> = () => {
    setOneHit(0);
  };
  const handleTwoHitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTwoHit(parseInt(e.target.value));
  };
  const deleteTwoHit: React.MouseEventHandler<SVGSVGElement> = () => {
    setOneHit(0);
  };
  const handleThreeHitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setThreeHit(parseInt(e.target.value));
  };
  const deleteThreeHit: React.MouseEventHandler<SVGSVGElement> = () => {
    setThreeHit(0);
  };
  const handleFourHitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFourHit(parseInt(e.target.value));
  };
  const deleteFourHit: React.MouseEventHandler<SVGSVGElement> = () => {
    setFourHit(0);
  };
  const handleFiveHitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFiveHit(parseInt(e.target.value));
  };
  const deleteFiveHit: React.MouseEventHandler<SVGSVGElement> = () => {
    setFiveHit(0);
  };

  return (
    <div className="grid grid-cols-16 grid-rows-9 w-full h-full">
      <p className="col-start-1 col-end-13 row-start-1 row-end-3 bg-black text-white text-sm text-center z-10 rounded-full flex justify-center items-center">
        WARRIOR DATA{" "}
        <GoPlusCircle
          onClick={toggleModal}
          className="bg-yellow-300 text-black rounded-full hover:cursor-pointer ml-3 mt-[2px]"
        />
      </p>
      <div className="col-start-1 col-end-17 row-start-1 row-end-10" />
      <span className="col-start-1 col-end-17 row-start-2 row-end-10 border-2 border-black rounded-lg" />
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="bg-white p-4 rounded-lg z-50 flex flex-col w-[50%]">
            <p className="text-2xl font-bold text-center w-full bg-blue-300 rounded-md py-2">
              Warrior Data:
            </p>
            {/* Modal content goes here */}
            <div className="flex w-full pt-4">
              <label htmlFor="" className="font-bold">
                Name
              </label>
              <input
                type="text"
                value={name}
                placeholder={name}
                onChange={handleNameChange}
                className="border-2 border-black ml-2 pl-2 w-[80%]"
              />
            </div>
            <div className=" flex flex-col pt-2">
              <div className="flex w-[50%]">
                <div className="flex w-[40%]">
                  <label htmlFor="" className="font-bold">
                    Gunnery Skill
                  </label>
                  <input
                    type="number"
                    value={gunnerySkill}
                    placeholder={gunnerySkill.toString()}
                    onChange={handleGunnerySkillChange}
                    className="border-2 border-black ml-3 pl-2 w-[20%]"
                  />
                </div>
                <div className="flex w-[40%]">
                  <label htmlFor="" className="font-bold">
                    Piloting Skill
                  </label>
                  <input
                    type="number"
                    value={pilotingSkill}
                    placeholder={pilotingSkill.toString()}
                    onChange={handlePilotingSkillChange}
                    className="border-2 border-black ml-2 pl-2 w-[20%]"
                  />
                </div>
              </div>
              <div className="w-[90%] grid grid-cols-16 grid-rows-2 h-14 pt-2">
                <p className="col-start-1 col-end-4 row-start-1 row-end-2 font-bold flex items-center justify-end pr-3">
                  Hits Taken
                </p>
                <p className="col-start-1 col-end-4 row-start-2 row-end-3 font-bold flex items-center justify-end pr-3">
                  Consciousness #
                </p>
                <p className="col-start-5 col-end-6 row-start-1 row-end-2 font-bold flex items-center justify-center border-2 border-black">
                  1
                </p>
                <p className="col-start-6 col-end-7 row-start-1 row-end-2 font-bold flex items-center justify-center border-2 border-black">
                  2
                </p>
                <p className="col-start-7 col-end-8 row-start-1 row-end-2 font-bold flex items-center justify-center border-2 border-black">
                  3
                </p>
                <p className="col-start-8 col-end-9 row-start-1 row-end-2 font-bold flex items-center justify-center border-2 border-black">
                  4
                </p>
                <p className="col-start-9 col-end-10 row-start-1 row-end-2 font-bold flex items-center justify-center border-2 border-black">
                  5
                </p>
                <p className="col-start-10 col-end-12 row-start-1 row-end-2 font-bold flex items-center justify-center border-2 border-black">
                  6
                </p>
                <input
                  type="number"
                  value={oneHit}
                  placeholder={oneHit.toString()}
                  onChange={handleOneHitChange}
                  className="col-start-5 col-end-6 row-start-2 row-end-3 border-2 border-black"
                />
                <input
                  type="number"
                  value={twoHit}
                  placeholder={twoHit.toString()}
                  onChange={handleTwoHitChange}
                  className="col-start-6 col-end-7 row-start-2 row-end-3 border-2 border-black"
                />
                <input
                  type="number"
                  value={threeHit}
                  placeholder={threeHit.toString()}
                  onChange={handleThreeHitChange}
                  className="col-start-7 col-end-8 row-start-2 row-end-3 border-2 border-black"
                />
                <input
                  type="number"
                  value={fourHit}
                  placeholder={fourHit.toString()}
                  onChange={handleFourHitChange}
                  className="col-start-8 col-end-9 row-start-2 row-end-3 border-2 border-black"
                />
                <input
                  type="number"
                  value={fiveHit}
                  placeholder={fiveHit.toString()}
                  onChange={handleFiveHitChange}
                  className="col-start-9 col-end-10 row-start-2 row-end-3 border-2 border-black"
                />
                <p className="col-start-10 col-end-12 row-start-2 row-end-3 font-bold flex items-center justify-center border-2 border-black">
                  Dead
                </p>
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
      <p className="col-start-2 col-end-4 row-start-3 row-end-4 text-2xs font-bold">
        Name:
      </p>
      <p className="col-start-5 col-end-16 row-start-3 row-end-4 border-b border-black text-2xs pl-2 flex">
        {name === "" ? (
          <p></p>
        ) : (
          <>
            <span className="bg-green-400">{name}</span>
            <AiOutlineCloseCircle
              onClick={deleteName}
              size={10}
              className="bg-red-400 ml-1 hover:cursor-pointer mt-[1px]"
            />
          </>
        )}
      </p>
      <p className="col-start-2 col-end-7 row-start-4 row-end-5 text-2xs font-bold">
        Gunnery Skill:
      </p>
      <p className="col-start-7 col-end-9 row-start-4 row-end-5 border-b border-black text-2xs text-center flex">
        {gunnerySkill === 0 ? (
          <p></p>
        ) : (
          <>
            <span className="bg-green-400 px-1">{gunnerySkill}</span>
            <AiOutlineCloseCircle
              onClick={deleteGunnerySkill}
              size={10}
              className="bg-red-400 ml-1 hover:cursor-pointer mt-[1px]"
            />
          </>
        )}
      </p>
      <p className="col-start-9 col-end-14 row-start-4 row-end-5 text-2xs font-bold text-right">
        Piloting Skill:
      </p>
      <p className="col-start-14 col-end-16 row-start-4 row-end-5 border-b border-black text-2xs text-center flex">
        {pilotingSkill === 0 ? (
          <p></p>
        ) : (
          <>
            <span className="bg-green-400 px-1">{pilotingSkill}</span>
            <AiOutlineCloseCircle
              onClick={deletePilotingSkill}
              size={10}
              className="bg-red-400 ml-1 hover:cursor-pointer mt-[1px]"
            />
          </>
        )}
      </p>
      <p className="col-start-1 col-end-7 row-start-6 row-end-7 text-2xs font-bold text-right">
        Hits Taken
      </p>
      <p className="col-start-8 col-end-9 row-start-6 row-end-7 border border-black text-2xs font-bold flex justify-center items-center">
        1
      </p>
      <p className="col-start-9 col-end-10 row-start-6 row-end-7 border border-black text-2xs font-bold flex justify-center items-center">
        2
      </p>
      <p className="col-start-10 col-end-11 row-start-6 row-end-7 border border-black text-2xs font-bold flex justify-center items-center">
        3
      </p>
      <p className="col-start-11 col-end-12 row-start-6 row-end-7 border border-black text-2xs font-bold flex justify-center items-center">
        4
      </p>
      <p className="col-start-12 col-end-13 row-start-6 row-end-7 border border-black text-2xs font-bold flex justify-center items-center">
        5
      </p>
      <p className="col-start-13 col-end-15 row-start-6 row-end-7 border border-black text-2xs font-bold flex justify-center items-center">
        6
      </p>
      <p className="col-start-1 col-end-7 row-start-7 row-end-8 text-2xs font-bold text-right">
        Consciousness #
      </p>
      <p className="col-start-8 col-end-9 row-start-7 row-end-8 border border-black text-2xs font-bold">
        {oneHit === 0 ? (
          <p></p>
        ) : (
          <>
            <span className="bg-green-400 px-[2px] mt-1">{oneHit}</span>
          </>
        )}
      </p>
      {oneHit === 0 ? (
        <p></p>
      ) : (
        <AiOutlineCloseCircle
          onClick={deleteOneHit}
          size={10}
          className="col-start-8 col-end-9 row-start-8 row-end-9 bg-red-400 hover:cursor-pointer mt-1 ml-[1px]"
        />
      )}
      <p className="col-start-9 col-end-10 row-start-7 row-end-8 border border-black text-2xs font-bold">
        {twoHit === 0 ? (
          <p></p>
        ) : (
          <>
            <span className="bg-green-400 px-1">{twoHit}</span>
            <AiOutlineCloseCircle
              onClick={deleteTwoHit}
              size={10}
              className="bg-red-400 ml-1 hover:cursor-pointer mt-[1px]"
            />
          </>
        )}
      </p>
      {twoHit === 0 ? (
        <p></p>
      ) : (
        <AiOutlineCloseCircle
          onClick={deleteTwoHit}
          size={10}
          className="col-start-8 col-end-9 row-start-8 row-end-9 bg-red-400 hover:cursor-pointer mt-1 ml-[1px]"
        />
      )}
      <p className="col-start-10 col-end-11 row-start-7 row-end-8 border border-black text-2xs font-bold">
        {threeHit === 0 ? (
          <p></p>
        ) : (
          <>
            <span className="bg-green-400 px-1">{threeHit}</span>
            <AiOutlineCloseCircle
              onClick={deleteThreeHit}
              size={10}
              className="bg-red-400 ml-1 hover:cursor-pointer mt-[1px]"
            />
          </>
        )}
      </p>
      {threeHit === 0 ? (
        <p></p>
      ) : (
        <AiOutlineCloseCircle
          onClick={deleteThreeHit}
          size={10}
          className="col-start-8 col-end-9 row-start-8 row-end-9 bg-red-400 hover:cursor-pointer mt-1 ml-[1px]"
        />
      )}
      <p className="col-start-11 col-end-12 row-start-7 row-end-8 border border-black text-2xs font-bold">
        {fourHit === 0 ? (
          <p></p>
        ) : (
          <>
            <span className="bg-green-400 px-1">{fourHit}</span>
            <AiOutlineCloseCircle
              onClick={deleteFourHit}
              size={10}
              className="bg-red-400 ml-1 hover:cursor-pointer mt-[1px]"
            />
          </>
        )}
      </p>
      {fourHit === 0 ? (
        <p></p>
      ) : (
        <AiOutlineCloseCircle
          onClick={deleteFourHit}
          size={10}
          className="col-start-8 col-end-9 row-start-8 row-end-9 bg-red-400 hover:cursor-pointer mt-1 ml-[1px]"
        />
      )}
      <p className="col-start-12 col-end-13 row-start-7 row-end-8 border border-black text-2xs font-bold">
        {fiveHit === 0 ? (
          <p></p>
        ) : (
          <>
            <span className="bg-green-400 px-1">{fiveHit}</span>
            <AiOutlineCloseCircle
              onClick={deleteFiveHit}
              size={10}
              className="bg-red-400 ml-1 hover:cursor-pointer mt-[1px]"
            />
          </>
        )}
      </p>
      {fiveHit === 0 ? (
        <p></p>
      ) : (
        <AiOutlineCloseCircle
          onClick={deleteFiveHit}
          size={10}
          className="col-start-8 col-end-9 row-start-8 row-end-9 bg-red-400 hover:cursor-pointer mt-1 ml-[1px]"
        />
      )}
      <p className="col-start-13 col-end-15 row-start-7 row-end-8 border border-black text-2xs font-bold">
        Dead
      </p>
    </div>
  );
};
