// routes/membershipRoutes.js
import express from 'express';
const router = express.Router();
import {createMembership,getMembership,updateMembership, deleteMembership} from '../controllers/membership.controller.js';

router.post('/membership', createMembership);
router.get('/membership', getMembership);
router.put('/membership/:id', updateMembership);
router.delete('/membership/:id', deleteMembership);

export default router;
