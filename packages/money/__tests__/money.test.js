'use strict';

const { fenToYuan } = require('../lib');

describe('money', () => {
    expect(fenToYuan(12222222, 2)).toBe('122222.22')
});
