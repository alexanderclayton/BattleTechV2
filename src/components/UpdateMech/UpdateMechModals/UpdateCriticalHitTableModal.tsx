//import//
import { CriticalHitTableType, ModalType } from "../../../types/types";
import { UpdateCriticalHitTableInput } from "./UpdateCriticalHitTableInput";

interface UpdateCriticalHitTableProps {
    modal: ModalType
    input: CriticalHitTableType
    handleInput: (e: React.ChangeEvent<HTMLSelectElement>) => void
    handleChange: (bodyPart: string, propertyName: string, e: any) => void
    handleValue: (bodyPart: string) => CriticalHitTableType | undefined
    closeModal: (name: string) => void
    saveModal: (name: string) => void 
}

export const UpdateCriticalHitTableModal: React.FC<UpdateCriticalHitTableProps> = ({ modal, input, handleInput, handleChange, handleValue, closeModal, saveModal }) => {
  return (
    <>
    {Object.entries(modal).map(([bodyPart, isOpen]) => {
        if (isOpen) {
          return (
            <div
              key={bodyPart}
              className="fixed inset-0 flex items-center justify-center z-50"
            >
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <div className="bg-white p-4 rounded-lg z-50 flex flex-col">
                <p className="text-2xl font-bold text-center w-full bg-blue-300 rounded-md py-2 px-4">Critical Hit Table: {bodyPart.toUpperCase()}</p>

                <UpdateCriticalHitTableInput number="1." input={input} value="one"  handleInput={handleInput} handleChange={handleChange} bodyPart={bodyPart} handleValue={handleValue}/>
                <UpdateCriticalHitTableInput number="2." input={input} value="two"  handleInput={handleInput} handleChange={handleChange} bodyPart={bodyPart} handleValue={handleValue}/>
                <UpdateCriticalHitTableInput number="3." input={input} value="three"  handleInput={handleInput} handleChange={handleChange} bodyPart={bodyPart} handleValue={handleValue}/>
                <UpdateCriticalHitTableInput number="4." input={input} value="four"  handleInput={handleInput} handleChange={handleChange} bodyPart={bodyPart} handleValue={handleValue}/>
                <UpdateCriticalHitTableInput number="5." input={input} value="five"  handleInput={handleInput} handleChange={handleChange} bodyPart={bodyPart} handleValue={handleValue}/>
                <UpdateCriticalHitTableInput number="6." input={input} value="six"  handleInput={handleInput} handleChange={handleChange} bodyPart={bodyPart} handleValue={handleValue}/>
                {handleValue(bodyPart)?.seven !== undefined && <UpdateCriticalHitTableInput number="7." input={input} value="seven"  handleInput={handleInput} handleChange={handleChange} bodyPart={bodyPart} handleValue={handleValue}/>}
                {handleValue(bodyPart)?.eight !== undefined && <UpdateCriticalHitTableInput number="8." input={input} value="eight"  handleInput={handleInput} handleChange={handleChange} bodyPart={bodyPart} handleValue={handleValue}/>}
                {handleValue(bodyPart)?.nine !== undefined && <UpdateCriticalHitTableInput number="9." input={input} value="nine"  handleInput={handleInput} handleChange={handleChange} bodyPart={bodyPart} handleValue={handleValue}/>}
                {handleValue(bodyPart)?.ten !== undefined && <UpdateCriticalHitTableInput number="10." input={input} value="ten"  handleInput={handleInput} handleChange={handleChange} bodyPart={bodyPart} handleValue={handleValue}/>}
                {handleValue(bodyPart)?.eleven !== undefined && <UpdateCriticalHitTableInput number="11." input={input} value="eleven"  handleInput={handleInput} handleChange={handleChange} bodyPart={bodyPart} handleValue={handleValue}/>}
                {handleValue(bodyPart)?.twelve !== undefined && <UpdateCriticalHitTableInput number="12." input={input} value="twelve"  handleInput={handleInput} handleChange={handleChange} bodyPart={bodyPart} handleValue={handleValue}/>}
                
                <div className="flex justify-around">
                  <button name={bodyPart} onClick={() => closeModal(bodyPart)} className="bg-red-400 px-4 rounded-lg mt-4">
                    Cancel
                  </button>
                  <button onClick={() => saveModal(bodyPart)} className="bg-green-400 px-6 rounded-lg mt-4">
                    Save
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  )
}