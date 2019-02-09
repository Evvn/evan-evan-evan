(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(31)},22:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),l=a.n(s),o=(a(22),a(2)),i=a(3),c=a(5),m=a(4),u=a(6),p=(a(24),a(34)),d=a(33),h=a(35),b=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement("h1",null,"Front end focused web dev building web & native apps with React."),r.a.createElement("p",{className:"location"},"Melbourne, AU"),r.a.createElement("div",{className:"wrapper"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 288 288"},r.a.createElement("linearGradient",{id:"PSgrad_0",x1:"100%",x2:"0%",y1:"100%",y2:"0%"},r.a.createElement("stop",{offset:"0%",stopColor:"#212121",stopOpacity:"1"}),r.a.createElement("stop",{offset:"100%",stopColor:"#212121",stopOpacity:"1"})),r.a.createElement("path",{fill:"#212121"},r.a.createElement("animate",{repeatCount:"indefinite",attributeName:"d",dur:"15s",values:"M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z\t"})))))}}]),t}(r.a.Component),v=a(13),g=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:this.props.type,name:this.props.name,placeholder:this.props.placeholder,className:this.props.className,required:this.props.required,onChange:this.props.onChange,value:this.props.value}),r.a.createElement("span",{className:"error"},this.props.error))}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{placeholder:this.props.placeholder,name:this.props.name,id:this.props.id,required:this.props.required,className:this.props.className,rows:this.props.rows,onChange:this.props.onChange,value:this.props.value}),r.a.createElement("span",{className:"error"},this.props.error))}}]),t}(n.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-group btnCont"},r.a.createElement("button",{type:this.props.type,name:this.props.name,className:this.props.className,required:this.props.required,onClick:this.props.onClick},"Send it!"))}}]),t}(n.Component),y=a(14),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).changeWord=function(){for(var e=a.state.words,t=a.state.currentWord,n=a.state.wordArray,r=n[t],s=t===e.length-1?n[0]:n[t+1],l=0;l<r.length;l++)a.animateLetterOut(r,l);for(var o=0;o<s.length;o++)s[o].className="letter behind",s[0].parentElement.style.opacity=1,a.animateLetterIn(s,o);t=t===n.length-1?0:t+1,a.setState({words:e,currentWord:t,wordArray:n})},a.state={name:"",email:"",subject:"Email from EvanEvanEvan",message:"",errors:{name:"",email:"",subject:"",message:""},words:document.getElementsByClassName("word"),wordArray:[],currentWord:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleInputChange",value:function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value;this.setState(Object(v.a)({},a,n))}},{key:"validateMail",value:function(){var e={},t=!0;(!this.state.name||this.state.name.length<3)&&(e.name="Minimum 3 characters",t=!1),(!this.state.subject||this.state.subject.length<3)&&(e.subject="Minimum 3 characters",t=!1),(!this.state.message||this.state.message.length<3)&&(e.message="Minimum 3 characters",t=!1),(!this.state.email||this.state.email.length<3)&&(e.email="Minimum 3 characters",t=!1);return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)||(e.email="This is not a valid email",t=!1),this.setState({errors:e}),t}},{key:"sentMessage",value:function(e){if(e.preventDefault(),this.validateMail()){var t={from_name:this.state.name+" ("+this.state.email+")",to_name:"Evan - Portfolio",subject:this.state.subject,message_html:this.state.message};y.send("outlook","template_tsqCor1k",t,"user_x42GvzZR07ZAcpHuTPxlr").then(function(e){console.log("Success!",e.status,e.text)},function(e){console.log(e)}),document.querySelectorAll("input").forEach(function(e){e.style.pointerEvents="none",e.style.backgroundColor="#F0F4F3",e.placeholder="",e.disabled=!0}),document.querySelectorAll("textarea").forEach(function(e){e.style.pointerEvents="none",e.style.backgroundColor="#F0F4F3",e.placeholder="",e.disabled=!0}),document.querySelectorAll("button").forEach(function(e){e.parentNode.removeChild(e)});var a=document.createElement("p"),n=document.createTextNode("Talk to you soon!");a.appendChild(n),document.querySelector("form").appendChild(a),this.setState({name:this.state.name,email:this.state.email,subject:"",message:this.state.message})}}},{key:"componentDidMount",value:function(){var e=this.state.words;e[this.state.currentWord].style.opacity=1;for(var t=0;t<e.length;t++)this.splitLetters(e[t]);this.changeWord(),setInterval(this.changeWord,2e3)}},{key:"animateLetterIn",value:function(e,t){setTimeout(function(){e[t].className="letter in"},340+80*t)}},{key:"animateLetterOut",value:function(e,t){setTimeout(function(){e[t].className="letter out"},80*t)}},{key:"splitLetters",value:function(e){var t=this.state.wordArray,a=e.innerHTML;e.innerHTML="";for(var n=[],r=0;r<a.length;r++){var s=document.createElement("span");s.className="letter",s.innerHTML=a.charAt(r),e.appendChild(s),n.push(s)}t.push(n),this.setState({wordArray:t})}},{key:"componentWillUnmount",value:function(){this.setState({words:[],wordArray:[],currentWord:0})}},{key:"render",value:function(){return r.a.createElement("div",{className:"contact-page"},r.a.createElement("h1",null,r.a.createElement("div",{className:"text"},r.a.createElement("p",null,"Let's"),r.a.createElement("p",null,r.a.createElement("span",{className:"word black"},"talk."),r.a.createElement("span",{className:"word black"},"meet."),r.a.createElement("span",{className:"word black"},"work."),r.a.createElement("span",{className:"word black"},"chat.")))),r.a.createElement("form",{id:this.props.id,className:this.props.className,name:this.props.name,method:this.props.method,action:this.props.action},r.a.createElement(g,{type:"text",name:"name",placeholder:"Your name",className:"form-control",required:"required",onChange:this.handleInputChange.bind(this),value:this.state.name,error:this.state.errors.name}),r.a.createElement(g,{type:"email",name:"email",placeholder:"Your email",className:"form-control",required:"required",onChange:this.handleInputChange.bind(this),value:this.state.email,error:this.state.errors.email}),r.a.createElement(E,{placeholder:"Send me something nice",name:"message",id:"message",required:"required",className:"form-control",rows:"4",onChange:this.handleInputChange.bind(this),value:this.state.message,error:this.state.errors.message}),r.a.createElement(f,{onClick:this.sentMessage.bind(this),type:"button",name:"submit",className:"btn btn-primary btn-lg",required:"required"})),r.a.createElement("span",{className:"alt-contact"},"Or, contact me on ",r.a.createElement("a",{href:"https://www.linkedin.com/in/evanamezcua/",className:"linkedin squiggle-hover-black"},r.a.createElement("img",{src:"linkedin-in-brands.svg",alt:"linkedin"}))))}}]),t}(r.a.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mr-yum"},r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"Mr Yum"),r.a.createElement("h3",null,"Lead Product Engineer"),r.a.createElement("h3",null,"React, AWS, Airtable")),r.a.createElement("div",{className:"body"},r.a.createElement("div",null,r.a.createElement("p",null,"Mr Yum is a web application developed for the hospitality industry to replace print menus with mobile visual menus. The application is launched via QR code scan and the menu information is displayed to the user. My role in this project was as the lead product engineer and developer, working closely with our creative director and product team.")),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,"\u2192")," Multi-language support of 5+ languages via Google Cloud Translate API"),r.a.createElement("p",null,r.a.createElement("b",null,"\u2192")," Ingredient definitions using a bespoke culinary dictionary and Airtable API"),r.a.createElement("p",null,r.a.createElement("b",null,"\u2192")," Analytics and statistics using Hotjar and Google Analytics")),r.a.createElement("div",null,r.a.createElement("p",null,"The application was built using the React JavaScript framework to create a fluid user experience similar to a native mobile application. To manage and store the data for Mr Yum, Airtable was used as the backend for the application; this allowed for the app's data to be accessed easily by any members of the team quickly and efficiently without needing a developer on hand to help."))),r.a.createElement("div",{className:"phone-view"}),r.a.createElement("div",{className:"tablet-view"}))}}]),t}(r.a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"t-a-s"},r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"Talk About Something"),r.a.createElement("h3",null,"Personal Project"),r.a.createElement("h3",null,"Ruby on Rails, JavaScript, PostgreSQL")),r.a.createElement("div",{className:"body"},r.a.createElement("div",null,r.a.createElement("p",null,"Talk About Something is an imageboard-style website built as a course project during my time at General Assembly's Web Development Immersive course. The website allows users to create accounts, upload images, post comments and reply to threads.")),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,"\u2192")," Secure user-authentication with salted passwords and sessions"),r.a.createElement("p",null,r.a.createElement("b",null,"\u2192")," Data storage with PostgreSQL for CRUD[Create, Read, Update, Delete] functionality"),r.a.createElement("p",null,r.a.createElement("b",null,"\u2192")," Routing using Ruby on Rails")),r.a.createElement("div",null,r.a.createElement("p",null,"This project was used to showcase an understanding of using Ruby on Rails and PostgreSQL to build a secure CRUD application that handles multiple users. It was bootstrapped with Padrino, run on a Puma server, and had data stored on a PostgreSQL database."))),r.a.createElement("div",{className:"phone-view"}),r.a.createElement("div",{className:"tablet-view"}))}}]),t}(r.a.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"bikeOn",value:function(){console.log("bike on"),document.querySelector("body").classList.add("bike")}},{key:"bikeOff",value:function(){console.log("bike off"),document.querySelector("body").classList.remove("bike")}},{key:"render",value:function(){return r.a.createElement("div",{className:"work-page"},r.a.createElement("h1",null,"Work"),r.a.createElement("p",{className:"work-desc"},"My name is Evan, and I'm a developer currently living in Melbourne. I'm happiest working on front end web projects built with React and cross-platform mobile applications utilizing React Native + Expo, but I've also had experience in doing backend work with Ruby on Rails and PostgreSQL."),r.a.createElement("p",{className:"work-desc"},"My most recent role has been working as the lead product engineer on a mobile web application written in React with a lean backend using Airtable to manage content, hosted with AWS."),r.a.createElement("p",{className:"work-desc"},"When I'm not at work, you'll probably find me on my ",r.a.createElement("span",{onMouseEnter:this.bikeOn,onMouseLeave:this.bikeOff},"bike"),"."),r.a.createElement(k,null),r.a.createElement(j,null))}}]),t}(r.a.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("nav",null,r.a.createElement("h2",{className:"my-name"},"Evan"),r.a.createElement("div",{className:"links"},r.a.createElement(d.a,{to:"/",className:"squiggle-hover-black"},"Home"),r.a.createElement(d.a,{to:"/work",className:"squiggle-hover-black"},"Work"),r.a.createElement(d.a,{to:"/contact",className:"squiggle-hover-black"},"Contact"))),r.a.createElement(h.a,{path:"/",exact:!0,component:b}),r.a.createElement(h.a,{path:"/work",component:N}),r.a.createElement(h.a,{path:"/contact",component:w})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.733989f8.chunk.js.map