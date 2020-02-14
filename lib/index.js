/**
  * @module EdiNationAPILib
  *
  * TODO Enter a description
  */

'use strict';

const Configuration = require('./configuration');
const EdifactController = require('./Controllers/EdifactController');
const EdiModelController = require('./Controllers/EdiModelController');
const X12Controller = require('./Controllers/X12Controller');
const UNA = require('./Models/UNA');
const S001 = require('./Models/S001');
const S002 = require('./Models/S002');
const S003 = require('./Models/S003');
const S004 = require('./Models/S004');
const S005 = require('./Models/S005');
const UNB = require('./Models/UNB');
const S006 = require('./Models/S006');
const S007 = require('./Models/S007');
const S008 = require('./Models/S008');
const UNG = require('./Models/UNG');
const UNE = require('./Models/UNE');
const EdifactGroup = require('./Models/EdifactGroup');
const UNZ = require('./Models/UNZ');
const OperationDetail = require('./Models/OperationDetail');
const OperationResult = require('./Models/OperationResult');
const EdifactInterchange = require('./Models/EdifactInterchange');
const Link = require('./Models/Link');
const EdiModel = require('./Models/EdiModel');
const ISA = require('./Models/ISA');
const TA1 = require('./Models/TA1');
const GS = require('./Models/GS');
const GE = require('./Models/GE');
const X12Group = require('./Models/X12Group');
const IEA = require('./Models/IEA');
const X12Interchange = require('./Models/X12Interchange');
const ErrorDetailsException = require('./Exceptions/ErrorDetailsException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of EdiNationAPILib
    Configuration,
    // controllers of EdiNationAPILib
    EdifactController,
    EdiModelController,
    X12Controller,
    // models of EdiNationAPILib
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
    // exceptions of EdiNationAPILib
    ErrorDetailsException,
    APIException,
};

module.exports = initializer;
