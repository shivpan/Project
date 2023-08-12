import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema({
  text:{type:String,required:true},
  done:{type:mongoose.SchemaTypes.Boolean,required:true},
  user:{type:mongoose.SchemaTypes.ObjectId},
});

const Skill = mongoose.model('Todo', SkillSchema);

export default Todo;