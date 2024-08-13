import{w as h,e as a,u as l}from"./index-8d4015d3.js";import{j as i}from"./clsx-42c82d7d.js";import{c as F}from"./index-7d4e1659.js";import{F as E}from"./Icon-b83e59f4.js";import{t as H}from"./tw-merge-1166cefb.js";import{S as N}from"./Spacing-0ac87ba5.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./index-39946eba.js";var o=(n=>(n.Primary="primary",n.Secondary="secondary",n.SecondaryCat="secondary-cat",n.SecondaryZps="secondary-zps",n))(o||{});const g={[o.Primary]:["zep-bg-secondary-default","zep-text-secondary-contrast","enabled:hover:zep-bg-secondary-hover","enabled:hover:zep-text-secondary-contrast","enabled:active:zep-bg-secondary-active","enabled:active:zep-text-secondary-contrast","disabled:zep-opacity-disabled"],[o.SecondaryZps]:["zep-bg-transparent","zep-text-typography-primary-default","enabled:hover:zep-bg-primary-hover","enabled:hover:zep-text-primary-contrast","enabled:active:zep-bg-primary-active","enabled:active:zep-text-primary-contrast","disabled:zep-opacity-disabled","zep-ring-2","zep-ring-inset","zep-ring-primary-default","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","disabled:zep-ring-opacity-disabled"],[o.Secondary]:["zep-bg-transparent","zep-ring-2","zep-ring-inset","zep-text-secondary-default","zep-ring-secondary-default","enabled:hover:zep-bg-secondary-hover","enabled:hover:zep-ring-0","enabled:hover:zep-text-secondary-contrast","enabled:active:zep-bg-secondary-active","enabled:active:zep-text-secondary-contrast","enabled:active:zep-ring-0","disabled:zep-opacity-disabled"],[o.SecondaryCat]:["zep-bg-transparent","zep-ring-2","zep-ring-inset","zep-ring-neutral-dark-default","zep-text-neutral-dark-default","enabled:hover:zep-text-primary-contrast","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","enabled:hover:zep-bg-neutral-dark-hover","enabled:active:zep-bg-neutral-dark-active","enabled:active:zep-text-primary-contrast","disabled:zep-bg-opacity-disabled"]},s=F(["zep-typography-button","zep-rounded-button","zep-px-1","zep-py-0.75","zep-flex","zep-gap-0.5","zep-justify-center","focus-visible:zep-outline","focus-visible:zep-outline-3","focus-visible:zep-outline-offset-1","focus-visible:zep-outline-focus"],{variants:{variant:g},defaultVariants:{variant:o.Primary}}),v=({className:n,variant:t,isLoading:c=!1,label:e,children:z,icon:p,iconPosition:k="left",...x})=>{const B=!e||e===""?s({variant:t}).replace("zep-px-1","zep-px-0.75"):s({variant:t});return i.jsxDEV("button",{className:H(B,n,"zep-w-full sm:zep-w-auto"),...x,children:[c&&i.jsxDEV("i",{className:"mr-zep-0_5","data-testid":"loading-icon",children:"loading icon"},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/zps-button/ZpsButton.tsx",lineNumber:101,columnNumber:9},globalThis),i.jsxDEV(N,{gap:"0.5",className:k==="left"?"zep-flex-row-reverse":"",children:[e??z,p&&i.jsxDEV(E,{name:p},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/zps-button/ZpsButton.tsx",lineNumber:107,columnNumber:18},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/powerSystemes-components/zps-button/ZpsButton.tsx",lineNumber:105,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/powerSystemes-components/zps-button/ZpsButton.tsx",lineNumber:99,columnNumber:5},globalThis)};try{s.displayName="zpsbutton",s.__docgenInfo={description:"",displayName:"zpsbutton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"ZpsButtonVariant | null"}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"ClassValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}}}}}catch{}try{v.displayName="Button",v.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"secondary-cat"'},{value:'"secondary-zps"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"search"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"file"'},{value:'"password"'},{value:'"stop"'},{value:'"phone"'},{value:'"download"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"add-circle"'}]}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const V=Object.keys(g),M={title:"PowerSystems Components/Button",component:v,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},variant:{control:{type:"select",options:V}}}},r={args:{variant:o.Primary,label:"Zps Button",title:"Button title",isLoading:!1,disabled:!1},play:async({canvasElement:n,step:t})=>{const e=h(n).getByRole("button");await t("Initial checks",async()=>{await a(e).toHaveTextContent("Button"),await a(e).toHaveAttribute("title","Button title"),await a(e).toBeEnabled()}),await t("Focus button with keyboard",async()=>{await l.tab(),await a(e).toHaveFocus()}),await t("Fire click event with keyboard",async()=>{await l.keyboard("{enter}"),await a(e).toHaveFocus(),await l.keyboard("{space}"),await a(e).toHaveFocus()}),await t("Fire click event with mouse",async()=>{await l.click(e),await a(e).toHaveFocus()}),await t("Blur button with keyboard and check focus",async()=>{await l.tab(),await a(e).not.toHaveFocus()})}},u={args:{variant:o.Primary,label:"",title:"Button title",icon:"alert",isLoading:!1,disabled:!1},play:async({canvasElement:n,step:t})=>{const e=h(n).getByRole("button");await t("Initial checks",async()=>{await a(e).toHaveAttribute("title","Button title"),await a(e).toBeEnabled()}),await t("Focus button with keyboard",async()=>{await l.tab(),await a(e).toHaveFocus()}),await t("Fire click event with keyboard",async()=>{await l.keyboard("{enter}"),await a(e).toHaveFocus(),await l.keyboard("{space}"),await a(e).toHaveFocus()}),await t("Fire click event with mouse",async()=>{await l.click(e),await a(e).toHaveFocus()}),await t("Blur button with keyboard and check focus",async()=>{await l.tab(),await a(e).not.toHaveFocus()})}};var d,b,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: ({
    variant: ZpsButtonVariant.Primary,
    label: 'Zps Button',
    title: 'Button title',
    isLoading: false,
    disabled: false
  } as ZpsButtonProps),
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await step('Initial checks', async () => {
      await expect(button).toHaveTextContent('Button');
      await expect(button).toHaveAttribute('title', 'Button title');
      await expect(button).toBeEnabled();
    });
    await step('Focus button with keyboard', async () => {
      await userEvent.tab();
      await expect(button).toHaveFocus();
    });
    await step('Fire click event with keyboard', async () => {
      await userEvent.keyboard('{enter}');
      await expect(button).toHaveFocus();
      await userEvent.keyboard('{space}');
      await expect(button).toHaveFocus();
    });
    await step('Fire click event with mouse', async () => {
      await userEvent.click(button);
      await expect(button).toHaveFocus();
    });
    await step('Blur button with keyboard and check focus', async () => {
      await userEvent.tab();
      await expect(button).not.toHaveFocus();
    });
  }
}`,...(m=(b=r.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var y,w,f;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: ({
    variant: ZpsButtonVariant.Primary,
    label: '',
    title: 'Button title',
    icon: 'alert',
    isLoading: false,
    disabled: false
  } as ZpsButtonProps),
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await step('Initial checks', async () => {
      await expect(button).toHaveAttribute('title', 'Button title');
      await expect(button).toBeEnabled();
    });
    await step('Focus button with keyboard', async () => {
      await userEvent.tab();
      await expect(button).toHaveFocus();
    });
    await step('Fire click event with keyboard', async () => {
      await userEvent.keyboard('{enter}');
      await expect(button).toHaveFocus();
      await userEvent.keyboard('{space}');
      await expect(button).toHaveFocus();
    });
    await step('Fire click event with mouse', async () => {
      await userEvent.click(button);
      await expect(button).toHaveFocus();
    });
    await step('Blur button with keyboard and check focus', async () => {
      await userEvent.tab();
      await expect(button).not.toHaveFocus();
    });
  }
}`,...(f=(w=u.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};const O=["Default","IconButton"];export{r as Default,u as IconButton,O as __namedExportsOrder,M as default};
//# sourceMappingURL=ZpsButton.stories-a6df0785.js.map
