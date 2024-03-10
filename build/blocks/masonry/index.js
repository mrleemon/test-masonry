(()=>{var e,t={633:(e,t,l)=>{"use strict";const s=window.React,i=window.wp.components,o=window.wp.blocks,r=JSON.parse('{"name":"occ/exhibitpress-masonry"}');var a=l(967),n=l.n(a);const d=window.wp.i18n,u=window.wp.blockEditor,c=window.wp.compose,g=(window.wp.element,window.wp.primitives),h=(0,s.createElement)(g.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,s.createElement)(g.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M6 5.5h12a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5ZM4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm4 10h2v-1.5H8V16Zm5 0h-2v-1.5h2V16Zm1 0h2v-1.5h-2V16Z"}));l(266);const m={from:[{type:"block",blocks:["occ/exhibitpress-horizontal"],transform:e=>(0,o.createBlock)("occ/exhibitpress-masonry",{items:e.items,gap:e.gap,captions:e.captions})},{type:"block",blocks:["occ/exhibitpress-slider"],transform:e=>(0,o.createBlock)("occ/exhibitpress-masonry",{items:e.items,captions:e.captions,align:e.align})},{type:"block",blocks:["occ/exhibitpress-grid"],transform:e=>(0,o.createBlock)("occ/exhibitpress-masonry",{items:e.items,columns:e.columns,gap:e.gap,crop:e.crop,lightbox:e.lightbox,lightbox_background:e.lightbox_background,captions:e.captions,align:e.align})}]},{name:f}=r,p={icon:{src:(0,s.createElement)(i.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,s.createElement)(i.Path,{d:"M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9Z",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.createElement)(i.Path,{d:"M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.createElement)(i.Path,{d:"M10.5 13.1V19.9C10.5 21.4 9.86 22 8.27 22H4.23C2.64 22 2 21.4 2 19.9V13.1C2 11.6 2.64 11 4.23 11H8.27C9.86 11 10.5 11.6 10.5 13.1Z",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.createElement)(i.Path,{d:"M10.5 4.1V5.9C10.5 7.4 9.86 8 8.27 8H4.23C2.64 8 2 7.4 2 5.9V4.1C2 2.6 2.64 2 4.23 2H8.27C9.86 2 10.5 2.6 10.5 4.1Z",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),foreground:"#ff8a00"},edit:e=>{const{attributes:{items:t,columns:l,gap:o,crop:r,lightbox:a,lightbox_background:g,captions:m},setAttributes:f}=e,p=(0,u.useBlockProps)({className:n()("columns-"+l,r?"is-cropped":"")}),b=(0,i.__experimentalUseCustomUnits)({availableUnits:["px"],defaultValues:{px:100}}),v=e=>{f({items:e})},y=(0,c.useRefEffect)((e=>{const{ownerDocument:t}=e,{defaultView:l}=t;if(console.log(l),console.log(l.Masonry),!l.Masonry)return;const s=new l.Masonry(e,{itemSelector:".exhibit-item",columnWidth:".grid-sizer",percentPosition:!0,gutter:parseInt(o)});return()=>{s.destroy()}}),[t,l,o,r,m]),_=(0,c.useRefEffect)((e=>(a&&lightGallery(e,{selector:"a[data-rel^=collection]",addClass:g,mode:"lg-fade",preload:4,counter:!1,download:!1,youtubePlayerParams:{autoplay:0},vimeoPlayerParams:{autoplay:0}}),()=>{window?.lgData[e?.getAttribute("lg-uid")]?.destroy(!0)})),[a,g]),C=(0,c.useMergeRefs)([y,_]);return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(u.InspectorControls,null,(0,s.createElement)(i.PanelBody,{title:(0,d.__)("Settings","exhibitpress")},(0,s.createElement)(i.RangeControl,{label:(0,d.__)("Columns","exhibitpress"),value:l,onChange:e=>{f({columns:parseInt(e,10)})},min:1,max:8}),(0,s.createElement)(i.__experimentalUnitControl,{label:(0,d.__)("Gap between items","exhibitpress"),min:"0",onChange:e=>{f({gap:e})},value:o,units:b}),(0,s.createElement)(i.ToggleControl,{label:(0,d.__)("Crop thumbnails","exhibitpress"),checked:!!r,onChange:()=>{f({crop:!e.attributes.crop})}}),(0,s.createElement)(i.ToggleControl,{label:(0,d.__)("Enable lightbox","exhibitpress"),checked:!!a,onChange:()=>{f({lightbox:!e.attributes.lightbox})}}),a&&(0,s.createElement)(i.SelectControl,{label:(0,d.__)("Lightbox background color","exhibitpress"),value:g,options:[{label:(0,d.__)("Black","exhibitpress"),value:"black"},{label:(0,d.__)("White","exhibitpress"),value:"white"}],onChange:e=>{f({lightbox_background:e})}}))),(0,s.createElement)(u.BlockControls,{group:"block"},(0,s.createElement)(i.ToolbarButton,{onClick:()=>{f({captions:!e.attributes.captions})},icon:h,isPressed:m,label:m?(0,d.__)("Hide captions","exhibitpress"):(0,d.__)("Show captions","exhibitpress")})),(0,s.createElement)(u.BlockControls,{group:"other"},t.length>0&&(0,s.createElement)(i.ToolbarGroup,null,(0,s.createElement)(u.MediaUploadCheck,null,(0,s.createElement)(u.MediaUpload,{allowedTypes:["image"],multiple:!0,gallery:!0,value:t.map((e=>e.id)),onSelect:v,render:({open:e})=>(0,s.createElement)(i.ToolbarButton,{onClick:e},(0,d.__)("Edit items","exhibitpress"))})))),(0,s.createElement)(u.MediaUploadCheck,null,(0,s.createElement)("div",{...p},t.length>0?(0,s.createElement)("div",{className:"exhibit-items",style:{"--gap":o},ref:C},(0,s.createElement)("div",{className:"grid-sizer"}),(e=>e.map(((e,t)=>(0,s.createElement)("div",{className:"exhibit-item",key:t},(0,s.createElement)("figure",null,a?(0,s.createElement)("a",{"data-rel":"collection",href:e.url,"data-sub-html":e.caption},(0,s.createElement)("img",{className:`wp-image-${e.id}`,src:e.url,alt:e.alt,key:e.id})):(0,s.createElement)("img",{className:`wp-image-${e.id}`,src:e.url,alt:e.alt,key:e.id}),m&&e.caption&&(0,s.createElement)("figcaption",{className:"wp-element-caption"},e.caption))))))(t)):(0,s.createElement)(u.MediaPlaceholder,{accept:"image/*",allowedTypes:["image"],onSelect:v,multiple:!0,gallery:!0,addToGallery:!0,handleUpload:!0,labels:{title:(0,d.__)("ExhibitPress: Masonry","exhibitpress")}}))))},transforms:m};(0,o.registerBlockType)(f,p)},881:function(e,t){var l,s;l=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t={getAttribute:function(e,t){return e[t]},setAttribute:function(e,t,l){e[t]=l},wrap:function(e,t){if(e){var l=document.createElement("div");l.className=t,e.parentNode.insertBefore(l,e),e.parentNode.removeChild(e),l.appendChild(e)}},addClass:function(e,t){e&&(e.classList?e.classList.add(t):e.className+=" "+t)},removeClass:function(e,t){e&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass:function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)},setVendor:function(e,t,l){e&&(e.style[t.charAt(0).toLowerCase()+t.slice(1)]=l,e.style["webkit"+t]=l,e.style["moz"+t]=l,e.style["ms"+t]=l,e.style["o"+t]=l)},trigger:function(e,t){if(e){var l=new CustomEvent(t,{detail:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null});e.dispatchEvent(l)}},Listener:{uid:0},on:function(e,l,s){var i=this;e&&l.split(" ").forEach((function(l){var o=i.getAttribute(e,"lg-event-uid")||"";t.Listener.uid++,o+="&"+t.Listener.uid,i.setAttribute(e,"lg-event-uid",o),t.Listener[l+t.Listener.uid]=s,e.addEventListener(l.split(".")[0],s,!1)}))},off:function(e,l){if(e){var s=this.getAttribute(e,"lg-event-uid");if(s){s=s.split("&");for(var i=0;i<s.length;i++)if(s[i]){var o=l+s[i];if("."===o.substring(0,1))for(var r in t.Listener)t.Listener.hasOwnProperty(r)&&r.split(".").indexOf(o.split(".")[1])>-1&&(e.removeEventListener(r.split(".")[0],t.Listener[r]),this.setAttribute(e,"lg-event-uid",this.getAttribute(e,"lg-event-uid").replace("&"+s[i],"")),delete t.Listener[r]);else e.removeEventListener(o.split(".")[0],t.Listener[o]),this.setAttribute(e,"lg-event-uid",this.getAttribute(e,"lg-event-uid").replace("&"+s[i],"")),delete t.Listener[o]}}}},param:function(e){return Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&")}};e.default=t},void 0===(s=l.apply(t,[t]))||(e.exports=s)},266:function(e,t,l){var s,i,o;i=[l(881)],s=function(e){"use strict";var t,l=(t=e)&&t.__esModule?t:{default:t};var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e};(function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var l=document.createEvent("CustomEvent");return l.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),l}e.prototype=window.Event.prototype,window.CustomEvent=e})(),window.utils=l.default,window.lgData={uid:0},window.lgModules={};var i={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,ariaLabelledby:"",ariaDescribedby:"",closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!1,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1,supportLegacyBrowser:!0};function o(e,t){if(this.el=e,this.s=s({},i,t),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in document.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.items=[],this.s.dynamic?this.items=this.s.dynamicEl:"this"===this.s.selector?this.items.push(this.el):""!==this.s.selector?this.s.selectWithin?this.items=document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector):this.items=this.el.querySelectorAll(this.s.selector):this.items=this.el.children,this.___slide="",this.outer="",this.init(),this}o.prototype.init=function(){var e=this;e.s.preload>e.items.length&&(e.s.preload=e.items.length);var t=window.location.hash;if(t.indexOf("lg="+this.s.galleryId)>0&&(e.index=parseInt(t.split("&slide=")[1],10),l.default.addClass(document.body,"lg-from-hash"),l.default.hasClass(document.body,"lg-on")||(l.default.addClass(document.body,"lg-on"),setTimeout((function(){e.build(e.index)})))),e.s.dynamic)l.default.trigger(this.el,"onBeforeOpen"),e.index=e.s.index||0,l.default.hasClass(document.body,"lg-on")||(l.default.addClass(document.body,"lg-on"),setTimeout((function(){e.build(e.index)})));else for(var s=0;s<e.items.length;s++)!function(t){l.default.on(e.items[t],"click.lgcustom",(function(s){s.preventDefault(),l.default.trigger(e.el,"onBeforeOpen"),e.index=e.s.index||t,l.default.hasClass(document.body,"lg-on")||(e.build(e.index),l.default.addClass(document.body,"lg-on"))}))}(s)},o.prototype.build=function(e){var t=this;for(var s in t.structure(),window.lgModules)t.modules[s]=new window.lgModules[s](t.el);if(t.slide(e,!1,!1),t.s.keyPress&&t.keyPress(),t.items.length>1&&(t.arrow(),setTimeout((function(){t.enableDrag(),t.enableSwipe()}),50),t.s.mousewheel&&t.mousewheel()),t.counter(),t.closeGallery(),l.default.trigger(t.el,"onAfterOpen"),t.s.hideBarsDelay>0){var i=setTimeout((function(){l.default.addClass(t.outer,"lg-hide-items")}),t.s.hideBarsDelay);l.default.on(t.outer,"mousemove.lg click.lg touchstart.lg",(function(){clearTimeout(i),l.default.removeClass(t.outer,"lg-hide-items"),clearTimeout(t.hideBartimeout),t.hideBartimeout=setTimeout((function(){l.default.addClass(t.outer,"lg-hide-items")}),t.s.hideBarsDelay)}))}},o.prototype.structure=function(){var e,t="",s="",i=0,o="",r=this;for(document.body.insertAdjacentHTML("beforeend",'<div class="lg-backdrop"></div>'),l.default.setVendor(document.querySelector(".lg-backdrop"),"TransitionDuration",this.s.backdropDuration+"ms"),i=0;i<this.items.length;i++)t+='<div class="lg-item"></div>';if(this.s.controls&&this.items.length>1&&(s='<div class="lg-actions"><button type="button" aria-label="Previous slide" class="lg-prev lg-icon">'+this.s.prevHtml+'</button><button type="button" aria-label="Next slide" class="lg-next lg-icon">'+this.s.nextHtml+"</button></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(o='<div role="status" aria-live="polite" class="lg-sub-html"></div>'),e='<div tabindex="-1" aria-modal="true" '+(this.s.ariaLabelledby?'aria-labelledby="'+this.s.ariaLabelledby+'"':"")+" "+(this.s.ariaDescribedby?'aria-describedby="'+this.s.ariaDescribedby+'"':"")+' role="dialog" class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+t+'</div><div class="lg-toolbar lg-group"><button type="button" aria-label="Close gallery" class="lg-close lg-icon"></button></div>'+s+o+"</div></div>",document.body.insertAdjacentHTML("beforeend",e),this.outer=document.querySelector(".lg-outer"),this.outer.focus(),this.___slide=this.outer.querySelectorAll(".lg-item"),this.s.useLeft?(l.default.addClass(this.outer,"lg-use-left"),this.s.mode="lg-slide"):l.default.addClass(this.outer,"lg-use-css3"),r.setTop(),l.default.on(window,"resize.lg orientationchange.lg",(function(){setTimeout((function(){r.setTop()}),100)})),l.default.addClass(this.___slide[this.index],"lg-current"),this.doCss()?l.default.addClass(this.outer,"lg-css3"):(l.default.addClass(this.outer,"lg-css"),this.s.speed=0),l.default.addClass(this.outer,this.s.mode),this.s.enableDrag&&this.items.length>1&&l.default.addClass(this.outer,"lg-grab"),this.s.showAfterLoad&&l.default.addClass(this.outer,"lg-show-after-load"),this.doCss()){var a=this.outer.querySelector(".lg-inner");l.default.setVendor(a,"TransitionTimingFunction",this.s.cssEasing),l.default.setVendor(a,"TransitionDuration",this.s.speed+"ms")}setTimeout((function(){l.default.addClass(document.querySelector(".lg-backdrop"),"in")})),setTimeout((function(){l.default.addClass(r.outer,"lg-visible")}),this.s.backdropDuration),this.s.download&&this.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend",'<a id="lg-download" aria-label="Download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=document.documentElement.scrollTop||document.body.scrollTop},o.prototype.setTop=function(){if("100%"!==this.s.height){var e=window.innerHeight,t=(e-parseInt(this.s.height,10))/2,l=this.outer.querySelector(".lg");e>=parseInt(this.s.height,10)?l.style.top=t+"px":l.style.top="0px"}},o.prototype.doCss=function(){return!!function(){var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],t=document.documentElement,l=0;for(l=0;l<e.length;l++)if(e[l]in t.style)return!0}()},o.prototype.isVideo=function(e,t){var l;if(l=this.s.dynamic?this.s.dynamicEl[t].html:this.items[t].getAttribute("data-html"),!e&&l)return{html5:!0};var s=e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),i=e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),o=e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),r=e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return s?{youtube:s}:i?{vimeo:i}:o?{dailymotion:o}:r?{vk:r}:void 0},o.prototype.counter=function(){this.s.counter&&this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML("beforeend",'<div id="lg-counter" role="status" aria-live="polite"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.items.length+"</span></div>")},o.prototype.addHtml=function(e){var t,s=null;if(this.s.dynamic?s=this.s.dynamicEl[e].subHtml:(s=(t=this.items[e]).getAttribute("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!s&&(s=t.getAttribute("title"))&&t.querySelector("img")&&(s=t.querySelector("img").getAttribute("alt"))),null!=s){var i=s.substring(0,1);"."!==i&&"#"!==i||(s=this.s.subHtmlSelectorRelative&&!this.s.dynamic?t.querySelector(s).innerHTML:document.querySelector(s).innerHTML)}else s="";".lg-sub-html"===this.s.appendSubHtmlTo?this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML=s:this.___slide[e].insertAdjacentHTML("beforeend",s),null!=s&&(""===s?l.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo),"lg-empty-html"):l.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo),"lg-empty-html")),l.default.trigger(this.el,"onAfterAppendSubHtml",{index:e})},o.prototype.preload=function(e){var t=1,l=1;for(t=1;t<=this.s.preload&&!(t>=this.items.length-e);t++)this.loadContent(e+t,!1,0);for(l=1;l<=this.s.preload&&!(e-l<0);l++)this.loadContent(e-l,!1,0)},o.prototype.loadContent=function(e,t,s){var i,o,r,a,n,d,u,c=this,g=!1,h=function(e){for(var t=[],l=[],s=0;s<e.length;s++){var i=e[s].split(" ");""===i[0]&&i.splice(0,1),l.push(i[0]),t.push(i[1])}for(var r=window.innerWidth,a=0;a<t.length;a++)if(parseInt(t[a],10)>r){o=l[a];break}};c.s.dynamic?(c.s.dynamicEl[e].poster&&(g=!0,r=c.s.dynamicEl[e].poster),d=c.s.dynamicEl[e].html,o=c.s.dynamicEl[e].src,u=c.s.dynamicEl[e].alt,c.s.dynamicEl[e].responsive&&h(c.s.dynamicEl[e].responsive.split(",")),a=c.s.dynamicEl[e].srcset,n=c.s.dynamicEl[e].sizes):(c.items[e].getAttribute("data-poster")&&(g=!0,r=c.items[e].getAttribute("data-poster")),d=c.items[e].getAttribute("data-html"),o=c.items[e].getAttribute("href")||c.items[e].getAttribute("data-src"),u=c.items[e].getAttribute("title"),c.items[e].querySelector("img")&&(u=u||c.items[e].querySelector("img").getAttribute("alt")),c.items[e].getAttribute("data-responsive")&&h(c.items[e].getAttribute("data-responsive").split(",")),a=c.items[e].getAttribute("data-srcset"),n=c.items[e].getAttribute("data-sizes"));var m=!1;c.s.dynamic?c.s.dynamicEl[e].iframe&&(m=!0):"true"===c.items[e].getAttribute("data-iframe")&&(m=!0);var f=c.isVideo(o,e);if(!l.default.hasClass(c.___slide[e],"lg-loaded")){if(m)c.___slide[e].insertAdjacentHTML("afterbegin",'<div class="lg-video-cont" style="max-width:'+c.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+o+'"  allowfullscreen="true"></iframe></div></div>');else if(g){var p;p=f&&f.youtube?"lg-has-youtube":f&&f.vimeo?"lg-has-vimeo":"lg-has-html5",c.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-video-cont '+p+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+r+'" /></div></div>')}else f?(c.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-video-cont "><div class="lg-video"></div></div>'),l.default.trigger(c.el,"hasVideo",{index:e,src:o,html:d})):(u=u?'alt="'+u+'"':"",c.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-img-wrap"><img class="lg-object lg-image" '+u+' src="'+o+'" /></div>'));if(l.default.trigger(c.el,"onAferAppendSlide",{index:e}),i=c.___slide[e].querySelector(".lg-object"),n&&i.setAttribute("sizes",n),a&&(i.setAttribute("srcset",a),this.s.supportLegacyBrowser))try{picturefill({elements:[i[0]]})}catch(e){console.warn("If you want srcset to be supported for older browsers, please include picturefil javascript library in your document.")}".lg-sub-html"!==this.s.appendSubHtmlTo&&c.addHtml(e),l.default.addClass(c.___slide[e],"lg-loaded")}l.default.on(c.___slide[e].querySelector(".lg-object"),"load.lg error.lg",(function(){var t=0;s&&!l.default.hasClass(document.body,"lg-from-hash")&&(t=s),setTimeout((function(){l.default.addClass(c.___slide[e],"lg-complete"),l.default.trigger(c.el,"onSlideItemLoad",{index:e,delay:s||0})}),t)})),f&&f.html5&&!g&&l.default.addClass(c.___slide[e],"lg-complete"),!0===t&&(l.default.hasClass(c.___slide[e],"lg-complete")?c.preload(e):l.default.on(c.___slide[e].querySelector(".lg-object"),"load.lg error.lg",(function(){c.preload(e)})))},o.prototype.slide=function(e,t,s){for(var i=0,o=0;o<this.___slide.length;o++)if(l.default.hasClass(this.___slide[o],"lg-current")){i=o;break}var r=this;if(!r.lGalleryOn||i!==e){var a=this.___slide.length,n=r.lGalleryOn?this.s.speed:0,d=!1,u=!1;if(!r.lgBusy){var c;if(this.s.download&&((c=r.s.dynamic?!1!==r.s.dynamicEl[e].downloadUrl&&(r.s.dynamicEl[e].downloadUrl||r.s.dynamicEl[e].src):"false"!==r.items[e].getAttribute("data-download-url")&&(r.items[e].getAttribute("data-download-url")||r.items[e].getAttribute("href")||r.items[e].getAttribute("data-src")))?(document.getElementById("lg-download").setAttribute("href",c),l.default.removeClass(r.outer,"lg-hide-download")):l.default.addClass(r.outer,"lg-hide-download")),l.default.trigger(r.el,"onBeforeSlide",{prevIndex:i,index:e,fromTouch:t,fromThumb:s}),r.lgBusy=!0,clearTimeout(r.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout((function(){r.addHtml(e)}),n),this.arrowDisable(e),t){var g=e-1,h=e+1;(0===e&&i===a-1||e===a-1&&0===i)&&(h=0,g=a-1),l.default.removeClass(r.outer.querySelector(".lg-prev-slide"),"lg-prev-slide"),l.default.removeClass(r.outer.querySelector(".lg-current"),"lg-current"),l.default.removeClass(r.outer.querySelector(".lg-next-slide"),"lg-next-slide"),l.default.addClass(r.___slide[g],"lg-prev-slide"),l.default.addClass(r.___slide[h],"lg-next-slide"),l.default.addClass(r.___slide[e],"lg-current")}else{l.default.addClass(r.outer,"lg-no-trans");for(var m=0;m<this.___slide.length;m++)l.default.removeClass(this.___slide[m],"lg-prev-slide"),l.default.removeClass(this.___slide[m],"lg-next-slide");e<i?(u=!0,0!==e||i!==a-1||s||(u=!1,d=!0)):e>i&&(d=!0,e!==a-1||0!==i||s||(u=!0,d=!1)),u?(l.default.addClass(this.___slide[e],"lg-prev-slide"),l.default.addClass(this.___slide[i],"lg-next-slide")):d&&(l.default.addClass(this.___slide[e],"lg-next-slide"),l.default.addClass(this.___slide[i],"lg-prev-slide")),setTimeout((function(){l.default.removeClass(r.outer.querySelector(".lg-current"),"lg-current"),l.default.addClass(r.___slide[e],"lg-current"),l.default.removeClass(r.outer,"lg-no-trans")}),50)}r.lGalleryOn?(setTimeout((function(){r.loadContent(e,!0,0)}),this.s.speed+50),setTimeout((function(){r.lgBusy=!1,l.default.trigger(r.el,"onAfterSlide",{prevIndex:i,index:e,fromTouch:t,fromThumb:s})}),this.s.speed)):(r.loadContent(e,!0,r.s.backdropDuration),r.lgBusy=!1,l.default.trigger(r.el,"onAfterSlide",{prevIndex:i,index:e,fromTouch:t,fromThumb:s})),r.lGalleryOn=!0,this.s.counter&&document.getElementById("lg-counter-current")&&(document.getElementById("lg-counter-current").innerHTML=e+1)}}},o.prototype.goToNextSlide=function(e){var t=this;t.lgBusy||(t.index+1<t.___slide.length?(t.index++,l.default.trigger(t.el,"onBeforeNextSlide",{index:t.index}),t.slide(t.index,e,!1)):t.s.loop?(t.index=0,l.default.trigger(t.el,"onBeforeNextSlide",{index:t.index}),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(l.default.addClass(t.outer,"lg-right-end"),setTimeout((function(){l.default.removeClass(t.outer,"lg-right-end")}),400)))},o.prototype.goToPrevSlide=function(e){var t=this;t.lgBusy||(t.index>0?(t.index--,l.default.trigger(t.el,"onBeforePrevSlide",{index:t.index,fromTouch:e}),t.slide(t.index,e,!1)):t.s.loop?(t.index=t.items.length-1,l.default.trigger(t.el,"onBeforePrevSlide",{index:t.index,fromTouch:e}),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(l.default.addClass(t.outer,"lg-left-end"),setTimeout((function(){l.default.removeClass(t.outer,"lg-left-end")}),400)))},o.prototype.keyPress=function(){var e=this;this.items.length>1&&l.default.on(window,"keyup.lg",(function(t){e.items.length>1&&(37===t.keyCode&&(t.preventDefault(),e.goToPrevSlide()),39===t.keyCode&&(t.preventDefault(),e.goToNextSlide()))})),l.default.on(window,"keydown.lg",(function(t){!0===e.s.escKey&&27===t.keyCode&&(t.preventDefault(),l.default.hasClass(e.outer,"lg-thumb-open")?l.default.removeClass(e.outer,"lg-thumb-open"):e.destroy())}))},o.prototype.arrow=function(){var e=this;l.default.on(this.outer.querySelector(".lg-prev"),"click.lg",(function(){e.goToPrevSlide()})),l.default.on(this.outer.querySelector(".lg-next"),"click.lg",(function(){e.goToNextSlide()}))},o.prototype.arrowDisable=function(e){if(!this.s.loop&&this.s.hideControlOnEnd){var t=this.outer.querySelector(".lg-next"),s=this.outer.querySelector(".lg-prev");e+1<this.___slide.length?(t.removeAttribute("disabled"),l.default.removeClass(t,"disabled")):(t.setAttribute("disabled","disabled"),l.default.addClass(t,"disabled")),e>0?(s.removeAttribute("disabled"),l.default.removeClass(s,"disabled")):(s.setAttribute("disabled","disabled"),l.default.addClass(s,"disabled"))}},o.prototype.setTranslate=function(e,t,s){this.s.useLeft?e.style.left=t:l.default.setVendor(e,"Transform","translate3d("+t+"px, "+s+"px, 0px)")},o.prototype.touchMove=function(e,t){var s=t-e;Math.abs(s)>15&&(l.default.addClass(this.outer,"lg-dragging"),this.setTranslate(this.___slide[this.index],s,0),this.setTranslate(document.querySelector(".lg-prev-slide"),-this.___slide[this.index].clientWidth+s,0),this.setTranslate(document.querySelector(".lg-next-slide"),this.___slide[this.index].clientWidth+s,0))},o.prototype.touchEnd=function(e){var t=this;"lg-slide"!==t.s.mode&&l.default.addClass(t.outer,"lg-slide");for(var s=0;s<this.___slide.length;s++)l.default.hasClass(this.___slide[s],"lg-current")||l.default.hasClass(this.___slide[s],"lg-prev-slide")||l.default.hasClass(this.___slide[s],"lg-next-slide")||(this.___slide[s].style.opacity="0");setTimeout((function(){l.default.removeClass(t.outer,"lg-dragging"),e<0&&Math.abs(e)>t.s.swipeThreshold?t.goToNextSlide(!0):e>0&&Math.abs(e)>t.s.swipeThreshold?t.goToPrevSlide(!0):Math.abs(e)<5&&l.default.trigger(t.el,"onSlideClick");for(var s=0;s<t.___slide.length;s++)t.___slide[s].removeAttribute("style")})),setTimeout((function(){l.default.hasClass(t.outer,"lg-dragging")||"lg-slide"===t.s.mode||l.default.removeClass(t.outer,"lg-slide")}),t.s.speed+100)},o.prototype.enableSwipe=function(){var e=this,t=0,s=0,i=!1;if(e.s.enableSwipe&&e.isTouch&&e.doCss()){for(var o=0;o<e.___slide.length;o++)l.default.on(e.___slide[o],"touchstart.lg",(function(s){l.default.hasClass(e.outer,"lg-zoomed")||e.lgBusy||(s.preventDefault(),e.manageSwipeClass(),t=s.targetTouches[0].pageX)}));for(var r=0;r<e.___slide.length;r++)l.default.on(e.___slide[r],"touchmove.lg",(function(o){l.default.hasClass(e.outer,"lg-zoomed")||(o.preventDefault(),s=o.targetTouches[0].pageX,e.touchMove(t,s),i=!0)}));for(var a=0;a<e.___slide.length;a++)l.default.on(e.___slide[a],"touchend.lg",(function(){l.default.hasClass(e.outer,"lg-zoomed")||(i?(i=!1,e.touchEnd(s-t)):l.default.trigger(e.el,"onSlideClick"))}))}},o.prototype.enableDrag=function(){var e=this,t=0,s=0,i=!1,o=!1;if(e.s.enableDrag&&!e.isTouch&&e.doCss()){for(var r=0;r<e.___slide.length;r++)l.default.on(e.___slide[r],"mousedown.lg",(function(s){l.default.hasClass(e.outer,"lg-zoomed")||(l.default.hasClass(s.target,"lg-object")||l.default.hasClass(s.target,"lg-video-play"))&&(s.preventDefault(),e.lgBusy||(e.manageSwipeClass(),t=s.pageX,i=!0,e.outer.scrollLeft+=1,e.outer.scrollLeft-=1,l.default.removeClass(e.outer,"lg-grab"),l.default.addClass(e.outer,"lg-grabbing"),l.default.trigger(e.el,"onDragstart")))}));l.default.on(window,"mousemove.lg",(function(r){i&&(o=!0,s=r.pageX,e.touchMove(t,s),l.default.trigger(e.el,"onDragmove"))})),l.default.on(window,"mouseup.lg",(function(r){o?(o=!1,e.touchEnd(s-t),l.default.trigger(e.el,"onDragend")):(l.default.hasClass(r.target,"lg-object")||l.default.hasClass(r.target,"lg-video-play"))&&l.default.trigger(e.el,"onSlideClick"),i&&(i=!1,l.default.removeClass(e.outer,"lg-grabbing"),l.default.addClass(e.outer,"lg-grab"))}))}},o.prototype.manageSwipeClass=function(){var e=this.index+1,t=this.index-1,s=this.___slide.length;this.s.loop&&(0===this.index?t=s-1:this.index===s-1&&(e=0));for(var i=0;i<this.___slide.length;i++)l.default.removeClass(this.___slide[i],"lg-next-slide"),l.default.removeClass(this.___slide[i],"lg-prev-slide");t>-1&&l.default.addClass(this.___slide[t],"lg-prev-slide"),l.default.addClass(this.___slide[e],"lg-next-slide")},o.prototype.mousewheel=function(){var e=this;l.default.on(e.outer,"mousewheel.lg",(function(t){t.deltaY&&(t.deltaY>0?e.goToPrevSlide():e.goToNextSlide(),t.preventDefault())}))},o.prototype.closeGallery=function(){var e=this,t=!1;l.default.on(this.outer.querySelector(".lg-close"),"click.lg",(function(){e.destroy()})),e.s.closable&&(l.default.on(e.outer,"mousedown.lg",(function(e){t=!!(l.default.hasClass(e.target,"lg-outer")||l.default.hasClass(e.target,"lg-item")||l.default.hasClass(e.target,"lg-img-wrap"))})),l.default.on(e.outer,"mouseup.lg",(function(s){(l.default.hasClass(s.target,"lg-outer")||l.default.hasClass(s.target,"lg-item")||l.default.hasClass(s.target,"lg-img-wrap")&&t)&&(l.default.hasClass(e.outer,"lg-dragging")||e.destroy())})))},o.prototype.destroy=function(e){var t=this;if(e||l.default.trigger(t.el,"onBeforeClose"),document.body.scrollTop=t.prevScrollTop,document.documentElement.scrollTop=t.prevScrollTop,e){if(!t.s.dynamic)for(var s=0;s<this.items.length;s++)l.default.off(this.items[s],".lg"),l.default.off(this.items[s],".lgcustom");var i=t.el.getAttribute("lg-uid");delete window.lgData[i],t.el.removeAttribute("lg-uid")}for(var o in l.default.off(this.el,".lgtm"),window.lgModules)t.modules[o]&&t.modules[o].destroy(e);this.lGalleryOn=!1,clearTimeout(t.hideBartimeout),this.hideBartimeout=!1,l.default.off(window,".lg"),l.default.removeClass(document.body,"lg-on"),l.default.removeClass(document.body,"lg-from-hash"),t.outer&&l.default.removeClass(t.outer,"lg-visible"),l.default.removeClass(document.querySelector(".lg-backdrop"),"in"),setTimeout((function(){try{t.outer&&t.outer.parentNode.removeChild(t.outer),document.querySelector(".lg-backdrop")&&document.querySelector(".lg-backdrop").parentNode.removeChild(document.querySelector(".lg-backdrop")),e||l.default.trigger(t.el,"onCloseAfter"),t.el.focus()}catch(e){}}),t.s.backdropDuration+50)},window.lightGallery=function(e,t){if(e)try{if(e.getAttribute("lg-uid"))window.lgData[e.getAttribute("lg-uid")].init();else{var l="lg"+window.lgData.uid++;window.lgData[l]=new o(e,t),e.setAttribute("lg-uid",l)}}catch(e){console.error("lightGallery has not initiated properly",e)}}},void 0===(o=s.apply(t,i))||(e.exports=o)},967:(e,t)=>{var l;!function(){"use strict";var s={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=r(e,o(l)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)s.call(e,l)&&e[l]&&(t=r(t,l));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(l=function(){return i}.apply(t,[]))||(e.exports=l)}()}},l={};function s(e){var i=l[e];if(void 0!==i)return i.exports;var o=l[e]={exports:{}};return t[e].call(o.exports,o,o.exports,s),o.exports}s.m=t,e=[],s.O=(t,l,i,o)=>{if(!l){var r=1/0;for(u=0;u<e.length;u++){for(var[l,i,o]=e[u],a=!0,n=0;n<l.length;n++)(!1&o||r>=o)&&Object.keys(s.O).every((e=>s.O[e](l[n])))?l.splice(n--,1):(a=!1,o<r&&(r=o));if(a){e.splice(u--,1);var d=i();void 0!==d&&(t=d)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[l,i,o]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var l in t)s.o(t,l)&&!s.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={634:0,349:0};s.O.j=t=>0===e[t];var t=(t,l)=>{var i,o,[r,a,n]=l,d=0;if(r.some((t=>0!==e[t]))){for(i in a)s.o(a,i)&&(s.m[i]=a[i]);if(n)var u=n(s)}for(t&&t(l);d<r.length;d++)o=r[d],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(u)},l=globalThis.webpackChunkexhibitpress=globalThis.webpackChunkexhibitpress||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var i=s.O(void 0,[349],(()=>s(633)));i=s.O(i)})();