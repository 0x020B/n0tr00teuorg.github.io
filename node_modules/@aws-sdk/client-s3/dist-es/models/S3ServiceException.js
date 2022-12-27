import { ServiceException as __ServiceException, } from "@aws-sdk/smithy-client";
export class S3ServiceException extends __ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, S3ServiceException.prototype);
    }
}
