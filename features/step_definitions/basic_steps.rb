When /^I visit the app$/ do
  visit '/production'
end

When /^I click the "([^"]*)" button$/ do |name|
  click_button(name)
end

Then /^I should see the "([^"]*)" overlay$/ do |overlay|
  page.should have_selector('div#overlay>div.'+overlay)
end
