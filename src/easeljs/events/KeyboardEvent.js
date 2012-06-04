(function(window) {

/**
 * @class KeyboardEvent
 * @extends NativeEvent
 * @constructor
 * @param {String} type
 * @param {Unsigned Integer} keyCode
 * @param {Unsigned Integer} charCode
 * @param {Boolean} ctrlKey
 * @param {Boolean} altKey
 * @param {Boolean} shiftKey
 * @param {KeyboardEvent} nativeEvent The native DOM event related to this keyboard event.
 **/
var KeyboardEvent = function(type, keyCode, charCode, ctrlKey, altKey, shiftKey, nativeEvent) {
	this.initialize(type, keyCode, charCode, ctrlKey, altKey, shiftKey, nativeEvent);
}
var p = KeyboardEvent.prototype = new NativeEvent();
var s = KeyboardEvent;

// public properties:
	/**
	 * @property keyCode
	 * @type {Unsigned Integer}
	 **/
	p.keyCode = 0;

	/**
	 * @property charCode
	 * @type {Unsigned Integer}
	 **/
	p.charCode = 0;

	/**
	 * @property altKey
	 * @type Boolean
	 **/
	p.altKey = false;

	/**
	 * @property ctrlKey
	 * @type Boolean
	 **/
	p.ctrlKey = false;

	/**
	 * @property shiftKey
	 * @type Boolean
	 **/
	p.shiftKey = false;

	/**
	 * @property KEY_DOWN
	 * @static
	 * @type String
	 **/
	s.KEY_DOWN = "keyDown";

	/**
	 * @property KEY_UP
	 * @static
	 * @type String
	 **/
	s.KEY_UP = "keyUp";

// constructor:
	/**
	 * @property NativeEvent_initialize
	 * @type Function
	 * @private
	 **/
	p.NativeEvent_initialize = p.initialize;

	/**
	 * Initialization method.
	 * @method initialize
	 * @protected
	 **/
	p.initialize = function(type, keyCode, charCode, ctrlKey, altKey, shiftKey, nativeEvent) {
		this.NativeEvent_initialize(type, nativeEvent);
		this.keyCode = keyCode;
		this.charCode = charCode;
		this.ctrlKey = ctrlKey;
		this.altKey = altKey;
		this.shiftKey = shiftKey;
	}

// public methods:
	/**
	 * @method clone
	 * @return {KeyboardEvent}
	 **/
	p.clone = function() {
		return new KeyboardEvent(this.type, this.keyCode, this.charCode, this.ctrlKey, this.altKey, this.shiftKey);
	}

	/**
	 * @method toString
	 * @return {String}
	 **/
	p.toString = function() {
		return "[KeyboardEvent (type="+this.type+" keyCode="+this.keyCode+")]";
	}

window.KeyboardEvent = KeyboardEvent;
}(window));