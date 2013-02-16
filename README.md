# Onestep

Onestep is a Rails gem which improves the user experience by temporarily disabling buttons and forms which have active requests in process.

## Installation

Add this line to your application's Gemfile:

    gem 'onestep'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install onestep

Once you've installed the gem, require it's JavaScript assets:

    // app/assets/javascripts/application.js
    //= require onestep/onestep

## Usage

TODO: Write usage instructions here

## TODO:

 1. Write a Heroku hosted Sinatra application which demos the functionality.
 2. Link to the application from this Readme.
 3. Make sure that the gem works with <button> tags.
 4. Consider initializing the jQuery so that it works automatically. Then add
    a class the users can attach to optout.
 5. Specify that the assets must be required after jQuery. I might be able to
    add jquery_ujs as a dependancy?

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
