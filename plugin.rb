# name: layouts-category
# about: A category widget that works with discourse-layouts
# version: 0.1
# authors: Evg - Angus McLeod

register_asset 'stylesheets/layouts-category.scss'

after_initialize do
  # add info category
  add_to_serializer(:basic_category, :categorqa, false) { object.custom_fields['categorqa'] }
end

DiscourseEvent.on(:layouts_ready) do
  DiscourseLayouts::WidgetHelper.add_widget('category', position: 'right', order: 'start')
end
