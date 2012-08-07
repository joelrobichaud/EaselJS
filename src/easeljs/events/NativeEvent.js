(function(window) {

/**
 * NativeEvent specifies an event type which has a corresponding DOM alternative. This mostly concerns MouseEvent and KeyboardEvent.
 * @class NativeEvent
 * @extends Event
 * @constructor
 * @param {String} type
 **/
var NativeEvent = function(type, nativeEvent) {
	this.initialize(type, nativeEvent);
}
var p = NativeEvent.prototype = new Event();

// public properties:
	/**
	 * @property nativeEvent
	 * @type Object
	 **/
	p.nativeEvent = null;

// constructor:
	/**
	 * @property Event_initialize
	 * @type Function
	 * @private
	 **/
	p.Event_initialize = p.initialize;

	/**
	 * Initialization method.
	 * @method initialize
	 * @protected
	 **/
	p.initialize = function(type, nativeEvent) {
		this.Event_initialize(type);
		this.nativeEvent = nativeEvent;
	}

// public methods:
	/**
	 * @method clone
	 * @return {NativeEvent}
	 **/
	p.clone = function() {
		return new NativeEvent(this.type);
	}

	/**
	 * @method toString
	 * @return {String}
	 **/
	p.toString = function() {
		return "[NativeEvent (type="+this.type+")]";
	}

window.NativeEvent = NativeEvent;
}(window));