(function(e){function t(t){for(var s,l,r=t[0],n=t[1],d=t[2],m=0,p=[];m<r.length;m++)l=r[m],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&p.push(c[l][0]),c[l]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);o&&o(t);while(p.length)p.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,r=1;r<a.length;r++){var n=a[r];0!==c[n]&&(s=!1)}s&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var s={},c={app:0},i=[];function l(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=s,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(a,s,function(t){return e[t]}.bind(null,s));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],n=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var o=n;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("7a23");const c={id:"wrapper"},i=Object(s["createElementVNode"])("div",{class:"topbar"},[Object(s["createElementVNode"])("div",{class:"topbar-left"},[Object(s["createElementVNode"])("a",{href:"#",class:"logo"},[Object(s["createElementVNode"])("span",{class:"logo-light"},[Object(s["createElementVNode"])("i",{class:"mdi mdi-camera-control"}),Object(s["createTextVNode"])(" Maersk ")]),Object(s["createElementVNode"])("span",{class:"logo-sm"},[Object(s["createElementVNode"])("i",{class:"mdi mdi-camera-control"})])])]),Object(s["createElementVNode"])("nav",{class:"navbar-custom"},[Object(s["createElementVNode"])("ul",{class:"navbar-right list-inline float-right mb-0"},[Object(s["createElementVNode"])("li",{class:"dropdown notification-list list-inline-item d-none d-md-inline-block"},[Object(s["createElementVNode"])("a",{class:"nav-link dropdown-toggle arrow-none waves-effect","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"false","aria-expanded":"false"},[Object(s["createElementVNode"])("img",{src:"assets/images/us_flag.jpg",class:"mr-2",height:"12",alt:""}),Object(s["createTextVNode"])(" English "),Object(s["createElementVNode"])("span",{class:"mdi mdi-chevron-down"})]),Object(s["createElementVNode"])("div",{class:"dropdown-menu dropdown-menu-right dropdown-menu-animated language-switch"},[Object(s["createElementVNode"])("a",{class:"dropdown-item",href:"#"},[Object(s["createElementVNode"])("img",{src:"assets/images/french_flag.jpg",alt:"",height:"16"}),Object(s["createElementVNode"])("span",null," French ")]),Object(s["createElementVNode"])("a",{class:"dropdown-item",href:"#"},[Object(s["createElementVNode"])("img",{src:"assets/images/spain_flag.jpg",alt:"",height:"16"}),Object(s["createElementVNode"])("span",null," Spanish ")]),Object(s["createElementVNode"])("a",{class:"dropdown-item",href:"#"},[Object(s["createElementVNode"])("img",{src:"assets/images/russia_flag.jpg",alt:"",height:"16"}),Object(s["createElementVNode"])("span",null," Russian ")]),Object(s["createElementVNode"])("a",{class:"dropdown-item",href:"#"},[Object(s["createElementVNode"])("img",{src:"assets/images/germany_flag.jpg",alt:"",height:"16"}),Object(s["createElementVNode"])("span",null," German ")]),Object(s["createElementVNode"])("a",{class:"dropdown-item",href:"#"},[Object(s["createElementVNode"])("img",{src:"assets/images/italy_flag.jpg",alt:"",height:"16"}),Object(s["createElementVNode"])("span",null," Italian ")])])]),Object(s["createElementVNode"])("li",{class:"dropdown notification-list list-inline-item d-none d-md-inline-block"},[Object(s["createElementVNode"])("a",{class:"nav-link waves-effect",href:"#",id:"btn-fullscreen"},[Object(s["createElementVNode"])("i",{class:"mdi mdi-arrow-expand-all noti-icon"})])]),Object(s["createElementVNode"])("li",{class:"dropdown notification-list list-inline-item"},[Object(s["createElementVNode"])("a",{class:"nav-link dropdown-toggle arrow-none waves-effect","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"false","aria-expanded":"false"},[Object(s["createElementVNode"])("i",{class:"mdi mdi-bell-outline noti-icon"}),Object(s["createElementVNode"])("span",{class:"badge badge-pill badge-danger noti-icon-badge"},"3")]),Object(s["createElementVNode"])("div",{class:"dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-lg px-1"},[Object(s["createElementVNode"])("h6",{class:"dropdown-item-text"},"Notifications"),Object(s["createElementVNode"])("div",{class:"slimscroll notification-item-list"},[Object(s["createElementVNode"])("a",{href:"javascript:void(0);",class:"dropdown-item notify-item active"},[Object(s["createElementVNode"])("div",{class:"notify-icon bg-success"},[Object(s["createElementVNode"])("i",{class:"mdi mdi-cart-outline"})]),Object(s["createElementVNode"])("p",{class:"notify-details"},[Object(s["createElementVNode"])("b",null,"Your order is placed"),Object(s["createElementVNode"])("span",{class:"text-muted"},"Dummy text of the printing and typesetting industry.")])]),Object(s["createElementVNode"])("a",{href:"javascript:void(0);",class:"dropdown-item notify-item"},[Object(s["createElementVNode"])("div",{class:"notify-icon bg-danger"},[Object(s["createElementVNode"])("i",{class:"mdi mdi-message-text-outline"})]),Object(s["createElementVNode"])("p",{class:"notify-details"},[Object(s["createElementVNode"])("b",null,"New Message received"),Object(s["createElementVNode"])("span",{class:"text-muted"},"You have 87 unread messages")])]),Object(s["createElementVNode"])("a",{href:"javascript:void(0);",class:"dropdown-item notify-item"},[Object(s["createElementVNode"])("div",{class:"notify-icon bg-info"},[Object(s["createElementVNode"])("i",{class:"mdi mdi-filter-outline"})]),Object(s["createElementVNode"])("p",{class:"notify-details"},[Object(s["createElementVNode"])("b",null,"Your item is shipped"),Object(s["createElementVNode"])("span",{class:"text-muted"},"It is a long established fact that a reader will")])]),Object(s["createElementVNode"])("a",{href:"javascript:void(0);",class:"dropdown-item notify-item"},[Object(s["createElementVNode"])("div",{class:"notify-icon bg-success"},[Object(s["createElementVNode"])("i",{class:"mdi mdi-message-text-outline"})]),Object(s["createElementVNode"])("p",{class:"notify-details"},[Object(s["createElementVNode"])("b",null,"New Message received"),Object(s["createElementVNode"])("span",{class:"text-muted"},"You have 87 unread messages")])]),Object(s["createElementVNode"])("a",{href:"javascript:void(0);",class:"dropdown-item notify-item"},[Object(s["createElementVNode"])("div",{class:"notify-icon bg-warning"},[Object(s["createElementVNode"])("i",{class:"mdi mdi-cart-outline"})]),Object(s["createElementVNode"])("p",{class:"notify-details"},[Object(s["createElementVNode"])("b",null,"Your order is placed"),Object(s["createElementVNode"])("span",{class:"text-muted"},"Dummy text of the printing and typesetting industry.")])])]),Object(s["createElementVNode"])("a",{href:"javascript:void(0);",class:"dropdown-item text-center notify-all text-primary"},[Object(s["createTextVNode"])(" View all "),Object(s["createElementVNode"])("i",{class:"fi-arrow-right"})])])]),Object(s["createElementVNode"])("li",{class:"dropdown notification-list list-inline-item"},[Object(s["createElementVNode"])("div",{class:"dropdown notification-list nav-pro-img"},[Object(s["createElementVNode"])("a",{class:"dropdown-toggle nav-link arrow-none nav-user","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"false","aria-expanded":"false"},[Object(s["createElementVNode"])("img",{src:"assets/images/user-4.jpg",alt:"user",class:"rounded-circle"})]),Object(s["createElementVNode"])("div",{class:"dropdown-menu dropdown-menu-right profile-dropdown"},[Object(s["createElementVNode"])("a",{class:"dropdown-item",href:"#"},[Object(s["createElementVNode"])("i",{class:"mdi mdi-account-circle"}),Object(s["createTextVNode"])(" Profile")]),Object(s["createElementVNode"])("a",{class:"dropdown-item",href:"#"},[Object(s["createElementVNode"])("i",{class:"mdi mdi-wallet"}),Object(s["createTextVNode"])(" Wallet")]),Object(s["createElementVNode"])("a",{class:"dropdown-item d-block",href:"#"},[Object(s["createElementVNode"])("span",{class:"badge badge-success float-right"},"11"),Object(s["createElementVNode"])("i",{class:"mdi mdi-settings"}),Object(s["createTextVNode"])(" Settings")]),Object(s["createElementVNode"])("a",{class:"dropdown-item",href:"#"},[Object(s["createElementVNode"])("i",{class:"mdi mdi-lock-open-outline"}),Object(s["createTextVNode"])(" Lock screen")]),Object(s["createElementVNode"])("div",{class:"dropdown-divider"}),Object(s["createElementVNode"])("a",{class:"dropdown-item text-danger",href:"#"},[Object(s["createElementVNode"])("i",{class:"mdi mdi-power text-danger"}),Object(s["createTextVNode"])(" Logout")])])])])]),Object(s["createElementVNode"])("ul",{class:"list-inline menu-left mb-0"},[Object(s["createElementVNode"])("li",{class:"float-left"},[Object(s["createElementVNode"])("button",{class:"button-menu-mobile open-left waves-effect"},[Object(s["createElementVNode"])("i",{class:"mdi mdi-menu"})])]),Object(s["createElementVNode"])("li",{class:"d-none d-md-inline-block"},[Object(s["createElementVNode"])("form",{role:"search",class:"app-search"},[Object(s["createElementVNode"])("div",{class:"form-group mb-0"},[Object(s["createElementVNode"])("input",{type:"text",class:"form-control",placeholder:"Search.."}),Object(s["createElementVNode"])("button",{type:"submit"},[Object(s["createElementVNode"])("i",{class:"fa fa-search"})])])])])])])],-1),l=Object(s["createStaticVNode"])('<div class="left side-menu"><div class="slimscroll-menu" id="remove-scroll"><div id="sidebar-menu"><ul class="metismenu" id="side-menu"><li class="menu-title">Zero Emission Pathway</li><li><a href="javascript:void(0);" class="waves-effect"><img src="https://e7.pngegg.com/pngimages/722/746/png-clipart-crane-architectural-engineering-computer-icons-infographic-port-terminal-infographic-angle-thumbnail.png" height="10"><span> Terminal <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a><ul class="submenu"><li><a href="#">GTI <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></a><ul class="submenu"><li><a href="javascript:void(0);" class="waves-effect"><span class="waves-effect"> QC <span class="float-right menu-arrow"></span></span></a></li><li><a href="javascript:void(0);" class="waves-effect"><span class="waves-effect"> RMGC <span class="float-right menu-arrow"></span></span></a></li><li><a href="javascript:void(0);" class="waves-effect"><span class="waves-effect"> RTG <span class="float-right menu-arrow"></span></span></a></li><li><a href="javascript:void(0);" class="waves-effect"><span class="waves-effect"> TT <span class="float-right menu-arrow"></span></span></a></li></ul></li><li><a href="#">P400 <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></a><ul class="submenu"><li><a href="javascript:void(0);" class="waves-effect"><span class="waves-effect"> QC <span class="float-right menu-arrow"></span></span></a></li><li><a href="javascript:void(0);" class="waves-effect"><span class="waves-effect"> SC <span class="float-right menu-arrow"></span></span></a></li></ul></li><li><a href="#">SLL <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></a><ul class="submenu"><li><a href="javascript:void(0);" class="waves-effect"><span class="waves-effect"> QC <span class="float-right menu-arrow"></span></span></a></li><li><a href="javascript:void(0);" class="waves-effect"><span class="waves-effect"> RTG <span class="float-right menu-arrow"></span></span></a></li><li><a href="javascript:void(0);" class="waves-effect"><span class="waves-effect"> TT <span class="float-right menu-arrow"></span></span></a></li></ul></li></ul></li><li><a href="javascript:void(0);" class="waves-effect"><i class="icon-paper-sheet"></i><span> WareHouses <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a><ul class="submenu"><li><a href="#">Pune ICD <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></a><ul class="submenu"><li><a href="javascript:void(0);" class="waves-effect"><span class="waves-effect"> RST <span class="float-right menu-arrow"></span></span></a></li><li><a href="javascript:void(0);" class="waves-effect"><span class="waves-effect"> RT <span class="float-right menu-arrow"></span></span></a></li><li><a href="javascript:void(0);" class="waves-effect"><span class="waves-effect"> SCANNER <span class="float-right menu-arrow"></span></span></a></li></ul></li><li><a href="#">ROSS <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></a><ul class="submenu"><li><a href="javascript:void(0);" class="waves-effect"><span class="waves-effect"> Forklifts <span class="float-right menu-arrow"></span></span></a></li><li><a href="javascript:void(0);" class="waves-effect"><span class="waves-effect"> Conveyor belts <span class="float-right menu-arrow"></span></span></a></li><li><a href="javascript:void(0);" class="waves-effect"><span class="waves-effect"> Scanners <span class="float-right menu-arrow"></span></span></a></li></ul></li></ul></li><li><a href="javascript:void(0);" class="waves-effect"><i class="icon-paper-sheet"></i><span> Assets <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span></a><ul class="submenu"><li><a href="#">QC</a></li><li><a href="#">RTG</a></li><li><a href="#">TT</a></li><li><a href="#">ARMG</a></li><li><a href="#">SC</a></li><li><a href="#">SQC</a></li><li><a href="#">EH</a></li><li><a href="#">RS</a></li><li><a href="#">SV</a></li><li><a href="#">AGV</a></li><li><a href="#">RGC</a></li><li><a href="#">TL</a></li><li><a href="#">RMGC</a></li><li><a href="#">FL</a></li><li><a href="#">HOPPER</a></li><li><a href="#">MHC</a></li><li><a href="#">MHP</a></li><li><a href="#">GENERIC</a></li></ul></li></ul></div><div class="clearfix"></div></div></div>',1);function r(e,t,a,r,n,d){const o=Object(s["resolveComponent"])("Dashboard");return Object(s["openBlock"])(),Object(s["createElementBlock"])("div",c,[i,l,Object(s["createVNode"])(o,{msg:n.selected},null,8,["msg"])])}const n={class:"content-page"},d={class:"content"},o={class:"container-fluid"},m={class:"page-title-box"},p={class:"row align-items-center"},b={class:"col-sm-6"},f={class:"page-title"},u=Object(s["createElementVNode"])("div",{class:"row"},[Object(s["createElementVNode"])("div",{class:"col-sm-6 col-xl-3"},[Object(s["createElementVNode"])("div",{class:"card"},[Object(s["createElementVNode"])("div",{class:"card-heading p-4"},[Object(s["createElementVNode"])("div",{class:"mini-stat-icon float-right"},[Object(s["createElementVNode"])("i",{class:"mdi mdi-cube-outline bg-primary text-white"})]),Object(s["createElementVNode"])("div",null,[Object(s["createElementVNode"])("h5",{class:"font-16"},"Average Yearly Consumption")]),Object(s["createElementVNode"])("h3",{class:"mt-4"},"43,225"),Object(s["createElementVNode"])("div",{class:"progress mt-4",style:{height:"4px"}},[Object(s["createElementVNode"])("div",{class:"progress-bar bg-primary",role:"progressbar",style:{width:"75%"},"aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"})]),Object(s["createElementVNode"])("p",{class:"text-muted mt-2 mb-0"},[Object(s["createTextVNode"])(" Total Cost of Energy"),Object(s["createElementVNode"])("span",{class:"float-right"},"75%")])])])]),Object(s["createElementVNode"])("div",{class:"col-sm-6 col-xl-3"},[Object(s["createElementVNode"])("div",{class:"card"},[Object(s["createElementVNode"])("div",{class:"card-heading p-4"},[Object(s["createElementVNode"])("div",{class:"mini-stat-icon float-right"},[Object(s["createElementVNode"])("i",{class:"mdi mdi-briefcase-check bg-success text-white"})]),Object(s["createElementVNode"])("div",null,[Object(s["createElementVNode"])("h5",{class:"font-16"},"Score")]),Object(s["createElementVNode"])("h3",{class:"mt-4"},"$73,265"),Object(s["createElementVNode"])("div",{class:"progress mt-4",style:{height:"4px"}},[Object(s["createElementVNode"])("div",{class:"progress-bar bg-success",role:"progressbar",style:{width:"88%"},"aria-valuenow":"88","aria-valuemin":"0","aria-valuemax":"100"})]),Object(s["createElementVNode"])("p",{class:"text-muted mt-2 mb-0"},[Object(s["createTextVNode"])(" Previous period"),Object(s["createElementVNode"])("span",{class:"float-right"},"88%")])])])]),Object(s["createElementVNode"])("div",{class:"col-sm-6 col-xl-3"},[Object(s["createElementVNode"])("div",{class:"card"},[Object(s["createElementVNode"])("div",{class:"card-heading p-4"},[Object(s["createElementVNode"])("div",{class:"mini-stat-icon float-right"},[Object(s["createElementVNode"])("i",{class:"mdi mdi-tag-text-outline bg-warning text-white"})]),Object(s["createElementVNode"])("div",null,[Object(s["createElementVNode"])("h5",{class:"font-16"},[Object(s["createTextVNode"])(" Average Yearly C0"),Object(s["createElementVNode"])("sup",null,"2"),Object(s["createTextVNode"])(" Emission ")])]),Object(s["createElementVNode"])("h3",{class:"mt-4"},"447"),Object(s["createElementVNode"])("div",{class:"progress mt-4",style:{height:"4px"}},[Object(s["createElementVNode"])("div",{class:"progress-bar bg-warning",role:"progressbar",style:{width:"68%"},"aria-valuenow":"68","aria-valuemin":"0","aria-valuemax":"100"})]),Object(s["createElementVNode"])("p",{class:"text-muted mt-2 mb-0"},[Object(s["createTextVNode"])(" Previous period"),Object(s["createElementVNode"])("span",{class:"float-right"},"68%")])])])]),Object(s["createElementVNode"])("div",{class:"col-sm-6 col-xl-3"},[Object(s["createElementVNode"])("div",{class:"card"},[Object(s["createElementVNode"])("div",{class:"card-heading p-4"},[Object(s["createElementVNode"])("div",{class:"mini-stat-icon float-right"},[Object(s["createElementVNode"])("i",{class:"mdi mdi-buffer bg-danger text-white"})]),Object(s["createElementVNode"])("div",null,[Object(s["createElementVNode"])("h5",{class:"font-16"},"Zero Emission Initiatives")]),Object(s["createElementVNode"])("h3",{class:"mt-4"},"86%"),Object(s["createElementVNode"])("div",{class:"progress mt-4",style:{height:"4px"}},[Object(s["createElementVNode"])("div",{class:"progress-bar bg-danger",role:"progressbar",style:{width:"10%"},"aria-valuenow":"82","aria-valuemin":"0","aria-valuemax":"100"})]),Object(s["createElementVNode"])("p",{class:"text-muted mt-2 mb-0"},[Object(s["createTextVNode"])(" Previous period"),Object(s["createElementVNode"])("span",{class:"float-right"},"10%")])])])])],-1),v={class:"row"},h={class:"col-xl-8"},g={class:"card m-b-30"},j={class:"card-body"},O=Object(s["createElementVNode"])("h4",{class:"mt-0 header-title mb-4"},"Energy Consumption",-1),N={class:"col-xl-4"},V={class:"card m-b-30"},E={class:"card-body"},w=Object(s["createElementVNode"])("h4",{class:"mt-0 header-title mb-4"},"Energy Trend",-1),y=Object(s["createStaticVNode"])('<div class="row"><div class="col-xl-4"><div class="card m-b-30"><div class="card-body"><h4 class="mt-0 header-title mb-4">FIM Suggestions</h4><div class="friends-suggestions"><a href="#" class="friends-suggestions-list"><div class="border-bottom position-relative"><div class="float-left mb-0 mr-3"><img src="assets/images/user-2.jpg" alt="" class="rounded-circle thumb-md"></div><div class="suggestion-icon float-right mt-2 pt-1"><i class="mdi mdi-plus"></i></div><div class="desc"><h5 class="font-14 mb-1 pt-2">Ralph Ramirez</h5><p class="text-muted">3 Friend suggest</p></div></div></a><a href="#" class="friends-suggestions-list"><div class="border-bottom position-relative"><div class="float-left mb-0 mr-3"><img src="assets/images/user-3.jpg" alt="" class="rounded-circle thumb-md"></div><div class="suggestion-icon float-right mt-2 pt-1"><i class="mdi mdi-plus"></i></div><div class="desc"><h5 class="font-14 mb-1 pt-2">Patrick Beeler</h5><p class="text-muted">17 Friend suggest</p></div></div></a><a href="#" class="friends-suggestions-list"><div class="border-bottom position-relative"><div class="float-left mb-0 mr-3"><img src="assets/images/user-4.jpg" alt="" class="rounded-circle thumb-md"></div><div class="suggestion-icon float-right mt-2 pt-1"><i class="mdi mdi-plus"></i></div><div class="desc"><h5 class="font-14 mb-1 pt-2">Victor Zamora</h5><p class="text-muted">12 Friend suggest</p></div></div></a><a href="#" class="friends-suggestions-list"><div class="border-bottom position-relative"><div class="float-left mb-0 mr-3"><img src="assets/images/user-5.jpg" alt="" class="rounded-circle thumb-md"></div><div class="suggestion-icon float-right mt-2 pt-1"><i class="mdi mdi-plus"></i></div><div class="desc"><h5 class="font-14 mb-1 pt-2">Bryan Lacy</h5><p class="text-muted">18 Friend suggest</p></div></div></a><a href="#" class="friends-suggestions-list"><div class="position-relative"><div class="float-left mb-0 mr-3"><img src="assets/images/user-6.jpg" alt="" class="rounded-circle thumb-md"></div><div class="suggestion-icon float-right mt-2 pt-1"><i class="mdi mdi-plus"></i></div><div class="desc"><h5 class="font-14 mb-1 pt-2">James Sorrells</h5><p class="text-muted mb-1">6 Friend suggest</p></div></div></a></div></div></div></div><div class="col-xl-4"><div class="card m-b-30"><div class="card-body"><h4 class="mt-0 header-title mb-4">FIM Description</h4></div></div></div><div class="col-xl-4"><div class="card m-b-30"><div class="card-body"><h4 class="mt-0 header-title mb-4">Recent Activity</h4><ol class="activity-feed mb-0"><li class="feed-item"><div class="feed-item-list"><p class="text-muted mb-1">Now</p><p class="font-15 mt-0 mb-0"> Jassa magna Jassa, risus posted a new article: <b class="text-primary">Forget UX Rowland</b></p></div></li><li class="feed-item"><p class="text-muted mb-1">Yesterday</p><p class="font-15 mt-0 mb-0"> Jassa posted a new article: <b class="text-primary">Designer Alex</b></p></li><li class="feed-item"><p class="text-muted mb-1">2:30PM</p><p class="font-15 mt-0 mb-0"> Jassa, Jassa, Jassa Commented <b class="text-primary"> Developer Moreno</b></p></li><li class="feed-item pb-1"><p class="text-muted mb-1">12:48 PM</p><p class="font-15 mt-0 mb-2"> Jassa, Jassa Commented <b class="text-primary">UX Murphy</b></p></li></ol></div></div></div></div><div class="row"><div class="col-xl-12"><div class="card m-b-30"><div class="card-body"><h4 class="mt-0 header-title mb-4">Asset Details</h4><div class="table-responsive"><table class="table table-hover"><thead><tr><th scope="col">Name</th><th scope="col">Energy Type</th><th scope="col">Count</th></tr></thead><tbody><tr><td>Jassa</td><td><span class="badge badge-success">Delivered</span></td><td>$9,420,000</td><td><div><img src="assets/images/user-2.jpg" alt="" class="thumb-md rounded-circle mr-2"> Jassa </div></td><td>Ludhiana</td><td>15/1/2021</td><td><div><a href="#" class="btn btn-primary btn-sm">Edit</a></div></td></tr><tr><td>Jassa</td><td><span class="badge badge-warning">Pending</span></td><td>$3,120,000</td><td><div><img src="assets/images/user-3.jpg" alt="" class="thumb-md rounded-circle mr-2"> Jassa </div></td><td>Ludhiana</td><td>16/1/2021</td><td><div><a href="#" class="btn btn-primary btn-sm">Edit</a></div></td></tr><tr><td>Jassa</td><td><span class="badge badge-success">Delivered</span></td><td>$6,360,000</td><td><div><img src="assets/images/user-4.jpg" alt="" class="thumb-md rounded-circle mr-2"> Jassa </div></td><td>Ludhiana</td><td>17/1/2021</td><td><div><a href="#" class="btn btn-primary btn-sm">Edit</a></div></td></tr><tr><td>Jassa</td><td><span class="badge badge-danger">Cancel</span></td><td>$5,200,000</td><td><div><img src="assets/images/user-5.jpg" alt="" class="thumb-md rounded-circle mr-2"> Jassa </div></td><td>Ludhiana</td><td>18/1/2021</td><td><div><a href="#" class="btn btn-primary btn-sm">Edit</a></div></td></tr><tr><td>Jassa</td><td><span class="badge badge-success">Delivered</span></td><td>$7,250,000</td><td><div><img src="assets/images/user-6.jpg" alt="" class="thumb-md rounded-circle mr-2"> Jassa </div></td><td>Ludhiana</td><td>19/1/2021</td><td><div><a href="#" class="btn btn-primary btn-sm">Edit</a></div></td></tr></tbody></table></div></div></div></div></div>',2),x=Object(s["createElementVNode"])("h1",null,"test",-1),T=Object(s["createElementVNode"])("footer",{class:"footer"},[Object(s["createTextVNode"])(" ©2022 Maersk Hackathon "),Object(s["createElementVNode"])("span",{class:"d-none d-sm-inline-block"},[Object(s["createTextVNode"])(" - Love "),Object(s["createElementVNode"])("i",{class:"mdi mdi-heart text-danger"}),Object(s["createTextVNode"])(" by Therichpost.com")]),Object(s["createTextVNode"])(". ")],-1);function k(e,t,a,c,i,l){const r=Object(s["resolveComponent"])("apexcharts");return Object(s["openBlock"])(),Object(s["createElementBlock"])("div",n,[Object(s["createElementVNode"])("div",d,[Object(s["createElementVNode"])("div",o,[Object(s["createElementVNode"])("div",m,[Object(s["createElementVNode"])("div",p,[Object(s["createElementVNode"])("div",b,[Object(s["createElementVNode"])("h4",f,Object(s["toDisplayString"])(a.msg),1)])])]),u,Object(s["createElementVNode"])("div",v,[Object(s["createElementVNode"])("div",h,[Object(s["createElementVNode"])("div",g,[Object(s["createElementVNode"])("div",j,[O,Object(s["createVNode"])(r,{type:"bar",height:"350",options:e.chartOptionsstacked,series:e.seriesstacked},null,8,["options","series"])])])]),Object(s["createElementVNode"])("div",N,[Object(s["createElementVNode"])("div",V,[Object(s["createElementVNode"])("div",E,[w,Object(s["createVNode"])(r,{type:"donut",height:"350",options:e.chartOptionsdonut,series:e.seriesdonut},null,8,["options","series"])])])])]),y,Object(s["createVNode"])(r,{width:"500",height:"350",type:"bar",options:e.chartOptions,series:e.series},null,8,["options","series"]),Object(s["createVNode"])(r,{width:"380",type:"line",options:e.chartOptions2,series:e.series},null,8,["options","series"]),Object(s["createVNode"])(r,{width:"380",type:"area",options:e.chartOptions2,series:e.series},null,8,["options","series"]),Object(s["createVNode"])(r,{width:"380",type:"heatmap",options:e.chartOptions2,series:e.series},null,8,["options","series"]),Object(s["createVNode"])(r,{type:"rangeArea",height:"350",options:e.chartOptionsrange,series:e.series},null,8,["options","series"]),x])]),T])}var S=a("ae27"),C=a.n(S),J={name:"Dashboard",props:{msg:String},components:{apexcharts:C.a},data:function(){return{chartOptions:{chart:{id:"basic-bar"},xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998]},yaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998]}},chartOptions2:{chart:{id:"basic-bar3"},xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998]}},series:[{name:"series-1",data:[30,40,45,50,49,60,70,91]},{name:"series-2",data:[30,40,45,50,49,10,70,91]}],options:{},seriesdonut:[44,55,41,17,15],chartOptionsdonut:{chart:{type:"donut"},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]},seriesrange:[{name:"New York Temperature",data:[{x:"Jan",y:[-2,4]},{x:"Feb",y:[-1,6]},{x:"Mar",y:[3,10]},{x:"Apr",y:[8,16]},{x:"May",y:[13,22]},{x:"Jun",y:[18,26]},{x:"Jul",y:[21,29]},{x:"Aug",y:[21,28]},{x:"Sep",y:[17,24]},{x:"Oct",y:[11,18]},{x:"Nov",y:[6,12]},{x:"Dec",y:[1,7]}]}],chartOptionsrange:{chart:{height:350,type:"rangeArea"},stroke:{curve:"straight"},title:{text:"New York Temperature (all year round)"},markers:{hover:{sizeOffset:5}},dataLabels:{enabled:!1},yaxis:{labels:{formatter:e=>e+"°C"}}},seriesstacked:[{name:"Marine Sprite",data:[44,55,41,37,22,43,21]},{name:"Striking Calf",data:[53,32,33,52,13,43,32]},{name:"Tank Picture",data:[12,17,11,9,15,11,20]},{name:"Bucket Slope",data:[9,7,5,8,6,9,4]},{name:"Reborn Kid",data:[25,12,19,32,25,24,10]}],chartOptionsstacked:{chart:{type:"bar",height:350,stacked:!0},plotOptions:{bar:{horizontal:!0,dataLabels:{total:{enabled:!0,offsetX:0,style:{fontSize:"13px",fontWeight:900}}}}}}}}},M=a("6b0d"),P=a.n(M);const R=P()(J,[["render",k]]);var A=R,D={components:{Dashboard:A},data(){return{selected:""}},methods:{selectedItem(e){console.log(e.target.innerText,"name"),this.selected=e.target.innerText,console.log(this.selected,"data")}}};a("794c");const L=P()(D,[["render",r]]);var F=L;Object(s["createApp"])(F).use(C.a),Object(s["createApp"])(F).mount("#app")}});
//# sourceMappingURL=app.a7cbc97b.js.map