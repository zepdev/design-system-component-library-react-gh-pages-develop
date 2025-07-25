import{j as o}from"./clsx-24df0f47.js";import{T as u}from"./TextArea-5368eb2d.js";import{w as y,u as s,e as h}from"./index-f872ea10.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-94f78a29.js";import"./tw-merge-1166cefb.js";import"./index-03bbf7d1.js";import"./_baseIsEqual-cf90f23b.js";import"./index-356e4a49.js";const j={title:"Components/Textarea",component:u,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},label:{control:{type:"text"}},message:{control:{type:"text"}}},decorators:[e=>o.jsxDEV("div",{style:{height:350},children:o.jsxDEV(e,{},void 0,!1,{fileName:"/home/circleci/project/src/components/text-area/TextArea.stories.tsx",lineNumber:38,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-area/TextArea.stories.tsx",lineNumber:37,columnNumber:9},globalThis)]},a={args:{disabled:!1,label:"Text Area Label",placeholder:"Ihre Nachricht",readOnly:!1,state:"default"}},l="zep-text-area-input",r={args:{label:"Label",required:!0,notRequiredHint:"(optional)"},render:(e,t)=>o.jsxDEV(u,{id:"id-interaction-test",name:"input",type:"text",label:e.label,placeholder:"Placeholder",required:e.required},void 0,!1,{fileName:"/home/circleci/project/src/components/text-area/TextArea.stories.tsx",lineNumber:67,columnNumber:5},globalThis),play:async({canvasElement:e})=>{const t=y(e);await s.click(t.getByTestId(l)),await s.type(t.getByTestId(l),"Tell me what you want, what you really really want",{delay:20}),await h(t.getByTestId(l)).toHaveValue("Tell me what you want, what you really really want")}};var n,i,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'Text Area Label',
    placeholder: 'Ihre Nachricht',
    readOnly: false,
    state: 'default'
  } as TextAreaProps
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,d,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    required: true,
    notRequiredHint: '(optional)'
  },
  render: (args, context) => <TextArea id="id-interaction-test" name="input" type="text" label={args.label} placeholder="Placeholder" required={args.required} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId(testItem));
    await userEvent.type(canvas.getByTestId(testItem), 'Tell me what you want, what you really really want', {
      delay: 20
    });
    await expect(canvas.getByTestId(testItem)).toHaveValue('Tell me what you want, what you really really want');
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const q=["Default","FillValue"];export{a as Default,r as FillValue,q as __namedExportsOrder,j as default};
