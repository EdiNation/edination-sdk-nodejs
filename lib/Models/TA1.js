/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of TA1
 */
class TA1 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.interchangeControlNumber1 =
          this.constructor.getValue(obj.interchangeControlNumber1
     || obj.InterchangeControlNumber_1);
        this.interchangeDate2 =
          this.constructor.getValue(obj.interchangeDate2
     || obj.InterchangeDate_2);
        this.interchangeTime3 =
          this.constructor.getValue(obj.interchangeTime3
     || obj.InterchangeTime_3);
        this.interchangeAcknowledgmentCode4 =
          this.constructor.getValue(obj.interchangeAcknowledgmentCode4
     || obj.InterchangeAcknowledgmentCode_4);
        this.interchangeNoteCode5 =
          this.constructor.getValue(obj.interchangeNoteCode5
     || obj.InterchangeNoteCode_5);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'interchangeControlNumber1', realName: 'InterchangeControlNumber_1' },
            { name: 'interchangeDate2', realName: 'InterchangeDate_2' },
            { name: 'interchangeTime3', realName: 'InterchangeTime_3' },
            { name: 'interchangeAcknowledgmentCode4', realName: 'InterchangeAcknowledgmentCode_4' },
            { name: 'interchangeNoteCode5', realName: 'InterchangeNoteCode_5' },
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

module.exports = TA1;
