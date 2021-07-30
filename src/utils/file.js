import JSZip from 'jszip';
import FileSaver from 'file-saver';

const file1 = `
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
name: 'Home',
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    .router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
`;

const file2 = `
<template>
  <div class="container">
    
  </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: 'Home',
  methods: {
    redirectPage(){
      // // 中间过渡路由
      // let toPath = this.$route.query.toPath
      // if (toPath) {
      //   this.$router.replace({ path: toPath })
      //   return;
      // }
      //跳转到用户第一个页面
      const pages = this.$store.getters.permissionPages || [];
      for(const item of pages){
        if(!item.isFolder && !item.menu_hide && (item.type===1 || item.type===2)){
          if(item.type===1){ //vue 页面
            this.$router.push({
              name: item.url
            })
            return;
          }
          if(item.type===2){ //preset页面
            this.$router.push({name: 'cms', params:{preset: item.key}});
            return;
          }
        }
      };
      let email = Cookies.get('ssc_user_email');
      if(!email){ //未登录，跳到login页面
        this.$router.push({
          name: 'login'
        })
      }else{
        //找不到页面，跳转到403
        this.$router.push({
          name: '403'
        })
      }

    }
  },
  created(){
    this.redirectPage();
  }
}
</script>

`;

export const files = [file1, file2];

export function exportZip(codeStrArray) {
  const blobs = codeStrArray.map(codeStr => new Blob([codeStr], {type: 'text/plain'}));
  const zip = JSZip();
  blobs.forEach((blob, index) => {
    zip.file(`file-${index}.vue`, blob);
  });
  zip.generateAsync({type: 'blob'}).then(zipFile => {
    const fileName = 'combined.zip';
    return FileSaver.saveAs(zipFile, fileName);
  })
}

