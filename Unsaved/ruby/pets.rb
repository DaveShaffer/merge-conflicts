class Pet
  # initialize is Ruby's constructor function
  def initialize(name, type, age, owner, weight)
    @name = name  # JS: this.name
    @type = type  # JS: this.type
    @age = age
    @owner = owner
    @weight = weight
  end
  def to_s
    "#{@name} is a #{@age} year old #{@type}, owned by #{@owner} weighing #{@weight} lbs."
  end
  def inc_age
    @age = @age + 1
  end
  def speak
    if (@type == 'Dog')
      "#{@name} says woof, woof"
    elsif (@type == 'Cat')
      "#{@name} says meow"
    else
      "#{@name} says hello"
    end
  end



  attr_reader :name, :type, :owner, :age
  #attr_accessor :age
end

snoopy = Pet.new('Snoopy', 'Dog', 7, 'Charlie', 20)
message = "Hello #{snoopy}"
puts message
puts snoopy.speak


felix = Pet.new('Felix', 'Cat', 4, 'Lucy', 12)
puts felix.speak
felix.inc_age
puts "Felix is #{felix.age} years old"
puts felix
