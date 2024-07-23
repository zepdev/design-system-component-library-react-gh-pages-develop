import{j as e}from"./clsx-42c82d7d.js";import{a as f,c as h}from"./index-7d4e1659.js";import{r as z}from"./index-39946eba.js";import"./_commonjsHelpers-de833af9.js";const b=h("zep-absolute zep-flex-col zep-w-full zep-min-w-fit zep-box-border sm:zep-w-fit zep-whitespace-nowrap zep-drop-shadow-md  zep-typography-supportText zep-rounded-4",{variants:{show:{true:"zep-flex sm:zep-hidden sm:group-hover:zep-flex",false:"zep-hidden sm:zep-hidden sm:group-hover:zep-flex"},align:{start:"zep-items-start zep-justify-start",center:"zep-items-center zep-justify-center",end:"zep-items-end zep-justify-end"},position:{top:"zep-bottom-[calc(100%_+_4px)]",right:"zep-left-[calc(100%_+_14px)]",bottom:"zep-top-[calc(100%_+_4px)]",left:"zep-right-[calc(100%_+_14px)]"},color:{light:"zep-bg-greyscale-0 zep-text-typography-dark-100",dark:"zep-bg-greyscale-900 zep-text-typography-light-100"}},defaultVariants:{align:"center",color:"dark"}}),N=h("zep-flex zep-absolute zep-box-border",{variants:{align:{start:"",center:"",end:""},position:{top:"zep-top-[100%]",right:"zep-right-[calc(100%_-_11px)] zep-rotate-90",bottom:"zep-bottom-[100%] zep-rotate-180",left:"zep-left-[calc(100%_-_11px)] -zep-rotate-90"},color:{light:"zep-text-typography-light-100",dark:"zep-text-typography-dark-100"}},compoundVariants:[{align:"start",position:["left","right"],className:"zep-bottom-[calc(100%_-_12px)]"},{align:"end",position:["left","right"],className:"zep-top-[calc(100%_-_12px)]"}],defaultVariants:{position:"top",color:"dark"}}),v=()=>e.jsxDEV("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsxDEV("path",{d:"M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",fill:"currentColor"},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:74,columnNumber:5},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:73,columnNumber:3},globalThis),T=()=>e.jsxDEV("svg",{width:"26",height:"5",viewBox:"0 0 26 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsxDEV("path",{d:"M8 0L12.2929 4.29289C12.6834 4.68342 13.3166 4.68342 13.7071 4.29289L18 0H8Z",fill:"currentColor"},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:83,columnNumber:5},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:82,columnNumber:3},globalThis),j=({className:o,children:a,position:t,color:l,align:i,onClose:s,show:p})=>e.jsxDEV("div",{className:f(b({align:i,color:l,position:t,show:p}),o),children:[e.jsxDEV("button",{className:"zep-flex sm:zep-hidden zep-self-end zep-m-0.5",onClick:s,children:e.jsxDEV(v,{},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:91,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:90,columnNumber:7},globalThis),e.jsxDEV("span",{className:"zep-flex zep-py-0.25 zep-w-full zep-p-0.75 sm:zep-px-1 sm:zep-py-0.25",children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:93,columnNumber:7},globalThis),e.jsxDEV("div",{className:N({position:t,color:l,align:i}),children:e.jsxDEV(T,{},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:95,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:94,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:89,columnNumber:5},globalThis),n=({children:o,content:a,className:t,color:l="dark",position:i="top",align:s="center"})=>{const[p,c]=z.useState(!1),g=x=>{x.stopPropagation(),c(!1)};return e.jsxDEV("div",{className:f("zep-inline-flex zep-relative zep-justify-center zep-items-center zep-group",t),"data-testid":"zep-tooltip",onClick:()=>c(!0),children:[e.jsxDEV(j,{color:l,position:i,align:s,show:p,onClose:g,children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:122,columnNumber:7},globalThis),e.jsxDEV("div",{children:o},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:125,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:117,columnNumber:5},globalThis)};try{n.displayName="Tooltip",n.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},position:{defaultValue:{value:"top"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'}]}},color:{defaultValue:{value:"dark"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"MouseEventHandler"}}}}}catch{}const E={title:"Components/Tooltip",component:n,tags:["autodocs"],argTypes:{}},r={args:{content:"Tooltip title",children:"Hover me"}};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: ({
    content: 'Tooltip title',
    children: 'Hover me'
  } as TooltipProps)
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const D=["Default"];export{r as Default,D as __namedExportsOrder,E as default};
//# sourceMappingURL=Tooltip.stories-bf011c61.js.map
