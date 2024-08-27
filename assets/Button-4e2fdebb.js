import{j as l}from"./clsx-42c82d7d.js";import{c as s}from"./index-7d4e1659.js";import{F as m}from"./Icon-b83e59f4.js";import{t as g}from"./tw-merge-1166cefb.js";import{S as b}from"./Spacing-0ac87ba5.js";var a=(e=>(e.Primary="primary",e.Secondary="secondary",e.Tertiary="tertiary",e.DarkPrimary="dark-primary",e.DarkSecondary="dark-secondary",e.DarkTertiary="dark-tertiary",e.LightPrimary="light-primary",e.LightSecondary="light-secondary",e.LightTertiary="light-tertiary",e))(a||{});const h={[a.Primary]:["zep-bg-primary-default","zep-text-primary-contrast","enabled:hover:zep-bg-primary-hover","enabled:hover:zep-text-primary-contrast","enabled:active:zep-bg-primary-active","enabled:active:zep-text-primary-contrast","disabled:zep-opacity-disabled"],[a.Secondary]:["zep-bg-transparent","zep-text-typography-primary-default","enabled:hover:zep-bg-primary-hover","enabled:hover:zep-text-primary-contrast","enabled:active:zep-bg-primary-active","enabled:active:zep-text-primary-contrast","disabled:zep-opacity-disabled","zep-ring-2","zep-ring-inset","zep-ring-primary-default","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","disabled:zep-ring-opacity-disabled"],[a.Tertiary]:["zep-bg-transparent","zep-text-typography-primary-default","enabled:hover:zep-bg-tertiary-hover","enabled:hover:zep-text-typography-primary-hover","enabled:active:zep-bg-tertiary-active","enabled:active:zep-text-typography-primary-active","disabled:zep-opacity-disabled"],[a.DarkPrimary]:["zep-bg-neutral-dark-default","zep-text-neutral-dark-contrast","enabled:hover:zep-bg-neutral-dark-hover","enabled:active:zep-bg-neutral-dark-active","disabled:zep-bg-opacity-disabled"],[a.DarkSecondary]:["zep-bg-transparent","zep-text-typography-dark-100","enabled:hover:zep-bg-neutral-dark-hover","enabled:hover:zep-text-neutral-dark-contrast","enabled:active:zep-bg-neutral-dark-active","enabled:active:zep-text-neutral-dark-contrast","disabled:zep-opacity-disabled","zep-ring-2","zep-ring-inset","zep-ring-neutral-dark-default","enabled:hover:zep-ring-0","enabled:active:zep-ring-0"],[a.DarkTertiary]:["zep-bg-transparent","zep-text-typography-dark-100","enabled:hover:zep-bg-tertiary-hover","enabled:active:zep-bg-tertiary-active","disabled:zep-opacity-disabled"],[a.LightPrimary]:["zep-bg-neutral-light-default","zep-text-neutral-light-contrast","enabled:hover:zep-bg-neutral-light-hover","enabled:active:zep-bg-neutral-light-active","disabled:zep-bg-opacity-disabled"],[a.LightSecondary]:["zep-bg-transparent","zep-text-typography-light-100","enabled:hover:zep-bg-neutral-light-hover","enabled:hover:zep-text-neutral-light-contrast","enabled:active:zep-bg-neutral-light-active","enabled:active:zep-text-neutral-light-contrast","disabled:zep-opacity-disabled","zep-ring-2","zep-ring-inset","zep-ring-neutral-light-default","enabled:hover:zep-ring-0","enabled:active:zep-ring-0"],[a.LightTertiary]:["zep-bg-transparent","zep-text-typography-light-100","enabled:hover:zep-bg-tertiary-hover","enabled:active:zep-bg-tertiary-active","enabled:hover:zep-text-neutral-light-contrast","enabled:active:zep-text-neutral-light-contrast","disabled:zep-opacity-disabled"]},r=s(["zep-typography-button","zep-rounded-button","zep-px-1","zep-py-0.75","zep-flex","zep-gap-0.5","zep-rounded-4","zep-justify-center","focus-visible:zep-outline","focus-visible:zep-outline-3","focus-visible:zep-outline-offset-1","focus-visible:zep-outline-focus"],{variants:{variant:h},defaultVariants:{variant:a.Primary}}),u=({className:e,variant:i,isLoading:o=!1,label:t,children:p,icon:n,iconPosition:v="left",...d})=>{const c=!t||t===""?r({variant:i}).replace("zep-px-1","zep-px-0.75"):r({variant:i});return l.jsxDEV("button",{className:g(c,e),...d,children:[o&&l.jsxDEV("i",{className:"mr-zep-0_5","data-testid":"loading-icon",children:"loading icon"},void 0,!1,{fileName:"/home/circleci/project/src/components/button/Button.tsx",lineNumber:141,columnNumber:9},globalThis),l.jsxDEV(b,{gap:"0.5",className:v==="left"?"zep-flex-row-reverse":"",children:[t??p,n&&l.jsxDEV(m,{name:n},void 0,!1,{fileName:"/home/circleci/project/src/components/button/Button.tsx",lineNumber:147,columnNumber:18},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/button/Button.tsx",lineNumber:145,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/button/Button.tsx",lineNumber:139,columnNumber:5},globalThis)};try{r.displayName="button",r.__docgenInfo={description:"",displayName:"button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"ButtonVariant | null"}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"ClassValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}}}}}catch{}try{u.displayName="Button",u.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"dark-primary"'},{value:'"dark-secondary"'},{value:'"dark-tertiary"'},{value:'"light-primary"'},{value:'"light-secondary"'},{value:'"light-tertiary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"search"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"file"'},{value:'"password"'},{value:'"stop"'},{value:'"phone"'},{value:'"download"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"add-circle"'}]}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}export{u as B,a,h as b};
//# sourceMappingURL=Button-4e2fdebb.js.map