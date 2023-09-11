//import//
import { ICriticalHitTable } from '../types/types'
import DamageTransferDiagram from '../assets/DamageTransferDiagram.jpg'
import { BiCircle } from "react-icons/bi"

interface ReadCriticalHitTableProps {
    mechData: ICriticalHitTable[]
}

export const ReadCriticalHitTable: React.FC<ReadCriticalHitTableProps> = ({ mechData }) => {
  return (
    <div className="grid grid-cols-38 grid-rows-47 w-full h-full">
        <p className="col-start-1 col-end-14 row-start-1 row-end-3 bg-black text-white text-sm text-center z-10 rounded-full pt-[2px]">CRITICAL HIT TABLE</p>
        <div className="col-start-1 col-end-39 row-start-1 row-end-48"/>
        <span className="col-start-1 col-end-39 row-start-2 row-end-48 border-2 border-black rounded-lg"/>
        <p className="col-start-5 col-end-15 row-start-4 row-end-5 text-sm"><span className="font-bold">Left Arm</span> [CASE]</p>
        <p className="col-start-2 col-end-4 row-start-8 row-end-10 text-sm font-bold">1-3</p>
        <p className="col-start-4 col-end-15 row-start-6 row-end-7 text-2xs font-bold">1. {mechData[0].leftArmOne}</p>
        <p className="col-start-4 col-end-15 row-start-7 row-end-8 text-2xs font-bold">2. {mechData[0].leftArmTwo}</p>
        <p className="col-start-4 col-end-15 row-start-8 row-end-9 text-2xs font-bold">3. {mechData[0].leftArmThree}</p>
        <p className="col-start-4 col-end-15 row-start-9 row-end-10 text-2xs font-bold">4. {mechData[0].leftArmFour}</p>
        <p className="col-start-4 col-end-15 row-start-10 row-end-11 text-2xs font-bold">5. {mechData[0].leftArmFive}</p>
        <p className="col-start-4 col-end-15 row-start-11 row-end-12 text-2xs font-bold">6. {mechData[0].leftArmSix}</p>
        <p className="col-start-2 col-end-4 row-start-15 row-end-17 text-sm font-bold">4-6</p>
        <p className="col-start-4 col-end-15 row-start-13 row-end-14 text-2xs"><span className="font-bold">1.</span> {mechData[0].leftArmSeven}</p>
        <p className="col-start-4 col-end-15 row-start-14 row-end-15 text-2xs"><span className="font-bold">2.</span> {mechData[0].leftArmEight}</p>
        <p className="col-start-4 col-end-15 row-start-15 row-end-16 text-2xs"><span className="font-bold">3.</span> {mechData[0].leftArmNine}</p>
        <p className="col-start-4 col-end-15 row-start-16 row-end-17 text-2xs"><span className="font-bold">4.</span> {mechData[0].leftArmTen}</p>
        <p className="col-start-4 col-end-15 row-start-17 row-end-18 text-2xs"><span className="font-bold">5.</span> {mechData[0].leftArmEleven}</p>
        <p className="col-start-4 col-end-15 row-start-18 row-end-19 text-2xs"><span className="font-bold">6.</span> {mechData[0].leftArmTwelve}</p>
        <p className="col-start-5 col-end-15 row-start-21 row-end-22 text-sm font-bold">Left Torso</p>
        <p className="col-start-2 col-end-4 row-start-25 row-end-27 text-sm font-bold">1-3</p>
        <p className="col-start-4 col-end-15 row-start-23 row-end-24 text-2xs font-bold">1. {mechData[0].leftTorsoOne}</p>
        <p className="col-start-4 col-end-15 row-start-24 row-end-25 text-2xs font-bold">2. {mechData[0].leftTorsoTwo}</p>
        <p className="col-start-4 col-end-15 row-start-25 row-end-26 text-2xs font-bold">3. {mechData[0].leftTorsoThree}</p>
        <p className="col-start-4 col-end-15 row-start-26 row-end-27 text-2xs font-bold">4. {mechData[0].leftTorsoFour}</p>
        <p className="col-start-4 col-end-15 row-start-27 row-end-28 text-2xs font-bold">5. {mechData[0].leftTorsoFive}</p>
        <p className="col-start-4 col-end-15 row-start-28 row-end-29 text-2xs font-bold">6. {mechData[0].leftTorsoSix}</p>
        <p className="col-start-2 col-end-4 row-start-32 row-end-34 text-sm font-bold">4-6</p>
        <p className="col-start-4 col-end-15 row-start-30 row-end-31 text-2xs"><span className="font-bold">1. {mechData[0].leftTorsoSeven}</span></p>
        <p className="col-start-4 col-end-15 row-start-31 row-end-32 text-2xs"><span className="font-bold">2. {mechData[0].leftTorsoEight}</span></p>
        <p className="col-start-4 col-end-15 row-start-32 row-end-33 text-2xs"><span className="font-bold">3. {mechData[0].leftTorsoNine}</span></p>
        <p className="col-start-4 col-end-15 row-start-33 row-end-34 text-2xs"><span className="font-bold">4.</span> {mechData[0].leftTorsoTen}</p>
        <p className="col-start-4 col-end-15 row-start-34 row-end-35 text-2xs"><span className="font-bold">5.</span> {mechData[0].leftTorsoEleven}</p>
        <p className="col-start-4 col-end-15 row-start-35 row-end-36 text-2xs"><span className="font-bold">6.</span> {mechData[0].leftTorsoTwelve}</p>
        <p className="col-start-5 col-end-15 row-start-38 row-end-39 text-sm font-bold">Left Leg</p>
        <p className="col-start-4 col-end-15 row-start-40 row-end-41 text-2xs"><span className="font-bold">1. {mechData[0].leftLegOne}</span></p>
        <p className="col-start-4 col-end-15 row-start-41 row-end-42 text-2xs"><span className="font-bold">2. {mechData[0].leftLegTwo}</span></p>
        <p className="col-start-4 col-end-15 row-start-42 row-end-43 text-2xs"><span className="font-bold">3. {mechData[0].leftLegThree}</span></p>
        <p className="col-start-4 col-end-15 row-start-43 row-end-44 text-2xs"><span className="font-bold">4. {mechData[0].leftLegFour}</span></p>
        <p className="col-start-4 col-end-15 row-start-44 row-end-45 text-2xs"><span className="font-bold">5.</span> {mechData[0].leftLegFive}</p>
        <p className="col-start-4 col-end-15 row-start-45 row-end-46 text-2xs"><span className="font-bold">6.</span> {mechData[0].leftLegSix}</p>

        <p className="col-start-17 col-end-25 row-start-4 row-end-5 text-sm font-bold">Head</p>
        <p className="col-start-16 col-end-25 row-start-6 row-end-7 text-2xs font-bold">1. {mechData[0].headOne}</p>
        <p className="col-start-16 col-end-25 row-start-7 row-end-8 text-2xs font-bold">2. {mechData[0].headTwo}</p>
        <p className="col-start-16 col-end-25 row-start-8 row-end-9 text-2xs font-bold">3. {mechData[0].headOne}</p>
        <p className="col-start-16 col-end-25 row-start-9 row-end-10 text-2xs font-bold">4. {mechData[0].headOne}</p>
        <p className="col-start-16 col-end-25 row-start-10 row-end-11 text-2xs font-bold">5. {mechData[0].headOne}</p>
        <p className="col-start-16 col-end-25 row-start-11 row-end-12 text-2xs font-bold">6. {mechData[0].headOne}</p>
        <p className="col-start-17 col-end-25 row-start-14 row-end-15 text-sm font-bold">Center Torso</p>
        <p className="col-start-14 col-end-16 row-start-18 row-end-20 text-sm font-bold">1-3</p>
        <p className="col-start-16 col-end-25 row-start-16 row-end-17 text-2xs font-bold">1. {mechData[0].centerTorsoOne}</p>
        <p className="col-start-16 col-end-25 row-start-17 row-end-18 text-2xs font-bold">2. {mechData[0].centerTorsoTwo}</p>
        <p className="col-start-16 col-end-25 row-start-18 row-end-19 text-2xs font-bold">3. {mechData[0].centerTorsoThree}</p>
        <p className="col-start-16 col-end-25 row-start-19 row-end-20 text-2xs font-bold">4. {mechData[0].centerTorsoFour}</p>
        <p className="col-start-16 col-end-25 row-start-20 row-end-21 text-2xs font-bold">5. {mechData[0].centerTorsoFive}</p>
        <p className="col-start-16 col-end-25 row-start-21 row-end-22 text-2xs font-bold">6. {mechData[0].centerTorsoSix}</p>
        <p className="col-start-14 col-end-16 row-start-25 row-end-27 text-sm font-bold">4-6</p>
        <p className="col-start-16 col-end-25 row-start-23 row-end-24 text-2xs"><span className="font-bold">1. {mechData[0].centerTorsoSeven}</span></p>
        <p className="col-start-16 col-end-25 row-start-24 row-end-25 text-2xs"><span className="font-bold">2. {mechData[0].centerTorsoEight}</span></p>
        <p className="col-start-16 col-end-25 row-start-25 row-end-26 text-2xs"><span className="font-bold">3. {mechData[0].centerTorsoNine}</span></p>
        <p className="col-start-16 col-end-25 row-start-26 row-end-27 text-2xs"><span className="font-bold">4. {mechData[0].centerTorsoTen}</span></p>
        <p className="col-start-16 col-end-25 row-start-27 row-end-28 text-2xs"><span className="font-bold">5.</span> {mechData[0].centerTorsoEleven}</p>
        <p className="col-start-16 col-end-25 row-start-28 row-end-29 text-2xs"><span className="font-bold">6.</span> {mechData[0].centerTorsoTwelve}</p>
        <span className="col-start-15 col-end-26 row-start-30 row-end-36 border-2 border-black rounded-lg"/>
        <p className="col-start-15 col-end-21 row-start-31 row-end-32 text-xs font-bold text-right">Engine Hits</p>
        <p className="col-start-15 col-end-21 row-start-32 row-end-33 text-xs font-bold text-right">Gyro Hits</p>
        <p className="col-start-15 col-end-21 row-start-33 row-end-34 text-xs font-bold text-right">Sensor Hits</p>
        <p className="col-start-15 col-end-21 row-start-34 row-end-35 text-xs font-bold text-right">Life Support</p>
        <p className="col-start-22 col-end-26 row-start-31 row-end-32 text-right flex pt-[2px]"><BiCircle size={13} /><BiCircle size={13} /><BiCircle size={13} /></p>
        <p className="col-start-22 col-end-26 row-start-32 row-end-33 text-right flex pt-[2px]"><BiCircle size={13} /><BiCircle size={13} /></p>
        <p className="col-start-22 col-end-26 row-start-33 row-end-34 text-right flex pt-[2px]"><BiCircle size={13} /><BiCircle size={13} /></p>
        <p className="col-start-22 col-end-26 row-start-34 row-end-35 text-right flex pt-[2px]"><BiCircle size={13} /></p>
        <img src={DamageTransferDiagram} alt="damage transfer diagram" className='col-start-15 col-end-26 row-start-37 row-end-48'/>

        <p className="col-start-29 col-end-49 row-start-4 row-end-5 text-sm"><span className="font-bold">Right Arm</span> [CASE]</p>
        <p className="col-start-26 col-end-28 row-start-8 row-end-10 text-sm font-bold">1-3</p>
        <p className="col-start-28 col-end-39 row-start-6 row-end-7 text-2xs font-bold">1. {mechData[0].rightArmOne}</p>
        <p className="col-start-28 col-end-39 row-start-7 row-end-8 text-2xs font-bold">2. {mechData[0].rightArmTwo}</p>
        <p className="col-start-28 col-end-39 row-start-8 row-end-9 text-2xs font-bold">3. {mechData[0].rightArmThree}</p>
        <p className="col-start-28 col-end-39 row-start-9 row-end-10 text-2xs font-bold">4. {mechData[0].rightArmFour}</p>
        <p className="col-start-28 col-end-39 row-start-10 row-end-11 text-2xs font-bold">5. {mechData[0].rightArmFive}</p>
        <p className="col-start-28 col-end-39 row-start-11 row-end-12 text-2xs font-bold">6. {mechData[0].rightArmSix}</p>
        <p className="col-start-26 col-end-28 row-start-15 row-end-17 text-sm font-bold">4-6</p>
        <p className="col-start-28 col-end-39 row-start-13 row-end-14 text-2xs"><span className="font-bold">1. {mechData[0].rightArmSeven}</span></p>
        <p className="col-start-28 col-end-39 row-start-14 row-end-15 text-2xs"><span className="font-bold">2. {mechData[0].rightArmEight}</span></p>
        <p className="col-start-28 col-end-39 row-start-15 row-end-16 text-2xs"><span className="font-bold">3. {mechData[0].rightArmNine}</span></p>
        <p className="col-start-28 col-end-39 row-start-16 row-end-17 text-2xs"><span className="font-bold">4.</span> {mechData[0].rightArmTen}</p>
        <p className="col-start-28 col-end-39 row-start-17 row-end-18 text-2xs"><span className="font-bold">5.</span> {mechData[0].rightArmEleven}</p>
        <p className="col-start-28 col-end-39 row-start-18 row-end-19 text-2xs"><span className="font-bold">6.</span> {mechData[0].rightArmTwelve}</p>
        <p className="col-start-29 col-end-49 row-start-21 row-end-22 text-sm font-bold">Right Torso</p>
        <p className="col-start-26 col-end-28 row-start-25 row-end-27 text-sm font-bold">1-3</p>
        <p className="col-start-28 col-end-39 row-start-23 row-end-24 text-2xs font-bold">1. {mechData[0].rightTorsoOne}</p>
        <p className="col-start-28 col-end-39 row-start-24 row-end-25 text-2xs font-bold">2. {mechData[0].rightTorsoTwo}</p>
        <p className="col-start-28 col-end-39 row-start-25 row-end-26 text-2xs font-bold">3. {mechData[0].rightTorsoThree}</p>
        <p className="col-start-28 col-end-39 row-start-26 row-end-27 text-2xs font-bold">4. {mechData[0].rightTorsoFour}</p>
        <p className="col-start-28 col-end-39 row-start-27 row-end-28 text-2xs font-bold">5. {mechData[0].rightTorsoFive}</p>
        <p className="col-start-28 col-end-39 row-start-28 row-end-29 text-2xs font-bold">6. {mechData[0].rightTorsoSix}</p>
        <p className="col-start-26 col-end-28 row-start-32 row-end-34 text-sm font-bold">4-6</p>
        <p className="col-start-28 col-end-39 row-start-30 row-end-31 text-2xs"><span className="font-bold">1. {mechData[0].rightTorsoSeven}</span></p>
        <p className="col-start-28 col-end-39 row-start-31 row-end-32 text-2xs"><span className="font-bold">2.</span> {mechData[0].rightTorsoEight}</p>
        <p className="col-start-28 col-end-39 row-start-32 row-end-33 text-2xs"><span className="font-bold">3.</span> {mechData[0].rightTorsoNine}</p>
        <p className="col-start-28 col-end-39 row-start-33 row-end-34 text-2xs"><span className="font-bold">4.</span> {mechData[0].rightTorsoTen}</p>
        <p className="col-start-28 col-end-39 row-start-34 row-end-35 text-2xs"><span className="font-bold">5.</span> {mechData[0].rightTorsoEleven}</p>
        <p className="col-start-28 col-end-39 row-start-35 row-end-36 text-2xs"><span className="font-bold">6.</span> {mechData[0].rightTorsoTwelve}</p>
        <p className="col-start-29 col-end-49 row-start-38 row-end-39 text-sm font-bold">Right Leg</p>
        <p className="col-start-28 col-end-39 row-start-40 row-end-41 text-2xs"><span className="font-bold">1. {mechData[0].rightLegOne}</span></p>
        <p className="col-start-28 col-end-39 row-start-41 row-end-42 text-2xs"><span className="font-bold">2. {mechData[0].rightLegTwo}</span></p>
        <p className="col-start-28 col-end-39 row-start-42 row-end-43 text-2xs"><span className="font-bold">3. {mechData[0].rightLegThree}</span></p>
        <p className="col-start-28 col-end-39 row-start-43 row-end-44 text-2xs"><span className="font-bold">4. {mechData[0].rightLegFour}</span></p>
        <p className="col-start-28 col-end-39 row-start-44 row-end-45 text-2xs"><span className="font-bold">5.</span> {mechData[0].rightLegFive}</p>
        <p className="col-start-28 col-end-39 row-start-45 row-end-46 text-2xs"><span className="font-bold">6.</span> {mechData[0].rightLegSix}</p>

    </div>
  )
}
