tot_sec = 1
c_loop = 1
d_loop = 1
c_dist = 0
d_dist = 0
c_pts = 0
d_pts = 0
while tot_sec < 2504
  if c_loop > 137
    c_loop = 1
  end
  if d_loop > 173
    d_loop = 1
  end
  if c_loop < 11
    c_dist += 14
  end
  if d_loop < 12
    d_dist += 16
  end
  if c_dist >= d_dist
    c_pts += 1
  end
  if d_dist >= c_dist
    d_pts += 1
  end
  if tot_sec % 10 == 0
  end
tot_sec += 1
c_loop += 1
d_loop += 1
end
puts "time #{tot_sec -1}"
puts "Comet's distance #{c_dist}km, Dancer's distance #{d_dist}km"
puts "Comet's score #{c_pts}pts,  Dancer's score #{d_pts}pts"
