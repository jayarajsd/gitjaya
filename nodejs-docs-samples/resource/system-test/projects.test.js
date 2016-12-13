/**
 * Copyright 2016, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const path = require(`path`);
const run = require(`../../utils`).run;

const cwd = path.join(__dirname, `..`);
const cmd = `node projects.js`;

describe(`resource:projects`, () => {
  it(`should list projects`, () => {
    const output = run(`${cmd} list`, cwd);
    assert.notEqual(output.indexOf(`Projects:`), -1);
    assert.notEqual(output.indexOf(`${process.env.GCLOUD_PROJECT}`), -1);
  });
});
