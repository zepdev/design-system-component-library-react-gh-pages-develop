import{j as t,c as b}from"./clsx-24df0f47.js";import{c as V}from"./index-b7fee60d.js";import{r as te}from"./index-b1e7e93e.js";import{a as ie,F as se}from"./Icon-6d4be359.js";import{Z as ce,a as me}from"./ZpsButton-0b5f21fe.js";import{t as D}from"./tw-merge-1166cefb.js";import{B as ue,a as W}from"./Button-dd97290b.js";import"./_commonjsHelpers-de833af9.js";import"./Spacing-e25630db.js";var e=(a=>(a.Zps="ZPS",a.Cat="CAT",a.Zsd="ZSD",a.Default="Default",a))(e||{}),x=(a=>(a.Text="text",a.Button="button",a))(x||{});const ae=te.createContext({variant:e.Zps}),C=()=>te.useContext(ae),pe=({children:a,...r})=>t.jsxDEV("tbody",{...r,children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:26,columnNumber:10},globalThis),be=({children:a,className:r,isFirstRow:n,align:m,...u})=>{const{variant:o}=C(),p={[e.Zps]:["zep-text-typography-primary-default "],[e.Cat]:["zep-text-typography-dark-100"],[e.Zsd]:["zep-text-typography-dark-100"],[e.Default]:["zep-text-typography-dark-100"]},z=V([`
    zep-inline-block
    zep-text-right
    sm:zep-text-unset
    sm:zep-py-0.5
    zep-w-full
   zep-typography-bodyText
      `],{variants:{variant:p},defaultVariants:{variant:e.Zps}});return t.jsxDEV("td",{className:b("zep-justify-between sm:zep-table-cell zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 zep-bg-greyscale-0  lg:zep-whitespace-nowrap zep-group",r),style:{textAlign:m},...u,children:[t.jsxDEV("span",{className:D(z({variant:o}),o===e.Zps?"[&svg]:zep-fill-indigo-500":"[&svg]:zep-fill-darkgrey-500"),children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:74,columnNumber:7},globalThis),t.jsxDEV("hr",{className:"group-first:zep-block zep-absolute zep-h-[1px] zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-400"},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:82,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:64,columnNumber:5},globalThis)},de=({children:a,className:r,...n})=>{const{variant:m}=C(),u={[e.Zps]:["zep-bg-indigo-500"],[e.Cat]:["zep-bg-yellow-500"],[e.Zsd]:["zep-bg-greyscale-200"],[e.Default]:["zep-bg-greyscale-0"]},o=V([`
      sm:zep-table-row-group`],{variants:{variant:u},defaultVariants:{variant:e.Zps}});return t.jsxDEV("thead",{className:D(o({variant:m,className:r})),...n,children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:111,columnNumber:5},globalThis)},fe=({children:a,className:r,align:n="left",...m})=>{const{variant:u}=C(),o={[e.Zps]:["zep-text-typography-light-100"],[e.Cat]:["zep-text-typography-dark-100"],[e.Zsd]:["zep-text-typography-dark-100"],[e.Default]:["zep-text-typography-dark-100"]},p=V([`
      zep-inline-block
      lg:zep-py-0.5
      zep-w-full
      zep-typography-bodyStrong`],{variants:{variant:o},defaultVariants:{variant:e.Zps}});return t.jsxDEV("th",{className:b("zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 lg:zep-whitespace-nowrap",r),style:{textAlign:n},...m,children:[t.jsxDEV("span",{className:D(p({variant:u})),children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:151,columnNumber:7},globalThis),t.jsxDEV("hr",{className:"zep-absolute zep-border-t-2 zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-900"},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:152,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:144,columnNumber:5},globalThis)},H=({children:a,className:r,...n})=>t.jsxDEV("tr",{className:b(" zep-mb-2 zep-table-row sm:zep-sm-[0px]",r),...n,children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:159,columnNumber:5},globalThis),E=({children:a,className:r,variant:n=e.Zps,maxWidth:m,maxHeight:u,fullWidth:o,buttonLabel:p,descriptionBottom:z,descriptionTop:Z,dataSource:ne,columns:B,align:g,tableButtonOnClick:w,...le})=>{const re=(i,c,h,j,l)=>{switch(j){case x.Button:return t.jsxDEV(ue,{icon:l==null?void 0:l.iconName,variant:n===e.Zps?W.Tertiary:W.DarkTertiary,onClick:(l==null?void 0:l.onClick)===void 0?void 0:()=>l.onClick(i,c,h),children:l==null?void 0:l.title},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:185,columnNumber:11},globalThis);case x.Text:default:return Object.keys(ie).includes(i)?t.jsxDEV(se,{name:i},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:195,columnNumber:63},globalThis):i}};return t.jsxDEV(ae.Provider,{value:{variant:n},children:t.jsxDEV(t.Fragment,{children:[Z&&t.jsxDEV("div",{className:`zep-mb-2.5 ${n===e.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:t.jsxDEV("p",{children:Z},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:207,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:202,columnNumber:11},globalThis),t.jsxDEV("div",{className:b("zep-overflow-scroll zep-w-full",r,{"sm:zep-w-full":o}),style:{maxWidth:m,maxHeight:u},"data-testid":"zep-table",children:t.jsxDEV("table",{className:b("zep-table zep-w-full",{"sm:zep-w-full":o}),...le,children:[t.jsxDEV(de,{children:t.jsxDEV(H,{children:B.map(({title:i,key:c},h)=>t.jsxDEV(fe,{className:b({"zep-sticky zep-left-[0] zep-z-20 zep-drop-shadow-lg zep-min-w-[100px]":h===0,"zep-bg-indigo-500":n===e.Zps,"zep-bg-yellow-500":n===e.Cat,"zep-bg-greyscale-200":n===e.Zsd}),align:g,children:i},`table-align-${g}-head-cell-${c}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:229,columnNumber:19},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:227,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:226,columnNumber:13},globalThis),t.jsxDEV(pe,{children:ne.map((i,c)=>t.jsxDEV(H,{children:B.map(({key:h,dataIndex:j,props:l,renderAs:oe},F)=>t.jsxDEV(be,{align:g,isFirstRow:c===0,className:F===0?"zep-sticky zep-left-[0] zep-z-20  zep-drop-shadow-lg zep-min-w-[100px]":"",children:re(i[j],i,c,oe,l)},`table-align-${g}-cell-${c}-${h}-${F}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:249,columnNumber:21},globalThis))},`table-align-${g}-row-${c}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:247,columnNumber:17},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:245,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:220,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:210,columnNumber:9},globalThis),z&&t.jsxDEV("div",{className:`zep-my-2.5 ${n===e.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:t.jsxDEV("p",{children:z},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:271,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:266,columnNumber:11},globalThis),p&&w&&t.jsxDEV("div",{children:t.jsxDEV(ce,{label:p,variant:me.Primary,labelClass:"zep-text-indigo-500",onClick:w},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:276,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:275,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:200,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:199,columnNumber:5},globalThis)};try{E.displayName="Table",E.__docgenInfo={description:"",displayName:"Table",props:{dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"{}[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<{}>[]"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"TableThemes.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZSD"'},{value:'"Default"'}]}},descriptionTop:{defaultValue:null,description:"",name:"descriptionTop",required:!1,type:{name:"string"}},descriptionBottom:{defaultValue:null,description:"",name:"descriptionBottom",required:!1,type:{name:"string"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!1,type:{name:"string"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},tableButtonOnClick:{defaultValue:null,description:"",name:"tableButtonOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const ke={title:"Components/Table",component:E,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(e)}},children:{control:{disable:!0}}},parameters:{a11y:{disable:!0}}},d=[{key:"k1",dataIndex:"type",title:"Type"},{key:"k2",dataIndex:"id",title:"Shop",renderAs:x.Button,props:{iconName:"download",onClick:a=>console.log("download",a)}},{key:"k3",dataIndex:"motor",title:"Motorleistung"},{key:"k4",dataIndex:"grab",title:"max. Grabtiefe/ max. Reichweite"},{key:"k5",dataIndex:"loffel",title:"Löffelvolumen"},{key:"k6",dataIndex:"einsatz",title:"Einsatzgewicht"},{key:"k7",dataIndex:"konfig",title:"Konfigurator"},{key:"k8",dataIndex:"id",title:"Datenblatt Download",renderAs:x.Button,props:{iconName:"download",onClick:a=>console.log("download",a)}}],s={id:1,type:"300.9D*",motor:"13,7 kW (18,6 PS)",grab:"1,7 / 3,1 m",loffel:"0,03 m³",einsatz:"985 kg",konfig:"300.9D*"},f=[s,{...s,id:2},{...s,id:3,loffel:"check"},{...s,id:4},{...s,id:5},{...s,id:6,loffel:"email"},{...s,id:7},{...s,id:8},{...s,id:9}],N={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:f,columns:d,tableButtonOnClick:()=>null}},T={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:f,columns:d,align:"left",tableButtonOnClick:()=>null}},S={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:f,columns:d,align:"center",tableButtonOnClick:()=>null}},v={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:f,columns:d,align:"right",tableButtonOnClick:()=>null}},y={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",maxWidth:700,maxHeight:500,variant:e.Zps,dataSource:f,columns:d,tableButtonOnClick:()=>null}},k={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",fullWidth:!0,variant:e.Zps,dataSource:f,tableButtonOnClick:()=>null,columns:d}};var L,O,K;N.parameters={...N.parameters,docs:{...(L=N.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    tableButtonOnClick: () => null
  }
}`,...(K=(O=N.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var A,q,_;T.parameters={...T.parameters,docs:{...(A=T.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    align: 'left',
    tableButtonOnClick: () => null
  }
}`,...(_=(q=T.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var $,I,R;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    align: 'center',
    tableButtonOnClick: () => null
  }
}`,...(R=(I=S.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var P,M,G;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    align: 'right',
    tableButtonOnClick: () => null
  }
}`,...(G=(M=v.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var J,Q,U;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
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
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,ee;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    fullWidth: true,
    variant: TableThemes.Zps,
    dataSource: cells,
    tableButtonOnClick: () => null,
    columns: heads
  }
}`,...(ee=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};const je=["Default","AlignLeft","AlignCenter","AlignRight","FixedSize","FullWidth"];export{S as AlignCenter,T as AlignLeft,v as AlignRight,N as Default,y as FixedSize,k as FullWidth,je as __namedExportsOrder,ke as default};
