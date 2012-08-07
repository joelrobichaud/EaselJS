(function(window) {

/**
 * TimerEvent is the event type that is passed down to event handlers for timer and timerComplete event types.
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

// public properties:
	/**
	 * @property TIMER
	 * @static
	 * @type String
	 **/
	s.TIMER = "timer";

	/**
	 * @property TIMER_COMPLETE
	 * @static
	 * @type String
	 **/
	s.TIMER_COMPLETE = "timerComplete";

// constructor:
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

// public methods:
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