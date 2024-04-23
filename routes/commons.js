const express = require('express');

const router = express.Router();

router.get('/alert-bff/alert/allNotifications', require('../controllers/allNotifications').getData);
router.get('/alert-bff/alert/configurations', require('../controllers/alert-bff_configurations').getData);
router.post('/alert-bff/courier/knownSourceId', require('../controllers/alert-bff_courier_knownSourceId').getData);
router.get('/auth/userinfo', require('../controllers/getUserinfoController').getData);
router.get('/dispatch/list', require('../controllers/dispatchList').getData);
router.post('/dispatch/manifest', require('../controllers/dispatchManifest').getData);
router.get('/fulfillment/countries', require('../controllers/countriesController').getData);
router.get('/fulfillment/drivers', require('../controllers/fulfillmentDriversCtrl').getData);
router.get('/fulfillment/known-sources/by-external-ids', require('../controllers/fulfillmentKnownSourcesByExternalIdsCtrl').getData);
router.get('/fulfillment/notification/:id', require('../controllers/notifications').getData);
router.post('/fulfillment/orders', require('../controllers/fulfillmentOrders').getData);
router.post('/fulfillment/orders-map', require('../controllers/fulfillmentOrdersMapCtrl').getData);
router.get('/fulfillment/providers', require('../controllers/providers').getData);
router.get('/fulfillment/propulsion-types', require('../controllers/getPropulsionTypes').getPropulsionTypes);
router.post('/fulfillment/known-sources/post-by-external-ids', require('../controllers/known-sources_post-by-external-ids').getData);
router.get('/fulfillment/status', require('../controllers/vehicleStatusController').getData);
router.get('/fulfillment/vehicles',  require('../controllers/getVehicles').getData);
router.post('/fulfillment/vehicles', require('../controllers/createVehicle').getData);
router.post('/fulfillment/route/search', require('../controllers/getRoutes').getData);
router.get('/known-source/subAdminZone2ByCountryCode/ar', require('../controllers/subAdminZone2ByCountryCode').getData);
router.get('/known-source/subAdminZone2ByCountryCode/cl', require('../controllers/subAdminZone2ByCountryCode').getData);
router.post('/location-services/getDevicePositionHistory', require('../controllers/getDevicePositionHistory').getData);
router.post('/route/search', require('../controllers/routeSearch').getData);
router.get('/tracking-events/pack-status', require('../controllers/trackingEventsPackStatusCtrl').getData);
router.post('/fulfillment/vehicle-types', require('../controllers/getVehicleTypes').getData);

module.exports = router;