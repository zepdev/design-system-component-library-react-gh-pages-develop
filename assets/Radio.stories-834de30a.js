import{R as t,r as k}from"./index-f1f749bf.js";import{c as d}from"./clsx.m-1229b3e0.js";import{f as A}from"./focus-da9c5ec1.js";import{b as B}from"./border-radius-4e388b32.js";import{S as G}from"./Spacing-197881ca.js";import"./_commonjsHelpers-042e6b4d.js";const j="zep-radio",l=({id:o,name:a,value:r=o,selected:e=!1,disabled:s=!1,error:m=!1,label:D,tabIndex:w=0,onChange:I,...N})=>t.createElement("span",{className:d(j,"inline-flex","flex-row","flex-wrap","items-center","justify-start","relative"),"data-testid":"zep-radio"},e&&t.createElement("span",{className:d("absolute","w-[22px]","h-[22px]","z-10","absolute","top-[1px]","left-[1px]","border-white","border-[6px]","rounded-full",[m?"bg-zep-red-500":"bg-black"])}),t.createElement("input",{id:o,value:r,name:a,type:"radio",tabIndex:w,checked:e,onChange:s?void 0:I,className:d(B,A,"appearance-none","focus-visible:ring-offset-1","w-zep-1_5","h-zep-1_5","rounded-full","border","border-zep-grey-900",[e?"bg-zep-grey-900 border-zep-grey-900":"bg-white"],{"opacity-zep-40":s},{"bg-zep-red-500 border-zep-red-500 ":m&&e},{"border-zep-red-500":m&&!e}),disabled:s,"data-testid":"zep-radio-input",...N}),t.createElement("label",{htmlFor:o,className:d("relative","z-20","ml-[-24px]","pl-[36px]",[s?"cursor-not-allowed opacity-zep-40":"cursor-pointer [&>div]:hover:border-zep-grey-900"])},D));try{l.displayName="Radio",l.__docgenInfo={description:"",displayName:"Radio",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"() => void"}}}}}catch{}const L={title:"Components/Radio",component:l,tags:["autodocs"],argTypes:{label:{control:{disable:!0}},selected:{control:{disable:!0}},disabled:{control:{disable:!0}},error:{control:{disable:!0}}},decorators:[o=>{const[a,r]=k.useState("");return t.createElement(o,{value:a,setValue:r})}]},n={render:(o,a)=>{const{value:r,setValue:e}=a;return t.createElement(l,{id:"id-1",label:"Radio",selected:r==="radio",onChange:()=>e("radio")})}},i={render:(o,a)=>{const{value:r,setValue:e}=a;return t.createElement(l,{id:"id-2",label:"Disabled",selected:r==="disabled",onChange:()=>e("disabled"),disabled:!0})}},c={render:(o,a)=>{const{value:r,setValue:e}=a;return t.createElement(l,{id:"id-3",label:"Error",selected:r==="error",onChange:()=>e("error"),error:!0})}},u={render:(o,a)=>{const{value:r,setValue:e}=a;return t.createElement(l,{"aria-describedby":"id-3",id:"id-3",label:"Error",selected:r==="error",onChange:()=>e("error"),error:!0})}},p={render:(o,a)=>{const{value:r,setValue:e}=a;return t.createElement(G,{direction:"column",gap:"0_5"},t.createElement(l,{id:"id-3-1",label:"Item 1",selected:r==="item-1",onChange:()=>e("item-1")}),t.createElement(l,{id:"id-3-2",label:"Item 2",selected:r==="item-2",onChange:()=>e("item-2")}),t.createElement(l,{id:"id-3-3",label:"Item 3",selected:r==="item-3",onChange:()=>e("item-3")}))}};var b,g,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio id="id-1" label="Radio" selected={value === 'radio'} onChange={() => setValue('radio')} />;
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,V,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio id="id-2" label="Disabled" selected={value === 'disabled'} onChange={() => setValue('disabled')} disabled />;
  }
}`,...(h=(V=i.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};var y,x,E;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio id="id-3" label="Error" selected={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(E=(x=c.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var C,R,z;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio aria-describedby="id-3" id="id-3" label="Error" selected={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(z=(R=u.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var _,S,q;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Spacing direction="column" gap="0_5">
        <Radio id="id-3-1" label="Item 1" selected={value === 'item-1'} onChange={() => setValue('item-1')} />
        <Radio id="id-3-2" label="Item 2" selected={value === 'item-2'} onChange={() => setValue('item-2')} />
        <Radio id="id-3-3" label="Item 3" selected={value === 'item-3'} onChange={() => setValue('item-3')} />
      </Spacing>;
  }
}`,...(q=(S=p.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};const M=["Default","Disabled","Error","AriaDescribedBy","Group"];export{u as AriaDescribedBy,n as Default,i as Disabled,c as Error,p as Group,M as __namedExportsOrder,L as default};
//# sourceMappingURL=Radio.stories-834de30a.js.map
