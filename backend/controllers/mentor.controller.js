import mongoose from 'mongoose';
import Mentor from '../models/mentor.model';


export const getMentors = (req,res) => {
  Mentor.find().exec((err,mentors) => {
    if(err){
      return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':'Mentors fetched successfully',mentors});
  });
}


export const addMentor = (req,res) => {
  console.log("addMentor", req.body)
  const newMentor = new Mentor(req.body);
  newMentor.save((err,mentor) => {
    if(err){
      return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':'Mentor added successfully',mentor});
  })
}


export const updateMentor = (req,res) => {
  Mentor.findOneAndUpdate({ _id:req.params.id}, req.body, { new:true }, (err,mentor) => {
    if(err){
      return res.json({'success':false,'message':'Some Error','error':err});
    }
    return res.json({'success':true,'message':'Updated successfully',mentor});
  })
}


export const getMentor = (req,res) => {
  Mentor.find({_id:req.params.id}).exec((err,mentor) => {
    if(err){
      return res.json({'success':false,'message':'Some Error'});
    }
    if(mentor.length){
      return res.json({'success':true,'message':'Mentor fetched by id successfully',mentor});
    }
    return res.json({'success':false,'message':'Mentor with the given id not found'});
  })
}


export const deleteMentor = (req,res) => {
  Mentor.findByIdAndRemove(req.params.id, (err,mentor) => {
    if(err){
      return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':mentor.fullName+' deleted successfully'});
  })
}

