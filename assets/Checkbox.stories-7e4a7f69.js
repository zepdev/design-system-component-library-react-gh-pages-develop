import{r as k,R as r}from"./index-8db94870.js";import{C as n}from"./Checkbox-498518ab.js";import{S as u}from"./Spacing-8f1fefc8.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-1229b3e0.js";import"./focus-d7245c50.js";import"./Icon-d0877a49.js";const H={title:"Components/Checkbox",component:n,tags:["autodocs"],argTypes:{checked:{control:{disable:!0}}},decorators:[a=>{const[c,e]=k.useState(!1),[t,_]=k.useState({state1:!1,state2:!1,state3:!1});return r.createElement(a,{checked:c,setChecked:e,multiChecked:t,setMultiChecked:_})}]},s={render:(a,c)=>{const{checked:e,setChecked:t}=c;return r.createElement(n,{id:"id-1",label:"Checkbox",...a,checked:e,onChange:()=>t(!e)})}},o={render:(a,c)=>{const{checked:e,setChecked:t}=c;return r.createElement(u,{direction:"column"},r.createElement(n,{id:"id-2",label:"Disabled",checked:!1,onChange:()=>t(!e),disabled:!0}),r.createElement(n,{id:"id-2-1",label:"Disabled",checked:!0,onChange:()=>t(!e),disabled:!0}))}},d={render:(a,c)=>r.createElement(u,{direction:"column"},r.createElement(n,{id:"id-3",label:"Error",checked:!1,onChange:()=>{},error:!0}),r.createElement(n,{id:"id-3-1",label:"Error",checked:!0,onChange:()=>{},error:!0}))},i={render:(a,c)=>{const{checked:e,setChecked:t}=c;return r.createElement(n,{id:"id-4",label:"AutoFocus",checked:e,onChange:()=>t(!e),autoFocus:!0})}},l={render:(a,c)=>{const{checked:e,setChecked:t}=c;return r.createElement(n,{"aria-describedby":"id-4",id:"id-4",label:"AriaDescribedBy",checked:e,onChange:()=>t(!e)})}},h={render:(a,c)=>{const{multiChecked:e,setMultiChecked:t}=c;return r.createElement(u,{direction:"column",gap:"0.5"},r.createElement(n,{id:"id-3-1",label:"Item 1",checked:e==null?void 0:e.state1,onChange:()=>t({...e,state1:!(e!=null&&e.state1)})}),r.createElement(n,{id:"id-3-2",label:"Item 2",checked:e==null?void 0:e.state2,onChange:()=>t({...e,state2:!(e!=null&&e.state2)})}),r.createElement(n,{id:"id-3-3",label:"Item 3",checked:e==null?void 0:e.state3,onChange:()=>t({...e,state3:!(e!=null&&e.state3)})}))}};var m,C,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox id="id-1" label="Checkbox" {...args} checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var g,p,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Spacing direction="column">
        <Checkbox id="id-2" label="Disabled" checked={false} onChange={() => setChecked(!checked)} disabled />
        <Checkbox id="id-2-1" label="Disabled" checked={true} onChange={() => setChecked(!checked)} disabled />
      </Spacing>;
  }
}`,...(x=(p=o.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var E,S,f;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args, context) => {
    return <Spacing direction="column">
        <Checkbox id="id-3" label="Error" checked={false} onChange={() => {}} error />
        <Checkbox id="id-3-1" label="Error" checked={true} onChange={() => {}} error />
      </Spacing>;
  }
}`,...(f=(S=d.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var D,A,y;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox id="id-4" label="AutoFocus" checked={checked} onChange={() => setChecked(!checked)} autoFocus />;
  }
}`,...(y=(A=i.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var F,I,M;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox aria-describedby="id-4" id="id-4" label="AriaDescribedBy" checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(M=(I=l.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var B,G,R;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Spacing direction="column" gap="0.5">
        <Checkbox id="id-3-1" label="Item 1" checked={multiChecked?.state1} onChange={() => setMultiChecked({
        ...multiChecked,
        state1: !multiChecked?.state1
      })} />
        <Checkbox id="id-3-2" label="Item 2" checked={multiChecked?.state2} onChange={() => setMultiChecked({
        ...multiChecked,
        state2: !multiChecked?.state2
      })} />
        <Checkbox id="id-3-3" label="Item 3" checked={multiChecked?.state3} onChange={() => setMultiChecked({
        ...multiChecked,
        state3: !multiChecked?.state3
      })} />
      </Spacing>;
  }
}`,...(R=(G=h.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};const J=["Default","Disabled","Error","AutoFocus","AriaDescribedBy","Group"];export{l as AriaDescribedBy,i as AutoFocus,s as Default,o as Disabled,d as Error,h as Group,J as __namedExportsOrder,H as default};
//# sourceMappingURL=Checkbox.stories-7e4a7f69.js.map
