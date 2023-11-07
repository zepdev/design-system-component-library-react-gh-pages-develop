import{j as r}from"./clsx-42c82d7d.js";import{r as V}from"./index-39946eba.js";import{I as E}from"./Input-1a5fd849.js";import{F as a}from"./FormField-f1c0404d.js";import{S as n}from"./Spacing-b08531fa.js";import{B as i}from"./Button-926c84f6.js";import"./_commonjsHelpers-de833af9.js";import"./focus-d7245c50.js";import"./Icon-373ec928.js";import"./tw-merge-1166cefb.js";const Be={title:"Components/Input",component:E,tags:["autodocs"],decorators:[e=>r.jsxDEV("div",{className:"zep-w-[326px] [&>*]:zep-w-full",children:r.jsxDEV(e,{},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:13,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:12,columnNumber:12},globalThis)],argTypes:{label:{control:{type:"text"}},type:{control:{type:"select",options:["text","search","number","date","password"]}},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}},notRequiredHint:{control:{type:"text"}},readOnly:{control:{type:"boolean"}},error:{control:{type:"boolean"}},message:{control:{type:"text"}},hasInfoIcon:{control:{type:"boolean"}},placeholder:{control:{type:"text"}}}},c={decorators:[e=>r.jsxDEV(a,{message:"Hint message",children:r.jsxDEV(e,{},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:79,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:78,columnNumber:12},globalThis)],args:{id:"id-default",name:"input",type:"text",label:"Label",disabled:!1,required:!1,notRequiredHint:"(optional)",readOnly:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},u={decorators:[e=>{const[o,t]=V.useState("Prefilled");return r.jsxDEV(e,{value:o,setValue:t},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:101,columnNumber:12},globalThis)}],args:{label:"Label",required:!1,notRequiredHint:"(optional)"},render:(e,o)=>{const{value:t,setValue:s}=o;return r.jsxDEV(E,{id:"id-search",name:"input",type:"search",label:e.label,disabled:!1,autoFocus:!0,placeholder:"Placeholder",value:t,onChange:l=>{s(l.target.value)}},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:113,columnNumber:12},globalThis)}},d={args:{id:"id-number",name:"input",type:"number",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},m={args:{id:"id-date",name:"input",type:"date",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},p={decorators:[e=>{const[o,t]=V.useState("TopSecret"),[s,l]=V.useState("hide");return r.jsxDEV(e,{value:o,setValue:t,icon:s,setIcon:l},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:154,columnNumber:12},globalThis)}],args:{label:"Label",required:!1,notRequiredHint:"(optional)"},render:(e,o)=>{const{value:t,setValue:s,icon:l,setIcon:D}=o;return r.jsxDEV(E,{id:"id-password",name:"input",type:l==="hide"?"password":"text",label:e.label,disabled:!1,icon:l,required:e.required,placeholder:"Placeholder",value:t,onIconToggle:()=>{D(l==="hide"?"show":"hide")},onChange:De=>{s(De.target.value)}},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:168,columnNumber:12},globalThis)}},b={args:{id:"id-disabled",name:"text",type:"number",label:"Label",disabled:!0,error:!1,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},g={decorators:[e=>r.jsxDEV(a,{message:"Some error message",state:"error",children:r.jsxDEV(e,{},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:198,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:197,columnNumber:12},globalThis)],args:{id:"id-error-message",name:"input",type:"text",label:"Label",disabled:!1,error:!0,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},h={args:{id:"id-readonly",name:"input",type:"text",label:"Label",value:"Filled",readOnly:!0,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{}}},f={decorators:[e=>r.jsxDEV(a,{message:"Info message",state:"info",children:r.jsxDEV(e,{},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:233,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:232,columnNumber:12},globalThis)],args:{id:"id-info-message",name:"input",type:"text",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},x={args:{id:"id-more-info",name:"input",type:"text",label:"Label",placeholder:"Placeholder",hasInfoIcon:!0,required:!1,notRequiredHint:"(optional)",onIconInfoClick:()=>{alert("Info icon clicked")}}},N={decorators:[e=>r.jsxDEV(a,{message:"Click this field. A dropdown menu should appear with the names already entered",children:r.jsxDEV(e,{},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:269,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:268,columnNumber:12},globalThis)],args:{id:"id-autocomplete",name:"name",type:"text",label:"Name",placeholder:"Enter your name",disabled:!1,error:!1,autoComplete:"name",required:!1,notRequiredHint:"(optional)",onChange:e=>{console.log(e.target.value)}}},v={decorators:[e=>r.jsxDEV("form",{children:r.jsxDEV(n,{direction:"column",gap:"1",children:[r.jsxDEV(a,{message:"Should validate empty field once button is clicked",children:r.jsxDEV(e,{},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:293,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:292,columnNumber:13},globalThis),r.jsxDEV(i,{type:"submit",children:"Submit"},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:295,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:291,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:290,columnNumber:12},globalThis)],args:{id:"id-required-validation",name:"input",type:"text",label:"Label",placeholder:"Placeholder",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onInvalid:()=>console.log("Invalid"),onChange:e=>{console.log(e.target.value)}}},y={decorators:[e=>r.jsxDEV("form",{children:r.jsxDEV(n,{direction:"column",gap:"1",children:[r.jsxDEV(a,{message:"Should validate empty field once button is clicked",children:r.jsxDEV(e,{},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:320,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:319,columnNumber:13},globalThis),r.jsxDEV(i,{type:"submit",children:"Submit"},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:322,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:318,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:317,columnNumber:12},globalThis)],args:{id:"id-custom-validation-message",name:"input",type:"text",label:"Label",notRequiredHint:"(optional)",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onInvalid:e=>e.target.setCustomValidity("My validation message"),onChange:e=>{console.log(e.target.value)}}},j={decorators:[e=>r.jsxDEV("form",{children:r.jsxDEV(n,{direction:"column",gap:"1",children:[r.jsxDEV(a,{message:"Should validate email once button is clicked",children:r.jsxDEV(e,{},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:347,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:346,columnNumber:13},globalThis),r.jsxDEV(i,{type:"submit",children:"Submit"},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:349,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:345,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:344,columnNumber:12},globalThis)],args:{id:"id-email-validation",name:"input",type:"email",label:"Email",placeholder:"Placeholder",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},I={decorators:[e=>r.jsxDEV("form",{children:r.jsxDEV(n,{direction:"column",gap:"1",children:[r.jsxDEV(a,{message:"Only lowercase. Enter at least 4 chars and max 20.",children:r.jsxDEV(e,{},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:373,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:372,columnNumber:13},globalThis),r.jsxDEV(i,{type:"submit",children:"Submit"},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:375,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:371,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:370,columnNumber:12},globalThis)],args:{id:"id-pattern-validation",name:"input",type:"text",label:"Label",placeholder:"Placeholder",pattern:"[a-z]{4,20}",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},S={decorators:[e=>r.jsxDEV("form",{children:r.jsxDEV(n,{direction:"column",gap:"1",children:[r.jsxDEV(a,{message:"Enter at least 8 chars. You cannot enter more than 12.",children:r.jsxDEV(e,{},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:400,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:399,columnNumber:13},globalThis),r.jsxDEV(i,{type:"submit",children:"Submit"},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:402,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:398,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:397,columnNumber:12},globalThis)],args:{id:"id-min-max-validation",name:"input",type:"text",label:"Label",placeholder:"Placeholder",minLength:"8",maxLength:"12",required:!0,notRequiredHint:"(optional)",disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},q={decorators:[e=>{const[o,t]=V.useState(null);return r.jsxDEV("form",{children:r.jsxDEV(n,{direction:"column",gap:"1",children:[r.jsxDEV(a,{message:"Should validate empty field once button is clicked",children:r.jsxDEV(e,{message:o,setMessage:t},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:429,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:428,columnNumber:13},globalThis),r.jsxDEV(i,{type:"submit",children:"Submit"},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:431,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:427,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:426,columnNumber:12},globalThis)}],args:{label:"Label",required:!0,notRequiredHint:"(optional)"},render:(e,o)=>{const{message:t,setMessage:s}=o;return r.jsxDEV(E,{id:"id-aria-describedby",name:"input",type:"text",label:e.label,placeholder:"Placeholder",required:e.required,notRequiredHint:e.notRequiredHint,message:t,onInvalid:l=>{l.preventDefault(),s("Please enter a value")},onChange:()=>s(!1)},void 0,!1,{fileName:"/home/circleci/project/src/components/input/Input.stories.tsx",lineNumber:445,columnNumber:12},globalThis)}};var T,F,R,C,H;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  decorators: [Story => {
    return <FormField message="Hint message">
          <Story />
        </FormField>;
  }],
  args: {
    id: 'id-default',
    name: 'input',
    type: 'text',
    label: 'Label',
    disabled: false,
    required: false,
    notRequiredHint: '(optional)',
    readOnly: false,
    error: false,
    placeholder: 'Placeholder',
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...(R=(F=c.parameters)==null?void 0:F.docs)==null?void 0:R.source},description:{story:"The Input component is best used inside a FormField component, it allows setting hint and error messages.",...(H=(C=c.parameters)==null?void 0:C.docs)==null?void 0:H.description}}};var P,L,M;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  decorators: [Story => {
    const [value, setValue] = useState('Prefilled');
    return <Story value={value} setValue={setValue} />;
  }],
  args: {
    label: 'Label',
    required: false,
    notRequiredHint: '(optional)'
  },
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Input id="id-search" name="input" type="search" label={args.label} disabled={false} autoFocus placeholder="Placeholder" value={value} onChange={e => {
      setValue(e.target.value);
    }} />;
  }
}`,...(M=(L=u.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var w,k,B;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(B=(k=d.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var O,A,z;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(z=(A=m.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var Y,_,G;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  decorators: [Story => {
    const [value, setValue] = useState('TopSecret');
    const [icon, setIcon] = useState('hide');
    return <Story value={value} setValue={setValue} icon={icon} setIcon={setIcon} />;
  }],
  args: {
    label: 'Label',
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
    return <Input id="id-password" name="input" type={icon === 'hide' ? 'password' : 'text'} label={args.label} disabled={false} icon={icon} required={args.required} placeholder="Placeholder" value={value} onIconToggle={() => {
      if (icon === 'hide') {
        setIcon('show');
      } else {
        setIcon('hide');
      }
    }} onChange={e => {
      setValue(e.target.value);
    }} />;
  }
}`,...(G=(_=p.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  decorators: [Story => {
    return <FormField message="Some error message" state="error">
          <Story />
        </FormField>;
  }],
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
  }
}`,...(X=(W=g.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,$,ee;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=h.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,oe,te;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  decorators: [Story => {
    return <FormField message="Info message" state="info">
          <Story />
        </FormField>;
  }],
  args: {
    id: 'id-info-message',
    name: 'input',
    type: 'text',
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
}`,...(te=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ae,le,se;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    id: 'id-more-info',
    name: 'input',
    type: 'text',
    label: 'Label',
    placeholder: 'Placeholder',
    hasInfoIcon: true,
    required: false,
    notRequiredHint: '(optional)',
    onIconInfoClick: () => {
      alert('Info icon clicked');
    }
  }
}`,...(se=(le=x.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ne,ie,ce;N.parameters={...N.parameters,docs:{...(ne=N.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  decorators: [Story => {
    return <FormField message="Click this field. A dropdown menu should appear with the names already entered">
          <Story />
        </FormField>;
  }],
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
  }
}`,...(ce=(ie=N.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,de,me;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  decorators: [Story => {
    return <form>
          <Spacing direction="column" gap="1">
            <FormField message="Should validate empty field once button is clicked">
              <Story />
            </FormField>
            <Button type="submit">Submit</Button>
          </Spacing>
        </form>;
  }],
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
  }
}`,...(me=(de=v.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,be,ge;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  decorators: [Story => {
    return <form>
          <Spacing direction="column" gap="1">
            <FormField message="Should validate empty field once button is clicked">
              <Story />
            </FormField>
            <Button type="submit">Submit</Button>
          </Spacing>
        </form>;
  }],
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
  }
}`,...(ge=(be=y.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var he,fe,xe;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`{
  decorators: [Story => {
    return <form>
          <Spacing direction="column" gap="1">
            <FormField message="Should validate email once button is clicked">
              <Story />
            </FormField>
            <Button type="submit">Submit</Button>
          </Spacing>
        </form>;
  }],
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
  }
}`,...(xe=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var Ne,ve,ye;I.parameters={...I.parameters,docs:{...(Ne=I.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  decorators: [Story => {
    return <form>
          <Spacing direction="column" gap="1">
            <FormField message="Only lowercase. Enter at least 4 chars and max 20.">
              <Story />
            </FormField>
            <Button type="submit">Submit</Button>
          </Spacing>
        </form>;
  }],
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
  }
}`,...(ye=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var je,Ie,Se;S.parameters={...S.parameters,docs:{...(je=S.parameters)==null?void 0:je.docs,source:{originalSource:`{
  decorators: [Story => {
    return <form>
          <Spacing direction="column" gap="1">
            <FormField message="Enter at least 8 chars. You cannot enter more than 12.">
              <Story />
            </FormField>
            <Button type="submit">Submit</Button>
          </Spacing>
        </form>;
  }],
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
  }
}`,...(Se=(Ie=S.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source}}};var qe,Ve,Ee;q.parameters={...q.parameters,docs:{...(qe=q.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  decorators: [Story => {
    const [message, setMessage] = useState(null);
    return <form>
          <Spacing direction="column" gap="1">
            <FormField message="Should validate empty field once button is clicked">
              <Story message={message} setMessage={setMessage} />
            </FormField>
            <Button type="submit">Submit</Button>
          </Spacing>
        </form>;
  }],
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
    return <Input id="id-aria-describedby" name="input" type="text" label={args.label} placeholder="Placeholder" required={args.required} notRequiredHint={args.notRequiredHint} message={message} onInvalid={e => {
      e.preventDefault();
      setMessage('Please enter a value');
    }} onChange={() => setMessage(false)} />;
  }
}`,...(Ee=(Ve=q.parameters)==null?void 0:Ve.docs)==null?void 0:Ee.source}}};const Oe=["Default","Search","Number","Date","Password","Disabled","ErrorMessage","Readonly","InfoMessage","InfoIcon","Autocomplete","RequiredValidation","CustomValidationMessage","EmailValidation","PatternValidation","MinMaxValidation","AriaDescribedby"];export{q as AriaDescribedby,N as Autocomplete,y as CustomValidationMessage,m as Date,c as Default,b as Disabled,j as EmailValidation,g as ErrorMessage,x as InfoIcon,f as InfoMessage,S as MinMaxValidation,d as Number,p as Password,I as PatternValidation,h as Readonly,v as RequiredValidation,u as Search,Oe as __namedExportsOrder,Be as default};
//# sourceMappingURL=Input.stories-af4c4b5c.js.map
