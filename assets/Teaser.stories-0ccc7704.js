import{j as e,c as a}from"./clsx-24df0f47.js";import{r as V}from"./index-b1e7e93e.js";import{a as T,B}from"./Button-14aec6b7.js";import"./_commonjsHelpers-de833af9.js";import"./index-b7fee60d.js";import"./Icon-0193f610.js";import"./tw-merge-1166cefb.js";import"./Spacing-dbf33a94.js";const y=V.createContext({backgroundColor:"dark"}),k=()=>V.useContext(y),r=({backgroundColor:s="dark",imageAlignment:t="left",children:l})=>{const i=s==="dark"?"zep-bg-background-dark zep-text-typography-light-100":"zep-bg-background-light zep-text-typography-dark-100",p=t==="left"?"md:zep-flex-row":"md:zep-flex-row-reverse";return e.jsxDEV(y.Provider,{value:{backgroundColor:s},children:e.jsxDEV("div",{className:a(p,i,"zep-flex-col","zep-rounded-lg","zep-shadow-lg","md:zep-flex"),"data-testid":"zep-teaser",children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.tsx",lineNumber:16,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.tsx",lineNumber:15,columnNumber:9},globalThis)},I=({src:s,alt:t,aspectRatio:l="16:9"})=>{const i=l==="16:9"?"zep-pb-[calc(9_*_100%_/_16)]":"zep-pb-[calc(16_*_100%_/_9)]";return e.jsxDEV("div",{"data-testid":"zep-teaser-image",className:a("zep-justify-center zep-flex zep-items-center md:zep-w-5/6 md:zep-relative xl:zep-w-10/12"),children:e.jsxDEV("div",{className:a("zep-relative","zep-w-full","zep-h-0","md:zep-relative","md:zep-block","md:zep-pl-8","md:zep-h-0",i),children:e.jsxDEV("div",{className:a("zep-absolute zep-inset-0 zep-justify-center zep-flex zep-items-center"),children:e.jsxDEV("img",{alt:t,src:s,className:a("zep-w-full zep-h-full zep-object-cover md:zep-w-full md:zep-h-full md:zep-max-w-full")},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.tsx",lineNumber:31,columnNumber:21},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.tsx",lineNumber:30,columnNumber:17},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.tsx",lineNumber:29,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.tsx",lineNumber:28,columnNumber:9},globalThis)},C=({children:s})=>e.jsxDEV("div",{"data-testid":"zep-teaser-body",className:a("zep-@container zep-flex zep-items-center zep-p-1.5 md:zep-px-1.5 md:zep-w-1/2 xl:zep-w-1/2 lg:zep-px-[80px]"),children:e.jsxDEV("div",{className:"lg:zep-pl-8 sm:zep-block zep-inline-grid",children:s},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.tsx",lineNumber:41,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.tsx",lineNumber:40,columnNumber:9},globalThis),_=({children:s})=>e.jsxDEV("p",{"data-testid":"zep-teaser-tagline",className:a("zep-typography-tagline zep-mb-0.5"),children:s},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.tsx",lineNumber:50,columnNumber:9},globalThis),H=({children:s})=>e.jsxDEV("h4",{"data-testid":"zep-teaser-headline",className:a("zep-typography-headlineLG","supports-cqi:zep-typography-headlineLG-fluid-cqi","supports-cqi:after:zep-text-[0.23em]","zep-mb-0.5","zep-text-left"),children:s},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.tsx",lineNumber:58,columnNumber:9},globalThis),w=({children:s})=>e.jsxDEV("p",{"data-testid":"zep-teaser-description",children:typeof s=="string"?`${s.slice(0,256)}${s.length>256?"...":""}`:""},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.tsx",lineNumber:71,columnNumber:9},globalThis),A=({children:s,label:t,onClick:l})=>{const{backgroundColor:i}=k(),p=i==="dark"?T.LightPrimary:T.DarkPrimary;return e.jsxDEV(B,{variant:p,onClick:l,className:a("zep-mt-1 lg:zep-mt-1.5 md:zep-flex"),"data-testid":"zep-teaser-button",label:t,children:[" ",s]},void 0,!0,{fileName:"/home/circleci/project/src/components/teaser/Teaser.tsx",lineNumber:79,columnNumber:9},globalThis)};r.Image=I;r.Tagline=_;r.Body=C;r.Headline=H;r.Description=w;r.Button=A;try{r.displayName="Teaser",r.__docgenInfo={description:"",displayName:"Teaser",props:{backgroundColor:{defaultValue:{value:"dark"},description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"white"'}]}},imageAlignment:{defaultValue:{value:"left"},description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const $={title:"Components/Teaser",component:r,tags:["autodocs"],argTypes:{children:{control:{disable:!0}}}},o={src:"./assets/bagger-image.png",alt:"Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis."},u="TAGLINE",d="Headline large max characters of X",g="Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.",b="Button",c={args:{backgroundColor:"dark",imageAlignment:"left",children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r.Image,{src:o.src,alt:o.alt},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:35,columnNumber:34},globalThis),e.jsxDEV(r.Body,{children:[e.jsxDEV(r.Tagline,{children:u},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:37,columnNumber:38},globalThis),e.jsxDEV(r.Headline,{children:d},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:38,columnNumber:38},globalThis),e.jsxDEV(r.Description,{children:g},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:39,columnNumber:38},globalThis),e.jsxDEV(r.Button,{label:b},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:40,columnNumber:38},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:36,columnNumber:34},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:34,columnNumber:30},globalThis)}},n={args:{backgroundColor:"dark",imageAlignment:"right",children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r.Image,{src:o.src,alt:o.alt},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:53,columnNumber:34},globalThis),e.jsxDEV(r.Body,{children:[e.jsxDEV(r.Tagline,{children:u},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:55,columnNumber:38},globalThis),e.jsxDEV(r.Headline,{children:d},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:56,columnNumber:38},globalThis),e.jsxDEV(r.Description,{children:g},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:57,columnNumber:38},globalThis),e.jsxDEV(r.Button,{label:b},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:58,columnNumber:38},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:54,columnNumber:34},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:52,columnNumber:30},globalThis)}},m={args:{backgroundColor:"white",imageAlignment:"right",children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(r.Image,{src:o.src,alt:o.alt},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:71,columnNumber:34},globalThis),e.jsxDEV(r.Body,{children:[e.jsxDEV(r.Tagline,{children:u},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:73,columnNumber:38},globalThis),e.jsxDEV(r.Headline,{children:d},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:74,columnNumber:38},globalThis),e.jsxDEV(r.Description,{children:g},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:75,columnNumber:38},globalThis),e.jsxDEV(r.Button,{label:b},void 0,!1,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:76,columnNumber:38},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:72,columnNumber:34},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/teaser/Teaser.stories.tsx",lineNumber:70,columnNumber:30},globalThis)}};var h,N,f;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    backgroundColor: 'dark',
    imageAlignment: 'left',
    children: <>
                                 <Teaser.Image src={Image.src} alt={Image.alt} />
                                 <Teaser.Body>
                                     <Teaser.Tagline>{Tagline}</Teaser.Tagline>
                                     <Teaser.Headline>{Headline}</Teaser.Headline>
                                     <Teaser.Description>{Description}</Teaser.Description>
                                     <Teaser.Button label={ButtonLabel}></Teaser.Button>
                                 </Teaser.Body>
                             </>
  }
}`,...(f=(N=c.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var x,j,z;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    backgroundColor: 'dark',
    imageAlignment: 'right',
    children: <>
                                 <Teaser.Image src={Image.src} alt={Image.alt} />
                                 <Teaser.Body>
                                     <Teaser.Tagline>{Tagline}</Teaser.Tagline>
                                     <Teaser.Headline>{Headline}</Teaser.Headline>
                                     <Teaser.Description>{Description}</Teaser.Description>
                                     <Teaser.Button label={ButtonLabel}></Teaser.Button>
                                 </Teaser.Body>
                             </>
  }
}`,...(z=(j=n.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var v,D,E;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    backgroundColor: 'white',
    imageAlignment: 'right',
    children: <>
                                 <Teaser.Image src={Image.src} alt={Image.alt} />
                                 <Teaser.Body>
                                     <Teaser.Tagline>{Tagline}</Teaser.Tagline>
                                     <Teaser.Headline>{Headline}</Teaser.Headline>
                                     <Teaser.Description>{Description}</Teaser.Description>
                                     <Teaser.Button label={ButtonLabel}></Teaser.Button>
                                 </Teaser.Body>
                             </>
  }
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const O=["Default","ImageAlignmentRight","BackgroundColorWhite"];export{m as BackgroundColorWhite,c as Default,n as ImageAlignmentRight,O as __namedExportsOrder,$ as default};
