/** @type {import('next').NextConfig} */

import withImages from 'next-images'

export default withImages({
  webpack(config, options) {
    return config
  }
})