/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UNA
 */
class UNA extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.componentDataElement =
          this.constructor.getValue(obj.componentDataElement
     || obj.ComponentDataElement);
        this.dataElement = this.constructor.getValue(obj.dataElement || obj.DataElement);
        this.decimalNotation =
          this.constructor.getValue(obj.decimalNotation
     || obj.DecimalNotation);
        this.releaseIndicator =
          this.constructor.getValue(obj.releaseIndicator
     || obj.ReleaseIndicator);
        this.reserved = this.constructor.getValue(obj.reserved || obj.Reserved);
        this.segment = this.constructor.getValue(obj.segment || obj.Segment);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'componentDataElement', realName: 'ComponentDataElement' },
            { name: 'dataElement', realName: 'DataElement' },
            { name: 'decimalNotation', realName: 'DecimalNotation' },
            { name: 'releaseIndicator', realName: 'ReleaseIndicator' },
            { name: 'reserved', realName: 'Reserved' },
            { name: 'segment', realName: 'Segment' },
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

module.exports = UNA;
