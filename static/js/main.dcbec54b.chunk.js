(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},31:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c.n(a),s=c(24),r=c.n(s),o=(c(42),c(3)),n=(c(43),c(33)),l=c.n(n),d=c(34),m=c.n(d),j=c(32),p=c.n(j),u=(c(44),c(0)),h=function(e){var t=e.close;return console.log("popup",t),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"overlay",onClick:function(){return t(!1)}}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h2",{className:"content_title",children:"Choose Your location"}),Object(u.jsx)("div",{className:"content_text",children:"Select a delivery to see product availability and delivery options"}),Object(u.jsx)("button",{className:"signin",children:"Sign In to see your address"}),Object(u.jsx)("p",{children:"or"}),Object(u.jsxs)("div",{className:"submit_pincode",children:[Object(u.jsx)("input",{className:"pincode",type:"text",placeholder:"Enter an Indian Pincode"}),Object(u.jsx)("button",{className:"submit",onClick:t,children:"Apply"})]})]})]})},b=c(4),_=Object(a.createContext)(),g=function(e){var t=e.reducer,c=e.initialState,i=e.children;return Object(u.jsx)(_.Provider,{value:Object(a.useReducer)(t,c),children:i})},O=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],i=t[1],s=Object(a.useContext)(_),r=Object(o.a)(s,2),n=r[0];r[1];return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)(b.b,{to:"/amazeclone",children:Object(u.jsx)("img",{className:"header_logo",src:"http://pngimg.com/uploads/amazon/small/amazon_PNG18.png",alt:"Amazon_logo"})}),Object(u.jsxs)("div",{className:"header_search",children:[Object(u.jsxs)("div",{onClick:function(){return i(!0)},className:"header_location",children:[Object(u.jsx)(p.a,{className:"location_icon"}),Object(u.jsxs)("div",{className:"header_search_location",children:[Object(u.jsx)("span",{className:"line1",children:"Hello"})," ",Object(u.jsx)("span",{className:"line2",children:"Select your address "})," "]})]}),c&&Object(u.jsx)(h,{close:i}),Object(u.jsxs)("select",{onChange:function(e){console.log(e.value),b.b,e.value},className:"header_search_category",children:[Object(u.jsx)("option",{value:"/",children:"All"}),Object(u.jsx)("option",{value:"/mobiles",children:"Mobiles"}),Object(u.jsx)("option",{value:"/toys",children:"Kids and Toys"}),Object(u.jsx)("option",{value:"/chocolates",children:"Groceries"}),Object(u.jsx)("option",{value:"/office",children:"Office Needs"}),Object(u.jsx)("option",{value:"/workout",children:"Workouts"})]}),Object(u.jsx)("input",{className:"header_search_inp",type:"text"}),Object(u.jsx)(l.a,{className:"search_icon"}),Object(u.jsxs)("div",{className:"header_nav",children:[Object(u.jsx)(b.b,{to:"/amazeclone/signin",style:{color:"white"},children:Object(u.jsxs)("div",{className:"header_nav_option",children:[Object(u.jsx)("span",{className:"line1",children:"Hello, SignIn"}),Object(u.jsx)("span",{className:"line2",children:"Account & Lists"})]})}),Object(u.jsx)(b.b,{to:"/amazeclone/order",style:{color:"white"},children:Object(u.jsxs)("div",{className:"header_nav_option",children:[Object(u.jsx)("span",{className:"line1",children:"Returns"}),Object(u.jsx)("span",{className:"line2",children:"& Orders"})]})}),Object(u.jsx)(b.b,{to:"/amazeclone/checkout",style:{color:"white"},children:Object(u.jsxs)("div",{className:"header_cart",children:[Object(u.jsxs)("div",{className:"header_cart1",children:[Object(u.jsx)("span",{className:"line1",children:"Cart"}),Object(u.jsx)(m.a,{className:"cart_icon"})]}),Object(u.jsx)("span",{children:n.cart.length})]})})]})]})]})},x=(c(52),c(31),function(e){var t=e.title,c=e.image,a=e.link;return Object(u.jsxs)("div",{className:"offers",children:[Object(u.jsx)("p",{className:"offer_title",children:Object(u.jsx)("strong",{children:t})}),Object(u.jsxs)(b.b,{to:"/amazeclone/"+a,children:[Object(u.jsx)("img",{className:"offer_img",src:c,alt:""}),Object(u.jsx)("p",{className:"deals",children:"See all deals"})]})]})}),f=[{title:"Up to 40% off | Smartphone Upgrade Days",image:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/vivo/march/UD/MSO/D21938933_WL_MSO_UpgradeDays_DESKTOP_CC._SY304_CB657385560_.jpg",link:"mobiles"},{title:"Visit the Summer Toy list store",image:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/STL/DesktopGateway_CategoryCard_758X608_1x._SY304_CB654729478_.jpg",link:"toys"},{title:"Chocolates, sweets & more",image:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg",link:"chocolates"},{title:"For efficient work from homes",image:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg",link:"office_needs"},{title:"For determistic workouts",image:"https://static.toiimg.com/photo/msid-80430832/80430832.jpg",link:"workouts"}],y=function(e){var t=e.title,c=e.image_title_arr,a=e.image_arr,i=e.link_arr;return Object(u.jsxs)("div",{className:"offers",children:[Object(u.jsx)("p",{className:"offer_title",children:Object(u.jsx)("strong",{children:t})}),Object(u.jsx)("div",{className:"multiple_offers",children:c.map((function(e,t){return Object(u.jsxs)("a",{href:i[t],children:[Object(u.jsx)("img",{className:"offer_img",src:a[t],alt:e}),Object(u.jsx)("p",{className:"deals",children:e})]})}))})]})},v=[{title:"Up to 40% off | Smartphone Upgrade Days",image_title_arr:["AC's","Refrigerators","Television","Washing machines"],image_arr:["https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_3._SY116_CB414480869_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_4._SY116_CB414480869_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_2._SY116_CB414480869_.jpg"],link_arr:["","","",""]}],N=function(){return Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)("img",{src:"https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg",alt:"Prime_image",className:"home_img"}),Object(u.jsxs)("div",{className:"home_row",children:[f.slice(0,3).map((function(e,t){return Object(u.jsx)(x,{title:e.title,image:e.image,link:e.link},t)})),v.slice(0,1).map((function(e,t){return Object(u.jsx)(y,{title:e.title,image_title_arr:e.image_title_arr,image_arr:e.image_arr,link_arr:e.link_arr},t)}))]}),Object(u.jsxs)("div",{className:"home_row",children:[f.slice(3,5).map((function(e,t){return Object(u.jsx)(x,{title:e.title,image:e.image,link:e.link},t)})),v.slice(0,1).map((function(e,t){return Object(u.jsx)(y,{title:e.title,image_title_arr:e.image_title_arr,image_arr:e.image_arr,link_arr:e.link_arr},t)}))]})]})},C=c(5),k=c(8),w=(c(19),c(10)),S=function(e){var t=e.qty,c=e.product_id,i=e.title,s=e.price,r=e.product_img,n=Object(a.useContext)(_),l=Object(o.a)(n,2),d=l[0],m=l[1],j=Object(k.a)(d.cart);return Object(u.jsxs)("div",{className:"checkout_product",children:[Object(u.jsx)("img",{src:r,className:"checkout_product_img",alt:i}),Object(u.jsxs)("div",{className:"product_details",children:[Object(u.jsx)("div",{className:"product_name",children:i}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{style:{fontWeight:700},children:"Qty:"}),Object(u.jsxs)("select",{className:"product_qty",value:t,name:"p_qty",onChange:function(e){var a=e.target.value,i=a-t;if(console.log(t),console.log("product_id",c),console.log("qty",t),console.log("new_q",a),i>0){t=a;for(var s=0;s<i;s++)j.push(c)}else if(i<0){t=a;for(var r=0;r<Math.abs(i);r++)j.splice(j.indexOf(c),1)}m({type:"upd_qty_cart",cart:j})},children:[Object(u.jsx)("option",{value:"1",children:"1"}),Object(u.jsx)("option",{value:"2",children:"2"}),Object(u.jsx)("option",{value:"3",children:"3"}),Object(u.jsx)("option",{value:"4",children:"4"}),Object(u.jsx)("option",{value:"5",children:"5"})]})]}),Object(u.jsxs)("div",{className:"checkout_options",children:[" ",Object(u.jsx)("span",{onClick:function(){m({type:"delete_in_cart",item:c})},children:" Delete "}),"| ",Object(u.jsx)("span",{onClick:function(){m({type:"add_to_wishlist",item:c})},children:" Save for later"})]})]}),Object(u.jsx)(w.a,{renderText:function(e){return Object(u.jsxs)("p",{className:"product_price",children:[e," "]})},decimalScale:2,value:s,displayType:"text",thousandSeparator:!0,thousandsGroupStyle:"lakh",prefix:"\u20b9"})]})},z=[{id:1,title:"Cadbury Bournville Rich Cocoa 70% Dark Chocolate Bar, 3 x 80 g",product_img:"https://m.media-amazon.com/images/I/41f-MJbTTXL._AC_SR400,600_.jpg",product_type:"chocolate",price:240},{id:2,title:"Dukes Waffy Rolls Tin - Chocolate, 300 g",product_img:"https://m.media-amazon.com/images/I/71OIinPyljL._AC_UL320_.jpg",product_type:"chocolate",price:125},{id:3,title:"Ferrero Rocher Premium Chocolates 24 Pieces, 300 g",product_img:"https://m.media-amazon.com/images/I/71uNpGYLbnL._AC_UL320_.jpg",product_type:"chocolate",price:807},{id:4,title:"Kisses Hershey's Milk Chocolate 108 gm (Pack of 1) Pouch, 108 g",product_img:"https://m.media-amazon.com/images/I/512DJzwos7L._AC_UL320_.jpg",product_type:"chocolate",price:135},{id:5,title:"Nestle MUNCH Nuts Chocolate Coated Crunchy Wafer\u2013 32g Bar (Pack of 20 Units), 640 g",product_img:"https://m.media-amazon.com/images/I/81vL9IadjcL._AC_UL320_.jpg",product_type:"chocolate",price:320},{id:6,title:"Sukkhi Ethnic Gold Plated Kundan Multi-String Set of 3 Necklace Combo for Women",product_img:"https://m.media-amazon.com/images/I/71qsZwPnzOL._AC_UL320_.jpg",product_type:"jwellery",price:489},{id:7,title:"Sukkhi Dazzling Gold Plated Wedding Jewellery Austrian Diamond Choker Necklace Set Combo For Women",product_img:"https://m.media-amazon.com/images/I/71koEgPDDdL._AC_UL320_.jpg",product_type:"jwellery",price:408},{id:8,title:"Sukkhi Adorable Gold Plated Pearl Choker Necklace Set for Women",product_img:"https://m.media-amazon.com/images/I/81UaMFQR6kL._AC_UL320_.jpg",product_type:"jwellery",price:369},{id:9,title:"Ghanthan Kundan Jewellery - 31",product_img:"https://m.media-amazon.com/images/I/71IplUUK52L._AC_UL320_.jpg",product_type:"jwellery",price:1999},{id:10,title:"Sukkhi Glamorous LCT Gold Plated Wedding Jewellery Pearl Choker Necklace Set Combo For Women",product_img:"https://m.media-amazon.com/images/I/912iX-Sve0L._AC_UL320_.jpg",product_type:"jwellery",price:348},{id:11,title:"Petsport Dog Toys, Tiny Tots Nuzzle Buddies, 20 Gram",product_img:"https://m.media-amazon.com/images/I/61WhYcZY0NL._AC_UL320_.jpg",product_type:"toy",price:375},{id:12,title:"JIADA Kids Laptop, LED Display, with Music, Educational Laptop Learner with LED Screen, Multicolor",product_img:"https://m.media-amazon.com/images/I/71fWTwq-VqL._AC_UL320_.jpg",product_type:"toy",price:596},{id:13,title:"Sky Tech\xae Monster car Truck 4 Pack 4WD Mini Devil Trucks Friction Powered Cars for Kids Big Rubber Tires Baby Boys Super Cars Blaze Truck Children Gift Toys (Set of 4) Toys & Games",product_img:"https://m.media-amazon.com/images/I/811rAOREsSL._AC_UL320_.jpg",product_type:"toy",price:539},{id:14,title:"FunBlast Realistic Sliceable Fruits and Vegetable Cutting Toys for Kids - Pretend Play Toys for Girls, Fruits Cutting Play Toy Set with Basket & Knife - 14 PCS (Random Color)",product_img:"https://m.media-amazon.com/images/I/71NmQjaHDLL._AC_UL320_.jpg",product_type:"toy",price:356},{id:15,title:"Pleasure Treasure Super Heros Action Figure Toys Set 5 Action Hero Collection for Kids (4.5 Inches, Multicolor)",product_img:"https://m.media-amazon.com/images/I/612pABRWUML._AC_UL320_.jpg",product_type:"toy",price:359},{id:16,title:"OnePlus 9R 5G (Lake Blue, 12GB RAM, 256GB Storage)",product_img:"https://m.media-amazon.com/images/I/61IwksZ-DGL._AC_UY218_.jpg",product_type:"mobile",price:43999},{id:17,title:"Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",product_img:"https://m.media-amazon.com/images/I/61IhTtJUXJL._AC_UY218_.jpg",product_type:"mobile",price:11990},{id:18,title:"Redmi 9A (Nature Green, 2GB Ram, 32GB Storage) | 2GHz Octa-core Helio G25 Processor",product_img:"https://m.media-amazon.com/images/I/71sxlhYhKWL._AC_UY218_.jpg",product_type:"mobile",price:6799},{id:19,title:"Samsung Galaxy M12 (White,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate",product_img:"https://m.media-amazon.com/images/I/71PVpFc7FwL._AC_UY218_.jpg",product_type:"mobile",price:10999},{id:20,title:"New Apple iPhone 12 Mini (256GB) - Blue",product_img:"https://m.media-amazon.com/images/I/71sNNCTfMuL._AC_UY218_.jpg",product_type:"mobile",price:84900},{id:21,title:"Boldfit Push Up Bar Stand for Gym & Home Exercise, Dips/Push Up Stand for Men & Women. Useful in Chest & Arm Workout. (Orange Color)",product_img:"https://m.media-amazon.com/images/I/61YaQGzaUyL._AC_UL320_.jpg",product_type:"workout",price:329},{id:22,title:"Dekko Ab Wheel Roller Gym Equipment with Knee pad and Bag for Men and Women, Easy to Carry and Easy-to-use for core | Fitness & Exercise | Full Body Home Workout Equipment | ab Roller | Black.",product_img:"https://m.media-amazon.com/images/I/81rsYgMzctL._AC_UL320_.jpg",product_type:"workout",price:699},{id:23,title:"Boldfit Skipping Rope for Men, Women & Children - Jump Rope for Exercise Workout & Weight Loss - Tangle Free Jumping Rope for Kids",product_img:"https://m.media-amazon.com/images/I/71Cw+Upeo0L._AC_UL320_.jpg",product_type:"workout",price:475},{id:24,title:"Joyfit Stackable Dumbbell Set with cast Iron Weights, Handlebars and Carry Box for arms, Chest, Back and Leg Workouts, Strength and Fitness Training at Home and Gym (1 Set)",product_img:"https://m.media-amazon.com/images/I/610+omvFGKL._AC_UL320_.jpg",product_type:"workout",price:4999},{id:25,title:"Sportneer Ankle Weights, Adjustable Wrist Weight Straps for Fitness, Walking, Jogging, Workout, 0.23Kg-1.6Kg for Per Ankle, 0.45Kg to 3.15Kg for a Pair, 2 Pack",product_img:"https://m.media-amazon.com/images/I/81jeBi4KqgL._AC_UL320_.jpg",product_type:"workout",price:1400},{id:26,title:"ShopEnjoy Mart Multipurpose Office Desktop Table Organizer Storage Box Remote Marekers Pen Pencil Holder Cosmetic Makeup Stand (20.5L x 10W x 9.5H cm)",product_img:"https://m.media-amazon.com/images/I/7169qBj082L._AC_UL320_.jpg",product_type:"office",price:248},{id:27,title:"Sasimo 3 Tier Mesh Metal Desk Organizer File Rack Letter Tray A4 Papers Documents Holder Desk Organizer for Office- 30 x 29 x 24.5 cm",product_img:"https://m.media-amazon.com/images/I/51FXKnxaeSL._AC_UL320_.jpg",product_type:"office",price:599},{id:28,title:"A M Accessories Foldable Bed Study Table Portable Multifunction Laptop Table Lap Desk for Children Bed Fordable Table Work Office Home with Tablet Slot & Cup Holder Bed Study Table",product_img:"https://m.media-amazon.com/images/I/61ZP5LEVBqL._AC_UL320_.jpg",product_type:"office",price:449},{id:29,title:"CELLBELL\xae C104 Medium-Back Mesh Office Chair[Black]",product_img:"https://m.media-amazon.com/images/I/61nAWN5ZnML._AC_UL320_.jpg",product_type:"office",price:3699},{id:30,title:"Hammonds Flycatcher Original Bombay Brown Leather 15.6 inch Laptop Messenger Bag|Padded Laptop Compartment|Office Bag (L=15.6,B=3.75,H=10.75 inch) LB106TN",product_img:"https://m.media-amazon.com/images/I/81i+3Qe00eL._AC_UL320_.jpg",product_type:"office",price:1849}],L=c(35),A=c.n(L),G=c(36),B=c.n(G),I=function(){var e=Object(a.useContext)(_),t=Object(o.a)(e,2),c=t[0],i=t[1],s=new Set(c.cart),r=Array.from(s);console.log(Array.from(s)),console.log("cart lenght",c.cart.length);var n=0,l=0;return console.log(c.cart),Object(u.jsxs)("div",{className:"checkout",children:[Object(u.jsx)("div",{className:"left_checkout",children:c.cart.length>0?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h2",{children:["Shopping Cart ",Object(u.jsx)("small",{children:"Price"})]}),r.map((function(e){return z.filter((function(t){return t.id===e})).map((function(t){return console.log(e,t),n=c.cart.filter((function(t){return t===e})).length,l+=n*t.price,Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(S,{qty:n,product_id:e,title:t.title,price:t.price,product_img:t.product_img})})}))}))," "]}):Object(u.jsx)("h1",{className:"no_items",children:"No Items in Cart"})}),Object(u.jsx)("div",{className:"right_checkout1",children:Object(u.jsxs)("div",{className:"right_checkout",children:[l>2e3?Object(u.jsxs)("span",{className:"free_delivery",children:[Object(u.jsx)(A.a,{className:"checkicon"})," Your Order is eligible for FREE delivery"]}):Object(u.jsxs)("span",{className:"free_delivery",children:[Object(u.jsx)(B.a,{className:"cancelicon"})," Your Order is not eligible for FREE delivery",Object(u.jsx)("br",{})," Minimum order should be \u20b92,000"]}),Object(u.jsx)(w.a,{renderText:function(e){return Object(u.jsxs)("p",{children:["Subtotal ( ",Object(u.jsx)("strong",{children:c.cart.length}),c.cart.length>1?" items":" item",") :  ",Object(u.jsx)("strong",{children:e})]})},decimalScale:2,value:l,displayType:"text",thousandSeparator:!0,thousandsGroupStyle:"lakh",prefix:"\u20b9"}),Object(u.jsx)("button",{className:"checkout_btn",onClick:function(){i({type:"add_to_order",cart:Object(k.a)(c.cart)})},children:"Proceed to Buy"}),Object(u.jsx)(b.b,{to:"/amazeclone/wishlist",children:"Go to Wishlist"})]})})]})},P=(c(20),function(e){var t=e.product_id,c=e.title,i=e.product_img,s=e.price,r=Object(a.useContext)(_),n=Object(o.a)(r,2),l=(n[0],n[1]);return Object(u.jsxs)("div",{className:"product",children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(u.jsxs)("div",{className:"product_info",children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(u.jsxs)("p",{className:"product_title",children:["\xa0",c.length<135?c:c.slice(0,135)+"..."," "]}),"\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  ",Object(u.jsx)(w.a,{renderText:function(e){return Object(u.jsxs)("strong",{children:[" ",Object(u.jsxs)("big",{children:[" ",e," "]})]})},decimalScale:2,value:s,displayType:"text",thousandSeparator:!0,thousandsGroupStyle:"lakh",prefix:"\u20b9"})]}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(u.jsx)("img",{src:i,alt:"",className:"product_img"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(u.jsx)("button",{className:"add_cart",onClick:function(){l({type:"add_to_cart",item:t})},children:"Add\xa0to\xa0Cart"})]})}),T=function(){return Object(u.jsxs)("div",{className:"mobiles",children:[z.filter((function(e){return"mobile"===e.product_type})).map((function(e){return Object(u.jsx)(P,{title:e.title,price:e.price,product_img:e.product_img,product_id:e.id})})),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"]})},M=c(21),F=c(6),U=(c(53),c(23)),W=c.n(U),D=function(){var e=Object(a.useState)({username:"",mob_no:"",email:"",password:""}),t=Object(o.a)(e,2),c=t[0],i=t[1],s=Object(a.useState)([]),r=Object(o.a)(s,2),n=r[0],l=r[1],d=Object(a.useState)({username:"",mob_no:"",email:"",password:""}),m=Object(o.a)(d,2),j=m[0],p=m[1],h={username:/^[a-z\d]{5,12}$/i,email:/^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,password:/^[#\w@_-]{6,20}$/,mob_no:/^\d{10}$/},_=function(e){var t=e.target.name,a=e.target.value;i(Object(F.a)(Object(F.a)({},c),{},Object(M.a)({},t,a))),console.log(c)},g=function(){var e=Object(F.a)({},j);return e.username=c.username?"":"Your name required",e.mob_no=c.mob_no?h.mob_no.test(c.mob_no)?"":"Mobile no. invalid":"Mobile no. required",e.email=c.email?h.email.test(c.email)?"":"Email invalid":"",e.password=c.password?h.password.test(c.password)?"":"Password invalid":"Password required",!(e.email||e.mob_no||e.username||e.password)||(p(e),!1)};return Object(u.jsx)("div",{className:"registration_page",children:Object(u.jsxs)("div",{className:"registration_form",children:[Object(u.jsxs)(b.b,{to:"/amazeclone",children:["  ",Object(u.jsx)("img",{className:"reg_logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG5.png",alt:"logo"})," "]}),Object(u.jsx)("h1",{children:"Create Account"}),Object(u.jsxs)("form",{action:"",className:"reg_form",onSubmit:function(e){e.preventDefault(),g()&&(l([].concat(Object(k.a)(n),[c])),i({username:"",mob_no:"",email:"",password:""}),p({username:"",mob_no:"",email:"",password:""})),console.log(g(),n,j)},children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"lbl",children:[Object(u.jsx)("label",{htmlFor:"username",children:"Your name"}),j.username?Object(u.jsxs)("div",{className:"error",children:[Object(u.jsx)(W.a,{className:"error_icon"}),j.username]}):""]}),Object(u.jsx)("input",{type:"text",autoComplete:"off",name:"username",id:"username",onChange:_,value:c.username})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"lbl",children:[Object(u.jsx)("label",{htmlFor:"mob_no",children:"Mobile Number"}),j.mob_no?Object(u.jsxs)("div",{className:"error",children:[Object(u.jsx)(W.a,{className:"error_icon"}),j.mob_no]}):""]}),Object(u.jsx)("input",{type:"text",autoComplete:"off",name:"mob_no",id:"mob_no",onChange:_,value:c.mob_no})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"lbl",children:[Object(u.jsx)("label",{htmlFor:"email",children:"Email (optional)"}),j.email?Object(u.jsxs)("div",{className:"error",children:[Object(u.jsx)(W.a,{className:"error_icon"}),j.email]}):""]}),Object(u.jsx)("input",{type:"text",autoComplete:"off",name:"email",id:"email",onChange:_,value:c.email})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"lbl",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),j.password?Object(u.jsxs)("div",{className:"error",children:[Object(u.jsx)(W.a,{className:"error_icon"}),j.password]}):""]}),Object(u.jsx)("input",{type:"password",autoComplete:"off",name:"password",id:"password",onChange:_,value:c.password,placeholder:"At least 6 characters"}),Object(u.jsx)("p",{children:"(icon)Passwords must be at least 6 characters."})]}),Object(u.jsxs)("div",{className:"reg_note",children:["We will send you a text to verify your phone.",Object(u.jsx)("br",{}),"Message and Data rates may apply."]}),Object(u.jsx)("button",{type:"submit",className:"form_submit",children:"Continue"})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"reg_note",children:["Already have an account?  ",Object(u.jsx)(b.b,{to:"/signin",children:" Sign in "})," ",Object(u.jsx)("br",{})]}),Object(u.jsx)("div",{children:n.map((function(e){return Object(u.jsxs)("div",{children:[e.username," ",e.mob_no," ",e.email," ",e.password,Object(u.jsx)("br",{})]})}))})]})})},R=(c(54),function(){var e=Object(a.useState)({email_no:"",password:""}),t=Object(o.a)(e,2),c=t[0],i=t[1],s=Object(a.useState)([]),r=Object(o.a)(s,2),n=r[0],l=r[1],d=Object(a.useState)({email_no:"",password:""}),m=Object(o.a)(d,2),j=(m[0],m[1],function(e){var t=e.target.name,a=e.target.value;i(Object(F.a)(Object(F.a)({},c),{},Object(M.a)({},t,a))),console.log(c)});return Object(u.jsxs)(u.Fragment,{children:[!Object(u.jsx)(O,{}),Object(u.jsxs)("div",{className:"login_page",children:[Object(u.jsx)(b.b,{to:"/amazeclone",children:Object(u.jsx)("img",{className:"reg_logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG5.png",alt:"logo"})}),Object(u.jsxs)("div",{className:"login_form",children:[Object(u.jsx)("h1",{children:"Sign-In"}),Object(u.jsxs)("form",{action:"",className:"log_form",onSubmit:function(e){e.preventDefault(),l([].concat(Object(k.a)(n),[c])),i({email_no:"",password:""}),console.log(n)},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"email_no",children:"Email or Phone number"}),Object(u.jsx)("input",{type:"text",autoComplete:"off",name:"email_no",id:"email_no",onChange:j,value:c.email_no})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"password_label",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("a",{href:"https://www.google.co.in/",className:"forgot_pwd",children:"Forgot Password?"})]}),Object(u.jsx)("input",{type:"password",autoComplete:"off",name:"password",id:"password",onChange:j,value:c.password})]}),Object(u.jsx)("button",{type:"submit",className:"form_submit",children:"Continue"})]}),Object(u.jsx)("div",{className:"reg_note",children:"By continuing, you agree to Amazon's Condition of use and Privacy Note"}),Object(u.jsx)("div",{className:"reg_note",children:Object(u.jsx)("span",{children:"New to Amazon?"})}),Object(u.jsx)(b.b,{to:"/amazeclone/register",children:Object(u.jsx)("button",{type:"submit",className:"form_submit",children:"Create Your Amazon account"})})]})]})]})}),E=function(e){var t=e.product_id,c=e.title,i=e.price,s=e.product_img,r=Object(a.useContext)(_),n=Object(o.a)(r,2),l=(n[0],n[1]);return Object(u.jsxs)("div",{className:"checkout_product",children:[Object(u.jsx)("img",{src:s,className:"checkout_product_img",alt:c}),Object(u.jsxs)("div",{className:"product_details",children:[Object(u.jsx)("div",{className:"product_name",children:c}),Object(u.jsxs)("div",{className:"checkout_options",children:[" ",Object(u.jsx)("span",{onClick:function(){l({type:"delete_in_wishlist",item:t})},children:" Delete "}),"| ",Object(u.jsx)("span",{onClick:function(){l({type:"add_to_cart",item:t})},children:" Add to Cart"})]})]}),Object(u.jsx)(w.a,{renderText:function(e){return Object(u.jsxs)("p",{className:"product_price",children:[e," "]})},decimalScale:2,value:i,displayType:"text",thousandSeparator:!0,thousandsGroupStyle:"lakh",prefix:"\u20b9"})]})},Y=function(){var e=Object(a.useContext)(_),t=Object(o.a)(e,2),c=t[0];t[1];console.log("wishlist"),console.log(c.wishlist);var i=0;return Object(u.jsxs)("div",{className:"checkout",children:[Object(u.jsxs)("div",{className:"left_checkout",children:[Object(u.jsx)("h2",{children:"Shopping Wish List"}),c.wishlist.length>0?c.wishlist.map((function(e){return z.filter((function(t){return t.id===e})).map((function(t){return console.log(e,t),i+=t.price,Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(E,{product_id:e,title:t.title,price:t.price,product_img:t.product_img}),Object(u.jsx)("hr",{})]})}))})):Object(u.jsx)("h1",{className:"no_items",children:"No Items in Wishlist"})]}),Object(u.jsxs)("div",{className:"right_checkout",children:[Object(u.jsx)(w.a,{renderText:function(e){return Object(u.jsxs)("p",{children:["Subtotal ( ",Object(u.jsx)("strong",{children:c.wishlist.length})," ) : ",Object(u.jsx)("strong",{children:e})]})},decimalScale:2,value:i,displayType:"text",thousandSeparator:!0,thousandsGroupStyle:"lakh",prefix:"\u20b9"}),Object(u.jsx)(b.b,{to:"/amazeclone/checkout",children:"Go to Checkout"})]})]})},H=function(){return Object(u.jsxs)("div",{className:"toys",children:[z.filter((function(e){return"toy"===e.product_type})).map((function(e){return Object(u.jsx)(P,{title:e.title,price:e.price,product_img:e.product_img,product_id:e.id})})),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"]})},K=function(){return Object(u.jsxs)("div",{className:"chocolates",children:[z.filter((function(e){return"chocolate"===e.product_type})).map((function(e){return Object(u.jsx)(P,{title:e.title,price:e.price,product_img:e.product_img,product_id:e.id})})),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"]})},q=function(){return Object(u.jsxs)("div",{className:"office_needs",children:[z.filter((function(e){return"office"===e.product_type})).map((function(e){return Object(u.jsx)(P,{title:e.title,price:e.price,product_img:e.product_img,product_id:e.id})})),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"]})},J=function(){return Object(u.jsxs)("div",{className:"workouts",children:[z.filter((function(e){return"workout"===e.product_type})).map((function(e){return Object(u.jsx)(P,{title:e.title,price:e.price,product_img:e.product_img,product_id:e.id})})),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"]})},Q=function(e){e.product_id;var t=e.title,c=e.price,i=e.product_img,s=Object(a.useState)("checkout_product"),r=Object(o.a)(s,2),n=r[0],l=r[1];return Object(u.jsxs)("div",{className:n,children:[Object(u.jsx)("img",{src:i,className:"checkout_product_img",alt:t}),Object(u.jsxs)("div",{className:"product_details",children:[Object(u.jsx)("div",{className:"product_name",children:t}),Object(u.jsx)(w.a,{renderText:function(e){return Object(u.jsxs)("p",{className:"product_price",style:{textAlign:"left"},children:[e," "]})},decimalScale:2,value:c,displayType:"text",thousandSeparator:!0,thousandsGroupStyle:"lakh",prefix:"\u20b9"})]}),Object(u.jsxs)("div",{className:"return_items",children:[Object(u.jsx)("button",{className:"return_item_btn",onClick:function(){l("yes_return")},children:" Return Item"}),Object(u.jsx)("button",{className:"track_item_btn",children:" Track Item"})]})]})},V=function(){var e=Object(a.useContext)(_),t=Object(o.a)(e,2),c=t[0];t[1];return Object(u.jsx)("div",{className:"checkout",children:Object(u.jsx)("div",{className:"left_checkout",children:c.order.length>0?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{style:{textAlign:"center"},children:" Your Orders"}),c.order.map((function(e){return z.filter((function(t){return t.id===e})).map((function(t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(Q,{product_id:e,title:t.title,price:t.price,product_img:t.product_img})})}))}))," "]}):Object(u.jsx)("h1",{className:"no_items",children:"No Items Ordered"})})})};var X=function(){var e=Object(C.f)();return console.log(e),Object(u.jsxs)("div",{className:"App",children:["/signin"!==e.pathname&&"/register"!==e.pathname?Object(u.jsx)(O,{}):"",Object(u.jsxs)(C.c,{children:[Object(u.jsx)(C.a,{path:"/amazeclone/checkout",children:Object(u.jsx)(I,{})}),Object(u.jsx)(C.a,{path:"/amazeclone/mobiles",children:Object(u.jsx)(T,{})}),Object(u.jsx)(C.a,{path:"/amazeclone/register",children:Object(u.jsx)(D,{})}),Object(u.jsx)(C.a,{path:"/amazeclone/signin",children:Object(u.jsx)(R,{})}),Object(u.jsx)(C.a,{path:"/amazeclone/wishlist",children:Object(u.jsx)(Y,{})}),Object(u.jsx)(C.a,{path:"/amazeclone/toys",children:Object(u.jsx)(H,{})}),Object(u.jsx)(C.a,{path:"/amazeclone/chocolates",children:Object(u.jsx)(K,{})}),Object(u.jsx)(C.a,{path:"/amazeclone/office_needs",children:Object(u.jsx)(q,{})}),Object(u.jsx)(C.a,{path:"/amazeclone/workouts",children:Object(u.jsx)(J,{})}),Object(u.jsx)(C.a,{path:"/amazeclone/order",children:Object(u.jsx)(V,{})}),Object(u.jsx)(C.a,{path:"/amazeclone/",children:Object(u.jsx)(N,{})}),console.log("##","/amazeclone")]})]})},Z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,68)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),i(e),s(e),r(e)}))},$=function(e,t){switch(console.log(t,e),t.type){case"add_to_cart":return Object(F.a)(Object(F.a)({},e),{},{cart:[].concat(Object(k.a)(e.cart),[t.item]),wishlist:e.wishlist?e.wishlist.filter((function(e){return e!==t.item})):[]});case"delete_in_cart":return Object(F.a)(Object(F.a)({},e),{},{n_items:e.cart.length-1,cart:e.cart.filter((function(e){return e!==t.item}))});case"add_to_wishlist":return Object(F.a)(Object(F.a)({},e),{},{cart:e.cart.filter((function(e){return e!==t.item})),wishlist:[].concat(Object(k.a)(e.wishlist),[t.item])});case"delete_in_wishlist":return Object(F.a)(Object(F.a)({},e),{},{wishlist:e.wishlist.filter((function(e){return e!==t.item}))});case"upd_qty_cart":return Object(F.a)(Object(F.a)({},e),{},{cart:t.cart});case"add_to_order":return Object(F.a)(Object(F.a)({},e),{},{order:[].concat(Object(k.a)(e.order),Object(k.a)(t.cart)),cart:[]});default:return e}};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(g,{initialState:{n_items:0,n_wishlist_items:0,cart:[],wishlist:[],order:[],cart_quantity:{},current_user:""},reducer:$,children:Object(u.jsx)(b.a,{children:Object(u.jsx)(X,{})})})}),document.getElementById("root")),Z()}},[[56,1,2]]]);
//# sourceMappingURL=main.dcbec54b.chunk.js.map