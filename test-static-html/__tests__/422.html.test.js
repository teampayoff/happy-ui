const fs = require('fs')
const fourTwenetyTwoPage = fs.readFileSync('./public/422.html')

test('should show 422 page', () => {
  expect(fourTwenetyTwoPage.toString()).toMatchSnapshot()
})