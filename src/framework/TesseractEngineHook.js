/**--------------------------------------------------------------------------------------------------
// file:	src\components\TesseractEngineHook.js
//
// summary:	Tesseract engine hook class
 *-----------------------------------------------------------------------------------------------**/
import Tesseract from 'tesseract';
import Error from 'error';

// #region TesseractEngine Wrapper 

/**--------------------------------------------------------------------------------------------------
/// <summary>A tesseract engine hook.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/
class TesseractEngineHook {

    /**--------------------------------------------------------------------------------------------------
    /// <summary>Gets a message describing the fail.
    /// </summary>
    ///
    /// <value>A message describing the fail.
    /// </value>
     *-----------------------------------------------------------------------------------------------**/

    const failMessage;

    /**--------------------------------------------------------------------------------------------------
    /// <summary>Gets the has jobs.
    /// </summary>
    ///
    /// <value>The has jobs.
    /// </value>
     *-----------------------------------------------------------------------------------------------**/

    let hasJobs;

    /**--------------------------------------------------------------------------------------------------
    /// <summary>Gets the has error.
    /// </summary>
    ///
    /// <value>The has error.
    /// </value>
     *-----------------------------------------------------------------------------------------------**/

    let hasError;

    /**--------------------------------------------------------------------------------------------------
    /// <summary>Gets the has OCR finished.
    /// </summary>
    ///
    /// <value>The has OCR finished.
    /// </value>
     *-----------------------------------------------------------------------------------------------**/

    let hasOcrFinished;

    constructor() {

        /// <summary>An enum constant representing the this. has jobs option.
        /// </summary>
        this._hasJobs = false;

        /// <summary>An enum constant representing the this. has error option.
        /// </summary>
        this._hasError = false;

        /// <summary>An enum constant representing the this. current jobs option.
        /// </summary>
        this._currentJobs = [];

        /// <summary>An enum constant representing the this. has OCR finished option.
        /// </summary>
        this._hasOcrFinished = false;

        /// <summary>An enum constant representing the this. fail message option.
        /// </summary>
        this._failMessage = "The process failed for an unknown reason.";

    }

    /**--------------------------------------------------------------------------------------------------
    /// <summary>Tesseract recognize.
    /// </summary>
    ///
    /// <remarks>Andrew Owens, 8/8/2017.
    /// </remarks>
    ///
    /// <param name="image">  The image.</param>
    /// <param name="options">Options for controlling the operation.</param>
    ///
    /// <returns>. TesseractJob type 
    /// </returns>
     /*-----------------------------------------------------------------------------------------------**/
    function TesseractRecognize(image, options) {
        this._imageLike = image;
        this._options = options;

        if(!this._imageLike === null || this._options === false) { 
            return Error("There was an issue with analyzing the photo. Try again.");
        } else { 
            try {
                Tesseract.recognize(this._imageLike)
                    .then(function(output) { 
                        return output;
                    });
            } catch (e) {
                return Error("Analysis Failed! There was an error in the TesseractEngine process.");
            }
        }
        return this._failMessage;
    }

    /**--------------------------------------------------------------------------------------------------
    /// <summary>Determines what languange the imageLike object is written in.
    /// </summary>
    ///
    /// <remarks>Andrew Owens, 8/8/2017.
    /// </remarks>
    ///
    /// <param name="image">The image.</param>
    ///
    /// <returns>.
    /// </returns>
     *-----------------------------------------------------------------------------------------------**/
    function TesseractDetect(image) { 
        this._imageLike = image;

        if(this._imageLike === null) { 
            return Error("Analysis Failed! There was an error in the TesseractEngine process.");
        } else { 
            try {
                Tesseract.detect(this._imageLike)
                    .then(function(output){
                        return output;
                    });
            } catch (e) {
               return Error("Analysis Failed! There was an error in the TesseractEngine process.");
            }
        }
        return this._failMessage;
    }

    /**--------------------------------------------------------------------------------------------------
    /// <summary>Tesseract result and dispatches it out to a reciever.
    /// </summary>
    ///
    /// <remarks>Andrew Owens, 8/8/2017.
    /// </remarks>
    ///
    /// <param name="output">     The tesseract job.</param>
    /// <param name="subscribers">The subscribers.</param>
    ///
    /// <returns>.
    /// </returns>
     *-----------------------------------------------------------------------------------------------**/
    function TesseractResult(output) { 

        this._output = output;
        if(this._output === null ) return; 

        return this._output;
    }
}
//#endregion
export default TesseractEngineHook; 
