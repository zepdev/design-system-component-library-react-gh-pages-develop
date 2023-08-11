import{R as a,r as L}from"./index-8db94870.js";import{c as s}from"./clsx.m-1229b3e0.js";import{f as Re}from"./focus-8391b0c7.js";import{b as Ae}from"./border-radius-595a2ba1.js";import{F as V}from"./Icon-9ff652ee.js";import{F as n}from"./FormField-c573e430.js";import{S as d}from"./Spacing-2c30780b.js";import{B as u}from"./Button-e59f52e5.js";import"./_commonjsHelpers-042e6b4d.js";import"./tw-merge-b02e8c47.js";const Oe="zep-input",i=({id:e,type:r,value:l,error:o,label:t,disabled:c=!1,icon:p,readOnly:Ve=!1,hasInfoIcon:qe=!1,message:q,onIconToggle:M,onIconInfoClick:Me,onChange:Be,...Ne})=>{const De=s("search-cancel:appearance-none","search-cancel:w-5","search-cancel:h-5","search-cancel:border-[15px]","search-cancel:border-solid","search-cancel:border-transparent","search-cancel:cursor-pointer","search-cancel:bg-no-repeat","search-cancel:mr-[-16px]","search-cancel:bg-[url(/src/assets/search-cancel.svg)]"),_e=s("calendar-picker:appearance-none","calendar-picker:w-5","calendar-picker:h-5","calendar-picker:p-0","calendar-picker:border-x-[16px]","calendar-picker:border-solid","calendar-picker:border-transparent","calendar-picker:cursor-pointer","calendar-picker:bg-no-repeat","calendar-picker:mr-[-16px]","calendar-picker:bg-[url(/src/assets/calendar.svg)]");return a.createElement("span",{className:s(Oe,"zep-inline-flex","zep-flex-col","zep-flex-wrap","zep-items-stretch","zep-justify-start","zep-relative",[c?"zep-opacity-zep-40 zep-cursor-not-allowed":"zep-cursor-pointer"]),"data-testid":"zep-input"},t&&a.createElement("label",{htmlFor:e,className:s("zep-mb-0.5","zep-text-input-label-default")},t),a.createElement("div",{className:s("zep-inline-flex","zep-flex-row","zep-flex-nowrap","zep-items-center","zep-gap-0.5")},a.createElement("div",{className:s("zep-relative","zep-w-full")},a.createElement("input",{id:e,value:l,type:r,onChange:c?void 0:Be,"aria-describedby":`aria-describedby-${e}`,className:s(Ae,Re,"zep-border-solid","zep-border-1","zep-w-full","zep-rounded-4","zep-h-3","zep-px-1","zep-leading-[48px]","zep-leading-[22px]","focus-visible:zep-ring-offset-1","zep-text-input-placeholder-default zep-placeholder-input-placeholder-default/70","invalid:[&:not(:placeholder-shown):not(:focus)]:zep-border-error","invalid:[&:not(:placeholder-shown):not(:focus)]:zep-border-2",{"zep-border-inbox-default":!o},{"zep-border-2 zep-border-error":o},{"zep-text-input-placeholder-readOnly zep-bg-input-placeholder-readonly zep-cursor-not-allowed":Ve},{[_e]:r==="date"},{[De]:r==="search"}),disabled:c,"data-testid":"zep-input-field",...Ne}),p&&a.createElement(V,{onClick:M,className:s("zep-absolute","zep-top-[0px]","zep-bottom-0","zep-right-1","zep-h-full",{"zep-cursor-pointer":M}),name:p})),qe&&a.createElement(V,{onClick:Me,name:"info-circle-filled"})),q&&a.createElement("div",{className:s("zep-inline-flex","zep-flex-row","zep-items-center","zep-gap-0.25","zep-text-error","zep-mt-0.25")},a.createElement(V,{name:"warning-triangle-filled"}),a.createElement("span",{id:`aria-describedby-${e}`},q)))};try{i.displayName="Input",i.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"Volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"voume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"location"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"add-circle"'}]}},hasInfoIcon:{defaultValue:{value:"false"},description:"",name:"hasInfoIcon",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},onIconToggle:{defaultValue:null,description:"",name:"onIconToggle",required:!1,type:{name:"(() => void)"}},onIconInfoClick:{defaultValue:null,description:"",name:"onIconInfoClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const We={title:"Components/Input",component:i,tags:["autodocs"],decorators:[e=>a.createElement("div",{className:"zep-w-[326px] [&>*]:zep-w-full"},a.createElement(e,null))],argTypes:{label:{control:{type:"text"}},type:{control:{type:"select",options:["text","search","number","date","password"]}},disabled:{control:{type:"boolean"}},error:{control:{type:"boolean"}},message:{control:{type:"text"}},hasInfoIcon:{control:{type:"boolean"}},placeholder:{control:{type:"text"}}}},m={decorators:[e=>a.createElement(n,{message:"Hint message"},a.createElement(e,null))],args:{id:"id-default",name:"input",type:"text",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},g={decorators:[e=>{const[r,l]=L.useState("Prefilled");return a.createElement(e,{value:r,setValue:l})}],render:(e,r)=>{const{value:l,setValue:o}=r;return a.createElement(i,{id:"id-search",name:"input",type:"search",label:"Label",disabled:!1,autoFocus:!0,placeholder:"Placeholder",value:l,onChange:t=>{o(t.target.value)}})}},v={args:{id:"id-number",name:"input",type:"number",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},h={args:{id:"id-date",name:"input",type:"date",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},f={decorators:[e=>{const[r,l]=L.useState("TopSecret"),[o,t]=L.useState("hide");return a.createElement(e,{value:r,setValue:l,icon:o,setIcon:t})}],render:(e,r)=>{const{value:l,setValue:o,icon:t,setIcon:c}=r;return a.createElement(i,{id:"id-password",name:"input",type:t==="hide"?"password":"text",label:"Label",disabled:!1,icon:t,placeholder:"Placeholder",value:l,onIconToggle:()=>{c(t==="hide"?"show":"hide")},onChange:p=>{o(p.target.value)}})}},b={args:{id:"id-disabled",name:"text",type:"number",label:"Label",disabled:!0,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},y={decorators:[e=>a.createElement(n,{message:"Some error message",state:"error"},a.createElement(e,null))],args:{id:"id-error-message",name:"input",type:"text",label:"Label",disabled:!1,error:!0,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},S={args:{id:"id-readonly",name:"input",type:"text",label:"Label",value:"Filled",readOnly:!0,placeholder:"Placeholder",onChange:e=>{}}},x={decorators:[e=>a.createElement(n,{message:"Info message",state:"info"},a.createElement(e,null))],args:{id:"id-info-message",name:"input",type:"text",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},E={args:{id:"id-more-info",name:"input",type:"text",label:"Label",placeholder:"Placeholder",hasInfoIcon:!0,onIconInfoClick:()=>{alert("Info icon clicked")}}},z={decorators:[e=>a.createElement(n,{message:"Click this field. A dropdown menu should appear with the names already entered"},a.createElement(e,null))],args:{id:"id-autocomplete",name:"name",type:"text",label:"Name",placeholder:"Enter your name",disabled:!1,error:!1,autoComplete:"name",onChange:e=>{console.log(e.target.value)}}},w={decorators:[e=>a.createElement("form",null,a.createElement(d,{direction:"column",gap:"1"},a.createElement(n,{message:"Should validate empty field once button is clicked"},a.createElement(e,null)),a.createElement(u,{type:"submit"},"Submit")))],args:{id:"id-required-validation",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onInvalid:()=>console.log("Invalid"),onChange:e=>{console.log(e.target.value)}}},I={decorators:[e=>a.createElement("form",null,a.createElement(d,{direction:"column",gap:"1"},a.createElement(n,{message:"Should validate empty field once button is clicked"},a.createElement(e,null)),a.createElement(u,{type:"submit"},"Submit")))],args:{id:"id-custom-validation-message",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onInvalid:e=>e.target.setCustomValidity("My validation message"),onChange:e=>{console.log(e.target.value)}}},F={decorators:[e=>a.createElement("form",null,a.createElement(d,{direction:"column",gap:"1"},a.createElement(n,{message:"Should validate email once button is clicked"},a.createElement(e,null)),a.createElement(u,{type:"submit"},"Submit")))],args:{id:"id-email-validation",name:"input",type:"email",label:"Email",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},C={decorators:[e=>a.createElement("form",null,a.createElement(d,{direction:"column",gap:"1"},a.createElement(n,{message:"Only lowercase. Enter at least 4 chars and max 20."},a.createElement(e,null)),a.createElement(u,{type:"submit"},"Submit")))],args:{id:"id-pattern-validation",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",pattern:"[a-z]{4,20}",required:!0,disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},k={decorators:[e=>a.createElement("form",null,a.createElement(d,{direction:"column",gap:"1"},a.createElement(n,{message:"Enter at least 8 chars. You cannot enter more than 12."},a.createElement(e,null)),a.createElement(u,{type:"submit"},"Submit")))],args:{id:"id-min-max-validation",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",minLength:"8",maxLength:"12",required:!0,disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},P={decorators:[e=>{const[r,l]=L.useState(null);return a.createElement("form",null,a.createElement(d,{direction:"column",gap:"1"},a.createElement(n,{message:"Should validate empty field once button is clicked"},a.createElement(e,{message:r,setMessage:l})),a.createElement(u,{type:"submit"},"Submit")))}],render:(e,r)=>{const{message:l,setMessage:o}=r;return a.createElement(i,{id:"id-aria-describedby",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",required:!0,message:l,onInvalid:t=>{t.preventDefault(),o("Please enter a value")},onChange:()=>o(!1)})}};var B,N,D;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(D=(N=m.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var _,R,A;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(A=(R=g.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var O,T,H;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(T=v.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var Y,$,j;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(j=($=h.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,W;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(W=(U=b.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Z,ee;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,le;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(le=(re=S.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var te,oe,ne;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var se,ce,ie;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,ue,pe;z.parameters={...z.parameters,docs:{...(de=z.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(ue=z.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,ge,ve;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ve=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var he,fe,be;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(be=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var ye,Se,xe;F.parameters={...F.parameters,docs:{...(ye=F.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(xe=(Se=F.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var Ee,ze,we;C.parameters={...C.parameters,docs:{...(Ee=C.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(we=(ze=C.parameters)==null?void 0:ze.docs)==null?void 0:we.source}}};var Ie,Fe,Ce;k.parameters={...k.parameters,docs:{...(Ie=k.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ce=(Fe=k.parameters)==null?void 0:Fe.docs)==null?void 0:Ce.source}}};var ke,Pe,Le;P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Le=(Pe=P.parameters)==null?void 0:Pe.docs)==null?void 0:Le.source}}};const Xe=["Default","Search","Number","Date","Password","Disabled","ErrorMessage","Readonly","InfoMessage","InfoIcon","Autocomplete","RequiredValidation","CustomValidationMessage","EmailValidation","PatternValidation","MinMaxValidation","AriaDescribedby"];export{P as AriaDescribedby,z as Autocomplete,I as CustomValidationMessage,h as Date,m as Default,b as Disabled,F as EmailValidation,y as ErrorMessage,E as InfoIcon,x as InfoMessage,k as MinMaxValidation,v as Number,f as Password,C as PatternValidation,S as Readonly,w as RequiredValidation,g as Search,Xe as __namedExportsOrder,We as default};
//# sourceMappingURL=Input.stories-a0d9bbf5.js.map
