import sys
print(sys.version_info)
print(sys.version) 
"""
注释
"""
print('hello world') 


import this
"""
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!

#翻译：

《Python 之禅》作者：Tim Peters

美丽总比丑陋好。
显式的比隐式的好。
简单总比复杂好。
复杂总比繁杂好。
扁平比嵌套更好。
稀疏比密集好。
可读性很重要。
特殊情况还不足以违反规则。
尽管实用性胜过纯粹性。
错误永远不应该悄无声息地过去。
除非明确沉默。
面对歧义，拒绝猜测的诱惑。
应该有一种——最好只有一种——明显的方法来做到这一点。
尽管这种方式一开始可能并不明显，除非您是荷兰人。
现在总比没有好。
尽管从来没有比“现在”更好。
如果实现很难解释，那就是个坏主意。
如果实现很容易解释，这可能是一个好主意。
命名空间是一个非常棒的想法——让我们多做一些这样的事情吧！
"""
print(this)


import turtle
"""
绘制一个红色的空心五角星 (36deg,72deg,108deg,144deg)
"""
turtle.pensize(1)
turtle.pencolor('red')

turtle.forward(50)
turtle.right(-72)

turtle.forward(50)
turtle.right(180-36)

turtle.forward(50)
turtle.right(-72)

turtle.forward(50)
turtle.right(180-36)

turtle.forward(50)
turtle.right(-72)

turtle.forward(50)
turtle.right(180-36)

turtle.forward(50)
turtle.right(-72)

turtle.forward(50)
turtle.right(180-36)

turtle.forward(50)
turtle.right(-72)
turtle.forward(50)



turtle.mainloop()