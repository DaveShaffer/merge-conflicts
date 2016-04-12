class Traffic_light
  def initialize(name, color)
    @name = name
    @color = color
  end
  def to_s
  "#{name} is #{color}."
  end
  attr_reader :name, :color
  def go_red
    @color = "red"
  end
  def go_green
    @color = "green"
  end
  def go_yellow
    @color = "yellow"
  end
  def go_next(pntr, colors)
    @color = colors[pntr]
  end
end

pntr = 0
colors = ["red", "green", "yellow"]
light1 = Traffic_light.new('North and Peachtree', "red")

10.times do
  pntr += 1
  if pntr > 2
    pntr = 0
  end
  puts light1.to_s
  light1.go_next(pntr, colors)
end

#light1.go_green
#puts light1.to_s
#light1.go_next(pntr, colors)
#light1.go_yellow
#puts light1.to_s
#light1.go_next(pntr, colors)
#light1.go_red
#puts light1.to_s
