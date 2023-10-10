const getUserinfo = (req, res) => {
    const { } = req.body;

    const pers = [
        'microfront_deliverybo_visualizador_jumbo_cl',
        'microfront_deliverybo_asignador_jumbo_cl',
        'microfront_deliverybo_supervisor_jumbo_cl',
        "microfront_deliverybo_supervisor_jumbo_cl",
        "microfront_deliverybo_supervisor_sisa_cl",
        "microfront_deliverybo_supervisor_spid_cl",
        "microfront_deliverybo_supervisor_easy_cl",
        "microfront_deliverybo_supervisor_paris_cl",
        "microfront_deliverybo_supervisor_wong_pe",
        "microfront_deliverybo_supervisor_metro_pe",
        "microfront_deliverybo_supervisor_jumbo_co",
        "microfront_deliverybo_supervisor_metro_co",
        "microfront_deliverybo_supervisor_spid_co",
        "microfront_deliverybo_supervisor_jumbo_ar",
        "microfront_deliverybo_supervisor_spid_ar",
        "microfront_deliverybo_supervisor_gbarbosa_br",
        "microfront_deliverybo_supervisor_jumbo_cl",
        "microfront_deliverybo_supervisor_sisa_cl",
        "microfront_deliverybo_supervisor_spid_cl",
        "microfront_deliverybo_supervisor_easy_cl",
        "microfront_deliverybo_supervisor_paris_cl",
        "microfront_deliverybo_supervisor_wong_pe",
        "microfront_deliverybo_supervisor_metro_pe",
        "microfront_deliverybo_supervisor_jumbo_co",
        "microfront_deliverybo_supervisor_metro_co",
        "microfront_deliverybo_supervisor_spid_co",
        "microfront_deliverybo_supervisor_jumbo_ar",
        "microfront_deliverybo_supervisor_spid_ar",
        "microfront_deliverybo_supervisor_gbarbosa_br"
    ]
    const response = {
        "user": "claeroja",
        "email": "claudio.rojasrodriguez@cencosud.cl",
        "fullName": "Claudio Rojas",
        "active": true,
        "externalUser": false,
        "lastLogin": 1696360602265,
        "knownSources": [
            {
                "externalId": "J762",
                "name": "JUMBO LOS TRAPENSES",
                "isCd": false,
                "group": "JUMBO"
            },
            {
                "externalId": "N766",
                "name": "SANTA ISABEL EL ALBA",
                "isCd": false,
                "group": "SISA"
            },
            {
                "externalId": "J502",
                "name": "JUMBO KENNEDY",
                "isCd": false,
                "group": "JUMBO"
            },
            {
                "externalId": "J780",
                "name": "JUMBO ACONCAGUA",
                "isCd": false,
                "group": "JUMBO"
            }
        ],
        "rol": {
            "name": "DAAS_ROOT",
            "description": "Super Administrador",
            "privileges": [
                "root:root",
                "packing:re_managed"
            ]
        },
        microfront_deliverybo_permissions: pers,
        microfront_shipping_permissions: pers,
    };
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getUserinfo
};
