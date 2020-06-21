import { Injectable, Inject, Optional } from "@angular/core";
import { HashLocationStrategy, PlatformLocation, APP_BASE_HREF } from '@angular/common';


@Injectable()
export class CustomHashLocationStrategy extends HashLocationStrategy {

    constructor (
        private platformLocation: PlatformLocation,
        @Optional() @Inject(APP_BASE_HREF) baseHref?: string,
    ) {
        super(platformLocation, baseHref)
    }

    path (includeHash: boolean = true): string {
        let path = this.platformLocation.hash == null ? '#' : this.platformLocation.hash;

        if (this.platformLocation.search != null) {
            path += this.platformLocation.search;
        }

        return path.length > 0 ? path.substring(1) : path;
    }

}