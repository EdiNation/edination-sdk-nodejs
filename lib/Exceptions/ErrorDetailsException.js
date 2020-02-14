/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const APIException = require('./APIException');

/**
 * Creates an instance of ErrorDetailsException
 */
class ErrorDetailsException extends APIException {
    /**
     * @constructor
     */
    constructor() {
        super();
        /**
         * TODO: Write general description for this field
         */
        this.code = null;

        /**
         * TODO: Write general description for this field
         */
        this.details = null;
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'code', realName: 'Code' },
            { name: 'details', realName: 'Details', array: true },
        ]);
    }
}

module.exports = ErrorDetailsException;
