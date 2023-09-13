//import//

import { WarriorDataType } from "../../../types/types"

interface CreateWarriorDataModalProps {
    modal: boolean
    warriorData: WarriorDataType
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    closeModal: (e: React.MouseEvent<HTMLButtonElement>) => void
    saveModal: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const CreateWarriorDataModal: React.FC<CreateWarriorDataModalProps> = ({ modal, warriorData, handleChange, closeModal, saveModal }) => {
  return (
    <>
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
                value={warriorData.name}
                name="name"
                placeholder={warriorData.name}
                onChange={handleChange}
                className="border-2 border-black ml-2 pl-2 w-[80%]"
              />
            </div>
            <div className=" flex flex-col pt-2">
              <div className="flex w-[80%]">
                <div className="flex">
                  <label htmlFor="" className="font-bold">
                    Gunnery Skill
                  </label>
                  <input
                    type="number"
                    value={warriorData.gunnerySkill}
                    name="gunnerySkill"
                    placeholder={warriorData.gunnerySkill.toString()}
                    onChange={handleChange}
                    className="border-2 border-black ml-3 pl-2 w-[20%]"
                  />
                </div>
                <div className="flex">
                  <label htmlFor="" className="font-bold">
                    Piloting Skill
                  </label>
                  <input
                    type="number"
                    value={warriorData.pilotingSkill}
                    name="pilotingSkill"
                    placeholder={warriorData.pilotingSkill.toString()}
                    onChange={handleChange}
                    className="border-2 border-black ml-2 pl-2 w-[20%]"
                  />
                </div>
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
    </>
  )
}
