import{R as r,r as w}from"./index-f1f749bf.js";import{c as n}from"./clsx.m-1229b3e0.js";import{f as I}from"./focus-da9c5ec1.js";import{b as D}from"./border-radius-4e388b32.js";import{S as N}from"./Spacing-197881ca.js";import"./_commonjsHelpers-042e6b4d.js";const k="zep-radio",l=({id:o,name:t,value:a=o,selected:e=!1,disabled:s=!1,error:p=!1,label:C,tabIndex:_=0,onChange:S,...q})=>r.createElement("span",{className:n(k,"inline-flex","flex-row","flex-wrap","items-center","justify-start","relative"),"data-testid":"zep-radio"},e&&r.createElement("span",{className:n("absolute","w-[22px]","h-[22px]","z-10","absolute","top-[1px]","left-[1px]","border-white","border-[6px]","rounded-full",[p?"bg-zep-red-500":"bg-black"])}),r.createElement("input",{id:o,value:a,name:t,type:"radio",tabIndex:_,checked:e,onChange:s?void 0:S,className:n(D,I,"appearance-none","focus-visible:ring-offset-1","w-zep-1_5","h-zep-1_5","rounded-full","border","border-zep-grey-900",[e?"bg-zep-grey-900 border-zep-grey-900":"bg-white"],{"opacity-zep-40":s},{"bg-zep-red-500 border-zep-red-500 ":p&&e},{"border-zep-red-500":p&&!e}),disabled:s,"data-testid":"zep-radio-input",...q}),r.createElement("label",{htmlFor:o,className:n("relative","z-20","ml-[-24px]","pl-[36px]",[s?"cursor-not-allowed opacity-zep-40":"cursor-pointer [&>div]:hover:border-zep-grey-900"])},C));try{l.displayName="Radio",l.__docgenInfo={description:"",displayName:"Radio",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"() => void"}}}}}catch{}const B={title:"Components/Radio",component:l,tags:["autodocs"],argTypes:{label:{control:{disable:!0}},selected:{control:{disable:!0}},disabled:{control:{disable:!0}},error:{control:{disable:!0}}},decorators:[o=>{const[t,a]=w.useState("");return r.createElement(o,{value:t,setValue:a})}]},d={render:(o,t)=>{const{value:a,setValue:e}=t;return r.createElement(l,{id:"id-1",label:"Radio",selected:a==="radio",onChange:()=>e("radio")})}},i={render:(o,t)=>{const{value:a,setValue:e}=t;return r.createElement(l,{id:"id-2",label:"Disabled",selected:a==="disabled",onChange:()=>e("disabled"),disabled:!0})}},c={render:(o,t)=>{const{value:a,setValue:e}=t;return r.createElement(l,{id:"id-3",label:"Error",selected:a==="error",onChange:()=>e("error"),error:!0})}},u={render:(o,t)=>{const{value:a,setValue:e}=t;return r.createElement(N,{direction:"column",gap:"0_5"},r.createElement(l,{id:"id-3-1",label:"Item 1",selected:a==="item-1",onChange:()=>e("item-1")}),r.createElement(l,{id:"id-3-2",label:"Item 2",selected:a==="item-2",onChange:()=>e("item-2")}),r.createElement(l,{id:"id-3-3",label:"Item 3",selected:a==="item-3",onChange:()=>e("item-3")}))}};var m,b,g;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio id="id-1" label="Radio" selected={value === 'radio'} onChange={() => setValue('radio')} />;
  }
}`,...(g=(b=d.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,v,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio id="id-2" label="Disabled" selected={value === 'disabled'} onChange={() => setValue('disabled')} disabled />;
  }
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var V,x,y;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio id="id-3" label="Error" selected={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var E,z,R;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(R=(z=u.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};const H=["Default","Disabled","Error","Group"];export{d as Default,i as Disabled,c as Error,u as Group,H as __namedExportsOrder,B as default};
//# sourceMappingURL=Radio.stories-f2ddab88.js.map
