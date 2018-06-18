/*!
 * Greet.js JavaScript Library v1.0.0
 * https://github.com/sudhanva/
 *
 * Author:sudhanva shivangere
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 *
 * Date: 2018-06-18T23:43IST
 */
 (function(global,$){

 	var Greetr = function(firstName,lastName,language){
 		return new Greetr.init(firstName,lastName,language);
 	}

 	var supportedlangs = ['en','es'];

 	var greetings={
 		en: 'Hello',
 		es: 'Hola'
 	};

 	var formalGreetings={
 		en: 'Greetings',
 		es: 'Saludos'
 	};

 	var logMessages={
 		en: 'Logged In',
 		es: 'Inicio sesion'
 	};

 	Greetr.prototype = {

 		fullName: function(){
 			return this.firstName + ' ' +this.lastName;
 		},

 		validate: function(){
 			if (supportedlangs.indexOf(this.language) === -1) {
 				throw 'Invalid'
 			}
 		},

 		greeting: function(){
 			return greetings[this.language] + ' ' + this.firstName + '!';
 		},

 		formalGreeting: function(){
 			return	formalGreetings[this.language] + ', '+ this.fullName();
 		},

 		greet: function(formal){
 			var msg;
 			//if undifined or null it will be coerced to 'false'
 			if(formal){
 				msg = this.formalGreeting();
 			}
 			else{
 				msg = this.greeting();
 			}
 			if(console){
 				console.log(msg);
 			}
 			//'this' refers to the calling object at execution time
 			//makes the method chainable
 			return this;
 		},

 		log: function(){
 			if(console){
 				console.log(logMessages[this.language] + ':' + this.fullName());
 			}
 			return this;
 		},

 		setlang: function(lang){
 			this.language = lang;
 			this.validate();
 			return this;
 		}
 	};

 	Greetr.init = function(firstName,lastName,language){

 		var self = this;
 		self.firstName = firstName || '';
 		self.lastName = lastName || '';
 		self.language = language || 'en';
 	}

 	Greetr.init.prototype = Greetr.prototype;
 	global.Greetr = global.G$ = Greetr;

 }(window,$));