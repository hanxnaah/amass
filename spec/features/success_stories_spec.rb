feature 'success stories flow' do
  scenario 'scroll through success stories' do
    visit '/'
    expect(page).to have_content('Success Stories')

    expect(page).to have_content('Community Yoga Project')
    expect(page).to have_no_content('Labor Link')

    find('.slick-next').click
    expect(page).to have_content('Labor Link')
    expect(page).to have_no_content('Community Yoga Project')

    within_frame 'vimeo-116570432' do
      # expect(page).to have_css('#player')
    end
  end
end
