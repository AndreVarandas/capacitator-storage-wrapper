import { Plugins } from '@capacitor/core'

const { Storage } = Plugins

/**
 * Sets a value for a key.
 *
 * @param key {string} key name
 * @param value {string | object} to save
 */
async function setItem (key: string, value: string | object) {
  await Storage.set({
    key: key,
    value: JSON.stringify(value)
  })
}

/**
 * Gets value for a key.
 *
 * @param key {string} key name
 */
async function getItem (key: string) {
  const { value } = await Storage.get({ key })
  if (!value) {
    throw new Error(`Value for ${key} key does not exist.`)
  }

  return JSON.parse(value)
}

/**
 * Removes a saved key and value.
 *
 * @param key {string} key name
 */
async function removeItem (key: string) {
  await Storage.remove({ key })
}

/**
 * Returns all the saved keys.
 */
async function keys () {
  const { keys } = await Storage.keys()
  return keys
}

/**
 * Clears all saved keys.
 */
async function clear () {
  await Storage.clear()
}

export default {
  setItem,
  getItem,
  removeItem,
  keys,
  clear
}
