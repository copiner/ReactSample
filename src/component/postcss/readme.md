### 简介
css预处理器 目前sass less等 但是自从2015年开始，

国外就流行了CSS-in-JS(典型的代表，react的styled-components)，

还有一种就是CSS Module

CSS Module示例如下：

example.css
```css

.article {
    font-size: 14px;
}
.title {
    font-size: 20px;
}
```

之后，将这些命名打乱：
```
.zxcvb{
    font-size: 14px;
}
.zxcva{
    font-size: 20px;
}
```
将之命名对应的内容，放入到JSON文件中去：

```
{
    "article": "zxcvb",
    "title": "zxcva"
}
```
之后，在js文件中运用：
```

import style from 'style.json';

class Example extends Component{
    render() {
        return (
            <div classname={style.article}>
                <div classname={style.title}></div>
            </div>
        )
    }
}

```
这样子，就描绘出了一副css module的原型。当然，我们不可能每次都需要手动去写这些东西。我们需要自动化的插件帮助我们完成这一个过程。

### PostCSS

PostCSS is a tool for transforming CSS with JS plugins. These plugins can support variables and mixins, transpile future CSS syntax, inline images, and more

你可以在使用预处理器的情况下使用它，也可以在原生的css中使用它。它都是支持的，并且它具备着一个庞大的生态系统，例如你可能常用的Autoprefixer，就是PostCSS的一个非常受欢迎的插件，被Google, Shopify, Twitter, Bootstrap和CodePen等公司广泛使用

### gulp

```javascript

// Gulpfile.js
var gulp         = require('gulp');
var postcss      = require('gulp-postcss');
var cssModules   = require('postcss-modules');
var ejs          = require('gulp-ejs');
var path         = require('path');
var fs           = require('fs');

function getJSONFromCssModules(cssFileName, json) {
  var cssName       = path.basename(cssFileName, '.css');
  var jsonFileName  = path.resolve('./build', cssName + '.json');
  fs.writeFileSync(jsonFileName, JSON.stringify(json));
}

function getClass(module, className) {
  var moduleFileName  = path.resolve('./build', module + '.json');
  var classNames      = fs.readFileSync(moduleFileName).toString();
  return JSON.parse(classNames)[className];
}

gulp.task('css', function() {
  return gulp.src('./css/post.css')
    .pipe(postcss([
      cssModules({ getJSON: getJSONFromCssModules }),
    ]))
    .pipe(gulp.dest('./build'));
});

gulp.task('html', ['css'], function() {
  return gulp.src('./html/index.ejs')
    .pipe(ejs({ className: getClass }, { ext: '.html' }))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['html']);

```

Then we run these Gulp tasks and get transformed CSS and JSON files with mangled class names. Now we can use the values from the generated JSON file in our EJS template:
```

<article class="<%= className('post', 'article') %>">
  <h1 class="<%= className('post', 'title') %>">Title</h1>
  ...
</article>

```
