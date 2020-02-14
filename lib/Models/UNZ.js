/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UNZ
 */
class UNZ extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.interchangeControlCount1 =
          this.constructor.getValue(obj.interchangeControlCount1
     || obj.InterchangeControlCount_1);
        this.interchangeControlReference2 =
          this.constructor.getValue(obj.interchangeControlReference2
     || obj.InterchangeControlReference_2);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'interchangeControlCount1', realName: 'InterchangeControlCount_1' },
            { name: 'interchangeControlReference2', realName: 'InterchangeControlReference_2' },
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

module.exports = UNZ;
