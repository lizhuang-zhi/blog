# let与const声明变量的特殊性

我们都知道通过var在全局作用域中声明的变量都会成为window对象的属性

![image-20210206204912268](/images/JS_img/image-20210206204912268.png)

但是对于let与const声明的变量来说就并不是这样的

![image-20210206204706410](/images/JS_img/image-20210206204706410.png)

从图中设置的断点可以看到用var声明的变量a与b是存在于window对象上的，也就是声明成了window对象的a属性与b属性；==而对于通过let与const声明的变量会单独开辟出一个块级作用域（Script作用域）==

所以当我们访问以let与const声明的变量时，是不可以通过window对象来访问
