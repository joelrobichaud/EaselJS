/*
* MouseEvent
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

(function(window) {

/**
* MouseEvent is the event type that is passed down to event handlers for mouseDown, mouseMove, mouseUp, click, rollOver and rollOut event types.
* handlers on DisplayObject instances.
* @class MouseEvent
* @constructor
* @param {String} type The event type.
* @param {Number} stageX The mouseX position relative to the stage.
* @param {Number} stageY The mouseY position relative to the stage.
* @param {MouseEvent} nativeEvent The native DOM event related to this mouse event.
* @param {Number} pointerID
* @param {Boolean} primary
**/
var MouseEvent = function(type, stageX, stageY, nativeEvent, pointerID, primary) {
  this.initialize(type, stageX, stageY, nativeEvent, pointerID, primary);
}
var p = MouseEvent.prototype = new NativeEvent();
var s = MouseEvent;

// public properties:
	/**
	 * The mouseX position on the stage.
	 * @property stageX
	 * @type Number
	 **/
	p.stageX = 0;

	/**
	 * The mouseY position on the stage.
	 * @property stageY
	 * @type Number
	 **/
	p.stageY = 0;

	/**
	 * @property pointerID
	 * @type Number
	 **/
	p.pointerID = 0;

	/**
	 * @property primary
	 * @type Boolean
	 **/
	p.primary = false;

	/**
	 * @property delta
	 * @type Number
	 **/
	p.delta = 0;

	/**
	 * @property CLICK
	 * @static
	 * @type String
	 **/
	s.CLICK = "click";

	/**
	 * @property DOUBLE_CLICK
	 * @static
	 * @type String
	 **/
	s.DOUBLE_CLICK = "doubleClick";

	/**
	 * @property MOUSE_DOWN
	 * @static
	 * @type String
	 **/
	s.MOUSE_DOWN = "mouseDown";

	/**
	 * @property MOUSE_UP
	 * @static
	 * @type String
	 **/
	s.MOUSE_UP = "mouseUp";

	/**
	 * @property MOUSE_MOVE
	 * @static
	 * @type String
	 **/
	s.MOUSE_MOVE = "mouseMove";

	/**
	 * @property ROLL_OVER
	 * @static
	 * @type String
	 **/
	s.ROLL_OVER = "rollOver";

	/**
	 * @property ROLL_OUT
	 * @static
	 * @type String
	 **/
	s.ROLL_OUT = "rollOut";

	/**
	 * @property MOUSE_WHEEL
	 * @static
	 * @type String
	 **/
	s.MOUSE_WHEEL = "mouseWheel";

// constructor:
	/**
	 * @property NativeEvent_initialize
	 * @type Function
	 * @private
	 **/
	p.NativeEvent_initialize = p.initialize;

	/**
	 * Initialization method.
	 * @method initialize
	 * @protected
	 **/
	p.initialize = function(type, stageX, stageY, nativeEvent, pointerID, primary) {
		this.NativeEvent_initialize(type, nativeEvent);
		this.stageX = stageX;
		this.stageY = stageY;
		this.pointerID = pointerID;
		this.primary = primary;
		
		if (type === MouseEvent.MOUSE_WHEEL) {
			this.delta = nativeEvent.wheelDelta/120 || -nativeEvent.detail/3;
		}
	}

// public methods:
	/**
	 * Returns a clone of the MouseEvent instance.
	 * @method clone
	 * @return {MouseEvent} a clone of the MouseEvent instance.
	 **/
	p.clone = function() {
		return new MouseEvent(this.type, this.stageX, this.stageY, this.nativeEvent, this.pointerID, this.primary);
	}

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[MouseEvent (type="+this.type+" stageX="+this.stageX+" stageY="+this.stageY+")]";
	}

window.MouseEvent = MouseEvent;
}(window));