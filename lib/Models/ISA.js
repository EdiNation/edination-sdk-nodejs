/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of ISA
 */
class ISA extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.authorizationInformationQualifier1 =
          this.constructor.getValue(obj.authorizationInformationQualifier1
     || obj.AuthorizationInformationQualifier_1);
        this.authorizationInformation2 =
          this.constructor.getValue(obj.authorizationInformation2
     || obj.AuthorizationInformation_2);
        this.securityInformationQualifier3 =
          this.constructor.getValue(obj.securityInformationQualifier3
     || obj.SecurityInformationQualifier_3);
        this.securityInformation4 =
          this.constructor.getValue(obj.securityInformation4
     || obj.SecurityInformation_4);
        this.senderIDQualifier5 =
          this.constructor.getValue(obj.senderIDQualifier5
     || obj.SenderIDQualifier_5);
        this.interchangeSenderID6 =
          this.constructor.getValue(obj.interchangeSenderID6
     || obj.InterchangeSenderID_6);
        this.receiverIDQualifier7 =
          this.constructor.getValue(obj.receiverIDQualifier7
     || obj.ReceiverIDQualifier_7);
        this.interchangeReceiverID8 =
          this.constructor.getValue(obj.interchangeReceiverID8
     || obj.InterchangeReceiverID_8);
        this.interchangeDate9 =
          this.constructor.getValue(obj.interchangeDate9
     || obj.InterchangeDate_9);
        this.interchangeTime10 =
          this.constructor.getValue(obj.interchangeTime10
     || obj.InterchangeTime_10);
        this.interchangeControlStandardsIdentifier11 =
          this.constructor.getValue(obj.interchangeControlStandardsIdentifier11
     || obj.InterchangeControlStandardsIdentifier_11);
        this.interchangeControlVersionNumber12 =
          this.constructor.getValue(obj.interchangeControlVersionNumber12
     || obj.InterchangeControlVersionNumber_12);
        this.interchangeControlNumber13 =
          this.constructor.getValue(obj.interchangeControlNumber13
     || obj.InterchangeControlNumber_13);
        this.acknowledgementRequested14 =
          this.constructor.getValue(obj.acknowledgementRequested14
     || obj.AcknowledgementRequested_14);
        this.usageIndicator15 =
          this.constructor.getValue(obj.usageIndicator15
     || obj.UsageIndicator_15);
        this.componentElementSeparator16 =
          this.constructor.getValue(obj.componentElementSeparator16
     || obj.ComponentElementSeparator_16);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            {
                name: 'authorizationInformationQualifier1',
                realName: 'AuthorizationInformationQualifier_1',
            },
            { name: 'authorizationInformation2', realName: 'AuthorizationInformation_2' },
            { name: 'securityInformationQualifier3', realName: 'SecurityInformationQualifier_3' },
            { name: 'securityInformation4', realName: 'SecurityInformation_4' },
            { name: 'senderIDQualifier5', realName: 'SenderIDQualifier_5' },
            { name: 'interchangeSenderID6', realName: 'InterchangeSenderID_6' },
            { name: 'receiverIDQualifier7', realName: 'ReceiverIDQualifier_7' },
            { name: 'interchangeReceiverID8', realName: 'InterchangeReceiverID_8' },
            { name: 'interchangeDate9', realName: 'InterchangeDate_9' },
            { name: 'interchangeTime10', realName: 'InterchangeTime_10' },
            {
                name: 'interchangeControlStandardsIdentifier11',
                realName: 'InterchangeControlStandardsIdentifier_11',
            },
            {
                name: 'interchangeControlVersionNumber12',
                realName: 'InterchangeControlVersionNumber_12',
            },
            { name: 'interchangeControlNumber13', realName: 'InterchangeControlNumber_13' },
            { name: 'acknowledgementRequested14', realName: 'AcknowledgementRequested_14' },
            { name: 'usageIndicator15', realName: 'UsageIndicator_15' },
            { name: 'componentElementSeparator16', realName: 'ComponentElementSeparator_16' },
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

module.exports = ISA;
