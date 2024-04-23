// https://daas.ecomm-stg.cencosud.com/daas-bff/v1/fulfillment/orders/v83667631jFL23-J-41/notifications
const getData = (req, res) => {
    let response = {
        "data": [
            {
                "id": "eec66e22-b8a9-4a95-bd20-6d409e1959d8",
                "orderId": "v83667631jFL23-J-41",
                "type": "ALERT",
                "country": "CL",
                "origin": "DELIVERY",
                "flag": "JUMBO",
                "user": "jeantile",
                "message": "No Entregado, motivo cliente",
                "status": "TODO",
                "alertType": "DAAS_STATUS_ERROR",
                "reason": "CLIENT_PROBLEM",
                "level": "CRITICAL",
                "additionalInfo": {
                    "client": {
                        "name": "Romina carrasco",
                        "phone": "56911223344"
                    },
                    "store": "JUMBO COSTANERA",
                    "courier": "Home Delivery Chile",
                    "driverName": "SYSTEM",
                    "packId": 137543
                },
                "isRead": false,
                "isActive": true,
                "timestamp": 1703174893654
            },
            {
                "id": "f4130dd9-397b-4af5-a92c-8c8a40b939d3",
                "orderId": "v83667631jFL23-J-41",
                "type": "COMMENT",
                "origin": "DELIVERY",
                "country": "CL",
                "flag": "JUMBO",
                "message": "test",
                "user": "jeantile",
                "attachment": [],
                "timestamp": 1703174892348,
                "status": "NOT_DEFINED",
                "isActive": true
            }
        ],
        "pagination": {
            "page": 1,
            "size": 2,
            "totalPage": 1,
            "totalCount": 2
        }
    };
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
