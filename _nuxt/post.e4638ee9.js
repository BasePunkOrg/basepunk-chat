import{H as g,M as d}from"./components.89a90d5d.js";import{a as C,R as b,s as y,b as P,e as s,w as x,c,y as p,D as h,o as i}from"./entry.78b194ac.js";import{C as _}from"./ChatPost.ed062fb2.js";import{C as O}from"./ChatFeed.1abfd9ff.js";import"./composables.ca0d0fb6.js";import"./user.3dd0c4c7.js";import"./ProfileImage.7fcfc4b0.js";import"./WaitingToast.560b9bce.js";import"./textUtils.819a8520.js";import"./MintedPostImage.896e07e0.js";import"./storageUtils.cfba1676.js";import"./SwitchChainButton.b3666044.js";import"./site.108cd6c8.js";import"./ConnectWalletButton.c9179eba.js";import"./Web3StorageImageUpload.b450e73a.js";const k={data(){return{hasMaster:!1,masterPost:null,post:null,replyNotMaster:!1}},components:{ChatFeed:O,ChatPost:_},created(){this.getPostObject()},computed:{getOrbisContext(){return this.post?.context?this.post.context:this.post?.content.context?this.post.content.context:this.post?.context_details.context_id?this.post.context_details.context_id:this.$config.orbisTest?this.$config.orbisTestContext:this.$config.orbisContext},getPostAuthor(){return this.post?this.post.creator_details.metadata.address:null},getQueryId(){return this.route.query.id}},methods:{async getPostObject(){this.post=null,this.masterPost=null,this.hasMaster=!1,this.replyNotMaster=!1;let{data:t,error:o}=await this.$orbis.getPost(this.route.query.id);if(this.post=t,o)console.log("Orbis error"),console.log(o),this.toast("Orbis error",{type:"error"}),this.toast(o,{type:"error"});else if(this.post.master){this.hasMaster=!0,this.post.master!==this.post.reply_to&&(this.replyNotMaster=!0);let{data:l,error:n}=await this.$orbis.getPost(this.post.master);this.masterPost=l,n&&(console.log("Orbis error"),console.log(n),this.toast("Orbis error",{type:"error"}),this.toast(n,{type:"error"}))}}},setup(){const t=b(),o=y();return{route:t,toast:o}},watch:{getQueryId(t,o){this.getPostObject()}}};function w(t,o,l,n,e,a){const r=d,u=g,m=h("ChatPost"),f=h("ChatFeed");return i(),P("div",null,[s(u,null,{default:x(()=>[s(r,{name:"description",content:"Check out this chat post on "+t.$config.projectName+"!"},null,8,["content"]),s(r,{property:"og:image",content:t.$config.projectUrl+t.$config.previewImagePost},null,8,["content"]),s(r,{property:"og:description",content:"Check out this chat post on "+t.$config.projectName+"!"},null,8,["content"]),s(r,{name:"twitter:image",content:t.$config.projectUrl+t.$config.previewImagePost},null,8,["content"]),s(r,{name:"twitter:description",content:"Check out this chat post on "+t.$config.projectName+"!"},null,8,["content"])]),_:1}),e.masterPost?(i(),c(m,{key:0,class:"m-4",post:e.masterPost,orbisContext:a.getOrbisContext},null,8,["post","orbisContext"])):p("",!0),e.post?(i(),c(m,{key:1,post:e.post,orbisContext:a.getOrbisContext},null,8,["post","orbisContext"])):p("",!0),e.post?(i(),c(f,{key:2,id:e.post.stream_id,master:e.post.master,masterPost:e.post,orbisContext:a.getOrbisContext},null,8,["id","master","masterPost","orbisContext"])):p("",!0)])}const A=C(k,[["render",w]]);export{A as default};