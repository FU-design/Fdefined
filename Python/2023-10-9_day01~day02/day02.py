"""
基本的数据类型：
1、整型: long int (python2.x都有, python3.x只存在int)
2、浮点型: 小数
3、字符串型: 字符串
4、布尔型: True or False (区分大小写)
5、复数型: 形如3 + 5j
"""


""""
类型判断函数 type() 的使用
"""
a = 1
b = "2"
c = False
d = True
e = 2 + 5j
f = 2.8
print(type(a))# <class 'int'>
print(type(b))# <class 'str'>
print(type(c))# <class 'bool'>
print(type(d))# <class 'bool'>
print(type(e))# <class 'complex'>
print(type(f))# <class 'float'>

"""
输入表达式和占位符的用法
"""
a = int(input("a = "))
b = int(input("b = "))
print('%d + %d = %d',a,b,a+b) # %d + %d = %d 3 9 12
print('%d - %d = %d',a,b,a-b) # %d - %d = %d 3 9 -6
print('%d // %d = %f',a,b,a//b) # %d // %d = %f 3 9 0 :>>> 整除
print('%d / %d = %f',a,b,a/b) # %d / %d = %f 3 9 0.3333333333333333 :>>> 可有小数
print('%d * %d = %d',a,b,a*b) # %d * %d = %d 3 9 27 :>>> 相乘  
print('%d %% %d = %d',a,b,a%b) # %d %% %d = %d 3 9 3 :>>> 取模
print('%d ** %d = %d',a,b,a**b) # %d ** %d = %d 3 9 19683 :>>> 3^9


"""
比较运算符和逻辑运算符的用法
( 比较运算符和JavaScript一致, 逻辑运算符不同 )
"""

t0 = 0 > 1
t1 = 1 < 2
t2 = 3 == 3
t3 = t0 and t1
t4 = t0 or t1
t5 = not(1!=2)
print(t0) # False
print(t1) # True
print(t2) # True

print(t3) # False
print(t4) # True
print(t5) # False