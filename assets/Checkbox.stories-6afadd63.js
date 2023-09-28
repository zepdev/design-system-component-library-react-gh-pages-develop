import{r as b,R as c}from"./index-9edec130.js";import{C as a}from"./Checkbox-fa756230.js";import{S as h}from"./Spacing-bc043d67.js";import"./_commonjsHelpers-de833af9.js";import"./clsx.m-1229b3e0.js";import"./Icon-645ba8dd.js";import"./focus-d7245c50.js";var n="/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx";const H={title:"Components/Checkbox",component:a,tags:["autodocs"],argTypes:{checked:{control:{disable:!0}}},decorators:[o=>{const[t,e]=b.useState(!1),[r,j]=b.useState({state1:!1,state2:!1,state3:!1});return c.createElement(o,{checked:t,setChecked:e,multiChecked:r,setMultiChecked:j,__self:void 0,__source:{fileName:n,lineNumber:23,columnNumber:12}})}]},s={render:(o,t)=>{const{checked:e,setChecked:r}=t;return c.createElement(a,{name:"id-1",id:"id-1",label:"Checkbox",...o,checked:e,onChange:()=>r(!e),__self:void 0,__source:{fileName:n,lineNumber:34,columnNumber:12}})}},d={render:(o,t)=>{const{checked:e,setChecked:r}=t;return c.createElement(h,{direction:"column",__self:void 0,__source:{fileName:n,lineNumber:43,columnNumber:12}},c.createElement(a,{name:"id-2",id:"id-2",label:"Disabled",checked:!1,onChange:()=>r(!e),disabled:!0,__self:void 0,__source:{fileName:n,lineNumber:44,columnNumber:9}}),c.createElement(a,{name:"id-2-1",id:"id-2-1",label:"Disabled",checked:!0,onChange:()=>r(!e),disabled:!0,__self:void 0,__source:{fileName:n,lineNumber:45,columnNumber:9}}))}},i={render:(o,t)=>c.createElement(h,{direction:"column",__self:void 0,__source:{fileName:n,lineNumber:51,columnNumber:12}},c.createElement(a,{name:"id-3",id:"id-3",label:"Error",checked:!1,onChange:()=>{},error:!0,__self:void 0,__source:{fileName:n,lineNumber:52,columnNumber:9}}),c.createElement(a,{name:"id-3-1",id:"id-3-1",label:"Error",checked:!0,onChange:()=>{},error:!0,__self:void 0,__source:{fileName:n,lineNumber:53,columnNumber:9}}))},l={render:(o,t)=>{const{checked:e,setChecked:r}=t;return c.createElement(a,{name:"id-4",id:"id-4",label:"AutoFocus",checked:e,onChange:()=>r(!e),autoFocus:!0,__self:void 0,__source:{fileName:n,lineNumber:63,columnNumber:12}})}},m={render:(o,t)=>{const{checked:e,setChecked:r}=t;return c.createElement(a,{"aria-describedby":"id-4",name:"id-4",id:"id-4",label:"AriaDescribedBy",checked:e,onChange:()=>r(!e),__self:void 0,__source:{fileName:n,lineNumber:72,columnNumber:12}})}},u={render:(o,t)=>{const{multiChecked:e,setMultiChecked:r}=t;return c.createElement(h,{direction:"column",gap:"0.5",__self:void 0,__source:{fileName:n,lineNumber:81,columnNumber:12}},c.createElement(a,{id:"id-3-1",name:"id-3-1",label:"Item 1",checked:e==null?void 0:e.state1,onChange:()=>r({...e,state1:!(e!=null&&e.state1)}),__self:void 0,__source:{fileName:n,lineNumber:82,columnNumber:9}}),c.createElement(a,{id:"id-3-2",name:"id-3-2",label:"Item 2",checked:e==null?void 0:e.state2,onChange:()=>r({...e,state2:!(e!=null&&e.state2)}),__self:void 0,__source:{fileName:n,lineNumber:86,columnNumber:9}}),c.createElement(a,{id:"id-3-3",name:"id-3-3",label:"Item 3",checked:e==null?void 0:e.state3,onChange:()=>r({...e,state3:!(e!=null&&e.state3)}),__self:void 0,__source:{fileName:n,lineNumber:90,columnNumber:9}}))}};var k,_,C;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox name="id-1" id="id-1" label="Checkbox" {...args} checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(C=(_=s.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var p,g,N;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Spacing direction="column">
        <Checkbox name="id-2" id="id-2" label="Disabled" checked={false} onChange={() => setChecked(!checked)} disabled />
        <Checkbox name="id-2-1" id="id-2-1" label="Disabled" checked={true} onChange={() => setChecked(!checked)} disabled />
      </Spacing>;
  }
}`,...(N=(g=d.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var f,x,E;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args, context) => {
    return <Spacing direction="column">
        <Checkbox name="id-3" id="id-3" label="Error" checked={false} onChange={() => {}} error />
        <Checkbox name="id-3-1" id="id-3-1" label="Error" checked={true} onChange={() => {}} error />
      </Spacing>;
  }
}`,...(E=(x=i.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var S,v,D;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox name="id-4" id="id-4" label="AutoFocus" checked={checked} onChange={() => setChecked(!checked)} autoFocus />;
  }
}`,...(D=(v=l.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var A,y,F;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox aria-describedby="id-4" name="id-4" id="id-4" label="AriaDescribedBy" checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(F=(y=m.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var I,M,B;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Spacing direction="column" gap="0.5">
        <Checkbox id="id-3-1" name="id-3-1" label="Item 1" checked={multiChecked?.state1} onChange={() => setMultiChecked({
        ...multiChecked,
        state1: !multiChecked?.state1
      })} />
        <Checkbox id="id-3-2" name="id-3-2" label="Item 2" checked={multiChecked?.state2} onChange={() => setMultiChecked({
        ...multiChecked,
        state2: !multiChecked?.state2
      })} />
        <Checkbox id="id-3-3" name="id-3-3" label="Item 3" checked={multiChecked?.state3} onChange={() => setMultiChecked({
        ...multiChecked,
        state3: !multiChecked?.state3
      })} />
      </Spacing>;
  }
}`,...(B=(M=u.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};const J=["Default","Disabled","Error","AutoFocus","AriaDescribedBy","Group"];export{m as AriaDescribedBy,l as AutoFocus,s as Default,d as Disabled,i as Error,u as Group,J as __namedExportsOrder,H as default};
//# sourceMappingURL=Checkbox.stories-6afadd63.js.map
