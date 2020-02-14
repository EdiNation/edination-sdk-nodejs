/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of OperationDetail
 */
class OperationDetail extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.index = this.constructor.getValue(obj.index || obj.Index);
        this.transactionIndex =
          this.constructor.getValue(obj.transactionIndex
     || obj.TransactionIndex);
        this.transactionRef = this.constructor.getValue(obj.transactionRef || obj.TransactionRef);
        this.segmentId = this.constructor.getValue(obj.segmentId || obj.SegmentId);
        this.value = this.constructor.getValue(obj.value || obj.Value);
        this.message = this.constructor.getValue(obj.message || obj.Message);
        this.status = this.constructor.getValue(obj.status || obj.Status);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'index', realName: 'Index' },
            { name: 'transactionIndex', realName: 'TransactionIndex' },
            { name: 'transactionRef', realName: 'TransactionRef' },
            { name: 'segmentId', realName: 'SegmentId' },
            { name: 'value', realName: 'Value' },
            { name: 'message', realName: 'Message' },
            { name: 'status', realName: 'Status' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = OperationDetail;
