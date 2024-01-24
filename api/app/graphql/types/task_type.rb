module Types
  class TaskType < Types::BaseObject
    field :name, String, null: false
    field :status, TaskStatusEnum, null: false
  end
end
