import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '73vuarhv',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
