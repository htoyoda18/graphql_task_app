module Mutations
  class DeleteTask < BaseMutation
    argument :id, ID, required: true

    field :id, ID, null: false

    def resolve(id:)
      task = Task.find(id)
      task.destroy!
      { id: id }
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
