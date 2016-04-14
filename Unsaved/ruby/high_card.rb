values = %w(2 3 4 5 6 7 8 9 10 jack queen king ace)
suits = %w(spades clubs hearts diamonds)
deck = []
players = []
dealt_cards = []
high_card = 0
#puts "#{players.length} players so far.  Enter a player name or type 'play'."
input = ""
#input = gets.chomp
while input != 'play' do
  if input != ""
    players << input
  end
  puts "#{players.length} players so far.  Enter a player name or type 'play'."
  input = gets.chomp

end
puts players
values.each_with_index do |value, index|
    suits.each do |suit|

    deck << {suit: suit, value: value, index: index}
  end
end
deal_deck = deck.shuffle

players.each do |player|
  new_card = deal_deck.shift
  dealt_cards << {player: player, card: new_card}
end
puts dealt_cards

#dealt_cards.each do |card: index|
#  if index > high_card
#    high_card = index
#  end
#end
puts dealt_cards[0][:index]
