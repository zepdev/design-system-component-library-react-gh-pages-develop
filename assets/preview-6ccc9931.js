import"./index-39946eba.js";import{c as p,b as o,t as v}from"./themes-ad839cfe.js";import"./_commonjsHelpers-de833af9.js";const{useParameter:S,addons:_,useEffect:b,useMemo:D}=__STORYBOOK_MODULE_PREVIEW_API__;var R=Object.defineProperty,O=(e,t)=>{for(var r in t)R(e,r,{get:t[r],enumerable:!0})},k={};O(k,{initializeThemeState:()=>E,pluckThemeFromContext:()=>u,useThemeParameters:()=>d});var w="@storybook/addon-styling",y=`${w}/theme-switcher`,M="theming",I="theme",P={},x={REGISTER_THEMES:`${y}/REGISTER_THEMES`};function u({globals:e}){return e[I]||""}function d(){return S(M,P)}function E(e,t){_.getChannel().emit(x.REGISTER_THEMES,{defaultTheme:t,themes:e})}var G="html",h=e=>e.split(" ").filter(Boolean),$=({themes:e,defaultTheme:t,parentSelector:r=G})=>(E(Object.keys(e),t),(f,g)=>{let{themeOverride:a}=d(),s=u(g);return b(()=>{let n=a||s||t,i=document.querySelector(r);Object.entries(e).filter(([c])=>c!==n).forEach(([c,T])=>{let m=h(T);m.length>0&&i.classList.remove(...m)});let l=h(e[n]);l.length>0&&i.classList.add(...l)},[a,s,r]),f()});const H={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},viewport:{viewports:p},backgrounds:{values:[o.white,o.light,o.dark]}}},L=[$({themes:v,defaultTheme:"holding"})];export{L as decorators,H as default};
//# sourceMappingURL=preview-6ccc9931.js.map
