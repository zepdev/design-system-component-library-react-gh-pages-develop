import{R as a,r as V}from"./index-8db94870.js";import{c as s}from"./clsx.m-1229b3e0.js";import{f as _e}from"./focus-8391b0c7.js";import{b as Re}from"./border-radius-595a2ba1.js";import{F as w}from"./Icon-af1412c8.js";import{F as n}from"./FormField-2e6d9350.js";import{S as d}from"./Spacing-2c30780b.js";import{B as u}from"./Button-e2fcf039.js";import"./_commonjsHelpers-042e6b4d.js";import"./tw-merge-b02e8c47.js";const Ae="zep-input",i=({id:e,type:r,value:t,error:o,label:l,disabled:c=!1,icon:m,readOnly:we=!1,hasInfoIcon:ze=!1,message:z,onIconToggle:M,onIconInfoClick:Me,onChange:Be,...Ne})=>{const De=s("search-cancel:appearance-none","search-cancel:w-5","search-cancel:h-5","search-cancel:border-[15px]","search-cancel:border-solid","search-cancel:border-transparent","search-cancel:cursor-pointer","search-cancel:bg-no-repeat","search-cancel:mr-[-16px]","search-cancel:bg-[url(/src/assets/search-cancel.svg)]"),He=s("calendar-picker:appearance-none","calendar-picker:w-5","calendar-picker:h-5","calendar-picker:p-0","calendar-picker:border-x-[16px]","calendar-picker:border-solid","calendar-picker:border-transparent","calendar-picker:cursor-pointer","calendar-picker:bg-no-repeat","calendar-picker:mr-[-16px]","calendar-picker:bg-[url(/src/assets/calendar.svg)]");return a.createElement("span",{className:s(Ae,"inline-flex","flex-col","flex-wrap","items-stretch","justify-start","relative",[c?"cursor-not-allowed opacity-zep-40":"cursor-pointer"]),"data-testid":"zep-input"},l&&a.createElement("label",{htmlFor:e,className:s("mb-zep-0.5")},l),a.createElement("div",{className:s("inline-flex","flex-row","flex-nowrap","items-center","gap-zep-0.5")},a.createElement("div",{className:s("relative","w-full")},a.createElement("input",{id:e,value:t,type:r,onChange:c?void 0:Be,"aria-describedby":`aria-describedby-${e}`,className:s(Re,_e,"border","w-full","h-zep-3","px-zep-1","leading-[48px]","leading-[22px]","focus-visible:ring-offset-1","placeholder-zep-typography-dark-100 placeholder-opacity-70","invalid:[&:not(:placeholder-shown):not(:focus)]:border-zep-error","invalid:[&:not(:placeholder-shown):not(:focus)]:border-zep-2",{"border-zep-darkgrey-500":!o},{"border-zep-2 border-zep-error":o},{"cursor-not-allowed text-zep-typography-dark-100 bg-zep-greyScale-500":we},{[He]:r==="date"},{[De]:r==="search"}),disabled:c,"data-testid":"zep-input-field",...Ne}),m&&a.createElement(w,{onClick:M,className:s("absolute","top-0","bottom-0","right-zep-1","h-full",{"cursor-pointer":M}),name:m})),ze&&a.createElement(w,{onClick:Me,name:"Info"})),z&&a.createElement("div",{className:s("inline-flex","flex-row","items-center","gap-zep-0.25","text-zep-error","mt-zep-0.25")},a.createElement(w,{name:"Warning"}),a.createElement("span",{id:`aria-describedby-${e}`},z)))};try{i.displayName="Input",i.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"ArrowLongRight"'},{value:'"ChevronMiniDown"'},{value:'"ChevronMiniUp"'},{value:'"Check"'},{value:'"DeleteCircle"'},{value:'"Warning"'},{value:'"Hide"'},{value:'"Show"'},{value:'"Info"'}]}},hasInfoIcon:{defaultValue:{value:"false"},description:"",name:"hasInfoIcon",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},onIconToggle:{defaultValue:null,description:"",name:"onIconToggle",required:!1,type:{name:"(() => void)"}},onIconInfoClick:{defaultValue:null,description:"",name:"onIconInfoClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const Qe={title:"Components/Input",component:i,tags:["autodocs"],decorators:[e=>a.createElement("div",{className:"w-[326px] [&>*]:w-full"},a.createElement(e,null))],argTypes:{label:{control:{type:"text"}},type:{control:{type:"select",options:["text","search","number","date","password"]}},disabled:{control:{type:"boolean"}},error:{control:{type:"boolean"}},message:{control:{type:"text"}},hasInfoIcon:{control:{type:"boolean"}},placeholder:{control:{type:"text"}}}},p={decorators:[e=>a.createElement(n,{message:"Hint message"},a.createElement(e,null))],args:{id:"id-default",name:"input",type:"text",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},g={decorators:[e=>{const[r,t]=V.useState("Prefilled");return a.createElement(e,{value:r,setValue:t})}],render:(e,r)=>{const{value:t,setValue:o}=r;return a.createElement(i,{id:"id-search",name:"input",type:"search",label:"Label",disabled:!1,autoFocus:!0,placeholder:"Placeholder",value:t,onChange:l=>{o(l.target.value)}})}},b={args:{id:"id-number",name:"input",type:"number",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},h={args:{id:"id-date",name:"input",type:"date",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},f={decorators:[e=>{const[r,t]=V.useState("TopSecret"),[o,l]=V.useState("Hide");return a.createElement(e,{value:r,setValue:t,icon:o,setIcon:l})}],render:(e,r)=>{const{value:t,setValue:o,icon:l,setIcon:c}=r;return a.createElement(i,{id:"id-password",name:"input",type:l==="Hide"?"password":"text",label:"Label",disabled:!1,icon:l,placeholder:"Placeholder",value:t,onIconToggle:()=>{c(l==="Hide"?"Show":"Hide")},onChange:m=>{o(m.target.value)}})}},y={args:{id:"id-disabled",name:"text",type:"number",label:"Label",disabled:!0,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},v={decorators:[e=>a.createElement(n,{message:"Some error message",state:"error"},a.createElement(e,null))],args:{id:"id-error-message",name:"input",type:"text",label:"Label",disabled:!1,error:!0,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},S={args:{id:"id-readonly",name:"input",type:"text",label:"Label",value:"Filled",readOnly:!0,placeholder:"Placeholder",onChange:e=>{}}},E={decorators:[e=>a.createElement(n,{message:"Info message",state:"info"},a.createElement(e,null))],args:{id:"id-info-message",name:"input",type:"text",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},x={args:{id:"id-more-info",name:"input",type:"text",label:"Label",placeholder:"Placeholder",hasInfoIcon:!0,onIconInfoClick:()=>{alert("Info icon clicked")}}},I={decorators:[e=>a.createElement(n,{message:"Click this field. A dropdown menu should appear with the names already entered"},a.createElement(e,null))],args:{id:"id-autocomplete",name:"name",type:"text",label:"Name",placeholder:"Enter your name",disabled:!1,error:!1,autoComplete:"name",onChange:e=>{console.log(e.target.value)}}},C={decorators:[e=>a.createElement("form",null,a.createElement(d,{direction:"column",gap:"1"},a.createElement(n,{message:"Should validate empty field once button is clicked"},a.createElement(e,null)),a.createElement(u,{type:"submit"},"Submit")))],args:{id:"id-required-validation",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onInvalid:()=>console.log("Invalid"),onChange:e=>{console.log(e.target.value)}}},F={decorators:[e=>a.createElement("form",null,a.createElement(d,{direction:"column",gap:"1"},a.createElement(n,{message:"Should validate empty field once button is clicked"},a.createElement(e,null)),a.createElement(u,{type:"submit"},"Submit")))],args:{id:"id-custom-validation-message",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onInvalid:e=>e.target.setCustomValidity("My validation message"),onChange:e=>{console.log(e.target.value)}}},P={decorators:[e=>a.createElement("form",null,a.createElement(d,{direction:"column",gap:"1"},a.createElement(n,{message:"Should validate email once button is clicked"},a.createElement(e,null)),a.createElement(u,{type:"submit"},"Submit")))],args:{id:"id-email-validation",name:"input",type:"email",label:"Email",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},L={decorators:[e=>a.createElement("form",null,a.createElement(d,{direction:"column",gap:"1"},a.createElement(n,{message:"Only lowercase. Enter at least 4 chars and max 20."},a.createElement(e,null)),a.createElement(u,{type:"submit"},"Submit")))],args:{id:"id-pattern-validation",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",pattern:"[a-z]{4,20}",required:!0,disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},k={decorators:[e=>a.createElement("form",null,a.createElement(d,{direction:"column",gap:"1"},a.createElement(n,{message:"Enter at least 8 chars. You cannot enter more than 12."},a.createElement(e,null)),a.createElement(u,{type:"submit"},"Submit")))],args:{id:"id-min-max-validation",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",minLength:"8",maxLength:"12",required:!0,disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},q={decorators:[e=>{const[r,t]=V.useState(null);return a.createElement("form",null,a.createElement(d,{direction:"column",gap:"1"},a.createElement(n,{message:"Should validate empty field once button is clicked"},a.createElement(e,{message:r,setMessage:t})),a.createElement(u,{type:"submit"},"Submit")))}],render:(e,r)=>{const{message:t,setMessage:o}=r;return a.createElement(i,{id:"id-aria-describedby",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",required:!0,message:t,onInvalid:l=>{l.preventDefault(),o("Please enter a value")},onChange:()=>o(!1)})}};var B,N,D;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(D=(N=p.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var H,_,R;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(R=(_=g.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var A,T,O;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(O=(T=b.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var W,Y,$;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(te=(re=S.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var le,oe,ne;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ne=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var se,ce,ie;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,ue,me;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,ge,be;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(be=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var he,fe,ye;F.parameters={...F.parameters,docs:{...(he=F.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ye=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ve,Se,Ee;P.parameters={...P.parameters,docs:{...(ve=P.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ee=(Se=P.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source}}};var xe,Ie,Ce;L.parameters={...L.parameters,docs:{...(xe=L.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ce=(Ie=L.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var Fe,Pe,Le;k.parameters={...k.parameters,docs:{...(Fe=k.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Le=(Pe=k.parameters)==null?void 0:Pe.docs)==null?void 0:Le.source}}};var ke,qe,Ve;q.parameters={...q.parameters,docs:{...(ke=q.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ve=(qe=q.parameters)==null?void 0:qe.docs)==null?void 0:Ve.source}}};const Xe=["Default","Search","Number","Date","Password","Disabled","ErrorMessage","Readonly","InfoMessage","InfoIcon","Autocomplete","RequiredValidation","CustomValidationMessage","EmailValidation","PatternValidation","MinMaxValidation","AriaDescribedby"];export{q as AriaDescribedby,I as Autocomplete,F as CustomValidationMessage,h as Date,p as Default,y as Disabled,P as EmailValidation,v as ErrorMessage,x as InfoIcon,E as InfoMessage,k as MinMaxValidation,b as Number,f as Password,L as PatternValidation,S as Readonly,C as RequiredValidation,g as Search,Xe as __namedExportsOrder,Qe as default};
//# sourceMappingURL=Input.stories-0739ff73.js.map
