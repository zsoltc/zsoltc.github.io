(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{196:function(t,n,e){"use strict";function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return o}))},197:function(t,n,e){"use strict";function o(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function r(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}e.d(n,"a",(function(){return r}))},200:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var o=e(76);var r=e(104);function c(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},205:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return c}));e(50),e(147),e(207),e(49);var o=Math.random;function r(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return o()*(b-a)+a}function c(){for(var u=0,t=0;0===u;)u=o();for(;0===t;)t=o();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*t)}},207:function(t,n,e){var o=e(2),r=e(5),c=Math.imul;o({target:"Math",stat:!0,forced:r((function(){return-5!=c(4294967295,5)||2!=c.length}))},{imul:function(t,n){var e=+t,o=+n,r=65535&e,c=65535&o;return 0|r*c+((65535&e>>>16)*c+r*(65535&o>>>16)<<16>>>0)}})},268:function(t,n,e){"use strict";e.r(n);e(103);var o,r=e(200),c=e(196),d=e(197),f=e(239),l=e.n(f),y=e(205),h=function(){function t(n,e,o,r){Object(c.a)(this,t);var d=l.a.Bodies.circle(n-o/2.5,e,2*r),f=l.a.Bodies.circle(n+o/2.5,e,2*r),h=l.a.Bodies.rectangle(n,e,o,r,{collisionFilter:{category:2,mask:2}}),v=l.a.Bodies.rectangle(n,e-o/2,r/2,o),m=l.a.Constraint.create({bodyA:d,bodyB:h,pointB:{x:-o/2.5,y:0}}),w=l.a.Constraint.create({bodyA:f,bodyB:h,pointB:{x:o/2.5,y:0}}),B=l.a.Constraint.create({bodyA:h,bodyB:v,pointB:{x:0,y:o/2}});this.bodies=[d,f,h,v],this.constraints=[m,w,B],l.a.Body.applyForce(v,v.position,{x:.001*Object(y.b)(),y:0})}return Object(d.a)(t,[{key:"accelerate",value:function(t){this.bodies[0].torque=t,this.bodies[1].torque=t}},{key:"angle",get:function(){return this.bodies[3].angle}},{key:"position",get:function(){return this.bodies[0].position.x}},{key:"velocity",get:function(){return this.bodies[0].velocity.x}}]),t}();n.default=function(t,n){o||(o=[l.a.Bodies.rectangle(.5*t,.7*t,t,.05*t,{isStatic:!0}),l.a.Bodies.rectangle(0,.7*t,1,.2*t,{isStatic:!0}),l.a.Bodies.rectangle(t,.7*t,1,.2*t,{isStatic:!0})],l.a.Composite.add(n.world,Object(r.a)(o)));var e=new h(.5*t,.6*t,.25*t,.026*t);return l.a.Composite.clear(n.world,!0),l.a.Composite.add(n.world,[].concat(Object(r.a)(e.bodies),Object(r.a)(e.constraints))),e}}}]);