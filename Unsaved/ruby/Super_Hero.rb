class Person

  def initialize (name, age)
    @name = name
    @age = age
  end

  def to_s
    "#{@name} is #{@age} years old."
  end
end

class SuperHero < Person
  def initialize (name, age, superpower)
    super(name, age)
    @superpower = superpower
  end
  def to_s
    "#{@name} is #{@age} yrs old and has the superpower #{@superpower}"
  end
end

class Villian < Person
  def initialize (name, age, superpower, nemisis)
    super(name, age)
    @superpower = superpower
    @nemisis = nemisis
    #charisma = 14
  end
  def to_s
    "#{@name} is #{@age} yrs old, has the superpower #{@superpower} and #{@nemisis} is his nemisis."
  end
  def fight
    "Kneel before Zod!"
    #charisma += 1
    #{}"#{charisma}"
  end
end


wade = Person.new('Wade', 28)
DeadPool = SuperHero.new('Wade Willson', 28, 'Healing')

Clark = Person.new('Clark Kent', 25)
Superman = SuperHero.new('Superman', 25, "Flying")

Zod = Person.new('Zod', 567)
General_Zod = Villian.new('General Zod', 567, 'Flying', 'Superman')

puts "person #{wade.to_s}"
puts "person #{DeadPool.to_s}"
puts "person #{Clark.to_s}"
puts "person #{Superman.to_s}"
puts "person #{Zod.to_s}"
puts "person #{General_Zod.to_s}"
puts General_Zod
puts General_Zod.fight

