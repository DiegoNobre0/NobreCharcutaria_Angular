import { LoginService } from 'src/app/service/login.service';
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private loginService: LoginService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.loginService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    }
}
