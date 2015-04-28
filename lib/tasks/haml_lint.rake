if Rails.env.development? || Rails.env.test?
  require 'haml_lint/rake_task'
  HamlLint::RakeTask.new do |t|
    t.files = ['app/']
  end
end
