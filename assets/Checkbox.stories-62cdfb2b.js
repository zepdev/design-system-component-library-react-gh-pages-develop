import{r as u,R as r}from"./index-f1f749bf.js";import{C as n}from"./Checkbox-073b96b7.js";import{S as R}from"./Spacing-6b669eb7.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-1229b3e0.js";import"./focus-8391b0c7.js";import"./Icon-885b0b88.js";import"./border-radius-4e388b32.js";const J={title:"Components/Checkbox",component:n,tags:["autodocs"],argTypes:{label:{control:{disable:!0}},checked:{control:{disable:!0}},disabled:{control:{disable:!0}},error:{control:{disable:!0}}},decorators:[a=>{const[c,e]=u.useState(!1),[t,_]=u.useState({state1:!1,state2:!1,state3:!1});return r.createElement(a,{checked:c,setChecked:e,multiChecked:t,setMultiChecked:_})}]},s={render:(a,c)=>{const{checked:e,setChecked:t}=c;return r.createElement(n,{id:"id-1",label:"Checkbox",checked:e,onChange:()=>t(!e)})}},o={render:(a,c)=>{const{checked:e,setChecked:t}=c;return r.createElement(R,{direction:"column"},r.createElement(n,{id:"id-2",label:"Disabled",checked:e,onChange:()=>t(!e),disabled:!0}),r.createElement(n,{id:"id-2-1",label:"Disabled",checked:!0,onChange:()=>t(!e),disabled:!0}))}},d={render:(a,c)=>{const{checked:e,setChecked:t}=c;return r.createElement(n,{id:"id-3",label:"Error",checked:e,onChange:()=>t(!e),error:!0})}},i={render:(a,c)=>{const{checked:e,setChecked:t}=c;return r.createElement(n,{id:"id-4",label:"AutoFocus",checked:e,onChange:()=>t(!e),autoFocus:!0})}},l={render:(a,c)=>{const{checked:e,setChecked:t}=c;return r.createElement(n,{"aria-describedby":"id-4",id:"id-4",label:"AutoFocus",checked:e,onChange:()=>t(!e)})}},h={render:(a,c)=>{const{multiChecked:e,setMultiChecked:t}=c;return r.createElement(R,{direction:"column",gap:"0.5"},r.createElement(n,{id:"id-3-1",label:"Item 1",checked:e==null?void 0:e.state1,onChange:()=>t({...e,state1:!(e!=null&&e.state1)})}),r.createElement(n,{id:"id-3-2",label:"Item 2",checked:e==null?void 0:e.state2,onChange:()=>t({...e,state2:!(e!=null&&e.state2)})}),r.createElement(n,{id:"id-3-3",label:"Item 3",checked:e==null?void 0:e.state3,onChange:()=>t({...e,state3:!(e!=null&&e.state3)})}))}};var k,m,C;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox id="id-1" label="Checkbox" checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(C=(m=s.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var b,p,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Spacing direction="column">
        <Checkbox id="id-2" label="Disabled" checked={checked} onChange={() => setChecked(!checked)} disabled />
        <Checkbox id="id-2-1" label="Disabled" checked={true} onChange={() => setChecked(!checked)} disabled />
      </Spacing>;
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,E,S;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox id="id-3" label="Error" checked={checked} onChange={() => setChecked(!checked)} error />;
  }
}`,...(S=(E=d.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var f,D,A;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox id="id-4" label="AutoFocus" checked={checked} onChange={() => setChecked(!checked)} autoFocus />;
  }
}`,...(A=(D=i.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var F,I,M;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox aria-describedby="id-4" id="id-4" label="AutoFocus" checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(M=(I=l.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var y,B,G;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(G=(B=h.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const K=["Default","Disabled","Error","AutoFocus","AriaDescribedBy","Group"];export{l as AriaDescribedBy,i as AutoFocus,s as Default,o as Disabled,d as Error,h as Group,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Checkbox.stories-62cdfb2b.js.map
