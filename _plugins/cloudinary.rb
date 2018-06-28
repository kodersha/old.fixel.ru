require 'github/markup'

module Jekyll
	class RenderCloudinaryElement < Liquid::Tag
		def initialize(tag_name, markup, tokens)
			super
			@markup = markup
		end
  
		def render(context)
			site = context.registers[:site]

			@cloud_name = site.config['cloudinary']
			@cloud_size = site.config['cloudinary-size']

			@attributes = {}

			@markup.scan(Liquid::TagAttributes) do |key, value|
				@attributes[key] = value.gsub(/^'|"/, '').gsub(/'|"$/, '')
			end

			# Get the path
			@image = @attributes['src']
			@class = @attributes['class'] ? " #{@attributes['class']}" : ""
			@alt = @attributes['alt'] ? "<figcaption class=\"caption\">#{GitHub::Markup.render_s(GitHub::Markups::MARKUP_MARKDOWN, @attributes['alt'])}</figcaption>" : ""

			"""
			<figure class=\"picture #{@class}\">
				<a href=\"https://res.cloudinary.com/#{@cloud_name}/image/upload/#{@image}\" class=\"lightbox-image\" data-lightbox=\"image\">
					<img src=\"https://res.cloudinary.com/#{@cloud_name}/image/upload/#{@cloud_size}/#{@image}\" />
				</a>
				#{@alt}
			</figure>
			""".strip
		end
	end
end
  
Liquid::Template.register_tag('cloudinary', Jekyll::RenderCloudinaryElement)