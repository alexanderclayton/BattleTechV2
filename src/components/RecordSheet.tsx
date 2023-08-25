//import//
import Logo from '../assets/BattletechBlackLogo.jpg'
import Atlas from '../assets/AtlasCardImage.png'
import ArmorDiagram from '../assets/ArmorDiagram.jpg'
import InternalStructureDiagram from '../assets/InternalStructureDiagram.jpg'

export const RecordSheet: React.FC = () => {
  return (
    <div className="w-full max-w-[637px] h-screen max-h-[825px] p-2 grid grid-cols-68 grid-rows-94 border">
        <img src={Logo} alt="" className='col-start-5 col-end-45 row-start-3 row-end-11'/>
        <div className='col-start-6 col-end-29 row-start-11 row-end-42 border'></div>
        <div className='col-start-30 col-end-45 row-start-11 row-end-20 border'></div>
        <img src={Atlas} alt="" className='col-start-30 col-end-45 row-start-21 row-end-42'/>

        <img src={ArmorDiagram} alt="" className='col-start-45 col-end-65 row-start-5 row-end-42'/>
        <div className='col-start-6 col-end-44 row-start-42 row-end-82 border'></div>

        <img src={InternalStructureDiagram} alt="" className='col-start-45 col-end-61 row-start-44 row-end-63'/>
        <div className='col-start-45 col-end-61 row-start-63 row-end-82 border'></div>
        <div className='col-start-62 col-end-65 row-start-42 row-end-82 border'></div>
    </div>
  )
}
