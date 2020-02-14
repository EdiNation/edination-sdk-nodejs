/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of OperationResult
 */
class OperationResult extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.lastIndex = this.constructor.getValue(obj.lastIndex || obj.LastIndex);
        this.details = this.constructor.getValue(obj.details || obj.Details);
        this.status = this.constructor.getValue(obj.status || obj.Status);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'lastIndex', realName: 'LastIndex' },
            { name: 'details', realName: 'Details', array: true, type: 'OperationDetail' },
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

module.exports = OperationResult;
