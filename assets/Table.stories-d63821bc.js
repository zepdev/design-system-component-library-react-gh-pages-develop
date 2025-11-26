import{j as a,c as b}from"./clsx-24df0f47.js";import{a as ie,F as se}from"./Icon-7f566523.js";import{c as V}from"./index-b7fee60d.js";import{r as te}from"./index-b1e7e93e.js";import{Z as ce,a as me}from"./ZpsButton-c80af4b7.js";import{t as D}from"./tw-merge-1166cefb.js";import{B as pe,a as F}from"./Button-0e36dc1c.js";import"./_commonjsHelpers-de833af9.js";import"./Spacing-e25630db.js";var e=(t=>(t.Zps="ZPS",t.Cat="CAT",t.Zsd="ZSD",t.Default="Default",t))(e||{}),x=(t=>(t.Text="text",t.Button="button",t))(x||{});const ae=te.createContext({variant:e.Zps}),C=()=>te.useContext(ae),ue=({children:t,...o})=>a.jsxDEV("tbody",{...o,children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:26,columnNumber:10},globalThis),be=({children:t,className:o,isFirstRow:n,align:m,...p})=>{const{variant:i}=C(),u={[e.Zps]:["zep-text-typography-primary-default "],[e.Cat]:["zep-text-typography-dark-100"],[e.Zsd]:["zep-text-typography-dark-100"],[e.Default]:["zep-text-typography-dark-100"]},z=V([` zep-inline-block
        sm:zep-text-unset
        sm:zep-py-0.5
        zep-typography-bodyText
        zep-whitespace-normal
        zep-max-w-[250px]
        lg:zep-max-w-[400px]
      `],{variants:{variant:u},defaultVariants:{variant:e.Zps}});return a.jsxDEV("td",{className:b("zep-justify-between zep-break-words zep-whitespace-normal sm:zep-table-cell zep-relative zep-py-0.75 sm:zep-py-0.5 zep-px-1 md:zep-px-1.5 zep-bg-greyscale-0 lg:zep-max-w- zep-group",o),style:{textAlign:m},...p,children:[a.jsxDEV("span",{style:{width:"max-content"},className:D(z({variant:i}),i===e.Zps?"[&svg]:zep-fill-indigo-500":"[&svg]:zep-fill-darkgrey-500"),children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:75,columnNumber:7},globalThis),a.jsxDEV("hr",{className:"group-first:zep-block zep-absolute zep-h-[1px] zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-400"},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:84,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:65,columnNumber:5},globalThis)},de=({children:t,className:o,...n})=>{const{variant:m}=C(),p={[e.Zps]:["zep-bg-indigo-500"],[e.Cat]:["zep-bg-yellow-500"],[e.Zsd]:["zep-bg-greyscale-200"],[e.Default]:["zep-bg-greyscale-0"]},i=V([`
      sm:zep-table-row-group`],{variants:{variant:p},defaultVariants:{variant:e.Zps}});return a.jsxDEV("thead",{className:D(i({variant:m,className:o})),...n,children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:113,columnNumber:5},globalThis)},he=({children:t,className:o,align:n="left",...m})=>{const{variant:p}=C(),i={[e.Zps]:["zep-text-typography-light-100"],[e.Cat]:["zep-text-typography-dark-100"],[e.Zsd]:["zep-text-typography-dark-100"],[e.Default]:["zep-text-typography-dark-100"]},u=V([`zep-inline-block
      sm:zep-text-unset
      sm:zep-py-0.5
      zep-typography-bodyText
      zep-break-words
      zep-whitespace-normal
      zep-max-w-[250px]
      lg:zep-max-w-[400px]
      `],{variants:{variant:i},defaultVariants:{variant:e.Zps}});return a.jsxDEV("th",{className:b("zep-w-auto zep-relative zep-py-0.75 sm:zep-py-0.5 zep-px-1 md:zep-px-1.5  lg:zep-break-words",o),style:{textAlign:n},...m,children:[a.jsxDEV("span",{style:{width:"max-content"},className:D(u({variant:p})),children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:161,columnNumber:7},globalThis),a.jsxDEV("hr",{className:"zep-absolute zep-border-t-2 zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-900"},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:164,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:151,columnNumber:5},globalThis)},H=({children:t,className:o,...n})=>a.jsxDEV("tr",{className:b(" zep-mb-2 zep-table-row sm:zep-sm-[0px]",o),...n,children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:171,columnNumber:5},globalThis),E=({children:t,className:o,variant:n=e.Zps,maxWidth:m,maxHeight:p,fullWidth:i,buttonLabel:u,descriptionBottom:z,descriptionTop:Z,dataSource:ne,columns:B,align:f,tableButtonOnClick:w,...le})=>{const re=(l,c,g,j,r)=>{switch(j){case x.Button:return l!=="x"&&l.includes(".pdf")?a.jsxDEV(pe,{icon:r==null?void 0:r.iconName,variant:n===e.Zps?F.Tertiary:F.DarkTertiary,onClick:(r==null?void 0:r.onClick)===void 0?void 0:()=>r.onClick(l,c,g),renderLink:!0,href:l,children:r==null?void 0:r.title},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:197,columnNumber:11},globalThis):null;case x.Text:default:return Object.keys(ie).includes(l)?a.jsxDEV(se,{name:l},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:209,columnNumber:63},globalThis):l}};return a.jsxDEV(ae.Provider,{value:{variant:n},children:a.jsxDEV("div",{className:"zep-flex zep-flex-col zep-gap-1.5",children:[Z&&a.jsxDEV("p",{className:n===e.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100",children:Z},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:217,columnNumber:11},globalThis),a.jsxDEV("div",{className:b("zep-overflow-scroll zep-w-auto",o,{"sm:zep-w-auto":i}),style:{maxWidth:m,maxHeight:p},"data-testid":"zep-table",children:a.jsxDEV("table",{className:b("zep-table zep-w-auto",{"sm:zep-w-full":i},"zep-table-auto"),...le,children:[a.jsxDEV(de,{children:a.jsxDEV(H,{children:B.map(({title:l,key:c},g)=>a.jsxDEV(he,{className:b({"sm:zep-sticky sm:zep-left-[0] sm:zep-z-20 sm:zep-drop-shadow-lg":g===0,"zep-bg-indigo-500":n===e.Zps,"zep-bg-yellow-500":n===e.Cat,"zep-bg-greyscale-200":n===e.Zsd}),align:f,children:l},`table-align-${f}-head-cell-${c}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:248,columnNumber:19},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:246,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:245,columnNumber:13},globalThis),a.jsxDEV(ue,{children:ne.map((l,c)=>a.jsxDEV(H,{children:B.map(({key:g,dataIndex:j,props:r,renderAs:oe},W)=>(console.log("AAA",l),a.jsxDEV(be,{align:f,isFirstRow:c===0,className:W===0?"sm:zep-sticky sm:zep-left-[0] sm:zep-z-20  sm:zep-drop-shadow-lg":"",children:re(l[j],l,c,oe,r)},`table-align-${f}-cell-${c}-${g}-${W}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:269,columnNumber:23},globalThis)))},`table-align-${f}-row-${c}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:265,columnNumber:17},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:263,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:235,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:225,columnNumber:9},globalThis),z&&a.jsxDEV("p",{className:`zep-typography-supportText ${n===e.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:z},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:287,columnNumber:11},globalThis),u&&w&&a.jsxDEV("div",{children:a.jsxDEV(ce,{label:u,variant:me.Primary,labelClass:"zep-text-indigo-500",onClick:w},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:297,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:296,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:215,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:214,columnNumber:5},globalThis)};try{E.displayName="Table",E.__docgenInfo={description:"",displayName:"Table",props:{dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"{}[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<{}>[]"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"TableThemes.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZSD"'},{value:'"Default"'}]}},descriptionTop:{defaultValue:null,description:"",name:"descriptionTop",required:!1,type:{name:"string"}},descriptionBottom:{defaultValue:null,description:"",name:"descriptionBottom",required:!1,type:{name:"string"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!1,type:{name:"string"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},tableButtonOnClick:{defaultValue:null,description:"",name:"tableButtonOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const ke={title:"Components/Table",component:E,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(e)}},children:{control:{disable:!0}}},parameters:{a11y:{disable:!0}}},d=[{key:"k1",dataIndex:"type",title:"Type"},{key:"k2",dataIndex:"id",title:"Shop",renderAs:x.Button,props:{iconName:"download",onClick:t=>console.log("download",t)}},{key:"k3",dataIndex:"motor",title:"Motorleistung this is a test headline, this headline is much much longer"},{key:"k4",dataIndex:"grab",title:"max. Grabtiefe/ max. Reichweite"},{key:"k5",dataIndex:"loffel",title:"Löffelvolumen"},{key:"k6",dataIndex:"einsatz",title:"Einsatzgewicht"},{key:"k7",dataIndex:"konfig",title:"Konfigurator"},{key:"k8",dataIndex:"id",title:"Datenblatt Download",renderAs:x.Button,props:{iconName:"download",onClick:t=>console.log("download",t)}}],s={id:1,type:"300.9D*",motor:"13,7 kW (18,6 PS)",grab:"1,7 / 3,1 m this content is test content and could be much longer",loffel:"0,03 m³",einsatz:"985 kg",konfig:"300.9D*"},h=[s,{...s,id:"x"},{...s,id:"x",loffel:"check"},{...s,id:4},{...s,id:5},{...s,id:6,loffel:"email"},{...s,id:7},{...s,id:8},{...s,id:9}],y={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:h,columns:d,tableButtonOnClick:()=>null}},N={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:h,columns:d,align:"left",tableButtonOnClick:()=>null}},T={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:h,columns:d,align:"center",tableButtonOnClick:()=>null}},S={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:e.Zps,dataSource:h,columns:d,align:"right",tableButtonOnClick:()=>null}},v={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",maxWidth:700,maxHeight:500,variant:e.Zps,dataSource:h,columns:d,tableButtonOnClick:()=>null}},k={args:{buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",fullWidth:!0,variant:e.Zps,dataSource:h,tableButtonOnClick:()=>null,columns:d}};var L,O,A;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    dataSource: cells,
    columns: heads,
    tableButtonOnClick: () => null
  }
}`,...(A=(O=y.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var K,q,_;N.parameters={...N.parameters,docs:{...(K=N.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(_=(q=N.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var $,I,R;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(R=(I=T.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var P,M,G;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(ee=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};const je=["Default","AlignLeft","AlignCenter","AlignRight","FixedSize","FullWidth"];export{T as AlignCenter,N as AlignLeft,S as AlignRight,y as Default,v as FixedSize,k as FullWidth,je as __namedExportsOrder,ke as default};
