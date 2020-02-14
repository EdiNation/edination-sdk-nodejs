/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of S001
 */
class S001 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.syntaxIdentifier1 =
          this.constructor.getValue(obj.syntaxIdentifier1
     || obj.SyntaxIdentifier_1);
        this.syntaxVersionNumber2 =
          this.constructor.getValue(obj.syntaxVersionNumber2
     || obj.SyntaxVersionNumber_2);
        this.serviceCodeListDirectoryVersionNumber3 =
          this.constructor.getValue(obj.serviceCodeListDirectoryVersionNumber3
     || obj.ServiceCodeListDirectoryVersionNumber_3);
        this.characterEncoding4 =
          this.constructor.getValue(obj.characterEncoding4
     || obj.CharacterEncoding_4);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'syntaxIdentifier1', realName: 'SyntaxIdentifier_1' },
            { name: 'syntaxVersionNumber2', realName: 'SyntaxVersionNumber_2' },
            {
                name: 'serviceCodeListDirectoryVersionNumber3',
                realName: 'ServiceCodeListDirectoryVersionNumber_3',
            },
            { name: 'characterEncoding4', realName: 'CharacterEncoding_4' },
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

module.exports = S001;
