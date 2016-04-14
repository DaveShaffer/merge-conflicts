values = %w(2 3 4 5 6 7 8 9 10 jack queen king ace) #card face values
suits = %w(spades clubs hearts diamonds) # card suits
deck = [] # Unshuffled cards
players = [] # List of players
dealt_cards = [] # List of players and their cards
high_card = 0
winner = ""


def input_players (players)
  input = ""
  while input != 'Play' do
    if input != ""
      players << input.capitalize
    end # End if input is blank
    puts "#{players.length} players so far.  Enter a player name or type 'play'."
    input = gets.chomp
  end # End while not 'play'
  puts players
end

while players.length == 0
  input_players (players)
end

values.each_with_index do |value, index| # Create deck of cards
    suits.each do |suit|
    deck << {suit: suit, value: value, index: index}
  end
end
deal_deck = deck.shuffle # Shuffle the deck

players.each do |player|
  new_card = deal_deck.shift
  dealt_cards << {player: player, card: new_card}
end
puts dealt_cards

dealt_cards.each do |card|
  if card[:card][:index] > high_card
    high_card = card[:card][:index]
    winner = card[:player]
  end
end

puts winner
