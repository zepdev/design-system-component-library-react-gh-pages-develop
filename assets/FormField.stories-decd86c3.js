import{j as t}from"./clsx-42c82d7d.js";import{r as k}from"./index-39946eba.js";import{F as V}from"./FormField-97a15134.js";import{S}from"./Spacing-93fcb547.js";import{C as g}from"./Checkbox-0206cd10.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-cc0a57f7.js";import"./focus-d7245c50.js";const B={title:"Components/FormField",component:V,tags:["autodocs"],argTypes:{state:{control:{disable:!0}},messageId:{control:{disable:!0}},message:{control:{disable:!0}}},decorators:[s=>{const[r,e]=k.useState({state1:!1,state2:!1,state3:!1});return t.jsxDEV(s,{multiChecked:r,setMultiChecked:e},void 0,!1,{fileName:"/home/circleci/project/src/components/form-field/FormField.stories.tsx",lineNumber:33,columnNumber:12},globalThis)}]},i=({multiChecked:s,setMultiChecked:r,state:e,message:o,messageId:u,error:a=!1,name:f})=>t.jsxDEV("form",{children:t.jsxDEV(V,{id:u,message:o,state:e,children:t.jsxDEV(S,{direction:"column",gap:"0.5",children:[t.jsxDEV(g,{id:"id-3-1",label:"Item 1",checked:s==null?void 0:s.state1,onChange:()=>r({...s,state1:!s.state1}),error:a,name:f},void 0,!1,{fileName:"/home/circleci/project/src/components/form-field/FormField.stories.tsx",lineNumber:60,columnNumber:9},globalThis),t.jsxDEV(g,{id:"id-3-2",label:"Item 2",checked:s==null?void 0:s.state2,onChange:()=>r({...s,state2:!(s!=null&&s.state2)}),name:f},void 0,!1,{fileName:"/home/circleci/project/src/components/form-field/FormField.stories.tsx",lineNumber:64,columnNumber:9},globalThis),t.jsxDEV(g,{id:"id-3-3",label:"Item 3",checked:s==null?void 0:s.state3,onChange:()=>r({...s,state3:!(s!=null&&s.state3)}),name:f},void 0,!1,{fileName:"/home/circleci/project/src/components/form-field/FormField.stories.tsx",lineNumber:68,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/form-field/FormField.stories.tsx",lineNumber:59,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/form-field/FormField.stories.tsx",lineNumber:58,columnNumber:5},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/form-field/FormField.stories.tsx",lineNumber:57,columnNumber:7},globalThis),n={render:(s,r)=>{const{multiChecked:e,setMultiChecked:o}=r;return t.jsxDEV(i,{multiChecked:e,setMultiChecked:o,message:"Hint message",messageId:"1",name:"default"},void 0,!1,{fileName:"/home/circleci/project/src/components/form-field/FormField.stories.tsx",lineNumber:83,columnNumber:12},globalThis)}},c={render:(s,r)=>{const{multiChecked:e,setMultiChecked:o}=r;return t.jsxDEV(i,{multiChecked:e,setMultiChecked:o,state:"error",error:!0,message:"Error message",messageId:"2",name:"error"},void 0,!1,{fileName:"/home/circleci/project/src/components/form-field/FormField.stories.tsx",lineNumber:92,columnNumber:12},globalThis)}},m={render:(s,r)=>{const{multiChecked:e,setMultiChecked:o}=r;return t.jsxDEV(i,{multiChecked:e,setMultiChecked:o,state:"info",message:"Info message",messageId:"3",name:"info"},void 0,!1,{fileName:"/home/circleci/project/src/components/form-field/FormField.stories.tsx",lineNumber:101,columnNumber:12},globalThis)}},l={render:(s,r)=>{const{multiChecked:e,setMultiChecked:o}=r,a=!(e!=null&&e.state1)||!(e!=null&&e.state2)||!(e!=null&&e.state3)?"All required":"";return t.jsxDEV(i,{multiChecked:e,setMultiChecked:o,message:a,messageId:"4",name:"allRequired"},void 0,!1,{fileName:"/home/circleci/project/src/components/form-field/FormField.stories.tsx",lineNumber:112,columnNumber:12},globalThis)}},d={render:(s,r)=>{const{multiChecked:e,setMultiChecked:o}=r,a=!(e!=null&&e.state1)&&!(e!=null&&e.state2)&&!(e!=null&&e.state3)?"At least one required":"";return t.jsxDEV(i,{multiChecked:e,setMultiChecked:o,message:a,messageId:"4",name:"singleRequired"},void 0,!1,{fileName:"/home/circleci/project/src/components/form-field/FormField.stories.tsx",lineNumber:123,columnNumber:12},globalThis)}};var p,x,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} message="Hint message" messageId="1" name="default" />;
  }
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var h,N,F;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} state="error" error message="Error message" messageId="2" name="error" />;
  }
}`,...(F=(N=c.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var j,E,q;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} state="info" message="Info message" messageId="3" name="info" />;
  }
}`,...(q=(E=m.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var M,I,D;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    const required = !multiChecked?.state1 || !multiChecked?.state2 || !multiChecked?.state3;
    const message = required ? 'All required' : '';
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} message={message} messageId="4" name="allRequired" />;
  }
}`,...(D=(I=l.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var v,T,C;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    const required = !multiChecked?.state1 && !multiChecked?.state2 && !multiChecked?.state3;
    const message = required ? 'At least one required' : '';
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} message={message} messageId="4" name="singleRequired" />;
  }
}`,...(C=(T=d.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const G=["Default","Error","Info","AllRequired","SingleRequired"];export{l as AllRequired,n as Default,c as Error,m as Info,d as SingleRequired,G as __namedExportsOrder,B as default};
//# sourceMappingURL=FormField.stories-decd86c3.js.map
