class Subject <  ApplicationRecord
  belongs_to :user
  enum status: %i[created published retired]


  validates :image, presence: true
  validates :title, presence: true
  validates :text, presence: true

end
