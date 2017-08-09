/**--------------------------------------------------------------------------------------------------
// file:	src\components\Error.js
//
// summary:	Error class
 *-----------------------------------------------------------------------------------------------**/
import React from 'react';

// #region Error Handling


/**--------------------------------------------------------------------------------------------------
/// <summary>An error.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

class Error extends Component {
    constructor() {
        
    }
}
Error.displayName = "Error";

/**--------------------------------------------------------------------------------------------------
/// <summary>An error handler.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/
 class ErrorHandler extends Error {
    constructor() {
        
    }
}

ErrorHandler.displayName = "ErrorHandler";

/**--------------------------------------------------------------------------------------------------
/// <summary>An error message.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

class ErrorMessage extends Error { 
    constructor() { 

    }
}
ErrorMessage.displayName = "ErrorMessage";
// #endregion

export default { Error };