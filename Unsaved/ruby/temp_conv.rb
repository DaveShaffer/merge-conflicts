
def convert_to_celsius (temp_f)
  (temp_f.to_f - 32.0) * (5.0/9.0)
end

def convert_to_fahrenheit (temp_c)
  temp_c.to_f * (9.0/5.0) + 32.0
end

body_temp_f = 98.6
puts "Temp of body in Fahrenheit is #{body_temp_f}"
body_temp_c = convert_to_celsius(body_temp_f)
puts "Temp of body in Celsius is #{body_temp_c}"
puts "The doubly converted temp is #{convert_to_fahrenheit(body_temp_c)}"
