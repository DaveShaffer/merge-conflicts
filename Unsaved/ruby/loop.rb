i = 0
rslt = ""
while i <= 100
  # Your code goes in here.
  rslt = i.to_s
  if i % 3 == 0
    rslt = "fizz"
  end
  puts rslt
  i = i + 1
end
