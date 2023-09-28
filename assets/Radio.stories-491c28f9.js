import{r as D,R as o}from"./index-9edec130.js";import{R as t}from"./Radio-8afacb6b.js";import{S}from"./Spacing-bc043d67.js";import"./_commonjsHelpers-de833af9.js";import"./clsx.m-1229b3e0.js";import"./focus-d7245c50.js";var l="/home/circleci/project/src/components/radio/Radio.stories.tsx";const F={title:"Components/Radio",component:t,tags:["autodocs"],argTypes:{label:{control:{disable:!0}},checked:{control:{disable:!0}},disabled:{control:{disable:!0}},error:{control:{disable:!0}}},decorators:[i=>{const[a,e]=D.useState("");return o.createElement(i,{value:a,setValue:e,__self:void 0,__source:{fileName:l,lineNumber:33,columnNumber:12}})}]},d={render:(i,a)=>{const{value:e,setValue:r}=a;return o.createElement(t,{name:"example-default",id:"id-1",label:"Radio",checked:e==="radio",onChange:()=>r("radio"),__self:void 0,__source:{fileName:l,lineNumber:44,columnNumber:12}})}},s={render:(i,a)=>{const{value:e,setValue:r}=a;return o.createElement(S,{direction:"column",__self:void 0,__source:{fileName:l,lineNumber:53,columnNumber:12}},o.createElement(t,{name:"example-disabled",id:"id-2",label:"Disabled",checked:e==="disabled",onChange:()=>r("disabled"),disabled:!0,__self:void 0,__source:{fileName:l,lineNumber:54,columnNumber:9}}),o.createElement(t,{name:"example-disabled",id:"id-2-1",label:"Disabled",checked:!0,onChange:()=>r("disabled"),disabled:!0,__self:void 0,__source:{fileName:l,lineNumber:55,columnNumber:9}}))}},c={render:(i,a)=>{const{value:e,setValue:r}=a;return o.createElement(t,{name:"example-error",id:"id-3",label:"Error",checked:e==="error",onChange:()=>r("error"),error:!0,__self:void 0,__source:{fileName:l,lineNumber:65,columnNumber:12}})}},n={render:(i,a)=>{const{value:e,setValue:r}=a;return o.createElement(t,{name:"example-aria-described-by","aria-describedby":"id-3",id:"id-3",label:"Error",checked:e==="error",onChange:()=>r("error"),error:!0,__self:void 0,__source:{fileName:l,lineNumber:74,columnNumber:12}})}},m={render:(i,a)=>{const{value:e,setValue:r}=a;return o.createElement(S,{direction:"column",gap:"0.5",__self:void 0,__source:{fileName:l,lineNumber:83,columnNumber:12}},o.createElement(t,{name:"example-group",id:"id-3-1",label:"Item 1",checked:e==="item-1",onChange:()=>r("item-1"),__self:void 0,__source:{fileName:l,lineNumber:84,columnNumber:9}}),o.createElement(t,{name:"example-group",id:"id-3-2",label:"Item 2",checked:e==="item-2",onChange:()=>r("item-2"),__self:void 0,__source:{fileName:l,lineNumber:85,columnNumber:9}}),o.createElement(t,{name:"example-group",id:"id-3-3",label:"Item 3",checked:e==="item-3",onChange:()=>r("item-3"),__self:void 0,__source:{fileName:l,lineNumber:86,columnNumber:9}}))}};var u,b,p;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-default" id="id-1" label="Radio" checked={value === 'radio'} onChange={() => setValue('radio')} />;
  }
}`,...(p=(b=d.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var _,g,h;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Spacing direction="column">
        <Radio name="example-disabled" id="id-2" label="Disabled" checked={value === 'disabled'} onChange={() => setValue('disabled')} disabled />
        <Radio name="example-disabled" id="id-2-1" label="Disabled" checked={true} onChange={() => setValue('disabled')} disabled />
      </Spacing>;
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var N,x,f;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-error" id="id-3" label="Error" checked={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,E,V;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-aria-described-by" aria-describedby="id-3" id="id-3" label="Error" checked={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(V=(E=n.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var k,C,R;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Spacing direction="column" gap="0.5">
        <Radio name="example-group" id="id-3-1" label="Item 1" checked={value === 'item-1'} onChange={() => setValue('item-1')} />
        <Radio name="example-group" id="id-3-2" label="Item 2" checked={value === 'item-2'} onChange={() => setValue('item-2')} />
        <Radio name="example-group" id="id-3-3" label="Item 3" checked={value === 'item-3'} onChange={() => setValue('item-3')} />
      </Spacing>;
  }
}`,...(R=(C=m.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const O=["Default","Disabled","Error","AriaDescribedBy","Group"];export{n as AriaDescribedBy,d as Default,s as Disabled,c as Error,m as Group,O as __namedExportsOrder,F as default};
//# sourceMappingURL=Radio.stories-491c28f9.js.map
