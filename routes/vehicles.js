const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/createVehicle');
const getVehiclesController = require('../controllers/getVehicles');
const getRoutes = require('../controllers/getRoutes');
const { fulfillmentOrdersMapCtrl } = require('../controllers/fulfillmentOrdersMapCtrl');
const { trackingEventsPackStatusCtrl } = require('../controllers/trackingEventsPackStatusCtrl');
const { fulfillmentKnownSourcesByExternalIdsCtrl } = require('../controllers/fulfillmentKnownSourcesByExternalIdsCtrl');
const { fulfillmentDriversCtrl } = require('../controllers/fulfillmentDriversCtrl');

router.get('/fulfillment/vehicles', getVehiclesController.getData);
router.post('/fulfillment/vehicles', vehicleController.createVehicle);
router.post('/fulfillment/route/search', getRoutes.getData);
router.post('/fulfillment/orders-map', fulfillmentOrdersMapCtrl);
router.get('/tracking-events/pack-status', trackingEventsPackStatusCtrl);
router.get('/fulfillment/known-sources/by-external-ids', fulfillmentKnownSourcesByExternalIdsCtrl);
router.get('/fulfillment/drivers', fulfillmentDriversCtrl);

module.exports = router;
