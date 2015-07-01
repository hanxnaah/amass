When 'I sign up as a follower with $email' do |email|
  visit '/'
  expect(page).to have_content('Tell stories that matter')

  within '[ng-controller=FollowCtrl]' do
    fill_in :email, with: email
    choose 'Other'

    expect do
      click_button 'KEEP ME POSTED'
      expect(page).to have_content('Thanks for signing up!')
    end.to change(Follower, :count).by(1)
      .and change(ActionMailer::Base.deliveries, :length).by(1)
  end

  follower = Follower.last
  expect(follower.email).to eq(email)
  expect(follower.type).to eq('other')
end
