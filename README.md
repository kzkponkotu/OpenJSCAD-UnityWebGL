# OpenJSCAD-UnityWebGL

## 概要

OpenJSCADで作ったモデルをUnityWebGLに転送して表示できる．

![OpenJSCAD-UnityWebGL.html](https://i.gyazo.com/e6299a972f38430ba2b463beb6012307.gif)
## デモ

[https://kzkponkotu.github.io/OpenJSCAD-UnityWebGL/](https://kzkponkotu.github.io/OpenJSCAD-UnityWebGL/)

## 使い方

### 1. OpenJSCAD

```html
  <!-- index.html -->
  <div class="jscad-container">
    <div id="header">
      <div id="errordiv">hello</div>
    </div>

    <!-- setup display of the viewer, i.e. canvas -->
    <!-- "sphere.jscad"を書き換えるとモデルの変更が可能 -->
    <div oncontextmenu="return false;" id="viewerContext" design-url="sphere.jscad"></div>

    <!-- setup display of the status, as required by OpenJSCAD.js -->
    <!-- set display: block to display this -->
    <div id="tail">
      <div id="statusdiv"></div>
    </div>
  </div>
```

* /index.html内の61行目のdesign-url="sphere.jscad"を変えるとモデルの変更などできる．

* もっと色んなことをしたい場合は/dist/min.jsの中を書き換える．

### 2. Unity

* Unityで/UnityModelViewerを開くと確認できる．

* OpenJSCADModelゲームオブジェクトの場所にモデルが表示される．

* ModelTransmitコンポーネントのMatを変更することでモデルのマテリアルを変更できる．

* ModelTransmitコンポーネントのScaleを変更することでモデルのスケールを変更できる(Unityは1単位**1m**，OpenJSCADは1単位**1mm**，1でOpenJSCADに1000でUnityに大きさを合わせる)．

![マテリアルとスケールの変更](https://i.gyazo.com/7e9c867d80ca1ab83391aa0ff938a4ce.png)

* もっと色んなことをしたい場合はModelTransmit.csを書き換える．
