"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteGetObjectResponseRequestFilterSensitiveLog = exports.UploadPartCopyRequestFilterSensitiveLog = exports.UploadPartCopyOutputFilterSensitiveLog = exports.CopyPartResultFilterSensitiveLog = exports.UploadPartRequestFilterSensitiveLog = exports.UploadPartOutputFilterSensitiveLog = exports.SelectObjectContentRequestFilterSensitiveLog = exports.ScanRangeFilterSensitiveLog = exports.RequestProgressFilterSensitiveLog = exports.SelectObjectContentOutputFilterSensitiveLog = exports.SelectObjectContentEventStreamFilterSensitiveLog = exports.StatsEventFilterSensitiveLog = exports.StatsFilterSensitiveLog = exports.RecordsEventFilterSensitiveLog = exports.ProgressEventFilterSensitiveLog = exports.ProgressFilterSensitiveLog = exports.EndEventFilterSensitiveLog = exports.ContinuationEventFilterSensitiveLog = exports.RestoreObjectRequestFilterSensitiveLog = exports.RestoreRequestFilterSensitiveLog = exports.SelectParametersFilterSensitiveLog = exports.OutputSerializationFilterSensitiveLog = exports.JSONOutputFilterSensitiveLog = exports.CSVOutputFilterSensitiveLog = exports.InputSerializationFilterSensitiveLog = exports.ParquetInputFilterSensitiveLog = exports.JSONInputFilterSensitiveLog = exports.CSVInputFilterSensitiveLog = exports.OutputLocationFilterSensitiveLog = exports.S3LocationFilterSensitiveLog = exports.MetadataEntryFilterSensitiveLog = exports.EncryptionFilterSensitiveLog = exports.GlacierJobParametersFilterSensitiveLog = exports.RestoreObjectOutputFilterSensitiveLog = exports.PutPublicAccessBlockRequestFilterSensitiveLog = exports.PutObjectTaggingRequestFilterSensitiveLog = exports.PutObjectTaggingOutputFilterSensitiveLog = exports.PutObjectRetentionRequestFilterSensitiveLog = exports.PutObjectRetentionOutputFilterSensitiveLog = exports.SelectObjectContentEventStream = exports.RestoreRequestType = exports.QuoteFields = exports.JSONType = exports.FileHeaderInfo = exports.CompressionType = exports.ExpressionType = exports.Tier = exports.ObjectAlreadyInActiveTierError = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
const S3ServiceException_1 = require("./S3ServiceException");
class ObjectAlreadyInActiveTierError extends S3ServiceException_1.S3ServiceException {
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
exports.ObjectAlreadyInActiveTierError = ObjectAlreadyInActiveTierError;
var Tier;
(function (Tier) {
    Tier["Bulk"] = "Bulk";
    Tier["Expedited"] = "Expedited";
    Tier["Standard"] = "Standard";
})(Tier = exports.Tier || (exports.Tier = {}));
var ExpressionType;
(function (ExpressionType) {
    ExpressionType["SQL"] = "SQL";
})(ExpressionType = exports.ExpressionType || (exports.ExpressionType = {}));
var CompressionType;
(function (CompressionType) {
    CompressionType["BZIP2"] = "BZIP2";
    CompressionType["GZIP"] = "GZIP";
    CompressionType["NONE"] = "NONE";
})(CompressionType = exports.CompressionType || (exports.CompressionType = {}));
var FileHeaderInfo;
(function (FileHeaderInfo) {
    FileHeaderInfo["IGNORE"] = "IGNORE";
    FileHeaderInfo["NONE"] = "NONE";
    FileHeaderInfo["USE"] = "USE";
})(FileHeaderInfo = exports.FileHeaderInfo || (exports.FileHeaderInfo = {}));
var JSONType;
(function (JSONType) {
    JSONType["DOCUMENT"] = "DOCUMENT";
    JSONType["LINES"] = "LINES";
})(JSONType = exports.JSONType || (exports.JSONType = {}));
var QuoteFields;
(function (QuoteFields) {
    QuoteFields["ALWAYS"] = "ALWAYS";
    QuoteFields["ASNEEDED"] = "ASNEEDED";
})(QuoteFields = exports.QuoteFields || (exports.QuoteFields = {}));
var RestoreRequestType;
(function (RestoreRequestType) {
    RestoreRequestType["SELECT"] = "SELECT";
})(RestoreRequestType = exports.RestoreRequestType || (exports.RestoreRequestType = {}));
var SelectObjectContentEventStream;
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
})(SelectObjectContentEventStream = exports.SelectObjectContentEventStream || (exports.SelectObjectContentEventStream = {}));
const PutObjectRetentionOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutObjectRetentionOutputFilterSensitiveLog = PutObjectRetentionOutputFilterSensitiveLog;
const PutObjectRetentionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutObjectRetentionRequestFilterSensitiveLog = PutObjectRetentionRequestFilterSensitiveLog;
const PutObjectTaggingOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutObjectTaggingOutputFilterSensitiveLog = PutObjectTaggingOutputFilterSensitiveLog;
const PutObjectTaggingRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutObjectTaggingRequestFilterSensitiveLog = PutObjectTaggingRequestFilterSensitiveLog;
const PutPublicAccessBlockRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutPublicAccessBlockRequestFilterSensitiveLog = PutPublicAccessBlockRequestFilterSensitiveLog;
const RestoreObjectOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RestoreObjectOutputFilterSensitiveLog = RestoreObjectOutputFilterSensitiveLog;
const GlacierJobParametersFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GlacierJobParametersFilterSensitiveLog = GlacierJobParametersFilterSensitiveLog;
const EncryptionFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.KMSKeyId && { KMSKeyId: smithy_client_1.SENSITIVE_STRING }),
});
exports.EncryptionFilterSensitiveLog = EncryptionFilterSensitiveLog;
const MetadataEntryFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.MetadataEntryFilterSensitiveLog = MetadataEntryFilterSensitiveLog;
const S3LocationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Encryption && { Encryption: (0, exports.EncryptionFilterSensitiveLog)(obj.Encryption) }),
});
exports.S3LocationFilterSensitiveLog = S3LocationFilterSensitiveLog;
const OutputLocationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.S3 && { S3: (0, exports.S3LocationFilterSensitiveLog)(obj.S3) }),
});
exports.OutputLocationFilterSensitiveLog = OutputLocationFilterSensitiveLog;
const CSVInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CSVInputFilterSensitiveLog = CSVInputFilterSensitiveLog;
const JSONInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.JSONInputFilterSensitiveLog = JSONInputFilterSensitiveLog;
const ParquetInputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ParquetInputFilterSensitiveLog = ParquetInputFilterSensitiveLog;
const InputSerializationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.InputSerializationFilterSensitiveLog = InputSerializationFilterSensitiveLog;
const CSVOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CSVOutputFilterSensitiveLog = CSVOutputFilterSensitiveLog;
const JSONOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.JSONOutputFilterSensitiveLog = JSONOutputFilterSensitiveLog;
const OutputSerializationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.OutputSerializationFilterSensitiveLog = OutputSerializationFilterSensitiveLog;
const SelectParametersFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.SelectParametersFilterSensitiveLog = SelectParametersFilterSensitiveLog;
const RestoreRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.OutputLocation && { OutputLocation: (0, exports.OutputLocationFilterSensitiveLog)(obj.OutputLocation) }),
});
exports.RestoreRequestFilterSensitiveLog = RestoreRequestFilterSensitiveLog;
const RestoreObjectRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RestoreRequest && { RestoreRequest: (0, exports.RestoreRequestFilterSensitiveLog)(obj.RestoreRequest) }),
});
exports.RestoreObjectRequestFilterSensitiveLog = RestoreObjectRequestFilterSensitiveLog;
const ContinuationEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ContinuationEventFilterSensitiveLog = ContinuationEventFilterSensitiveLog;
const EndEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.EndEventFilterSensitiveLog = EndEventFilterSensitiveLog;
const ProgressFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ProgressFilterSensitiveLog = ProgressFilterSensitiveLog;
const ProgressEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ProgressEventFilterSensitiveLog = ProgressEventFilterSensitiveLog;
const RecordsEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RecordsEventFilterSensitiveLog = RecordsEventFilterSensitiveLog;
const StatsFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.StatsFilterSensitiveLog = StatsFilterSensitiveLog;
const StatsEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.StatsEventFilterSensitiveLog = StatsEventFilterSensitiveLog;
const SelectObjectContentEventStreamFilterSensitiveLog = (obj) => {
    if (obj.Records !== undefined)
        return { Records: (0, exports.RecordsEventFilterSensitiveLog)(obj.Records) };
    if (obj.Stats !== undefined)
        return { Stats: (0, exports.StatsEventFilterSensitiveLog)(obj.Stats) };
    if (obj.Progress !== undefined)
        return { Progress: (0, exports.ProgressEventFilterSensitiveLog)(obj.Progress) };
    if (obj.Cont !== undefined)
        return { Cont: (0, exports.ContinuationEventFilterSensitiveLog)(obj.Cont) };
    if (obj.End !== undefined)
        return { End: (0, exports.EndEventFilterSensitiveLog)(obj.End) };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
exports.SelectObjectContentEventStreamFilterSensitiveLog = SelectObjectContentEventStreamFilterSensitiveLog;
const SelectObjectContentOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Payload && { Payload: "STREAMING_CONTENT" }),
});
exports.SelectObjectContentOutputFilterSensitiveLog = SelectObjectContentOutputFilterSensitiveLog;
const RequestProgressFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RequestProgressFilterSensitiveLog = RequestProgressFilterSensitiveLog;
const ScanRangeFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ScanRangeFilterSensitiveLog = ScanRangeFilterSensitiveLog;
const SelectObjectContentRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
});
exports.SelectObjectContentRequestFilterSensitiveLog = SelectObjectContentRequestFilterSensitiveLog;
const UploadPartOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
});
exports.UploadPartOutputFilterSensitiveLog = UploadPartOutputFilterSensitiveLog;
const UploadPartRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
});
exports.UploadPartRequestFilterSensitiveLog = UploadPartRequestFilterSensitiveLog;
const CopyPartResultFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CopyPartResultFilterSensitiveLog = CopyPartResultFilterSensitiveLog;
const UploadPartCopyOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
});
exports.UploadPartCopyOutputFilterSensitiveLog = UploadPartCopyOutputFilterSensitiveLog;
const UploadPartCopyRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
});
exports.UploadPartCopyRequestFilterSensitiveLog = UploadPartCopyRequestFilterSensitiveLog;
const WriteGetObjectResponseRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
});
exports.WriteGetObjectResponseRequestFilterSensitiveLog = WriteGetObjectResponseRequestFilterSensitiveLog;
