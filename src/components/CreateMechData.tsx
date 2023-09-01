//import//
import { useState } from 'react'
import MechDataImage from '../assets/MechDataImage.jpg'
import { AiOutlineCloseCircle } from 'react-icons/ai'
//unused imports//
import { GoDash, GoPlusCircle } from 'react-icons/go'
//unused imports//

export const CreateMechData: React.FC = () => {
    const [typeModal, setTypeModal] = useState<boolean>(false)
    const [movementModal, setMovementModal] = useState<boolean>(false)
    const [typeValue, setTypeValue] = useState<string>("")
    const [walkingValue, setWalkingValue] = useState<number>(0)
    const [runningValue, setRunningValue] = useState<number>(0)
    const [jumpingValue, setJumpingValue] = useState<number>(0)
    const [tonnageValue, setTonnageValue] = useState<number>(0)
    const [techBaseValue, setTechBaseValue] = useState<string>("")
    const [rulesLevelValue, setRulesLevelValue] = useState<string>("")
    const [roleValue, setRoleValue] = useState<string>("")

    const toggleTypeModal: React.MouseEventHandler<SVGSVGElement> = (): void => {
        setTypeModal(!typeModal)
    }

    const closeModal: React.MouseEventHandler<HTMLButtonElement> = (): void => {
        setTypeModal(false)
        setMovementModal(false)
    }

    const saveModal: React.MouseEventHandler<HTMLButtonElement> = (): void => {
        setTypeModal(false)
        setMovementModal(false)
    }
    const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setTypeValue(e.target.value)
    }
    const deleteType: React.MouseEventHandler<SVGSVGElement> = () => {
      setTypeValue("")
    }
    const handleWalkingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      setWalkingValue(parseInt(e.target.value))
    }
    const deleteWalking: React.MouseEventHandler<SVGSVGElement> = () => {
      setWalkingValue(0)
    }
    const handleRunningChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      setRunningValue(parseInt(e.target.value))
    }
    const deleteRunning: React.MouseEventHandler<SVGSVGElement> = () => {
      setRunningValue(0)
    }
    const handleJumpingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      setJumpingValue(parseInt(e.target.value))
    }
    const deleteJumping: React.MouseEventHandler<SVGSVGElement> = () => {
      setJumpingValue(0)
    }
    const handleTonnageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      setTonnageValue(parseInt(e.target.value))
    }
    const deleteTonnage: React.MouseEventHandler<SVGSVGElement> = () => {
      setTonnageValue(0)
    }
    const handleTechBaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      setTechBaseValue(e.target.value)
    }
    const deleteTechBase: React.MouseEventHandler<SVGSVGElement> = () => {
      setTechBaseValue("")
    }
    const handleRulesLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      setRulesLevelValue(e.target.value)
    }
    const deleteRulesLevel: React.MouseEventHandler<SVGSVGElement> = () => {
      setRulesLevelValue("")
    }
    const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      setRoleValue(e.target.value)
    }
    const deleteRole: React.MouseEventHandler<SVGSVGElement> = () => {
      setRoleValue("")
    }
  return (
    <div className="grid grid-cols-22 grid-rows-30 w-full h-full">
        <p className="col-start-1 col-end-11 row-start-1 row-end-3 bg-black text-white text-sm text-center z-10 rounded-full flex justify-center items-center">
          'MECH DATA <GoPlusCircle onClick={toggleTypeModal} className='bg bg-yellow-300 text-black rounded-full ml-3 mt-[2px] hover:cursor-pointer'/>
        </p>
        <div className="col-start-1 col-end-23 row-start-1 row-end-31"></div>
        <span className="col-start-1 col-end-23 row-start-2 row-end-31 border-2 border-black rounded-record"></span>
        
        {typeModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="bg-white p-4 rounded-lg z-50 flex flex-col">
            <p className='text-2xl font-bold text-center w-full bg-blue-300 rounded-md py-2'>Mech Data:</p>
            {/* Modal content goes here */}
            <div className='w-full flex pt-4'>
              <label htmlFor="" className='font-bold'>Mech Type</label>
              <input type="text" value={typeValue} placeholder={typeValue} onChange={handleTypeChange} className='border-2 border-black ml-2 pl-2 w-[80%]'/>
            </div>
              <div className='flex pt-2'>
                <div className='flex w-[50%]'>
                  <label htmlFor="" className='font-bold'>Walking</label>
                  <input type="number" value={walkingValue} placeholder={walkingValue.toString()} onChange={handleWalkingChange} className='border-2 border-black ml-3 pl-2 w-[25%]'/>
                </div>
                <div className='flex w-[50%]'>
                  <label htmlFor="" className='font-bold'>Tonnage</label>
                  <input type="number" value={tonnageValue} placeholder={tonnageValue.toString()} onChange={handleTonnageChange} className='border-2 border-black ml-2 pl-2 w-[25%]'/>
                </div>
              </div>
              <div className='flex pt-2'>
                <div className='flex w-[50%]'>
                  <label htmlFor="" className='font-bold'>Running</label>
                  <input type="number" value={runningValue} placeholder={runningValue.toString()} onChange={handleRunningChange} className='border-2 border-black ml-3 pl-2 w-[25%]'/>
                </div>
                <div className='flex w-[50%]'>
                  <label htmlFor="" className='font-bold'>Tech Base</label>
                  <input type="text" value={techBaseValue} placeholder={techBaseValue} onChange={handleTechBaseChange} className='border-2 border-black ml-2 pl-2 w-[70%]'/>
                </div>
              </div>
              <div className='flex pt-2'>
                <div className='flex w-[50%]'>
                  <label htmlFor="" className='font-bold'>Jumping</label>
                  <input type="number" value={jumpingValue} placeholder={jumpingValue.toString()} onChange={handleJumpingChange} className='border-2 border-black ml-2 pl-2 w-[26%]'/>
                </div>
                <div className='flex w-[50%]'>
                  <label htmlFor="" className='font-bold'>Rules Level</label>
                  <input type="text" value={rulesLevelValue} placeholder={rulesLevelValue} onChange={handleRulesLevelChange} className='border-2 border-black ml-2 pl-2 w-[66%]'/>
                </div>
              </div>
              <div className='flex justify-end pt-2'>
                <div className='flex w-[50%]'>
                  <label htmlFor="" className='font-bold'>Role</label>
                  <input type="text" value={roleValue} placeholder={roleValue} onChange={handleRoleChange} className='border-2 border-black ml-2 pl-2 w-[84%]'/>
                </div>
              </div>
            <div className='flex justify-around'>
                <button onClick={closeModal} className='bg-red-400 px-4 rounded-lg mt-4'>Cancel</button>
                <button onClick={saveModal} className='bg-green-400 px-6 rounded-lg mt-4'>Save</button>
            </div>
          </div>
        </div>
        )}
        <div className="col-start-1 col-end-23 row-start-3 row-end-5 pl-1">
            <p className="font-bold text-xs flex items-center">Type: {typeValue === "" ? (<p>{typeValue}</p>) : (<><span className='bg-green-400'>{typeValue}</span><AiOutlineCloseCircle onClick={deleteType}  className='bg-red-400 ml-1 hover:cursor-pointer'/></>)}</p>
        </div>
        <p className="col-start-2 col-end-12 row-start-5 row-end-6 text-2xs font-bold flex items-center">Movement Points</p>
        <p className="col-start-2 col-end-7 row-start-6 row-end-7 text-2xs font-bold">Walking:</p>
        <p className="col-start-7 col-end-12 row-start-6 row-end-7 text-2xs flex">{walkingValue === 0 ? (<p></p>) : (<><span className='bg-green-400 px-2'>{walkingValue}</span> <AiOutlineCloseCircle onClick={deleteWalking} className='bg-red-400 ml-2 hover:cursor-pointer mt-[2px]'/></>)}</p>
        <p className="col-start-2 col-end-7 row-start-7 row-end-8 text-2xs font-bold">Running:</p>
        <p className="col-start-7 col-end-12 row-start-7 row-end-8 text-2xs flex">{runningValue === 0 ? (<p></p>) : (<><span className='bg-green-400 px-2'>{runningValue}</span> <AiOutlineCloseCircle onClick={deleteRunning} className='bg-red-400 ml-2 hover:cursor-pointer mt-[2px]'/></>)}</p>
        <p className="col-start-2 col-end-7 row-start-8 row-end-9 text-2xs font-bold">Jumping:</p>
        <p className="col-start-7 col-end-12 row-start-8 row-end-9 text-2xs flex">{jumpingValue === 0 ? (<p></p>) : (<><span className='bg-green-400 px-2'>{jumpingValue}</span> <AiOutlineCloseCircle onClick={deleteJumping} className='bg-red-400 ml-2 hover:cursor-pointer mt-[2px]'/></>)}</p>
        <p className="col-start-12 col-end-16 row-start-5 row-end-6 text-2xs font-bold">Tonnage:</p>
        <p className="col-start-16 col-end-23 row-start-5 row-end-6 text-2xs flex pl-1 justify-start">{tonnageValue === 0 ? (<p></p>) : (<><span className='bg-green-400 px-2'>{tonnageValue}</span> <AiOutlineCloseCircle onClick={deleteTonnage} className='bg-red-400 ml-2 hover:cursor-pointer mt-[2px]'/></>)}</p>
        <p className="col-start-12 col-end-16 row-start-6 row-end-7 text-2xs font-bold">Tech Base:</p>
        <p className="col-start-16 col-end-23 row-start-6 row-end-7 text-2xs flex pl-1">{techBaseValue === "" ? (<p></p>) : (<><span className='bg-green-400 px-2'>{techBaseValue}</span> <AiOutlineCloseCircle onClick={deleteTechBase} className='bg-red-400 ml-2 hover:cursor-pointer mt-[2px]'/></>)}</p>
        <p className="col-start-12 col-end-17 row-start-7 row-end-8 text-2xs font-bold">Rules Level:</p>
        <p className="col-start-16 col-end-23 row-start-7 row-end-8 text-2xs flex pl-1">{rulesLevelValue === "" ? (<p></p>) : (<><span className='bg-green-400 px-2'>{rulesLevelValue}</span> <AiOutlineCloseCircle onClick={deleteRulesLevel} className='bg-red-400 ml-2 hover:cursor-pointer mt-[2px]'/></>)}</p>
        <p className="col-start-12 col-end-16 row-start-8 row-end-9 text-2xs font-bold">Role:</p>
        <p className="col-start-16 col-end-23 row-start-8 row-end-9 text-2xs flex pl-1">{roleValue === "" ? (<p></p>) : (<><span className='bg-green-400 px-2'>{roleValue}</span> <AiOutlineCloseCircle onClick={deleteRole} className='bg-red-400 ml-2 hover:cursor-pointer mt-[2px]'/></>)}</p>
        <span className="col-start-1 col-end-23 row-start-9 border-t-2 border-black mx-1 mt-1"/>
        <div className="col-start-1 col-end-23 row-start-9 row-end-11 pl-1 pt-2">
            <p className="text-xs font-bold">Weapons & Equipment Inventory</p>
        </div>
        <p className="col-start-1 col-end-3 row-start-11 row-end-12 text-2xs font-bold text-right">Qty</p>
        <p className="col-start-2 col-end-3 row-start-13 row-end-14 text-2xs">1</p>
        <p className="col-start-2 col-end-3 row-start-14 row-end-15 text-2xs">2</p>
        <p className="col-start-2 col-end-3 row-start-15 row-end-16 text-2xs">1</p>
        <p className="col-start-2 col-end-3 row-start-16 row-end-17 text-2xs">2</p>
        <p className="col-start-2 col-end-3 row-start-17 row-end-18 text-2xs">1</p>
        <p className="col-start-2 col-end-3 row-start-18 row-end-19 text-2xs">1</p>
        <p className="col-start-2 col-end-3 row-start-19 row-end-20 text-2xs">1</p>
        <p className="col-start-3 col-end-5 row-start-11 row-end-12 text-2xs font-bold text-right">Type</p>
        <p className="col-start-3 col-end-10 row-start-13 row-end-14 text-2xs">Active Probe</p>
        <p className="col-start-3 col-end-10 row-start-14 row-end-15 text-2xs">Machine Gun</p>
        <p className="col-start-3 col-end-10 row-start-15 row-end-16 text-2xs">Flamer</p>
        <p className="col-start-3 col-end-10 row-start-16 row-end-17 text-2xs">Anti-Missile System</p>
        <p className="col-start-3 col-end-10 row-start-17 row-end-18 text-2xs">TAG</p>
        <p className="col-start-3 col-end-10 row-start-18 row-end-19 text-2xs">A-Pod</p>
        <p className="col-start-3 col-end-10 row-start-19 row-end-20 text-2xs">A-Pod</p>
        <p className="col-start-9 col-end-11 row-start-11 row-end-12 text-2xs font-bold text-center">Loc</p>
        <p className="col-start-9 col-end-11 row-start-13 row-end-14 text-2xs text-center">HD</p>
        <p className="col-start-9 col-end-11 row-start-14 row-end-15 text-2xs text-center">RA</p>
        <p className="col-start-9 col-end-11 row-start-15 row-end-16 text-2xs text-center">RA</p>
        <p className="col-start-9 col-end-11 row-start-16 row-end-17 text-2xs text-center">LA</p>
        <p className="col-start-9 col-end-11 row-start-17 row-end-18 text-2xs text-center">LA</p>
        <p className="col-start-9 col-end-11 row-start-18 row-end-19 text-2xs text-center">RL</p>
        <p className="col-start-9 col-end-11 row-start-19 row-end-20 text-2xs text-center">LL</p>
        <p className="col-start-11 col-end-12 row-start-11 row-end-12 text-2xs font-bold text-right">Ht</p>
        <p className="col-start-11 col-end-12 row-start-13 row-end-14 text-2xs text-center"><GoDash size={13} /></p>
        <p className="col-start-11 col-end-12 row-start-14 row-end-15 text-2xs text-center"><GoDash size={13} /></p>
        <p className="col-start-11 col-end-12 row-start-15 row-end-16 text-2xs text-center">3</p>
        <p className="col-start-11 col-end-12 row-start-16 row-end-17 text-2xs text-center">1</p>
        <p className="col-start-11 col-end-12 row-start-17 row-end-18 text-2xs text-center"><GoDash size={13} /></p>
        <p className="col-start-11 col-end-12 row-start-18 row-end-19 text-2xs text-center"><GoDash size={13} /></p>
        <p className="col-start-11 col-end-12 row-start-19 row-end-20 text-2xs text-center"><GoDash size={13} /></p>
        <p className="col-start-12 col-end-17 row-start-11 row-end-12 text-2xs font-bold pl-2">Dmg</p>
        <p className="col-start-12 col-end-17 row-start-13 row-end-14 text-2xs pl-1">[E]</p>
        <p className="col-start-12 col-end-17 row-start-14 row-end-15 text-2xs pl-1">2 [DB, AI]</p>
        <p className="col-start-12 col-end-17 row-start-15 row-end-16 text-2xs pl-1">2 [DE, H, AI]</p>
        <p className="col-start-12 col-end-17 row-start-16 row-end-17 text-2xs pl-1">[PD]</p>
        <p className="col-start-12 col-end-17 row-start-17 row-end-18 text-2xs pl-1">[E]</p>
        <p className="col-start-12 col-end-17 row-start-18 row-end-19 text-2xs pl-1">[PD, OS, AI]</p>
        <p className="col-start-12 col-end-17 row-start-19 row-end-20 text-2xs pl-1">[PD, OS, AI]</p>
        <p className="col-start-16 col-end-18 row-start-11 row-end-12 text-2xs font-bold text-right">Min</p>
        <p className="col-start-16 col-end-18 row-start-13 row-end-14 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-16 col-end-18 row-start-14 row-end-15 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-16 col-end-18 row-start-15 row-end-16 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-16 col-end-18 row-start-16 row-end-17 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-16 col-end-18 row-start-17 row-end-18 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-16 col-end-18 row-start-18 row-end-19 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-16 col-end-18 row-start-19 row-end-20 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-18 col-end-19 row-start-11 row-end-12 text-2xs font-bold pl-[2px]">Sht</p>
        <p className="col-start-18 col-end-19 row-start-13 row-end-14 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-18 col-end-19 row-start-14 row-end-15 text-2xs flex justify-center">1</p>
        <p className="col-start-18 col-end-19 row-start-15 row-end-16 text-2xs flex justify-center">1</p>
        <p className="col-start-18 col-end-19 row-start-16 row-end-17 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-18 col-end-19 row-start-17 row-end-18 text-2xs flex justify-center">5</p>
        <p className="col-start-18 col-end-19 row-start-18 row-end-19 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-18 col-end-19 row-start-19 row-end-20 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-19 col-end-21 row-start-11 row-end-12 text-2xs font-bold text-right">Med</p>
        <p className="col-start-19 col-end-21 row-start-13 row-end-14 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-19 col-end-21 row-start-14 row-end-15 text-2xs flex justify-center">2</p>
        <p className="col-start-19 col-end-21 row-start-15 row-end-16 text-2xs flex justify-center">2</p>
        <p className="col-start-19 col-end-21 row-start-16 row-end-17 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-19 col-end-21 row-start-17 row-end-18 text-2xs flex justify-center">9</p>
        <p className="col-start-19 col-end-21 row-start-18 row-end-19 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-19 col-end-21 row-start-19 row-end-20 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-21 col-end-23 row-start-11 row-end-12 text-2xs font-bold pl-1">Lng</p>
        <p className="col-start-21 col-end-22 row-start-13 row-end-14 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-21 col-end-22 row-start-14 row-end-15 text-2xs flex justify-center">3</p>
        <p className="col-start-21 col-end-22 row-start-15 row-end-16 text-2xs flex justify-center">3</p>
        <p className="col-start-21 col-end-22 row-start-16 row-end-17 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-21 col-end-22 row-start-17 row-end-18 text-2xs flex justify-center">15</p>
        <p className="col-start-21 col-end-22 row-start-18 row-end-19 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-21 col-end-22 row-start-19 row-end-20 text-2xs flex justify-center"><GoDash size={13} /></p>
        <p className="col-start-2 col-end-23 row-start-25 row-end-26 text-2xs">Ammo: [AMS] 72, [Machine Gun] 100</p>
        <span className="col-start-1 col-end-23 row-start-27 border-b-2 border-black mx-1"/>
        <p className="col-start-3 col-end-16 row-start-28 row-end-29 text-xs"><span className="font-bold">BV:</span> 608</p>
        <img src={MechDataImage} alt="sailboat lookin' thing" className="col-start-18 col-end-20 row-start-28 row-end-30 mt-1"/>
    </div>
  )
}
