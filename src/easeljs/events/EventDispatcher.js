(function(window) {

/**
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
	 **/
	p.addEventListener = function(type, handler) {
		if (this.hasEventListener(type)) {
			this._handlers[type].push(handler);
		} else {
			this._handlers[type] = [handler];
		}
	}

	/**
	 * @method removeEventListener
	 * @param {String} type
	 * @param {Function} handler
	 **/
	p.removeEventListener = function(type, handler) {
		var index = this._handlers[type].indexOf(handler);
		if (index !== -1) {
			this._handlers[type].splice(index, 1);
		}

		if (this._handlers[type].length === 0) {
			delete this._handlers[type];
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
		var handlersForObserverForType = (this._handlers[event.type] || []).concat(this._handlers[Event.ALL] || []);

		for (var i = 0; i < handlersForObserverForType.length; i++) {
			event.target = this;
			handlersForObserverForType[i].call(this, event);
		}
	}

window.EventDispatcher = EventDispatcher;
}(window));