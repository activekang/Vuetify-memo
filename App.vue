<template>
  <v-app>
   <v-card>
    <v-toolbar
      color="cyan"
      dark
      flat
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>MemoApp</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab
            v-for="item in items"
            :key="item"
          >
           <router-link v-bind:to="item.link"> {{ item.txt }} </router-link>
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <!-- <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card> -->
      </v-tab-item>
    </v-tabs-items>
  </v-card>
    <!-- 
      <v-btn><router-link to="/">Home</router-link></v-btn>
      <v-btn><router-link to="/memo">Memo</router-link></v-btn>
      <v-btn><router-link to="/port">Portfolio</router-link></v-btn> 
    -->
    <v-content>
      <router-view/>
    </v-content>
    <v-footer
    dark
    padless
  >
   <v-card width="100%"
     class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
       Vue 웹앱 애플리케이션 vuetify UI 컴포넌트를 사용한 사이트링크 적용
       </v-card-text>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>
<script>

export default {
  name: "App",
  components: {
   // HelloWorld
  },
  data() {
    return {
         tab: null,
        items: [
          {link:'/',txt:'Home'}, 
          {link:'/memo',txt:'Memo'},
          {link:'/port',txt:'Portfolio'},
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
       
        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ]
      }
    }
  }
</script>