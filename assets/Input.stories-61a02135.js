import{R as r,r as C}from"./index-9edec130.js";import{I as P}from"./Input-526157d4.js";import{F as t}from"./FormField-daf980ff.js";import{S as i}from"./Spacing-bc043d67.js";import{B as c}from"./Button-44d71247.js";import"./_commonjsHelpers-de833af9.js";import"./clsx.m-1229b3e0.js";import"./focus-d7245c50.js";import"./Icon-645ba8dd.js";import"./tw-merge-1166cefb.js";var a="/home/circleci/project/src/components/input/Input.stories.tsx";const Ae={title:"Components/Input",component:P,tags:["autodocs"],decorators:[e=>r.createElement("div",{className:"zep-w-[326px] [&>*]:zep-w-full",__self:void 0,__source:{fileName:a,lineNumber:13,columnNumber:12}},r.createElement(e,{__self:void 0,__source:{fileName:a,lineNumber:14,columnNumber:11}}))],argTypes:{label:{control:{type:"text"}},type:{control:{type:"select",options:["text","search","number","date","password"]}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},error:{control:{type:"boolean"}},message:{control:{type:"text"}},hasInfoIcon:{control:{type:"boolean"}},placeholder:{control:{type:"text"}}}},m={decorators:[e=>r.createElement(t,{message:"Hint message",__self:void 0,__source:{fileName:a,lineNumber:65,columnNumber:12}},r.createElement(e,{__self:void 0,__source:{fileName:a,lineNumber:66,columnNumber:11}}))],args:{id:"id-default",name:"input",type:"text",label:"Label",disabled:!1,readOnly:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},u={decorators:[e=>{const[o,l]=C.useState("Prefilled");return r.createElement(e,{value:o,setValue:l,__self:void 0,__source:{fileName:a,lineNumber:86,columnNumber:12}})}],render:(e,o)=>{const{value:l,setValue:n}=o;return r.createElement(P,{id:"id-search",name:"input",type:"search",label:"Label",disabled:!1,autoFocus:!0,placeholder:"Placeholder",value:l,onChange:s=>{n(s.target.value)},__self:void 0,__source:{fileName:a,lineNumber:93,columnNumber:12}})}},d={args:{id:"id-number",name:"input",type:"number",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},p={args:{id:"id-date",name:"input",type:"date",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},b={decorators:[e=>{const[o,l]=C.useState("TopSecret"),[n,s]=C.useState("hide");return r.createElement(e,{value:o,setValue:l,icon:n,setIcon:s,__self:void 0,__source:{fileName:a,lineNumber:130,columnNumber:12}})}],render:(e,o)=>{const{value:l,setValue:n,icon:s,setIcon:L}=o;return r.createElement(P,{id:"id-password",name:"input",type:s==="hide"?"password":"text",label:"Label",disabled:!1,icon:s,placeholder:"Placeholder",value:l,onIconToggle:()=>{L(s==="hide"?"show":"hide")},onChange:Ce=>{n(Ce.target.value)},__self:void 0,__source:{fileName:a,lineNumber:139,columnNumber:12}})}},g={args:{id:"id-disabled",name:"text",type:"number",label:"Label",disabled:!0,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},f={decorators:[e=>r.createElement(t,{message:"Some error message",state:"error",__self:void 0,__source:{fileName:a,lineNumber:166,columnNumber:12}},r.createElement(e,{__self:void 0,__source:{fileName:a,lineNumber:167,columnNumber:11}}))],args:{id:"id-error-message",name:"input",type:"text",label:"Label",disabled:!1,error:!0,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},_={args:{id:"id-readonly",name:"input",type:"text",label:"Label",value:"Filled",readOnly:!0,placeholder:"Placeholder",onChange:e=>{}}},h={decorators:[e=>r.createElement(t,{message:"Info message",state:"info",__self:void 0,__source:{fileName:a,lineNumber:197,columnNumber:12}},r.createElement(e,{__self:void 0,__source:{fileName:a,lineNumber:198,columnNumber:11}}))],args:{id:"id-info-message",name:"input",type:"text",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},N={args:{id:"id-more-info",name:"input",type:"text",label:"Label",placeholder:"Placeholder",hasInfoIcon:!0,onIconInfoClick:()=>{alert("Info icon clicked")}}},v={decorators:[e=>r.createElement(t,{message:"Click this field. A dropdown menu should appear with the names already entered",__self:void 0,__source:{fileName:a,lineNumber:229,columnNumber:12}},r.createElement(e,{__self:void 0,__source:{fileName:a,lineNumber:230,columnNumber:11}}))],args:{id:"id-autocomplete",name:"name",type:"text",label:"Name",placeholder:"Enter your name",disabled:!1,error:!1,autoComplete:"name",onChange:e=>{console.log(e.target.value)}}},y={decorators:[e=>r.createElement("form",{__self:void 0,__source:{fileName:a,lineNumber:249,columnNumber:12}},r.createElement(i,{direction:"column",gap:"1",__self:void 0,__source:{fileName:a,lineNumber:250,columnNumber:11}},r.createElement(t,{message:"Should validate empty field once button is clicked",__self:void 0,__source:{fileName:a,lineNumber:251,columnNumber:13}},r.createElement(e,{__self:void 0,__source:{fileName:a,lineNumber:252,columnNumber:15}})),r.createElement(c,{type:"submit",__self:void 0,__source:{fileName:a,lineNumber:254,columnNumber:13}},"Submit")))],args:{id:"id-required-validation",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onInvalid:()=>console.log("Invalid"),onChange:e=>{console.log(e.target.value)}}},S={decorators:[e=>r.createElement("form",{__self:void 0,__source:{fileName:a,lineNumber:275,columnNumber:12}},r.createElement(i,{direction:"column",gap:"1",__self:void 0,__source:{fileName:a,lineNumber:276,columnNumber:11}},r.createElement(t,{message:"Should validate empty field once button is clicked",__self:void 0,__source:{fileName:a,lineNumber:277,columnNumber:13}},r.createElement(e,{__self:void 0,__source:{fileName:a,lineNumber:278,columnNumber:15}})),r.createElement(c,{type:"submit",__self:void 0,__source:{fileName:a,lineNumber:280,columnNumber:13}},"Submit")))],args:{id:"id-custom-validation-message",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onInvalid:e=>e.target.setCustomValidity("My validation message"),onChange:e=>{console.log(e.target.value)}}},E={decorators:[e=>r.createElement("form",{__self:void 0,__source:{fileName:a,lineNumber:301,columnNumber:12}},r.createElement(i,{direction:"column",gap:"1",__self:void 0,__source:{fileName:a,lineNumber:302,columnNumber:11}},r.createElement(t,{message:"Should validate email once button is clicked",__self:void 0,__source:{fileName:a,lineNumber:303,columnNumber:13}},r.createElement(e,{__self:void 0,__source:{fileName:a,lineNumber:304,columnNumber:15}})),r.createElement(c,{type:"submit",__self:void 0,__source:{fileName:a,lineNumber:306,columnNumber:13}},"Submit")))],args:{id:"id-email-validation",name:"input",type:"email",label:"Email",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},x={decorators:[e=>r.createElement("form",{__self:void 0,__source:{fileName:a,lineNumber:326,columnNumber:12}},r.createElement(i,{direction:"column",gap:"1",__self:void 0,__source:{fileName:a,lineNumber:327,columnNumber:11}},r.createElement(t,{message:"Only lowercase. Enter at least 4 chars and max 20.",__self:void 0,__source:{fileName:a,lineNumber:328,columnNumber:13}},r.createElement(e,{__self:void 0,__source:{fileName:a,lineNumber:329,columnNumber:15}})),r.createElement(c,{type:"submit",__self:void 0,__source:{fileName:a,lineNumber:331,columnNumber:13}},"Submit")))],args:{id:"id-pattern-validation",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",pattern:"[a-z]{4,20}",required:!0,disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},F={decorators:[e=>r.createElement("form",{__self:void 0,__source:{fileName:a,lineNumber:352,columnNumber:12}},r.createElement(i,{direction:"column",gap:"1",__self:void 0,__source:{fileName:a,lineNumber:353,columnNumber:11}},r.createElement(t,{message:"Enter at least 8 chars. You cannot enter more than 12.",__self:void 0,__source:{fileName:a,lineNumber:354,columnNumber:13}},r.createElement(e,{__self:void 0,__source:{fileName:a,lineNumber:355,columnNumber:15}})),r.createElement(c,{type:"submit",__self:void 0,__source:{fileName:a,lineNumber:357,columnNumber:13}},"Submit")))],args:{id:"id-min-max-validation",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",minLength:"8",maxLength:"12",required:!0,disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},I={decorators:[e=>{const[o,l]=C.useState(null);return r.createElement("form",{__self:void 0,__source:{fileName:a,lineNumber:380,columnNumber:12}},r.createElement(i,{direction:"column",gap:"1",__self:void 0,__source:{fileName:a,lineNumber:381,columnNumber:11}},r.createElement(t,{message:"Should validate empty field once button is clicked",__self:void 0,__source:{fileName:a,lineNumber:382,columnNumber:13}},r.createElement(e,{message:o,setMessage:l,__self:void 0,__source:{fileName:a,lineNumber:383,columnNumber:15}})),r.createElement(c,{type:"submit",__self:void 0,__source:{fileName:a,lineNumber:385,columnNumber:13}},"Submit")))}],render:(e,o)=>{const{message:l,setMessage:n}=o;return r.createElement(P,{id:"id-aria-describedby",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",required:!0,message:l,onInvalid:s=>{s.preventDefault(),n("Please enter a value")},onChange:()=>n(!1),__self:void 0,__source:{fileName:a,lineNumber:394,columnNumber:12}})}};var q,V,M;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
    readOnly: false,
    error: false,
    placeholder: 'Placeholder',
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...(M=(V=m.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var w,k,B;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [Story => {
    const [value, setValue] = useState('Prefilled');
    return <Story value={value} setValue={setValue} />;
  }],
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Input id="id-search" name="input" type="search" label="Label" disabled={false} autoFocus placeholder="Placeholder" value={value} onChange={e => {
      setValue(e.target.value);
    }} />;
  }
}`,...(B=(k=u.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var D,O,A;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: 'id-number',
    name: 'input',
    type: 'number',
    label: 'Label',
    disabled: false,
    error: false,
    placeholder: 'Placeholder',
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...(A=(O=d.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var R,T,z;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    id: 'id-date',
    name: 'input',
    type: 'date',
    label: 'Label',
    disabled: false,
    error: false,
    placeholder: 'Placeholder',
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...(z=(T=p.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var j,H,Y;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  decorators: [Story => {
    const [value, setValue] = useState('TopSecret');
    const [icon, setIcon] = useState('hide');
    return <Story value={value} setValue={setValue} icon={icon} setIcon={setIcon} />;
  }],
  render: (args, context) => {
    const {
      value,
      setValue,
      icon,
      setIcon
    } = context;
    return <Input id="id-password" name="input" type={icon === 'hide' ? 'password' : 'text'} label="Label" disabled={false} icon={icon} placeholder="Placeholder" value={value} onIconToggle={() => {
      if (icon === 'hide') {
        setIcon('show');
      } else {
        setIcon('hide');
      }
    }} onChange={e => {
      setValue(e.target.value);
    }} />;
  }
}`,...(Y=(H=b.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var G,J,K;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    id: 'id-disabled',
    name: 'text',
    type: 'number',
    label: 'Label',
    disabled: true,
    error: false,
    placeholder: 'Placeholder',
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,W;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...(W=(U=f.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Z,$;_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    id: 'id-readonly',
    name: 'input',
    type: 'text',
    label: 'Label',
    value: 'Filled',
    readOnly: true,
    placeholder: 'Placeholder',
    onChange: e => {}
  }
}`,...($=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...(ae=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var oe,le,te;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    id: 'id-more-info',
    name: 'input',
    type: 'text',
    label: 'Label',
    placeholder: 'Placeholder',
    hasInfoIcon: true,
    onIconInfoClick: () => {
      alert('Info icon clicked');
    }
  }
}`,...(te=(le=N.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var se,ne,ie;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...(ie=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ce,me,ue;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
    label: 'Label (required)',
    placeholder: 'Placeholder',
    required: true,
    disabled: false,
    error: false,
    onInvalid: () => console.log('Invalid'),
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...(ue=(me=y.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var de,pe,be;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
    label: 'Label (required)',
    placeholder: 'Placeholder',
    required: true,
    disabled: false,
    error: false,
    onInvalid: e => e.target.setCustomValidity('My validation message'),
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...(be=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ge,fe,_e;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
    disabled: false,
    error: false,
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...(_e=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:_e.source}}};var he,Ne,ve;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
    label: 'Label (required)',
    placeholder: 'Placeholder',
    pattern: '[a-z]{4,20}',
    required: true,
    disabled: false,
    error: false,
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...(ve=(Ne=x.parameters)==null?void 0:Ne.docs)==null?void 0:ve.source}}};var ye,Se,Ee;F.parameters={...F.parameters,docs:{...(ye=F.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
    label: 'Label (required)',
    placeholder: 'Placeholder',
    minLength: '8',
    maxLength: '12',
    required: true,
    disabled: false,
    error: false,
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...(Ee=(Se=F.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source}}};var xe,Fe,Ie;I.parameters={...I.parameters,docs:{...(xe=I.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
  render: (args, context) => {
    const {
      message,
      setMessage
    } = context;
    return <Input id="id-aria-describedby" name="input" type="text" label="Label (required)" placeholder="Placeholder" required message={message} onInvalid={e => {
      e.preventDefault();
      setMessage('Please enter a value');
    }} onChange={() => setMessage(false)} />;
  }
}`,...(Ie=(Fe=I.parameters)==null?void 0:Fe.docs)==null?void 0:Ie.source}}};const Re=["Default","Search","Number","Date","Password","Disabled","ErrorMessage","Readonly","InfoMessage","InfoIcon","Autocomplete","RequiredValidation","CustomValidationMessage","EmailValidation","PatternValidation","MinMaxValidation","AriaDescribedby"];export{I as AriaDescribedby,v as Autocomplete,S as CustomValidationMessage,p as Date,m as Default,g as Disabled,E as EmailValidation,f as ErrorMessage,N as InfoIcon,h as InfoMessage,F as MinMaxValidation,d as Number,b as Password,x as PatternValidation,_ as Readonly,y as RequiredValidation,u as Search,Re as __namedExportsOrder,Ae as default};
//# sourceMappingURL=Input.stories-61a02135.js.map
