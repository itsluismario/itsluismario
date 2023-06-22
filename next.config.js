const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/files',
              outputPath: 'static/files/',
              name: '[name].[ext]',
            },
          },
        ],
      });
  
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  