/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const UNA = require('../lib/Models/UNA');
const S001 = require('../lib/Models/S001');
const S002 = require('../lib/Models/S002');
const S003 = require('../lib/Models/S003');
const S004 = require('../lib/Models/S004');
const S005 = require('../lib/Models/S005');
const UNB = require('../lib/Models/UNB');
const S006 = require('../lib/Models/S006');
const S007 = require('../lib/Models/S007');
const S008 = require('../lib/Models/S008');
const UNG = require('../lib/Models/UNG');
const UNE = require('../lib/Models/UNE');
const EdifactGroup = require('../lib/Models/EdifactGroup');
const UNZ = require('../lib/Models/UNZ');
const OperationDetail = require('../lib/Models/OperationDetail');
const OperationResult = require('../lib/Models/OperationResult');
const EdifactInterchange = require('../lib/Models/EdifactInterchange');
const Link = require('../lib/Models/Link');
const EdiModel = require('../lib/Models/EdiModel');
const ISA = require('../lib/Models/ISA');
const TA1 = require('../lib/Models/TA1');
const GS = require('../lib/Models/GS');
const GE = require('../lib/Models/GE');
const X12Group = require('../lib/Models/X12Group');
const IEA = require('../lib/Models/IEA');
const X12Interchange = require('../lib/Models/X12Interchange');
const ErrorDetailsException = require('../lib/Exceptions/ErrorDetailsException');

const classMap = {
    UNA,
    S001,
    S002,
    S003,
    S004,
    S005,
    UNB,
    S006,
    S007,
    S008,
    UNG,
    UNE,
    EdifactGroup,
    UNZ,
    OperationDetail,
    OperationResult,
    EdifactInterchange,
    Link,
    EdiModel,
    ISA,
    TA1,
    GS,
    GE,
    X12Group,
    IEA,
    X12Interchange,
    ErrorDetailsException,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
