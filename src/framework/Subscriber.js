/**--------------------------------------------------------------------------------------------------
// file:	src\components\Subscriber.js
//
// summary:	Subscriber class
 *-----------------------------------------------------------------------------------------------**/
import Error from 'error';
/**--------------------------------------------------------------------------------------------------
/// <summary>A subscriber.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

class Subscriber { 
    constructor() { 

    }

    /**--------------------------------------------------------------------------------------------------
    /// <summary>Subscribes this object.
    /// </summary>
    ///
    /// <remarks>Andrew Owens, 8/8/2017.
    /// </remarks>
    ///
    /// <returns>.
    /// </returns>
     *-----------------------------------------------------------------------------------------------**/

    function Subscribe() { 
         return Error("Not Implemented");
    }

    /**--------------------------------------------------------------------------------------------------
    /// <summary>Unsubscribes this object.
    /// </summary>
    ///
    /// <remarks>Andrew Owens, 8/8/2017.
    /// </remarks>
    ///
    /// <returns>.
    /// </returns>
     *-----------------------------------------------------------------------------------------------**/

    function Unsubscribe() { 
        return Error("Not Implemented");
    }

    /**--------------------------------------------------------------------------------------------------
    /// <summary>Attach event delegate.
    /// </summary>
    ///
    /// <remarks>Andrew Owens, 8/8/2017.
    /// </remarks>
    ///
    /// <param name="functionName">Name of the function.</param>
    ///
    /// <returns>.
    /// </returns>
     *-----------------------------------------------------------------------------------------------**/

    function AttachEventDelegate(functionName) { 
        return Error("Not Implemented");
    }
}

export default Subscriber;