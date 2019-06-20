const path = require('path')
const fs = require('fs')
const scss = require('node-sass')
const postCss = require('postcss')
const noComment = require('postcss-discard-comments')
const extractMediaQuery = require('postcss-extract-media-query')
const combineSelectors = require('postcss-combine-duplicated-selectors')


const dir = path.resolve(__dirname, 'dist')
const postCssPlugins = [
  noComment(),
  combineSelectors({ removeDuplicatedProperties: true }),
  extractMediaQuery({
    combine: true, // http://bit.ly/31Oi5WK
    output: { // http://bit.ly/2Z6BrUX - ensures it ONLY combines media queries & doesn't make multiple files.
      path: null
    }
  })
]
const scssOptions = {
  file: path.resolve(__dirname, 'scss/sassyons.scss'),
  outputStyle: 'expanded' // http://bit.ly/31KRNol - nested, expanded, compact, compressed
}

scss.render(scssOptions, (err1, results1) => {
  if (err1) {
    console.error(err1)
    process.exit(1)
  }

  postCss(...postCssPlugins)
    .process(results1.css.toString(), { from: undefined })
    .then(({ css }) => {
      // Write the unminified css to a file.
      fs.writeFileSync(`${dir}/sassyons.css`, css, 'utf8')

      scss.render({ data: css, outputStyle: 'compressed' }, (err2, results2) => {
        if (err2) {
          console.error('ERROR 2:', err2)
          process.exit(1)
        }

        // Write the minified css to a file.
        fs.writeFileSync(`${dir}/sassyons.min.css`, results2.css.toString(), 'utf8')
      })
    })
})
