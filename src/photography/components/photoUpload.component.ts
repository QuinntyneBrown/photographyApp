﻿
module App.Photography {

    "use strict";

    /**
     * @name photoUploadController
     * @module App.Photography
     */
    export class PhotoUploadController {
        
        constructor() {}

        public get photoUploadUrl() { return "http://localhost:65186/api/photo/upload"; }

    }

    
    angular.module("app.photography").controller("photoUploadController", [PhotoUploadController]);
}
 