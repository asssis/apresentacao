class CreateSubjects < ActiveRecord::Migration[6.0]
  def change
    create_table :subjects do |t|
      t.string :title, limit: 100
      t.string :image, limit: 4000
      t.string :text, limit: 500
      t.integer :status

      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
