import{j as e,c as g}from"./clsx-24df0f47.js";import{c as E}from"./index-b7fee60d.js";import{r as Y}from"./index-b1e7e93e.js";import{Z as se,a as ce}from"./ZpsButton-bccd2e69.js";import{t as C}from"./tw-merge-1166cefb.js";import{B as me,a as w}from"./Button-14aec6b7.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-0193f610.js";import"./Spacing-dbf33a94.js";var t=(a=>(a.Zps="ZPS",a.Cat="CAT",a))(t||{}),x=(a=>(a.Text="text",a.Button="button",a))(x||{});const ee=Y.createContext({variant:t.Zps}),B=()=>Y.useContext(ee),ue=({children:a,...r})=>e.jsxDEV("tbody",{...r,children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:15,columnNumber:10},globalThis),pe=({children:a,className:r,isFirstRow:n,align:c,...m})=>{const{variant:o}=B(),d={[t.Zps]:["zep-text-typography-primary-default "],[t.Cat]:["zep-text-typography-dark-100"]},k=E([`
    zep-inline-block
    zep-text-right
    sm:zep-text-unset
    sm:zep-py-0.5
    zep-w-full
   zep-typography-bodyText
      `],{variants:{variant:d},defaultVariants:{variant:t.Zps}});return e.jsxDEV("td",{className:g("zep-justify-between sm:zep-table-cell zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 zep-bg-greyscale-0  lg:zep-whitespace-nowrap zep-group",r),style:{textAlign:c},...m,children:[e.jsxDEV("span",{className:C(k({variant:o}),o===t.Zps?"[&svg]:zep-fill-indigo-500":"[&svg]:zep-fill-darkgrey-500"),children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:61,columnNumber:7},globalThis),e.jsxDEV("hr",{className:"group-first:zep-block zep-absolute zep-h-[1px] zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-400"},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:69,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:51,columnNumber:5},globalThis)},be=({children:a,className:r,...n})=>{const{variant:c}=B(),m={[t.Zps]:["zep-bg-indigo-500"],[t.Cat]:["zep-bg-yellow-500"]},o=E([`
      sm:zep-table-row-group`],{variants:{variant:m},defaultVariants:{variant:t.Zps}});return e.jsxDEV("thead",{className:C(o({variant:c,className:r})),...n,children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:96,columnNumber:5},globalThis)},de=({children:a,className:r,align:n="left",...c})=>{const{variant:m}=B(),o={[t.Zps]:["zep-text-typography-light-100"],[t.Cat]:["zep-text-typography-dark-100"]},d=E([`
      zep-inline-block
      lg:zep-py-0.5
      zep-w-full
      zep-typography-bodyStrong`],{variants:{variant:o},defaultVariants:{variant:t.Zps}});return e.jsxDEV("th",{className:g("zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 lg:zep-whitespace-nowrap",r),style:{textAlign:n},...c,children:[e.jsxDEV("span",{className:C(d({variant:m})),children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:134,columnNumber:7},globalThis),e.jsxDEV("hr",{className:"zep-absolute zep-border-t-2 zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-900"},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:135,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:127,columnNumber:5},globalThis)},W=({children:a,className:r,...n})=>e.jsxDEV("tr",{className:g(" zep-mb-2 zep-table-row sm:zep-sm-[0px]",r),...n,children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:142,columnNumber:5},globalThis),V=({children:a,className:r,variant:n=t.Zps,maxWidth:c,maxHeight:m,fullWidth:o,textTop:d=!0,buttonLabel:k,descriptionBottom:te,descriptionTop:ae,dataSource:ne,columns:D,align:h,tableButtonOnClick:le,...re})=>{const oe=(u,s,f,j,l)=>{switch(j){case x.Button:return e.jsxDEV(me,{icon:l==null?void 0:l.iconName,variant:n===t.Zps?w.Tertiary:w.DarkTertiary,onClick:(l==null?void 0:l.onClick)===void 0?void 0:()=>l.onClick(u,s,f),children:l==null?void 0:l.title},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:169,columnNumber:11},globalThis);case x.Text:default:return e.jsxDEV("p",{children:u},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:179,columnNumber:16},globalThis)}};return e.jsxDEV(ee.Provider,{value:{variant:n},children:e.jsxDEV(e.Fragment,{children:[d&&e.jsxDEV("div",{className:`zep-mb-2.5 ${n===t.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:e.jsxDEV("p",{children:ae},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:191,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:186,columnNumber:11},globalThis),e.jsxDEV("div",{className:g("zep-overflow-scroll zep-w-full sm:zep-w-auto",r,{"sm:zep-w-full":o}),style:{maxWidth:c,maxHeight:m},"data-testid":"zep-table",children:e.jsxDEV("table",{className:g("zep-table zep-w-full sm:zep-w-auto",{"sm:zep-w-full":o}),...re,children:[e.jsxDEV(be,{children:e.jsxDEV(W,{children:D.map(({title:u,key:s},f)=>e.jsxDEV(de,{className:f===0?`zep-sticky zep-left-[0] zep-z-20  zep-drop-shadow-lg zep-min-w-[100px] ${n===t.Zps?"zep-bg-indigo-500":"zep-bg-yellow-500"}`:"",align:h,children:u},`table-align-${h}-head-cell-${s}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:214,columnNumber:19},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:212,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:211,columnNumber:13},globalThis),e.jsxDEV(ue,{children:ne.map((u,s)=>e.jsxDEV(W,{children:D.map(({key:f,dataIndex:j,props:l,renderAs:ie},Z)=>e.jsxDEV(pe,{align:h,isFirstRow:s===0,className:Z===0?"zep-sticky zep-left-[0] zep-z-20  zep-drop-shadow-lg zep-min-w-[100px]":"",children:oe(u[j],u,s,ie,l)},`table-align-${h}-cell-${s}-${f}-${Z}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:235,columnNumber:21},globalThis))},`table-align-${h}-row-${s}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:233,columnNumber:17},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:231,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:205,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:195,columnNumber:9},globalThis),e.jsxDEV("div",{className:`zep-my-2.5 ${n===t.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:e.jsxDEV("p",{children:te},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:256,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:251,columnNumber:9},globalThis),e.jsxDEV("div",{children:e.jsxDEV(se,{label:k,variant:ce.Primary,labelClass:"zep-text-indigo-500",onClick:le},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:259,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:258,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:184,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:183,columnNumber:5},globalThis)};try{V.displayName="Table",V.__docgenInfo={description:"",displayName:"Table",props:{dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"{}[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<{}>[]"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"TableThemes.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},textTop:{defaultValue:{value:"true"},description:"",name:"textTop",required:!1,type:{name:"boolean"}},descriptionTop:{defaultValue:null,description:"",name:"descriptionTop",required:!1,type:{name:"string"}},descriptionBottom:{defaultValue:null,description:"",name:"descriptionBottom",required:!0,type:{name:"string"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!0,type:{name:"string"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},tableButtonOnClick:{defaultValue:null,description:"",name:"tableButtonOnClick",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}}}}}catch{}const ye={title:"Components/Table",component:V,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(t)}},children:{control:{disable:!0}}},parameters:{a11y:{disable:!0}}},p=[{key:"k1",dataIndex:"type",title:"Type"},{key:"k2",dataIndex:"id",title:"Shop",renderAs:x.Button,props:{iconName:"download",onClick:a=>console.log("download",a)}},{key:"k3",dataIndex:"motor",title:"Motorleistung"},{key:"k4",dataIndex:"grab",title:"max. Grabtiefe/ max. Reichweite"},{key:"k5",dataIndex:"loffel",title:"Löffelvolumen"},{key:"k6",dataIndex:"einsatz",title:"Einsatzgewicht"},{key:"k7",dataIndex:"konfig",title:"Konfigurator"},{key:"k8",dataIndex:"id",title:"Datenblatt Download",renderAs:x.Button,props:{iconName:"download",onClick:a=>console.log("download",a)}}],i={id:1,type:"300.9D*",motor:"13,7 kW (18,6 PS)",grab:"1,7 / 3,1 m",loffel:"0,03 m³",einsatz:"985 kg",konfig:"300.9D*"},b=[i,{...i,id:2},{...i,id:3},{...i,id:4},{...i,id:5},{...i,id:6},{...i,id:7},{...i,id:8},{...i,id:9}],T={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:t.Zps,dataSource:b,columns:p,tableButtonOnClick:()=>null}},N={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:t.Zps,dataSource:b,columns:p,align:"left",tableButtonOnClick:()=>null}},z={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:t.Zps,dataSource:b,columns:p,align:"center",tableButtonOnClick:()=>null}},v={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:t.Zps,dataSource:b,columns:p,align:"right",tableButtonOnClick:()=>null}},S={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",maxWidth:700,maxHeight:500,variant:t.Zps,dataSource:b,columns:p,tableButtonOnClick:()=>null}},y={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",fullWidth:!0,variant:t.Zps,dataSource:b,tableButtonOnClick:()=>null,columns:p}};var H,F,L;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    tableButtonOnClick: () => null
  }
}`,...(L=(F=T.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var O,K,q;N.parameters={...N.parameters,docs:{...(O=N.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    align: 'left',
    tableButtonOnClick: () => null
  }
}`,...(q=(K=N.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var A,$,_;z.parameters={...z.parameters,docs:{...(A=z.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    align: 'center',
    tableButtonOnClick: () => null
  }
}`,...(_=($=z.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var R,P,I;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    align: 'right',
    tableButtonOnClick: () => null
  }
}`,...(I=(P=v.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var M,G,J;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    maxWidth: 700,
    maxHeight: 500,
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    tableButtonOnClick: () => null
  }
}`,...(J=(G=S.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,U,X;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    fullWidth: true,
    variant: TableThemes.Zps,
    dataSource: cells,
    tableButtonOnClick: () => null,
    columns: heads
  }
}`,...(X=(U=y.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const ke=["Default","AlignLeft","AlignCenter","AlignRight","FixedSize","FullWidth"];export{z as AlignCenter,N as AlignLeft,v as AlignRight,T as Default,S as FixedSize,y as FullWidth,ke as __namedExportsOrder,ye as default};
