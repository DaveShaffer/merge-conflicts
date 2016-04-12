class Bank_Account
  def initialize (name, balance)
    @name = name
    @balance = balance
  end
  attr_reader :name, :balance
  def deposit (amount)
    @balance = @balance + amount
    "With a deposit of #{amount} dollars, the new balance for #{@name} is #{@balance} dollars."
  end
  def withdraw (amount)
    @balance = @balance - amount
    "With a withdrawal of #{amount} dollars, the new balance for #{@name} is #{@balance} dollars."
  end
  def to_s
    "#{@name} has a balance of #{@balance} dollars."
  end
end

  checking = Bank_Account.new('John J. Rockefeller', 10)
  saving = Bank_Account.new('Mel Pettybone', 200)

  puts checking.to_s
  puts saving.to_s
  puts checking.deposit (100)
  puts saving.withdraw (40)
