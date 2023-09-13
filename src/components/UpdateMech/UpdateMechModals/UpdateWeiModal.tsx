//import//
import { WeaponType, WeaponsEquipmentInventoryType } from "../../../types/types";

interface UpdateWeiModalProps {
  weiModal: WeaponType;
  handleWeiValue: (weapon: string) => WeaponsEquipmentInventoryType | undefined;
  handleWeiChange: (weapon: string, propertyName: string, e: any) => void;
  closeWeiModal: (weapon: string) => void;
  saveWeiModal: (weapon: string) => void;
}

export const UpdateWeiModal: React.FC<UpdateWeiModalProps> = ({ weiModal, handleWeiValue, handleWeiChange, closeWeiModal, saveWeiModal }) => {
  return (
    <>
      {Object.entries(weiModal).map(([weapon, isOpen]) => {
        if (isOpen) {
          return (
            <div
              key={weapon}
              className="fixed inset-0 flex items-center justify-center z-50"
            >
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
                      onChange={(e) => handleWeiChange(weapon, "qty", e)}
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
                      onChange={(e) => handleWeiChange(weapon, "type", e)}
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
                      onChange={(e) => handleWeiChange(weapon, "loc", e)}
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
                      onChange={(e) => handleWeiChange(weapon, "ht", e)}
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
                      onChange={(e) => handleWeiChange(weapon, "dmg", e)}
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
                      onChange={(e) => handleWeiChange(weapon, "min", e)}
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
                      onChange={(e) => handleWeiChange(weapon, "sht", e)}
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
                      onChange={(e) => handleWeiChange(weapon, "med", e)}
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
                      onChange={(e) => handleWeiChange(weapon, "lng", e)}
                      className="border-2 border-black ml-2 pl-2"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    name={weapon}
                    onClick={() => closeWeiModal(weapon)}
                    className="bg-red-400 px-4 rounded-lg mt-4 mx-4"
                  >
                    Cancel
                  </button>
                  <button
                    name={weapon}
                    onClick={() => saveWeiModal(weapon)}
                    className="bg-green-400 px-6 rounded-lg mt-4 mx-4"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};
