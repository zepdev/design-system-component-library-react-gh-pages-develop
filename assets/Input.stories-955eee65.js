import{j as a}from"./clsx-42c82d7d.js";import{w as _e,e as s,u as i}from"./index-470d81f9.js";import{r as b}from"./index-39946eba.js";import{I as o}from"./Input-bc8d91f9.js";import{S as c}from"./Spacing-f112ec91.js";import{B as d}from"./Button-70711c89.js";import{F as Ge}from"./Fieldset-d77eeeb1.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./focus-d7245c50.js";import"./Icon-e1590eff.js";import"./index-7d4e1659.js";import"./tw-merge-1166cefb.js";const ca={title:"Components/Input",component:o,tags:["autodocs"],decorators:[e=>a.jsxDEV("div",{className:"zep-w-[326px] [&>*]:zep-w-full",children:a.jsxDEV(e,{},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:15,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:14,columnNumber:12},globalThis)],argTypes:{label:{control:{type:"text"}},type:{control:{type:"select",options:["text","search","number","date","password"]}},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}},notRequiredHint:{control:{type:"text"}},readOnly:{control:{type:"boolean"}},error:{control:{type:"boolean"}},hasInfoIcon:{control:{type:"boolean"}},placeholder:{control:{type:"text"}}}},p={args:{id:"id-default",placeholder:"Placeholder",name:"input",type:"text",label:"Label",disabled:!1,required:!1,notRequiredHint:"(optional)",readOnly:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,t)=>a.jsxDEV(o,{placeholder:e.placeholder,...e},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:90,columnNumber:12},globalThis),play:async({canvasElement:e,step:t})=>{const r=_e(e).getByTestId("zep-input-field");await t("Initial checks",async()=>{await s(r).toBeInTheDocument(),await s(r).not.toHaveFocus()}),await t("Check inputField focus via Keyboard",async()=>{await i.tab(),await s(r).toHaveFocus()}),await t("Fill inputField with keyboard and check value",async()=>{await i.type(r,"Test value"),await s(r).toHaveValue("Test value")}),await t("Clear inputField with keyboard and check value",async()=>{await i.clear(r),await i.type(r,"New test value"),await s(r).toHaveValue("New test value")}),await t("Click inputField and check focus",async()=>{await i.click(r),await s(r).toHaveFocus()}),await t("Blur inputField with keyboard and check focus",async()=>{await i.tab(),await s(r).not.toHaveFocus()})}},v={decorators:[e=>{const[t,n]=b.useState("Prefilled");return a.jsxDEV(e,{value:t,setValue:n},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:128,columnNumber:12},globalThis)}],args:{id:"id-search",name:"input",type:"search",disabled:!1,label:"Label",placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)"},render:(e,t)=>{const{value:n,setValue:r}=t;return a.jsxDEV(o,{autoFocus:!0,placeholder:e.placeholder,...e,value:n,onChange:l=>{r(l.target.value)}},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:145,columnNumber:12},globalThis)}},x={args:{id:"id-number",name:"input",type:"number",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},y={args:{id:"id-date",name:"input",type:"date",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},N={decorators:[e=>{const[t,n]=b.useState("TopSecret"),[r,l]=b.useState("hide");return a.jsxDEV(e,{value:t,setValue:n,icon:r,setIcon:l},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:186,columnNumber:12},globalThis)}],args:{id:"id-password",label:"Label",name:"input",disabled:!1,required:!1,notRequiredHint:"(optional)"},render:(e,t)=>{const{value:n,setValue:r,icon:l,setIcon:u}=t;return a.jsxDEV(o,{type:l==="hide"?"password":"text",icon:l,placeholder:e.placeholder,...e,value:n,onIconToggle:()=>{u(l==="hide"?"show":"hide")},onChange:f=>{r(f.target.value)}},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:203,columnNumber:12},globalThis)}},I={args:{id:"id-disabled",name:"text",type:"number",label:"Label",disabled:!0,error:!1,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},m={args:{id:"id-hint-message",placeholder:"Placeholder",name:"input",type:"text",label:"Label",disabled:!1,required:!1,notRequiredHint:"(optional)",readOnly:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,t)=>a.jsxDEV(o,{message:"Hint message",placeholder:e.placeholder,...e},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:251,columnNumber:12},globalThis)},h={args:{id:"id-info-message",placeholder:"Placeholder",name:"input",type:"text",label:"Label",disabled:!1,required:!1,notRequiredHint:"(optional)",readOnly:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,t)=>a.jsxDEV(o,{message:"Info message",state:"info",placeholder:e.placeholder,...e},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:275,columnNumber:12},globalThis)},g={args:{id:"id-error-message",name:"input",type:"text",label:"Label",disabled:!1,error:!0,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}},render:(e,t)=>a.jsxDEV(o,{message:"Some error message",state:"error",placeholder:e.placeholder,...e},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:298,columnNumber:12},globalThis)},q={args:{id:"id-readonly",name:"input",type:"text",label:"Label",value:"Filled",readOnly:!0,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{}}},S={args:{id:"id-more-info",name:"input",type:"text",label:"Label",placeholder:"Placeholder",hasInfoIcon:!0,infoTitle:"More information",required:!1,notRequiredHint:"(optional)",onIconInfoClick:()=>{alert("Info icon clicked")}}},j={args:{id:"id-autocomplete",name:"name",type:"text",label:"Name",placeholder:"Enter your name",disabled:!1,error:!1,autoComplete:"name",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}},render:(e,t)=>a.jsxDEV(o,{message:"Click this field. A dropdown menu should appear with the names already entered",placeholder:e.placeholder,...e},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:348,columnNumber:12},globalThis)},w={args:{id:"id-required-validation",name:"input",type:"text",label:"Label",placeholder:"Placeholder",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onInvalid:()=>console.log("Invalid"),onChange:e=>{console.log(e.target.value)}},render:(e,t)=>a.jsxDEV("form",{children:a.jsxDEV(c,{direction:"column",gap:"1",children:[a.jsxDEV(o,{message:"Should validate empty field once button is clicked",placeholder:e.placeholder,...e},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:370,columnNumber:11},globalThis),a.jsxDEV(d,{type:"submit",children:"Submit"},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:371,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:369,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:368,columnNumber:12},globalThis)},V={args:{id:"id-custom-validation-message",name:"input",type:"text",label:"Label",notRequiredHint:"(optional)",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onInvalid:e=>e.target.setCustomValidity("My validation message"),onChange:e=>{console.log(e.target.value)}},render:(e,t)=>a.jsxDEV("form",{children:a.jsxDEV(c,{direction:"column",gap:"1",children:[a.jsxDEV(o,{message:"Should validate empty field once button is clicked",placeholder:e.placeholder,...e},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:395,columnNumber:11},globalThis),a.jsxDEV(d,{type:"submit",children:"Submit"},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:396,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:394,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:393,columnNumber:12},globalThis)},E={args:{id:"id-email-validation",name:"input",type:"email",label:"Email",placeholder:"Placeholder",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,t)=>a.jsxDEV("form",{children:a.jsxDEV(c,{direction:"column",gap:"1",children:[a.jsxDEV(o,{message:"Should validate email once button is clicked",placeholder:e.placeholder,...e},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:419,columnNumber:11},globalThis),a.jsxDEV(d,{type:"submit",children:"Submit"},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:420,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:418,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:417,columnNumber:12},globalThis)},H={args:{id:"id-pattern-validation",name:"input",type:"text",label:"Label",placeholder:"Placeholder",pattern:"[a-z]{4,20}",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,t)=>a.jsxDEV("form",{children:a.jsxDEV(c,{direction:"column",gap:"1",children:[a.jsxDEV(Ge,{message:"Only lowercase. Enter at least 4 chars and max 20.",children:a.jsxDEV(o,{placeholder:e.placeholder,...e},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:445,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:444,columnNumber:11},globalThis),a.jsxDEV(d,{type:"submit",children:"Submit"},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:447,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:443,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:442,columnNumber:12},globalThis)},T={args:{id:"id-min-max-validation",name:"input",type:"text",label:"Label",placeholder:"Placeholder",minLength:"8",maxLength:"12",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,t)=>a.jsxDEV("form",{children:a.jsxDEV(c,{direction:"column",gap:"1",children:[a.jsxDEV(o,{message:"Enter at least 8 chars. You cannot enter more than 12.",placeholder:e.placeholder,...e},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:472,columnNumber:11},globalThis),a.jsxDEV(d,{type:"submit",children:"Submit"},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:473,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:471,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:470,columnNumber:12},globalThis)},C={decorators:[e=>{const[t,n]=b.useState("Should validate empty field once button is clicked"),[r,l]=b.useState("default");return a.jsxDEV("form",{children:a.jsxDEV(c,{direction:"column",gap:"1",children:[a.jsxDEV(e,{message:t,setMessage:n,state:r,setState:l},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:484,columnNumber:13},globalThis),a.jsxDEV(d,{type:"submit",children:"Submit"},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:485,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:483,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:482,columnNumber:12},globalThis)}],args:{id:"id-aria-describedby",placeholder:"Placeholder",label:"Label",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,type:"text",name:"input"},render:(e,t)=>{const{message:n,setMessage:r}=t,{state:l,setState:u}=t;return a.jsxDEV(Ge,{message:n,messageId:"message-element-id",messageAriaLive:"assertive",state:l,children:a.jsxDEV(o,{"aria-describedby":"message-element-id",placeholder:e.placeholder,...e,onInvalid:f=>{f.preventDefault(),r(f.target.validationMessage),u("error")},onChange:()=>{l==="error"&&(r("Should validate empty field once submit is clicked and field is empty."),u("default"))}},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:510,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:509,columnNumber:12},globalThis)}},F="zep-input-field",D={args:{label:"Label",required:!0,notRequiredHint:"(optional)"},render:(e,t)=>a.jsxDEV(o,{id:"id-interaction-test",name:"input",type:"text",label:e.label,placeholder:"Placeholder",required:e.required,notRequiredHint:e.notRequiredHint,onChange:()=>{}},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:531,columnNumber:12},globalThis),play:async({canvasElement:e})=>{const t=_e(e);await i.click(t.getByTestId(F)),await i.type(t.getByTestId(F),"example-value",{delay:20}),await s(t.getByTestId(F)).toHaveValue("example-value")}};var R,L,k,P,M;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    id: 'id-default',
    placeholder: 'Placeholder',
    name: 'input',
    type: 'text',
    label: 'Label',
    disabled: false,
    required: false,
    notRequiredHint: '(optional)',
    readOnly: false,
    error: false,
    onChange: e => {
      console.log(e.target.value);
    }
  },
  render: (args, context) => {
    return <Input placeholder={args.placeholder} {...args} />;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const inputField = canvas.getByTestId('zep-input-field');
    await step('Initial checks', async () => {
      await expect(inputField).toBeInTheDocument();
      await expect(inputField).not.toHaveFocus();
    });
    await step('Check inputField focus via Keyboard', async () => {
      await userEvent.tab();
      await expect(inputField).toHaveFocus();
    });
    await step('Fill inputField with keyboard and check value', async () => {
      await userEvent.type(inputField, 'Test value');
      await expect(inputField).toHaveValue('Test value');
    });
    await step('Clear inputField with keyboard and check value', async () => {
      await userEvent.clear(inputField);
      await userEvent.type(inputField, 'New test value');
      await expect(inputField).toHaveValue('New test value');
    });
    await step('Click inputField and check focus', async () => {
      await userEvent.click(inputField);
      await expect(inputField).toHaveFocus();
    });
    await step('Blur inputField with keyboard and check focus', async () => {
      await userEvent.tab();
      await expect(inputField).not.toHaveFocus();
    });
  }
}`,...(k=(L=p.parameters)==null?void 0:L.docs)==null?void 0:k.source},description:{story:"The Input component is best used inside a Fieldset component, it allows setting hint and error messages.",...(M=(P=p.parameters)==null?void 0:P.docs)==null?void 0:M.description}}};var B,O,A;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  decorators: [Story => {
    const [value, setValue] = useState('Prefilled');
    return <Story value={value} setValue={setValue} />;
  }],
  args: {
    id: 'id-search',
    name: 'input',
    type: 'search',
    disabled: false,
    label: 'Label',
    placeholder: 'Placeholder',
    required: false,
    notRequiredHint: '(optional)'
  },
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Input autoFocus placeholder={args.placeholder} {...args} value={value} onChange={e => {
      setValue(e.target.value);
    }} />;
  }
}`,...(A=(O=v.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var z,K,Y;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    id: 'id-number',
    name: 'input',
    type: 'number',
    label: 'Label',
    disabled: false,
    error: false,
    placeholder: 'Placeholder',
    required: false,
    notRequiredHint: '(optional)',
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...(Y=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var _,G,J;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    id: 'id-date',
    name: 'input',
    type: 'date',
    label: 'Label',
    disabled: false,
    error: false,
    placeholder: 'Placeholder',
    required: false,
    notRequiredHint: '(optional)',
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,U,W;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  decorators: [Story => {
    const [value, setValue] = useState('TopSecret');
    const [icon, setIcon] = useState('hide');
    return <Story value={value} setValue={setValue} icon={icon} setIcon={setIcon} />;
  }],
  args: {
    id: 'id-password',
    label: 'Label',
    name: 'input',
    disabled: false,
    required: false,
    notRequiredHint: '(optional)'
  },
  render: (args, context) => {
    const {
      value,
      setValue,
      icon,
      setIcon
    } = context;
    return <Input type={icon === 'hide' ? 'password' : 'text'} icon={icon} placeholder={args.placeholder} {...args} value={value} onIconToggle={() => {
      if (icon === 'hide') {
        setIcon('show');
      } else {
        setIcon('hide');
      }
    }} onChange={e => {
      setValue(e.target.value);
    }} />;
  }
}`,...(W=(U=N.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Z,$;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    id: 'id-disabled',
    name: 'text',
    type: 'number',
    label: 'Label',
    disabled: true,
    error: false,
    placeholder: 'Placeholder',
    required: false,
    notRequiredHint: '(optional)',
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...($=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,te,re,oe;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    id: 'id-hint-message',
    placeholder: 'Placeholder',
    name: 'input',
    type: 'text',
    label: 'Label',
    disabled: false,
    required: false,
    notRequiredHint: '(optional)',
    readOnly: false,
    error: false,
    onChange: e => {
      console.log(e.target.value);
    }
  },
  render: (args, context) => {
    return <Input message="Hint message" placeholder={args.placeholder} {...args} />;
  }
}`,...(te=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:te.source},description:{story:"Here the Input component is used inside a FormField component to enable the use of a hint.",...(oe=(re=m.parameters)==null?void 0:re.docs)==null?void 0:oe.description}}};var ne,le,se,ie,ce;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    id: 'id-info-message',
    placeholder: 'Placeholder',
    name: 'input',
    type: 'text',
    label: 'Label',
    disabled: false,
    required: false,
    notRequiredHint: '(optional)',
    readOnly: false,
    error: false,
    onChange: e => {
      console.log(e.target.value);
    }
  },
  render: (args, context) => {
    return <Input message="Info message" state="info" placeholder={args.placeholder} {...args} />;
  }
}`,...(se=(le=h.parameters)==null?void 0:le.docs)==null?void 0:se.source},description:{story:"Here the Input component is used inside a FormField component to enable the use of an info message.",...(ce=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:ce.description}}};var de,ue,pe,me,he;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    id: 'id-error-message',
    name: 'input',
    type: 'text',
    label: 'Label',
    disabled: false,
    error: true,
    placeholder: 'Placeholder',
    required: false,
    notRequiredHint: '(optional)',
    onChange: e => {
      console.log(e.target.value);
    }
  },
  render: (args, context) => {
    return <Input message="Some error message" state="error" placeholder={args.placeholder} {...args} />;
  }
}`,...(pe=(ue=g.parameters)==null?void 0:ue.docs)==null?void 0:pe.source},description:{story:"Here the Input component is used inside a FormField component to enable the use of an error message.",...(he=(me=g.parameters)==null?void 0:me.docs)==null?void 0:he.description}}};var ge,be,fe;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    id: 'id-readonly',
    name: 'input',
    type: 'text',
    label: 'Label',
    value: 'Filled',
    readOnly: true,
    placeholder: 'Placeholder',
    required: false,
    notRequiredHint: '(optional)',
    onChange: e => {}
  }
}`,...(fe=(be=q.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ve,xe,ye;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    id: 'id-more-info',
    name: 'input',
    type: 'text',
    label: 'Label',
    placeholder: 'Placeholder',
    hasInfoIcon: true,
    infoTitle: 'More information',
    required: false,
    notRequiredHint: '(optional)',
    onIconInfoClick: () => {
      alert('Info icon clicked');
    }
  }
}`,...(ye=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var Ne,Ie,qe;j.parameters={...j.parameters,docs:{...(Ne=j.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    id: 'id-autocomplete',
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: 'Enter your name',
    disabled: false,
    error: false,
    autoComplete: 'name',
    required: false,
    notRequiredHint: '(optional)',
    onChange: e => {
      console.log(e.target.value);
    }
  },
  render: (args, context) => {
    return <Input message="Click this field. A dropdown menu should appear with the names already entered" placeholder={args.placeholder} {...args} />;
  }
}`,...(qe=(Ie=j.parameters)==null?void 0:Ie.docs)==null?void 0:qe.source}}};var Se,je,we;w.parameters={...w.parameters,docs:{...(Se=w.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    id: 'id-required-validation',
    name: 'input',
    type: 'text',
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
    notRequiredHint: '(optional)',
    disabled: false,
    error: false,
    onInvalid: () => console.log('Invalid'),
    onChange: e => {
      console.log(e.target.value);
    }
  },
  render: (args, context) => {
    return <form>
        <Spacing direction="column" gap="1">
          <Input message="Should validate empty field once button is clicked" placeholder={args.placeholder} {...args} />
          <Button type="submit">Submit</Button>
        </Spacing>
      </form>;
  }
}`,...(we=(je=w.parameters)==null?void 0:je.docs)==null?void 0:we.source}}};var Ve,Ee,He;V.parameters={...V.parameters,docs:{...(Ve=V.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    id: 'id-custom-validation-message',
    name: 'input',
    type: 'text',
    label: 'Label',
    notRequiredHint: '(optional)',
    placeholder: 'Placeholder',
    required: true,
    disabled: false,
    error: false,
    onInvalid: e => e.target.setCustomValidity('My validation message'),
    onChange: e => {
      console.log(e.target.value);
    }
  },
  render: (args, context) => {
    return <form>
        <Spacing direction="column" gap="1">
          <Input message="Should validate empty field once button is clicked" placeholder={args.placeholder} {...args} />
          <Button type="submit">Submit</Button>
        </Spacing>
      </form>;
  }
}`,...(He=(Ee=V.parameters)==null?void 0:Ee.docs)==null?void 0:He.source}}};var Te,Ce,De;E.parameters={...E.parameters,docs:{...(Te=E.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    id: 'id-email-validation',
    name: 'input',
    type: 'email',
    label: 'Email',
    placeholder: 'Placeholder',
    required: true,
    notRequiredHint: '(optional)',
    disabled: false,
    error: false,
    onChange: e => {
      console.log(e.target.value);
    }
  },
  render: (args, context) => {
    return <form>
        <Spacing direction="column" gap="1">
          <Input message="Should validate email once button is clicked" placeholder={args.placeholder} {...args} />
          <Button type="submit">Submit</Button>
        </Spacing>
      </form>;
  }
}`,...(De=(Ce=E.parameters)==null?void 0:Ce.docs)==null?void 0:De.source}}};var Fe,Re,Le;H.parameters={...H.parameters,docs:{...(Fe=H.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    id: 'id-pattern-validation',
    name: 'input',
    type: 'text',
    label: 'Label',
    placeholder: 'Placeholder',
    pattern: '[a-z]{4,20}',
    required: true,
    notRequiredHint: '(optional)',
    disabled: false,
    error: false,
    onChange: e => {
      console.log(e.target.value);
    }
  },
  render: (args, context) => {
    return <form>
        <Spacing direction="column" gap="1">
          <Fieldset message="Only lowercase. Enter at least 4 chars and max 20.">
            <Input placeholder={args.placeholder} {...args} />
          </Fieldset>
          <Button type="submit">Submit</Button>
        </Spacing>
      </form>;
  }
}`,...(Le=(Re=H.parameters)==null?void 0:Re.docs)==null?void 0:Le.source}}};var ke,Pe,Me;T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    id: 'id-min-max-validation',
    name: 'input',
    type: 'text',
    label: 'Label',
    placeholder: 'Placeholder',
    minLength: '8',
    maxLength: '12',
    required: true,
    notRequiredHint: '(optional)',
    disabled: false,
    error: false,
    onChange: e => {
      console.log(e.target.value);
    }
  },
  render: (args, context) => {
    return <form>
        <Spacing direction="column" gap="1">
          <Input message="Enter at least 8 chars. You cannot enter more than 12." placeholder={args.placeholder} {...args} />
          <Button type="submit">Submit</Button>
        </Spacing>
      </form>;
  }
}`,...(Me=(Pe=T.parameters)==null?void 0:Pe.docs)==null?void 0:Me.source}}};var Be,Oe,Ae;C.parameters={...C.parameters,docs:{...(Be=C.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  decorators: [Story => {
    const [message, setMessage] = useState('Should validate empty field once button is clicked');
    const [state, setState] = useState('default');
    return <form>
          <Spacing direction="column" gap="1">
            <Story message={message} setMessage={setMessage} state={state} setState={setState} />
            <Button type="submit">Submit</Button>
          </Spacing>
        </form>;
  }],
  args: {
    id: 'id-aria-describedby',
    placeholder: 'Placeholder',
    label: 'Label',
    required: true,
    notRequiredHint: '(optional)',
    disabled: false,
    error: false,
    type: 'text',
    name: 'input'
  },
  render: (args, context) => {
    const {
      message,
      setMessage
    } = context;
    const {
      state,
      setState
    } = context;
    return <Fieldset message={message} messageId="message-element-id" messageAriaLive="assertive" state={state}>
        <Input aria-describedby="message-element-id" placeholder={args.placeholder} {...args} onInvalid={e => {
        e.preventDefault();
        setMessage((e.target as HTMLInputElement).validationMessage);
        setState('error');
      }} onChange={() => {
        if (state === 'error') {
          setMessage('Should validate empty field once submit is clicked and field is empty.');
          setState('default');
        }
      }} />
      </Fieldset>;
  }
}`,...(Ae=(Oe=C.parameters)==null?void 0:Oe.docs)==null?void 0:Ae.source}}};var ze,Ke,Ye;D.parameters={...D.parameters,docs:{...(ze=D.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    required: true,
    notRequiredHint: '(optional)'
  },
  render: (args, context) => {
    return <Input id="id-interaction-test" name="input" type="text" label={args.label} placeholder="Placeholder" required={args.required} notRequiredHint={args.notRequiredHint} onChange={() => {}} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId(testItem));
    await userEvent.type(canvas.getByTestId(testItem), 'example-value', {
      delay: 20
    });
    await expect(canvas.getByTestId(testItem)).toHaveValue('example-value');
  }
}`,...(Ye=(Ke=D.parameters)==null?void 0:Ke.docs)==null?void 0:Ye.source}}};const da=["Default","Search","Number","Date","Password","Disabled","HintMessage","InfoMessage","ErrorMessage","Readonly","InfoIcon","Autocomplete","RequiredValidation","CustomValidationMessage","EmailValidation","PatternValidation","MinMaxValidation","AriaDescribedby","FillValue"];export{C as AriaDescribedby,j as Autocomplete,V as CustomValidationMessage,y as Date,p as Default,I as Disabled,E as EmailValidation,g as ErrorMessage,D as FillValue,m as HintMessage,S as InfoIcon,h as InfoMessage,T as MinMaxValidation,x as Number,N as Password,H as PatternValidation,q as Readonly,w as RequiredValidation,v as Search,da as __namedExportsOrder,ca as default};
//# sourceMappingURL=Input.stories-955eee65.js.map
