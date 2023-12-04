import{j as e,c as p}from"./clsx-42c82d7d.js";import{r as A}from"./index-39946eba.js";import{B as j,a as w}from"./Button-f4da1763.js";import"./_commonjsHelpers-de833af9.js";import"./Spacing-87985a96.js";import"./Icon-49974f9a.js";import"./tw-merge-1166cefb.js";const v=({children:l,className:a,maxWidth:o,maxHeight:r,fullWidth:u,...Z})=>(A.useEffect(()=>{console.log("Table")},[]),e.jsxDEV("div",{className:p("zep-overflow-scroll zep-w-full sm:zep-w-auto",a,{"sm:zep-w-full":u}),style:{maxWidth:o,maxHeight:r},children:e.jsxDEV("table",{className:p("zep-table zep-w-full sm:zep-w-auto",{"sm:zep-w-full":u}),...Z,children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:20,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.tsx",lineNumber:11,columnNumber:5},globalThis));try{v.displayName="Table",v.__docgenInfo={description:"",displayName:"Table",props:{maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const t=({children:l,...a})=>e.jsxDEV("tbody",{...a,children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/table/TableBody.tsx",lineNumber:4,columnNumber:10},globalThis);try{t.displayName="TableBody",t.__docgenInfo={description:"",displayName:"TableBody",props:{}}}catch{}const n=({children:l,className:a,...o})=>e.jsxDEV("thead",{className:p("zep-hidden sm:zep-table-row-group",a),...o,children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/table/TableHead.tsx",lineNumber:7,columnNumber:5},globalThis);try{n.displayName="TableHead",n.__docgenInfo={description:"",displayName:"TableHead",props:{}}}catch{}const m=({children:l,className:a,align:o="left",dataLabel:r,...u})=>e.jsxDEV("td",{className:p("zep-flex zep-justify-between sm:zep-table-cell zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 zep-bg-greyscale-0 sm:zep-whitespace-nowrap zep-group",a),style:{textAlign:o},...u,children:[r&&e.jsxDEV(e.Fragment,{children:[e.jsxDEV("span",{className:"zep-text-left zep-inline-block sm:zep-hidden sm:zep-py-0.5 zep-w-full zep-typography-bodyStrong zep-text-typography-dark-100",children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/table/TableCell.tsx",lineNumber:18,columnNumber:11},globalThis),e.jsxDEV("hr",{className:"zep-hidden group-first:zep-block sm:group-first:zep-hidden zep-absolute zep-border-t-2 zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-900"},void 0,!1,{fileName:"/home/circleci/project/src/components/table/TableCell.tsx",lineNumber:21,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/TableCell.tsx",lineNumber:17,columnNumber:9},globalThis),e.jsxDEV("span",{className:"zep-text-right sm:zep-text-unset zep-inline-block sm:zep-py-0.5 zep-w-full zep-typography-bodyText zep-text-typography-dark-100",children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/table/TableCell.tsx",lineNumber:24,columnNumber:7},globalThis),e.jsxDEV("hr",{className:"group-first:zep-hidden sm:group-first:zep-block zep-absolute zep-h-[1px] zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-400"},void 0,!1,{fileName:"/home/circleci/project/src/components/table/TableCell.tsx",lineNumber:27,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/TableCell.tsx",lineNumber:6,columnNumber:5},globalThis);try{m.displayName="TableCell",m.__docgenInfo={description:"",displayName:"TableCell",props:{align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},dataLabel:{defaultValue:null,description:"",name:"dataLabel",required:!1,type:{name:"string"}}}}}catch{}const b=({children:l,className:a,align:o="left",...r})=>e.jsxDEV("th",{className:p("zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 zep-bg-greyscale-0 sm:zep-whitespace-nowrap",a),style:{textAlign:o},...r,children:[e.jsxDEV("span",{className:"zep-inline-block sm:zep-py-0.5 zep-w-full zep-typography-bodyStrong zep-text-typography-dark-100",children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/table/TableHeadCell.tsx",lineNumber:16,columnNumber:7},globalThis),e.jsxDEV("hr",{className:"zep-absolute zep-border-t-2 zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-900"},void 0,!1,{fileName:"/home/circleci/project/src/components/table/TableHeadCell.tsx",lineNumber:19,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/TableHeadCell.tsx",lineNumber:6,columnNumber:5},globalThis);try{b.displayName="TableHeadCell",b.__docgenInfo={description:"",displayName:"TableHeadCell",props:{align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}}}}}catch{}const s=({children:l,className:a,...o})=>e.jsxDEV("tr",{className:p("zep-flex zep-flex-col zep-mb-2 sm:zep-table-row sm:zep-sm-[0px]",a),...o,children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/table/TableRow.tsx",lineNumber:7,columnNumber:5},globalThis);try{s.displayName="TableRow",s.__docgenInfo={description:"",displayName:"TableRow",props:{}}}catch{}const U={title:"Components/Table",component:v,tags:["autodocs"],argTypes:{children:{control:{disable:!0}}},parameters:{a11y:{disable:!0}}},c=["300.9D*",e.jsxDEV(j,{variant:w.LightTertiary,children:e.jsxDEV("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"zep-inline-block",children:e.jsxDEV("path",{d:"M13.7886 10.8333C14.4136 10.8333 14.9636 10.4917 15.2469 9.975L18.2302 4.56666C18.5386 4.01666 18.1386 3.33333 17.5052 3.33333H5.17191L4.38857 1.66666H1.66357V3.33333H3.33024L6.33024 9.65833L5.20524 11.6917C4.59691 12.8083 5.39691 14.1667 6.66357 14.1667H16.6636V12.5H6.66357L7.58024 10.8333H13.7886ZM5.96357 5H16.0886L13.7886 9.16666H7.93857L5.96357 5ZM6.66357 15C5.74691 15 5.00524 15.75 5.00524 16.6667C5.00524 17.5833 5.74691 18.3333 6.66357 18.3333C7.58024 18.3333 8.33024 17.5833 8.33024 16.6667C8.33024 15.75 7.58024 15 6.66357 15ZM14.9969 15C14.0802 15 13.3386 15.75 13.3386 16.6667C13.3386 17.5833 14.0802 18.3333 14.9969 18.3333C15.9136 18.3333 16.6636 17.5833 16.6636 16.6667C16.6636 15.75 15.9136 15 14.9969 15Z",fill:"#262626"},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:29,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:28,columnNumber:5},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:27,columnNumber:27},globalThis),"13,7 kW (18,6 PS)","1,7 / 3,1 m","0,03 m³","985 kg",e.jsxDEV(j,{variant:w.LightTertiary,children:e.jsxDEV("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"zep-inline",children:e.jsxDEV("path",{d:"M15.194 9.81663C15.2273 9.54996 15.2523 9.28329 15.2523 8.99996C15.2523 8.71663 15.2273 8.44996 15.194 8.18329L16.9523 6.80829C17.1106 6.68329 17.1523 6.45829 17.0523 6.27496L15.3856 3.39163C15.3106 3.25829 15.169 3.18329 15.019 3.18329C14.969 3.18329 14.919 3.19163 14.8773 3.20829L12.8023 4.04163C12.369 3.70829 11.9023 3.43329 11.394 3.22496L11.0773 1.01663C11.0523 0.816626 10.8773 0.666626 10.669 0.666626H7.33564C7.12731 0.666626 6.95231 0.816626 6.92731 1.01663L6.61064 3.22496C6.10231 3.43329 5.63564 3.71663 5.20231 4.04163L3.12731 3.20829C3.07731 3.19163 3.02731 3.18329 2.97731 3.18329C2.83564 3.18329 2.69397 3.25829 2.61897 3.39163L0.952308 6.27496C0.843974 6.45829 0.893974 6.68329 1.05231 6.80829L2.81064 8.18329C2.77731 8.44996 2.75231 8.72496 2.75231 8.99996C2.75231 9.27496 2.77731 9.54996 2.81064 9.81663L1.05231 11.1916C0.893974 11.3166 0.852308 11.5416 0.952308 11.725L2.61897 14.6083C2.69397 14.7416 2.83564 14.8166 2.98564 14.8166C3.03564 14.8166 3.08564 14.8083 3.12731 14.7916L5.20231 13.9583C5.63564 14.2916 6.10231 14.5666 6.61064 14.775L6.92731 16.9833C6.95231 17.1833 7.12731 17.3333 7.33564 17.3333H10.669C10.8773 17.3333 11.0523 17.1833 11.0773 16.9833L11.394 14.775C11.9023 14.5666 12.369 14.2833 12.8023 13.9583L14.8773 14.7916C14.9273 14.8083 14.9773 14.8166 15.0273 14.8166C15.169 14.8166 15.3106 14.7416 15.3856 14.6083L17.0523 11.725C17.1523 11.5416 17.1106 11.3166 16.9523 11.1916L15.194 9.81663ZM13.544 8.39163C13.5773 8.64996 13.5856 8.82496 13.5856 8.99996C13.5856 9.17496 13.569 9.35829 13.544 9.60829L13.4273 10.55L14.169 11.1333L15.069 11.8333L14.4856 12.8416L13.4273 12.4166L12.5606 12.0666L11.8106 12.6333C11.4523 12.9 11.1106 13.1 10.769 13.2416L9.88564 13.6L9.75231 14.5416L9.58564 15.6666H8.41897L8.12731 13.6L7.24397 13.2416C6.88564 13.0916 6.55231 12.9 6.21897 12.65L5.46064 12.0666L4.57731 12.425L3.51897 12.85L2.93564 11.8416L3.83564 11.1416L4.57731 10.5583L4.46064 9.61663C4.43564 9.35829 4.41897 9.16663 4.41897 8.99996C4.41897 8.83329 4.43564 8.64163 4.46064 8.39163L4.57731 7.44996L3.83564 6.86663L2.93564 6.16663L3.51897 5.15829L4.57731 5.58329L5.44397 5.93329L6.19397 5.36663C6.55231 5.09996 6.89397 4.89996 7.23564 4.75829L8.11897 4.39996L8.25231 3.45829L8.41897 2.33329H9.57731L9.86897 4.39996L10.7523 4.75829C11.1106 4.90829 11.444 5.09996 11.7773 5.34996L12.5356 5.93329L13.419 5.57496L14.4773 5.14996L15.0606 6.15829L14.169 6.86663L13.4273 7.44996L13.544 8.39163ZM9.00231 5.66663C7.16064 5.66663 5.66897 7.15829 5.66897 8.99996C5.66897 10.8416 7.16064 12.3333 9.00231 12.3333C10.844 12.3333 12.3356 10.8416 12.3356 8.99996C12.3356 7.15829 10.844 5.66663 9.00231 5.66663ZM9.00231 10.6666C8.08564 10.6666 7.33564 9.91663 7.33564 8.99996C7.33564 8.08329 8.08564 7.33329 9.00231 7.33329C9.91897 7.33329 10.669 8.08329 10.669 8.99996C10.669 9.91663 9.91897 10.6666 9.00231 10.6666Z",fill:"#262626"},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:33,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:32,columnNumber:5},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:31,columnNumber:71},globalThis),e.jsxDEV(j,{variant:w.LightTertiary,children:e.jsxDEV("svg",{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"zep-inline",children:e.jsxDEV("path",{d:"M11.6667 10.5V13H1.66667V10.5H0V13C0 13.9167 0.75 14.6667 1.66667 14.6667H11.6667C12.5833 14.6667 13.3333 13.9167 13.3333 13V10.5H11.6667ZM10.8333 7.16671L9.65833 5.99171L7.5 8.14171V1.33337H5.83333V8.14171L3.675 5.99171L2.5 7.16671L6.66667 11.3334L10.8333 7.16671Z",fill:"#262626"},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:37,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:36,columnNumber:5},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:35,columnNumber:14},globalThis)],d=[c,c,c,c,c,c,c,c,c,c],i=["Typ","Shop","Motorleistung","max. Grabtiefe/ max. Reichweite","Löffelvolumen","Einsatzgewicht","Konfigurator","Datenblatt Download"],h={args:{children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(n,{children:e.jsxDEV(s,{children:i.map((l,a)=>e.jsxDEV(b,{children:l},`table-default-head-cell-${a}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:47,columnNumber:42},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:46,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:45,columnNumber:9},globalThis),e.jsxDEV(t,{children:d.map((l,a)=>e.jsxDEV(s,{children:l.map((o,r)=>e.jsxDEV(m,{dataLabel:i[r],children:o},`table-default-cell-${a}-${r}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:53,columnNumber:44},globalThis))},`table-default-row-${a}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:52,columnNumber:42},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:51,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:44,columnNumber:15},globalThis)}},T={args:{children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(n,{children:e.jsxDEV(s,{children:i.map((l,a)=>e.jsxDEV(b,{align:"left",children:l},`table-align-left-head-cell-${a}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:66,columnNumber:42},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:65,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:64,columnNumber:9},globalThis),e.jsxDEV(t,{children:d.map((l,a)=>e.jsxDEV(s,{children:l.map((o,r)=>e.jsxDEV(m,{align:"left",dataLabel:i[r],children:o},`table-align-left-cell-${a}-${r}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:74,columnNumber:44},globalThis))},`table-align-left-row-${a}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:73,columnNumber:42},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:72,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:63,columnNumber:15},globalThis)}},N={args:{children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(n,{children:e.jsxDEV(s,{children:i.map((l,a)=>e.jsxDEV(b,{align:"center",children:l},`table-align-center-head-cell-${a}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:87,columnNumber:42},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:86,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:85,columnNumber:9},globalThis),e.jsxDEV(t,{children:d.map((l,a)=>e.jsxDEV(s,{children:l.map((o,r)=>e.jsxDEV(m,{align:"center",dataLabel:i[r],children:o},`table-align-center-cell-${a}-${r}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:95,columnNumber:44},globalThis))},`table-align-center-row-${a}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:94,columnNumber:42},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:93,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:84,columnNumber:15},globalThis)}},f={args:{children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(n,{children:e.jsxDEV(s,{children:i.map((l,a)=>e.jsxDEV(b,{align:"right",children:l},`table-align-right-head-cell-${a}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:108,columnNumber:42},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:107,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:106,columnNumber:9},globalThis),e.jsxDEV(t,{children:d.map((l,a)=>e.jsxDEV(s,{children:l.map((o,r)=>e.jsxDEV(m,{align:"right",dataLabel:i[r],children:o},`table-align-right-cell-${a}-${r}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:116,columnNumber:44},globalThis))},`table-align-right-row-${a}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:115,columnNumber:42},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:114,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:105,columnNumber:15},globalThis)}},x={args:{maxWidth:700,maxHeight:500,children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(n,{children:e.jsxDEV(s,{children:i.map((l,a)=>e.jsxDEV(b,{children:l},`table-fixed-size-head-cell-${a}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:131,columnNumber:42},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:130,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:129,columnNumber:9},globalThis),e.jsxDEV(t,{children:d.map((l,a)=>e.jsxDEV(s,{children:l.map((o,r)=>e.jsxDEV(m,{dataLabel:i[r],children:o},`table-fixed-size-cell-${a}-${r}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:137,columnNumber:44},globalThis))},`table-fixed-size-row-${a}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:136,columnNumber:42},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:135,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:128,columnNumber:15},globalThis)}},g={args:{fullWidth:!0,children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(n,{children:e.jsxDEV(s,{children:i.map((l,a)=>e.jsxDEV(b,{children:l},`table-full-width-head-cell-${a}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:151,columnNumber:42},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:150,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:149,columnNumber:9},globalThis),e.jsxDEV(t,{children:d.map((l,a)=>e.jsxDEV(s,{children:l.map((o,r)=>e.jsxDEV(m,{dataLabel:i[r],children:o},`table-full-width-cell-${a}-${r}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:157,columnNumber:44},globalThis))},`table-full-width-row-${a}`,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:156,columnNumber:42},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:155,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table/Table.stories.tsx",lineNumber:148,columnNumber:15},globalThis)}};var y,C,L;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: <>
        <TableHead>
          <TableRow>
            {heads.map((value, index) => <TableHeadCell key={\`table-default-head-cell-\${index}\`}>{value}</TableHeadCell>)}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((cells, rowIndex) => <TableRow key={\`table-default-row-\${rowIndex}\`}>
              {cells.map((value, index) => <TableCell key={\`table-default-cell-\${rowIndex}-\${index}\`} dataLabel={heads[index]}>
                  {value}
                </TableCell>)}
            </TableRow>)}
        </TableBody>
      </>
  }
}`,...(L=(C=h.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var z,V,D;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: <>
        <TableHead>
          <TableRow>
            {heads.map((value, index) => <TableHeadCell key={\`table-align-left-head-cell-\${index}\`} align="left">
                {value}
              </TableHeadCell>)}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((cells, rowIndex) => <TableRow key={\`table-align-left-row-\${rowIndex}\`}>
              {cells.map((value, index) => <TableCell key={\`table-align-left-cell-\${rowIndex}-\${index}\`} align="left" dataLabel={heads[index]}>
                  {value}
                </TableCell>)}
            </TableRow>)}
        </TableBody>
      </>
  }
}`,...(D=(V=T.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var E,H,_;N.parameters={...N.parameters,docs:{...(E=N.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: <>
        <TableHead>
          <TableRow>
            {heads.map((value, index) => <TableHeadCell key={\`table-align-center-head-cell-\${index}\`} align="center">
                {value}
              </TableHeadCell>)}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((cells, rowIndex) => <TableRow key={\`table-align-center-row-\${rowIndex}\`}>
              {cells.map((value, index) => <TableCell key={\`table-align-center-cell-\${rowIndex}-\${index}\`} align="center" dataLabel={heads[index]}>
                  {value}
                </TableCell>)}
            </TableRow>)}
        </TableBody>
      </>
  }
}`,...(_=(H=N.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var $,R,k;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: <>
        <TableHead>
          <TableRow>
            {heads.map((value, index) => <TableHeadCell key={\`table-align-right-head-cell-\${index}\`} align="right">
                {value}
              </TableHeadCell>)}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((cells, rowIndex) => <TableRow key={\`table-align-right-row-\${rowIndex}\`}>
              {cells.map((value, index) => <TableCell key={\`table-align-right-cell-\${rowIndex}-\${index}\`} align="right" dataLabel={heads[index]}>
                  {value}
                </TableCell>)}
            </TableRow>)}
        </TableBody>
      </>
  }
}`,...(k=(R=f.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var B,I,S;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    maxWidth: 700,
    maxHeight: 500,
    children: <>
        <TableHead>
          <TableRow>
            {heads.map((value, index) => <TableHeadCell key={\`table-fixed-size-head-cell-\${index}\`}>{value}</TableHeadCell>)}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((cells, rowIndex) => <TableRow key={\`table-fixed-size-row-\${rowIndex}\`}>
              {cells.map((value, index) => <TableCell key={\`table-fixed-size-cell-\${rowIndex}-\${index}\`} dataLabel={heads[index]}>
                  {value}
                </TableCell>)}
            </TableRow>)}
        </TableBody>
      </>
  }
}`,...(S=(I=x.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var F,M,W;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    children: <>
        <TableHead>
          <TableRow>
            {heads.map((value, index) => <TableHeadCell key={\`table-full-width-head-cell-\${index}\`}>{value}</TableHeadCell>)}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((cells, rowIndex) => <TableRow key={\`table-full-width-row-\${rowIndex}\`}>
              {cells.map((value, index) => <TableCell key={\`table-full-width-cell-\${rowIndex}-\${index}\`} dataLabel={heads[index]}>
                  {value}
                </TableCell>)}
            </TableRow>)}
        </TableBody>
      </>
  }
}`,...(W=(M=g.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};const X=["Default","AlignLeft","AlignCenter","AlignRight","FixedSize","FullWidth"];export{N as AlignCenter,T as AlignLeft,f as AlignRight,h as Default,x as FixedSize,g as FullWidth,X as __namedExportsOrder,U as default};
//# sourceMappingURL=Table.stories-226f9622.js.map
