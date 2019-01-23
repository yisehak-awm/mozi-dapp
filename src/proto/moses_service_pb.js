/*eslint-disable*/
/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.AnalysisParameters', null, global);
goog.exportSymbol('proto.CrossValOptions', null, global);
goog.exportSymbol('proto.Filter', null, global);
goog.exportSymbol('proto.Result', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CrossValOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CrossValOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CrossValOptions.displayName = 'proto.CrossValOptions';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.CrossValOptions.prototype.toObject = function(opt_includeInstance) {
    return proto.CrossValOptions.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.CrossValOptions} msg The msg instance to transform.
   * @return {!Object}
   */
  proto.CrossValOptions.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        folds: jspb.Message.getFieldWithDefault(msg, 1, 0),
        testsize: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
        randomseed: jspb.Message.getFieldWithDefault(msg, 3, 0)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CrossValOptions}
 */
proto.CrossValOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CrossValOptions();
  return proto.CrossValOptions.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CrossValOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CrossValOptions}
 */
proto.CrossValOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setFolds(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setTestsize(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setRandomseed(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CrossValOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CrossValOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CrossValOptions} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.CrossValOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFolds();
  if (f !== 0) {
    writer.writeInt32(1, f);
  }
  f = message.getTestsize();
  if (f !== 0.0) {
    writer.writeFloat(2, f);
  }
  f = message.getRandomseed();
  if (f !== 0) {
    writer.writeInt32(3, f);
  }
};

/**
 * optional int32 folds = 1;
 * @return {number}
 */
proto.CrossValOptions.prototype.getFolds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {number} value */
proto.CrossValOptions.prototype.setFolds = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional float testSize = 2;
 * @return {number}
 */
proto.CrossValOptions.prototype.getTestsize = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(
    this,
    2,
    0.0
  ));
};

/** @param {number} value */
proto.CrossValOptions.prototype.setTestsize = function(value) {
  jspb.Message.setField(this, 2, value);
};

/**
 * optional int32 randomSeed = 3;
 * @return {number}
 */
proto.CrossValOptions.prototype.getRandomseed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/** @param {number} value */
proto.CrossValOptions.prototype.setRandomseed = function(value) {
  jspb.Message.setField(this, 3, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Filter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Filter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Filter.displayName = 'proto.Filter';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Filter.prototype.toObject = function(opt_includeInstance) {
    return proto.Filter.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Filter} msg The msg instance to transform.
   * @return {!Object}
   */
  proto.Filter.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        score: jspb.Message.getFieldWithDefault(msg, 1, ''),
        value: +jspb.Message.getFieldWithDefault(msg, 2, 0.0)
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Filter}
 */
proto.Filter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Filter();
  return proto.Filter.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Filter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Filter}
 */
proto.Filter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setScore(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setValue(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Filter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Filter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Filter} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Filter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScore();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(2, f);
  }
};

/**
 * optional string score = 1;
 * @return {string}
 */
proto.Filter.prototype.getScore = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.Filter.prototype.setScore = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional float value = 2;
 * @return {number}
 */
proto.Filter.prototype.getValue = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(
    this,
    2,
    0.0
  ));
};

