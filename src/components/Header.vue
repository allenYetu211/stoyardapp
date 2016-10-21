<template>
    <div class="header">
      <div class="seek">
        <input type="text" name="seek_information" placeholder=" seek your think people">
        <button></button>
      </div>
      <div class="tag_infor">
        <div class="people"></div>
        <div class="information"></div>
        <div class="lingur"></div>
      </div>
    </div>
</template>
<script >
</script>

<style lang="less" scoped>
.header {
  display: flex;
  flex-flow: column;
  &>div{
     flex-flow: row;
     height:2rem; 
  } 
  .seek{
    display: flex;
    input{
      flex:4;
      border:none;
      padding: 5px 2px;
      border-bottom: 1px solid #aba79c;
      text-align: center;
    }
    button{
      flex:1;
    }
  }
}
</style>