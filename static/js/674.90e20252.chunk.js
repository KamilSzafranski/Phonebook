"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[674],{2674:function(e,n,t){t.r(n),t.d(n,{default:function(){return me}});var a=t(5987),r=t(1413),i=t(9439),o=(0,t(9886).k)({name:"CheckboxGroupContext",strict:!1}),l=(0,i.Z)(o,2),s=(l[0],l[1]),c=t(2952),d=t(184),u=["isIndeterminate","isChecked"];function f(e){return(0,d.jsx)(c.m.svg,(0,r.Z)((0,r.Z)({width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16}},e),{},{children:(0,d.jsx)("polyline",{points:"1.5 6 4.5 9 10.5 1"})}))}function v(e){return(0,d.jsx)(c.m.svg,(0,r.Z)((0,r.Z)({width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4}},e),{},{children:(0,d.jsx)("line",{x1:"21",x2:"3",y1:"12",y2:"12"})}))}function m(e){var n=e.isIndeterminate,t=e.isChecked,i=(0,a.Z)(e,u),o=n?v:f;return t||n?(0,d.jsx)(c.m.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:(0,d.jsx)(o,(0,r.Z)({},i))}):null}var h=t(7762),p=t(2657),b=t(9205),g=t(786),k=t(6367),y=t(4591),x=t(6992),Z={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},w=!1,C=null,j=!1,I=!1,P=new Set;function S(e,n){P.forEach((function(t){return t(e,n)}))}var L="undefined"!==typeof window&&null!=window.navigator&&/^Mac/.test(window.navigator.platform);function _(e){var n;j=!0,(n=e).metaKey||!L&&n.altKey||n.ctrlKey||"Control"===n.key||"Shift"===n.key||"Meta"===n.key||(C="keyboard",S("keyboard",e))}function E(e){if(C="pointer","mousedown"===e.type||"pointerdown"===e.type){j=!0;var n=e.composedPath?e.composedPath()[0]:e.target,t=!1;try{t=n.matches(":focus-visible")}catch(a){}if(t)return;S("pointer",e)}}function N(e){var n;(0===(n=e).mozInputSource&&n.isTrusted||0===n.detail&&!n.pointerType)&&(j=!0,C="virtual")}function B(e){e.target!==window&&e.target!==document&&(j||I||(C="virtual",S("virtual",e)),j=!1,I=!1)}function D(){j=!1,I=!0}function F(){return"pointer"!==C}function q(){if("undefined"!==typeof window&&!w){var e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){j=!0;for(var n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];e.apply(this,t)},document.addEventListener("keydown",_,!0),document.addEventListener("keyup",_,!0),document.addEventListener("click",N,!0),window.addEventListener("focus",B,!0),window.addEventListener("blur",D,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",E,!0),document.addEventListener("pointermove",E,!0),document.addEventListener("pointerup",E,!0)):(document.addEventListener("mousedown",E,!0),document.addEventListener("mousemove",E,!0),document.addEventListener("mouseup",E,!0)),w=!0}}function M(e){q(),e(F());var n=function(){return e(F())};return P.add(n),function(){P.delete(n)}}var R=t(2791),O=["defaultChecked","isChecked","isFocusable","onChange","isIndeterminate","name","value","tabIndex","aria-label","aria-labelledby","aria-invalid"];function G(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=Object.assign({},e),r=(0,h.Z)(t);try{for(r.s();!(n=r.n()).done;){var i=n.value;i in a&&delete a[i]}}catch(o){r.e(o)}finally{r.f()}return a}function K(e){e.preventDefault(),e.stopPropagation()}var T=t(2554),z=t(7872),A=t(9084),W=t(2996),H=["spacing","className","children","iconColor","iconSize","icon","isChecked","isDisabled","onChange","inputProps"],U={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},X={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},J=(0,T.F4)({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),Q=(0,T.F4)({from:{opacity:0},to:{opacity:1}}),V=(0,T.F4)({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),Y=(0,z.G)((function(e,n){var t=s(),o=(0,r.Z)((0,r.Z)({},t),e),l=(0,A.jC)("Checkbox",o),u=(0,W.Lr)(e),f=u.spacing,v=void 0===f?"0.5rem":f,h=u.className,w=u.children,C=u.iconColor,j=u.iconSize,I=u.icon,P=void 0===I?(0,d.jsx)(m,{}):I,S=u.isChecked,L=u.isDisabled,_=void 0===L?null==t?void 0:t.isDisabled:L,E=u.onChange,N=u.inputProps,B=(0,a.Z)(u,H),D=S;(null==t?void 0:t.value)&&u.value&&(D=t.value.includes(u.value));var F=E;(null==t?void 0:t.onChange)&&u.value&&(F=(0,x.PP)(t.onChange,E));var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,p.K)(e),t=n.isDisabled,o=n.isReadOnly,l=n.isRequired,s=n.isInvalid,c=n.id,d=n.onBlur,u=n.onFocus,f=n["aria-describedby"],v=e.defaultChecked,m=e.isChecked,h=e.isFocusable,w=e.onChange,C=e.isIndeterminate,j=e.name,I=e.value,P=e.tabIndex,S=void 0===P?void 0:P,L=e["aria-label"],_=e["aria-labelledby"],E=e["aria-invalid"],N=G((0,a.Z)(e,O),["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),B=(0,k.W)(w),D=(0,k.W)(d),F=(0,k.W)(u),q=(0,R.useState)(!1),T=(0,i.Z)(q,2),z=T[0],A=T[1],W=(0,R.useState)(!1),H=(0,i.Z)(W,2),U=H[0],X=H[1],J=(0,R.useState)(!1),Q=(0,i.Z)(J,2),V=Q[0],Y=Q[1],$=(0,R.useState)(!1),ee=(0,i.Z)($,2),ne=ee[0],te=ee[1];(0,R.useEffect)((function(){return M(A)}),[]);var ae=(0,R.useRef)(null),re=(0,R.useState)(!0),ie=(0,i.Z)(re,2),oe=ie[0],le=ie[1],se=(0,R.useState)(!!v),ce=(0,i.Z)(se,2),de=ce[0],ue=ce[1],fe=void 0!==m,ve=fe?m:de,me=(0,R.useCallback)((function(e){o||t?e.preventDefault():(fe||ue(ve?e.target.checked:!!C||e.target.checked),null==B||B(e))}),[o,t,ve,fe,C,B]);(0,b.G)((function(){ae.current&&(ae.current.indeterminate=Boolean(C))}),[C]),(0,g.r)((function(){t&&X(!1)}),[t,X]),(0,b.G)((function(){var e=ae.current;(null==e?void 0:e.form)&&(e.form.onreset=function(){ue(!!v)})}),[]);var he=t&&!h,pe=(0,R.useCallback)((function(e){" "===e.key&&te(!0)}),[te]),be=(0,R.useCallback)((function(e){" "===e.key&&te(!1)}),[te]);(0,b.G)((function(){ae.current&&ae.current.checked!==ve&&ue(ae.current.checked)}),[ae.current]);var ge=(0,R.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=function(e){U&&e.preventDefault(),te(!0)};return(0,r.Z)((0,r.Z)({},e),{},{ref:n,"data-active":(0,x.PB)(ne),"data-hover":(0,x.PB)(V),"data-checked":(0,x.PB)(ve),"data-focus":(0,x.PB)(U),"data-focus-visible":(0,x.PB)(U&&z),"data-indeterminate":(0,x.PB)(C),"data-disabled":(0,x.PB)(t),"data-invalid":(0,x.PB)(s),"data-readonly":(0,x.PB)(o),"aria-hidden":!0,onMouseDown:(0,x.v0)(e.onMouseDown,a),onMouseUp:(0,x.v0)(e.onMouseUp,(function(){return te(!1)})),onMouseEnter:(0,x.v0)(e.onMouseEnter,(function(){return Y(!0)})),onMouseLeave:(0,x.v0)(e.onMouseLeave,(function(){return Y(!1)}))})}),[ne,ve,t,U,z,V,C,s,o]),ke=(0,R.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)((0,r.Z)({},N),e),{},{ref:(0,y.lq)(n,(function(e){e&&le("LABEL"===e.tagName)})),onClick:(0,x.v0)(e.onClick,(function(){var e;oe||(null==(e=ae.current)||e.click(),requestAnimationFrame((function(){var e;null==(e=ae.current)||e.focus()})))})),"data-disabled":(0,x.PB)(t),"data-checked":(0,x.PB)(ve),"data-invalid":(0,x.PB)(s)})}),[N,t,ve,s,oe]),ye=(0,R.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:(0,y.lq)(ae,n),type:"checkbox",name:j,value:I,id:c,tabIndex:S,onChange:(0,x.v0)(e.onChange,me),onBlur:(0,x.v0)(e.onBlur,D,(function(){return X(!1)})),onFocus:(0,x.v0)(e.onFocus,F,(function(){return X(!0)})),onKeyDown:(0,x.v0)(e.onKeyDown,pe),onKeyUp:(0,x.v0)(e.onKeyUp,be),required:l,checked:ve,disabled:he,readOnly:o,"aria-label":L,"aria-labelledby":_,"aria-invalid":E?Boolean(E):s,"aria-describedby":f,"aria-disabled":t,style:Z})}),[j,I,c,me,D,F,pe,be,l,ve,he,o,L,_,E,s,f,t,S]),xe=(0,R.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,onMouseDown:(0,x.v0)(e.onMouseDown,K),onTouchStart:(0,x.v0)(e.onTouchStart,K),"data-disabled":(0,x.PB)(t),"data-checked":(0,x.PB)(ve),"data-invalid":(0,x.PB)(s)})}),[ve,t,s]);return{state:{isInvalid:s,isFocused:U,isChecked:ve,isActive:ne,isHovered:V,isIndeterminate:C,isDisabled:t,isReadOnly:o,isRequired:l},getRootProps:ke,getCheckboxProps:ge,getInputProps:ye,getLabelProps:xe,htmlProps:N}}((0,r.Z)((0,r.Z)({},B),{},{isDisabled:_,isChecked:D,onChange:F})),T=q.state,z=q.getInputProps,Y=q.getCheckboxProps,$=q.getLabelProps,ee=q.getRootProps,ne=(0,R.useMemo)((function(){return(0,r.Z)({animation:T.isIndeterminate?"".concat(Q," 20ms linear, ").concat(V," 200ms linear"):"".concat(J," 200ms linear"),fontSize:j,color:C},l.icon)}),[C,j,,T.isIndeterminate,l.icon]),te=(0,R.cloneElement)(P,{__css:ne,isIndeterminate:T.isIndeterminate,isChecked:T.isChecked});return(0,d.jsxs)(c.m.label,(0,r.Z)((0,r.Z)({__css:(0,r.Z)((0,r.Z)({},X),l.container),className:(0,x.cx)("chakra-checkbox",h)},ee()),{},{children:[(0,d.jsx)("input",(0,r.Z)({className:"chakra-checkbox__input"},z(N,n))),(0,d.jsx)(c.m.span,(0,r.Z)((0,r.Z)({__css:(0,r.Z)((0,r.Z)({},U),l.control),className:"chakra-checkbox__control"},Y()),{},{children:te})),w&&(0,d.jsx)(c.m.span,(0,r.Z)((0,r.Z)({className:"chakra-checkbox__label"},$()),{},{__css:(0,r.Z)({marginStart:v},l.label),children:w}))]}))}));Y.displayName="Checkbox";var $=t(4087),ee=t(5946),ne=t(2701),te=t(4585),ae=t(6069),re=t(9229),ie=t(4224),oe=t(8082),le=t(4389),se=t(1087),ce=t(7689),de=t(9434),ue=t(9417),fe=t(5280),ve=t(5670),me=function(){var e=(0,de.I0)(),n=(0,de.v9)(fe.fE),t=(0,ce.s0)(),a=(0,de.v9)(fe.Q8);(0,R.useEffect)((function(){a&&t("/contacts")}),[a,t]);return(0,d.jsxs)($.xu,{bg:"gray.700",h:"100vh",display:"grid",justifyItems:"center",gap:"30px",color:"white",children:[(0,d.jsx)(ee.X,{as:"h2",color:"white",alignSelf:"end",children:"Login"}),(0,d.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.currentTarget,a=t.email,r=t.password,i=t.remember,o={email:a.value,password:r.value};i.checked&&ve.D.persist(),i.checked||(ve.D.pause(),ve.D.purge()),e((0,ue.Fv)(o))},children:[(0,d.jsxs)(ne.NI,{w:"350px",mb:"15px",children:[(0,d.jsx)(te.l,{htmlFor:"email",children:"Email address"}),(0,d.jsx)(ae.I,{type:"email",id:"email",name:"email",focusBorderColor:"teal.400",required:!0})]}),(0,d.jsxs)(ne.NI,{w:"350px",mb:"20px",children:[(0,d.jsx)(te.l,{htmlFor:"password",children:"Password"}),(0,d.jsx)(ae.I,{type:"password",id:"password",name:"password",focusBorderColor:"teal.400",minLength:"7",required:!0})]}),(0,d.jsxs)(ne.NI,{mb:"25px",display:"flex",justifyContent:"space-between",alignItems:"flex-end",children:[(0,d.jsx)(Y,{colorScheme:"teal",name:"remember",children:"Rememver me"}),(0,d.jsx)(se.OL,{to:"/register",children:(0,d.jsx)(re.x,{fontSize:"xs",_hover:{color:"teal.400"},children:"I dont`t have alredy account :("})})]}),(0,d.jsx)(ne.NI,{display:"flex",justifyContent:"center",children:(0,d.jsx)(ie.z,{type:"submit",colorScheme:"teal",isLoading:n,loadingText:"Submitting",children:"Submit"})})]}),(0,d.jsx)(oe.E,{src:le,position:"absolute",left:"0",bottom:"0",borderRadius:"5px",sx:{clipPath:"polygon(0% 0%, 65.7% 0.5%, 99.9% 58.5%, 100% 100%, 76.2% 100%, 0% 100%, 0% 85%, 0% 15%)"}})]})}},4389:function(e,n,t){e.exports=t.p+"static/media/phonebook.477f281099151409dd43.jpg"},4585:function(e,n,t){t.d(n,{l:function(){return v}});var a=t(1413),r=t(5987),i=t(2701),o=t(7872),l=t(9084),s=t(2996),c=t(2952),d=t(6992),u=t(184),f=["className","children","requiredIndicator","optionalIndicator"],v=(0,o.G)((function(e,n){var t,o=(0,l.mq)("FormLabel",e),v=(0,s.Lr)(e),h=(v.className,v.children),p=v.requiredIndicator,b=void 0===p?(0,u.jsx)(m,{}):p,g=v.optionalIndicator,k=void 0===g?null:g,y=(0,r.Z)(v,f),x=(0,i.NJ)(),Z=null!=(t=null==x?void 0:x.getLabelProps(y,n))?t:(0,a.Z)({ref:n},y);return(0,u.jsxs)(c.m.label,(0,a.Z)((0,a.Z)({},Z),{},{className:(0,d.cx)("chakra-form__label",v.className),__css:(0,a.Z)({display:"block",textAlign:"start"},o),children:[h,(null==x?void 0:x.isRequired)?b:k]}))}));v.displayName="FormLabel";var m=(0,o.G)((function(e,n){var t=(0,i.NJ)(),r=(0,i.e)();if(!(null==t?void 0:t.isRequired))return null;var o=(0,d.cx)("chakra-form__required-indicator",e.className);return(0,u.jsx)(c.m.span,(0,a.Z)((0,a.Z)({},null==t?void 0:t.getRequiredIndicatorProps(e,n)),{},{__css:r.requiredIndicator,className:o}))}));m.displayName="RequiredIndicator"},8082:function(e,n,t){t.d(n,{E:function(){return v}});var a=t(1413),r=t(5987),i=t(7762),o=t(7872),l=t(184),s=["htmlWidth","htmlHeight","alt"],c=(0,o.G)((function(e,n){var t=e.htmlWidth,i=e.htmlHeight,o=e.alt,c=(0,r.Z)(e,s);return(0,l.jsx)("img",(0,a.Z)({width:t,height:i,ref:n,alt:o},c))}));c.displayName="NativeImage";var d=t(5064),u=t(2952),f=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"];var v=(0,o.G)((function(e,n){var t=e.fallbackSrc,o=e.fallback,s=e.src,v=e.srcSet,m=e.align,h=e.fit,p=e.loading,b=e.ignoreFallback,g=e.crossOrigin,k=e.fallbackStrategy,y=void 0===k?"beforeLoadOrError":k,x=e.referrerPolicy,Z=(0,r.Z)(e,f),w=null!=p||b||!(void 0!==t||void 0!==o),C=(0,d.d)((0,a.Z)((0,a.Z)({},e),{},{ignoreFallback:w})),j=(0,d.z)(C,y),I=(0,a.Z)({ref:n,objectFit:h,objectPosition:m},w?Z:function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=Object.assign({},e),r=(0,i.Z)(t);try{for(r.s();!(n=r.n()).done;){var o=n.value;o in a&&delete a[o]}}catch(l){r.e(l)}finally{r.f()}return a}(Z,["onError","onLoad"]));return j?o||(0,l.jsx)(u.m.img,(0,a.Z)({as:c,className:"chakra-image__placeholder",src:t},I)):(0,l.jsx)(u.m.img,(0,a.Z)({as:c,src:s,srcSet:v,crossOrigin:g,loading:p,referrerPolicy:x,className:"chakra-image"},I))}));v.displayName="Image"}}]);
//# sourceMappingURL=674.90e20252.chunk.js.map