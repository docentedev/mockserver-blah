const data = {
    took: 10,
    timed_out: false,
    _shards: {
        total: 5,
        successful: 5,
        skipped: 0,
        failed: 0
    },
    hits: {
        total: {
            value: 3,
            relation: "eq"
        },
        max_score: 0.8,
        hits: [
            {
                _index: "routes",
                _type: "_doc",
                _id: "route_1",
                _score: 0.8,
                _source: {
                    eta_date: 1679808000000,
                    status_history: [
                        {
                            created_at: new Date(),
                            status: "Pending"
                        }
                    ],
                    created_at: 1679804000000,
                    created_by: "admin",
                    vehicle: {
                        licence_plate: "CL_ABC123",
                        vehicle_type: "Truck",
                        id: "vehicle_1"
                    },
                    driver: {
                        name: "John Doe",
                        id: "driver_1",
                        associated_stores: [{
                            code: "store_123",
                            lat: 40.7128,
                            long: -74.0060,
                            name: "Store 123",
                            retailChainCode: "chain_CL",
                            retailChainName: "Retail Chain 1"
                        }]
                    },
                    updated_at: 1679810000000,
                    courier: {
                        name: "Courier Name",
                        id: "courier_1"
                    },
                    updated_by: "admin",
                    orders: [
                        {
                            seller: {
                                address: "Seller Address",
                                lng: "12.3456",
                                name: "Seller Name",
                                id: "seller_1",
                                lat: "12.3456"
                            },
                            last_status_code: "Delivered",
                            eta_date: new Date(),
                            order_nr: "123456",
                            status_history: [
                                {
                                    last_status_code: "Pending",
                                    created_at: new Date(),
                                    status: "In Progress"
                                }
                            ],
                            packs: [
                                {
                                    tracking_nr: "TR123",
                                    status_code: "Shipped",
                                    pack_id: 1,
                                    sub_status_code: "SubShipped",
                                    status_history: [
                                        {
                                            status_code: "Shipped",
                                            created_at: new Date(),
                                            sub_status_code: "SubShipped"
                                        }
                                    ],
                                    photos: ["photo1.jpg"],
                                    tags: ["fragile"]
                                }
                            ],
                            retail_chain: {
                                code: "chain_1",
                                name: "Retail Chain 1"
                            },
                            external_system_order_id: "ext_order_123",
                            id: "order_1",
                            items: 5,
                            eta_end_date: new Date(),
                            status: "Delivered",
                            customer: {
                                address: "Customer Address",
                                lng: "12.3456",
                                city: "Customer City",
                                phone: "123-456-7890",
                                name: "Customer Name",
                                id: "customer_1",
                                state: "Customer State",
                                postal_code: "12345",
                                lat: "12.3456",
                                email: "customer@example.com"
                            },
                            sub_status: "SubDelivered",
                            destination: null
                        }
                    ],
                    id: "route_1",
                    eta_end_date: 1679820000000,
                    status: "IN_PROGRESS",
                    in_progress_at: 1679815000000
                }
            }
        ]
    },
};

const getData = (req, res) => {
    let response = data;
    res.statusCode = 200;
    res.json(response);
};

module.exports = {
    getData
};
