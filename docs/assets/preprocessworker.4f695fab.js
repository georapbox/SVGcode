!function(){"use strict";const e="discrete";let t,a;self.addEventListener("message",(e=>{if(e.data.offscreen)return t=e.data.offscreen,void(a=t.getContext("2d"));const{inputImageBitmap:r,posterize:n,rgba:u,width:c,height:i,dpr:l}=e.data;a.scale(l,l),t.width=c,t.height=i;const p=((e,t,s,r)=>(a.clearRect(0,0,s,r),a.filter=t,a.drawImage(e,0,0,e.width,e.height,0,0,s,r),a.getImageData(0,0,s,r)))(r,s(n,u),c,i);e.ports[0].postMessage({result:p})}));const s=(t,a)=>{let s;return t&&(s=new CanvasFilter({componentTransfer:{funcR:{type:e,tableValues:a.r.map((e=>Number(e)))},funcG:{type:e,tableValues:a.g.map((e=>Number(e)))},funcB:{type:e,tableValues:a.b.map((e=>Number(e)))},funcA:{type:e,tableValues:a.a.map((e=>Number(e)))}}})),s}}();
