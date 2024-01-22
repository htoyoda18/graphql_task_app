module Types
  class InputTaskType < Types::BaseInputObject
    argument :name, String, required: true
  end
end