/** @param {number} value */
proto.Filter.prototype.setValue = function(value) {
  jspb.Message.setField(this, 2, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AnalysisParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AnalysisParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.AnalysisParameters.displayName = 'proto.AnalysisParameters';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.AnalysisParameters.prototype.toObject = function(opt_includeInstance) {
    return proto.AnalysisParameters.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.AnalysisParameters} msg The msg instance to transform.
   * @return {!Object}
   */
  proto.AnalysisParameters.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        mosesopts: jspb.Message.getFieldWithDefault(msg, 1, ''),
        crossvalopts:
          (f = msg.getCrossvalopts()) &&
          proto.CrossValOptions.toObject(includeInstance, f),
        targetFeature: jspb.Message.getFieldWithDefault(msg, 3, ''),
        filter:
          (f = msg.getFilter()) && proto.Filter.toObject(includeInstance, f),
        dataset: jspb.Message.getFieldWithDefault(msg, 5, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AnalysisParameters}
 */
proto.AnalysisParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AnalysisParameters();
  return proto.AnalysisParameters.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AnalysisParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AnalysisParameters}
 */
proto.AnalysisParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setMosesopts(value);
        break;
      case 2:
        var value = new proto.CrossValOptions();
        reader.readMessage(
          value,
          proto.CrossValOptions.deserializeBinaryFromReader
        );
        msg.setCrossvalopts(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setTargetFeature(value);
        break;
      case 4:
        var value = new proto.Filter();
        reader.readMessage(value, proto.Filter.deserializeBinaryFromReader);
        msg.setFilter(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.setDataset(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AnalysisParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AnalysisParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AnalysisParameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.AnalysisParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMosesopts();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getCrossvalopts();
  if (f != null) {
    writer.writeMessage(2, f, proto.CrossValOptions.serializeBinaryToWriter);
  }
  f = message.getTargetFeature();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(4, f, proto.Filter.serializeBinaryToWriter);
  }
  f = message.getDataset();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
};

/**
 * optional string mosesOpts = 1;
 * @return {string}
 */
proto.AnalysisParameters.prototype.getMosesopts = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.AnalysisParameters.prototype.setMosesopts = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional CrossValOptions crossValOpts = 2;
 * @return {?proto.CrossValOptions}
 */
proto.AnalysisParameters.prototype.getCrossvalopts = function() {
  return /** @type{?proto.CrossValOptions} */ (jspb.Message.getWrapperField(
    this,
    proto.CrossValOptions,
    2
  ));
};

/** @param {?proto.CrossValOptions|undefined} value */
proto.AnalysisParameters.prototype.setCrossvalopts = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.AnalysisParameters.prototype.clearCrossvalopts = function() {
  this.setCrossvalopts(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.AnalysisParameters.prototype.hasCrossvalopts = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional string target_feature = 3;
 * @return {string}
 */
proto.AnalysisParameters.prototype.getTargetFeature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/** @param {string} value */
proto.AnalysisParameters.prototype.setTargetFeature = function(value) {
  jspb.Message.setField(this, 3, value);
};

/**
 * optional Filter filter = 4;
 * @return {?proto.Filter}
 */
proto.AnalysisParameters.prototype.getFilter = function() {
  return /** @type{?proto.Filter} */ (jspb.Message.getWrapperField(
    this,
    proto.Filter,
    4
  ));
};

/** @param {?proto.Filter|undefined} value */
proto.AnalysisParameters.prototype.setFilter = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};

proto.AnalysisParameters.prototype.clearFilter = function() {
  this.setFilter(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.AnalysisParameters.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional string dataset = 5;
 * @return {string}
 */
proto.AnalysisParameters.prototype.getDataset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/** @param {string} value */
proto.AnalysisParameters.prototype.setDataset = function(value) {
  jspb.Message.setField(this, 5, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Result.displayName = 'proto.Result';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Result.prototype.toObject = function(opt_includeInstance) {
    return proto.Result.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Result} msg The msg instance to transform.
   * @return {!Object}
   */
  proto.Result.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        resulturl: jspb.Message.getFieldWithDefault(msg, 1, ''),
        description: jspb.Message.getFieldWithDefault(msg, 2, '')
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Result}
 */
proto.Result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Result();
  return proto.Result.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Result}
 */
proto.Result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setResulturl(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setDescription(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Result} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResulturl();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string resultUrl = 1;
 * @return {string}
 */
proto.Result.prototype.getResulturl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.Result.prototype.setResulturl = function(value) {
  jspb.Message.setField(this, 1, value);
};

/**
 * optional string description = 2;
 * @return {string}
 */
proto.Result.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.Result.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 2, value);
};

goog.object.extend(exports, proto);
