module Types
  class TaskType < Types::BaseObject
    field :status, String, null: false
    field :name, String, null: false
  end
end
