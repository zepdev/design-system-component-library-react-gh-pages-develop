import{j as s,c as d}from"./clsx-24df0f47.js";import{w as G,u as i,e as o}from"./index-f872ea10.js";import{r as B}from"./index-b1e7e93e.js";import{B as P,a as I}from"./Button-14aec6b7.js";import"./_commonjsHelpers-de833af9.js";import"./index-03bbf7d1.js";import"./_baseIsEqual-cf90f23b.js";import"./index-356e4a49.js";import"./index-b7fee60d.js";import"./Icon-0193f610.js";import"./tw-merge-1166cefb.js";import"./Spacing-dbf33a94.js";const N=({children:t,active:e,disabled:r,Comp:a="a",...u})=>s.jsxDEV(a,{className:d("zep-no-underline","sm:zep-p-0.5","zep-p-0.25","zep-w-2.5","zep-h-2.5","sm:zep-w-3","sm:zep-h-3","zep-cursor-pointer","zep-typography-link","zep-text-typography-dark-70/70",{"zep-border-b-2 zep-text-neutral-800":e,"zep-cursor-not-allowed zep-pointer-events-none":r,"hover:zep-border-b-1 zep-box-border zep-text-neutral-800":!e}),"aria-current":e?"page":void 0,...u,children:s.jsxDEV("span",{className:d("zep-w-2","zep-h-2","zep-leading-2","zep-flex","zep-items-center","zep-justify-center",{"zep-text-typography-dark-100":e,"zep-text-typography-dark-40/40":r}),children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/pageLink.tsx",lineNumber:33,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/pageLink.tsx",lineNumber:12,columnNumber:5},globalThis);try{N.displayName="PageLink",N.__docgenInfo={description:"",displayName:"PageLink",props:{Comp:{defaultValue:{value:"a"},description:"",name:"Comp",required:!1,type:{name:"any"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const O=(t,e,r)=>{const a=[];if(e<=r)for(let u=1;u<=e;u++)a.push(u);else{const m=r-3,p=m/2;if(t-1<p||e-t<p){for(let n=1;n<=p+1;n++)a.push(n);a.push(NaN);for(let n=e-p;n<=e;n++)a.push(n)}else if(t-1>=m&&e-t>=m){const n=p-1;a.push(1),a.push(NaN);for(let v=t-n;v<=t+n;v++)a.push(v);a.push(NaN),a.push(e)}else{const n=t-1<e-t;let v=r;if(n){for(let c=1;c<=t+1;c++)a.push(c),v-=1;a.push(NaN),v-=1;for(let c=e-(v-1);c<=e;c++)a.push(c)}else{for(let c=e;c>=t-1;c--)a.unshift(c),v-=1;a.unshift(NaN),v-=1;for(let c=v;c>=1;c--)a.unshift(c)}}}return a},k=({Comp:t,currentPage:e,lastPage:r,maxPageLength:a,itemsPerPage:u,setCurrentPage:g,totalElements:m})=>{const p=O(e,r,a);return s.jsxDEV("div",{className:d("zep-flex","zep-flex-col","sm:zep-gap-1.5","zep-gap-0.5","zep-items-center","zep-text-center"),"data-testid":"zep-pagination",children:[s.jsxDEV("div",{className:d("zep-flex","zep-gap-0.5"),children:[s.jsxDEV(P,{className:"zep-text-typography-dark-70/70",disabled:e===1,icon:"arrow-long-left",onClick:()=>g(e-1),variant:I.DarkTertiary},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:92,columnNumber:9},globalThis),p.map((n,v)=>s.jsxDEV(N,{Comp:t,active:e===n,disabled:isNaN(n),onClick:()=>g(n),children:isNaN(n)?"...":n},v,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:94,columnNumber:11},globalThis)),s.jsxDEV(P,{className:"zep-text-typography-dark-70/70",disabled:e===r,icon:"arrow-long-right",onClick:()=>g(e+1),variant:I.DarkTertiary},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:104,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:91,columnNumber:7},globalThis),s.jsxDEV("ul",{className:d("zep-flex ","zep-gap-0.25"),children:[s.jsxDEV("li",{children:u*e-u+1},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:107,columnNumber:9},globalThis),s.jsxDEV("li",{children:"-"},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:108,columnNumber:9},globalThis),s.jsxDEV("li",{children:Math.min(u*e,m)},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:109,columnNumber:9},globalThis),s.jsxDEV("li",{children:"von"},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:110,columnNumber:9},globalThis),s.jsxDEV("li",{children:m},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:111,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:106,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:81,columnNumber:5},globalThis)};try{k.displayName="Pagination",k.__docgenInfo={description:"",displayName:"Pagination",props:{Comp:{defaultValue:null,description:"",name:"Comp",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"slot"'},{value:'"style"'},{value:'"title"'},{value:'"search"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"figure"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"option"'},{value:'"switch"'},{value:'"table"'},{value:'"text"'},{value:'"time"'},{value:'"label"'},{value:'"stop"'},{value:'"image"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},lastPage:{defaultValue:null,description:"",name:"lastPage",required:!0,type:{name:"number"}},maxPageLength:{defaultValue:null,description:"",name:"maxPageLength",required:!0,type:{name:"number"}},itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},totalElements:{defaultValue:null,description:"",name:"totalElements",required:!0,type:{name:"number"}}}}}catch{}const ie={title:"Components/Pagination",component:k,tags:["autodocs"],argTypes:{},decorators:[t=>{const[e,r]=B.useState(1);return s.jsxDEV(t,{currentPage:e,setCurrentPage:r},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.stories.tsx",lineNumber:15,columnNumber:14},globalThis)}]},x={lastPage:10,maxPageLength:7,setCurrentPage:()=>console.log("page changed"),currentPage:1,itemsPerPage:10,totalElements:160},R=()=>{const t=()=>window.innerWidth<=768?5:7,[e,r]=B.useState(t);return B.useEffect(()=>{const a=()=>r(t);return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]),{maxPageLength:e}},f=(t,e)=>{const{currentPage:r,setCurrentPage:a}=e,{lastPage:u,totalElements:g,itemsPerPage:m,Comp:p}=t,{maxPageLength:n}=R();return s.jsxDEV("div",{className:"zep-text-center zep-inline-block",children:s.jsxDEV(k,{Comp:p,currentPage:r,lastPage:u,maxPageLength:n,itemsPerPage:m,setCurrentPage:a,totalElements:g},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.stories.tsx",lineNumber:54,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.stories.tsx",lineNumber:53,columnNumber:5},globalThis)},T={args:{...x},render:(t,e)=>f(t,e)},y={args:{...x,lastPage:1,totalElements:20},render:(t,e)=>f(t,e)},h={args:{...x,lastPage:2,totalElements:20},render:(t,e)=>f(t,e)},w={args:{...x,lastPage:12,totalElements:192},render:(t,e)=>f(t,e)},l="zep-pagination",b={args:{...x,Comp:"button"},render:(t,e)=>f(t,e),play:async({canvasElement:t})=>{const e=G(t);await i.click(e.getByText("2")),await o(e.getByTestId(l)).toHaveTextContent("17-32von160"),await i.click(e.getByText("3")),await o(e.getByTestId(l)).toHaveTextContent("33-48von160"),await i.click(e.getByText("4")),await o(e.getByTestId(l)).toHaveTextContent("49-64von160"),await i.click(e.getByText("5")),await o(e.getByTestId(l)).toHaveTextContent("65-80von160"),await i.click(e.getByText("6")),await o(e.getByTestId(l)).toHaveTextContent("81-96von160"),await i.click(e.getByText("7")),await o(e.getByTestId(l)).toHaveTextContent("97-112von160"),await i.click(e.getByText("8")),await o(e.getByTestId(l)).toHaveTextContent("113-128von160"),await i.click(e.getByText("9")),await o(e.getByTestId(l)).toHaveTextContent("129-144von160"),await i.click(e.getByText("10")),await o(e.getByTestId(l)).toHaveTextContent("145-160von160"),await i.click(e.getByText("9")),await o(e.getByTestId(l)).toHaveTextContent("129-144von160"),await i.click(e.getByText("8")),await o(e.getByTestId(l)).toHaveTextContent("113-128von160"),await i.click(e.getByText("7")),await o(e.getByTestId(l)).toHaveTextContent("97-112von160"),await i.click(e.getByText("6")),await o(e.getByTestId(l)).toHaveTextContent("81-96von160"),await i.click(e.getByText("5")),await o(e.getByTestId(l)).toHaveTextContent("65-80von160"),await i.click(e.getByText("4")),await o(e.getByTestId(l)).toHaveTextContent("49-64von160"),await i.click(e.getByText("3")),await o(e.getByTestId(l)).toHaveTextContent("33-48von160"),await i.click(e.getByText("2")),await o(e.getByTestId(l)).toHaveTextContent("17-32von160"),await i.click(e.getByText("1")),await o(e.getByTestId(l)).toHaveTextContent("1-16von160")}};var C,E,z;T.parameters={...T.parameters,docs:{...(C=T.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  render: (args, context) => defaultStory(args, context)
}`,...(z=(E=T.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var L,j,H;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    lastPage: 1,
    totalElements: 20
  },
  render: (args, context) => defaultStory(args, context)
}`,...(H=(j=y.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var V,D,_;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    lastPage: 2,
    totalElements: 20
  },
  render: (args, context) => defaultStory(args, context)
}`,...(_=(D=h.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var S,q,A;w.parameters={...w.parameters,docs:{...(S=w.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    lastPage: 12,
    totalElements: 192
  },
  render: (args, context) => defaultStory(args, context)
}`,...(A=(q=w.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var M,W,F;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('17-32von160');
    await userEvent.click(canvas.getByText('3'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('33-48von160');
    await userEvent.click(canvas.getByText('4'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('49-64von160');
    await userEvent.click(canvas.getByText('5'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('65-80von160');
    await userEvent.click(canvas.getByText('6'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('81-96von160');
    await userEvent.click(canvas.getByText('7'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('97-112von160');
    await userEvent.click(canvas.getByText('8'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('113-128von160');
    await userEvent.click(canvas.getByText('9'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('129-144von160');
    await userEvent.click(canvas.getByText('10'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('145-160von160');
    await userEvent.click(canvas.getByText('9'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('129-144von160');
    await userEvent.click(canvas.getByText('8'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('113-128von160');
    await userEvent.click(canvas.getByText('7'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('97-112von160');
    await userEvent.click(canvas.getByText('6'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('81-96von160');
    await userEvent.click(canvas.getByText('5'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('65-80von160');
    await userEvent.click(canvas.getByText('4'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('49-64von160');
    await userEvent.click(canvas.getByText('3'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('33-48von160');
    await userEvent.click(canvas.getByText('2'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('17-32von160');
    await userEvent.click(canvas.getByText('1'));
    await expect(canvas.getByTestId(testPaginationLinkItem)).toHaveTextContent('1-16von160');
  }
}`,...(F=(W=b.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const oe=["Default","With1Page","With2Pages","With12Pages","AsButtonPageLinks"];export{b as AsButtonPageLinks,T as Default,w as With12Pages,y as With1Page,h as With2Pages,oe as __namedExportsOrder,ie as default};
