(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6057],{47350:function(e,t,n){"use strict";n.d(t,{Hq:function(){return _},If:function(){return u},ZP:function(){return p}});var a=n(95235),i=n(31477),s=n(72779),r=n.n(s),o=(n(2784),n(28721)),l=n(52322);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u,_="a193ljwt";function p(e){var t,{children:n,hasHoverState:a,isActive:s,linkTo:c,onClick:_,size:p,tabIndex:g}=e,x=(0,o.dM)(),m=p===u.Small?"AssemblySmallCard":"AssemblyMediumCard",h=r()("AssemblyCard",m,{["".concat(m,"-hover")]:a,["".concat(m,"-isActive")]:s}),T=(0,i.r7)({onPress:_});_||(T=null);var b=x(c,{onNavigation:_});return c?(0,l.jsx)("div",d(d({},b),{},{className:h,role:"link",tabIndex:g||0,children:n})):(0,l.jsx)("div",d(d({},null===(t=T)||void 0===t?void 0:t.pressProps),{},{className:h,tabIndex:g||0,children:n}))}!function(e){e.Small="small",e.Medium="medium"}(u||(u={})),n(73201)},71583:function(e,t,n){"use strict";var a=n(69034),i=n(54201),s=n(37726),r=n(27370),o=(n(2784),n(52322));t.Z=e=>{var{onClick:t,question:n,includePremiumBadge:l=!0,includeVerifiedPill:c=!1}=e,{t:d}=(0,s.Z)(),u=(0,o.jsxs)(o.Fragment,{children:[n.subjectNames.length>0?n.subjectNames[0].replace(/_/g," ").toUpperCase():d("explanations.question"),l&&(0,o.jsx)(i.ZP,{})]}),_=c?(0,o.jsx)(a.ZP,{leftIcon:"verified-stamp",text:d("explanations.verified_answer")}):void 0;return(0,o.jsx)(r.Z,{bodyText:n.prompt.text,headerContent:u,linkTo:n._webUrl,onClick:()=>{t&&t(n)},pill:_})}},68620:function(e,t,n){"use strict";n.d(t,{Q:function(){return x}});var a=n(47350),i=n(85296),s=n(69034),r=n(89840),o=n(54201),l=n(55811),c=n(88300),d=n(69608),u=n(39790),_=n(37726),p=n(2784),g=n(52322),x=(d.Z,"auxrerp");t.Z=e=>{var{onClick:t,textbook:n,crawlLinkSource:d,shouldShowPremiumBrandingBadge:x=!0,studyFunnelPlacement:m,studyFunnelSubplacement:h,itemOrder:T,shouldIncludeThumbnail:b=!0}=e,C=(0,p.useRef)(null),{clickUrlWithTracking:E,handleClickTracking:v}=(0,u.Z)(C,null,{clickUrl:n._webUrl,crawlLinkSource:d,itemOrder:T,modelId:+n.isbn,modelType:l.BYJ.TEXTBOOK,onClick:t,pageOrder:0,placement:m,subplacement:h}),{t:k}=(0,_.Z)(),S=n.edition?"".concat(n.title,", ").concat(n.edition):n.title,P=n.verifiedSolutionCount;return(0,g.jsx)("div",{ref:C,children:(0,g.jsx)(a.ZP,{hasHoverState:!0,linkTo:E,onClick:v,size:a.If.Small,children:(0,g.jsxs)("div",{className:"TextbookCard",children:[b?(0,g.jsxs)("div",{className:"TextbookCard-imageWrapper",children:[(0,g.jsx)(c.Z,{className:"TextbookCard-CoverThumbnail",textbook:n}),n.isPremium&&x?(0,g.jsx)("div",{className:"TextbookCard-badgeWrapper",children:(0,g.jsx)(o.ZP,{logActionName:"explanations_section_premium_branding_badge_view"})}):null]}):null,(0,g.jsxs)("div",{className:"TextbookCard-Details",children:[(0,g.jsx)(r.H4,{className:"TextbookCard-Title",children:(0,g.jsx)(i.ZP,{ariaLabel:S,linkTo:null!==E&&void 0!==E?E:n._webUrl,onClick:t,shouldHaveVisitedState:!0,size:"large",tabIndex:-1,text:n.title,variant:i.U_.Title})}),(0,g.jsx)("span",{children:n.edition}),(0,g.jsx)("span",{children:n.authors}),null!==P&&P>0?(e=>{var t=e<=100?k("explanations.verified_explanations_short"):k("explanations.verified_explanations",{numExplanations:e});return(0,g.jsx)("div",{className:"TextbookCard-VerifiedMessaging",children:(0,g.jsx)(s.ZP,{leftIcon:"verified-stamp",text:t})})})(P):null]})]})})})},n(5604)},88300:function(e,t,n){"use strict";var a=n(19051),i=n(50704),s=n(63300),r=n(2784),o=n(52322);t.Z=e=>{var{className:t,onError:n,textbook:l,useAltText:c=!0}=e,d=(0,a.Z)()?s:i,{0:u,1:_}=(0,r.useState)(l.imageThumbnailUrl||d);return(0,o.jsx)("img",{alt:c?"".concat(l.title).concat(l.edition?" ".concat(l.edition):"").concat(l.authors?" by ".concat(l.authors):""):"",className:t||"","data-testid":"ExplanationsTextbookThumbnail-".concat(l.isbn),onError:e=>{e&&(_(d),n&&n(e))},src:u})}},93892:function(e,t,n){"use strict";n.d(t,{$l:function(){return _},Bj:function(){return d},Df:function(){return i},Ek:function(){return p},Kk:function(){return g},Pt:function(){return u},ZC:function(){return a},_x:function(){return s},h:function(){return h},mU:function(){return c},m_:function(){return o},we:function(){return x},y8:function(){return m}});var a,i,s,r,o="/explanations",l=("".concat(o,"/textbook-solutions"),"".concat(o,"/questions"),"".concat("/webapi/3.4").concat(o)),c="".concat(l,"/feedback");"".concat(l,"/solution-review"),"".concat(l,"/textbook-exercises");!function(e){e.TOC_SAMPLES_TAB_SWITCH="explanations_toc_samples_tab_switch",e.TOC_SAMPLES_LOGIN_BUTTON_CLICK="explanations_toc_samples_login_button_click",e.TOC_SAMPLES_EXPAND_SAMPLES="explanations_toc_samples_expand_samples",e.TOC_SAMPLES_COLLAPSE_SAMPLES="explanations_toc_samples_collapse_samples",e.QUESTION_CLICK_RELATED_QUESTION="explanations_question_click_related_question",e.SOLUTIONS_CLICK_REVEAL_ALL_STEPS="explanations_solutions_click_reveal_all_steps",e.SOLUTIONS_CLICK_SOLUTION="explanations_solutions_click_solution",e.TEXTBOOKS_BY_TOPIC_CLICK_TOPIC="textbooks_by_topic_click_topic",e.TEXTBOOK_TOC_MODAL_CLICK_DISMISS="explanations_textbook_toc_modal_click_dismiss",e.TEXTBOOK_TOC_CLICK_CHAPTER="explanations_textbook_toc_click_chapter",e.TEXTBOOK_TOC_CLICK_EXERCISE="explanations_textbook_toc_click_exercise",e.TEXTBOOK_TOC_VIEW_SOLUTIONS_COACHMARK="explanations_textbook_toc_view_solutions_coachmark",e.TEXTBOOK_EXERCISE_CLICK_BREADCRUMB="explanations_textbook_exercise_click_breadcrumb",e.TEXTBOOK_EXERCISE_CLICK_NEXT="explanations_textbook_exercise_click_next",e.TEXTBOOK_EXERCISE_CLICK_PREVIOUS="explanations_textbook_exercise_click_previous",e.TEXTBOOK_EXERCISE_CLICK_TOC_MENU_BUTTON="explanations_textbook_exercise_click_toc_menu_button",e.SEARCH_BAR_CLICK_SEARCH_BUTTON="explanations_search_bar_click_search_button",e.SEARCH_BAR_CLICK_SEARCH_RESULT="explanations_search_bar_click_search_result",e.SEARCH_BAR_VIEW_SEARCH_RESULT="explanations_search_bar_view_search_result",e.QUESTION_CLICK_LOGINWALL="explanations_question_click_loginwall",e.EXERCISE_CLICK_LOGINWALL="explanations_exercise_click_loginwall",e.QUESTION_VIEW_LOGINWALL="explanations_question_view_loginwall",e.EXERCISE_VIEW_LOGINWALL="explanations_exercise_view_loginwall",e.QUESTION_PROMPT_EXPAND="explanations_question_prompt_expand",e.KATEX_ERROR="explanations_katex_error",e.EXPLANATIONS_ADD_BOOKMARK="explanations_add_bookmark",e.EXPLANATIONS_REMOVE_BOOKMARK="explanations_remove_bookmark",e.PROFILE_CLICK_LEARN_MORE="explanations_profile_click_learn_more",e.PROFILE_CLICK_QUESTION="explanations_profile_click_question",e.PROFILE_CLICK_EXERCISE="explanations_profile_click_exercise",e.PROFILE_CLICK_TEXTBOOK="explanations_profile_click_textbook",e.PROFILE_FILTER_MODEL_TYPE_CHANGE="explanations_profile_filter_model_type_change",e.PROFILE_FILTER_TEXT_CHANGE="explanations_profile_filter_text_change",e.LANDINGPAGE_COLLAPSE_TIP="explanations_landing_page_collapse_tip",e.LANDINGPAGE_OPEN_TIP="explanations_landing_page_open_tip",e.SETPAGE_TEXTBOOK_RECOMMENDATIONS_VIEWED="set_page_textbook_recommendation_viewed",e.SETPAGE_TEXTBOOK_RECOMMENDATIONS_CLOSE="set_page_textbook_recommendation_close",e.SETPAGE_TEXTBOOK_RECOMMENDATIONS_SEARCH_CLICKED="set_page_textbook_recommendation_search_clicked",e.SETPAGE_SET_BANNER_VIEWED="set_page_set_title_banner_viewed",e.SETPAGE_SET_BANNER_CLOSE="set_page_set_title_banner_close",e.SETPAGE_SET_BANNER_LINK_CLICKED="set_page_set_title_banner_link_clicked",e.LANDINGPAGE_RECENT_TEXTBOOK="explanations_landing_page_recent_textbook"}(a||(a={})),function(e){e.METERED_EXPLANATIONS_PAYWALL_CTA_CLICK="metered_explanations_paywall_cta_click",e.METERED_EXPLANATIONS_PILL_VIEW="metered_explanations_pill_view",e.METERED_EXPLANATIONS_PAYWALL_VIEW="metered_explanations_paywall_view",e.METERED_EXPLANATIONS_TOAST_CTA_CLICK="metered_explanations_toast_cta_click",e.METERED_EXPLANATIONS_TOAST_DISMISS="metered_explanations_toast_dismiss",e.METERED_EXPLANATIONS_TOAST_VIEW="metered_explanations_toast_view"}(i||(i={})),function(e){e.SIGNUP_ORIGIN_QUESTION="explanations-question",e.SIGNUP_ORIGIN_EXERCISE="explanations-exercise"}(s||(s={})),function(e){e.KATEX="katex",e.USER="user"}(r||(r={}));var d=300,u=160,_=32,p=16,g=944,x="explanations_meter_exceeded",m="explanations_meter_toast",h=2},18560:function(e,t,n){"use strict";n.d(t,{Z:function(){return te}});var a=n(95235),i=n(6040),s=n.n(i),r=n(61315),o=n(74061),l=n(66532),c=n(85296),d=n(83438),u=n(5305),_=n(88782),p=n(37278),g=n(62099),x=n(1524),m=n(6576),h=n(70341),T=n(63546),b=n(55811),C=n(93892),E=n(44591),v=n(2784),k=n(52322),S=(0,r.Z)("div")({name:"Result",class:"r1kmzsnw"}),P=(0,r.Z)("div")({name:"QuestionPromptWrapper",class:"q1t95pei"}),I=e=>{var{question:t}=e;return(0,k.jsx)(S,{children:(0,k.jsx)(P,{children:(0,k.jsx)(E.Z,{children:t.prompt.text})})})};n(44467);var f=n(29642),O=n(88300),N=(0,r.Z)("div")({name:"Result",class:"r14bt08z"}),j=(0,r.Z)("div")({name:"ThumbnailWrapper",class:"ti0ezjg"}),L=(0,r.Z)("div")({name:"Title",class:"trtljn"}),y=(0,r.Z)("p")({name:"Edition",class:"e13g67rl"}),A=e=>{var{textbook:t,query:n}=e;return(0,k.jsxs)(N,{children:[(0,k.jsx)(j,{children:(0,k.jsx)(O.Z,{textbook:t})}),(0,k.jsxs)("div",{children:[(0,k.jsx)(L,{children:(0,k.jsx)(f.Z,{className:"TextbookSearchListing-highlighted",query:n,text:t.title})}),t.edition?(0,k.jsx)(y,{children:t.edition}):null]})]})};n(10840);var Z=n(98935),B=(e,t)=>{var n=(0,Z.FI)(e);return"/search?query=".concat(n,"&type=").concat(t)},w=n(14418),R=n(2034),K=n(40454),M=n(37726),D=n(28870),G=n(21183),X=n(33900),U=n(34406);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W="no_results",H=(0,r.Z)("div")({name:"ExplanationsSearchAutosuggestWrapper",class:"e7lqtuc"}),z=(0,r.Z)("div")({name:"ExplanationSearchInputWrapper",class:"e1mh8mmx",vars:{"e1mh8mmx-0":[e=>e.hasSearchButton?g.Ki.Xsmall:0],"e1mh8mmx-1":[e=>e.isInNewLandingPageTest?"100%":(0,D.hO)(660)],"e1mh8mmx-2":[e=>e.isInNewLandingPageTest?p.fY.Gray100Gray700:"default"],"e1mh8mmx-3":[e=>e.isInNewLandingPageTest?(0,D.hO)(2):0],"e1mh8mmx-4":[e=>e.isInNewLandingPageTest?"solid":"none"],"e1mh8mmx-5":[e=>e.isInNewLandingPageTest?p.fY.Gray400Gray600:"transparent"],"e1mh8mmx-6":[e=>e.isInNewLandingPageTest?g.wU.Small:"0"]}}),F=(0,r.Z)("div")({name:"NoResultsText",class:"n1rgb1ub"}),V=(0,r.Z)("div")({name:"ClearButtonWrapper",class:"cbg4q0d"}),Y=(0,r.Z)("div")({name:"SearchIconWrapper",class:"shb39zj"}),J=(0,r.Z)("div")({name:"ViewAllResultsButtonWrapper",class:"v12yj8uu"}),$=(e,t,n,a)=>{var i=(e=>{var t;return null!==(t=e[0])&&void 0!==t&&t.suggestions?e[0].suggestions.length>0?b._ly.TEXTBOOKS:b._ly.QUESTIONS:b._ly.ALL})(t);a(C.ZC.SEARCH_BAR_CLICK_SEARCH_BUTTON,{currentPage:n,query:e,typeFilter:i},{isTabClosing:!0}),(0,G.ZP)(B(e,i))},ee=(e,t,n,a)=>{a(C.ZC.SEARCH_BAR_VIEW_SEARCH_RESULT,{currentPage:n,query:t,modelId:e.id,modelType:(0,w.Z)(e)?b.BYJ.EXPLANATION_QUESTION:b.BYJ.TEXTBOOK})},te=e=>{var t=new Date,n=null,a=(0,v.useRef)(null),{t:i}=(0,M.Z)(),{logPageAction:r}=(0,m.wL)(),{isInNewLandingPageTest:p,shouldShowSearchButton:g,shouldAutoFocusInput:E}=e,{0:S,1:P}=(0,v.useState)(""),{0:f,1:O}=(0,v.useState)(""),N=(t,n)=>{var a;if(!n||0===n.length)return[{title:W}];var s=null!==(a=null===n||void 0===n?void 0:n.map((e=>"prompt"in e?Q(Q({},e),{},{prompt:{text:e.prompt,image:null}}):e)))&&void 0!==a?a:[],o=s?s.filter(R.Z):[],l=s?s.filter(w.Z).map((e=>e)):[],d=[{title:i("explanations.search.textbooks_section_title"),suggestions:o},{title:i("explanations.search.questions_section_title"),suggestions:l},{title:(0,k.jsx)(J,{children:(0,k.jsx)(c.ZP,{ariaLabel:i("global.header.search.typeahead.view_all_results_link"),onClick:()=>((t,n)=>{t&&$(t,n,e.pageNameForLogging,r)})(t,d),text:i("global.header.search.typeahead.view_all_results_link"),variant:c.U_.Secondary})})}];return d},{0:j,1:L}=(0,v.useState)(N()),y=(0,v.useCallback)(s()(((t,n)=>{var{value:a,reason:i}=t,s=a.trim().substring(0,T.oA);s.length>=3&&s!==n&&"suggestion-selected"!==i&&(O(s),(0,x.lN)("/webapi/3.4/explanations/search",{params:{query:s,perPage:6,resultType:"instantResults"}}).then((e=>{var{models:t}=e.body.responses[0],n=t.explanationsSearchResults;L(N(s,n))})).catch((t=>{var n="Error retrieving explanations models from explanations autosuggest search - ".concat(e.pageNameForLogging);t.message===x.UA?K.Z.warn(n,t,{query:S,perPage:6}):K.Z.error(n,t,{query:S,perPage:6})})))}),200,{trailing:!0}),[]),Z=i("explanations.search.input_placeholder"),B={autoFocus:E,tabIndex:"0"};return(0,k.jsxs)(H,{onKeyDown:a=>{var i;i=a.currentTarget,(new Date).getTime()-t.getTime()>1e3&&(t=new Date,X.Z.scrollToElement(i,140)),"Enter"!==a.key||n||$(S,j,e.pageNameForLogging,r)},children:[(0,k.jsxs)(z,{className:"ExplanationAutoSuggestWithAssembly-inputWrapper",hasSearchButton:g,isInNewLandingPageTest:null!==p&&void 0!==p&&p,children:[(0,k.jsx)(Y,{children:(0,k.jsx)(o.ZP,{icon:"search",size:o.i.Small})}),(0,k.jsx)(h.Z,{alwaysRenderSuggestions:"monolith"!==U.env.RENDER_ENV,getSectionSuggestions:e=>e.title&&e.title===W&&S.length>3?[W]:e.suggestions?e.suggestions:[],getSuggestionValueForInput:e=>(0,w.Z)(e)?e.prompt.text:(0,R.Z)(e)?"".concat(e.title,", ").concat(i("explanations.textbook_exercise.isbn",{isbn:e.isbn})):"",inputAttributes:B,inputValue:S,label:Z,multiSection:!0,onInputChange:(e,t)=>{var{newValue:n}=t;P(n)},onSuggestionsClearRequested:()=>{L(N())},onSuggestionSelected:(t,a)=>{n=a,"string"!==typeof a.suggestion&&(((e,t,n,a)=>{a(C.ZC.SEARCH_BAR_CLICK_SEARCH_RESULT,{currentPage:n,query:t,modelId:e.id,modelType:(0,w.Z)(e)?b.BYJ.EXPLANATION_QUESTION:b.BYJ.TEXTBOOK})})(a.suggestion,S,e.pageNameForLogging,r),(0,G.ZP)(a.suggestion._webUrl))},onSuggestionsFetchRequested:e=>y(e,f),ref:a,renderSectionTitle:e=>e.title!==W?e.title:null,renderSuggestion:t=>t===W?(0,k.jsx)(F,{children:i("explanations.search.no_results_found")}):(0,w.Z)(t)?(ee(t,S,e.pageNameForLogging,r),(0,k.jsx)(I,{question:t},t.prompt.text)):(0,R.Z)(t)?(ee(t,S,e.pageNameForLogging,r),(0,k.jsx)(A,{query:S,textbook:t},t.isbn)):null,shouldRenderSuggestions:e=>e.trim().length>=3,suggestions:j,variant:p?l.q.Inverted:l.q.Standard}),S.length>0?(0,k.jsx)(V,{children:(0,k.jsx)(u.Z,{alt:i("explanations.search.clear_input_text"),icon:"x",onClick:()=>{var e;P(""),a&&(null===(e=a.current)||void 0===e||e.focus())},size:o.i.Small,variant:_.IQ.TERTIARY})}):null]}),g?(0,k.jsx)(d.AssemblyPrimaryButton,{onClick:()=>{$(S,j,e.pageNameForLogging,r)},size:"large",text:i("explanations.search.button_text")}):null]})};n(96312)},69608:function(e,t,n){"use strict";t.Z="e1j7caqt",n(67128)},44591:function(e,t,n){"use strict";var a=n(55289),i=n.n(a),s=(n(97378),n(72779)),r=n.n(s),o=n(6576),l=n(19051),c=n(93892),d=(n(2784),n(52322));t.Z=e=>{var{children:t,fallbackContent:n,formatter:a}=e,{logPageAction:s}=(0,o.wL)(),u=(0,l.Z)(),_=!1,p=i()({isDarkMode:u,throwOnError:!0}),g=r()("markdown-body"),x=t;try{x=p.render(t)}catch(m){_=!!n,s(c.ZC.KATEX_ERROR,{showFallbackContent:_,error:m.message.substring(0,100)})}return(0,d.jsx)(d.Fragment,{children:_?n:(e=>a?(0,d.jsx)("div",{className:g,children:a(e)}):(0,d.jsx)("div",{className:g,dangerouslySetInnerHTML:{__html:e}}))(x)})}},14418:function(e,t,n){"use strict";function a(e){return!!e&&void 0!==e.prompt}n.d(t,{Z:function(){return a}})},2034:function(e,t,n){"use strict";function a(e){return!!e&&void 0!==e.isbn}n.d(t,{Z:function(){return a}})},33524:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(61315),i=n(85296),s=n(37726),r=(n(2784),n(52322)),o=(0,a.Z)("footer")({name:"Footer",class:"f2nmi2p"});function l(){var{t:e}=(0,s.Z)();return(0,r.jsxs)(o,{children:[(0,r.jsx)(i.ZP,{linkTo:"/privacy",size:"small",text:e("footer.categories.resources.privacy"),variant:i.U_.Secondary}),(0,r.jsx)(i.ZP,{linkTo:"/tos",size:"small",text:e("footer.categories.resources.terms"),variant:i.U_.Secondary})]})}n(26947)},27370:function(e,t,n){"use strict";var a=n(47350),i=n(44591),s=(n(2784),n(12190)),r=n(52322);s.Z;t.Z=e=>{var{onClick:t,bodyText:n,headerContent:s,linkTo:o,pill:l}=e;return(0,r.jsx)(a.ZP,{hasHoverState:!0,linkTo:o,onClick:()=>{t&&t()},size:a.If.Small,children:(0,r.jsxs)("div",{className:"QuestionCard",children:[(0,r.jsx)("span",{className:"QuestionCard-subject",children:s}),(0,r.jsxs)("div",{className:"QuestionCard-prompt ".concat(l?"short":"tall"),children:[(0,r.jsx)("a",{"aria-label":n,className:"QuestionCard-link",href:o,tabIndex:-1,children:(0,r.jsx)(i.Z,{children:null!==n&&void 0!==n?n:""})}),(0,r.jsx)("div",{"aria-hidden":"true",className:"QuestionCard-bottomGradient"})]}),l&&(0,r.jsx)("div",{className:"QuestionCard-footer",children:l})]})})}},12190:function(e,t,n){"use strict";n(37278);t.Z="qaig0ml",n(61729)},64873:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(27754),i=n(72363),s=n(77786),r=n(47583),o=n(2784),l=n(52322);function c(e){var{children:t,showActivePromoBanner:n}=e;return null===(0,o.useContext)(r.Z)?(0,l.jsx)(i.Z,{showActivePromoBanner:n,children:t}):(0,l.jsxs)(l.Fragment,{children:[n?(0,l.jsx)(a.Z,{}):null,(0,l.jsx)(s.Z,{children:t})]})}},82743:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return me},default:function(){return he}});var a=n(61315),i=n(58825),s=n(89840),r=n(66057),o=n(53166),l=n(47350),c=n(62099),d=n(6576),u=n(93892),_=n(28870),p=n(52322),g=(0,a.Z)("div")({name:"CollapsedTipWrapper",class:"c15l6o85",vars:{"c15l6o85-1":[e=>e.isCollapsed?"none":"block"],"c15l6o85-2":[e=>e.isCollapsed?0:1]}}),x=(0,a.Z)("div")({name:"CardBody",class:"cksb9l8"}),m=(0,a.Z)(s.H4)({name:"HeaderLabel",class:"h1wn8ccf"}),h=(0,a.Z)("div")({name:"CollapsedText",class:"ccm0r9d",vars:{"ccm0r9d-2":[e=>e.isCollapsed?0:c.Ki.Xsmall],"ccm0r9d-3":[e=>e.isCollapsed?0:1],"ccm0r9d-4":[e=>e.isCollapsed?0:(0,_.hO)(200)]}}),T=e=>{var{collapsedTip:t,header:n,mobileImage:a,setIsCollapsed:s,text:r,tip:o}=e,c=t.name!==o.name,{logPageAction:_}=(0,d.wL)();return(0,p.jsx)(g,{isCollapsed:c,children:(0,p.jsx)(l.ZP,{hasHoverState:c,isActive:!c,onClick:()=>{s(o),_(c?u.ZC.LANDINGPAGE_COLLAPSE_TIP:u.ZC.LANDINGPAGE_OPEN_TIP,{tipName:o.name})},size:l.If.Small,tabIndex:0,children:(0,p.jsxs)(x,{children:[(0,p.jsx)(i.ZP,{upperBound:"m",children:(0,p.jsx)("img",{alt:"",src:a})}),(0,p.jsx)(m,{children:n}),(0,p.jsx)(h,{isCollapsed:c,children:r})]})})})};n(18317);var b=n(65094),C=n(64873),E=n(42767),v=n(55811),k=n(47583),S=n(71583),P=n(68620),I=n(88300),f=n(39790),O=n(37726),N=n(2784),j=(0,a.Z)("div")({name:"RecentsWrapper",class:"rngi9bc",vars:{"rngi9bc-1":[e=>e.isInNewLandingPageTest?c.Ki.Xxlarge:0]}}),L=(0,a.Z)(s.H3)({name:"Header",class:"hiftp9p"}),y=(0,a.Z)("div")({name:"TextbooksWrapper",class:"t78nxpu"}),A=(0,a.Z)("div")({name:"RecentsTextbookCardWrapper",class:"r1gzztbc"}),Z=(0,a.Z)("div")({name:"RecentsTextbookCard",class:"r1gcbp1y"}),B=(0,a.Z)("span")({name:"TextbookTitle",class:"t5amxg4"});var w=e=>{var{recentTextbooks:t,isInNewLandingPageTest:n}=e,{t:a}=(0,O.Z)();return(0,p.jsxs)(j,{isInNewLandingPageTest:n,children:[(0,p.jsx)(L,{children:a("explanations.landing_page.recent_textbooks_heading")}),(0,p.jsx)(y,{children:t.map(((e,t)=>function(e,t){var n=(0,N.useRef)(null),{clickUrlWithTracking:a,handleClickTracking:i}=(0,f.Z)(n,null,{clickUrl:e._webUrl,modelId:+e.isbn,modelType:v.BYJ.TEXTBOOK,placement:v.jf6.EXPLANATIONS_LANDING,subplacement:v.Qn1.RECENT_TEXTBOOKS,itemOrder:t,pageOrder:0});return(0,p.jsx)(A,{ref:n,children:(0,p.jsx)(l.ZP,{hasHoverState:!0,linkTo:null!==a&&void 0!==a?a:e._webUrl,onClick:i,size:l.If.Small,children:(0,p.jsxs)(Z,{children:[(0,p.jsx)(I.Z,{textbook:e}),(0,p.jsx)(B,{children:e.title})]})})},e.isbn)}(e,t)))})]})};n(40530);var R=n(15532);function K(e){var{currentTopic:t,topics:n}=e,{logPageAction:a}=(0,d.wL)(),{0:i,1:s}=(0,N.useState)(t),r=n.map((e=>({ariaLabel:e.title,id:e.title,title:e.title})));return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"TextbooksByTopic-tabs",children:(0,p.jsx)(R.Z,{autoFocus:!1,onSelect:e=>{var t=n.find((t=>t.title===e));if(t){a(u.ZC.TEXTBOOKS_BY_TOPIC_CLICK_TOPIC,{topicTitle:e,topicIsbns:t.textbooks.map((e=>e.isbn))}),s(t);var i=new URL(window.location.href);i.searchParams.set("topic",e.toLowerCase()),window.history.replaceState({},"",i.toString())}},selected:i.title,tabs:r})}),n.map((e=>(0,p.jsx)("div",{hidden:i.title!==e.title,children:(0,p.jsx)("div",{className:"TextbooksByTopic-tabPane",children:e.textbooks.map(((t,n)=>(0,p.jsx)(P.Z,{itemOrder:n,shouldIncludeThumbnail:i.title===e.title,shouldShowPremiumBrandingBadge:!1,studyFunnelPlacement:v.jf6.EXPLANATIONS_LANDING,studyFunnelSubplacement:v.Qn1.TEXTBOOKS_BY_TOPIC,textbook:t},t.id)))})},e.title)))]})}var M=n(69608),D=n(12190);l.Hq,M.Z,D.Z;n(69600);var G=n(69034);P.Q,G.x8;n(14978);n(48419);var X=(0,a.Z)(s.H3)({name:"TextbooksByTopicHeading",class:"t15yg3gr"}),U=(0,a.Z)("section")({name:"Section",class:"sfywac4"});function q(e){var{currentTopic:t,isInNewLandingPageTest:n,questions:a,textbooks:i,textbooksByTopic:r,recentTextbooks:o}=e,{t:l}=(0,O.Z)(),c=(null===r||void 0===r?void 0:r.length)>0?t&&r.find((e=>e.topic===t))||r[0]:null;return(0,p.jsxs)("div",{children:[(null===i||void 0===i?void 0:i.length)>0&&!n?(0,p.jsx)("div",{className:"TextbookGroup",children:(0,p.jsxs)(U,{children:[(0,p.jsx)(s.H3,{children:l("explanations.landing_page.textbooks_heading")}),(0,p.jsx)("div",{className:"TextbookGroup--innerContent",children:i.map(((e,t)=>(0,p.jsx)(P.Z,{itemOrder:t,shouldShowPremiumBrandingBadge:!1,studyFunnelPlacement:v.jf6.EXPLANATIONS_LANDING,studyFunnelSubplacement:v.Qn1.RECOMMENDED_TEXTBOOKS,textbook:e},e.isbn)))})]})}):null,(null===a||void 0===a?void 0:a.length)>0&&!n?(0,p.jsx)("div",{className:"QuestionGroup",children:(0,p.jsxs)(U,{children:[(0,p.jsx)(s.H3,{children:l("explanations.landing_page.questions_heading")}),(0,p.jsx)("div",{className:"QuestionGroup-innerContent",children:a.map((e=>(0,p.jsx)(S.Z,{includePremiumBadge:!1,question:e},e.id)))})]})}):null,(null===r||void 0===r?void 0:r.length)>0&&c?(0,p.jsx)("div",{className:n?"":"TextbooksByTopic",children:(0,p.jsxs)(U,{children:[(0,p.jsx)(X,{className:n?"t104cykg":"",children:l("explanations.landing_page.textbooks_by_topic_heading")}),(0,p.jsx)(K,{currentTopic:c,topics:r})]})}):null,o&&(0,p.jsx)(w,{isInNewLandingPageTest:n,recentTextbooks:o})]})}n(18421);n(70434);var Q=n.p+"static/media/LP-ClearAndOrganizedDay.d42a60bb.svg",W=n.p+"static/media/LP-ClearAndOrganizedNight.c95de267.svg",H=n.p+"static/media/LP-Mobile-ClearAndOrganizedDay.61f399c5.svg",z=n.p+"static/media/LP-Mobile-ClearAndOrganizedNight.199a3f04.svg",F=n.p+"static/media/LP-Mobile-NewTextbooksDay.e0067557.svg",V=n.p+"static/media/LP-Mobile-NewTextbooksNight.c86abd61.svg",Y=n.p+"static/media/LP-Mobile-WrittenByExpertsDay.5581e1f9.svg",J=n.p+"static/media/LP-Mobile-WrittenByExpertsNight.d587cc4b.svg",$=n.p+"static/media/LP-NewTextbooksDay.402c4e05.svg",ee=n.p+"static/media/LP-NewTextbooksNight.ad15024e.svg",te=n.p+"static/media/LP-WrittenByExpertsDay.d7870da1.svg",ne=n.p+"static/media/LP-WrittenByExpertsNight.f2fb3496.svg",ae=n(18560),ie=n(33524),se=n(66232);n(38947);var re=(0,a.Z)("div")({name:"Container",class:"c1gyf0cv"}),oe=(0,a.Z)("div")({name:"TipsContentWrapper",class:"tlw3h9z"}),le=(0,a.Z)("div")({name:"CollapsibleTipsContainer",class:"c1h67uyo"}),ce=(0,a.Z)("div")({name:"HeaderContainer",class:"h1ur734t"}),de=(0,a.Z)(s.H1)({name:"TitleText",class:"tskv37a"}),ue=(0,a.Z)(s.H2)({name:"SubtitleText",class:"s1uvmh9x"}),_e=(0,a.Z)("div")({name:"ImageContainer",class:"i1ebmrjk"}),pe=(0,a.Z)("div")({name:"SearchContainer",class:"s1io73rm"}),ge=(0,a.Z)("div")({name:"SearchBarContainer",class:"s1kkdgnu"}),xe=e=>{var t,{t:n}=(0,O.Z)(),a=(0,r.aM)(),s=(0,N.useContext)(k.Z),{textbooks:l,questions:c,textbooksByTopic:d,recentTextbooks:u,isMetered:_}=e,{topic:g}=a,x=[{name:"verified-by-experts",dayImage:te,nightImage:ne,dayImageMobile:Y,nightImageMobile:J,header:n("explanations.landing_page.collapsed_tips.written_by_experts_header"),bodyText:n("explanations.landing_page.collapsed_tips.written_by_experts_text")},{name:"new-textbooks",dayImage:$,nightImage:ee,dayImageMobile:F,nightImageMobile:V,header:n("explanations.landing_page.collapsed_tips.new_textbooks_header"),bodyText:n("explanations.landing_page.collapsed_tips.new_textbooks_subheader")},{name:"clear-and-organized",dayImage:Q,nightImage:W,dayImageMobile:H,nightImageMobile:z,header:n("explanations.landing_page.collapsed_tips.organized_header"),bodyText:n("explanations.landing_page.collapsed_tips.organized_subheader")}],{0:m,1:h}=(0,N.useState)(x[0]),C=(0,se.Z)(),v=_?(0,p.jsx)(E.Z,{id:"explanations.landing_page.heading_underline"}):(0,p.jsx)(E.Z,{id:"explanations.landing_page.heading_underline_free"}),S=_?(0,p.jsx)(E.Z,{id:"explanations.landing_page.subheading"}):(0,p.jsx)(E.Z,{id:"explanations.landing_page.subheading_free"});return Array.isArray(g)?g.length>0&&(t=g[0]):t=g,(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(b.Z,{metaDescription:n("explanations.landing_page.page_description"),metaTitle:n("explanations.landing_page.page_title")}),(0,p.jsxs)("div",{children:[(0,p.jsx)(re,{className:"ExplanationsLandingPage",children:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(ce,{children:[(0,p.jsx)(de,{children:v}),(0,p.jsx)(ue,{children:S})]}),(0,p.jsx)(pe,{children:(0,p.jsx)(ge,{className:"LargerSearchBar",id:"SearchBarTarget",children:(0,p.jsx)(ae.Z,{isInNewLandingPageTest:!0,pageNameForLogging:"explanations_landing_page_renderer",shouldAutoFocusInput:!1,shouldShowSearchButton:!1})})})]})}),(0,p.jsx)(q,{currentTopic:t,isInNewLandingPageTest:!0,questions:c,recentTextbooks:u,textbooks:l,textbooksByTopic:d}),(0,p.jsx)(re,{children:(0,p.jsxs)(oe,{children:[(0,p.jsx)(i.ZP,{lowerBound:"m",children:(0,p.jsx)("div",{className:"ExplanationsLandingPageCalloutImage",children:(0,p.jsx)(_e,{className:"ExplanationsLandingPageGifContainer",children:(0,p.jsx)(o.Z,{alt:"",height:360,priority:!0,src:C?m.nightImage:m.dayImage,width:360})})})}),(0,p.jsx)(le,{children:x.map((e=>(0,p.jsx)(T,{collapsedTip:m,header:e.header,mobileImage:C?e.nightImageMobile:e.dayImageMobile,setIsCollapsed:h,text:e.bodyText,tip:e},e.name)))})]})}),s&&(0,p.jsx)(re,{className:"ExplanationsLandingPage",children:(0,p.jsx)(ie.Z,{})})]})]})};xe.getLayout=function(e){return(0,p.jsx)(C.Z,{children:e})},xe.ownershipDomain=v.leh.Explanations,xe.actionString="Explanations/landingPage";var me=!0,he=xe;n(40666)},3695:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/explanations",function(){return n(82743)}])},18317:function(e){e.exports={c15l6o85:"c15l6o85",cksb9l8:"cksb9l8",h1wn8ccf:"h1wn8ccf",h1pyel1o:"h1pyel1o",ccm0r9d:"ccm0r9d"}},40666:function(e){e.exports={LargerSearchBar:"LargerSearchBar",AssemblyInput:"AssemblyInput",c1gyf0cv:"c1gyf0cv",tlw3h9z:"tlw3h9z",c1h67uyo:"c1h67uyo",h1ur734t:"h1ur734t",tskv37a:"tskv37a",h134kyhk:"h134kyhk",s1uvmh9x:"s1uvmh9x",hlni9so:"hlni9so",i1ebmrjk:"i1ebmrjk",s1io73rm:"s1io73rm",s1kkdgnu:"s1kkdgnu"}},73201:function(e){e.exports={AssemblyCard:"AssemblyCard",AssemblySmallCard:"AssemblySmallCard","AssemblySmallCard-hover":"AssemblySmallCard-hover","AssemblySmallCard-isActive":"AssemblySmallCard-isActive",AssemblyMediumCard:"AssemblyMediumCard","AssemblyMediumCard-hover":"AssemblyMediumCard-hover","AssemblyMediumCard-isActive":"AssemblyMediumCard-isActive"}},5604:function(e){e.exports={TextbookCard:"TextbookCard","TextbookCard-imageWrapper":"TextbookCard-imageWrapper","TextbookCard-badgeWrapper":"TextbookCard-badgeWrapper","Textbook-defaultCoverImage":"Textbook-defaultCoverImage","TextbookCard-CoverThumbnail":"TextbookCard-CoverThumbnail","TextbookCard-Title":"TextbookCard-Title","TextbookCard-Details":"TextbookCard-Details","TextbookCard-VerifiedMessaging":"TextbookCard-VerifiedMessaging"}},70434:function(e){e.exports={explanations:"explanations","prismic-page":"prismic-page",PrismicTextCallout:"PrismicTextCallout",ExplanationsLandingPage:"ExplanationsLandingPage",PrismicExplanationsSearchBarTarget:"PrismicExplanationsSearchBarTarget",SearchBarTarget:"SearchBarTarget",PrismicExplanationsSearchBar:"PrismicExplanationsSearchBar",UIHeading:"UIHeading","PrismicTextCallout-title":"PrismicTextCallout-title","TextCallout-title":"TextCallout-title","PrismicTextCallout-descriptionWrap":"PrismicTextCallout-descriptionWrap","PrismicTextCallout-image":"PrismicTextCallout-image",ExplanationsLandingPageCalloutImage:"ExplanationsLandingPageCalloutImage",ExplanationsLandingPageImageContainer:"ExplanationsLandingPageImageContainer",PrismicValuePropBanner:"PrismicValuePropBanner",Banner:"Banner","PrismicValuePropBanner-content":"PrismicValuePropBanner-content","PrismicTextCallout-content":"PrismicTextCallout-content"}},18421:function(e){e.exports={t104cykg:"t104cykg",t15yg3gr:"t15yg3gr",h9lvpq:"h9lvpq",sfywac4:"sfywac4"}},40530:function(e){e.exports={rngi9bc:"rngi9bc",hiftp9p:"hiftp9p",h9lvpq:"h9lvpq",t78nxpu:"t78nxpu",r1gzztbc:"r1gzztbc",r1gcbp1y:"r1gcbp1y",t5amxg4:"t5amxg4"}},44467:function(e){e.exports={r1kmzsnw:"r1kmzsnw",q1t95pei:"q1t95pei"}},10840:function(e){e.exports={r14bt08z:"r14bt08z",ti0ezjg:"ti0ezjg",trtljn:"trtljn","TextbookSearchListing-highlighted":"TextbookSearchListing-highlighted",e13g67rl:"e13g67rl"}},96312:function(e){e.exports={e7lqtuc:"e7lqtuc","react-autosuggest__container":"react-autosuggest__container","react-autosuggest__suggestions-container":"react-autosuggest__suggestions-container","react-autosuggest__suggestions-container--open":"react-autosuggest__suggestions-container--open","react-autosuggest__section-container":"react-autosuggest__section-container","react-autosuggest__section-title":"react-autosuggest__section-title","react-autosuggest__suggestions-list":"react-autosuggest__suggestions-list","react-autosuggest__suggestion":"react-autosuggest__suggestion","react-autosuggest__suggestion--highlighted":"react-autosuggest__suggestion--highlighted","react-autosuggest__container--open":"react-autosuggest__container--open",e1mh8mmx:"e1mh8mmx",n1rgb1ub:"n1rgb1ub",cbg4q0d:"cbg4q0d",shb39zj:"shb39zj",v12yj8uu:"v12yj8uu"}},67128:function(e){e.exports={"ExplanationsCard-upgradeBadge":"ExplanationsCard-upgradeBadge","ExplanationsCard-upgradeBadge--lock":"ExplanationsCard-upgradeBadge--lock","ExplanationsCard-upgradeBadge--plus":"ExplanationsCard-upgradeBadge--plus"}},26947:function(e){e.exports={f2nmi2p:"f2nmi2p"}},38947:function(e){e.exports={PrismicExplanationsSearchBarTarget:"PrismicExplanationsSearchBarTarget",SearchBarTarget:"SearchBarTarget",PrismicExplanationsSearchBar:"PrismicExplanationsSearchBar",SearchBar:"SearchBar",UIHeading:"UIHeading",UIContainer:"UIContainer"}},69600:function(e){e.exports={PrismicQuestionGroup:"PrismicQuestionGroup",QuestionGroup:"QuestionGroup","PrismicQuestionGroup-innerContent":"PrismicQuestionGroup-innerContent","QuestionGroup-innerContent":"QuestionGroup-innerContent"}},14978:function(e){e.exports={PrismicTextbookGroup:"PrismicTextbookGroup",TextbookGroup:"TextbookGroup","PrismicTextbookGroup--innerContent":"PrismicTextbookGroup--innerContent","TextbookGroup--innerContent":"TextbookGroup--innerContent"}},48419:function(e){e.exports={PrismicTextbooksByTopic:"PrismicTextbooksByTopic",TextbooksByTopic:"TextbooksByTopic","TextbooksByTopic-title":"TextbooksByTopic-title","TextbooksByTopic-tabs":"TextbooksByTopic-tabs","TextbooksByTopic-tabPane":"TextbooksByTopic-tabPane"}},61729:function(e){e.exports={QuestionCard:"QuestionCard","QuestionCard-subject":"QuestionCard-subject","QuestionCard-link":"QuestionCard-link","QuestionCard-prompt":"QuestionCard-prompt",tall:"tall",short:"short","QuestionCard-bottomGradient":"QuestionCard-bottomGradient","theme-night":"theme-night","QuestionCard-footer":"QuestionCard-footer"}},50704:function(e,t,n){"use strict";e.exports=n.p+"static/media/default_textbook_cover_image.995fe802.svg"},63300:function(e,t,n){"use strict";e.exports=n.p+"static/media/default_textbook_cover_image_dark.8f2944c1.svg"}},function(e){e.O(0,[6136,6074,9774,2888,179],(function(){return t=3695,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
