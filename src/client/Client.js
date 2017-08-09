/**--------------------------------------------------------------------------------------------------
// file:	src\client\Client.js
//
// summary:	Client class
 *-----------------------------------------------------------------------------------------------**/

import Hitomi from './framework/Hitomi';
import Request from 'request';
import Http from 'http';

/**--------------------------------------------------------------------------------------------------
/// <summary>A client.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

class Client { 

}

/**--------------------------------------------------------------------------------------------------
/// <summary>A client connection.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

class ClientConnection extends Client { 

}

/**--------------------------------------------------------------------------------------------------
/// <summary>A client HTTP request.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

class ClientHttpRequest extends Client { 

}

/**--------------------------------------------------------------------------------------------------
/// <summary>A client HTTP response.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

class ClientHttpResponse extends Client { 
    constructor() { 
        this._processedImage = null; 
    }

    /**--------------------------------------------------------------------------------------------------
    /// <summary>Unpackage data.
    /// </summary>
    ///
    /// <remarks>Andrew Owens, 8/8/2017.
    /// </remarks>
    ///
    /// <param name="data">The data.</param>
    ///
    /// <returns>. Returns the processed image object.
    /// </returns>
     *-----------------------------------------------------------------------------------------------**/

    function UnpackageData(data) { 
        //do more logic if needed 
        this.processedImage = data;
        return this._processedImage;
    }



}

/**--------------------------------------------------------------------------------------------------
/// <summary>A client token.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

class ClientToken extends Client { 

}

export default Client; 
