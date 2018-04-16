import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { User } from '../_models/index';
import { Book } from '../_models/index';
import { Tag } from '../_models/index';
import { Group,Comment } from '../_models/index';
import { Account } from '../_models/account';
import { Tickettype } from '../_models/tickettype';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(appConfig.apiUrl + '/users');
    }

    
    gettic() {
        return this.http.get<Book[]>(appConfig.apiUrl + '/users/gettic');
    }
    
    getAllgroups() {
        return this.http.get<Group[]>(appConfig.apiUrl + '/users/groups');
    }

    getAlltags() {
        return this.http.get<Tag[]>(appConfig.apiUrl + '/users/tags');
    }
    
    getAlltypes() {
        return this.http.get<Tickettype[]>(appConfig.apiUrl + '/users/types');
    }

    getAllTickets(){
        return this.http.get<Book[]>(appConfig.apiUrl + '/users/tickets');
    }
    
    

    
    getAllHistory(){
        return this.http.get<Comment[]>(appConfig.apiUrl + '/users/comments');
    }

    
    getAllTicketsopen(){
        return this.http.get<Book[]>(appConfig.apiUrl + '/users/ticketsopen');
    }
    
    getAllTicketsnew(){
        return this.http.get<Book[]>(appConfig.apiUrl + '/users/ticketsnew');
    }
    
    getAllTicketsassign(){
        return this.http.get<Book[]>(appConfig.apiUrl + '/users/getAllTicketsassign');
    }

    

    getAllUserassign(){
        return this.http.get<Book[]>(appConfig.apiUrl + '/users/getAlluserassign');
    }

    getAllTicketspending(){
        return this.http.get<Book[]>(appConfig.apiUrl + '/users/ticketspending');
    }

    getAllTicketsclose(){
        return this.http.get<Book[]>(appConfig.apiUrl + '/users/ticketsclose');
    }



    getuserTickets(uid:string){
        return this.http.get<Book[]>(appConfig.apiUrl + '/users/usertickets');
    }

    
    getTecketInfo(a: string){
        return this.http.get(appConfig.apiUrl + '/users/ticketinfo/' + a);
    }


    getById(book:Book) {
        //return this.http.get(appConfig.apiUrl + '/users/current?' + _id);
        return this.http.post(appConfig.apiUrl + '/users/ticketinfo', book)
        
    }


    create(user: User) {
        return this.http.post(appConfig.apiUrl + '/users/register', user);
    }
    addBook(book:Book){

    return this.http.post(appConfig.apiUrl + '/users/registerone', book);  
        //addBook(bookData){
            
                //return this.http.post(appConfig.apiUrl + '/users/registerone', user); 
               //return this.http.post('http://34.192.184.245:3000/notes',bookData);

    }
    addTag(tag:Tag){
        return this.http.post(appConfig.apiUrl + '/users/tag', tag);  
    }

    
    addTicketType(type:Tickettype){
        return this.http.post(appConfig.apiUrl + '/users/tickettype', type);  
    }


    addGroup(group:Group){
        return this.http.post(appConfig.apiUrl + '/users/group', group);  
    }
    //addAccount(acc:Account){
        //return this.http.post(appConfig.apiUrl + '/users/account', acc);  
    //}
    

    update(_id: string) {
        return this.http.post<any>(appConfig.apiUrl + '/users/',{_id:_id});
    }

    delete(_id: string) {
        return this.http.delete(appConfig.apiUrl + '/users/' + _id);
    }
}