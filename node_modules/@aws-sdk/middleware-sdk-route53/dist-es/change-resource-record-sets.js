import { IDENTIFIER_PREFIX_PATTERN } from "./constants";
export function changeResourceRecordSetsMiddleware() {
    return (next) => async (args) => {
        const { ChangeBatch } = args.input;
        const Changes = [];
        for (const change of ChangeBatch.Changes) {
            const { AliasTarget } = change.ResourceRecordSet;
            if (AliasTarget) {
                Changes.push({
                    ...change,
                    ResourceRecordSet: {
                        ...change.ResourceRecordSet,
                        AliasTarget: {
                            ...AliasTarget,
                            HostedZoneId: AliasTarget.HostedZoneId.replace(IDENTIFIER_PREFIX_PATTERN, ""),
                        },
                    },
                });
            }
            else {
                Changes.push(change);
            }
        }
        return next({
            ...args,
            input: {
                ...args.input,
                ChangeBatch: {
                    ...ChangeBatch,
                    Changes,
                },
            },
        });
    };
}
export const changeResourceRecordSetsMiddlewareOptions = {
    step: "initialize",
    tags: ["ROUTE53_IDS", "CHANGE_RESOURCE_RECORD_SETS"],
    name: "changeResourceRecordSetsMiddleware",
    override: true,
};
export const getChangeResourceRecordSetsPlugin = (unused) => ({
    applyToStack: (clientStack) => {
        clientStack.add(changeResourceRecordSetsMiddleware(), changeResourceRecordSetsMiddlewareOptions);
    },
});
