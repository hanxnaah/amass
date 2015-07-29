describe SurveyResponsesController do
  describe '#create' do
    let(:survey_response_params) do
      { hear_about_us: 'Google', user_id: user.id.to_s }
    end

    describe 'when user is a filmmaker' do
      let(:user) { create(:filmmaker) }

      it 'creates a survey response' do
        expect do
          post(:create, survey_response: survey_response_params)
        end.to change(SurveyResponse, :count).by(1)

        expect(SurveyResponse.last.user).to eq(user)
        expect(SurveyResponse.last.hear_about_us).to eq('Google')
      end
    end

    describe 'when user is an organization' do
      let(:user) { create(:organization) }

      it 'creates a survey response' do
        expect do
          post(:create, survey_response: survey_response_params)
        end.to change(SurveyResponse, :count).by(1)

        expect(SurveyResponse.last.user).to eq(user)
        expect(SurveyResponse.last.hear_about_us).to eq('Google')
      end
    end

    describe 'when user_id is garbage' do
      let(:user) { double(id: 'garbage') }

      it 'raises an error' do
        expect do
          post(:create, survey_response: survey_response_params)
        end.to raise_error(Mongoid::Errors::DocumentNotFound)
      end
    end
  end
end
