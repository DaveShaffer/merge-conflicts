class TodoSerializer < ActiveModel::Serializer
  attributes :id, :title, :completed, :order, :location
end
