/* eslint-disable no-undef */
import Storage from '../'

describe('Capacitator Storage Wrapper and it´s methods are defined', () => {
  test('"Storage" should be defined', () => {
    expect(Storage).toBeDefined()
  })

  test('Storage should have "setItem, getItem, removeItem, clear and keys" methods', () => {
    expect(Storage.setItem).toBeDefined()
    expect(Storage.getItem).toBeDefined()
    expect(Storage.removeItem).toBeDefined()
    expect(Storage.clear).toBeDefined()
    expect(Storage.keys).toBeDefined()
  })
})

describe('Capacitator Storage Wrapper methods', () => {
  test('Set item and getItem should set and get item', async () => {
    await Storage.setItem('test', 'value')
    expect(await Storage.getItem('test')).toBe('value')
  })

  test('set item should throw if a key is not found', async () => {
    try {
      await Storage.getItem('non-existent')
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Value for non-existent key does not exist.')
    }
  })

  test('remove item should remove the item', async () => {
    await Storage.setItem('test', 'value')
    await Storage.removeItem('test')

    try {
      await Storage.getItem('test')
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Value for test key does not exist.')
    }
  })

  test('keys method should return available keys', async () => {
    await Storage.setItem('key1', 'value1')
    await Storage.setItem('key2', 'value2')

    expect(await Storage.keys()).toEqual(['key1', 'key2'])
  })

  test('clear method should remove all keys', async () => {
    await Storage.setItem('key1', 'value1')
    await Storage.setItem('key2', 'value2')
    await Storage.clear()

    try {
      await Storage.getItem('key1')
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Value for key1 key does not exist.')
    }
  })
})
