/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');
const _fs = require('fs');

class EdifactController {
    /**
     * Reads an EDIFACT file and returns its contents translated to an array of
     * EdifactInterchange objects.
     *
     * @param {string} fileName Upload File
     * @param {bool} ignoreNullValues (optional) Whether to ignore all null values in the response.
     * The default is false.
     * @param {bool} continueOnError (optional) Whether to continue reading if a corrupt
     * interchange is encountered. The default is false.
     * @param {string} charSet (optional) The encoding of the file contents. The default is utf-8.
     * The available values are: unicodeFFFE, utf-32, utf-32BE, us-ascii,
     * iso-8859-1, utf-7, utf-8, utf-16.
     * @param {string} model (optional) The model to use. By default, the API will infer the model
     * based on the transaction and version identifiers.
     * @param {bool} eancomS3 (optional) The default syntax for EANCOM transactions. By default all
     * EANCOM transactions will be translated and validated according to the
     * rules of Syntax 4. Set this flag to true if you need Syntax 3 to be
     * used.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static read(fileName, ignoreNullValues, continueOnError, charSet, model, eancomS3, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/edifact/read';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            ignoreNullValues: (ignoreNullValues !== null) ? ignoreNullValues : false,
            continueOnError: (continueOnError !== null) ? continueOnError : false,
            charSet: (charSet !== null) ? charSet : 'utf-8',
            model,
            eancomS3: (eancomS3 !== null) ? eancomS3 : false,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'Ocp-Apim-Subscription-Key': _configuration.ocpApimSubscriptionKey,
            'user-agent': 'APIMATIC 2.0',
        };

        // prepare form data
        const _formData = {
            fileName: _fs.createReadStream(fileName),
        };

        // remove null values
        _apiHelper.cleanObject(_formData);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            formData: _formData,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = parsed.map(model =>
                        _baseController.getObjectMapper().mapObject(model, 'EdifactInterchange'));
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'ErrorDetailsException');
                    mappedObject.reason = 'Bad Request';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Bad Request', errorCode: 400, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 500) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'ErrorDetailsException');
                    mappedObject.reason = 'Server Error';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Server Error', errorCode: 500, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Translates an EdifactInterchange object to a raw EDIFACT interchange and returns it as a
     * stream.
     *
     * @param {bool} preserveWhitespace (optional) Whether to preserve blank data elements so the
     * output contains multiple delimiters instead of omitting any
     * excess delimiters. The default is false.
     * @param {string} charSet (optional) The encoding of the file contents. The default is utf-8.
     * The available values are: unicodeFFFE, utf-32, utf-32BE, us-ascii,
     * iso-8859-1, utf-7, utf-8, utf-16.
     * @param {string} postfix (optional) The postfix to be applied at the end of each segment,
     * just after the segment separator. This is usually a carriage return
     * (CR), line feed (LF) or both. By default, there is no postfix.
     * @param {bool} sameRepetionAndDataElement (optional) Sometimes the same delimiter is used to
     * denote data element separator and repetition
     * separator as in IATA transactions. By default, this
     * is false.
     * @param {bool} eancomS3 (optional) The default syntax for EANCOM transactions. By default all
     * EANCOM transactions will be translated and validated according to the
     * rules of Syntax 4. Set this flag to true if you need Syntax 3 to be
     * used.
     * @param {string} contentType (optional) Example: application/json
     * @param {EdifactInterchange} body (optional) The EdifactInterchange object to translate to
     * raw EDIFACT.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static write(preserveWhitespace,
        charSet,
        postfix,
        sameRepetionAndDataElement,
        eancomS3,
        contentType,
        body,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/edifact/write';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            preserveWhitespace: (preserveWhitespace !== null) ? preserveWhitespace : false,
            charSet: (charSet !== null) ? charSet : 'utf-8',
            postfix,
            sameRepetionAndDataElement: (sameRepetionAndDataElement !== null) ? sameRepetionAndDataElement : false,
            eancomS3: (eancomS3 !== null) ? eancomS3 : false,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'content-type': 'application/json; charset=utf-8',
            'Content-Type': (contentType !== null) ? contentType : 'application/json',
            'Ocp-Apim-Subscription-Key': _configuration.ocpApimSubscriptionKey,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _apiHelper.jsonSerialize(body),
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else if (_response.statusCode === 400) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'ErrorDetailsException');
                    mappedObject.reason = 'Bad Request';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Bad Request', errorCode: 400, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 500) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'ErrorDetailsException');
                    mappedObject.reason = 'Server Error';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Server Error', errorCode: 500, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Validates an EdifactInterchange object according to the EDIFACT standard rules for each
     * version and transaction.
     *
     * @param {string} syntaxSet (optional) In case you need to validate against a syntax set,
     * different than UNOA and UNOB, populate this filed with all of the
     * allowed symbols, url-escaped.              All data elements with
     * alpha (A) or alphanumeric (AN) data types are validated against a
     * syntax set of allowed characters. The supported syntax sets are
     * UNOA and UNOB. The validator infers the correct syntax set from
     * EdifactInterchange.UNB.SYNTAXIDENTIFIER_1.SyntaxIdentifier_1. The
     * symbols added to this field will override the corresponding sets
     * in both UNOA and UNOB.
     * @param {bool} skipTrailer (optional) You are allowed to validate an EdifactInterchange with
     * missing interchange, functional group or transaction trailers (UNZ,
     * UNE, UNT). This is because these will be automatically applied
     * during the Write oprtaion so you don't have to worry about
     * counting the items. By default it is expected that all trailers
     * are present when you validate the EdifactInterchange and by
     * default, this is set to false. To skip all trailer validation, set
     * this to true.
     * @param {bool} structureOnly (optional) This is equivalent to HIPAA Snip level 1, where only
     * the structure and control segments are validated. By default,
     * this is set to false, however if you want to not validate things
     * such as data types, number of repeteitions or dates, set this to
     * true.
     * @param {string} decimalPoint (optional) This could be either point . (default) or comma ,.
     * @param {bool} eancomS3 (optional) The default syntax for EANCOM transactions. By default all
     * EANCOM transactions will be validated according to the rules of
     * Syntax 4. Set this flag to true if you need Syntax 3 to be used.
     * @param {string} contentType (optional) Example: application/json
     * @param {EdifactInterchange} body (optional) The EdifactInterchange object to validate.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static validate(syntaxSet,
        skipTrailer,
        structureOnly,
        decimalPoint,
        eancomS3,
        contentType,
        body,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/edifact/validate';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            syntaxSet,
            skipTrailer: (skipTrailer !== null) ? skipTrailer : false,
            structureOnly: (structureOnly !== null) ? structureOnly : false,
            decimalPoint: (decimalPoint !== null) ? decimalPoint : '.',
            eancomS3: (eancomS3 !== null) ? eancomS3 : false,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'Content-Type': (contentType !== null) ? contentType : 'application/json',
            'Ocp-Apim-Subscription-Key': _configuration.ocpApimSubscriptionKey,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _apiHelper.jsonSerialize(body),
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'OperationResult');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'ErrorDetailsException');
                    mappedObject.reason = 'Bad Request';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Bad Request', errorCode: 400, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 500) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'ErrorDetailsException');
                    mappedObject.reason = 'Server Error';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Server Error', errorCode: 500, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Generates functional and/or technical CONTRL acknowledment(s) for the requested
     * EdifactInterchange.
     *
     * @param {string} syntaxSet (optional) In case you need to validate against a syntax set,
     * different than UNOA and UNOB, populate this filed with all of the
     * allowed symbols, url-escaped. All data elements with alpha (A) or
     * alphanumeric (AN) data types are validated against a syntax set of
     * allowed characters. The supported syntax sets are UNOA and UNOB.
     * The validator infers the correct syntax set from
     * EdifactInterchange.UNB.SYNTAXIDENTIFIER_1.SyntaxIdentifier_1. The
     * symbols added to this field will override the corresponding sets
     * in both UNOA and UNOB.
     * @param {bool} detectDuplicates (optional) If you need to detect duplicates as in functional
     * groups or transactions with the same reference number, set
     * this flag to true. The default is false.
     * @param {int} tranRefNumber (optional) The default is 1. Set this to whatever the CONTRL UNH.
     * MessageReferenceNumber_01 needs to be.
     * @param {int} interchangeRefNumber (optional) The default is 1. Set this to whatever the
     * CONTRL EdifactInterchange.UNB.
     * InterchangeControlReference_5 needs to be.
     * @param {bool} ackForValidTrans (optional) The default is false. Set this to true if you need
     * UCM loops included for all valid transaction as well. By
     * default UCM loops are generated only for invalid transactions.
     * @param {bool} batchAcks (optional) The default is true. Set this to false if you need to
     * generate separate EdifactInterchange for each acknowledgment. By
     * default all acknowledgments are batched in the same
     * EdifactInterchange.
     * @param {string} technicalAck (optional) The default technical acknowledgment CONTRL is
     * generated according to EdifactInterchange.UNB.
     * AcknowledgementRequest_9. You can either enforce it to always
     * generate technical CONTRLs or supress it to never generate any
     * technical CONTRLs. This will override the flag in
     * EdifactInterchange.UNB.AcknowledgementRequest_9.
     * The available values are: default, enforce, suppress.
     * @param {bool} eancomS3 (optional) The default syntax for EANCOM transactions. By default all
     * EANCOM transactions will be validated according to the rules of
     * Syntax 4. Set this flag to true if you need Syntax 3 to be used.
     * @param {string} contentType (optional) Example: application/json
     * @param {EdifactInterchange} body (optional) The EdifactInterchange object to acknowledge.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static ack(syntaxSet,
        detectDuplicates,
        tranRefNumber,
        interchangeRefNumber,
        ackForValidTrans,
        batchAcks,
        technicalAck,
        eancomS3,
        contentType,
        body,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/edifact/ack';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            syntaxSet,
            detectDuplicates: (detectDuplicates !== null) ? detectDuplicates : false,
            tranRefNumber: (tranRefNumber !== null) ? tranRefNumber : 1,
            interchangeRefNumber: (interchangeRefNumber !== null) ? interchangeRefNumber : 1,
            ackForValidTrans: (ackForValidTrans !== null) ? ackForValidTrans : false,
            batchAcks: (batchAcks !== null) ? batchAcks : true,
            technicalAck,
            eancomS3: (eancomS3 !== null) ? eancomS3 : false,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'Content-Type': (contentType !== null) ? contentType : 'application/json',
            'Ocp-Apim-Subscription-Key': _configuration.ocpApimSubscriptionKey,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _apiHelper.jsonSerialize(body),
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = parsed.map(model =>
                        _baseController.getObjectMapper().mapObject(model, 'EdifactInterchange'));
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'ErrorDetailsException');
                    mappedObject.reason = 'Bad Request';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Bad Request', errorCode: 400, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 500) {
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'ErrorDetailsException');
                    mappedObject.reason = 'Server Error';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Server Error', errorCode: 500, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = EdifactController;
