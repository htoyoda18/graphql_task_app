module Types
  class UpdateTaskType < Types::BaseInputObject
    argument :name, String, required: true
    argument :status, TaskStatusEnum, required: true
  end
end
