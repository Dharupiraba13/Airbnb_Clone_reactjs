(this.webpackJsonpairbnb_clone=this.webpackJsonpairbnb_clone||[]).push([[0],{64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){},87:function(e,t,s){},88:function(e,t,s){},89:function(e,t,s){"use strict";s.r(t);var i=s(0),c=s.n(i),a=s(23),n=s.n(a),r=(s(64),s(65),s(66),s(29)),o=s(104),j=s(4),h=(s(67),s(68),s(69),s(70),s(47)),d=s(49),l=s.n(d),b=s(1);var p=function(){var e=Object(j.f)(),t=Object(i.useState)(new Date),s=Object(r.a)(t,2),c=s[0],a=s[1],n=Object(i.useState)(new Date),d=Object(r.a)(n,2),p=d[0],m=d[1],u={startDate:c,endDate:p,key:"selection"};return Object(b.jsxs)("div",{className:"search",children:[Object(b.jsx)(h.DateRangePicker,{ranges:[u],onChange:function(e){a(e.selection.startDate),m(e.selection.endDate)}}),Object(b.jsxs)("h2",{children:["Number of guests",Object(b.jsx)(l.a,{})]}),Object(b.jsx)("input",{min:0,defaultValue:2,type:"number"}),Object(b.jsx)(o.a,{onClick:function(){return e.push("/search")},children:"Search AirBnb"})]})};var m=function(){var e=Object(j.f)(),t=Object(i.useState)(!1),s=Object(r.a)(t,2),c=s[0],a=s[1];return Object(b.jsxs)("div",{className:"banner",children:[Object(b.jsxs)("div",{className:"banner__search",children:[c&&Object(b.jsx)(p,{}),Object(b.jsx)(o.a,{onClick:function(){return a(!c)},className:"banner__searchButton",variant:"outlined",children:c?"Hide":"Search Dates"})]}),Object(b.jsxs)("div",{className:"banner__information",children:[Object(b.jsx)("h2",{children:"Get out and stretch out your imagination"}),Object(b.jsx)("h5",{children:"Plan a different kind of gateway to uncover the hidden gem near you."}),Object(b.jsx)(o.a,{onClick:function(){return e.push("/search")},variant:"outlined",children:"Explore Nearby"})]})]})};s(84);var u=function(e){var t=e.src,s=e.title,i=e.description,c=e.price;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{src:t,alt:""}),Object(b.jsxs)("div",{className:"card__info",children:[Object(b.jsx)("h2",{children:s}),Object(b.jsx)("h4",{children:i}),Object(b.jsx)("h3",{children:c})]})]})};var x=function(){return Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)(m,{}),Object(b.jsxs)("div",{className:"home__section",children:[Object(b.jsx)(u,{src:"https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",title:"Online Experiences",description:"Unique activities we can do together, led by a world of hosts."}),Object(b.jsx)(u,{src:"https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720",title:"Unique stays",description:"Spaces that are more than just a place to sleep."}),Object(b.jsx)(u,{src:"https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",title:"Entire homes",description:"Comfortable private places, with room for friends or family."})]}),Object(b.jsxs)("div",{className:"home__section",children:[Object(b.jsx)(u,{src:"https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg",title:"3 Bedroom Flat in Goa",description:"Superhost with a stunning view of the beachside in Sunny Goa",price:"Rs.2500/night"}),Object(b.jsx)(u,{src:"https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg",title:"Penthouse in Jaipur",description:"Enjoy the amazing sights of Jaipur with this stunning penthouse",price:"Rs.4000/night"}),Object(b.jsx)(u,{src:"https://media.nomadicmatt.com/2018/apartment.jpg",title:"1 Bedroom apartment",description:"Superhost with great amenities and a fabolous shopping complex nearby",price:"Rs.700/night"})]})]})},O=(s(85),s(53)),g=s.n(O),f=s(54),v=s.n(f),_=s(55),w=s.n(_),y=s(105),N=s(37);var R=function(){return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)(N.b,{to:"/",children:Object(b.jsx)("img",{className:"header__icon",src:"https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png",alt:""})}),Object(b.jsxs)("div",{className:"header__center",children:[Object(b.jsx)("input",{type:"text"}),Object(b.jsx)(g.a,{})]}),Object(b.jsxs)("div",{className:"header__right",children:[Object(b.jsx)("p",{children:"Become a Host"}),Object(b.jsx)(v.a,{}),Object(b.jsx)(w.a,{}),Object(b.jsx)(y.a,{})]})]})};s(86);var P=function(){return Object(b.jsxs)("div",{className:"footer",children:[Object(b.jsx)("p",{children:"\xa9 AirBnb Clone.No rights reserved."}),Object(b.jsx)("p",{children:"Privacy-Terms-Sitemap-Company Details"})]})},F=(s(87),s(88),s(56)),S=s.n(F),k=s(57),C=s.n(k);var G=function(e){var t=e.img,s=e.location,i=e.title,c=e.description,a=e.star,n=e.price,r=e.total;return Object(b.jsxs)("div",{className:"searchResult",children:[Object(b.jsx)("img",{src:t,alt:""}),Object(b.jsx)(S.a,{className:"searchResult__heart"}),Object(b.jsxs)("div",{className:"searchResult__info",children:[Object(b.jsxs)("div",{className:"searchResult__infoTop",children:[Object(b.jsx)("p",{children:s}),Object(b.jsx)("h3",{children:i}),Object(b.jsx)("p",{children:"____"}),Object(b.jsx)("p",{children:c})]}),Object(b.jsxs)("div",{className:"searchResult__infoBottom",children:[Object(b.jsxs)("div",{className:"searchResult__stars",children:[Object(b.jsx)(C.a,{className:"searchResult__star"}),Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:a})})]}),Object(b.jsxs)("div",{className:"searchResults__price",children:[Object(b.jsx)("h2",{children:n}),Object(b.jsx)("p",{children:r})]})]})]})]})};var A=function(){return Object(b.jsxs)("div",{className:"searchPage",children:[Object(b.jsxs)("div",{className:"searchPage__info",children:[Object(b.jsx)("p",{children:"30 stays \xb7 25 may to 30 may  \xb7 2 guest"}),Object(b.jsx)("h1",{children:"Stays Nearby"}),Object(b.jsx)(o.a,{variant:"outlined",children:"Cancellation Flexibility"}),Object(b.jsx)(o.a,{variant:"outlined",children:"Type of place"}),Object(b.jsx)(o.a,{variant:"outlined",children:"Price"}),Object(b.jsx)(o.a,{variant:"outlined",children:"Rooms and beds"}),Object(b.jsx)(o.a,{variant:"outlined",children:"More filters"})]}),Object(b.jsx)(G,{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",location:"Private room in center of Goa",title:"Stay at this spacious Edwardian House",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bathrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:4.8,price:"Rs.1000 / night",total:"Rs.1700 total"}),Object(b.jsx)(G,{img:"https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg",location:"Private room in center of Jaipur",title:"Independant luxury studio apartment",description:"2 guest \xb7 3 bedroom \xb7 1 bed \xb7 1.5 shared bathrooms \xb7 Wifi \xb7 Kitchen",star:4.3,price:"Rs.3250 / night",total:"Rs.4200 total"}),Object(b.jsx)(G,{img:"https://www.smartertravel.com/wp-content/uploads/2017/07/Untitled-design-8.jpg",location:"Private room in center of Goa",title:"Goa Studio Apartments",description:"4 guest \xb7 4 bedroom \xb7 4 bed \xb7 2 bathrooms \xb7 Free parking \xb7 Washing Machine",star:3.8,price:"Rs.3500 / night",total:"Rs.5000 total"}),Object(b.jsx)(G,{img:"https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI",location:"Private room in center of Goa",title:"30 mins to Oxford Street, Excel Goa",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bathrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:4.1,price:"Rs.550 / night",total:"Rs.1000 total"}),Object(b.jsx)(G,{img:"https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-Goa.jpg",location:"Private room in center of Goa",title:"Spacious Peaceful Modern Bedroom",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bathrooms \xb7 Wifi \xb7 Free parking \xb7 Dry Cleaning",star:5,price:"Rs.600 / night",total:"Rs.900 total"}),Object(b.jsx)(G,{img:"https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937",location:"Private room in center of Goa",title:"The Blue Room In Goa",description:"2 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bathrooms \xb7 Wifi \xb7 Washing Machine",star:4.25,price:"Rs.650 / night",total:"Rs.1280 total"}),Object(b.jsx)(G,{img:"https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp",location:"Private room in center of Goa",title:"5 Star Luxury Apartment",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:3.85,price:"Rs.1200 / night",total:"Rs.2000 total"})]})};var B=function(){return Object(b.jsx)("div",{className:"app",children:Object(b.jsxs)(N.a,{children:[Object(b.jsx)(R,{}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/search",children:Object(b.jsx)(A,{})}),Object(b.jsx)(j.a,{path:"/",children:Object(b.jsx)(x,{})})]}),Object(b.jsx)(P,{})]})})},D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,106)).then((function(t){var s=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,n=t.getTTFB;s(e),i(e),c(e),a(e),n(e)}))};n.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root")),D()}},[[89,1,2]]]);
//# sourceMappingURL=main.af0f4624.chunk.js.map