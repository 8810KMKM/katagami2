class User < ApplicationRecord
  before_save { email.downcase! }

  has_many :comments

  VALID_EMAIL_REGEX=/\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, length: {maximum: 255},
            format: {with: VALID_EMAIL_REGEX},
            uniqueness: {case_sensitive: false}
  
  has_secure_password
  validates :password, presence: true, length: {minimum: 6 }, allow_nil: false
  validates :password_confirmation, presence: true, allow_nil: false
end
