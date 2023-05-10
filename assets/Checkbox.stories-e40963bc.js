import{R as a,r as f}from"./index-f1f749bf.js";import{c as l}from"./clsx.m-1229b3e0.js";import{b as y,f as z}from"./focus-54221667.js";import{D as E}from"./Icon-fc7756ea.js";import"./_commonjsHelpers-042e6b4d.js";const _="zep-checkbox",n=({checked:r,disabled:t,error:e,label:o,onChange:x})=>a.createElement("label",{className:l(_,"rounded","inline-flex","flex-row","flex-wrap","items-center","justify-start","relative","select-none",[t?"cursor-not-allowed opacity-zep-40":"cursor-pointer [&>div]:hover:border-zep-grey-900"],{" [&>div]:hover:border-zep-red-500":e})},a.createElement("input",{type:"checkbox",checked:r,onChange:x,className:"sr-only",disabled:t}),a.createElement("div",{tabIndex:0,className:l(y,z,"focus-visible:ring-offset-1","w-zep-1_5","h-zep-1_5","rounded","border","border-zep-grey-900",[r?"bg-zep-grey-900 border-zep-grey-900":"bg-white"],{"bg-zep-red-500 border-zep-red-500 ":e&&r},{"border-zep-red-500":e&&!r})},r&&a.createElement(E,{name:"Check",className:l("w-zep-1_5 h-zep-1_5 text-white absolute top-[-0.1px] left-[-0.1px]")})),a.createElement("span",{className:"ml-zep-0_75"},o));try{n.displayName="Checkbox",n.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"() => void"}}}}}catch{}const S={title:"Components/Checkbox",component:n,tags:["autodocs"],argTypes:{label:{control:{disable:!0}},checked:{control:{disable:!0}},disabled:{control:{disable:!0}},error:{control:{disable:!0}}},decorators:[r=>{const[t,e]=f.useState(!1);return a.createElement(r,{checked:t,setChecked:e})}]},c={render:(r,t)=>{const{checked:e,setChecked:o}=t;return a.createElement(n,{label:"Checkbox",checked:e,onChange:()=>o(!e)})}},s={render:(r,t)=>{const{checked:e,setChecked:o}=t;return a.createElement(n,{label:"Disabled",checked:e,onChange:()=>o(!e),disabled:!0})}},d={render:(r,t)=>{const{checked:e,setChecked:o}=t;return a.createElement(n,{label:"Error",checked:e,onChange:()=>o(!e),error:!0})}};var p,i,u;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox label="Checkbox" checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(u=(i=c.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,h,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox label="Disabled" checked={checked} onChange={() => setChecked(!checked)} disabled />;
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var k,g,C;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox label="Error" checked={checked} onChange={() => setChecked(!checked)} error />;
  }
}`,...(C=(g=d.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const V=["Default","Disabled","Error"];export{c as Default,s as Disabled,d as Error,V as __namedExportsOrder,S as default};
//# sourceMappingURL=Checkbox.stories-e40963bc.js.map
