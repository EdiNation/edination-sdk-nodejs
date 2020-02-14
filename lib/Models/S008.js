/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of S008
 */
class S008 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.messageVersionNumber1 =
          this.constructor.getValue(obj.messageVersionNumber1
     || obj.MessageVersionNumber_1);
        this.messageReleaseNumber2 =
          this.constructor.getValue(obj.messageReleaseNumber2
     || obj.MessageReleaseNumber_2);
        this.associationAssignedCode3 =
          this.constructor.getValue(obj.associationAssignedCode3
     || obj.AssociationAssignedCode_3);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'messageVersionNumber1', realName: 'MessageVersionNumber_1' },
            { name: 'messageReleaseNumber2', realName: 'MessageReleaseNumber_2' },
            { name: 'associationAssignedCode3', realName: 'AssociationAssignedCode_3' },
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

module.exports = S008;
