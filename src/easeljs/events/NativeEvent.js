(function(window) {

var p = NativeEvent.prototype = new Event();

/**
 * @property nativeEvent
 * @type Object
 */
p.nativeEvent = null;

/**
 * @class NativeEvent
 * @extends Event
 * @constructor
 * @param {String} type
 */
function NativeEvent(type, nativeEvent) {
	this.initialize(type, nativeEvent);
}

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
*/
p.initialize = function(type, nativeEvent) {
	this.Event_initialize(type);
	this.nativeEvent = nativeEvent;
}

/**
 * @method clone
 * @return {NativeEvent}
 */
p.clone = function() {
	return new NativeEvent(this.type);
}

/**
 * @method toString
 * @return {String}
 */
p.toString = function() {
	return "[NativeEvent (type="+this.type+")]";
}

window.NativeEvent = NativeEvent;

}(window));