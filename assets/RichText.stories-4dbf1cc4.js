import{j as e,c as h}from"./clsx-42c82d7d.js";import{L as A,a as B,c as I}from"./Link-6b517339.js";import{L as j}from"./List-efcf6cde.js";import"./index-39946eba.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-2989345e.js";const P=({level:t,children:n})=>{const o=t==="header-three"?"zep-typography-headlineSM-fluid-cqi zep-mb-1":"zep-typography-headlineMD-fluid-cqi zep-mb-2";return t==="header-three"?e.jsxDEV("h3",{className:h(o),children:n},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:18,columnNumber:5},globalThis):e.jsxDEV("h4",{className:h(o),children:n},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:20,columnNumber:5},globalThis)},F=({children:t})=>e.jsxDEV("p",{className:"zep-mb-2",children:t},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:26,columnNumber:3},globalThis),U=({ordered:t,items:n})=>e.jsxDEV(j,{className:"zep-mb-2",type:t?"numeric":"bullet",children:n.map((o,a)=>e.jsxDEV(j.Item,{children:o},a,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:33,columnNumber:7},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:31,columnNumber:3},globalThis),b=({content:t,children:n,textColor:o})=>{const a=o==="white"?"!zep-text-typography-light-100":o==="black"?"!zep-text-typography-dark-100":"zep-text-indigo-500",w=(m,i,v)=>{const{type:g,text:D,inlineStyleRanges:z=[],entityRanges:V=[],items:L=[],ordered:C}=m,y=(s,r,d,l="style")=>{let c=[],p=0;return r.forEach(({offset:u,length:T,style:_,key:f})=>{u>p&&c.push({text:s.slice(p,u),style:null,url:null});const q=s.slice(u,u+T),M=l==="style"&&_||null,O=l==="entity"&&f!==void 0&&d?d[f].data.url:null;c.push({text:q,style:M,url:O}),p=u+T}),p<s.length&&c.push({text:s.slice(p),style:null,url:null}),c},k=y(D||"",V,v,"entity").flatMap((s,r)=>s.url?e.jsxDEV(e.Fragment,{children:e.jsxDEV(A,{href:s.url,as:"span",hasIcon:!1,label:s.text,mode:B.Inline,target:I.Blank},r,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:76,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:75,columnNumber:11},globalThis):y(s.text,z,void 0,"style").map((l,c)=>l.style==="BOLD"?e.jsxDEV("span",{className:"zep-typography-bodyStrong",children:l.text},r+"-"+c,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:92,columnNumber:13},globalThis):l.style==="ITALIC"?e.jsxDEV("span",{className:"zep-italic",children:l.text},r+"-"+c,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:98,columnNumber:13},globalThis):e.jsxDEV("span",{children:l.text},r+"-"+c,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:103,columnNumber:16},globalThis))),N=e.jsxDEV("span",{className:h(a),children:k.map((s,r)=>e.jsxDEV("span",{children:s},`${i}-${r}`,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:111,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:109,columnNumber:7},globalThis);switch(g){case"header-three":case"header-four":return e.jsxDEV(P,{className:h(a,"zep-font-500"),level:g,children:N},i,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:120,columnNumber:11},globalThis);case"unstyled":return e.jsxDEV(F,{className:a,children:N},i,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:126,columnNumber:11},globalThis);case"list":return e.jsxDEV(U,{className:a,ordered:!!C,items:L},i,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:131,columnNumber:16},globalThis);default:return null}};return e.jsxDEV("div",{className:h(a,"zep-container","md:zep-w-[944px]","zep-mx-auto"),"data-testid":"zep-richtext",children:[t.blocks.map((m,i)=>w(m,i,t.entityMap)),t.images.map((m,i)=>e.jsxDEV("div",{children:e.jsxDEV("img",{className:"zep-h-auto zep-max-w-full zep-mb-1",src:m.src,alt:m.alt},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:145,columnNumber:11},globalThis)},i,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:144,columnNumber:9},globalThis)),n]},void 0,!0,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.tsx",lineNumber:138,columnNumber:5},globalThis)};try{b.displayName="RichText",b.__docgenInfo={description:"",displayName:"RichText",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"Content"}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'},{value:'"indigo"'}]}}}}}catch{}const Y={title:"PowerSystems Components/RichText",component:b,tags:["autodocs"],argTypes:{textColor:{control:{type:"radio",options:["indigo","white","black"]}}}},$={blocks:[{type:"header-three",depth:0,text:"Li Europan lingues tot Europa",inlineStyleRanges:[],entityRanges:[]},{type:"header-four",depth:0,text:"Li Europan lingues",inlineStyleRanges:[],entityRanges:[]},{type:"unstyled",depth:0,text:"existent ae tareie eun myth Por ie ntiemusic sport etc, tot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular",inlineStyleRanges:[{offset:12,length:10,style:"BOLD"}],entityRanges:[{offset:12,length:10,key:0}]},{type:"list",ordered:!0,items:["First ordered item","Second ordered item","Third ordered item"]},{type:"list",ordered:!1,items:["On refusa continuar payar custosi traductores.","pronunciation e plu commun paroles payar custosi traductores.","At solmen va esser grammatica, pronunciation e plu commun paroles."]}],entityMap:{0:{type:"LINK",mutability:"MUTABLE",data:{url:"https://www.google.com"}}},images:[{src:"https://via.placeholder.com/600x400",alt:"Example Image",width:"600px",height:"400px"}],unstyled:[{type:"unstyled",depth:0,text:"Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic. Li franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental; in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.",inlineStyleRanges:[],entityRanges:[]}]},x={args:{textColor:"indigo",content:$,children:e.jsxDEV("p",{className:"zep-mb-1",children:"This is Custom"},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/richText/RichText.stories.tsx",lineNumber:84,columnNumber:15},globalThis)}};var R,E,S;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: ({
    textColor: 'indigo',
    content: sampleContent,
    children: <p className="zep-mb-1">This is Custom</p>
  } as RichTextProps)
}`,...(S=(E=x.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const Z=["Default"];export{x as Default,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=RichText.stories-4dbf1cc4.js.map
