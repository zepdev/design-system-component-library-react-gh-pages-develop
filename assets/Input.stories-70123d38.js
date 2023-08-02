import{R as a,r as V}from"./index-8db94870.js";import{c as s}from"./clsx.m-1229b3e0.js";import{f as _e}from"./focus-8391b0c7.js";import{b as Re}from"./border-radius-595a2ba1.js";import{F as w}from"./Icon-af1412c8.js";import{F as n}from"./FormField-0807dd70.js";import{S as i}from"./Spacing-2c30780b.js";import{B as u}from"./Button-e2fcf039.js";import"./_commonjsHelpers-042e6b4d.js";import"./tw-merge-b02e8c47.js";const Ae="zep-input",d=({id:e,type:r,value:t,error:o,label:l,disabled:c=!1,icon:p,readOnly:we=!1,hasInfoIcon:ke=!1,message:k,onIconToggle:M,onIconInfoClick:Me,onChange:Be,...Ne})=>{const De=s("search-cancel:appearance-none","search-cancel:w-5","search-cancel:h-5","search-cancel:border-[15px]","search-cancel:border-solid","search-cancel:border-transparent","search-cancel:cursor-pointer","search-cancel:bg-no-repeat","search-cancel:mr-[-16px]","search-cancel:bg-[url(/src/assets/search-cancel.svg)]"),He=s("calendar-picker:appearance-none","calendar-picker:w-5","calendar-picker:h-5","calendar-picker:p-0","calendar-picker:border-x-[16px]","calendar-picker:border-solid","calendar-picker:border-transparent","calendar-picker:cursor-pointer","calendar-picker:bg-no-repeat","calendar-picker:mr-[-16px]","calendar-picker:bg-[url(/src/assets/calendar.svg)]");return a.createElement("span",{className:s(Ae,"zep-inline-flex","zep-flex-col","zep-flex-wrap","zep-items-stretch","zep-justify-start","zep-relative",[c?"zep-opacity-zep-40 zep-cursor-not-allowed":"zep-cursor-pointer"]),"data-testid":"zep-input"},l&&a.createElement("label",{htmlFor:e,className:s("zep-mb-0.5","zep-text-input-label-default")},l),a.createElement("div",{className:s("zep-inline-flex","zep-flex-row","zep-flex-nowrap","zep-items-center","zep-gap-0.5")},a.createElement("div",{className:s("zep-relative","zep-w-full")},a.createElement("input",{id:e,value:t,type:r,onChange:c?void 0:Be,"aria-describedby":`aria-describedby-${e}`,className:s(Re,_e,"zep-border-solid","zep-border-1","zep-w-full","zep-rounded-4","zep-h-3","zep-px-1","zep-leading-[48px]","zep-leading-[22px]","focus-visible:zep-ring-offset-1","zep-text-input-placeholder-default zep-placeholder-input-placeholder-default/70","invalid:[&:not(:placeholder-shown):not(:focus)]:zep-border-error","invalid:[&:not(:placeholder-shown):not(:focus)]:zep-border-2",{"zep-border-inbox-default":!o},{"zep-border-2 zep-border-error":o},{"zep-text-input-placeholder-readOnly zep-bg-input-placeholder-readonly zep-cursor-not-allowed":we},{[He]:r==="date"},{[De]:r==="search"}),disabled:c,"data-testid":"zep-input-field",...Ne}),p&&a.createElement(w,{onClick:M,className:s("zep-absolute","zep-top-[0px]","zep-bottom-0","zep-right-1","zep-h-full",{"zep-cursor-pointer":M}),name:p})),ke&&a.createElement(w,{onClick:Me,name:"Info"})),k&&a.createElement("div",{className:s("zep-inline-flex","zep-flex-row","zep-items-center","zep-gap-0.25","zep-text-error","zep-mt-0.25")},a.createElement(w,{name:"Warning"}),a.createElement("span",{id:`aria-describedby-${e}`},k)))};try{d.displayName="Input",d.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"ArrowLongRight"'},{value:'"ChevronMiniDown"'},{value:'"ChevronMiniUp"'},{value:'"Check"'},{value:'"DeleteCircle"'},{value:'"Warning"'},{value:'"Hide"'},{value:'"Show"'},{value:'"Info"'}]}},hasInfoIcon:{defaultValue:{value:"false"},description:"",name:"hasInfoIcon",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},onIconToggle:{defaultValue:null,description:"",name:"onIconToggle",required:!1,type:{name:"(() => void)"}},onIconInfoClick:{defaultValue:null,description:"",name:"onIconInfoClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const Qe={title:"Components/Input",component:d,tags:["autodocs"],decorators:[e=>a.createElement("div",{className:"zep-w-[326px] [&>*]:zep-w-full"},a.createElement(e,null))],argTypes:{label:{control:{type:"text"}},type:{control:{type:"select",options:["text","search","number","date","password"]}},disabled:{control:{type:"boolean"}},error:{control:{type:"boolean"}},message:{control:{type:"text"}},hasInfoIcon:{control:{type:"boolean"}},placeholder:{control:{type:"text"}}}},m={decorators:[e=>a.createElement(n,{message:"Hint message"},a.createElement(e,null))],args:{id:"id-default",name:"input",type:"text",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},g={decorators:[e=>{const[r,t]=V.useState("Prefilled");return a.createElement(e,{value:r,setValue:t})}],render:(e,r)=>{const{value:t,setValue:o}=r;return a.createElement(d,{id:"id-search",name:"input",type:"search",label:"Label",disabled:!1,autoFocus:!0,placeholder:"Placeholder",value:t,onChange:l=>{o(l.target.value)}})}},b={args:{id:"id-number",name:"input",type:"number",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},h={args:{id:"id-date",name:"input",type:"date",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},f={decorators:[e=>{const[r,t]=V.useState("TopSecret"),[o,l]=V.useState("Hide");return a.createElement(e,{value:r,setValue:t,icon:o,setIcon:l})}],render:(e,r)=>{const{value:t,setValue:o,icon:l,setIcon:c}=r;return a.createElement(d,{id:"id-password",name:"input",type:l==="Hide"?"password":"text",label:"Label",disabled:!1,icon:l,placeholder:"Placeholder",value:t,onIconToggle:()=>{c(l==="Hide"?"Show":"Hide")},onChange:p=>{o(p.target.value)}})}},y={args:{id:"id-disabled",name:"text",type:"number",label:"Label",disabled:!0,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},v={decorators:[e=>a.createElement(n,{message:"Some error message",state:"error"},a.createElement(e,null))],args:{id:"id-error-message",name:"input",type:"text",label:"Label",disabled:!1,error:!0,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},S={args:{id:"id-readonly",name:"input",type:"text",label:"Label",value:"Filled",readOnly:!0,placeholder:"Placeholder",onChange:e=>{}}},x={decorators:[e=>a.createElement(n,{message:"Info message",state:"info"},a.createElement(e,null))],args:{id:"id-info-message",name:"input",type:"text",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},E={args:{id:"id-more-info",name:"input",type:"text",label:"Label",placeholder:"Placeholder",hasInfoIcon:!0,onIconInfoClick:()=>{alert("Info icon clicked")}}},I={decorators:[e=>a.createElement(n,{message:"Click this field. A dropdown menu should appear with the names already entered"},a.createElement(e,null))],args:{id:"id-autocomplete",name:"name",type:"text",label:"Name",placeholder:"Enter your name",disabled:!1,error:!1,autoComplete:"name",onChange:e=>{console.log(e.target.value)}}},z={decorators:[e=>a.createElement("form",null,a.createElement(i,{direction:"column",gap:"1"},a.createElement(n,{message:"Should validate empty field once button is clicked"},a.createElement(e,null)),a.createElement(u,{type:"submit"},"Submit")))],args:{id:"id-required-validation",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onInvalid:()=>console.log("Invalid"),onChange:e=>{console.log(e.target.value)}}},C={decorators:[e=>a.createElement("form",null,a.createElement(i,{direction:"column",gap:"1"},a.createElement(n,{message:"Should validate empty field once button is clicked"},a.createElement(e,null)),a.createElement(u,{type:"submit"},"Submit")))],args:{id:"id-custom-validation-message",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onInvalid:e=>e.target.setCustomValidity("My validation message"),onChange:e=>{console.log(e.target.value)}}},F={decorators:[e=>a.createElement("form",null,a.createElement(i,{direction:"column",gap:"1"},a.createElement(n,{message:"Should validate email once button is clicked"},a.createElement(e,null)),a.createElement(u,{type:"submit"},"Submit")))],args:{id:"id-email-validation",name:"input",type:"email",label:"Email",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},P={decorators:[e=>a.createElement("form",null,a.createElement(i,{direction:"column",gap:"1"},a.createElement(n,{message:"Only lowercase. Enter at least 4 chars and max 20."},a.createElement(e,null)),a.createElement(u,{type:"submit"},"Submit")))],args:{id:"id-pattern-validation",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",pattern:"[a-z]{4,20}",required:!0,disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},L={decorators:[e=>a.createElement("form",null,a.createElement(i,{direction:"column",gap:"1"},a.createElement(n,{message:"Enter at least 8 chars. You cannot enter more than 12."},a.createElement(e,null)),a.createElement(u,{type:"submit"},"Submit")))],args:{id:"id-min-max-validation",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",minLength:"8",maxLength:"12",required:!0,disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},q={decorators:[e=>{const[r,t]=V.useState(null);return a.createElement("form",null,a.createElement(i,{direction:"column",gap:"1"},a.createElement(n,{message:"Should validate empty field once button is clicked"},a.createElement(e,{message:r,setMessage:t})),a.createElement(u,{type:"submit"},"Submit")))}],render:(e,r)=>{const{message:t,setMessage:o}=r;return a.createElement(d,{id:"id-aria-describedby",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",required:!0,message:t,onInvalid:l=>{l.preventDefault(),o("Please enter a value")},onChange:()=>o(!1)})}};var B,N,D;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    error: false,
    placeholder: 'Placeholder',
    onChange: e => {
      console.log(e.target.value);
    }
  }
}`,...(D=(N=m.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var H,_,R;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(R=(_=g.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var A,O,T;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(T=(O=b.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var W,Y,$;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...($=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var j,U,G;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  decorators: [Story => {
    const [value, setValue] = useState('TopSecret');
    const [icon, setIcon] = useState('Hide');
    return <Story value={value} setValue={setValue} icon={icon} setIcon={setIcon} />;
  }],
  render: (args, context) => {
    const {
      value,
      setValue,
      icon,
      setIcon
    } = context;
    return <Input id="id-password" name="input" type={icon === 'Hide' ? 'password' : 'text'} label="Label" disabled={false} icon={icon} placeholder="Placeholder" value={value} onIconToggle={() => {
      if (icon === 'Hide') {
        setIcon('Show');
      } else {
        setIcon('Hide');
      }
    }} onChange={e => {
      setValue(e.target.value);
    }} />;
  }
}`,...(G=(U=f.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,te;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(te=(re=S.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var le,oe,ne;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ne=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var se,ce,de;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(de=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ie,ue,pe;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(pe=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,ge,be;z.parameters={...z.parameters,docs:{...(me=z.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(be=(ge=z.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var he,fe,ye;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ye=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ve,Se,xe;F.parameters={...F.parameters,docs:{...(ve=F.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(xe=(Se=F.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var Ee,Ie,ze;P.parameters={...P.parameters,docs:{...(Ee=P.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(ze=(Ie=P.parameters)==null?void 0:Ie.docs)==null?void 0:ze.source}}};var Ce,Fe,Pe;L.parameters={...L.parameters,docs:{...(Ce=L.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Pe=(Fe=L.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var Le,qe,Ve;q.parameters={...q.parameters,docs:{...(Le=q.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ve=(qe=q.parameters)==null?void 0:qe.docs)==null?void 0:Ve.source}}};const Xe=["Default","Search","Number","Date","Password","Disabled","ErrorMessage","Readonly","InfoMessage","InfoIcon","Autocomplete","RequiredValidation","CustomValidationMessage","EmailValidation","PatternValidation","MinMaxValidation","AriaDescribedby"];export{q as AriaDescribedby,I as Autocomplete,C as CustomValidationMessage,h as Date,m as Default,y as Disabled,F as EmailValidation,v as ErrorMessage,E as InfoIcon,x as InfoMessage,L as MinMaxValidation,b as Number,f as Password,P as PatternValidation,S as Readonly,z as RequiredValidation,g as Search,Xe as __namedExportsOrder,Qe as default};
//# sourceMappingURL=Input.stories-70123d38.js.map
