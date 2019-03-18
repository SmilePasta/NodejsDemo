/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.proto = (function() {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    var proto = {};

    proto.versionResp = (function() {

        /**
         * Properties of a versionResp.
         * @memberof proto
         * @interface IversionResp
         * @property {string} apkUrl versionResp apkUrl
         * @property {number} newsVersionCode versionResp newsVersionCode
         * @property {number|null} [isForceUpdate] versionResp isForceUpdate
         */

        /**
         * Constructs a new versionResp.
         * @memberof proto
         * @classdesc Represents a versionResp.
         * @implements IversionResp
         * @constructor
         * @param {proto.IversionResp=} [properties] Properties to set
         */
        function versionResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * versionResp apkUrl.
         * @member {string} apkUrl
         * @memberof proto.versionResp
         * @instance
         */
        versionResp.prototype.apkUrl = "";

        /**
         * versionResp newsVersionCode.
         * @member {number} newsVersionCode
         * @memberof proto.versionResp
         * @instance
         */
        versionResp.prototype.newsVersionCode = 0;

        /**
         * versionResp isForceUpdate.
         * @member {number} isForceUpdate
         * @memberof proto.versionResp
         * @instance
         */
        versionResp.prototype.isForceUpdate = 0;

        /**
         * Creates a new versionResp instance using the specified properties.
         * @function create
         * @memberof proto.versionResp
         * @static
         * @param {proto.IversionResp=} [properties] Properties to set
         * @returns {proto.versionResp} versionResp instance
         */
        versionResp.create = function create(properties) {
            return new versionResp(properties);
        };

        /**
         * Encodes the specified versionResp message. Does not implicitly {@link proto.versionResp.verify|verify} messages.
         * @function encode
         * @memberof proto.versionResp
         * @static
         * @param {proto.IversionResp} message versionResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        versionResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.apkUrl);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.newsVersionCode);
            if (message.isForceUpdate != null && message.hasOwnProperty("isForceUpdate"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.isForceUpdate);
            return writer;
        };

        /**
         * Encodes the specified versionResp message, length delimited. Does not implicitly {@link proto.versionResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.versionResp
         * @static
         * @param {proto.IversionResp} message versionResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        versionResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a versionResp message from the specified reader or buffer.
         * @function decode
         * @memberof proto.versionResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.versionResp} versionResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        versionResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.versionResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.apkUrl = reader.string();
                    break;
                case 2:
                    message.newsVersionCode = reader.int32();
                    break;
                case 3:
                    message.isForceUpdate = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("apkUrl"))
                throw $util.ProtocolError("missing required 'apkUrl'", { instance: message });
            if (!message.hasOwnProperty("newsVersionCode"))
                throw $util.ProtocolError("missing required 'newsVersionCode'", { instance: message });
            return message;
        };

        /**
         * Decodes a versionResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.versionResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.versionResp} versionResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        versionResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a versionResp message.
         * @function verify
         * @memberof proto.versionResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        versionResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.apkUrl))
                return "apkUrl: string expected";
            if (!$util.isInteger(message.newsVersionCode))
                return "newsVersionCode: integer expected";
            if (message.isForceUpdate != null && message.hasOwnProperty("isForceUpdate"))
                if (!$util.isInteger(message.isForceUpdate))
                    return "isForceUpdate: integer expected";
            return null;
        };

        /**
         * Creates a versionResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.versionResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.versionResp} versionResp
         */
        versionResp.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.versionResp)
                return object;
            var message = new $root.proto.versionResp();
            if (object.apkUrl != null)
                message.apkUrl = String(object.apkUrl);
            if (object.newsVersionCode != null)
                message.newsVersionCode = object.newsVersionCode | 0;
            if (object.isForceUpdate != null)
                message.isForceUpdate = object.isForceUpdate | 0;
            return message;
        };

        /**
         * Creates a plain object from a versionResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.versionResp
         * @static
         * @param {proto.versionResp} message versionResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        versionResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.apkUrl = "";
                object.newsVersionCode = 0;
                object.isForceUpdate = 0;
            }
            if (message.apkUrl != null && message.hasOwnProperty("apkUrl"))
                object.apkUrl = message.apkUrl;
            if (message.newsVersionCode != null && message.hasOwnProperty("newsVersionCode"))
                object.newsVersionCode = message.newsVersionCode;
            if (message.isForceUpdate != null && message.hasOwnProperty("isForceUpdate"))
                object.isForceUpdate = message.isForceUpdate;
            return object;
        };

        /**
         * Converts this versionResp to JSON.
         * @function toJSON
         * @memberof proto.versionResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        versionResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return versionResp;
    })();

    return proto;
})();

module.exports = $root;
