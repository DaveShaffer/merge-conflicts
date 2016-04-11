def comp_paper (present_dims)
  area_end = present_dims[:width] * present_dims[:height]
  area_side = present_dims[:length] * present_dims[:height]
  area_top = present_dims[:length] * present_dims[:width]
  tot_paper = 2 * (area_end + area_side + area_top) + (find_smlst_area [area_end, area_side, area_top])
end

def find_smlst_area (box_dims)
  sm_rslt = box_dims[0]
  ndx = 1
  while ndx < box_dims.length
    if box_dims[ndx] < sm_rslt
      sm_rslt = box_dims[ndx]
    end
    ndx += 1
  end
  sm_rslt
end

def comp_ribbon (present_dims)
  bow_rbn = present_dims[:length] * present_dims[:width] * present_dims[:height]
  box_rbn = 2 * (present_dims[:length] + present_dims[:width] + present_dims[:height] - long_dim(present_dims))
  tot_rbn = bow_rbn + box_rbn
  tot_rbn
end

def long_dim (box_dims)
  long_dist = box_dims[:length]
  if box_dims[:width] > long_dist
    long_dist = box_dims[:width]
  end
  if box_dims[:height] > long_dist
    long_dist = box_dims[:height]
  end
  long_dist
end

def print_rslts (arr_pres)
  all_paper = 0
  all_rbn = 0
  indx = 0
  while indx < arr_pres.length
    x = comp_paper (arr_pres[indx])
    y = comp_ribbon (arr_pres[indx])
    puts "For present #{indx + 1} you need"
    puts "#{x} sq ft of paper and"
    puts "#{y} ft of ribbon."
    puts " "
    indx += 1
    all_paper += x
    all_rbn += y
  end
  puts "Total paper is #{all_paper} sq ft and"
  puts "Total ribbon is #{all_rbn} ft."
end

pres_list = [{length: 2, width: 3, height: 4}, {length: 1,width: 1, height: 10}]
print_rslts(pres_list)
