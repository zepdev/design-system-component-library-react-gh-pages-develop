import{j as l}from"./clsx-24df0f47.js";import{c as m}from"./index-b7fee60d.js";import{F as f}from"./Icon-9bfc6c7d.js";import{t as b}from"./tw-merge-1166cefb.js";import{S as g}from"./Spacing-e25630db.js";var a=(e=>(e.Primary="primary",e.Secondary="secondary",e.SecondaryCat="secondary-cat",e.SecondaryZps="secondary-zps",e))(a||{});const h={[a.Primary]:["zep-bg-secondary-default","zep-text-secondary-contrast","enabled:hover:zep-bg-secondary-hover","enabled:hover:zep-text-secondary-contrast","enabled:active:zep-bg-secondary-active","enabled:active:zep-text-secondary-contrast","disabled:zep-opacity-disabled"],[a.SecondaryZps]:["zep-bg-transparent","zep-text-typography-primary-default","enabled:hover:zep-bg-primary-hover","enabled:hover:zep-text-primary-contrast","enabled:active:zep-bg-primary-active","enabled:active:zep-text-primary-contrast","disabled:zep-opacity-disabled","zep-ring-2","zep-ring-inset","zep-ring-primary-default","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","disabled:zep-ring-opacity-disabled"],[a.Secondary]:["zep-bg-transparent","zep-ring-2","zep-ring-inset","zep-text-secondary-default","zep-ring-secondary-default","enabled:hover:zep-bg-secondary-hover","enabled:hover:zep-ring-0","enabled:hover:zep-text-secondary-contrast","enabled:active:zep-bg-secondary-active","enabled:active:zep-text-secondary-contrast","enabled:active:zep-ring-0","disabled:zep-opacity-disabled"],[a.SecondaryCat]:["zep-bg-transparent","zep-ring-2","zep-ring-inset","zep-ring-neutral-dark-default","zep-text-neutral-dark-default","enabled:hover:zep-text-primary-contrast","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","enabled:hover:zep-bg-neutral-dark-hover","enabled:active:zep-bg-neutral-dark-active","enabled:active:zep-text-primary-contrast","disabled:zep-bg-opacity-disabled"]},r=m(["zep-typography-button","zep-rounded-button","zep-px-1","zep-py-0.75","zep-flex","zep-gap-0.5","zep-justify-center","focus-visible:zep-outline","focus-visible:zep-outline-3","focus-visible:zep-outline-offset-1","focus-visible:zep-outline-focus"],{variants:{variant:h},defaultVariants:{variant:a.Primary}}),i=({className:e,variant:t,isLoading:s=!1,label:n,children:c,icon:u,labelClass:o,iconPosition:v="left",...d})=>{const p=!n||n===""?r({variant:t}).replace("zep-px-1","zep-px-0.75"):r({variant:t});return l.jsxDEV("button",{className:b(p,e,"zep-w-full sm:zep-w-auto"),...d,children:[s&&l.jsxDEV("i",{className:"mr-zep-0_5","data-testid":"loading-icon",children:"loading icon"},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/zps-button/ZpsButton.tsx",lineNumber:102,columnNumber:9},globalThis),l.jsxDEV(g,{gap:"0.5",className:v==="left"?`zep-flex-row-reverse ${o}`:`${o}`,children:[n??c,u&&l.jsxDEV(f,{name:u},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/zps-button/ZpsButton.tsx",lineNumber:108,columnNumber:18},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/powerSystemes-components/zps-button/ZpsButton.tsx",lineNumber:106,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/powerSystemes-components/zps-button/ZpsButton.tsx",lineNumber:100,columnNumber:5},globalThis)};try{r.displayName="zpsbutton",r.__docgenInfo={description:"",displayName:"zpsbutton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"ZpsButtonVariant | null"}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"ClassValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}}}}}catch{}try{i.displayName="ZPSButton",i.__docgenInfo={description:"",displayName:"ZPSButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"secondary-cat"'},{value:'"secondary-zps"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"stop"'},{value:'"phone"'},{value:'"alert"'},{value:'"list"'},{value:'"email"'},{value:'"location"'},{value:'"copy"'},{value:'"home"'},{value:'"file"'},{value:'"password"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"add-circle"'},{value:'"marine-ship"'}]}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},labelClass:{defaultValue:null,description:"",name:"labelClass",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}export{i as Z,a,h as z};
