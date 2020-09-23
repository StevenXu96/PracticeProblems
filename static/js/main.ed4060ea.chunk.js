(this.webpackJsonpleon_tutor=this.webpackJsonpleon_tutor||[]).push([[0],{21:function(e,t,a){e.exports=a(32)},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(19),i=a.n(r),c=a(11),o=a(2),l=a(6),u=a(7),h=a(9),m=a(8),d=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"home_screen"},s.a.createElement("div",{className:"subjects"},s.a.createElement("button",null,s.a.createElement(c.b,{to:"/Chemistry",id:"Chemistry"}," Chemistry Practice Problem "))))}}]),a}(s.a.Component),f=(a(31),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"chemistry_home_screen"},s.a.createElement("div",{className:"chapter"},s.a.createElement("h4",null,s.a.createElement(c.b,{to:"/MoleCalc",id:"moleCalc"}," Mole Calculations "))),s.a.createElement("div",{className:"chapter"},s.a.createElement("h4",null,s.a.createElement(c.b,{to:"/Mole",id:"mole"}," Mole "))),s.a.createElement("div",{className:"chapter"},s.a.createElement("h4",null,s.a.createElement(c.b,{to:"/Stoichiometry",id:"Stoichiometry"}," Stoichiometry "))),s.a.createElement("div",{className:"chapter"},s.a.createElement("h4",null,s.a.createElement(c.b,{to:"/Solution_chemistry",id:"Solution_chemistry"}," Solution Chemistry "))))}}]),a}(s.a.Component)),_=a(1),b=[{formula:"Li2O",mass:29.9},{formula:"NH3",mass:17},{formula:"Oxygen",mass:32},{formula:"water",mass:18},{formula:"N2I6",mass:789.4},{formula:"H2SO4",mass:98.079}];function C(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function k(){var e=b[C(0,b.length-1)];return[e.formula,e.mass]}var v=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={answer_key:"",answer:"",question:"",index:0,status:"",create:1},n.handleChange=n.handleChange.bind(Object(_.a)(n)),n.createQuestion=n.createQuestion.bind(Object(_.a)(n)),n.handleClick=n.handleClick.bind(Object(_.a)(n)),n.check=n.check.bind(Object(_.a)(n)),n}return Object(u.a)(a,[{key:"handleClick",value:function(e){e.preventDefault();var t=e.target.className;if("submit"===t)this.check();else if("show_answer"===t){var a="The answer is "+this.state.answer_key;alert(a)}else"next"===t?this.setState((function(e){return{index:e.index+1,status:"",create:1,answer:""}})):this.setState({status:"",create:1,answer:""})}},{key:"check",value:function(){parseFloat(this.state.answer).toFixed(2)===this.state.answer_key?"Correct"!==this.state.status&&this.setState({status:"Correct",create:0}):"Incorrect"!==this.state.status&&this.setState({status:"Incorrect",create:0})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({answer:t,submit:0})}},{key:"createQuestion",value:function(){if(1===this.state.create){var e=function(e){if(e%6===0){var t=C(20,120),a=k(),n=(t/a[1]).toFixed(2);return["How many moles are in ".concat(t," grams of ").concat(a[0],"?"),n]}if(e%6===1){var s=(C(1,1e4)/1e3).toFixed(3),r=k();return["How many grams are in ".concat(s," moles of ").concat(r[0],"?"),(s*r[1]).toFixed(2)]}if(e%6===2){var i=(C(1,1e3)/10).toFixed(1),c=k();return["How many molecules are in ".concat(i," moles of ").concat(c[0],"? (Divide the final answer by 10^23. Example: if the answer is 5.6 * 10^24, enter 56)"),(6.02*i).toFixed(2)]}if(e%6===3){var o=(C(1,100)/10).toFixed(1),l=k();return["How many moles are in ".concat(o," * 10^23 molecules of ").concat(l[0],"?"),(o/6.02).toFixed(2)]}if(e%6===4){var u=(C(1,1e3)/10).toFixed(1),h=k();return["How many molecules are in ".concat(u," grams of ").concat(h[0],"? (Divide the final answer by 10^23. Example: if the answer is 5.6 * 10^24, enter 56)"),(u/h[1]*6.02).toFixed(2)]}var m=(C(1,100)/10).toFixed(1),d=k();return["How many grams are in ".concat(m," * 10^23 molecules of ").concat(d[0],"?"),(m/6.02*d[1]).toFixed(2)]}(this.state.index);this.state.answer_key!==e[1]?this.setState({answer_key:e[1],question:e[0],create:0}):this.setState({create:0})}}},{key:"render",value:function(){return this.createQuestion(),s.a.createElement("div",{className:"Question"},s.a.createElement("h3",null,"Question number: ",this.state.index%6+1),s.a.createElement("div",null,this.state.question),s.a.createElement("br",null),s.a.createElement("input",{type:"text",onChange:this.handleChange,placeholder:"ANSWER",value:this.state.answer}),s.a.createElement("br",null)," ",s.a.createElement("br",null),s.a.createElement("button",{className:"submit",onClick:this.handleClick},"Submit"),s.a.createElement("button",{className:"next",onClick:this.handleClick},"Next Question"),s.a.createElement("button",{className:"refresh",onClick:this.handleClick},"Try With Different Values"),s.a.createElement("button",{className:"show_answer",onClick:this.handleClick},"Show Answer"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.status))}}]),a}(s.a.Component),w=[{formula:"Mn3O4",mass:230.8,first_ele:"Manganese",first_ele_mass:54.9,first_ele_portion:3,second_ele:"Oxygen",second_ele_mass:16,second_ele_portion:4},{formula:"Mn4O7",mass:331.7,first_ele:"Manganese",first_ele_mass:54.9,first_ele_portion:4,second_ele:"Oxygen",second_ele_mass:16,second_ele_portion:7},{formula:"Li2O",mass:29.9,first_ele:"Lithium",first_ele_mass:6.94,first_ele_portion:2,second_ele:"Oxygen",second_ele_mass:16,second_ele_portion:1},{formula:"NH3",mass:17,first_ele:"Nitrogen",first_ele_mass:14,first_ele_portion:1,second_ele:"Hydrogen",second_ele_mass:1,second_ele_portion:3},{formula:"K2CO3",mass:138.2,first_ele:"Potassium",first_ele_mass:39,first_ele_portion:2,second_ele:"Carbon",second_ele_mass:12,second_ele_portion:1,third_ele:"Oxygen",third_ele_mass:16,third_ele_portion:3}];function p(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function x(){return w[p(0,w.length-1)]}var E=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={answer_key:"",answer:"",question:"",index:0,status:"",create:1},n.handleChange=n.handleChange.bind(Object(_.a)(n)),n.createQuestion=n.createQuestion.bind(Object(_.a)(n)),n.handleClick=n.handleClick.bind(Object(_.a)(n)),n.check=n.check.bind(Object(_.a)(n)),n}return Object(u.a)(a,[{key:"handleClick",value:function(e){e.preventDefault();var t=e.target.className;if("submit"===t)this.check();else if("show_answer"===t){var a="The answer is "+this.state.answer_key;alert(a)}else"next"===t?this.setState((function(e){return{index:e.index+1,status:"",create:1,answer:""}})):this.setState({status:"",create:1,answer:""})}},{key:"check",value:function(){this.state.answer===this.state.answer_key?"Correct"!==this.state.status&&this.setState({status:"Correct",create:0}):"Incorrect"!==this.state.status&&this.setState({status:"Incorrect",create:0})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({answer:t,submit:0})}},{key:"createQuestion",value:function(){if(1===this.state.create){var e=function(e){if(e%3===0){var t,a=p(200,2e3)/1e3,n=x(),s=(a*n.first_ele_mass).toFixed(1),r=(a*n.second_ele_mass).toFixed(1);if("third_ele"in n){var i=(a*n.third_ele_mass).toFixed(1);t="This compound has a mass composition of ".concat(s,"g of ").concat(n.first_ele,", ").concat(r,"g of ").concat(n.second_ele," and ").concat(i,"g of ").concat(n.third_ele,". What is the Empirical Formula of this compound? (Remember to captilize first letter of every element)")}else t="This compound has a mass composition of ".concat(s,"g of ").concat(n.first_ele," and ").concat(r,"g of ").concat(n.second_ele,". What is the Empirical Formula of this compound? (Remember to captilize first letter of every element)");return[t,n.formula]}if(e%3===1){var c,o=x(),l=(o.first_ele_mass*o.first_ele_portion/o.mass*100).toFixed(1),u=(o.second_ele_mass*o.second_ele_portion/o.mass*100).toFixed(1);if("third_ele"in o){var h=(o.third_ele_mass*o.third_ele_portion/o.mass*100).toFixed(1);c="A sample has a mass number of ".concat(o.mass,"g. If ").concat(l,"% of the sample is ").concat(o.first_ele,", ").concat(u,"% of the sample is ").concat(o.second_ele," and ").concat(h,"% of the sample is ").concat(o.third_ele,", what is the Empirical Formula? (Remember to captilize first letter of every element)")}else c="A sample has a mass number of ".concat(o.mass,"g. If ").concat(l,"% of the sample is ").concat(o.first_ele," and ").concat(u,"% of the sample is ").concat(o.second_ele,", what is the Empirical Formula? (Remember to captilize first letter of every element)");return[c,o.formula]}var m,d,f,_,b=p(0,1),C=p(200,3e3)/1e3,k=p(200,3e3)/1e3;if(0===b)m=(C*w[0].first_ele_mass).toFixed(1),d=(C*w[0].second_ele_mass).toFixed(1),f=(k*w[1].first_ele_mass).toFixed(1),_=(k*w[1].second_ele_mass).toFixed(1);else{var v=p(0,1);m=(C*w[v].first_ele_mass).toFixed(1),d=(C*w[v].second_ele_mass).toFixed(1),f=(k*w[v].first_ele_mass).toFixed(1),_=(k*w[v].second_ele_mass).toFixed(1)}return["A compound X has a mass composition of ".concat(m,"g Manganese and ").concat(d,"g of oxygen. A compound Y has a mass composition of ").concat(f,"g of manganese and ").concat(_,'g of oxygen. Are they the same compound? (Answer "Yes" for same compound, "No" for different compound)'),0===b?"No":"Yes"]}(this.state.index);this.state.answer_key!==e[1]?this.setState({answer_key:e[1],question:e[0],create:0}):this.setState({create:0})}}},{key:"render",value:function(){return this.createQuestion(),s.a.createElement("div",{className:"Question"},s.a.createElement("h3",null,"Question number: ",this.state.index%3+1),s.a.createElement("div",null,this.state.question),s.a.createElement("br",null),s.a.createElement("input",{type:"text",onChange:this.handleChange,placeholder:"ANSWER",value:this.state.answer}),s.a.createElement("br",null)," ",s.a.createElement("br",null),s.a.createElement("button",{className:"submit",onClick:this.handleClick},"Submit"),s.a.createElement("button",{className:"next",onClick:this.handleClick},"Next Question"),s.a.createElement("button",{className:"refresh",onClick:this.handleClick},"Try With Different Values"),s.a.createElement("button",{className:"show_answer",onClick:this.handleClick},"Show Answer"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.status))}}]),a}(s.a.Component);function y(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var g=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={answer_key:"",answer:"",question:"",index:0,status:"",create:1},n.handleChange=n.handleChange.bind(Object(_.a)(n)),n.createQuestion=n.createQuestion.bind(Object(_.a)(n)),n.handleClick=n.handleClick.bind(Object(_.a)(n)),n.check=n.check.bind(Object(_.a)(n)),n}return Object(u.a)(a,[{key:"handleClick",value:function(e){e.preventDefault();var t=e.target.className;if("submit"===t)this.check();else if("show_answer"===t){var a="The answer is "+this.state.answer_key;alert(a)}else"next"===t?this.setState((function(e){return{index:e.index+1,status:"",create:1,answer:""}})):this.setState({status:"",create:1,answer:""})}},{key:"check",value:function(){this.state.index%2===1?this.state.answer===this.state.answer_key?"Correct"!==this.state.status&&this.setState({status:"Correct",create:0}):"Incorrect"!==this.state.status&&this.setState({status:"Incorrect",create:0}):parseFloat(this.state.answer).toFixed(4)===this.state.answer_key?"Correct"!==this.state.status&&this.setState({status:"Correct",create:0}):"Incorrect"!==this.state.status&&this.setState({status:"Incorrect",create:0})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({answer:t,submit:0})}},{key:"createQuestion",value:function(){if(1===this.state.create){var e=function(e){if(e%2===0){var t=y(5e3,2e4)/100,a=0===y(0,1)?"Cl2":"KOH",n=(t/("KOH"===a?336.6:35.45*3)/122.6).toFixed(4);return["For the following balanced equation: KClO3 + 5 KCl + 3 H2O -> 3 Cl2 + 6 KOH, if there is ".concat(t,"g of ").concat(a," formed in this chemical reaction, how much KClO3 (in grams) was consumed assuming 100% production rate?"),n]}var s,r=y(200,500)/100,i=y(200,500)/100,c=r/36.5/2,o=i/106;return s=c>o?"HCL, "+(36.5*(c-o)).toFixed(3).toString():"Na2CO3, "+(106*(o-c)).toFixed(3).toString(),["For the following equation: 2 HCl + Na2CO3 -> 2 NaCl + CO2 + H2O, if ".concat(r,"g of HCl is reacted with ").concat(i,"g of Na2CO3, which reactant will be in excess and how much will be left unreacted (if you think Na2CO3 is 3.5g in excess, answer: Na2CO3, 3.5)?"),s]}(this.state.index);this.state.answer_key!==e[1]?this.setState({answer_key:e[1],question:e[0],create:0}):this.setState({create:0})}}},{key:"render",value:function(){return this.createQuestion(),s.a.createElement("div",{className:"Question"},s.a.createElement("h3",null,"Question number: ",this.state.index%2+1),s.a.createElement("div",null,this.state.question),s.a.createElement("br",null),s.a.createElement("input",{type:"text",onChange:this.handleChange,placeholder:"ANSWER",value:this.state.answer}),s.a.createElement("br",null)," ",s.a.createElement("br",null),s.a.createElement("button",{className:"submit",onClick:this.handleClick},"Submit"),s.a.createElement("button",{className:"next",onClick:this.handleClick},"Next Question"),s.a.createElement("button",{className:"refresh",onClick:this.handleClick},"Try With Different Values"),s.a.createElement("button",{className:"show_answer",onClick:this.handleClick},"Show Answer"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.status))}}]),a}(s.a.Component),O=[{formula:"H2SO4",mass:98.08},{formula:"K2SO3",mass:158.2},{formula:"NaCl",mass:58.44},{formula:"CaCl2",mass:110.98}];function N(){return O[S(0,O.length-1)]}function S(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var F=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={answer_key:"",answer:"",question:"",index:0,status:"",create:1},n.handleChange=n.handleChange.bind(Object(_.a)(n)),n.createQuestion=n.createQuestion.bind(Object(_.a)(n)),n.handleClick=n.handleClick.bind(Object(_.a)(n)),n.check=n.check.bind(Object(_.a)(n)),n}return Object(u.a)(a,[{key:"handleClick",value:function(e){e.preventDefault();var t=e.target.className;if("submit"===t)this.check();else if("show_answer"===t){var a="The answer is "+this.state.answer_key;alert(a)}else"next"===t?this.setState((function(e){return{index:e.index+1,status:"",create:1,answer:""}})):this.setState({status:"",create:1,answer:""})}},{key:"check",value:function(){this.state.index%3===0||this.state.index%3===1?parseFloat(this.state.answer).toFixed(1)===this.state.answer_key?"Correct"!==this.state.status&&this.setState({status:"Correct",create:0}):"Incorrect"!==this.state.status&&this.setState({status:"Incorrect",create:0}):parseFloat(this.state.answer).toFixed(2)===this.state.answer_key?"Correct"!==this.state.status&&this.setState({status:"Correct",create:0}):"Incorrect"!==this.state.status&&this.setState({status:"Incorrect",create:0})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({answer:t,submit:0})}},{key:"createQuestion",value:function(){if(1===this.state.create){var e=function(e){if(e%3===0){var t=N(),a=10*S(15,50),n=S(4,8).toFixed(2),s=(S(10,30)/10).toFixed(2);return["What volume (ml) of water needs to be added to ".concat(a," mL of ").concat(n," M ").concat(t.formula," in order to bring the concentration down to ").concat(s," M?"),(n*a/s-a).toFixed(1)]}if(e%3===1){var r=N(),i=(100*S(10,20)).toFixed(1),c=(S(4,10)/10).toFixed(3);return["Calculate the mass (g) of ".concat(r.formula," needed to make ").concat(i," mL of a ").concat(c," M solution of ").concat(r.formula,"."),(i/1e3*c*r.mass).toFixed(1)]}var o,l=S(0,2),u=.05*S(4,10),h=.05*S(4,10),m=.05*S(4,10),d=.05*S(4,10),f=0;return 0===l?(o="Cl",f=(u*m/(u+h)+h*d/(u+h)*2).toFixed(2)):1===l?(o="Na",f=(u*m/(u+h)).toFixed(2)):(o="Ca",f=(h*d/(u+h)).toFixed(2)),["What is the concentration of [".concat(o,"] in the mixture of ").concat(u.toFixed(2),"L of ").concat(m.toFixed(2),"M NaCl and ").concat(h.toFixed(2),"L of ").concat(d.toFixed(2),"M CaCl2? Dissociation equation for NaCl: NaCl -> Na + Cl,\n        Dissociation equation for CaCl2: CaCl2 -> Ca + 2 Cl."),f]}(this.state.index);this.state.answer_key!==e[1]?this.setState({answer_key:e[1],question:e[0],create:0}):this.setState({create:0})}}},{key:"render",value:function(){return this.createQuestion(),s.a.createElement("div",{className:"Question"},s.a.createElement("h3",null,"Question number: ",this.state.index%3+1),s.a.createElement("div",null,this.state.question),s.a.createElement("br",null),s.a.createElement("input",{type:"text",onChange:this.handleChange,placeholder:"ANSWER",value:this.state.answer}),s.a.createElement("br",null)," ",s.a.createElement("br",null),s.a.createElement("button",{className:"submit",onClick:this.handleClick},"Submit"),s.a.createElement("button",{className:"next",onClick:this.handleClick},"Next Question"),s.a.createElement("button",{className:"refresh",onClick:this.handleClick},"Try With Different Values"),s.a.createElement("button",{className:"show_answer",onClick:this.handleClick},"Show Answer"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.status))}}]),a}(s.a.Component);var j=function(){return s.a.createElement("div",null,s.a.createElement(c.a,null,s.a.createElement("h3",null,s.a.createElement(c.b,{to:"/home",id:"title"}," Practice Problem ")),s.a.createElement(o.c,null,s.a.createElement(o.a,{exact:!0,path:"/",component:d}),s.a.createElement(o.a,{path:"/home",component:d}),s.a.createElement(o.a,{path:"/Chemistry",component:f}),s.a.createElement(o.a,{path:"/MoleCalc",component:v}),s.a.createElement(o.a,{path:"/Mole",component:E}),s.a.createElement(o.a,{path:"/Stoichiometry",component:g}),s.a.createElement(o.a,{path:"/Solution_chemistry",component:F}))))};i.a.render(s.a.createElement(j,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.ed4060ea.chunk.js.map