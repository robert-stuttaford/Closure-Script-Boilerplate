When /^I visit the all\-specs page$/ do
  visit '/spec.html'
end

Then /^I should see no failing specs$/ do
  page.has_content? 'specs, 0 failures in'
end
