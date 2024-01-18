import{j as s,c as d}from"./clsx-42c82d7d.js";import{w as W,u as i,e as o}from"./index-470d81f9.js";import{r as N}from"./index-39946eba.js";import{F as I}from"./Icon-e1590eff.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";const x=({children:t,active:e,disabled:r,Comp:a="a",...u})=>s.jsxDEV(a,{className:d("zep-no-underline","sm:zep-p-0.5","zep-p-0.25","zep-w-2.5","zep-h-2.5","sm:zep-w-3","sm:zep-h-3","zep-cursor-pointer","zep-typography-link","zep-text-typography-dark-70/70",{"zep-border-b-2 zep-text-neutral-800":e,"zep-cursor-not-allowed zep-pointer-events-none":r,"hover:zep-border-b-1 zep-box-border zep-text-neutral-800":!e}),"aria-current":e?"page":void 0,...u,children:s.jsxDEV("span",{className:d("zep-w-2","zep-h-2","zep-leading-2","zep-flex","zep-items-center","zep-justify-center",{"zep-text-typography-dark-100":e,"zep-text-typography-dark-40/40":r}),children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/pageLink.tsx",lineNumber:33,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/pageLink.tsx",lineNumber:12,columnNumber:5},globalThis);try{x.displayName="PageLink",x.__docgenInfo={description:"",displayName:"PageLink",props:{Comp:{defaultValue:{value:"a"},description:"",name:"Comp",required:!1,type:{name:"any"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const G=(t,e,r)=>{const a=[];if(e<=r)for(let u=1;u<=e;u++)a.push(u);else{const p=r-3,m=p/2;if(t-1<m||e-t<m){for(let n=1;n<=m+1;n++)a.push(n);a.push(NaN);for(let n=e-m;n<=e;n++)a.push(n)}else if(t-1>=p&&e-t>=p){const n=m-1;a.push(1),a.push(NaN);for(let v=t-n;v<=t+n;v++)a.push(v);a.push(NaN),a.push(e)}else{const n=t-1<e-t;let v=r;if(n){for(let c=1;c<=t+1;c++)a.push(c),v-=1;a.push(NaN),v-=1;for(let c=e-(v-1);c<=e;c++)a.push(c)}else{for(let c=e;c>=t-1;c--)a.unshift(c),v-=1;a.unshift(NaN),v-=1;for(let c=v;c>=1;c--)a.unshift(c)}}}return a},B=({Comp:t,currentPage:e,lastPage:r,maxLength:a,setCurrentPage:u,totalElements:g})=>{const p=G(e,r,a),m=g/r;return s.jsxDEV("div",{className:d("zep-flex","zep-flex-col","sm:zep-gap-1.5","zep-gap-0.5","zep-items-center","zep-text-center"),"data-testid":"zep-pagination",children:[s.jsxDEV("div",{className:d("zep-flex","zep-gap-0.5"),children:[s.jsxDEV(x,{Comp:t,disabled:e===1,onClick:()=>u(e-1),children:s.jsxDEV(I,{name:"arrow-long-left"},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:93,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:92,columnNumber:9},globalThis),p.map((n,v)=>s.jsxDEV(x,{Comp:t,active:e===n,disabled:isNaN(n),onClick:()=>u(n),children:isNaN(n)?"...":n},v,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:96,columnNumber:11},globalThis)),s.jsxDEV(x,{Comp:t,disabled:e===r,onClick:()=>u(e+1),children:s.jsxDEV(I,{name:"arrow-long-right"},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:107,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:106,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:91,columnNumber:7},globalThis),s.jsxDEV("ul",{className:d("zep-flex ","zep-gap-0.25"),children:[s.jsxDEV("li",{children:m*e-m+1},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:111,columnNumber:9},globalThis),s.jsxDEV("li",{children:"-"},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:112,columnNumber:9},globalThis),s.jsxDEV("li",{children:m*e},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:113,columnNumber:9},globalThis),s.jsxDEV("li",{children:"von"},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:114,columnNumber:9},globalThis),s.jsxDEV("li",{children:g},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:115,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:110,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/pagination/Pagination.tsx",lineNumber:81,columnNumber:5},globalThis)};try{B.displayName="Pagination",B.__docgenInfo={description:"",displayName:"Pagination",props:{Comp:{defaultValue:null,description:"",name:"Comp",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},lastPage:{defaultValue:null,description:"",name:"lastPage",required:!0,type:{name:"number"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},totalElements:{defaultValue:null,description:"",name:"totalElements",required:!0,type:{name:"number"}}}}}catch{}const ee={title:"Components/Pagination",component:B,tags:["autodocs"],argTypes:{},decorators:[t=>{const[e,r]=N.useState(1);return s.jsxDEV(t,{currentPage:e,setCurrentPage:r},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.stories.tsx",lineNumber:13,columnNumber:12},globalThis)}]},f={lastPage:10,maxLength:7,setCurrentPage:()=>console.log("page changed"),currentPage:1,totalElements:160},O=()=>{const t=()=>window.innerWidth<=768?5:7,[e,r]=N.useState(t);return N.useEffect(()=>{const a=()=>r(t);return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]),{maxLength:e}},T=(t,e)=>{const{currentPage:r,setCurrentPage:a}=e,{lastPage:u,totalElements:g,Comp:p}=t,{maxLength:m}=O();return s.jsxDEV("div",{className:"zep-text-center zep-inline-block",children:s.jsxDEV(B,{Comp:p,currentPage:r,lastPage:u,maxLength:m,setCurrentPage:a,totalElements:g},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.stories.tsx",lineNumber:58,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/pagination/Pagination.stories.tsx",lineNumber:57,columnNumber:10},globalThis)},y={args:{...f},render:(t,e)=>T(t,e)},h={args:{...f,lastPage:1,totalElements:20},render:(t,e)=>T(t,e)},b={args:{...f,lastPage:2,totalElements:20},render:(t,e)=>T(t,e)},w={args:{...f,lastPage:12,totalElements:192},render:(t,e)=>T(t,e)},l="zep-pagination",k={args:{...f,Comp:"button"},render:(t,e)=>T(t,e),play:async({canvasElement:t})=>{const e=W(t);await i.click(e.getByText("2")),await o(e.getByTestId(l)).toHaveTextContent("17-32von160"),await i.click(e.getByText("3")),await o(e.getByTestId(l)).toHaveTextContent("33-48von160"),await i.click(e.getByText("4")),await o(e.getByTestId(l)).toHaveTextContent("49-64von160"),await i.click(e.getByText("5")),await o(e.getByTestId(l)).toHaveTextContent("65-80von160"),await i.click(e.getByText("6")),await o(e.getByTestId(l)).toHaveTextContent("81-96von160"),await i.click(e.getByText("7")),await o(e.getByTestId(l)).toHaveTextContent("97-112von160"),await i.click(e.getByText("8")),await o(e.getByTestId(l)).toHaveTextContent("113-128von160"),await i.click(e.getByText("9")),await o(e.getByTestId(l)).toHaveTextContent("129-144von160"),await i.click(e.getByText("10")),await o(e.getByTestId(l)).toHaveTextContent("145-160von160"),await i.click(e.getByText("9")),await o(e.getByTestId(l)).toHaveTextContent("129-144von160"),await i.click(e.getByText("8")),await o(e.getByTestId(l)).toHaveTextContent("113-128von160"),await i.click(e.getByText("7")),await o(e.getByTestId(l)).toHaveTextContent("97-112von160"),await i.click(e.getByText("6")),await o(e.getByTestId(l)).toHaveTextContent("81-96von160"),await i.click(e.getByText("5")),await o(e.getByTestId(l)).toHaveTextContent("65-80von160"),await i.click(e.getByText("4")),await o(e.getByTestId(l)).toHaveTextContent("49-64von160"),await i.click(e.getByText("3")),await o(e.getByTestId(l)).toHaveTextContent("33-48von160"),await i.click(e.getByText("2")),await o(e.getByTestId(l)).toHaveTextContent("17-32von160"),await i.click(e.getByText("1")),await o(e.getByTestId(l)).toHaveTextContent("1-16von160")}};var P,C,E;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  render: (args, context) => defaultStory(args, context)
}`,...(E=(C=y.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var j,z,L;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    lastPage: 1,
    totalElements: 20
  },
  render: (args, context) => defaultStory(args, context)
}`,...(L=(z=h.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var H,V,D;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    lastPage: 2,
    totalElements: 20
  },
  render: (args, context) => defaultStory(args, context)
}`,...(D=(V=b.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var _,S,q;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    lastPage: 12,
    totalElements: 192
  },
  render: (args, context) => defaultStory(args, context)
}`,...(q=(S=w.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var A,F,M;k.parameters={...k.parameters,docs:{...(A=k.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(M=(F=k.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const te=["Default","With1Page","With2Pages","With12Pages","AsButtonPageLinks"];export{k as AsButtonPageLinks,y as Default,w as With12Pages,h as With1Page,b as With2Pages,te as __namedExportsOrder,ee as default};
//# sourceMappingURL=Pagination.stories-fb2f53a9.js.map
