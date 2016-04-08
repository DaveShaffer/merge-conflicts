puts "Hello.  I'm C-3PO, human-cyborg relations"
puts "What is your name, young human?"
person = gets.chomp.capitalize
puts "It is a pleasure to meet you, #{person}.  Have you ever met a protocol droid before?"
person_answer_droid = gets.chomp.capitalize
puts "#{person_answer_droid}?  How interesting, for someone from around these parts."
puts "I'm terribly sorry for prying, but you don't by any chance go by the alias of Obi-Wan Kenobi, do you?"
person_answer_obiwan = gets.chomp.upcase
puts person_answer_obiwan

if person_answer_obiwan == ("YES" || "SURE" || "YEA" || "I DO")
  puts "Oh, marvelous!  Simply marvelous!  Say hello to R2-D2; he's been looking all over for you."
else
  binding.pry
  puts "I've really enjoyed speaking with you, #{person}, but if you'll please excuse me, I have to hellp my friend find someone named Obi-Wan Kenobi."
  puts "Enter you favorite farewell"
  fav_farwell = gets.chomp.capitalize
  puts "#{fav_farwell} to you too."
  puts "Well R2, I suppose we'll just have to keep looking."
  puts "R2-D2: (Agreeable droid noises)"
end
