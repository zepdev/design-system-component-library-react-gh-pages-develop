import{j as l}from"./clsx-24df0f47.js";import{w as y,e as o,u as e,a as h}from"./index-f872ea10.js";import{D as v}from"./DropDown-5d0f2f4d.js";import{S as D}from"./Spacing-5b776e96.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index-03bbf7d1.js";import"./_baseIsEqual-cf90f23b.js";import"./index-356e4a49.js";import"./getDistanceToBottom-7ac1525d.js";import"./Icon-cdc8c2c6.js";import"./tw-merge-1166cefb.js";import"./listbox-54b67008.js";import"./calculate-active-index-3663c4e1.js";import"./keyboard-93128b4d.js";import"./focus-management-5143e399.js";import"./owner-1e815d84.js";import"./form-2a2adf59.js";import"./hidden-601067d7.js";import"./open-closed-23b462a4.js";import"./bugs-8e007c11.js";import"./index-b7fee60d.js";const a=[{id:1,name:"Navigation link"},{id:2,name:"Clickable action"},{id:3,name:"Archive"},{id:4,name:"Here is a really long text that should be truncated"},{id:5,name:"Duplicate"},{id:6,name:"License"},{id:7,name:"Move"},{id:8,name:"Sign out"}],M={title:"Components/DropDown Select",component:v,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},label:{control:{type:"text"}},message:{control:{type:"text"}},readOnly:{control:{type:"boolean"}}},decorators:[i=>l.jsxDEV(D,{className:"zep-w-[326px] zep-h-[326px]",children:l.jsxDEV(i,{},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.stories.tsx",lineNumber:49,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.stories.tsx",lineNumber:48,columnNumber:9},globalThis)]},r={args:{disabled:!1,readOnly:!1,items:a,label:"Dropdown",required:!1,notRequiredHint:"(optional)",className:"foo",state:"default",placeholder:"Auswählen (Hint)"},play:async({canvasElement:i,step:t})=>{const s=y(i),n=s.getByTestId("zep-drop-down-button");await t("Initial checks",async()=>{await o(n).toBeInTheDocument()}),await t("Select dropDown with keyboard",async()=>{await e.tab(),await o(n).toHaveFocus()}),await t("Open dropDown options with keyboard",async()=>{await e.keyboard("{arrowdown}"),await t("Check dropDown options",async()=>{a.forEach(x=>{o(s.getByText(x.name)).toBeInTheDocument()})})}),await t("Select dropDown first option with keyboard",async()=>{await e.keyboard("{arrowdown}"),await e.keyboard("{enter}"),await h(()=>{o(n).toHaveTextContent(a[1].name)})}),await t("Select dropDown second option with mouse",async()=>{await e.click(n),await e.click(s.getByText(a[2].name)),await o(n).toHaveTextContent(a[2].name)}),await t("Slect dropDown third option with mouse",async()=>{await e.click(n),await e.click(s.getByText(a[3].name)),await o(n).toHaveTextContent(a[3].name)}),await t("Blur dropDown",async()=>{await e.click(n),await e.tab(),await o(n).not.toHaveFocus()})}},c={args:{disabled:!1,readOnly:!1,items:a,label:"Dropdown",required:!1,notRequiredHint:"(optional)",className:"foo",state:"default",placeholder:"Auswählen (Hint)"},play:async({canvasElement:i})=>{const t=y(i);await e.click(t.getByTestId("zep-drop-down-button")),await e.click(t.getByTitle(a[2].name)),await o(t.getByTestId("zep-drop-down-button")).toHaveTextContent(a[2].name)}};var p,m,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    disabled: false,
    readOnly: false,
    items,
    label: 'Dropdown',
    required: false,
    notRequiredHint: '(optional)',
    className: 'foo',
    state: 'default',
    placeholder: 'Auswählen (Hint)'
  } as DropDownProps,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const comboboxButton = canvas.getByTestId('zep-drop-down-button');
    await step('Initial checks', async () => {
      await expect(comboboxButton).toBeInTheDocument();
    });
    await step('Select dropDown with keyboard', async () => {
      await userEvent.tab();
      await expect(comboboxButton).toHaveFocus();
    });
    await step('Open dropDown options with keyboard', async () => {
      await userEvent.keyboard('{arrowdown}');
      await step('Check dropDown options', async () => {
        items.forEach(item => {
          expect(canvas.getByText(item.name)).toBeInTheDocument();
        });
      });
    });
    await step('Select dropDown first option with keyboard', async () => {
      await userEvent.keyboard('{arrowdown}');
      await userEvent.keyboard('{enter}');
      await waitFor(() => {
        expect(comboboxButton).toHaveTextContent(items[1].name);
      });
    });
    await step('Select dropDown second option with mouse', async () => {
      await userEvent.click(comboboxButton);
      await userEvent.click(canvas.getByText(items[2].name));
      await expect(comboboxButton).toHaveTextContent(items[2].name);
    });
    await step('Slect dropDown third option with mouse', async () => {
      await userEvent.click(comboboxButton);
      await userEvent.click(canvas.getByText(items[3].name));
      await expect(comboboxButton).toHaveTextContent(items[3].name);
    });
    await step('Blur dropDown', async () => {
      await userEvent.click(comboboxButton);
      await userEvent.tab();
      await expect(comboboxButton).not.toHaveFocus();
    });
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var w,u,b;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: false,
    readOnly: false,
    items,
    label: 'Dropdown',
    required: false,
    notRequiredHint: '(optional)',
    className: 'foo',
    state: 'default',
    placeholder: 'Auswählen (Hint)'
  } as DropDownProps,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByTestId('zep-drop-down-button'));
    await userEvent.click(canvas.getByTitle(items[2].name));
    await expect(canvas.getByTestId('zep-drop-down-button')).toHaveTextContent(items[2].name);
  }
}`,...(b=(u=c.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const G=["Default","SelectAnItem"];export{r as Default,c as SelectAnItem,G as __namedExportsOrder,M as default};
