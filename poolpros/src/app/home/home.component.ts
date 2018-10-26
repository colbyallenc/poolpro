import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':self',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

	dealers: any;
	dealersTmp: any;
	serviceCheck: Boolean;
	InstallationCheck: Boolean;
	residentialCheck: Boolean;
	commercialCheck: Boolean;
	serviceCheckVal: String;
	InstallationCheckVal: String;
	residentialCheckVal: String;
	commercialCheckVal: String;
	modalState: String = "";
	modalActiveDealerName: String = "";
	filterShow: String = "";
	filterShowState: Boolean = false;
	activeDealerData: Object;
	name: String;

	constructor(private data: DataService) { }

	getData() {
		this.data.getDealers().subscribe(
	    	data => {
	      		this.dealers = data;
	      		this.dealersTmp = data;
	    	}
	    );
	}

	ngOnInit() {
		this.serviceCheck = false;
		this.InstallationCheck = false;
		this.residentialCheck = false;
		this.commercialCheck = false;
		this.getData();

		/*$(document).ready(function(){
	        $('.send-email').click(function() {
				$(".email-modal").addClass('open');
				$("body").css('overflow','hidden');
			});

			$('.close-modal').click(function() {
				$(".email-modal").removeClass('open');
				$("body").css('overflow','inherit');
			});
	    });*/
	}

	filterResult(event, name, value) {
		this[name] = !this[name];
		this[name+"Val"] = value;
		this.dealers = [];

		for (var i = 0; i < this.dealersTmp.length; i++) {
			var subObj = this.dealersTmp[i];
			var serC = 1;
			var insC = 1;
			var resC = 1;
			var comC = 1;

			if(this.serviceCheck) {
				if(subObj.data.certifications.indexOf(this.serviceCheckVal) > -1)
					serC = 1;
				else
					serC = 0;
			}
			if(this.InstallationCheck) {
				if(subObj.data.certifications.indexOf(this.InstallationCheckVal) > -1)
					insC = 1;
				else
					insC = 0;
			}
			if(this.residentialCheck) {
				if(subObj.data.certifications.indexOf(this.residentialCheckVal) > -1)
					resC = 1;
				else
					resC = 0;
			}
			if(this.commercialCheck) {
				if(subObj.data.certifications.indexOf(this.commercialCheckVal) > -1)
					comC = 1;
				else
					comC = 0;
			}			

			if(serC && insC && resC && comC)
				this.dealers.push(subObj);
		}

		if(!this.serviceCheck && !this.InstallationCheck && !this.residentialCheck && !this.commercialCheck)
			this.dealers = this.dealersTmp;
	}

	openModal(activeDealer) {
		this.activeDealerData = activeDealer;
		this.modalActiveDealerName = activeDealer.name;
		this.modalState = "open";
		$("body").css('overflow','hidden');
	}

	closeModal() {
		this.modalActiveDealerName = "";
		this.modalState = "close";
		$("body").css('overflow','inherit');
	}

	showFilter(open) {
		var clicks = !open;
		this.filterShowState = !open;
		if(clicks) {
			this.filterShow = "open";

		} else {
			this.filterShow = "";
		}
	}

	inputChangeEvent(inputName) {

	}

	submitData() {
		var data = {
			name : "amit",
			email : "amit.lnwebworks@gmail.com",
			phone : "9876543210",
			comment : "hello world!",
			pool : "yes",
			to_email : "myemail@gmail.com"
		};

		this.data.sendEmail(data).subscribe(
	    	response => {
	    		console.log(response);
	    	}
	    );
		console.log(this.name);
	}

}
