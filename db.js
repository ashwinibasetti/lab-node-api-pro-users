const mongoose = require('mongoose')
const Schema = mongoose.Schema
const SchemaName = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    age:Number,
    prograd_id:Number,
    squad:Number
},
{collection:"users"}
)

const data = mongoose.model('model2',SchemaName)
module.exports=data



/* import mongoose
const mongoose = require('mongoose')
// get schema
const Schema = mongoose.Schema
// create new schema
const schemaData = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    age:Number,
    prograd_id:Number,
    squad:Number
},
// give the required collection
{
    collection:"details"
})
// create model using schema
const data = mongoose.model('model_one',schemaData)
// export model
module.exports=data*/
