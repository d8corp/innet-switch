import innet, { createHandler } from 'innet'
import { jsxPlugins } from '@innet/jsx'
import { object } from '@innet/utils'

import { switchSync } from '.'

const handler = createHandler([
  object([
    jsxPlugins({
      switch: switchSync,
    })
  ]),
])

describe('switchSync', () => {
  it('works', () => {
    const app = (
      <switch>
        {undefined}
        test1
        {'test2'}
      </switch>
    )
    expect(innet(app, handler)).toBe('test1')
  })
})
