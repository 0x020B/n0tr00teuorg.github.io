import { InitializeHandlerOptions, InitializeMiddleware, Pluggable } from "@aws-sdk/types";
export interface IdentifierBearer {
    DelegationSetId?: string;
    HostedZoneId?: string;
    Id?: string;
}
export declare function idNormalizerMiddleware(): InitializeMiddleware<any, any>;
export declare const idNormalizerMiddlewareOptions: InitializeHandlerOptions;
export declare const getIdNormalizerPlugin: (unused: any) => Pluggable<any, any>;
