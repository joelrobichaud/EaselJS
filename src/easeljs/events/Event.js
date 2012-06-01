(function(window) {

var p = Event.prototype = new EventDispatcher();

/**
 * @property target
 * @type Object
 */
p.target = null;

/**
 * @property type
 * @type String
 */
p.type = null;

/**
 * @class Event
 * @constructor
 * @param {String} type
 */
function Event(type) {
	this.initialize(type);
}

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
*/
p.initialize = function(type) {
	this.EventDispatcher_initialize();
	this.type = type;
}

/**
 * @method clone
 * @return {Event}
 */
p.clone = function() {
	return new Event(this.type);
}

/**
 * @method toString
 * @return {String}
 */
p.toString = function() {
	return "[Event (type="+this.type+")]";
}

window.Event = Event;

}(window));