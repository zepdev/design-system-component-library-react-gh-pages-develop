import{j as l}from"./clsx-42c82d7d.js";import{w as y,e as n,u as e,a as x}from"./index-8d4015d3.js";import{D as h}from"./DropDown-5b72c4f7.js";import{S as D}from"./Spacing-0ac87ba5.js";import"./index-39946eba.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./getDistanceToBottom-7ac1525d.js";import"./Icon-e141f9ed.js";import"./tw-merge-1166cefb.js";import"./listbox-5d0f2ff3.js";import"./use-controllable-ffbc7e68.js";import"./hidden-83b03c75.js";import"./keyboard-09d3995a.js";import"./use-tracked-pointer-83026de6.js";import"./focus-management-142cde05.js";import"./owner-0c4bae3a.js";import"./bugs-8e007c11.js";import"./open-closed-ee45d46e.js";import"./index-7d4e1659.js";const a=[{id:1,name:"Navigation link"},{id:2,name:"Clickable action"},{id:3,name:"Archive"},{id:4,name:"Here is a really long text that should be truncated"},{id:5,name:"Duplicate"},{id:6,name:"License"},{id:7,name:"Move"},{id:8,name:"Sign out"}],G={title:"Components/DropDown Select",component:h,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},label:{control:{type:"text"}},message:{control:{type:"text"}},readOnly:{control:{type:"boolean"}}},decorators:[i=>l.jsxDEV(D,{className:"zep-w-[326px]",children:l.jsxDEV(i,{},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.stories.tsx",lineNumber:60,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.stories.tsx",lineNumber:59,columnNumber:12},globalThis)]},r={args:{disabled:!1,readOnly:!1,items:a,label:"Dropdown",required:!1,notRequiredHint:"(optional)",className:"foo",state:"default",placeholder:"Auswählen (Hint)"},play:async({canvasElement:i,step:t})=>{const s=y(i),o=s.getByTestId("zep-drop-down-button");await t("Initial checks",async()=>{await n(o).toBeInTheDocument()}),await t("Select dropDown with keyboard",async()=>{await e.tab(),await n(o).toHaveFocus()}),await t("Open dropDown options with keyboard",async()=>{await e.keyboard("{arrowdown}"),await t("Check dropDown options",async()=>{a.forEach(v=>{n(s.getByText(v.name)).toBeInTheDocument()})})}),await t("Select dropDown first option with keyboard",async()=>{await e.keyboard("{arrowdown}"),await e.keyboard("{enter}"),await x(()=>{n(o).toHaveTextContent(a[1].name)})}),await t("Select dropDown second option with mouse",async()=>{await e.click(o),await e.click(s.getByText(a[2].name)),await n(o).toHaveTextContent(a[2].name)}),await t("Slect dropDown third option with mouse",async()=>{await e.click(o),await e.click(s.getByText(a[3].name)),await n(o).toHaveTextContent(a[3].name)}),await t("Blur dropDown",async()=>{await e.click(o),await e.tab(),await n(o).not.toHaveFocus()})}},c={args:{disabled:!1,readOnly:!1,items:a,label:"Dropdown",required:!1,notRequiredHint:"(optional)",className:"foo",state:"default",placeholder:"Auswählen (Hint)"},play:async({canvasElement:i})=>{const t=y(i);await e.click(t.getByTestId("zep-drop-down-button")),await e.click(t.getByTitle(a[2].name)),await n(t.getByTestId("zep-drop-down-button")).toHaveTextContent(a[2].name)}};var p,m,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: ({
    disabled: false,
    readOnly: false,
    items,
    label: 'Dropdown',
    required: false,
    notRequiredHint: '(optional)',
    className: 'foo',
    state: 'default',
    placeholder: 'Auswählen (Hint)'
  } as DropDownProps),
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
  args: ({
    disabled: false,
    readOnly: false,
    items,
    label: 'Dropdown',
    required: false,
    notRequiredHint: '(optional)',
    className: 'foo',
    state: 'default',
    placeholder: 'Auswählen (Hint)'
  } as DropDownProps),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByTestId('zep-drop-down-button'));
    await userEvent.click(canvas.getByTitle(items[2].name));
    await expect(canvas.getByTestId('zep-drop-down-button')).toHaveTextContent(items[2].name);
  }
}`,...(b=(u=c.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const J=["Default","SelectAnItem"];export{r as Default,c as SelectAnItem,J as __namedExportsOrder,G as default};
//# sourceMappingURL=DropDown.stories-3ffdb5e8.js.map
