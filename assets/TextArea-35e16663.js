import{c as l,j as a}from"./clsx-42c82d7d.js";import{r as u}from"./index-39946eba.js";import{F as y}from"./Icon-265b2f17.js";import{t as T}from"./tw-merge-1166cefb.js";const d=u.forwardRef(({disabled:t=!1,label:s,message:n,placeholder:x,readOnly:o=!1,state:c="default",totalCharacters:f=500,...e},z)=>{const r=c==="error",[b,h]=u.useState(""),N=m=>{var p;(p=e.onChange)==null||p.call(e,m),h(m.target.value)},i=t||o,g=r?"zep-text-error":c==="info"?"zep-text-info":"",v=l("zep-block","zep-justify-between","zep-rounded-4","zep-border-solid","zep-pl-1","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none","placeholder:zep-text-typography-dark-100/70",r?"zep-border-2":"zep-border-1","zep-pr-0.75",t?"zep-text-opacity-disabled":"zep-text-typography-dark-100",{"zep-bg-background-medium":o},{"zep-border-neutral-dark-default":!t&&!r},{"zep-border-opacity-disabled":t},{"zep-border-error":r},{"zep-active:ring":!i},{"zep-ring-offset-1":!i},{"focus-visible:zep-ring":!i},{"zep-ring-focus":!i},{"zep-cursor-not-allowed":i},e==null?void 0:e.className);return a.jsxDEV("div",{className:T(l("zep-relative","zep-inline-block","zep-text-left",{"zep-cursor-not-allowed zep-opacity-disabled":t})),"data-testid":"zep-text-area",children:[s&&a.jsxDEV("div",{className:l("zep-block","zep-mb-0.5","zep-text-neutral-dark-default"),children:[s,!e.required&&a.jsxDEV("span",{className:"zep-ml-0.25",children:"(optional)"},void 0,!1,{fileName:"/home/circleci/project/src/components/text-area/TextArea.tsx",lineNumber:73,columnNumber:33},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-area/TextArea.tsx",lineNumber:71,columnNumber:11},globalThis),a.jsxDEV("textarea",{id:e.id,ref:z,maxLength:500,autoComplete:"off",placeholder:o?void 0:x,readOnly:o,disabled:t||o,"data-testid":"zep-text-area-input",...e,onChange:N,className:v},void 0,!1,{fileName:"/home/circleci/project/src/components/text-area/TextArea.tsx",lineNumber:76,columnNumber:9},globalThis),a.jsxDEV("div",{className:l("zep-mt-0.25","zep-text-typography-dark-100","zep-text-0.875","zep-flex",g),children:[n&&a.jsxDEV("div",{className:l("zep-flex",{"zep-text-error":r}),children:[c!=="default"&&a.jsxDEV(y,{name:r?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"},void 0,!1,{fileName:"/home/circleci/project/src/components/text-area/TextArea.tsx",lineNumber:93,columnNumber:17},globalThis),a.jsxDEV("span",{className:"zep-mt-0.125",children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/text-area/TextArea.tsx",lineNumber:100,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-area/TextArea.tsx",lineNumber:91,columnNumber:13},globalThis),a.jsxDEV("div",{className:l("zep-ml-auto","zep-mt-0.125","zep-pl-0.5","zep-flex-shrink-0"),"data-testid":"zep-text-area-length-indicator",children:[b.length," / ",f]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-area/TextArea.tsx",lineNumber:103,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-area/TextArea.tsx",lineNumber:89,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-area/TextArea.tsx",lineNumber:62,columnNumber:7},globalThis)});try{d.displayName="TextArea",d.__docgenInfo={description:"",displayName:"TextArea",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"info"'}]}},totalCharacters:{defaultValue:{value:"500"},description:"",name:"totalCharacters",required:!1,type:{name:"number"}}}}}catch{}export{d as T};
//# sourceMappingURL=TextArea-35e16663.js.map
