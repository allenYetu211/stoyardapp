<template>
<div class="list-contents" 
:data-aid = "$route.params.id">
    <template v-if = "$route.name === 'mation'">
        <div class="Information">
          <!-- <img v-for="itmes in updata" :src="itmes.images"> -->
          <!-- {{itmes.images}} -->
        </div>
    </template>
    <template v-else>
      <div class="Information">
        <ul>
          <li v-for="infor in stoyardData" >
            <router-link 
             :to="{ name: 'mation', params: { id: infor.aid }}"
            >
              <div class="images"  @click="_getNewData" >
                <img  :src="infor.image" :data-aid = "infor.aid" :data-src = "infor.image">
              </div>
             </router-link>
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
</div>
</template>

<script>
// import api from '../api.js'
// import { mapState } from 'vuex'
export default{
  data () {
    return {
      stoyardData: [],
      updata: ''
    }
  },
  methods: {
    _scrollpl () {
      console.log(document.body.clientHeight)
    },
    _getNewData (event) {
      // this.updata = api.loaderContarct(event.target.dataset.aid)
      // console.log(this.updata)
      // event.target.dataset.aid
      //   this.$http.get('m/' + event.target.dataset.aid).then((response) => {
      //     let data = response.data
      //     const reg = new RegExp('', 'g')
      //     data = data.replace(reg, ' ')
      //     const rawStr = '[' + data.split('}{').join('},{') + ']'
      //     const rawArr = JSON.parse(rawStr)
      //     const jData = rawArr.reduce((data, obj) => {
      //       return Object.keys(obj).reduce((d, key) => {
      //         d[key] = obj[key]
      //         return d
      //       }, data)
      //     }, {})
      //     const uniq = []
      //     jData['images'] = jData.imgs.match(/\/upload[\w\d\/\-\.]+[jpg|jpeg|png|gif|tif|tiff|webp]/g)
      //       .filter((item) => {
      //         const exist = uniq.indexOf(item) !== -1
      //         if (exist) {
      //           return false
      //         } else {
      //           uniq.push(item)
      //           return true
      //         }
      //       })
      //     console.log(jData)
      //     this.updata = jData
      //   }, (response) => {
      //     console.log(response.error)
      //   })
    }
  },
  watch: {
    _scrollpl () {
      console.log(document.body.clientHeight)
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

<style lang="scss" scoped>
@function px2rem( $px ){
  @return $px*320/$designWidth/20 + rem;
}
$designWidth : 350;

.Information{
  ul{
    padding-top:px2rem(20);
  }
  li{
    .images{
        position:relative;
        width:100%;
        padding-bottom: 60%;
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