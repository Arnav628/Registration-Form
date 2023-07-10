const mongoose=require('mongoose');
mongoose.connect('mongodb://192.168.244.39:27017/mydata',)
.then(()=>{
    console.log(`connect`);
})
.catch((error)=>{
    console.log(error);
})