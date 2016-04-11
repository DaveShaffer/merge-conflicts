def comp_ribbon (present_dims)
  #bow_rbn = present_dims[:length] * present_dims[:width] * present_dims[:height]
  #puts bow_rbn
  #box_rbn = 2 * (present_dims[:length] + present_dims[:width] + present_dims[:height] - long_dim(present_dims))
  #puts box_rbn
  #tot_rbn = bow_rbn + bow_rbn
  #tot_rbn
  puts "#{present_dims}"
  long_dim(present_dims)
end

def long_dim (box_dims)
  puts "#{box_dims}"
  long_dist = box_dims[0]
  jdx = 1
  puts "#{long_dist}"
  while jdx < box_dims.length
    if box_dims[jdx] > long_dist
      long_dist = box_dims[jdx]
    end
    jdx += 1
  end
  long_dist
end

arr_pres = {length: 2, width: 3, height: 4}
    y = comp_ribbon (arr_pres)
