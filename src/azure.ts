/*
 * Copyright (c) 2018 Rain Agency <contact@rain.agency>
 * Author: Rain Agency <contact@rain.agency>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { Context as AzureContext } from "azure-functions-ts-essentials";

export function isAzureContext(context: any): context is AzureContext {
  if (!context) {
    return false;
  }

  return context.log !== undefined && context.bindings !== undefined;
}

/**
 * This is just a helper for some azure specific tests
 */
export function azureLog(): IAzureLog {
  const log: any = (...message: any[]): void => {
    console.log(message);
  };

  log.error = console.error;
  log.warn = console.warn;
  log.info = console.info;
  log.verbose = console.log;
  log.metric = console.log;

  return log;
}

interface IAzureLog {
  (...message: any[]): void;
  error(...message: any[]): void;
  warn(...message: any[]): void;
  info(...message: any[]): void;
  verbose(...message: any[]): void;
  metric(...message: any[]): void;
}
