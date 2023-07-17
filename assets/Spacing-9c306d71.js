import{R as _}from"./index-8db94870.js";import{c as j}from"./clsx.m-1229b3e0.js";const f=a=>typeof a=="boolean"?"".concat(a):a===0?"0":a,y=j,N=(a,n)=>e=>{var i;if((n==null?void 0:n.variants)==null)return y(a,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:d,defaultVariants:l}=n,g=Object.keys(d).map(t=>{const r=e==null?void 0:e[t],u=l==null?void 0:l[t];if(r===null)return null;const s=f(r)||f(u);return d[t][s]}),p=e&&Object.entries(e).reduce((t,r)=>{let[u,s]=r;return s===void 0||(t[u]=s),t},{}),w=n==null||(i=n.compoundVariants)===null||i===void 0?void 0:i.reduce((t,r)=>{let{class:u,className:s,...z}=r;return Object.entries(z).every(V=>{let[m,c]=V;return Array.isArray(c)?c.includes({...l,...p}[m]):{...l,...p}[m]===c})?[...t,u,s]:t},[]);return y(a,g,w,e==null?void 0:e.class,e==null?void 0:e.className)},o=N("zep-flex",{variants:{direction:{row:"zep-flex-row",column:"zep-flex-col"},gap:{"0.25":"zep-gap-0.25","0.5":"zep-gap-0.5","0.75":"zep-gap-0.75",1:"zep-gap-1","1.5":"zep-gap-1.5",2:"zep-gap-2","2.5":"zep-gap-2.5",3:"zep-gap-3","3.75":"zep-gap-3.75",4:"zep-gap-4"},justifyContent:{start:"zep-justify-start",end:"zep-justify-end",center:"zep-justify-center",between:"zep-justify-between",around:"zep-justify-around",evenly:"zep-justify-evenly"},alignItems:{start:"zep-items-start",end:"zep-items-end",center:"zep-items-center",baseline:"zep-items-baseline",stretch:"zep-items-stretch"},wrap:{wrap:"zep-flex-wrap",nowrap:"zep-flex-nowrap"}}}),v=({children:a,direction:n="row",gap:e="0.25",justifyContent:i="start",alignItems:d="stretch",wrap:l="wrap"})=>_.createElement("div",{className:o({direction:n,gap:e,justifyContent:i,alignItems:d,wrap:l}),"data-testid":"zep-spacing"},a);try{o.displayName="spacing",o.__docgenInfo={description:"",displayName:"spacing",props:{direction:{defaultValue:{value:"row"},description:"",name:"direction",required:!1,type:{name:'"row" | "column" | null'}},gap:{defaultValue:{value:"0.25"},description:"",name:"gap",required:!1,type:{name:'"1" | "2" | "3" | "4" | "0.25" | "0.5" | "0.75" | "1.5" | "2.5" | "3.75" | null'}},justifyContent:{defaultValue:{value:"start"},description:"",name:"justifyContent",required:!1,type:{name:'"end" | "center" | "start" | "between" | "around" | "evenly" | null'}},alignItems:{defaultValue:{value:"stretch"},description:"",name:"alignItems",required:!1,type:{name:'"end" | "baseline" | "center" | "start" | "stretch" | null'}},wrap:{defaultValue:{value:"wrap"},description:"",name:"wrap",required:!1,type:{name:'"wrap" | "nowrap" | null'}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"ClassValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}}}}}catch{}try{v.displayName="Spacing",v.__docgenInfo={description:"",displayName:"Spacing",props:{direction:{defaultValue:{value:"row"},description:"",name:"direction",required:!1,type:{name:'"row" | "column" | null'}},gap:{defaultValue:{value:"0.25"},description:"",name:"gap",required:!1,type:{name:'"1" | "2" | "3" | "4" | "0.25" | "0.5" | "0.75" | "1.5" | "2.5" | "3.75" | null'}},justifyContent:{defaultValue:{value:"start"},description:"",name:"justifyContent",required:!1,type:{name:'"end" | "center" | "start" | "between" | "around" | "evenly" | null'}},alignItems:{defaultValue:{value:"stretch"},description:"",name:"alignItems",required:!1,type:{name:'"end" | "baseline" | "center" | "start" | "stretch" | null'}},wrap:{defaultValue:{value:"wrap"},description:"",name:"wrap",required:!1,type:{name:'"wrap" | "nowrap" | null'}}}}}catch{}export{v as S,N as c};
//# sourceMappingURL=Spacing-9c306d71.js.map
