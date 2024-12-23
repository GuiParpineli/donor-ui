import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ENDPOINTS} from "../utils/Endpoints";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());

    constructor(private http: HttpClient) {
    }

    login(username: string, password: string): Observable<boolean> {
        const url = ENDPOINTS.LOGIN;
        return this.http.post<any>(url, {username, password}).pipe(
            map((response) => {
                if (response && response.accessToken) {
                    localStorage.setItem('accessToken', response.accessToken);
                    this.isLoggedInSubject.next(true);
                    return true;
                }
                return false;
            })
        );
    }

    logout(): void {
        localStorage.removeItem('accessToken');
        this.isLoggedInSubject.next(true);
    }

    isAuthenticated(): boolean {
        return this.isLoggedInSubject.value;
    }

    getToken(): string | null {
        return localStorage.getItem('accessToken');
    }

    private hasToken(): boolean {
        const token = this.getToken();
        return !!token;
    }
}
