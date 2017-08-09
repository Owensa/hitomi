/**--------------------------------------------------------------------------------------------------
// file:	src\components\InputDataHelper.js
//
// summary:	Input utility class for pictures camera, scanner etc 
 *-----------------------------------------------------------------------------------------------**/
import Hitomi from 'Hitomi';

/**--------------------------------------------------------------------------------------------------
/// <summary>#region Input Device Interfaces: Allows the core application to recieve inputs from a
/// variety of locations and types.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

export class InputInterface { 

}
/**--------------------------------------------------------------------------------------------------
/// <summary>A camera interface.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

export class CameraInterface extends InputInterface { 

}

/**--------------------------------------------------------------------------------------------------
/// <summary>An iPhone camera interface.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

export class IphoneCameraInterface extends CameraInterface { 

}

/**--------------------------------------------------------------------------------------------------
/// <summary>An android camera interface.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

export class AndroidCameraInterface extends CameraInterface { 

}

/**--------------------------------------------------------------------------------------------------
/// <summary>A scanner inteface.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

export class ScannerInteface extends InputInterface { 

}

/**--------------------------------------------------------------------------------------------------
/// <summary>A File interface.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

export class FileInterface extends InputInterface { 

}

/**--------------------------------------------------------------------------------------------------
/// <summary>A PDF interface.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

export class PdfInterface extends FileInterface { 

}

/**--------------------------------------------------------------------------------------------------
/// <summary>A byte interface.
/// </summary>
///
/// <remarks>Andrew Owens, 8/8/2017.
/// </remarks>
 *-----------------------------------------------------------------------------------------------**/

export class ByteInterface extends FileInterface { 

}

export default InputDataHelper; 


