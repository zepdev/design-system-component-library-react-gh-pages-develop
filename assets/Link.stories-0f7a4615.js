import{w as x,e,u as i}from"./index-95c7b577.js";import{L as E,b as t,c as s,a as o}from"./Link-a7a027e2.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./clsx-42c82d7d.js";import"./index-39946eba.js";import"./Icon-35233731.js";const j={title:"Components/Link",component:E,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},size:{control:{type:"radio",options:[t.Base,t.Small]}},target:{control:{type:"radio",options:[s.Blank,s.Self]}},mode:{control:{type:"radio",options:[o.Inline,o.Standalone]}}}},r={args:{label:"Link",href:"#",disabled:!1,size:t.Base,target:s.Self,mode:o.Standalone},play:async({canvasElement:H,step:n})=>{const a=x(H).getByRole("link");await n("Initial checks",async()=>{await e(a).toBeInTheDocument(),await e(a).not.toHaveFocus()}),await n("Focus link with keyboard",async()=>{await i.tab(),await e(a).toHaveFocus()}),await n("Blur link with keyboard",async()=>{await i.tab(),await e(a).not.toHaveFocus()}),await n("Focus link with mouse",async()=>{await i.click(a),await e(a).toHaveFocus()}),await n("Blur link after focus with mouse",async()=>{await i.tab(),await e(a).not.toHaveFocus()}),await n("Click link",async()=>{await i.click(a),await e(a).toHaveFocus()}),await n("Blur link and check focus",async()=>{await i.tab(),await e(a).not.toHaveFocus()})}},l={args:{label:"Link",href:"https://www.google.com",disabled:!1,size:t.Base,target:s.Blank,mode:o.Inline}},c={args:{href:"https://www.google.com",disabled:!1,size:t.Base,target:s.Blank,mode:o.Standalone}},d={args:{as:"span",label:"span tag (no focus)",href:"#",disabled:!1,size:t.Base,target:s.Blank,mode:o.Standalone}},k={args:{label:"No Referrer",href:"#",disabled:!1,size:t.Base,target:s.Blank,mode:o.Standalone,rel:"noreferrer"}};var p,u,w;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: ({
    label: 'Link',
    href: '#',
    disabled: false,
    size: LinkSize.Base,
    target: LinkTarget.Self,
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
}`,...(w=(u=r.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var m,g,f;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: ({
    label: 'Link',
    href: 'https://www.google.com',
    disabled: false,
    size: LinkSize.Base,
    target: LinkTarget.Blank,
    mode: LinkMode.Inline
  } as LinkProps)
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,h,B;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: ({
    href: 'https://www.google.com',
    disabled: false,
    size: LinkSize.Base,
    target: LinkTarget.Blank,
    mode: LinkMode.Standalone
  } as LinkProps)
}`,...(B=(h=c.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var L,y,S;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: ({
    as: 'span',
    label: 'span tag (no focus)',
    href: '#',
    disabled: false,
    size: LinkSize.Base,
    target: LinkTarget.Blank,
    mode: LinkMode.Standalone
  } as LinkProps)
}`,...(S=(y=d.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var v,F,z;k.parameters={...k.parameters,docs:{...(v=k.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: ({
    label: 'No Referrer',
    href: '#',
    disabled: false,
    size: LinkSize.Base,
    target: LinkTarget.Blank,
    mode: LinkMode.Standalone,
    rel: 'noreferrer'
  } as LinkProps)
}`,...(z=(F=k.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};const q=["Default","External","StandaloneIcon","AsSpanTag","RelAttribute"];export{d as AsSpanTag,r as Default,l as External,k as RelAttribute,c as StandaloneIcon,q as __namedExportsOrder,j as default};
//# sourceMappingURL=Link.stories-0f7a4615.js.map
