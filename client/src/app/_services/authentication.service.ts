import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Book } from '../_models/index';
import { appConfig } from '../app.config';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        //return this.http.post<any>('http://34.192.184.245:3000/notes' + '/users/authenticate', { username: username, password: password })

       return this.http.post<any>(appConfig.apiUrl + '/users/authenticate', { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    ticinfo(ownername: string){
        console.log(ownername);        return this.http.post<any>(appConfig.apiUrl + '/users/ticketinfo', { ownername: ownername })
        .map(ticket => {
            // login successful if there's a jwt token in the response
            if (ticket ) {
                return ticket;
            }

            
        });
    }
    

    getHistory(ownername: string){
        
        return this.http.post<any>(appConfig.apiUrl + '/users/comments', { ownername: ownername })
        .map(ticket => {
            // login successful if there's a jwt token in the response
            if (ticket ) {
                return ticket;
            }

            
        });
    }
    getUserTickets(uid:string){
        return this.http.post<any>(appConfig.apiUrl + '/users/usertickets', { uid: uid })
        .map(ticket => {
            // login successful if there's a jwt token in the response
            if (ticket ) {
                return ticket;
            }

            
        });
    }

    
    getAlluseropen(uid:string){
        return this.http.post<any>(appConfig.apiUrl + '/users/usertickets', { uid: uid })
        .map(ticket => {
            // login successful if there's a jwt token in the response
            if (ticket ) {
                return ticket;
            }

            
        });
    }
    
    

    getAlluserclose(uid:string){
        return this.http.post<any>(appConfig.apiUrl + '/users/userticketsclose', { uid: uid })
        .map(ticket => {
            // login successful if there's a jwt token in the response
            if (ticket ) {
                return ticket;
            }

            
        });
    }

    getAlluserpending(uid:string){
        return this.http.post<any>(appConfig.apiUrl + '/users/userticketspending', { uid: uid })
        .map(ticket => {
            // login successful if there's a jwt token in the response
            if (ticket ) {
                return ticket;
            }

            
        });
    }
    

    getUserAssignTickets(uid:string){
        return this.http.post<any>(appConfig.apiUrl + '/users/getAlluserassign', { uid: uid })
        .map(ticket => {
            // login successful if there's a jwt token in the response
            if (ticket ) {
                return ticket;
            }

            
        });
    }
    
    ticinform(status: string){
        return this.http.post<any>(appConfig.apiUrl + '/users/ticketinform', { status: status })
        .map(ticket => {
            
            if (ticket ) {
                return ticket;
            }

            
        });
    }

    update(ownername: string,status: string,priority:string){
        return this.http.post(appConfig.apiUrl + '/users/', { ownername: ownername,status:status,priority:priority })
        .map(ticket => {
            
            if (ticket ) {
                return ticket;
            }

            
        });
    }

    

    ticalert(ownername: string,visible: string){
        return this.http.post(appConfig.apiUrl + '/users/ticalert', { ownername: ownername,visible:visible })
        .map(ticket => {
            
            if (ticket ) {
                return ticket;
            }

            
        });
    }


    comment(ownername: string, resname: string, resdate:string, history:string){
        return this.http.post(appConfig.apiUrl + '/users/comment', { ownername: ownername,resname: resname,resdate: resdate,history: history })
        .map(ticket => {
            
            if (ticket ) {
                return ticket;
            }

            
        });
    }

    tupdate(ownername: string,assignuser: string){
        return this.http.post(appConfig.apiUrl + '/users/assignuser', { ownername: ownername,assignuser:assignuser })
        .map(ticket => {
            
            if (ticket ) {
                return ticket;
            }

            
        });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}