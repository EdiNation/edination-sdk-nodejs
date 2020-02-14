/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UNG
 */
class UNG extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.messageGroupIdentification1 =
          this.constructor.getValue(obj.messageGroupIdentification1
     || obj.MessageGroupIdentification_1);
        this.aPPLICATIONSENDERIDENTIFICATION2 =
          this.constructor.getValue(obj.aPPLICATIONSENDERIDENTIFICATION2
     || obj.APPLICATIONSENDERIDENTIFICATION_2);
        this.aPPLICATIONRECIPIENTIDENTIFICATION3 =
          this.constructor.getValue(obj.aPPLICATIONRECIPIENTIDENTIFICATION3
     || obj.APPLICATIONRECIPIENTIDENTIFICATION_3);
        this.dATEANDTIMEOFPREPARATION4 =
          this.constructor.getValue(obj.dATEANDTIMEOFPREPARATION4
     || obj.DATEANDTIMEOFPREPARATION_4);
        this.groupReferenceNumber5 =
          this.constructor.getValue(obj.groupReferenceNumber5
     || obj.GroupReferenceNumber_5);
        this.controllingAgency6 =
          this.constructor.getValue(obj.controllingAgency6
     || obj.ControllingAgency_6);
        this.mESSAGEVERSION7 =
          this.constructor.getValue(obj.mESSAGEVERSION7
     || obj.MESSAGEVERSION_7);
        this.applicationPassword8 =
          this.constructor.getValue(obj.applicationPassword8
     || obj.ApplicationPassword_8);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'messageGroupIdentification1', realName: 'MessageGroupIdentification_1' },
            {
                name: 'aPPLICATIONSENDERIDENTIFICATION2',
                realName: 'APPLICATIONSENDERIDENTIFICATION_2',
                type: 'S006',
            },
            {
                name: 'aPPLICATIONRECIPIENTIDENTIFICATION3',
                realName: 'APPLICATIONRECIPIENTIDENTIFICATION_3',
                type: 'S007',
            },
            {
                name: 'dATEANDTIMEOFPREPARATION4',
                realName: 'DATEANDTIMEOFPREPARATION_4',
                type: 'S004',
            },
            { name: 'groupReferenceNumber5', realName: 'GroupReferenceNumber_5' },
            { name: 'controllingAgency6', realName: 'ControllingAgency_6' },
            { name: 'mESSAGEVERSION7', realName: 'MESSAGEVERSION_7', type: 'S008' },
            { name: 'applicationPassword8', realName: 'ApplicationPassword_8' },
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

module.exports = UNG;
