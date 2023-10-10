const express = require('express');
const router = express.Router();
const propulsionTypesController = require('../controllers/getPropulsionTypes');
const vehicleTypesController = require('../controllers/getVehicleTypes');
const countriesController = require('../controllers/countriesController');
const userinfoController = require('../controllers/getUserinfoController');
const vehicleStatusController = require('../controllers/vehicleStatusController');
const dispatchManifest = require('../controllers/dispatchManifest');

router.get('/fulfillment/propulsion-types', propulsionTypesController.getPropulsionTypes);
router.get('/fulfillment/vehicle-types', vehicleTypesController.getVehicleTypes);
router.get('/fulfillment/countries', countriesController.getCountries);
router.get('/fulfillment/status', vehicleStatusController.getData);
router.post('/fulfillment/dispatch/manifest', dispatchManifest.getData);
router.get('/auth/userinfo', userinfoController.getUserinfo);

module.exports = router;
