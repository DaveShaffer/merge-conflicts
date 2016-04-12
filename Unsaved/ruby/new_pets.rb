class Pet
  # initialize is Ruby's constructor function
  def initialize(name, age, owner, weight)
    @name = name  # JS: this.name
    #@type = type  # JS: this.type
    @age = age
    @owner = owner
    @weight = weight
  end
  def to_s
    "#{@name} is a #{@age} year old #{type}, owned by #{@owner} weighing #{@weight} lbs."
  end
  attr_reader :name, :age, :owner
  def inc_age
    @age = @age + 1
  end
  def speak
    "#{@name} says hello"
  end
  def type
    'Huh?'
  end
end



class Dog < Pet
  def speak
    "#{@name} says woof, woof"
  end
  def type
    'Dog'
  end
end

class Husky < Dog
  def speak
    "#{@name} says howl"
  end
end

class Cat < Pet
  def speak
    "#{@name} says meow"
  end
  def type
    'Cat'
  end
end

pets = [
  Dog.new('Snoopy', 7, 'Charlie', 20),
  Cat.new('Felix', 4, 'Lucy', 12),
  Husky.new('Miko', 13, 'Mike', 50)
]
pets.each { |pet| puts pet.speak}
pets.each { |pet| puts pets.class.ancestors}

#snoopy = Dog.new('Snoopy', 7, 'Charlie', 20)
#message = "Hello, #{snoopy}"
#puts message
#puts snoopy.speak


#felix = Cat.new('Felix', 4, 'Lucy', 12)
#puts felix.speak
#felix.inc_age
#puts "Felix is #{felix.inc_age} years old"
#puts felix
tweetie = Pet.new('Tweetie', 3.5, 'Joe', 1)
puts tweetie
puts tweetie.speak
