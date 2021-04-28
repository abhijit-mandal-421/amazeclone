const product_data = [{
    id:1,
    title: 'Cadbury Bournville Rich Cocoa 70% Dark Chocolate Bar, 3 x 80 g',
    product_img: 'https://m.media-amazon.com/images/I/41f-MJbTTXL._AC_SR400,600_.jpg',
    product_type: 'chocolate',
    price: 240
    },
    
    {
    id:2,
        title: 'Dukes Waffy Rolls Tin - Chocolate, 300 g',
    product_img: 'https://m.media-amazon.com/images/I/71OIinPyljL._AC_UL320_.jpg',
    product_type:'chocolate',
    price:125
    },

    {
    id:3,
        title: 'Ferrero Rocher Premium Chocolates 24 Pieces, 300 g',
    product_img: 'https://m.media-amazon.com/images/I/71uNpGYLbnL._AC_UL320_.jpg',
    product_type:'chocolate',
    price:807
    },
    {
    id:4,
        title: "Kisses Hershey's Milk Chocolate 108 gm (Pack of 1) Pouch, 108 g"
    ,product_img: "https://m.media-amazon.com/images/I/512DJzwos7L._AC_UL320_.jpg",
    product_type:'chocolate',
    price:135
    },
    {
    id:5,
        title: 'Nestle MUNCH Nuts Chocolate Coated Crunchy Wafer– 32g Bar (Pack of 20 Units), 640 g'
    ,product_img: "https://m.media-amazon.com/images/I/81vL9IadjcL._AC_UL320_.jpg",
    product_type:"chocolate",
    price:320
    },
    {
    id:6,
        title: "Sukkhi Ethnic Gold Plated Kundan Multi-String Set of 3 Necklace Combo for Women"
    ,product_img: "https://m.media-amazon.com/images/I/71qsZwPnzOL._AC_UL320_.jpg",
    product_type:"jwellery",
    price:489
    },
    {
    id:7,
        title: "Sukkhi Dazzling Gold Plated Wedding Jewellery Austrian Diamond Choker Necklace Set Combo For Women"
    ,product_img:"https://m.media-amazon.com/images/I/71koEgPDDdL._AC_UL320_.jpg",
    product_type:"jwellery",
    price:408
    },
    {
    id:8,
        title: "Sukkhi Adorable Gold Plated Pearl Choker Necklace Set for Women"
    ,product_img: "https://m.media-amazon.com/images/I/81UaMFQR6kL._AC_UL320_.jpg",
    product_type:"jwellery",
    price:369
    },
    {
    id:9,
        title: "Ghanthan Kundan Jewellery - 31"
    ,product_img: "https://m.media-amazon.com/images/I/71IplUUK52L._AC_UL320_.jpg",
    product_type:"jwellery",
    price:1999
    },
    {
    id:10,
        title: "Sukkhi Glamorous LCT Gold Plated Wedding Jewellery Pearl Choker Necklace Set Combo For Women"
    ,product_img: "https://m.media-amazon.com/images/I/912iX-Sve0L._AC_UL320_.jpg",
    product_type: "jwellery",
    price:348
    },
    {
    id:11,
        title: "Petsport Dog Toys, Tiny Tots Nuzzle Buddies, 20 Gram"
    ,product_img: "https://m.media-amazon.com/images/I/61WhYcZY0NL._AC_UL320_.jpg",
    product_type:"toy",
    price:375
    },
    {
    id:12,
        title: "JIADA Kids Laptop, LED Display, with Music, Educational Laptop Learner with LED Screen, Multicolor"
    ,product_img: "https://m.media-amazon.com/images/I/71fWTwq-VqL._AC_UL320_.jpg",
    product_type:"toy",
    price:596
    },
    {
    id:13,
        title: "Sky Tech® Monster car Truck 4 Pack 4WD Mini Devil Trucks Friction Powered Cars for Kids Big Rubber Tires Baby Boys Super Cars Blaze Truck Children Gift Toys (Set of 4) Toys & Games"
    ,product_img: "https://m.media-amazon.com/images/I/811rAOREsSL._AC_UL320_.jpg",
    product_type:"toy",
    price:539
    },
    {
    id:14,
        title: "FunBlast Realistic Sliceable Fruits and Vegetable Cutting Toys for Kids - Pretend Play Toys for Girls, Fruits Cutting Play Toy Set with Basket & Knife - 14 PCS (Random Color)"
    ,product_img: "https://m.media-amazon.com/images/I/71NmQjaHDLL._AC_UL320_.jpg",
    product_type:"toy",
    price:356
    },
    {
    id:15,
        title: "Pleasure Treasure Super Heros Action Figure Toys Set 5 Action Hero Collection for Kids (4.5 Inches, Multicolor)"
    ,product_img:"https://m.media-amazon.com/images/I/612pABRWUML._AC_UL320_.jpg",
    product_type:"toy",
    price:359
    },
    {
    id:16,
        title: "OnePlus 9R 5G (Lake Blue, 12GB RAM, 256GB Storage)"
    , product_img: "https://m.media-amazon.com/images/I/61IwksZ-DGL._AC_UY218_.jpg",
    product_type: "mobile",
    price:43999
    },
    {
    id:17,
        title: "Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
    ,product_img:"https://m.media-amazon.com/images/I/61IhTtJUXJL._AC_UY218_.jpg",
    product_type:"mobile",
    price:11990
    },
    {
    id:18,
        title: "Redmi 9A (Nature Green, 2GB Ram, 32GB Storage) | 2GHz Octa-core Helio G25 Processor"
    ,product_img: "https://m.media-amazon.com/images/I/71sxlhYhKWL._AC_UY218_.jpg",
    product_type:"mobile",
    price:6799
    },
    {
    id:19,
        title: "Samsung Galaxy M12 (White,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate"
    ,product_img: "https://m.media-amazon.com/images/I/71PVpFc7FwL._AC_UY218_.jpg",
    product_type:"mobile",
    price:10999
    },
    {
    id:20,
        title: "New Apple iPhone 12 Mini (256GB) - Blue"
    ,product_img: "https://m.media-amazon.com/images/I/71sNNCTfMuL._AC_UY218_.jpg",
    product_type:"mobile",
    price:84900
    },
    {
    id:21,
        title: "Boldfit Push Up Bar Stand for Gym & Home Exercise, Dips/Push Up Stand for Men & Women. Useful in Chest & Arm Workout. (Orange Color)"
    ,product_img: "https://m.media-amazon.com/images/I/61YaQGzaUyL._AC_UL320_.jpg",
    product_type:"workout",
    price:329
    },
    {
    id:22,
        title: "Dekko Ab Wheel Roller Gym Equipment with Knee pad and Bag for Men and Women, Easy to Carry and Easy-to-use for core | Fitness & Exercise | Full Body Home Workout Equipment | ab Roller | Black."
    ,product_img:"https://m.media-amazon.com/images/I/81rsYgMzctL._AC_UL320_.jpg",
    product_type:"workout",
    price:699
    },
    {
    id:23,
        title: "Boldfit Skipping Rope for Men, Women & Children - Jump Rope for Exercise Workout & Weight Loss - Tangle Free Jumping Rope for Kids"
    ,product_img:"https://m.media-amazon.com/images/I/71Cw+Upeo0L._AC_UL320_.jpg",
    product_type:"workout",
    price:475
    },
    {
    id:24,
        title: "Joyfit Stackable Dumbbell Set with cast Iron Weights, Handlebars and Carry Box for arms, Chest, Back and Leg Workouts, Strength and Fitness Training at Home and Gym (1 Set)"
    ,product_img:"https://m.media-amazon.com/images/I/610+omvFGKL._AC_UL320_.jpg",
    product_type:"workout",
    price:4999
    },
    {
    id:25,
        title: "Sportneer Ankle Weights, Adjustable Wrist Weight Straps for Fitness, Walking, Jogging, Workout, 0.23Kg-1.6Kg for Per Ankle, 0.45Kg to 3.15Kg for a Pair, 2 Pack"
    ,product_img:"https://m.media-amazon.com/images/I/81jeBi4KqgL._AC_UL320_.jpg",
    product_type:"workout",
    price:1400
    },
    {
    id:26,
        title: "ShopEnjoy Mart Multipurpose Office Desktop Table Organizer Storage Box Remote Marekers Pen Pencil Holder Cosmetic Makeup Stand (20.5L x 10W x 9.5H cm)"
    ,product_img:"https://m.media-amazon.com/images/I/7169qBj082L._AC_UL320_.jpg",
    product_type:"office",
    price:248
    },
    {
    id:27,
        title: "Sasimo 3 Tier Mesh Metal Desk Organizer File Rack Letter Tray A4 Papers Documents Holder Desk Organizer for Office- 30 x 29 x 24.5 cm"
    ,product_img:"https://m.media-amazon.com/images/I/51FXKnxaeSL._AC_UL320_.jpg",
    product_type:"office",
    price:599
    },
    {
    id:28,
        title: "A M Accessories Foldable Bed Study Table Portable Multifunction Laptop Table Lap Desk for Children Bed Fordable Table Work Office Home with Tablet Slot & Cup Holder Bed Study Table"
    ,product_img:"https://m.media-amazon.com/images/I/61ZP5LEVBqL._AC_UL320_.jpg",
    product_type:"office",
    price:449
    },
    {
    id:29,
        title: "CELLBELL® C104 Medium-Back Mesh Office Chair[Black]"
    ,product_img:"https://m.media-amazon.com/images/I/61nAWN5ZnML._AC_UL320_.jpg",
    product_type:"office",
    price:3699
    },
    {
    id:30,
        title: "Hammonds Flycatcher Original Bombay Brown Leather 15.6 inch Laptop Messenger Bag|Padded Laptop Compartment|Office Bag (L=15.6,B=3.75,H=10.75 inch) LB106TN"
    ,product_img:"https://m.media-amazon.com/images/I/81i+3Qe00eL._AC_UL320_.jpg",
    product_type:"office",
    price:1849
    },
    
    ]

    export default product_data;