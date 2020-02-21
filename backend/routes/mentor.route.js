import express from 'express';
//import controller file
import * as MentorController from '../controllers/mentor.controller';

// get an instance of express router
const router = express();

router.get('/', MentorController.getMentors);

router.post('/', MentorController.addMentor);

     
router.get('/:id', MentorController.getMentor);
router.put('/:id', MentorController.updateMentor);
router.delete('/:id', MentorController.deleteMentor);


export default router;