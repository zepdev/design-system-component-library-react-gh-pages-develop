import{j as e,c as g}from"./clsx-42c82d7d.js";import{c as C}from"./index-7d4e1659.js";import{r as J}from"./index-39946eba.js";import{B as re,a as B}from"./Button-b3957f93.js";import{Z as oe,a as ie}from"./ZpsButton-c37c125a.js";import{t as w}from"./tw-merge-1166cefb.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-e141f9ed.js";import"./Spacing-0ac87ba5.js";var t=(n=>(n.Zps="ZPS",n.Cat="CAT",n))(t||{}),o=(n=>(n.Text="text",n.Icon="icon",n.Booliean="boolean",n))(o||{});const Q=J.createContext({variant:t.Zps}),j=()=>J.useContext(Q),se=({children:n,...r})=>e.jsxDEV("tbody",{...r,children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:24,columnNumber:10},globalThis),ce=({children:n,className:r,isFirstRow:a,align:m,...u})=>{const{variant:s}=j(),d={[t.Zps]:["zep-text-typography-primary-default "],[t.Cat]:["zep-text-typography-dark-100"]},S=C([`
    zep-inline-block
    zep-text-right
    sm:zep-text-unset
    sm:zep-py-0.5
    zep-w-full
   zep-typography-bodyText
      `],{variants:{variant:d},defaultVariants:{variant:t.Zps}});return e.jsxDEV("td",{className:g(" zep-justify-between sm:zep-table-cell zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 zep-bg-greyscale-0  lg:zep-whitespace-nowrap zep-group",r),style:{textAlign:m},...u,children:[e.jsxDEV("span",{className:w(S({variant:s}),s===t.Zps?"[&svg]:zep-fill-indigo-500":"[&svg]:zep-fill-darkgrey-500"),children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:70,columnNumber:7},globalThis),e.jsxDEV("hr",{className:"group-first:zep-block zep-absolute zep-h-[1px] zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-400"},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:78,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:60,columnNumber:5},globalThis)},me=({children:n,className:r,...a})=>{const{variant:m}=j(),u={[t.Zps]:["zep-bg-indigo-500"],[t.Cat]:["zep-bg-yellow-500"]},s=C([`
      sm:zep-table-row-group`],{variants:{variant:u},defaultVariants:{variant:t.Zps}});return e.jsxDEV("thead",{className:w(s({variant:m,className:r})),...a,children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:105,columnNumber:5},globalThis)},ue=({children:n,className:r,align:a="left",...m})=>{const{variant:u}=j(),s={[t.Zps]:["zep-text-typography-light-100"],[t.Cat]:["zep-text-typography-dark-100"]},d=C([`
      zep-inline-block
      lg:zep-py-0.5
      zep-w-full
      zep-typography-bodyStrong`],{variants:{variant:s},defaultVariants:{variant:t.Zps}});return e.jsxDEV("th",{className:g("zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 lg:zep-whitespace-nowrap",r),style:{textAlign:a},...m,children:[e.jsxDEV("span",{className:w(d({variant:u})),children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:143,columnNumber:7},globalThis),e.jsxDEV("hr",{className:"zep-absolute zep-border-t-2 zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-900"},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:144,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:136,columnNumber:5},globalThis)},pe=({children:n,className:r,...a})=>e.jsxDEV("tr",{className:g(" zep-mb-2 zep-table-row sm:zep-sm-[0px]",r),...a,children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:151,columnNumber:5},globalThis),l=({children:n,className:r,variant:a=t.Zps,maxWidth:m,maxHeight:u,fullWidth:s,textTop:d=!0,buttonLabel:S,descriptionBottom:U,descriptionTop:X,rows:Y,columnNames:ee,align:h,tableButtonOnClick:te,iconButtonOnClick:ne,...le})=>{const ae=(f,c)=>{switch(f){case o.Text:return e.jsxDEV("p",{children:c},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:178,columnNumber:16},globalThis);case o.Icon:return e.jsxDEV("div",{children:e.jsxDEV(re,{icon:c,variant:a===t.Zps?B.Tertiary:B.DarkTertiary,onClick:ne},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:182,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:181,columnNumber:11},globalThis);default:return e.jsxDEV("div",{},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:191,columnNumber:16},globalThis)}};return e.jsxDEV(Q.Provider,{value:{variant:a},children:e.jsxDEV(e.Fragment,{children:[d&&e.jsxDEV("div",{className:`zep-mb-2.5 ${a===t.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:e.jsxDEV("p",{children:X},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:204,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:199,columnNumber:11},globalThis),e.jsxDEV("div",{className:g("zep-overflow-scroll zep-w-full sm:zep-w-auto",r,{"sm:zep-w-full":s}),style:{maxWidth:m,maxHeight:u},"data-testid":"zep-table",children:e.jsxDEV("table",{className:g("zep-table zep-w-full sm:zep-w-auto",{"sm:zep-w-full":s}),...le,children:[e.jsxDEV(l.Head,{children:e.jsxDEV(l.Row,{children:ee.map((f,c)=>e.jsxDEV(l.HeadCell,{className:c===0?`zep-sticky zep-left-[0] zep-z-20  zep-drop-shadow-lg zep-min-w-[100px] ${a===t.Zps?"zep-bg-indigo-500":"zep-bg-yellow-500"}`:"",align:h,children:f.name},`table-align-${h}-head-cell-${c}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:227,columnNumber:19},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:225,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:224,columnNumber:13},globalThis),e.jsxDEV(l.Body,{children:Y.map((f,c)=>e.jsxDEV(l.Row,{children:f.rowCells.map((k,E)=>e.jsxDEV(l.Cell,{align:h,isFirstRow:c===0,className:E===0?"zep-sticky zep-left-[0] zep-z-20  zep-drop-shadow-lg zep-min-w-[100px]":"",children:e.jsxDEV("div",{children:ae(k.type,k.value)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:256,columnNumber:23},globalThis)},`table-align-${h}-cell-${c}-${E}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:248,columnNumber:21},globalThis))},`table-align-${h}-row-${c}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:246,columnNumber:17},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:244,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:218,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:208,columnNumber:9},globalThis),e.jsxDEV("div",{className:`zep-my-2.5 ${a===t.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:e.jsxDEV("p",{children:U},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:269,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:264,columnNumber:9},globalThis),e.jsxDEV("div",{children:e.jsxDEV(oe,{label:S,variant:ie.Primary,labelClass:"zep-text-indigo-500",onClick:te},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:272,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:271,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:197,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:196,columnNumber:5},globalThis)};l.Body=se;l.Cell=ce;l.Head=me;l.HeadCell=ue;l.Row=pe;try{l.displayName="Table",l.__docgenInfo={description:"",displayName:"Table",props:{rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"TableRow[]"}},columnNames:{defaultValue:null,description:"",name:"columnNames",required:!0,type:{name:"TableHeads[]"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"TableThemes.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},textTop:{defaultValue:{value:"true"},description:"",name:"textTop",required:!1,type:{name:"boolean"}},descriptionTop:{defaultValue:null,description:"",name:"descriptionTop",required:!1,type:{name:"string"}},descriptionBottom:{defaultValue:null,description:"",name:"descriptionBottom",required:!0,type:{name:"string"}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!0,type:{name:"string"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},tableButtonOnClick:{defaultValue:null,description:"",name:"tableButtonOnClick",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}},iconButtonOnClick:{defaultValue:null,description:"",name:"iconButtonOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const ze={title:"Components/Table",component:l,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(t)}},children:{control:{disable:!0}}},parameters:{a11y:{disable:!0}}},p=[{name:"Type"},{name:"Shop"},{name:"Motorleistung"},{name:"max. Grabtiefe/ max. Reichweite"},{name:"Löffelvolumen"},{name:"Einsatzgewicht"},{name:"Konfigurator"},{name:"Datenblatt Download"}],i=[{value:"300.9D*",type:o.Text},{value:"download",type:o.Icon},{value:"13,7 kW (18,6 PS)",type:o.Text},{value:"1,7 / 3,1 m",type:o.Text},{value:"0,03 m³",type:o.Text},{value:"985 kg",type:o.Text},{value:"300.9D*",type:o.Text},{value:"download",type:o.Icon}],b=[{rowCells:i},{rowCells:i},{rowCells:i},{rowCells:i},{rowCells:i},{rowCells:i},{rowCells:i},{rowCells:i},{rowCells:i},{rowCells:i}],x={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:t.Zps,rows:b,columnNames:p,iconButtonOnClick:()=>null,tableButtonOnClick:()=>null}},T={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:t.Zps,rows:b,columnNames:p,align:"left",iconButtonOnClick:()=>null,tableButtonOnClick:()=>null}},N={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:t.Zps,rows:b,columnNames:p,align:"center",iconButtonOnClick:()=>null,tableButtonOnClick:()=>null}},v={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",variant:t.Zps,rows:b,columnNames:p,align:"right",iconButtonOnClick:()=>null,tableButtonOnClick:()=>null}},z={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",maxWidth:700,maxHeight:500,variant:t.Zps,rows:b,columnNames:p,iconButtonOnClick:()=>null,tableButtonOnClick:()=>null}},y={args:{textTop:!0,buttonLabel:"Kontaktieren Sie unsere Experten",descriptionBottom:"Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.",descriptionTop:"Some text above",fullWidth:!0,variant:t.Zps,rows:b,iconButtonOnClick:()=>null,tableButtonOnClick:()=>null,columnNames:p}};var V,D,Z;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    rows: rowCells,
    columnNames: heads,
    iconButtonOnClick: () => null,
    tableButtonOnClick: () => null
  }
}`,...(Z=(D=x.parameters)==null?void 0:D.docs)==null?void 0:Z.source}}};var O,H,W;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    rows: rowCells,
    columnNames: heads,
    align: 'left',
    iconButtonOnClick: () => null,
    tableButtonOnClick: () => null
  }
}`,...(W=(H=T.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var F,L,q;N.parameters={...N.parameters,docs:{...(F=N.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    rows: rowCells,
    columnNames: heads,
    align: 'center',
    iconButtonOnClick: () => null,
    tableButtonOnClick: () => null
  }
}`,...(q=(L=N.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var K,R,A;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    variant: TableThemes.Zps,
    rows: rowCells,
    columnNames: heads,
    align: 'right',
    iconButtonOnClick: () => null,
    tableButtonOnClick: () => null
  }
}`,...(A=(R=v.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var _,$,M;z.parameters={...z.parameters,docs:{...(_=z.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    maxWidth: 700,
    maxHeight: 500,
    variant: TableThemes.Zps,
    rows: rowCells,
    columnNames: heads,
    iconButtonOnClick: () => null,
    tableButtonOnClick: () => null
  }
}`,...(M=($=z.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var P,I,G;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    textTop: true,
    buttonLabel: 'Kontaktieren Sie unsere Experten',
    descriptionBottom: 'Haben Sie Fragen zu unseren Schiffshilfsantriebsmotoren? Wir beraten Sie gerne.',
    descriptionTop: 'Some text above',
    fullWidth: true,
    variant: TableThemes.Zps,
    rows: rowCells,
    iconButtonOnClick: () => null,
    tableButtonOnClick: () => null,
    columnNames: heads
  }
}`,...(G=(I=y.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};const ye=["Default","AlignLeft","AlignCenter","AlignRight","FixedSize","FullWidth"];export{N as AlignCenter,T as AlignLeft,v as AlignRight,x as Default,z as FixedSize,y as FullWidth,ye as __namedExportsOrder,ze as default};
//# sourceMappingURL=Table.stories-19064946.js.map
