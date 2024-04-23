const notificationsArray = Array.from({ length: 10 }, (_, i) => ({
    page: i + 1,
    limit: 10,
    id: `id${i + 1}`,
    isActive: true,
    type: `type${i + 1}`,
    country: `country${i + 1}`,
    orderId: `order${i + 1}`,
    origin: `origin${i + 1}`,
    flag: `flag${i + 1}`,
    user: `user${i + 1}`,
    status: `status${i + 1}`,
    alertType: `alertType${i + 1}`,
    isRead: false,
    additionalInfo: {
        store: `store${i + 1}`,
        client: {
            name: `client${i + 1}`,
            id: `clientId${i + 1}`,
        },
        eta: {
            start: `2022-01-01T0${i}:00:00Z`,
            end: `2022-01-01T0${i + 1}:00:00Z`,
        },
        courier: `courier${i + 1}`,
        driverName: `driver${i + 1}`,
    },
    message: `message${i + 1}`,
    timestamp: Date.now(),
    reason: `reason${i + 1}`,
}));

const getData = (req, res) => {   
    let response = {
        "data": notificationsArray,
        "pagination": {
            "page": req.body.page || 1,
            "size": 10,
            "totalPage": 10,
            "totalCount": 100,
        }
    };
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
