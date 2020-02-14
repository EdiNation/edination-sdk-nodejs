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

class EdiModelController {
    /**
     * Uploads a model file to a subscription. It must be a valid DOT NET assembly.
     *
     * @param {string} fileName Upload File
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static upload(fileName, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/models';
        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
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
                    _callback(null, null, _context);
                    _fulfill();
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
     * Retrieves all models for a subscription.
     *
     * @param {bool} system (optional) Whether to retrieve EdiNation's or custom uploaded models.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getModels(system, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _pathUrl = '/models';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            system: (system !== null) ? system : true,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'Ocp-Apim-Subscription-Key': _configuration.ocpApimSubscriptionKey,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
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
                        _baseController.getObjectMapper().mapObject(model, 'EdiModel'));
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
     * Retrieve a particular model file as a stream.
     *
     * @param {string} id The model name.
     * @param {bool} system (optional) Whether to search in EdiNation's or custom uploaded models.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getModel(id, system, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/models/{id}';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            id,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            system: (system !== null) ? system : true,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'Ocp-Apim-Subscription-Key': _configuration.ocpApimSubscriptionKey,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
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
     * Deletes a particular model from the custom models.
     *
     * @param {string} id The model name.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static mdelete(id, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/models/{id}';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            id,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'Ocp-Apim-Subscription-Key': _configuration.ocpApimSubscriptionKey,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'DELETE',
            headers: _headers,
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
                    _callback(null, null, _context);
                    _fulfill();
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
module.exports = EdiModelController;
