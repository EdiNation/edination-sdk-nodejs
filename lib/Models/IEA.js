/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of IEA
 */
class IEA extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.numberOfIncludedGroups1 =
          this.constructor.getValue(obj.numberOfIncludedGroups1
     || obj.NumberOfIncludedGroups_1);
        this.interchangeControlNumber2 =
          this.constructor.getValue(obj.interchangeControlNumber2
     || obj.InterchangeControlNumber_2);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'numberOfIncludedGroups1', realName: 'NumberOfIncludedGroups_1' },
            { name: 'interchangeControlNumber2', realName: 'InterchangeControlNumber_2' },
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

module.exports = IEA;
