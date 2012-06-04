(function(window) {

/**
 * @class TimerEvent
 * @extends Event
 * @constructor
 * @param {String} type
 **/
var TimerEvent = function(type) {
	this.initialize(type);
}
var p = TimerEvent.prototype = new Event();
var s = TimerEvent;

// public properties :
	/**
	 * @property KEY_DOWN
	 * @static
	 * @type String
	 **/
	s.TIMER = "timer";

	/**
	 * @property KEY_UP
	 * @static
	 * @type String
	 **/
	s.TIMER_COMPLETE = "timerComplete";

// constructor :
	/**
	 * @property NativeEvent_initialize
	 * @type Function
	 * @private
	 **/
	p.Event_initialize = p.initialize;

	/**
	 * Initialization method.
	 * @method initialize
	 * @protected
	 **/
	p.initialize = function(type) {
		this.Event_initialize(type);
	}

// public methods :
	/**
	 * @method clone
	 * @return {TimerEvent}
	 **/
	p.clone = function() {
		return new TimerEvent(this.type);
	}

	/**
	 * @method toString
	 * @return {String}
	 **/
	p.toString = function() {
		return "[TimerEvent (type="+this.type+")]";
	}

window.TimerEvent = TimerEvent;
}(window));