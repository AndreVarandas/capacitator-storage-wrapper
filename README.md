# capacitator-storage-wrapper
A simple wrapper for ionic capacitator Storage plugin.

<p align="center">
    <img src="https://raw.githubusercontent.com/AndreVarandas/capacitator-storage-wrapper/master/art/logo.png" width="256" height="256" alt="Capacitator storage Wrapper logo">
</p>

[![npm (scoped)](https://img.shields.io/npm/v/@varandas/capacitator-storage-wrapper.svg)](https://www.npmjs.com/package/@varandas/capacitator-storage-wrapper)
[![npm](https://img.shields.io/npm/dm/@varandas/capacitator-storage-wrapper.svg)](https://npmcharts.com/compare/@varandas/capacitator-storage-wrapper)

[![Build Status](https://travis-ci.org/AndreVarandas/capacitator-storage-wrapper.svg?branch=master)](https://travis-ci.org/AndreVarandas/capacitator-storage-wrapper)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/AndreVarandas/capacitator-storage-wrapper/master.svg?style=flat-square)](https://codecov.io/gh/AndreVarandas/capacitator-storage-wrapper/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Known Vulnerabilities](https://snyk.io/test/github/AndreVarandas/capacitator-storage-wrapper/badge.svg?targetFile=package.json)](https://snyk.io/test/github/AndreVarandas/capacitator-storage-wrapper?targetFile=package.json)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AndreVarandas/capacitator-storage-wrapper/blob/master/LICENSE)

### Motivation

I needed an easier and faster way to use the capacitator storage plugin.

### Usage

```typescript
import Storage from '@varandas/capacitator-storage-wrapper'

// item we want to save:
const item = {
    foo: 'bar',
}

// the key we want to use
const key = 'item name'

// saving the item
await Storage.setItem(key, item)

// retrieving the item
try {
    const data = await Storage.getItem(key)
    // process data
} catch(error) {
    // Key was not found, handle exeption
}

// remove item
await Storage.removeItem(key)

// get all keys
const keys = await Storage.keys()

// clear all keys and values
await Storage.clear()
```

---

[License - MIT André Varandas](https://github.com/AndreVarandas/capacitator-storage-wrapper/blob/master/README.md)

<div>Icon by <a href="https://www.flaticon.com/br/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a></div>