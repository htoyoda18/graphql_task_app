module Types
  class TaskType < Types::BaseObject
    field :name, String, null: false
    field :status, String, null: false
  end
end