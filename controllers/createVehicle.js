const createVehicle = (req, res) => {
    const {
        licencePlate,
        vehicleTypeId,
        propulsionTypeId,
        countryCode
    } = req.body;

    let response = {
        "licencePlate": licencePlate,
        "vehicleTypeId": 1,
        "propulsionTypeId": 1,
        "countryId": 5,
        "statusId": null,
        "statusDetail": null,
        "createdBy": "tms-member",
        "deletedAt": null,
        "id": 48,
        "createdAt": "2023-08-02T15:16:26.767Z",
        "updatedAt": "2023-08-02T15:16:26.767Z"
    };
    res.statusCode = 201;
    if (licencePlate === 'E1') {
        res.statusCode = 422;
        response = {
            request: {
                url: '',
                ip: '',
                method: ''
            },
            timestamp: 1234123,
            requestId: '2312321323-23213-213-12',
            response: "{\"statusCode\": 422, \"code\": \"FULLFILMENT_TMS_EXISTING_LICENCE_PLATE\"}"
        }
    }
    if (licencePlate === 'E2') {
        res.statusCode = 400;
        response = {
            request: {
                url: '',
                ip: '',
                method: ''
            },
            timestamp: 1234123,
            requestId: '2312321323-23213-213-12',
            response: "{\"statusCode\": 400, \"code\": \"FULLFILMENT_TMS_VEHICLE_CREATION_ERROR\"}"
        }
    }

    res.json(response);
};

module.exports = {
    createVehicle
};
