import{q as i}from"./entry.78b194ac.js";const l="-username",a="-collection";function m(e,o){if(!e)return console.log("No window object in fetchCollection"),null;try{const n=i().expiryCollections,s=new Date().getTime(),c=e.localStorage.getItem(String(o).toLowerCase()+a);if(!c)return null;const r=JSON.parse(c);return n!=0&&r.stored+n<s?null:typeof r=="object"?r:null}catch(t){return console.log(t),null}}function g(e,o,t){if(!e)return console.log("No window object in storeCollection"),null;const n=new Date().getTime();t.stored=n,e.localStorage.setItem(String(o).toLowerCase()+a,JSON.stringify(t))}function f(e,o){if(!e)return console.log("No window object in fetchUsername"),null;try{const n=i().expiryUsernames,s=new Date().getTime(),c=e.localStorage.getItem(String(o).toLowerCase()+l);if(!c)return null;const r=JSON.parse(c);return n!=0&&r.stored+n<s?null:r.username?r.username:null}catch(t){return console.log(t),null}}function S(e,o,t){if(!e)return console.log("No window object in storeUsername"),null;const n=new Date().getTime(),s={username:t,stored:n};e.localStorage.setItem(String(o).toLowerCase()+l,JSON.stringify(s))}export{m as a,g as b,f,S as s};
