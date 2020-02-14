/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UNB
 */
class UNB extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.sYNTAXIDENTIFIER1 =
          this.constructor.getValue(obj.sYNTAXIDENTIFIER1
     || obj.SYNTAXIDENTIFIER_1);
        this.iNTERCHANGESENDER2 =
          this.constructor.getValue(obj.iNTERCHANGESENDER2
     || obj.INTERCHANGESENDER_2);
        this.iNTERCHANGERECIPIENT3 =
          this.constructor.getValue(obj.iNTERCHANGERECIPIENT3
     || obj.INTERCHANGERECIPIENT_3);
        this.dATEANDTIMEOFPREPARATION4 =
          this.constructor.getValue(obj.dATEANDTIMEOFPREPARATION4
     || obj.DATEANDTIMEOFPREPARATION_4);
        this.interchangeControlReference5 =
          this.constructor.getValue(obj.interchangeControlReference5
     || obj.InterchangeControlReference_5);
        this.rECIPIENTSREFERENCEPASSWORDDETAILS6 =
          this.constructor.getValue(obj.rECIPIENTSREFERENCEPASSWORDDETAILS6
     || obj.RECIPIENTSREFERENCEPASSWORDDETAILS_6);
        this.applicationReference7 =
          this.constructor.getValue(obj.applicationReference7
     || obj.ApplicationReference_7);
        this.processingPriorityCode8 =
          this.constructor.getValue(obj.processingPriorityCode8
     || obj.ProcessingPriorityCode_8);
        this.acknowledgementRequest9 =
          this.constructor.getValue(obj.acknowledgementRequest9
     || obj.AcknowledgementRequest_9);
        this.interchangeAgreementIdentifier10 =
          this.constructor.getValue(obj.interchangeAgreementIdentifier10
     || obj.InterchangeAgreementIdentifier_10);
        this.testIndicator11 =
          this.constructor.getValue(obj.testIndicator11
     || obj.TestIndicator_11);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'sYNTAXIDENTIFIER1', realName: 'SYNTAXIDENTIFIER_1', type: 'S001' },
            { name: 'iNTERCHANGESENDER2', realName: 'INTERCHANGESENDER_2', type: 'S002' },
            { name: 'iNTERCHANGERECIPIENT3', realName: 'INTERCHANGERECIPIENT_3', type: 'S003' },
            {
                name: 'dATEANDTIMEOFPREPARATION4',
                realName: 'DATEANDTIMEOFPREPARATION_4',
                type: 'S004',
            },
            { name: 'interchangeControlReference5', realName: 'InterchangeControlReference_5' },
            {
                name: 'rECIPIENTSREFERENCEPASSWORDDETAILS6',
                realName: 'RECIPIENTSREFERENCEPASSWORDDETAILS_6',
                type: 'S005',
            },
            { name: 'applicationReference7', realName: 'ApplicationReference_7' },
            { name: 'processingPriorityCode8', realName: 'ProcessingPriorityCode_8' },
            { name: 'acknowledgementRequest9', realName: 'AcknowledgementRequest_9' },
            {
                name: 'interchangeAgreementIdentifier10',
                realName: 'InterchangeAgreementIdentifier_10',
            },
            { name: 'testIndicator11', realName: 'TestIndicator_11' },
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

module.exports = UNB;
