var $pluginID="com.mob.sharesdk.QQ";eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([3-79a-hk-mo-zA-Z]|[1-3]\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('9 22="auth://tauth.qq.1k/";9 u={"12":"app_id","13":"app_key","1e":"auth_type","1f":"covert_url"};9 23={"1T":0,"1w":1};9 19={};b h(I){7.2u=I;7.t={"Q":4,"H":4};7.1l=4;7.1x=4;7.1J=4}h.k.I=b(){w 7.2u};h.k.L=b(){w"h"};h.k.B=b(){5(7.t["H"]!=4&&7.t["H"][u.12]!=4){w 7.t["H"][u.12]}m 5(7.t["Q"]!=4&&7.t["Q"][u.12]!=4){w 7.t["Q"][u.12]}w 4};h.k.1U=b(){5(7.t["H"]!=4&&7.t["H"][u.13]!=4){w 7.t["H"][u.13]}m 5(7.t["Q"]!=4&&7.t["Q"][u.13]!=4){w 7.t["Q"][u.13]}w 4};h.k.N=b(){5(7.t["H"]!=4&&7.t["H"][u.1e]!=4){w 7.t["H"][u.1e]}m 5(7.t["Q"]!=4&&7.t["Q"][u.1e]!=4){w 7.t["Q"][u.1e]}w $3.6.N()};h.k.24=b(){w"2v-2w-"+$3.6.l.h+"-"+7.B()};h.k.25=b(){5(7.t["H"]!=4&&7.t["H"][u.1f]!=4){w 7.t["H"][u.1f]}m 5(7.t["Q"]!=4&&7.t["Q"][u.1f]!=4){w 7.t["Q"][u.1f]}w $3.6.25()};h.k.2x=b(1g){5(2y.1m==0){w 7.t["Q"]}m{7.t["Q"]=7.26(1g);7.27();7.28(7.B())}};h.k.2z=b(1g){5(2y.1m==0){w 7.t["H"]}m{9 1a=7.26(1g);5(7.t["H"]==4){7.t["H"]={}}5(1a[u.12]!=4){7.t["H"][u.12]=1a[u.12]}5(1a[u.13]!=4){7.t["H"][u.13]=1a[u.13]}5(1a[u.1e]!=4){7.t["H"][u.1e]=1a[u.1e]}5(1a[u.1f]!=4){7.t["H"][u.1f]=1a[u.1f]}7.27();7.28(7.B())}};h.k.saveConfig=b(){9 e=7;9 1n="2v-2w";$3.G.2A("2B",1b,1n,b(a){5(a!=4){9 1K=a.1g;5(1K==4){1K={}}1K["plat_"+e.I()]=e.B();$3.G.2C("2B",1K,1b,1n,4)}})};h.k.isSupportAuth=b(){w 1y};h.k.2D=b(f,K){9 d=4;5(7.2E()){5(K==4){K={}}5(K["1z"]==4){K["1z"]=["2F","get_user_info","add_topic","upload_pic","add_share"]}9 e=7;9 N=7.N();5(N=="1L"||N=="sso"){$3.G.2G(b(a){5(a.R){e.2H(b(O,14){5(O){e.2I(f,14,K)}m 5(N=="1L"){e.1A(f,K)}m{9 d={"q":$3.6.y.1o,"F":"分享平台［"+e.L()+"］不支持["+N+"]授权方式!"};$3.D.S(f,$3.6.g.r,d)}})}m 5(N=="1L"){e.1A(f,K)}m{9 d={"q":$3.6.y.1o,"F":"分享平台［"+e.L()+"］不支持["+N+"]授权方式!"};$3.D.S(f,$3.6.g.r,d)}})}m 5(N=="web"){e.1A(f,K)}m{d={"q":$3.6.y.1o,"F":"分享平台［"+7.L()+"］不支持["+N+"]授权方式!"};$3.D.S(f,$3.6.g.r,d)}}m{d={"q":$3.6.y.29,"F":"分享平台［"+7.L()+"］应用信息无效!"};$3.D.S(f,$3.6.g.r,d)}};h.k.2J=b(2a,c){9 e=7;7.1M(b(o){5(2a!=4){9 d={"q":$3.6.y.1o,"F":"分享平台［"+e.L()+"］不支持获取其他用户资料!"};5(c!=4){c($3.6.g.r,d)}w}e.2K("2b://openmobile.qq.1k/o/2F","2L",4,b(1p,a){9 V=a;5(1p==$3.6.g.1q){V={"2c":$3.6.l.1w,"1B":o.T.1B};e.2d(V,a);5(V["1B"]==o["1B"]){V["T"]=o["T"]}}5(c!=4){c(1p,V)}})})};h.k.2K=b(s,2M,W,c){9 d=4;9 e=7;7.1M(b(o){5(o!=4){5(W==4){W={}}W["oauth_consumer_key"]=e.B();5(o.T!=4){W["1N"]=o.T.1V;W["1O"]=o.T.1B}$3.G.2N($3.6.l.1w,4,s,2M,W,4,b(a){5(a!=4){5(a["q"]!=4){5(c){c($3.6.g.r,a)}}m{9 1h=$3.X.jsonStringToObject($3.X.2O(a["2P"]));5(a["2e"]==2Q){5(c){c($3.6.g.1q,1h)}}m{9 2f=$3.6.y.Y;1P(1h["q"]){M 100006:M 100007:M 100013:M 100014:M 100015:M 100016:M 100030:2f=$3.6.y.2R;J}d={"q":2f,"15":1h};5(c){c($3.6.g.r,d)}}}}m{d={"q":$3.6.y.Y};5(c){c($3.6.g.r,d)}}})}m{d={"q":$3.6.y.2R,"F":"尚未授权["+e.L()+"]用户"};5(c){c($3.6.g.r,d)}}})};h.k.handleAuthCallback=b(f,Z){9 d=4;9 e=7;9 1W=$3.X.parseUrl(Z);5(1W!=4&&1W.2a!=4){9 W=$3.X.parseUrlParameters(1W.fragment);5(W!=4&&W.1N!=4){9 2S={"1N":W.1N};$3.G.2N($3.6.l.1w,4,"2b://2T.qq.1k/2U.0/me","2L",2S,4,b(a){5(a!=4){5(a["q"]!=4){$3.D.S(f,$3.6.g.r,a)}m 5(a["2e"]!=4&&a["2e"]==2Q){9 c=b(2V){w 2V};9 2W=$3.X.2O(a["2P"]);9 1h=eval(2W);5(1h.1O!=4){W["1O"]=1h.1O;e.2g(f,W)}m{d={"q":$3.6.y.Y,"15":1h};$3.D.S(f,$3.6.g.r,d)}}m{d={"q":$3.6.y.Y,"15":a};$3.D.S(f,$3.6.g.r,d)}}m{d={"q":$3.6.y.Y};$3.D.S(f,$3.6.g.r,d)}})}m{d={"q":$3.6.y.2X,"F":"无效的授权回调:["+Z+"]"};$3.D.S(f,$3.6.g.r,d)}}m{d={"q":$3.6.y.2X,"F":"无效的授权回调:["+Z+"]"};$3.D.S(f,$3.6.g.r,d)}};h.k.handleSSOCallback=b(f,Z,2Y,2Z){9 e=7;5(Z.2h(7.1x+"://")==0){$3.G.ssdk_qqHandlerSSOCallback(7.B(),Z,b(a){1P(a.1p){M $3.6.g.1q:{e.2g(f,a.R);J}M $3.6.g.r:{9 d={"q":$3.6.y.Y};$3.D.S(f,$3.6.g.r,d);J}1X:$3.D.S(f,$3.6.g.30,4);J}});w 1y}w 1b};h.k.handleShareCallback=b(f,Z,2Y,2Z){9 e=7;5(Z.2h(7.1x+"://")==0||Z.2h(7.1J+"://")==0){$3.G.ssdk_qqHandlerShareCallback(7.B(),Z,b(a){e.1M(b(o){9 U=19[f];9 P=4;9 z=4;5(U!=4){P=U["P"];z=U["15"]}1P(a.1p){M $3.6.g.1q:{9 V={};V["2i"]=P;V["p"]=P["p"];9 1Y=[];5(P["s"]){1Y.push(P["s"])}V["1Y"]=1Y;5(P["10"]!=4){V["E"]=[P["10"]]}m 5(P["1c"]!=4){V["E"]=[P["1c"]]}$3.D.2j(f,$3.6.g.1q,V,o,z);J}M $3.6.g.r:9 d={"q":$3.6.y.Y,"15":{"q":a.q,"F":a.F}};$3.D.2j(f,$3.6.g.r,d,o,z);J;1X:$3.D.2j(f,$3.6.g.30,4,o,z);J}delete 19[f];19[f]=4})});w 1y}w 1b};h.k.cancelAuthorize=b(){7.1Z(4,4)};h.k.addFriend=b(f,o,c){9 d={"q":$3.6.y.1o,"F":"平台["+7.L()+"]不支持添加好友方法!"};5(c!=4){c($3.6.g.r,d)}};h.k.getFriends=b(cursor,size,c){9 d={"q":$3.6.y.1o,"F":"平台["+7.L()+"]不支持获取好友列表方法!"};5(c!=4){c($3.6.g.r,d)}};h.k.share=b(f,v,c){9 e=7;9 20=v!=4?v["@20"]:4;9 z={"@20":20};$3.G.2k("1k.3.2l.2m.qq",b(a){5(a.R){$3.G.2G(b(a){5(a.R){e.31(b(O,14){5(O){e.32(f,v,z,c)}m{9 d={"q":$3.6.y.UnsetURLScheme,"F":"尚未配置["+e.L()+"]2n 2o:"+e.1J+", 无法进行分享。"};5(c!=4){c($3.6.g.r,d,4,z)}}})}m{9 d={"q":$3.6.y.1o,"F":"应用已禁用后台模式，分享平台［"+e.L()+"］无法进行分享! 请在项目设置中开启后台模式后再试!"};5(c!=4){c($3.6.g.r,d,4,z)}}})}m{9 d={"q":$3.6.y.29,"F":"分享平台［"+e.L()+"］尚未导入33.34!无法进行分享!"};5(c!=4){c($3.6.g.r,d,4,z)}}})};h.k.createUserByRawData=b(11){9 o={"2c":7.I()};7.2d(o,11);w $3.X.2p(o)};h.k.1C=b(2q,c){5(7.25()){9 e=7;7.1M(b(o){$3.6.convertUrl(e.I(),o,2q,c)})}m{5(c){c({"R":2q})}}};h.k._isUserAvaliable=b(o){w o.T!=4&&o.T.1V!=4&&o.T.35>36 37().38()};h.k.27=b(){7.1x=4;9 B=7.B();5(B!=4){7.1x="tencent"+B;9 1g=parseInt(7.B());9 1Q=1g.1i(16).toUpperCase();while(1Q.1m<8){1Q="0"+1Q}7.1J="h"+1Q}};h.k.2E=b(){5(7.B()!=4&&7.1U()!=4){w 1y}$3.D.2r("#2s:["+7.L()+"]应用信息有误，不能进行相关操作。请检查本地代码中和服务端的["+7.L()+"]平台应用配置是否有误! \\n本地配置:"+$3.X.2p(7.2x())+"\\n服务器配置:"+$3.X.2p(7.2z()));w 1b};h.k.26=b(1D){9 B=$3.X.39(1D[u.12]);9 1U=$3.X.39(1D[u.13]);1D[u.12]=B;1D[u.13]=1U;w 1D};h.k.2H=b(c){9 e=7;$3.G.3a(b(a){9 14=4;9 1E="";9 O=1b;9 1F=e.1x;5(a!=4&&a.1G!=4){21(9 i=0;i<a.1G.1m;i++){9 17=a.1G[i];5(17!=4&&17.1H!=4){21(9 j=0;j<17.1H.1m;j++){9 1I=17.1H[j];5(1I==1F){O=1y;14=1I;J}}}5(O){J}}}5(!O){1E=1F}5(!O){$3.D.2r("#2s:尚未配置["+e.L()+"]2n 2o:"+1E+", 无法使用SSO授权, 将以Web方式进行授权。")}5(c!=4){c(O,14)}})};h.k.31=b(c){9 e=7;$3.G.3a(b(a){9 14=4;9 1E="";9 O=1b;9 1F=e.1J;5(a!=4&&a.1G!=4){21(9 i=0;i<a.1G.1m;i++){9 17=a.1G[i];5(17!=4&&17.1H!=4){21(9 j=0;j<17.1H.1m;j++){9 1I=17.1H[j];5(1I==1F){O=1y;14=1I;J}}}5(O){J}}}5(!O){1E=1F}5(!O){$3.D.2r("#2s:尚未配置["+e.L()+"]2n 2o:"+1E+", 无法进行分享。")}5(c!=4){c(O,14)}})};h.k.1A=b(f,K){9 2t="2b://2T.qq.1k/2U.0/2D?response_type=1V&client_id="+7.B()+"&redirect_uri="+$3.X.3b(22);5(K!=4&&K["1z"]!=4&&1r.k.1i.1s(K["1z"])===\'[1t 1u]\'){2t+="&scope="+$3.X.3b(K["1z"].join(","))}$3.D.ssdk_openAuthUrl(f,2t,22)};h.k.2I=b(f,14,K){9 e=7;9 N=e.N();$3.G.2k("1k.3.2l.2m.qq",b(a){5(a.R){$3.G.ssdk_qqAuth(e.B(),K["1z"],b(a){5(a["q"]!=4){5(a["q"]==$3.6.y.NotYetInstallClient&&N=="1L"){e.1A(f,K)}m{$3.D.S(f,$3.6.g.r,a)}}})}m{5(N=="1L"){e.1A(f,K)}m{9 d={"q":$3.6.y.29,"F":"分享平台［"+e.L()+"］尚未导入33.34!无法进行授权!"};$3.D.S(f,$3.6.g.r,d)}}})};h.k.2g=b(f,1R){9 e=7;9 T={"1B":1R["1O"],"1V":1R["1N"],"35":(36 37().38()+1R["expires_in"]*1000),"2i":1R,"I":$3.6.credentialType.OAuth2};9 o={"2c":$3.6.l.h,"T":T};7.1Z(o,b(){e.2J(4,b(1p,a){5(1p==$3.6.g.1q){a["T"]=o["T"];o=a;e.1Z(o,4)}$3.D.S(f,$3.6.g.1q,o)})})};h.k.1Z=b(o,c){7.1l=o;9 1n=7.24();$3.G.2C("3c",7.1l,1b,1n,b(a){5(c!=4){c()}})};h.k.1M=b(c){5(7.1l!=4){5(c){c(7.1l)}}m{9 e=7;9 1n=7.24();$3.G.2A("3c",1b,1n,b(a){e.1l=a!=4?a.1g:4;5(c){c(e.1l)}})}};h.k.2d=b(o,11){5(o!=4&&11!=4){o["2i"]=11;o["3d"]=11["3d"];o["icon"]=11["figureurl_2"];9 1v=2;5(11["1v"]=="男"){1v=0}m 5(11["1v"]=="女"){1v=1}o["1v"]=1v;o["verify_type"]=11["vip"]?1:0;o["3e"]=11["3e"]}};h.k.32=b(f,v,z,c){9 p=4;9 x=4;9 A=4;9 E=4;9 s=4;9 e=7;9 l=4;9 d=4;9 1d=v["qq_scene"];5(1d==4){1d=23.1T}1P(1d){M 23.1w:l=$3.6.l.1w;J;1X:l=$3.6.l.1T;J}9 I=$3.6.C(l,v,"I");5(I==4){I=$3.6.18.3f}5(I==$3.6.18.3f){I=7.3g(v,l)}1P(I){M $3.6.18.3h:{p=$3.6.C(l,v,"p");5(p!=4){7.1C([p],b(a){p=a.R[0];$3.G.ssdk_qqShareText(e.B(),1d,p,b(a){5(a.q!=4){5(c!=4){c($3.6.g.r,a,4,z)}}m{9 U={"1S":l,"p":p};19[f]={"P":U,"15":z}}})})}m{d={"q":$3.6.y.Y,"F":"分享参数p不能为空!"};5(c!=4){c($3.6.g.r,d,4,z)}}J}M $3.6.18.3i:{p=$3.6.C(l,v,"p");x=$3.6.C(l,v,"x");A=$3.6.C(l,v,"10");9 1c=4;E=$3.6.C(l,v,"E");5(1r.k.1i.1s(E)===\'[1t 1u]\'){1c=E[0]}5(1c!=4){7.1C([p],b(a){p=a.R[0];$3.G.ssdk_qqShareImage(e.B(),1d,x,p,A,1c,b(a){5(a.q!=4){5(c!=4){c($3.6.g.r,a,4,z)}}m{9 U={"1S":l,"p":p,"x":x,"10":A,"1c":1c};19[f]={"P":U,"15":z}}})})}m{d={"q":$3.6.y.Y,"F":"分享参数1c不能为空!"};5(c!=4){c($3.6.g.r,d,4,z)}}J}M $3.6.18.3j:{p=$3.6.C(l,v,"p");x=$3.6.C(l,v,"x");A=$3.6.C(l,v,"10");5(A==4){E=$3.6.C(l,v,"E");5(1r.k.1i.1s(E)===\'[1t 1u]\'){A=E[0]}}s=$3.6.C(l,v,"s");5(x!=4&&A!=4&&s!=4){7.1C([p,s],b(a){p=a.R[0];s=a.R[1];$3.G.ssdk_qqShareWebpage(e.B(),1d,x,p,A,s,b(a){5(a.q!=4){5(c!=4){c($3.6.g.r,a,4,z)}}m{9 U={"1S":l,"p":p,"x":x,"10":A,"s":s};19[f]={"P":U,"15":z}}})})}m{d={"q":$3.6.y.Y,"F":"分享参数x、A、s不能为空!"};5(c!=4){c($3.6.g.r,d,4,z)}}J}M $3.6.18.Audio:{p=$3.6.C(l,v,"p");x=$3.6.C(l,v,"x");A=$3.6.C(l,v,"10");5(A==4){E=$3.6.C(l,v,"E");5(1r.k.1i.1s(E)===\'[1t 1u]\'){A=E[0]}}s=$3.6.C(l,v,"s");5(x!=4&&A!=4&&s!=4){7.1C([p,s],b(a){p=a.R[0];s=a.R[1];$3.G.ssdk_qqShareAudio(e.B(),1d,x,p,A,s,b(a){5(a.q!=4){5(c!=4){c($3.6.g.r,a,4,z)}}m{9 U={"1S":l,"p":p,"x":x,"10":A,"s":s};19[f]={"P":U,"15":z}}})})}m{d={"q":$3.6.y.Y,"F":"分享参数x、A、s不能为空!"};5(c!=4){c($3.6.g.r,d,4,z)}}J}M $3.6.18.Video:{p=$3.6.C(l,v,"p");x=$3.6.C(l,v,"x");A=$3.6.C(l,v,"10");5(A==4){E=$3.6.C(l,v,"E");5(1r.k.1i.1s(E)===\'[1t 1u]\'){A=E[0]}}s=$3.6.C(l,v,"s");5(x!=4&&A!=4&&s!=4){7.1C([p,s],b(a){p=a.R[0];s=a.R[1];$3.G.ssdk_qqShareVideo(e.B(),1d,x,p,A,s,b(a){5(a.q!=4){5(c!=4){c($3.6.g.r,a,4,z)}}m{9 U={"1S":l,"p":p,"x":x,"10":A,"s":s};19[f]={"P":U,"15":z}}})})}m{d={"q":$3.6.y.Y,"F":"分享参数x、A、s不能为空!"};5(c!=4){c($3.6.g.r,d,4,z)}}J}1X:{d={"q":$3.6.y.UnsupportContentType,"F":"不支持的分享类型["+I+"]"};5(c!=4){c($3.6.g.r,d,4,z)}J}}};h.k.28=b(B){5(B!=4){$3.G.2k("1k.3.2l.2m.qq",b(a){5(a.R){$3.D.ssdk_plugin_qq_setup(B)}})}};h.k.3g=b(v,l){9 I=$3.6.18.3h;9 x=$3.6.C(l,v,"x");9 A=$3.6.C(l,v,"10");9 s=$3.6.C(l,v,"s");9 E=$3.6.C(l,v,"E");5(x!=4&&(A!=4||1r.k.1i.1s(E)===\'[1t 1u]\')&&s!=4){I=$3.6.18.3j}m 5(1r.k.1i.1s(E)===\'[1t 1u]\'&&l==$3.6.l.1T){I=$3.6.18.3i}w I};$3.6.registerPlatformClass($3.6.l.h,h);',[],206,'|||mob|null|if|shareSDK|this||var|data|function|callback|error|self|sessionId|responseState|QQ|||prototype|platformType|else||user|text|error_code|Fail|url|_appInfo|QQAppInfoKeys|parameters|return|title|errorCode|userData|thumbImage|appId|getShareParam|native|images|error_message|ext|server|type|break|settings|name|case|authType|hasReady|content|local|result|ssdk_authStateChanged|credential|shareParams|resultData|params|utils|APIRequestFail|callbackUrl|thumb_image|rawData|AppID|AppKey|urlScheme|user_data||typeObj|contentType|QQShareContentSet|newServerConf|false|image|scene|AuthType|ConvertUrl|value|response|toString||com|_currentUser|length|domain|UnsupportFeature|state|Success|Object|apply|object|Array|gender|QZone|_authUrlScheme|true|scopes|_webAuthorize|uid|_convertUrl|appInfo|warningLog|callbackScheme|CFBundleURLTypes|CFBundleURLSchemes|schema|_shareUrlScheme|curApps|both|_getCurrentUser|access_token|openid|switch|str|credentialRawData|platform|QQFriend|appKey|token|urlInfo|default|urls|_setCurrentUser|flags|for|QQRedirectUri|QQScene|cacheDomain|convertUrlEnabled|_checkAppInfoAvailable|_updateCallbackURLSchemes|_setupApp|InvaildPlatform|query|https|platform_type|_updateUserInfo|status_code|code|_succeedAuthorize|indexOf|raw_data|ssdk_shareStateChanged|isPluginRegisted|sharesdk|connector|URL|Scheme|objectToJsonString|contents|log|warning|authUrl|_type|SSDK|Platform|localAppInfo|arguments|serverAppInfo|getCacheData|currentApp|setCacheData|authorize|_isAvailable|get_simple_userinfo|isMultitaskingSupported|_checkUrlScheme|_ssoAuthorize|getUserInfo|callApi|GET|method|ssdk_callHTTPApi|base64Decode|response_data|200|UserUnauth|getOpenIDParams|graph|oauth2|obj|responseString|InvalidAuthCallback|sourceApplication|annotation|Cancel|_checkShareUrlScheme|_share|TencentOpenApi|framework|expired|new|Date|getTime|trim|getAppConfig|urlEncode|currentUser|nickname|level|Auto|_getShareType|Text|Image|WebPage'.split('|'),0,{}))