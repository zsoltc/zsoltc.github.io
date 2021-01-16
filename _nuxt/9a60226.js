(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{198:function(n,t,e){"use strict";function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}e.d(t,"a",(function(){return r}))},199:function(n,t,e){"use strict";function r(n,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function o(n,t,e){return t&&r(n.prototype,t),e&&r(n,e),n}e.d(t,"a",(function(){return o}))},200:function(n,t,e){"use strict";e(33),e(50),e(34);var r=e(198),o=e(199),c=function(){function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024;Object(r.a)(this,n);var canvas=document.createElement("canvas");canvas.width=e,canvas.height=1,this.ctx=canvas.getContext("2d");var o=this.ctx.createLinearGradient(0,0,e,0);t.forEach((function(n,i){o.addColorStop("string"==typeof n?i/(t.length-1):n.stop,"string"==typeof n?n:n.color)})),this.ctx.fillStyle=o,this.ctx.fillRect(0,0,e,1),this.data=this.ctx.getImageData(0,0,e,1).data}return Object(o.a)(n,[{key:"getColor",value:function(n){var t=4*Math.round(n*(this.ctx.canvas.width-1));return this.data.slice(t,t+4)}},{key:"getImage",value:function(){return this.ctx.canvas.toDataURL()}}]),n}();t.a=c},201:function(n,t,e){"use strict";var r=e(2),o=e(35),c=e(202),v=e(150),f=e(5),d=1..toFixed,l=Math.floor,x=function(n,t,e){return 0===t?e:t%2==1?x(n,t-1,e*n):x(n*n,t/2,e)};r({target:"Number",proto:!0,forced:d&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!f((function(){d.call({})}))},{toFixed:function(n){var t,e,r,f,d=c(this),h=o(n),data=[0,0,0,0,0,0],y="",m="0",w=function(n,t){for(var e=-1,r=t;++e<6;)r+=n*data[e],data[e]=r%1e7,r=l(r/1e7)},z=function(n){for(var t=6,e=0;--t>=0;)e+=data[t],data[t]=l(e/n),e=e%n*1e7},j=function(){for(var n=6,s="";--n>=0;)if(""!==s||0===n||0!==data[n]){var t=String(data[n]);s=""===s?t:s+v.call("0",7-t.length)+t}return s};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return String(d);if(d<0&&(y="-",d=-d),d>1e-21)if(e=(t=function(n){for(var t=0,e=n;e>=4096;)t+=12,e/=4096;for(;e>=2;)t+=1,e/=2;return t}(d*x(2,69,1))-69)<0?d*x(2,-t,1):d/x(2,t,1),e*=4503599627370496,(t=52-t)>0){for(w(0,e),r=h;r>=7;)w(1e7,0),r-=7;for(w(x(10,r,1),0),r=t-1;r>=23;)z(1<<23),r-=23;z(1<<r),w(1,1),z(2),m=j()}else w(0,e),w(1<<-t,0),m=j()+v.call("0",h);return m=h>0?y+((f=m.length)<=h?"0."+v.call("0",h-f)+m:m.slice(0,f-h)+"."+m.slice(f-h)):y+m}})},202:function(n,t,e){var r=e(21);n.exports=function(n){if("number"!=typeof n&&"Number"!=r(n))throw TypeError("Incorrect invocation");return+n}},203:function(n,t,e){"use strict";e.d(t,"a",(function(){return v})),e.d(t,"d",(function(){return f})),e.d(t,"c",(function(){return d})),e.d(t,"g",(function(){return l})),e.d(t,"f",(function(){return x})),e.d(t,"b",(function(){return h})),e.d(t,"e",(function(){return y}));e(104),e(149),e(201);var r=e(79);var o=e(106);function c(n){return function(n){if(Array.isArray(n))return Object(r.a)(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||Object(o.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=function(){return"\nprecision highp float;\n\nattribute vec3 position;\nattribute vec2 uv;\nuniform mat4 worldViewProjection;\nvarying vec2 vUV;\n\nvoid main(void) {\n  vUV = uv;\n  gl_Position = worldViewProjection * vec4(position, 1.0);\n}\n"},f=function(){return"\n#define ss(a, b, v) smoothstep(a, b, v)\n#define sat(x) clamp(x, 0., 1.)\n#define psin(x) (sin(x)*0.5+0.5)\n#define pcos(x) (cos(x)*0.5+0.5)\n#define PI  3.1416\n#define PI2 6.2832\n\nfloat dot2(vec2 v) { return dot(v, v); }\nfloat dot2(vec3 v) { return dot(v, v); }\nfloat ndot(vec2 a, vec2 b) { return a.x * b.x - a.y * b.y; }\n\n// Polynomial smooth min (cubic)\nfloat smin( float a, float b, float k ) {\n  float h = max( k-abs(a-b), 0.0 )/k;\n  return min( a, b ) - h*h*h*k*(1.0/6.0);\n}\n"},d=function(){return"\nfloat r11(float p)\n{\n  p *= 997.;\n  p = fract(p * .1031);\n  p *= p + 33.33;\n  p *= p + p;\n  return fract(p);\n}\n\nfloat r12(vec2 p)\n{\n  p *= 997.;\n\tvec3 p3  = fract(vec3(p.xyx) * .1031);\n  p3 += dot(p3, p3.yzx + 33.33);\n  return fract((p3.x + p3.y) * p3.z);\n}\n\nfloat r13(vec3 p3)\n{\n  p3 *= 997.;\n\tp3  = fract(p3 * .1031);\n  p3 += dot(p3, p3.yzx + 33.33);\n  return fract((p3.x + p3.y) * p3.z);\n}\n\nvec2 r21(float p)\n{\n  p *= 997.;\n\tvec3 p3 = fract(vec3(p) * vec3(.1031, .1030, .0973));\n  p3 += dot(p3, p3.yzx + 33.33);\n  return fract((p3.xx+p3.yz)*p3.zy);\n}\n\nvec2 r22(vec2 p)\n{\n  p *= 997.;\n\tvec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));\n  p3 += dot(p3, p3.yzx+33.33);\n  return fract((p3.xx+p3.yz)*p3.zy);\n\n}\n\nvec2 r23(vec3 p3)\n{\n  p3 *= 997.;\n\tp3 = fract(p3 * vec3(.1031, .1030, .0973));\n  p3 += dot(p3, p3.yzx+33.33);\n  return fract((p3.xx+p3.yz)*p3.zy);\n}\n\nvec3 r31(float p)\n{\n  p *= 997.;\n  vec3 p3 = fract(vec3(p) * vec3(.1031, .1030, .0973));\n  p3 += dot(p3, p3.yzx+33.33);\n  return fract((p3.xxy+p3.yzz)*p3.zyx); \n}\n\nvec3 r32(vec2 p)\n{\n  p *= 997.;\n\tvec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));\n  p3 += dot(p3, p3.yxz+33.33);\n  return fract((p3.xxy+p3.yzz)*p3.zyx);\n}\n\nvec3 r33(vec3 p3)\n{\n  p3 *= 997.;\n\tp3 = fract(p3 * vec3(.1031, .1030, .0973));\n  p3 += dot(p3, p3.yxz+33.33);\n  return fract((p3.xxy + p3.yxx)*p3.zyx);\n}\n\nvec4 r41(float p)\n{\n  p *= 997.;\n\tvec4 p4 = fract(vec4(p) * vec4(.1031, .1030, .0973, .1099));\n  p4 += dot(p4, p4.wzxy+33.33);\n  return fract((p4.xxyz+p4.yzzw)*p4.zywx);\n}\n\nvec4 r42(vec2 p)\n{\n  p *= 997.;\n\tvec4 p4 = fract(vec4(p.xyxy) * vec4(.1031, .1030, .0973, .1099));\n  p4 += dot(p4, p4.wzxy+33.33);\n  return fract((p4.xxyz+p4.yzzw)*p4.zywx);\n}\n\nvec4 r43(vec3 p)\n{\n  p *= 997.;\n\tvec4 p4 = fract(vec4(p.xyzx)  * vec4(.1031, .1030, .0973, .1099));\n  p4 += dot(p4, p4.wzxy+33.33);\n  return fract((p4.xxyz+p4.yzzw)*p4.zywx);\n}\n\nvec4 r44(vec4 p4)\n{\n  p4 *= 997.;\n\tp4 = fract(p4  * vec4(.1031, .1030, .0973, .1099));\n  p4 += dot(p4, p4.wzxy+33.33);\n  return fract((p4.xxyz+p4.yzzw)*p4.zywx);\n}\n"},l=function(n){return"\nfloat voronoi3D(vec3 p) {\n  vec3 cellId = floor(p);\n  float minDist = 1e3;\n\n  for (float i = -1.; i <= 1.; i++) {\n    for (float j = -1.; j <= 1.; j++) {\n      for (float k = -1.; k <= 1.; k++) {\n        vec3 nbrCellId = vec3(cellId.x + i, cellId.y + j, cellId.z + k);\n        vec3 cellPoint = r33(nbrCellId);\n        float d = dot2(p - (nbrCellId + cellPoint));\n        minDist = min(minDist, d);\n      }\n    }\n  }\n\n  return ".concat(n?"minDist":"sqrt(minDist)",";\n}\n")},x=function(){return"\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n\n// Output range: [-sqrt(3) / 2, sqrt(3) / 2] -> [-0.866, 0.866]\n// simplex3D() / 1.732 + 0.5 -> [0, 1]\nfloat simplex3D(vec3 v){ \n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //  x0 = x0 - 0. + 0.0 * C \n  vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n  vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n  vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n// Permutations\n  i = mod(i, 289.0 ); \n  vec4 p = permute( permute( permute( \n    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n    + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients\n// ( N*N points uniformly over a square, mapped onto an octahedron.)\n  float n_ = 1.0/7.0; // N=7\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n                                dot(p2,x2), dot(p3,x3) ) );\n}\n"},h=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"simplex3D";return"\nfloat fbm(vec3 p) {\n\tfloat v = 0.0;\n\tfloat a = ".concat(e.toFixed(4),";\n\tfor (int i = 0; i < ").concat(n,"; i++) {\n\t\tv += a * ").concat(r,"(p);\n\t\tp *= ").concat(t.toFixed(4),";\n\t\ta *= ").concat(e.toFixed(4),";\n\t}\n\treturn v / ").concat(c(Array(n)).reduce((function(n,t,i){return n+Math.pow(e,i+1)}),0).toFixed(4),";\n}\n")},y=function(){return"\nfloat sdCircle( vec2 p, float r ) {\n  return length(p) - r;\n}\n\nfloat sdBox( in vec2 p, in vec2 b ) {\n  vec2 d = abs(p)-b;\n  return length(max(d,0.0)) + min(max(d.x,d.y),0.0);\n}\n\nfloat sdSegment( in vec2 p, in vec2 a, in vec2 b ) {\n  vec2 pa = p-a, ba = b-a;\n  float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );\n  return length( pa - ba*h );\n}\n\nfloat sdRhombus( in vec2 p, in vec2 b ) {\n  vec2 q = abs(p);\n  float h = clamp((-2.0*ndot(q,b)+ndot(b,b))/dot(b,b),-1.0,1.0);\n  float d = length( q - 0.5*b*vec2(1.0-h,1.0+h) );\n  return d * sign( q.x*b.y + q.y*b.x - b.x*b.y );\n}\n\nfloat sdTriangle( in vec2 p, in vec2 p0, in vec2 p1, in vec2 p2 ) {\n  vec2 e0 = p1-p0, e1 = p2-p1, e2 = p0-p2;\n  vec2 v0 = p -p0, v1 = p -p1, v2 = p -p2;\n  vec2 pq0 = v0 - e0*clamp( dot(v0,e0)/dot(e0,e0), 0.0, 1.0 );\n  vec2 pq1 = v1 - e1*clamp( dot(v1,e1)/dot(e1,e1), 0.0, 1.0 );\n  vec2 pq2 = v2 - e2*clamp( dot(v2,e2)/dot(e2,e2), 0.0, 1.0 );\n  float s = sign( e0.x*e2.y - e0.y*e2.x );\n  vec2 d = min(min(vec2(dot(pq0,pq0), s*(v0.x*e0.y-v0.y*e0.x)),\n                  vec2(dot(pq1,pq1), s*(v1.x*e1.y-v1.y*e1.x))),\n                  vec2(dot(pq2,pq2), s*(v2.x*e2.y-v2.y*e2.x)));\n  return -sqrt(d.x)*sign(d.y);\n}\n"}},204:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"c",(function(){return o})),e.d(t,"b",(function(){return c})),e.d(t,"d",(function(){return v}));e(33),e(77),e(34);function r(a,b,n){return(1-n)*a+n*b}function o(n){var t=1-n;return 1-t*t}function c(n){return n*n*n*(n*(6*n-15)+10)}function v(n){var t=n.from,e=n.to,o=n.duration,c=n.onUpdate,v=n.onComplete,f=n.easeFunc,d=0;return f=f||function(n){return n},function(dt){if(!(d>=o)){var progress=(d+=dt)/o;if(progress>=1)c(e),v();else if("number"==typeof t)c(r(t,e,f(progress)));else{var n={};Object.keys(t).forEach((function(o){n[o]=r(t[o],e[o],f(progress))})),c(n)}}}}},206:function(n,t,e){"use strict";var r=e(8),o=e(4),c=e(80),v=e(14),f=e(10),d=e(21),l=e(151),x=e(53),h=e(5),y=e(76),m=e(51).f,w=e(22).f,z=e(12).f,j=e(208).trim,I=o.Number,M=I.prototype,O="Number"==d(y(M)),A=function(n){var t,e,r,o,c,v,f,code,d=x(n,!1);if("string"==typeof d&&d.length>2)if(43===(t=(d=j(d)).charCodeAt(0))||45===t){if(88===(e=d.charCodeAt(2))||120===e)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(v=(c=d.slice(2)).length,f=0;f<v;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(c("Number",!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var N,P=function(n){var t=arguments.length<1?0:n,e=this;return e instanceof P&&(O?h((function(){M.valueOf.call(e)})):"Number"!=d(e))?l(new I(A(t)),e,P):A(t)},E=r?m(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;E.length>C;C++)f(I,N=E[C])&&!f(P,N)&&z(P,N,w(I,N));P.prototype=M,M.constructor=P,v(o,"Number",P)}},207:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));e(210);var r=Math.random;function o(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r()*(b-a)+a}},208:function(n,t,e){var r=e(13),o="["+e(209)+"]",c=RegExp("^"+o+o+"*"),v=RegExp(o+o+"*$"),f=function(n){return function(t){var e=String(r(t));return 1&n&&(e=e.replace(c,"")),2&n&&(e=e.replace(v,"")),e}};n.exports={start:f(1),end:f(2),trim:f(3)}},209:function(n,t){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},210:function(n,t,e){var r=e(2),o=e(5),c=Math.imul;r({target:"Math",stat:!0,forced:o((function(){return-5!=c(4294967295,5)||2!=c.length}))},{imul:function(n,t){var e=+n,r=+t,o=65535&e,c=65535&r;return 0|o*c+((65535&e>>>16)*c+o*(65535&r>>>16)<<16>>>0)}})},211:function(n,t,e){"use strict";var r=e(198),o=e(199),c=e(204),v=e(207),f=Math.PI,d=Math.cos,l=Math.sin,x=Math.floor,h=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]},y=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:128,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:128,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:128;Object(r.a)(this,n),Object.assign(this,{XMAX:t,YMAX:e,ZMAX:o}),this.gridPoints=new Array(t);for(var i=0;i<t;i++){this.gridPoints[i]=new Array(e);for(var c=0;c<e;c++){this.gridPoints[i][c]=new Array(o);for(var x=0;x<o;x++){var h=2*Object(v.a)()*f,y=2*Object(v.a)()*f;this.gridPoints[i][c][x]=[l(h)*d(y),l(h)*l(y),d(h)]}}}}return Object(o.a)(n,[{key:"copySlice",value:function(n,t){for(var e=this.XMAX,r=this.YMAX,o=0;o<e;o++)for(var c=0;c<r;c++)this.gridPoints[o][c][t]=this.gridPoints[o][c][n]}},{key:"getVal",value:function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=this.XMAX,o=this.YMAX,v=this.ZMAX,f=n%1,d=t%1,l=e%1,y=((n=x(n)%r)+1)%r,m=((t=x(t)%o)+1)%o,w=((e=x(e)%v)+1)%v,z=this.gridPoints[n][t][e],j=h(z,[f,d,l]),br=this.gridPoints[y][t][e],I=h(br,[f-1,d,l]),M=this.gridPoints[n][m][e],O=h(M,[f,d-1,l]),tr=this.gridPoints[y][m][e],A=h(tr,[f-1,d-1,l]),N=Object(c.a)(j,I,Object(c.b)(f)),P=Object(c.a)(O,A,Object(c.b)(f)),E=Object(c.a)(N,P,Object(c.b)(d));z=this.gridPoints[n][t][w],j=h(z,[f,d,l-1]),br=this.gridPoints[y][t][w],I=h(br,[f-1,d,l-1]),M=this.gridPoints[n][m][w],O=h(M,[f,d-1,l-1]),tr=this.gridPoints[y][m][w],A=h(tr,[f-1,d-1,l-1]),N=Object(c.a)(j,I,Object(c.b)(f)),P=Object(c.a)(O,A,Object(c.b)(f));var C=Object(c.a)(N,P,Object(c.b)(d));return Object(c.a)(E,C,Object(c.b)(l))}},{key:"fbm",value:function(n,t,e,r){for(var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,c=0,i=0;i<n;i++)c+=this.getVal(e*Math.pow(2,i),r*Math.pow(2,i),o*Math.pow(2,i))*Math.pow(t,i+1);return c}}]),n}();t.a=y},247:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));e(206);var r=e(48),o=e(200);function c(n,t){for(var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new o.a(["#000000","#ffffff"]),v=t.getImageData(0,0,t.canvas.width,t.canvas.height),f=2/(t.canvas.width-1),d=new Array(t.canvas.height*t.canvas.width),l=Number.MAX_VALUE,x=Number.MIN_VALUE,h=0;h<t.canvas.height;h++)for(var y=1-h*f,col=0;col<t.canvas.width;col++){var m=col*f-1,w=n(m,y);l=Math.min(l,w),x=Math.max(x,w),d[h*t.canvas.width+col]=w}for(var i=0;i<d.length;i++){var z=e?(d[i]-l)/(x-l):d[i],j=c.getColor(z),I=Object(r.a)(j,4),M=I[0],g=I[1],b=I[2],a=I[3],base=4*i;v.data[base+0]=M,v.data[base+1]=g,v.data[base+2]=b,v.data[base+3]=a}t.putImageData(v,0,0)}},249:function(n,t,e){var content=e(289);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(37).default)("2cf2ab82",content,!0,{sourceMap:!1})},288:function(n,t,e){"use strict";var r=e(249);e.n(r).a},289:function(n,t,e){(t=e(36)(!1)).push([n.i,"canvas[data-v-5aae12f1]{outline:none}",""]),n.exports=t},313:function(n,t,e){"use strict";e.r(t);e(104);var r,o=e(205),c=(e(204),e(200)),v=(e(247),e(211),e(203)),f=Math.min,d=(Math.max,Math.abs,"\nprecision highp float;\n\nvarying vec2 vUV;\nuniform sampler2D palette;\nuniform float time;\n\n".concat(Object(v.d)(),"\n").concat(Object(v.f)(),"\n").concat(Object(v.b)(4),"\n\nvoid main(void) {\n  // float v = simplex3D(vec3(vUV, time)) / 1.72 + 0.5;\n  float v = fbm(vec3(vUV, time / 2.)) / 1.72 + 0.5;\n  v = ss(0.4, 0.6, v);\n  gl_FragColor = vec4(v, v, v, 1.);\n}\n")),l={data:function(){return{}},methods:{draw:function(){}},mounted:function(){document.body.style.overflowY="hidden";var canvas=this.$refs.canvas;canvas.width=canvas.height=f(window.innerWidth,window.innerHeight-document.querySelector("nav").offsetHeight),r=new o.Engine(canvas,!0);var n=new o.Scene(r);n.clearColor=new o.Color3(0,0,0),window.addEventListener("resize",(function(){return r.resize()}));var t=new o.ArcRotateCamera("Camera",-Math.PI/2,Math.PI/2,8,new o.Vector3(0,0,0));t.mode=o.Camera.ORTHOGRAPHIC_CAMERA,t.orthoLeft=-4,t.orthoRight=4,t.orthoBottom=-4,t.orthoTop=4;var e=new c.a(["rgba(255, 0, 0, 0)","rgba(255, 0, 0, 1)"]),l=o.MeshBuilder.CreatePlane("",{size:4},n);o.Effect.ShadersStore.customVertexShader=Object(v.a)(),o.Effect.ShadersStore.customFragmentShader=d,l.material=new o.ShaderMaterial("shader",n,{vertex:"custom",fragment:"custom"},{attributes:["position","uv"],uniforms:["worldViewProjection"],needAlphaBlending:!0,needAlphaTesting:!0});var x=new o.Texture(e.getImage(),n);x.wrapU=o.Texture.CLAMP_ADDRESSMODE,x.wrapV=o.Texture.CLAMP_ADDRESSMODE,l.material.setTexture("palette",x);var h=0;r.runRenderLoop((function(){var dt=r.getDeltaTime();h+=dt/1e3,l.material.setFloat("time",h),n.render()}))},destroyed:function(){document.body.style.overflowY=""}},x=(e(288),e(26)),component=Object(x.a)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("canvas",{ref:"canvas",on:{click:function(t){return n.draw(t)}}})])}),[],!1,null,"5aae12f1",null);t.default=component.exports}}]);