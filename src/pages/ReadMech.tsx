//import//
import { useParams } from "react-router-dom"
import { DeleteMech } from "../components/DeleteMech"
import { ReadRecordSheet } from "../components/ReadMech/ReadRecordSheet"
import { UpdateMech } from "../components/UpdateMech"

export const ReadMech: React.FC = () => {
  const { id } = useParams()
  if (!id) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div className="flex justify-end">
      <div>
        <DeleteMech id={id}/>
        <UpdateMech id={id}/>
      </div>
        
        <ReadRecordSheet id={id}/>
        
    </div>
  )
}