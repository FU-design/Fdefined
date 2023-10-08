'''
## 数据结构
是以某种方式（如通过编号）组合起来的数据
元素（如数、字符乃至其他数据结构）集合。

- python 中最基本的数据结构 --- 序列 (sequence) <===> 数组 (array) 
- python 中常用的序列：列表 和 元组 和 字符串
- 列表和元组的区别：列表是可修改的，元组是不可修改的（所以大多使用列表来定义需要更改的序列，元组则多用于表示字典键）

### tips
Python支持一种数据结构的基本概念, 名为容器( container )。容器基本上就是可包含其
他对象的对象。两种主要的容器是序列（如列表和元组）和映射（如字典）。在序列中，
每个元素都有编号, 而在映射中, 每个元素都有名称( 也叫键 )。映射将在第4章详细讨
论。有一种既不是序列也不是映射的容器, 它就是集合( set )
'''


# 有几种操作适用于所有序列
'''
## 索引 (下标)
'''

'''
## 切片 (访问特定范围内的元素)如 
      >>> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
      >>> numbers[3:6] ===> [4, 5, 6]
      $ 步长：
        >>> numbers[0:10:2] ===> [1, 3, 5, 7, 9] 
        步长为2时,将从起点和终点之间每隔一个元素提取一个元素;
        步长不能为0,否则无法向前移动,但可以为负数,即从右向左提取元素
'''

'''
## 相加 
      示例：
       >>> [1, 2, 3] + [4, 5, 6] ===> [1, 2, 3, 4, 5, 6];
       >>> 'Hello,' + 'world!' ===> 'Hello, world!';
       一般而言，不能拼接不同类型的序列。否则会报错
'''

'''
## 相乘
      将序列与数x相乘时, 将重复这个序列x次来创建一个新序列
      示例：
        >>> 'python' * 5  ===> 'pythonpythonpythonpythonpython' 
        >>> [42] * 10  ===> [42, 42, 42, 42, 42, 42, 42, 42, 42, 42
      初始化一个长度为 10 的空列表
        >>> sequence = [None] * 10
        >>> sequence = [0] * 10
'''
# 序列（字符串）乘法运算示例
sentence = input("Sentence: ")
screen_width = 80
text_width = len(sentence)
box_width = text_width + 6
left_margin = (screen_width - box_width) // 2
print()
print(' ' * left_margin + '+' + '-' * (box_width-2) + '+')
print(' ' * left_margin + '| ' + ' ' * text_width + '   |')
print(' ' * left_margin + '| ' + sentence + '   |')
print(' ' * left_margin + '| ' + ' ' * text_width + '   |')
print(' ' * left_margin + '+' + '-' * (box_width-2) + '+')
print()


'''
## 成员资格
'''
# 要检查特定的值是否包含在序列中，可使用运算符in
print('p' in 'python')  # true
print('tom' in ['tom', 'mike', 'jurry'])

# 序列成员资格示例
dataBase = [['albert', '1234'],
            ['dilbert', '4242'],
            ['smith', '7524'],
            ['jones', '9843']]

userName = input('input your name:')
pin = input('PIN code:')

if ([userName, pin] in dataBase):
    print('Access granted')
else:
    print('not found')

# 长度、最小值，最大值（内置函数 len min max ）
numbers = [100, 34, 678]
print(len(numbers))  # 3
print(max(numbers))  # 678
print(min(numbers))  # 34

# ? 函数list ----- 它实际上是一个类，而不是函数
# 可将任何序列（而不仅仅是字符串）作为list的参数
# js 中的 for(let i of 'python') let list.push(i)
print(list('python'))  # ['p', 'y', 't', 'h', 'o', 'n']

# 将字符列表（如前述代码中的字符列表）转换为字符串
# js 中的 list.join('')
print('|'.join(list('python')))  # p|y|t|h|o|n
print(''.join(list('python')))  # python


'''
## 对列表的增删改查操作
# '修改和js中的数组一样,通过索引'
# '删除 => del names[2] '
# 切片（修改值，插值，替换值）
'''
# 切片
name = list('Fdefined')

# 替换
name[1:] = list('lq')
print(name)  # ['F', 'l', 'q']

# 头插
name[:0:1] = list('is')
print(name)  # ['i', 's', 'F', 'l', 'q']

# 等价于重新赋值
name[::1] = list('is')
print(name)  # ['i', 's']

# 尾插
name[len(name):0:1] = list('X')
print(name)  # ['i', 's', 'X']


# 插入指定位置的元素不修改原列表
name[2:1] = list('V')
print(name)  # ['i', 's', 'V', 'X']

# 使用切片来删除元素
# 下述操作 <===> del name[2:3]
name[2:3] = []
print(name)  # ['i', 's', 'X']


'''
## 列表方法
'''
# append: 用于将一个对象附加到列表末尾
lst = list('1234')
print(lst.append(5))  # None
print(lst)  # ['1', '2', '3', '4', 5]


# clear: 就地清空列表的内容。
print(lst.clear())  # None
print(lst)  # []

# copy: 复制列表
tips = list('fdefined')
copyLst = tips.copy()
print(copyLst)  # ['f', 'd', 'e', 'f', 'i', 'n', 'e', 'd']
tips.append('have a apple')
print(tips)  # ['f', 'd', 'e', 'f', 'i', 'n', 'e', 'd', 'have a apple']
print(copyLst)  # ['f', 'd', 'e', 'f', 'i', 'n', 'e', 'd']

# count: 计算指定的元素在列表中出现的次数
strList = list('fdefined')
print(strList.count('e'))  # 2

# extend: 可同时将多个值附加到列表末尾（和普通 + 拼接的区别就是，extend会修改原列表，而拼接会返回一个新的列表，不会更改原列表）
aList = list('abcd')
bList = list('efgh')

print(aList.extend(bList))  # None
print(aList)  # ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

# 常规的 + 拼接
# ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'e', 'f', 'g', 'h']
print(aList + bList)
print(aList)  # ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

# index: 获取列表中存在的元素的下标（索引）
dataLst = list('flq')
print(dataLst.index('l'))  # 1
print(dataLst.index('1'))  # ! 列表中若不存在，则会直接报错

# insert: 用于将一个对象插入列表
insertedData = list('abd')
insertedData.insert(2, 'c')
print(insertedData)  # ['a', 'b', 'c', 'd']


# pop: 从列表中删除一个元素（默认为最后一个元素），并返回这一元素
# ? pop是唯一既修改列表又返回一个非None值的列表方法
print(insertedData.pop(0))  # a
print(insertedData)  # ['b', 'c', 'd']
print(insertedData.pop())  # d
print(insertedData)  # ['b', 'c']
