/**--------------------------------------------------------------------------------------------------
// file:	src\components\Dispatcher.js
//
// summary:	Dispatcher class
 *-----------------------------------------------------------------------------------------------**/

import TesseractEngineHook from 'TesseractEngineHook';
import Subscriber from 'Subscriber';
import Error from 'error';

/**--------------------------------------------------------------------------------------------------
/// <summary>A dispatcher.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

class Dispatcher extends TesseractEngineHook {

    /**--------------------------------------------------------------------------------------------------
    /// <summary>The subscribers.
    /// </summary>
     *-----------------------------------------------------------------------------------------------**/

   // let subscribers = [];

    constructor() { 

    }

    function Dispatch() { 
        for (var subs in subscribers) {
            //send the data to a subscriber class
        }
    }

    /**--------------------------------------------------------------------------------------------------
    /// <summary>Creates the subscribtion.
    /// </summary>
    ///
    /// <remarks>Andrew Owens, 8/8/2017.
    /// </remarks>
    ///
    /// <returns>The new subscribtion.
    /// </returns>
     *-----------------------------------------------------------------------------------------------**/

    function CreateSubscribtion() { 
        this._subscriber = new Subscriber();

        subscribers.push(_subscriber);
    }

    /**--------------------------------------------------------------------------------------------------
    /// <summary>Ends a subscription.
    /// </summary>
    ///
    /// <remarks>Andrew Owens, 8/8/2017.
    /// </remarks>
    ///
    /// <param name="subscriber">The subscriber.</param>
    ///
    /// <returns>.
    /// </returns>
     *-----------------------------------------------------------------------------------------------**/

    function EndSubscription(subscriber) { 
        this._subscriber = subscriber; 

        subscribers.pop(subscriber);
    }
}


export default Dispatcher;