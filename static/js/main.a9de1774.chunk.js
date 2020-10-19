(this.webpackJsonpleon_tutor=this.webpackJsonpleon_tutor||[]).push([[0],{21:function(e,t,a){e.exports=a(33)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(19),c=a.n(o),r=a(11),i=a(2),l=a(4),h=a(5),m=a(7),u=a(6),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"home_screen"},s.a.createElement("div",null,s.a.createElement("p",null,"Welcome to Simply Science! We are here to help you prepare for any of your science exams! Most problems will also generate individual steps for you to follow along.")),s.a.createElement("div",{className:"subjects"},s.a.createElement("button",null,s.a.createElement(r.b,{to:"/Chemistry",id:"Chemistry"}," Chemistry Practice Problem "))))}}]),a}(s.a.Component),f=(a(31),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"chemistry_home_screen"},s.a.createElement("div",{className:"chapter"},s.a.createElement("h4",null,s.a.createElement(r.b,{to:"/MoleCalc",id:"moleCalc"}," Mole Calculations "))),s.a.createElement("div",{className:"chapter"},s.a.createElement("h4",null,s.a.createElement(r.b,{to:"/Mole",id:"mole"}," Mole "))),s.a.createElement("div",{className:"chapter"},s.a.createElement("h4",null,s.a.createElement(r.b,{to:"/Stoichiometry",id:"Stoichiometry"}," Stoichiometry "))),s.a.createElement("div",{className:"chapter"},s.a.createElement("h4",null,s.a.createElement(r.b,{to:"/Solution_chemistry",id:"Solution_chemistry"}," Solution Chemistry "))),s.a.createElement("div",{className:"chapter"},s.a.createElement("h4",null,s.a.createElement(r.b,{to:"/Atomic",id:"Atomic"}," Atomic Theory "))))}}]),a}(s.a.Component)),_=a(1),p=[{formula:"Li2O",mass:29.9},{formula:"NH3",mass:17},{formula:"Oxygen",mass:32},{formula:"water",mass:18},{formula:"N2I6",mass:789.4},{formula:"H2SO4",mass:98.079}];function b(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function C(){var e=p[b(0,p.length-1)];return[e.formula,e.mass]}var w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={answer_key:"",answer:"",question:"",index:0,status:"",create:1},n.handleChange=n.handleChange.bind(Object(_.a)(n)),n.createQuestion=n.createQuestion.bind(Object(_.a)(n)),n.handleClick=n.handleClick.bind(Object(_.a)(n)),n.check=n.check.bind(Object(_.a)(n)),n}return Object(h.a)(a,[{key:"handleClick",value:function(e){e.preventDefault();var t=e.target.className;if("submit"===t)this.check();else if("show_answer"===t){var a="The answer is "+this.state.answer_key;alert(a)}else"next"===t?this.setState((function(e){return{index:e.index+1,status:"",create:1,answer:""}})):this.setState({status:"",create:1,answer:""})}},{key:"check",value:function(){parseFloat(this.state.answer).toFixed(2)===this.state.answer_key?"Correct"!==this.state.status&&this.setState({status:"Correct",create:0}):"Incorrect"!==this.state.status&&this.setState({status:"Incorrect",create:0})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({answer:t,submit:0})}},{key:"createQuestion",value:function(){if(1===this.state.create){var e=function(e){if(e%6===0){var t=b(20,120),a=C(),n=(t/a[1]).toFixed(2);return["How many moles are in ".concat(t," grams of ").concat(a[0],"?"),n]}if(e%6===1){var s=(b(1,1e4)/1e3).toFixed(3),o=C();return["How many grams are in ".concat(s," moles of ").concat(o[0],"?"),(s*o[1]).toFixed(2)]}if(e%6===2){var c=(b(1,1e3)/10).toFixed(1),r=C();return["How many molecules are in ".concat(c," moles of ").concat(r[0],"? (Divide the final answer by 10^23. Example: if the answer is 5.6 * 10^24, enter 56)"),(6.02*c).toFixed(2)]}if(e%6===3){var i=(b(1,100)/10).toFixed(1),l=C();return["How many moles are in ".concat(i," * 10^23 molecules of ").concat(l[0],"?"),(i/6.02).toFixed(2)]}if(e%6===4){var h=(b(1,1e3)/10).toFixed(1),m=C();return["How many molecules are in ".concat(h," grams of ").concat(m[0],"? (Divide the final answer by 10^23. Example: if the answer is 5.6 * 10^24, enter 56)"),(h/m[1]*6.02).toFixed(2)]}var u=(b(1,100)/10).toFixed(1),d=C();return["How many grams are in ".concat(u," * 10^23 molecules of ").concat(d[0],"?"),(u/6.02*d[1]).toFixed(2)]}(this.state.index);this.state.answer_key!==e[1]?this.setState({answer_key:e[1],question:e[0],create:0}):this.setState({create:0})}}},{key:"render",value:function(){return this.createQuestion(),s.a.createElement("div",{className:"Question"},s.a.createElement("h3",null,"Question number: ",this.state.index%6+1),s.a.createElement("div",null,this.state.question),s.a.createElement("br",null),s.a.createElement("input",{type:"text",onChange:this.handleChange,placeholder:"ANSWER",value:this.state.answer}),s.a.createElement("br",null)," ",s.a.createElement("br",null),s.a.createElement("button",{className:"submit",onClick:this.handleClick},"Submit"),s.a.createElement("button",{className:"next",onClick:this.handleClick},"Next Question"),s.a.createElement("button",{className:"refresh",onClick:this.handleClick},"Try With Different Values"),s.a.createElement("button",{className:"show_answer",onClick:this.handleClick},"Show Answer"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.status))}}]),a}(s.a.Component),E=[{formula:"Mn3O4",mass:230.8,first_ele:"Manganese",first_ele_mass:54.9,first_ele_portion:3,second_ele:"Oxygen",second_ele_mass:16,second_ele_portion:4},{formula:"Mn4O7",mass:331.7,first_ele:"Manganese",first_ele_mass:54.9,first_ele_portion:4,second_ele:"Oxygen",second_ele_mass:16,second_ele_portion:7},{formula:"Li2O",mass:29.9,first_ele:"Lithium",first_ele_mass:6.94,first_ele_portion:2,second_ele:"Oxygen",second_ele_mass:16,second_ele_portion:1},{formula:"NH3",mass:17,first_ele:"Nitrogen",first_ele_mass:14,first_ele_portion:1,second_ele:"Hydrogen",second_ele_mass:1,second_ele_portion:3},{formula:"K2CO3",mass:138.2,first_ele:"Potassium",first_ele_mass:39,first_ele_portion:2,second_ele:"Carbon",second_ele_mass:12,second_ele_portion:1,third_ele:"Oxygen",third_ele_mass:16,third_ele_portion:3}];function v(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function k(){return E[v(0,E.length-1)]}var x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={answer_key:"",answer:"",question:"",index:0,status:"",create:1,steps:"",show_steps:0},n.handleChange=n.handleChange.bind(Object(_.a)(n)),n.createQuestion=n.createQuestion.bind(Object(_.a)(n)),n.handleClick=n.handleClick.bind(Object(_.a)(n)),n.check=n.check.bind(Object(_.a)(n)),n}return Object(h.a)(a,[{key:"handleClick",value:function(e){e.preventDefault();var t=e.target.className;"submit"===t?this.check():"show_answer"===t?this.setState({show_steps:1}):"next"===t?this.setState((function(e){return{index:e.index+1,status:"",create:1,answer:"",show_steps:0}})):this.setState({status:"",create:1,answer:"",show_steps:0})}},{key:"check",value:function(){this.state.answer===this.state.answer_key?"Correct"!==this.state.status&&this.setState({status:"Correct",create:0}):"Incorrect"!==this.state.status&&this.setState({status:"Incorrect",create:0})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({answer:t,submit:0})}},{key:"createQuestion",value:function(){if(1===this.state.create){var e=function(e){var t;if(e%3===0){var a,n=v(200,2e3)/1e3,s=k(),o=(n*s.first_ele_mass*s.first_ele_portion).toFixed(1),c=(n*s.second_ele_mass*s.second_ele_portion).toFixed(1),r=(o/s.first_ele_mass).toFixed(3),i=(c/s.second_ele_mass).toFixed(3);if("third_ele"in s){var l=(n*s.third_ele_mass*s.third_ele_portion).toFixed(1),h=(l/s.third_ele_mass).toFixed(3);a="This compound has a mass composition of ".concat(o,"g of ").concat(s.first_ele,", ").concat(c,"g of ").concat(s.second_ele," and ").concat(l,"g of ").concat(s.third_ele,". What is the Empirical Formula of this compound? (Remember to captilize first letter of every element)"),t="Mole of ".concat(s.first_ele," in compound X = ").concat(o,"g * (1 mol / ").concat(s.first_ele_mass,"g) = ").concat(r," \n\n            Mole of ").concat(s.second_ele," in compound X = ").concat(c,"g * (1 mol / ").concat(s.second_ele_mass,"g) = ").concat(i," \n\n            Mole of ").concat(s.third_ele," in compound X = ").concat(l,"g * (1 mol / ").concat(s.third_ele_mass,"g) = ").concat(h," \n\n            \n\n            Now find the ratio between the 3 elements: \n\n            ").concat(r," : ").concat(i," : ").concat(h," = ").concat(s.first_ele_portion," : ").concat(s.second_ele_portion," : ").concat(s.third_ele_portion," \n\n            \n\n            Therefore the answer is ").concat(s.formula,".")}else t="Mole of ".concat(s.first_ele," in compound X = ").concat(o,"g * (1 mol / ").concat(s.first_ele_mass,"g) = ").concat(r," \n\n            Mole of ").concat(s.second_ele," in compound X = ").concat(c,"g * (1 mol / ").concat(s.second_ele_mass,"g) = ").concat(i," \n\n            \n\n            Now find the ratio between the 2 elements:\n\n            ").concat(r," : ").concat(i," = ").concat(s.first_ele_portion," : ").concat(s.second_ele_portion,"\n\n            \n\n            Therefore the answer is ").concat(s.formula,"."),a="This compound has a mass composition of ".concat(o,"g of ").concat(s.first_ele," and ").concat(c,"g of ").concat(s.second_ele,". What is the Empirical Formula of this compound? (Remember to captilize first letter of every element)");return[a,s.formula,t]}if(e%3===1){var m,u=k(),d=(u.first_ele_mass*u.first_ele_portion/u.mass*100).toFixed(1),f=(u.first_ele_mass*u.first_ele_portion).toFixed(1),_=(u.second_ele_mass*u.second_ele_portion/u.mass*100).toFixed(1),p=(u.second_ele_mass*u.second_ele_portion).toFixed(1);if("third_ele"in u){var b=(u.third_ele_mass*u.third_ele_portion/u.mass*100).toFixed(1),C=(u.third_ele_mass*u.third_ele_portion).toFixed(1);m="A sample has a mass number of ".concat(u.mass,"g. If ").concat(d,"% of the sample is ").concat(u.first_ele,", ").concat(_,"% of the sample is ").concat(u.second_ele," and ").concat(b,"% of the sample is ").concat(u.third_ele,", what is the Empirical Formula? (Remember to captilize first letter of every element)"),t="Mass of ".concat(u.first_ele,": ").concat(u.mass,"g * ").concat(d,"% = ").concat(f," \n\n            Mass of ").concat(u.second_ele,": ").concat(u.mass,"g * ").concat(_,"% = ").concat(p," \n\n            Mass of ").concat(u.third_ele,": ").concat(u.mass,"g * ").concat(b,"% = ").concat(C," \n\n            Mole of ").concat(u.first_ele,": ").concat(f,"g * (1 mol / ").concat(u.first_ele_mass,"g) = ").concat(u.first_ele_portion," mol \n\n            Mole of ").concat(u.second_ele,": ").concat(p,"g * (1 mol / ").concat(u.second_ele_mass,"g) = ").concat(u.second_ele_portion," mol \n\n            Mole of ").concat(u.third_ele,": ").concat(C,"g * (1 mol / ").concat(u.third_ele_mass,"g) = ").concat(u.third_ele_portion," mol \n\n            Therefore, Empirical formula is ").concat(u.formula)}else t="Mass of ".concat(u.first_ele,": ").concat(u.mass,"g * ").concat(d,"% = ").concat(f," \n\n            Mass of ").concat(u.second_ele,": ").concat(u.mass,"g * ").concat(_,"% = ").concat(p," \n\n            Mole of ").concat(u.first_ele,": ").concat(f,"g * (1 mol / ").concat(u.first_ele_mass,"g) = ").concat(u.first_ele_portion," mol \n\n            Mole of ").concat(u.second_ele,": ").concat(p,"g * (1 mol / ").concat(u.second_ele_mass,"g) = ").concat(u.second_ele_portion," mol \n\n            Therefore, Empirical formula is ").concat(u.formula),m="A sample has a mass number of ".concat(u.mass,"g. If ").concat(d,"% of the sample is ").concat(u.first_ele," and ").concat(_,"% of the sample is ").concat(u.second_ele,", what is the Empirical Formula? (Remember to captilize first letter of every element)");return[m,u.formula,t]}var w,x,g,y,O=v(0,1),F=v(200,3e3)/1e3,N=v(200,3e3)/1e3;if(0===O)w=(F*E[0].first_ele_mass).toFixed(1),x=(F*E[0].second_ele_mass).toFixed(1),g=(N*E[1].first_ele_mass).toFixed(1),y=(N*E[1].second_ele_mass).toFixed(1),t="Use the same method as question 1 to find the emperical formula for these compounds. \n\n            The first compound X is ".concat(E[0].formula,". \n\n            The second compound Y is ").concat(E[1].formula,". \n\n            Therefore, they are NOT the same compound.");else{var S=v(0,1);w=(F*E[S].first_ele_mass).toFixed(1),x=(F*E[S].second_ele_mass).toFixed(1),g=(N*E[S].first_ele_mass).toFixed(1),y=(N*E[S].second_ele_mass).toFixed(1),t="Use the same method as question 1 to find the emperical formula for these compounds. \n\n            The first compound X is ".concat(E[S].formula,". \n\n            The second compound Y is ").concat(E[S].formula,". \n\n            Therefore, they are the SAME compound.")}return["A compound X has a mass composition of ".concat(w,"g Manganese and ").concat(x,"g of oxygen. A compound Y has a mass composition of ").concat(g,"g of manganese and ").concat(y,'g of oxygen. Are they the same compound? (Answer "y" for same compound, "n" for different compound)'),0===O?"n":"y",t]}(this.state.index);this.state.answer_key!==e[1]?this.setState({answer_key:e[1],question:e[0],create:0,steps:e[2]}):this.setState({create:0})}}},{key:"render",value:function(){return this.createQuestion(),s.a.createElement("div",{className:"Question"},s.a.createElement("h3",null,"Question number: ",this.state.index%3+1),s.a.createElement("div",null,this.state.question),s.a.createElement("br",null),s.a.createElement("input",{type:"text",onChange:this.handleChange,placeholder:"ANSWER",value:this.state.answer}),s.a.createElement("br",null)," ",s.a.createElement("br",null),s.a.createElement("button",{className:"submit",onClick:this.handleClick},"Submit"),s.a.createElement("button",{className:"next",onClick:this.handleClick},"Next Question"),s.a.createElement("button",{className:"refresh",onClick:this.handleClick},"Try With Different Values"),s.a.createElement("button",{className:"show_answer",onClick:this.handleClick},"Show Answer"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.status),s.a.createElement("br",null),0===this.state.show_steps?null:this.state.steps.split("\n").map((function(e){return s.a.createElement("p",null,e)})))}}]),a}(s.a.Component);function g(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={answer_key:"",answer:"",question:"",index:0,status:"",create:1,steps:"",show_steps:0,answer_key_excess:"",answer_excess:""},n.handleChange=n.handleChange.bind(Object(_.a)(n)),n.createQuestion=n.createQuestion.bind(Object(_.a)(n)),n.handleClick=n.handleClick.bind(Object(_.a)(n)),n.check=n.check.bind(Object(_.a)(n)),n}return Object(h.a)(a,[{key:"handleClick",value:function(e){e.preventDefault();var t=e.target.className;"submit"===t?this.check():"show_answer"===t?this.setState({show_steps:1}):"next"===t?this.setState((function(e){return{index:e.index+1,status:"",create:1,answer:"",show_steps:0,answer_key_excess:"",answer_excess:""}})):this.setState({status:"",create:1,answer:"",show_steps:0,answer_key_excess:"",answer_excess:""})}},{key:"check",value:function(){this.state.index%2===0?parseFloat(this.state.answer).toFixed(4)===this.state.answer_key?"Correct"!==this.state.status&&this.setState({status:"Correct",create:0}):"Incorrect"!==this.state.status&&this.setState({status:"Incorrect",create:0}):parseFloat(this.state.answer).toFixed(3)===this.state.answer_key&&this.state.answer_excess===this.state.answer_key_excess?"Correct"!==this.state.status&&this.setState({status:"Correct",create:0}):"Incorrect"!==this.state.status&&this.setState({status:"Incorrect",create:0})}},{key:"handleChange",value:function(e){var t=e.target.value;"option"===e.target.name?this.setState({answer_excess:t,submit:0}):this.setState({answer:t,submit:0})}},{key:"createQuestion",value:function(){if(1===this.state.create){var e=function(e){if(e%2===0){var t=g(5e3,2e4)/100,a=0===g(0,1)?"Cl2":"KOH",n=(t/("KOH"===a?336.6:35.45*3)/122.6).toFixed(4),s=(t/("KOH"===a?56.1:35.45)).toFixed(3);return["For the following balanced equation: KClO3 + 5 KCl + 3 H2O -> 3 Cl2 + 6 KOH, if there is ".concat(t,"g of ").concat(a," formed \n            in this chemical reaction, how much KClO3 (in grams) was consumed assuming 100% production rate?"),n,"","Mole of ".concat(a," = ").concat(t," * (1 mol / ").concat("KOH"===a?56.1:35.45,"g) = ").concat(s,"mol \n \n            Mass of KClO3 comsumed = ").concat(s,"mol ").concat(a," * (1 mol KClO3 / ").concat("KOH"===a?"6 mol KOH":"3 mol Cl2",") * (1 mol / 122.6g) = ").concat(n,"g")]}var o,c,r=g(200,500)/100,i=g(200,500)/100,l=r/36.5/2,h=i/106;return l>h?(c="HCl",o=(36.5*(l-h)*2).toFixed(3).toString()):(c="Na2CO3",o=(106*(h-l)).toFixed(3).toString()),["For the following equation: 2 HCl + Na2CO3 -> 2 NaCl + CO2 + H2O, if ".concat(r,"g of HCl is reacted \n            with ").concat(i,"g of Na2CO3, which reactant will be in excess and how much will be left unreacted?"),o,c,"Mole of HCl: ".concat(r,"g * (1 mol / 36.5g) = ").concat((2*l).toFixed(4),"mol \n \n            Mole of Na2CO3: ").concat(i,"g * (1 mol / 106g) = ").concat(h.toFixed(4),"mol \n \n            The mole ratio between HCl and Na2CO3 is 2:1, therefore, with each mole of Na2CO3 consumed, there will be 2 mole of HCl consumed. \n \n            Therefore when we compare, we divide the mole of HCl by 2:\n            ").concat((2*l).toFixed(4)," / 2 = ").concat(l.toFixed(4)," \n \n            comparing HCl (").concat(l.toFixed(4)," mol) with Na2CO3 (").concat(h.toFixed(4)," mol), we can see that ").concat(c," will be in excess \n \n            Mass of ").concat(c," = ").concat("HCl"===c?"(".concat(l.toFixed(4)," mol - ").concat(h.toFixed(4)," mol) * 2 * 36.5 g/mol"):"(".concat(h.toFixed(4)," mol - ").concat(l.toFixed(4)," mol) * 106 g/mol")," = ").concat(o,"g")]}(this.state.index);this.state.answer_key!==e[1]?this.setState({answer_key:e[1],question:e[0],create:0,answer_key_excess:e[2],steps:e[3]}):this.setState({create:0})}}},{key:"render",value:function(){return this.createQuestion(),s.a.createElement("div",{className:"Question"},s.a.createElement("h3",null,"Question number: ",this.state.index%2+1),s.a.createElement("div",null,this.state.question),s.a.createElement("br",null),this.state.index%2===0?null:s.a.createElement("div",null,s.a.createElement("p",null,"Which reactant will be in excess?"),s.a.createElement("label",{for:"option-11"},s.a.createElement("input",{type:"radio",name:"option",value:"HCl",id:"option-11",onClick:this.handleChange,checked:"HCl"===this.state.answer_excess}),"HCl"),s.a.createElement("br",null),s.a.createElement("div",{id:"block-12"},s.a.createElement("label",{for:"option-12"},s.a.createElement("input",{type:"radio",name:"option",value:"Na2CO3",id:"option-12",onClick:this.handleChange,checked:"Na2CO3"===this.state.answer_excess}),"Na2CO3")),s.a.createElement("br",null),s.a.createElement("p",null,"How much will be left unreacted? (leave your answer in grams)")),s.a.createElement("input",{type:"text",onChange:this.handleChange,placeholder:"ANSWER",value:this.state.answer}),s.a.createElement("br",null)," ",s.a.createElement("br",null),s.a.createElement("button",{className:"submit",onClick:this.handleClick},"Submit"),s.a.createElement("button",{className:"next",onClick:this.handleClick},"Next Question"),s.a.createElement("button",{className:"refresh",onClick:this.handleClick},"Try With Different Values"),s.a.createElement("button",{className:"show_answer",onClick:this.handleClick},"Show Answer"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.status),s.a.createElement("br",null),0===this.state.show_steps?null:this.state.steps.split("\n").map((function(e){return s.a.createElement("p",null,e)})))}}]),a}(s.a.Component),O=[{formula:"H2SO4",mass:98.08},{formula:"K2SO3",mass:158.2},{formula:"NaCl",mass:58.44},{formula:"CaCl2",mass:110.98}];function F(){return O[N(0,O.length-1)]}function N(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={answer_key:"",answer:"",question:"",index:0,status:"",create:1},n.handleChange=n.handleChange.bind(Object(_.a)(n)),n.createQuestion=n.createQuestion.bind(Object(_.a)(n)),n.handleClick=n.handleClick.bind(Object(_.a)(n)),n.check=n.check.bind(Object(_.a)(n)),n}return Object(h.a)(a,[{key:"handleClick",value:function(e){e.preventDefault();var t=e.target.className;if("submit"===t)this.check();else if("show_answer"===t){var a="The answer is "+this.state.answer_key;alert(a)}else"next"===t?this.setState((function(e){return{index:e.index+1,status:"",create:1,answer:""}})):this.setState({status:"",create:1,answer:""})}},{key:"check",value:function(){this.state.index%3===0||this.state.index%3===1?parseFloat(this.state.answer).toFixed(1)===this.state.answer_key?"Correct"!==this.state.status&&this.setState({status:"Correct",create:0}):"Incorrect"!==this.state.status&&this.setState({status:"Incorrect",create:0}):parseFloat(this.state.answer).toFixed(2)===this.state.answer_key?"Correct"!==this.state.status&&this.setState({status:"Correct",create:0}):"Incorrect"!==this.state.status&&this.setState({status:"Incorrect",create:0})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({answer:t,submit:0})}},{key:"createQuestion",value:function(){if(1===this.state.create){var e=function(e){if(e%3===0){var t=F(),a=10*N(15,50),n=N(4,8).toFixed(2),s=(N(10,30)/10).toFixed(2);return["What volume (ml) of water needs to be added to ".concat(a," mL of ").concat(n," M ").concat(t.formula," in order to bring the concentration down to ").concat(s," M?"),(n*a/s-a).toFixed(1)]}if(e%3===1){var o=F(),c=(100*N(10,20)).toFixed(1),r=(N(4,10)/10).toFixed(3);return["Calculate the mass (g) of ".concat(o.formula," needed to make ").concat(c," mL of a ").concat(r," M solution of ").concat(o.formula,"."),(c/1e3*r*o.mass).toFixed(1)]}var i,l=N(0,2),h=.05*N(4,10),m=.05*N(4,10),u=.05*N(4,10),d=.05*N(4,10),f=0;return 0===l?(i="Cl",f=(h*u/(h+m)+m*d/(h+m)*2).toFixed(2)):1===l?(i="Na",f=(h*u/(h+m)).toFixed(2)):(i="Ca",f=(m*d/(h+m)).toFixed(2)),["What is the concentration of [".concat(i,"] in the mixture of ").concat(h.toFixed(2),"L of ").concat(u.toFixed(2),"M NaCl and ").concat(m.toFixed(2),"L of ").concat(d.toFixed(2),"M CaCl2? Dissociation equation for NaCl: NaCl -> Na + Cl,\n        Dissociation equation for CaCl2: CaCl2 -> Ca + 2 Cl."),f]}(this.state.index);this.state.answer_key!==e[1]?this.setState({answer_key:e[1],question:e[0],create:0}):this.setState({create:0})}}},{key:"render",value:function(){return this.createQuestion(),s.a.createElement("div",{className:"Question"},s.a.createElement("h3",null,"Question number: ",this.state.index%3+1),s.a.createElement("div",null,this.state.question),s.a.createElement("br",null),s.a.createElement("input",{type:"text",onChange:this.handleChange,placeholder:"ANSWER",value:this.state.answer}),s.a.createElement("br",null)," ",s.a.createElement("br",null),s.a.createElement("button",{className:"submit",onClick:this.handleClick},"Submit"),s.a.createElement("button",{className:"next",onClick:this.handleClick},"Next Question"),s.a.createElement("button",{className:"refresh",onClick:this.handleClick},"Try With Different Values"),s.a.createElement("button",{className:"show_answer",onClick:this.handleClick},"Show Answer"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.status))}}]),a}(s.a.Component),j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={answer_key:"",answer:"",question:"",A:"",B:"",C:"",D:"",E:"",index:0,status:"",create:1},n.handleChange=n.handleChange.bind(Object(_.a)(n)),n.createQuestion=n.createQuestion.bind(Object(_.a)(n)),n.handleClick=n.handleClick.bind(Object(_.a)(n)),n.check=n.check.bind(Object(_.a)(n)),n}return Object(h.a)(a,[{key:"handleClick",value:function(e){e.preventDefault();var t=e.target.className;"submit"===t?this.check():"next"===t&&this.setState((function(e){return{index:e.index+1,status:"",create:1,answer:""}}))}},{key:"check",value:function(){this.state.answer===this.state.answer_key?"Correct"!==this.state.status&&this.setState({status:"Correct",create:0}):"Incorrect"!==this.state.status&&this.setState({status:"Incorrect",create:0})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({answer:t,submit:0})}},{key:"createQuestion",value:function(){if(1===this.state.create){var e=(t=this.state.index)%10===0?["Which of the following elements has the greatest electronegativity?","F","Cl","Br","C","None of the above","A"]:t%10===1?["Which is the electron configuration of an atom in the excited state?","1s2, 2s1","1s2, 2s2, 2p1","1s2, 2s2, 2p5","1s2, 2s2, 2p2, 3s1","None of the above","C"]:t%10===2?["How many s orbitals can exist in the 3rd energy level?","1","2","3","4","5","A"]:t%10===3?["The major difference between a 1s orbital and a 2s orbital is that","2s orbital has a different geometric shape.","2s orbital is at a different energy level.","2s orbital can hold more electrons.","2s orbital can hold less electrons.","there is no difference.","B"]:t%10===4?["What is the total number of valence electrons in an atom with the electron configuration 2-8-5?","2","5","8","15","None of the above","B"]:t%10===5?["A Ca[2+] ion differs from a Ca[0] atom in that the Ca[2+] ion has","more electrons","more protons","fewer protons","fewer electrons","none of the above","D"]:t%10===6?["Which particles are referred to as nucleons (subatomic particles located in the nucleus)?","protons and neutrons","protons and electrons","neutrons, only","neutrons and electrons","None of the above","A"]:t%10===7?["What is the mass number of an atom that contains 19 protons, 19 electrons, and 20 neutrons?","25","19","58","20","39","E"]:t%10===8?["How many protons are in the nucleus of an atom of beryllium?","2","4","9","5","7","B"]:t%10===9?["The atomic mass of an element is defined as the weighted average mass of that element\u2019s","naturally occurring isotopes","least abundant isotope","radioactive isotopes","most abundant isotope","none of the above","A"]:void 0;this.state.question!==e[0]?this.setState({answer_key:e[6],question:e[0],A:e[1],B:e[2],C:e[3],D:e[4],E:e[5],create:0}):this.setState({create:0})}var t}},{key:"render",value:function(){return this.createQuestion(),s.a.createElement("div",{className:"Question"},s.a.createElement("h3",null,"Question number: ",this.state.index%10+1),s.a.createElement("div",null,this.state.question),s.a.createElement("br",null),s.a.createElement("div",{id:"block-11"},s.a.createElement("label",{for:"option-11"},s.a.createElement("input",{type:"radio",name:"option",value:"A",id:"option-11",onClick:this.handleChange,checked:"A"===this.state.answer}),this.state.A)),s.a.createElement("br",null),s.a.createElement("div",{id:"block-12"},s.a.createElement("label",{for:"option-12"},s.a.createElement("input",{type:"radio",name:"option",value:"B",id:"option-12",onClick:this.handleChange,checked:"B"===this.state.answer}),this.state.B)),s.a.createElement("br",null),s.a.createElement("div",{id:"block-13"},s.a.createElement("label",{for:"option-13"},s.a.createElement("input",{type:"radio",name:"option",value:"C",id:"option-13",onClick:this.handleChange,checked:"C"===this.state.answer}),this.state.C)),s.a.createElement("br",null),s.a.createElement("div",{id:"block-14"},s.a.createElement("label",{for:"option-14"},s.a.createElement("input",{type:"radio",name:"option",value:"D",id:"option-14",onClick:this.handleChange,checked:"D"===this.state.answer}),this.state.D)),s.a.createElement("br",null),s.a.createElement("div",{id:"block-15"},s.a.createElement("label",{for:"option-15"},s.a.createElement("input",{type:"radio",name:"option",value:"E",id:"option-15",onClick:this.handleChange,checked:"E"===this.state.answer}),this.state.E)),s.a.createElement("br",null),s.a.createElement("br",null)," ",s.a.createElement("br",null),s.a.createElement("button",{className:"submit",onClick:this.handleClick},"Submit"),s.a.createElement("button",{className:"next",onClick:this.handleClick},"Next Question"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h3",null,this.state.status))}}]),a}(s.a.Component);a(32);var M=function(){return s.a.createElement("div",null,s.a.createElement(r.a,null,s.a.createElement("h3",{className:"main_title"},s.a.createElement(r.b,{to:"/home",id:"title"}," Practice Problem ")),s.a.createElement(i.c,null,s.a.createElement(i.a,{exact:!0,path:"/",component:d}),s.a.createElement(i.a,{path:"/home",component:d}),s.a.createElement(i.a,{path:"/Chemistry",component:f}),s.a.createElement(i.a,{path:"/MoleCalc",component:w}),s.a.createElement(i.a,{path:"/Mole",component:x}),s.a.createElement(i.a,{path:"/Stoichiometry",component:y}),s.a.createElement(i.a,{path:"/Solution_chemistry",component:S}),s.a.createElement(i.a,{path:"/Atomic",component:j}))))};c.a.render(s.a.createElement(M,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.a9de1774.chunk.js.map