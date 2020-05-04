'use strict'
//name : TMP  _id: 110
const mongoose = require('mongoose');
const paginate = require("./pagination");
const User = require('./Schema');
let conMap= [];
conMap.push('110');
let gU = new Map();
let adata = [];
let sI = 0;

function objectSort(data,key,order){
    if (!key || !order) {
        return data;
    }
    let otp = order === 'asc' ? -1 : 1;
    return data.sort((a,b)=>{
        // console.log('sort func',a[key])
        if(a[key]&&b[key]){
            let varA = a[key].toUpperCase()
            let varB = b[key].toUpperCase()
            console.log(varA, ',xixi,sort check', varB)
            if(varA>varB){
                return otp
            }else if(varA<varB){
                return -otp
            }else{
                return 0
            }
        }
    })
}


//get first page
const getFP = (req, res) => {
    User.find({}, (err, data) => {
        if(err) {
            console.log(err);
            res.status(500).json({message: `get first page error ${err}`});
            return;
        }
        const rpp = req.query.rpp;
        const newD = data.slice(0,rpp);
        res.status(200).json(newD);
    })
}

const getUsers = (req, res) => {
    User.find({}, (err,data) => {
        if(err) {
            console.log(err);
            res.status(500).json({message: `get users error ${err}`})
        }
        let sort, sortId, searchKey;
        const search = req.query.search;
        console.log(search);
        // const sortMap = ["name","sex","phone","StartDate"];
        sort = req.query.sort;
        let toDdata = data;
         
        //console.log(search,sort)
        if(search && sort) {
            searchKey = req.query.searchkey.toUpperCase();
            console.log('searchkey',searchKey)
            toDdata = toDdata.filter((ele) => {
                for(let str in ele) {
                    if(str === "rank" || str === "name" || str === "sex" || str === "StartDate" || str === "Phone" || str === "Email") {
                        console.log(ele[str].toUpperCase().indexOf('W') !== -1)
                        console.log()
                        // console.log(ele[str].toUpperCase().indexOf(searchKey.toUpperCase()) !== -1);
                        return ele[str].toUpperCase().indexOf(searchKey) !== -1
                    }
                }})
                sort = req.query.sort;
                sortId = req.query.sortkey;
                // console.log('sort',sort)
                // console.log('sortId',sortId)
                // console.log(data.sort(compareValues(sortId,sort)))
                toDdata = (objectSort(toDdata,sortId,sort))
                const sortMap = ["rank","name", "sex", "StartDate", "Superior"];
                const tosort = sortMap[sortId];
                if(sort === 'asc') {
                    // console.log(tosort);
                     switch(tosort) {
                         case "rank":
                             toDdata.sort((a, b) => {
                                
                                return (a[sortId] - '0') - (b[sortId] - '0')
                             })
                             break;
                         case "name":
                             toDdata.sort((a,b) => {
                                 console.log(sortId);
                                 console.log(a[sortId], 'name', b[sortId]);
                                 return (a[sortId][0]-'A') - (b[sortId][0] - 'A')
                             });
                             break;
                         case "sex":
                             toDdata.sort((a, b) => {
                                 return a[sortId].length - b[sortId].length
                             });
                             break;
                         case "StartDate":
                             toDdata.sort((a,b) => {
                                 return (a[sortId]-'0') - (b[sortId]-'0');
                             })
                             break;
                         case "Superior":
                             toDdata.sort();
                             break;
                         default:
                             break;
                     }
                }else if(sort = 'desc'){
                     switch(sortId) {
                       case "rank":
                           toDdata.sort((a, b) => {
                              return (b[sortId] - '0') - (a[sortId] - '0')
                           })
                           break;
                        case "name":
                                toDdata.sort();
                                break;
                            case "sex":
                                toDdata.sort();
                                break;
                            case "StartDate":
                                toDdata.sort((a,b) => {
                                    return b[sortId].parseInt() - a[sortId].parseInt();
                                })
                                break;
                            
                            case "Superior":
                                toDdata.sort();
                                break;
                            default:
                                break;
                     }
                }
                

        }else if(search) {
            console.log('2')
            searchKey = req.query.searchkey.toUpperCase();
            // console.log('searchkey',searchKey,'W')
            toDdata = toDdata.filter((ele) => {
                for(let str in ele) {
                    if(str === "rank" || str === "name" || str === "sex" || str === "StartDate" || str === "Phone" || str === "Email") {
                        console.log(ele[str].toUpperCase().indexOf('W') !== -1)
                        console.log(searchKey)
                        // console.log(ele[str].toUpperCase().indexOf(searchKey.toUpperCase()) !== -1);
                        return ele[str].toUpperCase().indexOf(searchKey) !== -1
                    }
                }
                // return concat.toUpperCase().includes(searchKey.trim().toUpperCase());
            });
            console.log('toDdata',toDdata)
        }else if(sort !== null) {
            console.log(3)
            sort = req.query.sort;
            sortId = req.query.sortkey;
            console.log('sort',sort)
            console.log('sortId',sortId)
            // console.log(data.sort(compareValues(sortId,sort)))
            toDdata = (objectSort(toDdata,sortId,sort))
             const sortMap = ["rank","name", "sex", "StartDate", "Superior"];
             const tosort = sortMap[sortId];
             if(sort === 'asc') {
                 // console.log(tosort);
                  switch(tosort) {
                      case "rank":
                          toDdata.sort((a, b) => {
                             return (a[sortId] - '0') - (b[sortId] - '0')
                          })
                          break;
                      case "name":
                          toDdata.sort((a,b) => {
                              console.log(sortId);
                              console.log(a[sortId], 'name', b[sortId]);
                              return (a[sortId][0]-'A') - (b[sortId][0] - 'A')
                          });
                          break;
                      case "sex":
                          toDdata.sort((a, b) => {
                              return a[sortId].length - b[sortId].length
                          });
                          break;
                      case "StartDate":
                          toDdata.sort((a,b) => {
                              return (a[sortId]-'0') - (b[sortId]-'0');
                          })
                          break;
                      case "Superior":
                          toDdata.sort();
                          break;
                      default:
                          break;
                  }
             }else if(sort = 'desc'){
                  switch(sortId) {
                    case "rank":
                        toDdata.sort((a, b) => {
                           return (b[sortId] - '0') - (a[sortId] - '0')
                        })
                        break;
                     case "name":
                             toDdata.sort();
                             break;
                         case "sex":
                             toDdata.sort();
                             break;
                         case "StartDate":
                             toDdata.sort((a,b) => {
                                 return b[sortId].parseInt() - a[sortId].parseInt();
                             })
                             break;
                         
                         case "Superior":
                             toDdata.sort();
                             break;
                         default:
                             break;
                  }
             }
        }

        const page = req.query.page;
        // console.log(page);
        const rpp = req.query.rpp;
        // console.log(page*rpp)
        // console.log(page*rpp+rpp)
        const newData = toDdata.slice(page*rpp, page*rpp+rpp*1);
        console.log('newData',newData);
       
        res.status(200).json(newData);
       // paginate.paginate_sort_search(req, res, data);
    })
}

