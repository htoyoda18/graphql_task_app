module Mutations
  class UpdateTask < BaseMutation
    argument :id, ID, required: true
    argument :params, Types::UpdateTaskType, required: true

    field :task, Types::TaskType, null: false

    def resolve(id:, params:)
      task = Task.find(id)
      task.update!(params.to_h)
      { task: task }
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
