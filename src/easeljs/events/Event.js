(function(window) {

/**
 * @class Event
 * @constructor
 * @param {String} type
 **/
var Event = function(type) {
	this.initialize(type);
}
var p = Event.prototype = new EventDispatcher();

// public properties :
	/**
	 * @property target
	 * @readonly
	 * @type Object
	 **/
	p.target = null;

	/**
	 * @property type
	 * @readonly
	 * @type String
	 **/
	p.type = null;

// constructor :
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

// public methods :
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