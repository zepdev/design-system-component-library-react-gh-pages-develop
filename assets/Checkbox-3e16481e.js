import{R as r}from"./index-8db94870.js";import{c as o}from"./clsx.m-1229b3e0.js";import{f as d}from"./focus-8391b0c7.js";import{F as u}from"./Icon-af1412c8.js";import{b as p}from"./border-radius-595a2ba1.js";const m="zep-checkbox",n=({id:t,checked:l=!1,disabled:a=!1,error:e=!1,label:c,onChange:s,...i})=>r.createElement("span",{className:o(m,"inline-flex","flex-row","flex-wrap","items-center","justify-start","relative","group",{"cursor-not-allowed opacity-zep-40":a}),"data-testid":"zep-checkbox"},l&&r.createElement(u,{name:"Check",className:o(p,"w-zep-1.5","h-zep-1.5","text-zep-greyScale-0","z-10","absolute","top-[-0.1px]","left-[-0.1px]",{"bg-zep-darkgrey-500":!e},{"group-hover:bg-zep-darkgrey-300":!e&&!a},{"bg-zep-error":e})}),r.createElement("input",{id:t,type:"checkbox",checked:l,onChange:a?void 0:s,className:o(p,d,"appearance-none","focus-visible:ring-offset-1","w-zep-1.5","h-zep-1.5","rounded","border",{"border-zep-2  border-zep-error":e},{"group-hover:border-zep-darkgrey-300":!e},{"border-zep-darkgrey-500":!e}),disabled:a,"data-testid":"zep-checkbox-input",...i}),r.createElement("label",{htmlFor:t,className:o("zep-body-text","relative","z-20","-ml-zep-1.5","pl-[36px]",[a?"cursor-not-allowed opacity-zep-40":"cursor-pointer [&>div]:hover:border-zep-darkgrey-500"])},c));try{n.displayName="Checkbox",n.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"() => void"}}}}}catch{}export{n as C};
//# sourceMappingURL=Checkbox-3e16481e.js.map
