import{j as e}from"./clsx-24df0f47.js";import{a as f,c as b}from"./index-b7fee60d.js";import{r as g}from"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";const N=b("zep-absolute zep-flex-col zep-drop-shadow-md zep-z-[1500]",{variants:{show:{true:"zep-flex sm:zep-hidden sm:group-hover:zep-flex",false:"zep-hidden sm:zep-hidden sm:group-hover:zep-flex"},align:{start:"zep-items-start zep-justify-start",center:"zep-items-center zep-justify-center",end:"zep-items-end zep-justify-end"},position:{top:"zep-bottom-[calc(100%_+_4px)]",right:"zep-left-[calc(100%_+_14px)]",bottom:"zep-top-[calc(100%_+_4px)]",left:"zep-right-[calc(100%_+_14px)]"},color:{light:"zep-bg-greyscale-0 zep-text-typography-dark-100",dark:"zep-bg-greyscale-900 zep-text-typography-light-100",zps:"zep-bg-primary-default zep-text-typography-light-100",cat:"zep-bg-background-dark zep-text-typography-light-100"}},defaultVariants:{align:"center",color:"dark"}}),v=b("zep-flex zep-absolute zep-box-border",{variants:{align:{start:"",center:"",end:""},position:{top:"zep-top-[100%]",right:"zep-right-[calc(100%_-_11px)] zep-rotate-90",bottom:"zep-bottom-[100%] zep-rotate-180",left:"zep-left-[calc(100%_-_11px)] -zep-rotate-90"},color:{light:"zep-text-typography-light-100",dark:"zep-text-typography-dark-100",zps:"zep-text-primary-default",cat:"zep-text-typography-dark-100"}},compoundVariants:[{align:"start",position:["left","right"],className:"zep-bottom-[calc(100%_-_12px)]"},{align:"end",position:["left","right"],className:"zep-top-[calc(100%_-_12px)]"}],defaultVariants:{position:"top",color:"dark"}}),y=()=>e.jsxDEV("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsxDEV("path",{d:"M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",fill:"currentColor"},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:78,columnNumber:5},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:77,columnNumber:3},globalThis),T=()=>e.jsxDEV("svg",{width:"26",height:"5",viewBox:"0 0 26 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsxDEV("path",{d:"M8 0L12.2929 4.29289C12.6834 4.68342 13.3166 4.68342 13.7071 4.29289L18 0H8Z",fill:"currentColor"},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:87,columnNumber:5},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:86,columnNumber:3},globalThis),j=({className:o,label:l,description:s,position:t,color:i,align:r,onClose:p,show:c})=>e.jsxDEV("div",{className:f(N({align:r,color:i,position:t,show:c}),o),children:[e.jsxDEV("button",{className:"zep-flex sm:zep-hidden zep-self-end zep-m-0.5",onClick:p,children:e.jsxDEV(y,{},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:95,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:94,columnNumber:7},globalThis),e.jsxDEV("div",{className:"zep-max-w-[300px] zep-px-1 zep-py-0.5 zep-break-words zep-w-max",children:[l&&e.jsxDEV("p",{className:"zep-typography-headlineXS-fluid-cqi zep-mb-1",children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:98,columnNumber:19},globalThis),e.jsxDEV("p",{className:"zep-typography-supportText",children:s},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:99,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:97,columnNumber:7},globalThis),e.jsxDEV("div",{className:v({position:t,color:i,align:r}),children:e.jsxDEV(T,{},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:102,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:101,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:93,columnNumber:5},globalThis),n=({children:o,label:l,description:s,className:t,color:i="dark",position:r="top",align:p="center"})=>{const[c,m]=g.useState(!1),x=z=>{z.stopPropagation(),m(!1)};return e.jsxDEV("div",{className:f("zep-inline-flex zep-relative zep-justify-center zep-items-center zep-group",t),"data-testid":"zep-tooltip",onClick:()=>m(!0),children:[e.jsxDEV(j,{label:l,description:s,color:i,position:r,align:p,show:c,onClose:x,className:t},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:130,columnNumber:7},globalThis),o]},void 0,!0,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.tsx",lineNumber:125,columnNumber:5},globalThis)};try{n.displayName="Tooltip",n.__docgenInfo={description:"",displayName:"Tooltip",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},position:{defaultValue:{value:"top"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},color:{defaultValue:{value:"dark"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'},{value:'"zps"'},{value:'"cat"'}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"MouseEventHandler"}}}}}catch{}const D={title:"Components/Tooltip",component:n,tags:["autodocs"],argTypes:{}},a={decorators:[o=>e.jsxDEV("div",{className:"zep-w-full zep-flex zep-items-center zep-justify-center zep-h-[300px]",children:e.jsxDEV(o,{},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.stories.tsx",lineNumber:20,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/tooltip/Tooltip.stories.tsx",lineNumber:19,columnNumber:7},globalThis)],args:{label:"Label",description:"This is a description text to the label",children:"Hover me"}};var u,d,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: [Story => <div className="zep-w-full zep-flex zep-items-center zep-justify-center zep-h-[300px]">
        <Story />
      </div>],
  args: {
    label: 'Label',
    description: 'This is a description text to the label',
    children: 'Hover me'
  } as TooltipProps
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const k=["Default"];export{a as Default,k as __namedExportsOrder,D as default};
