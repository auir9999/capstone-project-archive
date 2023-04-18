//Data Model Classes
export class equipmentEnglish {
    _id?:string;
    dateCreated:string=new Date().toISOString();
    dateRevised:string=new Date().toISOString();
    equipName:string;
    equipType:string;
    equipSlot:string;
    equipSkill:string;
    equipAbilities:string;
    equipImg:string;
    equipImgType:string;
}
export class unitEnglish {
    _id?:string;
    dateCreated:string=new Date().toISOString();
    dateRevised:string=new Date().toISOString();
    unitName:string;//full name
    unitNName:string;//nick name
    unitRole:string;
    unitTier:string;//tier
    unitImg:string;//img
    unitImgType:string;//img type
    unitType:string;//element
    unitRace:string;//race
    unitMaxStar:number=5;//to filter out all the 4*/5*
    unitStatHP:string;//hp
    unitStatATK:string;//atk
    unitStatDEF:string;//def
    unitStatHPB:string;//hp
    unitStatATKB:string;//atk
    unitStatDEFB:string;//def
    unitSlotA:string;//first item slot
    unitSlotB:string;//second item slot
    unitSlotC:string;//third item slot
    unitSkill:string;//skill detail
    unitArts:string;//art detail
    unitTrueArts:string;//true art detail
    unitAbilities:string;//abilities/passives
    unitMaterials:string;//material costs
    unitTW?:string;
}
export class teamEnglish {
    _id?:string;
    dateCreated:string=new Date().toISOString();
    dateRevised:string=new Date().toISOString();
    teamName:string;
    teamUnit:any[];
    dungeonType?:string;
    likes:number=0;
    dislikes:number=0;
    comments?:any[];
}
export class dungeonEnglish {
    _id?:string;
    dateCreated:string=new Date().toISOString();
    dateRevised:string=new Date().toISOString();
    dungeonName:string;
    dungeonDetail:string;
    dungeonImg:string;
    dungeonImgType:string;
    dungeonType:string;
}
export class comment {
    _id?:string;
    dateCreated:string=new Date().toISOString();
    dateRevised:string=new Date().toISOString();
    commenterName:string;
    commentContent:string;
    likes:number=0;
    dislikes:number=0;
}
export class banner {
    _id?:string;
    dateCreated:string=new Date().toISOString();
    dateRevised:string=new Date().toISOString();
    bannerName:string;
    bannerUnits?:string[];
}

export interface rollable{
    name:string;
    count:number;
}

export class infoBoardEnglish{
    _id?:string;
    dateCreated:string=new Date().toISOString();
    dateRevised:string=new Date().toISOString();
    infoBoardName:string;
    infoBoardContent:string;
}