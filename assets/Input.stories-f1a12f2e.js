import{j as r}from"./clsx-42c82d7d.js";import{w as Ge,u as C,e as Je}from"./index-95c7b577.js";import{r as g}from"./index-39946eba.js";import{I as a}from"./Input-744d5832.js";import{S as s}from"./Spacing-e48a303d.js";import{B as i}from"./Button-14b284fa.js";import{F as _e}from"./Fieldset-6d91cecf.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./focus-d7245c50.js";import"./Icon-0f430218.js";import"./tw-merge-1166cefb.js";const ir={title:"Components/Input",component:a,tags:["autodocs"],decorators:[e=>r.jsxDEV("div",{className:"zep-w-[326px] [&>*]:zep-w-full",children:r.jsxDEV(e,{},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:15,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:14,columnNumber:12},globalThis)],argTypes:{label:{control:{type:"text"}},type:{control:{type:"select",options:["text","search","number","date","password"]}},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}},notRequiredHint:{control:{type:"text"}},readOnly:{control:{type:"boolean"}},error:{control:{type:"boolean"}},hasInfoIcon:{control:{type:"boolean"}},placeholder:{control:{type:"text"}}}},d={args:{id:"id-default",placeholder:"Placeholder",name:"input",type:"text",label:"Label",disabled:!1,required:!1,notRequiredHint:"(optional)",readOnly:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,t)=>r.jsxDEV(a,{placeholder:e.placeholder,...e},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:90,columnNumber:12},globalThis)},b={decorators:[e=>{const[t,n]=g.useState("Prefilled");return r.jsxDEV(e,{value:t,setValue:n},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:96,columnNumber:12},globalThis)}],args:{id:"id-search",name:"input",type:"search",disabled:!1,label:"Label",placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)"},render:(e,t)=>{const{value:n,setValue:l}=t;return r.jsxDEV(a,{autoFocus:!0,placeholder:e.placeholder,...e,value:n,onChange:o=>{l(o.target.value)}},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:113,columnNumber:12},globalThis)}},f={args:{id:"id-number",name:"input",type:"number",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},x={args:{id:"id-date",name:"input",type:"date",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},v={decorators:[e=>{const[t,n]=g.useState("TopSecret"),[l,o]=g.useState("hide");return r.jsxDEV(e,{value:t,setValue:n,icon:l,setIcon:o},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:154,columnNumber:12},globalThis)}],args:{id:"id-password",label:"Label",name:"input",disabled:!1,required:!1,notRequiredHint:"(optional)"},render:(e,t)=>{const{value:n,setValue:l,icon:o,setIcon:c}=t;return r.jsxDEV(a,{type:o==="hide"?"password":"text",icon:o,placeholder:e.placeholder,...e,value:n,onIconToggle:()=>{c(o==="hide"?"show":"hide")},onChange:h=>{l(h.target.value)}},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:171,columnNumber:12},globalThis)}},y={args:{id:"id-disabled",name:"text",type:"number",label:"Label",disabled:!0,error:!1,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},u={args:{id:"id-hint-message",placeholder:"Placeholder",name:"input",type:"text",label:"Label",disabled:!1,required:!1,notRequiredHint:"(optional)",readOnly:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,t)=>r.jsxDEV(a,{message:"Hint message",placeholder:e.placeholder,...e},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:219,columnNumber:12},globalThis)},p={args:{id:"id-info-message",placeholder:"Placeholder",name:"input",type:"text",label:"Label",disabled:!1,required:!1,notRequiredHint:"(optional)",readOnly:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,t)=>r.jsxDEV(a,{message:"Info message",state:"info",placeholder:e.placeholder,...e},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:243,columnNumber:12},globalThis)},m={args:{id:"id-error-message",name:"input",type:"text",label:"Label",disabled:!1,error:!0,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}},render:(e,t)=>r.jsxDEV(a,{message:"Some error message",state:"error",placeholder:e.placeholder,...e},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:266,columnNumber:12},globalThis)},N={args:{id:"id-readonly",name:"input",type:"text",label:"Label",value:"Filled",readOnly:!0,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{}}},I={args:{id:"id-more-info",name:"input",type:"text",label:"Label",placeholder:"Placeholder",hasInfoIcon:!0,infoTitle:"More information",required:!1,notRequiredHint:"(optional)",onIconInfoClick:()=>{alert("Info icon clicked")}}},q={args:{id:"id-autocomplete",name:"name",type:"text",label:"Name",placeholder:"Enter your name",disabled:!1,error:!1,autoComplete:"name",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}},render:(e,t)=>r.jsxDEV(a,{message:"Click this field. A dropdown menu should appear with the names already entered",placeholder:e.placeholder,...e},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:316,columnNumber:12},globalThis)},S={args:{id:"id-required-validation",name:"input",type:"text",label:"Label",placeholder:"Placeholder",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onInvalid:()=>console.log("Invalid"),onChange:e=>{console.log(e.target.value)}},render:(e,t)=>r.jsxDEV("form",{children:r.jsxDEV(s,{direction:"column",gap:"1",children:[r.jsxDEV(a,{message:"Should validate empty field once button is clicked",placeholder:e.placeholder,...e},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:338,columnNumber:11},globalThis),r.jsxDEV(i,{type:"submit",children:"Submit"},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:339,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:337,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:336,columnNumber:12},globalThis)},j={args:{id:"id-custom-validation-message",name:"input",type:"text",label:"Label",notRequiredHint:"(optional)",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onInvalid:e=>e.target.setCustomValidity("My validation message"),onChange:e=>{console.log(e.target.value)}},render:(e,t)=>r.jsxDEV("form",{children:r.jsxDEV(s,{direction:"column",gap:"1",children:[r.jsxDEV(a,{message:"Should validate empty field once button is clicked",placeholder:e.placeholder,...e},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:363,columnNumber:11},globalThis),r.jsxDEV(i,{type:"submit",children:"Submit"},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:364,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:362,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:361,columnNumber:12},globalThis)},V={args:{id:"id-email-validation",name:"input",type:"email",label:"Email",placeholder:"Placeholder",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,t)=>r.jsxDEV("form",{children:r.jsxDEV(s,{direction:"column",gap:"1",children:[r.jsxDEV(a,{message:"Should validate email once button is clicked",placeholder:e.placeholder,...e},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:387,columnNumber:11},globalThis),r.jsxDEV(i,{type:"submit",children:"Submit"},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:388,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:386,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:385,columnNumber:12},globalThis)},E={args:{id:"id-pattern-validation",name:"input",type:"text",label:"Label",placeholder:"Placeholder",pattern:"[a-z]{4,20}",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,t)=>r.jsxDEV("form",{children:r.jsxDEV(s,{direction:"column",gap:"1",children:[r.jsxDEV(_e,{message:"Only lowercase. Enter at least 4 chars and max 20.",children:r.jsxDEV(a,{placeholder:e.placeholder,...e},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:413,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:412,columnNumber:11},globalThis),r.jsxDEV(i,{type:"submit",children:"Submit"},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:415,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:411,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:410,columnNumber:12},globalThis)},T={args:{id:"id-min-max-validation",name:"input",type:"text",label:"Label",placeholder:"Placeholder",minLength:"8",maxLength:"12",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}},render:(e,t)=>r.jsxDEV("form",{children:r.jsxDEV(s,{direction:"column",gap:"1",children:[r.jsxDEV(a,{message:"Enter at least 8 chars. You cannot enter more than 12.",placeholder:e.placeholder,...e},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:440,columnNumber:11},globalThis),r.jsxDEV(i,{type:"submit",children:"Submit"},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:441,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:439,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:438,columnNumber:12},globalThis)},H={decorators:[e=>{const[t,n]=g.useState("Should validate empty field once button is clicked"),[l,o]=g.useState("default");return r.jsxDEV("form",{children:r.jsxDEV(s,{direction:"column",gap:"1",children:[r.jsxDEV(e,{message:t,setMessage:n,state:l,setState:o},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:452,columnNumber:13},globalThis),r.jsxDEV(i,{type:"submit",children:"Submit"},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:453,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:451,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:450,columnNumber:12},globalThis)}],args:{id:"id-aria-describedby",placeholder:"Placeholder",label:"Label",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,type:"text",name:"input"},render:(e,t)=>{const{message:n,setMessage:l}=t,{state:o,setState:c}=t;return r.jsxDEV(_e,{message:n,messageId:"message-element-id",messageAriaLive:"assertive",state:o,children:r.jsxDEV(a,{"aria-describedby":"message-element-id",placeholder:e.placeholder,...e,onInvalid:h=>{h.preventDefault(),l(h.target.validationMessage),c("error")},onChange:()=>{o==="error"&&(l("Should validate empty field once submit is clicked and field is empty."),c("default"))}},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:478,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:477,columnNumber:12},globalThis)}},R="zep-input-field",D={args:{label:"Label",required:!0,notRequiredHint:"(optional)"},render:(e,t)=>r.jsxDEV(a,{id:"id-interaction-test",name:"input",type:"text",label:e.label,placeholder:"Placeholder",required:e.required,notRequiredHint:e.notRequiredHint,onChange:()=>{}},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:499,columnNumber:12},globalThis),play:async({canvasElement:e})=>{const t=Ge(e);await C.click(t.getByTestId(R)),await C.type(t.getByTestId(R),"example-value",{delay:20}),await Je(t.getByTestId(R)).toHaveValue("example-value")}};var L,P,w,M,B;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
  }
}`,...(w=(P=d.parameters)==null?void 0:P.docs)==null?void 0:w.source},description:{story:"The Input component is best used inside a Fieldset component, it allows setting hint and error messages.",...(B=(M=d.parameters)==null?void 0:M.docs)==null?void 0:B.description}}};var F,k,O;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(k=b.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var A,z,Y;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(Y=(z=f.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}};var _,G,J;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Z;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,re,te,ae;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(re=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:re.source},description:{story:"Here the Input component is used inside a FormField component to enable the use of a hint.",...(ae=(te=u.parameters)==null?void 0:te.docs)==null?void 0:ae.description}}};var oe,ne,le,se,ie;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:le.source},description:{story:"Here the Input component is used inside a FormField component to enable the use of an info message.",...(ie=(se=p.parameters)==null?void 0:se.docs)==null?void 0:ie.description}}};var ce,de,ue,pe,me;m.parameters={...m.parameters,docs:{...(ce=m.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(de=m.parameters)==null?void 0:de.docs)==null?void 0:ue.source},description:{story:"Here the Input component is used inside a FormField component to enable the use of an error message.",...(me=(pe=m.parameters)==null?void 0:pe.docs)==null?void 0:me.description}}};var ge,he,be;N.parameters={...N.parameters,docs:{...(ge=N.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(be=(he=N.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var fe,xe,ve;I.parameters={...I.parameters,docs:{...(fe=I.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ve=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var ye,Ne,Ie;q.parameters={...q.parameters,docs:{...(ye=q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ie=(Ne=q.parameters)==null?void 0:Ne.docs)==null?void 0:Ie.source}}};var qe,Se,je;S.parameters={...S.parameters,docs:{...(qe=S.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(je=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};var Ve,Ee,Te;j.parameters={...j.parameters,docs:{...(Ve=j.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Te=(Ee=j.parameters)==null?void 0:Ee.docs)==null?void 0:Te.source}}};var He,De,Re;V.parameters={...V.parameters,docs:{...(He=V.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Re=(De=V.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var Ce,Le,Pe;E.parameters={...E.parameters,docs:{...(Ce=E.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Pe=(Le=E.parameters)==null?void 0:Le.docs)==null?void 0:Pe.source}}};var we,Me,Be;T.parameters={...T.parameters,docs:{...(we=T.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Be=(Me=T.parameters)==null?void 0:Me.docs)==null?void 0:Be.source}}};var Fe,ke,Oe;H.parameters={...H.parameters,docs:{...(Fe=H.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Oe=(ke=H.parameters)==null?void 0:ke.docs)==null?void 0:Oe.source}}};var Ae,ze,Ye;D.parameters={...D.parameters,docs:{...(Ae=D.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ye=(ze=D.parameters)==null?void 0:ze.docs)==null?void 0:Ye.source}}};const cr=["Default","Search","Number","Date","Password","Disabled","HintMessage","InfoMessage","ErrorMessage","Readonly","InfoIcon","Autocomplete","RequiredValidation","CustomValidationMessage","EmailValidation","PatternValidation","MinMaxValidation","AriaDescribedby","FillValue"];export{H as AriaDescribedby,q as Autocomplete,j as CustomValidationMessage,x as Date,d as Default,y as Disabled,V as EmailValidation,m as ErrorMessage,D as FillValue,u as HintMessage,I as InfoIcon,p as InfoMessage,T as MinMaxValidation,f as Number,v as Password,E as PatternValidation,N as Readonly,S as RequiredValidation,b as Search,cr as __namedExportsOrder,ir as default};
//# sourceMappingURL=Input.stories-f1a12f2e.js.map
