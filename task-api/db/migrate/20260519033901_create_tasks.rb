class CreateTasks < ActiveRecord::Migration[8.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.date :due_date
      t.text :memo
      t.boolean :is_done

      t.timestamps
    end
  end
end
