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
// http://localhost:3009/known-source/subAdminZone2ByCountryCode/ar
router.get('/known-source/subAdminZone2ByCountryCode/ar', require('../controllers/subAdminZone2ByCountryCode').getData);
// http://localhost:3009/dispatch/list?pageSize=10&page=1
router.post('/dispatch/list', require('../controllers/dispatchList').getData);
// https://daas.ecomm-stg.cencosud.com/daas-bff/v1/fulfillment/orders
router.post('/fulfillment/orders', require('../controllers/fulfillmentOrders').getData);

module.exports = router;
