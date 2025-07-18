import{j as t}from"./clsx-24df0f47.js";import{r as k}from"./index-b1e7e93e.js";import{F as V}from"./Fieldset-9dbead7f.js";import{S}from"./Spacing-e25630db.js";import{C as p}from"./Checkbox-04fb80ee.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-9e12b6e5.js";import"./index-b7fee60d.js";import"./focus-d7245c50.js";const G={title:"Components/Fieldset",component:V,tags:["autodocs"],argTypes:{state:{control:{disable:!0}},messageId:{control:{disable:!0}},message:{control:{disable:!0}}},decorators:[s=>{const[r,e]=k.useState({state1:!1,state2:!1,state3:!1});return t.jsxDEV(s,{multiChecked:r,setMultiChecked:e},void 0,!1,{fileName:"/home/circleci/project/src/components/fieldset/Fieldset.stories.tsx",lineNumber:31,columnNumber:14},globalThis)}]},n=({multiChecked:s,setMultiChecked:r,state:e,message:o,messageId:u,error:a=!1,name:g})=>t.jsxDEV("form",{children:t.jsxDEV(V,{id:u,message:o,state:e,children:t.jsxDEV(S,{direction:"column",gap:"0.5",children:[t.jsxDEV(p,{id:"id-3-1",label:"Item 1",checked:s==null?void 0:s.state1,onChange:()=>r({...s,state1:!s.state1}),error:a,name:g},void 0,!1,{fileName:"/home/circleci/project/src/components/fieldset/Fieldset.stories.tsx",lineNumber:50,columnNumber:9},globalThis),t.jsxDEV(p,{id:"id-3-2",label:"Item 2",checked:s==null?void 0:s.state2,onChange:()=>r({...s,state2:!(s!=null&&s.state2)}),name:g},void 0,!1,{fileName:"/home/circleci/project/src/components/fieldset/Fieldset.stories.tsx",lineNumber:58,columnNumber:9},globalThis),t.jsxDEV(p,{id:"id-3-3",label:"Item 3",checked:s==null?void 0:s.state3,onChange:()=>r({...s,state3:!(s!=null&&s.state3)}),name:g},void 0,!1,{fileName:"/home/circleci/project/src/components/fieldset/Fieldset.stories.tsx",lineNumber:65,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/fieldset/Fieldset.stories.tsx",lineNumber:49,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/fieldset/Fieldset.stories.tsx",lineNumber:48,columnNumber:5},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/fieldset/Fieldset.stories.tsx",lineNumber:47,columnNumber:3},globalThis),i={render:(s,r)=>{const{multiChecked:e,setMultiChecked:o}=r;return t.jsxDEV(n,{multiChecked:e,setMultiChecked:o,message:"Hint message",messageId:"1",name:"default"},void 0,!1,{fileName:"/home/circleci/project/src/components/fieldset/Fieldset.stories.tsx",lineNumber:84,columnNumber:7},globalThis)}},c={render:(s,r)=>{const{multiChecked:e,setMultiChecked:o}=r;return t.jsxDEV(n,{multiChecked:e,setMultiChecked:o,state:"error",error:!0,message:"Error message",messageId:"2",name:"error"},void 0,!1,{fileName:"/home/circleci/project/src/components/fieldset/Fieldset.stories.tsx",lineNumber:99,columnNumber:7},globalThis)}},l={render:(s,r)=>{const{multiChecked:e,setMultiChecked:o}=r;return t.jsxDEV(n,{multiChecked:e,setMultiChecked:o,state:"info",message:"Info message",messageId:"3",name:"info"},void 0,!1,{fileName:"/home/circleci/project/src/components/fieldset/Fieldset.stories.tsx",lineNumber:116,columnNumber:7},globalThis)}},m={render:(s,r)=>{const{multiChecked:e,setMultiChecked:o}=r,a=!(e!=null&&e.state1)||!(e!=null&&e.state2)||!(e!=null&&e.state3)?"All required":"";return t.jsxDEV(n,{multiChecked:e,setMultiChecked:o,message:a,messageId:"4",name:"allRequired"},void 0,!1,{fileName:"/home/circleci/project/src/components/fieldset/Fieldset.stories.tsx",lineNumber:134,columnNumber:7},globalThis)}},d={render:(s,r)=>{const{multiChecked:e,setMultiChecked:o}=r,a=!(e!=null&&e.state1)&&!(e!=null&&e.state2)&&!(e!=null&&e.state3)?"At least one required":"";return t.jsxDEV(n,{multiChecked:e,setMultiChecked:o,message:a,messageId:"4",name:"singleRequired"},void 0,!1,{fileName:"/home/circleci/project/src/components/fieldset/Fieldset.stories.tsx",lineNumber:151,columnNumber:7},globalThis)}};var f,x,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} message="Hint message" messageId="1" name="default" />;
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var h,N,j;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} state="error" error message="Error message" messageId="2" name="error" />;
  }
}`,...(j=(N=c.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var E,q,M;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} state="info" message="Info message" messageId="3" name="info" />;
  }
}`,...(M=(q=l.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var I,D,F;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    const required = !multiChecked?.state1 || !multiChecked?.state2 || !multiChecked?.state3;
    const message = required ? 'All required' : '';
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} message={message} messageId="4" name="allRequired" />;
  }
}`,...(F=(D=m.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var v,T,C;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    const required = !multiChecked?.state1 && !multiChecked?.state2 && !multiChecked?.state3;
    const message = required ? 'At least one required' : '';
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} message={message} messageId="4" name="singleRequired" />;
  }
}`,...(C=(T=d.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const J=["Default","Error","Info","AllRequired","SingleRequired"];export{m as AllRequired,i as Default,c as Error,l as Info,d as SingleRequired,J as __namedExportsOrder,G as default};
