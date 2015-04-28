if Rails.env.development? || Rails.env.test?
  require 'scss_lint/rake_task'
  SCSSLint::RakeTask.new do |t|
    t.files = ['app/']
  end
end
