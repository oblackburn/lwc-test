/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
module.exports = {
    rootDir: '../..',

    testMatch: ['<rootDir>/**/__tests__/*.spec.js'],

    projects: [
        '<rootDir>/packages/@lwc/jest-preset',
        '<rootDir>/packages/@lwc/jest-resolver',
        '<rootDir>/packages/@lwc/jest-serializer',
        '<rootDir>/packages/@lwc/jest-transformer',
    ],
};
