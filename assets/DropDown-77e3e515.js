import{j as e,c as a}from"./clsx-42c82d7d.js";import{r as y,R as O}from"./index-39946eba.js";import{g as L}from"./getDistanceToBottom-7ac1525d.js";import{F as f}from"./Icon-265b2f17.js";import{t as M}from"./tw-merge-1166cefb.js";import{N as i}from"./listbox-4dac41f9.js";const P=268,S=(n,s)=>a("zep-flex zep-w-full zep-items-center zep-justify-between zep-bg-background-light zep-px-1 zep-py-0.75",{"zep-bg-greyscale-200":n},{"zep-bg-greyscale-300":s},{"zep-pr-3":s}),v=y.forwardRef(({disabled:n=!1,items:s,message:b,label:z,placeholder:j,required:V,notRequiredHint:q="(optional)",readOnly:c=!1,state:d="default",...o},E)=>{const[l,T]=y.useState(null),h=O.useRef(null),m=d==="error",g=d==="info",r=n||c,k=m?"zep-text-error":g?"zep-text-info":"",C=t=>{o!=null&&o.onChange&&(o==null||o.onChange(t)),T(t)};return e.jsxDEV("div",{className:M(a("zep-relative","zep-inline-block","zep-text-left","zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":n},o.className)),"data-testid":"zep-drop-down",children:[e.jsxDEV(i,{disabled:r,...o,onChange:C,value:(o==null?void 0:o.value)||l,ref:E,children:({open:t})=>{var w,x;const N=L(h.current)<P,R=c?void 0:j,D=((w=o==null?void 0:o.value)==null?void 0:w.name)||(l==null?void 0:l.name)||R,_=n?"zep-text-opacity-disabled":!((x=o==null?void 0:o.value)!=null&&x.name)&&!(l!=null&&l.name)&&!c?"zep-text-typography-dark-100/70":"zep-text-typography-dark-100",I=a("zep-bg-background-light","zep-inline-flex","zep-justify-between","zep-rounded-4","zep-border-solid","zep-pl-1","zep-pr-0.75","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none",m?"zep-border-2 zep-border-error":"zep-border-1 zep-border-neutral-dark-default",_,{"zep-bg-background-medium":c},{"zep-ring":t},{"zep-active:zep-ring":!r},{"zep-ring-offset-1":!r},{"focus-visible:zep-ring":!r},{"zep-ring-focus":!r},{"zep-cursor-not-allowed":r}),F=a("zep-absolute","zep-shadow-sm","zep-py-0.25","zep-z-10","zep-w-full","zep-max-h-[268px]","zep-origin-top-right","zep-rounded-4","zep-bg-background-light","focus:zep-outline-none","zep-overflow-hidden","zep-overflow-y-auto",N?"zep-mb-[-25px]":"zep-mt-0.25",{"zep-bottom-full":N}),B=a(r?"zep-text-opacity-disabled":"zep-text-typography-dark-100","zep-shrink-0","zep-transition-transform","zep-duration-300",{"zep-rotate-180":t});return e.jsxDEV(e.Fragment,{children:[z&&e.jsxDEV(i.Label,{className:a("zep-block","zep-mb-0.5",{"zep-text-opacity-disabled":n}),children:[z,!V&&e.jsxDEV("span",{className:"zep-ml-0.25",children:q},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:142,columnNumber:35},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:136,columnNumber:19},globalThis),e.jsxDEV(i.Button,{className:I,ref:h,title:D,"data-testid":"zep-drop-down-button",children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV("span",{className:"zep-truncate",children:D},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:153,columnNumber:21},globalThis),e.jsxDEV(f,{className:B,name:"chevron-mini-down",role:"img",size:24},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:154,columnNumber:21},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:152,columnNumber:19},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:146,columnNumber:17},globalThis),e.jsxDEV(i.Options,{className:F,"data-testid":"zep-drop-down-menu",children:s.map((u,G)=>e.jsxDEV(i.Option,{value:u,title:u.name,className:({active:p,selected:H})=>S(p,H),children:({selected:p})=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV("span",{className:"zep-truncate",children:u.name},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:168,columnNumber:29},globalThis),p&&e.jsxDEV(f,{name:"check",role:"img",size:24,className:"zep-absolute zep-right-1"},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:170,columnNumber:31},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:167,columnNumber:27},globalThis)},u.id,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:159,columnNumber:21},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:157,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:134,columnNumber:15},globalThis)}},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:64,columnNumber:9},globalThis),b&&e.jsxDEV("div",{className:a("zep-mt-0.25",{"zep-text-typography-dark-100":!m&&!g},"zep-text-0.875","zep-flex",k),children:[d!=="default"&&e.jsxDEV(f,{name:m?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:193,columnNumber:15},globalThis),e.jsxDEV("span",{className:"zep-mt-0.125",children:b},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:200,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:183,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.tsx",lineNumber:49,columnNumber:7},globalThis)});try{v.displayName="DropDown",v.__docgenInfo={description:"",displayName:"DropDown",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DropDownItem[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"DropDownItem"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},notRequiredHint:{defaultValue:{value:"(optional)"},description:"",name:"notRequiredHint",required:!1,type:{name:"string"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"info"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((item: string) => void)"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'}]}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | ((bag: ListboxRenderPropArg<any>) => string)"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"any"}},by:{defaultValue:null,description:"",name:"by",required:!1,type:{name:"string | ((a: any, z: any) => boolean)"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},form:{defaultValue:null,description:"",name:"form",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}}}}}catch{}export{v as D};
//# sourceMappingURL=DropDown-77e3e515.js.map
