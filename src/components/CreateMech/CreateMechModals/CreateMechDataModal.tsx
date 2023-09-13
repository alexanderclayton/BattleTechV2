//import//
import { MechDataType } from "../../../types/types";

interface CreateMechDataModalProps {
  mechModal: boolean;
  mechData: MechDataType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  closeModal: React.MouseEventHandler<HTMLButtonElement>;
  saveModal: React.MouseEventHandler<HTMLButtonElement>;
}

export const CreateMechDataModal: React.FC<CreateMechDataModalProps> = ({
  mechModal,
  mechData,
  handleChange,
  closeModal,
  saveModal,
}) => {
  return (
    <>
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
                  placeholder={
                    mechData.jumping === 0 ? "0" : mechData.jumping.toString()
                  }
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
    </>
  );
};
