import{j as e,c as m}from"./clsx-24df0f47.js";import{f as d}from"./focus-d7245c50.js";import{w as V,e as o,u as p}from"./index-f872ea10.js";import{C as S}from"./Card-202771df.js";import{L as u,a as h}from"./Link-2682979c.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index-03bbf7d1.js";import"./_baseIsEqual-cf90f23b.js";import"./index-356e4a49.js";import"./Icon-7f566523.js";const R={title:"Components/Card",component:S,tags:["autodocs"],argTypes:{}},t={decorators:[a=>e.jsxDEV("div",{className:"zep-max-w-[312px]",children:e.jsxDEV(a,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:25,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:24,columnNumber:7},globalThis)],args:{children:"Content"},play:async({canvasElement:a,step:s})=>{const r=V(a).getByTestId("zep-card");await s("Initial steps",async()=>{await o(r).toBeInTheDocument(),await o(r).not.toHaveFocus()}),await s("Select card with keyboard",async()=>{await p.tab(),await o(r).toHaveFocus()}),await s("Select card with mouse",async()=>{await p.click(r),await o(r).toHaveFocus()}),await s("Blur card with keyboard",async()=>{await p.tab(),await o(r).not.toHaveFocus()})}},c={decorators:[a=>e.jsxDEV("div",{className:"zep-max-w-[312px]",children:e.jsxDEV("button",{className:m(d,"zep-zep-focus-visible:zep-zep-outline-none","zep-rounded-8"),children:e.jsxDEV(a,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:64,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:63,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:62,columnNumber:7},globalThis)],args:{children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV("p",{className:"zep-typography-bodyText zep-text-typography-dark-70/70 zep-mb-0.25",children:"Category"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:72,columnNumber:9},globalThis),e.jsxDEV("h4",{className:"zep-typography-headlineSM zep-mb-1 zep-text-typography-dark-100 group-hover:zep-underline",children:"I am a fluid typo h4"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:73,columnNumber:9},globalThis),e.jsxDEV("p",{className:"zep-typography-bodyText zep-mb-1.5 zep-flex-grow zep-text-typography-dark-100",children:"Description"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:76,columnNumber:9},globalThis),e.jsxDEV(u,{as:"span",label:"standalone link",href:"#",mode:h.Standalone},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:77,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:71,columnNumber:7},globalThis)}},i={decorators:[a=>e.jsxDEV("div",{className:"zep-max-w-[312px]",children:e.jsxDEV("button",{className:m(d,"zep-focus-visible:zep-outline-none","zep-rounded-8"),children:e.jsxDEV(a,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:88,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:87,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:86,columnNumber:7},globalThis)],args:{image:e.jsxDEV("img",{className:"zep-aspect-16.9 zep-object-cover",src:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",alt:"construction site",title:"construction site"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:95,columnNumber:7},globalThis),children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV("p",{className:"zep-typography-bodyText zep-text-typography-dark-70/70 zep-mb-0.25",children:"Category"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:104,columnNumber:9},globalThis),e.jsxDEV("h3",{className:"zep-typography-headlineSM zep-mb-1 zep-text-typography-dark-100 group-hover:zep-underline",children:"I am a h3"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:105,columnNumber:9},globalThis),e.jsxDEV("p",{className:"zep-typography-body-text zep-mb-1.5 zep-flex-grow zep-text-typography-dark-100",children:"Description"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:108,columnNumber:9},globalThis),e.jsxDEV(u,{as:"span",label:"standalone link",href:"#",mode:h.Standalone},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:109,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:103,columnNumber:7},globalThis)}},n={decorators:[a=>e.jsxDEV("div",{className:"zep-max-w-[312px]",children:e.jsxDEV(a,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:119,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:118,columnNumber:7},globalThis)],args:{image:e.jsxDEV("img",{className:"zep-aspect-16.9 zep-object-cover",src:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",alt:"construction site",title:"construction site"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:125,columnNumber:7},globalThis),children:e.jsxDEV(e.Fragment,{children:e.jsxDEV("h3",{className:"zep-typography-headlineSM zep-text-typography-dark-100 group-hover:zep-underline",children:"Title"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:134,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:133,columnNumber:7},globalThis)}},l={decorators:[a=>e.jsxDEV("div",{className:"zep-max-w-[600px] ",children:e.jsxDEV("button",{className:m(d,"zep-@container zep-w-full","zep-zep-focus-visible:zep-zep-outline-none","zep-rounded-8"),children:e.jsxDEV(a,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:152,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:144,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:143,columnNumber:7},globalThis)],args:{isFluid:!0,image:e.jsxDEV("img",{className:"zep-aspect-16.9 zep-object-cover",src:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",alt:"construction site",title:"construction site"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:160,columnNumber:7},globalThis),children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV("p",{className:"zep-typography-bodyText zep-text-typography-dark-70/70 zep-mb-0.25",children:"Category"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:169,columnNumber:9},globalThis),e.jsxDEV("h4",{className:"zep-typography-headlineSM supports-cqi:zep-typography-headlineSM-fluid-cqi supports-cqi:after:zep-text-[0.5em] zep-mb-1 zep-text-left zep-text-typography-dark-100 group-hover:zep-underline",children:"I am a fluid typo h4 working with container related size units (and viewport units fallback)"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:170,columnNumber:9},globalThis),e.jsxDEV("p",{className:"zep-typography-bodyText zep-mb-1.5 zep-flex-grow zep-text-typography-dark-100",children:"Description"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:173,columnNumber:9},globalThis),e.jsxDEV(u,{as:"span",label:"standalone link",href:"#",mode:h.Standalone},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:174,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:168,columnNumber:7},globalThis)}};var b,x,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [Story => <div className="zep-max-w-[312px]">
        <Story />
      </div>],
  args: {
    children: 'Content'
  } as CardProps,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByTestId('zep-card');
    await step('Initial steps', async () => {
      await expect(card).toBeInTheDocument();
      await expect(card).not.toHaveFocus();
    });
    await step('Select card with keyboard', async () => {
      await userEvent.tab();
      await expect(card).toHaveFocus();
    });
    await step('Select card with mouse', async () => {
      await userEvent.click(card);
      await expect(card).toHaveFocus();
    });
    await step('Blur card with keyboard', async () => {
      await userEvent.tab();
      await expect(card).not.toHaveFocus();
    });
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,y,N;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [Story => <div className="zep-max-w-[312px]">
        <button className={clsx(focusRing, 'zep-zep-focus-visible:zep-zep-outline-none', 'zep-rounded-8')}>
          <Story />
        </button>
      </div>],
  args: {
    children: <>
        <p className="zep-typography-bodyText zep-text-typography-dark-70/70 zep-mb-0.25">Category</p>
        <h4 className="zep-typography-headlineSM zep-mb-1 zep-text-typography-dark-100 group-hover:zep-underline">
          I am a fluid typo h4
        </h4>
        <p className="zep-typography-bodyText zep-mb-1.5 zep-flex-grow zep-text-typography-dark-100">Description</p>
        <Link as={'span'} label="standalone link" href="#" mode={LinkMode.Standalone} />
      </>
  } as CardProps
}`,...(N=(y=c.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var z,v,w;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  decorators: [Story => <div className="zep-max-w-[312px]">
        <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8')}>
          <Story />
        </button>
      </div>],
  args: {
    image: <img className="zep-aspect-16.9 zep-object-cover" src="https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="construction site" title="construction site" />,
    children: <>
        <p className="zep-typography-bodyText zep-text-typography-dark-70/70 zep-mb-0.25">Category</p>
        <h3 className="zep-typography-headlineSM zep-mb-1 zep-text-typography-dark-100 group-hover:zep-underline">
          I am a h3
        </h3>
        <p className="zep-typography-body-text zep-mb-1.5 zep-flex-grow zep-text-typography-dark-100">Description</p>
        <Link as={'span'} label="standalone link" href="#" mode={LinkMode.Standalone} />
      </>
  } as CardProps
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var j,C,D;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  decorators: [Story => <div className="zep-max-w-[312px]">
        <Story />
      </div>],
  args: {
    image: <img className="zep-aspect-16.9 zep-object-cover" src="https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="construction site" title="construction site" />,
    children: <>
        <h3 className="zep-typography-headlineSM zep-text-typography-dark-100 group-hover:zep-underline">Title</h3>
      </>
  } as CardProps
}`,...(D=(C=n.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var T,k,E;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  decorators: [Story => <div className="zep-max-w-[600px] ">
        <button className={clsx(focusRing, 'zep-@container zep-w-full', 'zep-zep-focus-visible:zep-zep-outline-none', 'zep-rounded-8')}>
          <Story />
        </button>
      </div>],
  args: {
    isFluid: true,
    image: <img className="zep-aspect-16.9 zep-object-cover" src="https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="construction site" title="construction site" />,
    children: <>
        <p className="zep-typography-bodyText zep-text-typography-dark-70/70 zep-mb-0.25">Category</p>
        <h4 className="zep-typography-headlineSM supports-cqi:zep-typography-headlineSM-fluid-cqi supports-cqi:after:zep-text-[0.5em] zep-mb-1 zep-text-left zep-text-typography-dark-100 group-hover:zep-underline">
          I am a fluid typo h4 working with container related size units (and viewport units fallback)
        </h4>
        <p className="zep-typography-bodyText zep-mb-1.5 zep-flex-grow zep-text-typography-dark-100">Description</p>
        <Link as={'span'} label="standalone link" href="#" mode={LinkMode.Standalone} />
      </>
  } as CardProps
}`,...(E=(k=l.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const _=["Default","WithChildren","WithChildrenAndImage","ProductCard","WithFluidTypoHeadline"];export{t as Default,n as ProductCard,c as WithChildren,i as WithChildrenAndImage,l as WithFluidTypoHeadline,_ as __namedExportsOrder,R as default};
