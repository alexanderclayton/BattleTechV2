

export interface IMechData {
    type: string
    walking: number
    running: number
    jumping: number
    tonnage: number
    techBase: string
    rulesLevel: string
    role: string
    weaponsEquipmentInventory: (string | number)[]
    ammo: string
    bv: string
}

export interface IWarriorData {
    name: string
    gunnerySkill: number
    pilotingSkill: number 
}

export interface ICriticalHitTable {
    leftArmOne: string
    leftArmTwo: string
    leftArmThree: string
    leftArmFour: string
    leftArmFive: string
    leftArmSix: string
    leftArmSeven: string
    leftArmEight: string
    leftArmNine: string
    leftArmTen: string
    leftArmEleven: string
    leftArmTwelve: string
    leftTorsoOne: string
    leftTorsoTwo: string
    leftTorsoThree: string
    leftTorsoFour: string
    leftTorsoFive: string
    leftTorsoSix: string
    leftTorsoSeven: string
    leftTorsoEight: string
    leftTorsoNine: string
    leftTorsoTen: string
    leftTorsoEleven: string
    leftTorsoTwelve: string
    leftLegOne: string
    leftLegTwo: string
    leftLegThree: string
    leftLegFour: string
    leftLegFive: string
    leftLegSix: string
    headOne: string
    headTwo: string
    headThree: string
    headFour: string
    headFive: string
    headSix: string
    centerTorsoOne: string
    centerTorsoTwo: string
    centerTorsoThree: string
    centerTorsoFour: string
    centerTorsoFive: string
    centerTorsoSix: string
    centerTorsoSeven: string
    centerTorsoEight: string
    centerTorsoNine: string
    centerTorsoTen: string
    centerTorsoEleven: string
    centerTorsoTwelve: string
    rightArmOne: string
    rightArmTwo: string
    rightArmThree: string
    rightArmFour: string
    rightArmFive: string
    rightArmSix: string
    rightArmSeven: string
    rightArmEight: string
    rightArmNine: string
    rightArmTen: string
    rightArmEleven: string
    rightArmTwelve: string
    rightTorsoOne: string
    rightTorsoTwo: string
    rightTorsoThree: string
    rightTorsoFour: string
    rightTorsoFive: string
    rightTorsoSix: string
    rightTorsoSeven: string
    rightTorsoEight: string
    rightTorsoNine: string
    rightTorsoTen: string
    rightTorsoEleven: string
    rightTorsoTwelve: string
    rightLegOne: string
    rightLegTwo: string
    rightLegThree: string
    rightLegFour: string
    rightLegFive: string
    rightLegSix: string
}

export interface IHeatData {
    heatSinks: number
}