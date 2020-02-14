/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of EdifactInterchange
 */
class EdifactInterchange extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.uNA = this.constructor.getValue(obj.uNA || obj.UNA);
        this.uNB = this.constructor.getValue(obj.uNB || obj.UNB);
        this.groups = this.constructor.getValue(obj.groups || obj.Groups);
        this.uNZTrailers = this.constructor.getValue(obj.uNZTrailers || obj.UNZTrailers);
        this.result = this.constructor.getValue(obj.result || obj.Result);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'uNA', realName: 'UNA', type: 'UNA' },
            { name: 'uNB', realName: 'UNB', type: 'UNB' },
            { name: 'groups', realName: 'Groups', array: true, type: 'EdifactGroup' },
            { name: 'uNZTrailers', realName: 'UNZTrailers', array: true, type: 'UNZ' },
            { name: 'result', realName: 'Result', type: 'OperationResult' },
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

module.exports = EdifactInterchange;
