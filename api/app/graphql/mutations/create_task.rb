# api/app/graphql/mutations/create_task.rb
module Mutations
  class CreateTask < BaseMutation
    # 入力タイプの定義
    argument :params, Types::InputTaskType, required: true

    # 出力タイプの定義
    field :task, Types::TaskType, null: false

    # リゾルバメソッド
    def resolve(params:)
      task = Task.create!(name: params[:name], status: 'incomplete')
      { task: task }
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
