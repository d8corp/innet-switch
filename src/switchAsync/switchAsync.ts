import innet from 'innet'

export function switchAsync ({ children }, handler) {
  if (children && children.length) {
    const run = (i = 0) => {
      if (i < children.length) {
        const result = innet(children[i], handler)

        if (result instanceof Promise) {
          return result.then(val => {
            if (val !== undefined) {
              return val
            }

            return run(i + 1)
          })
        } else if (result !== undefined) {
          return result
        }

        return run(i + 1)
      }
    }

    return run()
  }
}
