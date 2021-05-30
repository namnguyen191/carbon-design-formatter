(this["webpackJsonponline-formatter"]=this["webpackJsonponline-formatter"]||[]).push([[0],{136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n,r=a(9),c=a(0),i=a.n(c),s=a(48),l=a.n(s),o=a(39),j=a(34),d=a(106),b=a(107),u=a(13),h=a(104),O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,173)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},g=a(12),x=a(166),p=a(170),f=a(150),m=a(15),v=a(77),C=a(105),w=a(50),y=a.n(w),N=(a(93),a(4)),S=function(e){var t=e.initialValue,a=e.onChange,n=e.language,r=Object(c.useRef)(null);return Object(N.jsx)("div",{className:"editor-wrapper",children:Object(N.jsx)(C.a,{onMount:function(e,t){r.current=e},onChange:function(e,t){a&&a(e)},value:t,theme:"vs-dark",language:null!==n&&void 0!==n?n:"javascript",height:"100%",options:{wordWrap:"on",minimap:{enabled:!1},showUnused:!1,folding:!1,lineNumbersMinChars:3,fontSize:16,scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2}})})},k=a(94),_=a.n(k),A=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),i=Object(m.a)(r,2),s=i[0],l=i[1],o=Object(c.useState)(),j=Object(m.a)(o,2),d=j[0],b=j[1],u=function(){if("str"===d){var e;try{r=(r=a).replace(/\//g,""),e=y.a.format(r,{parser:"graphql",plugins:[_.a]})}catch(c){return void l("Syntax Error!")}l(e)}else if("graphql"===d){var t;try{console.log(s),t=function(e){return e.replace(/"/g,'/"').replace(/\r?\n|\r/g,"").replace(/\s\s/g,"")}(s)}catch(c){return void n("Syntax Error!")}n(t)}else console.log("Fail to track focus: ",d);var r};return Object(N.jsxs)("div",{className:"graphql-formatter-container",children:[Object(N.jsx)(v.a,{defaultSize:{width:400,height:400},children:Object(N.jsx)(S,{language:"graphql",initialValue:s,onChange:function(e){b("graphql"),l(e)}})}),Object(N.jsx)("img",{src:"/221-arrow-10.gif",alt:"Convert Button",onClick:function(){u()}}),Object(N.jsx)(v.a,{defaultSize:{width:400,height:400},children:Object(N.jsx)("textarea",{className:"transformed-text",value:a,onChange:function(e){n(e.target.value),b("str")},spellCheck:!1})})]})},z=function(){var e={selected:0,role:"navigation"},t={role:"presentation",tabIndex:0};return Object(N.jsxs)("div",{className:"bx--grid bx--grid--full-width landing-page",children:[Object(N.jsx)("div",{className:"bx--row landing-page__banner",children:Object(N.jsx)("div",{className:"bx--col-lg-16",children:Object(N.jsx)("h1",{className:"landing-page__heading",children:"Design & build with Carbon"})})}),Object(N.jsx)("div",{className:"bx--row landing-page__r2",children:Object(N.jsx)("div",{className:"bx--col bx--no-gutter",children:Object(N.jsxs)(p.a,Object(r.a)(Object(r.a)({},e),{},{children:[Object(N.jsx)(f.a,Object(r.a)(Object(r.a)({},t),{},{label:"GraphQL",children:Object(N.jsx)("div",{className:"bx--grid bx--grid--no-gutter bx--grid--full-width",children:Object(N.jsx)("div",{className:"bx--row landing-page__tab-content",children:Object(N.jsxs)("div",{className:"bx--col-md-4 bx--col-lg-7",children:[Object(N.jsx)("h2",{className:"landing-page__subheading",children:"GraphQL Query"}),Object(N.jsx)(A,{})]})})})})),Object(N.jsx)(f.a,Object(r.a)(Object(r.a)({},t),{},{label:"Transformation",children:Object(N.jsx)("div",{className:"bx--grid bx--grid--no-gutter bx--grid--full-width",children:Object(N.jsx)("div",{className:"bx--row landing-page__tab-content",children:Object(N.jsx)("div",{className:"bx--col-lg-16",children:"Rapidly build beautiful and accessible experiences. The Carbon kit contains all resources you need to get started."})})})}))]}))})})]})},E=a(96),P=a(168),L=a(171),T=a(152),B=a(153),F=a(169),D=a(167),I=a(67),R=a(65),U=a(70),q=a(72),H=a(73),M=a(71),G=a(66),Y=a(68),Q=a(37),J=a(69),K=function(e){var t=e.rows,a=e.headers,n=function(e){var a=t.find((function(t){return t.id===e}));return a?a.description:""};return Object(N.jsx)(D.a,{rows:t,headers:a,render:function(e){var t=e.rows,a=e.headers,c=e.getHeaderProps,s=e.getRowProps,l=e.getTableProps;return Object(N.jsx)(I.a,{title:"Carbon Repositories",description:"A collection of public Carbon repositories.",children:Object(N.jsxs)(R.a,Object(r.a)(Object(r.a)({},l()),{},{children:[Object(N.jsx)(U.a,{children:Object(N.jsxs)(q.a,{children:[Object(N.jsx)(H.a,{}),a.map((function(e){return Object(N.jsx)(M.a,Object(r.a)(Object(r.a)({},c({header:e})),{},{children:e.header}))}))]})}),Object(N.jsx)(G.a,{children:t.map((function(e){return Object(N.jsxs)(i.a.Fragment,{children:[Object(N.jsx)(Y.a,Object(r.a)(Object(r.a)({},s({row:e})),{},{children:e.cells.map((function(e){return Object(N.jsx)(Q.a,{children:e.value},e.id)}))})),Object(N.jsx)(J.a,{colSpan:a.length+1,children:Object(N.jsx)("p",{children:n(e.id)})})]},e.id)}))})]}))})}})},V=Object(P.a)(n||(n=Object(E.a)(["\n  query REPO_QUERY {\n    # Let's use carbon as our organization\n    organization(login: \"carbon-design-system\") {\n      # We'll grab all the repositories in one go. To load more resources\n      # continuously, see the advanced topics.\n      repositories(first: 75, orderBy: { field: UPDATED_AT, direction: DESC }) {\n        totalCount\n        nodes {\n          url\n          homepageUrl\n          issues(filterBy: { states: OPEN }) {\n            totalCount\n          }\n          stargazers {\n            totalCount\n          }\n          releases(first: 1) {\n            totalCount\n            nodes {\n              name\n            }\n          }\n          name\n          updatedAt\n          createdAt\n          description\n          id\n        }\n      }\n    }\n  }\n"]))),W=[{key:"name",header:"Name"},{key:"createdAt",header:"Created"},{key:"updatedAt",header:"Updated"},{key:"issueCount",header:"Open Issues"},{key:"stars",header:"Stars"},{key:"links",header:"Links"}],X=function(e){var t=e.url,a=e.homepageUrl;return Object(N.jsxs)("ul",{style:{display:"flex"},children:[Object(N.jsx)("li",{children:Object(N.jsx)(T.a,{href:t,children:"GitHub"})}),a&&Object(N.jsxs)("li",{children:[Object(N.jsx)("span",{children:"\xa0|\xa0"}),Object(N.jsx)(T.a,{href:a,children:"Homepage"})]})]})},Z=function(){var e=Object(c.useState)(0),t=Object(m.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(0),s=Object(m.a)(i,2),l=s[0],o=s[1],j=Object(c.useState)(10),d=Object(m.a)(j,2),b=d[0],u=d[1];return Object(N.jsx)("div",{className:"bx--grid bx--grid--full-width bx--grid--no-gutter repo-page",children:Object(N.jsx)("div",{className:"bx--row repo-page__r1",children:Object(N.jsx)("div",{className:"bx--col-lg-16",children:Object(N.jsx)(L.a,{query:V,children:function(e){var t=e.loading,c=e.error,i=e.data;if(t)return Object(N.jsx)(B.a,{columnCount:W.length+1,rowCount:10,headers:W});if(c)return"Error! ".concat(c.message);var s=i.organization.repositories;n(s.totalCount);var j=function(e){return e.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{key:e.id,stars:e.stargazers.totalCount,issueCount:e.issues.totalCount,createdAt:new Date(e.createdAt).toLocaleDateString(),updatedAt:new Date(e.updatedAt).toLocaleDateString(),links:Object(N.jsx)(X,{url:e.url,homepageUrl:e.homepageUrl})})}))}(s.nodes);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(K,{headers:W,rows:j.slice(l,l+b)}),Object(N.jsx)(F.a,{totalItems:a,backwardText:"Previous page",forwardText:"Next page",pageSize:b,pageSizes:[5,10,15,25],itemsPerPageText:"Items per page",onChange:function(e){var t=e.page,a=e.pageSize;a!==b&&u(a),o(a*(t-1))}})]})}})})})})},$=a(154),ee=a(155),te=a(156),ae=a(172),ne=a(157),re=a(158),ce=a(159),ie=a(160),se=a(161),le=a(162),oe=a(163),je=a(164),de=a(151),be=a(165),ue=a(108),he=function(){return Object(N.jsx)($.a,{render:function(e){var t=e.isSideNavExpanded,a=e.onClickSideNavExpand;return Object(N.jsxs)(ee.a,{"aria-label":"IBM Carbon Formatter",children:[Object(N.jsx)(te.a,{}),Object(N.jsx)(ae.a,{"aria-label":"Open menu",onClick:a,isActive:t}),Object(N.jsx)(ne.a,{element:o.b,to:"/",prefix:"IBM Carbon",children:"IBM Formatter"}),Object(N.jsx)(re.a,{"aria-label":"Codes Repo",children:Object(N.jsx)(ce.a,{element:o.b,to:"/repos",children:"GitHub Repo"})}),Object(N.jsx)(ie.a,{"aria-label":"Side navigation",expanded:t,isPersistent:!1,children:Object(N.jsx)(se.a,{children:Object(N.jsx)(le.a,{children:Object(N.jsx)(ce.a,{element:o.b,to:"/repos",children:"GitHub Repo"})})})}),Object(N.jsxs)(oe.a,{children:[Object(N.jsx)(je.a,{"aria-label":"Notifications",children:Object(N.jsx)(de.a,{})}),Object(N.jsx)(je.a,{"aria-label":"User Avatar",children:Object(N.jsx)(be.a,{})}),Object(N.jsx)(je.a,{"aria-label":"App Switcher",children:Object(N.jsx)(ue.a,{})})]})]})}})},Oe=(a(136),function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(he,{}),Object(N.jsx)(x.a,{children:Object(N.jsxs)(g.c,{children:[Object(N.jsx)(g.a,{exact:!0,path:"/",component:z}),Object(N.jsx)(g.a,{path:"/repos",component:Z})]})})]})}),ge=(a(137),new d.a),xe=Object(b.a)({uri:"https://api.github.com/graphql"}),pe=Object(h.a)((function(e,t){var a=t.headers;return{headers:Object(r.a)(Object(r.a)({},a),{},{authorization:"Bearer ".concat("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")})}}));console.log("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");var fe=new j.a({cache:ge,link:pe.concat(xe)});l.a.render(Object(N.jsx)(u.a,{client:fe,children:Object(N.jsx)(o.a,{children:Object(N.jsx)(Oe,{})})}),document.getElementById("root")),O()}},[[138,1,2]]]);
//# sourceMappingURL=main.76dd9c00.chunk.js.map