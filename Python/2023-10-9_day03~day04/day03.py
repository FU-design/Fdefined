"""
分支结构 & 循环结构
"""
# if 语句
# while 循环
# for 循环
options = ['角色','好友','背包','退出登录']
friendSquence = ['Tom','Sam','Den','Mike']
roleSquence = ['雷神','香菱','甘雨','神里绫华','胡桃']
friendOptions = ['搜寻旅行者','好友列表']

"""
游戏登入
"""
def loginGame():
    while(True):
        uname = input('用户名：')
        pwd = input('登入口令：')
        if uname == 'Fdefined' and pwd == '7777777':
            print('欢迎回来！旅行者')
            initView()
            break;
        else:
            print('前面的路以后再走吧！')

"""
初始化页面选项
"""
def initView():
    for o in options:
        print(o)
    selected = input('请选择进入选项：');
    if(selected == 0):
        initRoleSquence()

"""
初始化角色列表
"""
def initRoleSquence():
    for r in roleSquence:
        print(r)

loginGame()