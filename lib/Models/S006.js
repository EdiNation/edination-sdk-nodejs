/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of S006
 */
class S006 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.applicationSenderIdentification1 =
          this.constructor.getValue(obj.applicationSenderIdentification1
     || obj.ApplicationSenderIdentification_1);
        this.identificationCodeQualifier2 =
          this.constructor.getValue(obj.identificationCodeQualifier2
     || obj.IdentificationCodeQualifier_2);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            {
                name: 'applicationSenderIdentification1',
                realName: 'ApplicationSenderIdentification_1',
            },
            { name: 'identificationCodeQualifier2', realName: 'IdentificationCodeQualifier_2' },
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

module.exports = S006;
