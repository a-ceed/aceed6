if(window==window.top){if(typeof String.prototype.trim!=="function"){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}}
if(typeof String.prototype.endsWith!=="function"){String.prototype.endsWith=function(e){return this.indexOf(e,this.length-e.length)!==-1}}
var IRH_Utils={irh_log:function(e){try{}
catch(t){}},getWeekQuery:function(){d=new Date;d.setHours(0,0,0);d.setDate(d.getDate()+4-(d.getDay()||7));var e=new Date(d.getFullYear(),0,1);var t=Math.ceil(((d-e)/864e5+1)/7);return d.getFullYear().toString()+t.toString()},CheckStringDefined:function(e){try{if(e){return true}
return false}catch(t){return false}},createToolTip:function(e,t){try{var n=document.createElement("div");n.className="bubbleInfo";n.style["width"]="100px";n.style["position"]="relative";n.style["cssFloat"]="right";n.style["zIndex"]=2147483647;n.style.styleFloat="right";var r=document.createElement("div");r.className="popup";r.id="popup";r.style["position"]="relative";r.style["display"]="none";var i=document.createElement("img");i.src=document.location.protocol+"//www.donation-tools.org/widgets/img/heart_03.png";i.id="irobHeart";i.className="trigger";i.height="20";i.width="20";i.style["float"]="right";i.style["position"]="relative";i.style["padding"]="0px 5px";var s=document.createElement("div");s.style["display"]="inline";s.style["position"]="absolute";s.style["marginLeft"]="2px";s.appendChild(i);try{if(e[0].Chosen_link.toString().indexOf("http://")==-1)
e[0].Chosen_link="http://"+e[0].Chosen_link;if(e[0].Chosen_link.indexOf(e[0].AP)>-1){var o=new RegExp("/("+e[0].AP+"=)[^&]+/","i");e[0].Chosen_link=e[0].Chosen_link.replace(o,"$1"+Credentials.raw_pkgid)}else{e[0].Chosen_link=e[0].Chosen_link.indexOf("?")==-1?e[0].Chosen_link+"?":e[0].Chosen_link+"&";e[0].Chosen_link+=e[0].AP+"="+Credentials.raw_pkgid}
if(e[0].Type.toString().toLowerCase()=="text"){r.innerHTML='<iframe frameBorder="0" style="overflow: hidden;" src="'+document.location.protocol+"//donation-tools.org/coupons/coupon/coupon_3.html?message="+encodeURIComponent(escape(e[0].Coupon_desc))+"&link="+encodeURIComponent(e[0].Chosen_link)+"&Type=JSInject&NS=IRHWWP"+'" height="350px" width="400px">'}else if(e[0].Type.toString().toLowerCase()=="banner"){r.innerHTML='<a href="'+e[0].Chosen_link+"&pkgId"+pkgId+'"><img src="'+e[0].Coupon_image+'" height="'+e[0].Coupon_height+'" width="'+e[0].Coupon_width+'" /></a>'}else{r.innerHTML='<img src="'+document.location.protocol+'//donation-tools.org/coupons/coupon/images/contribution-program-banner2%20.png">'}}catch(u){r.innerHTML='<img src="'+document.location.protocol+'//donation-tools.org/coupons/coupon/images/contribution-program-banner2%20.png">'}
n.appendChild(r);var a=document.querySelectorAll(IRHWWP.elementSelectorHeart);document.querySelectorAll(IRHWWP.elementSelectorHeart+" span.st")[t].appendChild(s);a[t].className+=" irobHeart";s.appendChild(n)}catch(u){}},SITE_DATA:function(e,t,n,r,i,s,o,a,u){this.sAddress=e;this.sRedirectUrl=t;this.sCommission=n;this.sNetwork=r;this.sAffiliateParam=i;this.sType=s;this.sID=o;this.PN=a;this.sNType=u||null},SIMILAR_SITE_DATA:function(e,t){this.sAddress=e;this.sType=t},IROB_CRED:function(e,t){IRH_Utils.irh_log("IROB_CRED: "+e);IRH_Utils.irh_log("IROB_CRED: "+t);this.pkgid=e;this.raw_pkgid=t},IROB_SETTINGS:function(e,t,n,r,i,s){this.TM=e;this.HU=t;this.CC=n;this.CI=r;this.AU=i;this.CF=s},onDocumentComplete:function(){var e=IRHWWP.IsAffiliateRedirectPage(document.location.toString());if(!e){e=IRHWWP.IsAffiliateRedirectPage(document.referrer.toString())}
if(IsFbdnMerchant(document.location.toString()))
return;var t=document.location.href.toString();var n=document.referrer.toString();var r=irobUserSettings.REV_R||"";var s=["aclk?","afsrc=1"];for(i in s){if(t.indexOf(s[i])>-1||n.indexOf(s[i])>-1){if(s[i]=="aclk?"){IRHWWP.AclkRef(true)}else{IRHWWP.AddToVisited();return}}}
if(true){var a=IsAffiliatePage2(t,n);IRHWWP.CheckSite2("IRHWWP.Redirect",a)}else{AddToVisited()}},Message:function(e,t,n,r){this.key=e;this.value=t;this.msgType=n;this.callback=r}};var IROBW=function(e,t,n,r,i){this.PROG_ID=e;this.DOT_ID=t;this.EXT_ID=n;this.IROB_SERVER=r||"system";this.clbkDoc=i||function(){};this.Credentials;this.irobSettings;this.irobUserSettings};IROBW.prototype=function(){var iframe,disValues=["aclk?","afsrc=","click.linksynergy.com",".anrdoezrs.net",".dpbolvw.net",".jdoqocy.com",".kqzyfj.com",".qksrv.net",".tkqlhce.com","utm_campaign=lomadee","utm_medium=lomadee","utm_source=Lomadee","tracker.lomadee.com","source=webgains"],STRIP_TYPE={CPN:4,GREEN:3,YELLOW:1,RED:2},StripSitesReferrer=["donation-tools.org/redirectAmazon.htm"],HOUR_MS=36e5,DAY_MS=864e5,headID=document.getElementsByTagName("head")[0],domain=document.location.protocol+"//www.donation-tools.org",elementSelector="cite",elementSelectorHeart="li.g:not(#newsbox)",elementSelectorIndicator='div[id="search"] h2.hd',isActive=function(){return irobUserSettings.IsActive},Settings={},pQueryString=null,aclkref=false,NameSpace="IRHWWP",SendMessage=function(e){LOG("Sending: "+JSON.stringify(e));iframe.contentWindow.postMessage(JSON.stringify(e),"*")},FixAddress=function(e){var t=["ac","academy","ad","ae","aero","af","ag","agency","ai","al","am","an","ao","aq","ar","arpa","as","asia","associates","at","au","aw","ax","axa","az","ba","bar","bargains","bb","bd","be","berlin","bf","bg","bh","bi","bid","bike","biz","bj","blackfriday","blue","bm","bmw","bn","bo","boutique","br","bs","bt","build","builders","buzz","bv","bw","by","bz","ca","cab","camera","camp","capital","cards","careers","cat","catering","cc","cd","center","ceo","cf","cg","ch","cheap","christmas","ci","citic","ck","cl","cleaning","clothing","club","cm","cn","co","codes","coffee","com","community","company","computer","condos","construction","consulting","contractors","cool","coop","cr","cruises","cs","cu","cv","cw","cx","cy","cz","dance","dating","dd","de","democrat","diamonds","directory","dj","dk","dm","do","domains","dz","ec","edu","education","ee","eg","eh","email","engineering","enterprises","equipment","er","es","estate","et","eu","eus","events","exchange","expert","farm","fi","fish","fj","fk","flights","florist","fm","fo","fr","futbol","ga","gal","gallery","gb","gd","ge","gf","gg","gh","gi","gift","gl","glass","gm","gn","gov","gp","gq","gr","graphics","gripe","gs","gt","gu","guitars","guru","gw","gy","hk","hm","hn","holdings","holiday","house","hr","ht","hu","id","ie","il","im","immobilien","in","industries","info","ink","institute","int","international","io","iq","ir","is","it","je","jetzt","jm","jo","jobs","jp","kaufen","ke","kg","kh","ki","kim","kitchen","kiwi","km","kn","kp","kr","kw","ky","kz","la","land","lb","lc","lease","li","lighting","limo","link","lk","london","lr","ls","lt","lu","lv","ly","ma","maison","management","marketing","mc","md","me","media","menu","mg","mh","mil","mini","mk","ml","mm","mn","mo","mobi","moda","moe","monash","mp","mq","mr","ms","mt","mu","museum","mv","mw","mx","my","mz","na","nagoya","name","nc","ne","net","neustar","nf","ng","ni","ninja","nl","no","np","nr","nu","nyc","nz","om","onl","org","pa","paris","partners","parts","pe","pf","pg","ph","photo","photography","photos","pics","pictures","pink","pk","pl","plumbing","pm","pn","post","pr","pro","productions","products","properties","ps","pt","pub","pw","py","qa","re","recipes","red","reisen","rentals","repair","report","rest","reviews","rich","ro","rs","ru","rw","sa","sb","sc","sd","se","services","sexy","sg","sh","shiksha","shoes","si","singles","sj","sk","sl","sm","sn","so","social","solar","solutions","space","sr","ss","st","su","supplies","supply","support","sv","sx","sy","systems","sz","tattoo","tc","td","technology","tel","tf","tg","th","tienda","tips","tj","tk","tl","tm","tn","to","today","tokyo","tools","town","toys","tp","tr","trade","training","travel","tt","tv","tw","tz","ua","ug","uk","university","uno","us","uy","uz","va","vacations","vc","ve","ventures","vg","vi","viajes","villas","vision","vn","voting","voyage","vu","watch","webcam","wed","wf","wien","wiki","works","ws","xxx","xyz","ye","yt","yu","za","zm","zone","zw"];e=e.toLowerCase();e=e.replace("https://","").replace("ftp://","").replace("http://","").replace("www.","").replace("www1.","").replace("www2.","").replace("www8.","").replace("mailto:","");e=e.split("/")[0].split("?")[0].split(" ")[0].split(";")[0];e=e.replace(/^\s+|\s+$/gm,"");e=e.replace("@",".").replace(":",".");var n=e.split(".");n=n.reverse();var r="";var i=0;var s=false;while(n.length>i&&!s){if(t.indexOf(n[i])==-1){s=true}
r=n[i]+"."+r;i++}
r=r.substring(0,r.length-1);return r},CheckAmazon=function(){var e=FixAddress(window.top.location.href.toString());var t=[{A:"",SType:1,ID:0,U:"",N:"Clix",CMIN:2,CMAX:8,CText:"%",SNType:2,AP:"",F_URL:null}];if(e=="amazon.com"){t[0].ID=5;t[0].A="amazon.com";t[0].U="http://www.amazon.com/?tag=irh-p014-20&linkCode=ur2&camp=1789&creative=9325";return t}else if(e=="amazon.fr"){t[0].ID=17;t[0].A="amazon.fr";t[0].U="http://www.amazon.fr?_encoding=UTF8&tag=irh-fr-14-21";return t}else if(e=="amazon.de"){t[0].ID=18;t[0].A="amazon.de";t[0].U="http://www.amazon.de/exec/obidos/redirect-home?tag=irh-de-14-21&site=home";return t}else if(e=="amazon.ca"){t[0].ID=19;t[0].A="amazon.ca";t[0].U="http://www.amazon.ca?_encoding=UTF8&tag=irh-ca-14-20";return t}else if(e=="amazon.co.uk"){t[0].ID=16;t[0].A="amazon.co.uk";t[0].U="http://www.amazon.co.uk?_encoding=UTF8&tag=irh-uk-14-21";return t}else if(e=="amazon.es"){t[0].ID=20;t[0].A="amazon.es";t[0].U="http://www.amazon.es/?_encoding=UTF8&tag=irh-es-14-21&linkCode=ur2&camp=3626&creative=24790";return t}
return undefined},CheckSite2=function(e,t){LOG("CheckSite2()");if(document.referrer.indexOf(StripSitesReferrer)>-1){LOG("Strip site found");var n=this;var r=new IRH_Utils.SITE_DATA("","","","","","",3);fireStrip.call(n,r);return}
var i=-1;try{i=irobUserSettings.COU||-1}catch(s){i=-1}
var swr="";var isSwrActivated=true;if(isSwrActivated){swr="&pkgId="+Credentials.raw_pkgid+"&swr=1";}
var o=document.createElement("SCRIPT");o.src="//system.donation-tools.org/packages/merGetInfo.aspx?nameSpace="+NameSpace+"&d="+FixAddress(window.top.location.href.toString())+"&p="+IRHWWP.PROG_ID+"&clbk="+e+"&c="+i+"&sf="+t+"&urlBlockAff=2"+swr;headID.appendChild(o)},CheckSite=function(e){LOG("CheckSite()");if(document.referrer.indexOf(StripSitesReferrer)>-1){LOG("Strip site found");var t=this;var n=new IRH_Utils.SITE_DATA("","","","","","",3);fireStrip.call(t,n);return}
var r=document.createElement("SCRIPT");r.src="//system.donation-tools.org/packages/pkgGetRedirectInformation.aspx?subby=4&domain="+fnGetDomain(window.top.location.href.toString())+"&progId="+IRHWWP.PROG_ID+"&clbkFunc="+e+"&tq="+IRH_Utils.getWeekQuery();headID.appendChild(r)},parseQueryString=function(){function e(e){var t=new Object;if(!e)
return t;var n=e.split(/[;&]/);for(var r=0;r<n.length;r++){var i=n[r].split("=");if(!i||i.length!=2)
continue;var s=unescape(i[0]);var o=unescape(i[1]);o=o.replace(/\+/g," ");t[s]=o}
return t}
LOG("parseQueryString()");var t;var n=document.getElementsByTagName("script");for(var r,i=n.length;i&&(r=n[--i]);){try{if((r=r.getAttribute("src"))&&(r=r.toLowerCase().match(/(.*)widgets\/wppartner\/widget.js(\?\s*(.+))?\s*/))){r[2]=r[2].slice(1);pQueryString=e(r[2])}}catch(s){}}},Init=function(){LOG("Init()");parseQueryString();var e=this;InitFrame.call(e,function(){GetCredentials.call(e)},e.clbkDoc)},LOG=function(e){try{IRH_Utils.irh_log("-----"+e+"-----")}catch(t){}},CheckFBDN=function(e){try{var t=e.split(";;;");var n=document.createElement("div");for(i in t){try{t[i]=t[i].toString().toLowerCase().trim();n.innerHTML=t[i];t[i]=n.firstChild.nodeValue;if(t[i].endsWith("*")==true){t[i]=t[i].substring(0,t[i].length-1);if(document.location.href.toString().toLowerCase().trim().indexOf(t[i])>-1){return true}}else if(document.location.href.toString().toLowerCase().trim()==t[i]){return true}}catch(r){}}}catch(r){}
return false},Redirect=function(e){LOG("Redirect()");var t=this;var n=e[0];var r=n["N"].toString().toLowerCase().trim();try{r=n["N"].toString().toLowerCase().trim()}catch(i){}
try{if(aclkref==true){if(r!="ydk"){AddToVisited()}
return}}catch(i){}
if(r=="cj"||r=="ls"){if(checkIfAd.call(t)){IRH_Utils.irh_log("Ad!");AddToVisited();return}}
try{if(n["F_URL"]&&CheckFBDN(n["F_URL"]))
return true}catch(i){}
switch(parseInt(n["SType"])){case 1:if(parseInt(n["SNType"])==2){PromptSitesClbk.call(this,n);break}
IRH_Utils.irh_log("SType1 -> Supported");SupportedSitesClbk.call(this,n);break;case 2:IRH_Utils.irh_log("SType2 -> Similar");SimilarSitesClbk.call(this,n);break;case 3:break;default:break}},PromptSitesClbk=function(e){LOG("PromptSitesClbkSitesClbk()");var t=this;var n=parseFloat(e["CMIN"]);var r=parseFloat(e["CMAX"]);var i="";if(n==0&r==0){i=""}else{if(n==0&&r>0){i=parseFloat(r)*parseFloat(irobSettings.COMM_FACTOR)+e["CText"].toString()}else{i=parseFloat(n)*parseFloat(irobSettings.COMM_FACTOR)+e["CText"].toString();if(r>n){i+="-"+parseFloat(r)*parseFloat(irobSettings.COMM_FACTOR)+e["CText"].toString()}}}
var s=new IRH_Utils.SITE_DATA(e["A"],e["U"],i,e["N"],e["AP"],e["SType"],e["ID"],e["PN"],e["SNType"]);if(s.sRedirectUrl.toString().indexOf("http://")==-1){s.sRedirectUrl="http://"+s.sRedirectUrl}
fireStrip.call(t,s,function(){AddToVisited.call(t)})},CouponRedirect=function(e){LOG("CouponRedirect()");var t=this;var n=e[0];var r=parseFloat(n["CMIN"].toString());var i=parseFloat(n["CMAX"].toString());var s="";if(r==0&&i==0){s=""}else{if(r==0&&i>0){s=parseFloat(i)*parseFloat(irobSettings.COMM_FACTOR)+n["CText"].toString()}else{s=parseFloat(r)*parseFloat(irobSettings.COMM_FACTOR)+n["CText"].toString();if(i>r){s+="-"+parseFloat(i)*parseFloat(irobSettings.COMM_FACTOR)+n["CText"].toString()}}}
var o=new IRH_Utils.SITE_DATA(n["A"],n["U"],s,n["N"],n["AP"],n["SType"],n["ID"],n["PN"]);IRHWWP.AddToVisited();fireStrip.call(t,o)},SimilarSitesClbk=function(e){LOG("SimilarSitesClbk()");var t=this;var n=new IRH_Utils.SIMILAR_SITE_DATA(e["A"],e["SType"]);fireStrip.call(t,n)},SupportedSitesClbk=function(e){LOG("SupportedSitesClbk()");var t=this;var n=parseFloat(e["CMIN"]);var r=parseFloat(e["CMAX"]);var i="";if(n==0&r==0){i=""}else{if(n==0&&r>0){i=parseFloat(r)*parseFloat(irobSettings.COMM_FACTOR)+e["CText"].toString()}else{i=parseFloat(n)*parseFloat(irobSettings.COMM_FACTOR)+e["CText"].toString();if(r>n){i+="-"+parseFloat(r)*parseFloat(irobSettings.COMM_FACTOR)+e["CText"].toString()}}}
var s=new IRH_Utils.SITE_DATA(e["A"],e["U"],i,e["N"],e["AP"],e["SType"],e["ID"],e["PN"]);if(s.sRedirectUrl.toString().indexOf("http://")==-1){s.sRedirectUrl="//"+s.sRedirectUrl;}else{s.sRedirectUrl=s.sRedirectUrl.replace("http://","//");}
fireRedirectFrame.call(t,s,function(){AddToVisited.call(t)});fireStrip.call(t,s)
if(s.sRedirectUrl.toString().toLowerCase().indexOf("redirectlogic.aspx")==-1){serverCountRedirect.call(t,s);}};RequestIdentity=function(){LOG("RequestIdentity()");var e=document.createElement("SCRIPT");try{BrowserDetect.init();var t=BrowserDetect.browser;this.EXT_ID=this.EXT_ID+t}catch(n){}
try{this.EXT_ID=this.EXT_ID.toLowerCase()}catch(n){}
var r="";try{r=pQueryString["_irh_subid"]||"";r="&fRev=1&r_uid="+r}catch(n){}
e.src=document.location.protocol+"//az439107.vo.msecnd.net/Packages/pkgTranslate.aspx?progId="+this.PROG_ID+"&uid="+this.EXT_ID+"&clbkFunc=IRHWWP.SetCredentials"+r;headID.appendChild(e)},CheckSerp=function(){LOG("CheckSerp()");var e=this;var t=document.location.toString();if(window.top.location.host.indexOf("google.com")>-1){AddScript(document.location.protocol+"//az417028.vo.msecnd.net/widgets/js/tooltipUI.js?tq="+IRH_Utils.getWeekQuery());var n=document.querySelectorAll("li.g div.f cite");var r='div[id="search"] h2.hd';if(n.length!=0){for(i in n){try{var s="";if(typeof n[i].textContent!=="undefined")
s=n[i].textContent;IRH_Utils.irh_log(s+": "+fnGetDomain(s));var o=fnGetDomain(s);if(o.length>0){AddScript(document.location.protocol+"//system.donation-tools.org/Coupons/getCouponBySiteDomain.aspx?domain="+o+"&index="+i+"&pkgId="+Credentials.pkgid+"&tq="+IRH_Utils.getWeekQuery()+"&clbkFunc=IRH_Utils.createToolTip")}}catch(u){IRH_Utils.irh_log(u)}}
try{document.querySelector(r).className+=" irobHeart"}catch(u){IRH_Utils.irh_log(u)}}
try{var a=document.querySelector(r).className;if(typeof a!=="undefined"&&a.indexOf("irobHeart")==-1)
IRHWWP.CheckSerp()}catch(u){IRH_Utils.irh_log("-------------"+u+"+-------------------")}
setInterval(function(){try{var e=document.querySelector(r).className;if(typeof e!=="undefined"&&e.indexOf("irobHeart")==-1)
IRHWWP.CheckSerp()}catch(t){IRH_Utils.irh_log("-------------"+t+"+-------------------")}},5500);return true}},GetOurServerTimeString=function(e){try{var t=e.setHours(e.getHours()-8);var n=new Date(t);return(new Date(n.toUTCString().substr(0,25))).toDateString()}catch(r){return e.toDateString()}},AddScript=function(e){LOG("AddScript()");var t=document.createElement("script");t.src=e;headID.appendChild(t)},UpdatePkgSettings=function(){try{var e=document.createElement("SCRIPT");e.src=document.location.protocol+"//system.donation-tools.org/Packages/pkgGetSettingsAndUpdate.aspx?pkgId="+Credentials.raw_pkgid+"&progId="+IRHWWP.PROG_ID+"&comp_type=3&is_active="+irobUserSettings.IsActive+"&rev_id="+irobUserSettings.REV+"&ext_id="+IRHWWP.EXT_ID+"&sub_prog=";headID.appendChild(e)}catch(t){}},InitFrame=function(e,t){LOG("InitFrame()");var n=this;var r=function(e){try{var r=JSON.parse(e.data);switch(r.msgType.toString().toLowerCase()){case"set":break;case"get":break;case"setcredentials":GetUserSettings();break;case"getcredentials":InitCredentials.call(n,r.value);break;case"setsettings":Start.call(this);break;case"getsettings":try{if(!r.value){throw new Error("")}else{var i=JSON.parse(r.value);var s=GetOurServerTimeString(new Date);var o=GetOurServerTimeString(new Date(i[0]["updateTime"]));LOG("settings last update : "+o);LOG("now : "+s);LOG("is different ? : "+(o!=s));if(o!=s){throw new Error("Old settings")}else{LOG("Settings are up to date!");SetSettings(i)}}}catch(u){IRH_Utils.irh_log(u);RequestSettings.call(this)}
break;case"setusersettings":GetSettings();break;case"getusersettings":try{if(!r.value){throw new Error("")}else{LOG(r.value);var i=JSON.parse(r.value);var s=GetOurServerTimeString(new Date);var o=GetOurServerTimeString(new Date(i[0]["updateTime"]));LOG("settings last update : "+o);LOG("now : "+s);LOG("is different ? : "+(o!=s));if(o!=s){throw new Error("Old settings")}else{LOG("Settings are up to date!");SetUserSettings(i)}}}catch(u){IRH_Utils.irh_log(u);RequestUserSettings.call(this)}
break;case"check":if(document.referrer.indexOf(irh_localStoragePT)>-1){IRHWWP.CheckSite("IRHWWP.CouponRedirect");return}
var s=new Date;s=s.getTime();var a=s-r.value||0;IRH_Utils.irh_log("Difference: "+a);if(a>HOUR_MS*12){IRH_Utils.irh_log(typeof t==="function");if(typeof t==="function")
LOG("Callbacking()!!!");t()}else{IRH_Utils.irh_log("Redirect was initiated less than an hour ago.")}
break;default:break}}catch(u){}};iframe=document.createElement("IFRAME");iframe.id="IRHCOMMFRAME";iframe.name="IRHCOMMFRAME";iframe.style.cssText="position:absolute;width:1px;height:1px;left:-9999px;";iframe.src="https://www.donation-tools.org/widgets/WPPartner/localStoragePT.html";document.body.appendChild(iframe);if(window.addEventListener){iframe.addEventListener("load",function(){if(typeof e==="function"){e()}},false);window.addEventListener("message",function(e){r(e)},false)}else if(iframe.attachEvent){iframe.attachEvent("onload",function(){if(typeof e==="function"){e()}},false);window.attachEvent("onmessage",function(e){r(e)})}},AddToVisited=function(e){LOG("AddToVisited()");var t=new Date;e=e||window.top.location.href.toString();var n=new IRH_Utils.Message(fnGetDomain(e),t.getTime().toString(),"set");SendMessage.call(this,n)},checkIfAd=function(){try{var e=document.referrer.toString().toLowerCase().trim();if(IRH_Utils.CheckStringDefined(e)==false||e==""||typeof e==="undefined"||e=="null"){return false}
if(e.indexOf(document.location.host)!=-1||e.indexOf("google.")!=-1||e.indexOf("irobinhood.")!=-1||e.indexOf("donation-tools.org")!=-1||e.indexOf("search.softonic")!=-1||e.indexOf("www.bing.")!=-1||e.indexOf("search.yahoo")!=-1){return false}
return true}catch(t){return true}},parseUri=function(e){var t=parseUriOptions,n=t.parser[t.strictMode?"strict":"loose"].exec(e),r={},i=14;while(i--)
r[t.key[i]]=n[i]||"";r[t.q.name]={};r[t.key[12]].replace(t.q.parser,function(e,n,i){if(n)
r[t.q.name][n]=i});return r},parseUriOptions={strictMode:false,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},fnGetDomain=function(e){try{e=e.indexOf("http")==-1?"http://"+e:e;var t=parseUri(e).host;t=t.replace("www.","");if(t!=""){if(t[0]!="."){t="."+t}}
return t}catch(n){return""}
return""},IsFbdnMerchant=function(e){try{e=fnGetDomain(e.toString().toLowerCase());var t=irobSettings.C_F_LAND_MER.split(",");for(i in t){if(e.indexOf(t[i].toString().toLowerCase())>-1){return true}}}catch(n){}},IsAffiliatePage2=function(url,referrer){var fbdnIds="";try{var all_strings=eval(irobSettings.C_C_ALL_STRINGS);for(i in all_strings){var strToCheck=all_strings[i][parseInt(i)+1];if(strToCheck=="aclk?")
continue;if(url.indexOf(strToCheck)>-1||referrer.indexOf(strToCheck)>-1){fbdnIds+=(parseInt(i)+1).toString()+","}}
fbdnIds=fbdnIds.substring(0,fbdnIds.length-1)}catch(e){}
return fbdnIds},IsAffiliatePage=function(url,referrer,network_id){url=url.toLowerCase();referrer=referrer.toLowerCase();var all_rules=JSON.parse(irobSettings.C_C_DEF);var all_strings=eval(irobSettings.C_C_ALL_STRINGS);var to_block=false;var myAffRule={};var isEmpty=function(e){for(var t in e){if(e.hasOwnProperty(t))
return false}
return true};for(var i=0;i<all_rules.length;i++){if(all_rules[i].i==network_id){myAffRule=all_rules[i];break}}
if(!isEmpty(myAffRule)){if(myAffRule.a==0){for(st in all_strings){if(myAffRule.s.indexOf(parseInt(st)+1)==-1){if(url.indexOf(all_strings[st][(parseInt(st)+1).toString()])>-1||referrer.indexOf(all_strings[st][(parseInt(st)+1).toString()])>-1){to_block=true;break}}}}else{for(st in all_strings){if(myAffRule.s&&myAffRule.s.indexOf(parseInt(st)+1)>-1){if(url.indexOf(all_strings[st][(parseInt(st)+1).toString()])>-1||referrer.indexOf(all_strings[st][(parseInt(st)+1).toString()])>-1){to_block=true;break}}}}}
return to_block},IsAffiliateRedirectPage=function(e){try{e=e.toString().toLowerCase();var t=irobSettings.C_AFF_PARAMS.split(",");for(i in t){if(e.indexOf(t[i].toString().toLowerCase())>-1){IRH_Utils.irh_log(t[i]);return true}}
t=irobSettings.C_AFF_DOMAINS.split(",");for(i in t){if(e.indexOf(t[i].toString().toLowerCase())>-1){IRH_Utils.irh_log(t[i]);return true}}}catch(n){}
return false},fireRedirectFrame=function(e,t){var n=document.createElement("IFRAME");var r=e.sRedirectUrl.indexOf("?")==-1?e.sRedirectUrl+"?":e.sRedirectUrl+"&";r+=e.sAffiliateParam+"="+Credentials.raw_pkgid;n.src=r.indexOf("http")==-1?"//"+r:r;if(typeof t==="function"){n.onload=function(){t()}}
IRH_Utils.irh_log(n);headID.appendChild(n)},serverCountRedirect=function(e){var t=document.createElement("IFRAME");var n="//system.donation-tools.org/logs/redirect.aspx?progId="+IRHWWP.PROG_ID+"&pkgId="+Credentials.raw_pkgid+"&sid="+e.sID+"&aff="+e.sNetwork+"&PN="+e.PN+"&RED_TYPE=2&ReportURLToClickSystem=1";IRH_Utils.irh_log(n);t.setAttribute("height","0px");t.setAttribute("width","0px");t.style.cssText="display: none;";t.src=n;headID.appendChild(t);SendToGA("Widget","Redirect",document.location.href,"event","UA-49277292-1")},SendToGA=function(e,t,n,r,i){var s="-1";try{s=Credentials.raw_pkgid}catch(o){}
r=r||"event";timeTicks=(new Date).getTime();var u="//www.google-analytics.com/collect?v=1&_v=j12&a=282442659&t="+r+"&_s="+parseInt(Math.random()*1e10)+"&dl="+encodeURIComponent(document.location.href)+"&dr=&ul=en-us&de=UTF-8&sd=24-bit&je=1&ec="+e+"&ea="+t+"&el="+encodeURIComponent(n)+"&_utma=17049275.220532222.1379242168.1379336012.1379345423.4&_utmz=17049275.1379345423.4.4.utmcsr%3Dinf00113_tb_v1_toolbar%7Cutmccn%3D(referral)%7Cutmcmd%3Dreferral%7Cutmcct%3D%2F&_utmht="+timeTicks+"&_u=OQAC~&cid="+s+"&tid="+i+"&z="+parseInt(Math.random()*1e9);var a=document.createElement("img");a.src=u;var f="iRobGA-"+parseInt(Math.random()*1e10);a.id=f;a.onload=function(){if(a){a.parentNode.removeChild(a)}};headID.appendChild(a);return},fireStrip=function(e,t){try{if(!irobUserSettings.SHOW_UI){LOG("UI IS DISABLED");return}}catch(n){}
if(IRH_Utils.SIMILAR_SITE_DATA.prototype.isPrototypeOf(e))
e.sType=STRIP_TYPE.RED;else if(IRH_Utils.SITE_DATA.prototype.isPrototypeOf(e)){if(e.sNType==2){e.sType=STRIP_TYPE.YELLOW}else{e.sType=STRIP_TYPE.GREEN}}
IRH_Utils.irh_log(JSON.stringify(e));var r=document.createElement("SCRIPT");var i="";try{i=pQueryString["_irh_prodname"]||""}catch(n){}
r.src=document.location.protocol+"//static.donation-tools.org/Strip/SP/1_irobinhoodscript_V25.js?url="+irobSettings.HOMEPAGE_URL+"&causename="+irobUserSettings.CharityName+"&cid="+irobUserSettings.CharityID+"&AmazonName="+irobSettings.AMAZON_US+"&afflink="+encodeURIComponent(e.sRedirectUrl)+"&host=encodeURIComponent(document.domain)&type="+e.sType+"&commission="+e.sCommission+"&loc=encodeURIComponent(document.location.href)&messText=Every%2520purchase%2520at%2520"+e.sAddress+"%2520generates%2520a%25205%2524%2520donation%2520to%2520charity%2520-%2520at%2520no%2520cost%2520to%2520you.&money="+irobSettings.TOTAL_MONEY+"&nt="+e.sNetwork+"&sid="+e.sID+"&pkgId="+Credentials.pkgid+"&NS=IRHWWP"+"&lang="+irobUserSettings.Lang+"&prodname="+encodeURIComponent(i);if(typeof t==="function")
r.load=function(){t()};headID.appendChild(r)},InjectTooltip=function(e,t){if(IRH_Utils.SIMILAR_SITE_DATA.prototype.isPrototypeOf(e))
e.sType=STRIP_TYPE.RED;else if(IRH_Utils.SITE_DATA.prototype.isPrototypeOf(e))
e.sType=STRIP_TYPE.GREEN;IRH_Utils.irh_log(JSON.stringify(e));var n=document.createElement("SCRIPT");n.src=document.location.protocol+"//static.donation-tools.org/Strip/SP/irobinhood_ui.js?url="+irobSettingsirobSettings.HOMEPAGE_URL+"&causename="+irobUserSettings.CharityName+"&cid="+irobUserSettings.CharityID+"&AmazonName="+irobSettings.AMAZON_US+"&host=encodeURIComponent(document.domain)&type="+e.sType+"&commission="+e.sCommission+"&loc=encodeURIComponent(document.location.href)&messText=Every%2520purchase%2520at%2520"+e.sAddress+"%2520generates%2520a%25205%2524%2520donation%2520to%2520charity%2520-%2520at%2520no%2520cost%2520to%2520you.&money="+irobSettings.TOTAL_MONEY+"&pkgId="+Credentials.pkgid;if(typeof t==="function")
n.load=function(){t()};headID.appendChild(n)},Start=function(){var e=new IRH_Utils.Message(fnGetDomain(window.top.location.href.toString()),"","check");SendMessage.call(this,e);SendToGA("","","","pageview","UA-54800669-1");SendToGA("","","","pageview","UA-57162654-1")},GetCredentials=function(){var e=new IRH_Utils.Message(IRHWWP.PROG_ID,"","getcredentials");SendMessage.call(this,e)},SetCredentials=function(e){if(e[0].raw_pkgid.toString()=="-1"){var t=new Date;t.setDate(t.getDate()+1);var n=new IRH_Utils.Message(IRHWWP.PROG_ID,t.getTime(),"deactivate");SendMessage.call(this,n)}else{Credentials=new IRH_Utils.IROB_CRED(e[0].pkgid,e[0].raw_pkgid);var n=new IRH_Utils.Message(IRHWWP.PROG_ID,JSON.stringify(e),"setcredentials");SendMessage.call(this,n)}},AddTempScript=function(e){var t=document.createElement("script");t.src=e;t.onload=function(){if(t){t.parentNode.removeChild(t)}};var n=document.getElementsByTagName("head")[0];n.appendChild(t)},SetActive=function(e,t){try{t=parseInt(t)||0;var n=new IRH_Utils.Message(IRHWWP.PROG_ID,e,"setactive");SendMessage.call(this,n);var r=parseInt(e)==0?"deactivate":"activate";if(t>0){r+="&d="+(new Date(t)).toISOString()}
AddTempScript("http://system.donation-tools.org/packages/actions/settings.aspx?pkgId="+Credentials.pkgid+"&a="+r)}catch(i){}},SetActiveUI=function(e){var t=parseInt(e);if(!isNaN(t)){if(t>0&&(new Date).getTime()<t){var n=new IRH_Utils.Message(IRHWWP.PROG_ID,0,"setactiveui");SendMessage.call(this,n);AddTempScript("http://system.donation-tools.org/Packages/Actions/Settings.aspx?pkgId="+Credentials.pkgid+"&a=uioff&d="+(new Date(t)).toISOString())}}},InitCredentials=function(e){try{e=JSON.parse(e)[0];if(typeof e.pkgid==="undefined"||typeof e.raw_pkgid==="undefined"){IRH_Utils.irh_log("RequestIdentity();");RequestIdentity.call(this);return}else{Credentials=new IRH_Utils.IROB_CRED(e.pkgid,e.raw_pkgid)}}catch(t){IRH_Utils.irh_log("No pkg in localstorage...");RequestIdentity.call(this);return}
GetUserSettings()},GetSettings=function(){LOG("GetSettings()");var e=new IRH_Utils.Message(IRHWWP.PROG_ID,"","getsettings");SendMessage.call(this,e)},GetUserSettings=function(){LOG("GetUserSettings()");var e=new IRH_Utils.Message(IRHWWP.PROG_ID,"","getusersettings");SendMessage.call(this,e)},SetUserSettings=function(e){try{irobUserSettings={};irobUserSettings=e[0];var t=new Date;var n=t.getTime();irobUserSettings.updateTime=n;var r=new IRH_Utils.Message(IRHWWP.PROG_ID,JSON.stringify(e),"setusersettings");SendMessage.call(this,r)}catch(i){}},SetSettings=function(e){try{irobSettings=new IRH_Utils.IROB_SETTINGS;irobSettings=e[0];var t=new Date;var n=t.getTime();irobSettings.updateTime=n;var r=new IRH_Utils.Message(IRHWWP.PROG_ID,JSON.stringify(e),"setsettings");SendMessage.call(this,r)}catch(i){}},RequestUserSettings=function(){var e=document.createElement("SCRIPT");e.src=document.location.protocol+"//system.donation-tools.org/Packages/pkgGetSettingsNew.aspx?pkgId="+Credentials.pkgid+"&progId="+IRHWWP.PROG_ID+"&dotId="+IRHWWP.DOT_ID+"&jsp=1&callbackFunc=IRHWWP.SetUserSettings&index=1&w=";headID.appendChild(e);return},AclkRef=function(e){aclkref=e},RequestSettings=function(e){var t=document.createElement("SCRIPT");t.src=document.location.protocol+"//az439107.vo.msecnd.net/Programs/getSettingsV2.aspx?progId="+IRHWWP.PROG_ID+"&dotId="+IRHWWP.DOT_ID+"&rev="+irobUserSettings.REV+"&jsp=1&callbackFunc=IRHWWP.SetSettings&index=1&w=";headID.appendChild(t);return};return{iframe:iframe,disValues:disValues,HOUR_MS:HOUR_MS,DAY_MS:DAY_MS,headID:headID,AclkRef:AclkRef,elementSelector:elementSelector,elementSelectorHeart:elementSelectorHeart,elementSelectorIndicator:elementSelectorIndicator,Init:Init,SetActive:SetActive,SetActiveUI:SetActiveUI,CheckSite:CheckSite,CheckSite2:CheckSite2,IsAffiliateRedirectPage:IsAffiliateRedirectPage,CheckAmazon:CheckAmazon,checkIfAd:checkIfAd,AddToVisited:AddToVisited,fireRedirectFrame:fireRedirectFrame,serverCountRedirect:serverCountRedirect,fireStrip:fireStrip,InjectTooltip:InjectTooltip,SetCredentials:SetCredentials,GetSettings:GetSettings,SetSettings:SetSettings,SetUserSettings:SetUserSettings,RequestSettings:RequestSettings,Redirect:Redirect,CouponRedirect:CouponRedirect,CheckSerp:CheckSerp,SendToGA:SendToGA}}
();var BrowserDetect={init:function(){this.browser=this.searchString(this.dataBrowser)||"unknown"},searchString:function(e){for(var t=0;t<e.length;t++){var n=e[t].string;var r=e[t].prop;if(n){if(n.indexOf(e[t].subString)!=-1)
return e[t].identity}else if(r)
return e[t].identity}},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.vendor,subString:"Apple",identity:"Safari"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer"}]};var irh_localStoragePT="donation-tools.org/widgets/WPPartner/localStoragePT.html";if(document.location.href.toLowerCase().indexOf(irh_localStoragePT.toLowerCase())==-1){IRH_Utils.irh_log("activated");var IRHWWP=new IROBW(40,5717,_chch3e7xjxs2);IRHWWP.clbkDoc=IRH_Utils.onDocumentComplete;IRHWWP.Init()}}