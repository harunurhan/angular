/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

// #docregion EntriesPipe
@Component({
  selector: 'entries-pipe',
  template: `<div *ngFor="let entry of object | entries">
    key is {{entry[0]}} and value is {{entry[1]]}}
  </div>`
})
export class EntriesPipeComponent {
  object: Object = {key1: 'value1', key2: 'value2'};
}
// #enddocregion
