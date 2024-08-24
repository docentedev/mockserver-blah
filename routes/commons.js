const express = require('express');

const router = express.Router();

router.post('/alert-bff/alert/allNotifications', require('../controllers/allNotifications').getData);
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
router.post('/fulfillment/drivers/search', require('../controllers/fulfillmentDriversSearchCtrl').getData);

// http://localhost:3009/fulfillment/orders/wp
router.post('/fulfillment/orders/wp', require('../controllers/fulfillmentOrdersWp').getData);

// http://localhost:3009/fulfillment/routes/5fc2c511-15b9-4521-a2e4-5806372c7686/priority
router.put('/fulfillment/routes/:routeId/priority', require('../controllers/fulfillmentRoutesPriority').getData);

// /health
router.get('/health', require('../controllers/health').getData);
// /user/filter
router.get('/user/filter', require('../controllers/userFilter').getData);
// /known-source
router.get('/known-source', require('../controllers/knownSource').getData);

// http://localhost:3009/fulfillment/orders/pack/146605
router.get('/fulfillment/orders/pack/:id', require('../controllers/fulfillmentOrdersPack').getData);
// http://localhost:3009/fulfillment/orders/packs/146605
router.get('/fulfillment/orders/packs/:id', require('../controllers/fulfillmentOrdersPacks').getData);

// http://localhost:3009/fulfillment/orders/v24460045JRSA-01/notifications?type=COMMENT
router.get('/fulfillment/orders/:id/notifications', require('../controllers/fulfillmentOrdersNotifications').getData);

// http://localhost:3009/fulfillment/drivers/9356d93a-8a37-489e-a307-de9be51bb1b9
router.get('/fulfillment/drivers/:id', require('../controllers/fulfillmentDriversId').getData);

module.exports = router;