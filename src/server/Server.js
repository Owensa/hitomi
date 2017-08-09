/**--------------------------------------------------------------------------------------------------
// file:	src\server\Server.js
//
// summary:	Server class
 *-----------------------------------------------------------------------------------------------**/

import Hitomi from "./framework/Hitomi";
import NetworkManager from "./framework/Hitomi";
import Request from 'request';
import Http from 'http';
import Config from 'Config';

/**--------------------------------------------------------------------------------------------------
/// <summary>A server base class.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

class Server { 
    let ip = "127.0.0.1"; 
    let port = "3333";

    constructor() { 
        this._ip = ip;
        this._port = port;
    }
}

/**--------------------------------------------------------------------------------------------------
/// <summary>A HTTP server.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

export default class HttpServer extends Server { 
    constructor() { 
        let server = CreateHttpServer();
        server._ip = ""; //assign from config
        server._port = "";//assign from config
    }
    /**--------------------------------------------------------------------------------------------------
    /// <summary>HTTP request recieved.
    /// </summary>
    ///
    /// <remarks>Andrew Owens, 8/8/2017.
    /// </remarks>
    ///
    /// <param name="req">   The request.</param>
    /// <param name="client">The client.</param>
    ///
    /// <returns>.
    /// </returns>
     *-----------------------------------------------------------------------------------------------**/

    function HttpRequestRecieved(req, client) { 

    }

    /**--------------------------------------------------------------------------------------------------
    /// <summary>HTTP response.
    /// </summary>
    ///
    /// <remarks>Andrew Owens, 8/8/2017.
    /// </remarks>
    ///
    /// <param name="res">   The resource.</param>
    /// <param name="client">The client.</param>
    ///
    /// <returns>.
    /// </returns>
     *-----------------------------------------------------------------------------------------------**/

    function HttpResponse(res, client) { 

    }

    /**--------------------------------------------------------------------------------------------------
    /// <summary>Creates HTTP server.
    /// </summary>
    ///
    /// <remarks>Andrew Owens, 8/8/2017.
    /// </remarks>
    ///
    /// <returns>The new HTTP server.
    /// </returns>
     *-----------------------------------------------------------------------------------------------**/

    function CreateHttpServer() { 

    }
}

/**--------------------------------------------------------------------------------------------------
/// <summary>A socket server.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

export default class SocketServer extends HttpServer { 

    /**--------------------------------------------------------------------------------------------------
    /// <summary>HTTP upgrade request.
    /// </summary>
    ///
    /// <remarks>Andrew Owens, 8/8/2017.
    /// </remarks>
    ///
    /// <returns>.
    /// </returns>
     *-----------------------------------------------------------------------------------------------**/

    function HttpUpgradeRequestHandler() { 

    }
}

/**--------------------------------------------------------------------------------------------------
/// <summary>A HTTP authentification.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

class HttpAuthentification extends HttpServer { 
    
}

/**--------------------------------------------------------------------------------------------------
/// <summary>A stream.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/
class Stream { 

}

export default { HttpServer, SocketServer };




