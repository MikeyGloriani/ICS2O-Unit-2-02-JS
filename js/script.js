// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
 function doMathClicked() {
  document.getElementById("area-math").innerHTML =
    "<p>The area is:" + 5 * 3 + "cm²" + "</p>"
  document.getElementById("perimeter-math").innerHTML =
    "<p>The perimeter is:" + 2*(5 + 3) + "cm" + "</p>"
}
