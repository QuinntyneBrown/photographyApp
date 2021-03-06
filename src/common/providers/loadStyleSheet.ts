﻿/// <reference path="../../../typings/typescriptapp.d.ts" />

module App.Common {

    "use strict";

    /**
    * @name ILoadStyleSheet
    * @module App.Common
    * @description load styleSheet if not already loaded
    */
    var loadStyleSheet: ILoadStyleSheet = (options: any) => {

        var $q: ng.IQService = <ng.IQService>angular.injector(['ng']).get("$q");
        var $http: ng.IHttpService = <ng.IHttpService>angular.injector(['ng']).get("$http");
        var deferred = $q.defer();
        var styleSheets = document.styleSheets;
        var loaded = false;

        for (var i = 0, max = styleSheets.length; i < max; i++) {
            if (styleSheets[i].href == options.styleSheetUrl) {
                loaded = true;
                deferred.resolve();                
            }
        }

        if (!loaded) {
            $http({ method: "GET", url: options.styleSheetUrl, cache: true }).then(() => {
                var link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = options.styleSheetUrl;
                document.getElementsByTagName("head")[0].appendChild(link);
                deferred.resolve();
            });
        }

        return deferred.promise;
    }

    angular.module("app.common").value("loadStyleSheet", loadStyleSheet);
} 