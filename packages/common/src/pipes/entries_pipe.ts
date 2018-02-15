/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Pipe, PipeTransform} from '@angular/core';

/**
 * @ngModule CommonModule
 * @whatItDoes Transforms an object to array of its keys.
 * @howToUse `object_expression | keys`
 * @description
 *
 * Transforms an object to array of `[key, value]` pairs using `Object.keys`.
 *
 * ### Example
 * {@example common/pipes/ts/entries_pipe.ts region='Entries'}
 *
 * @experimental
 */
@Pipe({name: 'entries', pure: false})
export class EntriesPipe implements PipeTransform {
  transform(value: {[key: string]: any}): [string, any][] {
    if (value == null) {
      return [];
    }

    return Object.keys(value)
      .map(key =>  <[string, any]> [key, value[key]]);
  }
}
