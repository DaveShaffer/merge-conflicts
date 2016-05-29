# determine if a year is a leap year or not
​
def leap_year?(year)
  (year % 4) == 0 && !((year % 100) == 0) || (year % 400) == 0
end
​
def leap_year_version_2?(year)
  return year % 4 == 0 unless year % 100 == 0
  year % 400 == 0
end
​
def leap_year_version_3?(year)
  unless (year % 100 == 0)
    return year % 4 == 0
  end
  year % 400 == 0
end
​
puts "1995 : #{leap_year_version_3?(1995)}"
puts "1996 : #{leap_year_version_3?(1996)}"
puts "2000 : #{leap_year_version_3?(2000)}"
puts "1900 : #{leap_year_version_3?(1900)}"
