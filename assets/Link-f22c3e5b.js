import{R as l}from"./index-8db94870.js";import{c as r}from"./clsx.m-1229b3e0.js";import{b as v}from"./border-radius-595a2ba1.js";import{F as b}from"./Icon-8758a8fb.js";var n=(e=>(e.Standalone="standalone",e.Inline="inline",e))(n||{}),t=(e=>(e.Base="base",e.Small="sm",e))(t||{}),u=(e=>(e.Self="_self",e.Blank="_blank",e))(u||{});const g="zep-standaloneLink",s=({as:e="a",size:d=t.Base,mode:i=n.Inline,disabled:a=!1,target:p=u.Self,label:o,...c})=>{const m=d===t.Base?"text-zep-base":"text-zep-0.875",f=a?"group-hover:no-underline":"group-hover:underline";return l.createElement(e,{className:r(g,m,"outline-none",{"focus-visible:ring ring-zep-focus":e==="a"},v,"border-separate","leading-zep-1.25","inline-flex","flex-row","flex-nowrap","items-center","group","group-active:underline group-active:decoration-2","cursor-pointer","underline-offset-2",{"underline decoration-1 hover:decoration-2":i===n.Inline},{"disabled cursor-not-allowed":a}),tabIndex:a?-1:0,"aria-disabled":a,target:p,...c},l.createElement("span",{className:r(f)},o),i===n.Standalone&&l.createElement(b,{name:"arrow-long-right",className:r({"ml-zep-0.25":o})}))};try{s.displayName="Link",s.__docgenInfo={description:"",displayName:"Link",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},mode:{defaultValue:{value:"LinkMode.Inline"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"standalone"'},{value:'"inline"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"LinkSize.Base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'}]}},target:{defaultValue:{value:"LinkTarget.Self"},description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}}}catch{}export{s as L,n as a,t as b,u as c};
//# sourceMappingURL=Link-f22c3e5b.js.map
