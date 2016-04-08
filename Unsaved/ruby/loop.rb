def fizbuz (mx_cnt)
  i = 1 #starting poing
  rslt = "" #init
  while i <= mx_cnt #count up
    rslt = i.to_s
    if i % 3 == 0
      rslt = "fizz"
      if i % 5 == 0
        rslt += "buzz"
      end
    elsif i % 5 == 0
      rslt = "buzz"
    end
    puts rslt
    i = i + 1
  end
end

fizbuz (30)
