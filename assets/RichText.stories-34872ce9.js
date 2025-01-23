import{j as e,c as h}from"./clsx-24df0f47.js";import{L as q,a as O,c as A}from"./Link-7508f8f1.js";import{L as j}from"./List-52f92def.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-cdc8c2c6.js";const I=({level:t,children:a})=>{const c=t==="header-three"?"zep-typography-headlineSM-fluid-cqi zep-mb-1":"zep-typography-headlineMD-fluid-cqi zep-mb-2";return t==="header-three"?e.jsxDEV("h3",{className:h(c),children:a},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:18,columnNumber:5},globalThis):e.jsxDEV("h4",{className:h(c),children:a},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:20,columnNumber:5},globalThis)},F=({children:t})=>e.jsxDEV("p",{className:"zep-mb-2",children:t},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:26,columnNumber:3},globalThis),U=({ordered:t,items:a})=>e.jsxDEV(j,{className:"zep-mb-2",type:t?"numeric":"bullet",children:a.map((c,n)=>e.jsxDEV(j.Item,{children:c},n,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:33,columnNumber:7},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:31,columnNumber:3},globalThis),b=({content:t,children:a,textColor:c})=>{const n=c==="white"?"!zep-text-typography-light-100":c==="black"?"!zep-text-typography-dark-100":"zep-text-indigo-500",w=(m,r,D)=>{const{type:N,text:v,inlineStyleRanges:z=[],entityRanges:V=[],items:L=[],ordered:C}=m,y=(s,i,d,l="style")=>{let o=[],p=0;return i.forEach(({offset:u,length:T,style:_,key:f})=>{u>p&&o.push({text:s.slice(p,u),style:null,url:null});const M=s.slice(u,u+T),B=l==="style"&&_||null,P=l==="entity"&&f!==void 0&&d?d[f].data.url:null;o.push({text:M,style:B,url:P}),p=u+T}),p<s.length&&o.push({text:s.slice(p),style:null,url:null}),o},k=y(v||"",V,D,"entity").flatMap((s,i)=>s.url?e.jsxDEV(e.Fragment,{children:e.jsxDEV(q,{href:s.url,as:"span",hasIcon:!1,label:s.text,mode:O.Inline,target:A.Blank},i,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:76,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:75,columnNumber:11},globalThis):y(s.text,z,void 0,"style").map((l,o)=>l.style==="BOLD"?e.jsxDEV("span",{className:"zep-typography-bodyStrong",children:l.text},i+"-"+o,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:92,columnNumber:13},globalThis):l.style==="ITALIC"?e.jsxDEV("span",{className:"zep-italic",children:l.text},i+"-"+o,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:98,columnNumber:13},globalThis):e.jsxDEV("span",{children:l.text},i+"-"+o,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:103,columnNumber:16},globalThis))),g=e.jsxDEV("span",{className:h(n),children:k.map((s,i)=>e.jsxDEV("span",{children:s},`${r}-${i}`,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:111,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:109,columnNumber:7},globalThis);switch(N){case"header-three":case"header-four":return e.jsxDEV(I,{className:h(n,"zep-font-500"),level:N,children:g},r,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:120,columnNumber:11},globalThis);case"unstyled":return e.jsxDEV(F,{className:n,children:g},r,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:126,columnNumber:11},globalThis);case"list":return e.jsxDEV(U,{className:n,ordered:!!C,items:L},r,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:131,columnNumber:16},globalThis);default:return null}};return e.jsxDEV("div",{className:h(n,"zep-container","md:zep-w-[944px]","zep-mx-auto"),"data-testid":"zep-richtext",children:[t.blocks.map((m,r)=>w(m,r,t.entityMap)),t.images.map((m,r)=>e.jsxDEV("div",{children:e.jsxDEV("img",{className:"zep-h-auto zep-max-w-full zep-mb-1",src:m.src,alt:m.alt},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:145,columnNumber:11},globalThis)},r,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:144,columnNumber:9},globalThis)),a]},void 0,!0,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:138,columnNumber:5},globalThis)};try{b.displayName="RichText",b.__docgenInfo={description:"",displayName:"RichText",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"Content"}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'},{value:'"indigo"'}]}}}}}catch{}const Y={title:"PowerSystems Components/RichText",component:b,tags:["autodocs"],argTypes:{textColor:{control:{type:"radio",options:["indigo","white","black"]}}}},$={blocks:[{type:"header-three",depth:0,text:"Li Europan lingues tot Europa",inlineStyleRanges:[],entityRanges:[],items:[],ordered:!1},{type:"header-four",depth:0,text:"Li Europan lingues",inlineStyleRanges:[],entityRanges:[],items:[],ordered:!1},{type:"unstyled",depth:0,text:"existent ae tareie eun myth Por ie ntiemusic sport etc, tot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular",inlineStyleRanges:[{offset:12,length:10,style:"BOLD"}],entityRanges:[{offset:12,length:10,key:0}],items:[],ordered:!1},{type:"list",ordered:!0,items:["First ordered item","Second ordered item","Third ordered item"],depth:0,text:"",inlineStyleRanges:[],entityRanges:[]},{type:"list",ordered:!1,items:["On refusa continuar payar custosi traductores.","pronunciation e plu commun paroles payar custosi traductores.","At solmen va esser grammatica, pronunciation e plu commun paroles."],depth:0,text:"",inlineStyleRanges:[],entityRanges:[]}],entityMap:{0:{type:"LINK",mutability:"MUTABLE",data:{url:"https://www.google.com"}}},images:[]},x={args:{textColor:"indigo",content:$,children:e.jsxDEV("p",{className:"zep-mb-1",children:"This is Custom"},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.stories.tsx",lineNumber:104,columnNumber:15},globalThis)}};var R,S,E;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    textColor: 'indigo',
    content: sampleContent,
    children: <p className="zep-mb-1">This is Custom</p>
  } as RichTextProps
}`,...(E=(S=x.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const Z=["Default"];export{x as Default,Z as __namedExportsOrder,Y as default};
