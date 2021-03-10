const fs = require('fs')
const fourZeroFourPage = fs.readFileSync('./public/404.html')

test('should show 404 page', () => {
  expect(fourZeroFourPage.toString()).toMatchSnapshot()
})