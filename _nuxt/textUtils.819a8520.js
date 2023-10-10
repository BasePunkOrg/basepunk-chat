import{q as s}from"./entry.78b194ac.js";function n(u){const e=s();let r;try{r=new RegExp(`(https?:\\/\\/(?!.*\\.(jpg|png|jpeg|img|gif|pdf|docx))[^\\s]+)(?<![,.:;?!\\-\\"')])`,"g")}catch{r=/(https?:\/\/(?!.*\.(jpg|png|jpeg|img|gif|pdf|docx))[^\s]+)/g}const i=u.match(r);if(i){const l=i[0];return l.startsWith(e.projectUrl+"/nft/collection")?l.split("?id=")[1]:null}return null}function c(u){const e=s();let r;try{r=new RegExp(`(https?:\\/\\/(?!.*\\.(jpg|png|jpeg|img|gif|pdf|docx))[^\\s]+)(?<![,.:;?!\\-\\"')])`,"g")}catch{r=/(https?:\/\/(?!.*\.(jpg|png|jpeg|img|gif|pdf|docx))[^\s]+)/g}const i=u.match(r);if(i){const l=i[0];return l.startsWith("https://www.youtube.com")||l.startsWith("http://www.youtube.com")||l.startsWith("https://youtu.be")||l.startsWith("http://youtu.be")||l.startsWith(e.projectUrl+"/nft/collection")?null:l}return null}function f(u){let e=/(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i,r=u.match(e);return r||(e=/(http|https|ipfs):\/\/\S+\?.img/,r=u.match(e)),r?r[0]:""}function d(u){let e=String(u);return e.includes("	")?e=e.replace(/\u0009/g,"\u26A0"):e.includes(" ")?e=e.replace(/\u0020/g,"\u26A0"):e.includes("\xA0")?e=e.replace(/\u00A0/g,"\u26A0"):e.includes("\xAD")?e=e.replace(/\u00AD/g,"\u26A0"):e.includes("\u034F")?e=e.replace(/\u034F/g,"\u26A0"):e.includes("\u061C")?e=e.replace(/\u061C/g,"\u26A0"):e.includes("\u115F")?e=e.replace(/\u115F/g,"\u26A0"):e.includes("\u1160")?e=e.replace(/\u1160/g,"\u26A0"):e.includes("\u17B4")?e=e.replace(/\u17B4/g,"\u26A0"):e.includes("\u17B5")?e=e.replace(/\u17B5/g,"\u26A0"):e.includes("\u180E")?e=e.replace(/\u180E/g,"\u26A0"):e.includes("\u2000")?e=e.replace(/\u2000/g,"\u26A0"):e.includes("\u2001")?e=e.replace(/\u2001/g,"\u26A0"):e.includes("\u2002")?e=e.replace(/\u2002/g,"\u26A0"):e.includes("\u2003")?e=e.replace(/\u2003/g,"\u26A0"):e.includes("\u2004")?e=e.replace(/\u2004/g,"\u26A0"):e.includes("\u2005")?e=e.replace(/\u2005/g,"\u26A0"):e.includes("\u2006")?e=e.replace(/\u2006/g,"\u26A0"):e.includes("\u2007")?e=e.replace(/\u2007/g,"\u26A0"):e.includes("\u2008")?e=e.replace(/\u2008/g,"\u26A0"):e.includes("\u2009")?e=e.replace(/\u2009/g,"\u26A0"):e.includes("\u200A")?e=e.replace(/\u200A/g,"\u26A0"):e.includes("\u200B")?e=e.replace(/\u200B/g,"\u26A0"):e.includes("\u200C")?e=e.replace(/\u200C/g,"\u26A0"):e.includes("\u200D")?e=e.replace(/\u200D/g,"\u26A0"):e.includes("\u200E")?e=e.replace(/\u200E/g,"\u26A0"):e.includes("\u200F")?e=e.replace(/\u200F/g,"\u26A0"):e.includes("\u202F")?e=e.replace(/\u202F/g,"\u26A0"):e.includes("\u205F")?e=e.replace(/\u205F/g,"\u26A0"):e.includes("\u2028")?e=e.replace(/\u2028/g,"\u26A0"):e.includes("\u205F")?e=e.replace(/\u205F/g,"\u26A0"):e.includes("\u2060")?e=e.replace(/\u2060/g,"\u26A0"):e.includes("\u2061")?e=e.replace(/\u2061/g,"\u26A0"):e.includes("\u2062")?e=e.replace(/\u2062/g,"\u26A0"):e.includes("\u2063")?e=e.replace(/\u2063/g,"\u26A0"):e.includes("\u2064")?e=e.replace(/\u2064/g,"\u26A0"):e.includes("\u206A")?e=e.replace(/\u206A/g,"\u26A0"):e.includes("\u206B")?e=e.replace(/\u206B/g,"\u26A0"):e.includes("\u206C")?e=e.replace(/\u206C/g,"\u26A0"):e.includes("\u206D")?e=e.replace(/\u206D/g,"\u26A0"):e.includes("\u206E")?e=e.replace(/\u206E/g,"\u26A0"):e.includes("\u206F")?e=e.replace(/\u206F/g,"\u26A0"):e.includes("\u2800")?e=e.replace(/\u2800/g,"\u26A0"):e.includes("\u3000")?e=e.replace(/\u3000/g,"\u26A0"):e.includes("\u3164")?e=e.replace(/\u3164/g,"\u26A0"):e.includes("\uFEFF")?e=e.replace(/\uFEFF/g,"\u26A0"):e.includes("\uFFA0")?e=e.replace(/\uFFA0/g,"\u26A0"):e.includes("\uFFF9")?e=e.replace(/\uFFF9/g,"\u26A0"):e.includes("\uFFFA")?e=e.replace(/\uFFFA/g,"\u26A0"):e.includes("\u1D159")?e=e.replace(/\u1D159/g,"\u26A0"):e.includes("\u1D173")?e=e.replace(/\u1D173/g,"\u26A0"):e.includes("\u1D174")?e=e.replace(/\u1D174/g,"\u26A0"):e.includes("\u1D175")?e=e.replace(/\u1D175/g,"\u26A0"):e.includes("\u1D176")?e=e.replace(/\u1D176/g,"\u26A0"):e.includes("\u1D177")?e=e.replace(/\u1D177/g,"\u26A0"):e.includes("\u1D178")?e=e.replace(/\u1D178/g,"\u26A0"):e.includes("\u1D179")?e=e.replace(/\u1D179/g,"\u26A0"):e.includes("\u1D17A")&&(e=e.replace(/\u1D17A/g,"\u26A0")),e}function g(u){let e=String(u);return e.includes("	")||e.includes(" ")||e.includes("\xA0")||e.includes("\xAD")||e.includes("\u034F")||e.includes("\u061C")||e.includes("\u115F")||e.includes("\u1160")||e.includes("\u17B4")||e.includes("\u17B5")||e.includes("\u180E")||e.includes("\u2000")||e.includes("\u2001")||e.includes("\u2002")||e.includes("\u2003")||e.includes("\u2004")||e.includes("\u2005")||e.includes("\u2006")||e.includes("\u2007")||e.includes("\u2008")||e.includes("\u2009")||e.includes("\u200A")||e.includes("\u200B")||e.includes("\u200C")||e.includes("\u200D")||e.includes("\u200E")||e.includes("\u200F")||e.includes("\u202F")||e.includes("\u205F")||e.includes("\u2028")||e.includes("\u205F")||e.includes("\u2060")||e.includes("\u2061")||e.includes("\u2062")||e.includes("\u2063")||e.includes("\u2064")||e.includes("\u206A")||e.includes("\u206B")||e.includes("\u206C")||e.includes("\u206D")||e.includes("\u206E")||e.includes("\u206F")||e.includes("\u2800")||e.includes("\u3000")||e.includes("\u3164")||e.includes("\uFEFF")||e.includes("\uFFA0")||e.includes("\uFFF9")||e.includes("\uFFFA")||e.includes("\u1D159")||e.includes("\u1D173")||e.includes("\u1D174")||e.includes("\u1D175")||e.includes("\u1D176")||e.includes("\u1D177")||e.includes("\u1D178")||e.includes("\u1D179")?!0:!!e.includes("\u1D17A")}function a(u){const e=/(?:https?:\/\/(?:www\.)?)?(?:[-\w]+\.)+[^\s]+\.(?:jpe?g|gif|png|img)/gi;return e.test(u)?u.replace(e,function(r){return'<div></div><img class="img-fluid rounded" style="max-height: 500px;" src="'+r+'" />'}):u}function p(u){const e=/(http|https|ipfs):\/\/\S+\?img/;return e.test(u)?u.replace(e,function(r){return'<img class="img-fluid rounded" style="max-height: 500px;" src="'+r+'" />'}):u}function o(u){return u.replace(/\s/g,"").replace(/[^\x00-\x7F]/g,"").trim().length}function h(u){const e=s();let r;try{r=new RegExp(`(https?:\\/\\/(?!.*\\.(jpg|png|jpeg|img|gif|pdf|docx))[^\\s]+)(?<![,.:;?!\\-\\"')])`,"g")}catch{r=/(https?:\/\/(?!.*\.(jpg|png|jpeg|img|gif|pdf|docx))[^\s]+)/g}return r.test(u)?u.replace(r,function(i){return i.startsWith("https://www.youtube.com/embed/")||i.endsWith("?.img")||i.endsWith("?img")||i.startsWith(e.projectUrl+"/nft/collection")?i:'<a target="_blank" href="'+i+'">'+i+"</a>"}):u}function F(u){const e=/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/g;return e.test(u)?u.replace(e,function(r){return"<iframe class='rounded' width='100%' height='315' src='https://www.youtube.com/embed/"+r.match(/(?:https?:\/\/)?(?:www\.|m\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\/?\?v=|\/embed\/|\/)([^\s&\?\/\#]+)/)[1]+"' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"}):u}export{d as a,p as b,n as c,c as f,f as g,g as h,a as i,o as t,h as u,F as y};
