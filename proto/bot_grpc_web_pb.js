/**
 * @fileoverview gRPC-Web generated client stub for echo
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.echo = require('./bot_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.echo.EchoClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.echo.EchoPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.echo.Create,
 *   !proto.echo.EchoReply>}
 */
const methodDescriptor_Echo_CreateBot = new grpc.web.MethodDescriptor(
  '/echo.Echo/CreateBot',
  grpc.web.MethodType.UNARY,
  proto.echo.Create,
  proto.echo.EchoReply,
  /**
   * @param {!proto.echo.Create} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.echo.EchoReply.deserializeBinary
);


/**
 * @param {!proto.echo.Create} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.echo.EchoReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.echo.EchoReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.echo.EchoClient.prototype.createBot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/echo.Echo/CreateBot',
      request,
      metadata || {},
      methodDescriptor_Echo_CreateBot,
      callback);
};


/**
 * @param {!proto.echo.Create} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.echo.EchoReply>}
 *     Promise that resolves to the response
 */
proto.echo.EchoPromiseClient.prototype.createBot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/echo.Echo/CreateBot',
      request,
      metadata || {},
      methodDescriptor_Echo_CreateBot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.echo.Hedge,
 *   !proto.echo.EchoReply>}
 */
const methodDescriptor_Echo_HedgeBot = new grpc.web.MethodDescriptor(
  '/echo.Echo/HedgeBot',
  grpc.web.MethodType.UNARY,
  proto.echo.Hedge,
  proto.echo.EchoReply,
  /**
   * @param {!proto.echo.Hedge} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.echo.EchoReply.deserializeBinary
);


/**
 * @param {!proto.echo.Hedge} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.echo.EchoReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.echo.EchoReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.echo.EchoClient.prototype.hedgeBot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/echo.Echo/HedgeBot',
      request,
      metadata || {},
      methodDescriptor_Echo_HedgeBot,
      callback);
};


/**
 * @param {!proto.echo.Hedge} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.echo.EchoReply>}
 *     Promise that resolves to the response
 */
proto.echo.EchoPromiseClient.prototype.hedgeBot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/echo.Echo/HedgeBot',
      request,
      metadata || {},
      methodDescriptor_Echo_HedgeBot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.echo.Stop,
 *   !proto.echo.EchoReply>}
 */
const methodDescriptor_Echo_StopBot = new grpc.web.MethodDescriptor(
  '/echo.Echo/StopBot',
  grpc.web.MethodType.UNARY,
  proto.echo.Stop,
  proto.echo.EchoReply,
  /**
   * @param {!proto.echo.Stop} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.echo.EchoReply.deserializeBinary
);


/**
 * @param {!proto.echo.Stop} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.echo.EchoReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.echo.EchoReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.echo.EchoClient.prototype.stopBot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/echo.Echo/StopBot',
      request,
      metadata || {},
      methodDescriptor_Echo_StopBot,
      callback);
};


/**
 * @param {!proto.echo.Stop} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.echo.EchoReply>}
 *     Promise that resolves to the response
 */
proto.echo.EchoPromiseClient.prototype.stopBot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/echo.Echo/StopBot',
      request,
      metadata || {},
      methodDescriptor_Echo_StopBot);
};


module.exports = proto.echo;

