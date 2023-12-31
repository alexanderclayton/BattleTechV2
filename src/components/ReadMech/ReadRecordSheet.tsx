//import
import { useState, useEffect } from 'react'
import { db } from '../../firebase/firebaseConfig';
import { collection, doc, getDoc } from 'firebase/firestore';
import Logo from "../../assets/BattletechBlackLogo.jpg";
import Placeholder from '../../assets/placeholder.png'
import ArmorDiagram from "../../assets/ArmorDiagram.jpg";
import InternalStructureDiagram from "../../assets/InternalStructureDiagram.jpg";
import HeatScale from "../../assets/HeatScale.jpg";
import { BiCopyright } from "react-icons/bi";
import { ReadMechData } from "./ReadMechData";
import { ReadWarriorData } from "./ReadWarriorData";
import { ReadCriticalHitTable } from "./ReadCriticalHitTable";
import { ReadHeatData } from "./ReadHeatData";

interface ReadRecordSheetProps {
  id: string
}

export const ReadRecordSheet: React.FC<ReadRecordSheetProps> = ({ id }) => {
  const [mechData, setMechData] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchDocument = async (documentId: string) => {
    try {
        const mechCollection = collection(db, 'mechs')
        const docRef = doc(mechCollection, documentId)
        const docSnapshot = await getDoc(docRef)

        if (docSnapshot.exists()) {
            return docSnapshot.data()
        } else {
            console.log('document does not exist')
            return null
        }
    } catch (error) {
        console.error('error fetching document')
        return null
    }
  }
  
  if (id) {
    useEffect(() => {
      const fetchData = async () => {
          try {
              const specificDocument = await fetchDocument(id)
              if (specificDocument) {
                  setMechData([specificDocument])
                  setLoading(false)
              }
          } catch (error) {
              console.error('error fetching data')
          }
      }
      fetchData()
    }, [])
  }

  if (loading) {
    return (
        <div>Loading...</div>
    )
  } else {

  return (
    <div className="flex justify-between w-full">
      <div>

      </div>
      <div className="w-[955px] max-h-[1237px] p-2 grid grid-cols-68 grid-rows-94 border">
        <div className="col-start-5 col-end-45 row-start-3 row-end-11">
          <img src={Logo} alt="battletech logo" className="h-full" />
        </div>
        <div className="col-start-6 col-end-28 row-start-11 row-end-41">
          <ReadMechData mechData={mechData} />
        </div>
        <div className="col-start-29 col-end-45 row-start-11 row-end-20">
          <ReadWarriorData mechData={mechData} />
        </div>
        <div className='col-start-29 col-end-45 row-start-21 row-end-42 flex justify-center items-center'>
          <img
          src={mechData[0].imageUrl ? mechData[0].imageUrl : Placeholder}
          alt="mech image"
          className={mechData[0].imageUrl ? "h-[80%]" : "w-[80%] -mt-12"}
          />
        </div>
        
        <p className="col-start-49 col-end-60 row-start-3 row-end-5 bg-black text-white text-sm text-center z-10 rounded-full pt-[2px]">
          ARMOR DIAGRAM
        </p>
        <img
          src={ArmorDiagram}
          alt="armor diagram"
          className="col-start-45 col-end-65 row-start-5 row-end-42 w-[95%]"
        />
        <div className="col-start-6 col-end-44 row-start-42 row-end-89">
          <ReadCriticalHitTable mechData={mechData}/>
        </div>
        <p className="col-start-45 col-end-61 row-start-42 row-end-44 bg-black text-white text-sm text-center z-10 rounded-full pt-[2px]">
          INTERNAL STRUCTURE DIAGRAM
        </p>
        <img
          src={InternalStructureDiagram}
          alt="internal structure diagram"
          className="col-start-45 col-end-61 row-start-46 row-end-67"
        />
        <div className="col-start-45 col-end-61 row-start-67 row-end-89">
          <ReadHeatData mechData={mechData} />
        </div>
        <img
          src={HeatScale}
          alt="heat scale"
          className="col-start-62 col-end-65 row-start-42 row-end-89 border"
        />
        <p className="col-start-7 col-end-64 row-start-89 row-end-90 text-2xs font-bold pt-1 flex items-center flex-wrap justify-center">
          <BiCopyright /> 2019 The Topps Company, Inc. Classic BattleTech,
          BattleTech, 'Mech and BattleMech are trademarks of The Topps Company,
          Inc. All right reserved.
        </p>
        <p className="col-start-7 col-end-64 row-start-90 row-end-91 text-2xs font-bold pt-1 flex items-center flex-wrap justify-center">
          Catalyst Game Labs and the Catalyst Game Labs logo are trademarks of
          InMediaRes Production, LLC. Permission to photocopy for personal use.
        </p>
      </div>
    </div>
  );
};
}
