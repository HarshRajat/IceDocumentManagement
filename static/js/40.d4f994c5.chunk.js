(window.webpackJsonp=window.webpackJsonp||[]).push([[40,32,46],{181:function(e,t,a){"use strict";a.r(t);var r=a(27),n=a.n(r),o=a(65),i=a(14),c=a(0),s=a.n(c),l=a(5872),u=a(32),d=a(67),f=a(9),m=a(286),p=a(21),h="0xffffffffffffffffffffffffffffff";t.default=Object(u.withStyles)(function(e){return{marginTop:{marginTop:4*e.spacing.unit}}})(function(e){var t=e.ein,a=e.classes,r=Object(f.useWeb3Context)(),u=Object(c.useMemo)(function(){return Math.round(new Date/1e3)+3600},[]),b=Object(p.useSnowflakeBalance)(t,!0),y=Object(p.useNamedContract)("token"),v=Object(p.useNamedContract)("snowflake"),g=Object(p.useNamedContract)("uniswapWidget"),k=Object(c.useState)(""),O=Object(i.a)(k,2),x=O[0],j=O[1],w=Object(c.useState)(""),E=Object(i.a)(w,2),D=E[0],C=E[1],N=Object(c.useState)(""),S=Object(i.a)(N,2),T=S[0],H=S[1],B=Object(c.useState)(""),P=Object(i.a)(B,2),R=P[0],M=P[1],A=Object(c.useState)(""),W=Object(i.a)(A,2),z=W[0],_=W[1],I=Object(c.useState)(""),Y=Object(i.a)(I,2),F=Y[0],q=Y[1],J=Object(c.useState)(""),L=Object(i.a)(J,2),G=L[0],K=L[1];function Q(e){return U.apply(this,arguments)}function U(){return(U=Object(o.a)(n.a.mark(function e(a){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.methods.swapAndDepositOutput(a,u,t).call({from:r.address,value:h}).then(function(e){var t=r.library.utils.toBN(a),n=r.library.utils.toBN(e);return[t.div(n),n]}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}Object(c.useEffect)(function(){Q(Object(d.fromDecimal)("1",18)).then(function(e){return j(e[0].toString())})},[]),Object(c.useEffect)(function(){""!==D&&""!==x&&Q(Object(d.fromDecimal)(D,18)).then(function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];_(a.toString());var o=r.library.utils.fromWei(n.toString(),"ether");H(o);var c=100-a.mul(r.library.utils.toBN(1e5)).div(r.library.utils.toBN(x)).toNumber()/1e3;M(c)}).catch(function(e){console.error(e)})},[D,x]);var V=["Rate (HYDRO): ".concat(z),"Rate (ETH): ".concat(1/Number(z)),"ETH required: ".concat(T),Math.round(100*R)/100>.01?"Slippage: ".concat(Math.round(100*R)/100,"%"):""].filter(function(e){return""!==e}).join(" | ");return s.a.createElement("div",{style:{width:"100%"}},s.a.createElement(l.z,{variant:"h6",gutterBottom:!0,color:"textPrimary",className:a.marginTop},"Buy HYDRO with ETH and deposit it into your Snowflake."),s.a.createElement(l.x,{label:"Amount",type:"number",helperText:""===z?"Number of Hydro tokens to buy.":V,margin:"normal",value:D,onChange:function(e){return C(e.target.value)},fullWidth:!0}),s.a.createElement(m.default,{readyText:D<=1e4?"Buy and Deposit Hydro":"Maxiumum Request: 10,000 HYDRO",method:function(){return g.methods.swapAndDepositOutput(Object(d.fromDecimal)(D,18),u,t)},transactionOptions:{value:r.library.utils.toBN(Object(d.fromDecimal)(T,18)).mul(r.library.utils.toBN(100)).div(r.library.utils.toBN(97))},onConfirmation:r.forceAccountReRender,disabled:D>1e4}),s.a.createElement(l.z,{variant:"h6",gutterBottom:!0,color:"textPrimary",className:a.marginTop},"Deposit HYDRO from your current account into your Snowflake, which you can use to pay for dApp services."),s.a.createElement(l.x,{label:"Amount",type:"number",helperText:"Number of Hydro tokens to deposit.",margin:"normal",value:F,onChange:function(e){return q(e.target.value)},fullWidth:!0}),s.a.createElement(m.default,{readyText:"Deposit Hydro",method:function(){return y.methods.approveAndCall(v._address,Object(d.fromDecimal)(F,18),"0x00")},onConfirmation:r.forceAccountReRender}),s.a.createElement(l.z,{variant:"h6",gutterBottom:!0,color:"textPrimary",className:a.marginTop},"Withdraw HYDRO from your Snowflake into your current account."),s.a.createElement(l.x,{label:"Amount",type:"number",helperText:"Number of Hydro tokens to withdraw.",margin:"normal",value:G,onChange:function(e){return K(e.target.value)},fullWidth:!0}),s.a.createElement(l.a,{onClick:function(){return K(Object(d.toDecimal)(b,18))}},"Max"),s.a.createElement(m.default,{readyText:"Withdraw Hydro",method:function(){return v.methods.withdrawSnowflakeBalance(r.account,Object(d.fromDecimal)(G,18))},onConfirmation:r.forceAccountReRender}))})},286:function(e,t,a){"use strict";a.r(t);var r=a(14),n=a(0),o=a.n(n),i=a(5872),c=a(5873),s=a.n(c),l=a(32),u=a(9),d=a(67),f=Object(l.withTheme)()(function(e){var t=e.theme;return o.a.createElement(s.a,{size:t.typography.button.fontSize})});function m(e){var t=e.show,a=e.method,n=e.readyText,c=e.classes,s=e.onTransactionHash,l=e.onConfirmation,m=e.transactionOptions,p=e.disabled,h=Object(u.useWeb3Context)(),b=Object(u.useTransactionManager)(a,{handlers:{transactionHash:s,receipt:l},transactionOptions:m}),y=Object(r.a)(b,4),v=y[0],g=y[1],k=y[2],O=y[3];switch(v){case"ready":return o.a.createElement(i.a,{style:t?void 0:{display:"none"},variant:"contained",onClick:k,className:c.ready,disabled:p},n);case"sending":return o.a.createElement(i.a,{style:t?void 0:{display:"none"},variant:"contained",disabled:!0,className:c.sendingPending},o.a.createElement(f,null));case"pending":return o.a.createElement(i.a,{style:t?void 0:{display:"none"},variant:"contained",className:c.sendingPending,component:"a",href:Object(d.getEtherscanLink)(h.networkId,"transaction",g.transactionHash),target:"_blank"},o.a.createElement("span",null,"Pending Confirmation ",o.a.createElement(f,null)));case"success":return o.a.createElement(i.a,{style:t?void 0:{display:"none"},variant:"contained",className:c.success,component:"a",href:Object(d.getEtherscanLink)(h.networkId,"transaction",g.transactionHash),target:"_blank"},o.a.createElement("span",null,"Success!"));case"error":return o.a.createElement(i.a,{style:t?void 0:{display:"none"},variant:"contained",onClick:O,className:c.error},o.a.createElement("span",null,"Error. Retry?"));default:throw Error("This should not happen\u2122.")}}m.defaultProps={show:!0,onTransactionHash:function(){},onConfirmation:function(){}},t.default=Object(l.withStyles)(function(e){return{ready:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,"&:hover":{backgroundColor:e.palette.primary.dark}},sendingPending:{backgroundColor:e.palette.grey[300],color:e.palette.getContrastText(e.palette.grey[300]),"&:hover":{backgroundColor:e.palette.grey[500]}},error:{backgroundColor:e.palette.error.main,color:e.palette.error.contrastText,"&:hover":{backgroundColor:e.palette.error.dark}},success:{backgroundColor:e.palette.success.main,color:e.palette.success.contrastText,"&:hover":{backgroundColor:e.palette.success.dark}}}})(m)},5873:function(e,t,a){"use strict";var r=a(3);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=r(a(5874))},5874:function(e,t,a){"use strict";var r=a(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=r(a(12)),o=r(a(28)),i=r(a(20)),c=r(a(0)),s=(r(a(1)),r(a(38))),l=r(a(56)),u=a(80),d=(r(a(287)),44);function f(e){var t,a,r;return t=e,a=0,r=1,e=(Math.min(Math.max(a,t),r)-a)/(r-a),e=(e-=1)*e*e+1}var m=function(e){return{root:{display:"inline-block",lineHeight:1},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"mui-progress-circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"mui-progress-circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes mui-progress-circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes mui-progress-circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-120px"}},circleDisableShrink:{animation:"none"}}};function p(e){var t,a,r,l=e.classes,m=e.className,p=e.color,h=e.disableShrink,b=e.size,y=e.style,v=e.thickness,g=e.value,k=e.variant,O=(0,i.default)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),x={},j={},w={};if("determinate"===k||"static"===k){var E=2*Math.PI*((d-v)/2);x.strokeDasharray=E.toFixed(3),w["aria-valuenow"]=Math.round(g),"static"===k?(x.strokeDashoffset="".concat(((100-g)/100*E).toFixed(3),"px"),j.transform="rotate(-90deg)"):(x.strokeDashoffset="".concat((r=(100-g)/100,r*r*E).toFixed(3),"px"),j.transform="rotate(".concat((270*f(g/70)).toFixed(3),"deg)"))}return c.default.createElement("div",(0,n.default)({className:(0,s.default)(l.root,(t={},(0,o.default)(t,l["color".concat((0,u.capitalize)(p))],"inherit"!==p),(0,o.default)(t,l.indeterminate,"indeterminate"===k),(0,o.default)(t,l.static,"static"===k),t),m),style:(0,n.default)({width:b,height:b},j,y),role:"progressbar"},w,O),c.default.createElement("svg",{className:l.svg,viewBox:"".concat(d/2," ").concat(d/2," ").concat(d," ").concat(d)},c.default.createElement("circle",{className:(0,s.default)(l.circle,(a={},(0,o.default)(a,l.circleIndeterminate,"indeterminate"===k),(0,o.default)(a,l.circleStatic,"static"===k),(0,o.default)(a,l.circleDisableShrink,h),a)),style:x,cx:d,cy:d,r:(d-v)/2,fill:"none",strokeWidth:v})))}t.styles=m,p.propTypes={},p.defaultProps={color:"primary",disableShrink:!1,size:40,thickness:3.6,value:0,variant:"indeterminate"};var h=(0,l.default)(m,{name:"MuiCircularProgress",flip:!1})(p);t.default=h}}]);
//# sourceMappingURL=40.d4f994c5.chunk.js.map