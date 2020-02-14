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

class X12Controller {
    /**
     * Reads an X12 file and returns its contents translated to an array of X12Interchange
     * objects.
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
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static read(fileName, ignoreNullValues, continueOnError, charSet, model, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/x12/read';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            ignoreNullValues: (ignoreNullValues !== null) ? ignoreNullValues : false,
            continueOnError: (continueOnError !== null) ? continueOnError : false,
            charSet: (charSet !== null) ? charSet : 'utf-8',
            model,
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
                        _baseController.getObjectMapper().mapObject(model, 'X12Interchange'));
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
     * Translates an X12Interchange object to a raw X12 interchange and returns it as a stream.
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
     * @param {string} contentType (optional) Example: application/json
     * @param {X12Interchange} body (optional) The X12Interchange object to translate to raw X12.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static write(preserveWhitespace, charSet, postfix, contentType, body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/x12/write';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            preserveWhitespace: (preserveWhitespace !== null) ? preserveWhitespace : false,
            charSet: (charSet !== null) ? charSet : 'utf-8',
            postfix,
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
     * Validates an X12Interchange object according to the X12 standard rules for each version
     * and transaction.
     *
     * @param {bool} basicSyntax (optional) All data elements with alpha (A) or alphanumeric (AN)
     * data types are validated against a syntax set of allowed
     * characters. The default syntax set is the Extended, hence the
     * default for this parameter is false. By setting this to true,
     * validation will use the Basic syntax set.
     * @param {string} syntaxSet (optional) In case you need to validate against a syntax set,
     * different than Basic and Extended, populate this filed with all of
     * the allowed symbols, url-escaped.
     * @param {bool} skipTrailer (optional) You are allowed to validate an X12Interchange with
     * missing interchange, functional group or transaction trailers (IEA,
     * GE, SE). This is because these will be automatically applied
     * during the Write oprtaion so you don't have to worry about
     * counting the items. By default it is expected that all trailers
     * are present when you validate the X12Interchange and by default,
     * this is set to false. To skip all trailer validation, set this to
     * true.
     * @param {bool} structureOnly (optional) This is equivalent to HIPAA Snip level 1, where only
     * the structure and control segments are validated. By default,
     * this is set to false, however if you want to not validate things
     * such as data types, number of repeteitions or dates, set this to
     * true.
     * @param {string} contentType (optional) Example: application/json
     * @param {X12Interchange} body (optional) The X12Interchange object to validate.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static validate(basicSyntax,
        syntaxSet,
        skipTrailer,
        structureOnly,
        contentType,
        body,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/x12/validate';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            basicSyntax: (basicSyntax !== null) ? basicSyntax : false,
            syntaxSet,
            skipTrailer: (skipTrailer !== null) ? skipTrailer : false,
            structureOnly: (structureOnly !== null) ? structureOnly : false,
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
     * Generates functional/implementation and/or technical acknowledment(s) for the requested
     * X12Interchange.
     *
     * @param {bool} basicSyntax (optional) All data elements with alpha (A) or alphanumeric (AN)
     * data types are validated against a syntax set of allowed
     * characters. The default syntax set is the Extended, hence the
     * default for this parameter is false. By setting this to true,
     * validation will use the Basic syntax set.
     * @param {string} syntaxSet (optional) In case you need to validate against a syntax set,
     * different than Basic and Extended, populate this filed with all of
     * the allowed symbols, url-escaped.
     * @param {bool} detectDuplicates (optional) If you need to detect duplicates as in functional
     * groups or transactions with the same reference number, set
     * this flag to true. The default is false.
     * @param {int} tranRefNumber (optional) The default is 1. Set this to whatever the 997 or 999
     * X12Interchange.ST.TransactionSetControlNumber_02 needs to be. In
     * case there are multiple acknowledgments (for multiple functional
     * groups), this will be starting reference number and every
     * subsequent acknowledgment will have the previous reference number
     * incremented with 1.
     * @param {int} interchangeRefNumber (optional) The default is 1. Set this to whatever the 997
     * or 999 X12Interchange.ISA.InterchangeControlNumber_13
     * needs to be.
     * @param {bool} ackForValidTrans (optional) The default is false. Set this to true if you need
     * AK2 loops included for all valid transaction as well. By
     * default AK2 loops are generated only for invalid transactions.
     * @param {bool} batchAcks (optional) The default is true. Set this to false if you need to
     * generate separate X12Interchange for each acknowledgment. By default
     * all acknowledgments are batched in the same X12Interchange.
     * @param {string} technicalAck (optional) The default technical acknowledgment TA1 is
     * generated according to X12Interchange.ISA.
     * AcknowledgementRequested_14. You can either enforce it to
     * always generate TA1s or supress it to never generate any TA1s.
     * This will override the flag in X12Interchange.ISA.
     * AcknowledgementRequested_14.              The available values
     * are: default, enforce, suppress.
     * @param {string} ack (optional) The default value is 997. The type of acknowledgment being
     * generated. Set this to 999 if you need to generate an implementation
     * instead of functional acknowledgment. The available values are: 997, 999.
     * @param {bool} ak901isP (optional) The value of the AK9's first element. By default it is "E".
     * Set this to true if you want this value to be "P" instead.
     * @param {string} contentType (optional) Example: application/json
     * @param {X12Interchange} body (optional) The X12Interchange object to acknowledge.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static ack(basicSyntax,
        syntaxSet,
        detectDuplicates,
        tranRefNumber,
        interchangeRefNumber,
        ackForValidTrans,
        batchAcks,
        technicalAck,
        ack,
        ak901isP,
        contentType,
        body,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/x12/ack';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            basicSyntax: (basicSyntax !== null) ? basicSyntax : false,
            syntaxSet,
            detectDuplicates: (detectDuplicates !== null) ? detectDuplicates : false,
            tranRefNumber: (tranRefNumber !== null) ? tranRefNumber : 1,
            interchangeRefNumber: (interchangeRefNumber !== null) ? interchangeRefNumber : 1,
            ackForValidTrans: (ackForValidTrans !== null) ? ackForValidTrans : false,
            batchAcks: (batchAcks !== null) ? batchAcks : true,
            technicalAck,
            ack: (ack !== null) ? ack : '997',
            ak901isP: (ak901isP !== null) ? ak901isP : false,
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
                        _baseController.getObjectMapper().mapObject(model, 'X12Interchange'));
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
module.exports = X12Controller;