const getSortData = (req, res) => {
    User.find({}, (err,data) => {
        if(err) {
            console.log(err);
            res.status(500).json({message: `get users error ${err}`})
        }
        let sort, sortId, searchKey;
        const search = req.query.search;
        console.log(search);
        // const sortMap = ["name","sex","phone","StartDate"];
        sort = req.query.sort;
        let toDdata = data;
         
        //console.log(search,sort)
        if(search && sort) {
            searchKey = req.query.searchkey.toUpperCase();
            console.log('searchkey',searchKey);
            console.log('sort direction, ', sort);
            toDdata = toDdata.filter((ele) => {
                for(let str in ele) {
                    if(str === "rank" || str === "name" || str === "sex" || str === "StartDate" || str === "Phone" || str === "Email") {
                        console.log(ele[str].toUpperCase().indexOf('W') !== -1)
                        console.log()
                        // console.log(ele[str].toUpperCase().indexOf(searchKey.toUpperCase()) !== -1);
                        return ele[str].toUpperCase().indexOf(searchKey) !== -1
                    }
                }})
                sort = req.query.sort;
                sortId = req.query.sortkey;
                // console.log('sort',sort)
                // console.log('sortId',sortId)
                // console.log(data.sort(compareValues(sortId,sort)))
                toDdata = (objectSort(toDdata,sortId,sort))

        }else if(search) {
            console.log('2')
            searchKey = req.query.searchkey.toUpperCase();
            // console.log('searchkey',searchKey,'W')
            toDdata = toDdata.filter((ele) => {
                for(let str in ele) {
                    if(str === "rank" || str === "name" || str === "sex" || str === "StartDate" || str === "Phone" || str === "Email") {
                        console.log(ele[str].toUpperCase().indexOf('W') !== -1)
                        console.log(searchKey)
                        // console.log(ele[str].toUpperCase().indexOf(searchKey.toUpperCase()) !== -1);
                        return ele[str].toUpperCase().indexOf(searchKey) !== -1
                    }
                }
                // return concat.toUpperCase().includes(searchKey.trim().toUpperCase());
            });
            console.log('toDdata',toDdata)
        }else if(sort !== null) {
            console.log(3)
            sort = req.query.sort;
            sortId = req.query.sortkey;
            console.log('sort',sort)
            console.log('sortId',sortId)
            // console.log(data.sort(compareValues(sortId,sort)))
            toDdata = (objectSort(toDdata,sortId,sort))
             const sortMap = ["rank","name", "sex", "StartDate", "Superior"];
             const tosort = sortMap[sortId];
             if(sort === 'asc') {
                 // console.log(tosort);
                  switch(sortId) {
                      case "rank":
                          toDdata.sort((a, b) => {
                            if(a[sortId]-'0' === 4) {
                                return -1;
                            }else if(b[sortId] - '0' === 4) {
                                return 1;
                            }else if(a[sortId] - '0' === 2 && b[sortId] - '0' !== 4){
                               return -1;
                            }else if(b[sortId] - '0' === 2 && a[sortId] - '0' !== 4){
                                return 1;
                            }else {
                             return (a[sortId] - '0') - (b[sortId] - '0')
                            }
                          })
                          break;
                      case "name":
                          toDdata.sort((a,b) => {
                              console.log(sortId);
                              console.log(a[sortId], 'name', b[sortId]);
                              return (a[sortId][0]-'A') - (b[sortId][0] - 'A')
                          });
                          break;
                      case "sex":
                          toDdata.sort((a, b) => {
                              return a[sortId].length - b[sortId].length
                          });
                          break;
                      case "StartDate":
                          toDdata.sort((a,b) => {
                              return (a[sortId]-'0') - (b[sortId]-'0');
                          })
                          break;
                      case "Superior":
                          toDdata.sort();
                          break;
                      default:
                          break;
                  }
             }else {
                  switch(sortId) {
                    case "rank":
                            toDdata.sort((a, b) => {
                               return (b[sortId] - '0') - (a[sortId] - '0')
                            })
                            break;
                     case "name":
                             toDdata.sort();
                             break;
                         case "sex":
                             toDdata.sort();
                             break;
                         case "StartDate":
                             toDdata.sort((a,b) => {
                                 return (b[sortId]-'0') - (a[sortId]-'0');
                             })
                             break;
                         
                         case "Superior":
                             toDdata.sort();
                             break;
                         default:
                             break;
                  }
             }
        }

        const page = req.query.page;
        // console.log(page);
        const rpp = req.query.rpp;
        // console.log(page*rpp)
        // console.log(page*rpp+rpp)
        const newData = toDdata.slice(0, page*rpp+rpp*1);
        console.log('newData',newData);
       
        res.status(200).json(newData);
   })
}

