(this["webpackJsonpfer-cap02-aula02"]=this["webpackJsonpfer-cap02-aula02"]||[]).push([[0],{66:function(e,a,t){e.exports=t(75)},71:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),i=(t(71),t(10)),o=t(122),m=t(141),u=t(137),s=t(139),d=t(142),E=t(131),g=t(4),f=t(132),h=t(134),v=t(135),p=t(136),b=t(144),C=t(126),B=t(36),k=t(76),S=t(140),N=t(127),O=t(138),y=t(77),I=t(128),R=t(129),j=t(130),x=Object(o.a)((function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(4),marginRight:e.spacing(1)},containerRightAlign:{width:"100%"},formControl:{margin:e.spacing(1),minWidth:120},select:{minWidth:120},card:{margin:e.spacing(3)}}}));function w(e){var a=e.handleOptionChange,t=e.value,n=e.handleButtonClickNext,r=x();return l.a.createElement(k.a,{component:"fieldset"},l.a.createElement(S.a,{"aria-label":"Selecione o tipo de empreendimento",name:"typeOfConstrucion",value:t,onChange:function(e){a(e.target.value)}},l.a.createElement(C.a,{container:!0,alignItems:"center"},l.a.createElement(N.a,{value:1,control:l.a.createElement(O.a,null),label:"Edifica\xe7\xe3o nova"}),l.a.createElement(I.a,{fontSize:"large"})),l.a.createElement(C.a,{container:!0,alignItems:"center"},l.a.createElement(N.a,{value:2,control:l.a.createElement(O.a,null),label:"Reforma em edifica\xe7\xe3o"}),l.a.createElement(R.a,{fontSize:"large"})),l.a.createElement(C.a,{container:!0,alignItems:"center"},l.a.createElement(N.a,{value:3,control:l.a.createElement(O.a,null),label:"Obras de infraestrutura"}),l.a.createElement(j.a,{fontSize:"large"}))),l.a.createElement(y.a,null,"Selecione o tipo de empreendimento"),l.a.createElement("div",null,l.a.createElement(E.a,{disabled:!0,className:r.button},"Retornar"),l.a.createElement(E.a,{disabled:0===t,variant:"contained",color:"primary",className:r.button,onClick:function(){n()}},"Avan\xe7ar")))}var A=t(84),F=t(82),D=t(143),V=Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),L=Intl.NumberFormat("pt-BR",{style:"percent",minimumFractionDigits:2,maximumFractionDigits:2});function T(e){return V.format(e)}function W(e){return L.format(e)}var z=Object(o.a)((function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(4),marginRight:e.spacing(1)},containerRightAlign:{width:"100%"},formControl:{margin:e.spacing(3),minWidth:120},select:{minWidth:120},card:{margin:e.spacing(3)}}}));function M(e){var a=e.cubValue,t=e.constructionArea,n=e.levelOfFinish,r=e.handleButtonClickNext,c=e.handleButtonClickBack,i=e.handleLevelOfFinishChange,o=e.handleAreaChange,m=e.handleBdiValueChange,u=z(),s=function(e){return parseFloat(e.replace(",",".").replace("%",""))/100},d=[{name:null,value:0},{name:"CAL-8 - Normal",value:1796.75},{name:"CSL-8 - Normal",value:1557.84},{name:"CSL-16 - Normal",value:2080.38}];return l.a.createElement("div",null,l.a.createElement(C.a,{container:!0,alignItems:"center",justify:"space-between"},l.a.createElement(k.a,null,l.a.createElement(A.a,{id:"finish-level"},"N\xedvel de acabamento"),l.a.createElement(F.a,{labelId:"finish-level",className:u.select,onChange:function(e){i(d[e.target.value])},value:d.findIndex((function(e){return e.name===n}))},l.a.createElement(D.a,{value:1},d[1].name),l.a.createElement(D.a,{value:2},d[2].name),l.a.createElement(D.a,{value:3},d[3].name)),l.a.createElement(y.a,null,"Selecione o n\xedvel de acabamento")),l.a.createElement(k.a,null,l.a.createElement(f.a,{disabled:!0,id:"cub-value",label:"Valor do CUB/m\xb2",value:T(a)})),l.a.createElement(k.a,null,l.a.createElement(f.a,{id:"area-of-construction",label:"\xc1rea",value:t,onChange:function(e){o(parseFloat(e.target.value))}}),l.a.createElement(y.a,null,"Defina a \xe1rea do empreendimento")),l.a.createElement(k.a,null,l.a.createElement(f.a,{id:"bdi",label:"BDI",defaultValue:W(.27),onChange:function(e){m(s(e.target.value))},onBlur:function(e){var a=s(e.target.value);e.target.value=W(a)}}),l.a.createElement(y.a,null,"Defina o BDI"))),l.a.createElement("div",null,l.a.createElement(E.a,{className:u.button,onClick:function(){c()}},"Retornar"),l.a.createElement(E.a,{variant:"contained",color:"primary",className:u.button,onClick:function(){r()}},"Avan\xe7ar")))}var J=t(133),G=[""," Edifica\xe7\xe3o"," Reforma"," Infraestrutura"],U=[l.a.createElement(J.a,null),l.a.createElement(I.a,null),l.a.createElement(R.a,null),l.a.createElement(j.a,null)],q=Object(o.a)((function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(4),marginRight:e.spacing(1)},containerRightAlign:{width:"100%"},card:{margin:e.spacing(3)},coloredText:{color:"red"},small:{width:e.spacing(4),height:e.spacing(4),marginRight:e.spacing(1)}}})),H=Object(g.a)({root:{marginRight:8,"& .MuiInputBase-root.Mui-disabled":{color:"rgb(64, 200, 64)"}}})(f.a);function K(){var e=q(),a=l.a.useState(0),t=Object(i.a)(a,2),n=t[0],r=t[1],c=l.a.useState(0),o=Object(i.a)(c,2),g=o[0],f=o[1],S=l.a.useState(""),N=Object(i.a)(S,2),O=N[0],y=N[1],I=l.a.useState(0),R=Object(i.a)(I,2),j=R[0],x=R[1],A=l.a.useState(100),F=Object(i.a)(A,2),D=F[0],V=F[1],L=l.a.useState(.27),W=Object(i.a)(L,2),z=W[0],K=W[1],P=function(){r((function(e){return e+1}))},Q=function(){r((function(e){return e-1}))};return l.a.createElement(h.a,{className:e.root,maxWidth:"xl"},l.a.createElement(v.a,{className:e.card,elevation:3},l.a.createElement(p.a,{avatar:l.a.createElement(b.a,{"aria-label":""},U[g]),title:l.a.createElement(C.a,{container:!0,alignItems:"center",justify:"space-between"},l.a.createElement(C.a,{item:!0,xs:8},l.a.createElement(B.a,{variant:"h5",color:"initial"},"Gerador de estimativa de custos de obras")),l.a.createElement(C.a,{item:!0,xs:3},l.a.createElement(C.a,{container:!0,alignItems:"center",justify:"flex-end"},l.a.createElement(b.a,{"aria-label":"",className:e.small,color:"primary"},l.a.createElement(J.a,{fontSize:"small"})),l.a.createElement(k.a,null,l.a.createElement(H,{disabled:!0,id:"estimated-value",label:"Valor Estimado",value:T(j*D*(1+z))}))))),subheader:G[g]}),l.a.createElement(m.a,{activeStep:n,orientation:"vertical"},l.a.createElement(u.a,{key:"Step1"},l.a.createElement(s.a,null,"Tipo de obra"),l.a.createElement(d.a,null,l.a.createElement(w,{handleOptionChange:function(e){r((function(e){return e+1})),f(parseInt(e))},handleButtonClickNext:P,value:g}))),l.a.createElement(u.a,{key:"Step2"},l.a.createElement(s.a,null,"Dados do empreendimento"),l.a.createElement(d.a,null,l.a.createElement(M,{cubValue:j,constructionArea:D,levelOfFinish:O,handleButtonClickNext:P,handleButtonClickBack:Q,handleLevelOfFinishChange:function(e){y(e.name),x(e.value)},handleAreaChange:function(e){V(e)},handleBdiValueChange:function(e){K(e)}}))),l.a.createElement(u.a,{key:"teste"},l.a.createElement(s.a,null,"Detalhamentos"),l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(E.a,{disabled:0===n,onClick:Q},"Back"),l.a.createElement(E.a,{variant:"contained",color:"primary",onClick:P},"Teste"))))))))}c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(K,null)),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.2cc3b92c.chunk.js.map