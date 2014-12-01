app = angular.module('home', [])

require('./controllers')(app)
require('./directives')(app)
#require('./services')(app)
#require('./factories')(app)

module.exports = app