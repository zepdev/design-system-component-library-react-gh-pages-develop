import{R as a,r as V}from"./index-8db94870.js";import{c as s}from"./clsx.m-1229b3e0.js";import{f as Ne}from"./focus-8391b0c7.js";import{b as He}from"./border-radius-595a2ba1.js";import{F as P}from"./Icon-436c9414.js";import{F as n}from"./FormField-fd48c13c.js";import{S as d}from"./Spacing-2c30780b.js";import{B as u}from"./Button-2d25e329.js";import"./_commonjsHelpers-042e6b4d.js";import"./tw-merge-b02e8c47.js";const Be="zep-input",i=({id:e,type:r,value:l,error:o,label:t,disabled:c=!1,icon:p,readOnly:Pe=!1,hasInfoIcon:ke=!1,message:k,onIconToggle:q,onIconInfoClick:qe,onChange:De,...Me})=>{const Ue=s("search-cancel:appearance-none","search-cancel:w-5","search-cancel:h-5","search-cancel:border-[15px]","search-cancel:border-solid","search-cancel:border-transparent","search-cancel:cursor-pointer","search-cancel:bg-no-repeat","search-cancel:mr-[-16px]","search-cancel:bg-[url(/src/assets/search-cancel.svg)]"),Re=s("calendar-picker:appearance-none","calendar-picker:w-5","calendar-picker:h-5","calendar-picker:p-0","calendar-picker:border-x-[16px]","calendar-picker:border-solid","calendar-picker:border-transparent","calendar-picker:cursor-pointer","calendar-picker:bg-no-repeat","calendar-picker:mr-[-16px]","calendar-picker:bg-[url(/src/assets/calendar.svg)]");return a.createElement("span",{className:s(Be,"zep-inline-flex","zep-flex-col","zep-flex-wrap","zep-items-stretch","zep-justify-start","zep-relative",[c?"zep-opacity-zep-40 zep-cursor-not-allowed":"zep-cursor-pointer"]),"data-testid":"zep-input"},t&&a.createElement("label",{htmlFor:e,className:s("zep-mb-0.5","zep-text-input-label-default")},t),a.createElement("div",{className:s("zep-inline-flex","zep-flex-row","zep-flex-nowrap","zep-items-center","zep-gap-0.5")},a.createElement("div",{className:s("zep-relative","zep-w-full")},a.createElement("input",{id:e,value:l,type:r,onChange:c?void 0:De,"aria-describedby":`aria-describedby-${e}`,className:s(He,Ne,"zep-border-solid","zep-border-1","zep-w-full","zep-rounded-4","zep-h-3","zep-px-1","zep-leading-[48px]","zep-leading-[22px]","focus-visible:zep-ring-offset-1","zep-text-input-placeholder-default zep-placeholder-input-placeholder-default/70","invalid:[&:not(:placeholder-shown):not(:focus)]:zep-border-error","invalid:[&:not(:placeholder-shown):not(:focus)]:zep-border-2",{"zep-border-inbox-default":!o},{"zep-border-2 zep-border-error":o},{"zep-text-input-placeholder-readOnly zep-bg-input-placeholder-readonly zep-cursor-not-allowed":Pe},{[Re]:r==="date"},{[Ue]:r==="search"}),disabled:c,"data-testid":"zep-input-field",...Me}),p&&a.createElement(P,{onClick:q,className:s("zep-absolute","zep-top-[0px]","zep-bottom-0","zep-right-1","zep-h-full",{"zep-cursor-pointer":q}),name:p})),ke&&a.createElement(P,{onClick:qe,name:"InterfaceInfoCircleFilled"})),k&&a.createElement("div",{className:s("zep-inline-flex","zep-flex-row","zep-items-center","zep-gap-0.25","zep-text-error","zep-mt-0.25")},a.createElement(P,{name:"InterfaceWarningTriangleFilled"}),a.createElement("span",{id:`aria-describedby-${e}`},k)))};try{i.displayName="Input",i.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"ArrowUp"'},{value:'"ArrowDown"'},{value:'"ArrowLeft"'},{value:'"ArrowRight"'},{value:'"ArrowCaretUp"'},{value:'"ArrowCaretDown"'},{value:'"ArrowCaretLeft"'},{value:'"ArrowCaretRight"'},{value:'"ArrowChevronDoubleUp"'},{value:'"ArrowChevronDoubleDown"'},{value:'"ArrowChevronUp"'},{value:'"ArrowChevronDown"'},{value:'"ArrowChevronLeft"'},{value:'"ArrowChevronRight"'},{value:'"ArrowChevronMiniUp"'},{value:'"ArrowChevronMiniDown"'},{value:'"ArrowChevronMiniLeft"'},{value:'"ArrowChevronMiniRight"'},{value:'"ArrowCornerRightUp"'},{value:'"ArrowCornerRightDown"'},{value:'"ArrowCornerLeftUp"'},{value:'"ArrowCornerLeftDown"'},{value:'"ArrowLongUp"'},{value:'"ArrowLongDown"'},{value:'"ArrowLongLeft"'},{value:'"ArrowLongRight"'},{value:'"ArrowUnfoldLess"'},{value:'"ArrowUnfoldMore"'},{value:'"AudioVideoPause"'},{value:'"AudioVideoStop"'},{value:'"AudioVideoMicrophoneFilled"'},{value:'"AudioVideoVolumeUpFilled"'},{value:'"AudioVideoVolumeOffFilled"'},{value:'"AudioVideoVolumeDownFilled"'},{value:'"AudioVideoVolumeUp"'},{value:'"AudioVideoVolumeOff"'},{value:'"AudioVideoVoumeDown"'},{value:'"AudioVideoMicrophone"'},{value:'"AudioVideoPlay"'},{value:'"CommunicationEmail"'},{value:'"CommunicationSpeechBubble"'},{value:'"CommunicationPhone"'},{value:'"DevicesLaptop"'},{value:'"DevicesScreen"'},{value:'"DevicesSmartphone"'},{value:'"DevicesTablet"'},{value:'"FilterSortAlpha"'},{value:'"FilterSort"'},{value:'"LoginprocessLogout"'},{value:'"LoginprocessLogin"'},{value:'"LoginprocessPassword"'},{value:'"LoginprocessShow"'},{value:'"LoginprocessHide"'},{value:'"LoginprocessUnlock"'},{value:'"LoginprocessLock"'},{value:'"LoginprocessCheckCircle"'},{value:'"LoginprocessCheckCircleFilled"'},{value:'"MenuHorizontal"'},{value:'"MenuVertical"'},{value:'"MenuBurger"'},{value:'"NotificationAlarmOffFilled"'},{value:'"NotificationAlarmOff"'},{value:'"NotificationAlarmFilled"'},{value:'"NotificationAlarm"'},{value:'"ResizeExpand2"'},{value:'"ResizeShrink"'},{value:'"ResizeShrink2"'},{value:'"ResizeExpand"'},{value:'"UsefulGraphDescend"'},{value:'"UsefulFile"'},{value:'"UsefulGraphAscend"'},{value:'"UsefulDashboard"'},{value:'"UsefulLanguage"'},{value:'"UsefulLocation"'},{value:'"UsefulList"'},{value:'"UsefulPin"'},{value:'"UsefulLocationPin"'},{value:'"UserSingleCircle"'},{value:'"UserSingle"'},{value:'"InterfaceCalendarInformation"'},{value:'"InterfaceCalendarClock"'},{value:'"InterfaceExternalLink"'},{value:'"InterfaceDownload"'},{value:'"InterfaceLoader"'},{value:'"InterfaceUpload"'},{value:'"InterfaceTable"'},{value:'"InterfaceCheck"'},{value:'"InterfaceShoppingCart"'},{value:'"InterfaceClose"'},{value:'"InterfaceHeartFilled"'},{value:'"InterfaceStarFilled"'},{value:'"InterfaceStar"'},{value:'"InterfaceHeart"'},{value:'"InterfaceAddCircleFilled"'},{value:'"InterfaceDeleteCircleFilled"'},{value:'"InterfaceAlertCircleFilled"'},{value:'"InterfaceWarningTriangleFilled"'},{value:'"InterfaceInfoCircleFilled"'},{value:'"InterfaceHelpCircleFilled"'},{value:'"InterfaceLink"'},{value:'"InterfaceLinkOff"'},{value:'"InterfaceWifi"'},{value:'"InterfaceTrash"'},{value:'"InterfaceEdit"'},{value:'"InterfaceCalendarMonth"'},{value:'"InterfaceCalendarToday"'},{value:'"InterfaceTime"'},{value:'"InterfaceCopy"'},{value:'"InterfaceSync"'},{value:'"InterfacePrint"'},{value:'"InterfaceZoomOut"'},{value:'"InterfaceZoomIn"'},{value:'"InterfaceSearch"'},{value:'"InterfaceDelectCircle"'},{value:'"InterfaceAlert"'},{value:'"InterfaceWarningTriangle"'},{value:'"InterfaceInfoCircle"'},{value:'"InterfaceHelpCircle"'},{value:'"InterfaceTune"'},{value:'"InterfaceWrench"'},{value:'"InterfaceSettings"'},{value:'"InterfaceSettingsFilled"'},{value:'"InterfaceHome"'},{value:'"InterfaceShare"'},{value:'"InterfaceAddCircle"'}]}},hasInfoIcon:{defaultValue:{value:"false"},description:"",name:"hasInfoIcon",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},onIconToggle:{defaultValue:null,description:"",name:"onIconToggle",required:!1,type:{name:"(() => void)"}},onIconInfoClick:{defaultValue:null,description:"",name:"onIconInfoClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const Ke={title:"Components/Input",component:i,tags:["autodocs"],decorators:[e=>a.createElement("div",{className:"zep-w-[326px] [&>*]:zep-w-full"},a.createElement(e,null))],argTypes:{label:{control:{type:"text"}},type:{control:{type:"select",options:["text","search","number","date","password"]}},disabled:{control:{type:"boolean"}},error:{control:{type:"boolean"}},message:{control:{type:"text"}},hasInfoIcon:{control:{type:"boolean"}},placeholder:{control:{type:"text"}}}},m={decorators:[e=>a.createElement(n,{message:"Hint message"},a.createElement(e,null))],args:{id:"id-default",name:"input",type:"text",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},g={decorators:[e=>{const[r,l]=V.useState("Prefilled");return a.createElement(e,{value:r,setValue:l})}],render:(e,r)=>{const{value:l,setValue:o}=r;return a.createElement(i,{id:"id-search",name:"input",type:"search",label:"Label",disabled:!1,autoFocus:!0,placeholder:"Placeholder",value:l,onChange:t=>{o(t.target.value)}})}},f={args:{id:"id-number",name:"input",type:"number",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},v={args:{id:"id-date",name:"input",type:"date",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},h={decorators:[e=>{const[r,l]=V.useState("TopSecret"),[o,t]=V.useState("LoginprocessHide");return a.createElement(e,{value:r,setValue:l,icon:o,setIcon:t})}],render:(e,r)=>{const{value:l,setValue:o,icon:t,setIcon:c}=r;return a.createElement(i,{id:"id-password",name:"input",type:t==="LoginprocessHide"?"password":"text",label:"Label",disabled:!1,icon:t,placeholder:"Placeholder",value:l,onIconToggle:()=>{c(t==="LoginprocessHide"?"LoginprocessShow":"LoginprocessHide")},onChange:p=>{o(p.target.value)}})}},b={args:{id:"id-disabled",name:"text",type:"number",label:"Label",disabled:!0,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},y={decorators:[e=>a.createElement(n,{message:"Some error message",state:"error"},a.createElement(e,null))],args:{id:"id-error-message",name:"input",type:"text",label:"Label",disabled:!1,error:!0,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},S={args:{id:"id-readonly",name:"input",type:"text",label:"Label",value:"Filled",readOnly:!0,placeholder:"Placeholder",onChange:e=>{}}},I={decorators:[e=>a.createElement(n,{message:"Info message",state:"info"},a.createElement(e,null))],args:{id:"id-info-message",name:"input",type:"text",label:"Label",disabled:!1,error:!1,placeholder:"Placeholder",onChange:e=>{console.log(e.target.value)}}},C={args:{id:"id-more-info",name:"input",type:"text",label:"Label",placeholder:"Placeholder",hasInfoIcon:!0,onIconInfoClick:()=>{alert("Info icon clicked")}}},L={decorators:[e=>a.createElement(n,{message:"Click this field. A dropdown menu should appear with the names already entered"},a.createElement(e,null))],args:{id:"id-autocomplete",name:"name",type:"text",label:"Name",placeholder:"Enter your name",disabled:!1,error:!1,autoComplete:"name",onChange:e=>{console.log(e.target.value)}}},x={decorators:[e=>a.createElement("form",null,a.createElement(d,{direction:"column",gap:"1"},a.createElement(n,{message:"Should validate empty field once button is clicked"},a.createElement(e,null)),a.createElement(u,{type:"submit"},"Submit")))],args:{id:"id-required-validation",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onInvalid:()=>console.log("Invalid"),onChange:e=>{console.log(e.target.value)}}},E={decorators:[e=>a.createElement("form",null,a.createElement(d,{direction:"column",gap:"1"},a.createElement(n,{message:"Should validate empty field once button is clicked"},a.createElement(e,null)),a.createElement(u,{type:"submit"},"Submit")))],args:{id:"id-custom-validation-message",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onInvalid:e=>e.target.setCustomValidity("My validation message"),onChange:e=>{console.log(e.target.value)}}},F={decorators:[e=>a.createElement("form",null,a.createElement(d,{direction:"column",gap:"1"},a.createElement(n,{message:"Should validate email once button is clicked"},a.createElement(e,null)),a.createElement(u,{type:"submit"},"Submit")))],args:{id:"id-email-validation",name:"input",type:"email",label:"Email",placeholder:"Placeholder",required:!0,disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},w={decorators:[e=>a.createElement("form",null,a.createElement(d,{direction:"column",gap:"1"},a.createElement(n,{message:"Only lowercase. Enter at least 4 chars and max 20."},a.createElement(e,null)),a.createElement(u,{type:"submit"},"Submit")))],args:{id:"id-pattern-validation",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",pattern:"[a-z]{4,20}",required:!0,disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},z={decorators:[e=>a.createElement("form",null,a.createElement(d,{direction:"column",gap:"1"},a.createElement(n,{message:"Enter at least 8 chars. You cannot enter more than 12."},a.createElement(e,null)),a.createElement(u,{type:"submit"},"Submit")))],args:{id:"id-min-max-validation",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",minLength:"8",maxLength:"12",required:!0,disabled:!1,error:!1,onChange:e=>{console.log(e.target.value)}}},A={decorators:[e=>{const[r,l]=V.useState(null);return a.createElement("form",null,a.createElement(d,{direction:"column",gap:"1"},a.createElement(n,{message:"Should validate empty field once button is clicked"},a.createElement(e,{message:r,setMessage:l})),a.createElement(u,{type:"submit"},"Submit")))}],render:(e,r)=>{const{message:l,setMessage:o}=r;return a.createElement(i,{id:"id-aria-describedby",name:"input",type:"text",label:"Label (required)",placeholder:"Placeholder",required:!0,message:l,onInvalid:t=>{t.preventDefault(),o("Please enter a value")},onChange:()=>o(!1)})}};var D,M,U;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(U=(M=m.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var R,N,H;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(H=(N=g.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var B,T,O;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(O=(T=f.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var _,W,G;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(G=(W=v.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var Y,Z,$;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  decorators: [Story => {
    const [value, setValue] = useState('TopSecret');
    const [icon, setIcon] = useState('LoginprocessHide');
    return <Story value={value} setValue={setValue} icon={icon} setIcon={setIcon} />;
  }],
  render: (args, context) => {
    const {
      value,
      setValue,
      icon,
      setIcon
    } = context;
    return <Input id="id-password" name="input" type={icon === 'LoginprocessHide' ? 'password' : 'text'} label="Label" disabled={false} icon={icon} placeholder="Placeholder" value={value} onIconToggle={() => {
      if (icon === 'LoginprocessHide') {
        setIcon('LoginprocessShow');
      } else {
        setIcon('LoginprocessHide');
      }
    }} onChange={e => {
      setValue(e.target.value);
    }} />;
  }
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var j,J,K;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,ee;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(X=y.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var ae,re,le;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(le=(re=S.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var te,oe,ne;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var se,ce,ie;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,ue,pe;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,ge,fe;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(fe=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ve,he,be;E.parameters={...E.parameters,docs:{...(ve=E.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(be=(he=E.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ye,Se,Ie;F.parameters={...F.parameters,docs:{...(ye=F.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ie=(Se=F.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};var Ce,Le,xe;w.parameters={...w.parameters,docs:{...(Ce=w.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(xe=(Le=w.parameters)==null?void 0:Le.docs)==null?void 0:xe.source}}};var Ee,Fe,we;z.parameters={...z.parameters,docs:{...(Ee=z.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(we=(Fe=z.parameters)==null?void 0:Fe.docs)==null?void 0:we.source}}};var ze,Ae,Ve;A.parameters={...A.parameters,docs:{...(ze=A.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ve=(Ae=A.parameters)==null?void 0:Ae.docs)==null?void 0:Ve.source}}};const Qe=["Default","Search","Number","Date","Password","Disabled","ErrorMessage","Readonly","InfoMessage","InfoIcon","Autocomplete","RequiredValidation","CustomValidationMessage","EmailValidation","PatternValidation","MinMaxValidation","AriaDescribedby"];export{A as AriaDescribedby,L as Autocomplete,E as CustomValidationMessage,v as Date,m as Default,b as Disabled,F as EmailValidation,y as ErrorMessage,C as InfoIcon,I as InfoMessage,z as MinMaxValidation,f as Number,h as Password,w as PatternValidation,S as Readonly,x as RequiredValidation,g as Search,Qe as __namedExportsOrder,Ke as default};
//# sourceMappingURL=Input.stories-98f5ca2a.js.map
