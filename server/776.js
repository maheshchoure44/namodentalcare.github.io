exports.id=776,exports.ids=[776],exports.modules={3776:function(module,__unused_webpack_exports,__webpack_require__){(function(){var InvalidStateError,NetworkError,ProgressEvent,SecurityError,SyntaxError,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,http,https,os,url;XMLHttpRequestEventTarget=function(){class XMLHttpRequestEventTarget2{constructor(){this.onloadstart=null,this.onprogress=null,this.onabort=null,this.onerror=null,this.onload=null,this.ontimeout=null,this.onloadend=null,this._listeners={}}addEventListener(eventType,listener){var base;eventType=eventType.toLowerCase(),(base=this._listeners)[eventType]||(base[eventType]=[]),this._listeners[eventType].push(listener)}removeEventListener(eventType,listener){var index;eventType=eventType.toLowerCase(),this._listeners[eventType]&&-1!==(index=this._listeners[eventType].indexOf(listener))&&this._listeners[eventType].splice(index,1)}dispatchEvent(event){var eventType,j,len,listener,listeners;if(event.currentTarget=event.target=this,listeners=this._listeners[eventType=event.type])for(j=0,len=listeners.length;j<len;j++)(listener=listeners[j]).call(this,event);(listener=this[`on${eventType}`])&&listener.call(this,event)}}return XMLHttpRequestEventTarget2.prototype.onloadstart=null,XMLHttpRequestEventTarget2.prototype.onprogress=null,XMLHttpRequestEventTarget2.prototype.onabort=null,XMLHttpRequestEventTarget2.prototype.onerror=null,XMLHttpRequestEventTarget2.prototype.onload=null,XMLHttpRequestEventTarget2.prototype.ontimeout=null,XMLHttpRequestEventTarget2.prototype.onloadend=null,XMLHttpRequestEventTarget2}.call(this),http=__webpack_require__(3685),https=__webpack_require__(5687),os=__webpack_require__(2037),url=__webpack_require__(7310),XMLHttpRequest=function(){class XMLHttpRequest2 extends XMLHttpRequestEventTarget{constructor(options){super(),this.onreadystatechange=null,this._anonymous=options&&options.anon,this.readyState=XMLHttpRequest2.UNSENT,this.response=null,this.responseText="",this.responseType="",this.responseURL="",this.status=0,this.statusText="",this.timeout=0,this.upload=new XMLHttpRequestUpload(this),this._method=null,this._url=null,this._sync=!1,this._headers=null,this._loweredHeaders=null,this._mimeOverride=null,this._request=null,this._response=null,this._responseParts=null,this._responseHeaders=null,this._aborting=null,this._error=null,this._loadedBytes=0,this._totalBytes=0,this._lengthComputable=!1}open(method,url2,async,user,password){var xhrUrl;if((method=method.toUpperCase())in this._restrictedMethods)throw new SecurityError(`HTTP method ${method} is not allowed in XHR`);xhrUrl=this._parseUrl(url2),void 0===async&&(async=!0),this._method=method,this._url=xhrUrl,this._sync=!async,this._headers={},this._loweredHeaders={},this._mimeOverride=null,this._setReadyState(XMLHttpRequest2.OPENED),this._request=null,this._response=null,this.status=0,this.statusText="",this._responseParts=[],this._responseHeaders=null,this._loadedBytes=0,this._totalBytes=0,this._lengthComputable=!1}setRequestHeader(name,value){var loweredName;if(this.readyState!==XMLHttpRequest2.OPENED)throw new InvalidStateError("XHR readyState must be OPENED");loweredName=name.toLowerCase(),this._restrictedHeaders[loweredName]||/^sec\-/.test(loweredName)||/^proxy-/.test(loweredName)?console.warn(`Refused to set unsafe header "${name}"`):(value=value.toString(),loweredName in this._loweredHeaders?this._headers[name=this._loweredHeaders[loweredName]]=this._headers[name]+", "+value:(this._loweredHeaders[loweredName]=name,this._headers[name]=value))}send(data){if(this.readyState!==XMLHttpRequest2.OPENED)throw new InvalidStateError("XHR readyState must be OPENED");if(this._request)throw new InvalidStateError("send() already called");switch(this._url.protocol){case"file:":this._sendFile(data);break;case"http:":case"https:":this._sendHttp(data);break;default:throw new NetworkError(`Unsupported protocol ${this._url.protocol}`)}}abort(){this._request&&(this._request.abort(),this._setError(),this._dispatchProgress("abort"),this._dispatchProgress("loadend"))}getResponseHeader(name){var loweredName;return this._responseHeaders&&(loweredName=name.toLowerCase())in this._responseHeaders?this._responseHeaders[loweredName]:null}getAllResponseHeaders(){var name;return this._responseHeaders?function(){var ref,results;for(name in results=[],ref=this._responseHeaders)results.push(`${name}: ${ref[name]}`);return results}.call(this).join("\r\n"):""}overrideMimeType(newMimeType){if(this.readyState===XMLHttpRequest2.LOADING||this.readyState===XMLHttpRequest2.DONE)throw new InvalidStateError("overrideMimeType() not allowed in LOADING or DONE");this._mimeOverride=newMimeType.toLowerCase()}nodejsSet(options){var baseUrl;if("httpAgent"in options&&(this.nodejsHttpAgent=options.httpAgent),"httpsAgent"in options&&(this.nodejsHttpsAgent=options.httpsAgent),"baseUrl"in options){if(null!==(baseUrl=options.baseUrl)&&!url.parse(baseUrl,!1,!0).protocol)throw new SyntaxError("baseUrl must be an absolute URL");this.nodejsBaseUrl=baseUrl}}static nodejsSet(options){XMLHttpRequest2.prototype.nodejsSet(options)}_setReadyState(newReadyState){var event;this.readyState=newReadyState,event=new ProgressEvent("readystatechange"),this.dispatchEvent(event)}_sendFile(){throw"GET"!==this._url.method?new NetworkError("The file protocol only supports GET"):new Error("Protocol file: not implemented")}_sendHttp(data){if(this._sync)throw new Error("Synchronous XHR processing not implemented");null==data||"GET"!==this._method&&"HEAD"!==this._method?data||(data=""):(console.warn(`Discarding entity body for ${this._method} requests`),data=null),this.upload._setData(data),this._finalizeHeaders(),this._sendHxxpRequest()}_sendHxxpRequest(){var agent,hxxp,request;"http:"===this._url.protocol?(hxxp=http,agent=this.nodejsHttpAgent):(hxxp=https,agent=this.nodejsHttpsAgent),request=hxxp.request({hostname:this._url.hostname,port:this._url.port,path:this._url.path,auth:this._url.auth,method:this._method,headers:this._headers,agent}),this._request=request,this.timeout&&request.setTimeout(this.timeout,()=>this._onHttpTimeout(request)),request.on("response",response=>this._onHttpResponse(request,response)),request.on("error",error=>this._onHttpRequestError(request,error)),this.upload._startUpload(request),this._request===request&&this._dispatchProgress("loadstart")}_finalizeHeaders(){var base;this._headers.Connection="keep-alive",this._headers.Host=this._url.host,this._anonymous&&(this._headers.Referer="about:blank"),(base=this._headers)["User-Agent"]||(base["User-Agent"]=this._userAgent),this.upload._finalizeHeaders(this._headers,this._loweredHeaders)}_onHttpResponse(request,response){var lengthString;if(this._request===request){switch(response.statusCode){case 301:case 302:case 303:case 307:case 308:return this._url=this._parseUrl(response.headers.location),this._method="GET","content-type"in this._loweredHeaders&&(delete this._headers[this._loweredHeaders["content-type"]],delete this._loweredHeaders["content-type"]),"Content-Type"in this._headers&&delete this._headers["Content-Type"],delete this._headers["Content-Length"],this.upload._reset(),this._finalizeHeaders(),void this._sendHxxpRequest()}return this._response=response,this._response.on("data",data=>this._onHttpResponseData(response,data)),this._response.on("end",()=>this._onHttpResponseEnd(response)),this._response.on("close",()=>this._onHttpResponseClose(response)),this.responseURL=this._url.href.split("#")[0],this.status=this._response.statusCode,this.statusText=http.STATUS_CODES[this.status],this._parseResponseHeaders(response),(lengthString=this._responseHeaders["content-length"])?(this._totalBytes=parseInt(lengthString),this._lengthComputable=!0):this._lengthComputable=!1,this._setReadyState(XMLHttpRequest2.HEADERS_RECEIVED)}}_onHttpResponseData(response,data){if(this._response===response)return this._responseParts.push(data),this._loadedBytes+=data.length,this.readyState!==XMLHttpRequest2.LOADING&&this._setReadyState(XMLHttpRequest2.LOADING),this._dispatchProgress("progress")}_onHttpResponseEnd(response){if(this._response===response)return this._parseResponse(),this._request=null,this._response=null,this._setReadyState(XMLHttpRequest2.DONE),this._dispatchProgress("load"),this._dispatchProgress("loadend")}_onHttpResponseClose(response){var request;if(this._response===response)return request=this._request,this._setError(),request.abort(),this._setReadyState(XMLHttpRequest2.DONE),this._dispatchProgress("error"),this._dispatchProgress("loadend")}_onHttpTimeout(request){if(this._request===request)return this._setError(),request.abort(),this._setReadyState(XMLHttpRequest2.DONE),this._dispatchProgress("timeout"),this._dispatchProgress("loadend")}_onHttpRequestError(request,error){if(this._request===request)return this._setError(),request.abort(),this._setReadyState(XMLHttpRequest2.DONE),this._dispatchProgress("error"),this._dispatchProgress("loadend")}_dispatchProgress(eventType){var event;(event=new ProgressEvent(eventType)).lengthComputable=this._lengthComputable,event.loaded=this._loadedBytes,event.total=this._totalBytes,this.dispatchEvent(event)}_setError(){this._request=null,this._response=null,this._responseHeaders=null,this._responseParts=null}_parseUrl(urlString){var absoluteUrlString,index,password,user,xhrUrl;return absoluteUrlString=null===this.nodejsBaseUrl?urlString:url.resolve(this.nodejsBaseUrl,urlString),(xhrUrl=url.parse(absoluteUrlString,!1,!0)).hash=null,xhrUrl.auth&&(typeof user<"u"&&null!==user||typeof password<"u"&&null!==password)&&(-1===(index=xhrUrl.auth.indexOf(":"))?user||(user=xhrUrl.auth):(user||(user=xhrUrl.substring(0,index)),password||(password=xhrUrl.substring(index+1)))),(user||password)&&(xhrUrl.auth=`${user}:${password}`),xhrUrl}_parseResponseHeaders(response){var loweredName,name,ref,value;for(name in this._responseHeaders={},ref=response.headers)value=ref[name],loweredName=name.toLowerCase(),!this._privateHeaders[loweredName]&&(null!==this._mimeOverride&&"content-type"===loweredName&&(value=this._mimeOverride),this._responseHeaders[loweredName]=value);null!==this._mimeOverride&&!("content-type"in this._responseHeaders)&&(this._responseHeaders["content-type"]=this._mimeOverride)}_parseResponse(){var arrayBuffer,buffer,i,j,ref,view;switch(buffer=Buffer.concat?Buffer.concat(this._responseParts):this._concatBuffers(this._responseParts),this._responseParts=null,this.responseType){case"text":default:this._parseTextResponse(buffer);break;case"json":this.responseText=null;try{this.response=JSON.parse(buffer.toString("utf-8"))}catch(error1){this.response=null}break;case"buffer":this.responseText=null,this.response=buffer;break;case"arraybuffer":for(this.responseText=null,arrayBuffer=new ArrayBuffer(buffer.length),view=new Uint8Array(arrayBuffer),i=j=0,ref=buffer.length;0<=ref?j<ref:j>ref;i=0<=ref?++j:--j)view[i]=buffer[i];this.response=arrayBuffer}}_parseTextResponse(buffer){try{this.responseText=buffer.toString(this._parseResponseEncoding())}catch(error1){this.responseText=buffer.toString("binary")}this.response=this.responseText}_parseResponseEncoding(){var contentType,match;return(contentType=this._responseHeaders["content-type"])&&(match=/\;\s*charset\=(.*)$/.exec(contentType))?match[1]:"utf-8"}_concatBuffers(buffers){var buffer,j,k,len,len1,length,target;if(0===buffers.length)return Buffer.alloc(0);if(1===buffers.length)return buffers[0];for(length=0,j=0,len=buffers.length;j<len;j++)length+=(buffer=buffers[j]).length;for(target=Buffer.alloc(length),length=0,k=0,len1=buffers.length;k<len1;k++)(buffer=buffers[k]).copy(target,length),length+=buffer.length;return target}}return XMLHttpRequest2.prototype.onreadystatechange=null,XMLHttpRequest2.prototype.readyState=null,XMLHttpRequest2.prototype.response=null,XMLHttpRequest2.prototype.responseText=null,XMLHttpRequest2.prototype.responseType=null,XMLHttpRequest2.prototype.status=null,XMLHttpRequest2.prototype.timeout=null,XMLHttpRequest2.prototype.upload=null,XMLHttpRequest2.prototype.UNSENT=0,XMLHttpRequest2.UNSENT=0,XMLHttpRequest2.prototype.OPENED=1,XMLHttpRequest2.OPENED=1,XMLHttpRequest2.prototype.HEADERS_RECEIVED=2,XMLHttpRequest2.HEADERS_RECEIVED=2,XMLHttpRequest2.prototype.LOADING=3,XMLHttpRequest2.LOADING=3,XMLHttpRequest2.prototype.DONE=4,XMLHttpRequest2.DONE=4,XMLHttpRequest2.prototype.nodejsHttpAgent=http.globalAgent,XMLHttpRequest2.prototype.nodejsHttpsAgent=https.globalAgent,XMLHttpRequest2.prototype.nodejsBaseUrl=null,XMLHttpRequest2.prototype._restrictedMethods={CONNECT:!0,TRACE:!0,TRACK:!0},XMLHttpRequest2.prototype._restrictedHeaders={"accept-charset":!0,"accept-encoding":!0,"access-control-request-headers":!0,"access-control-request-method":!0,connection:!0,"content-length":!0,cookie:!0,cookie2:!0,date:!0,dnt:!0,expect:!0,host:!0,"keep-alive":!0,origin:!0,referer:!0,te:!0,trailer:!0,"transfer-encoding":!0,upgrade:!0,via:!0},XMLHttpRequest2.prototype._privateHeaders={"set-cookie":!0,"set-cookie2":!0},XMLHttpRequest2.prototype._userAgent=`Mozilla/5.0 (${os.type()} ${os.arch()}) node.js/${process.versions.node} v8/${process.versions.v8}`,XMLHttpRequest2}.call(this),module.exports=XMLHttpRequest,XMLHttpRequest.XMLHttpRequest=XMLHttpRequest,SecurityError=class extends Error{constructor(){super()}},XMLHttpRequest.SecurityError=SecurityError,InvalidStateError=class extends Error{constructor(){super()}},InvalidStateError=class extends Error{},XMLHttpRequest.InvalidStateError=InvalidStateError,NetworkError=class extends Error{constructor(){super()}},XMLHttpRequest.SyntaxError=SyntaxError,SyntaxError=class extends Error{constructor(){super()}},ProgressEvent=function(){class ProgressEvent2{constructor(type){this.type=type,this.target=null,this.currentTarget=null,this.lengthComputable=!1,this.loaded=0,this.total=0}}return ProgressEvent2.prototype.bubbles=!1,ProgressEvent2.prototype.cancelable=!1,ProgressEvent2.prototype.target=null,ProgressEvent2.prototype.loaded=null,ProgressEvent2.prototype.lengthComputable=null,ProgressEvent2.prototype.total=null,ProgressEvent2}.call(this),XMLHttpRequest.ProgressEvent=ProgressEvent,XMLHttpRequest.XMLHttpRequestUpload=XMLHttpRequestUpload=class extends XMLHttpRequestEventTarget{constructor(request){super(),this._request=request,this._reset()}_reset(){this._contentType=null,this._body=null}_setData(data){var body,i,j,k,offset,ref,ref1,view;if(!(typeof data>"u"||null===data))if("string"==typeof data)0!==data.length&&(this._contentType="text/plain;charset=UTF-8"),this._body=Buffer.from(data,"utf8");else if(Buffer.isBuffer(data))this._body=data;else if(data instanceof ArrayBuffer){for(body=Buffer.alloc(data.byteLength),view=new Uint8Array(data),i=j=0,ref=data.byteLength;0<=ref?j<ref:j>ref;i=0<=ref?++j:--j)body[i]=view[i];this._body=body}else{if(!(data.buffer&&data.buffer instanceof ArrayBuffer))throw new Error(`Unsupported send() data ${data}`);for(body=Buffer.alloc(data.byteLength),offset=data.byteOffset,view=new Uint8Array(data.buffer),i=k=0,ref1=data.byteLength;0<=ref1?k<ref1:k>ref1;i=0<=ref1?++k:--k)body[i]=view[i+offset];this._body=body}}_finalizeHeaders(headers,loweredHeaders){this._contentType&&("content-type"in loweredHeaders||(headers["Content-Type"]=this._contentType)),this._body&&(headers["Content-Length"]=this._body.length.toString())}_startUpload(request){this._body&&request.write(this._body),request.end()}}}).call(this)}};