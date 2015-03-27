describe OrganizationsController do
  describe '#create' do
    it 'renders a 201' do
      post(:create)
      expect(response.status).to eq 201
    end
  end
end
