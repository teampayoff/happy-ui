const fs = require('fs')
const browserSupport = fs.readFileSync('./public/browser-support.html')

test('should show 404 page', () => {
  expect(browserSupport.toString()).toMatchSnapshot()
})