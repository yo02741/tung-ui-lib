<script setup>
</script>

<template>
  <button class="login-btn">
    登入 / Login
    <img src="../../assets/icons/arrow-right-light.svg" alt="" />
  </button>
</template>

<style lang="scss" scoped>
.login-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 58px;
  min-height: 58px;
  background-image: linear-gradient(
    270deg,
    #01c776 0%,
    #019a5b 54%,
    #01834d 100%
  );
  box-shadow: 0px 5px 10px #0190554d;
  z-index: 1;
  border: 0;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      90deg,
      #01c776 0%,
      #019a5b 54%,
      #01834d 100%
    );
    border-radius: 5px;
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;
  }
  &:hover::before {
    opacity: 1;
  }
  &:focus {
    outline: 0;
    -webkit-appearance: none;
    -webkit-box-shadow: 0 0 0 0.25rem rgba(14, 173, 105, 0.3);
    box-shadow: 0 0 0 0.25rem rgba(14, 173, 105, 0.3);
  }
  img {
    position: absolute;
    top: 50%;
    right: 15px;
    width: 18px;
    transform: translateY(-50%);
    transition: all 0.3s;
  }
  &:hover img {
    transform: translate(3px, -50%);
  }
}
</style>