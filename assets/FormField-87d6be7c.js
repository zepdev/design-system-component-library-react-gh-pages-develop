import{R as a}from"./index-f1f749bf.js";import{c as l}from"./clsx.m-1229b3e0.js";import{F as n}from"./Icon-885b0b88.js";const d="zep-form-field",o=({messageId:r,required:t,children:i,state:e="default",message:s,...m})=>a.createElement("fieldset",{className:l(d,"inline-flex","flex-col","flex-nowrap"),"data-testid":"zep-form-fieldset",...m},i,a.createElement("span",{id:r,className:l({"text-zep-error":e==="error"||t,"text-zep-info":e==="info"},"mt-2 flex flex-row items-center gap-2")},(e==="error"||t)&&a.createElement(n,{name:"Warning",className:"text-zep-error"}),e==="info"&&a.createElement(n,{name:"Info",className:"text-zep-info"}),s));try{o.displayName="FormField",o.__docgenInfo={description:"",displayName:"FormField",props:{required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},messageId:{defaultValue:null,description:"",name:"messageId",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"info"'},{value:'"default"'}]}}}}}catch{}export{o as F};
//# sourceMappingURL=FormField-87d6be7c.js.map
