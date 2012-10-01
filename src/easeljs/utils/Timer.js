/*
* Timer
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
 * The Timer class provides an easy to use interface to keep track of time.
 * @class Timer
 * @extends EventDispatcher
 * @constructor
 * @param {Number} delay
 * @param {Number} repeatCount
 **/
var Timer = function(delay, repeatCount) {
	this.initialize(delay, repeatCount);
}
var p = Timer.prototype = new createjs.EventDispatcher();
var s = Timer;
var t = createjs.Ticker;

// public properties:
	/**
	 * @property delay
	 * @type Number
	 **/
	p.delay = null;

	/**
	 * @property repeatCount
	 * @type Number
	 **/
	p.repeatCount = 0;

	/**
	 * @property currentCount
	 * @type Number
	 * @readOnly READ-ONLY
	 * @default 0
	 **/
	p.currentCount = 0;

	/**
	 * @property running
	 * @type Boolean
	 * @readOnly READ-ONLY
	 * @default false
	 **/
	p.running = false;

// private properties:
	/**
	 * @property _startTime
	 * @protected
	 * @type Number
	 **/
	p._startTime = null;

	/**
	 * @property _timers
	 * @private
	 * @static
	 * type Array[Timer]
	 **/
	s._timers = [];

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
	p.initialize = function(delay, repeatCount) {
		this.EventDispatcher_initialize();

		this.delay = delay;
		this.repeatCount = repeatCount || 0;
		s._timers.push(this);
	}

// public methods:
	/**
	 * @method reset
	 **/
	p.reset = function() {
		this.stop();
		this.currentCount = 0;
	}

	/**
	 * @method start
	 **/
	p.start = function() {
		if (!this.running && (this.currentCount !== this.repeatCount || this.repeatCount === 0)) {
			this._startTime = t.getTime();
			this.running = true;
		}
	}

	/**
	 * @method stop
	 **/
	p.stop = function() {
		if (this.running) {
			this.running = false;
		}
	}

	/**
	 * @method tick
	 **/
	p.tick = function() {
		if (!this.running) { return; }

		var temp = Math.floor((t.getTime() - this._startTime) / this.delay);
		if (temp !== this.currentCount) {
			this.currentCount = temp;
			
			if (this.currentCount === this.repeatCount && this.repeatCount !== 0) {
				this.stop();
				if (this.hasEventListener("timerComplete")) {
					this.dispatchEvent(new createjs.TimerEvent("timerComplete"));
				}
			}
			
			if (this.hasEventListener("timer")) {
				this.dispatchEvent(new createjs.TimerEvent("timer"));
			}
		}
	}

	/**
	 * @method tick
	 * @static
	 * @param {Number} deltaTime
	 **/
	s.tick = function(deltaTime) {
		for (var i = 0; i < s._timers.length; i++) {
			s._timers[i].tick();
		}
	}
	t.addListener(s);

createjs.Timer = Timer;
}());