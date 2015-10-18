﻿declare module App.Common {
    
    export interface IRouteResolverServiceProvider extends ng.IServiceProvider {
        
    }

    export interface IRouteResolverService {
        resolve(routeName:string):ng.IPromise<any>;
    }

    export interface IRoutePromise {
        createInstance(options?: IRoutePromiseInstanceOptions): IRoutePromise;
        priority: number;
        promise: any;
        key:string;
    }

    export interface IRoutePromiseInstanceOptions {
        
    }

    export interface IRoutePromisesPrioritizedGroup {
        promises: IRoutePromise[];
        priority: number;
        isLast: boolean;
    }
} 