import{R as e}from"./index-8db94870.js";import{F as s,a as f,P as I,b as N}from"./Icon-436c9414.js";import{S as n}from"./Spacing-2c30780b.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-1229b3e0.js";const P={title:"Components/Icons",component:s,argTypes:{name:{control:{type:"select",options:[typeof f]}},size:{control:{type:"radio",options:[16,24]}}}},a={args:{name:"ArrowChevronMiniDown",size:24,role:"img"}},c={args:{name:"ArrowChevronMiniDown",size:24,role:"img",className:"zep-text-error"}},o={args:{name:"ArrowChevronMiniDown"},decorators:[()=>e.createElement(I,{name:"Hook"})]},p=Object.keys(f),E=Object.keys(N),t={args:{name:"ArrowChevronMiniDown"},decorators:[()=>e.createElement(e.Fragment,null,e.createElement(n,{direction:"column",gap:"2"},e.createElement(n,{direction:"column",gap:"1"},e.createElement("h3",{className:"zep-font-500"},"Functional Icons (16px)"),e.createElement(n,{gap:"1"},p.map(r=>e.createElement(n,{direction:"column",justifyContent:"between",className:"zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100"},e.createElement(n,{justifyContent:"center",alignItems:"center",className:"zep-grow"},e.createElement(s,{name:r,size:16})),e.createElement("span",{className:"zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875"},r))))),e.createElement(n,{direction:"column",gap:"1"},e.createElement("h3",{className:"zep-font-500"},"Functional Icons (24px)"),e.createElement(n,{gap:"1"},p.map(r=>e.createElement(n,{direction:"column",justifyContent:"between",className:"zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100"},e.createElement(n,{justifyContent:"center",alignItems:"center",className:"zep-grow"},e.createElement(s,{name:r})),e.createElement("span",{className:"zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875"},r))))),e.createElement(n,{direction:"column",gap:"1"},e.createElement("h3",{className:"zep-font-500"},"Product Icons (56px)"),e.createElement(n,{gap:"1"},E.map(r=>e.createElement(n,{direction:"column",justifyContent:"between",className:"zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100"},e.createElement(n,{justifyContent:"center",alignItems:"center",className:"zep-grow"},e.createElement(I,{name:r})),e.createElement("span",{className:"zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875"},r)))))))]};var i,m,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: 'ArrowChevronMiniDown',
    size: 24,
    role: 'img'
  }
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var g,z,d;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'ArrowChevronMiniDown',
    size: 24,
    role: 'img',
    className: 'zep-text-error'
  }
}`,...(d=(z=c.parameters)==null?void 0:z.docs)==null?void 0:d.source}}};var u,y,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'ArrowChevronMiniDown'
  },
  decorators: [() => {
    return <ProductIcon name="Hook" />;
  }]
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,S,x;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    name: 'ArrowChevronMiniDown'
  },
  decorators: [() => {
    return <>
          <Spacing direction="column" gap="2">
            <Spacing direction="column" gap="1">
              <h3 className="zep-font-500">Functional Icons (16px)</h3>
              <Spacing gap="1">
                {functionalIconKeys.map(icon => <Spacing direction="column" justifyContent="between" className="zep-h-[185px] zep-w-[185px] zep-border-1 zep-border-greyscale-700 zep-bg-greyscale-100">
                    <Spacing justifyContent="center" alignItems="center" className="zep-grow">
                      <FunctionalIcon name={icon} size={16} />
                    </Spacing>
                    <span className="zep-border-t-1 zep-border-greyscale-700 zep-bg-greyscale-0 zep-p-0.25 zep-text-0.875">
                      {icon}
                    </span>
                  </Spacing>)}
              </Spacing>
            </Spacing>
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
}`,...(x=(S=t.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const A=["Functional","Colored","Product","Overview"];export{c as Colored,a as Functional,t as Overview,o as Product,A as __namedExportsOrder,P as default};
//# sourceMappingURL=Icon.stories-901fb0bb.js.map