const getAUser = (res) => {
   
    User.find({}, (err, data) => {
        if(err) {
            console.log(err);
            res.status(500).json({message: `db connect error ${err}`});
            return;
        }
        console.log('get all user success send back to client');
        console.log(data);
        res.status(200).json(data);
       // sI += 5;
    });
}

//function hasCycle(s1, s2) {
//    return false;
//}

const insertUser = (res, data) => {
   if(data === null || data === undefined) {
       res.status(400).json({
           message: "invalid post"
       });
       return;
   }
   const newId = new mongoose.Types.ObjectId;
   const newU = new User({
    _id: newId,
    avatarpath: data.avatarpath,
    name: data.name,
    sex: data.sex,
    rank: data.rank,
    StartDate: data.StartDate,
    Phone: data.Phone,
    Email: data.Email,
    Superior: data.Superior,
    child: data.child
   });
   newU.save((err) => {
       if(err) {
           res.status(500).json({
               connection: `${err}`
           })
           return;
       }
       
       if(data.Superior.name === null && data.Superior._id === null) {
          res.status(200).json({
              message: "Insert success"
          })
       }else {
          User.findByIdAndUpdate(data.Superior._id, {$push: {child: newId}}, err => {
              if(err) {
                  res.status(500).json({
                      message: `${err}`
                  });
                  return;
              }
              res.status(200).json({
                  message: "Insert success"
              })
          });

       }
   }
   )
}


