import{j as e}from"./clsx-24df0f47.js";import{F as b,a as h}from"./Icon-b69b182d.js";import{S as o}from"./Spacing-5b776e96.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index-b7fee60d.js";const S={title:"General/Icons/FunctionalIcon",tags:["autodocs"],component:b,argTypes:{name:{control:{type:"select",options:[typeof h]}}},parameters:{controls:{exclude:["size"]}}},c={args:{name:"chevron-mini-down",role:"img"}},r={args:{name:"chevron-mini-down",role:"img",className:"zep-text-error"}},x=(n,N)=>n.localeCompare(N),f=Object.keys(h).sort(x),s={args:{name:"chevron-mini-down"},decorators:[()=>e.jsxDEV(e.Fragment,{children:e.jsxDEV(o,{direction:"column",gap:"2",children:e.jsxDEV(o,{direction:"column",gap:"1",children:[e.jsxDEV("h3",{className:"zep-font-500",children:"Functional Icons (24px)"},void 0,!1,{fileName:"/home/circleci/project/src/components/icon/FunctionalIcon.stories.tsx",lineNumber:56,columnNumber:15},globalThis),e.jsxDEV(o,{gap:"1",children:f.map(n=>e.jsxDEV(o,{direction:"column",justifyContent:"between",className:"zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100",children:[e.jsxDEV(o,{justifyContent:"center",alignItems:"center",className:"zep-grow",children:e.jsxDEV(b,{name:n},void 0,!1,{fileName:"/home/circleci/project/src/components/icon/FunctionalIcon.stories.tsx",lineNumber:66,columnNumber:23},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/icon/FunctionalIcon.stories.tsx",lineNumber:65,columnNumber:21},globalThis),e.jsxDEV("span",{className:"zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875",children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/icon/FunctionalIcon.stories.tsx",lineNumber:68,columnNumber:21},globalThis)]},n,!0,{fileName:"/home/circleci/project/src/components/icon/FunctionalIcon.stories.tsx",lineNumber:59,columnNumber:19},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/icon/FunctionalIcon.stories.tsx",lineNumber:57,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/icon/FunctionalIcon.stories.tsx",lineNumber:55,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/icon/FunctionalIcon.stories.tsx",lineNumber:54,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/icon/FunctionalIcon.stories.tsx",lineNumber:53,columnNumber:9},globalThis)]};var i,a,t;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: 'chevron-mini-down',
    role: 'img'
  }
}`,...(t=(a=c.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: 'chevron-mini-down',
    role: 'img',
    className: 'zep-text-error'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'chevron-mini-down'
  },
  decorators: [() => {
    return <>
          <Spacing direction="column" gap="2">
            <Spacing direction="column" gap="1">
              <h3 className="zep-font-500">Functional Icons (24px)</h3>
              <Spacing gap="1">
                {functionalIconKeys.map(icon => <Spacing key={icon} direction="column" justifyContent="between" className="zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100">
                    <Spacing justifyContent="center" alignItems="center" className="zep-grow">
                      <FunctionalIcon name={icon} />
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
}`,...(d=(g=s.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const w=["Default","Colored","Overview"];export{r as Colored,c as Default,s as Overview,w as __namedExportsOrder,S as default};
