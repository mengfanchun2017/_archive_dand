#python find learning
s = 'It is a new day, I am going to have a nice day! Day day up! Day day happy!'
t = 'day'

print('---testing1:with out i, i default = 0')
#means search start from 0 (the first letter in s)
print(s.find(t))
print('---testing2:with i <= 12,where still first t is located 12')
#means search start from i (the first letter in s)
i = 12
print ('i = ',i)
print(s.find(t,i))
print('---testing3:with i >= 12,where returns next t location')
#means search start from i (the first letter in s)
i = 43
print ('i = ',i)
print(s.find(t,i))
print(s[:i].find(t))

print('---explain s[i]---')
i = 12
print ('i = ',i)
print(s[:i])
print(s)
print(s.find(t,i))
print(s[:i].find(t))
print('---testing4:with i >= 12,where returns next t location')
#means search start from i (the first letter in s)
