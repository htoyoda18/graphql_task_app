module Types
  class TaskStatusEnum < Types::BaseEnum
    value 'complete', 'タスクが完了した状態'
    value 'incomplete', 'タスクが未完了の状態'
  end
end
