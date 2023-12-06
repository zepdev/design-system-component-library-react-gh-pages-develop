import{j as e,c as m}from"./clsx-42c82d7d.js";import{f as d}from"./focus-d7245c50.js";import{w as V,e as r,u as n}from"./index-95c7b577.js";import{C as S}from"./Card-05a6ef6b.js";import{L as u,a as h}from"./Link-29a98287.js";import"./index-39946eba.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./Icon-0f430218.js";const _={title:"Components/Card",component:S,tags:["autodocs"],argTypes:{}},t={decorators:[a=>e.jsxDEV("div",{className:"zep-max-w-[312px]",children:e.jsxDEV(a,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:19,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:18,columnNumber:25},globalThis)],args:{children:"Content"},play:async({canvasElement:a,step:s})=>{const o=V(a).getByTestId("zep-card");await s("Initial steps",async()=>{await r(o).toBeInTheDocument(),await r(o).not.toHaveFocus()}),await s("Select card with keyboard",async()=>{await n.tab(),await r(o).toHaveFocus()}),await s("Select card with mouse",async()=>{await n.click(o),await r(o).toHaveFocus()}),await s("Blur card with keyboard",async()=>{await n.tab(),await r(o).not.toHaveFocus()})}},c={decorators:[a=>e.jsxDEV("div",{className:"zep-max-w-[312px]",children:e.jsxDEV("button",{className:m(d,"zep-zep-focus-visible:zep-zep-outline-none","zep-rounded-8"),children:e.jsxDEV(a,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:51,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:50,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:49,columnNumber:25},globalThis)],args:{children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV("p",{className:"zep-typography-bodyText zep-text-typography-dark-70/70 zep-mb-0.25",children:"Category"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:56,columnNumber:9},globalThis),e.jsxDEV("h4",{className:"zep-typography-headlineSM zep-mb-1 zep-text-typography-dark-100",children:"I am a fluid typo h4"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:57,columnNumber:9},globalThis),e.jsxDEV("p",{className:"zep-typography-bodyText zep-mb-1.5 zep-flex-grow zep-text-typography-dark-100",children:"Description"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:58,columnNumber:9},globalThis),e.jsxDEV(u,{as:"span",label:"standalone link",href:"#",mode:h.Standalone},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:59,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:55,columnNumber:15},globalThis)}},i={decorators:[a=>e.jsxDEV("div",{className:"zep-max-w-[312px]",children:e.jsxDEV("button",{className:m(d,"zep-focus-visible:zep-outline-none","zep-rounded-8"),children:e.jsxDEV(a,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:66,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:65,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:64,columnNumber:25},globalThis)],args:{image:e.jsxDEV("img",{className:"zep-aspect-16.9 zep-object-cover",src:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",alt:"construction site",title:"construction site"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:70,columnNumber:12},globalThis),children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV("p",{className:"zep-typography-bodyText zep-text-typography-dark-70/70 zep-mb-0.25",children:"Category"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:72,columnNumber:9},globalThis),e.jsxDEV("h3",{className:"zep-typography-headlineSM zep-mb-1 zep-text-typography-dark-100",children:"I am a h3"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:73,columnNumber:9},globalThis),e.jsxDEV("p",{className:"zep-typography-body-text zep-mb-1.5 zep-flex-grow zep-text-typography-dark-100",children:"Description"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:74,columnNumber:9},globalThis),e.jsxDEV(u,{as:"span",label:"standalone link",href:"#",mode:h.Standalone},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:75,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:71,columnNumber:15},globalThis)}},l={decorators:[a=>e.jsxDEV("div",{className:"zep-max-w-[312px]",children:e.jsxDEV(a,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:81,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:80,columnNumber:25},globalThis)],args:{image:e.jsxDEV("img",{className:"zep-aspect-16.9 zep-object-cover",src:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",alt:"construction site",title:"construction site"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:84,columnNumber:12},globalThis),children:e.jsxDEV(e.Fragment,{children:e.jsxDEV("h3",{className:"zep-typography-headlineSM zep-text-typography-dark-100",children:"Title"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:86,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:85,columnNumber:15},globalThis)}},p={decorators:[a=>e.jsxDEV("div",{className:"zep-max-w-[600px] ",children:e.jsxDEV("button",{className:m(d,"zep-@container zep-w-full","zep-zep-focus-visible:zep-zep-outline-none","zep-rounded-8"),children:e.jsxDEV(a,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:93,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:92,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:91,columnNumber:25},globalThis)],args:{isFluid:!0,image:e.jsxDEV("img",{className:"zep-aspect-16.9 zep-object-cover",src:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",alt:"construction site",title:"construction site"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:98,columnNumber:12},globalThis),children:e.jsxDEV(e.Fragment,{children:[e.jsxDEV("p",{className:"zep-typography-bodyText zep-text-typography-dark-70/70 zep-mb-0.25",children:"Category"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:100,columnNumber:9},globalThis),e.jsxDEV("h4",{className:"zep-typography-headlineSM supports-cqi:zep-typography-headlineSM-fluid-cqi supports-cqi:after:zep-text-[0.5em] zep-mb-1 zep-text-left zep-text-typography-dark-100",children:"I am a fluid typo h4 working with container related size units (and viewport units fallback)"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:101,columnNumber:9},globalThis),e.jsxDEV("p",{className:"zep-typography-bodyText zep-mb-1.5 zep-flex-grow zep-text-typography-dark-100",children:"Description"},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:104,columnNumber:9},globalThis),e.jsxDEV(u,{as:"span",label:"standalone link",href:"#",mode:h.Standalone},void 0,!1,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:105,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card/Card.stories.tsx",lineNumber:99,columnNumber:15},globalThis)}};var b,x,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [Story => <div className="zep-max-w-[312px]">
        <Story />
      </div>],
  args: ({
    children: 'Content'
  } as CardProps),
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
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,N,g;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [Story => <div className="zep-max-w-[312px]">
        <button className={clsx(focusRing, 'zep-zep-focus-visible:zep-zep-outline-none', 'zep-rounded-8')}>
          <Story />
        </button>
      </div>],
  args: ({
    children: <>
        <p className="zep-typography-bodyText zep-text-typography-dark-70/70 zep-mb-0.25">Category</p>
        <h4 className="zep-typography-headlineSM zep-mb-1 zep-text-typography-dark-100">I am a fluid typo h4</h4>
        <p className="zep-typography-bodyText zep-mb-1.5 zep-flex-grow zep-text-typography-dark-100">Description</p>
        <Link as={'span'} label="standalone link" href="#" mode={LinkMode.Standalone} />
      </>
  } as CardProps)
}`,...(g=(N=c.parameters)==null?void 0:N.docs)==null?void 0:g.source}}};var z,v,w;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  decorators: [Story => <div className="zep-max-w-[312px]">
        <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8')}>
          <Story />
        </button>
      </div>],
  args: ({
    image: <img className="zep-aspect-16.9 zep-object-cover" src="https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="construction site" title="construction site" />,
    children: <>
        <p className="zep-typography-bodyText zep-text-typography-dark-70/70 zep-mb-0.25">Category</p>
        <h3 className="zep-typography-headlineSM zep-mb-1 zep-text-typography-dark-100">I am a h3</h3>
        <p className="zep-typography-body-text zep-mb-1.5 zep-flex-grow zep-text-typography-dark-100">Description</p>
        <Link as={'span'} label="standalone link" href="#" mode={LinkMode.Standalone} />
      </>
  } as CardProps)
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var j,C,D;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  decorators: [Story => <div className="zep-max-w-[312px]">
        <Story />
      </div>],
  args: ({
    image: <img className="zep-aspect-16.9 zep-object-cover" src="https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="construction site" title="construction site" />,
    children: <>
        <h3 className="zep-typography-headlineSM zep-text-typography-dark-100">Title</h3>
      </>
  } as CardProps)
}`,...(D=(C=l.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var T,k,E;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  decorators: [Story => <div className="zep-max-w-[600px] ">
        <button className={clsx(focusRing, 'zep-@container zep-w-full', 'zep-zep-focus-visible:zep-zep-outline-none', 'zep-rounded-8')}>
          <Story />
        </button>
      </div>],
  args: ({
    isFluid: true,
    image: <img className="zep-aspect-16.9 zep-object-cover" src="https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="construction site" title="construction site" />,
    children: <>
        <p className="zep-typography-bodyText zep-text-typography-dark-70/70 zep-mb-0.25">Category</p>
        <h4 className="zep-typography-headlineSM supports-cqi:zep-typography-headlineSM-fluid-cqi supports-cqi:after:zep-text-[0.5em] zep-mb-1 zep-text-left zep-text-typography-dark-100">
          I am a fluid typo h4 working with container related size units (and viewport units fallback)
        </h4>
        <p className="zep-typography-bodyText zep-mb-1.5 zep-flex-grow zep-text-typography-dark-100">Description</p>
        <Link as={'span'} label="standalone link" href="#" mode={LinkMode.Standalone} />
      </>
  } as CardProps)
}`,...(E=(k=p.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const O=["Default","WithChildren","WithChildrenAndImage","ProductCard","WithFluidTypoHeadline"];export{t as Default,l as ProductCard,c as WithChildren,i as WithChildrenAndImage,p as WithFluidTypoHeadline,O as __namedExportsOrder,_ as default};
//# sourceMappingURL=Card.stories-25d129ad.js.map
