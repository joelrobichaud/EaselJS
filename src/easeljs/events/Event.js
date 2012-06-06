(function(window) {

/**
 * The base class of all events. This is the class you want to extend in order to create your own custom events.
 * @class Event
 * @constructor
 * @param {String} type
 **/
var Event = function(type) {
	this.initialize(type);
}
var p = Event.prototype = new EventDispatcher();
var s = Event;

// public properties:
	/**
	 * @property target
	 * @type Object
	 **/
	p.target = null;

	/**
	 * @property type
	 * @type String
	 **/
	p.type = null;

	/** 
	 * @property ALL
	 * @static
	 * @type String
	 **/
	s.ALL = "all";

	/**
	 * @property ADDED_TO_STAGE
	 * @static
	 * @type String
	 **/
	s.ADDED_TO_STAGE = "addedToStage";

	/**
	 * @property REMOVED_FROM_STAGE
	 * @static
	 * @type String
	 **/
	s.REMOVED_FROM_STAGE = "removedFromStage";

// constructor:
	/**
	 * @property EventDispatcher_initialize
	 * @type Function
	 * @private
	 **/
	p.EventDispatcher_initialize = p.initialize;

	/**
	 * Initialization method.
	 * @method initialize
	 * @protected
	**/
	p.initialize = function(type) {
		this.EventDispatcher_initialize();
		this.type = type;
	}

// public methods:
	/**
	 * @method clone
	 * @return {Event}
	 **/
	p.clone = function() {
		return new Event(this.type);
	}

	/**
	 * @method toString
	 * @return {String}
	 **/
	p.toString = function() {
		return "[Event (type="+this.type+")]";
	}

window.Event = Event;
}(window));