/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of X12Interchange
 */
class X12Interchange extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.segmentDelimiter =
          this.constructor.getValue(obj.segmentDelimiter
     || obj.SegmentDelimiter);
        this.dataElementDelimiter =
          this.constructor.getValue(obj.dataElementDelimiter
     || obj.DataElementDelimiter);
        this.iSA = this.constructor.getValue(obj.iSA || obj.ISA);
        this.tA1 = this.constructor.getValue(obj.tA1 || obj.TA1);
        this.groups = this.constructor.getValue(obj.groups || obj.Groups);
        this.iEATrailers = this.constructor.getValue(obj.iEATrailers || obj.IEATrailers);
        this.result = this.constructor.getValue(obj.result || obj.Result);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'segmentDelimiter', realName: 'SegmentDelimiter' },
            { name: 'dataElementDelimiter', realName: 'DataElementDelimiter' },
            { name: 'iSA', realName: 'ISA', type: 'ISA' },
            { name: 'tA1', realName: 'TA1', type: 'TA1' },
            { name: 'groups', realName: 'Groups', array: true, type: 'X12Group' },
            { name: 'iEATrailers', realName: 'IEATrailers', array: true, type: 'IEA' },
            { name: 'result', realName: 'Result', type: 'OperationResult' },
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

module.exports = X12Interchange;
