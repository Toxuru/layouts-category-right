# name: layouts-category
# about: A category widget that works with discourse-layouts
# version: 0.1
# authors: Evg - Angus McLeod

register_asset 'stylesheets/layouts-category.scss'

DiscourseEvent.on(:layouts_ready) do
  DiscourseLayouts::WidgetHelper.add_widget('category', position: 'left', order: 'start')
end
