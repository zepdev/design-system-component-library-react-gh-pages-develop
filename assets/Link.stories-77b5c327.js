import{w as W,e as t,u as o}from"./index-8d4015d3.js";import{L as X,b as i,c as r,a as e}from"./Link-cc6e325d.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./clsx-42c82d7d.js";import"./index-39946eba.js";import"./Icon-9cb8e2d0.js";const ca={title:"Components/Link",component:X,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},size:{control:{type:"radio",options:[i.Base,i.Small]}},target:{control:{type:"radio",options:[r.Blank,r.Self]}},mode:{control:{type:"radio",options:[e.Inline,e.Standalone]}}}},n={label:"Link",href:"#",disabled:!1,size:i.Base,target:r.Self,mode:e.Inline},c={args:{...n}},l={args:{...n,mode:e.Standalone},play:async({canvasElement:V,step:s})=>{const a=W(V).getByRole("link");await s("Initial checks",async()=>{await t(a).toBeInTheDocument(),await t(a).not.toHaveFocus()}),await s("Focus link with keyboard",async()=>{await o.tab(),await t(a).toHaveFocus()}),await s("Blur link with keyboard",async()=>{await o.tab(),await t(a).not.toHaveFocus()}),await s("Focus link with mouse",async()=>{await o.click(a),await t(a).toHaveFocus()}),await s("Blur link after focus with mouse",async()=>{await o.tab(),await t(a).not.toHaveFocus()}),await s("Click link",async()=>{await o.click(a),await t(a).toHaveFocus()}),await s("Blur link and check focus",async()=>{await o.tab(),await t(a).not.toHaveFocus()})}},d={args:{...n,mode:e.Inline,iconPlacement:"after"}},m={args:{...n,mode:e.Standalone,iconPlacement:"before"}},p={args:{...n,disabled:!0}},u={args:{...n,size:i.Small}},k={args:{...n,mode:e.Standalone,label:""}},g={args:{...n,icon:"external-link",href:"https://www.google.com",target:r.Blank,mode:e.Standalone}},w={args:{...n,as:"span",label:"span tag (no focus)",href:"#",disabled:!1,size:i.Base,target:r.Blank,mode:e.Standalone}},f={args:{...n,label:"No Referrer",target:r.Blank,mode:e.Standalone,rel:"noreferrer"}};var S,b,L;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs
  } as LinkProps)
}`,...(L=(b=c.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var y,v,h;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    mode: LinkMode.Standalone
  } as LinkProps),
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    await step('Initial checks', async () => {
      await expect(link).toBeInTheDocument();
      await expect(link).not.toHaveFocus();
    });
    await step('Focus link with keyboard', async () => {
      await userEvent.tab();
      await expect(link).toHaveFocus();
    });
    await step('Blur link with keyboard', async () => {
      await userEvent.tab();
      await expect(link).not.toHaveFocus();
    });
    await step('Focus link with mouse', async () => {
      await userEvent.click(link);
      await expect(link).toHaveFocus();
    });
    await step('Blur link after focus with mouse', async () => {
      await userEvent.tab();
      await expect(link).not.toHaveFocus();
    });
    await step('Click link', async () => {
      await userEvent.click(link);
      await expect(link).toHaveFocus();
    });
    await step('Blur link and check focus', async () => {
      await userEvent.tab();
      await expect(link).not.toHaveFocus();
    });
  }
}`,...(h=(v=l.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var B,F,I;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    mode: LinkMode.Inline,
    iconPlacement: 'after'
  } as LinkProps)
}`,...(I=(F=d.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var P,x,A;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    mode: LinkMode.Standalone,
    iconPlacement: 'before'
  } as LinkProps)
}`,...(A=(x=m.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var H,E,z;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    disabled: true
  } as LinkProps)
}`,...(z=(E=p.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var T,M,R;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    size: LinkSize.Small
  } as LinkProps)
}`,...(R=(M=u.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var D,C,N;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    mode: LinkMode.Standalone,
    label: ''
  } as LinkProps)
}`,...(N=(C=k.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var _,O,j;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    icon: 'external-link',
    href: 'https://www.google.com',
    target: LinkTarget.Blank,
    mode: LinkMode.Standalone
  } as LinkProps)
}`,...(j=(O=g.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var q,G,J;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    as: 'span',
    label: 'span tag (no focus)',
    href: '#',
    disabled: false,
    size: LinkSize.Base,
    target: LinkTarget.Blank,
    mode: LinkMode.Standalone
  } as LinkProps)
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    label: 'No Referrer',
    target: LinkTarget.Blank,
    mode: LinkMode.Standalone,
    rel: 'noreferrer'
  } as LinkProps)
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const la=["Inline","Standalone","IconPlacementInLine","IconPlacementStandalone","Disabled","Small","Icon","External","AsSpanTag","RelAttribute"];export{w as AsSpanTag,p as Disabled,g as External,k as Icon,d as IconPlacementInLine,m as IconPlacementStandalone,c as Inline,f as RelAttribute,u as Small,l as Standalone,la as __namedExportsOrder,ca as default};
//# sourceMappingURL=Link.stories-77b5c327.js.map
