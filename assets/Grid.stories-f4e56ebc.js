import{R as e,r as u}from"./index-9edec130.js";import{G as z,a as s}from"./Grid-f9b2742d.js";import"./_commonjsHelpers-de833af9.js";import"./clsx.m-1229b3e0.js";var t="/home/circleci/project/src/components/grid/Grid.stories.tsx";const b={title:"Components/Grid",component:z,tags:["autodocs"],argTypes:{children:{control:{disable:!0}},columns:{control:{type:"object"}}}},a={args:{children:e.createElement(e.Fragment,null,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(r=>e.createElement("span",{className:"zep-p-0_25 zep-flex zep-h-2 zep-items-center zep-justify-center zep-bg-lightblue-500 zep-text-greyscale-0",key:`grid-item-${r}`,__self:void 0,__source:{fileName:t,lineNumber:26,columnNumber:78}},r)))}},n={args:{children:e.createElement(e.Fragment,null,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(r=>e.createElement(u.Fragment,{key:`grid-item-duo-${16-r}`,__self:void 0,__source:{fileName:t,lineNumber:35,columnNumber:74}},e.createElement(s,{colSpan:{lg:16-r},__self:void 0,__source:{fileName:t,lineNumber:36,columnNumber:13}},e.createElement("span",{className:"zep-flex zep-h-2 zep-items-center zep-justify-center zep-bg-darkblue-500 zep-p-0.25 zep-text-greyscale-0",__self:void 0,__source:{fileName:t,lineNumber:39,columnNumber:15}})),e.createElement(s,{colSpan:{lg:r},__self:void 0,__source:{fileName:t,lineNumber:41,columnNumber:13}},e.createElement("span",{className:"zep-flex zep-h-2 zep-items-center zep-justify-center zep-bg-lightblue-500 zep-p-0.25 zep-text-greyscale-0",__self:void 0,__source:{fileName:t,lineNumber:44,columnNumber:15}})))))}};var m,l,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(item => <span className="zep-p-0_25 zep-flex zep-h-2 zep-items-center zep-justify-center zep-bg-lightblue-500 zep-text-greyscale-0" key={\`grid-item-\${item}\`}>
            {item}
          </span>)}
      </>
  }
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,i,o;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(item => <Fragment key={\`grid-item-duo-\${16 - item}\`}>
            <GridItem colSpan={{
          lg: (16 - item as any)
        }}>
              <span className="zep-flex zep-h-2 zep-items-center zep-justify-center zep-bg-darkblue-500 zep-p-0.25 zep-text-greyscale-0" />
            </GridItem>
            <GridItem colSpan={{
          lg: (item as any)
        }}>
              <span className="zep-flex zep-h-2 zep-items-center zep-justify-center zep-bg-lightblue-500 zep-p-0.25 zep-text-greyscale-0" />
            </GridItem>
          </Fragment>)}
      </>
  }
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const N=["Default","CustomGridItemsSpan"];export{n as CustomGridItemsSpan,a as Default,N as __namedExportsOrder,b as default};
//# sourceMappingURL=Grid.stories-f4e56ebc.js.map
