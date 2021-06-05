(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{214:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"配置手册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置手册","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置手册")]),t._v(" "),a("p",[t._v("PicGo的配置文件在不同系统里是不一样的。")]),t._v(" "),a("ul",[a("li",[t._v("Windows: "),a("code",[t._v("%APPDATA%\\picgo\\data.json")])]),t._v(" "),a("li",[t._v("Linux: "),a("code",[t._v("$XDG_CONFIG_HOME/picgo/data.json")]),t._v(" or "),a("code",[t._v("~/.config/picgo/data.json")])]),t._v(" "),a("li",[t._v("macOS: "),a("code",[t._v("~/Library/Application\\ Support/picgo/data.json")])])]),t._v(" "),a("p",[t._v("举例，在windows里你可以在：")]),t._v(" "),a("p",[a("code",[t._v("C:\\Users\\你的用户名\\AppData\\Roaming\\picgo\\data.json")]),t._v("找到它。")]),t._v(" "),a("p",[t._v("在linux里你可以在：")]),t._v(" "),a("p",[a("code",[t._v("~/.config/picgo/data.json")]),t._v("里找到它。")]),t._v(" "),a("p",[t._v("macOS同理。")]),t._v(" "),a("h2",{attrs:{id:"基本操作预览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本操作预览","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本操作预览")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/12621342/34242857-d177930a-e658-11e7-9688-7405851dd5e5.gif",alt:"2017-12-09 00 13 05-min"}})]),t._v(" "),a("h2",{attrs:{id:"上传区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传区","aria-hidden":"true"}},[t._v("#")]),t._v(" 上传区")]),t._v(" "),a("p",[t._v("上传区支持拖拽上传或者点击区域打开文件夹上传")]),t._v(" "),a("h2",{attrs:{id:"相册区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相册区","aria-hidden":"true"}},[t._v("#")]),t._v(" 相册区")]),t._v(" "),a("p",[t._v("支持查看你上传成功的所有图片。点击图片可以预览。点击图片下面的图标可以复制链接或者删除图片（只是删除本地数据，使其不在相册区里出现）")]),t._v(" "),a("h3",{attrs:{id:"编辑相册的图片信息（v1-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑相册的图片信息（v1-5","aria-hidden":"true"}},[t._v("#")]),t._v(" 编辑相册的图片信息（v1.5)")]),t._v(" "),a("p",[t._v("有些时候可能上传的图片的url事后需要更改，比如修改http到https，比如加上一些操作后缀（例：七牛图床支持的"),a("code",[t._v("?imgslim")]),t._v("）等等。PicGo本次的更新也让你能够更方便地管理你的图片库。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/picgo_edit_info.gif",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"选择复制的链接格式（v2-0）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择复制的链接格式（v2-0）","aria-hidden":"true"}},[t._v("#")]),t._v(" 选择复制的链接格式（v2.0）")]),t._v(" "),a("p",[t._v("之前的版本只能在上传区选择复制图片URL的链接格式，这样在相册区就不能很方便地选择复制的链接格式。2.0版本之后改进了这个用户体验，可以在相册区直接选择复制的连接格式了：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/12621342/50515502-17d07400-0ae0-11e9-80b9-c38f25b64922.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"图床区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图床区","aria-hidden":"true"}},[t._v("#")]),t._v(" 图床区")]),t._v(" "),a("h3",{attrs:{id:"smms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smms","aria-hidden":"true"}},[t._v("#")]),t._v(" SMMS "),a("Badge",{attrs:{text:"2.3.0+"}})],1),t._v(" "),a("p",[t._v("配置项及说明：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" // 通过SMMS后台获取的api token值\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("注册并登录"),a("a",{attrs:{href:"https://sm.ms/home/apitoken",target:"_blank",rel:"noopener noreferrer"}},[t._v("smms"),a("OutboundLink")],1),t._v("后台获取token值。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Molunerfinn/test/picgo/20200307182127.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"七牛图床"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七牛图床","aria-hidden":"true"}},[t._v("#")]),t._v(" 七牛图床")]),t._v(" "),a("p",[t._v("配置项及说明：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accessKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"secretKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bucket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 存储空间名\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 自定义域名\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"area"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"z0"')]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"z1"')]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"z2"')]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"na0"')]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"as0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 存储区域编号\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"options"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 网址后缀，比如?imgslim\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" // 自定义存储路径，比如img/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/12621342/34243072-191cc4ae-e65a-11e7-99f6-ebe6b7dcaf86.png",alt:"image"}})]),t._v(" "),a("p",[t._v("对应的密钥信息需要到七牛自己的"),a("a",{attrs:{href:"https://portal.qiniu.com/user/key",target:"_blank",rel:"noopener noreferrer"}},[t._v("控制台"),a("OutboundLink")],1),t._v("里找到。其中需要注意的是，自己的存储空间的区域需要确定：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/12621342/34243146-69af085a-e65a-11e7-965c-2a3d15856480.png",alt:"image"}})]),t._v(" "),a("p",[t._v("在配置文件里，存储区域对应的键是"),a("code",[t._v("area")]),t._v("，值是下图所示（如果你是用PicGo-Core或者其他非electron版本的PicGo请注意此项），比如华东的话就是"),a("code",[t._v("z0")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/12621342/50533009-e5189100-0b5c-11e9-9812-438576990828.png",alt:"image"}})]),t._v(" "),a("p",[t._v("在配置文件里，存储空间需要")]),t._v(" "),a("p",[t._v("设定上传地址是指七牛云 "),a("s",[t._v("自动分配给你的网址，或者")]),t._v(" 是你自己绑定的域名（"),a("strong",[t._v("注意要加"),a("code",[t._v("http://")]),t._v("或者"),a("code",[t._v("https://")])]),t._v("）：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/12621342/34245183-c38d9766-e663-11e7-964e-2d7a9ab9e9e9.png",alt:"image"}})]),t._v(" "),a("p",[t._v("网址后缀通常是你用到了七牛的图片处理工具的时候会用到的一些处理参数，比如图片瘦身。")]),t._v(" "),a("h3",{attrs:{id:"腾讯云cos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#腾讯云cos","aria-hidden":"true"}},[t._v("#")]),t._v(" 腾讯云COS")]),t._v(" "),a("p",[t._v("配置项及说明：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"secretId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"secretKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bucket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 存储桶名，v4和v5版本不一样\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"appId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"area"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 存储区域，例如ap-beijing-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 自定义存储路径，比如img/\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"customUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 自定义域名，注意要加http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("//或者https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("//\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v5"')]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v4"')]),t._v(" // COS版本，v4或者v5\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("从PicGo v1.5版本开始，支持COSv4和v5版本。")])]),t._v(" "),a("h4",{attrs:{id:"v4版本说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v4版本说明","aria-hidden":"true"}},[t._v("#")]),t._v(" V4版本说明")]),t._v(" "),a("p",[t._v("v4版本是这个：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/12621342/35483306-5e7ed570-047b-11e8-95a9-d56a3b4d2ba9.png",alt:"image"}})]),t._v(" "),a("p",[t._v("需要登录腾讯云控制台。打开"),a("a",{attrs:{href:"https://console.qcloud.com/cos4/secret",target:"_blank",rel:"noopener noreferrer"}},[t._v("密钥管理"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/12621342/34243294-082c97cc-e65b-11e7-9412-dbc86433a91d.png",alt:"image"}})]),t._v(" "),a("p",[t._v("按照对应的提示找到自己的"),a("code",[t._v("APPID")]),t._v("、"),a("code",[t._v("SecretId")]),t._v("、"),a("code",[t._v("SecretKey")]),t._v("。")]),t._v(" "),a("p",[t._v("存储的空间名是你的bucket名字。")]),t._v(" "),a("p",[t._v("存储的区域需要额外注意，请到bucket列表里打开需要上传的bucket空间，然后如图可以看到对应的区域以及区域代码，比如我的是"),a("code",[t._v("tj")]),t._v("：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/12621342/34243443-befa715e-e65b-11e7-8404-aa5b8938a82b.png",alt:"image"}})]),t._v(" "),a("p",[t._v("对应的区域代码如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/12621342/34243476-edcc7798-e65b-11e7-8d59-8714cd0a59aa.png",alt:"image"}})]),t._v(" "),a("p",[t._v("如果你想把图片上传到你的bucket空间的某个文件夹下，则需要在PicGo里的"),a("code",[t._v("指定存储路径")]),t._v("里加上你的文件夹路径。比如"),a("code",[t._v("temp/")]),t._v("（注意一定要加"),a("code",[t._v("/")]),t._v("）")]),t._v(" "),a("h4",{attrs:{id:"v5版本说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v5版本说明","aria-hidden":"true"}},[t._v("#")]),t._v(" V5版本说明")]),t._v(" "),a("p",[a("strong",[t._v("1.")]),t._v(" 获取你的APPID、SecretId和SecretKey")]),t._v(" "),a("p",[t._v("访问：https://console.cloud.tencent.com/cam/capi")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/get_key_id_secret.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("2.")]),t._v(" 获取bucket名以及存储区域代号")]),t._v(" "),a("p",[t._v("访问：https://console.cloud.tencent.com/cos5/bucket")]),t._v(" "),a("p",[t._v("创建一个存储桶。然后找到你的存储桶名和存储区域代号：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/get_bucket_area.png",alt:""}})]),t._v(" "),a("p",[t._v("v5版本的存储桶名称格式是"),a("code",[t._v("bucket-appId")]),t._v("，类似于"),a("code",[t._v("xxxx-12312313")]),t._v("。存储区域代码和v4版本的也有所区别，v5版本的如我的是"),a("code",[t._v("ap-beijing")]),t._v("，别复制错了。")]),t._v(" "),a("p",[a("strong",[t._v("3.")]),t._v(" 选择v5版本并点击确定")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/choose_v5.png",alt:""}})]),t._v(" "),a("p",[t._v("然后记得点击"),a("code",[t._v("设为默认图床")]),t._v("，这样上传才会默认走的是腾讯云COS。")]),t._v(" "),a("h3",{attrs:{id:"又拍云"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#又拍云","aria-hidden":"true"}},[t._v("#")]),t._v(" 又拍云")]),t._v(" "),a("p",[t._v("配置文件及说明：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bucket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 存储空间名，及你的服务名\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"operator"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 操作员\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 密码\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"options"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 针对图片的一些后缀处理参数\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 自定义存储路径，比如img/\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" // 加速域名，注意要加http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("//或者https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("//\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/12621342/34319574-a6e141d0-e820-11e7-9b20-0ec0eb9b36af.png",alt:"image"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/12621342/34319588-01510cd6-e821-11e7-9eeb-e61265af53ad.png",alt:"image"}})]),t._v(" "),a("p",[t._v("存储空间名即为你的服务名，加速域名即为你又拍云分配给你的域名或者是你自己绑定的域名。请注意，加速域名需要加"),a("code",[t._v("http://")]),t._v("或"),a("code",[t._v("https://")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/12621342/34319600-656c8d80-e821-11e7-8b02-34aa31a2d53a.png",alt:"image"}})]),t._v(" "),a("p",[t._v("操作员即为你自己为该存储空间设定的操作员名，密码即为对应的密码。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/12621342/34319609-9fb3307a-e821-11e7-9746-b2e82417ba7f.png",alt:"image"}})]),t._v(" "),a("p",[t._v("网址后缀为你针对图片进行的一些处理参数。")]),t._v(" "),a("p",[t._v("由于又拍云官方没有对云存储有一个直观的控制面板，所以推荐可以采用第三方web面板来查看和操作：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/xcuts/UPYUN-API-Web-Tool",target:"_blank",rel:"noopener noreferrer"}},[t._v("又拍云存储Web版操作工具"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"github图床"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github图床","aria-hidden":"true"}},[t._v("#")]),t._v(" GitHub图床")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"repo"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 仓库名，格式是username/reponame\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // github token\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 自定义存储路径，比如img/\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"customUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 自定义域名，注意要加http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("//或者https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("//\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"branch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" // 分支名，默认是main\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("1.")]),t._v(" 首先你得有一个GitHub账号。注册GitHub就不用我多言。")]),t._v(" "),a("p",[a("strong",[t._v("2.")]),t._v(" 新建一个仓库")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/create_new_repo.png",alt:""}})]),t._v(" "),a("p",[t._v("记下你取的仓库名。")]),t._v(" "),a("p",[a("strong",[t._v("3.")]),t._v(" 生成一个token用于PicGo操作你的仓库：")]),t._v(" "),a("p",[t._v("访问：https://github.com/settings/tokens")]),t._v(" "),a("p",[t._v("然后点击"),a("code",[t._v("Generate new token")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/generate_new_token.png",alt:""}})]),t._v(" "),a("p",[t._v("把repo的勾打上即可。然后翻到页面最底部，点击"),a("code",[t._v("Generate token")]),t._v("的绿色按钮生成token。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/20180508210435.png",alt:""}})]),t._v(" "),a("p",[t._v("**注意：**这个token生成后只会显示一次！你要把这个token复制一下存到其他地方以备以后要用。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/copy_token.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("4.")]),t._v(" 配置PicGo")]),t._v(" "),a("p",[t._v("**注意：**仓库名的格式是"),a("code",[t._v("用户名/仓库")]),t._v("，比如我创建了一个叫做"),a("code",[t._v("test")]),t._v("的仓库，在PicGo里我要设定的仓库名就是"),a("code",[t._v("Molunerfinn/test")]),t._v("。一般我们选择"),a("code",[t._v("main")]),t._v("分支即可。然后记得点击确定以生效，然后可以点击"),a("code",[t._v("设为默认图床")]),t._v("来确保上传的图床是GitHub。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/setup_github.png",alt:""}})]),t._v(" "),a("p",[t._v("至此配置完毕，已经可以使用了。当你上传的时候，你会发现你的仓库里也会增加新的图片了：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/success.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"阿里云oss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阿里云oss","aria-hidden":"true"}},[t._v("#")]),t._v(" 阿里云OSS")]),t._v(" "),a("p",[t._v("配置项及说明：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accessKeyId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accessKeySecret"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bucket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 存储空间名\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"area"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 存储区域代号\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // 自定义存储路径\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"customUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" // 自定义域名，注意要加http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("//或者https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("//\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/aliyun.png",alt:""}})]),t._v(" "),a("p",[t._v("首先先在阿里云OSS的"),a("a",{attrs:{href:"https://usercenter.console.aliyun.com/#/manage/ak",target:"_blank",rel:"noopener noreferrer"}},[t._v("控制台"),a("OutboundLink")],1),t._v("里找到你的"),a("code",[t._v("accessKeyId")]),t._v("和"),a("code",[t._v("accessKeySecret")]),t._v("：\n"),a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/aliyun-key.png",alt:""}})]),t._v(" "),a("p",[t._v("创建一个"),a("code",[t._v("bucket")]),t._v("后，存储空间名即为"),a("code",[t._v("bucket")]),t._v(":")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/aliyun-bucket.png",alt:""}})]),t._v(" "),a("p",[t._v("确认你的"),a("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/31837.htm?spm=a2c63.p38356.a3.3.179112f0PBtYui",target:"_blank",rel:"noopener noreferrer"}},[t._v("存储区域"),a("OutboundLink")],1),t._v("的代码：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/aliyun-area.png",alt:""}})]),t._v(" "),a("p",[t._v("也可以在bucket页面找到：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/aliyun-bucket-2.png",alt:""}}),t._v("\n如上图，存储区域就是"),a("code",[t._v("oss-cn-beijing")])]),t._v(" "),a("p",[t._v("存储路径比如"),a("code",[t._v("img/")]),t._v("的话，上传的图片会默认放在OSS的"),a("code",[t._v("img")]),t._v("文件夹下。注意存储路径一定要以"),a("code",[t._v("/")]),t._v("结尾！存储路径是可选的，如果不需要请留空。")]),t._v(" "),a("h3",{attrs:{id:"imgur图床"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#imgur图床","aria-hidden":"true"}},[t._v("#")]),t._v(" Imgur图床")]),t._v(" "),a("p",[t._v("配置项及说明：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // imgur的clientId\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"proxy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" // 代理地址，仅支持http代理\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/imgur-option.png",alt:""}})]),t._v(" "),a("p",[t._v("登录Imgur后，在"),a("a",{attrs:{href:"https://api.imgur.com/oauth2/addclient",target:"_blank",rel:"noopener noreferrer"}},[t._v("此处"),a("OutboundLink")],1),t._v("生成你的ClientId，记得选第二项，不需要callbackurl的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/imgur-clientid.png",alt:""}})]),t._v(" "),a("p",[t._v("于是你可以拿到你的clientId:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/imgur-client-id-2.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("注意")]),t._v("：imgur貌似对中国大陆的IP和请求做出了限制，所以如果clientId没错的情况下无法上传图片的时候，可以考虑配置代理设置。默认只支持HTTP代理。如果觉得设置麻烦的可以考虑使用SM.MS图床。")]),t._v(" "),a("h3",{attrs:{id:"更多其他图床"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多其他图床","aria-hidden":"true"}},[t._v("#")]),t._v(" 更多其他图床")]),t._v(" "),a("p",[t._v("本体将不再增加其他图床支持，如果你有其他图床的上传需求，请自行参考"),a("a",{attrs:{href:"https://picgo.github.io/PicGo-Core-Doc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PicGo-Core"),a("OutboundLink")],1),t._v("，为PicGo开发第三方图床插件吧！")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"picgo设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picgo设置","aria-hidden":"true"}},[t._v("#")]),t._v(" PicGo设置")]),t._v(" "),a("h3",{attrs:{id:"设置日志文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置日志文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置日志文件")]),t._v(" "),a("p",[t._v("从"),a("code",[t._v("v2.1.0")]),t._v("开始PicGo支持记录你上传的日志，如果有什么报错等信息，可以及时反馈给开发者。你可以在这个设置里面打开日志文件查看，也可以设置输出的日志类型（比如成功、失败或者不输出等）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/docs/logs",alt:"logs"}})]),t._v(" "),a("h3",{attrs:{id:"自定义快捷键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义快捷键","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义快捷键")]),t._v(" "),a("p",[t._v("PicGo v1.4.0版本开始支持自定义快捷键（默认快捷键是"),a("code",[t._v("Cmd+Shift+P")]),t._v("【Mac】或者"),a("code",[t._v("Ctrl+Shift+P")]),t._v("【Windows】），点击侧边栏PicGo设置选中修改快捷键：")]),t._v(" "),a("p",[t._v("会打开快捷键面板（v2.2.0+），可以选择禁用或者启用快捷键：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Molunerfinn/test/picgo/20200101204942.png",alt:""}})]),t._v(" "),a("p",[t._v("点击「编辑」，在打开的dialog里，点击input框，然后按下你想要的快捷键（也可以是组合键）。然后点击"),a("strong",[t._v("确定保存")]),t._v("（否则不生效！）")]),t._v(" "),a("p",[t._v("PicGo从2.2.0+版本添加了快捷键系统，插件也可以添加自己的快捷键，并且添加了快捷键会显示在快捷键面板里。可以方便启用或者禁用！")]),t._v(" "),a("h3",{attrs:{id:"自定义链接格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义链接格式","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义链接格式")]),t._v(" "),a("p",[t._v("PicGo预置的有四种链接格式："),a("code",[t._v("Markdown")]),t._v("\\"),a("code",[t._v("HTML")]),t._v("\\"),a("code",[t._v("URL")]),t._v("\\"),a("code",[t._v("UBB")]),t._v("。如果你都不喜欢，想要自定义链接格式，可以选择"),a("code",[t._v("Custom")]),t._v("，然后在PicGo设置里点击"),a("code",[t._v("自定义链接格式")]),t._v("，然后你可以配置自己想要的复制的链接格式。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("v2.1.2开始支持"),a("code",[t._v("$fileName")]),t._v("设置文件名。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/docs/customUrl",alt:"customUrl"}})]),t._v(" "),a("h3",{attrs:{id:"开关更新助手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开关更新助手","aria-hidden":"true"}},[t._v("#")]),t._v(" 开关更新助手")]),t._v(" "),a("p",[t._v("PicGo每次启动的时候会去检查最新版本。如果当前版本低于最新版本会提示你更新。如果你不想接到这条消息，那么可以在PicGo设置里把"),a("code",[t._v("打开更新助手")]),t._v("这个选项关闭。"),a("strong",[t._v("推荐大家打开这个开关，新的版本通常会修复bug已经加入新的功能，让PicGo更好用~")])]),t._v(" "),a("h3",{attrs:{id:"开机自启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开机自启","aria-hidden":"true"}},[t._v("#")]),t._v(" 开机自启")]),t._v(" "),a("p",[t._v("选择是否开机自启动。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/autoStart.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"上传前重命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传前重命名","aria-hidden":"true"}},[t._v("#")]),t._v(" 上传前重命名")]),t._v(" "),a("p",[t._v("如果你想在图片上传前能够有机会改动你的图片名，那么可以选择开启图片上传前重命名：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/rename_before_upload.png",alt:""}})]),t._v(" "),a("p",[t._v("之后你在上传的时候就会弹出一个小窗口让你重命名文件。如果你不想重命名，点击确定、取消或者直接关闭这个窗口都是可以的。如果你想要重命名就在输入框里输入想要更改的名字，然后点击确定即可。另外这个特性也支持批量上传，如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/picgo_rename.gif",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"选择想要显示的图床"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择想要显示的图床","aria-hidden":"true"}},[t._v("#")]),t._v(" 选择想要显示的图床")]),t._v(" "),a("p",[t._v("很多时候你并不会使用上PicGo给你提供的全部的图床。所以为了精简显示你可以只选择你想要的图床来显示，这样侧边栏也就不会出现滚动条了。不过需要注意的是，这个仅仅是显示/隐藏而并不是剔除相应的功能。假如你隐藏了七牛云，你依然是可以通过七牛云来上传图片的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/picbed-choose.gif",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"上传提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传提示","aria-hidden":"true"}},[t._v("#")]),t._v(" 上传提示")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://camo.githubusercontent.com/763757f281c0a19ee526f26bbb1a2814f164879b/68747470733a2f2f692e6c6f6c692e6e65742f323031382f30362f30352f356231363832666134316337302e706e67",alt:""}}),t._v("\n打开之后会在每次上传图片的时候弹出提示框提示正在上传。 "),a("strong",[t._v("如果你发现打开之后，没有效果，请注意看看是不是你关闭了系统级别的消息通知选项，因为PicGo调用的是系统级别的消息通知栏。")])]),t._v(" "),a("h3",{attrs:{id:"自动时间戳命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动时间戳命名","aria-hidden":"true"}},[t._v("#")]),t._v(" 自动时间戳命名")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://camo.githubusercontent.com/25e5d680bfd19a086611871ac4621c5b079a9c99/68747470733a2f2f692e6c6f6c692e6e65742f323031382f30362f30352f356231363833623334366236372e706e67",alt:""}}),t._v("\n开启之后会自动将上传的文件名替换成时间戳：\n![](https://user-images.githubusercontent.com/12621342/40976264-2de18afe-6900-11e8-8f35-746820632eb8.png）")]),t._v(" "),a("h3",{attrs:{id:"检查更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查更新","aria-hidden":"true"}},[t._v("#")]),t._v(" 检查更新")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/12621342/40976407-ad43d07c-6900-11e8-854f-15e1c41a7d8d.png",alt:""}}),t._v("\n用以主动发起更新检查。")]),t._v(" "),a("h3",{attrs:{id:"代理设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代理设置","aria-hidden":"true"}},[t._v("#")]),t._v(" 代理设置 "),a("Badge",{attrs:{text:"2.0.0+"}})],1),t._v(" "),a("p",[t._v("2.0版本之后，支持简单设定HTTP代理。在"),a("code",[t._v("设置代理")]),t._v("一项处点击即可。 "),a("strong",[t._v("未来不会支持复杂的代理设置，因为跟底层有关，只能支持简单HTTP代理。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/12621342/50515474-ea83c600-0adf-11e9-8022-52f4ab9e0ea5.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"打开配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打开配置文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 打开配置文件 "),a("Badge",{attrs:{text:"2.0.0+"}})],1),t._v(" "),a("p",[t._v("2.0版本之后，你可以简单通过点击"),a("code",[t._v("打开配置文件")]),t._v("来打开配置文件，查看你上传的图片、你的图床设置等。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/12621342/50515474-ea83c600-0adf-11e9-8022-52f4ab9e0ea5.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"picgo-server设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picgo-server设置","aria-hidden":"true"}},[t._v("#")]),t._v(" PicGo-Server设置 "),a("Badge",{attrs:{text:"2.2.0+"}})],1),t._v(" "),a("p",[t._v("2.2版本之后，PicGo内部会默认开启一个小型的服务器，用于配合其他应用来调用PicGo进行上传。监听的地址推荐就默认的 "),a("code",[t._v("127.0.0.1")]),t._v(" （本机），端口推荐默认的 "),a("code",[t._v("36677")]),t._v("。当然如果你不想要开启也可以选择关闭，只不过推荐你可以开启~可以配合一些第三方工具实现很方便的上传工作流。")]),t._v(" "),a("p",[t._v("关于Server的调用可以参考"),a("router-link",{attrs:{to:"/zh/guide/advance.html#PicGo-Server的使用"}},[t._v("高级技巧")]),t._v("的说明。")],1),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Molunerfinn/test/test/picgo-server.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"插件设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件设置","aria-hidden":"true"}},[t._v("#")]),t._v(" 插件设置 "),a("Badge",{attrs:{text:"2.0.0+"}})],1),t._v(" "),a("p",[t._v("2.0版本之后，你可以简单通过"),a("code",[t._v("插件设置")]),t._v("页面，安装、更新、禁用、卸载、配置、使用插件。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/12621342/50515434-bc9e8180-0adf-11e9-8c71-0e39973c06b1.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("你必须安装"),a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),a("OutboundLink")],1),t._v("之后才能安装PicGo的插件，因为PicGo要使用"),a("code",[t._v("npm")]),t._v("来安装插件。")])]),t._v(" "),a("p",[t._v("在插件界面的搜索栏搜索插件名。PicGo的插件名以"),a("code",[t._v("picgo-plugin-")]),t._v("为前缀，你只需要搜前缀后的名字即可。比如一个"),a("code",[t._v("picgo-plugin-wow")]),t._v("的插件你只需要搜索"),a("code",[t._v("wow")]),t._v("即可。")]),t._v(" "),a("p",[t._v("搜到了插件之后只要点击右下角的"),a("code",[t._v("安装")]),t._v("即可。如果遇到"),a("code",[t._v("未对GUI优化")]),t._v("的提示，可以询问一下插件作者，这个插件适不适合在PicGo软件上使用，否则它有可能只是个命令行插件。")]),t._v(" "),a("h3",{attrs:{id:"更新、卸载与禁用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新、卸载与禁用","aria-hidden":"true"}},[t._v("#")]),t._v(" 更新、卸载与禁用")]),t._v(" "),a("p",[t._v("皆可点击插件右下角的齿轮按钮，在弹出的菜单中选择。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("其中如果你选择了"),a("code",[t._v("更新")]),t._v("之后，PicGo需要重启一遍才能使用更新后的插件，PicGo会在插件页面给出"),a("code",[t._v("重启")]),t._v("按钮，点击即可。 "),a("strong",[t._v("只是关闭主窗口再打开是不行的，必须完全退出PicGo进程再打开PicGo。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/20190113155828.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("有的插件拥有配置项，可以直接点击右下角齿轮，点击"),a("code",[t._v("配置xxx")]),t._v("进行配置：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/20190113160001.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/20190113160029.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("有的插件拥有自有菜单项，可以直接点击右下角齿轮后，找到插件自有菜单区，点击使用：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2019/01/12/5c39a2f60a32a.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2019/01/12/5c39aa4dab0b4.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2019/01/12/5c39aea61e80d.gif",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"寻找插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#寻找插件","aria-hidden":"true"}},[t._v("#")]),t._v(" 寻找插件")]),t._v(" "),a("p",[t._v("你可以在PicGo官方的"),a("a",{attrs:{href:"https://github.com/PicGo/Awesome-PicGo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Awesome-PicGo"),a("OutboundLink")],1),t._v("里找到超棒的PicGo插件和应用了PicGo的应用或者项目~")])])},[],!1,null,null,null);s.default=r.exports}}]);