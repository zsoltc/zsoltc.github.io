(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{198:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},199:function(t,n,e){"use strict";function r(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function o(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}e.d(n,"a",(function(){return o}))},200:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"b",(function(){return c})),e.d(n,"d",(function(){return f}));e(33),e(77),e(34);function r(a,b,t){return(1-t)*a+t*b}function o(t){var n=1-t;return 1-n*n}function c(t){return t*t*t*(t*(6*t-15)+10)}function f(t){var n=t.from,e=t.to,o=t.duration,c=t.onUpdate,f=t.onComplete,l=t.easeFunc,h=0;return l=l||function(t){return t},function(dt){if(!(h>=o)){var progress=(h+=dt)/o;if(progress>=1)c(e),f();else if("number"==typeof n)c(r(n,e,l(progress)));else{var t={};Object.keys(n).forEach((function(o){t[o]=r(n[o],e[o],l(progress))})),c(t)}}}}},203:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));e(207);var r=Math.random;function o(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r()*(b-a)+a}},207:function(t,n,e){var r=e(2),o=e(5),c=Math.imul;r({target:"Math",stat:!0,forced:o((function(){return-5!=c(4294967295,5)||2!=c.length}))},{imul:function(t,n){var e=+t,r=+n,o=65535&e,c=65535&r;return 0|o*c+((65535&e>>>16)*c+o*(65535&r>>>16)<<16>>>0)}})},208:function(t,n,e){"use strict";var r=e(198),o=e(199),c=e(200),f=e(203),l=Math.PI,h=Math.cos,v=Math.sin,d=Math.floor,y=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]},w=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:128,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:128,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:128;Object(r.a)(this,t),Object.assign(this,{XMAX:n,YMAX:e,ZMAX:o}),this.gridPoints=new Array(n);for(var i=0;i<n;i++){this.gridPoints[i]=new Array(e);for(var c=0;c<e;c++){this.gridPoints[i][c]=new Array(o);for(var d=0;d<o;d++){var y=2*Object(f.a)()*l,w=2*Object(f.a)()*l;this.gridPoints[i][c][d]=[v(y)*h(w),v(y)*v(w),h(y)]}}}}return Object(o.a)(t,[{key:"copySlice",value:function(t,n){for(var e=this.XMAX,r=this.YMAX,o=0;o<e;o++)for(var c=0;c<r;c++)this.gridPoints[o][c][n]=this.gridPoints[o][c][t]}},{key:"getVal",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=this.XMAX,o=this.YMAX,f=this.ZMAX,l=t%1,h=n%1,v=e%1,w=((t=d(t)%r)+1)%r,m=((n=d(n)%o)+1)%o,j=((e=d(e)%f)+1)%f,O=this.gridPoints[t][n][e],M=y(O,[l,h,v]),br=this.gridPoints[w][n][e],A=y(br,[l-1,h,v]),P=this.gridPoints[t][m][e],S=y(P,[l,h-1,v]),tr=this.gridPoints[w][m][e],X=y(tr,[l-1,h-1,v]),x=Object(c.a)(M,A,Object(c.b)(l)),k=Object(c.a)(S,X,Object(c.b)(l)),V=Object(c.a)(x,k,Object(c.b)(h));O=this.gridPoints[t][n][j],M=y(O,[l,h,v-1]),br=this.gridPoints[w][n][j],A=y(br,[l-1,h,v-1]),P=this.gridPoints[t][m][j],S=y(P,[l,h-1,v-1]),tr=this.gridPoints[w][m][j],X=y(tr,[l-1,h-1,v-1]),x=Object(c.a)(M,A,Object(c.b)(l)),k=Object(c.a)(S,X,Object(c.b)(l));var C=Object(c.a)(x,k,Object(c.b)(h));return Object(c.a)(V,C,Object(c.b)(v))}},{key:"fbm",value:function(t,n,e,r){for(var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,c=0,i=0;i<t;i++)c+=this.getVal(e*Math.pow(2,i),r*Math.pow(2,i),o*Math.pow(2,i))*Math.pow(n,i+1);return c}}]),t}();n.a=w},293:function(t,n,e){"use strict";e.r(n);e(39),e(56),e(57),e(62),e(33),e(58),e(50),e(29),e(15),e(40),e(53),e(54),e(38),e(200);var r=e(203),o=e(208);function c(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return f(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==e.return||e.return()}finally{if(l)throw o}}}}function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}var l=Math.min,h=(Math.max,Math.cos,Math.sin),v=[],d={data:function(){return{running:!1,seeds:[],startTimeout:null}},methods:{start:function(){var t=new o.a,n=.001,e=this.$refs.canvas.getContext("2d");setInterval((function(){for(var o=4*(.5*h(Date.now()/1e3)+.5),i=0;i<100;i++)v.push({x:Object(r.a)(0,e.canvas.width),y:Object(r.a)(0,e.canvas.height),age:0});e.fillStyle="rgba(0, 0, 0, 0.2)",e.fillRect(0,0,e.canvas.width,e.canvas.height),e.fillStyle="#ffffff";var f,l=c(v);try{var d=function(){var p=f.value;p.age+=.025;var r=p.x/e.canvas.width,c=p.y/e.canvas.height,l=0,h=0;[2,4,8,16].forEach((function(e){var f=e*r+10,v=e*c+10;l+=(t.getVal(f,v+n,o)-t.getVal(f,v-n,o))/(2*n)/e,h+=-(t.getVal(f+n,v,o)-t.getVal(f-n,v,o))/(2*n)/e})),p.x+=8*l,p.y+=8*h;var v=1-Math.pow(2*(p.age-.5),2);e.fillStyle="rgba(255, 255, 255, ".concat(v,")"),e.fillRect(p.x-2,p.y-2,4,4)};for(l.s();!(f=l.n()).done;)d()}catch(t){l.e(t)}finally{l.f()}v=v.filter((function(p){return p.age<1}))}),25)}},mounted:function(){document.body.style.overflowY="hidden";var t=this.$refs.canvas.getContext("2d");t.canvas.width=t.canvas.height=l(window.innerWidth,window.innerHeight-document.querySelector("nav").offsetHeight)},destroyed:function(){document.body.style.overflowY=""}},y=e(27),component=Object(y.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("canvas",{ref:"canvas",on:{click:function(n){return t.start(n)}}})])}),[],!1,null,"ea98b384",null);n.default=component.exports}}]);