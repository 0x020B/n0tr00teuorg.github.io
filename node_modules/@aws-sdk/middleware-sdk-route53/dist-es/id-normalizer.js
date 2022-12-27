import { IDENTIFIER_PREFIX_PATTERN } from "./constants";
const IDENTIFIER_PARAMETERS = ["DelegationSetId", "HostedZoneId", "Id"];
export function idNormalizerMiddleware() {
    return (next) => async (args) => {
        const input = { ...args.input };
        for (const paramName of IDENTIFIER_PARAMETERS) {
            const param = input[paramName];
            if (param) {
                input[paramName] = param.replace(IDENTIFIER_PREFIX_PATTERN, "");
            }
        }
        return next({
            ...args,
            input,
        });
    };
}
export const idNormalizerMiddlewareOptions = {
    step: "initialize",
    tags: ["ROUTE53_IDS"],
    name: "idNormalizerMiddleware",
    override: true,
};
export const getIdNormalizerPlugin = (unused) => ({
    applyToStack: (clientStack) => {
        clientStack.add(idNormalizerMiddleware(), idNormalizerMiddlewareOptions);
    },
});
