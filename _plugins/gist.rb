module Jekyll
	class RenderGistElement < Liquid::Tag
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
			@gist = @attributes['src']
			@class_start = @attributes['class'] ? "<div class=\"#{@attributes['class']}\">" : ''
			@class_end = @attributes['class'] ? "</div>" : ''

			"""
			#{@class_start}
				<script src=\"https://gist.github.com/#{@gist}.js\"></script>
			#{@class_end}
			""".strip
		end
	end
end
  
Liquid::Template.register_tag('gist', Jekyll::RenderGistElement)