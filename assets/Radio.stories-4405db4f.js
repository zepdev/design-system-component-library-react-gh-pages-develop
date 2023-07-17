import{R as a,r as A}from"./index-8db94870.js";import{c as n}from"./clsx.m-1229b3e0.js";import{f as B}from"./focus-8391b0c7.js";import{b as G}from"./border-radius-595a2ba1.js";import{S as q}from"./Spacing-9c306d71.js";import"./_commonjsHelpers-042e6b4d.js";const j="zep-radio",l=({id:o,name:t,value:r=o,selected:e=!1,disabled:d=!1,error:s=!1,label:w,tabIndex:I=0,onChange:k,...N})=>a.createElement("span",{className:n(j,"inline-flex","flex-row","flex-wrap","items-center","justify-start","relative","group",{"cursor-not-allowed opacity-zep-40":d}),"data-testid":"zep-radio"},e&&a.createElement("span",{className:n("absolute","z-10","absolute","border-white",{"w-[22px] h-[22px] top-[1px] left-[1px] border-[6px]":!s},{"w-[20px] h-[20px] top-[2px] left-[2px] border-[5px]":s},"rounded-full",[s?"bg-zep-error":"  bg-zep-darkgrey-500"],{"group-hover:bg-zep-darkgrey-300":!d&&!s})}),a.createElement("input",{id:o,value:r,name:t,type:"radio",tabIndex:I,checked:e,onChange:d?void 0:k,className:n(G,B,"appearance-none","focus-visible:ring-offset-1","w-zep-1.5","h-zep-1.5","rounded-full","border","border-zep-darkgrey-500",{"border-zep-2":s},{"group-hover:border-zep-darkgrey-300":!d&&!s},{"bg-zep-error border-zep-error ":s&&e},{"border-zep-error":s&&!e}),disabled:d,"data-testid":"zep-radio-input",...N}),a.createElement("label",{htmlFor:o,className:n("relative","z-20","ml-[-24px]","pl-[36px]",[{"cursor-pointer [&>div]:hover:border-zep-darkgrey-500":!d}])},w));try{l.displayName="Radio",l.__docgenInfo={description:"",displayName:"Radio",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"() => void"}}}}}catch{}const L={title:"Components/Radio",component:l,tags:["autodocs"],argTypes:{label:{control:{disable:!0}},selected:{control:{disable:!0}},disabled:{control:{disable:!0}},error:{control:{disable:!0}}},decorators:[o=>{const[t,r]=A.useState("");return a.createElement(o,{value:t,setValue:r})}]},i={render:(o,t)=>{const{value:r,setValue:e}=t;return a.createElement(l,{id:"id-1",label:"Radio",selected:r==="radio",onChange:()=>e("radio")})}},c={render:(o,t)=>{const{value:r,setValue:e}=t;return a.createElement(q,{direction:"column"},a.createElement(l,{id:"id-2",label:"Disabled",selected:r==="disabled",onChange:()=>e("disabled"),disabled:!0}),a.createElement(l,{id:"id-2-1",label:"Disabled",selected:!0,onChange:()=>e("disabled"),disabled:!0}))}},u={render:(o,t)=>{const{value:r,setValue:e}=t;return a.createElement(l,{id:"id-3",label:"Error",selected:r==="error",onChange:()=>e("error"),error:!0})}},p={render:(o,t)=>{const{value:r,setValue:e}=t;return a.createElement(l,{"aria-describedby":"id-3",id:"id-3",label:"Error",selected:r==="error",onChange:()=>e("error"),error:!0})}},m={render:(o,t)=>{const{value:r,setValue:e}=t;return a.createElement(q,{direction:"column",gap:"0.5"},a.createElement(l,{id:"id-3-1",label:"Item 1",selected:r==="item-1",onChange:()=>e("item-1")}),a.createElement(l,{id:"id-3-2",label:"Item 2",selected:r==="item-2",onChange:()=>e("item-2")}),a.createElement(l,{id:"id-3-3",label:"Item 3",selected:r==="item-3",onChange:()=>e("item-3")}))}};var b,g,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio id="id-1" label="Radio" selected={value === 'radio'} onChange={() => setValue('radio')} />;
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,h,x;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Spacing direction="column">
        <Radio id="id-2" label="Disabled" selected={value === 'disabled'} onChange={() => setValue('disabled')} disabled />
        <Radio id="id-2-1" label="Disabled" selected={true} onChange={() => setValue('disabled')} disabled />
      </Spacing>;
  }
}`,...(x=(h=c.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var V,y,E;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio id="id-3" label="Error" selected={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(E=(y=u.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var C,R,z;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio aria-describedby="id-3" id="id-3" label="Error" selected={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(z=(R=p.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var S,D,_;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Spacing direction="column" gap="0.5">
        <Radio id="id-3-1" label="Item 1" selected={value === 'item-1'} onChange={() => setValue('item-1')} />
        <Radio id="id-3-2" label="Item 2" selected={value === 'item-2'} onChange={() => setValue('item-2')} />
        <Radio id="id-3-3" label="Item 3" selected={value === 'item-3'} onChange={() => setValue('item-3')} />
      </Spacing>;
  }
}`,...(_=(D=m.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const M=["Default","Disabled","Error","AriaDescribedBy","Group"];export{p as AriaDescribedBy,i as Default,c as Disabled,u as Error,m as Group,M as __namedExportsOrder,L as default};
//# sourceMappingURL=Radio.stories-4405db4f.js.map
