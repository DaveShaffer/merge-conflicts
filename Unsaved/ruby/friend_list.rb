my_friends = ["one", "two", "three"]
def print_friends(list_of_friends)
  puts "Hi there, these are my friends: "
  list_of_friends.each do |friend|
    puts friend
  end
end
print_friends(my_friends)
