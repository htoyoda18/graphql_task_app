module Mutations
  class CreateTask < BaseMutation
    # 入力タイプの定義
    class CreateTaskInput < Types::BaseInputObject
      argument :name, String, required: true
    end

    # 出力タイプの定義
    field :task, Types::TaskType, null: false

    # リゾルバメソッド
    def resolve(name:)
      task = Task.create!(name: name)
      { task: task }
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
