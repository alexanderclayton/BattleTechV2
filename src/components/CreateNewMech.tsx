//import//
import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const CreateNewMech: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [mechType, setMechType] = useState<string>("")

  const navigate = useNavigate()

  const toggleModal: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    setModal(!modal);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setMechType(e.target.value)
  }

  const createNewMech = async () => {
    try {
      await setDocument()
    } catch (error) {
      console.error('error creating mech')
    }
    navigate(`/create-mech/${mechType}`)
  }

  const setDocument = async () => {
    try {
      await setDoc(doc(db, 'mechs', mechType), {
        id: mechType
      })
    } catch (error) {
      console.error('error saving data')
    }
  }
  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-blue-400 rounded-lg w-auto h-14"
      >
        Create New Mech
      </button>
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="bg-white p-4 rounded-lg z-50 flex flex-col">
            <p className="text-2xl font-bold text-center w-full bg-blue-300 rounded-md py-2">Create New Mech</p>
            <div className="w-full flex pt-4">
              <label htmlFor="" className="font-bold">
                Mech Type
              </label>
              <input
                type="text"
                value={mechType}
                name="type"
                placeholder={mechType}
                onChange={handleChange}
                className="border-2 border-black ml-2 pl-2 w-[80%]"
              />
            </div>
            <button onClick={createNewMech} className="bg-green-400 rounded-lg">Create New Mech</button>
          </div>
        </div>
      )}
    </>
  );
};
