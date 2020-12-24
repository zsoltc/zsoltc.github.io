(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{196:function(t,n,r){"use strict";r(33),r(76),r(34);function e(a,b,t){return(1-t)*a+t*b}n.a={lerp:e,cubic:function(a,b,t,n,r){return b+.5*r*(t-a+r*(2*a-5*b+4*t-n+r*(3*(b-t)+n-a)))},smoothstart:function(t){return t*t},smoothstop:function(t){var n=1-t;return 1-n*n},smoothstep1:function(t){return t*t*(-2*t+3)},smoothstep2:function(t){return t*t*t*(t*(6*t-15)+10)},bezier:function(a,b,t,n,r){var e=1-r;return e*e*e*a+3*r*e*e*b+3*r*r*e*t+r*r*r*n},sigm:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return 1/(1+Math.pow(Math.E,-t*n))},start:function(t){var n=t.from,r=t.to,o=t.duration,c=t.onUpdate,f=t.onComplete,l=t.easeFunc,h=0;return l=l||function(t){return t},function(dt){if(!(h>=o)){var progress=(h+=dt)/o;if(progress>=1)c(r),f();else{var t={};Object.keys(n).forEach((function(o){t[o]=e(n[o],r[o],l(progress))})),c(t)}}}}}},197:function(t,n,r){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}r.d(n,"a",(function(){return e}))},198:function(t,n,r){"use strict";function e(t,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}r.d(n,"a",(function(){return o}))},200:function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));r(203);var e=Math.random;function o(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e()*(b-a)+a}},203:function(t,n,r){var e=r(2),o=r(5),c=Math.imul;e({target:"Math",stat:!0,forced:o((function(){return-5!=c(4294967295,5)||2!=c.length}))},{imul:function(t,n){var r=+t,e=+n,o=65535&r,c=65535&e;return 0|o*c+((65535&r>>>16)*c+o*(65535&e>>>16)<<16>>>0)}})},211:function(t,n,r){"use strict";var e=r(197),o=r(198),c=r(196),f=r(200),l=Math.PI,h=Math.cos,v=Math.sin,d=Math.floor,y=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]},m=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:128,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:128,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:128;Object(e.a)(this,t),Object.assign(this,{XMAX:n,YMAX:r,ZMAX:o}),this.gridPoints=new Array(n);for(var i=0;i<n;i++){this.gridPoints[i]=new Array(r);for(var c=0;c<r;c++){this.gridPoints[i][c]=new Array(o);for(var d=0;d<o;d++){var y=2*Object(f.a)()*l,m=2*Object(f.a)()*l;this.gridPoints[i][c][d]=[v(y)*h(m),v(y)*v(m),h(y)]}}}}return Object(o.a)(t,[{key:"copySlice",value:function(t,n){for(var r=this.XMAX,e=this.YMAX,o=0;o<r;o++)for(var c=0;c<e;c++)this.gridPoints[o][c][n]=this.gridPoints[o][c][t]}},{key:"getVal",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,e=this.XMAX,o=this.YMAX,f=this.ZMAX,l=t%1,h=n%1,v=r%1,m=((t=d(t)%e)+1)%e,w=((n=d(n)%o)+1)%o,M=((r=d(r)%f)+1)%f,A=this.gridPoints[t][n][r],P=y(A,[l,h,v]),br=this.gridPoints[m][n][r],j=y(br,[l-1,h,v]),O=this.gridPoints[t][w][r],S=y(O,[l,h-1,v]),tr=this.gridPoints[m][w][r],X=y(tr,[l-1,h-1,v]),x=c.a.lerp(P,j,c.a.smoothstep2(l)),k=c.a.lerp(S,X,c.a.smoothstep2(l)),V=c.a.lerp(x,k,c.a.smoothstep2(h));A=this.gridPoints[t][n][M],P=y(A,[l,h,v-1]),br=this.gridPoints[m][n][M],j=y(br,[l-1,h,v-1]),O=this.gridPoints[t][w][M],S=y(O,[l,h-1,v-1]),tr=this.gridPoints[m][w][M],X=y(tr,[l-1,h-1,v-1]),x=c.a.lerp(P,j,c.a.smoothstep2(l)),k=c.a.lerp(S,X,c.a.smoothstep2(l));var E=c.a.lerp(x,k,c.a.smoothstep2(h));return c.a.lerp(V,E,c.a.smoothstep2(v))}},{key:"getValOctaves",value:function(t,n,r,e){for(var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,c=0,i=0;i<t.length;i++){var f=t[i];c+=this.getVal(r*f,e*f,o*f)*Math.pow(n,i)}return c}}]),t}();n.a=m},279:function(t,n,r){"use strict";r.r(n);r(39),r(56),r(57),r(62),r(33),r(58),r(51),r(29),r(15),r(40),r(52),r(54),r(35),r(196);var e=r(200),o=r(211);function c(t,n){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return f(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=t[i];return r}var l=Math.min,h=(Math.max,Math.cos,Math.sin),v=[],d={data:function(){return{running:!1,seeds:[],startTimeout:null}},methods:{start:function(){var t=new o.a,n=.001,r=this.$refs.canvas.getContext("2d");setInterval((function(){for(var o=4*(.5*h(Date.now()/1e3)+.5),i=0;i<100;i++)v.push({x:Object(e.a)(0,r.canvas.width),y:Object(e.a)(0,r.canvas.height),age:0});r.fillStyle="rgba(0, 0, 0, 0.2)",r.fillRect(0,0,r.canvas.width,r.canvas.height),r.fillStyle="#ffffff";var f,l=c(v);try{var d=function(){var p=f.value;p.age+=.025;var e=p.x/r.canvas.width,c=p.y/r.canvas.height,l=0,h=0;[2,4,8,16].forEach((function(r){var f=r*e+10,v=r*c+10;l+=(t.getVal(f,v+n,o)-t.getVal(f,v-n,o))/(2*n)/r,h+=-(t.getVal(f+n,v,o)-t.getVal(f-n,v,o))/(2*n)/r})),p.x+=8*l,p.y+=8*h;var v=1-Math.pow(2*(p.age-.5),2);r.fillStyle="rgba(255, 255, 255, ".concat(v,")"),r.fillRect(p.x-2,p.y-2,4,4)};for(l.s();!(f=l.n()).done;)d()}catch(t){l.e(t)}finally{l.f()}v=v.filter((function(p){return p.age<1}))}),25)}},mounted:function(){document.body.style.overflowY="hidden";var t=this.$refs.canvas.getContext("2d");t.canvas.width=t.canvas.height=l(window.innerWidth,window.innerHeight-document.querySelector("nav").offsetHeight)},destroyed:function(){document.body.style.overflowY=""}},y=r(27),component=Object(y.a)(d,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("canvas",{ref:"canvas",on:{click:function(n){return t.start(n)}}})])}),[],!1,null,"ea98b384",null);n.default=component.exports}}]);