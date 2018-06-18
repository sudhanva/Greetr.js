/*!
 * Greet.js JavaScript Library v1.0.0
 * https://github.com/sudhanva/
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

 	Greetr.prototype = {};

 	Greetr.init = function(firstName,lastName,language){

 		var self = this;
 		self.firstName = firstName || '';
 		self.lastName = lastName || '';
 		self.language = language || 'en';
 	}

 	Greetr.init.prototype = Greetr.prototype;
 	global.Greetr = global.G$ = Greetr;

 }(window,$));