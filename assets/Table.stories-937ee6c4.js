import{j as t,c as b}from"./clsx-24df0f47.js";import{a as ie,F as se}from"./Icon-7f566523.js";import{c as V}from"./index-b7fee60d.js";import{r as te}from"./index-b1e7e93e.js";import{Z as ce,a as me}from"./ZpsButton-c80af4b7.js";import{t as D}from"./tw-merge-1166cefb.js";import{B as pe,a as W}from"./Button-b1cfce1e.js";import"./_commonjsHelpers-de833af9.js";import"./Spacing-e25630db.js";var e=(a=>(a.Zps="ZPS",a.Cat="CAT",a.Zsd="ZSD",a.Default="Default",a))(e||{}),x=(a=>(a.Text="text",a.Button="button",a))(x||{});const ae=te.createContext({variant:e.Zps}),C=()=>te.useContext(ae),ue=({children:a,...r})=>t.jsxDEV("tbody",{...r,children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:26,columnNumber:10},globalThis),be=({children:a,className:r,isFirstRow:n,align:m,...p})=>{const{variant:o}=C(),u={[e.Zps]:["zep-text-typography-primary-default "],[e.Cat]:["zep-text-typography-dark-100"],[e.Zsd]:["zep-text-typography-dark-100"],[e.Default]:["zep-text-typography-dark-100"]},z=V([` zep-inline-block
        sm:zep-text-unset
        sm:zep-py-0.5
        zep-typography-bodyText
        zep-whitespace-normal
        zep-max-w-[250px]
        lg:zep-max-w-[400px]
      `],{variants:{variant:u},defaultVariants:{variant:e.Zps}});return t.jsxDEV("td",{className:b("zep-justify-between zep-break-words zep-whitespace-normal sm:zep-table-cell zep-relative zep-py-0.75 sm:zep-py-0.5 zep-px-1 md:zep-px-1.5 zep-bg-greyscale-0 lg:zep-max-w- zep-group",r),style:{textAlign:m},...p,children:[t.jsxDEV("span",{style:{width:"max-content"},className:D(z({variant:o}),o===e.Zps?"[&svg]:zep-fill-indigo-500":"[&svg]:zep-fill-darkgrey-500"),children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:75,columnNumber:7},globalThis),t.jsxDEV("hr",{className:"group-first:zep-block zep-absolute zep-h-[1px] zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-400"},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:84,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:65,columnNumber:5},globalThis)},de=({children:a,className:r,...n})=>{const{variant:m}=C(),p={[e.Zps]:["zep-bg-indigo-500"],[e.Cat]:["zep-bg-yellow-500"],[e.Zsd]:["zep-bg-greyscale-200"],[e.Default]:["zep-bg-greyscale-0"]},o=V([`
      sm:zep-table-row-group`],{variants:{variant:p},defaultVariants:{variant:e.Zps}});return t.jsxDEV("thead",{className:D(o({variant:m,className:r})),...n,children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:113,columnNumber:5},globalThis)},he=({children:a,className:r,align:n="left",...m})=>{const{variant:p}=C(),o={[e.Zps]:["zep-text-typography-light-100"],[e.Cat]:["zep-text-typography-dark-100"],[e.Zsd]:["zep-text-typography-dark-100"],[e.Default]:["zep-text-typography-dark-100"]},u=V([`zep-inline-block
      sm:zep-text-unset
      sm:zep-py-0.5
      zep-typography-bodyText
      zep-break-words
      zep-whitespace-normal
      zep-max-w-[250px]
      lg:zep-max-w-[400px]
      `],{variants:{variant:o},defaultVariants:{variant:e.Zps}});return t.jsxDEV("th",{className:b("zep-w-auto zep-relative zep-py-0.75 sm:zep-py-0.5 zep-px-1 md:zep-px-1.5  lg:zep-break-words",r),style:{textAlign:n},...m,children:[t.jsxDEV("span",{style:{width:"max-content"},className:D(u({variant:p})),children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:161,columnNumber:7},globalThis),t.jsxDEV("hr",{className:"zep-absolute zep-border-t-2 zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-900"},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:164,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:151,columnNumber:5},globalThis)},H=({children:a,className:r,...n})=>t.jsxDEV("tr",{className:b(" zep-mb-2 zep-table-row sm:zep-sm-[0px]",r),...n,children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:171,columnNumber:5},globalThis),E=({children:a,className:r,variant:n=e.Zps,maxWidth:m,maxHeight:p,fullWidth:o,buttonLabel:u,descriptionBottom:z,descriptionTop:Z,dataSource:ne,columns:B,align:f,tableButtonOnClick:w,...le})=>{const re=(i,c,g,j,l)=>{switch(j){case x.Button:return t.jsxDEV(pe,{icon:l==null?void 0:l.iconName,variant:n===e.Zps?W.Tertiary:W.DarkTertiary,onClick:(l==null?void 0:l.onClick)===void 0?void 0:()=>l.onClick(i,c,g),children:l==null?void 0:l.title},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:197,columnNumber:11},globalThis);case x.Text:default:return Object.keys(ie).includes(i)?t.jsxDEV(se,{name:i},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:207,columnNumber:63},globalThis):i}};return t.jsxDEV(ae.Provider,{value:{variant:n},children:t.jsxDEV(t.Fragment,{children:[Z&&t.jsxDEV("div",{className:`zep-mb-2.5 ${n===e.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:t.jsxDEV("p",{children:Z},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:219,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:214,columnNumber:11},globalThis),t.jsxDEV("div",{className:b("zep-overflow-scroll zep-w-auto",r,{"sm:zep-w-auto":o}),style:{maxWidth:m,maxHeight:p},"data-testid":"zep-table",children:t.jsxDEV("table",{className:b("zep-table zep-w-auto",{"sm:zep-w-full":o},"zep-table-auto"),...le,children:[t.jsxDEV(de,{children:t.jsxDEV(H,{children:B.map(({title:i,key:c},g)=>t.jsxDEV(he,{className:b({"sm:zep-sticky sm:zep-left-[0] sm:zep-z-20 sm:zep-drop-shadow-lg":g===0,"zep-bg-indigo-500":n===e.Zps,"zep-bg-yellow-500":n===e.Cat,"zep-bg-greyscale-200":n===e.Zsd}),align:f,children:i},`table-align-${f}-head-cell-${c}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:245,columnNumber:19},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:243,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:242,columnNumber:13},globalThis),t.jsxDEV(ue,{children:ne.map((i,c)=>t.jsxDEV(H,{children:B.map(({key:g,dataIndex:j,props:l,renderAs:oe},F)=>t.jsxDEV(be,{align:f,isFirstRow:c===0,className:F===0?"sm:zep-sticky sm:zep-left-[0] sm:zep-z-20  sm:zep-drop-shadow-lg":"",children:re(i[j],i,c,oe,l)},`table-align-${f}-cell-${c}-${g}-${F}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:264,columnNumber:21},globalThis))},`table-align-${f}-row-${c}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:262,columnNumber:17},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:260,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:232,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:222,columnNumber:9},globalThis),z&&t.jsxDEV("div",{className:`zep-my-2.5 ${n===e.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:t.jsxDEV("p",{children:z},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:286,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:281,columnNumber:11},globalThis),u&&w&&t.jsxDEV("div",{children:t.jsxDEV(ce,{label:u,variant:me.Primary,labelClass:"zep-text-indigo-500",onClick:w},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:291,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:290,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:212,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:211,columnNumber:5},globalThis)};try{E.displayName="Table",E.__docgenInfo={description:"",displayName:"Table",props:{dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"{}[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<{}>[]"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"TableThemes.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZSD"'},{value:'"Default"'}]}},descriptionTop:{defaultValue:null,description:"",name:"descriptionTop",required:!1,type:{name:"string"}},descriptionBottom:{defaultValue:null,description:"",name:"descriptionBottom",required:!1,type:{name:"string"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!1,type:{name:"string"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},tableButtonOnClick:{defaultValue:null,description:"",name:"tableButtonOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const ke={title:"Components/Table",component:E,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(e)}},children:{control:{disable:!0}}},parameters:{a11y:{disable:!0}}},d=[{key:"k1",dataIndex:"type",title:"Type"},{key:"k2",dataIndex:"id",title:"Shop",renderAs:x.Button,props:{iconName:"download",onClick:a=>console.log("download",a)}},{key:"k3",dataIndex:"motor",title:"Motorleistung this is a test headline, this headline is much much longer"},{key:"k4",dataIndex:"grab",title:"max. Grabtiefe/ max. Reichweite"},{key:"k5",dataIndex:"loffel",title:"Löffelvolumen"},{key:"k6",dataIndex:"einsatz",title:"Einsatzgewicht"},{key:"k7",dataIndex:"konfig",title:"Konfigurator"},{key:"k8",dataIndex:"id",title:"Datenblatt Download",renderAs:x.Button,props:{iconName:"download",onClick:a=>console.log("download",a)}}],s={id:1,type:"300.9D*",motor:"13,7 kW (18,6 PS)",grab:"1,7 / 3,1 m this content is test content and could be much longer",loffel:"0,03 m³",einsatz:"985 kg",konfig:"300.9D*"},h=[s,{...s,id:2},{...s,id:3,loffel:"check"},{...s,id:4},{...s,id:5},{...s,id:6,loffel:"email"},{...s,id:7},{...s,id:8},{...s,id:9}],N={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:h,columns:d,tableButtonOnClick:()=>null}},T={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:h,columns:d,align:"left",tableButtonOnClick:()=>null}},y={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:h,columns:d,align:"center",tableButtonOnClick:()=>null}},S={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:h,columns:d,align:"right",tableButtonOnClick:()=>null}},v={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",maxWidth:700,maxHeight:500,variant:e.Zps,dataSource:h,columns:d,tableButtonOnClick:()=>null}},k={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",fullWidth:!0,variant:e.Zps,dataSource:h,tableButtonOnClick:()=>null,columns:d}};var L,O,K;N.parameters={...N.parameters,docs:{...(L=N.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(_=(q=T.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var $,I,R;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(R=(I=y.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var P,M,G;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(G=(M=S.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var J,Q,U;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,ee;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};const je=["Default","AlignLeft","AlignCenter","AlignRight","FixedSize","FullWidth"];export{y as AlignCenter,T as AlignLeft,S as AlignRight,N as Default,v as FixedSize,k as FullWidth,je as __namedExportsOrder,ke as default};
