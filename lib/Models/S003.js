/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of S003
 */
class S003 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.interchangeRecipientIdentification1 =
          this.constructor.getValue(obj.interchangeRecipientIdentification1
     || obj.InterchangeRecipientIdentification_1);
        this.identificationCodeQualifier2 =
          this.constructor.getValue(obj.identificationCodeQualifier2
     || obj.IdentificationCodeQualifier_2);
        this.interchangeRecipientInternalIdentification3 =
          this.constructor.getValue(obj.interchangeRecipientInternalIdentification3
     || obj.InterchangeRecipientInternalIdentification_3);
        this.interchangeRecipientInternalSubIdentification4 =
          this.constructor.getValue(obj.interchangeRecipientInternalSubIdentification4
     || obj.InterchangeRecipientInternalSubIdentification_4);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            {
                name: 'interchangeRecipientIdentification1',
                realName: 'InterchangeRecipientIdentification_1',
            },
            { name: 'identificationCodeQualifier2', realName: 'IdentificationCodeQualifier_2' },
            {
                name: 'interchangeRecipientInternalIdentification3',
                realName: 'InterchangeRecipientInternalIdentification_3',
            },
            {
                name: 'interchangeRecipientInternalSubIdentification4',
                realName: 'InterchangeRecipientInternalSubIdentification_4',
            },
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

module.exports = S003;
