(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3633],{65534:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(95235),o=t(62099),i=t(10452),a=t(2784),s=t(52322);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}o.Ki.Small,o.Ki.Medium;class u extends a.Component{render(){return(0,s.jsx)(i.Z,c(c({},this.props),{},{baseClassName:"AssemblyRadio",type:"radio"}))}}t(88187)},71152:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var r=t(95235),o=t(82269),i=t(61315),a=t(89840),s=t(2784),l=t(90407),c=t(52322),u=["children","title","value"];function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=(0,i.Z)(a.H5)({name:"RadioGroupTitle",class:"ruarquf"});class m extends s.PureComponent{renderTitle(){var{title:e}=this.props;return e?(0,c.jsx)(f,{children:e}):null}render(){var e=this.props,{children:n,title:t,value:r}=e,i=(0,o.Z)(e,u);return(0,c.jsxs)("div",{className:"AssemblyRadioGroup",children:[this.renderTitle(),(0,c.jsx)(l.Ee,p(p({},i),{},{className:"AssemblyRadioGroup-radios",Component:"div",selectedValue:r,children:s.Children.map(n,(e=>s.isValidElement(e)?s.cloneElement(e,{Component:l.Y8}):null))}))]})}}t(39997)},14938:function(e,n,t){"use strict";t.d(n,{Z:function(){return L}});var r=t(95235),o=t(82269),i=t(23774),a=t(61315),s=t(62099),l=t(28870),c=t(2784),u=t(37278),d=t(15415),p=t(52322);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=(e,n)=>{e.focus(),"number"===typeof e.selectionStart&&e.setSelectionRange(n,n)},v=(e,n)=>{var t=-1,r=-1,o=!1,i=!1,a=()=>n?n.current:null,s=(e,t)=>{var{current:r}=n;null!==r&&void 0!==r&&r.setSelectionRange&&r.setSelectionRange(e,t)},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,n=a();n&&(-1!==e&&b(n,e),t=e,r=e)};return(0,p.jsx)("textarea",m(m({},e),{},{onFocus:n=>{i||(o=!0,-1!==t?window.setTimeout((()=>{s(t,r),o=!1})):window.setTimeout((()=>{var n;l(null===(n=e.value)||void 0===n?void 0:n.length),o=!1}))),e.onFocus&&e.onFocus(n)},onMouseDown:()=>{i=!0},onSelect:n=>{i=!1,(()=>{if(!o){var e=a();if(e){var{selectionStart:n,selectionEnd:i}=e;t=n,r=i}}})(),e.onSelect&&e.onSelect(n)},ref:n}))},h=c.forwardRef(v),x=["label","minHeight","variant"];function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=(0,a.Z)("div")({name:"AutoExpandTextareaMain",class:"asc1vt2"}),j=(0,a.Z)("div")({name:"AutoExpandTextareaWrapper",class:"a1fcz3cu",vars:{"a1fcz3cu-0":[e=>"inverted"===e.variant?u.fY.Gray100Gray700:u.fY.Neutral200Ink300]}}),k=(0,a.Z)("span")({name:"AssemblyTextareaHeading",class:"ah6785x",vars:{"ah6785x-1":[e=>"inverted"===e.variant?u.fY.Gray600Gray400:u.i_.$500],"ah6785x-3":[e=>"inverted"===e.variant?u.fY.Gray800Gray200:u.fY.Indigo400Indigo300]}}),P=(0,a.Z)("div")({name:"AutoExpandTextareaSizer",class:"a17bzrsx",vars:{"a17bzrsx-0":[e=>{var n;return null!==(n=e.minHeight)&&void 0!==n?n:"auto"}]}}),Z=(e,n)=>{var t=e.defaultValue?void 0:e.value,{label:r,minHeight:a,variant:s}=e,l=(0,o.Z)(e,x),c=t?(0,p.jsx)(k,{variant:s,children:r}):null;return(0,p.jsxs)(g,{children:[(0,p.jsx)(P,{minHeight:a,children:"".concat(e.value,"\n")}),(0,p.jsxs)(j,{variant:e.variant,children:[c,(0,p.jsx)(h,O(O({ref:n},l),{},{"aria-label":r,className:(0,i.Z)("a161zioz",e.className),onBlur:n=>{e.onBlur&&e.onBlur(n)},onChange:n=>{e.onChange&&e.onChange(n)},onFocus:n=>{e.onFocus&&e.onFocus(n)},onKeyDown:t=>{e.onKeyDown&&e.onKeyDown(t),t.keyCode===d.AC&&(e.singleLine||t.metaKey)&&(()=>{var e;null===(e=n.current)||void 0===e||e.blur()})()},value:t}))]})]})},w=c.forwardRef(Z);t(11444);var E,C=["invalid","label","type"];function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}!function(e){e.INVERTED="inverted"}(E||(E={}));var _="bxtl8jy",S=(0,a.Z)("div")({name:"AssemblyTextareaContent",class:"a1k2umqi"}),I=(0,a.Z)("textarea")({name:"Textarea",class:"tl0f14n",vars:{"tl0f14n-1":[e=>e.hasLabel?"0 ".concat(s.Ki.Small," ").concat(s.Ki.Xxsmall):"".concat((0,l.hO)(14)," ").concat(s.Ki.Small)]}}),N=(0,a.Z)("span")({name:"LabelHeading",class:"l16bbkbz"}),R=(e,n)=>{var{invalid:t,label:r,type:a}=e,s=T(T({},(0,o.Z)(e,C)),{},{defaultValue:e.onChange?void 0:e.value,label:r,value:e.onChange?e.value:void 0}),l=!!(e.defaultValue?void 0:e.value)&&!!r,c=l?(0,p.jsx)(N,{children:r}):null,u="autoExpand"===a?(0,p.jsx)(w,T(T({},s),{},{className:(0,i.Z)(_,"ad7k3b5",e.variant===E.INVERTED&&"ts2ws6i"),ref:n})):(0,p.jsxs)(p.Fragment,{children:[c,(0,p.jsx)(I,T(T({hasLabel:l},s),{},{"aria-label":r,className:_,ref:n,rows:1}))]});return(0,p.jsx)("label",{"aria-disabled":e.disabled||void 0,"aria-invalid":t||void 0,"aria-readonly":e.readOnly||void 0,"aria-required":e.required||void 0,className:"l1205mkx",htmlFor:e.id,children:(0,p.jsx)(S,{children:u})})},L=c.forwardRef(R);t(81353)},4966:function(e,n,t){"use strict";t.d(n,{Z:function(){return R}});var r=t(95235),o=t(34291),i=t.n(o),a=t(23774),s=t(61315),l=t(41154),c=t(74061),u=t(83438),d=t(37278),p=t(89840),f=t(62099),m=t(92374),b=t(75572),v=t(40454),h=t(37726),x=t(28870),y=t(2784),O=t(37149),g=t.n(O),j=t(52322);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}t(34406).env.STORYBOOK||t(97376)((()=>{var e=document.querySelector(".site");e?g().setAppElement(e):v.Z.error('Element with class "site" was not found, cannot set app element in AssemblyModal')}));var Z="f6ngt95",w=(0,s.Z)("div")({name:"Content",class:"c1cv2anc",vars:{"c1cv2anc-0":[e=>e.justifyCenter?"center":"stretch"],"c1cv2anc-3":[e=>e.justifyCenter?"center":"left"]}}),E=(0,s.Z)("div")({name:"Fade",class:"fz4nps6"}),C=(0,s.Z)("div")({name:"Footer",class:"f1i2nkrh",vars:{"f1i2nkrh-0":[e=>e.includeFooterBorder?"".concat((0,x.hO)(1)," solid ").concat(d.fY.Gray300Gray600):"none"],"f1i2nkrh-1":[e=>e.justifyCenter?"column":"row"],"f1i2nkrh-2":[e=>e.includeFooterBorder?"".concat(f.Ki.Small):"0 ".concat(f.Ki.Small," ").concat(f.Ki.Large," ").concat(f.Ki.Small)]}}),A=(0,s.Z)("div")({name:"FooterActions",class:"f1sxiitf",vars:{"f1sxiitf-0":[e=>e.justifyCenter?"".concat(f.Ki.Small):0]}}),T=(0,s.Z)("div")({name:"Scrollable",class:"s13e2cpr"}),_=(0,s.Z)("div")({name:"CloseButton",class:"ckk0ebs",vars:{"ckk0ebs-0":[e=>e.includeCloseButtonBackground?"".concat(d.fY.Gray100Gray700):"none"]}}),S=(0,s.Z)(p.H2)({name:"Title",class:"t1ltekmn"}),I=(0,s.Z)("div")({name:"Subtitle",class:"s1ext0pg"}),N=(0,s.Z)("section")({name:"ModalSubheading",class:"mnxms34"});function R(e){var{isOpen:n=!1,onOpen:t=i(),includeCloseButton:r=!0,includeCloseButtonBackground:o=!0,includeFooterBorder:s=!0,includeFooterFade:d=!0,justifyCenter:p=!1,limitHeight:f=!0,desktopVariant:v,mobileVariant:x="fullPage",mobileBreakpoint:O=l.u3.s,onClose:k,image:R,eyebrowLabel:L,title:B,subtitle:D,body:F,primaryAction:M,primaryActionWithMenuProps:z,secondaryAction:q,shouldCloseOnOverlayClick:G=!0,enableMargin:U=!0,disableScrolling:X=!1,shouldFocusAfterRender:V=!1,footerText:H}=e,{0:W,1:K}=(0,y.useState)(!1),{t:Q}=(0,h.Z)();(0,y.useEffect)((()=>{!n&&W&&K(!1)}),[n,W]);var Y=e=>{K(!0),e.persist&&e.persist(),window.setTimeout(k,290)},J=r?(0,j.jsx)(_,{"aria-label":Q("modal.close_aria_label"),includeCloseButtonBackground:o,onClick:Y,children:(0,j.jsx)(c.ZP,{icon:"x",size:c.i.Medium})}):null,$=(0,j.jsxs)("header",{children:[L?(0,j.jsx)(N,{children:L}):null,B?(0,j.jsx)(S,{children:B}):null,D?(0,j.jsx)(I,{children:D}):null]}),ee=e=>{var n=(e=>z?(0,j.jsx)(u.AssemblyPrimaryMenuButton,P({isFullWidth:e},z),"modal-primary-dropdown-menu-button"):M?(0,j.jsx)(u.AssemblyPrimaryButton,P({isFullWidth:e},M),"modal-primary-button"):null)(e),t=q?(0,j.jsx)(u.AssemblySecondaryButton,P({isFullWidth:e},q),"modal-secondary-button"):null,r=e?[n,t]:[t,n];return n||t?(0,j.jsxs)(C,{className:(0,a.Z)(H&&"has-footer-text",p&&"is-centered"),includeFooterBorder:s,justifyCenter:p,children:[H,(0,j.jsx)(A,{justifyCenter:p,children:r})]}):null},ne=n&&!W,te=(0,j.jsxs)(w,{className:(0,a.Z)(!U&&"c1yw38c3"),justifyCenter:p,children:[$,F||null]}),re=(0,j.jsxs)(T,{children:[te,d?(0,j.jsx)(E,{}):null]});return(0,j.jsx)(b.Z,{below:O,children:e=>(0,j.jsx)(g(),{bodyOpenClassName:"b18nf8bw",className:(0,a.Z)("mnlifen",ne?"o126043d":"c1clqjtf",f?"l1echgc4":null,e&&"fullPage"===x&&Z,!e&&"fullPage"===v&&Z,e&&"bottomSheet"===x&&"mqw41g3"),isOpen:n,onAfterOpen:t,onRequestClose:Y,overlayClassName:(0,a.Z)("ohebfrr",ne&&"oxppdgq"),shouldCloseOnOverlayClick:G,shouldFocusAfterRender:V,children:(0,j.jsxs)(m.y.Provider,{value:!0,children:[J,R,X?te:re,ee(e)]})})})}t(93587)},30147:function(e,n,t){"use strict";var r=t(20406),o=t(61315),i=t(7984),a=t(83438),s=t(24697),l=t(1524),c=t(6576),u=t(37726),d=t(2784),p=t(52322),f=(0,o.Z)("div")({name:"BookmarkWrapper",class:"b12nnctz"});n.Z=e=>{var{isContentBookmarked:n,useTooltip:t=!1,addBookmarkAction:o,removeBookmarkAction:m,itemId:b,itemType:v,userPlan:h}=e,{0:x,1:y}=(0,d.useState)(n),{logPageAction:O}=(0,c.wL)(),g="/webapi/3.8/explanations/bookmarks",{t:j}=(0,u.Z)(),k=function(){var e=(0,r.Z)((function*(e){yield(0,l.cZ)(g,{body:{itemId:e.itemId,itemType:e.itemType}}).catch((()=>{(0,s.fz)({text:j("explanations.bookmarking.error_description_save"),includeEllipsis:!1})}))}));return function(n){return e.apply(this,arguments)}}(),P=function(){var e=(0,r.Z)((function*(e){yield(0,l.HL)(g,{params:{itemId:e.itemId,itemType:e.itemType}}).catch((()=>{(0,s.fz)({text:j("explanations.bookmarking.error_description_delete"),includeEllipsis:!1})}))}));return function(n){return e.apply(this,arguments)}}(),Z=()=>{var e={itemId:b,itemType:v};x?(O(m,{itemId:b,itemType:v,userPlan:h}),P(e)):(O(o,{itemId:b,itemType:v,userPlan:h}),k(e)),y(!x)},w=x?"bookmark-filled":"bookmark",E=j(x?"explanations.bookmarking.is_bookmarked":"explanations.bookmarking.is_not_bookmarked"),C=()=>(0,p.jsx)(f,{children:(0,p.jsx)(a.AssemblyIconButton,{alt:E,icon:w,onClick:Z,shape:"square"})});return t&&(0,p.jsx)(i.Z,{delay:200,placement:"bottom left",text:E,children:C()})||C()},t(71249)},79776:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(61315),o=t(54201),i=t(47583),a=t(69034),s=t(6576),l=t(55811),c=t(93892),u=t(37726),d=t(2784),p=t(52322),f=e=>{var n,t,{meteringMeta:r,modelId:o,modelType:f,isTOCPage:m=!1}=e,{t:b}=(0,u.Z)(),{logSubscriptionEvent:v}=(0,s.wL)(),h=(0,d.useContext)(i.Z);(0,d.useEffect)((()=>{v({action:l.Mpk.VIEW,additional_info:{model_id:o,model_type:f,numRemaining:r?r.threshold-r.numEvents:null,threshold:null===r||void 0===r?void 0:r.threshold},fullActionName:c.Df.METERED_EXPLANATIONS_PILL_VIEW,upsellType:l.Xj4.EXPLANATIONS_METER})}),[]);var x=c.h,y=null!==(n=null===r||void 0===r?void 0:r.threshold)&&void 0!==n?n:x,O=null!==(t=null===r||void 0===r?void 0:r.numEvents)&&void 0!==t?t:0,g=y-O,j=f===l.BYJ.TEXTBOOK||O>y?"lock":"unlock";return(0,p.jsx)(a.ZP,{leftIcon:j,text:h?g>=0&&!m||g>0&&m?b("explanations.free_solutions_metering_pill.logged_in",{numEvents:O,threshold:y}):b("explanations.free_solutions_metering_pill.none"):b("explanations.free_solutions_metering_pill.logged_out_metering"),variant:a.GP.PLUS})};function m(e,n,t,r){return!(r&&!r.isPremium)&&(!(t&&(t.type!==l.XsQ.NO_UPGRADE||!e))&&!(n===l.BYJ.EXPLANATION_QUESTION&&(!t||!e||e.threshold<1)))}var b=t(71803),v=(0,r.Z)("div")({name:"PillWrapper",class:"p1klmycn"}),h=e=>{var{badgeLogActionName:n,meteringMeta:t,modelId:r,modelType:a,textbook:s,isTOCPage:c=!1}=e,u=(0,b.Z)(),h=(0,d.useContext)(i.Z);if(s&&!s.isPremium)return null;var x=function(e,n,t){return!(n!==l.BYJ.EXPLANATION_QUESTION||0!==(null===e||void 0===e?void 0:e.threshold)&&t)||!(!t||t.type!==l.XsQ.PLUS)}(t,a,h);return x||"variant1"!==u?(0,p.jsxs)(p.Fragment,{children:[x&&(0,p.jsx)(v,{children:(0,p.jsx)(o.ZP,{addMarginLeft:!1,logActionName:n})}),m(t,a,h,s)&&(0,p.jsx)(v,{children:(0,p.jsx)(f,{isTOCPage:c,meteringMeta:t,modelId:r,modelType:a})})]}):null};t(68615)},29263:function(e,n,t){"use strict";t.d(n,{Z:function(){return I}});var r=t(82269),o=t(61315),i=t(41549),a=t(43852),s=t(44116),l=t(58825),c=t(62099),u=t(72779),d=t.n(u),p=t(47583),f=t(93892),m=t(28870),b=(0,o.Z)("div")({name:"Container",class:"c18oith1",vars:{"c18oith1-0":[e=>e.isFullWidth?"none":(0,m.hO)(f.Kk)]}});t(7201);var v=t(33524),h=t(40066),x=t(2784),y=t(38298),O=t(53632),g=t(52322),j=["breadcrumbs"],k=(0,o.Z)("div")({name:"OutOfPageAdWrapper",class:"okxdvmk"}),P=(0,o.Z)("div")({name:"LayoutContainer",class:"lgjxdso"}),Z=(0,o.Z)("div")({name:"Wrapper",class:"wwhvwas"}),w=(0,o.Z)("div")({name:"HeaderWrapper",class:"h1ib1wgb",vars:{"h1ib1wgb-0":[e=>e.isContentLimited?"none":"auto"],"h1ib1wgb-1":[e=>e.isContentLimited?"blur(".concat(c.Ki.Xxsmall,")"):"none"]}}),E=(0,o.Z)("main")({name:"Main",class:"mv7e89c",vars:{"mv7e89c-0":[e=>e.shouldHaveMinHeight?"".concat((0,m.hO)(400)):"unset"]}}),C=(0,o.Z)("div")({name:"FooterWrapper",class:"f1nibspq"}),A=(0,o.Z)("div")({name:"AdContainer",class:"a1st76xs",vars:{"a1st76xs-0":[e=>{var{sidebarAdUnit:n}=e;return"ExplanationsExerciseSidebar"===n?0:"".concat(c.Ki.Large)}]}}),T=(0,o.Z)("div")({name:"SidebarAd",class:"s1uto0f7"}),_=(0,o.Z)(b)({name:"MainContainer",class:"m1ad84na"}),S=(0,o.Z)("div")({name:"Breadcrumbs",class:"b69lihc"}),I=e=>{var{breadcrumbs:n}=e,t=(0,r.Z)(e,j),o=(0,x.useContext)(p.Z),c=t.shouldShowAds&&!(0,O.ZP)()&&void 0!==t.sidebarAdUnit,{0:u,1:f}=(0,x.useState)(c),m=(0,h.Z)();(0,x.useEffect)((()=>{f(c&&(0,y.P0)(m,"m"))}),[c,m]);var I=d()({"has-adz":u}),N=t.shouldShowAds?(0,g.jsx)("div",{className:"OutOfPageAdContainer",children:(0,g.jsx)(k,{})}):null,R=null!==o;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(P,{className:I,children:[u?(0,g.jsx)(l.ZP,{lowerBound:"m",children:(0,g.jsx)(A,{"data-testid":"ExplanationsLayoutAd",sidebarAdUnit:t.sidebarAdUnit,children:(0,g.jsx)(i.Z,{children:(0,g.jsx)(T,{children:(0,g.jsx)(a.ZP,{id:t.sidebarAdUnit,refreshInterval:60})})})})}):null,(0,g.jsxs)(Z,{children:[(0,g.jsx)(w,{isContentLimited:t.isContentLimited,children:(0,g.jsxs)(b,{children:[n&&(0,g.jsx)(S,{children:(0,g.jsx)(s.Z,{breadcrumbs:n})}),t.header]})}),(0,g.jsx)(E,{shouldHaveMinHeight:null!==u&&void 0!==u&&u,children:(0,g.jsxs)(_,{children:[t.children,R?(0,g.jsx)(C,{children:(0,g.jsx)(v.Z,{})}):null]})})]})]}),N]})};t(94762)},26056:function(e,n,t){"use strict";t.d(n,{J:function(){return r}});var r,o=t(20406),i=t(95235),a=t(61315),s=t(86670),l=t(65534),c=t(71152),u=t(14938),d=t(35568),p=t(1524),f=t(93892),m=t(37726),b=t(2784),v=t(86231),h=t(52322);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}!function(e){e.TEXTBOOK_THUMBNAIL_ERROR="textbook_thumbnail_error",e.EXPLANATION_DISPLAY="explanation_display",e.EXPLANATION_INCORRECT="explanation_incorrect",e.EXPLANATION_WRONG_PROBLEM="explanation_wrong_problem",e.EXPLANATION_GRAMMAR_SPELLING="explanation_grammar_spelling",e.OTHER="other"}(r||(r={}));var O=(0,a.Z)("div")({name:"TextAreaWrapper",class:"tsaqph2"}),g=(0,a.Z)("p")({name:"SolutionText",class:"s18ox6n6"});n.Z=e=>{var{isOpen:n,onClose:t,onOpen:i,textbook:a,exercise:x,selectedSolution:j,solutionsLength:k,question:P}=e,{t:Z}=(0,m.Z)(),w=[{label:Z("explanations.feedback.options.explanation_display"),value:r.EXPLANATION_DISPLAY},{label:Z("explanations.feedback.options.explanation_incorrect"),value:r.EXPLANATION_INCORRECT},{label:Z("explanations.feedback.options.explanation_wrong_problem"),value:r.EXPLANATION_WRONG_PROBLEM},{label:Z("explanations.feedback.options.explanation_grammar_spelling"),value:r.EXPLANATION_GRAMMAR_SPELLING},{label:Z("explanations.feedback.options.other"),value:r.OTHER}],{0:E,1:C}=(0,b.useState)({option:"",reason:""}),{0:A,1:T}=(0,b.useState)(!1),{0:_,1:S}=(0,b.useState)(!1),I=()=>{T(!1)},N=()=>{T(!1),S(!0),t()},R=function(){var e=(0,o.Z)((function*(e){T(!0),t();try{(yield(0,p.cZ)(f.mU,{body:{content_url:encodeURI(window.location.href),screen_size:"width: ".concat((0,v.getWidth)(),", height: ").concat((0,v.getHeight)()),feedback_content:e,isbn:null===a||void 0===a?void 0:a.isbn,exercise_id:null===x||void 0===x?void 0:x.id,solution_id:null===j||void 0===j?void 0:j.id,question_id:null===P||void 0===P?void 0:P.id}})).status===s.eV.Created?C({option:"",reason:""}):N()}catch(n){N()}}));return function(n){return e.apply(this,arguments)}}(),L=(0,h.jsxs)(h.Fragment,{children:[k>1&&(null===j||void 0===j?void 0:j.label)&&(0,h.jsx)(g,{children:Z("explanations.feedback.submission.solution",{solution:j.label})}),(0,h.jsx)(c.Z,{onChange:e=>C(y(y({},E),{},{option:e})),value:E.option,children:w.map((e=>(0,h.jsx)(l.Z,{label:e.label,value:e.value},e.value)))}),E.option===r.OTHER&&(0,h.jsx)(O,{children:(0,h.jsx)(u.Z,{onChange:e=>C(y(y({},E),{},{reason:e.currentTarget.value})),placeholder:Z("explanations.feedback.options.enter_reason"),value:E.reason})})]}),B=""===E.option||""===E.reason&&E.option===r.OTHER;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.g,{body:L,isOpen:n,onClose:t,primaryAction:{text:Z("explanations.feedback.submission.submit"),type:"submit",onClick:()=>{var e,n=(null===(e=w.find((e=>e.value===E.option)))||void 0===e?void 0:e.label)||"";E.option===r.OTHER&&(n=E.reason),R(n)},disabled:B},secondaryAction:{text:Z("explanations.feedback.submission.cancel"),onClick:t},title:Z("explanations.feedback.submission.action")}),(0,h.jsx)(d.g,{body:(0,h.jsx)(h.Fragment,{children:Z("explanations.feedback.submission.success_message")}),isOpen:A,onClose:I,primaryAction:{text:Z("explanations.feedback.submission.done"),onClick:I},title:Z("explanations.feedback.submission.success")}),(0,h.jsx)(d.g,{body:(0,h.jsx)(h.Fragment,{children:Z("explanations.feedback.submission.error_description")}),isOpen:_,onClose:()=>S(!1),primaryAction:{text:Z("explanations.feedback.submission.error_action"),onClick:()=>(I(),S(!1),void i())},title:Z("explanations.feedback.submission.error_title")})]})},t(90178)},2305:function(e,n,t){"use strict";t.d(n,{w:function(){return r}});var r,o=t(61315),i=t(85296),a=t(83438),s=(t(2784),t(52322));!function(e){e.NEXT="next",e.PREVIOUS="previous"}(r||(r={}));var l=(0,o.Z)("div")({name:"LinkWrapper",class:"l1srttcv"});n.Z=e=>{var{link:n,type:t}=e,o=t===r.PREVIOUS?"caret-left":void 0,c=t===r.NEXT?"caret-right":void 0;return(0,s.jsx)(l,{className:"NavigationLink--".concat(t),children:null!==n&&void 0!==n&&n.url?(0,s.jsx)(i.ZP,{ariaLabel:n.label,leftIcon:o,linkTo:null===n||void 0===n?void 0:n.url,onClick:null===n||void 0===n?void 0:n.onClick,rightIcon:c,size:"medium",text:n.label,variant:i.U_.Primary}):(0,s.jsx)(a.AssemblySecondaryButton,{leftIcon:o,linkTo:null===n||void 0===n?void 0:n.url,onClick:null===n||void 0===n?void 0:n.onClick,rightIcon:c,text:n.label})})},t(4871)},21016:function(e,n,t){"use strict";var r=t(61315),o=t(2305),i=t(40750),a=t.n(i),s=(t(2784),t(52322)),l=(0,r.Z)("div")({name:"Navigation",class:"n8ph3fp"}),c=(0,r.Z)("div")({name:"Previous",class:"pm71d3p"}),u=(0,r.Z)("div")({name:"CenterButtons",class:"c19lz1jp"}),d=(0,r.Z)("div")({name:"Next",class:"n5cc71p"});n.Z=e=>{var{children:n,nextLink:t,previousLink:r}=e,i=e=>null!==e;return(0,s.jsxs)(l,{children:[(0,s.jsx)(c,{children:i(r)?(0,s.jsx)(o.Z,{link:a()(r),type:o.w.PREVIOUS}):null}),n&&(0,s.jsx)(u,{children:n}),(0,s.jsx)(d,{children:i(t)?(0,s.jsx)(o.Z,{link:a()(t),type:o.w.NEXT}):null})]})},t(60928)},66902:function(e,n,t){"use strict";var r,o,i,a,s;t.d(n,{G2:function(){return o},Nw:function(){return a},_Q:function(){return s},fQ:function(){return i},h$:function(){return r}}),function(e){e.CHAPTER="chapter",e.GROUP="group",e.SECTION="section"}(r||(r={})),function(e){e.LARGE="large",e.REGULAR="regular"}(o||(o={})),function(e){e.LATEX="latex",e.ADDITIONAL="additional"}(i||(i={})),function(e){e.CHAPTER="chapter",e.FIRST_LEVEL="first_level",e.SECOND_LEVEL="second_level",e.EXERCISE="exercise"}(a||(a={})),function(e){e.Textbook="textbook",e.Exercise="media_exercise",e.Question="question"}(s||(s={}))},27225:function(e,n,t){"use strict";t.d(n,{M0:function(){return i},WE:function(){return a},xq:function(){return s}});var r=t(93892),o=e=>({name:e("explanations.breadcrumbs.explanations_title"),url:r.m_}),i=e=>[o(e)],a=(e,n,t)=>[o(n),{url:e._webUrl,name:e.title,onClick:()=>{t(r.ZC.TEXTBOOK_EXERCISE_CLICK_BREADCRUMB,{textbook_isbn:e.isbn})}}],s=e=>[o(e)]},23464:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(20406),o=t(1524),i=t(55811),a=t(40454),s=t(5449),l="/webapi/3.4/explanations/sessions/save";function c(e){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)((function*(e){var{itemType:n,itemId:t,personId:r}=e;try{return(yield(0,o.cZ)(l,{body:{data:{active:!0,personId:r,itemType:n,itemId:t,solutionId:null,platform:i.t4T.WEB,timestamp:(0,s.S0)()}}})).body}catch(c){return a.Z.warning("Web client could not create a session with attached data",{data:e,error:c}),c}}))).apply(this,arguments)}},14418:function(e,n,t){"use strict";function r(e){return!!e&&void 0!==e.prompt}t.d(n,{Z:function(){return r}})},2034:function(e,n,t){"use strict";function r(e){return!!e&&void 0!==e.isbn}t.d(n,{Z:function(){return r}})},41800:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(89148);function o(){return(0,r.Z)().getFeatureFlagOrTestVariantWithoutEnrolling("ExplanationsBookmarking[default,engagement,subscriptions]")}},71803:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(89148);function o(){return(0,r.Z)().getFeatureFlagOrTestVariantWithoutEnrolling("ExplanationsTOCMeterUI[default,subscriptions,growth]")}},31786:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(55811),o=t(47583),i=t(36761),a={isCoachmarkSeen:()=>!!i.ZP.read("freeSolutionsCoachmark"),isQuestionMessageSeen:()=>!!i.ZP.read("freeSolutionsMessageQuestion"),isToastSeen:()=>!!i.ZP.read("freeSolutionsToast"),markCoachmarkSeen(){i.ZP.write("freeSolutionsCoachmark",!0,{duration:30})},markQuestionMessageSeen(){i.ZP.write("freeSolutionsMessageQuestion",!0,{duration:30})},markToastSeen(){i.ZP.write("freeSolutionsToast",!0,{duration:30})},getIsbns(e){var n=i.ZP.readJson("freeSolutionsMessage".concat(e));return Array.isArray(n)?n:[]},saveIsbn(e,n){var t=this.getIsbns(n);t.length<3&&(t.push(e),i.ZP.writeJson("freeSolutionsMessage".concat(n),t,{duration:30}))}},s=t(71803),l=t(2784);function c(e,n,t,i){var c=(0,s.Z)(),u=(0,l.useContext)(o.Z),{0:d,1:p}=(0,l.useState)(!1);return(0,l.useEffect)((()=>{var o,s=u&&u.type!==r.XsQ.NO_UPGRADE,l="TOC"===e,d=i&&!i.isPremium,f=n&&n.numEvents>n.threshold,m="TOC"===e&&(null!==(o=null===n||void 0===n?void 0:n.numEvents)&&void 0!==o?o:1)>1,b="TOC"===e&&null!==c&&["variant1","variant2"].includes(c),v=!1;if("Question"===e)v=a.isQuestionMessageSeen();else if(null!==i&&void 0!==i&&i.isbn){var h=a.getIsbns(e);v=h.length>=3||h.includes(i.isbn)}p(!b&&t&&!m&&!f&&!v&&(l||!!u)&&!s&&!d)}),[]),[d,function(){p(!1),"Question"===e?a.markQuestionMessageSeen():null!==i&&void 0!==i&&i.isbn&&a.saveIsbn(i.isbn,e)}]}},33524:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(61315),o=t(85296),i=t(37726),a=(t(2784),t(52322)),s=(0,r.Z)("footer")({name:"Footer",class:"f2nmi2p"});function l(){var{t:e}=(0,i.Z)();return(0,a.jsxs)(s,{children:[(0,a.jsx)(o.ZP,{linkTo:"/privacy",size:"small",text:e("footer.categories.resources.privacy"),variant:o.U_.Secondary}),(0,a.jsx)(o.ZP,{linkTo:"/tos",size:"small",text:e("footer.categories.resources.terms"),variant:o.U_.Secondary})]})}t(26947)},64873:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(27754),o=t(72363),i=t(77786),a=t(47583),s=t(2784),l=t(52322);function c(e){var{children:n,showActivePromoBanner:t}=e;return null===(0,s.useContext)(a.Z)?(0,l.jsx)(o.Z,{showActivePromoBanner:t,children:n}):(0,l.jsxs)(l.Fragment,{children:[t?(0,l.jsx)(r.Z,{}):null,(0,l.jsx)(i.Z,{children:n})]})}},11444:function(e){e.exports={asc1vt2:"asc1vt2",a161zioz:"a161zioz",a1fcz3cu:"a1fcz3cu",ah6785x:"ah6785x",a17bzrsx:"a17bzrsx"}},88187:function(e){e.exports={AssemblyRadio:"AssemblyRadio","AssemblyRadio-input":"AssemblyRadio-input","AssemblyRadio-fauxInput":"AssemblyRadio-fauxInput","AssemblyRadio-label":"AssemblyRadio-label",UILink:"UILink","AssemblyRadio-withTextField":"AssemblyRadio-withTextField"}},39997:function(e){e.exports={ruarquf:"ruarquf",h19ive8k:"h19ive8k"}},81353:function(e){e.exports={bxtl8jy:"bxtl8jy",ad7k3b5:"ad7k3b5",ts2ws6i:"ts2ws6i",a1k2umqi:"a1k2umqi",tl0f14n:"tl0f14n",l1205mkx:"l1205mkx",l16bbkbz:"l16bbkbz"}},93587:function(e){e.exports={mnlifen:"mnlifen",l1echgc4:"l1echgc4",f6ngt95:"f6ngt95",mqw41g3:"mqw41g3",c1clqjtf:"c1clqjtf",o126043d:"o126043d",b18nf8bw:"b18nf8bw",ohebfrr:"ohebfrr",oxppdgq:"oxppdgq",c1cv2anc:"c1cv2anc",c1yw38c3:"c1yw38c3",fz4nps6:"fz4nps6",f1i2nkrh:"f1i2nkrh","has-footer-text":"has-footer-text","is-centered":"is-centered",f1sxiitf:"f1sxiitf",s13e2cpr:"s13e2cpr",ckk0ebs:"ckk0ebs",t1ltekmn:"t1ltekmn",hlni9so:"hlni9so",s1ext0pg:"s1ext0pg",mnxms34:"mnxms34"}},71249:function(e){e.exports={b12nnctz:"b12nnctz"}},7201:function(e){e.exports={c18oith1:"c18oith1","has-adz":"has-adz"}},68615:function(e){e.exports={p1klmycn:"p1klmycn"}},94762:function(e){e.exports={OutOfPageAdContainer:"OutOfPageAdContainer",okxdvmk:"okxdvmk",lgjxdso:"lgjxdso",wwhvwas:"wwhvwas",ExplanationsBreadcrumbs:"ExplanationsBreadcrumbs",h1ib1wgb:"h1ib1wgb",mv7e89c:"mv7e89c",f1nibspq:"f1nibspq",a1st76xs:"a1st76xs",s1uto0f7:"s1uto0f7",m1ad84na:"m1ad84na",c18oith1:"c18oith1",b69lihc:"b69lihc"}},90178:function(e){e.exports={tsaqph2:"tsaqph2",s18ox6n6:"s18ox6n6"}},4871:function(e){e.exports={l1srttcv:"l1srttcv"}},60928:function(e){e.exports={n8ph3fp:"n8ph3fp",pm71d3p:"pm71d3p",c19lz1jp:"c19lz1jp",n5cc71p:"n5cc71p"}},26947:function(e){e.exports={f2nmi2p:"f2nmi2p"}},90407:function(e,n,t){"use strict";var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=function(e,n,t){for(var r=!0;r;){var o=e,i=n,a=t;r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var l=s.get;if(void 0===l)return;return l.call(a)}var c=Object.getPrototypeOf(o);if(null===c)return;e=c,n=i,t=a,r=!0,s=c=void 0}};function a(e){return e&&e.__esModule?e:{default:e}}function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function l(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var c=a(t(13980)),u=a(t(2784)),d=function(e){function n(){s(this,n),i(Object.getPrototypeOf(n.prototype),"constructor",this).apply(this,arguments)}return l(n,e),o(n,[{key:"render",value:function(){var e=this.context.radioGroup,n=e.name,t=e.selectedValue,o=e.onChange,i={};return void 0!==t&&(i.checked=this.props.value===t),"function"===typeof o&&(i.onChange=o.bind(null,this.props.value)),u.default.createElement("input",r({},this.props,{type:"radio",name:n},i))}}]),n}(u.default.Component);n.Y8=d,d.contextTypes={radioGroup:c.default.object};var p=function(e){function n(){s(this,n),i(Object.getPrototypeOf(n.prototype),"constructor",this).apply(this,arguments)}return l(n,e),o(n,[{key:"getChildContext",value:function(){var e=this.props;return{radioGroup:{name:e.name,selectedValue:e.selectedValue,onChange:e.onChange}}}},{key:"render",value:function(){var e=this.props,n=e.Component,t=(e.name,e.selectedValue,e.onChange,e.children),r=function(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}(e,["Component","name","selectedValue","onChange","children"]);return u.default.createElement(n,r,t)}}]),n}(u.default.Component);n.Ee=p,p.defaultProps={Component:"div"},p.propTypes={name:c.default.string,selectedValue:c.default.oneOfType([c.default.string,c.default.number,c.default.bool]),onChange:c.default.func,children:c.default.node.isRequired,Component:c.default.oneOfType([c.default.string,c.default.func,c.default.object])},p.childContextTypes={radioGroup:c.default.object}}}]);