const getUserById = (res, id) => {
    User.findById(id, (err, data) => {
        if(err) {
            res.status(400).json({message: "get user error"})
            return;
        }else if(data === null) {
            res.status(404).json({
                message: 'do not have the user in database'
            });
            return;
        }
        res.status(200).json(data);
    })
}

const getDirectChild = (res, id, req) => {
    User.findById(id, (err, data) => {
        if(err) {
            res.status(500).json({message: "get direct child error"});
            return;
        }
        //let sort = req.query.sort, sortId = req.query.sortkey;
        

        const cid = data.child;
        User.find({_id: {$in: cid}}, (err, rdata) => {
            if(err) {
                res.status(500).json({message: "get lowest level child error"});
                return;
            }
            if(req.query.sort !== null) {
                let sort = req.query.sort;
                let sortId = req.query.sortkey;
                //rdata = objectSort(rdata,'rank',sort);
                console.log('sort, ', sort, 'sortkey, ', sortId);
                if(sort === 'asc') {
                   console.log('1');
                   rdata.sort((a,b) => {
                       console.log(a[sortId], ',', b[sortId])
                       return(a[sortId] - '0')-(b[sortId] - '0')
                   })
                }else {
                  console.log(2);
                  rdata.sort((a,b) => {
                      console.log(a[sortId], ',', b[sortId])
                      return(b[sortId] - '0')-(a[sortId] - '0')
                  })
                }
             }
            res.status(200).json(rdata);
        });
    })
}

const getSuperior = (res, id) => {
    User.findById(id, (err, data) => {
        if(err) {
            res.status(500).json({message: "get superior error"});
            return;
        }
        console.log(data);
        const sup = data.Superior;
        console.log(sup);
        const sid = sup._id;
        console.log(sid+' '+ sup.name + ' ' + sup.id);
        User.findById(sid, (err, fdata) => {
            if(err) {
                res.status(500).json({message: "get superior error"});
            }
            res.status(200).json([fdata]);
        })
    })
}
//const updateUserById = (res, id, data) => {
    /*User.findByIdAndUpdate(id, data, {new: true}, (err,data) => {
        if(err) {
            res.status(500).json({message: "find uesr error"});
        }
        return res.send(data);
    });*/
