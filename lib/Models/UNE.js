/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UNE
 */
class UNE extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.groupControlCount1 =
          this.constructor.getValue(obj.groupControlCount1
     || obj.GroupControlCount_1);
        this.groupReferenceNumber2 =
          this.constructor.getValue(obj.groupReferenceNumber2
     || obj.GroupReferenceNumber_2);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'groupControlCount1', realName: 'GroupControlCount_1' },
            { name: 'groupReferenceNumber2', realName: 'GroupReferenceNumber_2' },
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

module.exports = UNE;
