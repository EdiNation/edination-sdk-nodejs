/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of S005
 */
class S005 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.recipientReferencePassword1 =
          this.constructor.getValue(obj.recipientReferencePassword1
     || obj.RecipientReferencePassword_1);
        this.recipientReferencePasswordQualifier2 =
          this.constructor.getValue(obj.recipientReferencePasswordQualifier2
     || obj.RecipientReferencePasswordQualifier_2);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'recipientReferencePassword1', realName: 'RecipientReferencePassword_1' },
            {
                name: 'recipientReferencePasswordQualifier2',
                realName: 'RecipientReferencePasswordQualifier_2',
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

module.exports = S005;
