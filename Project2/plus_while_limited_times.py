
##密码尝试3遍就强制推出

password = 'iloveuda'

trying = 3

while trying >= 1:
    s = input('Entre password: ')
    if s == password:
        print('Access Accept')
        break
    else:
        trying = trying - 1
        print('Wrong password, left tring times: {}'.format(trying))