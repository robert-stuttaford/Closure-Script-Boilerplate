When /^I visit the "(.*)" functional test/ do |test|
  visit '/dev?ns:app.functionals.' + test
end

Then /^I should see "(.*)\."$/ do |text|
  page.has_content? text
end
