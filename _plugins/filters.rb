module Jekyll
  module Filters
    def render_tags_list(tags)
      sorted_tags = tags.keys.sort_by! { |tag| tag.downcase }

      str = ''
      sorted_tags.each { |tag|
        str << '<li>' + tags[tag].size.to_s + ' - <a href="/tag/' + tag + '">' + tag + '</a></li>'
      }

      str
    end
  end
end