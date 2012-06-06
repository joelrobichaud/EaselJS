(function(window) {

/**
 * The Timer class provides an easy to use interface to keep track of time.
 * @class Timer
 * @extends EventDispatcher
 * @constructor
 * @param {Number} delay
 * @param {Integer} repeatCount
 **/
var Timer = function(delay, repeatCount) {
	this.initialize(delay, repeatCount);
}
var p = Timer.prototype = new EventDispatcher();
var s = Timer;

// public properties:
	/**
	 * @property delay
	 * @type Number
	 **/
	p.delay = null;

	/**
	 * @property repeatCount
	 * @type Integer
	 **/
	p.repeatCount = 0;

	/**
	 * @property currentCount
	 * @type Integer
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
			this._startTime = Ticker.getTime();
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

		var temp = Math.floor((Ticker.getTime() - this._startTime) / this.delay);
		if (temp !== this.currentCount) {
			this.currentCount = temp;
			
			if (this.currentCount === this.repeatCount && this.repeatCount !== 0) {
				this.stop();
				this.dispatchEvent(new TimerEvent(TimerEvent.TIMER_COMPLETE));
			} else {
				this.dispatchEvent(new TimerEvent(TimerEvent.TIMER));
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
	Ticker.addListener(s);

window.Timer = Timer;
}(window));