import{H as R,T as W,M as j}from"./components.89a90d5d.js";import{a as y,I as g,C as f,l as w,s as v,o as a,b as l,f as t,v as k,x as A,y as c,i as h,t as m,F as T,G as B,S as U,p as V,e as u,w as x,c as H,T as Y,D as b,h as G}from"./entry.78b194ac.js";import{C as z}from"./ChatFeed.1abfd9ff.js";import{C as Q}from"./ConnectWalletButton.c9179eba.js";import{W as _}from"./WaitingToast.560b9bce.js";import{g as q}from"./domainUtils.ea69f474.js";import{s as J,a as K,f as X,b as M}from"./storageUtils.cfba1676.js";import{a as N}from"./textUtils.819a8520.js";import"./composables.ca0d0fb6.js";import"./ChatPost.ed062fb2.js";import"./user.3dd0c4c7.js";import"./ProfileImage.7fcfc4b0.js";import"./MintedPostImage.896e07e0.js";import"./SwitchChainButton.b3666044.js";import"./site.108cd6c8.js";import"./Web3StorageImageUpload.b450e73a.js";const Z={name:"AddImageToCollectionModal",props:["cAddress","mdAddress"],data(){return{componentId:null,imageUrl:null,waiting:!1}},mounted(){this.componentId=this.$.uid},methods:{async addNewImage(){this.waiting=!0;const i=new g(["function addImageToCollection(address nftAddress_, string memory imageUrl_) external"]),o=new f(this.mdAddress,i,this.signer);try{const n=await o.addImageToCollection(this.cAddress,this.imageUrl),s=this.toast({component:_,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),e=await n.wait();e.status===1?(this.toast.dismiss(s),this.toast("You have successfully added new image URL to the NFT collection.",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),this.imageUrl=null,document.getElementById("closeModal-"+this.componentId).click(),this.waiting=!1):(this.toast.dismiss(s),this.waiting=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(e))}catch(n){console.error(n);try{let s=n.message.split("reason=")[1];s=s.split(", method=")[0],s=s.replace('"',""),s=s.replace('"',""),s=s.replace("execution reverted:","Error:"),console.log(s),this.toast(s,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waiting=!1}}},setup(){const{signer:i}=w(),o=v();return{signer:i,toast:o}}},ee=["aria-labelledby"],te={class:"modal-dialog"},se={class:"modal-content"},oe={class:"modal-header"},ie=["id"],ne=["id"],ae={class:"modal-body"},re={class:"mt-4"},le=["for"],ce=t("strong",null," Add this image URL to collection: ",-1),de=[ce],he=["id"],me={key:0,class:"mt-3"},ue=["src"],pe=t("br",null,null,-1),ge=t("small",null,"If image didn't appear above, then something is wrong with the link you added.",-1),fe={class:"modal-footer"},_e=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),be=["disabled"],ye={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"};function we(i,o,n,s,e,r){return a(),l("div",{class:"modal fade",id:"addImageToCollectionModal",tabindex:"-1","aria-labelledby":"modalLabel-"+e.componentId,"aria-hidden":"true"},[t("div",te,[t("div",se,[t("div",oe,[t("h1",{class:"modal-title fs-5",id:"modalLabel-"+e.componentId},"Add Image To Collection",8,ie),t("button",{id:"closeModal-"+e.componentId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,ne)]),t("div",ae,[t("div",re,[t("label",{for:"input-"+e.componentId,class:"form-label"},de,8,le),k(t("input",{"onUpdate:modelValue":o[0]||(o[0]=d=>e.imageUrl=d),type:"text",class:"form-control",id:"input-"+e.componentId},null,8,he),[[A,e.imageUrl]]),e.imageUrl?(a(),l("div",me,[t("img",{src:e.imageUrl,class:"img-thumbnail img-fluid",style:{"max-width":"100px"}},null,8,ue),pe,ge])):c("",!0)])]),t("div",fe,[_e,t("button",{onClick:o[1]||(o[1]=(...d)=>r.addNewImage&&r.addNewImage(...d)),type:"button",class:"btn btn-primary",disabled:!e.imageUrl||e.waiting},[e.waiting?(a(),l("span",ye)):c("",!0),h(" Submit ")],8,be)])])])],8,ee)}const ve=y(Z,[["render",we]]),Ce={name:"ChangeCollectionPreviewModal",props:["cAddress","mdAddress"],emits:["saveCollection"],data(){return{componentId:null,imageUrl:null,waiting:!1}},mounted(){this.componentId=this.$.uid},methods:{async updateImage(){this.waiting=!0;const i=new g(["function setCollectionPreview(address nftAddress_, string memory collectionPreview_) external"]),o=new f(this.mdAddress,i,this.signer);try{const n=await o.setCollectionPreview(this.cAddress,this.imageUrl),s=this.toast({component:_,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),e=await n.wait();e.status===1?(this.toast.dismiss(s),this.toast("You have updated the NFT collection preview image.",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),this.$emit("saveCollection",{image:this.imageUrl}),this.imageUrl=null,document.getElementById("closeModal-"+this.componentId).click(),this.waiting=!1):(this.toast.dismiss(s),this.waiting=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(e))}catch(n){console.error(n);try{let s=n.message.split("reason=")[1];s=s.split(", method=")[0],s=s.replace('"',""),s=s.replace('"',""),s=s.replace("execution reverted:","Error:"),console.log(s),this.toast(s,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waiting=!1}}},setup(){const{signer:i}=w(),o=v();return{signer:i,toast:o}}},ke=["aria-labelledby"],Ae={class:"modal-dialog"},Ie={class:"modal-content"},xe={class:"modal-header"},Te=["id"],Ue=["id"],Me={class:"modal-body"},Ne=t("p",null,"Change your collection preview image.",-1),Be={class:"mt-4"},De=["for"],$e=t("strong",null," Enter new preview image URL: ",-1),Se=[$e],Fe=["id"],Pe={key:0,class:"mt-3"},Ee=["src"],Oe=t("br",null,null,-1),Le=t("small",null,"If image didn't appear above, then something is wrong with the link you added.",-1),Re={class:"modal-footer"},We=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),je=["disabled"],Ve={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"};function He(i,o,n,s,e,r){return a(),l("div",{class:"modal fade",id:"changeCollectionPreviewModal",tabindex:"-1","aria-labelledby":"modalLabel-"+e.componentId,"aria-hidden":"true"},[t("div",Ae,[t("div",Ie,[t("div",xe,[t("h1",{class:"modal-title fs-5",id:"modalLabel-"+e.componentId},"Change Collection Preview Image",8,Te),t("button",{id:"closeModal-"+e.componentId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,Ue)]),t("div",Me,[Ne,t("div",Be,[t("label",{for:"input-"+e.componentId,class:"form-label"},Se,8,De),k(t("input",{"onUpdate:modelValue":o[0]||(o[0]=d=>e.imageUrl=d),type:"text",class:"form-control",id:"input-"+e.componentId},null,8,Fe),[[A,e.imageUrl]]),e.imageUrl?(a(),l("div",Pe,[t("img",{src:e.imageUrl,class:"img-thumbnail img-fluid",style:{"max-width":"100px"}},null,8,Ee),Oe,Le])):c("",!0)])]),t("div",Re,[We,t("button",{onClick:o[1]||(o[1]=(...d)=>r.updateImage&&r.updateImage(...d)),type:"button",class:"btn btn-primary",disabled:!e.imageUrl||e.waiting},[e.waiting?(a(),l("span",Ve)):c("",!0),h(" Submit ")],8,je)])])])],8,ke)}const Ye=y(Ce,[["render",He]]),Ge={name:"ChangeDescriptionModal",props:["cAddress","cDescription","mdAddress"],emits:["saveCollection"],data(){return{componentId:null,editDescription:null,waiting:!1}},mounted(){this.componentId=this.$.uid,this.editDescription=this.cDescription},methods:{async update(){this.waiting=!0;const i=new g(["function setDescription(address nftAddress_, string memory description_) external"]),o=new f(this.mdAddress,i,this.signer);try{const n=await o.setDescription(this.cAddress,this.editDescription),s=this.toast({component:_,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),e=await n.wait();e.status===1?(this.toast.dismiss(s),this.toast("You have updated the NFT description.",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),this.$emit("saveCollection",{description:this.editDescription}),this.editDescription=null,document.getElementById("closeModal-"+this.componentId).click(),this.waiting=!1):(this.toast.dismiss(s),this.waiting=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(e))}catch(n){console.error(n);try{let s=n.message.split("reason=")[1];s=s.split(", method=")[0],s=s.replace('"',""),s=s.replace('"',""),s=s.replace("execution reverted:","Error:"),console.log(s),this.toast(s,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waiting=!1}}},setup(){const{signer:i}=w(),o=v();return{signer:i,toast:o}},watch:{cDescription(){this.editDescription=this.cDescription}}},ze=["aria-labelledby"],Qe={class:"modal-dialog"},qe={class:"modal-content"},Je={class:"modal-header"},Ke=["id"],Xe=["id"],Ze={class:"modal-body"},et=t("p",null,"Change your collection description.",-1),tt={class:"mt-4"},st=["for"],ot=t("strong",null," Enter new description: ",-1),it=[ot],nt=["id"],at={class:"modal-footer"},rt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),lt=["disabled"],ct={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"};function dt(i,o,n,s,e,r){return a(),l("div",{class:"modal fade",id:"changeDescriptionModal",tabindex:"-1","aria-labelledby":"modalLabel-"+e.componentId,"aria-hidden":"true"},[t("div",Qe,[t("div",qe,[t("div",Je,[t("h1",{class:"modal-title fs-5",id:"modalLabel-"+e.componentId},"Change description",8,Ke),t("button",{id:"closeModal-"+e.componentId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,Xe)]),t("div",Ze,[et,t("div",tt,[t("label",{for:"input-"+e.componentId,class:"form-label"},it,8,st),k(t("input",{"onUpdate:modelValue":o[0]||(o[0]=d=>e.editDescription=d),type:"text",class:"form-control",id:"input-"+e.componentId},null,8,nt),[[A,e.editDescription]])])]),t("div",at,[rt,t("button",{onClick:o[1]||(o[1]=(...d)=>r.update&&r.update(...d)),type:"button",class:"btn btn-primary",disabled:!e.editDescription||e.waiting},[e.waiting?(a(),l("span",ct)):c("",!0),h(" Submit ")],8,lt)])])])],8,ze)}const ht=y(Ge,[["render",dt]]),mt={name:"ChangeNftTypeModal",props:["cAddress","cType","mdAddress"],emits:["saveCollection"],data(){return{componentId:null,editImageMetadataUrl:null,editImageOptions:[{description:"0) Onchain image(s)"},{description:"1) Static metadata URL"},{description:"2) Generative metadata (.json)"},{description:"3) Generative metadata"}],editImagePreviewUrl:"",typeChoice:0,waitingMetadata:!1}},mounted(){this.componentId=this.$.uid},methods:{async updateMetadata(){this.waitingMetadata=!0;const i=new g(["function setMdTypeAndUrlOrImage(address nftAddress_, uint256 mdType_, string memory mdUrlOrImage_, string memory collectionImage_) external"]),o=new f(this.mdAddress,i,this.signer);this.typeChoice===0&&(this.editImagePreviewUrl=this.editImageMetadataUrl),this.editImagePreviewUrl===null&&(this.editImagePreviewUrl="");try{const n=await o.setMdTypeAndUrlOrImage(this.cAddress,this.typeChoice,this.editImageMetadataUrl,this.editImagePreviewUrl),s=this.toast({component:_,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),e=await n.wait();e.status===1?(this.toast.dismiss(s),this.toast("You have updated the NFT image and/or metadata URL.",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),this.$emit("saveCollection",{type:this.typeChoice,image:this.editImagePreviewUrl}),this.editImageMetadataUrl=null,this.editImagePreviewUrl="",document.getElementById("closeModal-"+componentId).click(),this.waitingMetadata=!1):(this.toast.dismiss(s),this.waitingMetadata=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(e))}catch(n){console.error(n);try{let s=n.message.split("reason=")[1];s=s.split(", method=")[0],s=s.replace('"',""),s=s.replace('"',""),s=s.replace("execution reverted:","Error:"),console.log(s),this.toast(s,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waitingMetadata=!1}}},setup(){const{signer:i}=w(),o=v();return{signer:i,toast:o}}},ut={class:"modal fade",id:"changeNftTypeModal",tabindex:"-1","aria-labelledby":"changeNftTypeModalLabel","aria-hidden":"true"},pt={class:"modal-dialog"},gt={class:"modal-content"},ft={class:"modal-header"},_t=t("h1",{class:"modal-title fs-5",id:"changeNftTypeModalLabel"},"Change NFT Type",-1),bt=["id"],yt={class:"modal-body"},wt=t("p",null,[t("strong",null,"Pick one of these options:")],-1),vt={class:"dropdown"},Ct={class:"btn btn-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},kt={class:"dropdown-menu text-break"},At=["onClick"],It={class:"mt-3"},xt={key:0},Tt={key:1},Ut=t("strong",null,"file",-1),Mt={key:2},Nt=t("strong",null,"folder",-1),Bt={key:3},Dt=t("strong",null,"folder",-1),$t={class:"mt-4"},St={for:"imageMetadataUrl",class:"form-label"},Ft={key:0},Pt={key:1},Et={key:2},Ot={key:3},Lt={key:0,class:"mt-4"},Rt=t("label",{for:"collectionPreviewUrl",class:"form-label"},[t("strong",null," Change collection preview image (optional): ")],-1),Wt=t("div",{id:"previewImageHelp",class:"form-text"},"This is a preview image for the whole collection, not for individual NFTs.",-1),jt={class:"modal-footer"},Vt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),Ht=["disabled"],Yt={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"};function Gt(i,o,n,s,e,r){return a(),l("div",ut,[t("div",pt,[t("div",gt,[t("div",ft,[_t,t("button",{id:"closeModal-"+e.componentId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,bt)]),t("div",yt,[t("p",null,"Current type of this NFT collection is: "+m(e.editImageOptions[n.cType].description)+".",1),wt,t("div",vt,[t("button",Ct,m(e.editImageOptions[e.typeChoice].description),1),t("div",kt,[(a(!0),l(T,null,B(e.editImageOptions,(d,p)=>(a(),l("span",{key:p,onClick:I=>e.typeChoice=p,class:"dropdown-item cursor-pointer"},m(d.description),9,At))),128))])]),t("div",It,[e.typeChoice==0?(a(),l("p",xt,' The "Onchain image(s)" option means that metadata is stored onchain (within the smart contract itself). Use this option if you want to add an image URL in the field below (not a metadata file). This is the default option for NFTs created through this launchpad. ')):c("",!0),e.typeChoice==1?(a(),l("p",Tt,[h(' The "Static metadata URL" option means that all the NFTs in the collection have the same (static) image and meta data. The metadata is stored offchain, usually on IPFS or on a centralized server. Use this option if you have a URL of a single metadata '),Ut,h(" (all NFTs have the same metadata and image). ")])):c("",!0),e.typeChoice==2?(a(),l("p",Mt,[h(' The "Generative metadata (.json)" option means that all the NFTs in the collection have a different image and different meta data. The metadata is stored offchain, usually on IPFS or on a centralized server. Use this option if you have a metadata '),Nt,h(" URL with multiple metadata files in it, where these files HAVE a .json extension. ")])):c("",!0),e.typeChoice==3?(a(),l("p",Bt,[h(' The "Generative metadata" option means that all the NFTs in the collection have a different image and different meta data. The metadata is stored offchain, usually on IPFS or on a centralized server. Use this option if you have a metadata '),Dt,h(" URL with multiple metadata files in it, where these files DO NOT HAVE a .json extension. ")])):c("",!0)]),t("div",$t,[t("label",St,[t("strong",null,[h(" Enter "),e.typeChoice==0?(a(),l("span",Ft,"image URL:")):c("",!0),e.typeChoice==1?(a(),l("span",Pt,"metadata file URL:")):c("",!0),e.typeChoice==2?(a(),l("span",Et,"metadata folder URL:")):c("",!0),e.typeChoice==3?(a(),l("span",Ot,"metadata folder URL:")):c("",!0)])]),k(t("input",{"onUpdate:modelValue":o[0]||(o[0]=d=>e.editImageMetadataUrl=d),type:"text",class:"form-control",id:"imageMetadataUrl"},null,512),[[A,e.editImageMetadataUrl]])]),e.typeChoice>0?(a(),l("div",Lt,[Rt,k(t("input",{"onUpdate:modelValue":o[1]||(o[1]=d=>e.editImagePreviewUrl=d),type:"text",class:"form-control",id:"collectionPreviewUrl","aria-describedby":"previewImageHelp"},null,512),[[A,e.editImagePreviewUrl]]),Wt])):c("",!0)]),t("div",jt,[Vt,t("button",{onClick:o[2]||(o[2]=(...d)=>r.updateMetadata&&r.updateMetadata(...d)),type:"button",class:"btn btn-primary",disabled:!e.editImageMetadataUrl||e.waitingMetadata},[e.waitingMetadata?(a(),l("span",Yt)):c("",!0),h(" Submit ")],8,Ht)])])])])}const zt=y(mt,[["render",Gt]]),Qt={name:"RemoveImageFromCollectionModal",props:["cAddress","mdAddress"],data(){return{componentId:null,images:[],imageUrl:null,waitingLoad:!1,waitingRemove:!1}},mounted(){this.componentId=this.$.uid},methods:{async loadImages(){this.waitingLoad=!0;const i=new g(["function getCollectionImages(address nftAddress_) external view returns (string[] memory)"]),o=new f(this.mdAddress,i,this.signer);try{this.images=await o.getCollectionImages(this.cAddress),this.waitingLoad=!1}catch(n){console.error(n),this.waitingLoad=!1}},async removeImage(i){this.waitingRemove=!0;const o=new g(["function removeImageFromCollectionByIndex(address nftAddress_, uint256 index_) external"]),n=new f(this.mdAddress,o,this.signer);try{const s=await n.removeImageFromCollectionByIndex(this.cAddress,i),e=this.toast({component:_,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+s.hash,"_blank").focus()}),r=await s.wait();if(r.status===1){this.toast.dismiss(e),this.toast("You have successfully removed an image from the NFT collection.",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+s.hash,"_blank").focus()}),this.imageUrl=null;const d=[...this.images];d.splice(i,1),this.images=d,this.waitingRemove=!1}else this.toast.dismiss(e),this.waitingRemove=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+s.hash,"_blank").focus()}),console.log(r)}catch(s){console.error(s);try{let e=s.message.split("reason=")[1];e=e.split(", method=")[0],e=e.replace('"',""),e=e.replace('"',""),e=e.replace("execution reverted:","Error:"),console.log(e),this.toast(e,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waitingRemove=!1}}},setup(){const{signer:i}=w(),o=v();return{signer:i,toast:o}}},qt=["aria-labelledby"],Jt={class:"modal-dialog"},Kt={class:"modal-content"},Xt={class:"modal-header"},Zt=["id"],es=["id"],ts={class:"modal-body"},ss={class:"row"},os=["for"],is=t("strong",null," Load images from collection: ",-1),ns=[is],as=["disabled"],rs={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},ls={key:0,class:"row mt-3"},cs={class:"card"},ds=["src"],hs={class:"card-body"},ms={class:"row"},us=["onClick","disabled"],ps=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close")],-1);function gs(i,o,n,s,e,r){return a(),l("div",{class:"modal fade",id:"removeImageFromCollectionModal",tabindex:"-1","aria-labelledby":"modalLabel-"+e.componentId,"aria-hidden":"true"},[t("div",Jt,[t("div",Kt,[t("div",Xt,[t("h1",{class:"modal-title fs-5",id:"modalLabel-"+e.componentId},"Remove Image From Collection",8,Zt),t("button",{id:"closeModal-"+e.componentId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,es)]),t("div",ts,[t("div",ss,[t("label",{for:"input-"+e.componentId,class:"form-label"},ns,8,os)]),t("div",null,[t("button",{class:"btn btn-primary",onClick:o[0]||(o[0]=(...d)=>r.loadImages&&r.loadImages(...d)),disabled:e.waitingLoad},[e.waitingLoad?(a(),l("span",rs)):c("",!0),h(" Load images ")],8,as)]),e.images?(a(),l("div",ls,[(a(!0),l(T,null,B(e.images,(d,p)=>(a(),l("div",{key:d,class:"col-md-4 mb-3"},[t("div",cs,[t("img",{src:d,class:"card-img-top"},null,8,ds),t("div",hs,[t("div",ms,[t("button",{class:"btn btn-danger",onClick:I=>r.removeImage(p),disabled:e.waitingRemove||e.images.length==1}," Delete ",8,us)])])])]))),128))])):c("",!0)]),ps])])],8,qt)}const fs=y(Qt,[["render",gs]]),_s={name:"NftCollection",data(){return{cAddress:null,cAuthorAddress:null,cAuthorDomain:null,cDescription:null,cImage:null,cName:null,cSupply:null,cType:0,mdAddress:null,priceBuyWei:null,priceSellWei:null,userTokenId:null,waitingBuy:!1,waitingData:!1,waitingSell:!1}},components:{AddImageToCollectionModal:ve,ChangeCollectionPreviewModal:Ye,ChangeDescriptionModal:ht,ChangeNftTypeModal:zt,ChatFeed:z,ConnectWalletButton:Q,RemoveImageFromCollectionModal:fs,WaitingToast:_},mounted(){this.cAddress=this.$route.query.id,this.cAddress&&this.getCollectionDetails()},computed:{getUsernameOrFullAddress(){if(this.cAuthorDomain){let i=String(this.cAuthorDomain).replace(this.$config.tldName,"");return N(i)+this.$config.tldName}else return this.cAuthorAddress},getUsernameOrShortAddress(){if(this.cAuthorAddress)if(this.cAuthorDomain){let i=String(this.cAuthorDomain).replace(this.$config.tldName,"");return N(i)+this.$config.tldName}else return U(this.cAuthorAddress);return null},isCurrentAddressOwner(){return this.cAuthorAddress&&this.address?String(this.cAuthorAddress).toLowerCase()===String(this.address).toLowerCase():!1}},methods:{getDomainName:q,async buyNft(){this.waitingBuy=!0;const i=new g(["function getBurnPrice() public view returns (uint256)","function getMintPrice() public view returns (uint256)","function mint(address to) external payable returns (uint256)","function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)","function totalSupply() public view returns (uint256)"]),o=new f(this.cAddress,i,this.signer);this.priceBuyWei=await o.getMintPrice();try{const n=await o.mint(this.address,{value:this.priceBuyWei}),s=this.toast({component:_,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),e=await n.wait();if(e.status===1){this.toast.dismiss(s),this.toast("You have successfully bought the NFT! Congrats!",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),this.priceBuyWei=await o.getMintPrice(),this.priceSellWei=await o.getBurnPrice();try{this.userTokenId=await o.tokenOfOwnerByIndex(this.address,0)}catch{this.userTokenId=null}this.cSupply=await o.totalSupply(),this.waitingBuy=!1}else this.toast.dismiss(s),this.waitingBuy=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(e)}catch(n){console.error(n);try{let s=n.message.split("reason=")[1];s=s.split(", method=")[0],s=s.replace('"',""),s=s.replace('"',""),s=s.replace("execution reverted:","Error:"),console.log(s),this.toast(s,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waitingBuy=!1}},async fetchUserDomain(){if(this.cAuthorAddress){const i=await this.getDomainName(this.cAuthorAddress);i&&(this.cAuthorDomain=i,J(window,this.cAuthorAddress,i+this.$config.tldName))}},formatPrice(i){if(i===null)return null;const o=Number(V(i));return o>100?o.toFixed(0):o>1?o.toFixed(2):o>.1?o.toFixed(4):o>.01?o.toFixed(5):o>.001?o.toFixed(6):o>1e-4?o.toFixed(7):o>1e-5?o.toFixed(8):o>1e-6?o.toFixed(9):o},async getCollectionDetails(i=!1){this.waitingData=!0;let o=K(window,this.cAddress);i&&(console.log("Refreshing collection metadata..."),o=null);let n=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(n=this.signer);const s=new g(["function getBurnPrice() public view returns (uint256)","function getMintPrice() public view returns (uint256)","function metadataAddress() public view returns (address)","function name() public view returns (string memory)","function owner() public view returns (address)","function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)","function totalSupply() public view returns (uint256)"]),e=new f(this.cAddress,s,n);o?.mdAddress?this.mdAddress=o.mdAddress:this.mdAddress=await e.metadataAddress();const r=new g(["function getCollectionDescription(address) public view returns (string memory)","function getCollectionMetadataType(address nftAddress_) external view returns (uint256)","function getCollectionPreviewImage(address) public view returns (string memory)"]),d=new f(this.mdAddress,r,n);this.priceBuyWei=await e.getMintPrice(),this.priceSellWei=await e.getBurnPrice(),o?.image?this.cImage=o.image:this.cImage=await d.getCollectionPreviewImage(this.cAddress),o?.description&&o.description!==""&&o.description!==null?this.cDescription=o.description:this.cDescription=await d.getCollectionDescription(this.cAddress),o?.type>=0?this.cType=o.type:this.cType=Number(await d.getCollectionMetadataType(this.cAddress)),o?.name?this.cName=o.name:this.cName=await e.name();try{this.userTokenId=await e.tokenOfOwnerByIndex(this.address,0)}catch{this.userTokenId=null}this.waitingData=!1,this.cSupply=await e.totalSupply(),o?.authorAddress?(this.cAuthorAddress=o.authorAddress,this.cAuthorDomain=o.authorDomain):this.cAuthorAddress=await e.owner(),this.cAuthorDomain=X(window,this.cAuthorAddress),this.cAuthorDomain||this.fetchUserDomain(),o={address:this.cAddress,authorAddress:this.cAuthorAddress,authorDomain:this.cAuthorDomain,description:this.cDescription,image:this.cImage,mdAddress:this.mdAddress,name:this.cName,type:this.cType},M(window,this.cAddress,o)},saveCollection(i){i?.type&&(this.cType=i.type),i?.description&&(this.cDescription=i.description),i?.image&&(this.cImage=i.image);const o={address:this.cAddress,authorAddress:this.cAuthorAddress,authorDomain:this.cAuthorDomain,description:this.cDescription,image:this.cImage,mdAddress:this.mdAddress,name:this.cName,type:this.cType};M(window,this.cAddress,o)},async sellNft(){this.waitingSell=!0;const i=new g(["function getBurnPrice() public view returns (uint256)","function getMintPrice() public view returns (uint256)","function burn(uint256 tokenId) external returns (uint256)","function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)","function totalSupply() public view returns (uint256)"]),o=new f(this.cAddress,i,this.signer);try{const n=await o.burn(this.userTokenId),s=this.toast({component:_,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),e=await n.wait();if(e.status===1){this.toast.dismiss(s),this.toast("You have dumped the NFT.",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),this.priceBuyWei=await o.getMintPrice(),this.priceSellWei=await o.getBurnPrice();try{this.userTokenId=await o.tokenOfOwnerByIndex(this.address,0)}catch{this.userTokenId=null}this.cSupply=await o.totalSupply(),this.waitingSell=!1}else this.toast.dismiss(s),this.waitingSell=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(e)}catch(n){console.error(n);try{let s=n.message.split("reason=")[1];s=s.split(", method=")[0],s=s.replace('"',""),s=s.replace('"',""),s=s.replace("execution reverted:","Error:"),console.log(s),this.toast(s,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waitingSell=!1}}},setup(){const{address:i,chainId:o,isActivated:n,signer:s}=w(),e=v();return{address:i,chainId:o,isActivated:n,shortenAddress:U,signer:s,toast:e}}},bs={class:"card border"},ys={class:"card-body"},ws={class:"fs-3"},vs={key:0,class:"mb-3 mt-3"},Cs={key:1,class:"mb-3 mt-3"},ks={key:2,class:"d-flex justify-content-center mb-3"},As=t("span",{class:"spinner-border spinner-border-lg",role:"status","aria-hidden":"true"},null,-1),Is=[As],xs={class:"row"},Ts={class:"col-md-5 text-center mb-3"},Us=["src"],Ms={class:"dropdown mt-3"},Ns=t("button",{class:"btn btn-outline-primary btn-sm dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Actions ",-1),Bs={class:"dropdown-menu"},Ds={key:0},$s=t("span",{class:"dropdown-item cursor-pointer","data-bs-toggle":"modal","data-bs-target":"#changeDescriptionModal"}," Change description ",-1),Ss=[$s],Fs={key:1},Ps=t("span",{class:"dropdown-item cursor-pointer","data-bs-toggle":"modal","data-bs-target":"#changeCollectionPreviewModal"}," Change collection preview image ",-1),Es=[Ps],Os={key:2},Ls=t("span",{class:"dropdown-item cursor-pointer","data-bs-toggle":"modal","data-bs-target":"#addImageToCollectionModal"}," Add new image to collection ",-1),Rs=[Ls],Ws={key:3},js=t("span",{class:"dropdown-item cursor-pointer","data-bs-toggle":"modal","data-bs-target":"#removeImageFromCollectionModal"}," Remove image from collection ",-1),Vs=[js],Hs={key:4},Ys=t("span",{class:"dropdown-item cursor-pointer","data-bs-toggle":"modal","data-bs-target":"#changeNftTypeModal"}," Change collection type ",-1),Gs=[Ys],zs={class:"col-md-7"},Qs={class:"mt-1 mb-4 muted-text",style:{"font-size":"14px"}},qs={class:"me-4"},Js=t("i",{class:"bi bi-file-earmark-text-fill me-1"},null,-1),Ks={class:"me-4"},Xs=t("i",{class:"bi bi-coin me-1"},null,-1),Zs={class:"me-4"},eo=t("i",{class:"bi bi-file-earmark-binary me-1"},null,-1),to={class:"me-4"},so=t("i",{class:"bi bi-box-arrow-up-right me-2"},null,-1),oo=["href"],io={key:0},no={class:"me-4"},ao=t("i",{class:"bi bi-box-arrow-up-right me-2"},null,-1),ro=["href"],lo={class:"row mb-3"},co={key:0,class:"d-grid gap-2 col"},ho={key:1,class:"d-grid gap-2 col"},mo=["disabled"],uo={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"},po={key:2,class:"d-grid gap-2 col"},go=["disabled"],fo={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"},_o={key:0},bo={key:0,class:"card border mt-3 scroll-500"},yo=G('<div class="card-body"><h5 class="mb-2 mt-3 text-center">Buy an NFT to see the chat</h5><div class="d-flex justify-content-center"><div class="col-12 col-lg-8"><p class="text-break text-center mt-3 mb-4"> This NFT&#39;s chat is open only for NFT holders. Buy an NFT to see the chat and talk with the NFT creator and other NFT holders. </p></div></div></div>',1),wo=[yo];function vo(i,o,n,s,e,r){const d=W,p=j,I=R,D=Y,$=b("ConnectWalletButton"),S=b("ChatFeed"),F=b("AddImageToCollectionModal"),P=b("ChangeCollectionPreviewModal"),E=b("ChangeDescriptionModal"),O=b("ChangeNftTypeModal"),L=b("RemoveImageFromCollectionModal");return a(),l(T,null,[u(I,null,{default:x(()=>[u(d,null,{default:x(()=>[h("NFT Collection Details | "+m(i.$config.projectMetadataTitle),1)]),_:1}),u(p,{property:"og:title",content:"NFT Collection Details | "+i.$config.projectMetadataTitle},null,8,["content"]),u(p,{name:"description",content:"Check this NFT collection on "+i.$config.projectName+"!"},null,8,["content"]),u(p,{property:"og:image",content:i.$config.projectUrl+i.$config.previewImageNftCollection},null,8,["content"]),u(p,{property:"og:description",content:"Check this NFT collection on "+i.$config.projectName+"!"},null,8,["content"]),u(p,{name:"twitter:image",content:i.$config.projectUrl+i.$config.previewImageNftCollection},null,8,["content"]),u(p,{name:"twitter:description",content:"Check this NFT collection on "+i.$config.projectName+"!"},null,8,["content"])]),_:1}),t("div",bs,[t("div",ys,[t("p",ws,[t("i",{onClick:o[0]||(o[0]=C=>i.$router.push({path:"/nft"})),class:"bi bi-arrow-left-circle cursor-pointer"})]),e.cName?c("",!0):(a(),l("h3",vs,"NFT Collection Details")),e.cName?(a(),l("h3",Cs,m(e.cName),1)):c("",!0),e.waitingData?(a(),l("div",ks,Is)):c("",!0),t("div",xs,[t("div",Ts,[t("img",{src:e.cImage,class:"img-fluid img-thumbnail rounded col-12"},null,8,Us),t("div",Ms,[Ns,t("ul",Bs,[r.isCurrentAddressOwner?(a(),l("li",Ds,Ss)):c("",!0),r.isCurrentAddressOwner?(a(),l("li",Fs,Es)):c("",!0),r.isCurrentAddressOwner&&e.cType==0?(a(),l("li",Os,Rs)):c("",!0),r.isCurrentAddressOwner&&e.cType==0?(a(),l("li",Ws,Vs)):c("",!0),r.isCurrentAddressOwner?(a(),l("li",Hs,Gs)):c("",!0),t("li",null,[t("span",{class:"dropdown-item cursor-pointer",onClick:o[1]||(o[1]=C=>r.getCollectionDetails(!0))},"Refresh metadata")])])])]),t("div",zs,[t("div",Qs,[t("p",qs,[Js,h(" "+m(e.cDescription),1)]),t("p",Ks,[Xs,h(" Buy/Sell price: "+m(r.formatPrice(e.priceBuyWei))+" "+m(i.$config.tokenSymbol)+" / "+m(r.formatPrice(e.priceSellWei))+" "+m(i.$config.tokenSymbol),1)]),t("p",Zs,[eo,h(" "+m(e.cSupply)+" NFTs minted ",1)]),t("p",to,[so,t("a",{href:i.$config.blockExplorerBaseUrl+"/address/"+e.cAddress,target:"_blank",style:{"text-decoration":"none"}},m(s.shortenAddress(e.cAddress)),9,oo),r.getUsernameOrShortAddress?(a(),l("span",io,[h(" by "),u(D,{to:"/profile/?id="+String(r.getUsernameOrFullAddress)},{default:x(()=>[h(m(r.getUsernameOrShortAddress),1)]),_:1},8,["to"])])):c("",!0)]),t("p",no,[ao,t("a",{href:i.$config.marketplaceNftCollectionBaseUrl+e.cAddress,target:"_blank",style:{"text-decoration":"none"}}," See on NFT marketplace ",8,ro)])]),t("div",lo,[s.isActivated?c("",!0):(a(),l("div",co,[u($,{class:"btn btn-primary",btnText:"Connect wallet"})])),s.isActivated?(a(),l("div",ho,[t("button",{onClick:o[2]||(o[2]=(...C)=>r.buyNft&&r.buyNft(...C)),class:"btn btn-primary",type:"button",disabled:e.waitingData||e.waitingBuy},[e.waitingBuy?(a(),l("span",uo)):c("",!0),h(" Buy for "+m(r.formatPrice(e.priceBuyWei))+" "+m(i.$config.tokenSymbol),1)],8,mo)])):c("",!0),s.isActivated?(a(),l("div",po,[t("button",{onClick:o[3]||(o[3]=(...C)=>r.sellNft&&r.sellNft(...C)),class:"btn btn-primary",type:"button",disabled:e.waitingData||e.waitingSell||!e.userTokenId||e.priceSellWei==0},[e.waitingSell?(a(),l("span",fo)):c("",!0),h(" Sell for "+m(r.formatPrice(e.priceSellWei))+" "+m(i.$config.tokenSymbol),1)],8,go)])):c("",!0)]),s.isActivated?(a(),l("small",_o,[t("em",null," (Price may still change after pressing the button, so make sure to check the "+m(i.$config.tokenSymbol)+" amount in wallet.) ",1)])):c("",!0)])])])]),e.userTokenId?c("",!0):(a(),l("div",bo,wo)),i.$config.nftOrbisContext&&e.userTokenId?(a(),H(S,{key:e.cAddress,allPosts:!0,class:"mt-3 scroll-500",showQuotedPost:i.$config.showRepliesOnHomepage,orbisContext:i.$config.nftOrbisContext+":"+e.cAddress},null,8,["showQuotedPost","orbisContext"])):c("",!0),u(F,{cAddress:e.cAddress,mdAddress:e.mdAddress},null,8,["cAddress","mdAddress"]),u(P,{cAddress:e.cAddress,mdAddress:e.mdAddress,onSaveCollection:r.saveCollection},null,8,["cAddress","mdAddress","onSaveCollection"]),u(E,{cAddress:e.cAddress,cDescription:e.cDescription,mdAddress:e.mdAddress,onSaveCollection:r.saveCollection},null,8,["cAddress","cDescription","mdAddress","onSaveCollection"]),u(O,{mdAddress:e.mdAddress,cType:e.cType,cAddress:e.cAddress,onSaveCollection:r.saveCollection},null,8,["mdAddress","cType","cAddress","onSaveCollection"]),u(L,{mdAddress:e.mdAddress,cAddress:e.cAddress},null,8,["mdAddress","cAddress"])],64)}const Oo=y(_s,[["render",vo]]);export{Oo as default};
