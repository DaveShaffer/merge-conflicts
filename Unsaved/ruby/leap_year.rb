
def leap?(the_year)
  #if the_year % 4 == 0
    #rslt = true
    #if the_year % 100 == 0
      #rslt = false
      #if the_year % 400 == 0
        #rslt = true
      #end
    #end
  #end
  #(the_year % 4) == 0 && !((the_year % 100) == 0) || (the_year % 400) == 0
  unless (the_year % 100 == 0)
    return the_year % 4 == 0
  end
  the_year % 400 == 0

  #puts "#{the_year} is a leap yr - #{rslt}"
end

puts "1996 #{leap?(1996)}"
puts "1997 #{leap?(1997)}"
puts "1900 #{leap?(1900)}"
puts "2000 #{leap?(2000)}"
