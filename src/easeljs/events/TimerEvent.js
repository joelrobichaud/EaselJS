/*
* TimerEvent
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

// namespace:
this.createjs = this.createjs||{};

(function() {

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
var p = TimerEvent.prototype = new createjs.Event();
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
		return new createjs.TimerEvent(this.type);
	}

	/**
	 * @method toString
	 * @return {String}
	 **/
	p.toString = function() {
		return "[TimerEvent (type="+this.type+")]";
	}

createjs.TimerEvent = TimerEvent;
}());