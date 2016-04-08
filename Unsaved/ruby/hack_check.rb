x = 0
ndx = 0
idx = 0
dig_cnt = 0
lc_letter = 0
uc_letter = 0
spec_char = 0
broken_rules = 0
psswrd_chars = []

require 'io/console' # Input password
print 'Please enter your password: '
new_psswrd = STDIN.noecho(&:gets).chomp # Keep it secret
puts "" # Line break

if new_psswrd.length < 8 # Is password too short?
  puts "Password is too short: must have at least 8 characters"
  broken_rules += 1
end # End if too short
if new_psswrd.length > 16 # Is password too long?
  puts "Password is too long: must not have more than 16 characters"
  broken_rules += 1
end # End if too long
#puts new_psswrd.length

while idx < new_psswrd.length # Check each char in the password
  x = new_psswrd[idx]
  if (x >= "0") && (x <= "9") # Is char a digit?
    dig_cnt += 1
  end #End if digit
  if (x >= "a") && (x <= "z") # Is char a lowercase letter?
    lc_letter += 1
  end # End if lowercase letter
  if (x >= "A") && (x <= "Z") # Is char an uppercase letter?
    uc_letter += 1
  end # End if uppercase letter
  if (x == "!" || x == "@" || x == "#" || x == "$" || x == "^" || x #== "&" || x == "?" || x == "<" || x == ">") # Is char special?
    spec_char += 1
  end # End if special char
  idx += 1
end # End while check chars
#puts dig_cnt, lc_letter, uc_letter

if dig_cnt < 2 # Are there at least 2 digits?
  puts "Password must have at least 2 digits"
  broken_rules += 1
end # End if 2 digits
if lc_letter < 2 # Are there at least 2 lowercase letters?
  puts "Password must have at least 2 lowercase letters"
  broken_rules += 1
end # End if 2 lowercase letters
if uc_letter < 2 # Are there at least 2 uppercase letters?
  puts "Password must have at least 2 uppercase letters"
  broken_rules += 1
end # End if 2 uppercase letters
if spec_char < 1 # Is there at least 1 special chars?
  puts "Password must have at least 1 special character (!, @, #, $, ^, &, ?, <, >)"
  broken_rules += 1
end # End if spec chars

if broken_rules > 0 # Are there any rule violations?
  puts "Password has a total of #{broken_rules} violations." # Yes
  else puts "Password is valid." # No
end # End if rule violations

