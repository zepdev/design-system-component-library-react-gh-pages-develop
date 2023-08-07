import{r as _,R as s}from"./index-8db94870.js";import{F}from"./FormField-fd48c13c.js";import{S as y}from"./Spacing-2c30780b.js";import{C as u}from"./Checkbox-9bfaa602.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-1229b3e0.js";import"./Icon-436c9414.js";import"./focus-8391b0c7.js";import"./border-radius-595a2ba1.js";const K={title:"Components/FormField",component:F,tags:["autodocs"],argTypes:{state:{control:{disable:!0}},messageId:{control:{disable:!0}},required:{control:{disable:!0}},message:{control:{disable:!0}}},decorators:[t=>{const[r,e]=_.useState({state1:!1,state2:!1,state3:!1});return s.createElement(t,{multiChecked:r,setMultiChecked:e})}]},o=({multiChecked:t,setMultiChecked:r,state:e,message:a,messageId:n,error:D=!1,required:H=!1})=>s.createElement("form",null,s.createElement(F,{id:n,message:a,state:e,required:H},s.createElement(y,{direction:"column",gap:"0.5"},s.createElement(u,{id:"id-3-1",label:"Item 1",checked:t==null?void 0:t.state1,onChange:()=>r({...t,state1:!t.state1}),error:D}),s.createElement(u,{id:"id-3-2",label:"Item 2",checked:t==null?void 0:t.state2,onChange:()=>r({...t,state2:!(t!=null&&t.state2)})}),s.createElement(u,{id:"id-3-3",label:"Item 3",checked:t==null?void 0:t.state3,onChange:()=>r({...t,state3:!(t!=null&&t.state3)})})))),c={render:(t,r)=>{const{multiChecked:e,setMultiChecked:a}=r;return s.createElement(o,{multiChecked:e,setMultiChecked:a,message:"Hint message",messageId:"1"})}},d={render:(t,r)=>{const{multiChecked:e,setMultiChecked:a}=r;return s.createElement(o,{multiChecked:e,setMultiChecked:a,state:"error",error:!0,message:"Error message",messageId:"2"})}},m={render:(t,r)=>{const{multiChecked:e,setMultiChecked:a}=r;return s.createElement(o,{multiChecked:e,setMultiChecked:a,state:"info",message:"Info message",messageId:"3"})}},l={render:(t,r)=>{const{multiChecked:e,setMultiChecked:a}=r,n=!(e!=null&&e.state1)||!(e!=null&&e.state2)||!(e!=null&&e.state3);return s.createElement(o,{multiChecked:e,setMultiChecked:a,required:n,message:"All required",messageId:"4"})}},i={render:(t,r)=>{const{multiChecked:e,setMultiChecked:a}=r,n=!(e!=null&&e.state1)&&!(e!=null&&e.state2)&&!(e!=null&&e.state3);return s.createElement(o,{multiChecked:e,setMultiChecked:a,required:n,message:"At least one required",messageId:"4"})}};var g,p,E;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} message="Hint message" messageId="1" />;
  }
}`,...(E=(p=c.parameters)==null?void 0:p.docs)==null?void 0:E.source}}};var x,f,M;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} state="error" error message="Error message" messageId="2" />;
  }
}`,...(M=(f=d.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,q,h;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} state="info" message="Info message" messageId="3" />;
  }
}`,...(h=(q=m.parameters)==null?void 0:q.docs)==null?void 0:h.source}}};var C,k,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    const required = !multiChecked?.state1 || !multiChecked?.state2 || !multiChecked?.state3;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} required={required} message="All required" messageId="4" />;
  }
}`,...(S=(k=l.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var b,A,R;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    const required = !multiChecked?.state1 && !multiChecked?.state2 && !multiChecked?.state3;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} required={required} message="At least one required" messageId="4" />;
  }
}`,...(R=(A=i.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const L=["Default","Error","Info","AllRequired","SingleRequired"];export{l as AllRequired,c as Default,d as Error,m as Info,i as SingleRequired,L as __namedExportsOrder,K as default};
//# sourceMappingURL=FormField.stories-719d5865.js.map
