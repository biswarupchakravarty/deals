source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.1'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# some hardcore authentication please! tyvm!
gem 'devise'

# Use pg as the database for Active Record
gem 'pg'

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :production do
  # For Heroku. See https://github.com/heroku/rails_12factor
  gem 'rails_12factor'

  # Yes, Passenger!
  gem 'passenger'

  # Yes indeed.
  # See: https://github.com/alexspeller/non-stupid-digest-assets
  # gem 'non-stupid-digest-assets'

  # Used to automatically sync assets between Rails and S3
  # See https://github.com/rumblelabs/asset_sync
  # gem 'asset_sync'

  # New Relic for reporting!
  gem 'newrelic_rpm'
end
