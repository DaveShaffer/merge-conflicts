names = [ "Donald", "Daisy", "Huey", "Duey", "Luey" ]
numbers = [ 1, 3, 9, 11, 100 ]
fahrenheit_temps = [ -128.6, 0, 32, 140, 212 ]
names.each { |name| puts "Hello, #{name}"}
numbers.each { |number| puts number ** 2}
fahrenheit_temps.each do |temp|
  puts (temp - 32) * (5.0 / 9.0)
end
