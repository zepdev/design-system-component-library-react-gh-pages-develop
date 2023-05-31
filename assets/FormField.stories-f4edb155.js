import{R as a,r as N}from"./index-f1f749bf.js";import{c as f}from"./clsx.m-1229b3e0.js";import{F as V}from"./Icon-38ba44d5.js";import{S as w}from"./Spacing-6b669eb7.js";import{C as g}from"./Checkbox-b10546b4.js";import"./_commonjsHelpers-042e6b4d.js";import"./focus-da9c5ec1.js";import"./border-radius-4e388b32.js";const z="zep-form-field",m=({id:t,required:r,children:e,state:s="default",message:n,...p})=>a.createElement("div",{className:f(z,"inline-flex","flex-col","flex-nowrap"),"data-testid":"zep-form-field",...p},e,a.createElement("span",{id:t,className:f({"text-red-500 ":s==="error"||r,"text-green-500":s==="success"},"mt-2 flex flex-row items-center gap-2")},(s==="error"||r)&&a.createElement(V,{name:"Warning",className:"text-red-500"}),n));try{m.displayName="FormField",m.__docgenInfo={description:"",displayName:"FormField",props:{required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"default"'}]}}}}}catch{}const J={title:"Components/FormField",component:m,tags:["autodocs"],argTypes:{state:{control:{disable:!0}},id:{control:{disable:!0}},required:{control:{disable:!0}},message:{control:{disable:!0}}},decorators:[t=>{const[r,e]=N.useState({state1:!1,state2:!1,state3:!1});return a.createElement(t,{multiChecked:r,setMultiChecked:e})}]},o=({multiChecked:t,setMultiChecked:r,state:e,message:s,id:n,error:p=!1,required:I=!1})=>a.createElement("form",null,a.createElement(m,{id:n,message:s,state:e,required:I},a.createElement(w,{direction:"column",gap:"0.5"},a.createElement(g,{id:"id-3-1",label:"Item 1",checked:t==null?void 0:t.state1,onChange:()=>r({...t,state1:!t.state1}),error:p}),a.createElement(g,{id:"id-3-2",label:"Item 2",checked:t==null?void 0:t.state2,onChange:()=>r({...t,state2:!(t!=null&&t.state2)})}),a.createElement(g,{id:"id-3-3",label:"Item 3",checked:t==null?void 0:t.state3,onChange:()=>r({...t,state3:!(t!=null&&t.state3)})})))),c={render:(t,r)=>{const{multiChecked:e,setMultiChecked:s}=r;return a.createElement(o,{multiChecked:e,setMultiChecked:s,message:"Hint message",id:"1"})}},l={render:(t,r)=>{const{multiChecked:e,setMultiChecked:s}=r;return a.createElement(o,{multiChecked:e,setMultiChecked:s,state:"error",error:!0,message:"Error message",id:"2"})}},d={render:(t,r)=>{const{multiChecked:e,setMultiChecked:s}=r;return a.createElement(o,{multiChecked:e,setMultiChecked:s,state:"success",message:"Success message",id:"3"})}},i={render:(t,r)=>{const{multiChecked:e,setMultiChecked:s}=r,n=!(e!=null&&e.state1)||!(e!=null&&e.state2)||!(e!=null&&e.state3);return a.createElement(o,{multiChecked:e,setMultiChecked:s,required:n,message:"All required",id:"4"})}},u={render:(t,r)=>{const{multiChecked:e,setMultiChecked:s}=r,n=!(e!=null&&e.state1)&&!(e!=null&&e.state2)&&!(e!=null&&e.state3);return a.createElement(o,{multiChecked:e,setMultiChecked:s,required:n,message:"At least one required",id:"4"})}};var x,E,q;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} message="Hint message" id="1" />;
  }
}`,...(q=(E=c.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var M,S,h;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} state="error" error message="Error message" id="2" />;
  }
}`,...(h=(S=l.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var C,F,k;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} state="success" message="Success message" id="3" />;
  }
}`,...(k=(F=d.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var _,b,y;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    const required = !multiChecked?.state1 || !multiChecked?.state2 || !multiChecked?.state3;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} required={required} message="All required" id="4" />;
  }
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,A,R;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    const required = !multiChecked?.state1 && !multiChecked?.state2 && !multiChecked?.state3;
    return <Example multiChecked={multiChecked} setMultiChecked={setMultiChecked} required={required} message="At least one required" id="4" />;
  }
}`,...(R=(A=u.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const K=["Default","Error","Success","AllRequired","SingleRequired"];export{i as AllRequired,c as Default,l as Error,u as SingleRequired,d as Success,K as __namedExportsOrder,J as default};
//# sourceMappingURL=FormField.stories-f4edb155.js.map
