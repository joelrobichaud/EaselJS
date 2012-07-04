(function(window) {

/**
 * EventDispatcher is an abstract class that should not be constructed directly. Instead you should subclass it
 * in order to listen and disptach to your custom events.
 * @class EventDispatcher
 * @constructor
 **/
var EventDispatcher = function() {
	this.initialize();
}
var p = EventDispatcher.prototype = {};
var s = EventDispatcher;

// private properties:
	/**
	 * @property _handlers
	 * @protected
	 * @type Object
	 **/
	p._handlers = null;

// constructor :
	/**
	 * Initialization method.
	 * @method initialize
	 * @protected
	 **/
	p.initialize = function() {
		this._handlers = {};
	}

// public methods:
	/**
	 * @method addEventListener
	 * @param {String} type
	 * @param {Function} handler
	 * @param {Object} context [Default: null]
	 * @param {Number} priority [Default: 1]
	 **/
	p.addEventListener = function(type, handler, context, priority) {
		var handlerObject = { 
			"handler": handler,
			"context": context || null,
			"priority": priority !== undefined ? priority : 1
		};

		if (this.hasEventListener(type)) {
			this._handlers[type].push(handlerObject);
		} else {
			this._handlers[type] = [handlerObject];
		}
	}

	/**
	 * @method removeEventListener
	 * @param {String} type
	 * @param {Function} handler
	 **/
	p.removeEventListener = function(type, handler) {
		var handlerObjectsForType = this._handlers[type];

		if (handlerObjectsForType.length === 0) {
			delete handlerObjectsForType;
			return;
		}

		for (var i = 0; i < handlerObjectsForType.length; i++) {
			if (handlerObjectsForType[i].handler === handler) {
				handlerObjectsForType.splice(i, 1);
			}
		}
	}

	/** 
	 * @method removeAllListeners
	 * @param {String} type
	 **/
	p.removeAllListeners = function(type) {
		if (type) {
			delete this._handlers[type];
		} else {
			this._handlers = {};
		}
	}

	/**
	 * @method hasEventListener
	 * @param {String} type
	 **/
	p.hasEventListener = function(type) {
		return !!this._handlers[type];
	}

	/**
	 * @method dispatchEvent
	 * @param {Event} event
	 **/
	p.dispatchEvent = function(event) {
		var handlerObjectsForType = (this._handlers[event.type] || []).concat(this._handlers[Event.ALL] || []);
		handlerObjectsForType.sort(sortByPriority);

		for (var i = 0; i < handlerObjectsForType.length; i++) {
			event.target = this;
			handlerObjectsForType[i].handler.call(handlerObjectsForType[i].context || event.target, event);
		}
	}
	
	/**
	 * @method sortByPriority
	 * @private
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Number}
	 */
	function sortByPriority(a, b) {
		return b.priority - a.priority;
	}

window.EventDispatcher = EventDispatcher;
}(window));