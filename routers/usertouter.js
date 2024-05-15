const express = require('express');
const { registercontroller, logincontroller } = require('../controllers/usercontroller');
const { Bet_MVD_Calculation, Bet_MVD_Calculations, Bet_MVD_ShowDilution, Bet_MVD_Delete } = require('../controllers/Betcontroller');
const router = express.Router()


router.post('/register',registercontroller)
router.post('/login',logincontroller)
router.post('/BET',Bet_MVD_Calculation)
router.get('/bet_dilution',Bet_MVD_Calculations)
router.get('/bet_ShowDilution/:id',Bet_MVD_ShowDilution)
router.delete('/delete/:id',Bet_MVD_Delete )
module.exports =router;