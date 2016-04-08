def is_it_hot (cur_tmp, nw_tmp)
  cur_tmp > nw_tmp
end
puts "What is the current temperature?"
temp_fahr = gets.chomp.to_i
puts "Does the A/C work?"
ac_working = gets.chomp.upcase
puts "What temperature would you like it to be?"
new_temp = gets.chomp.to_i
if (ac_working[0] == "Y")
  if is_it_hot temp_fahr, new_temp
    puts "Turn on the A/C, please."
  end
elsif is_it_hot temp_fahr, new_temp
  puts "Fix the A/C now!  It's hot!"
  else puts "Fix the A/C whenever you have the chance... It's cool..."
end



