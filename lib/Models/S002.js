/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of S002
 */
class S002 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.interchangeSenderIdentification1 =
          this.constructor.getValue(obj.interchangeSenderIdentification1
     || obj.InterchangeSenderIdentification_1);
        this.identificationCodeQualifier2 =
          this.constructor.getValue(obj.identificationCodeQualifier2
     || obj.IdentificationCodeQualifier_2);
        this.interchangeSenderInternalIdentification3 =
          this.constructor.getValue(obj.interchangeSenderInternalIdentification3
     || obj.InterchangeSenderInternalIdentification_3);
        this.interchangeSenderInternalSubIdentification4 =
          this.constructor.getValue(obj.interchangeSenderInternalSubIdentification4
     || obj.InterchangeSenderInternalSubIdentification_4);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            {
                name: 'interchangeSenderIdentification1',
                realName: 'InterchangeSenderIdentification_1',
            },
            { name: 'identificationCodeQualifier2', realName: 'IdentificationCodeQualifier_2' },
            {
                name: 'interchangeSenderInternalIdentification3',
                realName: 'InterchangeSenderInternalIdentification_3',
            },
            {
                name: 'interchangeSenderInternalSubIdentification4',
                realName: 'InterchangeSenderInternalSubIdentification_4',
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

module.exports = S002;
