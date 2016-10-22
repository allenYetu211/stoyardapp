<template>
  <div class="Information">
    <ul>
      <li v-for="infor in information">
        <div class="images">
          <img :src="infor.url">
        </div>
        <div class="li-margur">
          <div class="li-information">
            <h3 class="title">
            {{infor.title}}
            <p class="year">{{infor.year}}</p>
            </h3>
            <p class="theUrl">{{infor.theUrl}}</p>
            
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
      information: [
        {
          url: '../../static/images/Vmatrix.jpg',
          title: '北京云视科技官网',
          theUrl: 'http://vmatrix.cn/',
          year: '2016'
        },
        {
          url: '../../static/images/Vmatrix.jpg',
          title: '北京云视科技官网',
          theUrl: 'http://vmatrix.cn/',
          year: '2016'
        },
        {
          url: '../../static/images/Vmatrix.jpg',
          title: '北京云视科技官网',
          theUrl: 'http://vmatrix.cn/',
          year: '2016'
        }
      ]
    }
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
      padding: 0  0 20%;
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