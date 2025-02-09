import '@analogjs/vitest-angular/setup-zone';
import '@angular/compiler';

import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { getTestBed } from '@angular/core/testing';


import { setProjectAnnotations } from '@storybook/testing-angular';
import * as globalStorybookConfig from '../.storybook/preview'; // path of your preview.js file


getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

setProjectAnnotations(globalStorybookConfig);
