const getData = (req, res) => {
    let response = [{
        origin: 'DELIVERY',
        CONFIG: {
            alert_reason: ['example1'],
            alert_status: ['example1'],
        },
        update_at: 1604563200000,
        component: 'alert-bff',
        CONFIG_BACKUP: 'flags',
    }, {
        origin: 'DELIVERY',
        CONFIG: {
            alert_reason: ['example1'],
            alert_status: ['example1'],
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
