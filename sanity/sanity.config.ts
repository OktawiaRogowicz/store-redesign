import {defineConfig, isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {colorInput} from '@sanity/color-input'
import { table } from '@sanity/table';
import {visionTool} from '@sanity/vision'
import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array'
import {media, mediaAssetSource} from 'sanity-plugin-media'

import Navbar from './components/studio/Navbar'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {customDocumentActions} from './plugins/customDocumentActions'


const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'default',
  title: 'Store redesign',

  projectId: '73vuarhv',
  dataset: 'production',

  plugins: [
    table(),
    structureTool({structure}),
    colorInput(),
    imageHotspotArrayPlugin(),
    customDocumentActions(),
    media(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },

  form: {
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
      },
    },
    image: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource)
      },
    },
  },

  studio: {
    components: {
      navbar: Navbar,
    },
  },
})
