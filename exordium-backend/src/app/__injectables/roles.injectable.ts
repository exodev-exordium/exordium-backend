import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Roles {
    management: any[] =[
        { role: 'staff' },
        { role: 'moderator' },
        { role: 'administrator' },
        { role: 'developer' }
    ];

    constructor() { }
    
    check (apiRoles: any[], webRoles: any[] = this.management) {
        const result = webRoles.some(obj1 => {
          return apiRoles.some(obj2 => {
            return obj1.role === obj2.role;
          });
        });
    
        return result;
    }

    icon (role: string): string {
        if (role === "user") {
            return "fa-user";
        } else if (role === "subscriber") {
            return "fa-money-bill-wave";
        } else if (role === "beta") {
            return "fa-tools";
        } else if (role === "supporter") {
            return "fa-users";
        } else if (role === "staff") {
            return "fa-star";
        } else if (role === "moderator") {
            return "fa-star";
        } else if (role === "administrator") {
            return "fa-star-shooting";
        } else if (role === "developer") {
            return "fa-code";
        } else {
            return "fa-user";
        }
    }

    colour (role: string): string {
        return "";
    }

}