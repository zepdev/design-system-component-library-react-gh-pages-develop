import{r as j,R as t}from"./index-9edec130.js";import{F as A}from"./FormField-bf15daae.js";import{S as D}from"./Spacing-bc043d67.js";import{C as f}from"./Checkbox-6d85807b.js";import"./_commonjsHelpers-de833af9.js";import"./clsx.m-1229b3e0.js";import"./Icon-00b0a328.js";import"./focus-d7245c50.js";var a="/home/circleci/project/src/components/form-field/FormField.stories.tsx";const J={title:"Components/FormField",component:A,tags:["autodocs"],argTypes:{state:{control:{disable:!0}},messageId:{control:{disable:!0}},message:{control:{disable:!0}}},decorators:[r=>{const[s,e]=j.useState({state1:!1,state2:!1,state3:!1});return t.createElement(r,{multiChecked:s,setMultiChecked:e,__self:void 0,__source:{fileName:a,lineNumber:33,columnNumber:12}})}]},m=({multiChecked:r,setMultiChecked:s,state:e,message:o,messageId:g,error:n=!1,name:_})=>t.createElement("form",{__self:void 0,__source:{fileName:a,lineNumber:57,columnNumber:7}},t.createElement(A,{id:g,message:o,state:e,__self:void 0,__source:{fileName:a,lineNumber:58,columnNumber:5}},t.createElement(D,{direction:"column",gap:"0.5",__self:void 0,__source:{fileName:a,lineNumber:59,columnNumber:7}},t.createElement(f,{id:"id-3-1",label:"Item 1",checked:r==null?void 0:r.state1,onChange:()=>s({...r,state1:!r.state1}),error:n,name:_,__self:void 0,__source:{fileName:a,lineNumber:60,columnNumber:9}}),t.createElement(f,{id:"id-3-2",label:"Item 2",checked:r==null?void 0:r.state2,onChange:()=>s({...r,state2:!(r!=null&&r.state2)}),name:_,__self:void 0,__source:{fileName:a,lineNumber:64,columnNumber:9}}),t.createElement(f,{id:"id-3-3",label:"Item 3",checked:r==null?void 0:r.state3,onChange:()=>s({...r,state3:!(r!=null&&r.state3)}),name:_,__self:void 0,__source:{fileName:a,lineNumber:68,columnNumber:9}})))),c={render:(r,s)=>{const{multiChecked:e,setMultiChecked:o}=s;return t.createElement(m,{multiChecked:e,setMultiChecked:o,message:"Hint message",messageId:"1",name:"default",__self:void 0,__source:{fileName:a,lineNumber:83,columnNumber:12}})}},l={render:(r,s)=>{const{multiChecked:e,setMultiChecked:o}=s;return t.createElement(m,{multiChecked:e,setMultiChecked:o,state:"error",error:!0,message:"Error message",messageId:"2",name:"error",__self:void 0,__source:{fileName:a,lineNumber:92,columnNumber:12}})}},i={render:(r,s)=>{const{multiChecked:e,setMultiChecked:o}=s;return t.createElement(m,{multiChecked:e,setMultiChecked:o,state:"info",message:"Info message",messageId:"3",name:"info",__self:void 0,__source:{fileName:a,lineNumber:101,columnNumber:12}})}},u={render:(r,s)=>{const{multiChecked:e,setMultiChecked:o}=s,n=!(e!=null&&e.state1)||!(e!=null&&e.state2)||!(e!=null&&e.state3)?"All required":"";return t.createElement(m,{multiChecked:e,setMultiChecked:o,message:n,messageId:"4",name:"allRequired",__self:void 0,__source:{fileName:a,lineNumber:112,columnNumber:12}})}},d={render:(r,s)=>{const{multiChecked:e,setMultiChecked:o}=s,n=!(e!=null&&e.state1)&&!(e!=null&&e.state2)&&!(e!=null&&e.state3)?"At least one required":"";return t.createElement(m,{multiChecked:e,setMultiChecked:o,message:n,messageId:"4",name:"singleRequired",__self:void 0,__source:{fileName:a,lineNumber:123,columnNumber:12}})}};var p,N,b;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} message="Hint message" messageId="1" name="default" />;
  }
}`,...(b=(N=c.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var E,x,q;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} state="error" error message="Error message" messageId="2" name="error" />;
  }
}`,...(q=(x=l.parameters)==null?void 0:x.docs)==null?void 0:q.source}}};var M,I,h;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} state="info" message="Info message" messageId="3" name="info" />;
  }
}`,...(h=(I=i.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var v,C,k;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    const required = !multiChecked?.state1 || !multiChecked?.state2 || !multiChecked?.state3;
    const message = required ? 'All required' : '';
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} message={message} messageId="4" name="allRequired" />;
  }
}`,...(k=(C=u.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var R,S,F;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    const required = !multiChecked?.state1 && !multiChecked?.state2 && !multiChecked?.state3;
    const message = required ? 'At least one required' : '';
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} message={message} messageId="4" name="singleRequired" />;
  }
}`,...(F=(S=d.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const K=["Default","Error","Info","AllRequired","SingleRequired"];export{u as AllRequired,c as Default,l as Error,i as Info,d as SingleRequired,K as __namedExportsOrder,J as default};
//# sourceMappingURL=FormField.stories-f3b1b389.js.map
