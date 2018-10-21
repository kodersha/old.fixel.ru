require 'github/markup'

module Jekyll
	class RenderImageElement < Liquid::Tag
		def initialize(tag_name, markup, tokens)
			super
			@markup = markup
		end
  
		def render(context)
			@attributes = {}

			@markup.scan(Liquid::TagAttributes) do |key, value|
				@attributes[key] = value.gsub(/^'|"/, '').gsub(/'|"$/, '')
			end

			# Get the path
			@image = @attributes['src']
			@class = @attributes['class'] ? " #{@attributes['class']}" : ""
			@alt = @attributes['alt'] ? "<figcaption class=\"caption\">#{GitHub::Markup.render_s(GitHub::Markups::MARKUP_MARKDOWN, @attributes['alt'])}</figcaption>" : ''

			"""
			<figure class=\"picture#{@class}\">
				<img src=\"/media/#{@image}\" data-action=\"zoom\"/>
				#{@alt}
			</figure>
			""".strip
		end
	end
end
  
Liquid::Template.register_tag('image', Jekyll::RenderImageElement)