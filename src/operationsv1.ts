// Code generated. DO NOT EDIT.
import type * as commonv1 from "./commonv1";

/**
 * Operation is a long running background task.
 */
export interface Operation {
  /**
   * The system-assigned identifier of the operation.
   */
  id: string;
  /**
   * If the value is `false`, it means the operation is still in progress.
   * If `true`, the operation is completed, and either `error` or `response` is
   * available.
   */
  done: boolean;
  /**
   * The error result of the operation in case of failure.
   */
  error?: OperationError | null;
  /**
   * The normal response of the operation in case of success.
   */
  response?: commonv1.Any | null;
  /**
   * The creation time of the operation.
   */
  createTime: Date;
  /**
   * The last update time of the operation.
   */
  updateTime: Date;
  /**
   * The deletion time of the operation.
   */
  deleteTime?: Date | null;
}

/**
 * The operation error.
 */
export interface OperationError {
  /**
   * The error code.
   */
  code?: string;
  /**
   * The error message.
   */
  message?: string;
}
