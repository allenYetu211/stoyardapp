<template>
  <div class="Information">
    <ul>
      <li v-for="infor in stoyardData">
        <div class="images">
          <img :src="infor.image">
        </div>
        <div class="li-margur">
          <div class="li-information">
            <h3 class="title">
            {{infor.project}}
            <p class="year">{{infor.time_top}}</p>
            </h3>
            <p class="theUrl">{{infor.client}}</p>
            
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  data () {
    return {
      stoyardData: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      let self = this
      this.$http.get('PROJECTS/').then((response) => {
        self.stoyardData = JSON.parse(response.data)
        // console.log(self.stoyardData)
        for (let i = 0; i < self.stoyardData.length; i++) {
          self.stoyardData[i].image = 'http://www.stoyard.com' + self.stoyardData[i].image
        }
      }, (response) => {
        console.log(response.error)
      })
    })
  }
}
</script>

<style lang="scss" scrope>
@function px2rem( $px ){
  @return $px*320/$designWidth/20 + rem;
}
$designWidth : 350;

.Information{
  li{
    .images{
        position:relative;
        width:100%;
        padding-bottom: 50%;
        height: 0;
        overflow:hidden;
        img{
          width:100%;
          position:absolute;
          left: 50%;
          top:50%;
          transform:translate(-50%,-50%);
        }
    }
    .li-margur{
      padding: px2rem(5) px2rem(15);
    }
    .li-information{
      height: 0;
      padding: 0  0 25%;
      .title{
        font-size: px2rem(25);
        padding: px2rem(10) 0  0 0;
        color: #5d4e4e;
        .year{
            font-size: px2rem(14);
            padding: px2rem(10) 0;
            color: rgba(0,0,0,.4);
            display: inline-block;
            float: right;
        }
      }
      .theUrl{
        font-size: px2rem(18);
        padding: px2rem(5) 0 px2rem(15);
        font-weight:900;
        color: rgba(0,0,0,.4);
      }

    }
  }
}

</style>