/*    User.findById(id, (err, oriData) => {
         if(err) {
             res.status(500).json({message: "update failed"});
         }
         const oriN = oriData.Superior.name === null ? null: oriData.Superior.name;
         const oriId = oriData.Superior._id === null ? null: oriData.Superior._id;
         //case1: oridata(superial) is same,donot need change
         if(oriN === data.Superior.name && oriId === data.Superior._id) {
             User.findByIdAndUpdate(id, data, (err) => {
                 if(err) {
                     res.status(500).json({message: "update error"});
                     return;
                 }
                 res.status(200).json({message: `update user ${id} success`});
             })
        //case2: create a new root node
         }else if(oriN === null && oriId === null){  //
             User.findByIdAndUpdate(data.Superior._id, {$push: {child: id}}, err => {
                 if(err) {
                    res.status(500).json({message: "update error1"});
                    return;
                 }
                 User.findByIdAndUpdate(id, data, err => {
                     if(err) {
                        res.status(500).json({message: "update error2"});
                        return;
                     }
                     res.status(200).json({
                         message: `update user ${id} success`
                     });
                 })
             });
         //case3: change node to new superial
         }else {
             if(oriData.Superior.name === null && oriData.Superior._id === null){
             User.findByIdAndUpdate(data.Superior._id, {$push: {child: id}}, err => {
                 if(err) {
                     res.status(500).json({message: "push to ancestor error"});
                     return;
                 }
                 User.findByIdAndUpdate(id, data, err => {
                     if(err) {
                         res.status(500).json({message: "update data error"});
                     }
                     res.status(200).json({
                       message: `Update user ${id} success`
                     });
                 })
             })
             }else {
                User.findByIdAndUpdate(oriData.Superior._id, {$pull: {child: oriId}}, err => {
                    if(err) {
                        res.status(500).json({message: "delete data from ori ancestor error"});
                        return;
                    }
                    User.findByIdAndUpdate(data.Superior._id, {$push: {child: id}}, err => {
                        if(err) {
                            res.status(500).json({message: "add data to root error"});
                            return;
                        }
                        User.findByIdAndUpdate(id, data, err => {
                            if(err) {
                                res.status(500).json({message: "update data error"});
                                return;
                            }
                            res.status(200).json({message: `Update user ${id} success`});
                        })
                    })
                })
             }
         }
        
    })
}*/


