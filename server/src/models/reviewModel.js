const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const reviewsSchema = new mongoose.Schema({
    bookId:{type:ObjectId,ref:"BookDetails"},  //, required:true
    reviewedBy:{type:String,required:true,default:"Guest",trim:true},
    reviewedAt:{type:Date,default:Date.now()},//, required:true
    rating:{type:Number,required:true},
    review:{type:String,trim:true},
    isDeleted:{type:Boolean,default:false}
})
module.exports = mongoose.model("AllReview",reviewsSchema)

