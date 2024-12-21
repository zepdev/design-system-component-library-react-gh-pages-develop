import{j as e,c as i}from"./clsx-24df0f47.js";import{F as h}from"./Icon-6d4aa70c.js";import{r as x}from"./index-b1e7e93e.js";import{f as N}from"./focus-d7245c50.js";import{L as s}from"./Link-79a90a12.js";import"./_commonjsHelpers-de833af9.js";const t=({items:r,...b})=>{const[l,d]=x.useState(!1),f=r.length>2?[...r.slice(0,1),e.jsxDEV("button",{className:i(N,"zep-bg-greyscale-300","hover:zep-bg-greyscale-400","zep-rounded-4","zep-flex","zep-px-0.625","zep-leading-[22px]","zep-cursor-pointer"),onClick:()=>d(!0),children:"..."},void 0,!1,{fileName:"/home/circleci/project/src/components/breadcrumb/Breadcrumb.tsx",lineNumber:17,columnNumber:11},globalThis),...r.slice(1)]:r,o=m=>r.length>2&&m===1;return e.jsxDEV("nav",{className:"zep-flex",children:e.jsxDEV("ol",{"data-testid":"zep-breadcrumb","aria-label":"breadcrumb","aria-labelledby":"breadcrumb",...b,className:i("zep-flex","zep-flex-row","zep-flex-wrap","zep-gap-0.25",{"max-sm:[&>li:not(:first-child)]:zep-hidden":!l},{"max-sm:[&>li:not(:last-child)]:zep-hidden":!l}),children:f.map((m,a)=>e.jsxDEV("li",{className:i({"max-sm:!zep-flex":o(a)},{"sm:!zep-hidden":o(a)},{"max-sm:!zep-hidden":o(a)&&l},"last:!zep-flex","first:!zep-flex","[&_svg]:last:zep-hidden","zep-flex","zep-flex-row","zep-flex-nowrap","zep-items-center","zep-gap-0.25","[&_a]:zep-h-full","[&_a]:zep-no-underline","[&_a]:last:zep-font-900","[&:not(:last-child)_a]:hover:zep-underline","[&:last-child_a]:zep-cursor-default"),children:[m,e.jsxDEV(h,{name:"chevron-mini-right"},void 0,!1,{fileName:"/home/circleci/project/src/components/breadcrumb/Breadcrumb.tsx",lineNumber:82,columnNumber:13},globalThis)]},a,!0,{fileName:"/home/circleci/project/src/components/breadcrumb/Breadcrumb.tsx",lineNumber:60,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/breadcrumb/Breadcrumb.tsx",lineNumber:45,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/breadcrumb/Breadcrumb.tsx",lineNumber:44,columnNumber:5},globalThis)};try{t.displayName="Breadcrumb",t.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ReactNode[]"}}}}}catch{}const z=[e.jsxDEV(s,{hasIcon:!1,label:"Home",href:"#"},void 0,!1,{fileName:"/home/circleci/project/src/components/breadcrumb/Breadcrumb.stories.tsx",lineNumber:8,columnNumber:3},globalThis),e.jsxDEV(s,{hasIcon:!1,label:"Link 2",href:"#"},void 0,!1,{fileName:"/home/circleci/project/src/components/breadcrumb/Breadcrumb.stories.tsx",lineNumber:9,columnNumber:3},globalThis),e.jsxDEV(s,{hasIcon:!1,label:"Very Long Text",href:"#"},void 0,!1,{fileName:"/home/circleci/project/src/components/breadcrumb/Breadcrumb.stories.tsx",lineNumber:10,columnNumber:3},globalThis),e.jsxDEV(s,{hasIcon:!1,label:"Link 4",href:"#"},void 0,!1,{fileName:"/home/circleci/project/src/components/breadcrumb/Breadcrumb.stories.tsx",lineNumber:11,columnNumber:3},globalThis),e.jsxDEV(s,{hasIcon:!1,label:"Link 5"},void 0,!1,{fileName:"/home/circleci/project/src/components/breadcrumb/Breadcrumb.stories.tsx",lineNumber:12,columnNumber:3},globalThis)],E={title:"Components/Breadcrumb",component:t,tags:["autodocs"],argTypes:{}},c={args:{items:z}};var n,p,u;c.parameters={...c.parameters,docs:{...(n=c.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    items
  } as BreadcrumbProps
}`,...(u=(p=c.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const V=["Default"];export{c as Default,V as __namedExportsOrder,E as default};
