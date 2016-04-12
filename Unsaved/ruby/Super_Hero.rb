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

  def initialize (name, age, superpower, identity)
    super(name, age)
    @superpower = superpower
    @identity = identity
  end
  def to_s
    "#{@name} is #{@age} yrs old and has the superpower #{@superpower} #{tell_identity}"
  end

#private

  def tell_identity
    "My secret identity is #{@identity}"
  end
  #end
end

class Villian < SuperHero
#charisma = 14
  def initialize (name, age, superpower, identity, nemisis, charisma)
    super(name, age, superpower, identity)
    #@superpower = superpower
    @nemisis = nemisis
    @charisma = charisma
  end
  def to_s
    "#{@name} is #{@age} yrs old, has the superpower #{@superpower} and #{@nemisis} is his nemisis. #{tell_identity}"
  end
  def fight
    "Kneel before Zod!  General Zod's charisma is #{@charisma + 1}"
    #@charisma += 1
    #"#{charisma}"
  end
  def charisma
    14
  end
end

class Sidekick < SuperHero
  def initialize (name, age, superpower, identity, training, ability, vehicle, allegience)
    super(name, age, superpower, identity)
    @training = training
    @ability = ability
    @vehicle = vehicle
    @allegience = allegience
  end
  def to_s
    "#{@name} is #{@age} yrs old, trained for #{@training} yrs, has the ability of #{@superpower}, drives the #{@vehicle} and is allied to #{@allegience}"
  end
  def train
    #@training += 1
    puts "Kato now has #{@training + 1} yrs of experience."
  end
end

wade = Person.new('Wade', 28)
DeadPool = SuperHero.new('DeadPool', 28, 'Healing', 'Wade Willson')

Clark = Person.new('Clark Kent', 25)
Superman = SuperHero.new('Superman', 25, 'Flying', 'Clark Kent')

Bruce = Person.new('Bruce Lee', 23)
Kato = Sidekick.new('Kato', 23, 'kung fu', 'Bruce Lee', 10, 'cooking', 'Hornet Mobile', 'Green Hornet')

Zod = Person.new('Zod', 567)
General_Zod = Villian.new('General Zod', 567, 'Flying', 'Zod', 'Superman', 14)

#puts "Person #{wade.to_s}"
puts "SuperHero #{DeadPool.to_s}"
#puts "Person #{Clark.to_s}"
puts "SuperHero #{Superman.to_s}"
#puts "Person #{Bruce.to_s}"
puts "Sidekick #{Kato.to_s}"
#puts "Person #{Zod.to_s}"
puts "Villian #{General_Zod.to_s}"
puts General_Zod.fight
puts Kato.train
#puts Superman.tell_identity
#puts DeadPool.tell_identity
#puts Zod.tell_identity
#puts Kato.tell_identity



