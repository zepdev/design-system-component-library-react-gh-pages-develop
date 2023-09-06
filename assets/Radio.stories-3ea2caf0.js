import{r as I,R as t}from"./index-8db94870.js";import{R as o}from"./Radio-eff1c12d.js";import{S as y}from"./Spacing-8f1fefc8.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-1229b3e0.js";import"./focus-d7245c50.js";const j={title:"Components/Radio",component:o,tags:["autodocs"],argTypes:{label:{control:{disable:!0}},selected:{control:{disable:!0}},disabled:{control:{disable:!0}},error:{control:{disable:!0}}},decorators:[l=>{const[a,e]=I.useState("");return t.createElement(l,{value:a,setValue:e})}]},d={render:(l,a)=>{const{value:e,setValue:r}=a;return t.createElement(o,{name:"example-default",id:"id-1",label:"Radio",selected:e==="radio",onChange:()=>r("radio")})}},s={render:(l,a)=>{const{value:e,setValue:r}=a;return t.createElement(y,{direction:"column"},t.createElement(o,{name:"example-disabled",id:"id-2",label:"Disabled",selected:e==="disabled",onChange:()=>r("disabled"),disabled:!0}),t.createElement(o,{name:"example-disabled",id:"id-2-1",label:"Disabled",selected:!0,onChange:()=>r("disabled"),disabled:!0}))}},n={render:(l,a)=>{const{value:e,setValue:r}=a;return t.createElement(o,{name:"example-error",id:"id-3",label:"Error",selected:e==="error",onChange:()=>r("error"),error:!0})}},i={render:(l,a)=>{const{value:e,setValue:r}=a;return t.createElement(o,{name:"example-aria-described-by","aria-describedby":"id-3",id:"id-3",label:"Error",selected:e==="error",onChange:()=>r("error"),error:!0})}},c={render:(l,a)=>{const{value:e,setValue:r}=a;return t.createElement(y,{direction:"column",gap:"0.5"},t.createElement(o,{name:"example-group",id:"id-3-1",label:"Item 1",selected:e==="item-1",onChange:()=>r("item-1")}),t.createElement(o,{name:"example-group",id:"id-3-2",label:"Item 2",selected:e==="item-2",onChange:()=>r("item-2")}),t.createElement(o,{name:"example-group",id:"id-3-3",label:"Item 3",selected:e==="item-3",onChange:()=>r("item-3")}))}};var m,u,p;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-default" id="id-1" label="Radio" selected={value === 'radio'} onChange={() => setValue('radio')} />;
  }
}`,...(p=(u=d.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,g,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Spacing direction="column">
        <Radio name="example-disabled" id="id-2" label="Disabled" selected={value === 'disabled'} onChange={() => setValue('disabled')} disabled />
        <Radio name="example-disabled" id="id-2-1" label="Disabled" selected={true} onChange={() => setValue('disabled')} disabled />
      </Spacing>;
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var E,V,v;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-error" id="id-3" label="Error" selected={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(v=(V=n.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var C,h,R;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-aria-described-by" aria-describedby="id-3" id="id-3" label="Error" selected={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(R=(h=i.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var S,D,f;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Spacing direction="column" gap="0.5">
        <Radio name="example-group" id="id-3-1" label="Item 1" selected={value === 'item-1'} onChange={() => setValue('item-1')} />
        <Radio name="example-group" id="id-3-2" label="Item 2" selected={value === 'item-2'} onChange={() => setValue('item-2')} />
        <Radio name="example-group" id="id-3-3" label="Item 3" selected={value === 'item-3'} onChange={() => setValue('item-3')} />
      </Spacing>;
  }
}`,...(f=(D=c.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};const k=["Default","Disabled","Error","AriaDescribedBy","Group"];export{i as AriaDescribedBy,d as Default,s as Disabled,n as Error,c as Group,k as __namedExportsOrder,j as default};
//# sourceMappingURL=Radio.stories-3ea2caf0.js.map
