first_names = [ "Donald", "Daisy", "Daffy" ]
full_names = first_names.map { |name| name + " Duck"}
puts full_names

numbers = [ 1, 3, 9, 11, 100 ]
sq_numbers = numbers.map { |num| num ** 2}
puts sq_numbers

fahrenheit_temps = [ -128.6, 0, 32, 140, 212 ]
c_temps = fahrenheit_temps.map { |f_temp| (f_temp - 32) * (5.0 / 9.0)}
puts c_temps
