import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { S3ServiceException as __BaseException } from "./S3ServiceException";
export class ObjectAlreadyInActiveTierError extends __BaseException {
    constructor(opts) {
        super({
            name: "ObjectAlreadyInActiveTierError",
            $fault: "client",
            ...opts,
        });
        this.name = "ObjectAlreadyInActiveTierError";
        this.$fault = "client";
        Object.setPrototypeOf(this, ObjectAlreadyInActiveTierError.prototype);
    }
}
export var Tier;
(function (Tier) {
    Tier["Bulk"] = "Bulk";
    Tier["Expedited"] = "Expedited";
    Tier["Standard"] = "Standard";
})(Tier || (Tier = {}));
export var ExpressionType;
(function (ExpressionType) {
    ExpressionType["SQL"] = "SQL";
})(ExpressionType || (ExpressionType = {}));
export var CompressionType;
(function (CompressionType) {
    CompressionType["BZIP2"] = "BZIP2";
    CompressionType["GZIP"] = "GZIP";
    CompressionType["NONE"] = "NONE";
})(CompressionType || (CompressionType = {}));
export var FileHeaderInfo;
(function (FileHeaderInfo) {
    FileHeaderInfo["IGNORE"] = "IGNORE";
    FileHeaderInfo["NONE"] = "NONE";
    FileHeaderInfo["USE"] = "USE";
})(FileHeaderInfo || (FileHeaderInfo = {}));
export var JSONType;
(function (JSONType) {
    JSONType["DOCUMENT"] = "DOCUMENT";
    JSONType["LINES"] = "LINES";
})(JSONType || (JSONType = {}));
export var QuoteFields;
(function (QuoteFields) {
    QuoteFields["ALWAYS"] = "ALWAYS";
    QuoteFields["ASNEEDED"] = "ASNEEDED";
})(QuoteFields || (QuoteFields = {}));
export var RestoreRequestType;
(function (RestoreRequestType) {
    RestoreRequestType["SELECT"] = "SELECT";
})(RestoreRequestType || (RestoreRequestType = {}));
export var SelectObjectContentEventStream;
(function (SelectObjectContentEventStream) {
    SelectObjectContentEventStream.visit = (value, visitor) => {
        if (value.Records !== undefined)
            return visitor.Records(value.Records);
        if (value.Stats !== undefined)
            return visitor.Stats(value.Stats);
        if (value.Progress !== undefined)
            return visitor.Progress(value.Progress);
        if (value.Cont !== undefined)
            return visitor.Cont(value.Cont);
        if (value.End !== undefined)
            return visitor.End(value.End);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(SelectObjectContentEventStream || (SelectObjectContentEventStream = {}));
export const PutObjectRetentionOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutObjectRetentionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutObjectTaggingOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutObjectTaggingRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutPublicAccessBlockRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const RestoreObjectOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GlacierJobParametersFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const EncryptionFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.KMSKeyId && { KMSKeyId: SENSITIVE_STRING }),
});
export const MetadataEntryFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const S3LocationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Encryption && { Encryption: EncryptionFilterSensitiveLog(obj.Encryption) }),
});
export const OutputLocationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.S3 && { S3: S3LocationFilterSensitiveLog(obj.S3) }),
});
export const CSVInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const JSONInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ParquetInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const InputSerializationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const CSVOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const JSONOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const OutputSerializationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const SelectParametersFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const RestoreRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.OutputLocation && { OutputLocation: OutputLocationFilterSensitiveLog(obj.OutputLocation) }),
});
export const RestoreObjectRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RestoreRequest && { RestoreRequest: RestoreRequestFilterSensitiveLog(obj.RestoreRequest) }),
});
export const ContinuationEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const EndEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ProgressFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ProgressEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const RecordsEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const StatsFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const StatsEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const SelectObjectContentEventStreamFilterSensitiveLog = (obj) => {
    if (obj.Records !== undefined)
        return { Records: RecordsEventFilterSensitiveLog(obj.Records) };
    if (obj.Stats !== undefined)
        return { Stats: StatsEventFilterSensitiveLog(obj.Stats) };
    if (obj.Progress !== undefined)
        return { Progress: ProgressEventFilterSensitiveLog(obj.Progress) };
    if (obj.Cont !== undefined)
        return { Cont: ContinuationEventFilterSensitiveLog(obj.Cont) };
    if (obj.End !== undefined)
        return { End: EndEventFilterSensitiveLog(obj.End) };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const SelectObjectContentOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Payload && { Payload: "STREAMING_CONTENT" }),
});
export const RequestProgressFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ScanRangeFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const SelectObjectContentRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
});
export const UploadPartOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
});
export const UploadPartRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
});
export const CopyPartResultFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const UploadPartCopyOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
});
export const UploadPartCopyRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
    ...(obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: SENSITIVE_STRING }),
});
export const WriteGetObjectResponseRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
});
