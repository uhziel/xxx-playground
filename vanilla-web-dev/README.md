# vanilla-web-dev

运行环境

- `file://`。外部引用本地文件：css, ico图标可以；js 不行。
- `http://`。如果需要外部引用本地 js 文件，应运行一个本地 http server。

## css layout

- ex9-bs-layout-document.html
- ex17-flexbox.html
- ex16-float.html

## element 配置成 viewport 的 width, height

原理：height 100% 可以设置为父 height 的 100%。一路往上，最终会找到 *the initial containing block*，它是 viewport。

示例

- ex12-layout-tabliss-new-tab.html

```css
      .fullscreen {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
```

## 居中

方法一 使用 top, left, transform 实现

ex12-layout-tabliss-new-tab.html

```css
      .middle {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
```

方法二 使用 flexbox 的 justify-content, align-items

```css
      .sub-middle {
        display: flex;
        justify-content: center;
        align-items: center;
      }
```

## 文档有最大宽度限制，如果达最大，则居中显示

```css
      .document {
        width: 100%;
        max-width: 30em;
        margin: 0 auto;
      }
```

## TODO

- https://getbootstrap.com/docs/5.3/examples/cover/

参考着可以试着实现的

- https://www.ruanyifeng.com/blog/2015/07/flex-examples.html
- https://getbootstrap.com/docs/5.3/examples/carousel/
- https://linux.weixin.qq.com/
- https://www.apple.com.cn/mac-mini/ 白底黑字，蓝色链接，色彩使用的很节制。
- https://weui.io/

