_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{TQMt:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/analytics",function(){return n("XdS7")}])},XdS7:function(e,t,n){"use strict";n.r(t),n.d(t,"yTickFormatter",(function(){return w})),n.d(t,"Metrics",(function(){return M})),n.d(t,"Revenue",(function(){return x})),n.d(t,"Weekday",(function(){return C}));var r=n("q1tI"),a=n.n(r),c=n("qKvR"),o=n("qhky"),i=n("ZhIB"),d=n.n(i),l=n("4XXU"),u=n("bgFo"),s=n("h4VS");function f(){var e=Object(s.a)(["\n  font-size: 320%;\n  font-weight: ",";\n  letter-spacing: -0.6px;\n"]);return f=function(){return e},e}function p(){var e=Object(s.a)(["\n  margin-top: 1px;\n  color: ",";\n  line-height: 1.47;\n"]);return p=function(){return e},e}function b(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  height: 48px;\n  margin-bottom: 16px;\n  width: 48px;\n\n  [data-role='vehicles-on-track'] & {\n    background-color: rgba(51, 172, 46, 0.15);\n  }\n\n  [data-role='distance-driven'] & {\n    background-color: rgba(0, 193, 212, 0.15);\n  }\n\n  [data-role='energy-consumed'] & {\n    background-color: rgba(140, 84, 255, 0.15);\n  }\n\n  [data-role='total-drive-time'] & {\n    background-color: rgba(247, 193, 55, 0.15);\n  }\n"]);return b=function(){return e},e}function m(){var e=Object(s.a)(["\n  padding: 16px 24px;\n"]);return m=function(){return e},e}function g(){var e=Object(s.a)(["\n  .recharts-area-dot {\n    fill: ",";\n  }\n\n  .recharts-cartesian-axis-tick-value {\n    fill: #b0bac9;\n  }\n\n  .recharts-legend-item {\n    margin-left: 12px;\n    color: ",";\n    font-size: ",";\n  }\n\n  .recharts-legend-item-text {\n    margin-left: 6px;\n    vertical-align: middle;\n  }\n\n  .recharts-legend-wrapper {\n    margin: 0 -10px;\n    transform: translateY(-60%);\n  }\n\n  .recharts-responsive-Surface {\n    margin: 45px -10px 0;\n  }\n"]);return g=function(){return e},e}var v=function(e){return Object(c.c)(g(),e.colors.white,e.colors.blueyGrey,e.typography.baseFontSize)},O=Object(c.c)(m()),j=Object(c.c)(b()),h=function(e){return Object(c.c)(p(),e.colors.blueyGrey)},y=function(e){return Object(c.c)(f(),e.typography.fontWeightLight)},k=(a.a.createElement,{"vehicles-on-track":{color:u.c.theme.colors.purple,component:u.d.Check},"distance-driven":{color:u.c.theme.colors.blue,component:u.d.Marker},"energy-consumed":{color:u.c.theme.colors.blue,component:u.d.Energy},"total-drive-time":{color:u.c.theme.colors.blue,component:u.d.Dynamic}}),w=function(e){return e>999?d()(Math.abs(e)).format("$0[.]0a"):Math.abs(e)},M=function(e){var t=e.data;return Object(c.d)(a.a.Fragment,null,t.map((function(e,t){var n=e.label.split(" ").join("-").toLowerCase(),r=k[n].component;return Object(c.d)(u.f.Card,{css:O,"data-role":n,key:"".concat(n,"-").concat(t)},Object(c.d)("div",{css:j},Object(c.d)(r,{fill:k[n].color,size:19})),Object(c.d)("div",{css:y},e.value),Object(c.d)("div",{css:h},e.label))})))},x=function(e){var t=e.data;return Object(c.d)(u.f.Card,{css:v,heading:"Revenue"},Object(c.d)(l.j,{width:"100%",height:340},Object(c.d)(l.b,{data:t},Object(c.d)("defs",null,Object(c.d)("linearGradient",{id:"colorRevenue",x1:"0",y1:"0",x2:"0",y2:"1"},Object(c.d)("stop",{offset:"5%",stopColor:"#2e5bff",stopOpacity:.1}),Object(c.d)("stop",{offset:"95%",stopColor:"#2e5bff",stopOpacity:0})),Object(c.d)("linearGradient",{id:"colorTrips",x1:"0",y1:"0",x2:"0",y2:"1"},Object(c.d)("stop",{offset:"5%",stopColor:"#8c54ff",stopOpacity:.1}),Object(c.d)("stop",{offset:"95%",stopColor:"#8c54ff",stopOpacity:0}))),Object(c.d)(l.a,{dataKey:"revenue",fill:"url(#colorRevenue)",fillOpacity:1,name:"Revenue",stroke:"#2e5bff",strokeWidth:2,dot:!0}),Object(c.d)(l.a,{dataKey:"trips",fill:"url(#colorTrips)",fillOpacity:1,name:"Trips",stroke:"#8c54ff",strokeWidth:2,dot:!0}),Object(c.d)(l.d,{stroke:"#8097b1",strokeDasharray:"2 2",strokeOpacity:"0.3"}),Object(c.d)(l.f,{align:"right",iconSize:10,iconType:"circle",verticalAlign:"top"}),Object(c.d)(l.k,{dataKey:"name",interval:"preserveStartEnd",stroke:"#e0e7ff",tickLine:!1,tickMargin:8.5}),Object(c.d)(l.l,{stroke:"#e0e7ff",tickFormatter:w,tickLine:!1,tickMargin:13.5,ticks:[0,5e3,1e4,15e3,2e4,25e3,3e4]}))))},C=function(e){var t=e.data;return Object(c.d)(u.f.Card,{css:v,heading:"Trips by Weekday",size:2},Object(c.d)(l.j,{width:"100%",height:340},Object(c.d)(l.e,{data:t,margin:{top:-3,right:0,bottom:2,left:-16},width:500},Object(c.d)(l.c,{barSize:7,dataKey:"comfort",fill:"#2e5bff",name:"Comfort",radius:5}),Object(c.d)(l.c,{barSize:7,dataKey:"premium",fill:"#8c54ff",name:"Premium",radius:5}),Object(c.d)(l.d,{stroke:"#8097b1",strokeDasharray:"2 2",strokeOpacity:"0.3"}),Object(c.d)(l.f,{align:"right",iconSize:10,iconType:"circle",verticalAlign:"top"}),Object(c.d)(l.g,{dataKey:"average",name:"Average",stroke:"#f7c137",strokeWidth:2}),Object(c.d)(l.k,{dataKey:"name",interval:"preserveStartEnd",padding:{left:17,right:16},stroke:"#e0e7ff",tickLine:!1,tickMargin:7.5}),Object(c.d)(l.l,{tickLine:!1,tickMargin:1,stroke:"#e0e7ff",ticks:[0,25,50,75,100,125,150]}))))};t.default=function(){return Object(c.d)(a.a.Fragment,null,Object(c.d)(o.a,null,Object(c.d)("title",null,"Velocity | Analytics")),Object(c.d)(u.f.PageHeader,{heading:"Analytics"}),Object(c.d)(u.f.Page,null,Object(c.d)(u.f.Row,null,Object(c.d)(u.f.CardGroup,null,Object(c.d)(x,{data:[{name:"Mar 1",revenue:7850,trips:3900},{name:"Mar 8",revenue:11100,trips:4700},{name:"Mar 15",revenue:9100,trips:7150},{name:"Mar 22",revenue:15200,trips:6400},{name:"Mar 29",revenue:23e3,trips:11e3},{name:"Apr 5",revenue:21400,trips:12500},{name:"Apr 12",revenue:15950,trips:7e3},{name:"Apr 19",revenue:12750,trips:8250},{name:"Apr 26",revenue:16100,trips:5850},{name:"May 2",revenue:17600,trips:13e3},{name:"May 9",revenue:23700,trips:18050},{name:"May 16",revenue:18900,trips:17200},{name:"May 23",revenue:11300,trips:2200}]}))),Object(c.d)(u.f.Row,null,Object(c.d)(u.f.CardGroup,null,Object(c.d)(M,{data:[{label:"Vehicles on track",value:"$1,428"},{label:"Distance driven",value:"158.3 mi"},{label:"Energy consumed",value:"87.4 kWh"},{label:"Total drive time",value:"24.2 h"}]}))),Object(c.d)(u.f.Row,null,Object(c.d)(u.f.CardGroup,null,Object(c.d)(u.f.Card,null),Object(c.d)(C,{data:[{average:109,name:"Mon",comfort:83,premium:97},{average:86,name:"Tue",comfort:66,premium:76},{average:102,name:"Wed",comfort:78,premium:90},{average:108,name:"Thu",comfort:133,premium:96},{average:75,name:"Fri",comfort:56,premium:65},{average:56,name:"Sat",comfort:65,premium:47},{average:125,name:"Sun",comfort:119,premium:117}]})))))}}},[["TQMt",0,1,2,3,5]]]);