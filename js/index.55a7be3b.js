(function(t){function e(e){for(var i,r,l=e[0],o=e[1],c=e[2],h=0,f=[];h<l.length;h++)r=l[h],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,l=1;l<s.length;l++){var o=s[l];0!==a[o]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},a={index:0},n=[];function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/deadlines/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0277":function(t,e,s){"use strict";s("b1cd")},"034f":function(t,e,s){"use strict";s("85ec")},1:function(t,e){},4678:function(t,e,s){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=n(t);return s(e)}function n(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id="4678"},"4eed":function(t,e,s){"use strict";s("dc13")},"56d7":function(t,e,s){"use strict";s.r(e);s("b0c0"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Home")],1)},n=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("Header"),s("el-checkbox",{staticStyle:{"padding-top":"10px",width:"33%"},attrs:{indeterminate:t.isIndeterminate},on:{change:t.handleCheckAllChange},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}},[s("span",{staticStyle:{color:"#666666"}},[t._v("All")])]),s("el-checkbox-group",{on:{change:t.handleCheckedChange},model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},t._l(t.subList,(function(e){return s("el-checkbox",{key:e.sub,staticClass:"boxes",attrs:{size:"medium",label:e.sub}},[s("span",{staticStyle:{color:"#666666"}},[t._v(t._s(t.formatSubName(e)))])])})),1),s("el-row",{staticClass:"timezone"},[s("div",{staticStyle:{float:"left"}},[t._v(" Deadlines are shown in "+t._s(t.timeZone)+" time. ")]),s("div",{staticStyle:{float:"left",width:"155px"}},[s("el-input",{attrs:{"prefix-icon":"el-icon-search",size:"mini",placeholder:"search conference"},on:{change:t.handleInputChange},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),s("div",{staticStyle:{float:"right"}},[s("el-checkbox-group",{staticClass:"rankbox",attrs:{size:"mini"},on:{change:t.handleRankChange},model:{value:t.rankList,callback:function(e){t.rankList=e},expression:"rankList"}},t._l(t.rankoptions,(function(e,i){return s("el-checkbox-button",{key:i,attrs:{label:i}},[t._v(t._s(e))])})),1)],1)]),s("el-row",{staticClass:"zonedivider"}),s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.showList,"show-header":!1}},[s("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{class:{"conf-fin":"FIN"===e.row.status}},[s("el-row",{staticClass:"conf-title"},[s("a",{attrs:{href:t.generateDBLP(e.row.dblp)}},[t._v(t._s(e.row.title))]),t._v(" "+t._s(e.row.year)+" "),!0===e.row.isLike?s("i",{staticClass:"el-icon-star-on",staticStyle:{color:"#FBCA04"},on:{click:function(s){return t.handleClickIcon(e.row,!0)}}}):s("i",{staticClass:"el-icon-star-off",on:{click:function(s){return t.handleClickIcon(e.row,!1)}}})]),s("el-row",[t._v(t._s(e.row.date+" "+e.row.place))]),s("el-row",{staticClass:"conf-des"},[t._v(t._s(e.row.description))]),s("el-row",[s("el-tag",{attrs:{size:"mini",type:"",effect:"plain"}},[t._v(t._s(e.row.displayrank))]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.row.comment,expression:"scope.row.comment"}],staticStyle:{color:"#409eff"}},[s("b",[t._v("NOTE:")]),t._v(" "+t._s(e.row.comment))])],1),s("el-row",t._l(e.row.subname,(function(e){return s("el-tag",{key:e,attrs:{size:"mini",type:"",effect:"plain"}},[t._v(t._s(e)+" ")])})),1)],1)]}}])}),s("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{class:{"conf-fin":"FIN"===e.row.status}},[s("el-row",{staticClass:"conf-timer"},["TBD"===e.row.status?s("div",{staticStyle:{color:"black"}},[t._v("TBD")]):s("countdown",{staticStyle:{color:"black"},attrs:{time:e.row.remain,transform:t.transform},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.days)+" "+t._s(e.hours)+" "+t._s(e.minutes)+" "+t._s(e.seconds))]}}],null,!0)}),s("el-popover",{attrs:{placement:"right",trigger:"click"}},[s("el-row",[s("img",{staticStyle:{width:"20px",height:"20px","vertical-align":"middle"},attrs:{src:"//ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_3_2x.png#",srcset:"//ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_3_2x.png 2x, //ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_3_2x.png# 1x",alt:"","aria-hidden":"true"}}),s("span",{staticStyle:{"padding-left":"5px"}},["TBD"===e.row.status?s("a",[t._v("Not Available")]):s("a",{attrs:{href:t.formatGoogleCalendar(e.row),target:"_blank",rel:"nofollow"}},[t._v("Google Calendar")])])]),s("el-row",[s("img",{staticStyle:{width:"20px",height:"20px","vertical-align":"middle"},attrs:{src:"https://help.apple.com/assets/61526E8E1494760B754BD308/61526E8F1494760B754BD30F/zh_CN/2162f7d3de310d2b3503c0bbebdc3d56.png",alt:"","aria-hidden":"true"}}),s("span",{staticStyle:{"padding-left":"5px"}},["TBD"===e.row.status?s("a",[t._v("Not Available")]):s("a",{attrs:{href:t.formatiCloudCalendar(e.row),rel:"nofollow"}},[t._v("iCloud Calendar")])])]),s("i",{staticClass:"el-icon-date icon",staticStyle:{"padding-left":"5px"},attrs:{slot:"reference"},slot:"reference"})],1)],1),s("el-row",["TBD"===e.row.status?s("div",[t._v(" Deadline: "),s("a",{attrs:{href:"https://github.com/ccfddl/ccf-deadlines/pulls"}},[t._v("pull request to update")])]):s("div",[t._v(" Deadline: "+t._s(e.row.localDDL)+" ("+t._s(e.row.originDDL)+") ")])]),s("el-row",[t._v("website: "),s("a",{attrs:{href:e.row.link}},[t._v(t._s(e.row.link))])]),"RUN"===e.row.status?s("TimeLine",{attrs:{ddls:e.row.ddls}}):t._e()],1)]}}])})],1),s("el-row",{staticStyle:{"padding-top":"8px"}},[s("div",{staticStyle:{float:"left",color:"#666666","font-size":"12px"}},[s("div",[t._v("ccf-deadlines is maintained by "),s("a",{attrs:{href:"https://github.com/jacklightChen"}},[t._v("@jacklightChen")]),t._v(" and "),s("a",{attrs:{href:"https://github.com/0x4f5da2"}},[t._v("@0x4f5da2")]),t._v(".")]),s("div",{staticStyle:{"padding-top":"3px"}},[t._v("If you find it useful, try find "),s("a",{attrs:{href:"https://github.com/0x4f5da2"}},[t._v("him")]),t._v(" a girlfriend or follow "),s("a",{attrs:{href:"https://www.researchgate.net/profile/Zhihao_Chen23"}},[t._v("him")]),t._v(" on ResearchGate.")])]),s("div",{staticStyle:{float:"right"}},[s("el-pagination",{attrs:{background:"",small:"",layout:"prev, pager, next","page-size":t.pageSize,"current-page":t.page,total:t.showNumber},on:{"current-change":t.handleCurrentChange}})],1)])],1)},l=[],o=(s("a4d3"),s("e01a"),s("99af"),s("4de4"),s("4160"),s("a630"),s("c975"),s("a15b"),s("d81d"),s("fb6a"),s("a434"),s("4ec9"),s("4fad"),s("d3b7"),s("ac1f"),s("6062"),s("3ca3"),s("466d"),s("5319"),s("1276"),s("4c53"),s("159b"),s("ddb0"),s("3835")),c=s("2909"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("el-row",[s("a",{staticClass:"title",attrs:{href:"/"}},[t._v("CCF Conference Deadlines")]),s("github-button",{staticStyle:{"padding-left":"5px"}}),t.showLatestConf?s("span",{staticStyle:{color:"#fd3c95","font-weight":"bold"}},[t._v("Latest: "+t._s(this.showStr)+" !!!")]):t._e()],1),s("el-row",{staticClass:"subtitle"},[t._v(" Countdowns to CCF conference deadlines. To add/edit a conference, "),s("a",{staticStyle:{color:"#666666"},attrs:{href:"https://github.com/ccfddl/ccf-deadlines/pulls"}},[t._v("send a pull request.")])])],1)},h=[],f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user=ccfddl&repo=ccf-deadlines&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub"}})},u=[],p={name:"GithubButton"},m=p,b=s("2877"),g=Object(b["a"])(m,f,u,!1,null,"6336978e",null),v=g.exports,_={name:"Header",components:{GithubButton:v},data:function(){return{showLatestConf:!1,showStr:""}},mounted:function(){var t=this;this.$http.get("https://api.github.com/repos/ccfddl/ccf-deadlines/commits?page=1&per_page=10").then((function(e){for(var s=e.body.length,i=0;i<s;i++){var a=e.body[i].commit.message,n=a.split(" "),r=a.indexOf("(");if("update"===n[0].toLowerCase()||"add"===n[0].toLowerCase()){-1!==r&&(a=a.substr(0,r)),t.showStr=a,t.showLatestConf=!0;break}}}))}},j=_,k=(s("0277"),Object(b["a"])(j,d,h,!1,null,"5e3b2b0f",null)),y=k.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"time_con"},[s("div",{staticClass:"line_time"},[s("div",{staticClass:"all_line"},[s("div",{ref:"allLineTime",staticClass:"line"},[s("div",{ref:"canLine",staticClass:"can_line"}),t._l(t.dateTips,(function(e,i){return s("div",{key:"tips-"+i,staticClass:"reference",style:t.setLeft(e)},[0===i&&t.isSingle||t._isMobile()&&t.dateTips.length>6&&(i%3===1||i%3===2)?t._e():s("em",{domProps:{textContent:t._s(t.formatter(e,1,i))}})])})),t._l(t.incre_dates,(function(e,i){return s("div",{key:i,staticClass:"dot dot_all",style:t.setLeft(e,i)},[s("em",{style:t.setText(i),domProps:{textContent:t._s(t.formatter(e))}})])})),s("div",{ref:"selDot",staticClass:"dot sel_dot"},[s("em",[t._v(t._s(t.selTime))])])],2)])])])},L=[],C=s("7f45"),x=C.tz.guess(),S={name:"TimeLine",props:["ddls"],data:function(){return{fullDate:null,binlogDate:null,selTime:null,start_date:null,end_date:null,timeline:null,incre_dates:[],allIncre:[],dateTips:[],deadlines:[],isSingle:!1,expireIndex:-1}},created:function(){},mounted:function(){var t=this;this.$nextTick((function(){t.getBackupTimeline()}))},methods:{_isMobile:function(){var t=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return t},formatter:function(t,e,s){if(e){if(this.ddls.length>1&&s>0){var i=this.dateTips[s],a=this.dateTips[s-1];if((i-this.start_date)/(this.end_date-this.start_date)*100-(a-this.start_date)/(this.end_date-this.start_date)*100<8)return""}return"".concat(C(1e3*t).format("MM/DD"))}return"".concat(C(1e3*t).format("YYYY/MM/DD HH:mm:ss"))},getBackupTimeline:function(){this.fullDate=null,this.binlogDate=null,this.selTime=null,this.start_date=null,this.end_date=null,this.timeline=null,this.deadlines=[],this.incre_dates=[],this.allIncre=[],this.dateTips=[],this.isSingle=!1,this.expireIndex=-1;var t=C.tz(new Date,x).valueOf(),e=this.ddls.length;1===e&&(this.deadlines.push(t/1e3),this.isSingle=!0);for(var s=0;s<e;s++){var i=C(this.ddls[s]).valueOf()/1e3;this.deadlines.push(i)}for(var a=this.deadlines.length,n=0;n<a;n++){var r=this.deadlines[n];if(!(t>=1e3*r))break;this.expireIndex=n}t<1e3*this.deadlines[0]?this.start_date=1*C(t).subtract(7,"d").startOf("day").format("X"):this.start_date=1*C(1e3*this.deadlines[0]).subtract(7,"d").startOf("day").format("X"),this.end_date=1*C(1e3*this.deadlines[a-1]).add(7,"d").endOf("day").format("X"),this.fullDate=t/1e3,this.binlogDate=this.deadlines[a-1];var l=this.$refs.canLine,o=t/1e3,c=(this.binlogDate-o)/(this.end_date-this.start_date);c>0?(l.style.width=100*c+"%",l.style.left=(o-this.start_date)/(this.end_date-this.start_date)*100+"%",l.style.maxWidth=100-parseFloat(l.style.left)+"%"):l.style.width="0%";var d=this.deadlines;this.incre_dates=d,this.allIncre=d.concat([this.binlogDate,this.fullDate]),this.clickDot(this.fullDate),this.timeline=d[d.length-1],this.dateTips=[];for(var h=0;h<this.deadlines.length;h++)this.dateTips.push(this.deadlines[h])},lineMouseDown:function(t){var e=this.$refs.allLineTime,s=(t.offsetX-6)/(1*e.offsetWidth);this.setSelTime(s)},canLineMouseDown:function(t){var e=this.$refs.canLine,s=this.$refs.allLineTime,i=t.offsetX/(1*s.offsetWidth);parseFloat(e.style.left)>0&&(i=t.offsetX/(1*s.offsetWidth)+parseFloat(e.style.left)/100),this.setSelTime(i)},clickDot:function(t){var e=(t-this.start_date)/(this.end_date-this.start_date);this.setSelTime(e)},setSelTime:function(t){var e=this,s=this.$refs.selDot;s.classList.remove("sel_dot_left"),s.classList.remove("sel_dot_right");var i=t;this.timeline=(this.end_date-this.start_date)*i+this.start_date,(this.timeline>this.binlogDate||this.timeline<this.fullDate)&&(this.allIncre.sort((function(t,s){return Math.abs(t-e.timeline)-Math.abs(s-e.timeline)})),this.timeline=this.allIncre[0],i=(this.timeline-this.start_date)/(this.end_date-this.start_date)),this.selTime=C(1e3*this.timeline).format("YYYY-MM-DD HH:mm:ss"),s.style.left=100*i+"%",100*i<10&&s.classList.add("sel_dot_left"),100*i>90&&s.classList.add("sel_dot_right")},dragDown:function(t){var e=this,s=1*this.$refs.allLineTime.offsetWidth,i=this.$refs.selDot,a=t.clientX-i.offsetLeft;document.onmousemove=function(t){var i=(t.clientX-a)/s*100;i>=100?i=100:i<=0&&(i=0),e.setSelTime(i/100)},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}},setLeft:function(t,e){return e<=this.expireIndex?"left:".concat((t-this.start_date)/(this.end_date-this.start_date)*100,"%;border: 2px solid #ccc;"):"left:".concat((t-this.start_date)/(this.end_date-this.start_date)*100,"%;")},setText:function(t){if(t<=this.expireIndex)return"color: #ccc;"}},watch:{ddls:function(){var t=this;this.$nextTick((function(){t.getBackupTimeline()}))}}},D=S,T=(s("4eed"),Object(b["a"])(D,w,L,!1,null,"06a06d34",null)),z=T.exports,M=s("e2c1"),A=s("7f45"),O=A.tz.guess();function I(t,e){var s=new Set(e);return Object(c["a"])(new Set(t)).filter((function(t){return s.has(t.toUpperCase())}))}var N={name:"Home",components:{Header:y,TimeLine:z},data:function(){return{publicPath:"/",checkAll:!0,isIndeterminate:!1,pageSize:10,page:1,checkList:[],subList:[],allconfList:[],showList:[],showNumber:0,typeMap:new Map,timeZone:"",utcMap:new Map,rankoptions:{A:"CCF A",B:"CCF B",C:"CCF C",N:"Non-CCF"},typesList:[],rankList:[],cachedLikes:[],cachedRanks:[],input:""}},methods:{loadFile:function(){var t=this;this.timeZone=O,this.$http.get(this.publicPath+"conference/types.yml").then((function(e){var s=M.load(e.body);t.subList=s;for(var i=0;i<t.subList.length;i++)t.checkList.push(t.subList[i].sub),t.typesList.push(t.subList[i].sub),t.typeMap.set(t.subList[i].sub,t.subList[i].name);t.loadCachedTypes(),t.getAllConf()}),(function(){alert("sorry your network is not stable!")}))},getAllConf:function(){var t=this;this.$http.get(this.publicPath+"conference/allconf.yml").then((function(e){for(var s=M.load(e.body),i=[],a=A.tz(new Date,O),n=0;n<s.length;n++)for(var r=s[n],l=0;l<r.confs.length;l++){var o=r.confs[l];o.title=r.title,o.description=r.description,o.sub=r.sub,o.rank=r.rank,o.displayrank=t.rankoptions[o.rank],o.dblp=r.dblp;var c=o.timeline.length;o.deadline=o.timeline[c-1].deadline,o.abstract_deadline=o.timeline[c-1].abstract_deadline,o.comment=o.timeline[c-1].comment,o.ddls=[];for(var d=!1,h=0;h<c;h++){var f=A(o.timeline[h].deadline+t.utcMap.get(o.timezone)),u=f.diff(a);o.ddls.push(o.timeline[h].deadline+t.utcMap.get(o.timezone)),!d&&u>=0&&(o.deadline=o.timeline[h].deadline,o.abstract_deadline=o.timeline[h].abstract_deadline,o.comment=o.timeline[h].comment,d=!0)}i.push(o)}var p=t.typeMap;console.log(p);for(var m=A.tz(new Date,O),b=0;b<i.length;b++){var g=i[b];if(g.subname=g.sub.map((function(t){return p.get(t)})),console.log(g.subname),"TBD"===g.deadline)g.remain=0,g.status="TBD";else{"AoE"===g.timezone?g.timezone="UTC-12":"UTC"===g.timezone&&(g.timezone="UTC+0");var v=A(g.deadline+t.utcMap.get(g.timezone));if(g.localDDL=v.tz(t.timeZone).format("ddd MMM Do YYYY HH:mm:ss z"),g.originDDL=g.deadline+" "+g.timezone,g.abstract_deadline){var _=A(g.abstract_deadline+t.utcMap.get(g.timezone));g.comment||(g.comment="abstract deadline on "+_.tz(t.timeZone).format("MMM D, YYYY")+".")}var j=v.diff(m);j<=0?(g.remain=0,g.status="FIN"):(g.remain=j,g.status="RUN"),t.cachedLikes&&t.cachedLikes.indexOf(g.title+g.id)>=0?g.isLike=!0:g.isLike=!1}t.allconfList.push(g)}t.showConf(t.typesList,t.rankList,t.input,1)}),(function(){alert("sorry your network is not stable!")}))},showConf:function(t,e,s,i){var a=this.allconfList;null!=t&&0!=t.length&&(a=a.filter((function(e){return I(e.sub,t).length>0}))),null!=e&&e.length>0&&(a=a.filter((function(t){return e.indexOf(t.rank)>=0}))),null!=s&&s.length>0&&(a=a.filter((function(t){return t.id.toLowerCase().indexOf(s.toLowerCase())>=0})));var n=a.filter((function(t){return"RUN"===t.status})),r=a.filter((function(t){return"TBD"===t.status})),l=a.filter((function(t){return"FIN"===t.status}));n.sort((function(t,e){return e.remain===t.remain?0:t.remain<e.remain?-1:1})),l.sort((function(t,e){return e.year===t.year?0:t.year>e.year?-1:1})),this.showList=[];var o=[],c=[];o.push.apply(o,n),o.push.apply(o,r),o.push.apply(o,l);for(var d=o.length-1;d>=0;d--){var h=o[d];!0===h.isLike&&(c.push(h),o.splice(d,1))}c.reverse(),c.push.apply(c,o),this.showList=c,this.showNumber=this.showList.length,this.showList=this.showList.slice(this.pageSize*(i-1),this.pageSize*i),this.page=i},transform:function(t){return Object.entries(t).forEach((function(e){var s=Object(o["a"])(e,2),i=s[0],a=s[1],n=a<10?"0".concat(a):a,r=a<2?i.replace(/s$/,""):i;"d"===r[0]?t[i]="".concat(n," ").concat(r):t[i]="".concat(n," ").concat(r[0])})),t},loadUTCMap:function(){for(var t=-12;t<=12;t++)t>=0?this.utcMap.set("UTC+"+t,"+"+(Array(2).join(0)+t).slice(-2)+"00"):this.utcMap.set("UTC"+t,"-"+(Array(2).join(0)+-1*t).slice(-2)+"00");this.utcMap.set("AoE","-1200"),this.utcMap.set("UTC","+0000")},handleCheckedChange:function(t){this.typesList=t;var e=t.length;this.checkAll=e===this.subList.length,this.isIndeterminate=e>0&&e<this.subList.length,this.$ls.set("types",Array.from(this.typesList)),this.showConf(this.typesList,this.rankList,this.input,1)},handleInputChange:function(){this.showConf(this.typesList,this.rankList,this.input,1)},handleRankChange:function(t){this.rankList=t,this.$ls.set("ranks",Array.from(this.rankList)),this.showConf(this.typesList,this.rankList,this.input,1)},handleCurrentChange:function(t){this.showConf(this.typesList,this.rankList,this.input,t)},handleCheckAllChange:function(){this.typesList=this.checkList.length===this.subList.length?[]:this.subList.map((function(t){return t.sub})).join(",").split(","),this.checkList=this.typesList,this.isIndeterminate=!1,this.$ls.set("types",Array.from(this.typesList)),this.showConf(this.typesList,this.rankList,this.input,1)},handleClickIcon:function(t,e){if(!0===e){t.isLike=!1;var s=this.cachedLikes.indexOf(t.title+t.id);s>-1&&this.cachedLikes.splice(s,1),this.$ls.set("likes",Array.from(new Set(this.cachedLikes)))}else t.isLike=!0,this.cachedLikes.push(t.title+t.id),this.$ls.set("likes",Array.from(new Set(this.cachedLikes)))},generateDBLP:function(t){return"https://dblp.uni-trier.de/db/conf/"+t},formatGoogleCalendar:function(t){return"https://www.google.com/calendar/render?action=TEMPLATE&text="+t.title+"+"+t.year+"&dates="+A(t.deadline+this.utcMap.get(t.timezone)).toISOString().replace(/-|:|\.\d\d\d/g,"")+"/"+A(t.deadline+this.utcMap.get(t.timezone)).toISOString().replace(/-|:|\.\d\d\d/g,"")+"&details="+t.comment+"&location=Online&ctz="+this.timeZone+"&sf=true&output=xml"},formatiCloudCalendar:function(t){return"data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0AURL:https://ccfddl.github.io/%0ADTSTART:"+A(t.deadline+this.utcMap.get(t.timezone)).toISOString().replace(/-|:|\.\d\d\d/g,"")+"%0ADTEND:"+A(t.deadline+this.utcMap.get(t.timezone)).toISOString().replace(/-|:|\.\d\d\d/g,"")+"%0ASUMMARY:"+t.title+" "+t.year+" Deadline %0ADESCRIPTION:"+t.comment+"%0ALOCATION:%0AEND:VEVENT%0AEND:VCALENDAR"},_isMobile:function(){var t=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return t},formatSubName:function(t){return this._isMobile()?t.sub:t.name},loadCachedTypes:function(){var t=this.$ls.get("types");if(t){this.typesList=t,this.checkList=this.typesList;var e=this.checkList.length;this.checkAll=e===this.subList.length,this.isIndeterminate=e>0&&e<this.subList.length}},loadCachedLikes:function(){this.cachedLikes=this.$ls.get("likes"),this.cachedLikes||(this.cachedLikes=[])},loadCachedRanks:function(){this.cachedRanks=this.$ls.get("ranks"),this.cachedRanks||(this.cachedRanks=[]),this.rankList=this.cachedRanks}},mounted:function(){this.loadCachedRanks(),this.loadCachedLikes(),this.loadUTCMap(),this.loadFile()}},B=N,E=(s("c921"),Object(b["a"])(B,r,l,!1,null,"26bb6b2c",null)),$=E.exports,P={name:"App",components:{Home:$}},F=P,R=(s("034f"),Object(b["a"])(F,a,n,!1,null,null,null)),U=R.exports,Y=s("5c96"),H=s.n(Y),G=(s("0fae"),s("28dd")),W=s("407d"),X=s.n(W),q=s("c16e"),V=s.n(q);i["default"].use(H.a),i["default"].use(G["a"]),i["default"].component(X.a.name,X.a);var Z={namespace:"vuejs__",name:"ls",storage:"local"};i["default"].use(V.a,Z),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(U)}}).$mount("#app")},"7e1b":function(t,e,s){},"85ec":function(t,e,s){},b1cd:function(t,e,s){},c921:function(t,e,s){"use strict";s("7e1b")},dc13:function(t,e,s){}});
//# sourceMappingURL=index.55a7be3b.js.map