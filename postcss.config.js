module.exports = {
  plugins: [
    require('precss')({ /* ...options */ }),
    require('postcss-percentage')({ /* ...options */ }),
    require('autoprefixer')({ /* ...options */ }),
    require('postcss-inline-svg')({ /* ...options */ }),
    require('postcss-advanced-variables')({
      variables: {
        'bg-color': '#4990E2',
        'text-color': '#ffffff',
        'btn-bg-color': '#F6A623',
        'input-color': '#9B9B9B'
      }
    })
  ]
}