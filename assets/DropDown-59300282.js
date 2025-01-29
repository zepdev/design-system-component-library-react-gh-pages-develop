import{j as o,c as r}from"./clsx-24df0f47.js";import{r as i,R as H}from"./index-b1e7e93e.js";import{g as L}from"./getDistanceToBottom-7ac1525d.js";import{F as z}from"./Icon-4dd4726c.js";import{t as O}from"./tw-merge-1166cefb.js";import{I as u}from"./listbox-54b67008.js";const P=268,S=(n,p)=>r("zep-flex zep-w-full zep-items-center zep-justify-between zep-bg-background-light zep-px-1 zep-py-0.75",{"zep-bg-greyscale-200":n},{"zep-bg-greyscale-300":p},{"zep-pr-3":p}),j=i.forwardRef(({disabled:n=!1,items:p,message:h,label:g,placeholder:V,required:q,notRequiredHint:E="(optional)",readOnly:a=!1,state:s="default",...e},T)=>{const[l,k]=i.useState(null),N=H.useRef(null),t=i.useMemo(()=>s==="error",[s]),f=i.useMemo(()=>s==="info",[s]),c=i.useMemo(()=>n||a,[n,a]),_=i.useMemo(()=>t?"zep-text-error":f?"zep-text-info":"",[t,f]),C=m=>{e!=null&&e.onChange&&(e==null||e.onChange(m)),k(m)};return o.jsxDEV("div",{className:O(r("zep-relative","zep-inline-block","zep-text-left","zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":n},e.className)),"data-testid":"zep-drop-down",children:[o.jsxDEV(u,{disabled:c,...e,onChange:C,value:(e==null?void 0:e.value)||l,ref:T,children:({open:m})=>{var x,y,v;const D=L(N.current)<P,I=a?void 0:V,w=((x=e==null?void 0:e.value)==null?void 0:x.name)||(l==null?void 0:l.name)||I,R=r("zep-bg-background-light","zep-inline-flex","zep-justify-between","zep-border-solid","zep-pl-1","zep-pr-0.75","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none",{"zep-text-opacity-disabled":n,"zep-text-typography-dark-100/70":!((y=e==null?void 0:e.value)!=null&&y.name||l!=null&&l.name||a)&&!n,"zep-text-typography-dark-100":(((v=e==null?void 0:e.value)==null?void 0:v.name)||(l==null?void 0:l.name)||a)&&!n,"zep-bg-background-medium":a,"zep-ring":m,"zep-active:zep-ring zep-ring-focus zep-ring-offset-1 focus-visible:zep-ring":!c,"zep-cursor-not-allowed":c,"zep-border-2 zep-border-error":t,"zep-border-1 zep-border-neutral-dark-default":!t}),M=r("zep-absolute","zep-shadow-[0_0_4px_rgba(0,0,0,0.24)]","zep-py-0.25","zep-z-10","zep-w-full","zep-max-h-[268px]","zep-origin-top-right","zep-rounded-4","zep-bg-background-light","focus:zep-outline-none","zep-overflow-hidden","zep-overflow-y-auto",{"zep-bottom-full zep-mb-[-25px]":D,"zep-mt-0.25":!D}),F=r("zep-shrink-0","zep-transition-transform","zep-duration-300",{"zep-rotate-180":m,"zep-text-opacity-disabled":c,"zep-text-typography-dark-100":!c});return o.jsxDEV(o.Fragment,{children:[g&&o.jsxDEV(u.Label,{className:r("zep-block","zep-mb-0.5",{"zep-text-opacity-disabled":n}),children:[g,!q&&o.jsxDEV("span",{className:"zep-ml-0.25",children:E},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:134,columnNumber:35},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:132,columnNumber:19},globalThis),o.jsxDEV(u.Button,{className:R,ref:N,title:w,"data-testid":"zep-drop-down-button",children:o.jsxDEV(o.Fragment,{children:[o.jsxDEV("span",{className:"zep-truncate",children:w},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:145,columnNumber:21},globalThis),o.jsxDEV(z,{className:F,name:"chevron-mini-down",role:"img",size:24},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:146,columnNumber:21},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:144,columnNumber:19},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:138,columnNumber:17},globalThis),o.jsxDEV(u.Options,{className:M,"data-testid":"zep-drop-down-menu",children:p.map(d=>o.jsxDEV(u.Option,{value:d,title:d.name,className:({active:b,selected:B})=>S(b,B),children:({selected:b})=>o.jsxDEV(o.Fragment,{children:[o.jsxDEV("span",{className:"zep-truncate",children:d.name},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:160,columnNumber:29},globalThis),b&&o.jsxDEV(z,{name:"check",role:"img",size:24,className:"zep-absolute zep-right-1"},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:162,columnNumber:31},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:159,columnNumber:27},globalThis)},d.id,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:151,columnNumber:21},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:149,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:130,columnNumber:15},globalThis)}},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:64,columnNumber:9},globalThis),h&&o.jsxDEV("div",{className:r("zep-mt-0.25",{"zep-text-typography-dark-100":!t&&!f},"zep-text-0.875","zep-flex",_),children:[s!=="default"&&o.jsxDEV(z,{name:t?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:185,columnNumber:15},globalThis),o.jsxDEV("span",{className:"zep-mt-0.125",children:h},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:192,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:175,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:49,columnNumber:7},globalThis)});try{j.displayName="DropDown",j.__docgenInfo={description:"",displayName:"DropDown",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DropDownItem[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"DropDownItem"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},notRequiredHint:{defaultValue:{value:"(optional)"},description:"",name:"notRequiredHint",required:!1,type:{name:"string"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"default"'},{value:'"info"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((item: DropDownItem) => void)"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'}]}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | ((bag: ListboxRenderPropArg<any>) => string)"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"any"}},by:{defaultValue:null,description:"",name:"by",required:!1,type:{name:"string | ((a: any, z: any) => boolean)"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},form:{defaultValue:null,description:"",name:"form",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}}}}}catch{}export{j as D};
