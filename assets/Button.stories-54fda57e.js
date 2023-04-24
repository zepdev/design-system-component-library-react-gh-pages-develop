import{R as n}from"./index-f1f749bf.js";import{f as y,b as f}from"./focus-10726d12.js";import"./_commonjsHelpers-042e6b4d.js";var a=(e=>(e.Primary="primary",e.Secondary="secondary",e.Tertiary="tertiary",e))(a||{});const g="zep-button",r=({variant:e=a.Primary,label:s,isLoading:d=!1,children:u,disabled:c=!1,...p})=>{const m=d?n.createElement("i",{className:"mr-zep-0_5","data-testid":"loading-icon"},"loading icon"):"";return n.createElement("button",{className:`
      ${g} 
      zep-${e} 
      ${c?"disabled cursor-not-allowed":""} 
      ${y} focus-within:ring-offset-2 
      ${f}
      leading-zep-1_25
      px-zep-1 py-zep-0_75 
      text-zep-base`,...p},m,s||u)};try{r.displayName="Button",r.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"ButtonVariant.Primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const B={title:"Components/Button",component:r,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},variant:{control:{type:"radio",options:[a.Primary,a.Secondary,a.Tertiary]}}}},t={args:{variant:a.Primary,label:"Button",title:"Button title",isLoading:!1,disabled:!1}};var o,i,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: ({
    variant: ButtonVariant.Primary,
    label: 'Button',
    title: 'Button title',
    isLoading: false,
    disabled: false
  } as ButtonProps)
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const z=["Default"];export{t as Default,z as __namedExportsOrder,B as default};
//# sourceMappingURL=Button.stories-54fda57e.js.map
