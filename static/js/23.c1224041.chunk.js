(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{117:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return P});var r=a(160),n=a(161),l=a(163),s=a(162),i=a(164),o=a(0),c=a.n(o),u=a(5872),d=a(165),p=a.n(d),f=a(5878),m=a.n(f),h=a(5879),v=a.n(h),y=a(5880),g=a.n(y),b=a(5876),k=a.n(b),E=a(5875),x=a.n(E),D=a(5873),M=a.n(D),S={position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},P=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={events:[],petId:e.petId,loading:!0},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"formatTimestamp",value:function(e){var t=new Date(1e3*parseInt(e)),a=t.getFullYear();return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]+" "+("0"+t.getDate()).substr(-2)+" "+a+", "+t.getHours()+":"+("0"+t.getMinutes()).substr(-2)+":"+("0"+t.getSeconds()).substr(-2)}},{key:"componentDidMount",value:function(){var e=this;this.props.resolverContract.getPastEvents("LostReportChanged",{filter:{petId:this.state.petId},fromBlock:0,toBlock:"latest"},function(t,a){e.setState({events:a,loading:!1})})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(m.a,{open:this.props.open,fullScreen:!0,onClose:this.handleClose,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},c.a.createElement(k.a,{id:"alert-dialog-slide-title"},"Report history of Pet ID:"+this.props.chipId+", Name: "+this.props.name),c.a.createElement(g.a,null,c.a.createElement("div",null,c.a.createElement(u.q,null,c.a.createElement(u.u,null,c.a.createElement(u.v,null,c.a.createElement(u.s,null,"Date"),c.a.createElement(u.s,null,"Status"),c.a.createElement(u.s,null,"Scene Desc"),c.a.createElement(u.s,null,"Claimer EIN"),c.a.createElement(u.s,null,c.a.createElement(p.a,null)))),c.a.createElement(u.r,null,this.state.events.map(function(t){return c.a.createElement(u.v,{key:e.props.petId+"_"+t.returnValues.date},c.a.createElement(u.s,null,e.formatTimestamp(t.returnValues[2])),c.a.createElement(u.s,null,e.props.getStatusTxt(t.returnValues[3])),c.a.createElement(u.s,null,t.returnValues[4]),c.a.createElement(u.s,null,0!==t.returnValues[6]?t.returnValues[6]:""),c.a.createElement(u.s,null,t.returnValues[5]))}))),this.state.loading&&c.a.createElement(M.a,{size:68,style:S}))),c.a.createElement(v.a,null,c.a.createElement(x.a,{onClick:this.props.handleClose,color:"primary"},"Close"))))}}]),t}(c.a.Component)},5873:function(e,t,a){"use strict";var r=a(3);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=r(a(5874))},5874:function(e,t,a){"use strict";var r=a(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=r(a(12)),l=r(a(28)),s=r(a(20)),i=r(a(0)),o=(r(a(1)),r(a(38))),c=r(a(56)),u=a(80),d=(r(a(287)),44);function p(e){var t,a,r;return t=e,a=0,r=1,e=(Math.min(Math.max(a,t),r)-a)/(r-a),e=(e-=1)*e*e+1}var f=function(e){return{root:{display:"inline-block",lineHeight:1},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"mui-progress-circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"mui-progress-circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes mui-progress-circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes mui-progress-circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-120px"}},circleDisableShrink:{animation:"none"}}};function m(e){var t,a,r,c=e.classes,f=e.className,m=e.color,h=e.disableShrink,v=e.size,y=e.style,g=e.thickness,b=e.value,k=e.variant,E=(0,s.default)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),x={},D={},M={};if("determinate"===k||"static"===k){var S=2*Math.PI*((d-g)/2);x.strokeDasharray=S.toFixed(3),M["aria-valuenow"]=Math.round(b),"static"===k?(x.strokeDashoffset="".concat(((100-b)/100*S).toFixed(3),"px"),D.transform="rotate(-90deg)"):(x.strokeDashoffset="".concat((r=(100-b)/100,r*r*S).toFixed(3),"px"),D.transform="rotate(".concat((270*p(b/70)).toFixed(3),"deg)"))}return i.default.createElement("div",(0,n.default)({className:(0,o.default)(c.root,(t={},(0,l.default)(t,c["color".concat((0,u.capitalize)(m))],"inherit"!==m),(0,l.default)(t,c.indeterminate,"indeterminate"===k),(0,l.default)(t,c.static,"static"===k),t),f),style:(0,n.default)({width:v,height:v},D,y),role:"progressbar"},M,E),i.default.createElement("svg",{className:c.svg,viewBox:"".concat(d/2," ").concat(d/2," ").concat(d," ").concat(d)},i.default.createElement("circle",{className:(0,o.default)(c.circle,(a={},(0,l.default)(a,c.circleIndeterminate,"indeterminate"===k),(0,l.default)(a,c.circleStatic,"static"===k),(0,l.default)(a,c.circleDisableShrink,h),a)),style:x,cx:d,cy:d,r:(d-g)/2,fill:"none",strokeWidth:g})))}t.styles=f,m.propTypes={},m.defaultProps={color:"primary",disableShrink:!1,size:40,thickness:3.6,value:0,variant:"indeterminate"};var h=(0,c.default)(f,{name:"MuiCircularProgress",flip:!1})(m);t.default=h},5876:function(e,t,a){"use strict";var r=a(3);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=r(a(5883))},5883:function(e,t,a){"use strict";var r=a(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=r(a(12)),l=r(a(20)),s=r(a(0)),i=(r(a(1)),r(a(38))),o=r(a(56)),c=r(a(58)),u={root:{margin:0,padding:"24px 24px 20px",flex:"0 0 auto"}};function d(e){var t=e.children,a=e.classes,r=e.className,o=e.disableTypography,u=(0,l.default)(e,["children","classes","className","disableTypography"]);return s.default.createElement("div",(0,n.default)({className:(0,i.default)(a.root,r)},u),o?t:s.default.createElement(c.default,{variant:"title",internalDeprecatedVariant:!0},t))}t.styles=u,d.propTypes={},d.defaultProps={disableTypography:!1};var p=(0,o.default)(u,{name:"MuiDialogTitle"})(d);t.default=p}}]);
//# sourceMappingURL=23.c1224041.chunk.js.map