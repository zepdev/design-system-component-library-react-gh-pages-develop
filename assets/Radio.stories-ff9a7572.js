import{R as a,r as A}from"./index-8db94870.js";import{c as n}from"./clsx.m-1229b3e0.js";import{f as B}from"./focus-d7245c50.js";import{S as q}from"./Spacing-2c30780b.js";import"./_commonjsHelpers-042e6b4d.js";const o=({id:l,name:t,value:r=l,selected:e=!1,disabled:s=!1,error:d=!1,label:I,tabIndex:w=0,onChange:N,...k})=>a.createElement("span",{className:n("zep-inline-flex","zep-flex-row","zep-flex-wrap","zep-items-center","zep-justify-start","zep-relative",{"[&>input]:hover:zep-border-neutral-dark-hover [&>span]:hover:zep-bg-neutral-dark-hover":!s&&!d},{"zep-cursor-not-allowed zep-opacity-disabled":s}),"data-testid":"zep-radio"},e&&a.createElement("span",{className:n("zep-absolute","zep-z-10","zep-rounded-full","zep-border-greyscale-0",{"zep-left-[1px] zep-top-[1px] zep-h-[22px] zep-w-[22px] zep-border-[6px]":!d},{"zep-left-[2px] zep-top-[2px] zep-h-[20px] zep-w-[20px] zep-border-[5px]":d},"rounded-full",[d?"zep-bg-error":"zep-bg-neutral-dark-default"])}),a.createElement("input",{id:l,value:r,name:t,type:"radio",tabIndex:w,checked:e,onChange:s?void 0:N,className:n("zep-border-1",B,"zep-appearance-none","focus-visible:zep-ring-offset-1","zep-w-1.5","zep-h-1.5","zep-rounded-full",{"zep-border-neutral-dark-default":!d&&!e},{"zep-border-2":d},{"zep-error zep-border-error":d&&e},{"zep-border-error":d}),disabled:s,"data-testid":"zep-radio-input",...k}),a.createElement("label",{htmlFor:l,className:n("zep-relative","zep-z-20","zep-ml-[-1.5rem]","zep-pl-[36px]",[{"zep-cursor-pointer":!s}])},I));try{o.displayName="Radio",o.__docgenInfo={description:"",displayName:"Radio",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"() => void"}}}}}catch{}const H={title:"Components/Radio",component:o,tags:["autodocs"],argTypes:{label:{control:{disable:!0}},selected:{control:{disable:!0}},disabled:{control:{disable:!0}},error:{control:{disable:!0}}},decorators:[l=>{const[t,r]=A.useState("");return a.createElement(l,{value:t,setValue:r})}]},i={render:(l,t)=>{const{value:r,setValue:e}=t;return a.createElement(o,{id:"id-1",label:"Radio",selected:r==="radio",onChange:()=>e("radio")})}},c={render:(l,t)=>{const{value:r,setValue:e}=t;return a.createElement(q,{direction:"column"},a.createElement(o,{id:"id-2",label:"Disabled",selected:r==="disabled",onChange:()=>e("disabled"),disabled:!0}),a.createElement(o,{id:"id-2-1",label:"Disabled",selected:!0,onChange:()=>e("disabled"),disabled:!0}))}},u={render:(l,t)=>{const{value:r,setValue:e}=t;return a.createElement(o,{id:"id-3",label:"Error",selected:r==="error",onChange:()=>e("error"),error:!0})}},p={render:(l,t)=>{const{value:r,setValue:e}=t;return a.createElement(o,{"aria-describedby":"id-3",id:"id-3",label:"Error",selected:r==="error",onChange:()=>e("error"),error:!0})}},m={render:(l,t)=>{const{value:r,setValue:e}=t;return a.createElement(q,{direction:"column",gap:"0.5"},a.createElement(o,{id:"id-3-1",label:"Item 1",selected:r==="item-1",onChange:()=>e("item-1")}),a.createElement(o,{id:"id-3-2",label:"Item 2",selected:r==="item-2",onChange:()=>e("item-2")}),a.createElement(o,{id:"id-3-3",label:"Item 3",selected:r==="item-3",onChange:()=>e("item-3")}))}};var b,g,z;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio id="id-1" label="Radio" selected={value === 'radio'} onChange={() => setValue('radio')} />;
  }
}`,...(z=(g=i.parameters)==null?void 0:g.docs)==null?void 0:z.source}}};var f,v,h;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(v=c.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,V,E;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio id="id-3" label="Error" selected={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(E=(V=u.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var y,C,R;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio aria-describedby="id-3" id="id-3" label="Error" selected={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(R=(C=p.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var S,D,_;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(_=(D=m.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const J=["Default","Disabled","Error","AriaDescribedBy","Group"];export{p as AriaDescribedBy,i as Default,c as Disabled,u as Error,m as Group,J as __namedExportsOrder,H as default};
//# sourceMappingURL=Radio.stories-ff9a7572.js.map
