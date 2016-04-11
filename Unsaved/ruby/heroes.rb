planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
puts "#{planeteers[1]}"
planeteers.push("Heart")

idx = 0
new_list = []
while idx < planeteers.length
  if planeteers[idx] != "Captain Planet"
    new_list.push(planeteers[idx])
  end
  idx += 1
end
planeteers = new_list
puts "#{planeteers}"

heroes = planeteers + rangers
puts "#{heroes}"
puts "#{heroes.sort}"
puts "#{heroes.shuffle}"
puts "#{heroes[rand(heroes.length)]}"

ndx = 0
b_heroes = []
while ndx < heroes.length do
  if heroes[ndx].start_with?("B")
    b_heroes << heroes[ndx]
  end
  ndx += 1
end
puts "#{b_heroes}"

