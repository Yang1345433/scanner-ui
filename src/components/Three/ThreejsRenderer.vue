<template>
  <div>
    <div class="main" ref="box" style="
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
      ">
      <h1 v-if="loading">loading...</h1>
      <i v-if="loading" style="
          font-size: 36px;
          margin: 12px 0 8px;
          transition: transform 0.3s ease-in-out;
          will-change: transform;
        "><svg viewBox="0 0 1024 1024" width="1em" height="1em" aria-hidden="true" focusable="false"
               class="anticon-loading">
        <path
            d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z">
        </path>
      </svg></i>
    </div>
  </div>
</template>
<script lang="ts">
import {
  WebGLRenderer, //渲染器
  Scene, //场景
  PerspectiveCamera, //相机
  //颜色
  AxesHelper, //辅助线
  Points, //粒子/点
  PointsMaterial, //粒子/点材质
  BufferGeometry, //容器
  BufferAttribute,//二进制存储
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; //镜头控制
import {defineComponent, ref, watch} from "vue";

export default defineComponent({
  setup() {
    interface Point {
      x: number;
      y: number;
      z: number;
      type: number; // 假设 type 是一种可以映射到颜色的字符串
    }

    const jsonUrl = 'src/assets/pointData/points.json'; // 替换为您的 JSON 文件路径

    async function loadJsonData() {
      const response = await fetch(jsonUrl);
      const data: Point[] = await response.json();
      return data;
    }

    const pointsData = ref<Point[]>([]);

    const fetchPointsData = async () => {
      pointsData.value = await loadJsonData()
      randerFun();
      scenceFun();

      pointsFun();
      render.setSize(window.innerWidth / 2, window.innerHeight / 2);
      loading.value = false
    }

    fetchPointsData()


    const loading = ref(true);
    //提前创建好调试插件
    const box = ref<HTMLElement | null>(null); //ref获取dom
    const scence: Scene = new Scene(); //场景
    const camera = new PerspectiveCamera( //新建相机
        120, //摄像机视锥体垂直视野角度
        window.innerWidth / window.innerHeight, //摄像机视锥体长宽比
        0.1, //摄像机视锥体近端面
        10000 //摄像机视锥体远端面
    );

    let orbitControls: OrbitControls; //摄像机控制
    let render: WebGLRenderer; //渲染器
    let xAxis: AxesHelper; //坐标轴
    let points: Points; //点
    let pointsMaterial: PointsMaterial; //点样式
    let geometry: BufferGeometry; //点定义的矩形
    // 渲染器方法
    function randerFun() {
      render = new WebGLRenderer({antialias: true, alpha: true}); //新建渲染器 antialias 否执行抗锯齿
      render.setClearColor(0x000000, 1); //更改渲染器颜色为默认
    }

    // randerFun();

    //新建场景
    function scenceFun() {
      scence.name = "场景"; //场景名字
      camera.name = "相机"; //相机名字
      camera.position.set(100, 100, 100); //相机位置
      orbitControls = new OrbitControls(camera, render.domElement); //相机控制插件 实现拖拽渲染
      orbitControls.autoRotate = false;
    }

    // scenceFun();

    //坐标轴     红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴.
    function xAxisFun() {
      xAxis = new AxesHelper(600); //长度600的坐标轴
      xAxis.name = "坐标轴"; //坐标轴名字
      scence.add(xAxis); //添加实例
    }

    xAxisFun();

    function pointsFun() {
      geometry = new BufferGeometry(); //通过顶点定义集合体
      geometry.setAttribute(
          "position",
          new BufferAttribute(new Float32Array(listMap()), 3)
      );
      geometry.setAttribute(
          "color",
          new BufferAttribute(new Float32Array(geometry.attributes.position.array), 3)
      );

      pointsMaterial = new PointsMaterial({
        //点材质
        size: 2, //点大小
        vertexColors: false,//使用数组中定义的颜色值
      });
      pointsMaterial.sizeAttenuation = false; //指定点的大小是否因相机深度而衰减
      points = new Points(geometry, pointsMaterial);
      scence.add(points);
    }

    // pointsFun();

    //遍历出一个位置数组/矩阵
    function listMap() {
      let list = [];
      // for (let i = 0; i < length; i++) {
      //   //创建一千个顶点
      //   list.push(MathUtils.randFloatSpread(100)); //x randFloatSpread正负100随机数
      //   list.push(MathUtils.randFloatSpread(100)); //y
      //   list.push(MathUtils.randFloatSpread(100)); //z
      // }

      if (pointsData.value && pointsData.value.length > 0) {
        for (let point of pointsData.value) {
          list.push(point.y, point.z, point.x);
        }
      }

      console.log(list);

      return list;
    }

    //aim定时执行 动画
    const aim = () => {
      orbitControls.update();
      render.render(scence, camera); //更新试图
      requestAnimationFrame(aim); //定时器 到时间调用自己
    };
    // 定时器
    watch(loading, (e) => {
      if (!e) {
        box.value?.append(render.domElement);
        aim();
      }
    });
    //生命周期 页面加载完
    // onMounted(() => {
    //   render.setSize(window.innerWidth, window.innerHeight); //更改渲染大小
    //   // loading.value = false;
    // });
    //使画布动态大小
    // window.onresize = () => {
    //   camera.aspect = window.innerWidth / window.innerHeight; //更改比例
    //   camera.updateProjectionMatrix(); //更新摄像机投影矩阵
    //   render.setSize(window.innerWidth, window.innerHeight); //更改场景大小
    // };
    return {
      box,
      loading,
    };
  },
});
</script>
<style scoped>
.anticon-loading {
  display: inline-block;
  animation: loadingCircle 1s linear infinite;
}

@keyframes loadingCircle {

  /* 0% {
    transform: rotate(0turn);
  } */
  100% {
    transform: rotate(1turn);
  }
}

* {
  padding: 0;
  margin: 0;
}
</style>
<style scoped>
.main {
  height: 100%;
  width: 100%;
}
</style>
