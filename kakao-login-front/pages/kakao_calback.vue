<template>
  <div>로그인 중 입니다...</div>
</template>

<script>
export default {
  async mounted() {
    try {
      // code 유무 체크
      if (!this.$route.query.code) {
        return this.$router.push("/");
      }
      console.log(`code : ${this.$route.query.code}`);

      // 카카오 로그인 요청
      const body = {
        code: this.$route.query.code,
        domain: window.location.origin,
      };
      const response = await this.$axios.$post("/login", body, {});
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
