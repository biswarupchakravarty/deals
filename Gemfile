source 'https://rubygems.org'
ruby "2.2.3"

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.1'

# Yes, bootstrap pls
gem 'bootstrap-sass', '~> 3.3.5'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# some hardcore authentication please! tyvm!
gem 'devise'

# Use pg as the database for Active Record
gem 'pg'

# wait, how far is it?
gem 'geokit-rails'

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  # spice up them error pages yo!
  gem 'better_errors'

  # and add interactivity as well!
  gem 'binding_of_caller'

  # stop, hammer time!
  gem 'pry'
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
