When /^I visit the app$/ do
  visit '/dev'
end

Then /^I should see "(.*)\."$/ do |text|
  page.has_content? text
end
