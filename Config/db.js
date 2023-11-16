const mongoose=require('mongoose');
async function connectDataBase(){
  try {
     await mongoose.connect(`mongodb+srv://annugupta8512:annu%408512@clusteranu.2ad3iyv.mongodb.net/UserAuthentication`)
     console.log("connected to db")
  } catch (error) {
    console.log('error is connection',e);
  }
}

module.exports={connectDataBase}
// ggcvhkb