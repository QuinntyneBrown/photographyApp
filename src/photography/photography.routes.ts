﻿/// <reference path="../../typings/typescriptapp.d.ts" />

module App.Photography {

    "use strict";

    export class Routes {
        
        public static Configure = ($routeProvider: ng.route.IRouteProvider) => {
            $routeProvider.when("/", {
                templateUrl: "src/photography/components/home/home.html",
                controller: "homeController",
                controllerAs: "vm"
                //resolve: {
                //    routeData: ["routeResolverService", (routeResolverService:App.Common.IRouteResolverService) => {
                //        return routeResolverService.resolve("/");
                //    }]
                //}
            });

            $routeProvider.when("/photos", {
                templateUrl: "src/photography/components/home/home.html",
                controller: "homeController",
                controllerAs: "vm"
                //resolve: {
                //    routeData: ["routeResolverService", (routeResolverService:App.Common.IRouteResolverService) => {
                //        return routeResolverService.resolve("/");
                //    }]
                //}
            });

            $routeProvider.when("/rates", {
                templateUrl: "src/photography/components/rates/rates.html",
                controller: "ratesController",
                controllerAs: "vm"
                //resolve: {
                //    routeData: ["routeResolverService", (routeResolverService:App.Common.IRouteResolverService) => {
                //        return routeResolverService.resolve("/");
                //    }]
                //}
            });

            $routeProvider.when("/upload", {
                templateUrl: "src/photography/components/photoUpload/photoUpload.html",
                controller: "photoUploadController",
                controllerAs: "vm"
                //resolve: {
                //    routeData: ["routeResolverService", (routeResolverService:App.Common.IRouteResolverService) => {
                //        return routeResolverService.resolve("/upload");
                //    }]
                //}
            });
        }
    }

} 