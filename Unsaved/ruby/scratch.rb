"The quick brown fox jumped over the lazy dog".split.each do |word|
   if word.length.even?
     puts word.downcase
   else
     puts word.upcase
   end
end
