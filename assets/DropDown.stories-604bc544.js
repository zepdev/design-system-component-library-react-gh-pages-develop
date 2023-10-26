import{j as s}from"./clsx-7883870f.js";import{w as u,u as r,e as f}from"./index-556828e6.js";import{D as w}from"./DropDown-93a8ec9d.js";import{S as g}from"./Spacing-28ff9835.js";import"./index-9edec130.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-6dc2ea9c.js";import"./index-da07a199.js";import"./uniq-74106574.js";import"./index-356e4a49.js";import"./getDistanceToBottom-3038e987.js";import"./Icon-d7f402ba.js";import"./tw-merge-1166cefb.js";const a=[{id:1,name:"Navigation link"},{id:2,name:"Clickable action"},{id:3,name:"Archive"},{id:4,name:"Here is a really long text that should be truncated"},{id:5,name:"Duplicate"},{id:6,name:"License"},{id:7,name:"Move"},{id:8,name:"Sign out"}],j={title:"Components/DropDown Select",component:w,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},label:{control:{type:"text"}},message:{control:{type:"text"}},readOnly:{control:{type:"boolean"}}},decorators:[o=>s.jsxDEV(g,{className:"zep-w-[326px]",children:s.jsxDEV(o,{},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.stories.tsx",lineNumber:60,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down/DropDown.stories.tsx",lineNumber:59,columnNumber:12},globalThis)]},e={args:{disabled:!1,readOnly:!1,items:a,label:"Dropdown",required:!1,notRequiredHint:"(optional)",className:"foo",state:"default",placeholder:"Auswählen (Hint)"}},t={args:{disabled:!1,readOnly:!1,items:a,label:"Dropdown",required:!1,notRequiredHint:"(optional)",className:"foo",state:"default",placeholder:"Auswählen (Hint)"},play:async({canvasElement:o})=>{const n=u(o);await r.click(n.getByTestId("zep-drop-down-button")),await r.click(n.getByTitle(a[2].name)),await f(n.getByTestId("zep-drop-down-button")).toHaveTextContent(a[2].name)}};var l,i,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
  } as DropDownProps)
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const k=["Default","SelectAnItem"];export{e as Default,t as SelectAnItem,k as __namedExportsOrder,j as default};
//# sourceMappingURL=DropDown.stories-604bc544.js.map
