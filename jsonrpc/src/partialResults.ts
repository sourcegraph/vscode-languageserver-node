/**
 * Types related to supporting streaming partial results.
 * @sourcegraph
 */
'use strict';

import { NotificationType } from './messages';

/**
 * Notification sent by a language server to indicate a partial result for a ongoing request.
 */
export namespace PartialResultNotification {
	export const type = new NotificationType<PartialResultParams, void>('$/partialResult');
}

/**
 * The contents of a PartialResultNotification.
 */
export interface PartialResultParams {
	/**
	 * The JSON RPC id of the request that this partial result is associated with.
	 */
	id: number | string,

	/**
	 * A JSON Patch.
	 * http://jsonpatch.com/
	 */
	patch: any
}

/**
 * A handler for partial results.
 */
export interface PartialResultHandler<T> {

	/**
	 * The callback to call when partialValue is updated.
	 */
	callback: PartialResultCallback<T>;

	/**
	 * The cumulative partial result value that has been
	 * constructed by applying all JSON Patch operations.
	 */
	partialValue: T;
}

/**
 * A function that is called with a partial result object for a request.
 */
export type PartialResultCallback<T> = (value: T) => void;