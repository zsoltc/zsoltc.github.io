(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{196:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},197:function(t,e,n){"use strict";function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},199:function(t,e,n){"use strict";n(32),n(48),n(33);var r=n(196),o=n(197),h=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024;Object(r.a)(this,t);var canvas=document.createElement("canvas");canvas.width=n,canvas.height=1,this.ctx=canvas.getContext("2d");var o=this.ctx.createLinearGradient(0,0,n,0);e.forEach((function(t,i){o.addColorStop("string"==typeof t?i/(e.length-1):t.stop,"string"==typeof t?t:t.color)})),this.ctx.fillStyle=o,this.ctx.fillRect(0,0,n,1),this.data=this.ctx.getImageData(0,0,n,1).data}return Object(o.a)(t,[{key:"getColor",value:function(t){var e=4*Math.round(t*(this.ctx.canvas.width-1));return this.data.slice(e,e+4)}},{key:"getImage",value:function(){return this.ctx.canvas.toDataURL()}}]),t}();e.a=h},211:function(t,e,n){"use strict";var r=n(18),o=n(105),h=n(11);t.exports=function(t){for(var e=r(this),n=h(e.length),c=arguments.length,f=o(c>1?arguments[1]:void 0,n),l=c>2?arguments[2]:void 0,d=void 0===l?n:o(l,n);d>f;)e[f++]=t;return e}},247:function(t,e,n){var r=n(2),o=n(211),h=n(109);r({target:"Array",proto:!0},{fill:o}),h("fill")},344:function(t,e,n){"use strict";n.r(e);n(37),n(56),n(57),n(247),n(50),n(48),n(38),n(17),n(39),n(49),n(54),n(51);var r,o,h,c=n(42),f=n(196),l=n(197),d=n(199);function v(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,h=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return h=t.done,t},e:function(t){c=!0,o=t},f:function(){try{h||null==n.return||n.return()}finally{if(c)throw o}}}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var m={data:function(){return{running:!1,seeds:[],startTimeout:null}},methods:{placeSeed:function(t){var e=this;if(!this.running){var n=this.$refs.canvas.getContext("2d");n.beginPath(),n.fillStyle="#ffffff",n.arc(t.offsetX/parseInt(n.canvas.style.width)*parseInt(n.canvas.width),t.offsetY/parseInt(n.canvas.style.height)*parseInt(n.canvas.height),2,0,2*Math.PI),n.fill(),this.seeds.push({x:t.offsetX,y:t.offsetY}),this.startTimeout&&clearTimeout(this.startTimeout),this.startTimeout=setTimeout((function(){e.start()}),4e3)}},start:function(){var t,e=parseInt(this.$refs.canvas.style.width),n=parseInt(this.$refs.canvas.style.height),r=parseInt(this.$refs.canvas.width),h=parseInt(this.$refs.canvas.height),c=v(this.seeds);try{for(c.s();!(t=c.n()).done;){var f=t.value,l=~~(f.x/e*r),d=(~~(f.y/n*h)+2)*(o.w+2)+l+2;o.gridB[d-1]=1,o.gridB[d]=1,o.gridB[d-1-o.w-2]=1,o.gridB[d-o.w-2]=1}}catch(t){c.e(t)}finally{c.f()}this.running=!0}},mounted:function(){var t=this;document.body.style.overflowY="hidden";var e=this.$refs.canvas.getContext("2d");e.canvas.width=e.canvas.height=240,e.canvas.style.width=e.canvas.style.height="".concat(Math.min(window.innerWidth,window.innerHeight-document.querySelector("nav").offsetHeight),"px"),e.fillStyle="#000000",e.fillRect(0,0,e.canvas.width,e.canvas.height),e.strokeStyle="#ffffff",e.lineWidth=.2,e.beginPath();for(var i=1;i<10;i++)e.moveTo(0,240*i/10),e.lineTo(240,240*i/10),e.moveTo(240*i/10,0),e.lineTo(240*i/10,240);e.stroke(),o=new y(e.canvas.width,e.canvas.height),h=new d.a([{color:"#000000",stop:.2},{color:"#c50106",stop:.4},{color:"#f5f106",stop:.6},{color:"#ffffff",stop:.72}]);r=requestAnimationFrame((function n(h){r=requestAnimationFrame(n),t.running&&(o.update(1),o.render(e))}))},destroyed:function(){r&&cancelAnimationFrame(r),this.startTimeout&&clearTimeout(this.startTimeout),document.body.style.overflowY=""}},y=function(){function t(e,n){Object(f.a)(this,t),this.w=e,this.h=n,this.gridA=new Array((e+2)*(n+2)).fill(1),this.gridB=new Array((e+2)*(n+2)).fill(0),this.da=1,this.db=.5,this.f=.0545,this.k=.062}return Object(l.a)(t,[{key:"update",value:function(dt){for(var i=0;i<8;i++){this.minGridA=9999,this.maxGridA=-9999;for(var t=this.gridA.slice(0),e=this.gridB.slice(0),n=1;n<this.w+1;n++)for(var r=1;r<this.h+1;r++){var o=r*(this.w+2)+n,h=this.lapl(this.gridA,n,r),c=this.lapl(this.gridB,n,r),a=this.gridA[o],b=this.gridB[o];t[o]=a+(this.da*h-a*b*b+this.f*(1-a))*dt,e[o]=b+(this.db*c+a*b*b-(this.k+this.f)*b)*dt,this.minGridA=Math.min(this.minGridA,t[o]),this.maxGridA=Math.max(this.maxGridA,t[o])}this.gridA=t,this.gridB=e}}},{key:"render",value:function(t){for(var e=t.getImageData(0,0,this.w,this.h),data=e.data,i=0;i<this.w*this.h;i++){var n=i%this.w,r=(~~(i/this.w)+1)*(this.w+2)+n+1,base=4*i,o=h.getColor(Math.min(1-this.gridA[r],.7)),f=Object(c.a)(o,4),l=f[0],g=f[1],b=f[2];f[3];data[base+0]=l,data[base+1]=g,data[base+2]=b,data[base+3]=255}t.putImageData(e,0,0)}},{key:"lapl",value:function(t,e,n){return.05*t[(n-1)*(this.w+2)+e-1]+.2*t[(n-1)*(this.w+2)+e]+.05*t[(n-1)*(this.w+2)+e+1]+.2*t[n*(this.w+2)+e-1]+-1*t[n*(this.w+2)+e]+.2*t[n*(this.w+2)+e+1]+.05*t[(n+1)*(this.w+2)+e-1]+.2*t[(n+1)*(this.w+2)+e]+.05*t[(n+1)*(this.w+2)+e+1]}}]),t}(),A=m,x=n(26),component=Object(x.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("canvas",{ref:"canvas",on:{click:function(e){return t.placeSeed(e)}}})])}),[],!1,null,"17fd9e35",null);e.default=component.exports}}]);