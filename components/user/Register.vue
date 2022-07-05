<template>
  <v-container grid-list-xs fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="mx-auto mt-10 elevation-12">
          <v-toolbar color="blue lighten-2">
            <v-toolbar-title>ユーザ-登録</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field
                id="inputUsername"
                v-model="username"
                name="user"
                label="ユーザー名"
                :rules="nameRules"
                prepend-icon="mdi-account"
                type="text"
              ></v-text-field>
              <v-text-field
                id="inputEmail"
                v-model="email"
                name="email"
                label="メールアドレス"
                :rules="emailRules"
                prepend-icon="mdi-email"
                type="text"
              ></v-text-field>
              <v-text-field
                id="inputPassword"
                v-model="password"
                name="password"
                label="パスワード"
                :rules="passwordRules"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="show"
              ></v-text-field>
              <v-text-field
                id="inputConfirm"
                v-model="confirm"
                name="confirm"
                label="パスワード(確認用)"
                :rules="confirmRules"
                prepend-icon="mdi-lock"
                :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showConfirm ? 'text' : 'password'"
                @click:append="showConfirmPass"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="postRegister">登録</v-btn>
            <v-btn color="primary" @click="reset">リセット</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      valid: true,
      username: '',
      email: '',
      password: '',
      confirm: '',
      showPassword: false,
      showConfirm: false,
      // バリデーション用
      nameRules: [
        (v) => !!v || '名前は必須項目です',
        (v) => (v && v.length <= 10) || '名前は１０文字以内にしてください',
      ],
      emailRules: [
        (v) => !!v || 'メールアドレスは必須項目です',
        (v) => /.+@.+\..+/.test(v) || '無効なメールアドレスです',
      ],
      passwordRules: [
        (v) => !!v || 'パスワードは必須項目です',
        (v) => (v && v.length >= 8) || 'パスワードは8文字以上にしてください',
      ],
      confirmRules: [
        (v) => v === this.password || 'パスワードと値が異なります',
      ],
    }
  },
  methods: {
    show() {
      this.showPassword = !this.showPassword
    },
    showConfirmPass() {
      this.showConfirm = !this.showConfirm
    },
    postRegister() {
      if (this.$refs.form.validate()) {
        console.log('AA')
      }
    },
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>

<style></style>
