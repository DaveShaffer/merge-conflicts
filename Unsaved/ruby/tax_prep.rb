def compute_tax (gross_income)
  ndx = 0
  tax_owed = 0
  tax_rates = [{min_income: 0, tax_rate: 0.08},
              {min_income: 20000, tax_rate: 0.10},
              {min_income: 40000, tax_rate: 0.15},
              {min_income: 60000, tax_rate: 0.20}]
  while ndx < tax_rates.length
    if gross_income >= tax_rates[ndx][:min_income]
      tax_owed = gross_income * tax_rates[ndx][:tax_rate]
    end
    ndx += 1
  end
  puts "Income = $#{gross_income.to_f}  Tax Owed = $#{tax_owed}"
end

puts compute_tax (100)
puts compute_tax (9999)
puts compute_tax (10000)
puts compute_tax (20000)
puts compute_tax (39999)
puts compute_tax (40000)
puts compute_tax (50000)
puts compute_tax (75000)
puts compute_tax (500000)
puts compute_tax (1000000)
