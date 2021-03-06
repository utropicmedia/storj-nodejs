var storjnodejs = require('bindings')('storjnodejs');

class ListBucketsOptions {
    constructor(cursor=""){
        this.cursor = cursor;
    }
}

class Permission {
    constructor(allow_download=false,allow_upload=false,allow_list=false,allow_delete=false,not_before=0,not_after=0){
        this.allow_download=allow_download;
        this.allow_upload=allow_upload;
        this.allow_list=allow_list;
        this.allow_delete=allow_delete;
        this.not_before=not_before;
        this.not_after=not_after;
    }
}

class UploadOptions {
    constructor(expires=0){
        this.expires = expires;
    }
}

class DownloadOptions{
    constructor(offset = 0,length = 0){
    this.offset = offset;
    this.length = length; 
    }
}

class ListObjectsOptions {
    constructor(prefix="",cursor="",recursive=false,system=false,custom=false){
        this.prefix=prefix;
        this.cursor=cursor;
        this.recursive=recursive;
        this.system=system;
        this.custom=custom;
    }
}

class SharePrefix {
    constructor(bucket="",prefix=""){
        this.bucket=bucket;
        this.prefix=prefix;
    }    
}

class CustomMetadata {
    constructor(entries=[],count=0){
        this.entries = entries;
        this.count = count;
    }
}

class CustomMetadataEntry {
    constructor(key="", key_length=0,value=0,value_length=0) {
        this.key=key;
        this.key_length=key_length;
        this.value=value;
        this.value_length=value_length;    
    }
}
//exporting function and object
module.exports = {
    storj_nodejs : storjnodejs,
    DownloadOptions : DownloadOptions,
    ListBucketsOptions : ListBucketsOptions,
    Permission : Permission,
    UploadOptions : UploadOptions,
    ListObjectsOptions : ListObjectsOptions,
    CustomMetadataEntry : CustomMetadataEntry,
    CustomMetadata : CustomMetadata,
    SharePrefix : SharePrefix
}