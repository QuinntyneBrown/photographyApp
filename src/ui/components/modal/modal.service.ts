﻿/// <reference path="../../../../typings/typescriptapp.d.ts" />

module App.UI {
    
    "use strict";

    /**
     * @name modalService
     * @module App.UI
     */
    export class ModalService implements IModalService {
        constructor(private $q:ng.IQService) { }

        public open = () => {
            
        }

        public close = () => {
            
        }

    }

    angular.module("app.ui").service("modalService", ["$q",ModalService]);
}