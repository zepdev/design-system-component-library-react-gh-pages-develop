import{w as K,e as n,u as o}from"./index-8d4015d3.js";import{L as Q,b as i,c as r,a as t}from"./Link-630335a5.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./clsx-42c82d7d.js";import"./index-39946eba.js";import"./Icon-b83e59f4.js";const sa={title:"Components/Link",component:Q,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},size:{control:{type:"radio",options:[i.Base,i.Small]}},target:{control:{type:"radio",options:[r.Blank,r.Self]}},mode:{control:{type:"radio",options:[t.Inline,t.Standalone]}}}},e={label:"Link",href:"#",disabled:!1,size:i.Base,target:r.Self,mode:t.Inline},c={args:{...e}},l={args:{...e,mode:t.Standalone},play:async({canvasElement:J,step:s})=>{const a=K(J).getByRole("link");await s("Initial checks",async()=>{await n(a).toBeInTheDocument(),await n(a).not.toHaveFocus()}),await s("Focus link with keyboard",async()=>{await o.tab(),await n(a).toHaveFocus()}),await s("Blur link with keyboard",async()=>{await o.tab(),await n(a).not.toHaveFocus()}),await s("Focus link with mouse",async()=>{await o.click(a),await n(a).toHaveFocus()}),await s("Blur link after focus with mouse",async()=>{await o.tab(),await n(a).not.toHaveFocus()}),await s("Click link",async()=>{await o.click(a),await n(a).toHaveFocus()}),await s("Blur link and check focus",async()=>{await o.tab(),await n(a).not.toHaveFocus()})}},d={args:{...e,iconPlacement:"before"}},p={args:{...e,disabled:!0}},u={args:{...e,size:i.Small}},m={args:{...e,mode:t.Standalone,label:""}},k={args:{...e,icon:"external-link",href:"https://www.google.com",target:r.Blank,mode:t.Standalone}},g={args:{...e,as:"span",label:"span tag (no focus)",href:"#",disabled:!1,size:i.Base,target:r.Blank,mode:t.Standalone}},w={args:{...e,label:"No Referrer",target:r.Blank,mode:t.Standalone,rel:"noreferrer"}};var f,S,b;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs
  } as LinkProps)
}`,...(b=(S=c.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var y,v,L;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(L=(v=l.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var h,B,F;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    iconPlacement: 'before'
  } as LinkProps)
}`,...(F=(B=d.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var x,A,H;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    disabled: true
  } as LinkProps)
}`,...(H=(A=p.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var P,E,I;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    size: LinkSize.Small
  } as LinkProps)
}`,...(I=(E=u.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var z,T,M;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    mode: LinkMode.Standalone,
    label: ''
  } as LinkProps)
}`,...(M=(T=m.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var R,D,C;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    icon: 'external-link',
    href: 'https://www.google.com',
    target: LinkTarget.Blank,
    mode: LinkMode.Standalone
  } as LinkProps)
}`,...(C=(D=k.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var N,_,O;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(O=(_=g.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var j,q,G;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: ({
    ...defaultArgs,
    label: 'No Referrer',
    target: LinkTarget.Blank,
    mode: LinkMode.Standalone,
    rel: 'noreferrer'
  } as LinkProps)
}`,...(G=(q=w.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const oa=["Inline","Standalone","IconPlacement","Disabled","Small","Icon","External","AsSpanTag","RelAttribute"];export{g as AsSpanTag,p as Disabled,k as External,m as Icon,d as IconPlacement,c as Inline,w as RelAttribute,u as Small,l as Standalone,oa as __namedExportsOrder,sa as default};
//# sourceMappingURL=Link.stories-749f9e87.js.map
