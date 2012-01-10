#\ -p 3000 -E none
require 'closure'
Closure.add_source '.', '/'
Closure.add_source :soy, '/soy'
Closure.add_source '../closure-library', '/closure-library'
Closure.add_source '../app', '/app'
Closure.add_source '../jasmine', '/jasmine'

use Closure::Middleware, 'index'

run Rack::File.new '.'
