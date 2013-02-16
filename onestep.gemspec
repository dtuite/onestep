# -*- encoding: utf-8 -*-
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'onestep/version'

Gem::Specification.new do |gem|
  gem.name          = "onestep"
  gem.version       = Onestep::VERSION
  gem.authors       = ["David Tuite"]
  gem.email         = ["dtuite@gmail.com"]
  gem.description   = %q{Prevent users sending duplicate requests by rapidly clicking links and buttons.}
  gem.summary       = %q{Onestep is a drop in JS modification which prevents users from submitting forms with idential information multiple times. Onestep disables the submission button until the first request has returned before re-enabling the submit button. THe same behavior is also applied to remote buttons and links.}
  gem.homepage      = ""

  gem.files         = `git ls-files`.split($/)
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.require_paths = ["lib"]
end
