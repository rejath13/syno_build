(this["webpackJsonplocator-admin"]=this["webpackJsonplocator-admin"]||[]).push([[36],{1515:function(e,t,a){},2499:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(1988),o=a(1385),l=a(1437),r=a(1336),i=a(760),d=a(756),j=a(759),p=a(757),b=a(1531),x=a(396),h=a(2508),u=a(1039),m=a(1316),O=(a(1515),a(20)),g=a(72),y=a.n(g),f=a(1430),N=a(977),w=a.n(N),C=a(978),v=a.n(C),k=a(1);const S=e=>{v()(w.a).fire({title:e.title,text:e.text,type:e.type})};function _(e){let{columns:t,data:a,fromNumber:s,toNumber:i,totalCount:d,getDoorList:j,selectedArray:p,callRemoveFunction:b,callAddFunction:x}=e;const{getTableProps:h,getTableBodyProps:O,headerGroups:g,prepareRow:y,page:f,canPreviousPage:N,canNextPage:w,pageOptions:C,pageCount:v,gotoPage:S,nextPage:_,previousPage:P,state:{sortBy:T,pageIndex:D}}=Object(m.useTable)({columns:t,data:a,manualSortBy:!0,initialState:{pageIndex:0,sortBy:[{id:"",desc:!0}]},manualPagination:!0,pageCount:Math.ceil(d/50)},m.useSortBy,m.usePagination),[A,z]=(localStorage.getItem("authToken"),localStorage.getItem("loginUserName"),Object(c.useState)(!1)),[E,B]=Object(c.useState)(null),F=()=>{B(null),D>0?S(0):z(!A)},R=()=>{E&&B(E),D>0?S(0):z(!A)};Object(c.useEffect)((()=>{j({pageIndex:D,searchtext:E})}),[j,D,A]);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(n.a,{children:Object(k.jsxs)(n.a.Row,{className:"mb-2",children:[Object(k.jsx)(o.a,{xs:6}),Object(k.jsxs)(o.a,{xs:4,children:[Object(k.jsx)(n.a.Control,{placeholder:"Search...",value:E||"",onChange:e=>{B(e.target.value)},onKeyPress:e=>{"Enter"!==e.code&&"NumpadEnter"!==e.code||(e.preventDefault(),R())}}),E&&Object(k.jsx)("button",{type:"button",className:"react-datepicker__close-icon",onClick:F,style:{right:"2px",height:"90%"}})]}),Object(k.jsxs)(o.a,{xs:2,children:[Object(k.jsx)("button",{className:"text-capitalize btn btn-success topbuttons",type:"button",onClick:R,children:Object(k.jsx)("i",{className:"feather icon-search",style:{margin:0,fontSize:"16px"}})}),Object(k.jsx)("button",{className:"text-capitalize btn btn-danger topbuttons",type:"button",onClick:F,children:Object(k.jsx)("i",{className:"feather icon-refresh-cw",style:{margin:0}})})]})]})}),Object(k.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,...h(),children:[Object(k.jsx)("thead",{children:g.map((e=>Object(k.jsx)("tr",{...e.getHeaderGroupProps(),children:e.headers.map((e=>Object(k.jsxs)("th",{style:{whiteSpace:"normal"},className:e.className,...e.getHeaderProps(e.getSortByToggleProps()),children:[e.render("Header"),Object(k.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(k.jsx)("span",{className:"feather icon-arrow-down text-muted float-right mt-1"}):Object(k.jsx)("span",{className:"feather icon-arrow-up text-muted float-right mt-1"}):""})]})))})))}),Object(k.jsx)("tbody",{...O(),children:f.map(((e,t)=>(y(e),Object(k.jsx)("tr",{...e.getRowProps(),children:e.cells.map((e=>Object(k.jsx)("td",{...e.getCellProps({className:e.column.className}),children:e.render("Cell")})))}))))})]}),Object(k.jsxs)(l.a,{className:"justify-content-between mt-3",children:[Object(k.jsx)(o.a,{sm:12,md:4,children:Object(k.jsxs)("span",{className:"d-flex align-items-center",children:["Page "," "," ",Object(k.jsxs)("strong",{children:[" ",D+1," of ",C.length," "]})," ","| Go to page:"," ",Object(k.jsx)("input",{type:"number",className:"form-control ml-2",value:D+1,onChange:e=>{const t=e.target.value?Number(e.target.value)-1:0;S(t)},style:{width:"100px"}})]})}),Object(k.jsxs)(o.a,{sm:12,md:5,children:[Object(k.jsxs)("span",{children:[s," - ",i," of ",d," items"]}),d>0&&Object(k.jsx)("button",{className:"text-capitalize btn btn-success",type:"button",onClick:()=>(async()=>{x()})(),style:{float:"right"},children:"Add selected"}),Object(k.jsx)("button",{className:"text-capitalize btn btn-danger",type:"button",onClick:()=>(async()=>{b()})(),style:{float:"right"},children:"Remove selected"})]}),Object(k.jsx)(o.a,{sm:12,md:3,children:Object(k.jsxs)(r.a,{className:"justify-content-end",children:[Object(k.jsx)(r.a.First,{onClick:()=>S(0),disabled:!N}),Object(k.jsx)(r.a.Prev,{onClick:()=>P(),disabled:!N}),Object(k.jsx)(r.a.Next,{onClick:()=>_(),disabled:!w}),Object(k.jsx)(r.a.Last,{onClick:()=>S(v-1),disabled:!w})]})})]})]})}t.default=function(){const e=localStorage.getItem("authToken"),[t,a]=Object(c.useState)(!1),[r,u]=Object(c.useState)([]),[m,g]=Object(c.useState)(null),[N,w]=Object(c.useState)(0),[C,v]=Object(c.useState)(0),[P,T]=Object(c.useState)(!1),[D,A]=Object(c.useState)(1),[z,E]=Object(c.useState)(!1),[B,F]=Object(c.useState)(),[R,I]=Object(c.useState)(null),H=localStorage.getItem("loginUserId"),[K,L]=Object(c.useState)(""),[J,U]=Object(c.useState)(""),[X,M]=Object(c.useState)([]),[G,W]=Object(c.useState)({}),[q,Z]=Object(c.useState)(""),[Q,V]=Object(c.useState)(""),[Y,$]=Object(c.useState)(!1),ee=()=>{V(null),ae(null)},te=()=>{console.log(Q),ae(Q)},ae=Object(c.useCallback)((async t=>{a(!0),console.log(t);const c={searchKeyWord:t};try{const t={method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",Xtoken:e},body:JSON.stringify(c)},s=O.a+"getCategoriesList",n=await fetch(s,t),o=await n.json();M(o.data),a(!1)}catch{}}),[]);Object(c.useEffect)((()=>{ae(Q)}),[ae,P]);const ce=s.a.useMemo((()=>[{Header:"",accessor:"door_id",className:"removecheckbox",Cell:e=>{let{row:t}=e;return Object(k.jsxs)("div",{className:"checkbox d-inline",children:[Object(k.jsx)(n.a.Control,{type:"checkbox",name:t.original.door_id,value:"true",checked:G[t.original.door_id],id:"door_".concat(t.original.door_id),onClick:e=>(e=>{const t=e.target.checked,a=e.target.name;W((e=>({...e,[a]:t}))),$(!Y)})(e)}),Object(k.jsx)(n.a.Label,{htmlFor:"door_".concat(t.original.door_id),className:"cr"})]})}},{Header:"Company Name",accessor:"door_contact_name",className:"namecolumn",Cell:e=>{let{row:t}=e;return Object(k.jsxs)("span",{children:[Object(k.jsx)("span",{className:"pointer",children:t.original.door_company}),Object(k.jsx)("br",{}),Object(k.jsx)(i.a,{placement:"top",overlay:Object(k.jsx)(d.a,{id:"tooltip-top",children:"Contact name"}),children:Object(k.jsx)("span",{children:t.original.door_contact_name})}),Object(k.jsx)("br",{}),Object(k.jsx)(i.a,{placement:"top",overlay:Object(k.jsx)(d.a,{id:"tooltip-top",children:"Existing customer"}),children:Object(k.jsxs)("span",{children:["[",t.original.original_company," (",t.original.original_phone,") ]"]})})]})}},{Header:"Phone",accessor:"door_contact_phone",className:"Phonecolumn",disableSortBy:!0,Cell:e=>{let{row:t}=e;return Object(k.jsx)("span",{children:t.original.door_contact_phone})}},{Header:"Category/Zone",accessor:"category_name",className:"zonecolumn",Cell:e=>{let{row:t}=e;return Object(k.jsxs)("span",{children:[t.original.category_name,Object(k.jsx)("br",{}),t.original.zone_name," "]})}},{Header:"",accessor:"button",className:"Deletecolumn",Cell:e=>{let{row:t}=e;return Object(k.jsx)("button",{className:"text-capitalize btn btn-danger  topbuttons",type:"button",onClick:()=>{window.confirm("Are you sure you want to delete this?")&&ne(t.original.door_id)},children:Object(k.jsx)("i",{className:"fa fa-trash",style:{margin:0}})})}}]),[]),se=async()=>{try{const t={method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",Xtoken:e},body:JSON.stringify(G)},a=O.a+"deleteTempEntry",c=await fetch(a,t);await c.json();T(!0)}catch{}},ne=e=>{W({id:!0}),$(!Y),se()},oe=async()=>{try{const t={method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",Xtoken:e},body:JSON.stringify(G)},a=O.a+"moveTempDoorRecords",c=await fetch(a,t);await c.json();T(!0)}catch{}};Object(c.useEffect)((()=>{if(P){le({pageIndex:D,searchtext:q})}}),[P]);const le=Object(c.useCallback)((async t=>{let{pageIndex:c,searchtext:s}=t;a(!0);const n=c+1;A(c),Z(s);const o={searchKeyWord:s};try{const t={method:"Post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json",Xtoken:e},body:JSON.stringify(o)};var l=O.a+"listTempDoorData?page="+n;const c=await fetch(l,t),s=await c.json();u(s.data.data),g(s.data.total),w(s.data.from),v(s.data.to),a(!1),T(!1)}catch{}}),[]),re=e=>{I(e),E(!0)},ie=()=>Object(k.jsx)("div",{className:"divLoader",style:{zIndex:1075},children:Object(k.jsx)("svg",{className:"svgLoader",viewBox:"0 0 100 100",width:"10em",height:"10em",children:Object(k.jsx)("path",{stroke:"none",d:"M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50",fill:"#51CACC",transform:"rotate(179.719 50 51)",children:Object(k.jsx)("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 51;360 50 51",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})})})});return Object(k.jsx)(s.a.Fragment,{children:Object(k.jsx)(l.a,{children:Object(k.jsxs)(o.a,{className:"p-0",children:[t?Object(k.jsx)(ie,{}):null,Object(k.jsxs)(j.a,{defaultActiveKey:"categories",children:[Object(k.jsxs)(p.a,{eventKey:"categories",title:"Categories",children:[Object(k.jsx)(n.a,{children:Object(k.jsxs)(n.a.Row,{children:[Object(k.jsx)(o.a,{xs:4}),Object(k.jsxs)(o.a,{xs:4,children:[Object(k.jsx)(n.a.Control,{className:"bg-white",placeholder:"Search...",value:Q||"",onChange:e=>{V(e.target.value)},onKeyPress:e=>{"Enter"!==e.code&&"NumpadEnter"!==e.code||(e.preventDefault(),te())}}),Q&&Object(k.jsx)("button",{type:"button",className:"react-datepicker__close-icon",onClick:ee,style:{right:"2px",height:"90%"}})]}),Object(k.jsxs)(o.a,{xs:2,children:[Object(k.jsx)("button",{className:"text-capitalize btn btn-success topbuttons",type:"button",onClick:te,children:Object(k.jsx)("i",{className:"feather icon-search",style:{margin:0,fontSize:"16px"}})}),Object(k.jsx)("button",{className:"text-capitalize btn btn-danger topbuttons",type:"button",onClick:ee,children:Object(k.jsx)("i",{className:"feather icon-refresh-cw",style:{margin:0}})})]}),Object(k.jsx)(o.a,{xs:2,children:Object(k.jsx)(i.a,{placement:"top",overlay:Object(k.jsx)(d.a,{id:"tooltip-top",children:"Add new category"}),children:Object(k.jsxs)("button",{className:"text-capitalize btn btn-primary  topbuttons",type:"button",onClick:()=>{re("insert"),L("")},children:[Object(k.jsx)("i",{className:"fa fa-plus",style:{margin:"0 5px 0 0"}}),"Category"]})})})]})}),X.length>0&&Object(k.jsx)(l.a,{className:"mt-2",children:X.map(((e,t)=>Object(k.jsx)(o.a,{md:4,xl:4,children:Object(k.jsx)(b.a,{children:Object(k.jsxs)(b.a.Body,{style:{padding:"20px"},children:[Object(k.jsx)(b.a.Title,{as:"h5",children:e.category_name}),Object(k.jsxs)(b.a.Text,{children:[Object(k.jsx)(i.a,{placement:"top",overlay:Object(k.jsx)(d.a,{id:"tooltip-top",children:"Assigned count "}),children:Object(k.jsxs)("span",{children:["Count: ",e.count]})}),e.totalcount>0&&Object(k.jsx)(i.a,{placement:"top",overlay:Object(k.jsx)(d.a,{id:"tooltip-top",children:"New / Total uploaded count "}),children:Object(k.jsxs)("span",{className:"ml-5",children:["New / Total count: ",e.newcount,"/",e.totalcount]})})]}),Object(k.jsx)(i.a,{placement:"top",overlay:Object(k.jsx)(d.a,{id:"tooltip-top",children:"Download data with zone (Number of unassigned leads) "}),children:Object(k.jsxs)(n.a,{action:"".concat(O.a,"exportDoorData/").concat(H),method:"POST",target:"_blank",style:{width:"fit-content",display:"inline-block"},children:[Object(k.jsx)("input",{type:"hidden",name:"categorytoExport",value:J}),Object(k.jsx)("input",{type:"hidden",name:"exporttype",value:"0"}),Object(k.jsxs)(x.a,{variant:"warning",type:"submit",onClick:()=>{U(e.category_id)},style:{padding:"5px 8px",marginRight:"5px"},children:[Object(k.jsx)("i",{className:"fa fa-download",style:{margin:"0 5px 0 0"}})," with zone (",e.notassignedcount,")"]})]})}),Object(k.jsx)(i.a,{placement:"top",overlay:Object(k.jsx)(d.a,{id:"tooltip-top",children:"Upload data with salesperson "}),children:Object(k.jsxs)(x.a,{variant:"success",type:"button",onClick:()=>{re("update"),U(e.category_id),L(e.category_name)},style:{padding:"5px  8px",marginRight:"5px"},children:[Object(k.jsx)("i",{className:"fa fa-upload",style:{margin:"0 5px 0 0"}}),"with salesperson"]})}),Object(k.jsx)(i.a,{placement:"top",overlay:Object(k.jsx)(d.a,{id:"tooltip-top",children:"Download data"}),children:Object(k.jsxs)(n.a,{action:"".concat(O.a,"exportDoorData/").concat(H),method:"POST",target:"_blank",style:{width:"fit-content",display:"inline-block"},children:[Object(k.jsx)("input",{type:"hidden",name:"categorytoExport",value:J}),Object(k.jsx)("input",{type:"hidden",name:"exporttype",value:H}),Object(k.jsx)(x.a,{variant:"secondary",type:"submit",onClick:()=>{U(e.category_id)},style:{padding:"5px  8px",marginRight:"5px"},children:Object(k.jsx)("i",{className:"fa fa-download",style:{margin:"0"}})})]})}),Object(k.jsx)(i.a,{placement:"top",overlay:Object(k.jsx)(d.a,{id:"tooltip-top",children:"Add new data"}),children:Object(k.jsx)(x.a,{variant:"primary",type:"button",onClick:()=>{re("insert"),U(e.category_id),L(e.category_name)},style:{padding:"5px 8px",marginRight:0},children:Object(k.jsx)("i",{className:"fa fa-plus",style:{margin:"0"}})})})]})})})))})]}),Object(k.jsx)(p.a,{eventKey:"data",title:"Data",children:Object(k.jsx)(b.a,{children:Object(k.jsx)(b.a.Body,{style:{padding:"15px"},children:Object(k.jsx)(_,{columns:ce,data:r,fromNumber:N,toNumber:C,totalCount:m,getDoorList:le,selectedArray:G,callRemoveFunction:()=>{Object.keys(G).length>0?se():window.alert("Select rows to delete")},callAddFunction:()=>{Object.keys(G).length>0?oe():window.alert("Select rows to add")}})})})})]}),Object(k.jsxs)(h.a,{size:"sm",show:z,onHide:()=>E(!1),backdrop:"static",children:[Object(k.jsx)(h.a.Header,{closeButton:!0,children:Object(k.jsx)(h.a.Title,{as:"h5",children:"Upload File"})}),Object(k.jsxs)(n.a,{onSubmit:t=>{if(""==K)f.a.error({title:"Error",text:"Please fill category name"});else{a(!0),t.preventDefault();const c=new FormData;c.append("sales_person",H),c.append("type",R),c.append("sheetname",K),c.append("file",B);const s=O.a+"uploadDataFile";y.a.post(s,c,{headers:{"Content-Type":"multipart/form-data",Xtoken:e}}).then((e=>{if("success"==e.data.status){T(!0),a(!1);let t="";e.data.data>0&&0===e.data.errorcount?t="".concat(e.data.data," rows uploaded successfully."):e.data.data>0&&e.data.errorcount>0?t="".concat(e.data.data," rows uploaded successfully. ").concat(e.data.errorcount," rows failed"):0===e.data.data&&e.data.errorcount>0?t="".concat(e.data.errorcount," rows failed"):0===e.data.data&&0===e.data.errorcount&&(t="No rows uploaded"),S({title:"Success!",type:"success",text:t}),E(!1),I(null),F("")}else a(!1),S({title:"Error",type:"error",text:e.data.data})})).catch((e=>{a(!1),f.a.error({title:"Error",text:e.data.message})}))}},children:[Object(k.jsx)(h.a.Body,{children:Object(k.jsx)(l.a,{children:Object(k.jsxs)(o.a,{md:"12",children:["insert"===R?Object(k.jsx)("input",{type:"text",value:K,onChange:e=>L(e.target.value),className:"form-control",placeholder:"Category",required:!0}):Object(k.jsx)("input",{type:"text",value:K,disabled:!0,className:"form-control"}),Object(k.jsx)("input",{type:"file",className:"mt-2",onChange:e=>F(e.target.files[0])})]})})}),Object(k.jsx)(h.a.Footer,{children:Object(k.jsx)(x.a,{variant:"primary",type:"submit",children:"Upload"})})]},"fileform")]})]})})})}}}]);