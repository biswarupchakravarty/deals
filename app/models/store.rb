class Store < ActiveRecord::Base
  acts_as_mappable default_units: :kms

  validates :name, :address, presence: true
end
