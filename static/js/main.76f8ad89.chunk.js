(this.webpackJsonpphotosearchapp=this.webpackJsonpphotosearchapp||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),o=(a(9),a(1)),s=function(e){var t=e.image,a=t.tags.split(",");return l.a.createElement("div",{className:"max-w-sm rounded-lg overflow-hidden shadow-lg m-3"},l.a.createElement("img",{src:t.webformatURL,alt:"unsplash",className:"w-full "}),l.a.createElement("div",{className:"px-6 py-4"},l.a.createElement("div",{className:"font-bold text-blue-500 text-xl mb-5"},"Photo By: ",t.user),l.a.createElement("ul",null,l.a.createElement("li",null,"Views: ",t.views),l.a.createElement("li",null,"Download: ",t.downloads),l.a.createElement("li",null,"Likes: ",t.likes),l.a.createElement("li",null,"Favorites: ",t.favorites))),l.a.createElement("div",{className:"px-6 py-4"},a.map((function(e,t){return l.a.createElement("div",{key:t,className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-grey-700 mr-3 bg-pink-300"},"#",e)}))))},i=function(e){var t=e.searchText,a=Object(n.useState)(""),c=Object(o.a)(a,2),r=c[0],s=c[1];return l.a.createElement("div",{className:"max-w-sm rounded overflow-hidden my-10 mx-auto"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(r)},className:"w-full max-w-sm"},l.a.createElement("div",{className:"flex items-center border-b py-2"},l.a.createElement("input",{className:"bg-grey w-full leading-tight focus:outline-none appearance-none",type:"text",onChange:function(e){return s(e.target.value)},placeholder:"Search images..."}),l.a.createElement("button",{className:"flex-shrink-0 bg-indigo-200 hover:bg-blue-700 border-indigo-500 rounded text-sm  text-white py-1 px-2",type:"submit"},"Search"))))};var m=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),m=Object(o.a)(r,2),u=m[0],d=m[1],p=Object(n.useState)(""),f=Object(o.a)(p,2),b=f[0],h=f[1];return Object(n.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("16145534-83bc39a171571f159338ea8c4","&q=").concat(b,"&image_type=photo&pretty=true")).then((function(e){return e.json()})).then((function(e){c(e.hits),d(!1)})).catch((function(e){return console.log(e)}))}),[b]),l.a.createElement("div",{className:"container mx-auto "},l.a.createElement("h2",{className:"text-center text-4xl font-bold"},"React & Tailwind CSS"),l.a.createElement(i,{searchText:function(e){return h(e)}}),u?l.a.createElement("h1",null," Loading ..."):l.a.createElement("div",{className:"grid grid-cols-3 gap4"},a.map((function(e){return l.a.createElement(s,{key:e.id,image:e})}))))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.76f8ad89.chunk.js.map