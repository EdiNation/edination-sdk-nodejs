/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of GS
 */
class GS extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.codeIdentifyingInformationType1 =
          this.constructor.getValue(obj.codeIdentifyingInformationType1
     || obj.CodeIdentifyingInformationType_1);
        this.senderIDCode2 = this.constructor.getValue(obj.senderIDCode2 || obj.SenderIDCode_2);
        this.receiverIDCode3 =
          this.constructor.getValue(obj.receiverIDCode3
     || obj.ReceiverIDCode_3);
        this.date4 = this.constructor.getValue(obj.date4 || obj.Date_4);
        this.time5 = this.constructor.getValue(obj.time5 || obj.Time_5);
        this.groupControlNumber6 =
          this.constructor.getValue(obj.groupControlNumber6
     || obj.GroupControlNumber_6);
        this.transactionTypeCode7 =
          this.constructor.getValue(obj.transactionTypeCode7
     || obj.TransactionTypeCode_7);
        this.versionAndRelease8 =
          this.constructor.getValue(obj.versionAndRelease8
     || obj.VersionAndRelease_8);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            {
                name: 'codeIdentifyingInformationType1',
                realName: 'CodeIdentifyingInformationType_1',
            },
            { name: 'senderIDCode2', realName: 'SenderIDCode_2' },
            { name: 'receiverIDCode3', realName: 'ReceiverIDCode_3' },
            { name: 'date4', realName: 'Date_4' },
            { name: 'time5', realName: 'Time_5' },
            { name: 'groupControlNumber6', realName: 'GroupControlNumber_6' },
            { name: 'transactionTypeCode7', realName: 'TransactionTypeCode_7' },
            { name: 'versionAndRelease8', realName: 'VersionAndRelease_8' },
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

module.exports = GS;
