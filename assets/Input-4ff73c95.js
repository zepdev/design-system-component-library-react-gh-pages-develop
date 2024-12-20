import{c as l,j as e}from"./clsx-24df0f47.js";import{r as V}from"./index-b1e7e93e.js";import{f as q}from"./focus-d7245c50.js";import{F as n}from"./Icon-cdc8c2c6.js";const f=V.forwardRef(({id:o,value:h,error:p,label:s,placeholder:z,disabled:i=!1,required:d,notRequiredHint:b="(optional)",icon:v,readOnly:u=!1,hasInfoIcon:g=!1,messageAriaLive:x="polite",state:a="default",infoTitle:N,message:c,onIconToggle:m,onIconInfoClick:w,onChange:k,...r},y)=>{const t=r.type??"text",j=l("zep-search-cancel:zep-appearance-none","zep-search-cancel:zep-w-1.5","zep-search-cancel:zep-h-1.5","zep-search-cancel:zep-border-[15px]","zep-search-cancel:zep-border-solid","zep-search-cancel:zep-border-transparent","zep-search-cancel:zep-cursor-pointer","zep-search-cancel:zep-bg-no-repeat","zep-search-cancel:zep-mr-[-16px]","zep-search-cancel:zep-bg-[url(/assets/search-cancel.svg)]"),I=l("zep-calendar-picker:zep-appearance-none","zep-calendar-picker:zep-w-1.5","zep-calendar-picker:zep-h-1.5","zep-calendar-picker:zep-p-0","zep-calendar-picker:zep-border-x-[16px]","zep-calendar-picker:zep-border-solid","zep-calendar-picker:zep-border-transparent","zep-calendar-picker:zep-cursor-pointer","zep-calendar-picker:zep-bg-no-repeat","zep-calendar-picker:zep-mr-[-16px]","zep-calendar-picker:zep-bg-[url(/assets/calendar.svg)]");return e.jsxDEV("div",{className:l("zep-inline-flex","zep-flex-col","zep-flex-wrap","zep-items-stretch","zep-justify-start","zep-relative",[i?"zep-cursor-not-allowed zep-opacity-disabled":"zep-cursor-pointer"],r.className),"data-testid":"zep-input",children:[s&&e.jsxDEV("label",{htmlFor:o,className:l("zep-mb-0.5","zep-text-typography-dark-100"),children:[s,!d&&e.jsxDEV("span",{"data-testid":"zep-input-label-hint",className:"zep-ml-0.25",children:b},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.tsx",lineNumber:82,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.tsx",lineNumber:79,columnNumber:11},globalThis),e.jsxDEV("div",{className:l("zep-inline-flex","zep-flex-row","zep-flex-nowrap","zep-items-center","zep-gap-0.5"),children:[e.jsxDEV("div",{className:l("zep-relative","zep-w-full"),children:[e.jsxDEV("input",{id:o,ref:y,value:h,defaultValue:"",placeholder:u?void 0:z,type:t,onChange:i?void 0:k,"aria-describedby":r["aria-describedby"],disabled:i??u,required:d,"data-testid":"zep-input-field",...r,className:l(q,"zep-border-solid","zep-border-1","zep-w-full","zep-rounded-4","zep-h-3","zep-px-1","zep-leading-3","zep-leading-[22px]","placeholder:zep-text-typography-dark-100/70","focus-visible:zep-ring-offset-1","invalid:[&:not(:placeholder-shown):not(:focus)]:zep-border-error","invalid:[&:not(:placeholder-shown):not(:focus)]:zep-border-2",{"zep-border-neutral-dark-default":!p},{"zep-border-2 zep-border-error":p},{"zep-cursor-not-allowed zep-bg-background-medium":u},{[I]:t==="date"},{[j]:t==="search"})},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.tsx",lineNumber:90,columnNumber:13},globalThis),v&&e.jsxDEV(n,{onClick:m,className:l("zep-absolute","zep-top-[0px]","zep-bottom-0","zep-right-1","zep-h-full",{"zep-cursor-pointer":m}),name:v},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.tsx",lineNumber:127,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.tsx",lineNumber:89,columnNumber:11},globalThis),g&&e.jsxDEV("button",{onClick:w,children:e.jsxDEV(n,{name:"info-circle-filled",title:N},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.tsx",lineNumber:138,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.tsx",lineNumber:137,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.tsx",lineNumber:88,columnNumber:9},globalThis),c&&e.jsxDEV("span",{id:c,"aria-live":x,className:l({"zep-text-error":a==="error","zep-text-info":a==="info","zep-text-typography-dark-100":a==="default"},"zep-mt-0.25 zep-flex zep-flex-row zep-gap-0.5 zep-text-0.875"),children:[a==="error"&&e.jsxDEV(n,{name:"warning-triangle-filled",className:"zep-flex-shrink-0 zep-text-error"},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.tsx",lineNumber:156,columnNumber:15},globalThis),a==="info"&&e.jsxDEV(n,{name:"info-circle-filled",className:"zep-flex-shrink-0 zep-text-info"},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.tsx",lineNumber:159,columnNumber:15},globalThis),e.jsxDEV("span",{className:"zep-mt-0.125",children:c},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.tsx",lineNumber:161,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.tsx",lineNumber:143,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.tsx",lineNumber:65,columnNumber:7},globalThis)});try{f.displayName="Input",f.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"location"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"add-circle"'},{value:'"marine-ship"'}]}},hasInfoIcon:{defaultValue:{value:"false"},description:"",name:"hasInfoIcon",required:!1,type:{name:"boolean"}},infoTitle:{defaultValue:null,description:"",name:"infoTitle",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},notRequiredHint:{defaultValue:{value:"(optional)"},description:"",name:"notRequiredHint",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},messageAriaLive:{defaultValue:{value:"polite"},description:"",name:"messageAriaLive",required:!1,type:{name:"enum",value:[{value:'"off"'},{value:'"assertive"'},{value:'"polite"'}]}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"error"'},{value:'"info"'},{value:'"default"'}]}},onIconToggle:{defaultValue:null,description:"",name:"onIconToggle",required:!1,type:{name:"(() => void)"}},onIconInfoClick:{defaultValue:null,description:"",name:"onIconInfoClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{f as I};
