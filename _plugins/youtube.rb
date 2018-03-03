module Jekyll
	class RenderYoutubeElement < Liquid::Tag
		def initialize(tag_name, markup, tokens)
			super
			@markup = markup
		end
  
		def render(context)
			site = context.registers[:site]
			@cloud_name = site.config['cloudinary']

			@attributes = {}

			@markup.scan(Liquid::TagAttributes) do |key, value|
				@attributes[key] = value.gsub(/^'|"/, '').gsub(/'|"$/, '')
			end

			# Get the path
			@video = @attributes['id']
			@thumbnail = @attributes['thumb'] ? "<img src=\"https://res.cloudinary.com/#{@cloud_name}/image/upload/w_1440/#{@attributes['thumb']}\" class=\"thumbnail\">" : "<img src=\"https://img.youtube.com/vi/#{@attributes['id']}/maxresdefault.jpg\" class=\"thumbnail\">"
			@class_start = @attributes['class'] ? "<div class=\"#{@attributes['class']}\">" : ''
			@class_end = @attributes['class'] ? "</div>" : ''

			"""
			#{@class_start}
				<figure id=\"#{@video}\" class=\"youtube\">
					#{@thumbnail}
					<noscript><div class=\"playing\"><iframe frameborder=\"0\" src=\"https://www.youtube.com/embed/#{@video}?autoplay=0&amp;autohide=1\"></iframe></div></noscript>
					<div class=\"play\"></div>
				</figure>
			#{@class_end}
			""".strip
		end
	end
end
  
Liquid::Template.register_tag('youtube', Jekyll::RenderYoutubeElement)