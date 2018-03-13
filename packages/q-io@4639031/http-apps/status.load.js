montageDefine("4639031","http-apps/status",{dependencies:["./negotiate","./html"],factory:function(t,e,o){var n=t("./negotiate"),s=t("./html");e.statusCodes={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Request Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",507:"Insufficient Storage"},e.statusMessages={};for(var a in e.statusCodes)e.statusMessages[e.statusCodes[a]]=+a;e.statusWithNoEntityBody=function(t){return t>=100&&t<=199||204==t||304==t},e.appForStatus=function(t){return function(o){return e.responseForStatus(o,t,o.method+" "+o.path)}},e.responseForStatus=function(t,o,s){if(void 0===e.statusCodes[o])throw"Unknown status code";var a=e.statusCodes[o];if(e.statusWithNoEntityBody(o))return{status:o,headers:{}};var r={};r["text/plain"]=e.textResponseForStatus,t.handleHtmlFragmentResponse&&(r["text/html"]=e.htmlResponseForStatus);var u=n.negotiate(t,r)||e.textResponseForStatus;return u(t,o,a,s)},e.textResponseForStatus=function(t,e,o,n){var s=o+"\n";n&&(s+=n+"\n");var a=s.length;return{status:e,statusMessage:o,headers:{"content-length":a},body:[s]}},e.htmlResponseForStatus=function(t,e,o,n){return{status:e,statusMessage:o,headers:{},htmlTitle:o,htmlFragment:{forEach:function(t){t("<h1>"+s.escapeHtml(o)+"</h1>\n"),t("<p>Status: "+e+"</p>\n"),n&&t("<pre>"+s.escapeHtml(n)+"</pre>\n")}}}},e.badRequest=e.appForStatus(400),e.notFound=e.appForStatus(404),e.methodNotAllowed=e.appForStatus(405),e.noLanguage=e.notAcceptable=e.appForStatus(406)}});