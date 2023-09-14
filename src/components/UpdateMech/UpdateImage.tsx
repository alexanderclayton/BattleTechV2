//import//
import { useState } from "react";
import { doc, updateDoc, deleteField } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { db } from "../../firebase/firebaseConfig";
import Placeholder from "../../assets/placeholder.png";
import { GoPlusCircle } from "react-icons/go";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { UpdateImageModal } from "./UpdateMechModals/UpdateImageModal";

interface UpdateImageProps {
  id: string;
  mechInfo: any;
}

export const UpdateImage: React.FC<UpdateImageProps> = ({ id, mechInfo }) => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null)
  const [displayImage, setDisplayImage] = useState<string>(mechInfo[0]?.imageUrl || "");
  const [modal, setModal] = useState<boolean>(false);
  const storage = getStorage();

  const toggleModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImage(e.target.files?.[0]);
      setPreview(URL.createObjectURL(e.target.files?.[0]))
    }
  };

  const saveImage = async () => {
    if (image) {
      try {
        const storageRef = ref(storage, "path/to/store/" + image.name);
        await uploadBytes(storageRef, image);

        const downloadURL = await getDownloadURL(storageRef);

        await updateDoc(doc(db, "mechs", id), {
          imageUrl: downloadURL,
        });
        setDisplayImage(downloadURL);
        setModal(false);
        console.log("uploaded image!");
      } catch (error) {
        console.error("error saving image");
      }
    } else {
      console.error("no image selected!");
    }
  };

  const deleteImage = async () => {
    try {
      await updateDoc(doc(db, "mechs", id), {
        imageUrl: deleteField(),
      });
      setDisplayImage("");
      console.log("deleted image");
    } catch (error) {
      console.error("error deleting image");
    }
  };

  return (
    <div className="w-full h-full">
      <UpdateImageModal modal={modal} handleImage={handleImage} preview={preview} saveImage={saveImage} closeModal={closeModal}/>
      {displayImage === "" ? (
        <>
          <div className="h-[80%] flex justify-center">
            <img
              src={Placeholder}
              alt="placeholder"
              className=""
            />
          </div>
          <div onClick={toggleModal} className="flex col-start-4 col-end-15 row-start-10 justify-center items-center hover:cursor-pointer">
            <GoPlusCircle size={30} />
            <p className="font-bold text-xl">Add Image</p>
          </div>
        </>
      ) : (
        <>
          <div className="h-[80%]">
            <img
              src={displayImage}
              alt="mech image"
              className="w-full object-cover"
            />
          </div>
          <div className="h-[15%] flex justify-around mt-2">
            <div onClick={toggleModal} className="flex flex-col items-center bg-yellow-400 rounded-lg p-1 hover: cursor-pointer">
              <GoPlusCircle />
              <p className="text-2xs">Update Image</p>
            </div>
            <div onClick={deleteImage} className="flex flex-col items-center bg-red-400 rounded-lg p-1 hover: cursor-pointer">
              <AiOutlineCloseCircle />
              <p className="text-2xs">Delete Image</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
