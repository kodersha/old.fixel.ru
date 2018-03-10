module Jekyll
    module RussianDatesShort
        MONTHS = {
            "01" => "янв",
            "02" => "фев",
            "03" => "мар",
            "04" => "апр",
            "05" => "мая",
            "06" => "июн",
            "07" => "июл",
            "08" => "авг",
            "09" => "сен",
            "10" => "окт",
            "11" => "ноя",
            "12" => "дек"}

        def russian_date_short(date)
            time_value = time(date)
            day = time_value.strftime("%d") # leading zero is replaced by a space
            month = time_value.strftime("%m")
            year = time_value.strftime("%y")
            return day + ' ' + MONTHS[month] + ' ' + year
        end
    end
end

Liquid::Template.register_filter(Jekyll::RussianDatesShort)