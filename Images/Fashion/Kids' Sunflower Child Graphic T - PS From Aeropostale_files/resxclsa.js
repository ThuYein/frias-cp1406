//resxclsa.js v2.67 Copyright 2004-2009 Certona Corporation www.certona.com
var r1av=false,r1ch=null,r1a="undefined";if(typeof(r1j)==r1a){var r1j=false;};var r1af=false,r1ap=false,r1w=0,r1dt=location.protocol.toLowerCase()=="https:"?"https://":"http://",r1cw="www.res-x.com",r1cu="/ws/r2/Resonance.aspx",r1de="2.67",r1g="RES_TRACKINGID",r1k="RES_SESSIONID",r1f="ResonanceSegment";function r1aw(){return resx.rrelem;};function r1dz(){return resx.rrctx;};function r1dr(){return resx.ctx;};function r1bi(){return resx.rrcall;};function r1ct(){return resx.rrnum;};function r1bh(){return resx.plkmatch;};function r1ca(){return resx.lkmatch;};function r1bz(){return resx.ltmatch;};function r1df(){return resx.maxl;};function r1cm(){return resx.rrmaxl;};function r1cl(){return resx.pageid;};function r1e(r1dq){return parseInt(r1dq,10);};function r1b(r1ea){try{if(r1ea!=null&&r1ea!="null"&&r1ea!=""){return true;};}catch(ex){};return false;};function r1v(r1cs){try{var r1br=null;if(r1b(r1cs)){r1br=new Array();if(r1b(document.getElementById(r1cs))){r1br[0]=r1cs;}else{var r1cj=r1cs.replace(/[,;\-:]/g,".").split(".");for(var r1x=0;r1x<r1cj.length;r1x++){if(r1b(document.getElementById(r1cj[r1x]))){r1br[r1x]=r1cj[r1x];}else{r1br[r1x]="";};};};};return r1br;}catch(ex){};return null;};function r1l(){try{if(typeof(resx.rrelem)!=r1a){var r1d=r1v(r1aw());if(r1d!=null){var r1r=null;for(var r1x=0;r1x<r1d.length;r1x++){r1r=document.getElementById(r1d[r1x]);if(r1b(r1r)){r1r.style.visibility="visible";};};};};}catch(ex){};};function r1o(r1dy,r1ag){try{if(!r1av){r1av=true;r1ch=escape(r1dy+"|"+((typeof(r1ag.number)!=r1a)?r1ag.number:r1a)+"|"+((typeof(r1ag.name)!=r1a)?r1ag.name:r1a)+"|"+((typeof(r1ag.description)!=r1a)?r1ag.description:r1a));};}catch(ex){}finally{r1l();};};function r1h(r1aj){try{if(document.cookie.length>0){var r1ae=document.cookie.indexOf(r1aj+"=");if(r1ae!=-1){r1ae+=r1aj.length+1;var r1bw=document.cookie.indexOf(";",r1ae);if(r1bw==-1){r1bw=document.cookie.length;};return unescape(document.cookie.substring(r1ae,r1bw));};};}catch(ex){r1o("gc",ex);};return null;};function r1q(r1aj,value,r1az,r1ed,r1di){try{var r1bg=new Date();if(r1az!=null){r1bg.setTime(r1bg.getTime()+(r1az*3600*1000));};document.cookie=r1aj+"="+escape(value)+((r1b(r1az))?"; expires="+r1bg.toGMTString():"")+((r1b(r1ed))?"; path="+r1ed:"; path=/")+((r1b(r1di))?"; domain="+r1di:"");}catch(ex){};};function r1dp(){try{return escape(location.href);}catch(ex){};return"";};function r1ck(){try{return escape(document.referrer);}catch(ex){};return"";};function r1be(r1eg,r1ec){try{if(typeof(r1ec)!=r1a&&r1ec!=null){for(var r1x=0;r1x<r1ec.length;r1x++){if((r1ec[r1x]+"")==r1eg){return true;};};};}catch(ex){};return false;};function r1cg(){try{var r1ac=typeof(resx.rrec)!=r1a&&(resx.rrec==true||resx.rrec=="true")&&r1h(r1f)=="1"&&!r1av;if(r1ac){r1ac=false;if(typeof(resx.rrelem)!=r1a){var r1d=r1v(r1aw());if(r1d!=null){for(var r1x=0;r1x<r1d.length;r1x++){if(r1b(r1d[r1x])){r1ac=true;break;};};};};if(r1ac){r1ac=false;if(typeof(resx.rrnum)!=r1a){var r1ef=r1ct()+"";r1ef=r1ef.replace(/,/g,";");var r1db=r1ef.split(";");for(var r1x=0;r1x<r1db.length;r1x++){if(!isNaN(r1db[r1x])&&r1e(r1db[r1x])>0){r1ac=true;break;};};};};};return r1ac;}catch(ex){};return false;};function r1dx(r1dq){try{var r1dv="";r1dq+="";for(var r1x=r1dq.length-1;r1x>=0;r1x--){r1dv+=r1dq.charAt(r1x);};return r1dv;}catch(ex){};return"";};function r1s(){try{var r1eb="";if(navigator.userAgent.toLowerCase().indexOf("mac")==-1){r1eb=Math.floor(Math.random()*1000000000000000);r1eb+="";}else{var r1cd=Math.floor(Math.random()*1000000),r1du=new Date(),r1cp=r1du.getTime();r1cp+="";var r1da=r1dx(r1cp);r1cd+="";r1eb=r1cd+r1da.substring(0,11);};return r1eb;}catch(ex){r1o("guid",ex);};return"";};function r1ai(r1bt,r1by,r1bs,r1bk,r1dn,r1dm,r1dw){try{var r1bp="",r1al=null,r1dh="";if(typeof(r1bt)=="object"){r1al=document.getElementsByTagName("a");}else{var r1cc=document.getElementById(r1bt);if(r1b(r1cc)){r1al=r1cc.getElementsByTagName("a");r1dh=r1bt;};};if(typeof(r1al)!=r1a&&r1al!=null){var r1n=null,r1bx=null,r1bo=null,r1ak=null,r1cz=0,r1bd="",r1as="",r1ci="",r1bv="",r1cy="",r1u=null;if(r1b(r1by)){r1ak=-1;r1bx=new Array();for(var r1x=0;r1x<r1by.length;r1x++){r1n=document.getElementById(r1by[r1x]);if(r1b(r1n)){r1u=r1n.getElementsByTagName("a");for(var r1ej=0;r1ej<r1u.length;r1ej++){r1ak++;r1bx[r1ak]=r1u[r1ej]+"";};};};};if(r1b(r1bs)){r1ak=-1;r1bo=new Array();for(var r1x=0;r1x<r1bs.length;r1x++){r1n=document.getElementById(r1bs[r1x]);if(r1b(r1n)){r1u=r1n.getElementsByTagName("a");for(var r1ej=0;r1ej<r1u.length;r1ej++){r1ak++;r1bo[r1ak]=r1u[r1ej]+"";};};};};for(var r1x=0;r1x<r1al.length;r1x++){if(r1cz==r1dw){break;};r1bd=r1al[r1x]+"";if(r1b(r1bd)){r1as=escape(r1bd);r1bv="";if(r1b(r1bk)){r1as=r1as.match(r1bk)+"";};if(r1b(r1as)){r1bv=r1as.match(r1dn)+"";};if(r1b(r1bv+"")){if(!r1be(r1bd,r1bx)&&!r1be(r1bd,r1bo)){r1cy=r1as.match(r1dm)+"";r1ci=r1bv+escape("|")+r1dh+escape("|")+(r1b(r1cy)?r1cy:"")+";";if(r1bp.indexOf(r1ci)==-1){r1bp+=r1ci;r1cz++;};};};};};};return r1bp;}catch(ex){r1o("gpl",ex);};return"";};function r1eh(r1ar){try{r1af=true;if(!r1ap){var r1r=null;for(var r1x=0;r1x<r1ar.Resonance.Response.length;r1x++){if(r1ar.Resonance.Response[r1x].display=="yes"){r1r=document.getElementById(r1ar.Resonance.Response[r1x].scheme);if(r1b(r1r)){r1r.innerHTML=r1ar.Resonance.Response[r1x].output;};};};};}catch(ex){}finally{r1l();};};function r1ee(){try{if(typeof(resx.rrcall)!=r1a&&r1b(r1bi())){r1af=true;};if(!r1af){if(r1w<2000){r1w=r1w+50;window.setTimeout("r1ee()",50);}else{r1ap=true;r1l();};};}catch(ex){r1l();};};function r1dd(){try{var r1co="",r1bf="",r1cq=(typeof(resx.rrmaxl)!=r1a&&!isNaN(r1cm())?r1e(r1cm()):20),r1ab=((typeof(resx.lkmatch)!=r1a)?r1ca():""),r1an=((typeof(resx.ltmatch)!=r1a)?r1bz():"");if(r1b(r1ab)&&r1cq>0){var r1aa=((typeof(resx.plkmatch)!=r1a)?r1bh():""),r1au=null;if(typeof(resx.rrctx)!=r1a){r1au=r1v(r1dz());};if(r1au!=null){for(var r1x=0;r1x<r1au.length;r1x++){if(r1b(r1au[r1x])){r1bf+=r1ai(r1au[r1x],null,null,r1aa,r1ab,r1an,50);};};};};var r1at="r1eh";if(typeof(resx.rrcall)!=r1a&&r1b(resx.rrcall)){r1at=r1bi();};r1co="&ct="+((typeof(resx.rrcat)!=r1a)?resx.rrcat:"")+"&no="+r1ct()+"&cb="+r1at+((typeof(resx.rrqs)!=r1a)?"&"+resx.rrqs:"")+"&clk="+(r1b(r1bf)?r1bf:"")+((typeof(resx.exitemid)!=r1a&&r1b(resx.exitemid))?"&ex="+resx.exitemid:"");return r1co;}catch(ex){};return"";};function r1cf(){try{var r1z=location.hostname;if(r1b(r1z)){if(!r1z.match(/(\d{1,3}\.){3}\d{1,3}/)){var r1cn=r1z.split(".");if(r1cn.length>1){r1z="."+r1cn[r1cn.length-2]+"."+r1cn[r1cn.length-1];var r1ei=/\.co\.\w{2}/;if(r1z.toLowerCase().match(r1ei)&&r1cn.length>2){r1z="."+r1cn[r1cn.length-3]+r1z;};};};return r1z;};}catch(ex){};return null;};function getResonanceSegment(){try{var r1cx=r1h(r1f);if(eval("typeof(resx.seg"+r1cx+")")!=r1a){return eval("resx.seg"+r1cx);};}catch(ex){};return"";};function getResonanceStore(){try{var r1cx=r1h(r1f);if(eval("typeof(resx.store"+r1cx+")")!=r1a){return eval("resx.store"+r1cx);};}catch(ex){};return"";};function r1bj(r1dc){try{var r1bc=location.search,r1ae=r1bc.indexOf("?"+r1dc+"=");if(r1ae==-1){r1ae=r1bc.indexOf("&"+r1dc+"=");};if(r1ae>-1){r1ae=r1ae+r1dc.length+2;var r1bw=r1bc.indexOf("&",r1ae);if(r1bw==-1){return r1bc.substring(r1ae);}else{return r1bc.substring(r1ae,r1bw);};};}catch(ex){};return null;};function r1ce(r1ao){try{if(r1h(r1f)==r1ao){return"";};var r1bu="",r1ay=0,r1am=r1e(resx.top1),r1ah=r1e(resx.top2),r1aq=r1e(resx.top3),r1cr=100000;if(isNaN(r1am)){r1am=0;};if(isNaN(r1ah)){r1ah=r1am;};if(isNaN(r1aq)){r1aq=r1ah;};if(r1ao=="1"){r1ay=r1am-1;};if(r1ao=="2"){if((r1ah-r1am)>0){r1ay=r1ah-1;};};if(r1ao=="3"){if((r1aq-r1ah)>0){r1ay=r1aq-1;};};if(r1ao=="4"){if((r1cr-r1aq)>0){r1ay=r1cr-1;};};if(r1ay>0){r1ay+="";while(r1ay.length<5){r1ay="0"+r1ay;};r1bu=r1s();if(r1b(r1bu)){r1bu=r1bu.substr(0,1)+r1ay+r1bu.substr(1,11);};};return r1bu;}catch(ex){};return"";};function r1bq(){try{var r1cb="",r1dl="";for(var r1x=0;r1x<51;r1x++){if(eval("typeof(resx.cv"+r1x+")")!=r1a){r1dl=eval("resx.cv"+r1x)+"";r1dl=r1dl.replace(/\+/g,"%2B");r1cb+="&cv"+r1x+"="+escape(r1dl);};};return r1cb;}catch(ex){r1o("gcv",ex);};return"";};try{if(typeof(r1j)==r1a||!r1j){var r1c="",r1t="",r1p="",r1m="",r1bb="",r1ad="",r1i=r1cf(),r1y=false;if(location.search.indexOf("resxseg=")>0){r1c=r1ce(r1bj("resxseg"));};if(location.search.indexOf("resxtrack=")>0){r1c=r1bj("resxtrack");};if(r1b(r1c)&&!isNaN(r1e(r1c))){r1q(r1g,r1c,87648,null,r1i);if(!r1b(r1h(r1g))){r1q(r1g,r1c,null,null,r1i);};r1q(r1k,"",-1,null,r1i);}else{r1c=r1h(r1g);if(!r1b(r1c)){r1c=r1s();r1q(r1g,r1c,87648,null,r1i);if(!r1b(r1h(r1g))){r1q(r1g,r1c,null,null,r1i);};};};r1p=r1h(r1k);if(!r1b(r1p)){r1p=r1s();};r1q(r1k,r1p,.5,null,r1i);if(!r1b(r1h(r1k))){r1q(r1k,r1p,null,null,r1i);};r1c=r1h(r1g);r1t=r1e(r1c);if(!isNaN(r1t)&&r1t>0){r1t+="";r1t=r1t.substring(1,6);r1t=r1e(r1t);var r1am=r1e(resx.top1),r1ah=r1e(resx.top2),r1aq=r1e(resx.top3),r1cr=100000;if(isNaN(r1am)){r1am=0;};if(isNaN(r1ah)){r1ah=r1am;};if(isNaN(r1aq)){r1aq=r1ah;};if(r1t<r1am){r1m="1";}else if(r1t<r1ah){r1m="2";}else if(r1t<r1aq){r1m="3";}else if(r1t<r1cr){r1m="4";};};r1q(r1f,r1m,1440,null,r1i);if(!r1b(r1h(r1f))){r1q(r1f,r1m,null,null,r1i);};if(typeof(resx.pageid)!=r1a&&r1b(r1cl())){r1bb=r1cl();}else{r1bb=r1s();};r1p=r1h(r1k);r1m=r1h(r1f);r1y=r1cg()&&r1b(r1c)&&r1b(r1p)&&r1b(r1bb);if(!r1y){r1l();};var r1bn=((typeof(resx.links)!=r1a)?resx.links+"":"");if(r1b(r1bn)){var r1ax=r1bn.replace(/\|/g,"%7C").split(";",50);for(var r1x=0;r1x<r1ax.length;r1x++){r1ad+=r1ax[r1x]+";";};};var r1bm=(typeof(resx.maxl)!=r1a&&!isNaN(r1df())?r1e(r1df()):20),r1ab=((typeof(resx.lkmatch)!=r1a)?r1ca():""),r1an=((typeof(resx.ltmatch)!=r1a)?r1bz():"");if(r1b(r1ab)){var r1aa=((typeof(resx.plkmatch)!=r1a)?r1bh():""),r1d=null;if(typeof(resx.rrelem)!=r1a){r1d=r1v(r1aw());};if(r1d!=null){for(var r1x=0;r1x<r1d.length;r1x++){if(r1b(r1d[r1x])){r1ad+=r1ai(r1d[r1x],null,null,r1aa,r1ab,r1an,50);};};};var r1ba=null;if(typeof(resx.ctx)!=r1a&&r1b(r1dr())){r1ba=r1v(r1dr());};if(r1ba!=null){for(var r1x=0;r1x<r1ba.length;r1x++){if(r1b(r1ba[r1x])){r1ad+=r1ai(r1ba[r1x],null,null,r1aa,r1ab,r1an,50);};};};if(r1bm>0){r1ad+=r1ai(document,r1d,r1ba,r1aa,r1ab,r1an,r1bm);};};};}catch(ex){r1o("load",ex);};try{if((r1m=="1"||r1m=="2"||r1m=="3")&&(typeof(r1j)==r1a||!r1j)){r1j=true;var r1bl="?appid="+((typeof(resx.appid)!=r1a)?resx.appid:"")+"&tk="+(r1b(r1c)?r1c:"")+"&ss="+(r1b(r1p)?r1p:"")+"&sg="+(r1b(r1m)?r1m:"")+"&pg="+(r1b(r1bb)?r1bb:"")+"&bx="+r1y+"&vr="+r1de,r1dg="";if(typeof(resx.rrelem)!=r1a){var r1dk=r1v(r1aw());if(r1dk!=null){for(var r1x=0;r1x<r1dk.length;r1x++){r1dg+="&sc="+r1dk[r1x];};};};r1bl+=r1dg+((typeof(resx.event)!=r1a)?"&ev="+resx.event:"")+((typeof(resx.itemid)!=r1a)?"&ei="+resx.itemid:"")+((typeof(resx.qty)!=r1a)?"&qt="+resx.qty:"")+((typeof(resx.price)!=r1a)?"&pr="+resx.price:"")+((typeof(resx.shipping)!=r1a)?"&sh="+resx.shipping:"")+((typeof(resx.total)!=r1a)?"&tt="+resx.total:"")+((typeof(resx.currencycode)!=r1a)?"&cc="+resx.currencycode:"")+((typeof(resx.customerid)!=r1a)?"&cu="+resx.customerid:"")+((typeof(resx.transactionid)!=r1a)?"&tr="+resx.transactionid:"")+((r1av)?"&er="+r1av+"&em="+r1ch:"")+((r1y)?r1dd():"")+r1bq()+"&ur="+r1dp()+"&plk="+(r1b(r1ad)?r1ad:"")+"&rf="+r1ck();var r1cv=r1cw;if(typeof(resx.host)!=r1a&&r1b(resx.host)){r1cv=resx.host;};var r1dj=r1dt+r1cv+r1cu,r1ds=r1dj+r1bl;document.write("<scr"+"ipt type=\"text/javascript\" src=\""+r1ds+"\"><\/scr"+"ipt>");if(r1y){window.setTimeout("r1ee();",50);};};}catch(ex){r1o("",ex);};
