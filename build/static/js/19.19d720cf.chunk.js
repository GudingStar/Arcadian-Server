(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[19],{1326:function(t,r,e){"use strict";e.r(r),e.d(r,"TorusConnector",(function(){return n}));var n=function(t){var r,n;function o(r){var e,n=r.chainId,o=r.initOptions,i=void 0===o?{}:o,s=r.constructorOptions,u=void 0===s?{}:s,c=r.loginOptions,a=void 0===c?{}:c;return(e=t.call(this,{supportedChainIds:[n]})||this).chainId=n,e.initOptions=i,e.constructorOptions=u,e.loginOptions=a,e}n=t,(r=o).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var i=o.prototype;return i.activate=function(){try{var t=function(){return Promise.resolve(r.torus.login(r.loginOptions).then((function(t){return t[0]}))).then((function(t){return{provider:r.torus.provider,account:t}}))},r=this,n=function(){if(!r.torus)return Promise.resolve(Promise.all([e.e(0),e.e(1),e.e(10),e.e(14)]).then(e.bind(null,1119)).then((function(t){var r;return null!=(r=null==t?void 0:t.default)?r:t}))).then((function(t){return r.torus=new t(r.constructorOptions),Promise.resolve(r.torus.init(r.initOptions)).then((function(){}))}))}();return Promise.resolve(n&&n.then?n.then(t):t())}catch(o){return Promise.reject(o)}},i.getProvider=function(){try{return Promise.resolve(this.torus.provider)}catch(t){return Promise.reject(t)}},i.getChainId=function(){try{return Promise.resolve(this.chainId)}catch(t){return Promise.reject(t)}},i.getAccount=function(){try{return Promise.resolve(this.torus.ethereum.send("eth_accounts").then((function(t){return t[0]})))}catch(t){return Promise.reject(t)}},i.deactivate=function(){return Promise.resolve()},i.close=function(){try{var t=this;return Promise.resolve(t.torus.cleanUp()).then((function(){t.emitDeactivate()}))}catch(r){return Promise.reject(r)}},o}(e(152).a)}}]);
//# sourceMappingURL=19.19d720cf.chunk.js.map