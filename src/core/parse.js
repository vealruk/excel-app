export function parse(value = '') {
  try {
    if (value.startsWith('=')) {
      try {
        return eval(value.slice(1))
      } catch (e) {
        return value
      }
    }
  } catch (error) {
    // return value
  }
  return value
}