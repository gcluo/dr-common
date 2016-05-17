公共样式库与书写规范
=====================

### 基本要求

除了兼容IE低版本而采用的hack写法外，其他格式全部按w3c标准格式书写。
能使用class替代的情况下，避免使用内联样式，包括js动态添加内联样式。

```
    <div style="display: none;">提交</div> <!-- 禁止 -->
    <div class="hide">提交</div> <!-- 正确 -->
```

@import只限于less使用，同时避免在css中生成@import代码。

```
    @import "less/common"; /* 允许，引用的是less文件 */
    @import "less/base.css"; /* 禁止，会生成带有@import的css代码 */
    @import (inline) "less/base.css"; /* 允许，编译时会内联base.css的内容 */
```

除normalize css外，不要针对标签直接定义样式。

```
    div { background: #000; } /* 禁止 */
```

### 书写规范和声明块

缩进使用4个空格。
选择器与"{"之间必须包含空格。
规则中有多条声明时，"{"应与选择器位于同一行，每条声明应独占一行，"}"独占一行。
只有一条声明时，整个规则可以写为一行。
属性名:前面不加空格，后面加空格，声明结尾应有;。
规则之间应以空行隔开。
css文件较长时，应对规则分组并以注释说明。

单行最大长度为80个字符，除非过长URL导致超长，对于超长的样式，在样式值的空格/逗号处分隔，并建议按逻辑分组。

```
    /* 不同属性值按逻辑分组 */
    .class {
        background: 
            transparent url(aVeryVeryVeryLongUrlIsPlacedHere)
            no-repeat 0 0;
    }

    /* 可重复多次的属性，每次重复一行 */
    .class {
        background-image:
            url(aVeryVeryVeryLongUrlIsPlacedHere) 
            url(anotherVeryVeryVeryLongUrlIsPlacedHere);
    }

    /* 类似函数的属性值可以根据javascript函数调用的缩进进行 */
    .class {
        background-image: -webkit-gradient(
            linear,
            left bottom,
            left top,
            color-stop(0.04, rgb(88,94,124)),
            color-stop(0.52, rgb(115,123,162))
        );
    }


```

less嵌套规则应位于属性声明之后。

```
    .class { 
        margin: 0;
        color: green;
        &:hover {}
        .class2 {}
    }
```

写声明时，尽量采用属性的简写形式。

```
    /* 禁止 */
    .class {
        padding-bottom: 2em;
        padding-left: 1em;
        padding-right: 1em;
        padding-top: 0;
    }

    /* 推荐 */
    .class {
        padding: 0 1em 2em;
    }
```


需要特别覆盖某一个属性、简写形式有兼容性问题的情况除外。

```
    /* 允许，因简写形式存在兼容性问题 */
    .class {
        background: url("example.png") no-repeat;
        background-size: 50% 50%;
    }
```

属性值为0时，不要添加单位。

```
    /* 不推荐 */
    .class {
        margin: 0px 5px; 
    }
    
    /* 推荐 */
    .class {
        margin: 0 5px; 
    }
```

写有浏览器厂商前缀的样式时，遵循由旧到新、由不标准到标准的顺序。最后一行必须为标准指定的无前缀格式。

```
    .class {
        display: -webkit-box; /* 2009标准 */
        display: -moz-box; /* 2009标准 */
        display: -ms-flexbox; /* 2012标准 */
        display: -webkit-flex; /* 最新标准 */
        display: flex; /* 完全符合最新标准，无前缀 */
    }
```

注释统一用’/* */‘。
缩进与下一行代码保持一致。

```
    /* Modal header */
    .modal-header {
        ...
    }

    /*
     - Modal header
     */
    .modal-header {
        ...
    }
```

位于一个代码行的末尾时，增加一个空格。

```
    .modal-header {
        color: red; /* color red */
    }
```

###命名规范

css中使用的类名应区别于js操作或其他用途的类名。

```
    <nav class="top-navbar" id="top-navbar">
        <input class="nav-input" name="user">
    </nav>
```

class和id命名全部用小写英文字母，单词间以-分隔。

```
    .errormsg {} /* 错误 */
    .errorMessage {} /* 错误 */
    .error_msg {} /* 错误 */
    .error-msg {} /* 正确 */
```

命名尽量不采用缩写。

```
    .btn-error {} /* 允许，btn缩写比较常见且无歧义，可以使用 */
    .tp {} /*禁止，存在混淆 */
```

命名应描述元素的本质类型，而非元素样式、或者实际功能。

```
    .btn-orange {} /* 不推荐 */
    .btn-submit {} /* 不推荐 */
    .btn-primary {} /* 推荐 */
```

外层元素的类名尽量具有独特性，防止css对无关元素产生影响。

```
    /* 不推荐 */
    .title { color: blue; } 
    
    /* 不推荐，名称冗余 */
    .customer-list .customer-list-item .customer-title {} 
    
    /* 推荐 */
    .customer-list li .title {} 
```

###选择器

选择器列表中有多个选择器，应每个选择器分别占据一行。

```
    .class1, 
    .class2, 
    .class3 {}
```

选择器结合符（> + ~）左右两侧加上空格。

```
    .class1 > .class2 {}
    .class1 ~ .class2 {}
```

避免使用*选择器。
选择器恰好能够选中期望的元素即可，不要添加冗余的选择器。

```
    .list ul > li {} /* 除非li内还可能嵌套有ul，否则".list li"即可 */
    .target #target-node {} /* id是页面内唯一的，无需添加target限制 */
```

选择器层级不应超过4层。
对于PC端需要兼容IE时，可以允许有额外的层级用于处理布局。

