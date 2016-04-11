ninja_turtle = {name: "Michelangelo", weapon: "Nunchuks", radical: true}
ninja_turtle[:age] = 10
ninja_turtle.delete_if {|key, value| key == :radical}
ninja_turtle[:pizza_toppings] = ["cheese", "pepperoni", "peppers"]

puts ninja_turtle
puts ninja_turtle[:pizza_toppings][0]

key_list = []
ninja_turtle.each_key{|key| key_list.push(key)}
puts "#{key_list}"

ninja_turtle.each {|key, value| puts "#{key} is equal to #{value}"}

