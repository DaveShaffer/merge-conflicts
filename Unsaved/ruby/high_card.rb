values = %w(2 3 4 5 6 7 8 9 10 jack queen king ace)
suits = %w(spades clubs hearts diamonds)
deck = []
players = []
puts "#{players.length} players so far.  Enter a player name or type 'play'."

input = gets.chomp
while input != 'play' do
  players << input
  puts "#{players.length} players so far.  Enter a player name or type 'play'."
  input = gets.chomp
end

suits.each do |suit|
  values.each do |value|
    #deck << ["#{value}, #{suit}"]
    deck << {value: value, suit: suit}
  end
end
deal_deck = deck.shuffle

players.each do |player|
  player = {player: player} + deal_deck.pop
end

#puts deal_deck.pop
#puts deal_deck
