/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of EdifactGroup
 */
class EdifactGroup extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.uNG = this.constructor.getValue(obj.uNG || obj.UNG);
        this.transactions = this.constructor.getValue(obj.transactions || obj.Transactions);
        this.uNETrailers = this.constructor.getValue(obj.uNETrailers || obj.UNETrailers);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'uNG', realName: 'UNG', type: 'UNG' },
            { name: 'transactions', realName: 'Transactions', array: true },
            { name: 'uNETrailers', realName: 'UNETrailers', array: true, type: 'UNE' },
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

module.exports = EdifactGroup;
