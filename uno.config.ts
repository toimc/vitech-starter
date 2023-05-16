// uno.config.ts
import { defineConfig } from 'unocss'
// import presetWind from '@unocss/preset-wind'
import { presetWind, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      }
    })
  ]
})
