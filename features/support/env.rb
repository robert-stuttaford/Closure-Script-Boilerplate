require 'capybara'
require 'capybara-webkit'
require 'capybara/cucumber'
require 'capybara/dsl'
require 'rubygems'
require 'spork'

Spork.prefork do
  Capybara.app_host = 'http://localhost:3000'
  Capybara.javascript_driver = :webkit
  Capybara.run_server = false
  Capybara.default_selector = :css
end

Spork.each_run do
end
