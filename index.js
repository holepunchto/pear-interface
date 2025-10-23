'use strict'
/**
 * @typedef {Object} PearConfig
 * @property {?Buffer} key - Application key as a buffer, can be null .
 * @property {?string} alias - Alias, can be null.
 * @property {?string} checkpoint - Checkpoint, can be null.
 * @property {string[]} links - Application-trusted pear:// and http(s):// links.
 * @property {boolean} dev - Development mode.
 * @property {string} storage - Path to the application storage.
 * @property {string} name - Name of the application.
 * @property {string} main - Main entry file.
 * @property {string[]} args - Application arguments
 * @property {string} channel - Application channel name.
 * @property {string} applink - Application link, just protocol and key.
 * @property {?string} fragment - Link fragment, can be null.
 * @property {string} link - Full application link, including pathname and fragment.
 * @property {string} entrypoint - Application entrypoint path.
 * @property {string} dir - Application directory.
 * @property {string} pearDir - Pear platform folder.
 * @property {Object} options - package.json pear field parsed configuration.
 * @property {Object} flags - Runtime flags.
 */

/**
 * @typedef {Object} PearIdentity
 * @property {function(Buffer): Promise<Buffer>} request - Requests sub-identity publicKey using identity root publicKey.
 * @property {function({ publicKey: Buffer, attestation: Buffer }): Promise<void>} share - Grant identity usage to platform.
 * @property {function(): Promise<void>} clear - Clears the granted identity.
 */

/**
 * @typedef {Object} Pear
 * @property {PearConfig} config - Application configuration object.
 * @property {PearIdentity} identity - Manages identity.
 * @property {function(Object): Promise<void>} checkpoint - Sets Pear.config.checkpoint state.
 * @property {function(): Promise<{ app: string, platform: string }>} versions - Retrieves version information for platform and application.
 * @property {function(function()): Promise<void>} teardown - Registers a teardown function.
 * @property {function(number=): void} exit - Exits the application with optional exit code, default 0.
 */

/**
 * @global
 * @type {Pear}
 **/

const Pear = global.Pear
