const{round:t,min:e,sin:n,PI:o}=Math,a=document.querySelector("#main-canvas"),r=a.getContext("2d"),s=e(window.innerWidth,420),i=t(1.75*s);a.width=s,a.height=i,a.style.background="#bfbfff";const c=i/6,l=new class{constructor(t,e=1024){const n=document.createElement("canvas");n.width=e,n.height=1,this.ctx=n.getContext("2d");const o=this.ctx.createLinearGradient(0,0,e,0);t.forEach(((e,n)=>{o.addColorStop("string"==typeof e?n/(t.length-1):e.stop,"string"==typeof e?e:e.color)})),this.ctx.fillStyle=o,this.ctx.fillRect(0,0,e,1),this.data=this.ctx.getImageData(0,0,e,1).data}getColor(t){const e=4*Math.round(t*(this.ctx.canvas.width-1));return this.data.slice(e,e+4)}getImage(){return this.ctx.canvas.toDataURL()}}(["#86542e","#3d8130"]);function h(t,e){if(0===t)return;r.save(),r.translate(0,-c),r.rotate(e),r.scale(.8,.8);const[n,o,a,s]=l.getColor(1-(t-1)/7);r.strokeStyle=`rgb(${n},${o},${a})`,r.beginPath(),r.moveTo(0,0),r.lineTo(0,-c),r.stroke(),h(t-1,e),h(t-1,-e),r.restore()}requestAnimationFrame((function t(e){requestAnimationFrame(t);const o=.5*n(.001*e);r.resetTransform(),r.clearRect(0,0,s,i),r.fillStyle="#4a2409",r.fillRect(0,i-100,s,100),r.strokeStyle="#f00",r.lineWidth=24,r.lineCap="round",r.translate(s/2,i-100);const[a,d,g,f]=l.getColor(0);r.strokeStyle=`rgb(${a},${d},${g})`,r.beginPath(),r.moveTo(0,0),r.lineTo(0,-c),r.stroke(),h(7,o),h(7,-o)}));
//# sourceMappingURL=index.4e18fb82.js.map