const updateUserById = (res, id, data) => {
    User.findById(id, (err,oriData) => {
        if(err) {
            res.status(500).json({message: `can't find user ${id}`});
            return;
        }
        const oriFN = oriData.Superior.name ? oriData.Superior.name.toString() : null;
        const oriFI = oriData.Superior._id ? oriData.Superior._id.toString(): null;
        console.log( "armymethod data"  );
        console.log( data  );
        console.log('...data, ', [...Object.keys(data)]);
        if(data.Superior && (oriFN === data.Superior.name && oriFI === data.Superior._id)) {
            console.log('1')
            // oriData._id = data._id;
            // console.log(data)
            let updateData = {}
            for(let key in data){
                if(key !== '_id'){
                    updateData[key] = data[key]

                }
            }
            console.log('oriName,', oriData.name);
            console.log('oriName,', oriData.name);
            //updateData._id = id;
            updateData.avatarpath = data.avatarpath;
            updateData.name = data.name;
            updateData.sex = data.sex;
            updateData.rank = data.rank;
            updateData.StartDate = data.StartDate;
            updateData.phone = data.phone;
            updateData.rank = data.rank;
            console.log(updateData)
            User.updateOne({_id:id},updateData,err => {
                if (err) {
                    res.status(500).json({message: "update error"});
                    console.log(err)
                    return;
                }
              // if(oriData.name !== data.name) {
                  
                      
                        const cid = data.child;
                        console.log('child, ', cid);
                        User.updateMany({_id: {$in: cid}}, {$set: {Superior: {name: data.name, _id: oriData._id}}}, (err) => {
                            console.log('xixi');
                            if(err) {
                                console.log(err);
                                res.status(500).json({message: "get lowest level child error"});
                                return;
                            }
                            res.status(200).json({message: "update success"});
                            return;
                        });
                       
              // }
              // res.status(200).json({message: "update success"});
                //
                
            })
            
             /*User.findByIdAndUpdate(id, {$set: {oriData: data}}, (err) => {
                 if(err) {
                     res.status(500).json({message: "node position not change but update has error"});
                 }
                 res.status(200).json({message: `Update user ${id} success`});
            });    */   
        }else if(data.Superior) {
            console.log('2')
            if(oriData.Superior.name === null && oriData.Superior._id === null) {
                User.findByIdAndUpdate(data.Superior._id, {$push: {child: id}}, err => {
                    if(err) {
                        res.status(500).json({message: "Update armyMathod 456 error"});
                        return;
                    }
                    User.findByIdAndUpdate(id, data, err => {
                        if(err) {
                            res.status(500).json({message: "Update armyMethod 461 error"});
                            return;
                        }
                        
                  
                
                        const cid = data.child;
                        console.log('child, ', cid);
                        User.updateMany({_id: {$in: cid}}, {$set: {Superior: {name: data.name, _id: oriData._id}}}, (err) => {
                            console.log('xixi');
                            if(err) {
                                console.log(err);
                                res.status(500).json({message: "get lowest level child error"});
                                return;
                            }
                            res.status(200).json({message: "update success"});
                            return;
                        });
                    
                        
                    })
                })
            }else {
                console.log(3)
                User.findByIdAndUpdate(oriData.Superior._id, {$pull: {child: id}}, err => {
                    if(err) {
                        res.status(500).json({message: "Update armymethod 470 error"});
                        return;
                    }
                    User.findByIdAndUpdate(data.Superior._id, {$push: {child: id}}, err => {
                        if(err) {
                            res.status(500).json({message: "Update armymethod 475 error"});
                            return;
                        }
                        User.findByIdAndUpdate(id, data, err => {
                            if(err) {
                                res.status(500).json({message: "Update armymethod 479 error"});
                                return;
                            }
                            
                  
                
                            const cid = data.child;
                            console.log('child, ', cid);
                            User.updateMany({_id: {$in: cid}}, {$set: {Superior: {name: data.name, _id: oriData._id}}}, (err) => {
                                console.log('xixi');
                                if(err) {
                                    console.log(err);
                                    res.status(500).json({message: "get lowest level child error"});
                                    return;
                                }
                                res.status(200).json({message: "update success"});
                                return;
                            });
                        

                        })
                    } );
                } )
            }  
        }
    })
}



