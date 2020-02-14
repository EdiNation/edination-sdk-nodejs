/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of S007
 */
class S007 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.applicationRecipientIdentification1 =
          this.constructor.getValue(obj.applicationRecipientIdentification1
     || obj.ApplicationRecipientIdentification_1);
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
                name: 'applicationRecipientIdentification1',
                realName: 'ApplicationRecipientIdentification_1',
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

module.exports = S007;
