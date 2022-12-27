import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { S3ServiceException as __BaseException } from "./S3ServiceException";
export var RequestCharged;
(function (RequestCharged) {
    RequestCharged["requester"] = "requester";
})(RequestCharged || (RequestCharged = {}));
export var RequestPayer;
(function (RequestPayer) {
    RequestPayer["requester"] = "requester";
})(RequestPayer || (RequestPayer = {}));
export class NoSuchUpload extends __BaseException {
    constructor(opts) {
        super({
            name: "NoSuchUpload",
            $fault: "client",
            ...opts,
        });
        this.name = "NoSuchUpload";
        this.$fault = "client";
        Object.setPrototypeOf(this, NoSuchUpload.prototype);
    }
}
export var BucketAccelerateStatus;
(function (BucketAccelerateStatus) {
    BucketAccelerateStatus["Enabled"] = "Enabled";
    BucketAccelerateStatus["Suspended"] = "Suspended";
})(BucketAccelerateStatus || (BucketAccelerateStatus = {}));
export var Type;
(function (Type) {
    Type["AmazonCustomerByEmail"] = "AmazonCustomerByEmail";
    Type["CanonicalUser"] = "CanonicalUser";
    Type["Group"] = "Group";
})(Type || (Type = {}));
export var Permission;
(function (Permission) {
    Permission["FULL_CONTROL"] = "FULL_CONTROL";
    Permission["READ"] = "READ";
    Permission["READ_ACP"] = "READ_ACP";
    Permission["WRITE"] = "WRITE";
    Permission["WRITE_ACP"] = "WRITE_ACP";
})(Permission || (Permission = {}));
export var OwnerOverride;
(function (OwnerOverride) {
    OwnerOverride["Destination"] = "Destination";
})(OwnerOverride || (OwnerOverride = {}));
export var ServerSideEncryption;
(function (ServerSideEncryption) {
    ServerSideEncryption["AES256"] = "AES256";
    ServerSideEncryption["aws_kms"] = "aws:kms";
})(ServerSideEncryption || (ServerSideEncryption = {}));
export var ObjectCannedACL;
(function (ObjectCannedACL) {
    ObjectCannedACL["authenticated_read"] = "authenticated-read";
    ObjectCannedACL["aws_exec_read"] = "aws-exec-read";
    ObjectCannedACL["bucket_owner_full_control"] = "bucket-owner-full-control";
    ObjectCannedACL["bucket_owner_read"] = "bucket-owner-read";
    ObjectCannedACL["private"] = "private";
    ObjectCannedACL["public_read"] = "public-read";
    ObjectCannedACL["public_read_write"] = "public-read-write";
})(ObjectCannedACL || (ObjectCannedACL = {}));
export var ChecksumAlgorithm;
(function (ChecksumAlgorithm) {
    ChecksumAlgorithm["CRC32"] = "CRC32";
    ChecksumAlgorithm["CRC32C"] = "CRC32C";
    ChecksumAlgorithm["SHA1"] = "SHA1";
    ChecksumAlgorithm["SHA256"] = "SHA256";
})(ChecksumAlgorithm || (ChecksumAlgorithm = {}));
export var MetadataDirective;
(function (MetadataDirective) {
    MetadataDirective["COPY"] = "COPY";
    MetadataDirective["REPLACE"] = "REPLACE";
})(MetadataDirective || (MetadataDirective = {}));
export var ObjectLockLegalHoldStatus;
(function (ObjectLockLegalHoldStatus) {
    ObjectLockLegalHoldStatus["OFF"] = "OFF";
    ObjectLockLegalHoldStatus["ON"] = "ON";
})(ObjectLockLegalHoldStatus || (ObjectLockLegalHoldStatus = {}));
export var ObjectLockMode;
(function (ObjectLockMode) {
    ObjectLockMode["COMPLIANCE"] = "COMPLIANCE";
    ObjectLockMode["GOVERNANCE"] = "GOVERNANCE";
})(ObjectLockMode || (ObjectLockMode = {}));
export var StorageClass;
(function (StorageClass) {
    StorageClass["DEEP_ARCHIVE"] = "DEEP_ARCHIVE";
    StorageClass["GLACIER"] = "GLACIER";
    StorageClass["GLACIER_IR"] = "GLACIER_IR";
    StorageClass["INTELLIGENT_TIERING"] = "INTELLIGENT_TIERING";
    StorageClass["ONEZONE_IA"] = "ONEZONE_IA";
    StorageClass["OUTPOSTS"] = "OUTPOSTS";
    StorageClass["REDUCED_REDUNDANCY"] = "REDUCED_REDUNDANCY";
    StorageClass["STANDARD"] = "STANDARD";
    StorageClass["STANDARD_IA"] = "STANDARD_IA";
})(StorageClass || (StorageClass = {}));
export var TaggingDirective;
(function (TaggingDirective) {
    TaggingDirective["COPY"] = "COPY";
    TaggingDirective["REPLACE"] = "REPLACE";
})(TaggingDirective || (TaggingDirective = {}));
export class ObjectNotInActiveTierError extends __BaseException {
    constructor(opts) {
        super({
            name: "ObjectNotInActiveTierError",
            $fault: "client",
            ...opts,
        });
        this.name = "ObjectNotInActiveTierError";
        this.$fault = "client";
        Object.setPrototypeOf(this, ObjectNotInActiveTierError.prototype);
    }
}
export class BucketAlreadyExists extends __BaseException {
    constructor(opts) {
        super({
            name: "BucketAlreadyExists",
            $fault: "client",
            ...opts,
        });
        this.name = "BucketAlreadyExists";
        this.$fault = "client";
        Object.setPrototypeOf(this, BucketAlreadyExists.prototype);
    }
}
export class BucketAlreadyOwnedByYou extends __BaseException {
    constructor(opts) {
        super({
            name: "BucketAlreadyOwnedByYou",
            $fault: "client",
            ...opts,
        });
        this.name = "BucketAlreadyOwnedByYou";
        this.$fault = "client";
        Object.setPrototypeOf(this, BucketAlreadyOwnedByYou.prototype);
    }
}
export var BucketCannedACL;
(function (BucketCannedACL) {
    BucketCannedACL["authenticated_read"] = "authenticated-read";
    BucketCannedACL["private"] = "private";
    BucketCannedACL["public_read"] = "public-read";
    BucketCannedACL["public_read_write"] = "public-read-write";
})(BucketCannedACL || (BucketCannedACL = {}));
export var BucketLocationConstraint;
(function (BucketLocationConstraint) {
    BucketLocationConstraint["EU"] = "EU";
    BucketLocationConstraint["af_south_1"] = "af-south-1";
    BucketLocationConstraint["ap_east_1"] = "ap-east-1";
    BucketLocationConstraint["ap_northeast_1"] = "ap-northeast-1";
    BucketLocationConstraint["ap_northeast_2"] = "ap-northeast-2";
    BucketLocationConstraint["ap_northeast_3"] = "ap-northeast-3";
    BucketLocationConstraint["ap_south_1"] = "ap-south-1";
    BucketLocationConstraint["ap_southeast_1"] = "ap-southeast-1";
    BucketLocationConstraint["ap_southeast_2"] = "ap-southeast-2";
    BucketLocationConstraint["ap_southeast_3"] = "ap-southeast-3";
    BucketLocationConstraint["ca_central_1"] = "ca-central-1";
    BucketLocationConstraint["cn_north_1"] = "cn-north-1";
    BucketLocationConstraint["cn_northwest_1"] = "cn-northwest-1";
    BucketLocationConstraint["eu_central_1"] = "eu-central-1";
    BucketLocationConstraint["eu_north_1"] = "eu-north-1";
    BucketLocationConstraint["eu_south_1"] = "eu-south-1";
    BucketLocationConstraint["eu_west_1"] = "eu-west-1";
    BucketLocationConstraint["eu_west_2"] = "eu-west-2";
    BucketLocationConstraint["eu_west_3"] = "eu-west-3";
    BucketLocationConstraint["me_south_1"] = "me-south-1";
    BucketLocationConstraint["sa_east_1"] = "sa-east-1";
    BucketLocationConstraint["us_east_2"] = "us-east-2";
    BucketLocationConstraint["us_gov_east_1"] = "us-gov-east-1";
    BucketLocationConstraint["us_gov_west_1"] = "us-gov-west-1";
    BucketLocationConstraint["us_west_1"] = "us-west-1";
    BucketLocationConstraint["us_west_2"] = "us-west-2";
})(BucketLocationConstraint || (BucketLocationConstraint = {}));
export var ObjectOwnership;
(function (ObjectOwnership) {
    ObjectOwnership["BucketOwnerEnforced"] = "BucketOwnerEnforced";
    ObjectOwnership["BucketOwnerPreferred"] = "BucketOwnerPreferred";
    ObjectOwnership["ObjectWriter"] = "ObjectWriter";
})(ObjectOwnership || (ObjectOwnership = {}));
export var AnalyticsFilter;
(function (AnalyticsFilter) {
    AnalyticsFilter.visit = (value, visitor) => {
        if (value.Prefix !== undefined)
            return visitor.Prefix(value.Prefix);
        if (value.Tag !== undefined)
            return visitor.Tag(value.Tag);
        if (value.And !== undefined)
            return visitor.And(value.And);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(AnalyticsFilter || (AnalyticsFilter = {}));
export var AnalyticsS3ExportFileFormat;
(function (AnalyticsS3ExportFileFormat) {
    AnalyticsS3ExportFileFormat["CSV"] = "CSV";
})(AnalyticsS3ExportFileFormat || (AnalyticsS3ExportFileFormat = {}));
export var StorageClassAnalysisSchemaVersion;
(function (StorageClassAnalysisSchemaVersion) {
    StorageClassAnalysisSchemaVersion["V_1"] = "V_1";
})(StorageClassAnalysisSchemaVersion || (StorageClassAnalysisSchemaVersion = {}));
export var IntelligentTieringStatus;
(function (IntelligentTieringStatus) {
    IntelligentTieringStatus["Disabled"] = "Disabled";
    IntelligentTieringStatus["Enabled"] = "Enabled";
})(IntelligentTieringStatus || (IntelligentTieringStatus = {}));
export var IntelligentTieringAccessTier;
(function (IntelligentTieringAccessTier) {
    IntelligentTieringAccessTier["ARCHIVE_ACCESS"] = "ARCHIVE_ACCESS";
    IntelligentTieringAccessTier["DEEP_ARCHIVE_ACCESS"] = "DEEP_ARCHIVE_ACCESS";
})(IntelligentTieringAccessTier || (IntelligentTieringAccessTier = {}));
export var InventoryFormat;
(function (InventoryFormat) {
    InventoryFormat["CSV"] = "CSV";
    InventoryFormat["ORC"] = "ORC";
    InventoryFormat["Parquet"] = "Parquet";
})(InventoryFormat || (InventoryFormat = {}));
export var InventoryIncludedObjectVersions;
(function (InventoryIncludedObjectVersions) {
    InventoryIncludedObjectVersions["All"] = "All";
    InventoryIncludedObjectVersions["Current"] = "Current";
})(InventoryIncludedObjectVersions || (InventoryIncludedObjectVersions = {}));
export var InventoryOptionalField;
(function (InventoryOptionalField) {
    InventoryOptionalField["BucketKeyStatus"] = "BucketKeyStatus";
    InventoryOptionalField["ChecksumAlgorithm"] = "ChecksumAlgorithm";
    InventoryOptionalField["ETag"] = "ETag";
    InventoryOptionalField["EncryptionStatus"] = "EncryptionStatus";
    InventoryOptionalField["IntelligentTieringAccessTier"] = "IntelligentTieringAccessTier";
    InventoryOptionalField["IsMultipartUploaded"] = "IsMultipartUploaded";
    InventoryOptionalField["LastModifiedDate"] = "LastModifiedDate";
    InventoryOptionalField["ObjectLockLegalHoldStatus"] = "ObjectLockLegalHoldStatus";
    InventoryOptionalField["ObjectLockMode"] = "ObjectLockMode";
    InventoryOptionalField["ObjectLockRetainUntilDate"] = "ObjectLockRetainUntilDate";
    InventoryOptionalField["ReplicationStatus"] = "ReplicationStatus";
    InventoryOptionalField["Size"] = "Size";
    InventoryOptionalField["StorageClass"] = "StorageClass";
})(InventoryOptionalField || (InventoryOptionalField = {}));
export var InventoryFrequency;
(function (InventoryFrequency) {
    InventoryFrequency["Daily"] = "Daily";
    InventoryFrequency["Weekly"] = "Weekly";
})(InventoryFrequency || (InventoryFrequency = {}));
export var LifecycleRuleFilter;
(function (LifecycleRuleFilter) {
    LifecycleRuleFilter.visit = (value, visitor) => {
        if (value.Prefix !== undefined)
            return visitor.Prefix(value.Prefix);
        if (value.Tag !== undefined)
            return visitor.Tag(value.Tag);
        if (value.ObjectSizeGreaterThan !== undefined)
            return visitor.ObjectSizeGreaterThan(value.ObjectSizeGreaterThan);
        if (value.ObjectSizeLessThan !== undefined)
            return visitor.ObjectSizeLessThan(value.ObjectSizeLessThan);
        if (value.And !== undefined)
            return visitor.And(value.And);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(LifecycleRuleFilter || (LifecycleRuleFilter = {}));
export var TransitionStorageClass;
(function (TransitionStorageClass) {
    TransitionStorageClass["DEEP_ARCHIVE"] = "DEEP_ARCHIVE";
    TransitionStorageClass["GLACIER"] = "GLACIER";
    TransitionStorageClass["GLACIER_IR"] = "GLACIER_IR";
    TransitionStorageClass["INTELLIGENT_TIERING"] = "INTELLIGENT_TIERING";
    TransitionStorageClass["ONEZONE_IA"] = "ONEZONE_IA";
    TransitionStorageClass["STANDARD_IA"] = "STANDARD_IA";
})(TransitionStorageClass || (TransitionStorageClass = {}));
export var ExpirationStatus;
(function (ExpirationStatus) {
    ExpirationStatus["Disabled"] = "Disabled";
    ExpirationStatus["Enabled"] = "Enabled";
})(ExpirationStatus || (ExpirationStatus = {}));
export var BucketLogsPermission;
(function (BucketLogsPermission) {
    BucketLogsPermission["FULL_CONTROL"] = "FULL_CONTROL";
    BucketLogsPermission["READ"] = "READ";
    BucketLogsPermission["WRITE"] = "WRITE";
})(BucketLogsPermission || (BucketLogsPermission = {}));
export var MetricsFilter;
(function (MetricsFilter) {
    MetricsFilter.visit = (value, visitor) => {
        if (value.Prefix !== undefined)
            return visitor.Prefix(value.Prefix);
        if (value.Tag !== undefined)
            return visitor.Tag(value.Tag);
        if (value.AccessPointArn !== undefined)
            return visitor.AccessPointArn(value.AccessPointArn);
        if (value.And !== undefined)
            return visitor.And(value.And);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(MetricsFilter || (MetricsFilter = {}));
export var FilterRuleName;
(function (FilterRuleName) {
    FilterRuleName["prefix"] = "prefix";
    FilterRuleName["suffix"] = "suffix";
})(FilterRuleName || (FilterRuleName = {}));
export var DeleteMarkerReplicationStatus;
(function (DeleteMarkerReplicationStatus) {
    DeleteMarkerReplicationStatus["Disabled"] = "Disabled";
    DeleteMarkerReplicationStatus["Enabled"] = "Enabled";
})(DeleteMarkerReplicationStatus || (DeleteMarkerReplicationStatus = {}));
export var MetricsStatus;
(function (MetricsStatus) {
    MetricsStatus["Disabled"] = "Disabled";
    MetricsStatus["Enabled"] = "Enabled";
})(MetricsStatus || (MetricsStatus = {}));
export var ReplicationTimeStatus;
(function (ReplicationTimeStatus) {
    ReplicationTimeStatus["Disabled"] = "Disabled";
    ReplicationTimeStatus["Enabled"] = "Enabled";
})(ReplicationTimeStatus || (ReplicationTimeStatus = {}));
export var ExistingObjectReplicationStatus;
(function (ExistingObjectReplicationStatus) {
    ExistingObjectReplicationStatus["Disabled"] = "Disabled";
    ExistingObjectReplicationStatus["Enabled"] = "Enabled";
})(ExistingObjectReplicationStatus || (ExistingObjectReplicationStatus = {}));
export var ReplicationRuleFilter;
(function (ReplicationRuleFilter) {
    ReplicationRuleFilter.visit = (value, visitor) => {
        if (value.Prefix !== undefined)
            return visitor.Prefix(value.Prefix);
        if (value.Tag !== undefined)
            return visitor.Tag(value.Tag);
        if (value.And !== undefined)
            return visitor.And(value.And);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(ReplicationRuleFilter || (ReplicationRuleFilter = {}));
export var ReplicaModificationsStatus;
(function (ReplicaModificationsStatus) {
    ReplicaModificationsStatus["Disabled"] = "Disabled";
    ReplicaModificationsStatus["Enabled"] = "Enabled";
})(ReplicaModificationsStatus || (ReplicaModificationsStatus = {}));
export var SseKmsEncryptedObjectsStatus;
(function (SseKmsEncryptedObjectsStatus) {
    SseKmsEncryptedObjectsStatus["Disabled"] = "Disabled";
    SseKmsEncryptedObjectsStatus["Enabled"] = "Enabled";
})(SseKmsEncryptedObjectsStatus || (SseKmsEncryptedObjectsStatus = {}));
export var ReplicationRuleStatus;
(function (ReplicationRuleStatus) {
    ReplicationRuleStatus["Disabled"] = "Disabled";
    ReplicationRuleStatus["Enabled"] = "Enabled";
})(ReplicationRuleStatus || (ReplicationRuleStatus = {}));
export var Payer;
(function (Payer) {
    Payer["BucketOwner"] = "BucketOwner";
    Payer["Requester"] = "Requester";
})(Payer || (Payer = {}));
export var MFADeleteStatus;
(function (MFADeleteStatus) {
    MFADeleteStatus["Disabled"] = "Disabled";
    MFADeleteStatus["Enabled"] = "Enabled";
})(MFADeleteStatus || (MFADeleteStatus = {}));
export var BucketVersioningStatus;
(function (BucketVersioningStatus) {
    BucketVersioningStatus["Enabled"] = "Enabled";
    BucketVersioningStatus["Suspended"] = "Suspended";
})(BucketVersioningStatus || (BucketVersioningStatus = {}));
export var Protocol;
(function (Protocol) {
    Protocol["http"] = "http";
    Protocol["https"] = "https";
})(Protocol || (Protocol = {}));
export var ReplicationStatus;
(function (ReplicationStatus) {
    ReplicationStatus["COMPLETE"] = "COMPLETE";
    ReplicationStatus["FAILED"] = "FAILED";
    ReplicationStatus["PENDING"] = "PENDING";
    ReplicationStatus["REPLICA"] = "REPLICA";
})(ReplicationStatus || (ReplicationStatus = {}));
export var ChecksumMode;
(function (ChecksumMode) {
    ChecksumMode["ENABLED"] = "ENABLED";
})(ChecksumMode || (ChecksumMode = {}));
export class InvalidObjectState extends __BaseException {
    constructor(opts) {
        super({
            name: "InvalidObjectState",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidObjectState";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidObjectState.prototype);
        this.StorageClass = opts.StorageClass;
        this.AccessTier = opts.AccessTier;
    }
}
export class NoSuchKey extends __BaseException {
    constructor(opts) {
        super({
            name: "NoSuchKey",
            $fault: "client",
            ...opts,
        });
        this.name = "NoSuchKey";
        this.$fault = "client";
        Object.setPrototypeOf(this, NoSuchKey.prototype);
    }
}
export var ObjectAttributes;
(function (ObjectAttributes) {
    ObjectAttributes["CHECKSUM"] = "Checksum";
    ObjectAttributes["ETAG"] = "ETag";
    ObjectAttributes["OBJECT_PARTS"] = "ObjectParts";
    ObjectAttributes["OBJECT_SIZE"] = "ObjectSize";
    ObjectAttributes["STORAGE_CLASS"] = "StorageClass";
})(ObjectAttributes || (ObjectAttributes = {}));
export var ObjectLockEnabled;
(function (ObjectLockEnabled) {
    ObjectLockEnabled["Enabled"] = "Enabled";
})(ObjectLockEnabled || (ObjectLockEnabled = {}));
export var ObjectLockRetentionMode;
(function (ObjectLockRetentionMode) {
    ObjectLockRetentionMode["COMPLIANCE"] = "COMPLIANCE";
    ObjectLockRetentionMode["GOVERNANCE"] = "GOVERNANCE";
})(ObjectLockRetentionMode || (ObjectLockRetentionMode = {}));
export class NotFound extends __BaseException {
    constructor(opts) {
        super({
            name: "NotFound",
            $fault: "client",
            ...opts,
        });
        this.name = "NotFound";
        this.$fault = "client";
        Object.setPrototypeOf(this, NotFound.prototype);
    }
}
export var ArchiveStatus;
(function (ArchiveStatus) {
    ArchiveStatus["ARCHIVE_ACCESS"] = "ARCHIVE_ACCESS";
    ArchiveStatus["DEEP_ARCHIVE_ACCESS"] = "DEEP_ARCHIVE_ACCESS";
})(ArchiveStatus || (ArchiveStatus = {}));
export var EncodingType;
(function (EncodingType) {
    EncodingType["url"] = "url";
})(EncodingType || (EncodingType = {}));
export var ObjectStorageClass;
(function (ObjectStorageClass) {
    ObjectStorageClass["DEEP_ARCHIVE"] = "DEEP_ARCHIVE";
    ObjectStorageClass["GLACIER"] = "GLACIER";
    ObjectStorageClass["GLACIER_IR"] = "GLACIER_IR";
    ObjectStorageClass["INTELLIGENT_TIERING"] = "INTELLIGENT_TIERING";
    ObjectStorageClass["ONEZONE_IA"] = "ONEZONE_IA";
    ObjectStorageClass["OUTPOSTS"] = "OUTPOSTS";
    ObjectStorageClass["REDUCED_REDUNDANCY"] = "REDUCED_REDUNDANCY";
    ObjectStorageClass["STANDARD"] = "STANDARD";
    ObjectStorageClass["STANDARD_IA"] = "STANDARD_IA";
})(ObjectStorageClass || (ObjectStorageClass = {}));
export class NoSuchBucket extends __BaseException {
    constructor(opts) {
        super({
            name: "NoSuchBucket",
            $fault: "client",
            ...opts,
        });
        this.name = "NoSuchBucket";
        this.$fault = "client";
        Object.setPrototypeOf(this, NoSuchBucket.prototype);
    }
}
export var ObjectVersionStorageClass;
(function (ObjectVersionStorageClass) {
    ObjectVersionStorageClass["STANDARD"] = "STANDARD";
})(ObjectVersionStorageClass || (ObjectVersionStorageClass = {}));
export var MFADelete;
(function (MFADelete) {
    MFADelete["Disabled"] = "Disabled";
    MFADelete["Enabled"] = "Enabled";
})(MFADelete || (MFADelete = {}));
export const AbortIncompleteMultipartUploadFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const AbortMultipartUploadOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const AbortMultipartUploadRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const AccelerateConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GranteeFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GrantFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const OwnerFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const AccessControlPolicyFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const AccessControlTranslationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const CompleteMultipartUploadOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
});
export const CompletedPartFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const CompletedMultipartUploadFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const CompleteMultipartUploadRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
});
export const CopyObjectResultFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const CopyObjectOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
});
export const CopyObjectRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
    ...(obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: SENSITIVE_STRING }),
});
export const CreateBucketOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const CreateBucketConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const CreateBucketRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const CreateMultipartUploadOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
});
export const CreateMultipartUploadRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
});
export const DeleteBucketRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteBucketAnalyticsConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteBucketCorsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteBucketEncryptionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteBucketIntelligentTieringConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteBucketInventoryConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteBucketLifecycleRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteBucketMetricsConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteBucketOwnershipControlsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteBucketPolicyRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteBucketReplicationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteBucketTaggingRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteBucketWebsiteRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteObjectOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteObjectRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeletedObjectFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const _ErrorFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteObjectsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ObjectIdentifierFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteObjectsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteObjectTaggingOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteObjectTaggingRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeletePublicAccessBlockRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketAccelerateConfigurationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketAccelerateConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketAclOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketAclRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const TagFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const AnalyticsAndOperatorFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const AnalyticsFilterFilterSensitiveLog = (obj) => {
    if (obj.Prefix !== undefined)
        return { Prefix: obj.Prefix };
    if (obj.Tag !== undefined)
        return { Tag: TagFilterSensitiveLog(obj.Tag) };
    if (obj.And !== undefined)
        return { And: AnalyticsAndOperatorFilterSensitiveLog(obj.And) };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const AnalyticsS3BucketDestinationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const AnalyticsExportDestinationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const StorageClassAnalysisDataExportFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const StorageClassAnalysisFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const AnalyticsConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Filter && { Filter: AnalyticsFilterFilterSensitiveLog(obj.Filter) }),
});
export const GetBucketAnalyticsConfigurationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AnalyticsConfiguration && {
        AnalyticsConfiguration: AnalyticsConfigurationFilterSensitiveLog(obj.AnalyticsConfiguration),
    }),
});
export const GetBucketAnalyticsConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const CORSRuleFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketCorsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketCorsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ServerSideEncryptionByDefaultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.KMSMasterKeyID && { KMSMasterKeyID: SENSITIVE_STRING }),
});
export const ServerSideEncryptionRuleFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ApplyServerSideEncryptionByDefault && {
        ApplyServerSideEncryptionByDefault: ServerSideEncryptionByDefaultFilterSensitiveLog(obj.ApplyServerSideEncryptionByDefault),
    }),
});
export const ServerSideEncryptionConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => ServerSideEncryptionRuleFilterSensitiveLog(item)) }),
});
export const GetBucketEncryptionOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ServerSideEncryptionConfiguration && {
        ServerSideEncryptionConfiguration: ServerSideEncryptionConfigurationFilterSensitiveLog(obj.ServerSideEncryptionConfiguration),
    }),
});
export const GetBucketEncryptionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const IntelligentTieringAndOperatorFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const IntelligentTieringFilterFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const TieringFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const IntelligentTieringConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketIntelligentTieringConfigurationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketIntelligentTieringConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const SSEKMSFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.KeyId && { KeyId: SENSITIVE_STRING }),
});
export const SSES3FilterSensitiveLog = (obj) => ({
    ...obj,
});
export const InventoryEncryptionFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMS && { SSEKMS: SSEKMSFilterSensitiveLog(obj.SSEKMS) }),
});
export const InventoryS3BucketDestinationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Encryption && { Encryption: InventoryEncryptionFilterSensitiveLog(obj.Encryption) }),
});
export const InventoryDestinationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.S3BucketDestination && {
        S3BucketDestination: InventoryS3BucketDestinationFilterSensitiveLog(obj.S3BucketDestination),
    }),
});
export const InventoryFilterFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const InventoryScheduleFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const InventoryConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Destination && { Destination: InventoryDestinationFilterSensitiveLog(obj.Destination) }),
});
export const GetBucketInventoryConfigurationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.InventoryConfiguration && {
        InventoryConfiguration: InventoryConfigurationFilterSensitiveLog(obj.InventoryConfiguration),
    }),
});
export const GetBucketInventoryConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const LifecycleExpirationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const LifecycleRuleAndOperatorFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const LifecycleRuleFilterFilterSensitiveLog = (obj) => {
    if (obj.Prefix !== undefined)
        return { Prefix: obj.Prefix };
    if (obj.Tag !== undefined)
        return { Tag: TagFilterSensitiveLog(obj.Tag) };
    if (obj.ObjectSizeGreaterThan !== undefined)
        return { ObjectSizeGreaterThan: obj.ObjectSizeGreaterThan };
    if (obj.ObjectSizeLessThan !== undefined)
        return { ObjectSizeLessThan: obj.ObjectSizeLessThan };
    if (obj.And !== undefined)
        return { And: LifecycleRuleAndOperatorFilterSensitiveLog(obj.And) };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const NoncurrentVersionExpirationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const NoncurrentVersionTransitionFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const TransitionFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const LifecycleRuleFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Filter && { Filter: LifecycleRuleFilterFilterSensitiveLog(obj.Filter) }),
});
export const GetBucketLifecycleConfigurationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => LifecycleRuleFilterSensitiveLog(item)) }),
});
export const GetBucketLifecycleConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketLocationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketLocationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const TargetGrantFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const LoggingEnabledFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketLoggingOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketLoggingRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const MetricsAndOperatorFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const MetricsFilterFilterSensitiveLog = (obj) => {
    if (obj.Prefix !== undefined)
        return { Prefix: obj.Prefix };
    if (obj.Tag !== undefined)
        return { Tag: TagFilterSensitiveLog(obj.Tag) };
    if (obj.AccessPointArn !== undefined)
        return { AccessPointArn: obj.AccessPointArn };
    if (obj.And !== undefined)
        return { And: MetricsAndOperatorFilterSensitiveLog(obj.And) };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const MetricsConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Filter && { Filter: MetricsFilterFilterSensitiveLog(obj.Filter) }),
});
export const GetBucketMetricsConfigurationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.MetricsConfiguration && {
        MetricsConfiguration: MetricsConfigurationFilterSensitiveLog(obj.MetricsConfiguration),
    }),
});
export const GetBucketMetricsConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketNotificationConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const EventBridgeConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const FilterRuleFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const S3KeyFilterFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const NotificationConfigurationFilterFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const LambdaFunctionConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const QueueConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const TopicConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const NotificationConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const OwnershipControlsRuleFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const OwnershipControlsFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketOwnershipControlsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketOwnershipControlsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketPolicyOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketPolicyRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PolicyStatusFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketPolicyStatusOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketPolicyStatusRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteMarkerReplicationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const EncryptionConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ReplicationTimeValueFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const MetricsFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ReplicationTimeFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DestinationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ExistingObjectReplicationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ReplicationRuleAndOperatorFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ReplicationRuleFilterFilterSensitiveLog = (obj) => {
    if (obj.Prefix !== undefined)
        return { Prefix: obj.Prefix };
    if (obj.Tag !== undefined)
        return { Tag: TagFilterSensitiveLog(obj.Tag) };
    if (obj.And !== undefined)
        return { And: ReplicationRuleAndOperatorFilterSensitiveLog(obj.And) };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const ReplicaModificationsFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const SseKmsEncryptedObjectsFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const SourceSelectionCriteriaFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ReplicationRuleFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Filter && { Filter: ReplicationRuleFilterFilterSensitiveLog(obj.Filter) }),
});
export const ReplicationConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => ReplicationRuleFilterSensitiveLog(item)) }),
});
export const GetBucketReplicationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ReplicationConfiguration && {
        ReplicationConfiguration: ReplicationConfigurationFilterSensitiveLog(obj.ReplicationConfiguration),
    }),
});
export const GetBucketReplicationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketRequestPaymentOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketRequestPaymentRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketTaggingOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketTaggingRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketVersioningOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketVersioningRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ErrorDocumentFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const IndexDocumentFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const RedirectAllRequestsToFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ConditionFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const RedirectFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const RoutingRuleFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketWebsiteOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetBucketWebsiteRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetObjectOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
});
export const GetObjectRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
});
export const GetObjectAclOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetObjectAclRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ChecksumFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ObjectPartFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetObjectAttributesPartsFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetObjectAttributesOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetObjectAttributesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
});
export const ObjectLockLegalHoldFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetObjectLegalHoldOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetObjectLegalHoldRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DefaultRetentionFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ObjectLockRuleFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ObjectLockConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetObjectLockConfigurationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetObjectLockConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ObjectLockRetentionFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetObjectRetentionOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetObjectRetentionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetObjectTaggingOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetObjectTaggingRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetObjectTorrentOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetObjectTorrentRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PublicAccessBlockConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetPublicAccessBlockOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const GetPublicAccessBlockRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const HeadBucketRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const HeadObjectOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
});
export const HeadObjectRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
});
export const ListBucketAnalyticsConfigurationsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AnalyticsConfigurationList && {
        AnalyticsConfigurationList: obj.AnalyticsConfigurationList.map((item) => AnalyticsConfigurationFilterSensitiveLog(item)),
    }),
});
export const ListBucketAnalyticsConfigurationsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ListBucketIntelligentTieringConfigurationsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ListBucketIntelligentTieringConfigurationsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ListBucketInventoryConfigurationsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.InventoryConfigurationList && {
        InventoryConfigurationList: obj.InventoryConfigurationList.map((item) => InventoryConfigurationFilterSensitiveLog(item)),
    }),
});
export const ListBucketInventoryConfigurationsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ListBucketMetricsConfigurationsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.MetricsConfigurationList && {
        MetricsConfigurationList: obj.MetricsConfigurationList.map((item) => MetricsConfigurationFilterSensitiveLog(item)),
    }),
});
export const ListBucketMetricsConfigurationsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const BucketFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ListBucketsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const CommonPrefixFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const InitiatorFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const MultipartUploadFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ListMultipartUploadsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ListMultipartUploadsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const _ObjectFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ListObjectsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ListObjectsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ListObjectsV2OutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ListObjectsV2RequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const DeleteMarkerEntryFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ObjectVersionFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ListObjectVersionsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ListObjectVersionsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PartFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ListPartsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ListPartsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
});
export const PutBucketAccelerateConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutBucketAclRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutBucketAnalyticsConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AnalyticsConfiguration && {
        AnalyticsConfiguration: AnalyticsConfigurationFilterSensitiveLog(obj.AnalyticsConfiguration),
    }),
});
export const CORSConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutBucketCorsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutBucketEncryptionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ServerSideEncryptionConfiguration && {
        ServerSideEncryptionConfiguration: ServerSideEncryptionConfigurationFilterSensitiveLog(obj.ServerSideEncryptionConfiguration),
    }),
});
export const PutBucketIntelligentTieringConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutBucketInventoryConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.InventoryConfiguration && {
        InventoryConfiguration: InventoryConfigurationFilterSensitiveLog(obj.InventoryConfiguration),
    }),
});
export const BucketLifecycleConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => LifecycleRuleFilterSensitiveLog(item)) }),
});
export const PutBucketLifecycleConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.LifecycleConfiguration && {
        LifecycleConfiguration: BucketLifecycleConfigurationFilterSensitiveLog(obj.LifecycleConfiguration),
    }),
});
export const BucketLoggingStatusFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutBucketLoggingRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutBucketMetricsConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.MetricsConfiguration && {
        MetricsConfiguration: MetricsConfigurationFilterSensitiveLog(obj.MetricsConfiguration),
    }),
});
export const PutBucketNotificationConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutBucketOwnershipControlsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutBucketPolicyRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutBucketReplicationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ReplicationConfiguration && {
        ReplicationConfiguration: ReplicationConfigurationFilterSensitiveLog(obj.ReplicationConfiguration),
    }),
});
export const RequestPaymentConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutBucketRequestPaymentRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const TaggingFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutBucketTaggingRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const VersioningConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutBucketVersioningRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const WebsiteConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutBucketWebsiteRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutObjectOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
});
export const PutObjectRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
});
export const PutObjectAclOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutObjectAclRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutObjectLegalHoldOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutObjectLegalHoldRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutObjectLockConfigurationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const PutObjectLockConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
