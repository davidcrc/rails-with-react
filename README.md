# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
# React-rails 

  gem 'react-rails', '~> 2.6', '>= 2.6.1'


  bundle install 


  rails webpacker:install 

  rails webpacker:install:react 
  
  rails generate react:install


# verify
  
  rails g react:component UbicacionPuntero

# create controller and route
  
  bin/rails generate controller Ubicacion index --skip-routes