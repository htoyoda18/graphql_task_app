module Types
  class TaskType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :status, TaskStatusEnum, null: false
  end
end
