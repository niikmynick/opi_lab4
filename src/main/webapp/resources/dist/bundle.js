/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawNewPoint: () => (/* binding */ drawNewPoint),
/* harmony export */   drawPreview: () => (/* binding */ drawPreview),
/* harmony export */   safeNewDraw: () => (/* binding */ safeNewDraw),
/* harmony export */   safePreDraw: () => (/* binding */ safePreDraw)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


function drawPreview(x, y, r) {
    const circle = document.getElementById('point')

    const r_label = document.getElementsByClassName("r-label");
    const r_minus_label = document.getElementsByClassName("r-minus-label");
    const r_half_label = document.getElementsByClassName("r-half-label");
    const r_minus_half_label = document.getElementsByClassName("r-half-minus-label");

    const centerX = 200;
    const centerY = 200;
    const scaleFactor = 100 / r;

    const scaledX = (x * scaleFactor) + centerX;
    const scaledY = (y * -scaleFactor) + centerY;

    // set new coordinates for red circle
    circle.setAttribute("cx", scaledX.toString());
    circle.setAttribute("cy", scaledY.toString());

    // set values instead of R markers
    for (let label of r_label) {
        label.innerHTML = r.toString();
    }

    for (let label of r_minus_label) {
        label.innerHTML = (-r).toString();
    }

    for (let label of r_half_label) {
        label.innerHTML = (r/2).toString();
    }

    for (let label of r_minus_half_label) {
        label.innerHTML = (-r/2).toString();
    }

}

function drawNewPoint(x, y, r) {
    let svg = document.getElementById("graphSVG");

    let newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkStatus)(x, y, r)) {
        newElement.setAttribute("fill", "green");
    } else {
        newElement.setAttribute("fill", "grey");
    }

    const centerX = 200;
    const centerY = 200;
    const scaleFactor = 100 / r;

    const scaledX = (x * scaleFactor) + centerX;
    const scaledY = (y * -scaleFactor) + centerY;

    newElement.setAttribute("cx", scaledX.toString());
    newElement.setAttribute("cy", scaledY.toString());
    newElement.setAttribute("r", "3");

    svg.appendChild(newElement);
}

function safeNewDraw(xValues, y, r) {
    if (xValues.length === 0) {
        drawNewPoint(0, y, r)
    } else {
        xValues.forEach(x => {
            drawNewPoint(x, y, r)
        })
    }
}
function safePreDraw(xValues, y, r) {
    if (xValues.length === 0) {
        drawPreview(0, y, r)
    } else {
        xValues.forEach(x => {
            drawPreview(x, y, r)
        })
    }
}

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkStatus: () => (/* binding */ checkStatus),
/* harmony export */   getXValues: () => (/* binding */ getXValues)
/* harmony export */ });
function getXValues() {
    let xValues = []
    if (document.getElementById('hitInfo:x-4').checked === true) {
        xValues.push(-4)
    }
    if (document.getElementById('hitInfo:x-3').checked === true) {
        xValues.push(-3)
    }
    if (document.getElementById('hitInfo:x-2').checked === true) {
        xValues.push(-2)
    }
    if (document.getElementById('hitInfo:x-1').checked === true) {
        xValues.push(-1)
    }
    if (document.getElementById('hitInfo:x0').checked === true) {
        xValues.push(0)
    }
    if (document.getElementById('hitInfo:x1').checked === true) {
        xValues.push(1)
    }
    if (document.getElementById('hitInfo:x2').checked === true) {
        xValues.push(2)
    }
    if (document.getElementById('hitInfo:x3').checked === true) {
        xValues.push(3)
    }
    if (document.getElementById('hitInfo:x4').checked === true) {
        xValues.push(4)
    }

    return xValues
}

