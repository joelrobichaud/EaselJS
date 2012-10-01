/*
* Keyboard
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

// constructor:
/**
* The Keyboard class exposes a wide variety of constants that are used to retrieve the key code of a specific key on the keyboard.
* @class Keyboard
* @static
**/
var Keyboard = {
	/**
	 * @property BACKSPACE
	 * @static
	 * @readOnly READ-ONLY
	 * @default 8
	 **/
	"BACKSPACE": 8,

	/**
	 * @property CAPS_LOCK
	 * @static
	 * @readOnly READ-ONLY
	 * @default 20
	 **/
	"CAPS_LOCK": 20,

	/**
	 * @property CONTROL
	 * @static
	 * @readOnly READ-ONLY
	 * @default 17
	 **/
	"CONTROL": 17,

	/**
	 * @property DELETE
	 * @static
	 * @readOnly READ-ONLY
	 * @default 46
	 **/
	"DELETE": 46,

	/**
	 * @property DOWN
	 * @static
	 * @readOnly READ-ONLY
	 * @default 40
	 **/
	"DOWN": 40,

	/**
	 * @property END
	 * @static
	 * @readOnly READ-ONLY
	 * @default 35
	 **/
	"END": 35,

	/**
	 * @property ENTER
	 * @static
	 * @readOnly READ-ONLY
	 * @default 13
	 **/
	"ENTER": 13,

	/**
	 * @property ESCAPE
	 * @static
	 * @readOnly READ-ONLY
	 * @default 27
	 **/
	"ESCAPE": 27,

	/**
	 * @property F1
	 * @static
	 * @readOnly READ-ONLY
	 * @default 112
	 **/
	"F1": 112,

	/**
	 * @property F10
	 * @static
	 * @readOnly READ-ONLY
	 * @default 121
	 **/
	"F10": 121,

	/**
	 * @property F11
	 * @static
	 * @readOnly READ-ONLY
	 * @default 122
	 **/
	"F11": 122,

	/**
	 * @property F12
	 * @static
	 * @readOnly READ-ONLY
	 * @default 123
	 **/
	"F12": 123,

	/**
	 * @property F13
	 * @static
	 * @readOnly READ-ONLY
	 * @default 124
	 **/
	"F13": 124,

	/**
	 * @property F14
	 * @static
	 * @readOnly READ-ONLY
	 * @default 125
	 **/
	"F14": 125,

	/**
	 * @property F15
	 * @static
	 * @readOnly READ-ONLY
	 * @default 126
	 **/
	"F15": 126,

	/**
	 * @property F2
	 * @static
	 * @readOnly READ-ONLY
	 * @default 113
	 **/
	"F2": 113,

	/**
	 * @property F3
	 * @static
	 * @readOnly READ-ONLY
	 * @default 114
	 **/
	"F3": 114,

	/**
	 * @property F4
	 * @static
	 * @readOnly READ-ONLY
	 * @default 115
	 **/
	"F4": 115,

	/**
	 * @property F5
	 * @static
	 * @readOnly READ-ONLY
	 * @default 116
	 **/
	"F5": 116,

	/**
	 * @property F6
	 * @static
	 * @readOnly READ-ONLY
	 * @default 117
	 **/
	"F6": 117,

	/**
	 * @property F7
	 * @static
	 * @readOnly READ-ONLY
	 * @default 118
	 **/
	"F7": 118,

	/**
	 * @property F8
	 * @static
	 * @readOnly READ-ONLY
	 * @default 119
	 **/
	"F8": 119,

	/**
	 * @property F9
	 * @static
	 * @readOnly READ-ONLY
	 * @default 120
	 **/
	"F9": 120,

	/**
	 * @property HOME
	 * @static
	 * @readOnly READ-ONLY
	 * @default 36
	 **/
	"HOME": 36,

	/**
	 * @property INSERT
	 * @static
	 * @readOnly READ-ONLY
	 * @default 45
	 **/
	"INSERT": 45,

	/**
	 * @property LEFT
	 * @static
	 * @readOnly READ-ONLY
	 * @default 37
	 **/
	"LEFT": 37,

	/**
	 * @property NUMPAD_0
	 * @static
	 * @readOnly READ-ONLY
	 * @default 96
	 **/
	"NUMPAD_0": 96,

	/**
	 * @property NUMPAD_1
	 * @static
	 * @readOnly READ-ONLY
	 * @default 97
	 **/
	"NUMPAD_1": 97,

	/**
	 * @property NUMPAD_2
	 * @static
	 * @readOnly READ-ONLY
	 * @default 98
	 **/
	"NUMPAD_2": 98,

	/**
	 * @property NUMPAD_3
	 * @static
	 * @readOnly READ-ONLY
	 * @default 99
	 **/
	"NUMPAD_3": 99,

	/**
	 * @property NUMPAD_4
	 * @static
	 * @readOnly READ-ONLY
	 * @default 100
	 **/
	"NUMPAD_4": 100,

	/**
	 * @property NUMPAD_5
	 * @static
	 * @readOnly READ-ONLY
	 * @default 101
	 **/
	"NUMPAD_5": 101,

	/**
	 * @property NUMPAD_6
	 * @static
	 * @readOnly READ-ONLY
	 * @default 102
	 **/
	"NUMPAD_6": 102,

	/**
	 * @property NUMPAD_7
	 * @static
	 * @readOnly READ-ONLY
	 * @default 103
	 **/
	"NUMPAD_7": 103,

	/**
	 * @property NUMPAD_8
	 * @static
	 * @readOnly READ-ONLY
	 * @default 104
	 **/
	"NUMPAD_8": 104,

	/**
	 * @property NUMPAD_9
	 * @static
	 * @readOnly READ-ONLY
	 * @default 105
	 **/
	"NUMPAD_9": 105,

	/**
	 * @property NUMPAD_ADD
	 * @static
	 * @readOnly READ-ONLY
	 * @default 107
	 **/
	"NUMPAD_ADD": 107,

	/**
	 * @property NUMPAD_DECIMAL
	 * @static
	 * @readOnly READ-ONLY
	 * @default 110
	 **/
	"NUMPAD_DECIMAL": 110,

	/**
	 * @property NUMPAD_DIVIDE
	 * @static
	 * @readOnly READ-ONLY
	 * @default 111
	 **/
	"NUMPAD_DIVIDE": 111,

	/**
	 * @property NUMPAD_ENTER
	 * @static
	 * @readOnly READ-ONLY
	 * @default 108
	 **/
	"NUMPAD_ENTER": 108,

	/**
	 * @property NUMPAD_MULTIPLY
	 * @static
	 * @readOnly READ-ONLY
	 * @default 106
	 **/
	"NUMPAD_MULTIPLY": 106,

	/**
	 * @property NUMPAD_SUBTRACT
	 * @static
	 * @readOnly READ-ONLY
	 * @default 109
	 **/
	"NUMPAD_SUBTRACT": 109,

	/**
	 * @property PAGE_DOWN
	 * @static
	 * @readOnly READ-ONLY
	 * @default 34
	 **/
	"PAGE_DOWN": 34,

	/**
	 * @property PAGE_UP
	 * @static
	 * @readOnly READ-ONLY
	 * @default 33
	 **/
	"PAGE_UP": 33,

	/**
	 * @property RIGHT
	 * @static
	 * @readOnly READ-ONLY
	 * @default 39
	 **/
	"RIGHT": 39,

	/**
	 * @property SHIFT
	 * @static
	 * @readOnly READ-ONLY
	 * @default 16
	 **/
	"SHIFT": 16,

	/**
	 * @property SPACE
	 * @static
	 * @readOnly READ-ONLY
	 * @default 32
	 **/
	"SPACE": 32,

	/**
	 * @property TAB
	 * @static
	 * @readOnly READ-ONLY
	 * @default 9
	 **/
	"TAB": 9,

	/**
	 * @property UP
	 * @static
	 * @readOnly READ-ONLY
	 * @default 38
	 **/
	"UP": 38,

	/**
	 * @property 0
	 * @static
	 * @readOnly READ-ONLY
	 * @default 48
	 **/
	"0": 48,

	/**
	 * @property 1
	 * @static
	 * @readOnly READ-ONLY
	 * @default 49
	 **/
	"1": 49,

	/**
	 * @property 2
	 * @static
	 * @readOnly READ-ONLY
	 * @default 50
	 **/
	"2": 50,

	/**
	 * @property 3
	 * @static
	 * @readOnly READ-ONLY
	 * @default 51
	 **/
	"3": 51,

	/**
	 * @property 4
	 * @static
	 * @readOnly READ-ONLY
	 * @default 52
	 **/
	"4": 52,

	/**
	 * @property 5
	 * @static
	 * @readOnly READ-ONLY
	 * @default 53
	 **/
	"5": 53,

	/**
	 * @property 6
	 * @static
	 * @readOnly READ-ONLY
	 * @default 54
	 **/
	"6": 54,

	/**
	 * @property 7
	 * @static
	 * @readOnly READ-ONLY
	 * @default 55
	 **/
	"7": 55,

	/**
	 * @property 8
	 * @static
	 * @readOnly READ-ONLY
	 * @default 56
	 **/
	"8": 56,

	/**
	 * @property 9
	 * @static
	 * @readOnly READ-ONLY
	 * @default 57
	 **/
	"9": 57,

	/**
	 * @property A
	 * @static
	 * @readOnly READ-ONLY
	 * @default 65
	 **/
	"A": 65,

	/**
	 * @property B
	 * @static
	 * @readOnly READ-ONLY
	 * @default 66
	 **/
	"B": 66,

	/**
	 * @property C
	 * @static
	 * @readOnly READ-ONLY
	 * @default 67
	 **/
	"C": 67,

	/**
	 * @property D
	 * @static
	 * @readOnly READ-ONLY
	 * @default 68
	 **/
	"D": 68,

	/**
	 * @property E
	 * @static
	 * @readOnly READ-ONLY
	 * @default 69
	 **/
	"E": 69,

	/**
	 * @property F
	 * @static
	 * @readOnly READ-ONLY
	 * @default 70
	 **/
	"F": 70,

	/**
	 * @property G
	 * @static
	 * @readOnly READ-ONLY
	 * @default 71
	 **/
	"G": 71,

	/**
	 * @property H
	 * @static
	 * @readOnly READ-ONLY
	 * @default 72
	 **/
	"H": 72,

	/**
	 * @property I
	 * @static
	 * @readOnly READ-ONLY
	 * @default 73
	 **/
	"I": 73,

	/**
	 * @property J
	 * @static
	 * @readOnly READ-ONLY
	 * @default 74
	 **/
	"J": 74,

	/**
	 * @property K
	 * @static
	 * @readOnly READ-ONLY
	 * @default 75
	 **/
	"K": 75,

	/**
	 * @property L
	 * @static
	 * @readOnly READ-ONLY
	 * @default 76
	 **/
	"L": 76,

	/**
	 * @property M
	 * @static
	 * @readOnly READ-ONLY
	 * @default 77
	 **/
	"M": 77,

	/**
	 * @property N
	 * @static
	 * @readOnly READ-ONLY
	 * @default 78
	 **/
	"N": 78,

	/**
	 * @property O
	 * @static
	 * @readOnly READ-ONLY
	 * @default 79
	 **/
	"O": 79,

	/**
	 * @property P
	 * @static
	 * @readOnly READ-ONLY
	 * @default 80
	 **/
	"P": 80,

	/**
	 * @property Q
	 * @static
	 * @readOnly READ-ONLY
	 * @default 81
	 **/
	"Q": 81,

	/**
	 * @property R
	 * @static
	 * @readOnly READ-ONLY
	 * @default 82
	 **/
	"R": 82,

	/**
	 * @property S
	 * @static
	 * @readOnly READ-ONLY
	 * @default 83
	 **/
	"S": 83,

	/**
	 * @property T
	 * @static
	 * @readOnly READ-ONLY
	 * @default 84
	 **/
	"T": 84,

	/**
	 * @property U
	 * @static
	 * @readOnly READ-ONLY
	 * @default 85
	 **/
	"U": 85,

	/**
	 * @property V
	 * @static
	 * @readOnly READ-ONLY
	 * @default 86
	 **/
	"V": 86,

	/**
	 * @property W
	 * @static
	 * @readOnly READ-ONLY
	 * @default 87
	 **/
	"W": 87,

	/**
	 * @property X
	 * @static
	 * @readOnly READ-ONLY
	 * @default 88
	 **/
	"X": 88,

	/**
	 * @property Y
	 * @static
	 * @readOnly READ-ONLY
	 * @default 89
	 **/
	"Y": 89,

	/**
	 * @property Z
	 * @static
	 * @readOnly READ-ONLY
	 * @default 90
	 **/
	"Z": 90
}

createjs.Keyboard = Keyboard;
}());