(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{200:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return c}));n(33),n(77),n(34);function o(a,b,e){return(1-e)*a+e*b}function r(e){var t=1-e;return 1-t*t}function f(e){return e*e*e*(e*(6*e-15)+10)}function c(e){var t=e.from,n=e.to,r=e.duration,f=e.onUpdate,c=e.onComplete,l=e.easeFunc,h=0;return l=l||function(e){return e},function(dt){if(!(h>=r)){var progress=(h+=dt)/r;if(progress>=1)f(n),c();else if("number"==typeof t)f(o(t,n,l(progress)));else{var e={};Object.keys(t).forEach((function(r){e[r]=o(t[r],n[r],l(progress))})),f(e)}}}}},212:function(e,t,n){e.exports=n.p+"img/woodtex.ee11f4a.jpg"},214:function(e,t,n){var content=n(231);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("33929941",content,!0,{sourceMap:!1})},229:function(e,t,n){e.exports=n.p+"img/bump_digits.606933d.png"},230:function(e,t,n){"use strict";var o=n(214);n.n(o).a},231:function(e,t,n){(t=n(36)(!1)).push([e.i,"#c1[data-v-039f7ee0]{border-radius:.25rem;outline:none}#btn-shuffle[data-v-039f7ee0]{display:block;width:100%;padding:.5rem 0;border:0;border-radius:.25rem;font-size:2rem;outline:none;cursor:pointer;background-color:var(--md-orange-a200);color:#000;transition:all .2s ease-in-out}#btn-shuffle.shuffling[data-v-039f7ee0]{background-color:var(--md-orange-a700);color:#fff}#notification[data-v-039f7ee0]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);padding:.5rem;font-size:4rem;border-radius:.25rem;color:#fff;background-color:#000;opacity:0;z-index:-1;text-align:center;cursor:default;transition:opacity .2s ease-in-out}",""]),e.exports=t},291:function(e,t,n){"use strict";n.r(t);n(104),n(38);var o,r=n(204),f=n(200),c={data:function(){return{}},methods:{},mounted:function(){var e={empty:{x:2,y:0},puzzleMoving:null,target:null,shuffling:!1,shufflingTime:0,easeCameraIntoPosition:!1},t=-Math.PI/2,c=Math.PI/2,l=document.querySelector("#btn-shuffle"),h=document.querySelector("#notification"),canvas=document.querySelector("#c1");canvas.width=Math.min(640,window.innerWidth),canvas.height=canvas.width,o=new r.Engine(canvas,!0);var d=new r.Scene(o);d.clearColor=new r.Color3(.56,.64,.68),window.addEventListener("resize",(function(){return o.resize()}));var m=new r.ArcRotateCamera("cam",t,c,5,new r.Vector3(1,1,0),d);function v(t){var n=t.position,o=n.x,r=n.y;return!e.puzzleMoving&&Math.abs(o-e.empty.x)+Math.abs(r-e.empty.y)===1&&(e.animTime=0,e.puzzleMoving=t,e.target={x:e.empty.x,y:e.empty.y},e.empty.x=o,e.empty.y=r,!0)}m.attachControl(canvas,!0),new r.HemisphericLight("light1",new r.Vector3(0,0,-1),d).specular=new r.Color3(.2,.2,.2),function(){for(var t=0;t<3;t++)for(var o=0;o<3;o++)if(2!==o||0!==t){var f=r.MeshBuilder.CreateBox("".concat(o,",").concat(t),{width:.98,height:.98,depth:.2},d);f.position=new r.Vector3(o,t,0),f.material=new r.StandardMaterial("woodmat".concat(t),d),f.material.diffuseTexture=new r.Texture(n(212),d),f.material.bumpTexture=new r.Texture(n(229),d),f.material.bumpTexture.uScale=.098,f.material.bumpTexture.uOffset=.098*(3*(2-t)+o),f.material.invertNormalMapY=!0}d.onPointerDown=function(t,n){!e.shuffling&&n.pickedMesh&&v(n.pickedMesh)}}(),o.runRenderLoop((function(){var dt=o.getDeltaTime();!function(dt){if(!e.puzzleMoving)return;var t=e.shuffling?70:200;e.animTime+=dt,e.animTime>t?(e.puzzleMoving.position.x=e.target.x,e.puzzleMoving.position.y=e.target.y,e.puzzleMoving=null,function(){if(e.shuffling)return;for(var t=0;t<3;t++)for(var n=0;n<3;n++){var o=d.getMeshByName("".concat(n,",").concat(t));if(o&&(o.position.x!==n||o.position.y!==t))return}h.style["z-index"]=1,h.style.opacity=.7,setTimeout((function(){h.style.opacity="",setTimeout((function(){h.style["z-index"]=""}),500)}),2e3)}()):(e.puzzleMoving.position.x=Object(f.a)(e.empty.x,e.target.x,Object(f.c)(e.animTime/t)),e.puzzleMoving.position.y=Object(f.a)(e.empty.y,e.target.y,Object(f.c)(e.animTime/t)))}(dt),e.shuffling&&!e.puzzleMoving&&function(){var t;do{t=d.getMeshByName("".concat(3*Math.random()|0,",").concat(3*Math.random()|0))}while(!t||t===e.prevMesh||!v(t));e.prevMesh=t}(),e.shuffling?(e.shufflingTime+=dt,m.alpha=t+.5*Math.sin(e.shufflingTime/200),m.beta=c+.5*Math.sin(Math.max(0,e.shufflingTime/200-Math.PI/2))):e.easeCameraIntoPosition?(m.alpha+=(t-m.alpha)*Math.min(dt/200,1),m.beta+=(c-m.beta)*Math.min(dt/200,1),Math.abs(t-m.alpha)<.01&&Math.abs(c-m.beta)<.01&&(m.alpha=t,m.beta=c,e.easeCameraIntoPosition=!1)):(m.alpha=-Math.PI/2,m.beta=Math.PI/2),d.render()})),l.addEventListener("click",(function(){e.shuffling=!e.shuffling,e.shuffling||(e.shufflingTime=0,e.easeCameraIntoPosition=!0),l.textContent=e.shuffling?"Stop":"Shuffle",l.className=e.shuffling?"shuffling":""}))},destroyed:function(){o&&o.dispose()}},l=(n(230),n(27)),component=Object(l.a)(c,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{display:"inline-block",position:"relative"}},[t("canvas",{attrs:{id:"c1","touch-action":"none"}}),this._v(" "),t("button",{attrs:{id:"btn-shuffle"}},[this._v("Shuffle")]),this._v(" "),t("div",{attrs:{id:"notification"}},[this._v("Finished!")])])}],!1,null,"039f7ee0",null);t.default=component.exports}}]);