function checkStatus(x, y, r) {
    if (x >= 0) {
        if (y >= 0) {
            return Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow((r / 2), 2);
        } else {
            return (x <= r) && (y >= -r);
        }
    } else {
        if (y >= 0) {
            return (-x + y) <= (r / 2);
        } else {
            return false;
        }
    }
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_main_webapp_script_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _src_main_webapp_script_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



let input_R = document.getElementById('hitInfo:r-value_input')
let increaseButton_R = document.getElementById('hitInfo:r-value-increase')
let decreaseButton_R = document.getElementById('hitInfo:r-value-decrease')

let input_Y = document.getElementById('hitInfo:y-value')

let input_X = document.getElementById('choiceX')

let submitButton = document.getElementById('hitInfo:tryHit')

let svg = document.getElementById("graphSVG");
let svgInitData = document.getElementById("graphSVG").innerHTML;
let svgLastData = document.getElementById("graphSVG").innerHTML;

let dataTableDiv = document.getElementById('results-div')
let mouseOnTable = false

let clearDiv = document.getElementById('clearDiv')
let isClearing = false

let clickedRow = undefined;


if (document.getElementsByClassName('clickable-row').length !== 0) {
    clearDiv.style.display = 'block'
    dataTableDiv.style.padding = '20px 20px 0 20px'
}

increaseButton_R.addEventListener('click', () => {
    let xValues = (0,_src_main_webapp_script_utils__WEBPACK_IMPORTED_MODULE_1__.getXValues)()
    ;(0,_src_main_webapp_script_drawer__WEBPACK_IMPORTED_MODULE_0__.safePreDraw)(xValues, input_Y.value, input_R.value)
});

decreaseButton_R.addEventListener('click', () => {
    let xValues = (0,_src_main_webapp_script_utils__WEBPACK_IMPORTED_MODULE_1__.getXValues)()
    ;(0,_src_main_webapp_script_drawer__WEBPACK_IMPORTED_MODULE_0__.safePreDraw)(xValues, input_Y.value, input_R.value)
});

input_Y.addEventListener("input", function() {
    let xValues = (0,_src_main_webapp_script_utils__WEBPACK_IMPORTED_MODULE_1__.getXValues)()
    ;(0,_src_main_webapp_script_drawer__WEBPACK_IMPORTED_MODULE_0__.safePreDraw)(xValues, input_Y.value, input_R.value)
});

input_X.addEventListener("click", function() {
    let xValues = (0,_src_main_webapp_script_utils__WEBPACK_IMPORTED_MODULE_1__.getXValues)()
    ;(0,_src_main_webapp_script_drawer__WEBPACK_IMPORTED_MODULE_0__.safePreDraw)(xValues, input_Y.value, input_R.value)
});

svg.addEventListener('click', function (event) {

    let hiddenSubmitButton = document.getElementById('hitInfoHidden:tryHitHidden')
    let hiddenX = document.getElementById('hitInfoHidden:x-value-hidden')
    let hiddenY = document.getElementById('hitInfoHidden:y-value-hidden')
    let hiddenR = document.getElementById('hitInfoHidden:r-value-hidden')

    let r = input_R.value
    let x = (event.offsetX - 200) / (100 / r)
    let y = (event.offsetY - 200) / (-100 / r)

    ;(0,_src_main_webapp_script_drawer__WEBPACK_IMPORTED_MODULE_0__.safeNewDraw)([x], y, r)

    hiddenX.value = x
    hiddenY.value = y
    hiddenR.value = r

    hiddenSubmitButton.click()

    svgLastData = svg.innerHTML

    clearDiv.style.display = 'block'
    dataTableDiv.style.padding = '20px 20px 0 20px'
    isClearing = false
});

submitButton.addEventListener('click', () => {
    let xValues = (0,_src_main_webapp_script_utils__WEBPACK_IMPORTED_MODULE_1__.getXValues)()
    ;(0,_src_main_webapp_script_drawer__WEBPACK_IMPORTED_MODULE_0__.safeNewDraw)(xValues, input_Y.value, input_R.value)
    svgLastData = svg.innerHTML

    clearDiv.style.display = 'block'
    dataTableDiv.style.padding = '20px 20px 0 20px'
    isClearing = false
})

dataTableDiv.addEventListener('click', function (event) {
    let target = event.target
    if (target.tagName === 'TD') {

        clickedRow = target

        let x = parseFloat(target.parentNode.childNodes[1].innerText)
        let y = parseFloat(target.parentNode.childNodes[3].innerText)
        let r = parseFloat(target.parentNode.childNodes[5].innerText)

        if (isNaN(x) || isNaN(y) || isNaN(r) || isClearing) {
            return
        }

        target.parentNode.style.backgroundColor = '#c8e1ff'

        if (!mouseOnTable) {
            svgLastData = svg.innerHTML
            mouseOnTable = true
            svg.innerHTML = svgInitData
            ;(0,_src_main_webapp_script_drawer__WEBPACK_IMPORTED_MODULE_0__.drawNewPoint)(x, y, r)
        } else {
            (0,_src_main_webapp_script_drawer__WEBPACK_IMPORTED_MODULE_0__.drawNewPoint)(x, y, r)
        }
    }
})

dataTableDiv.addEventListener('dblclick', function (event) {
    let target = event.target

    if (target.tagName === 'TD') {
        clearSelection()
    }
})

clearDiv.addEventListener('click', function () {
    isClearing = true
    svg.innerHTML = svgInitData
    svgLastData = svgInitData

    clearDiv.style.display = 'none'
    dataTableDiv.style.padding = '20px'
})

function clearSelection() {
    for (let i of document.getElementsByClassName('clickable-row')) {
        i.style.backgroundColor = '#f9f9f9'
    }

    svg.innerHTML = svgLastData
    mouseOnTable = false

    clickedRow = undefined
}
})();

/******/ })()
;