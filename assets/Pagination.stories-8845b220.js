import{j as r,c as g}from"./clsx-24df0f47.js";import{w as G,u as o,e as l}from"./index-f872ea10.js";import{r as k}from"./index-b1e7e93e.js";import{B as I,a as C}from"./Button-a2db044f.js";import"./_commonjsHelpers-de833af9.js";import"./index-03bbf7d1.js";import"./_baseIsEqual-cf90f23b.js";import"./index-356e4a49.js";import"./index-b7fee60d.js";import"./Icon-cdc8c2c6.js";import"./tw-merge-1166cefb.js";import"./Spacing-5b776e96.js";const N=({children:t,active:e,disabled:n,Comp:a="a",...u})=>r.jsxDEV(a,{className:g("zep-no-underline","sm:zep-p-0.5","zep-p-0.25","zep-w-2.5","zep-h-2.5","sm:zep-w-3","sm:zep-h-3","zep-cursor-pointer","zep-typography-link","zep-text-typography-dark-70/70",{"zep-border-b-2 zep-text-neutral-800":e,"zep-cursor-not-allowed zep-pointer-events-none":n,"hover:zep-border-b-1 zep-box-border zep-text-neutral-800":!e}),"aria-current":e?"page":void 0,...u,children:r.jsxDEV("span",{className:g("zep-w-2","zep-h-2","zep-leading-2","zep-flex","zep-items-center","zep-justify-center",{"zep-text-typography-dark-100":e,"zep-text-typography-dark-40/40":n}),children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/pageLink.tsx",lineNumber:33,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/pageLink.tsx",lineNumber:12,columnNumber:5},globalThis);try{N.displayName="PageLink",N.__docgenInfo={description:"",displayName:"PageLink",props:{Comp:{defaultValue:{value:"a"},description:"",name:"Comp",required:!1,type:{name:"any"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const O=(t,e,n)=>{const a=[];if(e<=n)for(let u=1;u<=e;u++)a.push(u);else{const p=n-3,m=p/2;if(t-1<m||e-t<m){for(let i=1;i<=m+1;i++)a.push(i);a.push(NaN);for(let i=e-m;i<=e;i++)a.push(i)}else if(t-1>=p&&e-t>=p){const i=m-1;a.push(1),a.push(NaN);for(let v=t-i;v<=t+i;v++)a.push(v);a.push(NaN),a.push(e)}else{const i=t-1<e-t;let v=n;if(i){for(let c=1;c<=t+1;c++)a.push(c),v-=1;a.push(NaN),v-=1;for(let c=e-(v-1);c<=e;c++)a.push(c)}else{for(let c=e;c>=t-1;c--)a.unshift(c),v-=1;a.unshift(NaN),v-=1;for(let c=v;c>=1;c--)a.unshift(c)}}}return a},R=()=>{const t=()=>window.innerWidth<=768?5:7,[e,n]=k.useState(t);return k.useEffect(()=>{const a=()=>n(t);return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]),{maxPageLength:e}},B=({Comp:t,currentPage:e,itemsPerPage:n,setCurrentPage:a,totalElements:u})=>{const{maxPageLength:f}=R(),p=k.useMemo(()=>Math.ceil(u/n),[n,u]),m=O(e,p,f);return r.jsxDEV("div",{className:g("zep-flex","zep-flex-col","sm:zep-gap-1.5","zep-gap-0.5","zep-items-center","zep-text-center"),"data-testid":"zep-pagination",children:[r.jsxDEV("div",{className:g("zep-flex","zep-gap-0.5"),children:[r.jsxDEV(I,{className:"zep-text-typography-dark-70/70",disabled:e===1,icon:"arrow-long-left",onClick:()=>a(e-1),variant:C.DarkTertiary},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:108,columnNumber:9},globalThis),m.map((i,v)=>r.jsxDEV(N,{Comp:t,active:e===i,disabled:isNaN(i),onClick:()=>a(i),children:isNaN(i)?"...":i},v,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:110,columnNumber:11},globalThis)),r.jsxDEV(I,{className:"zep-text-typography-dark-70/70",disabled:e===p,icon:"arrow-long-right",onClick:()=>a(e+1),variant:C.DarkTertiary},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:120,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:107,columnNumber:7},globalThis),r.jsxDEV("ul",{className:g("zep-flex ","zep-gap-0.25"),children:[r.jsxDEV("li",{children:n*e-n+1},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:123,columnNumber:9},globalThis),r.jsxDEV("li",{children:"-"},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:124,columnNumber:9},globalThis),r.jsxDEV("li",{children:Math.min(n*e,u)},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:125,columnNumber:9},globalThis),r.jsxDEV("li",{children:"von"},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:126,columnNumber:9},globalThis),r.jsxDEV("li",{children:u},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:127,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:122,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:97,columnNumber:5},globalThis)};try{B.displayName="Pagination",B.__docgenInfo={description:"",displayName:"Pagination",props:{Comp:{defaultValue:null,description:"",name:"Comp",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"title"'},{value:'"style"'},{value:'"clipPath"'},{value:'"filter"'},{value:'"mask"'},{value:'"path"'},{value:'"stop"'},{value:'"table"'},{value:'"link"'},{value:'"time"'},{value:'"search"'},{value:'"img"'},{value:'"menu"'},{value:'"dialog"'},{value:'"text"'},{value:'"label"'},{value:'"form"'},{value:'"pattern"'},{value:'"slot"'},{value:'"button"'},{value:'"image"'},{value:'"article"'},{value:'"figure"'},{value:'"main"'},{value:'"menuitem"'},{value:'"option"'},{value:'"switch"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},totalElements:{defaultValue:null,description:"",name:"totalElements",required:!0,type:{name:"number"}}}}}catch{}const ie={title:"Components/Pagination",component:B,tags:["autodocs"],argTypes:{},decorators:[t=>{const[e,n]=k.useState(1);return r.jsxDEV(t,{currentPage:e,setCurrentPage:n},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.stories.tsx",lineNumber:15,columnNumber:14},globalThis)}]},d={setCurrentPage:()=>console.log("page changed"),currentPage:1,itemsPerPage:10,totalElements:160},x=(t,e)=>{const{currentPage:n,setCurrentPage:a}=e,{totalElements:u,itemsPerPage:f,Comp:p}=t;return r.jsxDEV("div",{className:"zep-text-center zep-inline-block",children:r.jsxDEV(B,{Comp:p,currentPage:n,itemsPerPage:f,setCurrentPage:a,totalElements:u},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.stories.tsx",lineNumber:35,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.stories.tsx",lineNumber:34,columnNumber:5},globalThis)},T={args:{...d},render:(t,e)=>x(t,e)},y={args:{...d,totalElements:20},render:(t,e)=>x(t,e)},h={args:{...d,totalElements:20},render:(t,e)=>x(t,e)},w={args:{...d,totalElements:192},render:(t,e)=>x(t,e)},s="zep-pagination",b={args:{...d,Comp:"button"},render:(t,e)=>x(t,e),play:async({canvasElement:t})=>{const e=G(t);await o.click(e.getByText("2")),await l(e.getByTestId(s)).toHaveTextContent("11-20von160"),await o.click(e.getByText("3")),await l(e.getByTestId(s)).toHaveTextContent("21-30von160"),await o.click(e.getByText("4")),await l(e.getByTestId(s)).toHaveTextContent("31-40von160"),await o.click(e.getByText("5")),await l(e.getByTestId(s)).toHaveTextContent("41-50von160"),await o.click(e.getByText("6")),await l(e.getByTestId(s)).toHaveTextContent("51-60von160"),await o.click(e.getByText("7")),await l(e.getByTestId(s)).toHaveTextContent("61-70von160"),await o.click(e.getByText("8")),await l(e.getByTestId(s)).toHaveTextContent("71-80von160"),await o.click(e.getByText("9")),await l(e.getByTestId(s)).toHaveTextContent("81-90von160"),await o.click(e.getByText("10")),await l(e.getByTestId(s)).toHaveTextContent("91-100von160"),await o.click(e.getByText("9")),await l(e.getByTestId(s)).toHaveTextContent("81-90von160"),await o.click(e.getByText("8")),await l(e.getByTestId(s)).toHaveTextContent("71-80von160"),await o.click(e.getByText("7")),await l(e.getByTestId(s)).toHaveTextContent("61-70von160"),await o.click(e.getByText("6")),await l(e.getByTestId(s)).toHaveTextContent("51-60von160"),await o.click(e.getByText("5")),await l(e.getByTestId(s)).toHaveTextContent("41-50von160"),await o.click(e.getByText("4")),await l(e.getByTestId(s)).toHaveTextContent("31-40von160"),await o.click(e.getByText("3")),await l(e.getByTestId(s)).toHaveTextContent("21-30von160"),await o.click(e.getByText("2")),await l(e.getByTestId(s)).toHaveTextContent("11-20von160"),await o.click(e.getByText("1")),await l(e.getByTestId(s)).toHaveTextContent("1-10von160")}};var E,P,z;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  render: (args, context) => defaultStory(args, context)
}`,...(z=(P=T.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var j,L,H;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    totalElements: 20
  },
  render: (args, context) => defaultStory(args, context)
}`,...(H=(L=y.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var D,V,_;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    totalElements: 20
  },
  render: (args, context) => defaultStory(args, context)
}`,...(_=(V=h.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var S,M,q;w.parameters={...w.parameters,docs:{...(S=w.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    totalElements: 192
  },
  render: (args, context) => defaultStory(args, context)
}`,...(q=(M=w.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var A,W,F;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    Comp: 'button'
  },
  render: (args, context) => defaultStory(args, context),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('2'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('11-20von160');
    await userEvent.click(canvas.getByText('3'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('21-30von160');
    await userEvent.click(canvas.getByText('4'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('31-40von160');
    await userEvent.click(canvas.getByText('5'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('41-50von160');
    await userEvent.click(canvas.getByText('6'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('51-60von160');
    await userEvent.click(canvas.getByText('7'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('61-70von160');
    await userEvent.click(canvas.getByText('8'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('71-80von160');
    await userEvent.click(canvas.getByText('9'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('81-90von160');
    await userEvent.click(canvas.getByText('10'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('91-100von160');
    await userEvent.click(canvas.getByText('9'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('81-90von160');
    await userEvent.click(canvas.getByText('8'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('71-80von160');
    await userEvent.click(canvas.getByText('7'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('61-70von160');
    await userEvent.click(canvas.getByText('6'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('51-60von160');
    await userEvent.click(canvas.getByText('5'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('41-50von160');
    await userEvent.click(canvas.getByText('4'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('31-40von160');
    await userEvent.click(canvas.getByText('3'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('21-30von160');
    await userEvent.click(canvas.getByText('2'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('11-20von160');
    await userEvent.click(canvas.getByText('1'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('1-10von160');
  }
}`,...(F=(W=b.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const oe=["Default","With1Page","With2Pages","With12Pages","AsButtonPageLinks"];export{b as AsButtonPageLinks,T as Default,w as With12Pages,y as With1Page,h as With2Pages,oe as __namedExportsOrder,ie as default};
