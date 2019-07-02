import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataTransportService {

    constructor() {}

    private userSubject = new BehaviorSubject('Kullanıcı');
    user = this.userSubject.asObservable();
    userUpdate(user: any) {
        this.userSubject.next(user);
    }
    
}