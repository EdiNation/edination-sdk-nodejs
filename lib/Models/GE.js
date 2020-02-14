/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of GE
 */
class GE extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.numberOfIncludedSets1 =
          this.constructor.getValue(obj.numberOfIncludedSets1
     || obj.NumberOfIncludedSets_1);
        this.groupControlNumber2 =
          this.constructor.getValue(obj.groupControlNumber2
     || obj.GroupControlNumber_2);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'numberOfIncludedSets1', realName: 'NumberOfIncludedSets_1' },
            { name: 'groupControlNumber2', realName: 'GroupControlNumber_2' },
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

module.exports = GE;
