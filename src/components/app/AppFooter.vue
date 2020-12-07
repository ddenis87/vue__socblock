<template>
  <div class="footer">
    <div class="footer-copyright">
      Copyright by Dontsov D.A. 2020
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  &-copyright {
    font-size: .45rem;
    color: grey;
  }
}
</style>