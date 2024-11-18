import{j as e,c as l}from"./clsx-42c82d7d.js";import{r as N}from"./index-39946eba.js";import{B as n,Z as p}from"./ZpsButton-7a07b092.js";import{S as D}from"./Spacing-0ac87ba5.js";import"./_commonjsHelpers-de833af9.js";import"./index-7d4e1659.js";import"./Icon-0811355a.js";import"./tw-merge-1166cefb.js";const h=N.createContext({imageAlignment:"left"}),f=()=>N.useContext(h),t=({imageAlignment:i="left",children:s})=>e.jsxDEV(h.Provider,{value:{imageAlignment:i},children:e.jsxDEV("div",{className:"zep-grid-items zep-items-center zep-justify-center zep-min-screen",children:e.jsxDEV("div",{className:l("zep-container","zep-mx-auto","zep-realative","zep-grid","zep-grid-cols-1","md:zep-gap-1.5","lg:zep-gap-2","md:zep-grid-cols-16"),"data-testid":"zep-mediaText-simple",children:s},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/MediaText.tsx",lineNumber:23,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/MediaText.tsx",lineNumber:22,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/MediaText.tsx",lineNumber:21,columnNumber:5},globalThis),w=({src:i,alt:s,aspectRatio:a="4:3"})=>{const{imageAlignment:m}=f(),v=a==="4:3"?"zep-pb-[calc(3_*_100%_/_4)]":"zep-pb-[calc(4_*_100%_/_3)]",M=m==="left"?"md:zep-order-1":"",S=m==="left"?"md:zep-col-start-2 md:zep-col-end-9 xl:zep-col-start-3 xl:zep-col-end-10":"md:zep-col-start-9 md:zep-col-end-16 xl:zep-col-start-8 xl:zep-col-end-15";return e.jsxDEV("div",{"data-testid":"zep-mediaText-image",className:l("zep-col-start-5","zep-col-end-13","zep-justify-center","zep-row-start-1","zep-row-end-1",M,S),children:e.jsxDEV("div",{className:l("zep-relative",v),children:e.jsxDEV("img",{alt:s,src:i,className:l("zep-w-full zep-h-full zep-object-cover md:zep-w-full md:zep-h-full md:zep-max-w-full")},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/MediaText.tsx",lineNumber:65,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/MediaText.tsx",lineNumber:64,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/MediaText.tsx",lineNumber:52,columnNumber:5},globalThis)},E=({children:i})=>{const{imageAlignment:s}=f(),a=s==="left"?"":"md:zep-order-1",m=s==="left"?"zep-col-start-6 zep-col-end-12 md:zep-col-start-8 md:zep-col-end-16 xl:zep-col-start-9 xl:zep-col-end-15":"zep-col-start-5 zep-col-end-13  md:zep-col-start-2 md:zep-col-end-10 xl:zep-col-start-3 xl:zep-col-end-9";return e.jsxDEV("div",{className:l("zep-mt-[60%]","zep-w-[86%]","md:zep-w-auto","zep-mx-auto","md:zep-mt-[60px]","xl:zep-mt-[120px]","zep-h-[max-content]","zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]","zep-row-start-1","zep-row-end-1","zep-z-10","zep-p-1","sm:zep-p-1.5","md:zep-p-2","lg:zep-p-3","xl:zep-p-5",a,m),"data-testid":"zep-mediaText-body",children:e.jsxDEV("div",{className:"",children:i},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/MediaText.tsx",lineNumber:106,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/MediaText.tsx",lineNumber:83,columnNumber:5},globalThis)},V=({children:i})=>e.jsxDEV("p",{"data-testid":"zep-MediaText-tagline",className:l("zep-typography-tagline zep-text-steel-500 zep-mb-0.5"),children:i},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/MediaText.tsx",lineNumber:113,columnNumber:5},globalThis),B=({children:i})=>e.jsxDEV("h4",{"data-testid":"zep-MediaText-headline",className:l("zep-text-typography-light-100","zep-typography-headlineMD-fluid-cqi","after:zep-text-[0.23em]","zep-mb-1.5","xl:zep-mb-2","zep-text-left"),children:i},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/MediaText.tsx",lineNumber:121,columnNumber:5},globalThis),_=({children:i})=>e.jsxDEV("p",{"data-testid":"zep-MediaText-description",className:"zep-text-typography-light-100 zep-mb-1.5 xl:zep-mb-2",children:i},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/MediaText.tsx",lineNumber:139,columnNumber:5},globalThis),I=({labelPrimary:i,labelSecondary:s,onClickPrimary:a,onClickSecondary:m})=>e.jsxDEV("div",{className:"zep-block","data-testid":"zep-mediatext-buttons",children:e.jsxDEV(D,{gap:"1",className:l("max-md:zep-flex","sm:zep-flex-row"),direction:"column",children:[e.jsxDEV(n,{onClick:a,label:i,variant:p.Primary},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/MediaText.tsx",lineNumber:149,columnNumber:9},globalThis),e.jsxDEV(n,{label:s,onClick:m,variant:p.Secondary},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/MediaText.tsx",lineNumber:154,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/MediaText.tsx",lineNumber:148,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/MediaText.tsx",lineNumber:147,columnNumber:5},globalThis);t.Image=w;t.Body=E;t.Tagline=V;t.Headline=B;t.Description=_;t.Button=I;try{t.displayName="MediaText",t.__docgenInfo={description:"",displayName:"MediaText",props:{imageAlignment:{defaultValue:{value:"left"},description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const F={title:"PowerSystems Components/MediaText",component:t,tags:["autodocs"],argTypes:{}},c={src:"./assets/image-4_3.png",alt:"Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis."},z="TAGLINE",y="Headline",j="Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque. Sed amet feugiat egestas elementum convallis pretium pellentesque. sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis pretium pellentesque.",o={args:{imageAlignment:"left",children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(t.Image,{src:c.src,alt:c.alt},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/mediaText.stories.tsx",lineNumber:22,columnNumber:9},globalThis),e.jsxDEV(t.Body,{children:[e.jsxDEV(t.Tagline,{children:z},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/mediaText.stories.tsx",lineNumber:24,columnNumber:11},globalThis),e.jsxDEV(t.Headline,{children:y},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/mediaText.stories.tsx",lineNumber:25,columnNumber:11},globalThis),e.jsxDEV(t.Description,{children:j},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/mediaText.stories.tsx",lineNumber:26,columnNumber:11},globalThis),e.jsxDEV(t.Button,{labelPrimary:"Primary",labelSecondary:"Secondary"},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/mediaText.stories.tsx",lineNumber:27,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/mediaText.stories.tsx",lineNumber:23,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/mediaText.stories.tsx",lineNumber:21,columnNumber:15},globalThis)}},r={args:{imageAlignment:"right",children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(t.Image,{src:c.src,alt:c.alt},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/mediaText.stories.tsx",lineNumber:36,columnNumber:9},globalThis),e.jsxDEV(t.Body,{children:[e.jsxDEV(t.Tagline,{children:z},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/mediaText.stories.tsx",lineNumber:38,columnNumber:11},globalThis),e.jsxDEV(t.Headline,{children:y},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/mediaText.stories.tsx",lineNumber:39,columnNumber:11},globalThis),e.jsxDEV(t.Description,{children:j},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/mediaText.stories.tsx",lineNumber:40,columnNumber:11},globalThis),e.jsxDEV(t.Button,{labelPrimary:"Primary",labelSecondary:"Secondary"},void 0,!1,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/mediaText.stories.tsx",lineNumber:41,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/mediaText.stories.tsx",lineNumber:37,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/powerSystemes-components/mediaText-simple/mediaText.stories.tsx",lineNumber:35,columnNumber:15},globalThis)}};var d,x,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    imageAlignment: 'left',
    children: <>
        <MediaText.Image src={Image.src} alt={Image.alt} />
        <MediaText.Body>
          <MediaText.Tagline>{Tagline}</MediaText.Tagline>
          <MediaText.Headline>{Headline}</MediaText.Headline>
          <MediaText.Description>{Description}</MediaText.Description>
          <MediaText.Button labelPrimary="Primary" labelSecondary="Secondary"></MediaText.Button>
        </MediaText.Body>
      </>
  }
}`,...(u=(x=o.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var T,g,b;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    imageAlignment: 'right',
    children: <>
        <MediaText.Image src={Image.src} alt={Image.alt} />
        <MediaText.Body>
          <MediaText.Tagline>{Tagline}</MediaText.Tagline>
          <MediaText.Headline>{Headline}</MediaText.Headline>
          <MediaText.Description>{Description}</MediaText.Description>
          <MediaText.Button labelPrimary="Primary" labelSecondary="Secondary"></MediaText.Button>
        </MediaText.Body>
      </>
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const Z=["Default","ImageRight"];export{o as Default,r as ImageRight,Z as __namedExportsOrder,F as default};
//# sourceMappingURL=mediaText.stories-02d720ea.js.map
