import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const{useParameter:f,addons:g,useEffect:p,useMemo:$}=__STORYBOOK_MODULE_PREVIEW_API__;var y=Object.defineProperty,S=(e,t)=>{for(var r in t)y(e,r,{get:t[r],enumerable:!0})},v={};S(v,{initializeThemeState:()=>u,pluckThemeFromContext:()=>h,useThemeParameters:()=>d});var R="@storybook/addon-styling",O=`${R}/theme-switcher`,b="theming",M="theme",w={},I={REGISTER_THEMES:`${O}/REGISTER_THEMES`};function h({globals:e}){return e[M]||""}function d(){return f(b,w)}function u(e,t){g.getChannel().emit(I.REGISTER_THEMES,{defaultTheme:t,themes:e})}var P="html",c=e=>e.split(" ").filter(Boolean),k=({themes:e,defaultTheme:t,parentSelector:r=P})=>(u(Object.keys(e),t),(E,_)=>{let{themeOverride:s}=d(),a=h(_);return p(()=>{let o=s||a||t,n=document.querySelector(r);Object.entries(e).filter(([m])=>m!==o).forEach(([m,T])=>{let i=c(T);i.length>0&&n.classList.remove(...i)});let l=c(e[o]);l.length>0&&n.classList.add(...l)},[s,a,r]),E()});const j={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}},A=[k({themes:{cat:"theme_cat",powersystems:"theme_powersystems",rental:"theme_rental",systems:"theme_systems",holding:"theme_holding"},defaultTheme:"holding"})];export{A as decorators,j as default};
//# sourceMappingURL=preview-d6a7c5f2.js.map
