class Post < ApplicationRecord
    validates :title, presence: true
    has_rich_text :body
    has_many :comments, dependent: :destroy
end
