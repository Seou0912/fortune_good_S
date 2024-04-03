<template>
  <a @click="loginWithkakao">
    <img src="/kakao_login_medium_narrow.png" />
  </a>
</template>

<script>
export default {
  name: "IndexPage",
  methods: {
    kakaoInit() {
      Kakao.init("c21d8de33cb805465e0f0e5de06a783c"); // kakao client key
      console.log("Kakao SDK Initialized:", window.Kakao.isInitialized());
    },
    async loginWithkakao() {
      await window.Kakao.Auth.authorize({
        redirectUri: "http://localhost:3000/kakao_callback",
      });
    },
  },
  mounted() {
    this.kakaoInit();
  },
};

//  인가 코드를 백엔드로 전송
fetch("YOUR_BACKEND_ENDPOINT", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    code: "zwNbeiM3UjlMRE0VmM2FiBgR_Z87JndmF26BKiXx3v96H-Bpab26UuIFA7oKKiUQAAABjp2JUj-t1856Xp2T3g",
  }),
});
</script>
