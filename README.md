# Code Splitting という機能を利用して、共通利用できるモジュールのバンドルファイルを出力するサンプル

`index.js`と`about.js`で利用している`render.js`を、共通利用できるモジュールのバンドルファイルとして出力する。

モジュールである`render.js`は以下の処理を行なっている。

```js
console.log('module.js loaded');

export function render(element) {
  element.innerHTML = 'clicked!!!!!';
}
```

モジュールは dynamic import でインポートする必要がある（詳しくはコードを参照）ので以下のように動的に読み込まれる。

**index.html**

![index.html](./README_resources/index.gif)

**about.html**

![about.html](./README_resources/about.gif)

リクエスト先が同じであり、clicked!!!!! も描画されているため、どちらも共通のバンドルファイル（モジュール）が読み込まれていることがわかる。

## ビルド

```shell
parcel src/index.html src/about.html -d public
```
