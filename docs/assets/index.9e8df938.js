var h=Object.defineProperty;var u=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var m=(r,e,t)=>e in r?h(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,p=(r,e)=>{for(var t in e||(e={}))g.call(e,t)&&m(r,t,e[t]);if(u)for(var t of u(e))x.call(e,t)&&m(r,t,e[t]);return r};import{j as l,r as c,R as y}from"./vendor.d8765360.js";const v=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};v();const o=l.exports.jsx,d=l.exports.jsxs,f=l.exports.Fragment,j=({setCategorias:r})=>{const[e,t]=c.exports.useState("");return d("form",{onSubmit:n=>{n.preventDefault(),e.trim().length>2&&(r(s=>[e,...s]),t(""))},children:[o("p",{children:"Agregar categoria"}),o("input",{type:"text",className:"",value:e,onChange:n=>t(n.target.value)}),o("input",{type:"submit",value:"Agregar"})]})},b=({src:r,title:e})=>d("div",{className:"card animate__animated animate__fadeInDown",children:[o("p",{children:e}),o("img",{src:r,title:e})]}),G=async r=>{const e=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(r)}&api_key=dc6zaTOxFJmzC&limit=10`,t=await fetch(e),{data:i}=await t.json();return i.map(s=>{var a;return{id:s.id,title:s.title,src:(a=s.images)==null?void 0:a.downsized_medium.url}})},S=r=>{const[e,t]=c.exports.useState({data:[],loading:!0});return c.exports.useEffect(()=>{setTimeout(()=>{G(r).then(i=>{t({data:i,loading:!1})})},1500)},[]),e},I=({categoria:r})=>{const{loading:e,data:t}=S(r);return d(f,{children:[o("h2",{children:r}),e&&o("p",{children:"Cargando"}),o("div",{className:"card-grid ",children:t.map(i=>o(b,p({},i),i.id))})]})},N=()=>{const[r,e]=c.exports.useState([]);return d(f,{children:[o("h2",{children:"GifExpert App"}),o(j,{setCategorias:e}),o("hr",{}),r.map(t=>o(I,{categoria:t},t))]})};y.render(o(N,{}),document.getElementById("root"));