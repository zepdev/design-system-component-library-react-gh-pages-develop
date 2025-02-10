import{j as e}from"./clsx-24df0f47.js";import{P as b,b as h}from"./Icon-f82863ee.js";import{S as r}from"./Spacing-dbf33a94.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index-b7fee60d.js";const v={title:"General/Icons/ProductIcon",tags:["autodocs"],component:b,argTypes:{name:{control:{type:"select",options:[typeof h]}}},parameters:{controls:{exclude:["size"]}}},c={args:{name:"hook",role:"img"}},n={args:{name:"hook",role:"img",className:"zep-text-error"}},x=(o,N)=>o.localeCompare(N),f=Object.keys(h).sort(x),s={args:{name:"hook"},decorators:[()=>e.jsxDEV(e.Fragment,{children:e.jsxDEV(r,{direction:"column",gap:"2",children:e.jsxDEV(r,{direction:"column",gap:"1",children:[e.jsxDEV("h3",{className:"zep-font-500",children:"Product Icons (56px)"},void 0,!1,{fileName:"/home/circleci/project/src/components/icon/ProductIcon.stories.tsx",lineNumber:56,columnNumber:15},globalThis),e.jsxDEV(r,{gap:"1",children:f.map(o=>e.jsxDEV(r,{direction:"column",justifyContent:"between",className:"zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100",children:[e.jsxDEV(r,{justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsxDEV(b,{name:o},void 0,!1,{fileName:"/home/circleci/project/src/components/icon/ProductIcon.stories.tsx",lineNumber:66,columnNumber:23},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/icon/ProductIcon.stories.tsx",lineNumber:65,columnNumber:21},globalThis),e.jsxDEV("span",{className:"zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875",children:o},void 0,!1,{fileName:"/home/circleci/project/src/components/icon/ProductIcon.stories.tsx",lineNumber:68,columnNumber:21},globalThis)]},o,!0,{fileName:"/home/circleci/project/src/components/icon/ProductIcon.stories.tsx",lineNumber:59,columnNumber:19},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/icon/ProductIcon.stories.tsx",lineNumber:57,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/icon/ProductIcon.stories.tsx",lineNumber:55,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/icon/ProductIcon.stories.tsx",lineNumber:54,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/icon/ProductIcon.stories.tsx",lineNumber:53,columnNumber:9},globalThis)]};var t,a,i;c.parameters={...c.parameters,docs:{...(t=c.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    name: 'hook',
    role: 'img'
  }
}`,...(i=(a=c.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var m,l,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: 'hook',
    role: 'img',
    className: 'zep-text-error'
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,d,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'hook'
  },
  decorators: [() => {
    return <>
          <Spacing direction="column" gap="2">
            <Spacing direction="column" gap="1">
              <h3 className="zep-font-500">Product Icons (56px)</h3>
              <Spacing gap="1">
                {productIconKeys.map(icon => <Spacing key={icon} direction="column" justifyContent="between" className="zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100">
                    <Spacing justifyContent="center" alignItems="center" className="zep-grow">
                      <ProductIcon name={icon} />
                    </Spacing>
                    <span className="zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875">
                      {icon}
                    </span>
                  </Spacing>)}
              </Spacing>
            </Spacing>
          </Spacing>
        </>;
  }]
}`,...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const D=["Default","Colored","Overview"];export{n as Colored,c as Default,s as Overview,D as __namedExportsOrder,v as default};
