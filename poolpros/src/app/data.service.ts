import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// const querystring = require('querystring');

@Injectable({
  providedIn: 'root'
})
export class DataService {

	serviceUrl = 'http://localhost:4205/api';

	constructor(private http: HttpClient) { }

	getDealers() {
		return this.http.get(`${this.serviceUrl}/dealers`)
	}

	sendEmail(data) {
		return this.http.post(`${this.serviceUrl}/send_email`, data)
	}
}