const deleteUserById = (res, data) => {
   // const data = User.findById(id);
    console.log('data.superior in delete user, ', data.Superior, 'data id,', data._id);
    //if()
    if(data.Superior.name === null && data.Superior._id === null) {
       if(data.child.length === 0) {
        User.findByIdAndDelete(data._id, (err) => {
        if(err) {
            res.status(500).json({message: "delete user error"});
            return;
        }
        res.status(200).json({message: "delete success"});
      })
     }else {
         console.log('xixixixixixixixixixixixixixi');
         //const cId = data.child.map((ele, index) => {
         //    return ele._id;
        // })
         const cId = data.child;   
         console.log('id in delete, ', cId)                            // {$set: {Superior: {name:data.Superior.name, _id: data.Superior._id}}
         User.updateMany({_id: {$in: cId}}, {$set: {Superior: {name: null, _id: null}}}, err => {
             if(err){
                     res.status(500).json({message: "删除根部联系失败"});
                     return;
             }
             console.log('hahahahaha');
             User.findByIdAndUpdate(data.Superior._id, {$pull: {child: data._id}}, err => {
                 if(err) {
                     res.status(500).json({message: "删除根部联系失败"});
                 }
                 User.findByIdAndDelete(data._id, err => {
                    if(err) {
                       res.status(500).json({message: "delete error"});
                    }
                    res.status(200).json({message: "delete success"});
                })
             })
         })
     }
    }else if(data.Superior.name && data.Superior._id && data.child.length === 0){
        //leave node
        User.findByIdAndUpdate(data.Superior._id, {$pull: {child: data._id}}, err => {
            if(err) {
                res.status(500).json({message: "删除根部联系错误"});
            }
            User.findByIdAndDelete(data._id, err => {
                if(err) {
                    res.status.json({message: "delete failed"});
                }
                res.status(200).json({message: "delete success"});
            } )
        })
    }else if(data.Superior.name && data.Superior._id && data.child.length > 0){
        //delete middle node
        console.log('delete node which child.length > 0 executed......');
        const cId = data.child.map((ele, index) => {
            return ele._id;
        });
        User.updateMany({_id: {$in: data.child}}, {$set: {Superior: {name:data.Superior.name, _id: data.Superior._id}}}, err => {
            if(err) {
                res.status(500).json({message: "connect grand error"});
                return;
            }
            User.updateOne({_id: data.Superior._id}, {$push: {child: {$each: data.child}}}, err => {
                if(err) {
                    res.status(500).json({message: "pull from grand error"});
                    return;
                }
                User.updateOne({_id: data.Superior._id}, {$pull: {child: data._id}}, (err) => {
                    if(err) {
                        res.status(500).json({message: "pull from grand error"});
                        return;
                    }
                    User.findByIdAndDelete(data._id, err => {
                        if(err) {
                            res.status(500).json({message:"delete error"});
                        }
                        res.status(200).json({message: "delete success"});
                    })
                })
            })
        })
    }
}

const getValidSuperiorById = (res, id) => {
    User.find({}, (err, data) => {
        if(err) {
            res.status(500).json({message: "get valid superior error"});
            return;
        }
       // console.log(data);
       // const map = new Map();
       // data.forEach(ele => {
       //     map.set(ele._id.toString(), ele.child);
      //  })
        const vData = getValidSuperiorList(id , data);
        console.log(vData);
        res.status(200).json(vData);
    });
}

const getValidSuperiorList = (id , data) => {
   const map = new Map();
   //console.log(data);
   //const map = new Map();
   //map.set(id, )
   data.forEach(ele => {
       map.set(ele._id.toString(), ele.child.map((e,index)=>e._id.toString()))
   });
   const set = new Set();
   console.log('map, ', map);
   dfs(id, map, set);
   console.log(set);
   console.log(data);
   console.log(set.has("5d8c28e45a5474d33e19e9f9"));
  
   return data.filter((ele,index)=>!set.has(ele._id.toString()));
}

const dfs = (id, map, set) => {
    //const curUser = User.findById(id);
    //console.log(curUser);
    //console.log(curUser.child);
    if(!id || set.has(id)) {
        return;
    }
    console.log('id in dfs, ', id);
    set.add(id.toString());
    console.log('map in dfs, ',map);
    const curA = map.get(id.toString());
    console.log('curA in dfs, ', curA);
   // console.log()
    console.log('set in dfs, ',set);
    if(curA === []){
        console.log('should return');
        return;
    }
    console.log('curA in dfs, ', curA);
    for(let tid in curA) {
        console.log(tid);
        dfs(curA[tid].toString(), map, set);
    }
    // for(let i = 0; i < curA.length; i++) {
    //     dfs(curA[i], map, set);
    // }
}

const cnth = (id, map) => {

}

const user = {
    //getAllUser,
    getAUser,
    insertUser,
    getUserById,
    getDirectChild,
    updateUserById,
    deleteUserById,
    getValidSuperiorList,
    getValidSuperiorById,
    getSuperior,
    getUsers,
    getFP,
    getSortData
}

module.exports = user;

