Then "an admin notification is sent titled '$title'" do |title|
  mail = ActionMailer::Base.deliveries.last
  expect(mail.to).to eq(['admin@amassmedia.org'])
  expect(mail.subject).to include(title)
end
