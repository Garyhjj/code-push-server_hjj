webpackJsonp([23],{1041:function(n,l,e){"use strict";e(0),e(15),e(85),e(75),e(33),e(52);e.d(l,"a",function(){return o});var t=(this&&this.__decorate,this&&this.__metadata,this&&this.__awaiter||function(n,l,e,t){return new(e||(e=Promise))(function(u,o){function i(n){try{r(t.next(n))}catch(n){o(n)}}function a(n){try{r(t.throw(n))}catch(n){o(n)}}function r(n){n.done?u(n.value):new e(function(l){l(n.value)}).then(i,a)}r((t=t.apply(n,l||[])).next())})}),u=this&&this.__generator||function(n,l){function e(n){return function(l){return t([n,l])}}function t(e){if(u)throw new TypeError("Generator is already executing.");for(;a;)try{if(u=1,o&&(i=o[2&e[0]?"return":e[0]?"throw":"next"])&&!(i=i.call(o,e[1])).done)return i;switch(o=0,i&&(e=[0,i.value]),e[0]){case 0:case 1:i=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,o=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!i||e[1]>i[0]&&e[1]<i[3])){a.label=e[1];break}if(6===e[0]&&a.label<i[1]){a.label=i[1],i=e;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(e);break}i[2]&&a.ops.pop(),a.trys.pop();continue}e=l.call(n,a)}catch(n){e=[6,n],o=0}finally{u=i=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}var u,o,i,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return{next:e(0),throw:e(1),return:e(2)}},o=function(){function n(n,l,e,t,u,o,i,a){this.navCtrl=n,this.navParams=l,this.actionSheetCtrl=e,this.jmessage=t,this.plugin=u,this.loadingCtrl=o,this.barcodeScanner=i,this.camera=a}return n.prototype.ionViewDidLoad=function(){this.user=this.navParams.data.user},n.prototype.touchstart=function(){this.isMoving=!1},n.prototype.touchmove=function(){this.isMoving=!0},n.prototype.showLoading=function(){this.loading=this.loadingCtrl.create({content:"Please wait..."}),this.loading.present()},n.prototype.getNewPhoto=function(n,l){return t(this,void 0,void 0,function(){var e;return u(this,function(t){switch(t.label){case 0:return e=this.user,[4,this.plugin.getNewPhoto(n,l).catch(function(n){console.log(n)})];case 1:return e.avatarurl=t.sent(),this.user.avatarurl?(this.showLoading(),[4,this.jmessage.updateMyAvatar(this.user.avatarUrl)]):[2];case 2:return t.sent(),this.loading.dismiss(),[2]}})})},n.prototype.changePhoto=function(){var n=this;this.actionSheetCtrl.create({title:"更换头像",buttons:[{text:"拍照",handler:function(){n.getNewPhoto(1,800)}},{text:"从相册选择",handler:function(){n.getNewPhoto(0,800)}},{text:"取消",role:"取消",handler:function(){console.log("Cancel clicked")}}]}).present()},n.prototype.showQr=function(){var n=JSON.parse(localStorage.getItem("currentUser"));this.plugin.setBarcode(n.username)},n}()},1187:function(n,l,e){"use strict";e(0),e(1041),e(15);e.d(l,"a",function(){return t});var t=(this&&this.__decorate,function(){function n(){}return n}())},1188:function(n,l,e){"use strict";function t(n){return i["ɵvid"](0,[(n()(),i["ɵeld"](0,null,null,90,"ion-content",[],[[2,"statusbar-padding",null]],null,null,a.a,a.b)),i["ɵdid"](4374528,null,0,r.a,[d.c,c.b,s.a,i.ElementRef,i.Renderer,h.a,_.a,i.NgZone,[2,f.a],[2,m.a]],null,null),(n()(),i["ɵted"](1,["\n  "])),(n()(),i["ɵeld"](0,null,1,86,"ion-list",[["class","my-detail myList"]],null,[[null,"touchstart"],[null,"touchmove"]],function(n,l,e){var t=!0,u=n.component;if("touchstart"===l){t=u.touchstart()!==!1&&t}if("touchmove"===l){t=u.touchmove()!==!1&&t}return t},null,null)),i["ɵdid"](16384,null,0,p.a,[d.c,i.ElementRef,i.Renderer,c.b,b.a,s.a],null,null),(n()(),i["ɵted"](null,["\n    "])),(n()(),i["ɵeld"](0,null,null,12,"button",[["class","item item-block"],["ion-item",""]],null,null,null,g.a,g.b)),i["ɵdid"](1097728,null,3,v.a,[y.a,d.c,i.ElementRef,i.Renderer,[2,R.a]],null,null),i["ɵqud"](335544320,1,{contentLabel:0}),i["ɵqud"](603979776,2,{_buttons:1}),i["ɵqud"](603979776,3,{_icons:1}),i["ɵdid"](16384,null,0,w.a,[],null,null),(n()(),i["ɵted"](2,["\n          头像\n          "])),(n()(),i["ɵeld"](0,null,4,4,"ion-note",[["class","person"],["item-right",""]],null,[[null,"touchend"]],function(n,l,e){var t=!0,u=n.component;if("touchend"===l){t=(u.isMoving?"":u.changePhoto())!==!1&&t}return t},null,null)),i["ɵdid"](16384,null,0,M.a,[d.c,i.ElementRef,i.Renderer],null,null),(n()(),i["ɵted"](null,["\n           "])),(n()(),i["ɵeld"](0,null,null,0,"img",[["class","avatar"]],[[8,"src",4]],null,null,null,null)),(n()(),i["ɵted"](null,["\n          "])),(n()(),i["ɵted"](2,["\n      "])),(n()(),i["ɵted"](null,["\n    "])),(n()(),i["ɵeld"](0,null,null,10,"button",[["class","item item-block"],["ion-item",""]],null,null,null,g.a,g.b)),i["ɵdid"](1097728,null,3,v.a,[y.a,d.c,i.ElementRef,i.Renderer,[2,R.a]],null,null),i["ɵqud"](335544320,4,{contentLabel:0}),i["ɵqud"](603979776,5,{_buttons:1}),i["ɵqud"](603979776,6,{_icons:1}),i["ɵdid"](16384,null,0,w.a,[],null,null),(n()(),i["ɵted"](2,["\n          姓名\n          "])),(n()(),i["ɵeld"](0,null,4,2,"ion-note",[["item-right",""]],null,null,null,null,null)),i["ɵdid"](16384,null,0,M.a,[d.c,i.ElementRef,i.Renderer],null,null),(n()(),i["ɵted"](null,["\n          ","\n          "])),(n()(),i["ɵted"](2,["\n      "])),(n()(),i["ɵted"](null,["\n    "])),(n()(),i["ɵeld"](0,null,null,13,"button",[["class","item item-block"],["ion-item",""]],null,[[null,"touchend"]],function(n,l,e){var t=!0,u=n.component;if("touchend"===l){t=(u.isMoving?"":u.showQr())!==!1&&t}return t},g.a,g.b)),i["ɵdid"](1097728,null,3,v.a,[y.a,d.c,i.ElementRef,i.Renderer,[2,R.a]],null,null),i["ɵqud"](335544320,7,{contentLabel:0}),i["ɵqud"](603979776,8,{_buttons:1}),i["ɵqud"](603979776,9,{_icons:1}),i["ɵdid"](16384,null,0,w.a,[],null,null),(n()(),i["ɵted"](2,["\n         我的二维码\n          "])),(n()(),i["ɵeld"](0,null,4,5,"ion-note",[["item-right",""]],null,null,null,null,null)),i["ɵdid"](16384,null,0,M.a,[d.c,i.ElementRef,i.Renderer],null,null),(n()(),i["ɵted"](null,["\n          "])),(n()(),i["ɵeld"](0,null,null,1,"i",[["class","iconfontyyy"]],null,null,null,null,null)),(n()(),i["ɵted"](null,[""])),(n()(),i["ɵted"](null,["\n          "])),(n()(),i["ɵted"](2,["\n      "])),(n()(),i["ɵted"](null,["\n    "])),(n()(),i["ɵeld"](0,null,null,5,"ion-item-divider",[["class","item item-divider"],["color","light"]],null,null,null,g.a,g.b)),i["ɵdid"](1097728,null,3,v.a,[y.a,d.c,i.ElementRef,i.Renderer,[2,R.a]],{color:[0,"color"]},null),i["ɵqud"](335544320,10,{contentLabel:0}),i["ɵqud"](603979776,11,{_buttons:1}),i["ɵqud"](603979776,12,{_icons:1}),i["ɵdid"](16384,null,0,E.a,[d.c,i.ElementRef,i.Renderer],{color:[0,"color"]},null),(n()(),i["ɵted"](null,["\n    "])),(n()(),i["ɵeld"](0,null,null,10,"button",[["class","item item-block"],["ion-item",""]],null,null,null,g.a,g.b)),i["ɵdid"](1097728,null,3,v.a,[y.a,d.c,i.ElementRef,i.Renderer,[2,R.a]],null,null),i["ɵqud"](335544320,13,{contentLabel:0}),i["ɵqud"](603979776,14,{_buttons:1}),i["ɵqud"](603979776,15,{_icons:1}),i["ɵdid"](16384,null,0,w.a,[],null,null),(n()(),i["ɵted"](2,["\n        手机\n        "])),(n()(),i["ɵeld"](0,null,4,2,"ion-note",[["item-right",""]],null,null,null,null,null)),i["ɵdid"](16384,null,0,M.a,[d.c,i.ElementRef,i.Renderer],null,null),(n()(),i["ɵted"](null,["\n        ","\n        "])),(n()(),i["ɵted"](2,["\n    "])),(n()(),i["ɵted"](null,["\n    "])),(n()(),i["ɵeld"](0,null,null,10,"button",[["class","item item-block"],["ion-item",""]],null,null,null,g.a,g.b)),i["ɵdid"](1097728,null,3,v.a,[y.a,d.c,i.ElementRef,i.Renderer,[2,R.a]],null,null),i["ɵqud"](335544320,16,{contentLabel:0}),i["ɵqud"](603979776,17,{_buttons:1}),i["ɵqud"](603979776,18,{_icons:1}),i["ɵdid"](16384,null,0,w.a,[],null,null),(n()(),i["ɵted"](2,["\n        电话\n        "])),(n()(),i["ɵeld"](0,null,4,2,"ion-note",[["item-right",""]],null,null,null,null,null)),i["ɵdid"](16384,null,0,M.a,[d.c,i.ElementRef,i.Renderer],null,null),(n()(),i["ɵted"](null,["\n        ","\n        "])),(n()(),i["ɵted"](2,["\n    "])),(n()(),i["ɵted"](null,["\n    "])),(n()(),i["ɵeld"](0,null,null,10,"button",[["class","item item-block"],["ion-item",""]],null,null,null,g.a,g.b)),i["ɵdid"](1097728,null,3,v.a,[y.a,d.c,i.ElementRef,i.Renderer,[2,R.a]],null,null),i["ɵqud"](335544320,19,{contentLabel:0}),i["ɵqud"](603979776,20,{_buttons:1}),i["ɵqud"](603979776,21,{_icons:1}),i["ɵdid"](16384,null,0,w.a,[],null,null),(n()(),i["ɵted"](2,["\n        邮箱\n        "])),(n()(),i["ɵeld"](0,null,4,2,"ion-note",[["item-right",""]],null,null,null,null,null)),i["ɵdid"](16384,null,0,M.a,[d.c,i.ElementRef,i.Renderer],null,null),(n()(),i["ɵted"](null,["\n        ","\n        "])),(n()(),i["ɵted"](2,["\n    "])),(n()(),i["ɵted"](null,["\n  "])),(n()(),i["ɵted"](1,["\n"]))],function(n,l){n(l,48,0,"light");n(l,52,0,"light")},function(n,l){var e=l.component;n(l,0,0,i["ɵnov"](l,1).statusbarPadding),n(l,16,0,e.user.avatarUrl),n(l,29,0,e.user.nickname),n(l,63,0,e.user.telephone),n(l,75,0,e.user.mobile),n(l,87,0,e.user.email)})}function u(n){return i["ɵvid"](0,[(n()(),i["ɵeld"](0,null,null,10,"ion-header",[["color","mac"]],null,null,null,null,null)),i["ɵdid"](16384,null,0,L.a,[d.c,i.ElementRef,i.Renderer,[2,f.a]],{color:[0,"color"]},null),(n()(),i["ɵted"](null,["\n  "])),(n()(),i["ɵeld"](0,null,null,6,"ion-navbar",[["class","toolbar"],["color","mac"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,q.a,q.b)),i["ɵdid"](49152,null,0,P.a,[h.a,[2,f.a],[2,m.a],d.c,i.ElementRef,i.Renderer],{color:[0,"color"]},null),(n()(),i["ɵted"](3,["\n    "])),(n()(),i["ɵeld"](0,null,3,2,"ion-title",[],null,null,null,N.a,N.b)),i["ɵdid"](49152,null,0,k.a,[d.c,i.ElementRef,i.Renderer,[2,C.a],[2,P.a]],null,null),(n()(),i["ɵted"](0,["我的资料"])),(n()(),i["ɵted"](3,["\n  "])),(n()(),i["ɵted"](null,["\n"])),(n()(),i["ɵted"](null,["\n"])),(n()(),i["ɵand"](16777216,null,null,1,null,t)),i["ɵdid"](16384,null,0,O.k,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["ɵted"](null,["\n"]))],function(n,l){var e=l.component;n(l,1,0,"mac");n(l,4,0,"mac"),n(l,13,0,e.user)},function(n,l){n(l,3,0,i["ɵnov"](l,4)._hidden,i["ɵnov"](l,4)._sbPadding)})}function o(n){return i["ɵvid"](0,[(n()(),i["ɵeld"](0,null,null,1,"sg-detail",[],null,null,null,u,T)),i["ɵdid"](49152,null,0,I.a,[m.a,F.a,D.a,j.a,x.a,A.a,B.a,z.a],null,null)],null,null)}var i=e(0),a=e(40),r=e(20),d=e(3),c=e(4),s=e(9),h=e(8),_=e(18),f=e(6),m=e(16),p=e(46),b=e(10),g=e(66),v=e(22),y=e(21),R=e(45),w=e(53),M=e(101),E=e(212),L=e(38),q=e(44),P=e(25),N=e(47),k=e(39),C=e(29),O=e(11),I=e(1041),F=e(17),D=e(154),j=e(33),x=e(52),A=e(104),B=e(85),z=e(75);e.d(l,"a",function(){return U});var S=[],T=i["ɵcrt"]({encapsulation:2,styles:S,data:{}}),U=i["ɵccf"]("sg-detail",I.a,o,{},{},[])},819:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e(0),u=e(1187),o=e(11),i=e(19),a=e(210),r=e(447),d=e(448),c=e(449),s=e(450),h=e(451),_=e(452),f=e(453),m=e(454),p=e(455),b=e(1188),g=e(1041),v=e(72);e.d(l,"MeDetailComponentModuleNgFactory",function(){return w});var y=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var e in l)l.hasOwnProperty(e)&&(n[e]=l[e])};return function(l,e){function t(){this.constructor=l}n(l,e),l.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}}(),R=function(n){function l(l){return n.call(this,l,[r.a,d.a,c.a,s.a,h.a,_.a,f.a,m.a,p.a,b.a],[])||this}return y(l,n),Object.defineProperty(l.prototype,"_NgLocalization_7",{get:function(){return null==this.__NgLocalization_7&&(this.__NgLocalization_7=new o.a(this.parent.get(t.LOCALE_ID))),this.__NgLocalization_7},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵi_8",{get:function(){return null==this.__ɵi_8&&(this.__ɵi_8=new i.a),this.__ɵi_8},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_FormBuilder_9",{get:function(){return null==this.__FormBuilder_9&&(this.__FormBuilder_9=new i.b),this.__FormBuilder_9},enumerable:!0,configurable:!0}),l.prototype.createInternal=function(){return this._CommonModule_0=new o.d,this._ɵba_1=new i.c,this._FormsModule_2=new i.d,this._ReactiveFormsModule_3=new i.e,this._IonicModule_4=new a.b,this._IonicPageModule_5=new a.c,this._MeDetailComponentModule_6=new u.a,this._LAZY_LOADED_TOKEN_10=g.a,this._MeDetailComponentModule_6},l.prototype.getInternal=function(n,l){return n===o.d?this._CommonModule_0:n===i.c?this._ɵba_1:n===i.d?this._FormsModule_2:n===i.e?this._ReactiveFormsModule_3:n===a.b?this._IonicModule_4:n===a.c?this._IonicPageModule_5:n===u.a?this._MeDetailComponentModule_6:n===o.e?this._NgLocalization_7:n===i.a?this._ɵi_8:n===i.b?this._FormBuilder_9:n===v.d?this._LAZY_LOADED_TOKEN_10:l},l.prototype.destroyInternal=function(){},l}(t["ɵNgModuleInjector"]),w=new t.NgModuleFactory(R,u.a)}});
//# sourceMappingURL=D:\gary\github\MiApp\www\build\23.main.js.map