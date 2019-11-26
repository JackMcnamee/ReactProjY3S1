(this["webpackJsonpproject-app"]=this["webpackJsonpproject-app"]||[]).push([[0],{137:function(e,t,a){e.exports=a(310)},142:function(e,t,a){},143:function(e,t,a){},310:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(48),r=a.n(l),i=(a(142),a(12)),s=a(13),c=a(15),h=a(14),u=a(16),m=(a(143),a(5)),d=a(21),p=a.n(d),b=(a(161),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={Title:"",Author:"",Summary:"",Genres:"",SelectedOption:""},a.handleChangeBookTitle=a.handleChangeBookTitle.bind(Object(m.a)(a)),a.handleChangeBookAuthor=a.handleChangeBookAuthor.bind(Object(m.a)(a)),a.handleChangeBookSummary=a.handleChangeBookSummary.bind(Object(m.a)(a)),a.handleChangeBookGenres=a.handleChangeBookGenres.bind(Object(m.a)(a)),a.handleOptionChange=a.handleOptionChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChangeBookTitle",value:function(e){this.setState({Title:e.target.value})}},{key:"handleChangeBookAuthor",value:function(e){this.setState({Author:e.target.value})}},{key:"handleChangeBookSummary",value:function(e){this.setState({Summary:e.target.value})}},{key:"handleChangeBookGenres",value:function(e){this.setState({Genres:e.target.value})}},{key:"handleOptionChange",value:function(e){this.setState({SelectedOption:e.target.value})}},{key:"handleSubmit",value:function(e){alert("Title: "+this.state.Title+"\nAuthor: "+this.state.Author+"\nSummary: "+this.state.Summary+"\nGenres: "+this.state.Genres+"\nOption picked: "+this.state.SelectedOption),e.preventDefault();var t={title:this.state.Title,author:this.state.Author,summary:this.state.Summary,genres:this.state.Genres,selectedOption:this.state.SelectedOption};p.a.post("http://localhost:4000/api/books",t).then().catch(),this.setState({Title:"",Author:"",Summary:"",Genres:"",SelectedOption:""})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Please Enter the Books Details"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Book Title:"),o.a.createElement("input",{type:"text",className:"form-control",value:this.state.Title,onChange:this.handleChangeBookTitle}))," ",o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Author:"),o.a.createElement("input",{type:"text",className:"form-control",value:this.state.Author,onChange:this.handleChangeBookAuthor}))," ",o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Book Summary:"),o.a.createElement("textarea",{className:"form-control",rows:"6",value:this.state.Summary,onChange:this.handleChangeBookSummary}))," ",o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Genres:"),o.a.createElement("textarea",{className:"form-control",rows:"6",value:this.state.Genres,onChange:this.handleChangeBookGenres}))," ",o.a.createElement("div",{className:"radio"},o.a.createElement("p",null,"Select Category Book Belongs to:")),o.a.createElement("div",{className:"radio"},o.a.createElement("label",null,o.a.createElement("input",{type:"radio",value:"Finished",className:"form-control",checked:"Finished"===this.state.SelectedOption,onChange:this.handleOptionChange}),"Finished reading this Book"))," ",o.a.createElement("div",{className:"radio"},o.a.createElement("label",null,o.a.createElement("input",{type:"radio",value:"Reading",className:"form-control",checked:"Reading"===this.state.SelectedOption,onChange:this.handleOptionChange}),"Currently reading this Book"))," ",o.a.createElement("div",{className:"radio"},o.a.createElement("label",null,o.a.createElement("input",{type:"radio",value:"Will Read",className:"form-control",checked:"Will Read"===this.state.SelectedOption,onChange:this.handleOptionChange}),"Will read this Book"))," ",o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"submit",value:"Submit"}))," "))}}]),t}(o.a.Component)),k=a(33),g=a(129),v=a(135),E=a(131),y=a(38),f=a(37),O=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(h.a)(t).call(this))).DeleteBook=e.DeleteBook.bind(Object(m.a)(e)),e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"DeleteBook",value:function(e){var t=this;console.log("Delete Clicked"),p.a.delete("http://localhost:4000/api/books/"+this.props.book._id).then((function(){t.props.ReloadDataMethod()})).catch()}},{key:"render",value:function(){return o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement("br",null),o.a.createElement(g.a,null,o.a.createElement(k.a,{style:{width:"30rem"}},o.a.createElement(k.a.Body,null,o.a.createElement(k.a.Title,null,this.props.book.title," by ",this.props.book.author),o.a.createElement(k.a.Text,null,this.props.book.summary)),o.a.createElement(E.a,{className:"list-group-flush"},o.a.createElement(y.a,null,"Genres: ",this.props.book.genres),o.a.createElement(y.a,null,this.props.book.selectedOption)),o.a.createElement(k.a.Body,null,o.a.createElement(f.b,{to:"/edit/"+this.props.book._id,className:"btn btn-primary"},"Edit"),o.a.createElement(v.a,{variant:"danger",onClick:this.DeleteBook},"Delete")))),o.a.createElement("br",null),o.a.createElement("br",null))}}]),t}(o.a.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.myBooks.map((function(t){return o.a.createElement(O,{key:t._id,book:t,ReloadDataMethod:e.props.ReloadDataMethod})}))}}]),t}(o.a.Component),C=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(h.a)(t).call(this))).state={books:[]},e.ReloadDataMethod=e.ReloadDataMethod.bind(Object(m.a)(e)),e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("http://localhost:4000/api/books").then((function(t){e.setState({books:t.data.books})})).catch((function(e){console.log(e)}))}},{key:"ReloadDataMethod",value:function(){var e=this;p.a.get("http://localhost:4000/api/books").then((function(t){e.setState({movies:t.data.books})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Your Library"),o.a.createElement(S,{myBooks:this.state.books,ReloadDataMethod:this.ReloadDataMethod}))}}]),t}(o.a.Component),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={Title:"",Author:"",Summary:"",Genres:"",SelectedOption:"",_id:""},a.handleChangeBookTitle=a.handleChangeBookTitle.bind(Object(m.a)(a)),a.handleChangeBookAuthor=a.handleChangeBookAuthor.bind(Object(m.a)(a)),a.handleChangeBookSummary=a.handleChangeBookSummary.bind(Object(m.a)(a)),a.handleChangeBookGenres=a.handleChangeBookGenres.bind(Object(m.a)(a)),a.handleOptionChange=a.handleOptionChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("http://localhost:4000/api/books/"+this.props.match.params.id).then((function(t){e.setState({_id:t.data._id,Title:t.data.title,Author:t.data.author,Summary:t.data.summary,Genres:t.data.genres,SelectedOption:t.data.selectedOption})})).catch()}},{key:"handleChangeBookTitle",value:function(e){this.setState({Title:e.target.value})}},{key:"handleChangeBookAuthor",value:function(e){this.setState({Author:e.target.value})}},{key:"handleChangeBookSummary",value:function(e){this.setState({Summary:e.target.value})}},{key:"handleChangeBookGenres",value:function(e){this.setState({Genres:e.target.value})}},{key:"handleOptionChange",value:function(e){this.setState({SelectedOption:e.target.value})}},{key:"handleSubmit",value:function(e){alert("Title: "+this.state.Title+"\nAuthor: "+this.state.Author+"\nSummary: "+this.state.Summary+"\nGenres: "+this.state.Genres+"\nOption picked: "+this.state.SelectedOption),e.preventDefault();var t={title:this.state.Title,author:this.state.Author,summary:this.state.Summary,genres:this.state.Genres,selectedOption:this.state.SelectedOption};p.a.put("http://localhost:4000/api/books/"+this.state._id,t).then().catch(),this.setState({Title:"",Author:"",Summary:"",Genres:"",SelectedOption:""})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Please Edit your Book"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Book Title:"),o.a.createElement("input",{type:"text",className:"form-control",value:this.state.Title,onChange:this.handleChangeBookTitle}))," ",o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Author:"),o.a.createElement("input",{type:"text",className:"form-control",value:this.state.Author,onChange:this.handleChangeBookAuthor}))," ",o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Book Summary:"),o.a.createElement("textarea",{className:"form-control",rows:"6",value:this.state.Summary,onChange:this.handleChangeBookSummary}))," ",o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Genres:"),o.a.createElement("textarea",{className:"form-control",rows:"6",value:this.state.Genres,onChange:this.handleChangeBookGenres}))," ",o.a.createElement("div",{className:"form-group"},o.a.createElement("p",null,"Select Category Book Belongs to:")),o.a.createElement("div",{className:"radio"},o.a.createElement("label",null,o.a.createElement("input",{type:"radio",value:"Finished",className:"form-control",checked:"Finished"===this.state.SelectedOption,onChange:this.handleOptionChange}),"Books Read"))," ",o.a.createElement("div",{className:"radio"},o.a.createElement("label",null,o.a.createElement("input",{type:"radio",value:"Reading",className:"form-control",checked:"Reading"===this.state.SelectedOption,onChange:this.handleOptionChange}),"Books Reading"))," ",o.a.createElement("div",{className:"radio"},o.a.createElement("label",null,o.a.createElement("input",{type:"radio",value:"Will Read",className:"form-control",checked:"Will Read"===this.state.SelectedOption,onChange:this.handleOptionChange}),"Books Will Read"))," ",o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"submit",value:"Submit"}))," "))}}]),t}(o.a.Component),j=(a(301),a(313)),N=a(314),T=a(24),A=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(f.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(j.a,{bg:"dark",variant:"dark"},o.a.createElement(N.a,{className:"mr-auto"},o.a.createElement(N.a.Link,{href:"/enterBook"},"Enter Book"),o.a.createElement(N.a.Link,{href:"/library"},"Your Library"))),o.a.createElement(T.c,null,o.a.createElement(T.a,{path:"/enterBook",component:b}),o.a.createElement(T.a,{path:"/library",component:C}),o.a.createElement(T.a,{path:"/edit/:id",component:B}))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[137,1,2]]]);
//# sourceMappingURL=main.54965f26.chunk.js.map