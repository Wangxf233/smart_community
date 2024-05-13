<template>
  <el-button size="small" icon="Refresh" circle @click="updateRefsh"></el-button>
  <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
  <el-button size="small" icon="Setting" circle @click="unFold"></el-button>

  <img :src="userStore.avatar" style="width: 24px;height: 24px; margin: 0 10px;border-radius: 50%;">
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- 抽屉组件：设置主题颜色和暗黑模式 -->
  <el-drawer v-model="flag" append-to-body>
    <template #header>
      <h4>主题设置</h4>
    </template>
    <template #default>
      <div>
        <el-form>
          <el-form-item label="主题颜色">
            <el-color-picker @change="setColor" v-model="color" size="small" show-alpha :predefine="predefineColors" />
          </el-form-item>
          <el-form-item label="暗黑模式">
            <el-switch @change="changeDark" v-model="dark" class="mt-2" style="margin-left: 24px" inline-prompt
              active-icon="MoonNight" inactive-icon="Sunny" />
          </el-form-item>
        </el-form>
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
//获取用户相关的小仓库
import useUserStore from '@/store/modules/user'
//获取骨架的小仓库
import useLayOutSettingStore from '@/store/modules/setting';
let layOutSettingStore = useLayOutSettingStore();
let userStore = useUserStore();
//获取路由器对象
let $router = useRouter();
//获取路由对象
let $route = useRoute();
//收集开关的数据
let dark = ref<boolean>(false);
//设置抽屉显示与隐藏
let flag = ref<boolean>(false);
//刷新按钮点击回调
const updateRefsh = () => {
  layOutSettingStore.refsh = !layOutSettingStore.refsh
}
//全屏按钮点击的回调
const fullScreen = () => {
  //DOM对象的一个属性：可以用来判断当前是不是全屏模式[全屏：true,不是全屏：false]
  let full = document.fullscreenElement;
  //切换为全屏模式
  if (!full) {
    //文档根节点的方法requestFullscreen,实现全屏模式
    document.documentElement.requestFullscreen();
  } else {
    //变为不是全屏模式->退出全屏模式
    document.exitFullscreen();
  }
}
//退出登录点击回调
const logout = async () => {
  //1.需要向服务器发请求【退出登录接口】
  //2.仓库中关于用户相关的数据清空[token|username|avatar]
  //3.跳转到登录页面
  await userStore.userLogout();
  //跳转到登录页面
  $router.push({ path: '/login', query: { redirect: $route.path } })
}
//颜色组件的数据
const color = ref('rgba(255, 69, 0, 0.68)')
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])

//switch开关的change时间进行暗黑模式的切换
const changeDark = () => {
  //获取html根节点
  let html = document.documentElement;
  //判断html标签是否有类名dark
  dark.value ? html.className = 'dark' : html.className = '';
}

//主题颜色的设置
const setColor = () => {
  //通知js修改根节点的样式对象的属性与属性值
  console.log(123);

  const html = document.documentElement;
  html.style.setProperty('--el-color-primary', color.value);
}

//点击按钮抽屉展开
const unFold = () => {
  flag.value = true;
}
</script>

<script lang="ts">
export default {
  name: 'Setting'
}
</script>
<style scoped></style>