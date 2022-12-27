"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecksumMode = exports.ReplicationStatus = exports.Protocol = exports.BucketVersioningStatus = exports.MFADeleteStatus = exports.Payer = exports.ReplicationRuleStatus = exports.SseKmsEncryptedObjectsStatus = exports.ReplicaModificationsStatus = exports.ReplicationRuleFilter = exports.ExistingObjectReplicationStatus = exports.ReplicationTimeStatus = exports.MetricsStatus = exports.DeleteMarkerReplicationStatus = exports.FilterRuleName = exports.MetricsFilter = exports.BucketLogsPermission = exports.ExpirationStatus = exports.TransitionStorageClass = exports.LifecycleRuleFilter = exports.InventoryFrequency = exports.InventoryOptionalField = exports.InventoryIncludedObjectVersions = exports.InventoryFormat = exports.IntelligentTieringAccessTier = exports.IntelligentTieringStatus = exports.StorageClassAnalysisSchemaVersion = exports.AnalyticsS3ExportFileFormat = exports.AnalyticsFilter = exports.ObjectOwnership = exports.BucketLocationConstraint = exports.BucketCannedACL = exports.BucketAlreadyOwnedByYou = exports.BucketAlreadyExists = exports.ObjectNotInActiveTierError = exports.TaggingDirective = exports.StorageClass = exports.ObjectLockMode = exports.ObjectLockLegalHoldStatus = exports.MetadataDirective = exports.ChecksumAlgorithm = exports.ObjectCannedACL = exports.ServerSideEncryption = exports.OwnerOverride = exports.Permission = exports.Type = exports.BucketAccelerateStatus = exports.NoSuchUpload = exports.RequestPayer = exports.RequestCharged = void 0;
exports._ErrorFilterSensitiveLog = exports.DeletedObjectFilterSensitiveLog = exports.DeleteObjectRequestFilterSensitiveLog = exports.DeleteObjectOutputFilterSensitiveLog = exports.DeleteBucketWebsiteRequestFilterSensitiveLog = exports.DeleteBucketTaggingRequestFilterSensitiveLog = exports.DeleteBucketReplicationRequestFilterSensitiveLog = exports.DeleteBucketPolicyRequestFilterSensitiveLog = exports.DeleteBucketOwnershipControlsRequestFilterSensitiveLog = exports.DeleteBucketMetricsConfigurationRequestFilterSensitiveLog = exports.DeleteBucketLifecycleRequestFilterSensitiveLog = exports.DeleteBucketInventoryConfigurationRequestFilterSensitiveLog = exports.DeleteBucketIntelligentTieringConfigurationRequestFilterSensitiveLog = exports.DeleteBucketEncryptionRequestFilterSensitiveLog = exports.DeleteBucketCorsRequestFilterSensitiveLog = exports.DeleteBucketAnalyticsConfigurationRequestFilterSensitiveLog = exports.DeleteBucketRequestFilterSensitiveLog = exports.CreateMultipartUploadRequestFilterSensitiveLog = exports.CreateMultipartUploadOutputFilterSensitiveLog = exports.CreateBucketRequestFilterSensitiveLog = exports.CreateBucketConfigurationFilterSensitiveLog = exports.CreateBucketOutputFilterSensitiveLog = exports.CopyObjectRequestFilterSensitiveLog = exports.CopyObjectOutputFilterSensitiveLog = exports.CopyObjectResultFilterSensitiveLog = exports.CompleteMultipartUploadRequestFilterSensitiveLog = exports.CompletedMultipartUploadFilterSensitiveLog = exports.CompletedPartFilterSensitiveLog = exports.CompleteMultipartUploadOutputFilterSensitiveLog = exports.AccessControlTranslationFilterSensitiveLog = exports.AccessControlPolicyFilterSensitiveLog = exports.OwnerFilterSensitiveLog = exports.GrantFilterSensitiveLog = exports.GranteeFilterSensitiveLog = exports.AccelerateConfigurationFilterSensitiveLog = exports.AbortMultipartUploadRequestFilterSensitiveLog = exports.AbortMultipartUploadOutputFilterSensitiveLog = exports.AbortIncompleteMultipartUploadFilterSensitiveLog = exports.MFADelete = exports.ObjectVersionStorageClass = exports.NoSuchBucket = exports.ObjectStorageClass = exports.EncodingType = exports.ArchiveStatus = exports.NotFound = exports.ObjectLockRetentionMode = exports.ObjectLockEnabled = exports.ObjectAttributes = exports.NoSuchKey = exports.InvalidObjectState = void 0;
exports.NoncurrentVersionTransitionFilterSensitiveLog = exports.NoncurrentVersionExpirationFilterSensitiveLog = exports.LifecycleRuleFilterFilterSensitiveLog = exports.LifecycleRuleAndOperatorFilterSensitiveLog = exports.LifecycleExpirationFilterSensitiveLog = exports.GetBucketInventoryConfigurationRequestFilterSensitiveLog = exports.GetBucketInventoryConfigurationOutputFilterSensitiveLog = exports.InventoryConfigurationFilterSensitiveLog = exports.InventoryScheduleFilterSensitiveLog = exports.InventoryFilterFilterSensitiveLog = exports.InventoryDestinationFilterSensitiveLog = exports.InventoryS3BucketDestinationFilterSensitiveLog = exports.InventoryEncryptionFilterSensitiveLog = exports.SSES3FilterSensitiveLog = exports.SSEKMSFilterSensitiveLog = exports.GetBucketIntelligentTieringConfigurationRequestFilterSensitiveLog = exports.GetBucketIntelligentTieringConfigurationOutputFilterSensitiveLog = exports.IntelligentTieringConfigurationFilterSensitiveLog = exports.TieringFilterSensitiveLog = exports.IntelligentTieringFilterFilterSensitiveLog = exports.IntelligentTieringAndOperatorFilterSensitiveLog = exports.GetBucketEncryptionRequestFilterSensitiveLog = exports.GetBucketEncryptionOutputFilterSensitiveLog = exports.ServerSideEncryptionConfigurationFilterSensitiveLog = exports.ServerSideEncryptionRuleFilterSensitiveLog = exports.ServerSideEncryptionByDefaultFilterSensitiveLog = exports.GetBucketCorsRequestFilterSensitiveLog = exports.GetBucketCorsOutputFilterSensitiveLog = exports.CORSRuleFilterSensitiveLog = exports.GetBucketAnalyticsConfigurationRequestFilterSensitiveLog = exports.GetBucketAnalyticsConfigurationOutputFilterSensitiveLog = exports.AnalyticsConfigurationFilterSensitiveLog = exports.StorageClassAnalysisFilterSensitiveLog = exports.StorageClassAnalysisDataExportFilterSensitiveLog = exports.AnalyticsExportDestinationFilterSensitiveLog = exports.AnalyticsS3BucketDestinationFilterSensitiveLog = exports.AnalyticsFilterFilterSensitiveLog = exports.AnalyticsAndOperatorFilterSensitiveLog = exports.TagFilterSensitiveLog = exports.GetBucketAclRequestFilterSensitiveLog = exports.GetBucketAclOutputFilterSensitiveLog = exports.GetBucketAccelerateConfigurationRequestFilterSensitiveLog = exports.GetBucketAccelerateConfigurationOutputFilterSensitiveLog = exports.DeletePublicAccessBlockRequestFilterSensitiveLog = exports.DeleteObjectTaggingRequestFilterSensitiveLog = exports.DeleteObjectTaggingOutputFilterSensitiveLog = exports.DeleteObjectsRequestFilterSensitiveLog = exports.DeleteFilterSensitiveLog = exports.ObjectIdentifierFilterSensitiveLog = exports.DeleteObjectsOutputFilterSensitiveLog = void 0;
exports.GetBucketRequestPaymentOutputFilterSensitiveLog = exports.GetBucketReplicationRequestFilterSensitiveLog = exports.GetBucketReplicationOutputFilterSensitiveLog = exports.ReplicationConfigurationFilterSensitiveLog = exports.ReplicationRuleFilterSensitiveLog = exports.SourceSelectionCriteriaFilterSensitiveLog = exports.SseKmsEncryptedObjectsFilterSensitiveLog = exports.ReplicaModificationsFilterSensitiveLog = exports.ReplicationRuleFilterFilterSensitiveLog = exports.ReplicationRuleAndOperatorFilterSensitiveLog = exports.ExistingObjectReplicationFilterSensitiveLog = exports.DestinationFilterSensitiveLog = exports.ReplicationTimeFilterSensitiveLog = exports.MetricsFilterSensitiveLog = exports.ReplicationTimeValueFilterSensitiveLog = exports.EncryptionConfigurationFilterSensitiveLog = exports.DeleteMarkerReplicationFilterSensitiveLog = exports.GetBucketPolicyStatusRequestFilterSensitiveLog = exports.GetBucketPolicyStatusOutputFilterSensitiveLog = exports.PolicyStatusFilterSensitiveLog = exports.GetBucketPolicyRequestFilterSensitiveLog = exports.GetBucketPolicyOutputFilterSensitiveLog = exports.GetBucketOwnershipControlsRequestFilterSensitiveLog = exports.GetBucketOwnershipControlsOutputFilterSensitiveLog = exports.OwnershipControlsFilterSensitiveLog = exports.OwnershipControlsRuleFilterSensitiveLog = exports.NotificationConfigurationFilterSensitiveLog = exports.TopicConfigurationFilterSensitiveLog = exports.QueueConfigurationFilterSensitiveLog = exports.LambdaFunctionConfigurationFilterSensitiveLog = exports.NotificationConfigurationFilterFilterSensitiveLog = exports.S3KeyFilterFilterSensitiveLog = exports.FilterRuleFilterSensitiveLog = exports.EventBridgeConfigurationFilterSensitiveLog = exports.GetBucketNotificationConfigurationRequestFilterSensitiveLog = exports.GetBucketMetricsConfigurationRequestFilterSensitiveLog = exports.GetBucketMetricsConfigurationOutputFilterSensitiveLog = exports.MetricsConfigurationFilterSensitiveLog = exports.MetricsFilterFilterSensitiveLog = exports.MetricsAndOperatorFilterSensitiveLog = exports.GetBucketLoggingRequestFilterSensitiveLog = exports.GetBucketLoggingOutputFilterSensitiveLog = exports.LoggingEnabledFilterSensitiveLog = exports.TargetGrantFilterSensitiveLog = exports.GetBucketLocationRequestFilterSensitiveLog = exports.GetBucketLocationOutputFilterSensitiveLog = exports.GetBucketLifecycleConfigurationRequestFilterSensitiveLog = exports.GetBucketLifecycleConfigurationOutputFilterSensitiveLog = exports.LifecycleRuleFilterSensitiveLog = exports.TransitionFilterSensitiveLog = void 0;
exports.ListBucketMetricsConfigurationsOutputFilterSensitiveLog = exports.ListBucketInventoryConfigurationsRequestFilterSensitiveLog = exports.ListBucketInventoryConfigurationsOutputFilterSensitiveLog = exports.ListBucketIntelligentTieringConfigurationsRequestFilterSensitiveLog = exports.ListBucketIntelligentTieringConfigurationsOutputFilterSensitiveLog = exports.ListBucketAnalyticsConfigurationsRequestFilterSensitiveLog = exports.ListBucketAnalyticsConfigurationsOutputFilterSensitiveLog = exports.HeadObjectRequestFilterSensitiveLog = exports.HeadObjectOutputFilterSensitiveLog = exports.HeadBucketRequestFilterSensitiveLog = exports.GetPublicAccessBlockRequestFilterSensitiveLog = exports.GetPublicAccessBlockOutputFilterSensitiveLog = exports.PublicAccessBlockConfigurationFilterSensitiveLog = exports.GetObjectTorrentRequestFilterSensitiveLog = exports.GetObjectTorrentOutputFilterSensitiveLog = exports.GetObjectTaggingRequestFilterSensitiveLog = exports.GetObjectTaggingOutputFilterSensitiveLog = exports.GetObjectRetentionRequestFilterSensitiveLog = exports.GetObjectRetentionOutputFilterSensitiveLog = exports.ObjectLockRetentionFilterSensitiveLog = exports.GetObjectLockConfigurationRequestFilterSensitiveLog = exports.GetObjectLockConfigurationOutputFilterSensitiveLog = exports.ObjectLockConfigurationFilterSensitiveLog = exports.ObjectLockRuleFilterSensitiveLog = exports.DefaultRetentionFilterSensitiveLog = exports.GetObjectLegalHoldRequestFilterSensitiveLog = exports.GetObjectLegalHoldOutputFilterSensitiveLog = exports.ObjectLockLegalHoldFilterSensitiveLog = exports.GetObjectAttributesRequestFilterSensitiveLog = exports.GetObjectAttributesOutputFilterSensitiveLog = exports.GetObjectAttributesPartsFilterSensitiveLog = exports.ObjectPartFilterSensitiveLog = exports.ChecksumFilterSensitiveLog = exports.GetObjectAclRequestFilterSensitiveLog = exports.GetObjectAclOutputFilterSensitiveLog = exports.GetObjectRequestFilterSensitiveLog = exports.GetObjectOutputFilterSensitiveLog = exports.GetBucketWebsiteRequestFilterSensitiveLog = exports.GetBucketWebsiteOutputFilterSensitiveLog = exports.RoutingRuleFilterSensitiveLog = exports.RedirectFilterSensitiveLog = exports.ConditionFilterSensitiveLog = exports.RedirectAllRequestsToFilterSensitiveLog = exports.IndexDocumentFilterSensitiveLog = exports.ErrorDocumentFilterSensitiveLog = exports.GetBucketVersioningRequestFilterSensitiveLog = exports.GetBucketVersioningOutputFilterSensitiveLog = exports.GetBucketTaggingRequestFilterSensitiveLog = exports.GetBucketTaggingOutputFilterSensitiveLog = exports.GetBucketRequestPaymentRequestFilterSensitiveLog = void 0;
exports.PutObjectLegalHoldOutputFilterSensitiveLog = exports.PutObjectAclRequestFilterSensitiveLog = exports.PutObjectAclOutputFilterSensitiveLog = exports.PutObjectRequestFilterSensitiveLog = exports.PutObjectOutputFilterSensitiveLog = exports.PutBucketWebsiteRequestFilterSensitiveLog = exports.WebsiteConfigurationFilterSensitiveLog = exports.PutBucketVersioningRequestFilterSensitiveLog = exports.VersioningConfigurationFilterSensitiveLog = exports.PutBucketTaggingRequestFilterSensitiveLog = exports.TaggingFilterSensitiveLog = exports.PutBucketRequestPaymentRequestFilterSensitiveLog = exports.RequestPaymentConfigurationFilterSensitiveLog = exports.PutBucketReplicationRequestFilterSensitiveLog = exports.PutBucketPolicyRequestFilterSensitiveLog = exports.PutBucketOwnershipControlsRequestFilterSensitiveLog = exports.PutBucketNotificationConfigurationRequestFilterSensitiveLog = exports.PutBucketMetricsConfigurationRequestFilterSensitiveLog = exports.PutBucketLoggingRequestFilterSensitiveLog = exports.BucketLoggingStatusFilterSensitiveLog = exports.PutBucketLifecycleConfigurationRequestFilterSensitiveLog = exports.BucketLifecycleConfigurationFilterSensitiveLog = exports.PutBucketInventoryConfigurationRequestFilterSensitiveLog = exports.PutBucketIntelligentTieringConfigurationRequestFilterSensitiveLog = exports.PutBucketEncryptionRequestFilterSensitiveLog = exports.PutBucketCorsRequestFilterSensitiveLog = exports.CORSConfigurationFilterSensitiveLog = exports.PutBucketAnalyticsConfigurationRequestFilterSensitiveLog = exports.PutBucketAclRequestFilterSensitiveLog = exports.PutBucketAccelerateConfigurationRequestFilterSensitiveLog = exports.ListPartsRequestFilterSensitiveLog = exports.ListPartsOutputFilterSensitiveLog = exports.PartFilterSensitiveLog = exports.ListObjectVersionsRequestFilterSensitiveLog = exports.ListObjectVersionsOutputFilterSensitiveLog = exports.ObjectVersionFilterSensitiveLog = exports.DeleteMarkerEntryFilterSensitiveLog = exports.ListObjectsV2RequestFilterSensitiveLog = exports.ListObjectsV2OutputFilterSensitiveLog = exports.ListObjectsRequestFilterSensitiveLog = exports.ListObjectsOutputFilterSensitiveLog = exports._ObjectFilterSensitiveLog = exports.ListMultipartUploadsRequestFilterSensitiveLog = exports.ListMultipartUploadsOutputFilterSensitiveLog = exports.MultipartUploadFilterSensitiveLog = exports.InitiatorFilterSensitiveLog = exports.CommonPrefixFilterSensitiveLog = exports.ListBucketsOutputFilterSensitiveLog = exports.BucketFilterSensitiveLog = exports.ListBucketMetricsConfigurationsRequestFilterSensitiveLog = void 0;
exports.PutObjectLockConfigurationRequestFilterSensitiveLog = exports.PutObjectLockConfigurationOutputFilterSensitiveLog = exports.PutObjectLegalHoldRequestFilterSensitiveLog = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
const S3ServiceException_1 = require("./S3ServiceException");
var RequestCharged;
(function (RequestCharged) {
    RequestCharged["requester"] = "requester";
})(RequestCharged = exports.RequestCharged || (exports.RequestCharged = {}));
var RequestPayer;
(function (RequestPayer) {
    RequestPayer["requester"] = "requester";
})(RequestPayer = exports.RequestPayer || (exports.RequestPayer = {}));
class NoSuchUpload extends S3ServiceException_1.S3ServiceException {
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
exports.NoSuchUpload = NoSuchUpload;
var BucketAccelerateStatus;
(function (BucketAccelerateStatus) {
    BucketAccelerateStatus["Enabled"] = "Enabled";
    BucketAccelerateStatus["Suspended"] = "Suspended";
})(BucketAccelerateStatus = exports.BucketAccelerateStatus || (exports.BucketAccelerateStatus = {}));
var Type;
(function (Type) {
    Type["AmazonCustomerByEmail"] = "AmazonCustomerByEmail";
    Type["CanonicalUser"] = "CanonicalUser";
    Type["Group"] = "Group";
})(Type = exports.Type || (exports.Type = {}));
var Permission;
(function (Permission) {
    Permission["FULL_CONTROL"] = "FULL_CONTROL";
    Permission["READ"] = "READ";
    Permission["READ_ACP"] = "READ_ACP";
    Permission["WRITE"] = "WRITE";
    Permission["WRITE_ACP"] = "WRITE_ACP";
})(Permission = exports.Permission || (exports.Permission = {}));
var OwnerOverride;
(function (OwnerOverride) {
    OwnerOverride["Destination"] = "Destination";
})(OwnerOverride = exports.OwnerOverride || (exports.OwnerOverride = {}));
var ServerSideEncryption;
(function (ServerSideEncryption) {
    ServerSideEncryption["AES256"] = "AES256";
    ServerSideEncryption["aws_kms"] = "aws:kms";
})(ServerSideEncryption = exports.ServerSideEncryption || (exports.ServerSideEncryption = {}));
var ObjectCannedACL;
(function (ObjectCannedACL) {
    ObjectCannedACL["authenticated_read"] = "authenticated-read";
    ObjectCannedACL["aws_exec_read"] = "aws-exec-read";
    ObjectCannedACL["bucket_owner_full_control"] = "bucket-owner-full-control";
    ObjectCannedACL["bucket_owner_read"] = "bucket-owner-read";
    ObjectCannedACL["private"] = "private";
    ObjectCannedACL["public_read"] = "public-read";
    ObjectCannedACL["public_read_write"] = "public-read-write";
})(ObjectCannedACL = exports.ObjectCannedACL || (exports.ObjectCannedACL = {}));
var ChecksumAlgorithm;
(function (ChecksumAlgorithm) {
    ChecksumAlgorithm["CRC32"] = "CRC32";
    ChecksumAlgorithm["CRC32C"] = "CRC32C";
    ChecksumAlgorithm["SHA1"] = "SHA1";
    ChecksumAlgorithm["SHA256"] = "SHA256";
})(ChecksumAlgorithm = exports.ChecksumAlgorithm || (exports.ChecksumAlgorithm = {}));
var MetadataDirective;
(function (MetadataDirective) {
    MetadataDirective["COPY"] = "COPY";
    MetadataDirective["REPLACE"] = "REPLACE";
})(MetadataDirective = exports.MetadataDirective || (exports.MetadataDirective = {}));
var ObjectLockLegalHoldStatus;
(function (ObjectLockLegalHoldStatus) {
    ObjectLockLegalHoldStatus["OFF"] = "OFF";
    ObjectLockLegalHoldStatus["ON"] = "ON";
})(ObjectLockLegalHoldStatus = exports.ObjectLockLegalHoldStatus || (exports.ObjectLockLegalHoldStatus = {}));
var ObjectLockMode;
(function (ObjectLockMode) {
    ObjectLockMode["COMPLIANCE"] = "COMPLIANCE";
    ObjectLockMode["GOVERNANCE"] = "GOVERNANCE";
})(ObjectLockMode = exports.ObjectLockMode || (exports.ObjectLockMode = {}));
var StorageClass;
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
})(StorageClass = exports.StorageClass || (exports.StorageClass = {}));
var TaggingDirective;
(function (TaggingDirective) {
    TaggingDirective["COPY"] = "COPY";
    TaggingDirective["REPLACE"] = "REPLACE";
})(TaggingDirective = exports.TaggingDirective || (exports.TaggingDirective = {}));
class ObjectNotInActiveTierError extends S3ServiceException_1.S3ServiceException {
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
exports.ObjectNotInActiveTierError = ObjectNotInActiveTierError;
class BucketAlreadyExists extends S3ServiceException_1.S3ServiceException {
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
exports.BucketAlreadyExists = BucketAlreadyExists;
class BucketAlreadyOwnedByYou extends S3ServiceException_1.S3ServiceException {
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
exports.BucketAlreadyOwnedByYou = BucketAlreadyOwnedByYou;
var BucketCannedACL;
(function (BucketCannedACL) {
    BucketCannedACL["authenticated_read"] = "authenticated-read";
    BucketCannedACL["private"] = "private";
    BucketCannedACL["public_read"] = "public-read";
    BucketCannedACL["public_read_write"] = "public-read-write";
})(BucketCannedACL = exports.BucketCannedACL || (exports.BucketCannedACL = {}));
var BucketLocationConstraint;
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
})(BucketLocationConstraint = exports.BucketLocationConstraint || (exports.BucketLocationConstraint = {}));
var ObjectOwnership;
(function (ObjectOwnership) {
    ObjectOwnership["BucketOwnerEnforced"] = "BucketOwnerEnforced";
    ObjectOwnership["BucketOwnerPreferred"] = "BucketOwnerPreferred";
    ObjectOwnership["ObjectWriter"] = "ObjectWriter";
})(ObjectOwnership = exports.ObjectOwnership || (exports.ObjectOwnership = {}));
var AnalyticsFilter;
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
})(AnalyticsFilter = exports.AnalyticsFilter || (exports.AnalyticsFilter = {}));
var AnalyticsS3ExportFileFormat;
(function (AnalyticsS3ExportFileFormat) {
    AnalyticsS3ExportFileFormat["CSV"] = "CSV";
})(AnalyticsS3ExportFileFormat = exports.AnalyticsS3ExportFileFormat || (exports.AnalyticsS3ExportFileFormat = {}));
var StorageClassAnalysisSchemaVersion;
(function (StorageClassAnalysisSchemaVersion) {
    StorageClassAnalysisSchemaVersion["V_1"] = "V_1";
})(StorageClassAnalysisSchemaVersion = exports.StorageClassAnalysisSchemaVersion || (exports.StorageClassAnalysisSchemaVersion = {}));
var IntelligentTieringStatus;
(function (IntelligentTieringStatus) {
    IntelligentTieringStatus["Disabled"] = "Disabled";
    IntelligentTieringStatus["Enabled"] = "Enabled";
})(IntelligentTieringStatus = exports.IntelligentTieringStatus || (exports.IntelligentTieringStatus = {}));
var IntelligentTieringAccessTier;
(function (IntelligentTieringAccessTier) {
    IntelligentTieringAccessTier["ARCHIVE_ACCESS"] = "ARCHIVE_ACCESS";
    IntelligentTieringAccessTier["DEEP_ARCHIVE_ACCESS"] = "DEEP_ARCHIVE_ACCESS";
})(IntelligentTieringAccessTier = exports.IntelligentTieringAccessTier || (exports.IntelligentTieringAccessTier = {}));
var InventoryFormat;
(function (InventoryFormat) {
    InventoryFormat["CSV"] = "CSV";
    InventoryFormat["ORC"] = "ORC";
    InventoryFormat["Parquet"] = "Parquet";
})(InventoryFormat = exports.InventoryFormat || (exports.InventoryFormat = {}));
var InventoryIncludedObjectVersions;
(function (InventoryIncludedObjectVersions) {
    InventoryIncludedObjectVersions["All"] = "All";
    InventoryIncludedObjectVersions["Current"] = "Current";
})(InventoryIncludedObjectVersions = exports.InventoryIncludedObjectVersions || (exports.InventoryIncludedObjectVersions = {}));
var InventoryOptionalField;
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
})(InventoryOptionalField = exports.InventoryOptionalField || (exports.InventoryOptionalField = {}));
var InventoryFrequency;
(function (InventoryFrequency) {
    InventoryFrequency["Daily"] = "Daily";
    InventoryFrequency["Weekly"] = "Weekly";
})(InventoryFrequency = exports.InventoryFrequency || (exports.InventoryFrequency = {}));
var LifecycleRuleFilter;
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
})(LifecycleRuleFilter = exports.LifecycleRuleFilter || (exports.LifecycleRuleFilter = {}));
var TransitionStorageClass;
(function (TransitionStorageClass) {
    TransitionStorageClass["DEEP_ARCHIVE"] = "DEEP_ARCHIVE";
    TransitionStorageClass["GLACIER"] = "GLACIER";
    TransitionStorageClass["GLACIER_IR"] = "GLACIER_IR";
    TransitionStorageClass["INTELLIGENT_TIERING"] = "INTELLIGENT_TIERING";
    TransitionStorageClass["ONEZONE_IA"] = "ONEZONE_IA";
    TransitionStorageClass["STANDARD_IA"] = "STANDARD_IA";
})(TransitionStorageClass = exports.TransitionStorageClass || (exports.TransitionStorageClass = {}));
var ExpirationStatus;
(function (ExpirationStatus) {
    ExpirationStatus["Disabled"] = "Disabled";
    ExpirationStatus["Enabled"] = "Enabled";
})(ExpirationStatus = exports.ExpirationStatus || (exports.ExpirationStatus = {}));
var BucketLogsPermission;
(function (BucketLogsPermission) {
    BucketLogsPermission["FULL_CONTROL"] = "FULL_CONTROL";
    BucketLogsPermission["READ"] = "READ";
    BucketLogsPermission["WRITE"] = "WRITE";
})(BucketLogsPermission = exports.BucketLogsPermission || (exports.BucketLogsPermission = {}));
var MetricsFilter;
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
})(MetricsFilter = exports.MetricsFilter || (exports.MetricsFilter = {}));
var FilterRuleName;
(function (FilterRuleName) {
    FilterRuleName["prefix"] = "prefix";
    FilterRuleName["suffix"] = "suffix";
})(FilterRuleName = exports.FilterRuleName || (exports.FilterRuleName = {}));
var DeleteMarkerReplicationStatus;
(function (DeleteMarkerReplicationStatus) {
    DeleteMarkerReplicationStatus["Disabled"] = "Disabled";
    DeleteMarkerReplicationStatus["Enabled"] = "Enabled";
})(DeleteMarkerReplicationStatus = exports.DeleteMarkerReplicationStatus || (exports.DeleteMarkerReplicationStatus = {}));
var MetricsStatus;
(function (MetricsStatus) {
    MetricsStatus["Disabled"] = "Disabled";
    MetricsStatus["Enabled"] = "Enabled";
})(MetricsStatus = exports.MetricsStatus || (exports.MetricsStatus = {}));
var ReplicationTimeStatus;
(function (ReplicationTimeStatus) {
    ReplicationTimeStatus["Disabled"] = "Disabled";
    ReplicationTimeStatus["Enabled"] = "Enabled";
})(ReplicationTimeStatus = exports.ReplicationTimeStatus || (exports.ReplicationTimeStatus = {}));
var ExistingObjectReplicationStatus;
(function (ExistingObjectReplicationStatus) {
    ExistingObjectReplicationStatus["Disabled"] = "Disabled";
    ExistingObjectReplicationStatus["Enabled"] = "Enabled";
})(ExistingObjectReplicationStatus = exports.ExistingObjectReplicationStatus || (exports.ExistingObjectReplicationStatus = {}));
var ReplicationRuleFilter;
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
})(ReplicationRuleFilter = exports.ReplicationRuleFilter || (exports.ReplicationRuleFilter = {}));
var ReplicaModificationsStatus;
(function (ReplicaModificationsStatus) {
    ReplicaModificationsStatus["Disabled"] = "Disabled";
    ReplicaModificationsStatus["Enabled"] = "Enabled";
})(ReplicaModificationsStatus = exports.ReplicaModificationsStatus || (exports.ReplicaModificationsStatus = {}));
var SseKmsEncryptedObjectsStatus;
(function (SseKmsEncryptedObjectsStatus) {
    SseKmsEncryptedObjectsStatus["Disabled"] = "Disabled";
    SseKmsEncryptedObjectsStatus["Enabled"] = "Enabled";
})(SseKmsEncryptedObjectsStatus = exports.SseKmsEncryptedObjectsStatus || (exports.SseKmsEncryptedObjectsStatus = {}));
var ReplicationRuleStatus;
(function (ReplicationRuleStatus) {
    ReplicationRuleStatus["Disabled"] = "Disabled";
    ReplicationRuleStatus["Enabled"] = "Enabled";
})(ReplicationRuleStatus = exports.ReplicationRuleStatus || (exports.ReplicationRuleStatus = {}));
var Payer;
(function (Payer) {
    Payer["BucketOwner"] = "BucketOwner";
    Payer["Requester"] = "Requester";
})(Payer = exports.Payer || (exports.Payer = {}));
var MFADeleteStatus;
(function (MFADeleteStatus) {
    MFADeleteStatus["Disabled"] = "Disabled";
    MFADeleteStatus["Enabled"] = "Enabled";
})(MFADeleteStatus = exports.MFADeleteStatus || (exports.MFADeleteStatus = {}));
var BucketVersioningStatus;
(function (BucketVersioningStatus) {
    BucketVersioningStatus["Enabled"] = "Enabled";
    BucketVersioningStatus["Suspended"] = "Suspended";
})(BucketVersioningStatus = exports.BucketVersioningStatus || (exports.BucketVersioningStatus = {}));
var Protocol;
(function (Protocol) {
    Protocol["http"] = "http";
    Protocol["https"] = "https";
})(Protocol = exports.Protocol || (exports.Protocol = {}));
var ReplicationStatus;
(function (ReplicationStatus) {
    ReplicationStatus["COMPLETE"] = "COMPLETE";
    ReplicationStatus["FAILED"] = "FAILED";
    ReplicationStatus["PENDING"] = "PENDING";
    ReplicationStatus["REPLICA"] = "REPLICA";
})(ReplicationStatus = exports.ReplicationStatus || (exports.ReplicationStatus = {}));
var ChecksumMode;
(function (ChecksumMode) {
    ChecksumMode["ENABLED"] = "ENABLED";
})(ChecksumMode = exports.ChecksumMode || (exports.ChecksumMode = {}));
class InvalidObjectState extends S3ServiceException_1.S3ServiceException {
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
exports.InvalidObjectState = InvalidObjectState;
class NoSuchKey extends S3ServiceException_1.S3ServiceException {
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
exports.NoSuchKey = NoSuchKey;
var ObjectAttributes;
(function (ObjectAttributes) {
    ObjectAttributes["CHECKSUM"] = "Checksum";
    ObjectAttributes["ETAG"] = "ETag";
    ObjectAttributes["OBJECT_PARTS"] = "ObjectParts";
    ObjectAttributes["OBJECT_SIZE"] = "ObjectSize";
    ObjectAttributes["STORAGE_CLASS"] = "StorageClass";
})(ObjectAttributes = exports.ObjectAttributes || (exports.ObjectAttributes = {}));
var ObjectLockEnabled;
(function (ObjectLockEnabled) {
    ObjectLockEnabled["Enabled"] = "Enabled";
})(ObjectLockEnabled = exports.ObjectLockEnabled || (exports.ObjectLockEnabled = {}));
var ObjectLockRetentionMode;
(function (ObjectLockRetentionMode) {
    ObjectLockRetentionMode["COMPLIANCE"] = "COMPLIANCE";
    ObjectLockRetentionMode["GOVERNANCE"] = "GOVERNANCE";
})(ObjectLockRetentionMode = exports.ObjectLockRetentionMode || (exports.ObjectLockRetentionMode = {}));
class NotFound extends S3ServiceException_1.S3ServiceException {
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
exports.NotFound = NotFound;
var ArchiveStatus;
(function (ArchiveStatus) {
    ArchiveStatus["ARCHIVE_ACCESS"] = "ARCHIVE_ACCESS";
    ArchiveStatus["DEEP_ARCHIVE_ACCESS"] = "DEEP_ARCHIVE_ACCESS";
})(ArchiveStatus = exports.ArchiveStatus || (exports.ArchiveStatus = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType["url"] = "url";
})(EncodingType = exports.EncodingType || (exports.EncodingType = {}));
var ObjectStorageClass;
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
})(ObjectStorageClass = exports.ObjectStorageClass || (exports.ObjectStorageClass = {}));
class NoSuchBucket extends S3ServiceException_1.S3ServiceException {
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
exports.NoSuchBucket = NoSuchBucket;
var ObjectVersionStorageClass;
(function (ObjectVersionStorageClass) {
    ObjectVersionStorageClass["STANDARD"] = "STANDARD";
})(ObjectVersionStorageClass = exports.ObjectVersionStorageClass || (exports.ObjectVersionStorageClass = {}));
var MFADelete;
(function (MFADelete) {
    MFADelete["Disabled"] = "Disabled";
    MFADelete["Enabled"] = "Enabled";
})(MFADelete = exports.MFADelete || (exports.MFADelete = {}));
const AbortIncompleteMultipartUploadFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AbortIncompleteMultipartUploadFilterSensitiveLog = AbortIncompleteMultipartUploadFilterSensitiveLog;
const AbortMultipartUploadOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AbortMultipartUploadOutputFilterSensitiveLog = AbortMultipartUploadOutputFilterSensitiveLog;
const AbortMultipartUploadRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AbortMultipartUploadRequestFilterSensitiveLog = AbortMultipartUploadRequestFilterSensitiveLog;
const AccelerateConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AccelerateConfigurationFilterSensitiveLog = AccelerateConfigurationFilterSensitiveLog;
const GranteeFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GranteeFilterSensitiveLog = GranteeFilterSensitiveLog;
const GrantFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GrantFilterSensitiveLog = GrantFilterSensitiveLog;
const OwnerFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.OwnerFilterSensitiveLog = OwnerFilterSensitiveLog;
const AccessControlPolicyFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AccessControlPolicyFilterSensitiveLog = AccessControlPolicyFilterSensitiveLog;
const AccessControlTranslationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AccessControlTranslationFilterSensitiveLog = AccessControlTranslationFilterSensitiveLog;
const CompleteMultipartUploadOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
});
exports.CompleteMultipartUploadOutputFilterSensitiveLog = CompleteMultipartUploadOutputFilterSensitiveLog;
const CompletedPartFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CompletedPartFilterSensitiveLog = CompletedPartFilterSensitiveLog;
const CompletedMultipartUploadFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CompletedMultipartUploadFilterSensitiveLog = CompletedMultipartUploadFilterSensitiveLog;
const CompleteMultipartUploadRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
});
exports.CompleteMultipartUploadRequestFilterSensitiveLog = CompleteMultipartUploadRequestFilterSensitiveLog;
const CopyObjectResultFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CopyObjectResultFilterSensitiveLog = CopyObjectResultFilterSensitiveLog;
const CopyObjectOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: smithy_client_1.SENSITIVE_STRING }),
});
exports.CopyObjectOutputFilterSensitiveLog = CopyObjectOutputFilterSensitiveLog;
const CopyObjectRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
});
exports.CopyObjectRequestFilterSensitiveLog = CopyObjectRequestFilterSensitiveLog;
const CreateBucketOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CreateBucketOutputFilterSensitiveLog = CreateBucketOutputFilterSensitiveLog;
const CreateBucketConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CreateBucketConfigurationFilterSensitiveLog = CreateBucketConfigurationFilterSensitiveLog;
const CreateBucketRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CreateBucketRequestFilterSensitiveLog = CreateBucketRequestFilterSensitiveLog;
const CreateMultipartUploadOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: smithy_client_1.SENSITIVE_STRING }),
});
exports.CreateMultipartUploadOutputFilterSensitiveLog = CreateMultipartUploadOutputFilterSensitiveLog;
const CreateMultipartUploadRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: smithy_client_1.SENSITIVE_STRING }),
});
exports.CreateMultipartUploadRequestFilterSensitiveLog = CreateMultipartUploadRequestFilterSensitiveLog;
const DeleteBucketRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteBucketRequestFilterSensitiveLog = DeleteBucketRequestFilterSensitiveLog;
const DeleteBucketAnalyticsConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteBucketAnalyticsConfigurationRequestFilterSensitiveLog = DeleteBucketAnalyticsConfigurationRequestFilterSensitiveLog;
const DeleteBucketCorsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteBucketCorsRequestFilterSensitiveLog = DeleteBucketCorsRequestFilterSensitiveLog;
const DeleteBucketEncryptionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteBucketEncryptionRequestFilterSensitiveLog = DeleteBucketEncryptionRequestFilterSensitiveLog;
const DeleteBucketIntelligentTieringConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteBucketIntelligentTieringConfigurationRequestFilterSensitiveLog = DeleteBucketIntelligentTieringConfigurationRequestFilterSensitiveLog;
const DeleteBucketInventoryConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteBucketInventoryConfigurationRequestFilterSensitiveLog = DeleteBucketInventoryConfigurationRequestFilterSensitiveLog;
const DeleteBucketLifecycleRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteBucketLifecycleRequestFilterSensitiveLog = DeleteBucketLifecycleRequestFilterSensitiveLog;
const DeleteBucketMetricsConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteBucketMetricsConfigurationRequestFilterSensitiveLog = DeleteBucketMetricsConfigurationRequestFilterSensitiveLog;
const DeleteBucketOwnershipControlsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteBucketOwnershipControlsRequestFilterSensitiveLog = DeleteBucketOwnershipControlsRequestFilterSensitiveLog;
const DeleteBucketPolicyRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteBucketPolicyRequestFilterSensitiveLog = DeleteBucketPolicyRequestFilterSensitiveLog;
const DeleteBucketReplicationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteBucketReplicationRequestFilterSensitiveLog = DeleteBucketReplicationRequestFilterSensitiveLog;
const DeleteBucketTaggingRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteBucketTaggingRequestFilterSensitiveLog = DeleteBucketTaggingRequestFilterSensitiveLog;
const DeleteBucketWebsiteRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteBucketWebsiteRequestFilterSensitiveLog = DeleteBucketWebsiteRequestFilterSensitiveLog;
const DeleteObjectOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteObjectOutputFilterSensitiveLog = DeleteObjectOutputFilterSensitiveLog;
const DeleteObjectRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteObjectRequestFilterSensitiveLog = DeleteObjectRequestFilterSensitiveLog;
const DeletedObjectFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeletedObjectFilterSensitiveLog = DeletedObjectFilterSensitiveLog;
const _ErrorFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports._ErrorFilterSensitiveLog = _ErrorFilterSensitiveLog;
const DeleteObjectsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteObjectsOutputFilterSensitiveLog = DeleteObjectsOutputFilterSensitiveLog;
const ObjectIdentifierFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ObjectIdentifierFilterSensitiveLog = ObjectIdentifierFilterSensitiveLog;
const DeleteFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteFilterSensitiveLog = DeleteFilterSensitiveLog;
const DeleteObjectsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteObjectsRequestFilterSensitiveLog = DeleteObjectsRequestFilterSensitiveLog;
const DeleteObjectTaggingOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteObjectTaggingOutputFilterSensitiveLog = DeleteObjectTaggingOutputFilterSensitiveLog;
const DeleteObjectTaggingRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteObjectTaggingRequestFilterSensitiveLog = DeleteObjectTaggingRequestFilterSensitiveLog;
const DeletePublicAccessBlockRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeletePublicAccessBlockRequestFilterSensitiveLog = DeletePublicAccessBlockRequestFilterSensitiveLog;
const GetBucketAccelerateConfigurationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketAccelerateConfigurationOutputFilterSensitiveLog = GetBucketAccelerateConfigurationOutputFilterSensitiveLog;
const GetBucketAccelerateConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketAccelerateConfigurationRequestFilterSensitiveLog = GetBucketAccelerateConfigurationRequestFilterSensitiveLog;
const GetBucketAclOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketAclOutputFilterSensitiveLog = GetBucketAclOutputFilterSensitiveLog;
const GetBucketAclRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketAclRequestFilterSensitiveLog = GetBucketAclRequestFilterSensitiveLog;
const TagFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.TagFilterSensitiveLog = TagFilterSensitiveLog;
const AnalyticsAndOperatorFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AnalyticsAndOperatorFilterSensitiveLog = AnalyticsAndOperatorFilterSensitiveLog;
const AnalyticsFilterFilterSensitiveLog = (obj) => {
    if (obj.Prefix !== undefined)
        return { Prefix: obj.Prefix };
    if (obj.Tag !== undefined)
        return { Tag: (0, exports.TagFilterSensitiveLog)(obj.Tag) };
    if (obj.And !== undefined)
        return { And: (0, exports.AnalyticsAndOperatorFilterSensitiveLog)(obj.And) };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
exports.AnalyticsFilterFilterSensitiveLog = AnalyticsFilterFilterSensitiveLog;
const AnalyticsS3BucketDestinationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AnalyticsS3BucketDestinationFilterSensitiveLog = AnalyticsS3BucketDestinationFilterSensitiveLog;
const AnalyticsExportDestinationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.AnalyticsExportDestinationFilterSensitiveLog = AnalyticsExportDestinationFilterSensitiveLog;
const StorageClassAnalysisDataExportFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.StorageClassAnalysisDataExportFilterSensitiveLog = StorageClassAnalysisDataExportFilterSensitiveLog;
const StorageClassAnalysisFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.StorageClassAnalysisFilterSensitiveLog = StorageClassAnalysisFilterSensitiveLog;
const AnalyticsConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Filter && { Filter: (0, exports.AnalyticsFilterFilterSensitiveLog)(obj.Filter) }),
});
exports.AnalyticsConfigurationFilterSensitiveLog = AnalyticsConfigurationFilterSensitiveLog;
const GetBucketAnalyticsConfigurationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AnalyticsConfiguration && {
        AnalyticsConfiguration: (0, exports.AnalyticsConfigurationFilterSensitiveLog)(obj.AnalyticsConfiguration),
    }),
});
exports.GetBucketAnalyticsConfigurationOutputFilterSensitiveLog = GetBucketAnalyticsConfigurationOutputFilterSensitiveLog;
const GetBucketAnalyticsConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketAnalyticsConfigurationRequestFilterSensitiveLog = GetBucketAnalyticsConfigurationRequestFilterSensitiveLog;
const CORSRuleFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CORSRuleFilterSensitiveLog = CORSRuleFilterSensitiveLog;
const GetBucketCorsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketCorsOutputFilterSensitiveLog = GetBucketCorsOutputFilterSensitiveLog;
const GetBucketCorsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketCorsRequestFilterSensitiveLog = GetBucketCorsRequestFilterSensitiveLog;
const ServerSideEncryptionByDefaultFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.KMSMasterKeyID && { KMSMasterKeyID: smithy_client_1.SENSITIVE_STRING }),
});
exports.ServerSideEncryptionByDefaultFilterSensitiveLog = ServerSideEncryptionByDefaultFilterSensitiveLog;
const ServerSideEncryptionRuleFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ApplyServerSideEncryptionByDefault && {
        ApplyServerSideEncryptionByDefault: (0, exports.ServerSideEncryptionByDefaultFilterSensitiveLog)(obj.ApplyServerSideEncryptionByDefault),
    }),
});
exports.ServerSideEncryptionRuleFilterSensitiveLog = ServerSideEncryptionRuleFilterSensitiveLog;
const ServerSideEncryptionConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => (0, exports.ServerSideEncryptionRuleFilterSensitiveLog)(item)) }),
});
exports.ServerSideEncryptionConfigurationFilterSensitiveLog = ServerSideEncryptionConfigurationFilterSensitiveLog;
const GetBucketEncryptionOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ServerSideEncryptionConfiguration && {
        ServerSideEncryptionConfiguration: (0, exports.ServerSideEncryptionConfigurationFilterSensitiveLog)(obj.ServerSideEncryptionConfiguration),
    }),
});
exports.GetBucketEncryptionOutputFilterSensitiveLog = GetBucketEncryptionOutputFilterSensitiveLog;
const GetBucketEncryptionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketEncryptionRequestFilterSensitiveLog = GetBucketEncryptionRequestFilterSensitiveLog;
const IntelligentTieringAndOperatorFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.IntelligentTieringAndOperatorFilterSensitiveLog = IntelligentTieringAndOperatorFilterSensitiveLog;
const IntelligentTieringFilterFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.IntelligentTieringFilterFilterSensitiveLog = IntelligentTieringFilterFilterSensitiveLog;
const TieringFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.TieringFilterSensitiveLog = TieringFilterSensitiveLog;
const IntelligentTieringConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.IntelligentTieringConfigurationFilterSensitiveLog = IntelligentTieringConfigurationFilterSensitiveLog;
const GetBucketIntelligentTieringConfigurationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketIntelligentTieringConfigurationOutputFilterSensitiveLog = GetBucketIntelligentTieringConfigurationOutputFilterSensitiveLog;
const GetBucketIntelligentTieringConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketIntelligentTieringConfigurationRequestFilterSensitiveLog = GetBucketIntelligentTieringConfigurationRequestFilterSensitiveLog;
const SSEKMSFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.KeyId && { KeyId: smithy_client_1.SENSITIVE_STRING }),
});
exports.SSEKMSFilterSensitiveLog = SSEKMSFilterSensitiveLog;
const SSES3FilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.SSES3FilterSensitiveLog = SSES3FilterSensitiveLog;
const InventoryEncryptionFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMS && { SSEKMS: (0, exports.SSEKMSFilterSensitiveLog)(obj.SSEKMS) }),
});
exports.InventoryEncryptionFilterSensitiveLog = InventoryEncryptionFilterSensitiveLog;
const InventoryS3BucketDestinationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Encryption && { Encryption: (0, exports.InventoryEncryptionFilterSensitiveLog)(obj.Encryption) }),
});
exports.InventoryS3BucketDestinationFilterSensitiveLog = InventoryS3BucketDestinationFilterSensitiveLog;
const InventoryDestinationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.S3BucketDestination && {
        S3BucketDestination: (0, exports.InventoryS3BucketDestinationFilterSensitiveLog)(obj.S3BucketDestination),
    }),
});
exports.InventoryDestinationFilterSensitiveLog = InventoryDestinationFilterSensitiveLog;
const InventoryFilterFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.InventoryFilterFilterSensitiveLog = InventoryFilterFilterSensitiveLog;
const InventoryScheduleFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.InventoryScheduleFilterSensitiveLog = InventoryScheduleFilterSensitiveLog;
const InventoryConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Destination && { Destination: (0, exports.InventoryDestinationFilterSensitiveLog)(obj.Destination) }),
});
exports.InventoryConfigurationFilterSensitiveLog = InventoryConfigurationFilterSensitiveLog;
const GetBucketInventoryConfigurationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.InventoryConfiguration && {
        InventoryConfiguration: (0, exports.InventoryConfigurationFilterSensitiveLog)(obj.InventoryConfiguration),
    }),
});
exports.GetBucketInventoryConfigurationOutputFilterSensitiveLog = GetBucketInventoryConfigurationOutputFilterSensitiveLog;
const GetBucketInventoryConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketInventoryConfigurationRequestFilterSensitiveLog = GetBucketInventoryConfigurationRequestFilterSensitiveLog;
const LifecycleExpirationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.LifecycleExpirationFilterSensitiveLog = LifecycleExpirationFilterSensitiveLog;
const LifecycleRuleAndOperatorFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.LifecycleRuleAndOperatorFilterSensitiveLog = LifecycleRuleAndOperatorFilterSensitiveLog;
const LifecycleRuleFilterFilterSensitiveLog = (obj) => {
    if (obj.Prefix !== undefined)
        return { Prefix: obj.Prefix };
    if (obj.Tag !== undefined)
        return { Tag: (0, exports.TagFilterSensitiveLog)(obj.Tag) };
    if (obj.ObjectSizeGreaterThan !== undefined)
        return { ObjectSizeGreaterThan: obj.ObjectSizeGreaterThan };
    if (obj.ObjectSizeLessThan !== undefined)
        return { ObjectSizeLessThan: obj.ObjectSizeLessThan };
    if (obj.And !== undefined)
        return { And: (0, exports.LifecycleRuleAndOperatorFilterSensitiveLog)(obj.And) };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
exports.LifecycleRuleFilterFilterSensitiveLog = LifecycleRuleFilterFilterSensitiveLog;
const NoncurrentVersionExpirationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.NoncurrentVersionExpirationFilterSensitiveLog = NoncurrentVersionExpirationFilterSensitiveLog;
const NoncurrentVersionTransitionFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.NoncurrentVersionTransitionFilterSensitiveLog = NoncurrentVersionTransitionFilterSensitiveLog;
const TransitionFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.TransitionFilterSensitiveLog = TransitionFilterSensitiveLog;
const LifecycleRuleFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Filter && { Filter: (0, exports.LifecycleRuleFilterFilterSensitiveLog)(obj.Filter) }),
});
exports.LifecycleRuleFilterSensitiveLog = LifecycleRuleFilterSensitiveLog;
const GetBucketLifecycleConfigurationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => (0, exports.LifecycleRuleFilterSensitiveLog)(item)) }),
});
exports.GetBucketLifecycleConfigurationOutputFilterSensitiveLog = GetBucketLifecycleConfigurationOutputFilterSensitiveLog;
const GetBucketLifecycleConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketLifecycleConfigurationRequestFilterSensitiveLog = GetBucketLifecycleConfigurationRequestFilterSensitiveLog;
const GetBucketLocationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketLocationOutputFilterSensitiveLog = GetBucketLocationOutputFilterSensitiveLog;
const GetBucketLocationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketLocationRequestFilterSensitiveLog = GetBucketLocationRequestFilterSensitiveLog;
const TargetGrantFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.TargetGrantFilterSensitiveLog = TargetGrantFilterSensitiveLog;
const LoggingEnabledFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.LoggingEnabledFilterSensitiveLog = LoggingEnabledFilterSensitiveLog;
const GetBucketLoggingOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketLoggingOutputFilterSensitiveLog = GetBucketLoggingOutputFilterSensitiveLog;
const GetBucketLoggingRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketLoggingRequestFilterSensitiveLog = GetBucketLoggingRequestFilterSensitiveLog;
const MetricsAndOperatorFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.MetricsAndOperatorFilterSensitiveLog = MetricsAndOperatorFilterSensitiveLog;
const MetricsFilterFilterSensitiveLog = (obj) => {
    if (obj.Prefix !== undefined)
        return { Prefix: obj.Prefix };
    if (obj.Tag !== undefined)
        return { Tag: (0, exports.TagFilterSensitiveLog)(obj.Tag) };
    if (obj.AccessPointArn !== undefined)
        return { AccessPointArn: obj.AccessPointArn };
    if (obj.And !== undefined)
        return { And: (0, exports.MetricsAndOperatorFilterSensitiveLog)(obj.And) };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
exports.MetricsFilterFilterSensitiveLog = MetricsFilterFilterSensitiveLog;
const MetricsConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Filter && { Filter: (0, exports.MetricsFilterFilterSensitiveLog)(obj.Filter) }),
});
exports.MetricsConfigurationFilterSensitiveLog = MetricsConfigurationFilterSensitiveLog;
const GetBucketMetricsConfigurationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.MetricsConfiguration && {
        MetricsConfiguration: (0, exports.MetricsConfigurationFilterSensitiveLog)(obj.MetricsConfiguration),
    }),
});
exports.GetBucketMetricsConfigurationOutputFilterSensitiveLog = GetBucketMetricsConfigurationOutputFilterSensitiveLog;
const GetBucketMetricsConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketMetricsConfigurationRequestFilterSensitiveLog = GetBucketMetricsConfigurationRequestFilterSensitiveLog;
const GetBucketNotificationConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketNotificationConfigurationRequestFilterSensitiveLog = GetBucketNotificationConfigurationRequestFilterSensitiveLog;
const EventBridgeConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.EventBridgeConfigurationFilterSensitiveLog = EventBridgeConfigurationFilterSensitiveLog;
const FilterRuleFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.FilterRuleFilterSensitiveLog = FilterRuleFilterSensitiveLog;
const S3KeyFilterFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.S3KeyFilterFilterSensitiveLog = S3KeyFilterFilterSensitiveLog;
const NotificationConfigurationFilterFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.NotificationConfigurationFilterFilterSensitiveLog = NotificationConfigurationFilterFilterSensitiveLog;
const LambdaFunctionConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.LambdaFunctionConfigurationFilterSensitiveLog = LambdaFunctionConfigurationFilterSensitiveLog;
const QueueConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.QueueConfigurationFilterSensitiveLog = QueueConfigurationFilterSensitiveLog;
const TopicConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.TopicConfigurationFilterSensitiveLog = TopicConfigurationFilterSensitiveLog;
const NotificationConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.NotificationConfigurationFilterSensitiveLog = NotificationConfigurationFilterSensitiveLog;
const OwnershipControlsRuleFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.OwnershipControlsRuleFilterSensitiveLog = OwnershipControlsRuleFilterSensitiveLog;
const OwnershipControlsFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.OwnershipControlsFilterSensitiveLog = OwnershipControlsFilterSensitiveLog;
const GetBucketOwnershipControlsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketOwnershipControlsOutputFilterSensitiveLog = GetBucketOwnershipControlsOutputFilterSensitiveLog;
const GetBucketOwnershipControlsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketOwnershipControlsRequestFilterSensitiveLog = GetBucketOwnershipControlsRequestFilterSensitiveLog;
const GetBucketPolicyOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketPolicyOutputFilterSensitiveLog = GetBucketPolicyOutputFilterSensitiveLog;
const GetBucketPolicyRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketPolicyRequestFilterSensitiveLog = GetBucketPolicyRequestFilterSensitiveLog;
const PolicyStatusFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PolicyStatusFilterSensitiveLog = PolicyStatusFilterSensitiveLog;
const GetBucketPolicyStatusOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketPolicyStatusOutputFilterSensitiveLog = GetBucketPolicyStatusOutputFilterSensitiveLog;
const GetBucketPolicyStatusRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketPolicyStatusRequestFilterSensitiveLog = GetBucketPolicyStatusRequestFilterSensitiveLog;
const DeleteMarkerReplicationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteMarkerReplicationFilterSensitiveLog = DeleteMarkerReplicationFilterSensitiveLog;
const EncryptionConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.EncryptionConfigurationFilterSensitiveLog = EncryptionConfigurationFilterSensitiveLog;
const ReplicationTimeValueFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ReplicationTimeValueFilterSensitiveLog = ReplicationTimeValueFilterSensitiveLog;
const MetricsFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.MetricsFilterSensitiveLog = MetricsFilterSensitiveLog;
const ReplicationTimeFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ReplicationTimeFilterSensitiveLog = ReplicationTimeFilterSensitiveLog;
const DestinationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DestinationFilterSensitiveLog = DestinationFilterSensitiveLog;
const ExistingObjectReplicationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ExistingObjectReplicationFilterSensitiveLog = ExistingObjectReplicationFilterSensitiveLog;
const ReplicationRuleAndOperatorFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ReplicationRuleAndOperatorFilterSensitiveLog = ReplicationRuleAndOperatorFilterSensitiveLog;
const ReplicationRuleFilterFilterSensitiveLog = (obj) => {
    if (obj.Prefix !== undefined)
        return { Prefix: obj.Prefix };
    if (obj.Tag !== undefined)
        return { Tag: (0, exports.TagFilterSensitiveLog)(obj.Tag) };
    if (obj.And !== undefined)
        return { And: (0, exports.ReplicationRuleAndOperatorFilterSensitiveLog)(obj.And) };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
exports.ReplicationRuleFilterFilterSensitiveLog = ReplicationRuleFilterFilterSensitiveLog;
const ReplicaModificationsFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ReplicaModificationsFilterSensitiveLog = ReplicaModificationsFilterSensitiveLog;
const SseKmsEncryptedObjectsFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.SseKmsEncryptedObjectsFilterSensitiveLog = SseKmsEncryptedObjectsFilterSensitiveLog;
const SourceSelectionCriteriaFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.SourceSelectionCriteriaFilterSensitiveLog = SourceSelectionCriteriaFilterSensitiveLog;
const ReplicationRuleFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Filter && { Filter: (0, exports.ReplicationRuleFilterFilterSensitiveLog)(obj.Filter) }),
});
exports.ReplicationRuleFilterSensitiveLog = ReplicationRuleFilterSensitiveLog;
const ReplicationConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => (0, exports.ReplicationRuleFilterSensitiveLog)(item)) }),
});
exports.ReplicationConfigurationFilterSensitiveLog = ReplicationConfigurationFilterSensitiveLog;
const GetBucketReplicationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ReplicationConfiguration && {
        ReplicationConfiguration: (0, exports.ReplicationConfigurationFilterSensitiveLog)(obj.ReplicationConfiguration),
    }),
});
exports.GetBucketReplicationOutputFilterSensitiveLog = GetBucketReplicationOutputFilterSensitiveLog;
const GetBucketReplicationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketReplicationRequestFilterSensitiveLog = GetBucketReplicationRequestFilterSensitiveLog;
const GetBucketRequestPaymentOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketRequestPaymentOutputFilterSensitiveLog = GetBucketRequestPaymentOutputFilterSensitiveLog;
const GetBucketRequestPaymentRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketRequestPaymentRequestFilterSensitiveLog = GetBucketRequestPaymentRequestFilterSensitiveLog;
const GetBucketTaggingOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketTaggingOutputFilterSensitiveLog = GetBucketTaggingOutputFilterSensitiveLog;
const GetBucketTaggingRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketTaggingRequestFilterSensitiveLog = GetBucketTaggingRequestFilterSensitiveLog;
const GetBucketVersioningOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketVersioningOutputFilterSensitiveLog = GetBucketVersioningOutputFilterSensitiveLog;
const GetBucketVersioningRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketVersioningRequestFilterSensitiveLog = GetBucketVersioningRequestFilterSensitiveLog;
const ErrorDocumentFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ErrorDocumentFilterSensitiveLog = ErrorDocumentFilterSensitiveLog;
const IndexDocumentFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.IndexDocumentFilterSensitiveLog = IndexDocumentFilterSensitiveLog;
const RedirectAllRequestsToFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RedirectAllRequestsToFilterSensitiveLog = RedirectAllRequestsToFilterSensitiveLog;
const ConditionFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ConditionFilterSensitiveLog = ConditionFilterSensitiveLog;
const RedirectFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RedirectFilterSensitiveLog = RedirectFilterSensitiveLog;
const RoutingRuleFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RoutingRuleFilterSensitiveLog = RoutingRuleFilterSensitiveLog;
const GetBucketWebsiteOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketWebsiteOutputFilterSensitiveLog = GetBucketWebsiteOutputFilterSensitiveLog;
const GetBucketWebsiteRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetBucketWebsiteRequestFilterSensitiveLog = GetBucketWebsiteRequestFilterSensitiveLog;
const GetObjectOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
});
exports.GetObjectOutputFilterSensitiveLog = GetObjectOutputFilterSensitiveLog;
const GetObjectRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
});
exports.GetObjectRequestFilterSensitiveLog = GetObjectRequestFilterSensitiveLog;
const GetObjectAclOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetObjectAclOutputFilterSensitiveLog = GetObjectAclOutputFilterSensitiveLog;
const GetObjectAclRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetObjectAclRequestFilterSensitiveLog = GetObjectAclRequestFilterSensitiveLog;
const ChecksumFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ChecksumFilterSensitiveLog = ChecksumFilterSensitiveLog;
const ObjectPartFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ObjectPartFilterSensitiveLog = ObjectPartFilterSensitiveLog;
const GetObjectAttributesPartsFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetObjectAttributesPartsFilterSensitiveLog = GetObjectAttributesPartsFilterSensitiveLog;
const GetObjectAttributesOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetObjectAttributesOutputFilterSensitiveLog = GetObjectAttributesOutputFilterSensitiveLog;
const GetObjectAttributesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
});
exports.GetObjectAttributesRequestFilterSensitiveLog = GetObjectAttributesRequestFilterSensitiveLog;
const ObjectLockLegalHoldFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ObjectLockLegalHoldFilterSensitiveLog = ObjectLockLegalHoldFilterSensitiveLog;
const GetObjectLegalHoldOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetObjectLegalHoldOutputFilterSensitiveLog = GetObjectLegalHoldOutputFilterSensitiveLog;
const GetObjectLegalHoldRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetObjectLegalHoldRequestFilterSensitiveLog = GetObjectLegalHoldRequestFilterSensitiveLog;
const DefaultRetentionFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DefaultRetentionFilterSensitiveLog = DefaultRetentionFilterSensitiveLog;
const ObjectLockRuleFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ObjectLockRuleFilterSensitiveLog = ObjectLockRuleFilterSensitiveLog;
const ObjectLockConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ObjectLockConfigurationFilterSensitiveLog = ObjectLockConfigurationFilterSensitiveLog;
const GetObjectLockConfigurationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetObjectLockConfigurationOutputFilterSensitiveLog = GetObjectLockConfigurationOutputFilterSensitiveLog;
const GetObjectLockConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetObjectLockConfigurationRequestFilterSensitiveLog = GetObjectLockConfigurationRequestFilterSensitiveLog;
const ObjectLockRetentionFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ObjectLockRetentionFilterSensitiveLog = ObjectLockRetentionFilterSensitiveLog;
const GetObjectRetentionOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetObjectRetentionOutputFilterSensitiveLog = GetObjectRetentionOutputFilterSensitiveLog;
const GetObjectRetentionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetObjectRetentionRequestFilterSensitiveLog = GetObjectRetentionRequestFilterSensitiveLog;
const GetObjectTaggingOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetObjectTaggingOutputFilterSensitiveLog = GetObjectTaggingOutputFilterSensitiveLog;
const GetObjectTaggingRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetObjectTaggingRequestFilterSensitiveLog = GetObjectTaggingRequestFilterSensitiveLog;
const GetObjectTorrentOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetObjectTorrentOutputFilterSensitiveLog = GetObjectTorrentOutputFilterSensitiveLog;
const GetObjectTorrentRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetObjectTorrentRequestFilterSensitiveLog = GetObjectTorrentRequestFilterSensitiveLog;
const PublicAccessBlockConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PublicAccessBlockConfigurationFilterSensitiveLog = PublicAccessBlockConfigurationFilterSensitiveLog;
const GetPublicAccessBlockOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetPublicAccessBlockOutputFilterSensitiveLog = GetPublicAccessBlockOutputFilterSensitiveLog;
const GetPublicAccessBlockRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.GetPublicAccessBlockRequestFilterSensitiveLog = GetPublicAccessBlockRequestFilterSensitiveLog;
const HeadBucketRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.HeadBucketRequestFilterSensitiveLog = HeadBucketRequestFilterSensitiveLog;
const HeadObjectOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
});
exports.HeadObjectOutputFilterSensitiveLog = HeadObjectOutputFilterSensitiveLog;
const HeadObjectRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
});
exports.HeadObjectRequestFilterSensitiveLog = HeadObjectRequestFilterSensitiveLog;
const ListBucketAnalyticsConfigurationsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AnalyticsConfigurationList && {
        AnalyticsConfigurationList: obj.AnalyticsConfigurationList.map((item) => (0, exports.AnalyticsConfigurationFilterSensitiveLog)(item)),
    }),
});
exports.ListBucketAnalyticsConfigurationsOutputFilterSensitiveLog = ListBucketAnalyticsConfigurationsOutputFilterSensitiveLog;
const ListBucketAnalyticsConfigurationsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListBucketAnalyticsConfigurationsRequestFilterSensitiveLog = ListBucketAnalyticsConfigurationsRequestFilterSensitiveLog;
const ListBucketIntelligentTieringConfigurationsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListBucketIntelligentTieringConfigurationsOutputFilterSensitiveLog = ListBucketIntelligentTieringConfigurationsOutputFilterSensitiveLog;
const ListBucketIntelligentTieringConfigurationsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListBucketIntelligentTieringConfigurationsRequestFilterSensitiveLog = ListBucketIntelligentTieringConfigurationsRequestFilterSensitiveLog;
const ListBucketInventoryConfigurationsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.InventoryConfigurationList && {
        InventoryConfigurationList: obj.InventoryConfigurationList.map((item) => (0, exports.InventoryConfigurationFilterSensitiveLog)(item)),
    }),
});
exports.ListBucketInventoryConfigurationsOutputFilterSensitiveLog = ListBucketInventoryConfigurationsOutputFilterSensitiveLog;
const ListBucketInventoryConfigurationsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListBucketInventoryConfigurationsRequestFilterSensitiveLog = ListBucketInventoryConfigurationsRequestFilterSensitiveLog;
const ListBucketMetricsConfigurationsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.MetricsConfigurationList && {
        MetricsConfigurationList: obj.MetricsConfigurationList.map((item) => (0, exports.MetricsConfigurationFilterSensitiveLog)(item)),
    }),
});
exports.ListBucketMetricsConfigurationsOutputFilterSensitiveLog = ListBucketMetricsConfigurationsOutputFilterSensitiveLog;
const ListBucketMetricsConfigurationsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListBucketMetricsConfigurationsRequestFilterSensitiveLog = ListBucketMetricsConfigurationsRequestFilterSensitiveLog;
const BucketFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.BucketFilterSensitiveLog = BucketFilterSensitiveLog;
const ListBucketsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListBucketsOutputFilterSensitiveLog = ListBucketsOutputFilterSensitiveLog;
const CommonPrefixFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CommonPrefixFilterSensitiveLog = CommonPrefixFilterSensitiveLog;
const InitiatorFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.InitiatorFilterSensitiveLog = InitiatorFilterSensitiveLog;
const MultipartUploadFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.MultipartUploadFilterSensitiveLog = MultipartUploadFilterSensitiveLog;
const ListMultipartUploadsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListMultipartUploadsOutputFilterSensitiveLog = ListMultipartUploadsOutputFilterSensitiveLog;
const ListMultipartUploadsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListMultipartUploadsRequestFilterSensitiveLog = ListMultipartUploadsRequestFilterSensitiveLog;
const _ObjectFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports._ObjectFilterSensitiveLog = _ObjectFilterSensitiveLog;
const ListObjectsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListObjectsOutputFilterSensitiveLog = ListObjectsOutputFilterSensitiveLog;
const ListObjectsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListObjectsRequestFilterSensitiveLog = ListObjectsRequestFilterSensitiveLog;
const ListObjectsV2OutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListObjectsV2OutputFilterSensitiveLog = ListObjectsV2OutputFilterSensitiveLog;
const ListObjectsV2RequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListObjectsV2RequestFilterSensitiveLog = ListObjectsV2RequestFilterSensitiveLog;
const DeleteMarkerEntryFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.DeleteMarkerEntryFilterSensitiveLog = DeleteMarkerEntryFilterSensitiveLog;
const ObjectVersionFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ObjectVersionFilterSensitiveLog = ObjectVersionFilterSensitiveLog;
const ListObjectVersionsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListObjectVersionsOutputFilterSensitiveLog = ListObjectVersionsOutputFilterSensitiveLog;
const ListObjectVersionsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListObjectVersionsRequestFilterSensitiveLog = ListObjectVersionsRequestFilterSensitiveLog;
const PartFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PartFilterSensitiveLog = PartFilterSensitiveLog;
const ListPartsOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.ListPartsOutputFilterSensitiveLog = ListPartsOutputFilterSensitiveLog;
const ListPartsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
});
exports.ListPartsRequestFilterSensitiveLog = ListPartsRequestFilterSensitiveLog;
const PutBucketAccelerateConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutBucketAccelerateConfigurationRequestFilterSensitiveLog = PutBucketAccelerateConfigurationRequestFilterSensitiveLog;
const PutBucketAclRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutBucketAclRequestFilterSensitiveLog = PutBucketAclRequestFilterSensitiveLog;
const PutBucketAnalyticsConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AnalyticsConfiguration && {
        AnalyticsConfiguration: (0, exports.AnalyticsConfigurationFilterSensitiveLog)(obj.AnalyticsConfiguration),
    }),
});
exports.PutBucketAnalyticsConfigurationRequestFilterSensitiveLog = PutBucketAnalyticsConfigurationRequestFilterSensitiveLog;
const CORSConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.CORSConfigurationFilterSensitiveLog = CORSConfigurationFilterSensitiveLog;
const PutBucketCorsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutBucketCorsRequestFilterSensitiveLog = PutBucketCorsRequestFilterSensitiveLog;
const PutBucketEncryptionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ServerSideEncryptionConfiguration && {
        ServerSideEncryptionConfiguration: (0, exports.ServerSideEncryptionConfigurationFilterSensitiveLog)(obj.ServerSideEncryptionConfiguration),
    }),
});
exports.PutBucketEncryptionRequestFilterSensitiveLog = PutBucketEncryptionRequestFilterSensitiveLog;
const PutBucketIntelligentTieringConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutBucketIntelligentTieringConfigurationRequestFilterSensitiveLog = PutBucketIntelligentTieringConfigurationRequestFilterSensitiveLog;
const PutBucketInventoryConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.InventoryConfiguration && {
        InventoryConfiguration: (0, exports.InventoryConfigurationFilterSensitiveLog)(obj.InventoryConfiguration),
    }),
});
exports.PutBucketInventoryConfigurationRequestFilterSensitiveLog = PutBucketInventoryConfigurationRequestFilterSensitiveLog;
const BucketLifecycleConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => (0, exports.LifecycleRuleFilterSensitiveLog)(item)) }),
});
exports.BucketLifecycleConfigurationFilterSensitiveLog = BucketLifecycleConfigurationFilterSensitiveLog;
const PutBucketLifecycleConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.LifecycleConfiguration && {
        LifecycleConfiguration: (0, exports.BucketLifecycleConfigurationFilterSensitiveLog)(obj.LifecycleConfiguration),
    }),
});
exports.PutBucketLifecycleConfigurationRequestFilterSensitiveLog = PutBucketLifecycleConfigurationRequestFilterSensitiveLog;
const BucketLoggingStatusFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.BucketLoggingStatusFilterSensitiveLog = BucketLoggingStatusFilterSensitiveLog;
const PutBucketLoggingRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutBucketLoggingRequestFilterSensitiveLog = PutBucketLoggingRequestFilterSensitiveLog;
const PutBucketMetricsConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.MetricsConfiguration && {
        MetricsConfiguration: (0, exports.MetricsConfigurationFilterSensitiveLog)(obj.MetricsConfiguration),
    }),
});
exports.PutBucketMetricsConfigurationRequestFilterSensitiveLog = PutBucketMetricsConfigurationRequestFilterSensitiveLog;
const PutBucketNotificationConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutBucketNotificationConfigurationRequestFilterSensitiveLog = PutBucketNotificationConfigurationRequestFilterSensitiveLog;
const PutBucketOwnershipControlsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutBucketOwnershipControlsRequestFilterSensitiveLog = PutBucketOwnershipControlsRequestFilterSensitiveLog;
const PutBucketPolicyRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutBucketPolicyRequestFilterSensitiveLog = PutBucketPolicyRequestFilterSensitiveLog;
const PutBucketReplicationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ReplicationConfiguration && {
        ReplicationConfiguration: (0, exports.ReplicationConfigurationFilterSensitiveLog)(obj.ReplicationConfiguration),
    }),
});
exports.PutBucketReplicationRequestFilterSensitiveLog = PutBucketReplicationRequestFilterSensitiveLog;
const RequestPaymentConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.RequestPaymentConfigurationFilterSensitiveLog = RequestPaymentConfigurationFilterSensitiveLog;
const PutBucketRequestPaymentRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutBucketRequestPaymentRequestFilterSensitiveLog = PutBucketRequestPaymentRequestFilterSensitiveLog;
const TaggingFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.TaggingFilterSensitiveLog = TaggingFilterSensitiveLog;
const PutBucketTaggingRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutBucketTaggingRequestFilterSensitiveLog = PutBucketTaggingRequestFilterSensitiveLog;
const VersioningConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.VersioningConfigurationFilterSensitiveLog = VersioningConfigurationFilterSensitiveLog;
const PutBucketVersioningRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutBucketVersioningRequestFilterSensitiveLog = PutBucketVersioningRequestFilterSensitiveLog;
const WebsiteConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.WebsiteConfigurationFilterSensitiveLog = WebsiteConfigurationFilterSensitiveLog;
const PutBucketWebsiteRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutBucketWebsiteRequestFilterSensitiveLog = PutBucketWebsiteRequestFilterSensitiveLog;
const PutObjectOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: smithy_client_1.SENSITIVE_STRING }),
});
exports.PutObjectOutputFilterSensitiveLog = PutObjectOutputFilterSensitiveLog;
const PutObjectRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: smithy_client_1.SENSITIVE_STRING }),
});
exports.PutObjectRequestFilterSensitiveLog = PutObjectRequestFilterSensitiveLog;
const PutObjectAclOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutObjectAclOutputFilterSensitiveLog = PutObjectAclOutputFilterSensitiveLog;
const PutObjectAclRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutObjectAclRequestFilterSensitiveLog = PutObjectAclRequestFilterSensitiveLog;
const PutObjectLegalHoldOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutObjectLegalHoldOutputFilterSensitiveLog = PutObjectLegalHoldOutputFilterSensitiveLog;
const PutObjectLegalHoldRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutObjectLegalHoldRequestFilterSensitiveLog = PutObjectLegalHoldRequestFilterSensitiveLog;
const PutObjectLockConfigurationOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutObjectLockConfigurationOutputFilterSensitiveLog = PutObjectLockConfigurationOutputFilterSensitiveLog;
const PutObjectLockConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.PutObjectLockConfigurationRequestFilterSensitiveLog = PutObjectLockConfigurationRequestFilterSensitiveLog;
