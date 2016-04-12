people = [
  { name: "Jack", age: 16 },
  { name: "Sam", age: 21 },
  { name: "Jill", age: 23 },
  { name: "Paul", age: 20 },
  { name: "Mike", age: 16 },
  { name: "Stan", age: 70 },
  { name: "Chris", age: 17 },
  { name: "Julie", age: 45 },
  { name: "Suzy", age: 65 },
  { name: "Eli", age: 28 },
  { name: "Katie", age: 50 },
  { name: "Ben", age: 33 }
]
accepted = []
for patron in people do
  #puts patron
  patron[:age] < 21 ? patron[:served] = false : patron[:served] = true
  if patron[:age] >= 18 && accepted.length < 8
    accepted.push(patron)
  end
end
puts accepted
