//setup
var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
//schemas
var equipmentEnglish = new Schema({
    _id: ObjectId,
    dateCreated: Date,
    dateRevised: Date,
    equipName: { type: String, default: '' },
    equipType: { type: String, default: '' },
    equipSlot: { type: String, default: '' },
    equipSkill: { type: String, default: '' },
    equipAbilities: { type: String, default: '' },
    equipImg: { type: String, default: '' },
    equipImgType: { type: String, default: '' }
});
var unitEnglish = new Schema({
    _id: ObjectId,
    dateCreated: Date,
    dateRevised: Date,
    unitName: { type: String, default: '' },//full name
    unitNName: { type: String, default: '' },//nick name
    unitRole: { type: String, default: '' }, //roles that can be used to describe the unit
    unitTier: { type: String, default: 'tbd' },//tier
    unitImg: { type: String, default: '' },//img
    unitImgType: { type: String, default: '' },//img type
    unitType: { type: String, default: '' },//element
    unitRace: { type: String, default: '' },//race
    unitMaxStar: { type: Number, default: 5 },//to filter out all the 4*/5*
    unitStatHP: { type: String, default: '' },//hp
    unitStatATK: { type: String, default: '' },//atk
    unitStatDEF: { type: String, default: '' },//def
    unitStatHPB: { type: String, default: '' },//hp
    unitStatATKB: { type: String, default: '' },//atk
    unitStatDEFB: { type: String, default: '' },//def
    unitSlotA: { type: String, default: '' },//first item slot
    unitSlotB: { type: String, default: '' },//second item slot
    unitSlotC: { type: String, default: '' },//third item slot
    unitSkill: { type: String, default: '' },//skill detail
    unitArts: { type: String, default: '' },//art detail
    unitTrueArts: { type: String, default: '' },//true art detail
    unitAbilities: { type: String, default: '' },//abilities/passives
    unitMaterials: { type: String, default: '' },//material costs
    unitTW: { type: String, default: '' }//name of their weapon - details added via front end
});
var teamEnglish = new Schema({
    _id: ObjectId,
    dateCreated: Date,
    dateRevised: Date,
    teamName: { type: String, default: '' },
    teamUnit: [{
        unit: { type: String, default: '' },
        unitSlotAEquipped: { type: String, default: '' },
        unitSlotBEquipped: { type: String, default: '' },
        unitSlotCEquipped: { type: String, default: '' },
    }],
    dungeonType: { type: String, default: '' },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    comments: [{ _id: { type: String, default: '' } }]
});
var dungeonEnglish = new Schema({
    _id: ObjectId,
    dateCreated: Date,
    dateRevised: Date,
    dungeonName: { type: String, default: '' },
    dungeonType: { type: String, default: '' },
    dungeonDetail: { type: String, default: '' },
    dungeonImg: { type: String, default: '' },
    dungeonImgType: { type: String, default: '' }
});
var comment = new Schema({
    _id: { type: String, default: '' },
    dateCreated: Date,
    dateRevised: Date,
    commenterName: { type: String, default: '' },
    commentContent: { type: String, default: '' },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 }
});
var banner = new Schema({
    _id: ObjectId,
    dateCreated: Date,
    dateRevised: Date,
    bannerName: { type: String, default: '' },
    bannerUnits: [{ type: String, default: '' }]
});
var infoBoard = new Schema({
    _id: ObjectId,
    dateCreated: Date,
    dateRevised: Date,
    infoBoardName: { type: String, default: '' },
    infoBoardContent: { type: String, default: '' }
});
//makes it available to app
module.exports = { unitEnglish: unitEnglish, equipmentEnglish: equipmentEnglish, teamEnglish: teamEnglish, dungeonEnglish: dungeonEnglish, comment: comment, banner: banner, infoBoard: infoBoard };