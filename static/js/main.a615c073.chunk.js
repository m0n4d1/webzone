(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(16),l=n.n(i),u=n(5),r=n(6),c=n(8),m=n(7),s=n(9),d=n(44),p=n(41),b=n(2),g=n(3);function f(){var e=Object(b.a)(['\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    box-sizing: border-box;\n  }\n\n  h2,h3,h4,h5,h6 {\n    font-family: Comfortaa;\n    font-weight: 100;\n  }\n\n  p {\n    font-family: Nunito;\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n      monospace;\n  }\n']);return f=function(){return e},e}var E=Object(g.a)(f()),v=n(15),h=n(13),x=n(14),L=n(45);function O(){var e=Object(b.a)(["\n\n  ","\n\n  display: grid;\n  grid-template-columns: ",";\n\n  > * {\n    grid-column: ","; /* keeps contents in the correct grid cell */\n  }\n\n  height: ","px;\n\n  margin: 0;\n  padding: ",";\n\n  background-color: ",";\n\n  ","\n  ","\n  \n  ","\n"]);return O=function(){return e},e}var w=g.b.section(O(),function(e){return e.sticky&&"\n      position: sticky;\n      top: -1px;\n    "},function(e){return e.fluid?" 1fr":" 1fr minmax(auto, 1200px) 1fr"},function(e){return e.fluid?"1":"2"},function(e){return e.height},function(e){return e.nopad?0:"15px"},function(e){return e.bgcolor},function(e){return e.img&&"\n      background-image: url(".concat(e.img,");\n      background-attachment: fixed;\n      background-size: cover;\n      background-position: center;\n    ")},function(e){return e.shadow&&"\n      box-shadow: ".concat("inset"===e.shadow?"inset":""," 0 2px 4px rgba(0,0,0,0.5); \n    ")},function(e){return e.overide&&"\n      ".concat(e.overide,"\n    ")});function q(){var e=Object(b.a)(["\n  h1 {\n    font-family: Righteous, Helvetica, sans-serif;\n    text-align: center;\n    font-size: 300%;\n    color: #fff;\n  }\n"]);return q=function(){return e},e}function y(){var e=Object(b.a)(["\n  ul {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    padding: 0;\n    li {\n        list-style: none;\n        height: 100%;\n        width: 100%;\n      a {\n        display: block;\n        padding: 20px;\n        color: #fff;\n        text-align: center;\n        text-decoration: none;\n        font-size: 18px;\n        transition: .2s ease;\n        font-family: Comfortaa;\n        &.active {\n          background-color: #2af;\n        }\n        &:hover {\n          background-color: #fff;\n          color: #19f;\n        }\n      }\n    }\n  }\n"]);return y=function(){return e},e}var j=g.b.nav(y()),C=g.b.header(q()),k=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(a.Fragment,null,o.a.createElement(w,{bgcolor:"#2af",nopad:!0},o.a.createElement(C,null,o.a.createElement("h1",null,"THOUGHT ZONE"))),o.a.createElement(w,{bgcolor:"#19f",sticky:!0,shadow:!0,overide:"z-index: 100;",nopad:!0},o.a.createElement(j,null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(L.a,{exact:!0,to:"/webzone/"},"Home")),o.a.createElement("li",null,o.a.createElement(L.a,{to:"/blog"},"Blog")),o.a.createElement("li",null,o.a.createElement(L.a,{to:"/about"},"About"))))))}}]),t}(a.Component),S=n(11);function D(){var e=Object(b.a)(["\n  display: grid;\n  \n  ","\n  grid-gap: ",";\n\n  ","\n"]);return D=function(){return e},e}var z=g.b.div(D(),function(e){return e.size>3?"\n        grid-template-columns: repeat(".concat(Math.floor(e.size/3),", 1fr);\n        @media screen and (min-width: 600px) {\n          grid-template-columns: repeat(").concat(Math.ceil(e.size/2),", 1fr);\n        }\n        @media screen and (min-width: 900px) {\n          grid-template-columns: repeat(").concat(e.size,", 1fr);\n        }\n      "):3===e.size?"\n        @media screen and (min-width: 900px) {\n          grid-template-columns: repeat(3, 1fr);\n        }\n      ":2===e.size?"\n        @media screen and (min-width: 600px) {\n           grid-template-columns: repeat(2, 1fr);\n        }\n      ":void 0},function(e){return e.nogap?"":"15px"},function(e){return e.overide&&"\n      ".concat(e.overide,"\n    ")});function I(){var e=Object(b.a)(["\n  grid-column: ",";\n  grid-row: ",";\n  background-color: ",";\n\n  ","\n"]);return I=function(){return e},e}var V=g.b.div(I(),function(e){return e.col?e.col:"span ".concat(e.colspan)},function(e){return e.row?e.row:"span ".concat(e.rowspan)},function(e){return e.bgcolor},function(e){return e.overide&&"\n      ".concat(e.overide,"\n    ")});function T(){var e=Object(b.a)(["\n  list-style: none;\n  margin:0;\n  padding: 0;\n  li {\n    display: grid;\n    align-content: center;\n    background-color: #ddd;\n    padding: 6px;\n    &.facebook { background-color: #3b5998; }\n    &.youtube { background-color: #bb0000; }\n    &.twitter { background-color: #55acee; }\n    &.instagram { background-color: #125688; }\n    svg{\n      justify-self: center;\n    }\n  }\n"]);return T=function(){return e},e}function B(){var e=Object(b.a)(["\n  h6 {\n    color: #777;\n    text-align: center;\n    margin: 20px 0;\n  }\n"]);return B=function(){return e},e}var A=g.b.div(B()),N=g.b.ul(T()),M=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(a.Fragment,null,o.a.createElement(w,{bgcolor:"#444",overide:"color: #ddd; "},o.a.createElement(z,{size:3},o.a.createElement(V,null,o.a.createElement("h2",null,"Thought Zone"),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor.")),o.a.createElement(V,null,o.a.createElement("h4",null,"Contact"),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt.")),o.a.createElement(V,null,o.a.createElement("h4",null,"Social Media"),o.a.createElement(N,null,o.a.createElement("a",{href:"https://www.facebook.com"},o.a.createElement("li",{className:"facebook"},o.a.createElement(S.a,{color:"white",icon:["fab","facebook"],size:"2x"}))),o.a.createElement("li",{className:"twitter"},o.a.createElement(S.a,{color:"white",icon:["fab","twitter"],size:"2x"})),o.a.createElement("li",{className:"youtube"},o.a.createElement(S.a,{color:"white",icon:["fab","youtube"],size:"2x"})),o.a.createElement("li",{className:"instagram"},o.a.createElement(S.a,{color:"white",icon:["fab","instagram"],size:"2x"})))))),o.a.createElement(w,{bgcolor:"#111",nopad:!0},o.a.createElement(A,null,o.a.createElement("h6",null,"Thought Zone \xa9 2019"))))}}]),t}(a.Component);function W(){var e=Object(b.a)(["\n  display: grid;\n  text-align: center;\n  padding: 25px;\n  h3 {\n    color: #fff;\n    text-shadow: 0 2px 2px #000;\n    margin-bottom: 5px;\n  }\n"]);return W=function(){return e},e}var F=g.b.div(W());function H(){var e=Object(b.a)(["\n  text-align: center;\n  color: #fff;\n  font-size: 40px;\n  text-shadow: 0 10px 20px rgba(0,0,0,0.5);\n\n"]);return H=function(){return e},e}var R=g.b.h2(H()),J=n(28),U=n.n(J),_=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new XMLHttpRequest;t.open("GET","https://discordapp.com/api/guilds/520225497666551818/widget.json"),t.onload=function(){console.log(JSON.parse(t.response)),e.setState({members:JSON.parse(t.response).members})},t.send()}},{key:"render",value:function(){var e=this.state.members&&this.state.members.map(function(e){return{src:e.avatar_url,height:20,width:20}}),t=this.state.members&&this.state.members.length;return o.a.createElement(a.Fragment,null,o.a.createElement(w,null,o.a.createElement("h2",null,"Welcome to Thought Zone"),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.")),o.a.createElement(w,{bgcolor:"#99AAB5",fluid:!0,nopad:!0,overide:"\n          > div {\n            height: 400px;\n          }\n        "},o.a.createElement(U.a,{height:"400px",params:{particles:{number:{value:t},shape:{type:"images",images:e},size:{value:30,random:!1},line_linked:{color:"#fff",width:1,opacity:2},move:{direction:"left",speed:3,bounce:!1,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"}}}}}),o.a.createElement(w,{overide:"position: absolute; width: 100%; box-sizing: border-box;",height:400,shadow:"inset"},o.a.createElement(z,null,o.a.createElement(V,{overide:"\n              justify-self: center;\n              display: grid;\n              align:content: center;\n              width: 100%;\n              max-width: 600px;\n              background-color: rgba(114,137,218,0.85); \n              border-radius: 15px;\n              box-shadow: 0 2px 4px rgba(44,47,51,0.5);\n              border: 1px solid white;\n              text-align: center;\n              h1 {\n                margin: 20px 0;\n                font-family: Righteous;\n                font-size: 30px;\n                color: white;\n              }\n              a {\n                margin: 12px 0;\n                background-color: white;\n                width: 120px;\n                padding: 10px;\n                font-family: Nunito;\n                font-size: 20px;\n                justify-self: center;\n                color: #7289DA;\n                align-self: center;\n                border-radius: 5px;\n                border: 1px solid white;\n                transition: all .15s ease;\n                text-decoration: none;\n                &:hover {\n                  background-color: #7289DA;\n                  color: white;\n                  cursor: pointer;\n                  box-shadow: 0 2px 4px black;\n                  transform: translateY(-2px);\n                }\n              }\n            "},o.a.createElement(F,null,o.a.createElement("h1",null,"Join Our Community"),o.a.createElement("faAlignCenter",null,o.a.createElement(S.a,{color:"white",icon:["fab","discord"],size:"10x"})),o.a.createElement("a",{href:"https://discord.gg/MS37RUj",rel:"noopener noreferrer",target:"_blank"},"Join Now!")))))),o.a.createElement(w,null,o.a.createElement("h2",null,"Fluid Test"),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.")),o.a.createElement(w,{bgcolor:"#39f"},o.a.createElement(R,null,"Our Values")),o.a.createElement(w,{bgcolor:"#39f",nopad:!0},o.a.createElement(z,{size:4,nogap:!0},o.a.createElement(V,{bgcolor:"#18f"},o.a.createElement(F,null,o.a.createElement("faAlignCenter",null,o.a.createElement(S.a,{color:"white",icon:"brain",size:"9x"})),o.a.createElement("h3",null,"Having Presence of Mind"))),o.a.createElement(V,{bgcolor:"#17f"},o.a.createElement(F,null,o.a.createElement("faAlignCenter",null,o.a.createElement(S.a,{color:"white",icon:"handshake",size:"9x"})),o.a.createElement("h3",null,"Being Good Spirited"))),o.a.createElement(V,{bgcolor:"#19f"},o.a.createElement(F,null,o.a.createElement("faAlignCenter",null,o.a.createElement(S.a,{color:"white",icon:"cogs",size:"9x"})),o.a.createElement("h3",null,"Regard for Logic and Reason"))),o.a.createElement(V,{bgcolor:"#18f"},o.a.createElement(F,null,o.a.createElement("faAlignCenter",null,o.a.createElement(S.a,{color:"white",icon:"comments",size:"9x"})),o.a.createElement("h3",null,"Using Debate to Sharpen One's Mind."))))),o.a.createElement(w,{height:300},o.a.createElement("h2",null,"Test")),o.a.createElement(w,null,o.a.createElement(z,{size:3},o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud."),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud."),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud."))),o.a.createElement(w,null,o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud."),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud."),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.")))}}]),t}(a.Component),Z=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(a.Fragment,null,o.a.createElement(w,null,o.a.createElement("h2",null,"Welcome To the Blog!"),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.")),o.a.createElement(w,{bgcolor:"#ccc"},o.a.createElement(z,{size:12},o.a.createElement("p",null,"test"),o.a.createElement("p",null,"test"),o.a.createElement("p",null,"test"),o.a.createElement("p",null,"test"),o.a.createElement("p",null,"test"),o.a.createElement("p",null,"test"),o.a.createElement("p",null,"test"),o.a.createElement("p",null,"test"),o.a.createElement("p",null,"test"),o.a.createElement("p",null,"test"),o.a.createElement("p",null,"test"),o.a.createElement("p",null,"test"),o.a.createElement("p",null,"test"),o.a.createElement("p",null,"test"),o.a.createElement("p",null,"test"),o.a.createElement("p",null,"test"),o.a.createElement("p",null,"test"),o.a.createElement("p",null,"test"),o.a.createElement("p",null,"test"))),o.a.createElement(w,null,o.a.createElement("h2",null,"Welcome To the Blog!"),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.")),o.a.createElement(w,null,o.a.createElement("h2",null,"Welcome To the Blog!"),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.")),o.a.createElement(w,null,o.a.createElement("h2",null,"Welcome To the Blog!"),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.")),o.a.createElement(w,null,o.a.createElement("h2",null,"Welcome To the Blog!"),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.")),o.a.createElement(w,null,o.a.createElement("h2",null,"Welcome To the Blog!"),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.")),o.a.createElement(w,null,o.a.createElement("h2",null,"Welcome To the Blog!"),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.")),o.a.createElement(w,null,o.a.createElement("h2",null,"Welcome To the Blog!"),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.")))}}]),t}(a.Component),G=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(a.Fragment,null,o.a.createElement(w,null,o.a.createElement("h2",null,"About"),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.")),o.a.createElement(w,{fluid:!0},o.a.createElement("h2",null,"Fluid Test"),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.")),o.a.createElement(w,null,o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud."),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud."),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.")),o.a.createElement(w,null,o.a.createElement("h2",null,"Test")),o.a.createElement(w,null,o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud."),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud."),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.")),o.a.createElement(w,null,o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud."),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud."),o.a.createElement("p",null,"Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.")))}}]),t}(a.Component),P=n(46),X=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(a.Component),Y=Object(P.a)(X);v.b.add(h.c,h.d,h.b,h.a,x.b,x.e,x.d,x.c,x.a);var $=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(a.Fragment,null,o.a.createElement(k,null),o.a.createElement(Y,null,o.a.createElement(p.a,{exact:!0,path:"/webzone/",component:_}),o.a.createElement(p.a,{path:"/blog",component:Z}),o.a.createElement(p.a,{path:"/About",component:G})),o.a.createElement(M,null),o.a.createElement(E,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.a615c073.chunk.js.map