import{j as i,c as o}from"./clsx-24df0f47.js";import{F as b,S as k}from"./Icon-6d4be359.js";var r=(e=>(e.Standalone="standalone",e.Inline="inline",e))(r||{}),c=(e=>(e.Base="base",e.Small="sm",e))(c||{}),m=(e=>(e.Self="_self",e.Blank="_blank",e))(m||{}),n=(e=>(e.Zps="ZPS",e.Cat="CAT",e.ZpsBg="ZPS_BG",e.CatBg="CAT_BG",e))(n||{});const p=({as:e="a",size:f=c.Base,mode:v=r.Inline,disabled:l=!1,target:h=m.Self,label:a,className:g="",icon:t,variant:s,socialMediaIcon:w,socialIcon:d,iconPlacement:u,...z})=>i.jsxDEV(e,{className:o("zep-typography-bodyText","zep-outline-none","zep-rounded-4","zep-border-separate","zep-inline","zep-items-center","zep-cursor-pointer","zep-underline-offset-2","zep-flex zep-items-center",{"zep-link-inline zep-underline":v===r.Inline},{"zep-link-standalone":v===r.Standalone},{"active:zep-text-indigo-700":!l&&(s===n.Zps||n.ZpsBg)},{"active:zep-text-neutral-dark-active":!l&&(s!==n.Zps||n.ZpsBg)},{"hover:zep-underline":v===r.Standalone&&!l},{"hover:zep-cursor-default !zep-text-neutral-dark-disabled/40":l},{"zep-text-0.875":f!==c.Base},{"zep-ring-focus focus-visible:zep-ring":e==="a"},"zep-inline","zep-flex","zep-items-center",u==="before"&&"zep-flex-row-reverse",g),tabIndex:l?-1:0,disabled:l,"aria-disabled":l,target:h,...z,children:[a&&i.jsxDEV("span",{className:o({"hover:zep-cursor-default":l}),children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/link/Link.tsx",lineNumber:53,columnNumber:17},globalThis),t&&i.jsxDEV(b,{name:t,size:20,className:o("zep-inline",{"zep-mr-0.25":u==="before"&&a,"zep-ml-0.25":u==="after"&&a})},void 0,!1,{fileName:"/home/circleci/project/src/components/link/Link.tsx",lineNumber:55,columnNumber:9},globalThis),!t&&d&&i.jsxDEV(k,{name:d,size:20,className:o("zep-inline",{"zep-mr-0.25":u==="before"&&a,"zep-ml-0.25":u==="after"&&a})},void 0,!1,{fileName:"/home/circleci/project/src/components/link/Link.tsx",lineNumber:65,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/link/Link.tsx",lineNumber:22,columnNumber:5},globalThis);try{p.displayName="Link",p.__docgenInfo={description:"",displayName:"Link",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},mode:{defaultValue:{value:"LinkMode.Inline"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"standalone"'},{value:'"inline"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"LinkSize.Base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'}]}},target:{defaultValue:{value:"LinkTarget.Self"},description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"search"'},{value:'"table"'},{value:'"time"'},{value:'"stop"'},{value:'"phone"'},{value:'"alert"'},{value:'"list"'},{value:'"email"'},{value:'"location"'},{value:'"copy"'},{value:'"home"'},{value:'"file"'},{value:'"password"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"share"'},{value:'"minus"'},{value:'"plus"'},{value:'"add-circle"'},{value:'"marine-ship"'}]}},socialMediaIcon:{defaultValue:null,description:"",name:"socialMediaIcon",required:!1,type:{name:"boolean"}},socialIcon:{defaultValue:null,description:"",name:"socialIcon",required:!1,type:{name:"enum",value:[{value:'"facebook"'},{value:'"instagram"'},{value:'"twitter"'},{value:'"xing"'},{value:'"linkedin"'},{value:'"youtube"'},{value:'"kununu"'},{value:'"youtube-circle"'},{value:'"facebook-circle"'},{value:'"instagram-circle"'},{value:'"twitter-circle"'},{value:'"linkedin-circle"'},{value:'"xing-circle"'},{value:'"kununu-circle"'},{value:'"facebook-colored"'},{value:'"instagram-colored"'},{value:'"twitter-colored"'},{value:'"youtube-colored"'},{value:'"linkedin-colored"'},{value:'"xing-colored"'}]}},iconPlacement:{defaultValue:null,description:"",name:"iconPlacement",required:!1,type:{name:"enum",value:[{value:'"before"'},{value:'"after"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}}}}}catch{}export{p as L,r as a,c as b,m as c};
