'''
除法
'''
# 一般情况下，不能整除的，以浮点数输出结果
import math
import cmath
from turtle import *
print(1 / 2)  # 0.5
print(1 / 3)  # 0.3333333333333333
print(1 / 125)  # 0.008

# 可使用  '//' 将不能整除的结果，去除小数 对于整除运算，需要明白的一个重点是它向下圆整结果（(不是四舍五入)）。
print(1 // 2)  # 0
print(1 // 3)  # 0
print(1 // 125)  # 0

'''
取余 
x % y  等价于x - ((x // y) * y)
解读：-3 ** 2 == 9 余 1,结果为 -1 ，因为结果为负数，圆整后离 0 更远因此，该结果需向下圆整为 -2
'''
print(1 % 2)  # 1
print(1 % 125)  # 1
print(2.75 % 0.5)  # 0.25
print(10 % -3)  # -2

'''
（乘方）求幂运算符
解读: 乘方运算符的优先级比求负(单目减)运算符的高s
'''
print(2**3)  # 8
print(-3**2)  # -9  -3**2 等价于 -(3**2)
print((-3)**2)  # 9

'''
十六进制，八进制，二进制
'''

'''
变量
使用Python变量前必须给它赋值,因为Python变量没有默认值
'''
x = 'hello world!'
x = 'hello py'
print(x)  # hello py


'''
print & 获取用户输入 & if语句
'''
# a = input("a:")
# b = input("b:")
# if int(a) < 5:
#     print(int(a) + int(b))
# if int(a) > 5:
#     print(int(a) - int(b))

'''
内置函数 & 自定义函数
'''
# 内置函数

# pow(x, y) <==> x ** y : 幂运算
# abs(a) <==> | a | :取绝对值
# round: 将浮点数圆整为与之最接近的整数

# 自定义函数


def computed():
    a = input("a:")
    b = input("b:")
    if int(a) < 5:
        print(int(a) + int(b))
    if int(a) > 5:
        print(int(a) - int(b))


'''
模块
1. 我们使用import导入模块,再以module.function的方式使用模块中的函数
2. 可将模块视为扩展,通过将其导入可以扩展Python功能
3. 可使用变量来引用函数（以及其他大部分Python元素）。执行赋值语句foo = math.sqrt后，就可使用foo来计算平方根。例如，foo(4)的结果为2.0
'''
# ceil与floor相反，返回大于或等于给定数的最小整数
print(math.floor(32.9))  # 32
print(math.ceil(32.3))  # 33
print(math.ceil(32))  # 32

'''
 cmath 和复数
'''
# print(sqrt(-1))  # 平方根 error
# 有些平台上输出可能为 nan （not a number）
print(cmath.sqrt(-1))  # 1j (虚数)

'''
有趣的输出，使用模块turtle，它实现了海龟绘图法
'''
# # 绘制三角形
# forward(100)
# left(120)
# forward(100)
# left(120)
# forward(100)
# # 显示绘图窗口
# mainloop()

'''
字符串
'''
print('"Tom",abab')  # "Tom",abab
print("'Tom',abab")  # 'Tom',abab

# # str & repr
print(str('hello,\nPy'))
# hello
# Py
print(repr('hello,\nPy'))  # 'hello,\nPy'

# 长字符串
print('''This is a very long string. It continues here. 
And it's not over yet. "Hello, world!" 
Still here.''')
'''
This is a very long string. It continues here.
And it's not over yet. "Hello, world!"
Still here.
'''
# 常规字符串也可横跨多行。只要在行尾加上反斜杠，反斜杠和换行符将被转义，即被忽略
print("Hello, \ world!")  # Hello, / world!

# 原始字符串
path = 'C:\nowhere'
print(path)
# C:
# owhere

path = 'C:\\nowhere'  # 使用转义字符
print(path)
# C:\nowhere
