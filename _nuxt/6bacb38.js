(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{198:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},199:function(t,n,e){"use strict";function r(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function o(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}e.d(n,"a",(function(){return o}))},200:function(t,n,e){"use strict";e(33),e(50),e(34);var r=e(198),o=e(199),c=function(){function t(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024;Object(r.a)(this,t);var canvas=document.createElement("canvas");canvas.width=e,canvas.height=1,this.ctx=canvas.getContext("2d");var o=this.ctx.createLinearGradient(0,0,e,0);n.forEach((function(t,i){o.addColorStop("string"==typeof t?i/(n.length-1):t.stop,"string"==typeof t?t:t.color)})),this.ctx.fillStyle=o,this.ctx.fillRect(0,0,e,1),this.data=this.ctx.getImageData(0,0,e,1).data}return Object(o.a)(t,[{key:"getColor",value:function(t){var n=4*Math.round(t*(this.ctx.canvas.width-1));return this.data.slice(n,n+4)}},{key:"getImage",value:function(){return this.ctx.canvas.toDataURL()}}]),t}();n.a=c},201:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"b",(function(){return c})),e.d(n,"d",(function(){return f}));e(33),e(77),e(34);function r(a,b,t){return(1-t)*a+t*b}function o(t){var n=1-t;return 1-n*n}function c(t){return t*t*t*(t*(6*t-15)+10)}function f(t){var n=t.from,e=t.to,o=t.duration,c=t.onUpdate,f=t.onComplete,h=t.easeFunc,d=0;return h=h||function(t){return t},function(dt){if(!(d>=o)){var progress=(d+=dt)/o;if(progress>=1)c(e),f();else if("number"==typeof n)c(r(n,e,h(progress)));else{var t={};Object.keys(n).forEach((function(o){t[o]=r(n[o],e[o],h(progress))})),c(t)}}}}},206:function(t,n,e){"use strict";var r=e(8),o=e(4),c=e(79),f=e(14),h=e(10),d=e(21),v=e(150),l=e(53),w=e(5),m=e(76),M=e(51).f,y=e(22).f,O=e(12).f,j=e(208).trim,A=o.Number,I=A.prototype,N="Number"==d(m(I)),E=function(t){var n,e,r,o,c,f,h,code,d=l(t,!1);if("string"==typeof d&&d.length>2)if(43===(n=(d=j(d)).charCodeAt(0))||45===n){if(88===(e=d.charCodeAt(2))||120===e)return NaN}else if(48===n){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(f=(c=d.slice(2)).length,h=0;h<f;h++)if((code=c.charCodeAt(h))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(c("Number",!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var x,P=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof P&&(N?w((function(){I.valueOf.call(e)})):"Number"!=d(e))?v(new A(E(n)),e,P):E(n)},X=r?M(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;X.length>k;k++)h(A,x=X[k])&&!h(P,x)&&O(P,x,y(A,x));P.prototype=I,I.constructor=P,f(o,"Number",P)}},207:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));e(210);var r=Math.random;function o(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r()*(b-a)+a}},208:function(t,n,e){var r=e(13),o="["+e(209)+"]",c=RegExp("^"+o+o+"*"),f=RegExp(o+o+"*$"),h=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(f,"")),e}};t.exports={start:h(1),end:h(2),trim:h(3)}},209:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},210:function(t,n,e){var r=e(2),o=e(5),c=Math.imul;r({target:"Math",stat:!0,forced:o((function(){return-5!=c(4294967295,5)||2!=c.length}))},{imul:function(t,n){var e=+t,r=+n,o=65535&e,c=65535&r;return 0|o*c+((65535&e>>>16)*c+o*(65535&r>>>16)<<16>>>0)}})},211:function(t,n,e){"use strict";var r=e(198),o=e(199),c=e(201),f=e(207),h=Math.PI,d=Math.cos,v=Math.sin,l=Math.floor,w=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]},m=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:128,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:128,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:128;Object(r.a)(this,t),Object.assign(this,{XMAX:n,YMAX:e,ZMAX:o}),this.gridPoints=new Array(n);for(var i=0;i<n;i++){this.gridPoints[i]=new Array(e);for(var c=0;c<e;c++){this.gridPoints[i][c]=new Array(o);for(var l=0;l<o;l++){var w=2*Object(f.a)()*h,m=2*Object(f.a)()*h;this.gridPoints[i][c][l]=[v(w)*d(m),v(w)*v(m),d(w)]}}}}return Object(o.a)(t,[{key:"copySlice",value:function(t,n){for(var e=this.XMAX,r=this.YMAX,o=0;o<e;o++)for(var c=0;c<r;c++)this.gridPoints[o][c][n]=this.gridPoints[o][c][t]}},{key:"getVal",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=this.XMAX,o=this.YMAX,f=this.ZMAX,h=t%1,d=n%1,v=e%1,m=((t=l(t)%r)+1)%r,M=((n=l(n)%o)+1)%o,y=((e=l(e)%f)+1)%f,O=this.gridPoints[t][n][e],j=w(O,[h,d,v]),br=this.gridPoints[m][n][e],A=w(br,[h-1,d,v]),I=this.gridPoints[t][M][e],N=w(I,[h,d-1,v]),tr=this.gridPoints[m][M][e],E=w(tr,[h-1,d-1,v]),x=Object(c.a)(j,A,Object(c.b)(h)),P=Object(c.a)(N,E,Object(c.b)(h)),X=Object(c.a)(x,P,Object(c.b)(d));O=this.gridPoints[t][n][y],j=w(O,[h,d,v-1]),br=this.gridPoints[m][n][y],A=w(br,[h-1,d,v-1]),I=this.gridPoints[t][M][y],N=w(I,[h,d-1,v-1]),tr=this.gridPoints[m][M][y],E=w(tr,[h-1,d-1,v-1]),x=Object(c.a)(j,A,Object(c.b)(h)),P=Object(c.a)(N,E,Object(c.b)(h));var k=Object(c.a)(x,P,Object(c.b)(d));return Object(c.a)(X,k,Object(c.b)(v))}},{key:"fbm",value:function(t,n,e,r){for(var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,c=0,i=0;i<t;i++)c+=this.getVal(e*Math.pow(2,i),r*Math.pow(2,i),o*Math.pow(2,i))*Math.pow(n,i+1);return c}}]),t}();n.a=m},219:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));e(206);var r=e(48),o=e(200);function c(t,n){for(var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new o.a(["#000000","#ffffff"]),f=n.getImageData(0,0,n.canvas.width,n.canvas.height),h=2/(n.canvas.width-1),d=new Array(n.canvas.height*n.canvas.width),v=Number.MAX_VALUE,l=Number.MIN_VALUE,w=0;w<n.canvas.height;w++)for(var m=1-w*h,col=0;col<n.canvas.width;col++){var M=col*h-1,y=t(M,m);v=Math.min(v,y),l=Math.max(l,y),d[w*n.canvas.width+col]=y}for(var i=0;i<d.length;i++){var O=e?(d[i]-v)/(l-v):d[i],j=c.getColor(O),A=Object(r.a)(j,4),I=A[0],g=A[1],b=A[2],a=A[3],base=4*i;f.data[base+0]=I,f.data[base+1]=g,f.data[base+2]=b,f.data[base+3]=a}n.putImageData(f,0,0)}},301:function(t,n,e){"use strict";e.r(n);e(38),e(201);var p,r=e(200),o=e(219),c=e(211),f=Math.min,h=Math.max,d=Math.abs,v={data:function(){return{running:!1,seeds:[],startTimeout:null}},methods:{draw:function(){var t=this,n=new r.a([{color:"#000000",stop:0},{color:"#c50106",stop:.6},{color:"#f5f106",stop:.8},{color:"#ffffff",stop:.9}]);setInterval((function(){var e=Date.now()/1e3%4;Object(o.a)((function(t,n){var r=.5*t+.5,o=.5*n+.5,c=16*p.fbm(4,.5,r,o,e),v=h(0,1-1.5*t*t-1.5*n*n+.05*c),l=f(1-t*t,.5);return v=1-4*d(n+l*p.fbm(4,.5,r,o,2*e)),v=Math.pow(h(0,v),4)}),t.$refs.canvas.getContext("2d"),!1,n)}),100)}},mounted:function(){p=new c.a,document.body.style.overflowY="hidden";var t=this.$refs.canvas.getContext("2d");t.canvas.width=t.canvas.height=f(window.innerWidth,window.innerHeight-document.querySelector("nav").offsetHeight),t.canvas.width=t.canvas.height=200,t.fillStyle="#000000",t.fillRect(0,0,t.canvas.width,t.canvas.height)},destroyed:function(){document.body.style.overflowY=""}},l=e(26),component=Object(l.a)(v,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("canvas",{ref:"canvas",on:{click:function(n){return t.draw(n)}}})])}),[],!1,null,"c73d3200",null);n.default=component.exports}}]);