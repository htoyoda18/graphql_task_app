module InputTypes
  class Task < Types::BaseInputObject
    graphql_name 'TaskAttributes'
    argument :name, String, required: true
  end
end
