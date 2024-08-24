const getData = (req, res) => {
    let response = [{
        origin: 'DELIVERY',
        CONFIG: {
            alert_reason: ['TODO'],
            alert_status: ['TODO'],
        },
        update_at: 1604563200000,
        component: 'alert-bff',
        CONFIG_BACKUP: 'flags',
    }, {
        origin: 'DELIVERY',
        CONFIG: {
            alert_reason: ['IN_PROGRESS'],
            alert_status: ['IN_PROGRESS'],
        },
        update_at: 1604563200000,
        component: 'alert-bff',
        CONFIG_BACKUP: 'flags',
    }];
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
