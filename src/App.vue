<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed :clipped="$vuetify.breakpoint.lgAndUp"  app v-model="drawer"  width="200">
      <v-list dense>
        <template v-for="(item, i) in navs">
            <v-divider  dark v-if="item.divider"  class="my-3"  :key="i" ></v-divider>
            <v-list-tile  v-else :key="i"  @click="go(item,i)"  >
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="grey--text">
                  {{ item.title }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
</template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat height="40px" color="grey darken-4" fixed dark app :clipped-left="$vuetify.breakpoint.lgAndUp">
      <v-toolbar-title  class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down" @click="go('/')">区块链导航&nbsp<small class="text">磨链区块链技术社区</small></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
             <v-btn icon v-for="(nav,i) in toobars" :key="i"  :to="nav.href" >
     <v-icon>{{nav.icon}}</v-icon>
   </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
         <!-- <router-view></router-view> -->
         <home/>
      </v-container>
    </v-content>
    <v-footer inset height="auto" app >
    <v-card flat tile class="transparent grey--text text-xs-center"
    >
      <v-card-text>
        <template v-for="item in links">
           <v-tooltip v-if="item.img" :key="item.icon" right lazy color="teal lighten-1" >
              <v-btn icon class="mx-3 grey--text" slot="activator">
                <v-icon>{{item.icon}}</v-icon>
              </v-btn>
              <img width="260px" height="260px" :src="item.img">
            </v-tooltip>
            <v-btn v-else :key="item.icon" icon class="mx-3 grey--text" :href="item.href">
              <v-icon size="24px">{{ item.icon }}</v-icon>
            </v-btn>
        </template>
      </v-card-text>
      <v-card-text class="pt-0" >
        磨链不是一个公司，也不是一个专门的机构，我们只是一群人因为兴趣爱好聚在一块，共同琢磨一些区块链技术相关的内容。旨在普及区块链技术。有基础和兴趣的大家深入做一些项目实践，但是前提是不商用，一起以实践学习为目的。
      </v-card-text>
      <v-card-text>
        &copy;2018 — <strong>磨链 — 区块链技术社区</strong>
      </v-card-text>
    </v-card>
      <v-speed-dial bottom right direction="top" fixed open-on-hover transition="slide-y-transition">
        <v-btn slot="activator" color="blue darken-2" dark fab hover>
        <v-icon>account_circle</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn fab dark small color="green" >
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn fab dark  small color="teal" >
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn fab dark  small color="red" >
        <v-icon>delete</v-icon>
      </v-btn>
    </v-speed-dial>
   </v-footer>
  </v-app>
</template>

<script>
import navs from '@/assets/res.json'
import home from '@/views/home'

export default {
  name: 'App',
  data: () => ({
    drawer: null,
    links: [
      {icon: 'fab fa-weibo', href: 'https://weibo.com/2095082503/'},
      {icon: 'fab fa-weixin', img: require('./assets/weixin.png')},
      {icon: 'fab fa-gitter', href: 'https://gitter.im/mochain/'},
      {icon: 'fab fa-telegram-plane', href: ''},
      {icon: 'fab fa-wordpress-simple', href: 'http://mochain.info'},
      {icon: 'fab fa-github', href: 'https://github.com/mochain'}
    ],
    navs: navs,
    items: [
      { icon: 'fa-graduation-cap', text: '区块链教程', href: '' },
      { icon: 'fa-user-secret', text: '培训机构', href: '' },
      { icon: 'fa-bitcoin', text: '各类币', href: '' },
      { icon: 'fa-comments', text: '社区', href: '' },
      { icon: 'lightbulb_outline', text: '自媒体', href: '' },
      { icon: 'fa-user-secret', text: '知名大V', href: '' },
      { icon: 'fa-blogger', text: '知名博客', href: '' },
      { icon: 'lightbulb_outline', text: '资讯媒体', href: '' },
      { icon: 'lightbulb_outline', text: '须知', href: '' },
      { icon: 'lightbulb_outline', text: '须知', href: '' },
      { icon: 'lightbulb_outline', text: '须知', href: '' },
      { icon: 'lightbulb_outline', text: '须知', href: '' },
      { icon: 'lightbulb_outline', text: '须知', href: '' },
      {
        divider: true,
        href: ''
      },
      {
        icon: 'chat_bubble',
        text: '交流',
        href: 'https://gitter.im/mochain/etheraction'
      },
      {
        icon: 'help',
        text: '帮助',
        href: 'https://gitter.im/mochain/etheraction'
      }
    ],
    toobars: [

    ]
  }),
  methods: {
    go: function (item, index) {
      if (item.url === undefined || item.url === '') {
        // 说明是内部链接，将自动调整到对应的标签
        var id = '#nav_' + index
        // 如果根据ID选择器查找，无数据，则放弃
        if (document.querySelector(id) === null) {
          return
        }
        this.$vuetify.goTo(id, {offset: -20})
      } else {
        // if (item.url.startsWith('/')) {
        //   this.$router.push({path: path})
        // } else {
        window.open(item.url)
        // }
      }
    }
  },
  components: {
    home
  }
}
</script>

<style>
.footer--fixed {
    position: absolute;
}
</style>
