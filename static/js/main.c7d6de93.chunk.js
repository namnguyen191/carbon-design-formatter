(this["webpackJsonponline-formatter"]=this["webpackJsonponline-formatter"]||[]).push([[0],{104:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=104},153:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var a,r=n(10),c=n(0),i=n.n(c),s=n(65),o=n.n(s),l=n(50),d=n(45),j=n(119),b=n(120),u=n(13),h=n(117),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,190)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},x=n(12),g=n(183),p=n(187),f=n(166),m=n(15),v=n(96),C=n(118),S=n(4),w=function(e){var t=e.initialValue,n=e.onChange,a=e.language,r=Object(c.useRef)(null);return Object(S.jsx)("div",{className:"editor-wrapper",children:Object(S.jsx)(C.a,{onMount:function(e,t){r.current=e},onChange:function(e,t){n&&n(e)},value:t,theme:"vs-dark",language:null!==a&&void 0!==a?a:"javascript",height:"100%",options:{wordWrap:"on",minimap:{enabled:!1},showUnused:!1,folding:!1,lineNumbersMinChars:3,fontSize:16,scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2}})})},N=n(107),_=n.n(N),y=n(83),E=n.n(y),k=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(m.a)(r,2),s=i[0],o=i[1],l=Object(c.useState)(),d=Object(m.a)(l,2),j=d[0],b=d[1],u=function(){if("str"===j){var e;try{'"'===(r=(r=n).trim())[0]&&(r=r.substring(1)),'"'===r[r.length-1]&&(r=r.substring(0,r.length-1)),r=r.replace(/\\/g,""),e=_.a.format(r,{parser:"graphql",plugins:[E.a]})}catch(c){return void o("Syntax Error!")}o(e)}else if("graphql"===j){var t;try{t=function(e){return e=e.replace(/"/g,'\\"').replace(/\r?\n|\r/g," ").replace(/\s\s/g,""),'"'.concat(e,'"')}(s)}catch(c){return void a("Syntax Error!")}a(t)}else console.log("Fail to track focus: ",j);var r};return Object(S.jsxs)("div",{className:"graphql-formatter-container",children:[Object(S.jsx)(v.a,{defaultSize:{width:400,height:400},onClick:function(){return b("graphql")},children:Object(S.jsx)(w,{language:"graphql",initialValue:s,onChange:function(e){b("graphql"),o(e)}})}),Object(S.jsx)("img",{src:"/carbon-design-formatter/221-arrow-10.gif",alt:"Convert Button",onClick:function(){u()}}),Object(S.jsx)(v.a,{defaultSize:{width:400,height:400},onClick:function(){return b("str")},children:Object(S.jsx)("textarea",{className:"transformed-text",value:n,onChange:function(e){a(e.target.value),b("str")},spellCheck:!1})})]})},T=function(){var e={selected:0,role:"navigation"},t={role:"presentation",tabIndex:0};return Object(S.jsxs)("div",{className:"bx--grid bx--grid--full-width landing-page",children:[Object(S.jsx)("div",{className:"bx--row landing-page__banner",children:Object(S.jsx)("div",{className:"bx--col-lg-16",children:Object(S.jsx)("h1",{className:"landing-page__heading",children:"Design & build with Carbon"})})}),Object(S.jsx)("div",{className:"bx--row landing-page__r2",children:Object(S.jsx)("div",{className:"bx--col bx--no-gutter",children:Object(S.jsxs)(p.a,Object(r.a)(Object(r.a)({},e),{},{children:[Object(S.jsx)(f.a,Object(r.a)(Object(r.a)({},t),{},{label:"GraphQL",children:Object(S.jsx)("div",{className:"bx--grid bx--grid--no-gutter bx--grid--full-width",children:Object(S.jsx)("div",{className:"bx--row landing-page__tab-content",children:Object(S.jsxs)("div",{className:"bx--col-md-4 bx--col-lg-7",children:[Object(S.jsx)("h2",{className:"landing-page__subheading",children:"GraphQL Query"}),Object(S.jsx)(k,{})]})})})})),Object(S.jsx)(f.a,Object(r.a)(Object(r.a)({},t),{},{label:"Transformation",children:Object(S.jsx)("div",{className:"bx--grid bx--grid--no-gutter bx--grid--full-width",children:Object(S.jsx)("div",{className:"bx--row landing-page__tab-content",children:Object(S.jsx)("div",{className:"bx--col-lg-16",children:"Not yet supported! So do it yourself u lazy bump"})})})}))]}))})})]})},A=n(109),P=n(185),D=n(188),L=n(168),z=n(169),R=n(186),U=n(184),F=n(86),B=n(84),I=n(89),q=n(91),H=n(92),G=n(90),M=n(85),W=n(87),K=n(48),Q=n(88),V=function(e){var t=e.rows,n=e.headers,a=function(e){var n=t.find((function(t){return t.id===e}));return n?n.description:""};return Object(S.jsx)(U.a,{rows:t,headers:n,render:function(e){var t=e.rows,n=e.headers,c=e.getHeaderProps,s=e.getRowProps,o=e.getTableProps;return Object(S.jsx)(F.a,{title:"Carbon Repositories",description:"A collection of public Carbon repositories.",children:Object(S.jsxs)(B.a,Object(r.a)(Object(r.a)({},o()),{},{children:[Object(S.jsx)(I.a,{children:Object(S.jsxs)(q.a,{children:[Object(S.jsx)(H.a,{}),n.map((function(e){return Object(S.jsx)(G.a,Object(r.a)(Object(r.a)({},c({header:e})),{},{children:e.header}))}))]})}),Object(S.jsx)(M.a,{children:t.map((function(e){return Object(S.jsxs)(i.a.Fragment,{children:[Object(S.jsx)(W.a,Object(r.a)(Object(r.a)({},s({row:e})),{},{children:e.cells.map((function(e){return Object(S.jsx)(K.a,{children:e.value},e.id)}))})),Object(S.jsx)(Q.a,{colSpan:n.length+1,children:Object(S.jsx)("p",{children:a(e.id)})})]},e.id)}))})]}))})}})},J=Object(P.a)(a||(a=Object(A.a)(["\n  query REPO_QUERY {\n    # Let's use carbon as our organization\n    organization(login: \"carbon-design-system\") {\n      # We'll grab all the repositories in one go. To load more resources\n      # continuously, see the advanced topics.\n      repositories(first: 75, orderBy: { field: UPDATED_AT, direction: DESC }) {\n        totalCount\n        nodes {\n          url\n          homepageUrl\n          issues(filterBy: { states: OPEN }) {\n            totalCount\n          }\n          stargazers {\n            totalCount\n          }\n          releases(first: 1) {\n            totalCount\n            nodes {\n              name\n            }\n          }\n          name\n          updatedAt\n          createdAt\n          description\n          id\n        }\n      }\n    }\n  }\n"]))),Y=[{key:"name",header:"Name"},{key:"createdAt",header:"Created"},{key:"updatedAt",header:"Updated"},{key:"issueCount",header:"Open Issues"},{key:"stars",header:"Stars"},{key:"links",header:"Links"}],X=function(e){var t=e.url,n=e.homepageUrl;return Object(S.jsxs)("ul",{style:{display:"flex"},children:[Object(S.jsx)("li",{children:Object(S.jsx)(L.a,{href:t,children:"GitHub"})}),n&&Object(S.jsxs)("li",{children:[Object(S.jsx)("span",{children:"\xa0|\xa0"}),Object(S.jsx)(L.a,{href:n,children:"Homepage"})]})]})},Z=function(){var e=Object(c.useState)(0),t=Object(m.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(0),s=Object(m.a)(i,2),o=s[0],l=s[1],d=Object(c.useState)(10),j=Object(m.a)(d,2),b=j[0],u=j[1];return Object(S.jsx)("div",{className:"bx--grid bx--grid--full-width bx--grid--no-gutter repo-page",children:Object(S.jsx)("div",{className:"bx--row repo-page__r1",children:Object(S.jsx)("div",{className:"bx--col-lg-16",children:Object(S.jsx)(D.a,{query:J,children:function(e){var t=e.loading,c=e.error,i=e.data;if(t)return Object(S.jsx)(z.a,{columnCount:Y.length+1,rowCount:10,headers:Y});if(c)return"Error! ".concat(c.message);var s=i.organization.repositories;a(s.totalCount);var d=function(e){return e.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{key:e.id,stars:e.stargazers.totalCount,issueCount:e.issues.totalCount,createdAt:new Date(e.createdAt).toLocaleDateString(),updatedAt:new Date(e.updatedAt).toLocaleDateString(),links:Object(S.jsx)(X,{url:e.url,homepageUrl:e.homepageUrl})})}))}(s.nodes);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(V,{headers:Y,rows:d.slice(o,o+b)}),Object(S.jsx)(R.a,{totalItems:n,backwardText:"Previous page",forwardText:"Next page",pageSize:b,pageSizes:[5,10,15,25],itemsPerPageText:"Items per page",onChange:function(e){var t=e.page,n=e.pageSize;n!==b&&u(n),l(n*(t-1))}})]})}})})})})},$=n(170),ee=n(171),te=n(172),ne=n(189),ae=n(173),re=n(174),ce=n(175),ie=n(176),se=n(177),oe=n(178),le=n(179),de=n(180),je=n(181),be=n(182),ue=n(121),he=function(){return Object(S.jsx)($.a,{render:function(e){var t=e.isSideNavExpanded,n=e.onClickSideNavExpand;return Object(S.jsxs)(ee.a,{"aria-label":"IBM Carbon Formatter",children:[Object(S.jsx)(te.a,{}),Object(S.jsx)(ne.a,{"aria-label":"Open menu",onClick:n,isActive:t}),Object(S.jsx)(ae.a,{element:l.b,to:"/",prefix:"IBM Carbon",children:"IBM Formatter"}),Object(S.jsx)(re.a,{"aria-label":"Codes Repo",children:Object(S.jsx)(ce.a,{element:l.b,to:"/repos",children:"GitHub Repo"})}),Object(S.jsx)(ie.a,{"aria-label":"Side navigation",expanded:t,isPersistent:!1,children:Object(S.jsx)(se.a,{children:Object(S.jsx)(oe.a,{children:Object(S.jsx)(ce.a,{element:l.b,to:"/repos",children:"GitHub Repo"})})})}),Object(S.jsxs)(le.a,{children:[Object(S.jsx)(de.a,{"aria-label":"Notifications",children:Object(S.jsx)(je.a,{})}),Object(S.jsx)(de.a,{"aria-label":"User Avatar",children:Object(S.jsx)(be.a,{})}),Object(S.jsx)(de.a,{"aria-label":"App Switcher",children:Object(S.jsx)(ue.a,{})})]})]})}})},Oe=(n(153),function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(he,{}),Object(S.jsx)(g.a,{children:Object(S.jsxs)(x.c,{children:[Object(S.jsx)(x.a,{exact:!0,path:"/",component:T}),Object(S.jsx)(x.a,{path:"/repos",component:Z})]})})]})}),xe=(n(154),new j.a),ge=Object(b.a)({uri:"https://api.github.com/graphql"}),pe=Object(h.a)((function(e,t){var n=t.headers;return{headers:Object(r.a)(Object(r.a)({},n),{},{authorization:"Bearer ".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/carbon-design-formatter",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN)})}})),fe=new d.a({cache:xe,link:pe.concat(ge)});o.a.render(Object(S.jsx)(u.a,{client:fe,children:Object(S.jsx)(l.a,{children:Object(S.jsx)(Oe,{})})}),document.getElementById("root")),O()}},[[155,1,2]]]);
//# sourceMappingURL=main.c7d6de93.chunk.js.map