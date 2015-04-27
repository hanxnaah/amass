describe OrganizationsController do
  describe '#create' do
    it 'renders a 201' do
      post(:create, organization: { contact_name: 'Bob' })
      expect(response.status).to eq 201
    end
  end
end
