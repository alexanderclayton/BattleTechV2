//import//

interface CreateImageModalProps {
  modal: boolean;
  handleImage: (e: React.ChangeEvent<HTMLInputElement>) => void
  preview: string | null
  saveImage: () => Promise<void>
  closeModal: () => void
}

export const CreateImageModal: React.FC<CreateImageModalProps> = ({ modal, handleImage, preview, saveImage, closeModal }) => {
  return (
    <>
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="bg-white p-4 rounded-lg z-50 flex flex-col">
            <p className="text-2xl font-bold text-center w-full bg-blue-300 rounded-md py-2">
              Add Image:
            </p>
            <input type="file" className="bg-blue-200 px-3 py-2 rounded-lg" onChange={handleImage}/>
            {preview && (
                <img src={preview} alt="preview image" />
            )}
            <button onClick={saveImage} className='bg-green-200 rounded-lg px-3 py-2'>Save</button>
            <button onClick={closeModal} className='bg-red-200 rounded-lg px-3 py-2'>Close</button>
          </div>
        </div>
      )}
    </>
  );
};
