import React from 'react';
import TesseractEngineHook from 'TesseractEngineHook';
import { Error, ErrorHandler, ErrorMessage } from 'error';

// #region Analyzer Component. 

/**--------------------------------------------------------------------------------------------------
/// <summary>The Analyzer class wraps the TesseractEngine functionality that analyzes the input 
///  objects (pictures).
/// </summary>
/// 
/// <returns> 
/// Returns the results of the OCR analysis.
/// </returns>
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/
class Analyzer extends TesseractEngineHook {
    constructor() {
    }
}
Analyzer.displayName = "Analyzer";
// #endregion

export default Analyzer; 