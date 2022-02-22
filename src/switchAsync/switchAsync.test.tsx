import innet, { createHandler } from 'innet'
import { jsxPlugins } from '@innet/jsx'
import { object } from '@innet/utils'

import { switchAsync } from '.'

const handler = createHandler([
  object([
    jsxPlugins({
      switch: switchAsync,
    }),
  ]),
])

describe('switchAsync', () => {
  it('works', async () => {
    const app = (
      <switch>
        {undefined}
        {new Promise(resolve => resolve(undefined))}
        {'test2'}
      </switch>
    )
    expect(await innet(app, handler)).toBe('test2')
  })
})
