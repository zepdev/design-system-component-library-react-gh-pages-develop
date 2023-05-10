import{R as a,r as w}from"./index-f1f749bf.js";import{c as n}from"./clsx.m-1229b3e0.js";import{b as u,f as F}from"./focus-54221667.js";import{D as q}from"./Icon-fc7756ea.js";import"./_commonjsHelpers-042e6b4d.js";const N="zep-checkbox",o=({id:c,checked:r=!1,disabled:e=!1,error:t=!1,label:_,onChange:v,...D})=>a.createElement("div",{className:n("inline-flex","flex-row","flex-wrap","items-center","justify-start","relative")},r&&a.createElement(q,{name:"Check",className:n(u,"w-zep-1_5","h-zep-1_5","text-white","z-10","bg-zep-grey-900","absolute","top-[-0.1px]","left-[-0.1px]",{"bg-zep-red-500 border-zep-red-500 ":t},{" hover:border-zep-red-500":t})}),a.createElement("input",{id:c,type:"checkbox",checked:r,onChange:v,className:n(u,F,"appearance-none","focus-visible:ring-offset-1","w-zep-1_5","h-zep-1_5","rounded","border","border-zep-grey-900",{"border-2 border-zep-red-500":t},{"cursor-not-allowed opacity-zep-40":e}),disabled:e,...D}),a.createElement("label",{htmlFor:c,className:n(N,"relative","z-20","ml-[-24px]","pl-[36px]",[e?"cursor-not-allowed opacity-zep-40":"cursor-pointer [&>div]:hover:border-zep-grey-900"])},_));try{o.displayName="Checkbox",o.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"() => void"}}}}}catch{}const j={title:"Components/Checkbox",component:o,tags:["autodocs"],argTypes:{label:{control:{disable:!0}},checked:{control:{disable:!0}},disabled:{control:{disable:!0}},error:{control:{disable:!0}}},decorators:[c=>{const[r,e]=w.useState(!1);return a.createElement(c,{checked:r,setChecked:e})}]},s={render:(c,r)=>{const{checked:e,setChecked:t}=r;return a.createElement(o,{id:"id-1",label:"Checkbox",checked:e,onChange:()=>t(!e)})}},d={render:(c,r)=>{const{checked:e,setChecked:t}=r;return a.createElement(o,{id:"id-2",label:"Disabled",checked:e,onChange:()=>t(!e),disabled:!0})}},l={render:(c,r)=>{const{checked:e,setChecked:t}=r;return a.createElement(o,{id:"id-3",label:"Error",checked:e,onChange:()=>t(!e),error:!0})}},i={render:(c,r)=>{const{checked:e,setChecked:t}=r;return a.createElement(o,{id:"id-4",label:"AutoFocus",checked:e,onChange:()=>t(!e),autoFocus:!0})}};var p,h,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox id="id-1" label="Checkbox" checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var b,k,C;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox id="id-2" label="Disabled" checked={checked} onChange={() => setChecked(!checked)} disabled />;
  }
}`,...(C=(k=d.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var f,g,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox id="id-3" label="Error" checked={checked} onChange={() => setChecked(!checked)} error />;
  }
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,z,E;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox id="id-4" label="AutoFocus" checked={checked} onChange={() => setChecked(!checked)} autoFocus />;
  }
}`,...(E=(z=i.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};const O=["Default","Disabled","Error","AutoFocus"];export{i as AutoFocus,s as Default,d as Disabled,l as Error,O as __namedExportsOrder,j as default};
//# sourceMappingURL=Checkbox.stories-d09be60e.js.map
