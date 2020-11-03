export const initData = [
    //TOUR 1
    {
        header: "Food Travel",
        creator: "Sarah Parker",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis",
        city: "Cần Thơ",
        joined: 0,
        duration: Math.floor(Math.random() * 300),
        userName: "Peter Parker",
        category: ["Đồ Ăn", "Đồ uống", "Hẹn hò"],
        rate: Math.floor(Math.random() * 5 + 1),
        price: 300000,
        image: "https://images.foody.vn/res/g65/647115/prof/s576x330/foody-upload-api-foody-mobile-avar22-jpg-180823142215.jpg",
        src: "https://www.google.com/maps/d/embed?mid=1EPnkSG4tjsU3jiBs0tZ6P5CoJLHqQvPA",
        curriculumn: [
            {
                placeName: "Bến Nhà Rồng",
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.",
                lat: 10.768234, //Điền chỗ này
                long: 106.706756, // Điền chỗ này

            },
            {
                placeName: "Hẻm Ăn Vặt", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.", // Điền chỗ này
                lat: 10.77892, // Điền chỗ này
                long: 106.69544, // Điền chỗ này

            },
            {
                placeName: "Dinh Độc Lập", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.", // Điền chỗ này
                lat: 10.77711, // Điền chỗ này
                long: 106.70272, // Điền chỗ này

            },
            {
                placeName: "Phố đi bộ Nguyễn Huệ", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.", // Điền chỗ này
                lat: 10.77406, // Điền chỗ này
                long: 106.70365, // Điền chỗ này

            },
            {
                placeName: "Con đường trái cây đĩa", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.", // Điền chỗ này
                lat: 10.76055, // Điền chỗ này
                long: 106.68681, // Điền chỗ này

            }
            //tiếp tục chỗ nay đủ 4 địa điểm
        ],
        reviews: [
            {
                userName: "Peter Parker",
                rate: Math.floor(Math.random() * 5 + 1),
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis.",
                time: "Sep 29, 2017 at 9:48 am"
            },
            {
                userName: "Peter Parker",
                rate: Math.floor(Math.random() * 5 + 1),
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis.",
                time: "Sep 29, 2017 at 9:48 am"
            }
        ],
        tourguides: [
            {
                name: "Sarah Parker",
                description: ""
            },
            {
                name: "Sarah Parker",
                description: ""
            },
            {
                name: "Sarah Parker",
                description: ""
            },
            {
                name: "Sarah Parker",
                description: ""
            }
        ]
    },

    // //TOUR 2
    {
        header: "Drink Travel",
        creator: "Sarah Parker",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis",
        city: "Đà Nẵng",
        joined: 0,
        category: ["Đồ Ăn", "Hẹn hò", "Danh lam thắng cảnh"],
        duration: Math.floor(Math.random() * 300),
        userName: "Peter Parker",
        rate: Math.floor(Math.random() * 5 + 1),
        price: Math.floor(Math.random() * 1000000),
        image: "https://www.researchgate.net/profile/Kwan_Hui_Lim/publication/329570549/figure/fig1/AS:728777445343232@1550765491598/Example-of-the-tour-recommendation-problem.png",
        src: "https://www.google.com/maps/d/embed?mid=1IqcXRmapBTRnnDTaiAmeF9DKV70L6129",
        curriculumn: [
            {
                placeName: "BẢO TÀNG ÁO DÀI",
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.",
                lat: 10.80839, //Điền chỗ này
                long: 106.85305, // Điền chỗ này

            },
            {
                placeName: "Ẩm Thực Quê Nhà Quận 3", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.", // Điền chỗ này
                lat: 10.78453, // Điền chỗ này
                long: 106.69403, // Điền chỗ này

            },
            {
                placeName: "Chợ Bến Thành", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.", // Điền chỗ này
                lat: 10.7721, // Điền chỗ này
                long: 106.69827, // Điền chỗ này

            },
            {
                placeName: "Phố ốc Vĩnh Khánh", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.", // Điền chỗ này
                lat: 10.76248, // Điền chỗ này
                long: 106.70268, // Điền chỗ này

            },
            {
                placeName: "Cầu Ánh Sao", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.", // Điền chỗ này
                lat: 10.72471, // Điền chỗ này
                long: 106.71879, // Điền chỗ này

            },
        ],
        reviews: [
            {
                userName: "Peter Parker",
                rate: Math.floor(Math.random() * 5 + 1),
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis.",
                time: "Sep 29, 2017 at 9:48 am"
            },
            {
                userName: "Peter Parker",
                rate: Math.floor(Math.random() * 5 + 1),
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis.",
                time: "Sep 29, 2017 at 9:48 am"
            }
        ],
        tourguides: [
            {
                name: "Sarah Parker",
                description: ""
            },
            {
                name: "Sarah Parker",
                description: ""
            },
            {
                name: "Sarah Parker",
                description: ""
            },
            {
                name: "Sarah Parker",
                description: ""
            }
        ]
    },

    //TOUR 3
    {
        header: "Full option Tour",
        creator: "Sarah Parker",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis",
        city: "TP. Hồ Chí Minh",
        category: ["Danh lam thắng cảnh", "Văn Hóa địa phương"],
        joined: 0,
        duration: Math.floor(Math.random() * 300),
        userName: "Peter Parker",
        rate: Math.floor(Math.random() * 5 + 1),
        price: Math.floor(Math.random() * 1000000),
        image: "https://images.foody.vn/res/g100/998357/prof/s576x330/foody-upload-api-foody-mobile-thecoffeehousehgfjfg-200113143516.jpg",
        src: "https://www.google.com/maps/d/embed?mid=12vR6aXUr0wtx4mkiOetxmlAnwL9TmcKv",
        curriculumn: [
            {
                placeName: "Bảo tàng tranh 3D",
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.",
                lat: 10.74214, //Điền chỗ này
                long: 106.69535, // Điền chỗ này

            },
            {
                placeName: "Phố ẩm thực Phan Xích Long", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.", // Điền chỗ này
                lat: 10.7987, // Điền chỗ này
                long: 106.68761, // Điền chỗ này

            },
            {
                placeName: "Khu du lịch Suối Tiên", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.", // Điền chỗ này
                lat: 10.86382, // Điền chỗ này
                long: 106.80196, // Điền chỗ này

            },
            {
                placeName: "Nhà hàng hải sản Dìn Ký", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.", // Điền chỗ này
                lat: 10.80377, // Điền chỗ này
                long: 106.65581, // Điền chỗ này

            },
            {
                placeName: "Bảo Tàng Y Học Cổ Truyền Việt Nam", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.", // Điền chỗ này
                lat: 10.77618, // Điền chỗ này
                long: 106.67188, // Điền chỗ này

            }
        ],
        reviews: [
            {
                userName: "Peter Parker",
                rate: Math.floor(Math.random() * 5 + 1),
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis.",
                time: "Sep 29, 2017 at 9:48 am"
            },
            {
                userName: "Peter Parker",
                rate: Math.floor(Math.random() * 5 + 1),
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis.",
                time: "Sep 29, 2017 at 9:48 am"
            }
        ],
        tourguides: [
            {
                name: "Sarah Parker",
                description: ""
            },
            {
                name: "Sarah Parker",
                description: ""
            },
            {
                name: "Sarah Parker",
                description: ""
            },
            {
                name: "Sarah Parker",
                description: ""
            }
        ]
    },

    //TOUR 4
    {
        header: "Danh lam thắng cảnh",
        creator: "Sarah Parker",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis",
        city: "Hà Nội",
        category: ["Đồ Ăn"],
        joined: 0,
        duration: Math.floor(Math.random() * 300),
        userName: "Peter Parker",
        rate: Math.floor(Math.random() * 5 + 1),
        price: Math.floor(Math.random() * 1000000),
        image: "https://www.topuytin.com/wp-content/uploads/2018/05/saigon_central_post_office.jpg",
        src: "https://www.google.com/maps/d/embed?mid=1OhTQdFrOcJDRbHkQ6eJAJ3fEeQT0vB_u",
        curriculumn: [
            {
                placeName: "Địa đạo Củ Chi",
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.",
                lat: 11.06223, //Điền chỗ này
                long: 106.52958, // Điền chỗ này

            },
            {
                placeName: "Nhà Hàng Lẩu Soa Soa", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.", // Điền chỗ này
                lat: 10.78629, // Điền chỗ này
                long: 106.69219, // Điền chỗ này

            },
            {
                placeName: "Khu du lịch Suối Tiên", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.", // Điền chỗ này
                lat: 10.77314, // Điền chỗ này
                long: 106.70409, // Điền chỗ này

            },
            {
                placeName: "Phố sủi cảo Hà Tôn Quyền", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.", // Điền chỗ này
                lat: 10.75812, // Điền chỗ này
                long: 106.65249, // Điền chỗ này

            },
            {
                placeName: "Nhà thờ đức bà sài gòn", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.", // Điền chỗ này
                lat: 10.77978, // Điền chỗ này
                long: 106.69901, // Điền chỗ này

            }
        ],
        reviews: [
            {
                userName: "Peter Parker",
                rate: Math.floor(Math.random() * 5 + 1),
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis.",
                time: "Sep 29, 2017 at 9:48 am"
            },
            {
                userName: "Peter Parker",
                rate: Math.floor(Math.random() * 5 + 1),
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis.",
                time: "Sep 29, 2017 at 9:48 am"
            }
        ],
        tourguides: [
            {
                name: "Sarah Parker",
                description: ""
            },
            {
                name: "Sarah Parker",
                description: ""
            },
            {
                name: "Sarah Parker",
                description: ""
            },
            {
                name: "Sarah Parker",
                description: ""
            }
        ]
    }, {
        header: "Danh lam thắng cảnh",
        creator: "Sarah Parker",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis",
        city: "Hà Nội",
        category: ["Đồ uống"],
        joined: 0,
        duration: Math.floor(Math.random() * 300),
        userName: "Peter Parker",
        rate: Math.floor(Math.random() * 5 + 1),
        price: Math.floor(Math.random() * 1000000),
        image: "https://www.topuytin.com/wp-content/uploads/2018/05/saigon_central_post_office.jpg",
        src: "https://www.google.com/maps/d/embed?mid=1OhTQdFrOcJDRbHkQ6eJAJ3fEeQT0vB_u",
        curriculumn: [
            {
                placeName: "Địa đạo Củ Chi",
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.",
                lat: 11.06223, //Điền chỗ này
                long: 106.52958, // Điền chỗ này

            },
            {
                placeName: "Nhà Hàng Lẩu Soa Soa", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.", // Điền chỗ này
                lat: 10.78629, // Điền chỗ này
                long: 106.69219, // Điền chỗ này

            },
            {
                placeName: "Khu du lịch Suối Tiên", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.", // Điền chỗ này
                lat: 10.77314, // Điền chỗ này
                long: 106.70409, // Điền chỗ này

            },
            {
                placeName: "Phố sủi cảo Hà Tôn Quyền", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.", // Điền chỗ này
                lat: 10.75812, // Điền chỗ này
                long: 106.65249, // Điền chỗ này

            },
            {
                placeName: "Nhà thờ đức bà sài gòn", // Điền chỗ này
                rate: Math.floor(Math.random() * 5 + 1),
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla.", // Điền chỗ này
                lat: 10.77978, // Điền chỗ này
                long: 106.69901, // Điền chỗ này

            }
        ],
        reviews: [
            {
                userName: "Peter Parker",
                rate: Math.floor(Math.random() * 5 + 1),
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis.",
                time: "Sep 29, 2017 at 9:48 am"
            },
            {
                userName: "Peter Parker",
                rate: Math.floor(Math.random() * 5 + 1),
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis.",
                time: "Sep 29, 2017 at 9:48 am"
            }
        ],
        tourguides: [
            {
                name: "Sarah Parker",
                description: ""
            },
            {
                name: "Sarah Parker",
                description: ""
            },
            {
                name: "Sarah Parker",
                description: ""
            },
            {
                name: "Sarah Parker",
                description: ""
            }
        ]
    },



]