//setup
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const { unitEnglish, equipmentEnglish, teamEnglish, dungeonEnglish, comment, banner, infoBoard } = require('./schema.js');

const urlAtlas = "mongodb+srv://auir9999:3vD9uELfLz0TvsuS@cluster0-ndvuh.mongodb.net/GS?retryWrites=true&w=majority";
//use github

module.exports = function () {
    //collection 
    let unitsEng, equipEng, teamEng, dungEng, comments, banners, boards;
    return {
        //connect function
        MongoConnect: function () {
            return new Promise(function (resolve, reject) {
                console.log('attempting to connect to database...');
                mongoose.connect(urlAtlas, { connectTimeoutMS: 5000, useUnifiedTopology: true, useNewUrlParser: true });
                var db = mongoose.connection;
                db.on('error', (error) => {
                    console.log('Connection error:', error.message);
                    reject(error);
                });
                db.once('open', () => {
                    console.log('Connection to the database was successful');
                    unitsEng = db.model('unitEnglish', unitEnglish, 'unitEnglish');
                    equipEng = db.model('equipmentEnglish', equipmentEnglish, 'equipmentEnglish');
                    teamEng = db.model('teamEnglish', teamEnglish, 'teamEnglish');
                    dungEng = db.model('dungeonEnglish', dungeonEnglish, 'dungeonEnglish');
                    comments = db.model('comment', comment, 'comment');
                    banners = db.model('banner', banner, 'banner');
                    boards = db.model('infoBoard', infoBoard, 'infoBoard');
                    resolve();
                });
            })
        },
        //unit functions
        getUnitList: function () {
            return new Promise(function (resolve, reject) {
                unitsEng.find()
                    .sort(unitsEng.unitId)
                    .exec((error, items) => {
                        if (error) {
                            reject(error.message);
                        }
                        resolve(items);
                    })
            })
        },
        getUnitDetail: function (name) {
            return new Promise(function (resolve, reject) {
                unitsEng.findOne({ unitName: name })
                    .exec((error, item) => {
                        if (error) {
                            return reject(error.message);
                        }
                        if (item) {
                            return resolve(item);
                        } else {
                            return reject('Not found');
                        }
                    });
            })
        },
        getUnitDetailId: function (id) {
            return new Promise(function (resolve, reject) {
                unitsEng.findById(id)
                    .exec((error, item) => {
                        if (error) {
                            return reject(error.message);
                        }
                        if (item) {
                            return resolve(item);
                        } else {
                            return reject('Not found');
                        }
                    });
            })
        },
        addUnit: function (newUnit) {
            return new Promise(function (resolve, reject) {
                if (!mongoose.Types.ObjectId.isValid(newUnit._id)) {
                    newUnit._id = mongoose.Types.ObjectId();
                }
                unitsEng.create(newUnit, (error, item) => {
                    if (error) {
                        return reject(error.message);
                    }
                    return resolve(item);
                });
            })
        },
        editUnit: function (name, unitChange) {
            return new Promise(function (resolve, reject) {
                unitsEng.findOneAndUpdate({ unitName: name }, unitChange, { new: true })
                    .exec((error, item) => {
                        if (error) {
                            return reject(error.message);
                        }
                        if (item) {
                            return resolve(item);
                        } else {
                            return reject('Not found');
                        }
                    });
            })
        },
        deleteUnit: function (unit) {
            return new Promise(function (resolve, reject) {
                unitsEng.findOneAndRemove({ unitName: unit }, (error) => {
                    if (error) {
                        return reject(error.message);
                    }
                    return resolve();
                })
            })
        },
        //equip functions
        getEquipList: function () {
            return new Promise(function (resolve, reject) {
                equipEng.find()
                    .sort(equipEng.equipId)
                    .exec((error, items) => {
                        if (error) {
                            reject(error.message);
                        }
                        resolve(items);
                    })
            })
        },
        getEquipDetail: function (name) {
            return new Promise(function (resolve, reject) {
                equipEng.findOne({ equipName: name })
                    .exec((error, item) => {
                        if (error) {
                            return reject(error.message);
                        }
                        if (item) {
                            return resolve(item);
                        } else {
                            return reject('Not found');
                        }
                    });
            })
        },
        getEquipDetailId: function (id) {
            return new Promise(function (resolve, reject) {
                equipEng.findById(id)
                    .exec((error, item) => {
                        if (error) {
                            return reject(error.message);
                        }
                        if (item) {
                            return resolve(item);
                        } else {
                            return reject('Not found');
                        }
                    });
            })
        },
        addEquip: function (newEquip) {
            return new Promise(function (resolve, reject) {
                if (!mongoose.Types.ObjectId.isValid(newEquip._id)) {
                    newEquip._id = mongoose.Types.ObjectId();
                }
                equipEng.create(newEquip, (error, item) => {
                    if (error) {
                        return reject(error.message);
                    }
                    return resolve(item);
                });
            })
        },
        editEquip: function (name, equipChange) {
            return new Promise(function (resolve, reject) {
                equipEng.findOneAndUpdate({ equipName: name }, equipChange, { new: true })
                    .exec((error, item) => {
                        if (error) {
                            return reject(error.message);
                        }
                        if (item) {
                            return resolve(item);
                        } else {
                            return reject('Not found');
                        }
                    });
            })
        },
        deleteEquip: function (equip) {
            return new Promise(function (resolve, reject) {
                equipEng.findOneAndRemove({ equipName: equip }, (error) => {
                    if (error) {
                        return reject(error.message);
                    }
                    return resolve();
                })
            })
        },
        //team functions
        getTeamList: function () {
            return new Promise(function (resolve, reject) {
                teamEng.find()
                    .exec((error, items) => {
                        if (error) {
                            reject(error.message);
                        }
                        resolve(items);
                    })
            })
        },
        getTeamDetail: function (name) {
            return new Promise(function (resolve, reject) {
                teamEng.findOne({ teamName: name })
                    .exec((error, item) => {
                        if (error) {
                            return reject(error.message);
                        }
                        if (item) {
                            return resolve(item);
                        } else {
                            return reject('Not found');
                        }
                    });
            })
        },
        getTeamDetailId: function (id) {
            return new Promise(function (resolve, reject) {
                teamEng.findById(id)
                    .exec((error, item) => {
                        if (error) {
                            return reject(error.message);
                        }
                        if (item) {
                            return resolve(item);
                        } else {
                            return reject('Not found');
                        }
                    });
            })
        },
        addTeam: function (newTeam) {
            return new Promise(function (resolve, reject) {
                if (!mongoose.Types.ObjectId.isValid(newTeam._id)) {
                    newTeam._id = mongoose.Types.ObjectId();
                }
                teamEng.create(newTeam, (error, item) => {
                    if (error) {
                        return reject(error.message);
                    }
                    return resolve(item);
                });
            })
        },
        editTeam: function (team, teamChange) {
            return new Promise(function (resolve, reject) {
                teamEng.findOneAndUpdate({ _id: team }, teamChange, { new: true })
                    .exec((error, item) => {
                        if (error) {
                            return reject(error.message);
                        }
                        if (item) {
                            return resolve(item);
                        } else {
                            return reject('Not found');
                        }
                    });
            })
        },
        deleteTeam: function (team) {
            return new Promise(function (resolve, reject) {
                teamEng.findOneAndRemove({ teamName: team }, (error) => {
                    if (error) {
                        return reject(error.message);
                    }
                    return resolve();
                })
            })
        },
        //dungeon functions
        getDungeonList: function () {
            return new Promise(function (resolve, reject) {
                dungEng.find()
                    .exec((error, items) => {
                        if (error) {
                            reject(error.message);
                        }
                        resolve(items);
                    })
            })
        },
        getDungeonDetail: function (name) {
            return new Promise(function (resolve, reject) {
                dungEng.findOne({ dungeonName: name })
                    .exec((error, item) => {
                        if (error) {
                            return reject(error.message);
                        }
                        if (item) {
                            return resolve(item);
                        } else {
                            return reject('Not found');
                        }
                    });
            })
        },
        getDungeonDetailId: function (id) {
            return new Promise(function (resolve, reject) {
                dungEng.findById(id)
                    .exec((error, item) => {
                        if (error) {
                            return reject(error.message);
                        }
                        if (item) {
                            return resolve(item);
                        } else {
                            return reject('Not found');
                        }
                    });
            })
        },
        addDungeon: function (newDungeon) {
            return new Promise(function (resolve, reject) {
                if (!mongoose.Types.ObjectId.isValid(newDungeon._id)) {
                    newDungeon._id = mongoose.Types.ObjectId();
                }
                dungEng.create(newDungeon, (error, item) => {
                    if (error) {
                        return reject(error.message);
                    }
                    return resolve(item);
                });
            })
        },
        editDungeon: function (name, dungeonChange) {
            return new Promise(function (resolve, reject) {
                dungEng.findOneAndUpdate({ dungeonName: name }, dungeonChange, { new: true })
                    .exec((error, item) => {
                        if (error) {
                            return reject(error.message);
                        }
                        if (item) {
                            return resolve(item);
                        } else {
                            return reject('Not found');
                        }
                    });
            })
        },
        deleteDungeon: function (dungeon) {
            return new Promise(function (resolve, reject) {
                dungEng.findOneAndRemove({ dungeonName: dungeon }, (error) => {
                    if (error) {
                        return reject(error.message);
                    }
                    return resolve();
                })
            })
        },
        //comment functions
        getCommentList: function () {
            return new Promise(function (resolve, reject) {
                comments.find()
                    .exec((error, items) => {
                        if (error) {
                            reject(error.message);
                        }
                        resolve(items);
                    })
            })
        },
        getCommentDetail: function (getID) {
            return new Promise(function (resolve, reject) {
                comments.findById(getID)
                    .exec((error, item) => {
                        if (error) {
                            return reject(error.message);
                        }
                        if (item) {
                            return resolve(item);
                        } else {
                            return reject('Not found');
                        }
                    });
            })
        },
        addComment: function (newComment) {
            return new Promise(function (resolve, reject) {
                // if (!mongoose.Types.ObjectId.isValid(newComment._id)) {
                //     newComment._id = mongoose.Types.ObjectId();
                // }
                comments.create(newComment, (error, item) => {
                    if (error) {
                        return reject(error.message);
                    }
                    return resolve(item);
                });
            })
        },
        editComment: function (comm, commentChange) {
            return new Promise(function (resolve, reject) {
                comments.findOneAndUpdate({ _id: comm }, commentChange, { new: true })
                    .exec((error, item) => {
                        if (error) {
                            return reject(error.message);
                        }
                        if (item) {
                            return resolve(item);
                        } else {
                            return reject('Not found');
                        }
                    });
            })
        },
        deleteComment: function (comment) {
            return new Promise(function (resolve, reject) {
                comments.findOneAndRemove({ _id: comment }, (error) => {
                    if (error) {
                        return reject(error.message);
                    }
                    return resolve();
                })
            })
        },
        //banners functions
        getBannerList: function () {
            return new Promise(function (resolve, reject) {
                banners.find()
                    .exec((error, items) => {
                        if (error) {
                            reject(error.message);
                        }
                        resolve(items);
                    })
            })
        },
        getBannerDetail: function (name) {
            return new Promise(function (resolve, reject) {
                banners.findOne({ bannerName: name })
                    .exec((error, item) => {
                        if (error) {
                            return reject(error.message);
                        }
                        if (item) {
                            return resolve(item);
                        } else {
                            return reject('Not found');
                        }
                    });
            })
        },
        getBannerDetailId: function (id) {
            return new Promise(function (resolve, reject) {
                banners.findById(id)
                    .exec((error, item) => {
                        if (error) {
                            return reject(error.message);
                        }
                        if (item) {
                            return resolve(item);
                        } else {
                            return reject('Not found');
                        }
                    });
            })
        },
        addBanner: function (newBanner) {
            return new Promise(function (resolve, reject) {
                if (!mongoose.Types.ObjectId.isValid(newBanner._id)) {
                    newBanner._id = mongoose.Types.ObjectId();
                }
                banners.create(newBanner, (error, item) => {
                    if (error) {
                        return reject(error.message);
                    }
                    return resolve(item);
                });
            })
        },
        editBanner: function (name, bannerChange) {
            return new Promise(function (resolve, reject) {
                banners.findOneAndUpdate({ bannerName: name }, bannerChange, { new: true })
                    .exec((error, item) => {
                        if (error) {
                            return reject(error.message);
                        }
                        if (item) {
                            return resolve(item);
                        } else {
                            return reject('Not found');
                        }
                    });
            })
        },
        deleteBanner: function (bannerN) {
            return new Promise(function (resolve, reject) {
                banners.findOneAndRemove({ bannerName: bannerN }, (error) => {
                    if (error) {
                        return reject(error.message);
                    }
                    return resolve();
                })
            })
        },
        //boards functions
        getBoardList: function () {
            return new Promise(function (resolve, reject) {
                boards.find()
                    .exec((error, items) => {
                        if (error) {
                            reject(error.message);
                        }
                        resolve(items);
                    })
            })
        },
        getBoardDetail: function (name) {
            return new Promise(function (resolve, reject) {
                boards.findOne({ infoBoardName: name })
                    .exec((error, item) => {
                        if (error) {
                            return reject(error.message);
                        }
                        if (item) {
                            return resolve(item);
                        } else {
                            return reject('Not found');
                        }
                    });
            })
        },
        getBoardDetailId: function (id) {
            return new Promise(function (resolve, reject) {
                boards.findById(id)
                    .exec((error, item) => {
                        if (error) {
                            return reject(error.message);
                        }
                        if (item) {
                            return resolve(item);
                        } else {
                            return reject('Not found');
                        }
                    });
            })
        },
        addBoard: function (newBoard) {
            return new Promise(function (resolve, reject) {
                if (!mongoose.Types.ObjectId.isValid(newBoard._id)) {
                    newBoard._id = mongoose.Types.ObjectId();
                }
                boards.create(newBoard, (error, item) => {
                    if (error) {
                        return reject(error.message);
                    }
                    return resolve(item);
                });
            })
        },
        editBoard: function (name, BoardChange) {
            return new Promise(function (resolve, reject) {
                boards.findOneAndUpdate({ infoBoardName: name }, BoardChange, { new: true })
                    .exec((error, item) => {
                        if (error) {
                            return reject(error.message);
                        }
                        if (item) {
                            return resolve(item);
                        } else {
                            return reject('Not found');
                        }
                    });
            })
        },
        deleteBoard: function (BoardN) {
            return new Promise(function (resolve, reject) {
                boards.findOneAndRemove({ infoBoardName: BoardN }, (error) => {
                    if (error) {
                        return reject(error.message);
                    }
                    return resolve();
                })
            })
        }
    }
}
