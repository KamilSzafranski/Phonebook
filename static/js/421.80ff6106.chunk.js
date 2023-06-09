"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[421],{1421:function(e,r,a){a.r(r);var l=a(4087),i=a(5946),s=a(2701),t=a(4585),n=a(6069),o=a(4224),c=a(8082),d=a(4389),m=a(7689),u=a(9434),f=a(9417),h=a(5280),p=a(2791),g=a(184);r.default=function(){var e=(0,u.I0)(),r=(0,u.v9)(h.Q8),a=(0,m.s0)(),x=(0,u.v9)(h.fE);(0,p.useEffect)((function(){r&&a("/contacts")}),[r,a]);return(0,g.jsxs)(l.xu,{bg:"gray.700",h:"100vh",display:"grid",justifyItems:"center",gap:"30px",color:"white",children:[(0,g.jsx)(i.X,{as:"h2",color:"white",alignSelf:"end",children:"Registration"}),(0,g.jsxs)("form",{onSubmit:function(r){r.preventDefault();var a=r.currentTarget.elements,l=a.name,i=a.email,s=a.password,t={name:l.value,email:i.value,password:s.value};e((0,f.yY)(t))},children:[(0,g.jsxs)(s.NI,{w:"350px",mb:"15px",children:[(0,g.jsx)(t.l,{htmlFor:"name",children:"Name"}),(0,g.jsx)(n.I,{id:"name",name:"name",type:"name",focusBorderColor:"teal.400"})]}),(0,g.jsxs)(s.NI,{w:"350px",mb:"15px",children:[(0,g.jsx)(t.l,{htmlFor:"email",children:"Email address"}),(0,g.jsx)(n.I,{type:"email",id:"email",name:"email",focusBorderColor:"teal.400"})]}),(0,g.jsxs)(s.NI,{w:"350px",mb:"20px",children:[(0,g.jsx)(t.l,{htmlFor:"password",children:"Password"}),(0,g.jsx)(n.I,{type:"password",id:"password",name:"password",focusBorderColor:"teal.400",minLength:"7"})]}),(0,g.jsx)(s.NI,{display:"flex",justifyContent:"center",children:(0,g.jsx)(o.z,{type:"submit",colorScheme:"teal",isLoading:x,loadingText:"In progress",children:"Register"})})]}),(0,g.jsx)(c.E,{src:d,position:"absolute",left:"0",bottom:"0",borderRadius:"5px",sx:{clipPath:"polygon(0% 0%, 65.7% 0.5%, 99.9% 58.5%, 100% 100%, 76.2% 100%, 0% 100%, 0% 85%, 0% 15%)"}})]})}},4389:function(e,r,a){e.exports=a.p+"static/media/phonebook.477f281099151409dd43.jpg"},4585:function(e,r,a){a.d(r,{l:function(){return f}});var l=a(1413),i=a(5987),s=a(2701),t=a(7872),n=a(9084),o=a(2996),c=a(2952),d=a(6992),m=a(184),u=["className","children","requiredIndicator","optionalIndicator"],f=(0,t.G)((function(e,r){var a,t=(0,n.mq)("FormLabel",e),f=(0,o.Lr)(e),p=(f.className,f.children),g=f.requiredIndicator,x=void 0===g?(0,m.jsx)(h,{}):g,v=f.optionalIndicator,b=void 0===v?null:v,j=(0,i.Z)(f,u),y=(0,s.NJ)(),k=null!=(a=null==y?void 0:y.getLabelProps(j,r))?a:(0,l.Z)({ref:r},j);return(0,m.jsxs)(c.m.label,(0,l.Z)((0,l.Z)({},k),{},{className:(0,d.cx)("chakra-form__label",f.className),__css:(0,l.Z)({display:"block",textAlign:"start"},t),children:[p,(null==y?void 0:y.isRequired)?x:b]}))}));f.displayName="FormLabel";var h=(0,t.G)((function(e,r){var a=(0,s.NJ)(),i=(0,s.e)();if(!(null==a?void 0:a.isRequired))return null;var t=(0,d.cx)("chakra-form__required-indicator",e.className);return(0,m.jsx)(c.m.span,(0,l.Z)((0,l.Z)({},null==a?void 0:a.getRequiredIndicatorProps(e,r)),{},{__css:i.requiredIndicator,className:t}))}));h.displayName="RequiredIndicator"},8082:function(e,r,a){a.d(r,{E:function(){return f}});var l=a(1413),i=a(5987),s=a(7762),t=a(7872),n=a(184),o=["htmlWidth","htmlHeight","alt"],c=(0,t.G)((function(e,r){var a=e.htmlWidth,s=e.htmlHeight,t=e.alt,c=(0,i.Z)(e,o);return(0,n.jsx)("img",(0,l.Z)({width:a,height:s,ref:r,alt:t},c))}));c.displayName="NativeImage";var d=a(5064),m=a(2952),u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"];var f=(0,t.G)((function(e,r){var a=e.fallbackSrc,t=e.fallback,o=e.src,f=e.srcSet,h=e.align,p=e.fit,g=e.loading,x=e.ignoreFallback,v=e.crossOrigin,b=e.fallbackStrategy,j=void 0===b?"beforeLoadOrError":b,y=e.referrerPolicy,k=(0,i.Z)(e,u),N=null!=g||x||!(void 0!==a||void 0!==t),I=(0,d.d)((0,l.Z)((0,l.Z)({},e),{},{ignoreFallback:N})),w=(0,d.z)(I,j),Z=(0,l.Z)({ref:r,objectFit:p,objectPosition:h},N?k:function(e){var r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],l=Object.assign({},e),i=(0,s.Z)(a);try{for(i.s();!(r=i.n()).done;){var t=r.value;t in l&&delete l[t]}}catch(n){i.e(n)}finally{i.f()}return l}(k,["onError","onLoad"]));return w?t||(0,n.jsx)(m.m.img,(0,l.Z)({as:c,className:"chakra-image__placeholder",src:a},Z)):(0,n.jsx)(m.m.img,(0,l.Z)({as:c,src:o,srcSet:f,crossOrigin:v,loading:g,referrerPolicy:y,className:"chakra-image"},Z))}));f.displayName="Image"}}]);
//# sourceMappingURL=421.80ff6106.chunk.js.map