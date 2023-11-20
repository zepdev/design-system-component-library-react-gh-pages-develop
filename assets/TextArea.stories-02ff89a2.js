import{j as s}from"./clsx-42c82d7d.js";import{T as y}from"./TextArea-e01f60e4.js";import{w as x,u as n,e as b}from"./index-95c7b577.js";import"./index-39946eba.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-35233731.js";import"./tw-merge-1166cefb.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";const V={title:"Components/TextArea",component:y,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},label:{control:{type:"text"}},message:{control:{type:"text"}}},decorators:[e=>s.jsxDEV("div",{style:{height:350},children:s.jsxDEV(e,{},void 0,!1,{fileName:"/home/circleci/project/src/components/text-area/TextArea.stories.tsx",lineNumber:36,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-area/TextArea.stories.tsx",lineNumber:33,columnNumber:12},globalThis)]},a={args:{disabled:!1,label:"Text Area Label",placeholder:"Ihre Nachricht",readOnly:!1,state:"default"}},l="zep-text-area-input",r={args:{label:"Label",required:!0,notRequiredHint:"(optional)"},render:(e,t)=>{const{message:h,setMessage:o}=t;return s.jsxDEV(y,{id:"id-interaction-test",name:"input",type:"text",label:e.label,placeholder:"Placeholder",required:e.required,message:h,onInvalid:g=>{g.preventDefault(),o("Please enter a value")},onChange:()=>o(!1)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-area/TextArea.stories.tsx",lineNumber:63,columnNumber:12},globalThis)},play:async({canvasElement:e})=>{const t=x(e);await n.click(t.getByTestId(l)),await n.type(t.getByTestId(l),"Tell me what you want, what you really really want",{delay:20}),await b(t.getByTestId(l)).toHaveValue("Tell me what you want, what you really really want")}};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: ({
    disabled: false,
    label: 'Text Area Label',
    placeholder: 'Ihre Nachricht',
    readOnly: false,
    state: 'default'
  } as TextAreaProps)
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,d,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    required: true,
    notRequiredHint: '(optional)'
  },
  render: (args, context) => {
    const {
      message,
      setMessage
    } = context;
    return <TextArea id="id-interaction-test" name="input" type="text" label={args.label} placeholder="Placeholder" required={args.required} message={message} onInvalid={e => {
      e.preventDefault();
      setMessage('Please enter a value');
    }} onChange={() => setMessage(false)} />;
  },
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
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const B=["Default","FillValue"];export{a as Default,r as FillValue,B as __namedExportsOrder,V as default};
//# sourceMappingURL=TextArea.stories-02ff89a2.js.map
