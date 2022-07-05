<template>
  <v-app>
    <v-app-bar color="teal accent-4" app>
      <v-toolbar-items>
        <v-btn v-for="(menu, index) in navMenus" :key="index" text>
          <NuxtLink :to="menu.link" class="black--text">
            <v-icon>{{ menu.icon }}</v-icon>
            {{ menu.name }}
          </NuxtLink>
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn v-for="(ope, opeIndex) in operations" :key="opeIndex" text>
          <NuxtLink :to="ope.link" class="black--text">
            <v-icon disable>{{ ope.icon }}</v-icon>
            {{ ope.name }}
          </NuxtLink>
        </v-btn>

        <v-menu offset-y>
          <template #activator="{ on }">
            <v-btn text v-on="on">
              <v-icon class="mr-2">mdi-account-circle</v-icon>
              ユーザメニュー
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(menu, menuIndex) in userMenus"
              :key="menuIndex"
            >
              <v-list-item-icon>
                <v-icon>{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ menu.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      // TODO linkをあとで設定する。
      navMenus: [
        { name: 'Top', icon: '', link: '/' },
        { name: 'お裾分けをする', icon: 'mdi-hand-heart', link: '' },
        { name: 'ランキング', icon: 'mdi-crown', link: '' },
      ],
      operations: [
        { name: 'サインイン', icon: 'mdi-account-plus', link: '/register' },
        { name: 'ログイン', icon: 'mdi-login', link: '/login' },
      ],
      userMenus: [
        { name: 'ユーザ設定', icon: 'mdi-cog' },
        { name: 'ユーザ登録', icon: 'mdi-account-plus' },
        { name: 'ログイン', icon: 'mdi-login' },
        { name: 'ログアウト', icon: 'mdi-logout' },
      ],
    }
  },
}
</script>

<style></style>
