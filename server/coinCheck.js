import {Meteor} from 'meteor/meteor';
import { HTTP } from 'meteor/http'; 


	Meteor.methods({
		checkPrice(){
			return HTTP.call('GET','https://api.coindesk.com/v1/bpi/currentprice.json'
			);
		}
	})
