puts "How old are you?:"

user_input = gets.chomp.to_i

if user_input > 10
  puts "You are older than ten"
elsif user_input < 10
  puts "Under 10"
else
  puts "You are 10"
end
