import{R as a,r as h}from"./index-f1f749bf.js";import{c as o}from"./clsx.m-1229b3e0.js";import{f as M}from"./focus-da9c5ec1.js";import{F as N}from"./Icon-92773a6f.js";import{b as m}from"./border-radius-4e388b32.js";import{S as V}from"./Spacing-197881ca.js";import"./_commonjsHelpers-042e6b4d.js";const A="zep-checkbox",n=({id:c,checked:r=!1,disabled:e=!1,error:t=!1,label:p,onChange:q,...D})=>a.createElement("span",{className:o(A,"inline-flex","flex-row","flex-wrap","items-center","justify-start","relative"),"data-testid":"zep-checkbox"},r&&a.createElement(N,{name:"Check",className:o(m,"w-zep-1_5","h-zep-1_5","text-white","z-10","bg-zep-grey-900","absolute","top-[-0.1px]","left-[-0.1px]",{"bg-zep-red-500 border-zep-red-500 ":t},{" hover:border-zep-red-500":t})}),a.createElement("input",{id:c,type:"checkbox",checked:r,onChange:e?void 0:q,className:o(m,M,"appearance-none","focus-visible:ring-offset-1","w-zep-1_5","h-zep-1_5","rounded","border","border-zep-grey-900",{"border-2 border-zep-red-500":t},{"cursor-not-allowed opacity-zep-40":e}),disabled:e,"data-testid":"zep-checkbox-input",...D}),a.createElement("label",{htmlFor:c,className:o("relative","z-20","ml-[-24px]","pl-[36px]",[e?"cursor-not-allowed opacity-zep-40":"cursor-pointer [&>div]:hover:border-zep-grey-900"])},p));try{n.displayName="Checkbox",n.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"() => void"}}}}}catch{}const J={title:"Components/Checkbox",component:n,tags:["autodocs"],argTypes:{label:{control:{disable:!0}},checked:{control:{disable:!0}},disabled:{control:{disable:!0}},error:{control:{disable:!0}}},decorators:[c=>{const[r,e]=h.useState(!1),[t,p]=h.useState({state1:!1,state2:!1,state3:!1});return a.createElement(c,{checked:r,setChecked:e,multiChecked:t,setMultiChecked:p})}]},s={render:(c,r)=>{const{checked:e,setChecked:t}=r;return a.createElement(n,{id:"id-1",label:"Checkbox",checked:e,onChange:()=>t(!e)})}},d={render:(c,r)=>{const{checked:e,setChecked:t}=r;return a.createElement(n,{id:"id-2",label:"Disabled",checked:e,onChange:()=>t(!e),disabled:!0})}},l={render:(c,r)=>{const{checked:e,setChecked:t}=r;return a.createElement(n,{id:"id-3",label:"Error",checked:e,onChange:()=>t(!e),error:!0})}},i={render:(c,r)=>{const{checked:e,setChecked:t}=r;return a.createElement(n,{id:"id-4",label:"AutoFocus",checked:e,onChange:()=>t(!e),autoFocus:!0})}},u={render:(c,r)=>{const{multiChecked:e,setMultiChecked:t}=r;return a.createElement(V,{direction:"column",gap:"0_5"},a.createElement(n,{id:"id-3-1",label:"Item 1",checked:e==null?void 0:e.state1,onChange:()=>t({...e,state1:!(e!=null&&e.state1)})}),a.createElement(n,{id:"id-3-2",label:"Item 2",checked:e==null?void 0:e.state2,onChange:()=>t({...e,state2:!(e!=null&&e.state2)})}),a.createElement(n,{id:"id-3-3",label:"Item 3",checked:e==null?void 0:e.state3,onChange:()=>t({...e,state3:!(e!=null&&e.state3)})}))}};var k,b,C;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox id="id-1" label="Checkbox" checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(C=(b=s.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var g,x,f;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox id="id-2" label="Disabled" checked={checked} onChange={() => setChecked(!checked)} disabled />;
  }
}`,...(f=(x=d.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var E,y,z;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox id="id-3" label="Error" checked={checked} onChange={() => setChecked(!checked)} error />;
  }
}`,...(z=(y=l.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var _,S,v;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox id="id-4" label="AutoFocus" checked={checked} onChange={() => setChecked(!checked)} autoFocus />;
  }
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var F,I,w;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Spacing direction="column" gap="0_5">
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
}`,...(w=(I=u.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const K=["Default","Disabled","Error","AutoFocus","Group"];export{i as AutoFocus,s as Default,d as Disabled,l as Error,u as Group,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Checkbox.stories-cd57c258.js.map
