import{j as i}from"./clsx-42c82d7d.js";import{r as S}from"./index-39946eba.js";import{R as c}from"./Radio-449dcf38.js";import{w as h,e as r,u as s}from"./index-8d4015d3.js";import{S as H}from"./Spacing-e11859e3.js";import"./_commonjsHelpers-de833af9.js";import"./focus-d7245c50.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./index-7d4e1659.js";const W={title:"Components/Radio Button",component:c,tags:["autodocs"],argTypes:{label:{control:"text"},checked:{control:{disable:!0}},disabled:{control:{disable:!0}},error:{control:{disable:!0}}},decorators:[o=>{const[a,e]=S.useState("");return i.jsxDEV(o,{value:a,setValue:e},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:38,columnNumber:12},globalThis)}],parameters:{docs:{description:{component:"The Radio component is best used inside the Fieldset component, it allows setting hint and error messages."}}}},n={args:{label:"Label"},render:(o,a)=>{const{value:e,setValue:t}=a;return i.jsxDEV(c,{name:"example-default",id:"id-1",label:o.label,checked:e==="radio",onChange:()=>t("radio")},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:59,columnNumber:12},globalThis)},play:async({canvasElement:o})=>{const e=h(o).getByTestId("zep-radio-input");await r(e).toBeInTheDocument(),await s.tab(),await r(e).toHaveFocus(),await s.click(e),await r(e).toHaveFocus(),await s.tab(),await r(e).not.toHaveFocus()}},d={render:(o,a)=>{const{value:e,setValue:t}=a;return i.jsxDEV(H,{direction:"column",children:[i.jsxDEV(c,{name:"example-disabled",id:"id-2",label:"Disabled",checked:e==="disabled",onChange:()=>t("disabled"),disabled:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:94,columnNumber:9},globalThis),i.jsxDEV(c,{name:"example-disabled",id:"id-2-1",label:"Disabled",checked:!0,onChange:()=>t("disabled"),disabled:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:95,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:93,columnNumber:12},globalThis)}},l={render:(o,a)=>{const{value:e,setValue:t}=a;return i.jsxDEV(c,{name:"example-error",id:"id-3",label:"Error",checked:e==="error",onChange:()=>t("error"),error:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:105,columnNumber:12},globalThis)}},m={render:(o,a)=>{const{value:e,setValue:t}=a;return i.jsxDEV(c,{name:"example-aria-described-by","aria-describedby":"id-3",id:"id-3",label:"Error",checked:e==="error",onChange:()=>t("error"),error:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:114,columnNumber:12},globalThis)}},u={render:(o,a)=>{const{value:e,setValue:t}=a;return i.jsxDEV(H,{direction:"column",gap:"0.5",children:[i.jsxDEV(c,{name:"example-group",id:"id-3-1",label:"Item 1",checked:e==="item-1",onChange:()=>t("item-1")},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:124,columnNumber:9},globalThis),i.jsxDEV(c,{name:"example-group",id:"id-3-2",label:"Item 2",checked:e==="item-2",onChange:()=>t("item-2")},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:125,columnNumber:9},globalThis),i.jsxDEV(c,{name:"example-group",id:"id-3-3",label:"Item 3",checked:e==="item-3",onChange:()=>t("item-3")},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:126,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:123,columnNumber:12},globalThis)},play:async({canvasElement:o})=>{const e=h(o).getAllByTestId("zep-radio-input");await r(e[0]).toBeInTheDocument(),await s.tab(),await r(e[0]).toHaveFocus(),await s.keyboard("{arrowdown}"),await r(e[1]).toHaveFocus(),await s.keyboard("{arrowdown}"),await r(e[2]).toHaveFocus(),await s.keyboard("{arrowup}"),await r(e[1]).toHaveFocus(),await s.keyboard("{arrowup}"),await r(e[0]).toHaveFocus(),await s.click(e[0]),await r(e[0]).toHaveFocus(),await s.tab(),await r(e[0]).not.toHaveFocus()}},b="zep-radio-input-interactive",z="zep-radio-checked",p={args:{id:"id-4",onChange:()=>{}},render:(o,a)=>i.jsxDEV(c,{id:o.id,name:o.id,label:"Check an item",onChange:()=>{},"data-testid":b},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:179,columnNumber:12},globalThis),play:async({canvasElement:o})=>{const a=h(o);await s.click(a.getByTestId(b)),await r(a.getByTestId(z)).toBeInTheDocument(),await r(a.getByTestId(b)).toHaveStyle({display:"block"})}};var v,g,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  },
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-default" id="id-1" label={args.label} checked={value === 'radio'} onChange={() => setValue('radio')} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByTestId('zep-radio-input');

    // Basic radio checks
    await expect(radio).toBeInTheDocument();

    // Select radio with keyboard
    await userEvent.tab();
    await expect(radio).toHaveFocus();

    // Fire click event with mouse
    await userEvent.click(radio);

    // Check radio focus
    await expect(radio).toHaveFocus();

    // Blur radio with keyboard
    await userEvent.tab();

    // Check radio focus
    await expect(radio).not.toHaveFocus();
  }
}`,...(w=(g=n.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var x,k,y;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Spacing direction="column">
        <Radio name="example-disabled" id="id-2" label="Disabled" checked={value === 'disabled'} onChange={() => setValue('disabled')} disabled />
        <Radio name="example-disabled" id="id-2-1" label="Disabled" checked={true} onChange={() => setValue('disabled')} disabled />
      </Spacing>;
  }
}`,...(y=(k=d.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var E,f,N;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-error" id="id-3" label="Error" checked={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(N=(f=l.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var V,I,T;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-aria-described-by" aria-describedby="id-3" id="id-3" label="Error" checked={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(T=(I=m.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var C,D,R;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Spacing direction="column" gap="0.5">
        <Radio name="example-group" id="id-3-1" label="Item 1" checked={value === 'item-1'} onChange={() => setValue('item-1')} />
        <Radio name="example-group" id="id-3-2" label="Item 2" checked={value === 'item-2'} onChange={() => setValue('item-2')} />
        <Radio name="example-group" id="id-3-3" label="Item 3" checked={value === 'item-3'} onChange={() => setValue('item-3')} />
      </Spacing>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByTestId('zep-radio-input');

    // Basic radio checks
    await expect(radios[0]).toBeInTheDocument();

    // Select radio with keyboard
    await userEvent.tab();
    await expect(radios[0]).toHaveFocus();

    // Select next radio with keyboard
    await userEvent.keyboard('{arrowdown}');
    await expect(radios[1]).toHaveFocus();

    // Select next radio with keyboard
    await userEvent.keyboard('{arrowdown}');
    await expect(radios[2]).toHaveFocus();

    // Select previous radio with keyboard
    await userEvent.keyboard('{arrowup}');
    await expect(radios[1]).toHaveFocus();

    // Select previous radio with keyboard
    await userEvent.keyboard('{arrowup}');
    await expect(radios[0]).toHaveFocus();

    // Fire click event with mouse
    await userEvent.click(radios[0]);

    // Check radio focus
    await expect(radios[0]).toHaveFocus();

    // Blur radio with keyboard
    await userEvent.tab();

    // Check radio focus
    await expect(radios[0]).not.toHaveFocus();
  }
}`,...(R=(D=u.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var j,B,F;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: ({
    id: 'id-4',
    onChange: () => {}
  } as RadioProps),
  render: (args, context) => {
    return <Radio id={args.id} name={args.id} label="Check an item" onChange={() => {}} data-testid={testItem} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId(testItem));
    await expect(canvas.getByTestId(checkedItem)).toBeInTheDocument();
    await expect(canvas.getByTestId(testItem)).toHaveStyle({
      display: 'block'
    });
  }
}`,...(F=(B=p.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const X=["Default","Disabled","Error","AriaDescribedBy","Group","CheckAnItem"];export{m as AriaDescribedBy,p as CheckAnItem,n as Default,d as Disabled,l as Error,u as Group,X as __namedExportsOrder,W as default};
//# sourceMappingURL=Radio.stories-86722de5.js.map
