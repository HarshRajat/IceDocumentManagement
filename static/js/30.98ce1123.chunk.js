(window.webpackJsonp=window.webpackJsonp||[]).push([[30,47],{168:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(1),i=r.n(o),s=r(23),c=r.n(s),l=r(60),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var d=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return r=n=u(this,e.call.apply(e,[this].concat(o))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!d(e)){e.preventDefault();var t=n.context.router.history,r=n.props,a=r.replace,o=r.to;a?t.replace(o):t.push(o)}},u(n,r)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),r=e.innerRef,n=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["replace","to","innerRef"]);c()(this.context.router,"You should not use <Link> outside a <Router>"),c()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,i="string"===typeof t?Object(l.b)(t,null,null,o.location):t,s=o.createHref(i);return a.a.createElement("a",f({},n,{onClick:this.handleClick,href:s,ref:r}))},t}(a.a.Component);m.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},m.defaultProps={replace:!1},m.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=m},174:function(e,t,r){"use strict";r.r(t);var n=r(169),a=r(14),o=r(0),i=r.n(o),s=r(6103),c=r(32),l=r(67),f=r(9),u=r(6092),d=r(168),m=r(5872),g=r(5943),p=r(5905),h=r.n(p),y=r(5906),b=r.n(y),v=r(5907),E=r.n(v),k=r(5908),C=r.n(k),w=r(289),A=r.n(w),x=r(314),O=r.n(x),j=r(21),S=r(286),T=r(304),P=r(77);function I(e){var t=e.ein,r=e.setCurrentClaim,n=Object(f.useWeb3Context)(),s=Object(j.useNamedContract)("1484"),c=Object(o.useState)(""),l=Object(a.a)(c,2),u=l[0],d=l[1],p=Object(o.useState)(void 0),y=Object(a.a)(p,2),v=y[0],k=y[1];Object(f.useAccountEffect)(function(){""!==u?Object(g.isValidChecksumAddress)(u)?s.methods.hasIdentity(u).call().then(function(e){k(e?"Address is already associated with an Identity.":null)}):k("Invalid address."):k(void 0)},[u]);var w=Object(o.useState)(0),A=Object(a.a)(w,2),x=A[0],O=A[1];var S=Object(o.useRef)(Math.round(new Date/1e3)-120),P=null!==v?null:n.library.utils.soliditySha3("0x19","0x00",s._address,"I authorize adding this address to my Identity.",t,u,S.current);return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.z,{variant:"h4",gutterBottom:!0,color:"textPrimary"},"Link a new address to your EIN."),i.a.createElement(h.a,{activeStep:x,orientation:"vertical"},i.a.createElement(b.a,{key:0},i.a.createElement(E.a,null,0===x?"Address to Add":"Address to Add: ".concat(u)),i.a.createElement(C.a,null,"Enter the address you wish to claim under your current identity. You need to be able to transact from this address.",i.a.createElement(m.x,{key:"Address to Add",label:"Address to Add",helperText:v||"You will need to transact from this address.",error:!!v,required:!0,margin:"normal",value:u,onChange:function(e){return d(e.target.value)},fullWidth:!0}),i.a.createElement(m.a,{variant:"contained",disabled:""===u||null!==v,onClick:function(){O(x+1)}},"Next"))),i.a.createElement(b.a,{key:1},i.a.createElement(E.a,null,"Give Permission"),i.a.createElement(C.a,null,"The next step is for you to give us permission to link this address to your Identity. This requires your signature of a hashed permission string.",i.a.createElement("br",null),i.a.createElement(m.a,{variant:"contained",style:{marginRight:"15px"},onClick:function(){O(x-1)}},"Back"),i.a.createElement(T.default,{readyText:"Sign",message:P,onSuccess:function(e){r({targetAddress:u,targetIsApproving:0,signingAddress:n.account,signature:e,timestamp:S.current})}})))))}var L=Object(c.withStyles)(function(e){return{snackbar:{maxWidth:"45%"},warning:{backgroundColor:e.palette.error.main},rightIcon:{marginLeft:e.spacing.unit},white:{color:"white"}}})(function(e){var t=e.classes,r=e.location,n=e.claim,a=e.deleteCurrentClaim,o=e.setRedirect,s=Object(f.useWeb3Context)(),c=Object(j.useNamedContract)("1484"),u=Object(j.useEIN)(n.targetIsApproving?n.targetAddress:n.signingAddress);return u?s.account.toLowerCase()===n.targetAddress.toLowerCase()?i.a.createElement(i.a.Fragment,null,i.a.createElement(m.z,{gutterBottom:!0,color:"textPrimary"},"Finalize the link between this address (",i.a.createElement("a",{href:Object(l.getEtherscanLink)(s.networkId,"address",s.account),className:t.link,target:"_blank",rel:"noopener noreferrer"},s.account),") and your EIN (",u,")."),i.a.createElement(S.default,{readyText:"Finalize",method:function(){return c.methods.addAssociatedAddress(n.targetIsApproving?n.targetAddress:n.signingAddress,n.targetIsApproving?n.signingAddress:n.targetAddress,n.signature.v,n.signature.r,n.signature.s,n.timestamp)},onConfirmation:function(){o(!0),a(),s.forceAccountReRender()}}),i.a.createElement(m.a,{onClick:a},"Delete Claim",i.a.createElement(A.a,{className:t.rightIcon}))):i.a.createElement(i.a.Fragment,null,i.a.createElement(m.z,{gutterBottom:!0,color:"textPrimary"},"Claim detected! Please switch to"," ",i.a.createElement("a",{href:Object(l.getEtherscanLink)(s.networkId,"address",n.targetAddress),className:t.link,target:"_blank",rel:"noopener noreferrer"},n.targetAddress)," ","to finalize your claim."),i.a.createElement(m.z,{gutterBottom:!0,color:"textPrimary"},"If that account is only available on another devices, you may finalize the claim by visiting this URL:"),i.a.createElement(P.default,{key:"copy",placement:"top",value:function(e){var t=e.targetAddress,n=e.targetIsApproving,a=e.signingAddress,o=e.signature,i=e.timestamp,s=o.v,c=o.r,l=o.s,f=Object(g.toRpcSig)(s,c,l);return[window.location.origin,"/IceDocumentManagement",r.pathname,"/".concat(t,"/").concat(Number(n),"/").concat(a,"/").concat(f,"/").concat(i)].join("")}(n)},i.a.createElement(m.a,null,"Copy Link",i.a.createElement(O.a,{className:t.rightIcon}))),i.a.createElement(m.z,{gutterBottom:!0,color:"textPrimary"},"You may also delete this claim if you no longer wish to link your address:"),i.a.createElement(m.a,{onClick:a},"Delete Claim",i.a.createElement(A.a,{className:t.rightIcon}))):null});t.default=Object(s.a)(function(e){var t=e.ein,r=e.location,s=e.history,c=Object(f.useWeb3Context)(),l=Object(j.useSessionStorageState)(null,"SnowflakeClaim|".concat(c.networkId)),p=Object(a.a)(l,3),h=p[0],y=p[1],b=p[2],v=Object(o.useState)(!1),E=Object(a.a)(v,2),k=E[0],C=E[1];return Object(o.useEffect)(function(){if(r.state)try{if(!Object(g.isValidChecksumAddress)(r.state.targetAddress))throw Error("Invalid target address.");if(![0,1].includes(Number(r.state.targetIsApproving)))throw Error("Invalid targetIsApproving flag.");if(!Object(g.isValidChecksumAddress)(r.state.signingAddress))throw Error("Invalid signing address.");if(!Number.isInteger(Number(r.state.timestamp)))throw Error("Invalid timestamp.");var e=Math.round(Date.now()/1e3);if(Number(r.state.timestamp)<e-82080)throw Error("Timestamp too old.");if(Number(r.state.timestamp)>e)throw Error("Timestamp in the future.");y({targetAddress:r.state.targetAddress,targetIsApproving:!!Number(r.state.targetIsApproving),signingAddress:r.state.signingAddress,signature:Object(g.fromRpcSig)(r.state.signature),timestamp:Number(r.state.timestamp)})}catch(t){console.error("Error parsing arguments passed in the URL.",t)}finally{s.replace(Object(n.a)({},r,{state:void 0}))}},[]),k?i.a.createElement(u.a,{to:"/"}):i.a.createElement(i.a.Fragment,null,!t&&!h&&i.a.createElement(i.a.Fragment,null,i.a.createElement(m.z,{gutterBottom:!0,color:"textPrimary"},"If you are trying to link your current account to an existing identity, you need a signature! Visit your existing Provider to get one."),i.a.createElement(m.a,{component:d.a,to:"/"},"Creating a new Identity?")),t&&!h&&i.a.createElement(I,{ein:t,setCurrentClaim:y,deleteCurrentClaim:b}),h&&i.a.createElement(L,{claim:h,location:r,deleteCurrentClaim:b,setRedirect:C}))})},286:function(e,t,r){"use strict";r.r(t);var n=r(14),a=r(0),o=r.n(a),i=r(5872),s=r(5873),c=r.n(s),l=r(32),f=r(9),u=r(67),d=Object(l.withTheme)()(function(e){var t=e.theme;return o.a.createElement(c.a,{size:t.typography.button.fontSize})});function m(e){var t=e.show,r=e.method,a=e.readyText,s=e.classes,c=e.onTransactionHash,l=e.onConfirmation,m=e.transactionOptions,g=e.disabled,p=Object(f.useWeb3Context)(),h=Object(f.useTransactionManager)(r,{handlers:{transactionHash:c,receipt:l},transactionOptions:m}),y=Object(n.a)(h,4),b=y[0],v=y[1],E=y[2],k=y[3];switch(b){case"ready":return o.a.createElement(i.a,{style:t?void 0:{display:"none"},variant:"contained",onClick:E,className:s.ready,disabled:g},a);case"sending":return o.a.createElement(i.a,{style:t?void 0:{display:"none"},variant:"contained",disabled:!0,className:s.sendingPending},o.a.createElement(d,null));case"pending":return o.a.createElement(i.a,{style:t?void 0:{display:"none"},variant:"contained",className:s.sendingPending,component:"a",href:Object(u.getEtherscanLink)(p.networkId,"transaction",v.transactionHash),target:"_blank"},o.a.createElement("span",null,"Pending Confirmation ",o.a.createElement(d,null)));case"success":return o.a.createElement(i.a,{style:t?void 0:{display:"none"},variant:"contained",className:s.success,component:"a",href:Object(u.getEtherscanLink)(p.networkId,"transaction",v.transactionHash),target:"_blank"},o.a.createElement("span",null,"Success!"));case"error":return o.a.createElement(i.a,{style:t?void 0:{display:"none"},variant:"contained",onClick:k,className:s.error},o.a.createElement("span",null,"Error. Retry?"));default:throw Error("This should not happen\u2122.")}}m.defaultProps={show:!0,onTransactionHash:function(){},onConfirmation:function(){}},t.default=Object(l.withStyles)(function(e){return{ready:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,"&:hover":{backgroundColor:e.palette.primary.dark}},sendingPending:{backgroundColor:e.palette.grey[300],color:e.palette.getContrastText(e.palette.grey[300]),"&:hover":{backgroundColor:e.palette.grey[500]}},error:{backgroundColor:e.palette.error.main,color:e.palette.error.contrastText,"&:hover":{backgroundColor:e.palette.error.dark}},success:{backgroundColor:e.palette.success.main,color:e.palette.success.contrastText,"&:hover":{backgroundColor:e.palette.success.dark}}}})(m)},289:function(e,t,r){"use strict";var n=r(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)),o=(0,n(r(57)).default)(a.default.createElement(a.default.Fragment,null,a.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),a.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Delete");t.default=o},304:function(e,t,r){"use strict";r.r(t);var n=r(14),a=r(0),o=r.n(a),i=r(5872),s=r(5873),c=r.n(s),l=r(32),f=r(9),u=Object(l.withTheme)()(function(e){var t=e.theme;return o.a.createElement(c.a,{size:t.typography.button.fontSize})});function d(e){var t=e.show,r=e.message,a=e.readyText,s=e.classes,c=e.onSuccess,l=Object(f.useSignPersonalManager)(r,{handlers:{success:c}}),d=Object(n.a)(l,4),m=d[0],g=(d[1],d[2]),p=d[3];switch(m){case"ready":return o.a.createElement(i.a,{style:t?void 0:{display:"none"},variant:"contained",onClick:g,className:s.ready},a);case"pending":return o.a.createElement(i.a,{style:t?void 0:{display:"none"},variant:"contained",disabled:!0,className:s.sendingPending},o.a.createElement(u,null));case"success":return o.a.createElement(i.a,{style:t?void 0:{display:"none"},variant:"contained",className:s.success},o.a.createElement("span",null,"Success!"));case"error":return o.a.createElement(i.a,{style:t?void 0:{display:"none"},variant:"contained",onClick:p,className:s.error},o.a.createElement("span",null,"Error. Retry?"));default:throw Error("This should not happen\u2122.")}}d.defaultProps={show:!0,onSuccess:function(){}},t.default=Object(l.withStyles)(function(e){return{ready:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,"&:hover":{backgroundColor:e.palette.primary.dark}},sendingPending:{backgroundColor:e.palette.grey[300],color:e.palette.getContrastText(e.palette.grey[300]),"&:hover":{backgroundColor:e.palette.grey[500]}},error:{backgroundColor:e.palette.error.main,color:e.palette.error.contrastText,"&:hover":{backgroundColor:e.palette.error.dark}},success:{backgroundColor:e.palette.success.main,color:e.palette.success.contrastText,"&:hover":{backgroundColor:e.palette.success.dark}}}})(d)},314:function(e,t,r){"use strict";var n=r(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)),o=(0,n(r(57)).default)(a.default.createElement(a.default.Fragment,null,a.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),a.default.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"})),"FileCopy");t.default=o},5943:function(e,t,r){"use strict";var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=r(322),o=r(323),i=r(172),s=r(324),c=r(10),l=r(48),f=r(2).Buffer;Object.assign(t,r(173)),t.MAX_INTEGER=new c("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16),t.TWO_POW256=new c("10000000000000000000000000000000000000000000000000000000000000000",16),t.KECCAK256_NULL_S="c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",t.KECCAK256_NULL=f.from(t.KECCAK256_NULL_S,"hex"),t.KECCAK256_RLP_ARRAY_S="1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",t.KECCAK256_RLP_ARRAY=f.from(t.KECCAK256_RLP_ARRAY_S,"hex"),t.KECCAK256_RLP_S="56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",t.KECCAK256_RLP=f.from(t.KECCAK256_RLP_S,"hex"),t.BN=c,t.rlp=s,t.secp256k1=o,t.zeros=function(e){return f.allocUnsafe(e).fill(0)},t.zeroAddress=function(){var e=t.zeros(20);return t.bufferToHex(e)},t.setLengthLeft=t.setLength=function(e,r,n){var a=t.zeros(r);return e=t.toBuffer(e),n?e.length<r?(e.copy(a),a):e.slice(0,r):e.length<r?(e.copy(a,r-e.length),a):e.slice(-r)},t.setLengthRight=function(e,r){return t.setLength(e,r,!0)},t.unpad=t.stripZeros=function(e){for(var r=(e=t.stripHexPrefix(e))[0];e.length>0&&"0"===r.toString();)r=(e=e.slice(1))[0];return e},t.toBuffer=function(e){if(!f.isBuffer(e))if(Array.isArray(e))e=f.from(e);else if("string"===typeof e)e=t.isHexString(e)?f.from(t.padToEven(t.stripHexPrefix(e)),"hex"):f.from(e);else if("number"===typeof e)e=t.intToBuffer(e);else if(null===e||void 0===e)e=f.allocUnsafe(0);else if(c.isBN(e))e=e.toArrayLike(f);else{if(!e.toArray)throw new Error("invalid type");e=f.from(e.toArray())}return e},t.bufferToInt=function(e){return new c(t.toBuffer(e)).toNumber()},t.bufferToHex=function(e){return"0x"+(e=t.toBuffer(e)).toString("hex")},t.fromSigned=function(e){return new c(e).fromTwos(256)},t.toUnsigned=function(e){return f.from(e.toTwos(256).toArray())},t.keccak=function(e,r){return e=t.toBuffer(e),r||(r=256),a("keccak"+r).update(e).digest()},t.keccak256=function(e){return t.keccak(e)},t.sha256=function(e){return e=t.toBuffer(e),l("sha256").update(e).digest()},t.ripemd160=function(e,r){e=t.toBuffer(e);var n=l("rmd160").update(e).digest();return!0===r?t.setLength(n,32):n},t.rlphash=function(e){return t.keccak(s.encode(e))},t.isValidPrivate=function(e){return o.privateKeyVerify(e)},t.isValidPublic=function(e,t){return 64===e.length?o.publicKeyVerify(f.concat([f.from([4]),e])):!!t&&o.publicKeyVerify(e)},t.pubToAddress=t.publicToAddress=function(e,r){return e=t.toBuffer(e),r&&64!==e.length&&(e=o.publicKeyConvert(e,!1).slice(1)),i(64===e.length),t.keccak(e).slice(-20)};var u=t.privateToPublic=function(e){return e=t.toBuffer(e),o.publicKeyCreate(e,!1).slice(1)};function d(e,t){return t?e-(2*t+35):e-27}function m(e){return 0===e||1===e}t.importPublic=function(e){return 64!==(e=t.toBuffer(e)).length&&(e=o.publicKeyConvert(e,!1).slice(1)),e},t.ecsign=function(e,t,r){var n=o.sign(e,t),a={};return a.r=n.signature.slice(0,32),a.s=n.signature.slice(32,64),a.v=r?n.recovery+(2*r+35):n.recovery+27,a},t.hashPersonalMessage=function(e){var r=t.toBuffer("\x19Ethereum Signed Message:\n"+e.length.toString());return t.keccak(f.concat([r,e]))},t.ecrecover=function(e,r,n,a,i){var s=f.concat([t.setLength(n,32),t.setLength(a,32)],64),c=d(r,i);if(!m(c))throw new Error("Invalid signature v value");var l=o.recover(e,s,c);return o.publicKeyConvert(l,!1).slice(1)},t.toRpcSig=function(e,r,n,a){if(!m(d(e,a)))throw new Error("Invalid signature v value");return t.bufferToHex(f.concat([t.setLengthLeft(r,32),t.setLengthLeft(n,32),t.toBuffer(e)]))},t.fromRpcSig=function(e){if(65!==(e=t.toBuffer(e)).length)throw new Error("Invalid signature length");var r=e[64];return r<27&&(r+=27),{v:r,r:e.slice(0,32),s:e.slice(32,64)}},t.privateToAddress=function(e){return t.publicToAddress(u(e))},t.isValidAddress=function(e){return/^0x[0-9a-fA-F]{40}$/.test(e)},t.isZeroAddress=function(e){return t.zeroAddress()===t.addHexPrefix(e)},t.toChecksumAddress=function(e){e=t.stripHexPrefix(e).toLowerCase();for(var r=t.keccak(e).toString("hex"),n="0x",a=0;a<e.length;a++)parseInt(r[a],16)>=8?n+=e[a].toUpperCase():n+=e[a];return n},t.isValidChecksumAddress=function(e){return t.isValidAddress(e)&&t.toChecksumAddress(e)===e},t.generateAddress=function(e,r){return e=t.toBuffer(e),r=(r=new c(r)).isZero()?null:f.from(r.toArray()),t.rlphash([e,r]).slice(-20)},t.generateAddress2=function(e,r,n){return e=t.toBuffer(e),r=t.toBuffer(r),n=t.toBuffer(n),i(20===e.length),i(32===r.length),t.keccak256(f.concat([f.from("ff","hex"),e,r,t.keccak256(n)])).slice(-20)},t.isPrecompiled=function(e){var r=t.unpad(e);return 1===r.length&&r[0]>=1&&r[0]<=8},t.addHexPrefix=function(e){return"string"!==typeof e?e:t.isHexPrefixed(e)?e:"0x"+e},t.isValidSignature=function(e,t,r,n,a){var o=new c("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),i=new c("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",16);return 32===t.length&&32===r.length&&(!!m(d(e,a))&&(t=new c(t),r=new c(r),!(t.isZero()||t.gt(i)||r.isZero()||r.gt(i))&&(!1!==n||1!==new c(r).cmp(o))))},t.baToJSON=function(e){if(f.isBuffer(e))return"0x"+e.toString("hex");if(e instanceof Array){for(var r=[],n=0;n<e.length;n++)r.push(t.baToJSON(e[n]));return r}},t.defineProperties=function(e,r,a){if(e.raw=[],e._fields=[],e.toJSON=function(r){if(r){var n={};return e._fields.forEach(function(t){n[t]="0x"+e[t].toString("hex")}),n}return t.baToJSON(this.raw)},e.serialize=function(){return s.encode(e.raw)},r.forEach(function(r,n){function a(){return e.raw[n]}function o(a){"00"!==(a=t.toBuffer(a)).toString("hex")||r.allowZero||(a=f.allocUnsafe(0)),r.allowLess&&r.length?(a=t.stripZeros(a),i(r.length>=a.length,"The field "+r.name+" must not have more "+r.length+" bytes")):r.allowZero&&0===a.length||!r.length||i(r.length===a.length,"The field "+r.name+" must have byte length of "+r.length),e.raw[n]=a}e._fields.push(r.name),Object.defineProperty(e,r.name,{enumerable:!0,configurable:!0,get:a,set:o}),r.default&&(e[r.name]=r.default),r.alias&&Object.defineProperty(e,r.alias,{enumerable:!1,configurable:!0,set:o,get:a})}),a)if("string"===typeof a&&(a=f.from(t.stripHexPrefix(a),"hex")),f.isBuffer(a)&&(a=s.decode(a)),Array.isArray(a)){if(a.length>e._fields.length)throw new Error("wrong number of fields in data");a.forEach(function(r,n){e[e._fields[n]]=t.toBuffer(r)})}else{if("object"!==("undefined"===typeof a?"undefined":n(a)))throw new Error("invalid data");var o=Object.keys(a);r.forEach(function(t){-1!==o.indexOf(t.name)&&(e[t.name]=a[t.name]),-1!==o.indexOf(t.alias)&&(e[t.alias]=a[t.alias])})}}},6092:function(e,t,r){"use strict";var n=r(157);t.a=n.a}}]);
//# sourceMappingURL=30.98ce1123.chunk.js.map