(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{208:function(a,t,e){"use strict";e.r(t);var s=e(0),r=Object(s.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"advanced-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced-usage","aria-hidden":"true"}},[a._v("#")]),a._v(" Advanced Usage")]),a._v(" "),e("h2",{attrs:{id:"upload-using-command-line"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upload-using-command-line","aria-hidden":"true"}},[a._v("#")]),a._v(" Upload using Command Line "),e("Badge",{attrs:{text:"2.1.0+"}})],1),a._v(" "),e("p",[a._v("PicGo started supporting to use command line to call to PicGo clients for uploading since version 2.1.0.")]),a._v(" "),e("p",[a._v("You can use "),e("code",[a._v("upload")]),a._v(" to upload the image on your clipboard and use "),e("code",[a._v("upload xxx.jpg")]),a._v(" to upload the image in the specific path.")]),a._v(" "),e("h3",{attrs:{id:"windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows","aria-hidden":"true"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),e("p",[a._v("For Windows users, you can upload your image using "),e("code",[a._v("PATH\\PicGo.exe upload")]),a._v(", where 'PATH' is your PicGo path.")]),a._v(" "),e("h3",{attrs:{id:"macos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macos","aria-hidden":"true"}},[a._v("#")]),a._v(" macOS")]),a._v(" "),e("p",[a._v("For MacOS users, you can upload your image using "),e("code",[a._v("/Applications/PicGo.app/Contents/MacOS/PicGo upload")]),a._v(".")]),a._v(" "),e("h3",{attrs:{id:"linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux","aria-hidden":"true"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),e("p",[a._v("For Linux users, you can upload your image using "),e("code",[a._v("PATH/PicGo.AppImage upload")]),a._v(", where 'PATH' is your PicGo path.")]),a._v(" "),e("h2",{attrs:{id:"picgo-server-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#picgo-server-usage","aria-hidden":"true"}},[a._v("#")]),a._v(" PicGo-Server Usage "),e("Badge",{attrs:{text:"2.2.0+"}})],1),a._v(" "),e("p",[a._v("PicGo has a small built-in server that receives HTTP requests from other applications to upload images since "),e("code",[a._v("2.2.0")]),a._v(".")]),a._v(" "),e("p",[a._v("Default listening address: "),e("code",[a._v("127.0.0.1")]),a._v(". Default listening port: "),e("code",[a._v("36677")])]),a._v(" "),e("h3",{attrs:{id:"upload-the-image-on-clipboard-by-calling-http"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upload-the-image-on-clipboard-by-calling-http","aria-hidden":"true"}},[a._v("#")]),a._v(" Upload the image on clipboard by calling HTTP")]),a._v(" "),e("ul",[e("li",[a._v("method: "),e("code",[a._v("POST")])]),a._v(" "),e("li",[a._v("url: "),e("code",[a._v("http://127.0.0.1:36677/upload")]),a._v(" (use the default setting as an example)")])]),a._v(" "),e("p",[a._v("Then, you can upload your image.")]),a._v(" "),e("p",[a._v("Returned data:")]),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"success"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" // or "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"result"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"url"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Molunerfinn/test/PicGo/picgo-server-upload-clipboard-file.png",alt:""}})]),a._v(" "),e("h3",{attrs:{id:"upload-the-specific-image-by-calling-http"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upload-the-specific-image-by-calling-http","aria-hidden":"true"}},[a._v("#")]),a._v(" Upload the specific image by calling HTTP")]),a._v(" "),e("ul",[e("li",[a._v("method: "),e("code",[a._v("POST")])]),a._v(" "),e("li",[a._v("url: "),e("code",[a._v("http://127.0.0.1:36677/upload")]),a._v(" (use the default setting as an example)")]),a._v(" "),e("li",[a._v("request body: "),e("code",[a._v("{list: ['xxx.jpg']}")]),a._v(" must be JSON-formatted")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/12621342/71626614-1b359880-2c29-11ea-8efe-330f15116268.png",alt:""}})]),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"success"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" // or "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"result"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"url"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])},[],!1,null,null,null);t.default=r.exports}}]);