import{R as e}from"./index-8db94870.js";import{F as w,a as h,P as x,b as I}from"./Icon-8758a8fb.js";import{S as n}from"./Spacing-2c30780b.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-1229b3e0.js";const P={title:"Components/Icons",component:w,argTypes:{name:{control:{type:"select",options:[typeof h]}},size:{control:{disable:!0}}}},a={args:{name:"chevron-mini-down",role:"img"}},c={args:{name:"chevron-mini-down",role:"img",className:"zep-text-error"}},o={args:{name:"chevron-mini-down"},decorators:[()=>e.createElement(x,{name:"hook"})]},f=Object.keys(h),E=Object.keys(I),t={args:{name:"chevron-mini-down"},decorators:[()=>e.createElement(e.Fragment,null,e.createElement(n,{direction:"column",gap:"2"},e.createElement(n,{direction:"column",gap:"1"},e.createElement("h3",{className:"zep-font-500"},"Functional Icons (24px)"),e.createElement(n,{gap:"1"},f.map(r=>e.createElement(n,{direction:"column",justifyContent:"between",className:"zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100"},e.createElement(n,{justifyContent:"center",alignItems:"center",className:"zep-grow"},e.createElement(w,{name:r})),e.createElement("span",{className:"zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875"},r))))),e.createElement(n,{direction:"column",gap:"1"},e.createElement("h3",{className:"zep-font-500"},"Product Icons (56px)"),e.createElement(n,{gap:"1"},E.map(r=>e.createElement(n,{direction:"column",justifyContent:"between",className:"zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100"},e.createElement(n,{justifyContent:"center",alignItems:"center",className:"zep-grow"},e.createElement(x,{name:r})),e.createElement("span",{className:"zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875"},r)))))))]};var s,p,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    name: 'chevron-mini-down',
    role: 'img'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var i,l,g;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: 'chevron-mini-down',
    role: 'img',
    className: 'zep-text-error'
  }
}`,...(g=(l=c.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var d,u,z;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'chevron-mini-down'
  },
  decorators: [() => {
    return <ProductIcon name="hook" />;
  }]
}`,...(z=(u=o.parameters)==null?void 0:u.docs)==null?void 0:z.source}}};var y,b,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'chevron-mini-down'
  },
  decorators: [() => {
    return <>
          <Spacing direction="column" gap="2">
            <Spacing direction="column" gap="1">
              <h3 className="zep-font-500">Functional Icons (24px)</h3>
              <Spacing gap="1">
                {functionalIconKeys.map(icon => <Spacing direction="column" justifyContent="between" className="zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100">
                    <Spacing justifyContent="center" alignItems="center" className="zep-grow">
                      <FunctionalIcon name={icon} />
                    </Spacing>
                    <span className="zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875">
                      {icon}
                    </span>
                  </Spacing>)}
              </Spacing>
            </Spacing>
            <Spacing direction="column" gap="1">
              <h3 className="zep-font-500">Product Icons (56px)</h3>
              <Spacing gap="1">
                {productIconKeys.map(icon => <Spacing direction="column" justifyContent="between" className="zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100">
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
}`,...(S=(b=t.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const O=["Functional","Colored","Product","Overview"];export{c as Colored,a as Functional,t as Overview,o as Product,O as __namedExportsOrder,P as default};
//# sourceMappingURL=Icon.stories-69578518.js.map
