wine_cellar = [
  {:label => "Rutherford Hill", :type => "Chardonnay", :color => "white"},
  {:label => "Nina Veneto", :type => "Pinot Grigio", :color => "white"},
  {:label => "Wairau River", :type => "Sauvignon Blanc", :color => "white"},
  {:label => "Tangley Oaks", :type => "Merlot", :color => "red"},
  {:label => "Chimney Rock", :type => "Cabernet Sauvignon", :color => "red"},
  {:label => "Sanford", :type => "Pinot Noir", :color => "red"},
  {:label => "Alderbrook", :type => "Pinot Noir", :color => "red"},
  {:label => "Colavita", :type => "Pinot Noir", :color => "red"},
  {:label => "Markham", :type => "Chardonnay", :color => "white"},
  {:label => "Angeline", :type => "Pinot Noir", :color => "red"}
]

def add_bottle (cellar)
  new_bottle = {}
  puts "Enter label"
  new_bottle[:label] = gets.chomp
  puts "Enter type"
  new_bottle[:type] = gets.chomp
  puts "Enter color"
  new_bottle[:color] = gets.chomp
  puts new_bottle
  cellar << new_bottle
end
def pick_bottle (cellar)
  #x = prng.rand(cellar.length)
  prng = Random.new
  #puts cellar.length
  #x = prng.rand(cellar.length)
  #puts x
  x = cellar.sample
  #cellar[x]
end
def list_color (color, cellar)
  wine_list = []
  wine_cellar.each do |wine|
    if wine[:color] == color
      wine_list << wine
      put wine_list
    end
  end
end

add_bottle (wine_cellar)
#puts wine_cellar
puts pick_bottle (wine_cellar)
#puts list_color ("white", wine_cellar)
